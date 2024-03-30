import { VNode, VNodeProps, VNodeTypes, createVNode } from "./vnode";

export function h(
  type: VNodeTypes,
  props: VNodeProps,
  children: (VNode | string)[],
) {
  return createVNode(type, props, children);
}