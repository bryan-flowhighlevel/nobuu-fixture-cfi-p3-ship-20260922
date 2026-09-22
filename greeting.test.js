import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { greeting } from './greeting.js';

test('the page heading is the greeting', () => {
  const page = fs.readFileSync(new URL('./site/index.html', import.meta.url), 'utf8');
  assert.match(page, new RegExp(`<h1 id="greeting">${greeting}</h1>`));
});
