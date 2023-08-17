import { jsx as p } from '../../../_virtual/jsx-runtime.js';
import { TextLink as l } from '@contentful/f36-components';
const u = (o) => {
  const {
      body: i,
      substring: n,
      onClick: c = () => {},
      hyperLinkHref: k,
      icon: s,
      alignIcon: f,
    } = o,
    L = (t) =>
      p(
        l,
        {
          onClick: c,
          href: k,
          target: '_blank',
          rel: 'noopener noreferer',
          icon: s,
          alignIcon: f,
          children: n,
        },
        `textLink-${t}`
      );
  return (() => i.split(n).reduce((a, r, e) => (e ? a.concat(L(e), r) : [r]), []))();
};
export { u as default };
