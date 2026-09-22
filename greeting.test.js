import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { greeting } from './greeting.js';

test('the page heading is the greeting', () => {
  const page = fs.readFileSync(new URL('./site/index.html', import.meta.url), 'utf8');
  assert.ok(page.includes(`<h1 id="greeting">${greeting}</h1>`), `site/index.html should show: ${greeting}`);
});
