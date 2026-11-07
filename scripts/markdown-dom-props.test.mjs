import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { test } from 'node:test';
import ReactMarkdown from 'react-markdown';
import { omitAstNode, withoutAstNode } from '../src/lib/markdownDomProps.ts';

test('omitAstNode drops node and keeps real HTML attributes', () => {
  const clean = omitAstNode({
    node: { type: 'element' },
    href: 'https://nestliving.vn',
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'prose-a',
  });
  assert.equal('node' in clean, false);
  assert.equal(clean.href, 'https://nestliving.vn');
  assert.equal(clean.target, '_blank');
  assert.equal(clean.rel, 'noopener noreferrer');
  assert.equal(clean.className, 'prose-a');
});

test('custom markdown renderers do not leak node onto DOM, including Nest Living links', () => {
  const components = withoutAstNode({
    h2: ({ children, ...props }) => createElement('h2', props, children),
    a: ({ children, href, ...props }) => {
      if (typeof href === 'string' && href.startsWith('http')) {
        return createElement('a', { href, target: '_blank', rel: 'noopener noreferrer', ...props }, children);
      }
      return createElement('a', { href, ...props }, children);
    },
  });
  const markdown =
    '## Where to Search\n\nFor an agency option, we recommend [Nest Living: apartments for rent in Hanoi, Ho Chi Minh City and Da Nang](https://nestliving.vn).';
  const html = renderToStaticMarkup(createElement(ReactMarkdown, { components }, markdown));

  assert.doesNotMatch(html, /\snode=/);
  assert.match(
    html,
    /<a href="https:\/\/nestliving\.vn" target="_blank" rel="noopener noreferrer">Nest Living: apartments for rent in Hanoi, Ho Chi Minh City and Da Nang<\/a>/
  );
  assert.match(html, /<h2>Where to Search<\/h2>/);
});
