// news-image-20261127 — "The World in One Page", Friday 27 November 2026.
// Node 22, standard library only. The entry image is the entry.png beside this
// file (a 1024x1024 broadsheet rendered from poster.html); this program copies
// it to /output/entry.png. Outside the grader, MAKEFUN_OUTPUT_DIR stands in
// for /output, e.g.: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
const size = statSync(dest).size;
if (size > 1048576) throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate`);
console.log('wrote', dest, size, 'bytes');
