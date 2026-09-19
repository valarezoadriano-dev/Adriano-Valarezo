import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

function createPng(width, height, getPixel) {
  const rowSize = width * 4 + 1;
  const rawData = Buffer.alloc(rowSize * height);
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter byte: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }

  function crc32(buf) {
    let crc = -1;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ (-1)) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const toCrc = Buffer.concat([typeBuf, data]);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc32(toCrc), 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function renderBrandIcon(x, y, w, h) {
  // Normalize coordinates to 0..100
  const nx = (x / w) * 100;
  const ny = (y / h) * 100;

  // Squircle check (radius ~22)
  const margin = 3;
  const rad = 22;
  const minX = margin + rad;
  const maxX = 100 - margin - rad;
  const minY = margin + rad;
  const maxY = 100 - margin - rad;

  let insideSquircle = true;
  if (nx < minX && ny < minY) {
    insideSquircle = Math.hypot(nx - minX, ny - minY) <= rad;
  } else if (nx > maxX && ny < minY) {
    insideSquircle = Math.hypot(nx - maxX, ny - minY) <= rad;
  } else if (nx < minX && ny > maxY) {
    insideSquircle = Math.hypot(nx - minX, ny - maxY) <= rad;
  } else if (nx > maxX && ny > maxY) {
    insideSquircle = Math.hypot(nx - maxX, ny - maxY) <= rad;
  } else if (nx < margin || nx > 100 - margin || ny < margin || ny > 100 - margin) {
    insideSquircle = false;
  }

  if (!insideSquircle) {
    return [0, 0, 0, 0]; // Transparent
  }

  // Base background: Deep Forest Green (#022c22)
  let r = 2, g = 44, b = 34, a = 255;

  // Outer border
  const borderDist = Math.min(nx - margin, 100 - margin - nx, ny - margin, 100 - margin - ny);
  if (borderDist < 2.2) {
    return [16, 185, 129, 255]; // Emerald border #10B981
  }

  // Triangle Delta coordinates: Top (50, 18), Bottom Right (84, 78), Bottom Left (16, 78)
  // Distance to triangle lines:
  // Line 1: (16, 78) to (84, 78) -> y = 78, x in [16, 84]
  // Line 2: (16, 78) to (50, 18)
  // Line 3: (84, 78) to (50, 18)
  function distToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const l2 = dx * dx + dy * dy;
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * dx + (py - y1) * dy) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  }

  const d1 = distToSegment(nx, ny, 16, 78, 84, 78);
  const d2 = distToSegment(nx, ny, 16, 78, 50, 18);
  const d3 = distToSegment(nx, ny, 84, 78, 50, 18);
  const minTriDist = Math.min(d1, d2, d3);

  // Triangle stroke width ~ 6
  if (minTriDist < 3.2) {
    // Emerald stroke (#10b981 to #34d399)
    return [16, 185, 129, 255];
  }

  // Seed / node at (50, 71) r=4
  if (Math.hypot(nx - 50, ny - 71) <= 4.2) {
    return [245, 158, 11, 255]; // Gold #f59e0b
  }

  // Apical bud at (50, 40) r=2.6
  if (Math.hypot(nx - 50, ny - 40) <= 2.8) {
    return [245, 158, 11, 255]; // Gold #f59e0b
  }

  // Vertices accent dots
  if (Math.hypot(nx - 50, ny - 18) <= 2.5 || Math.hypot(nx - 16, ny - 78) <= 2.5 || Math.hypot(nx - 84, ny - 78) <= 2.5) {
    return [245, 158, 11, 255]; // Gold #f59e0b
  }

  // Stem: vertical line from (50, 71) to (50, 40)
  if (nx >= 48.0 && nx <= 52.0 && ny >= 40 && ny <= 71) {
    return [167, 243, 208, 255]; // Light mint #a7f3d0
  }

  // Left leaf (between 36 and 50 in x, 38 and 56 in y)
  // Approximate ellipse/petal for raster representation
  const leftDist = Math.hypot((nx - 43) * 1.2, ny - 47);
  if (leftDist < 6.5 && nx <= 50) {
    return [52, 211, 153, 255]; // Vivid emerald leaf
  }

  // Right leaf (between 50 and 64 in x, 30 and 48 in y)
  const rightDist = Math.hypot((nx - 57) * 1.2, ny - 39);
  if (rightDist < 6.5 && nx >= 50) {
    return [110, 231, 183, 255]; // Soft bright emerald leaf
  }

  return [r, g, b, a];
}

// Generate 32x32 for favicon.png
const png32 = createPng(32, 32, renderBrandIcon);
fs.writeFileSync('public/favicon.png', png32);

// Generate 180x180 for apple-touch-icon.png
const png180 = createPng(180, 180, renderBrandIcon);
fs.writeFileSync('public/apple-touch-icon.png', png180);

// Generate 192x192 for android / PWA
const png192 = createPng(192, 192, renderBrandIcon);
fs.writeFileSync('public/icon-192.png', png192);

// Generate ICO wrapping the 32x32 PNG
// ICO header: 6 bytes
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // Reserved
icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
icoHeader.writeUInt16LE(1, 4); // Number of images = 1

// ICO Directory entry: 16 bytes
const icoEntry = Buffer.alloc(16);
icoEntry.writeUInt8(32, 0); // Width 32
icoEntry.writeUInt8(32, 1); // Height 32
icoEntry.writeUInt8(0, 2);  // Colors
icoEntry.writeUInt8(0, 3);  // Reserved
icoEntry.writeUInt16LE(1, 4); // Color planes
icoEntry.writeUInt16LE(32, 6); // Bits per pixel
icoEntry.writeUInt32LE(png32.length, 8); // Image size in bytes
icoEntry.writeUInt32LE(22, 12); // Offset to image data (6 + 16 = 22)

const icoFile = Buffer.concat([icoHeader, icoEntry, png32]);
fs.writeFileSync('public/favicon.ico', icoFile);

console.log('Successfully generated public/favicon.png, public/apple-touch-icon.png, public/icon-192.png, public/favicon.ico');
