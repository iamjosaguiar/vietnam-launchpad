import { createElement, type FunctionComponent } from 'react';
import type { Components } from 'react-markdown';

/** Drop react-markdown's internal AST `node` so it is not spread onto DOM elements. */
export function omitAstNode<T extends Record<string, unknown>>(props: T): Omit<T, 'node'> {
  const rest = { ...props };
  delete rest.node;
  return rest;
}

export function withoutAstNode(components: Components = {}): Components {
  const wrapped: Record<string, FunctionComponent<Record<string, unknown>>> = {};
  for (const [tag, Comp] of Object.entries(components)) {
    if (typeof Comp !== 'function') {
      continue;
    }
    const Component = Comp as FunctionComponent<Record<string, unknown>>;
    wrapped[tag] = (props: Record<string, unknown>) =>
      createElement(Component, omitAstNode(props));
  }
  return wrapped as Components;
}
