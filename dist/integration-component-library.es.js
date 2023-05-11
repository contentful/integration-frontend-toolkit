var Yo = Object.defineProperty;
var Uo = (i, t, e) =>
  t in i ? Yo(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (i[t] = e);
var O = (i, t, e) => (Uo(i, typeof t != 'symbol' ? t + '' : t, e), e);
import ci, { forwardRef as Es, useRef as xn, useEffect as Jt } from 'react';
import { TextLink as Xo } from '@contentful/f36-components';
import kt from '@contentful/f36-tokens';
import { css as Ko } from '@emotion/css';
var Ti = { exports: {} },
  se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function qo() {
  if (yn) return se;
  yn = 1;
  var i = ci,
    t = Symbol.for('react.element'),
    e = Symbol.for('react.fragment'),
    n = Object.prototype.hasOwnProperty,
    s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, c) {
    var h,
      f = {},
      d = null,
      g = null;
    c !== void 0 && (d = '' + c),
      l.key !== void 0 && (d = '' + l.key),
      l.ref !== void 0 && (g = l.ref);
    for (h in l) n.call(l, h) && !o.hasOwnProperty(h) && (f[h] = l[h]);
    if (a && a.defaultProps) for (h in ((l = a.defaultProps), l)) f[h] === void 0 && (f[h] = l[h]);
    return { $$typeof: t, type: a, key: d, ref: g, props: f, _owner: s.current };
  }
  return (se.Fragment = e), (se.jsx = r), (se.jsxs = r), se;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Go() {
  return (
    vn ||
      ((vn = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var i = ci,
            t = Symbol.for('react.element'),
            e = Symbol.for('react.portal'),
            n = Symbol.for('react.fragment'),
            s = Symbol.for('react.strict_mode'),
            o = Symbol.for('react.profiler'),
            r = Symbol.for('react.provider'),
            a = Symbol.for('react.context'),
            l = Symbol.for('react.forward_ref'),
            c = Symbol.for('react.suspense'),
            h = Symbol.for('react.suspense_list'),
            f = Symbol.for('react.memo'),
            d = Symbol.for('react.lazy'),
            g = Symbol.for('react.offscreen'),
            p = Symbol.iterator,
            b = '@@iterator';
          function m(u) {
            if (u === null || typeof u != 'object') return null;
            var x = (p && u[p]) || u[b];
            return typeof x == 'function' ? x : null;
          }
          var _ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function y(u) {
            {
              for (var x = arguments.length, k = new Array(x > 1 ? x - 1 : 0), P = 1; P < x; P++)
                k[P - 1] = arguments[P];
              M('error', u, k);
            }
          }
          function M(u, x, k) {
            {
              var P = _.ReactDebugCurrentFrame,
                L = P.getStackAddendum();
              L !== '' && ((x += '%s'), (k = k.concat([L])));
              var B = k.map(function (A) {
                return String(A);
              });
              B.unshift('Warning: ' + x), Function.prototype.apply.call(console[u], console, B);
            }
          }
          var w = !1,
            v = !1,
            T = !1,
            S = !1,
            C = !1,
            D;
          D = Symbol.for('react.module.reference');
          function N(u) {
            return !!(
              typeof u == 'string' ||
              typeof u == 'function' ||
              u === n ||
              u === o ||
              C ||
              u === s ||
              u === c ||
              u === h ||
              S ||
              u === g ||
              w ||
              v ||
              T ||
              (typeof u == 'object' &&
                u !== null &&
                (u.$$typeof === d ||
                  u.$$typeof === f ||
                  u.$$typeof === r ||
                  u.$$typeof === a ||
                  u.$$typeof === l || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  u.$$typeof === D ||
                  u.getModuleId !== void 0))
            );
          }
          function W(u, x, k) {
            var P = u.displayName;
            if (P) return P;
            var L = x.displayName || x.name || '';
            return L !== '' ? k + '(' + L + ')' : k;
          }
          function H(u) {
            return u.displayName || 'Context';
          }
          function X(u) {
            if (u == null) return null;
            if (
              (typeof u.tag == 'number' &&
                y(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                ),
              typeof u == 'function')
            )
              return u.displayName || u.name || null;
            if (typeof u == 'string') return u;
            switch (u) {
              case n:
                return 'Fragment';
              case e:
                return 'Portal';
              case o:
                return 'Profiler';
              case s:
                return 'StrictMode';
              case c:
                return 'Suspense';
              case h:
                return 'SuspenseList';
            }
            if (typeof u == 'object')
              switch (u.$$typeof) {
                case a:
                  var x = u;
                  return H(x) + '.Consumer';
                case r:
                  var k = u;
                  return H(k._context) + '.Provider';
                case l:
                  return W(u, u.render, 'ForwardRef');
                case f:
                  var P = u.displayName || null;
                  return P !== null ? P : X(u.type) || 'Memo';
                case d: {
                  var L = u,
                    B = L._payload,
                    A = L._init;
                  try {
                    return X(A(B));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var J = Object.assign,
            z = 0,
            K,
            Q,
            It,
            Ft,
            gt,
            zt,
            pt;
          function St() {}
          St.__reactDisabledLog = !0;
          function Bt() {
            {
              if (z === 0) {
                (K = console.log),
                  (Q = console.info),
                  (It = console.warn),
                  (Ft = console.error),
                  (gt = console.group),
                  (zt = console.groupCollapsed),
                  (pt = console.groupEnd);
                var u = {
                  configurable: !0,
                  enumerable: !0,
                  value: St,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: u,
                  log: u,
                  warn: u,
                  error: u,
                  group: u,
                  groupCollapsed: u,
                  groupEnd: u,
                });
              }
              z++;
            }
          }
          function jt() {
            {
              if ((z--, z === 0)) {
                var u = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: J({}, u, {
                    value: K,
                  }),
                  info: J({}, u, {
                    value: Q,
                  }),
                  warn: J({}, u, {
                    value: It,
                  }),
                  error: J({}, u, {
                    value: Ft,
                  }),
                  group: J({}, u, {
                    value: gt,
                  }),
                  groupCollapsed: J({}, u, {
                    value: zt,
                  }),
                  groupEnd: J({}, u, {
                    value: pt,
                  }),
                });
              }
              z < 0 &&
                y('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
            }
          }
          var mt = _.ReactCurrentDispatcher,
            ui;
          function De(u, x, k) {
            {
              if (ui === void 0)
                try {
                  throw Error();
                } catch (L) {
                  var P = L.stack.trim().match(/\n( *(at )?)/);
                  ui = (P && P[1]) || '';
                }
              return (
                `
` +
                ui +
                u
              );
            }
          }
          var gi = !1,
            Re;
          {
            var ko = typeof WeakMap == 'function' ? WeakMap : Map;
            Re = new ko();
          }
          function on(u, x) {
            if (!u || gi) return '';
            {
              var k = Re.get(u);
              if (k !== void 0) return k;
            }
            var P;
            gi = !0;
            var L = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var B;
            (B = mt.current), (mt.current = null), Bt();
            try {
              if (x) {
                var A = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(A.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(A, []);
                  } catch (bt) {
                    P = bt;
                  }
                  Reflect.construct(u, [], A);
                } else {
                  try {
                    A.call();
                  } catch (bt) {
                    P = bt;
                  }
                  u.call(A.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (bt) {
                  P = bt;
                }
                u();
              }
            } catch (bt) {
              if (bt && P && typeof bt.stack == 'string') {
                for (
                  var R = bt.stack.split(`
`),
                    tt = P.stack.split(`
`),
                    Y = R.length - 1,
                    q = tt.length - 1;
                  Y >= 1 && q >= 0 && R[Y] !== tt[q];

                )
                  q--;
                for (; Y >= 1 && q >= 0; Y--, q--)
                  if (R[Y] !== tt[q]) {
                    if (Y !== 1 || q !== 1)
                      do
                        if ((Y--, q--, q < 0 || R[Y] !== tt[q])) {
                          var at =
                            `
` + R[Y].replace(' at new ', ' at ');
                          return (
                            u.displayName &&
                              at.includes('<anonymous>') &&
                              (at = at.replace('<anonymous>', u.displayName)),
                            typeof u == 'function' && Re.set(u, at),
                            at
                          );
                        }
                      while (Y >= 1 && q >= 0);
                    break;
                  }
              }
            } finally {
              (gi = !1), (mt.current = B), jt(), (Error.prepareStackTrace = L);
            }
            var Zt = u ? u.displayName || u.name : '',
              _n = Zt ? De(Zt) : '';
            return typeof u == 'function' && Re.set(u, _n), _n;
          }
          function wo(u, x, k) {
            return on(u, !1);
          }
          function Mo(u) {
            var x = u.prototype;
            return !!(x && x.isReactComponent);
          }
          function Ae(u, x, k) {
            if (u == null) return '';
            if (typeof u == 'function') return on(u, Mo(u));
            if (typeof u == 'string') return De(u);
            switch (u) {
              case c:
                return De('Suspense');
              case h:
                return De('SuspenseList');
            }
            if (typeof u == 'object')
              switch (u.$$typeof) {
                case l:
                  return wo(u.render);
                case f:
                  return Ae(u.type, x, k);
                case d: {
                  var P = u,
                    L = P._payload,
                    B = P._init;
                  try {
                    return Ae(B(L), x, k);
                  } catch {}
                }
              }
            return '';
          }
          var Le = Object.prototype.hasOwnProperty,
            rn = {},
            an = _.ReactDebugCurrentFrame;
          function Ee(u) {
            if (u) {
              var x = u._owner,
                k = Ae(u.type, u._source, x ? x.type : null);
              an.setExtraStackFrame(k);
            } else an.setExtraStackFrame(null);
          }
          function So(u, x, k, P, L) {
            {
              var B = Function.call.bind(Le);
              for (var A in u)
                if (B(u, A)) {
                  var R = void 0;
                  try {
                    if (typeof u[A] != 'function') {
                      var tt = Error(
                        (P || 'React class') +
                          ': ' +
                          k +
                          ' type `' +
                          A +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof u[A] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                      );
                      throw ((tt.name = 'Invariant Violation'), tt);
                    }
                    R = u[A](x, A, P, k, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                  } catch (Y) {
                    R = Y;
                  }
                  R &&
                    !(R instanceof Error) &&
                    (Ee(L),
                    y(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      P || 'React class',
                      k,
                      A,
                      typeof R
                    ),
                    Ee(null)),
                    R instanceof Error &&
                      !(R.message in rn) &&
                      ((rn[R.message] = !0),
                      Ee(L),
                      y('Failed %s type: %s', k, R.message),
                      Ee(null));
                }
            }
          }
          var Co = Array.isArray;
          function pi(u) {
            return Co(u);
          }
          function Po(u) {
            {
              var x = typeof Symbol == 'function' && Symbol.toStringTag,
                k = (x && u[Symbol.toStringTag]) || u.constructor.name || 'Object';
              return k;
            }
          }
          function Oo(u) {
            try {
              return ln(u), !1;
            } catch {
              return !0;
            }
          }
          function ln(u) {
            return '' + u;
          }
          function cn(u) {
            if (Oo(u))
              return (
                y(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  Po(u)
                ),
                ln(u)
              );
          }
          var ne = _.ReactCurrentOwner,
            To = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            hn,
            fn,
            mi;
          mi = {};
          function Do(u) {
            if (Le.call(u, 'ref')) {
              var x = Object.getOwnPropertyDescriptor(u, 'ref').get;
              if (x && x.isReactWarning) return !1;
            }
            return u.ref !== void 0;
          }
          function Ro(u) {
            if (Le.call(u, 'key')) {
              var x = Object.getOwnPropertyDescriptor(u, 'key').get;
              if (x && x.isReactWarning) return !1;
            }
            return u.key !== void 0;
          }
          function Ao(u, x) {
            if (typeof u.ref == 'string' && ne.current && x && ne.current.stateNode !== x) {
              var k = X(ne.current.type);
              mi[k] ||
                (y(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  X(ne.current.type),
                  u.ref
                ),
                (mi[k] = !0));
            }
          }
          function Lo(u, x) {
            {
              var k = function () {
                hn ||
                  ((hn = !0),
                  y(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    x
                  ));
              };
              (k.isReactWarning = !0),
                Object.defineProperty(u, 'key', {
                  get: k,
                  configurable: !0,
                });
            }
          }
          function Eo(u, x) {
            {
              var k = function () {
                fn ||
                  ((fn = !0),
                  y(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    x
                  ));
              };
              (k.isReactWarning = !0),
                Object.defineProperty(u, 'ref', {
                  get: k,
                  configurable: !0,
                });
            }
          }
          var Io = function (u, x, k, P, L, B, A) {
            var R = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: t,
              // Built-in properties that belong on the element
              type: u,
              key: x,
              ref: k,
              props: A,
              // Record the component responsible for creating this element.
              _owner: B,
            };
            return (
              (R._store = {}),
              Object.defineProperty(R._store, 'validated', {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(R, '_self', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: P,
              }),
              Object.defineProperty(R, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: L,
              }),
              Object.freeze && (Object.freeze(R.props), Object.freeze(R)),
              R
            );
          };
          function Fo(u, x, k, P, L) {
            {
              var B,
                A = {},
                R = null,
                tt = null;
              k !== void 0 && (cn(k), (R = '' + k)),
                Ro(x) && (cn(x.key), (R = '' + x.key)),
                Do(x) && ((tt = x.ref), Ao(x, L));
              for (B in x) Le.call(x, B) && !To.hasOwnProperty(B) && (A[B] = x[B]);
              if (u && u.defaultProps) {
                var Y = u.defaultProps;
                for (B in Y) A[B] === void 0 && (A[B] = Y[B]);
              }
              if (R || tt) {
                var q = typeof u == 'function' ? u.displayName || u.name || 'Unknown' : u;
                R && Lo(A, q), tt && Eo(A, q);
              }
              return Io(u, R, tt, L, P, ne.current, A);
            }
          }
          var bi = _.ReactCurrentOwner,
            dn = _.ReactDebugCurrentFrame;
          function Gt(u) {
            if (u) {
              var x = u._owner,
                k = Ae(u.type, u._source, x ? x.type : null);
              dn.setExtraStackFrame(k);
            } else dn.setExtraStackFrame(null);
          }
          var _i;
          _i = !1;
          function xi(u) {
            return typeof u == 'object' && u !== null && u.$$typeof === t;
          }
          function un() {
            {
              if (bi.current) {
                var u = X(bi.current.type);
                if (u)
                  return (
                    `

Check the render method of \`` +
                    u +
                    '`.'
                  );
              }
              return '';
            }
          }
          function zo(u) {
            {
              if (u !== void 0) {
                var x = u.fileName.replace(/^.*[\\\/]/, ''),
                  k = u.lineNumber;
                return (
                  `

Check your code at ` +
                  x +
                  ':' +
                  k +
                  '.'
                );
              }
              return '';
            }
          }
          var gn = {};
          function Bo(u) {
            {
              var x = un();
              if (!x) {
                var k = typeof u == 'string' ? u : u.displayName || u.name;
                k &&
                  (x =
                    `

Check the top-level render call using <` +
                    k +
                    '>.');
              }
              return x;
            }
          }
          function pn(u, x) {
            {
              if (!u._store || u._store.validated || u.key != null) return;
              u._store.validated = !0;
              var k = Bo(x);
              if (gn[k]) return;
              gn[k] = !0;
              var P = '';
              u &&
                u._owner &&
                u._owner !== bi.current &&
                (P = ' It was passed a child from ' + X(u._owner.type) + '.'),
                Gt(u),
                y(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  k,
                  P
                ),
                Gt(null);
            }
          }
          function mn(u, x) {
            {
              if (typeof u != 'object') return;
              if (pi(u))
                for (var k = 0; k < u.length; k++) {
                  var P = u[k];
                  xi(P) && pn(P, x);
                }
              else if (xi(u)) u._store && (u._store.validated = !0);
              else if (u) {
                var L = m(u);
                if (typeof L == 'function' && L !== u.entries)
                  for (var B = L.call(u), A; !(A = B.next()).done; ) xi(A.value) && pn(A.value, x);
              }
            }
          }
          function jo(u) {
            {
              var x = u.type;
              if (x == null || typeof x == 'string') return;
              var k;
              if (typeof x == 'function') k = x.propTypes;
              else if (
                typeof x == 'object' &&
                (x.$$typeof === l || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  x.$$typeof === f)
              )
                k = x.propTypes;
              else return;
              if (k) {
                var P = X(x);
                So(k, u.props, 'prop', P, u);
              } else if (x.PropTypes !== void 0 && !_i) {
                _i = !0;
                var L = X(x);
                y(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  L || 'Unknown'
                );
              }
              typeof x.getDefaultProps == 'function' &&
                !x.getDefaultProps.isReactClassApproved &&
                y(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                );
            }
          }
          function No(u) {
            {
              for (var x = Object.keys(u.props), k = 0; k < x.length; k++) {
                var P = x[k];
                if (P !== 'children' && P !== 'key') {
                  Gt(u),
                    y(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      P
                    ),
                    Gt(null);
                  break;
                }
              }
              u.ref !== null &&
                (Gt(u), y('Invalid attribute `ref` supplied to `React.Fragment`.'), Gt(null));
            }
          }
          function bn(u, x, k, P, L, B) {
            {
              var A = N(u);
              if (!A) {
                var R = '';
                (u === void 0 ||
                  (typeof u == 'object' && u !== null && Object.keys(u).length === 0)) &&
                  (R +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var tt = zo(L);
                tt ? (R += tt) : (R += un());
                var Y;
                u === null
                  ? (Y = 'null')
                  : pi(u)
                  ? (Y = 'array')
                  : u !== void 0 && u.$$typeof === t
                  ? ((Y = '<' + (X(u.type) || 'Unknown') + ' />'),
                    (R = ' Did you accidentally export a JSX literal instead of a component?'))
                  : (Y = typeof u),
                  y(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    Y,
                    R
                  );
              }
              var q = Fo(u, x, k, L, B);
              if (q == null) return q;
              if (A) {
                var at = x.children;
                if (at !== void 0)
                  if (P)
                    if (pi(at)) {
                      for (var Zt = 0; Zt < at.length; Zt++) mn(at[Zt], u);
                      Object.freeze && Object.freeze(at);
                    } else
                      y(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      );
                  else mn(at, u);
              }
              return u === n ? No(q) : jo(q), q;
            }
          }
          function Wo(u, x, k) {
            return bn(u, x, k, !0);
          }
          function Vo(u, x, k) {
            return bn(u, x, k, !1);
          }
          var Ho = Vo,
            $o = Wo;
          (oe.Fragment = n), (oe.jsx = Ho), (oe.jsxs = $o);
        })()),
    oe
  );
}
process.env.NODE_ENV === 'production' ? (Ti.exports = qo()) : (Ti.exports = Go());
var Di = Ti.exports;
const vh = (i) => {
  const {
      body: t,
      substring: e,
      onClick: n = () => {},
      hyperLinkHref: s,
      icon: o,
      alignIcon: r,
    } = i,
    a = (c) =>
      /* @__PURE__ */ Di.jsx(
        Xo,
        {
          onClick: n,
          href: s,
          target: '_blank',
          rel: 'noopener noreferer',
          icon: o,
          alignIcon: r,
          children: e,
        },
        `textLink-${c}`
      );
  return (() => t.split(e).reduce((h, f, d) => (d ? h.concat(a(d), f) : [f]), []))();
};
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function Oe(i) {
  return (i + 0.5) | 0;
}
const Pt = (i, t, e) => Math.max(Math.min(i, e), t);
function fe(i) {
  return Pt(Oe(i * 2.55), 0, 255);
}
function Rt(i) {
  return Pt(Oe(i * 255), 0, 255);
}
function vt(i) {
  return Pt(Oe(i / 2.55) / 100, 0, 1);
}
function kn(i) {
  return Pt(Oe(i * 100), 0, 100);
}
const lt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Ri = [...'0123456789ABCDEF'],
  Zo = (i) => Ri[i & 15],
  Jo = (i) => Ri[(i & 240) >> 4] + Ri[i & 15],
  Ie = (i) => (i & 240) >> 4 === (i & 15),
  Qo = (i) => Ie(i.r) && Ie(i.g) && Ie(i.b) && Ie(i.a);
function tr(i) {
  var t = i.length,
    e;
  return (
    i[0] === '#' &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (lt[i[1]] * 17),
            g: 255 & (lt[i[2]] * 17),
            b: 255 & (lt[i[3]] * 17),
            a: t === 5 ? lt[i[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (lt[i[1]] << 4) | lt[i[2]],
            g: (lt[i[3]] << 4) | lt[i[4]],
            b: (lt[i[5]] << 4) | lt[i[6]],
            a: t === 9 ? (lt[i[7]] << 4) | lt[i[8]] : 255,
          })),
    e
  );
}
const er = (i, t) => (i < 255 ? t(i) : '');
function ir(i) {
  var t = Qo(i) ? Zo : Jo;
  return i ? '#' + t(i.r) + t(i.g) + t(i.b) + er(i.a, t) : void 0;
}
const nr =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Is(i, t, e) {
  const n = t * Math.min(e, 1 - e),
    s = (o, r = (o + i / 30) % 12) => e - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function sr(i, t, e) {
  const n = (s, o = (s + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function or(i, t, e) {
  const n = Is(i, 1, 0.5);
  let s;
  for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
    (n[s] *= 1 - t - e), (n[s] += t);
  return n;
}
function rr(i, t, e, n, s) {
  return i === s ? (t - e) / n + (t < e ? 6 : 0) : t === s ? (e - i) / n + 2 : (i - t) / n + 4;
}
function Yi(i) {
  const e = i.r / 255,
    n = i.g / 255,
    s = i.b / 255,
    o = Math.max(e, n, s),
    r = Math.min(e, n, s),
    a = (o + r) / 2;
  let l, c, h;
  return (
    o !== r &&
      ((h = o - r),
      (c = a > 0.5 ? h / (2 - o - r) : h / (o + r)),
      (l = rr(e, n, s, h, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function Ui(i, t, e, n) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(Rt);
}
function Xi(i, t, e) {
  return Ui(Is, i, t, e);
}
function ar(i, t, e) {
  return Ui(or, i, t, e);
}
function lr(i, t, e) {
  return Ui(sr, i, t, e);
}
function Fs(i) {
  return ((i % 360) + 360) % 360;
}
function cr(i) {
  const t = nr.exec(i);
  let e = 255,
    n;
  if (!t) return;
  t[5] !== n && (e = t[6] ? fe(+t[5]) : Rt(+t[5]));
  const s = Fs(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    t[1] === 'hwb' ? (n = ar(s, o, r)) : t[1] === 'hsv' ? (n = lr(s, o, r)) : (n = Xi(s, o, r)),
    {
      r: n[0],
      g: n[1],
      b: n[2],
      a: e,
    }
  );
}
function hr(i, t) {
  var e = Yi(i);
  (e[0] = Fs(e[0] + t)), (e = Xi(e)), (i.r = e[0]), (i.g = e[1]), (i.b = e[2]);
}
function fr(i) {
  if (!i) return;
  const t = Yi(i),
    e = t[0],
    n = kn(t[1]),
    s = kn(t[2]);
  return i.a < 255 ? `hsla(${e}, ${n}%, ${s}%, ${vt(i.a)})` : `hsl(${e}, ${n}%, ${s}%)`;
}
const wn = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  Mn = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  };
function dr() {
  const i = {},
    t = Object.keys(Mn),
    e = Object.keys(wn);
  let n, s, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], s = 0; s < e.length; s++) (o = e[s]), (a = a.replace(o, wn[o]));
    (o = parseInt(Mn[r], 16)), (i[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return i;
}
let Fe;
function ur(i) {
  Fe || ((Fe = dr()), (Fe.transparent = [0, 0, 0, 0]));
  const t = Fe[i.toLowerCase()];
  return (
    t && {
      r: t[0],
      g: t[1],
      b: t[2],
      a: t.length === 4 ? t[3] : 255,
    }
  );
}
const gr =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function pr(i) {
  const t = gr.exec(i);
  let e = 255,
    n,
    s,
    o;
  if (t) {
    if (t[7] !== n) {
      const r = +t[7];
      e = t[8] ? fe(r) : Pt(r * 255, 0, 255);
    }
    return (
      (n = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (n = 255 & (t[2] ? fe(n) : Pt(n, 0, 255))),
      (s = 255 & (t[4] ? fe(s) : Pt(s, 0, 255))),
      (o = 255 & (t[6] ? fe(o) : Pt(o, 0, 255))),
      {
        r: n,
        g: s,
        b: o,
        a: e,
      }
    );
  }
}
function mr(i) {
  return (
    i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${vt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const yi = (i) => (i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055),
  Qt = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function br(i, t, e) {
  const n = Qt(vt(i.r)),
    s = Qt(vt(i.g)),
    o = Qt(vt(i.b));
  return {
    r: Rt(yi(n + e * (Qt(vt(t.r)) - n))),
    g: Rt(yi(s + e * (Qt(vt(t.g)) - s))),
    b: Rt(yi(o + e * (Qt(vt(t.b)) - o))),
    a: i.a + e * (t.a - i.a),
  };
}
function ze(i, t, e) {
  if (i) {
    let n = Yi(i);
    (n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1))),
      (n = Xi(n)),
      (i.r = n[0]),
      (i.g = n[1]),
      (i.b = n[2]);
  }
}
function zs(i, t) {
  return i && Object.assign(t || {}, i);
}
function Sn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((t = { r: i[0], g: i[1], b: i[2], a: 255 }), i.length > 3 && (t.a = Rt(i[3])))
      : ((t = zs(i, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Rt(t.a))),
    t
  );
}
function _r(i) {
  return i.charAt(0) === 'r' ? pr(i) : cr(i);
}
class ke {
  constructor(t) {
    if (t instanceof ke) return t;
    const e = typeof t;
    let n;
    e === 'object' ? (n = Sn(t)) : e === 'string' && (n = tr(t) || ur(t) || _r(t)),
      (this._rgb = n),
      (this._valid = !!n);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = zs(this._rgb);
    return t && (t.a = vt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Sn(t);
  }
  rgbString() {
    return this._valid ? mr(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? ir(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? fr(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb,
        s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e,
        a = 2 * r - 1,
        l = n.a - s.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - c),
        (n.r = 255 & (c * n.r + o * s.r + 0.5)),
        (n.g = 255 & (c * n.g + o * s.g + 0.5)),
        (n.b = 255 & (c * n.b + o * s.b + 0.5)),
        (n.a = r * n.a + (1 - r) * s.a),
        (this.rgb = n);
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = br(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new ke(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Rt(t)), this;
  }
  clearer(t) {
    const e = this._rgb;
    return (e.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = Oe(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    const e = this._rgb;
    return (e.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return ze(this._rgb, 2, t), this;
  }
  darken(t) {
    return ze(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ze(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ze(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return hr(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function _t() {}
const xr = (() => {
  let i = 0;
  return () => i++;
})();
function j(i) {
  return i === null || typeof i > 'u';
}
function V(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function E(i) {
  return i !== null && Object.prototype.toString.call(i) === '[object Object]';
}
function Z(i) {
  return (typeof i == 'number' || i instanceof Number) && isFinite(+i);
}
function ot(i, t) {
  return Z(i) ? i : t;
}
function F(i, t) {
  return typeof i > 'u' ? t : i;
}
const yr = (i, t) => (typeof i == 'string' && i.endsWith('%') ? (parseFloat(i) / 100) * t : +i);
function $(i, t, e) {
  if (i && typeof i.call == 'function') return i.apply(e, t);
}
function I(i, t, e, n) {
  let s, o, r;
  if (V(i))
    if (((o = i.length), n)) for (s = o - 1; s >= 0; s--) t.call(e, i[s], s);
    else for (s = 0; s < o; s++) t.call(e, i[s], s);
  else if (E(i)) for (r = Object.keys(i), o = r.length, s = 0; s < o; s++) t.call(e, i[r[s]], r[s]);
}
function Qe(i, t) {
  let e, n, s, o;
  if (!i || !t || i.length !== t.length) return !1;
  for (e = 0, n = i.length; e < n; ++e)
    if (((s = i[e]), (o = t[e]), s.datasetIndex !== o.datasetIndex || s.index !== o.index))
      return !1;
  return !0;
}
function ti(i) {
  if (V(i)) return i.map(ti);
  if (E(i)) {
    const t = /* @__PURE__ */ Object.create(null),
      e = Object.keys(i),
      n = e.length;
    let s = 0;
    for (; s < n; ++s) t[e[s]] = ti(i[e[s]]);
    return t;
  }
  return i;
}
function Bs(i) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(i) === -1;
}
function vr(i, t, e, n) {
  if (!Bs(i)) return;
  const s = t[i],
    o = e[i];
  E(s) && E(o) ? we(s, o, n) : (t[i] = ti(o));
}
function we(i, t, e) {
  const n = V(t) ? t : [t],
    s = n.length;
  if (!E(i)) return i;
  e = e || {};
  const o = e.merger || vr;
  let r;
  for (let a = 0; a < s; ++a) {
    if (((r = n[a]), !E(r))) continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c) o(l[c], i, r, e);
  }
  return i;
}
function pe(i, t) {
  return we(i, t, {
    merger: kr,
  });
}
function kr(i, t, e) {
  if (!Bs(i)) return;
  const n = t[i],
    s = e[i];
  E(n) && E(s) ? pe(n, s) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = ti(s));
}
const Cn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  '': (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y,
};
function wr(i) {
  const t = i.split('.'),
    e = [];
  let n = '';
  for (const s of t)
    (n += s), n.endsWith('\\') ? (n = n.slice(0, -1) + '.') : (e.push(n), (n = ''));
  return e;
}
function Mr(i) {
  const t = wr(i);
  return (e) => {
    for (const n of t) {
      if (n === '') break;
      e = e && e[n];
    }
    return e;
  };
}
function ei(i, t) {
  return (Cn[t] || (Cn[t] = Mr(t)))(i);
}
function Ki(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const ii = (i) => typeof i < 'u',
  At = (i) => typeof i == 'function',
  Pn = (i, t) => {
    if (i.size !== t.size) return !1;
    for (const e of i) if (!t.has(e)) return !1;
    return !0;
  };
function Sr(i) {
  return i.type === 'mouseup' || i.type === 'click' || i.type === 'contextmenu';
}
const G = Math.PI,
  ht = 2 * G,
  Cr = ht + G,
  ni = Number.POSITIVE_INFINITY,
  Pr = G / 180,
  st = G / 2,
  Nt = G / 4,
  On = (G * 2) / 3,
  Ot = Math.log10,
  te = Math.sign;
function me(i, t, e) {
  return Math.abs(i - t) < e;
}
function Tn(i) {
  const t = Math.round(i);
  i = me(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(Ot(i))),
    n = i / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function Or(i) {
  const t = [],
    e = Math.sqrt(i);
  let n;
  for (n = 1; n < e; n++) i % n === 0 && (t.push(n), t.push(i / n));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function Me(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function Tr(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function js(i, t, e) {
  let n, s, o;
  for (n = 0, s = i.length; n < s; n++)
    (o = i[n][e]), isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function Tt(i) {
  return i * (G / 180);
}
function qi(i) {
  return i * (180 / G);
}
function Dn(i) {
  if (!Z(i)) return;
  let t = 1,
    e = 0;
  for (; Math.round(i * t) / t !== i; ) (t *= 10), e++;
  return e;
}
function Dr(i, t) {
  const e = t.x - i.x,
    n = t.y - i.y,
    s = Math.sqrt(e * e + n * n);
  let o = Math.atan2(n, e);
  return (
    o < -0.5 * G && (o += ht),
    {
      angle: o,
      distance: s,
    }
  );
}
function Ai(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Rr(i, t) {
  return ((i - t + Cr) % ht) - G;
}
function ft(i) {
  return ((i % ht) + ht) % ht;
}
function Ns(i, t, e, n) {
  const s = ft(i),
    o = ft(t),
    r = ft(e),
    a = ft(o - s),
    l = ft(r - s),
    c = ft(s - o),
    h = ft(s - r);
  return s === o || s === r || (n && o === r) || (a > l && c < h);
}
function ct(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Ar(i) {
  return ct(i, -32768, 32767);
}
function Lr(i, t, e, n = 1e-6) {
  return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
}
function Gi(i, t, e) {
  e = e || ((r) => i[r] < t);
  let n = i.length - 1,
    s = 0,
    o;
  for (; n - s > 1; ) (o = (s + n) >> 1), e(o) ? (s = o) : (n = o);
  return {
    lo: s,
    hi: n,
  };
}
const Ut = (i, t, e, n) =>
    Gi(
      i,
      e,
      n
        ? (s) => {
            const o = i[s][t];
            return o < e || (o === e && i[s + 1][t] === e);
          }
        : (s) => i[s][t] < e
    ),
  Er = (i, t, e) => Gi(i, e, (n) => i[n][t] >= e);
function Ir(i, t, e) {
  let n = 0,
    s = i.length;
  for (; n < s && i[n] < t; ) n++;
  for (; s > n && i[s - 1] > e; ) s--;
  return n > 0 || s < i.length ? i.slice(n, s) : i;
}
const Ws = ['push', 'pop', 'shift', 'splice', 'unshift'];
function Fr(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [t],
    },
  }),
    Ws.forEach((e) => {
      const n = '_onData' + Ki(e),
        s = i[e];
      Object.defineProperty(i, e, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = s.apply(this, o);
          return (
            i._chartjs.listeners.forEach((a) => {
              typeof a[n] == 'function' && a[n](...o);
            }),
            r
          );
        },
      });
    });
}
function Rn(i, t) {
  const e = i._chartjs;
  if (!e) return;
  const n = e.listeners,
    s = n.indexOf(t);
  s !== -1 && n.splice(s, 1),
    !(n.length > 0) &&
      (Ws.forEach((o) => {
        delete i[o];
      }),
      delete i._chartjs);
}
function zr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Vs = (function () {
  return typeof window > 'u'
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function Hs(i, t) {
  let e = [],
    n = !1;
  return function (...s) {
    (e = s),
      n ||
        ((n = !0),
        Vs.call(window, () => {
          (n = !1), i.apply(t, e);
        }));
  };
}
function Br(i, t) {
  let e;
  return function (...n) {
    return t ? (clearTimeout(e), (e = setTimeout(i, t, n))) : i.apply(this, n), t;
  };
}
const $s = (i) => (i === 'start' ? 'left' : i === 'end' ? 'right' : 'center'),
  be = (i, t, e) => (i === 'start' ? t : i === 'end' ? e : (t + e) / 2);
function jr(i, t, e) {
  const n = t.length;
  let s = 0,
    o = n;
  if (i._sorted) {
    const { iScale: r, _parsed: a } = i,
      l = r.axis,
      { min: c, max: h, minDefined: f, maxDefined: d } = r.getUserBounds();
    f &&
      (s = ct(
        Math.min(
          // @ts-expect-error Need to type _parsed
          Ut(a, r.axis, c).lo,
          // @ts-expect-error Need to fix types on _lookupByKey
          e ? n : Ut(t, l, r.getPixelForValue(c)).lo
        ),
        0,
        n - 1
      )),
      d
        ? (o =
            ct(
              Math.max(
                // @ts-expect-error Need to type _parsed
                Ut(a, r.axis, h, !0).hi + 1,
                // @ts-expect-error Need to fix types on _lookupByKey
                e ? 0 : Ut(t, l, r.getPixelForValue(h), !0).hi + 1
              ),
              s,
              n
            ) - s)
        : (o = n - s);
  }
  return {
    start: s,
    count: o,
  };
}
function Nr(i) {
  const { xScale: t, yScale: e, _scaleRanges: n } = i,
    s = {
      xmin: t.min,
      xmax: t.max,
      ymin: e.min,
      ymax: e.max,
    };
  if (!n) return (i._scaleRanges = s), !0;
  const o = n.xmin !== t.min || n.xmax !== t.max || n.ymin !== e.min || n.ymax !== e.max;
  return Object.assign(n, s), o;
}
const Be = (i) => i === 0 || i === 1,
  An = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * ht) / e)),
  Ln = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * ht) / e) + 1,
  _e = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) => ((i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1)),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) => ((i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2)),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * st) + 1,
    easeOutSine: (i) => Math.sin(i * st),
    easeInOutSine: (i) => -0.5 * (Math.cos(G * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      Be(i)
        ? i
        : i < 0.5
        ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (Be(i) ? i : An(i, 0.075, 0.3)),
    easeOutElastic: (i) => (Be(i) ? i : Ln(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return Be(i)
        ? i
        : i < 0.5
        ? 0.5 * An(i * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Ln(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let t = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t))
        : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
    },
    easeInBounce: (i) => 1 - _e.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
        ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
        : i < 2.5 / 2.75
        ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
        : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5 ? _e.easeInBounce(i * 2) * 0.5 : _e.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function Zi(i) {
  if (i && typeof i == 'object') {
    const t = i.toString();
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
  }
  return !1;
}
function En(i) {
  return Zi(i) ? i : new ke(i);
}
function vi(i) {
  return Zi(i) ? i : new ke(i).saturate(0.5).darken(0.1).hexString();
}
const Wr = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  Vr = ['color', 'borderColor', 'backgroundColor'];
function Hr(i) {
  i.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
    }),
    i.set('animations', {
      colors: {
        type: 'color',
        properties: Vr,
      },
      numbers: {
        type: 'number',
        properties: Wr,
      },
    }),
    i.describe('animations', {
      _fallback: 'animation',
    }),
    i.set('transitions', {
      active: {
        animation: {
          duration: 400,
        },
      },
      resize: {
        animation: {
          duration: 0,
        },
      },
      show: {
        animations: {
          colors: {
            from: 'transparent',
          },
          visible: {
            type: 'boolean',
            duration: 0,
          },
        },
      },
      hide: {
        animations: {
          colors: {
            to: 'transparent',
          },
          visible: {
            type: 'boolean',
            easing: 'linear',
            fn: (t) => t | 0,
          },
        },
      },
    });
}
function $r(i) {
  i.set('layout', {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });
}
const In = /* @__PURE__ */ new Map();
function Yr(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let n = In.get(e);
  return n || ((n = new Intl.NumberFormat(i, t)), In.set(e, n)), n;
}
function Ji(i, t, e) {
  return Yr(t, e).format(i);
}
const Ys = {
  values(i) {
    return V(i) ? i : '' + i;
  },
  numeric(i, t, e) {
    if (i === 0) return '0';
    const n = this.chart.options.locale;
    let s,
      o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = 'scientific'), (o = Ur(i, e));
    }
    const r = Ot(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = {
        notation: s,
        minimumFractionDigits: a,
        maximumFractionDigits: a,
      };
    return Object.assign(l, this.options.ticks.format), Ji(i, n, l);
  },
  logarithmic(i, t, e) {
    if (i === 0) return '0';
    const n = e[t].significand || i / Math.pow(10, Math.floor(Ot(i)));
    return [1, 2, 3, 5, 10, 15].includes(n) || t > 0.8 * e.length
      ? Ys.numeric.call(this, i, t, e)
      : '';
  },
};
function Ur(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var hi = {
  formatters: Ys,
};
function Xr(i) {
  i.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1,
    },
    title: {
      display: !1,
      text: '',
      padding: {
        top: 4,
        bottom: 4,
      },
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: hi.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    i.route('scale.ticks', 'color', '', 'color'),
    i.route('scale.grid', 'color', '', 'borderColor'),
    i.route('scale.border', 'color', '', 'borderColor'),
    i.route('scale.title', 'color', '', 'color'),
    i.describe('scale', {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith('before') && !t.startsWith('after') && t !== 'callback' && t !== 'parser',
      _indexable: (t) => t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
    }),
    i.describe('scales', {
      _fallback: 'scale',
    }),
    i.describe('scale.ticks', {
      _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
      _indexable: (t) => t !== 'backdropPadding',
    });
}
const Kt = /* @__PURE__ */ Object.create(null),
  Li = /* @__PURE__ */ Object.create(null);
function xe(i, t) {
  if (!t) return i;
  const e = t.split('.');
  for (let n = 0, s = e.length; n < s; ++n) {
    const o = e[n];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ki(i, t, e) {
  return typeof t == 'string' ? we(xe(i, t), e) : we(xe(i, ''), t);
}
class Kr {
  constructor(t, e) {
    (this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, s) => vi(s.backgroundColor)),
      (this.hoverBorderColor = (n, s) => vi(s.borderColor)),
      (this.hoverColor = (n, s) => vi(s.color)),
      (this.indexAxis = 'x'),
      (this.interaction = {
        mode: 'nearest',
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e);
  }
  set(t, e) {
    return ki(this, t, e);
  }
  get(t) {
    return xe(this, t);
  }
  describe(t, e) {
    return ki(Li, t, e);
  }
  override(t, e) {
    return ki(Kt, t, e);
  }
  route(t, e, n, s) {
    const o = xe(this, t),
      r = xe(this, n),
      a = '_' + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0,
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = r[s];
          return E(l) ? Object.assign({}, c, l) : F(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var U = /* @__PURE__ */ new Kr(
  {
    _scriptable: (i) => !i.startsWith('on'),
    _indexable: (i) => i !== 'events',
    hover: {
      _fallback: 'interaction',
    },
    interaction: {
      _scriptable: !1,
      _indexable: !1,
    },
  },
  [Hr, $r, Xr]
);
function qr(i) {
  return !i || j(i.size) || j(i.family)
    ? null
    : (i.style ? i.style + ' ' : '') + (i.weight ? i.weight + ' ' : '') + i.size + 'px ' + i.family;
}
function si(i, t, e, n, s) {
  let o = t[s];
  return o || ((o = t[s] = i.measureText(s).width), e.push(s)), o > n && (n = o), n;
}
function Gr(i, t, e, n) {
  n = n || {};
  let s = (n.data = n.data || {}),
    o = (n.garbageCollect = n.garbageCollect || []);
  n.font !== t && ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = t)),
    i.save(),
    (i.font = t);
  let r = 0;
  const a = e.length;
  let l, c, h, f, d;
  for (l = 0; l < a; l++)
    if (((f = e[l]), f != null && !V(f))) r = si(i, s, o, r, f);
    else if (V(f))
      for (c = 0, h = f.length; c < h; c++)
        (d = f[c]), d != null && !V(d) && (r = si(i, s, o, r, d));
  i.restore();
  const g = o.length / 2;
  if (g > e.length) {
    for (l = 0; l < g; l++) delete s[o[l]];
    o.splice(0, g);
  }
  return r;
}
function Wt(i, t, e) {
  const n = i.currentDevicePixelRatio,
    s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function Fn(i, t) {
  (t = t || i.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, i.width, i.height),
    t.restore();
}
function Ei(i, t, e, n) {
  Zr(i, t, e, n, null);
}
function Zr(i, t, e, n, s) {
  let o, r, a, l, c, h, f, d;
  const g = t.pointStyle,
    p = t.rotation,
    b = t.radius;
  let m = (p || 0) * Pr;
  if (
    g &&
    typeof g == 'object' &&
    ((o = g.toString()), o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
  ) {
    i.save(),
      i.translate(e, n),
      i.rotate(m),
      i.drawImage(g, -g.width / 2, -g.height / 2, g.width, g.height),
      i.restore();
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch ((i.beginPath(), g)) {
      default:
        s ? i.ellipse(e, n, s / 2, b, 0, 0, ht) : i.arc(e, n, b, 0, ht), i.closePath();
        break;
      case 'triangle':
        (h = s ? s / 2 : b),
          i.moveTo(e + Math.sin(m) * h, n - Math.cos(m) * b),
          (m += On),
          i.lineTo(e + Math.sin(m) * h, n - Math.cos(m) * b),
          (m += On),
          i.lineTo(e + Math.sin(m) * h, n - Math.cos(m) * b),
          i.closePath();
        break;
      case 'rectRounded':
        (c = b * 0.516),
          (l = b - c),
          (r = Math.cos(m + Nt) * l),
          (f = Math.cos(m + Nt) * (s ? s / 2 - c : l)),
          (a = Math.sin(m + Nt) * l),
          (d = Math.sin(m + Nt) * (s ? s / 2 - c : l)),
          i.arc(e - f, n - a, c, m - G, m - st),
          i.arc(e + d, n - r, c, m - st, m),
          i.arc(e + f, n + a, c, m, m + st),
          i.arc(e - d, n + r, c, m + st, m + G),
          i.closePath();
        break;
      case 'rect':
        if (!p) {
          (l = Math.SQRT1_2 * b), (h = s ? s / 2 : l), i.rect(e - h, n - l, 2 * h, 2 * l);
          break;
        }
        m += Nt;
      case 'rectRot':
        (f = Math.cos(m) * (s ? s / 2 : b)),
          (r = Math.cos(m) * b),
          (a = Math.sin(m) * b),
          (d = Math.sin(m) * (s ? s / 2 : b)),
          i.moveTo(e - f, n - a),
          i.lineTo(e + d, n - r),
          i.lineTo(e + f, n + a),
          i.lineTo(e - d, n + r),
          i.closePath();
        break;
      case 'crossRot':
        m += Nt;
      case 'cross':
        (f = Math.cos(m) * (s ? s / 2 : b)),
          (r = Math.cos(m) * b),
          (a = Math.sin(m) * b),
          (d = Math.sin(m) * (s ? s / 2 : b)),
          i.moveTo(e - f, n - a),
          i.lineTo(e + f, n + a),
          i.moveTo(e + d, n - r),
          i.lineTo(e - d, n + r);
        break;
      case 'star':
        (f = Math.cos(m) * (s ? s / 2 : b)),
          (r = Math.cos(m) * b),
          (a = Math.sin(m) * b),
          (d = Math.sin(m) * (s ? s / 2 : b)),
          i.moveTo(e - f, n - a),
          i.lineTo(e + f, n + a),
          i.moveTo(e + d, n - r),
          i.lineTo(e - d, n + r),
          (m += Nt),
          (f = Math.cos(m) * (s ? s / 2 : b)),
          (r = Math.cos(m) * b),
          (a = Math.sin(m) * b),
          (d = Math.sin(m) * (s ? s / 2 : b)),
          i.moveTo(e - f, n - a),
          i.lineTo(e + f, n + a),
          i.moveTo(e + d, n - r),
          i.lineTo(e - d, n + r);
        break;
      case 'line':
        (r = s ? s / 2 : Math.cos(m) * b),
          (a = Math.sin(m) * b),
          i.moveTo(e - r, n - a),
          i.lineTo(e + r, n + a);
        break;
      case 'dash':
        i.moveTo(e, n), i.lineTo(e + Math.cos(m) * (s ? s / 2 : b), n + Math.sin(m) * b);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function wt(i, t, e) {
  return (
    (e = e || 0.5),
    !t || (i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e)
  );
}
function Us(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Xs(i) {
  i.restore();
}
function Jr(i, t, e, n, s) {
  if (!t) return i.lineTo(e.x, e.y);
  if (s === 'middle') {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else (s === 'after') != !!n ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Qr(i, t, e, n) {
  if (!t) return i.lineTo(e.x, e.y);
  i.bezierCurveTo(
    n ? t.cp1x : t.cp2x,
    n ? t.cp1y : t.cp2y,
    n ? e.cp2x : e.cp1x,
    n ? e.cp2y : e.cp1y,
    e.x,
    e.y
  );
}
function ta(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]),
    j(t.rotation) || i.rotate(t.rotation),
    t.color && (i.fillStyle = t.color),
    t.textAlign && (i.textAlign = t.textAlign),
    t.textBaseline && (i.textBaseline = t.textBaseline);
}
function ea(i, t, e, n, s) {
  if (s.strikethrough || s.underline) {
    const o = i.measureText(n),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = e - o.actualBoundingBoxAscent,
      c = e + o.actualBoundingBoxDescent,
      h = s.strikethrough ? (l + c) / 2 : c;
    (i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = s.decorationWidth || 2),
      i.moveTo(r, h),
      i.lineTo(a, h),
      i.stroke();
  }
}
function ia(i, t) {
  const e = i.fillStyle;
  (i.fillStyle = t.color), i.fillRect(t.left, t.top, t.width, t.height), (i.fillStyle = e);
}
function Se(i, t, e, n, s, o = {}) {
  const r = V(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== '';
  let l, c;
  for (i.save(), i.font = s.string, ta(i, o), l = 0; l < r.length; ++l)
    (c = r[l]),
      o.backdrop && ia(i, o.backdrop),
      a &&
        (o.strokeColor && (i.strokeStyle = o.strokeColor),
        j(o.strokeWidth) || (i.lineWidth = o.strokeWidth),
        i.strokeText(c, e, n, o.maxWidth)),
      i.fillText(c, e, n, o.maxWidth),
      ea(i, e, n, c, o),
      (n += Number(s.lineHeight));
  i.restore();
}
function Ii(i, t) {
  const { x: e, y: n, w: s, h: o, radius: r } = t;
  i.arc(e + r.topLeft, n + r.topLeft, r.topLeft, -st, G, !0),
    i.lineTo(e, n + o - r.bottomLeft),
    i.arc(e + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, G, st, !0),
    i.lineTo(e + s - r.bottomRight, n + o),
    i.arc(e + s - r.bottomRight, n + o - r.bottomRight, r.bottomRight, st, 0, !0),
    i.lineTo(e + s, n + r.topRight),
    i.arc(e + s - r.topRight, n + r.topRight, r.topRight, 0, -st, !0),
    i.lineTo(e + r.topLeft, n);
}
const na = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  sa = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function oa(i, t) {
  const e = ('' + i).match(na);
  if (!e || e[1] === 'normal') return t * 1.2;
  switch (((i = +e[2]), e[3])) {
    case 'px':
      return i;
    case '%':
      i /= 100;
      break;
  }
  return t * i;
}
const ra = (i) => +i || 0;
function Ks(i, t) {
  const e = {},
    n = E(t),
    s = n ? Object.keys(t) : t,
    o = E(i) ? (n ? (r) => F(i[r], i[t[r]]) : (r) => i[r]) : () => i;
  for (const r of s) e[r] = ra(o(r));
  return e;
}
function aa(i) {
  return Ks(i, {
    top: 'y',
    right: 'x',
    bottom: 'y',
    left: 'x',
  });
}
function ye(i) {
  return Ks(i, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function rt(i) {
  const t = aa(i);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function et(i, t) {
  (i = i || {}), (t = t || U.font);
  let e = F(i.size, t.size);
  typeof e == 'string' && (e = parseInt(e, 10));
  let n = F(i.style, t.style);
  n &&
    !('' + n).match(sa) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0));
  const s = {
    family: F(i.family, t.family),
    lineHeight: oa(F(i.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: F(i.weight, t.weight),
    string: '',
  };
  return (s.string = qr(s)), s;
}
function je(i, t, e, n) {
  let s = !0,
    o,
    r,
    a;
  for (o = 0, r = i.length; o < r; ++o)
    if (
      ((a = i[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == 'function' && ((a = a(t)), (s = !1)),
        e !== void 0 && V(a) && ((a = a[e % a.length]), (s = !1)),
        a !== void 0))
    )
      return n && !s && (n.cacheable = !1), a;
}
function la(i, t, e) {
  const { min: n, max: s } = i,
    o = yr(t, (s - n) / 2),
    r = (a, l) => (e && a === 0 ? 0 : a + l);
  return {
    min: r(n, -Math.abs(o)),
    max: r(s, o),
  };
}
function Et(i, t) {
  return Object.assign(Object.create(i), t);
}
function Qi(i, t = [''], e, n, s = () => i[0]) {
  const o = e || i;
  typeof n > 'u' && (n = Js('_fallback', i));
  const r = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (a) => Qi([a, ...i], t, o, n),
  };
  return new Proxy(r, {
    /**
     * A trap for the delete operator.
     */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
     * A trap for getting property values.
     */
    get(a, l) {
      return Gs(a, l, () => ma(l, t, i, a));
    },
    /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
     * A trap for Object.getPrototypeOf.
     */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
     * A trap for the in operator.
     */
    has(a, l) {
      return Bn(a).includes(l);
    },
    /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */
    ownKeys(a) {
      return Bn(a);
    },
    /**
     * A trap for setting property values.
     */
    set(a, l, c) {
      const h = a._storage || (a._storage = s());
      return (a[l] = h[l] = c), delete a._keys, !0;
    },
  });
}
function ee(i, t, e, n) {
  const s = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: qs(i, n),
    setContext: (o) => ee(i, o, e, n),
    override: (o) => ee(i.override(o), t, e, n),
  };
  return new Proxy(s, {
    /**
     * A trap for the delete operator.
     */
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    /**
     * A trap for getting property values.
     */
    get(o, r, a) {
      return Gs(o, r, () => ha(o, r, a));
    },
    /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(i, r)
          ? {
              enumerable: !0,
              configurable: !0,
            }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, r);
    },
    /**
     * A trap for Object.getPrototypeOf.
     */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
     * A trap for the in operator.
     */
    has(o, r) {
      return Reflect.has(i, r);
    },
    /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
     * A trap for setting property values.
     */
    set(o, r, a) {
      return (i[r] = a), delete o[r], !0;
    },
  });
}
function qs(
  i,
  t = {
    scriptable: !0,
    indexable: !0,
  }
) {
  const { _scriptable: e = t.scriptable, _indexable: n = t.indexable, _allKeys: s = t.allKeys } = i;
  return {
    allKeys: s,
    scriptable: e,
    indexable: n,
    isScriptable: At(e) ? e : () => e,
    isIndexable: At(n) ? n : () => n,
  };
}
const ca = (i, t) => (i ? i + Ki(t) : t),
  tn = (i, t) =>
    E(t) && i !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Gs(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
  const n = e();
  return (i[t] = n), n;
}
function ha(i, t, e) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = i;
  let a = n[t];
  return (
    At(a) && r.isScriptable(t) && (a = fa(t, a, i, e)),
    V(a) && a.length && (a = da(t, a, i, r.isIndexable)),
    tn(t, a) && (a = ee(a, s, o && o[t], r)),
    a
  );
}
function fa(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i)) throw new Error('Recursion detected: ' + Array.from(a).join('->') + '->' + i);
  a.add(i);
  let l = t(o, r || n);
  return a.delete(i), tn(i, l) && (l = en(s._scopes, s, i, l)), l;
}
function da(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < 'u' && n(i)) return t[o.index % t.length];
  if (E(t[0])) {
    const l = t,
      c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const f = en(c, s, i, h);
      t.push(ee(f, o, r && r[i], a));
    }
  }
  return t;
}
function Zs(i, t, e) {
  return At(i) ? i(t, e) : i;
}
const ua = (i, t) => (i === !0 ? t : typeof i == 'string' ? ei(t, i) : void 0);
function ga(i, t, e, n, s) {
  for (const o of t) {
    const r = ua(e, o);
    if (r) {
      i.add(r);
      const a = Zs(r._fallback, e, s);
      if (typeof a < 'u' && a !== e && a !== n) return a;
    } else if (r === !1 && typeof n < 'u' && e !== n) return null;
  }
  return !1;
}
function en(i, t, e, n) {
  const s = t._rootScopes,
    o = Zs(t._fallback, e, n),
    r = [...i, ...s],
    a = /* @__PURE__ */ new Set();
  a.add(n);
  let l = zn(a, r, e, o || e, n);
  return l === null || (typeof o < 'u' && o !== e && ((l = zn(a, r, o, l, n)), l === null))
    ? !1
    : Qi(Array.from(a), [''], s, o, () => pa(t, e, n));
}
function zn(i, t, e, n, s) {
  for (; e; ) e = ga(i, t, e, n, s);
  return e;
}
function pa(i, t, e) {
  const n = i._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return V(s) && E(e) ? e : s || {};
}
function ma(i, t, e, n) {
  let s;
  for (const o of t)
    if (((s = Js(ca(o, i), e)), typeof s < 'u')) return tn(i, s) ? en(e, n, i, s) : s;
}
function Js(i, t) {
  for (const e of t) {
    if (!e) continue;
    const n = e[i];
    if (typeof n < 'u') return n;
  }
}
function Bn(i) {
  let t = i._keys;
  return t || (t = i._keys = ba(i._scopes)), t;
}
function ba(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i) for (const n of Object.keys(e).filter((s) => !s.startsWith('_'))) t.add(n);
  return Array.from(t);
}
const _a = Number.EPSILON || 1e-14,
  ie = (i, t) => t < i.length && !i[t].skip && i[t],
  Qs = (i) => (i === 'x' ? 'y' : 'x');
function xa(i, t, e, n) {
  const s = i.skip ? t : i,
    o = t,
    r = e.skip ? t : e,
    a = Ai(o, s),
    l = Ai(r, o);
  let c = a / (a + l),
    h = l / (a + l);
  (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
  const f = n * c,
    d = n * h;
  return {
    previous: {
      x: o.x - f * (r.x - s.x),
      y: o.y - f * (r.y - s.y),
    },
    next: {
      x: o.x + d * (r.x - s.x),
      y: o.y + d * (r.y - s.y),
    },
  };
}
function ya(i, t, e) {
  const n = i.length;
  let s,
    o,
    r,
    a,
    l,
    c = ie(i, 0);
  for (let h = 0; h < n - 1; ++h)
    if (((l = c), (c = ie(i, h + 1)), !(!l || !c))) {
      if (me(t[h], 0, _a)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      (s = e[h] / t[h]),
        (o = e[h + 1] / t[h]),
        (a = Math.pow(s, 2) + Math.pow(o, 2)),
        !(a <= 9) && ((r = 3 / Math.sqrt(a)), (e[h] = s * r * t[h]), (e[h + 1] = o * r * t[h]));
    }
}
function va(i, t, e = 'x') {
  const n = Qs(e),
    s = i.length;
  let o,
    r,
    a,
    l = ie(i, 0);
  for (let c = 0; c < s; ++c) {
    if (((r = a), (a = l), (l = ie(i, c + 1)), !a)) continue;
    const h = a[e],
      f = a[n];
    r && ((o = (h - r[e]) / 3), (a[`cp1${e}`] = h - o), (a[`cp1${n}`] = f - o * t[c])),
      l && ((o = (l[e] - h) / 3), (a[`cp2${e}`] = h + o), (a[`cp2${n}`] = f + o * t[c]));
  }
}
function ka(i, t = 'x') {
  const e = Qs(t),
    n = i.length,
    s = Array(n).fill(0),
    o = Array(n);
  let r,
    a,
    l,
    c = ie(i, 0);
  for (r = 0; r < n; ++r)
    if (((a = l), (l = c), (c = ie(i, r + 1)), !!l)) {
      if (c) {
        const h = c[t] - l[t];
        s[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? (c ? (te(s[r - 1]) !== te(s[r]) ? 0 : (s[r - 1] + s[r]) / 2) : s[r - 1]) : s[r];
    }
  ya(i, s, o), va(i, o, t);
}
function Ne(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function wa(i, t) {
  let e,
    n,
    s,
    o,
    r,
    a = wt(i[0], t);
  for (e = 0, n = i.length; e < n; ++e)
    (r = o),
      (o = a),
      (a = e < n - 1 && wt(i[e + 1], t)),
      o &&
        ((s = i[e]),
        r && ((s.cp1x = Ne(s.cp1x, t.left, t.right)), (s.cp1y = Ne(s.cp1y, t.top, t.bottom))),
        a && ((s.cp2x = Ne(s.cp2x, t.left, t.right)), (s.cp2y = Ne(s.cp2y, t.top, t.bottom))));
}
function Ma(i, t, e, n, s) {
  let o, r, a, l;
  if ((t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === 'monotone'))
    ka(i, s);
  else {
    let c = n ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      (a = i[o]),
        (l = xa(c, a, i[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints && wa(i, e);
}
function to() {
  return typeof window < 'u' && typeof document < 'u';
}
function nn(i) {
  let t = i.parentNode;
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
}
function oi(i, t, e) {
  let n;
  return (
    typeof i == 'string'
      ? ((n = parseInt(i, 10)), i.indexOf('%') !== -1 && (n = (n / 100) * t.parentNode[e]))
      : (n = i),
    n
  );
}
const fi = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Sa(i, t) {
  return fi(i).getPropertyValue(t);
}
const Ca = ['top', 'right', 'bottom', 'left'];
function Xt(i, t, e) {
  const n = {};
  e = e ? '-' + e : '';
  for (let s = 0; s < 4; s++) {
    const o = Ca[s];
    n[o] = parseFloat(i[t + '-' + o + e]) || 0;
  }
  return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
}
const Pa = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Oa(i, t) {
  const e = i.touches,
    n = e && e.length ? e[0] : i,
    { offsetX: s, offsetY: o } = n;
  let r = !1,
    a,
    l;
  if (Pa(s, o, i.target)) (a = s), (l = o);
  else {
    const c = t.getBoundingClientRect();
    (a = n.clientX - c.left), (l = n.clientY - c.top), (r = !0);
  }
  return {
    x: a,
    y: l,
    box: r,
  };
}
function $t(i, t) {
  if ('native' in i) return i;
  const { canvas: e, currentDevicePixelRatio: n } = t,
    s = fi(e),
    o = s.boxSizing === 'border-box',
    r = Xt(s, 'padding'),
    a = Xt(s, 'border', 'width'),
    { x: l, y: c, box: h } = Oa(i, e),
    f = r.left + (h && a.left),
    d = r.top + (h && a.top);
  let { width: g, height: p } = t;
  return (
    o && ((g -= r.width + a.width), (p -= r.height + a.height)),
    {
      x: Math.round((((l - f) / g) * e.width) / n),
      y: Math.round((((c - d) / p) * e.height) / n),
    }
  );
}
function Ta(i, t, e) {
  let n, s;
  if (t === void 0 || e === void 0) {
    const o = nn(i);
    if (!o) (t = i.clientWidth), (e = i.clientHeight);
    else {
      const r = o.getBoundingClientRect(),
        a = fi(o),
        l = Xt(a, 'border', 'width'),
        c = Xt(a, 'padding');
      (t = r.width - c.width - l.width),
        (e = r.height - c.height - l.height),
        (n = oi(a.maxWidth, o, 'clientWidth')),
        (s = oi(a.maxHeight, o, 'clientHeight'));
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: n || ni,
    maxHeight: s || ni,
  };
}
const We = (i) => Math.round(i * 10) / 10;
function Da(i, t, e, n) {
  const s = fi(i),
    o = Xt(s, 'margin'),
    r = oi(s.maxWidth, i, 'clientWidth') || ni,
    a = oi(s.maxHeight, i, 'clientHeight') || ni,
    l = Ta(i, t, e);
  let { width: c, height: h } = l;
  if (s.boxSizing === 'content-box') {
    const d = Xt(s, 'border', 'width'),
      g = Xt(s, 'padding');
    (c -= g.width + d.width), (h -= g.height + d.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (h = Math.max(0, n ? c / n : h - o.height)),
    (c = We(Math.min(c, r, l.maxWidth))),
    (h = We(Math.min(h, a, l.maxHeight))),
    c && !h && (h = We(c / 2)),
    (t !== void 0 || e !== void 0) &&
      n &&
      l.height &&
      h > l.height &&
      ((h = l.height), (c = We(Math.floor(h * n)))),
    {
      width: c,
      height: h,
    }
  );
}
function jn(i, t, e) {
  const n = t || 1,
    s = Math.floor(i.height * n),
    o = Math.floor(i.width * n);
  (i.height = Math.floor(i.height)), (i.width = Math.floor(i.width));
  const r = i.canvas;
  return (
    r.style &&
      (e || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${i.height}px`), (r.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== n || r.height !== s || r.width !== o
      ? ((i.currentDevicePixelRatio = n),
        (r.height = s),
        (r.width = o),
        i.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
      : !1
  );
}
const Ra = (function () {
  let i = !1;
  try {
    const t = {
      get passive() {
        return (i = !0), !1;
      },
    };
    window.addEventListener('test', null, t), window.removeEventListener('test', null, t);
  } catch {}
  return i;
})();
function Nn(i, t) {
  const e = Sa(i, t),
    n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function Yt(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y),
  };
}
function Aa(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y:
      n === 'middle'
        ? e < 0.5
          ? i.y
          : t.y
        : n === 'after'
        ? e < 1
          ? i.y
          : t.y
        : e > 0
        ? t.y
        : i.y,
  };
}
function La(i, t, e, n) {
  const s = {
      x: i.cp2x,
      y: i.cp2y,
    },
    o = {
      x: t.cp1x,
      y: t.cp1y,
    },
    r = Yt(i, s, e),
    a = Yt(s, o, e),
    l = Yt(o, t, e),
    c = Yt(r, a, e),
    h = Yt(a, l, e);
  return Yt(c, h, e);
}
const Ea = function (i, t) {
    return {
      x(e) {
        return i + i + t - e;
      },
      setWidth(e) {
        t = e;
      },
      textAlign(e) {
        return e === 'center' ? e : e === 'right' ? 'left' : 'right';
      },
      xPlus(e, n) {
        return e - n;
      },
      leftForLtr(e, n) {
        return e - n;
      },
    };
  },
  Ia = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, t) {
        return i + t;
      },
      leftForLtr(i, t) {
        return i;
      },
    };
  };
function wi(i, t, e) {
  return i ? Ea(t, e) : Ia();
}
function Fa(i, t) {
  let e, n;
  (t === 'ltr' || t === 'rtl') &&
    ((e = i.canvas.style),
    (n = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
    e.setProperty('direction', t, 'important'),
    (i.prevTextDirection = n));
}
function za(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty('direction', t[0], t[1]));
}
function eo(i) {
  return i === 'angle'
    ? {
        between: Ns,
        compare: Rr,
        normalize: ft,
      }
    : {
        between: Lr,
        compare: (t, e) => t - e,
        normalize: (t) => t,
      };
}
function Wn({ start: i, end: t, count: e, loop: n, style: s }) {
  return {
    start: i % e,
    end: t % e,
    loop: n && (t - i + 1) % e === 0,
    style: s,
  };
}
function Ba(i, t, e) {
  const { property: n, start: s, end: o } = e,
    { between: r, normalize: a } = eo(n),
    l = t.length;
  let { start: c, end: h, loop: f } = i,
    d,
    g;
  if (f) {
    for (c += l, h += l, d = 0, g = l; d < g && r(a(t[c % l][n]), s, o); ++d) c--, h--;
    (c %= l), (h %= l);
  }
  return (
    h < c && (h += l),
    {
      start: c,
      end: h,
      loop: f,
      style: i.style,
    }
  );
}
function ja(i, t, e) {
  if (!e) return [i];
  const { property: n, start: s, end: o } = e,
    r = t.length,
    { compare: a, between: l, normalize: c } = eo(n),
    { start: h, end: f, loop: d, style: g } = Ba(i, t, e),
    p = [];
  let b = !1,
    m = null,
    _,
    y,
    M;
  const w = () => l(s, M, _) && a(s, M) !== 0,
    v = () => a(o, _) === 0 || l(o, M, _),
    T = () => b || w(),
    S = () => !b || v();
  for (let C = h, D = h; C <= f; ++C)
    (y = t[C % r]),
      !y.skip &&
        ((_ = c(y[n])),
        _ !== M &&
          ((b = l(_, s, o)),
          m === null && T() && (m = a(_, s) === 0 ? C : D),
          m !== null &&
            S() &&
            (p.push(
              Wn({
                start: m,
                end: C,
                loop: d,
                count: r,
                style: g,
              })
            ),
            (m = null)),
          (D = C),
          (M = _)));
  return (
    m !== null &&
      p.push(
        Wn({
          start: m,
          end: f,
          loop: d,
          count: r,
          style: g,
        })
      ),
    p
  );
}
function Na(i, t) {
  const e = [],
    n = i.segments;
  for (let s = 0; s < n.length; s++) {
    const o = ja(n[s], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Wa(i, t, e, n) {
  let s = 0,
    o = t - 1;
  if (e && !n) for (; s < t && !i[s].skip; ) s++;
  for (; s < t && i[s].skip; ) s++;
  for (s %= t, e && (o += s); o > s && i[o % t].skip; ) o--;
  return (
    (o %= t),
    {
      start: s,
      end: o,
    }
  );
}
function Va(i, t, e, n) {
  const s = i.length,
    o = [];
  let r = t,
    a = i[t],
    l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % s];
    c.skip || c.stop
      ? a.skip ||
        ((n = !1),
        o.push({
          start: t % s,
          end: (l - 1) % s,
          loop: n,
        }),
        (t = r = c.stop ? l : null))
      : ((r = l), a.skip && (t = l)),
      (a = c);
  }
  return (
    r !== null &&
      o.push({
        start: t % s,
        end: r % s,
        loop: n,
      }),
    o
  );
}
function Ha(i, t) {
  const e = i.points,
    n = i.options.spanGaps,
    s = e.length;
  if (!s) return [];
  const o = !!i._loop,
    { start: r, end: a } = Wa(e, s, o, n);
  if (n === !0)
    return Vn(
      i,
      [
        {
          start: r,
          end: a,
          loop: o,
        },
      ],
      e,
      t
    );
  const l = a < r ? a + s : a,
    c = !!i._fullLoop && r === 0 && a === s - 1;
  return Vn(i, Va(e, r, l, c), e, t);
}
function Vn(i, t, e, n) {
  return !n || !n.setContext || !e ? t : $a(i, t, e, n);
}
function $a(i, t, e, n) {
  const s = i._chart.getContext(),
    o = Hn(i.options),
    {
      _datasetIndex: r,
      options: { spanGaps: a },
    } = i,
    l = e.length,
    c = [];
  let h = o,
    f = t[0].start,
    d = f;
  function g(p, b, m, _) {
    const y = a ? -1 : 1;
    if (p !== b) {
      for (p += l; e[p % l].skip; ) p -= y;
      for (; e[b % l].skip; ) b += y;
      p % l !== b % l &&
        (c.push({
          start: p % l,
          end: b % l,
          loop: m,
          style: _,
        }),
        (h = _),
        (f = b % l));
    }
  }
  for (const p of t) {
    f = a ? f : p.start;
    let b = e[f % l],
      m;
    for (d = f + 1; d <= p.end; d++) {
      const _ = e[d % l];
      (m = Hn(
        n.setContext(
          Et(s, {
            type: 'segment',
            p0: b,
            p1: _,
            p0DataIndex: (d - 1) % l,
            p1DataIndex: d % l,
            datasetIndex: r,
          })
        )
      )),
        Ya(m, h) && g(f, d - 1, p.loop, h),
        (b = _),
        (h = m);
    }
    f < d - 1 && g(f, d - 1, p.loop, h);
  }
  return c;
}
function Hn(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function Ya(i, t) {
  if (!t) return !1;
  const e = [],
    n = function (s, o) {
      return Zi(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
    };
  return JSON.stringify(i, n) !== JSON.stringify(t, n);
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class Ua {
  constructor() {
    (this._request = null),
      (this._charts = /* @__PURE__ */ new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, n, s) {
    const o = e.listeners[s],
      r = e.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: e.initial,
        numSteps: r,
        currentStep: Math.min(n - e.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Vs.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) return;
      const o = n.items;
      let r = o.length - 1,
        a = !1,
        l;
      for (; r >= 0; --r)
        (l = o[r]),
          l._active
            ? (l._total > n.duration && (n.duration = l._total), l.tick(t), (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop());
      a && (s.draw(), this._notify(s, n, t, 'progress')),
        o.length || ((n.running = !1), this._notify(s, n, t, 'complete'), (n.initial = !1)),
        (e += o.length);
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return (
      n ||
        ((n = {
          running: !1,
          initial: !0,
          items: [],
          listeners: {
            complete: [],
            progress: [],
          },
        }),
        e.set(t, n)),
      n
    );
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((n, s) => Math.max(n, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const n = e.items;
    let s = n.length - 1;
    for (; s >= 0; --s) n[s].cancel();
    (e.items = []), this._notify(t, e, Date.now(), 'complete');
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var xt = /* @__PURE__ */ new Ua();
const $n = 'transparent',
  Xa = {
    boolean(i, t, e) {
      return e > 0.5 ? t : i;
    },
    color(i, t, e) {
      const n = En(i || $n),
        s = n.valid && En(t || $n);
      return s && s.valid ? s.mix(n, e).hexString() : t;
    },
    number(i, t, e) {
      return i + (t - i) * e;
    },
  };
class Ka {
  constructor(t, e, n, s) {
    const o = e[n];
    s = je([t.to, s, o, t.from]);
    const r = je([t.from, o, s]);
    (this._active = !0),
      (this._fn = t.fn || Xa[t.type || typeof r]),
      (this._easing = _e[t.easing] || _e.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = n),
      (this._from = r),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = n - this._start,
        r = this._duration - o;
      (this._start = n),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = je([t.to, e, s, t.from])),
        (this._from = je([t.from, s, e]));
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      n = this._duration,
      s = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (r || e < n)), !this._active)) {
      (this._target[s] = a), this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    (l = (e / n) % 2),
      (l = r && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[s] = this._fn(o, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({
        res: e,
        rej: n,
      });
    });
  }
  _notify(t) {
    const e = t ? 'res' : 'rej',
      n = this._promises || [];
    for (let s = 0; s < n.length; s++) n[s][e]();
  }
}
class io {
  constructor(t, e) {
    (this._chart = t), (this._properties = /* @__PURE__ */ new Map()), this.configure(e);
  }
  configure(t) {
    if (!E(t)) return;
    const e = Object.keys(U.animation),
      n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!E(o)) return;
      const r = {};
      for (const a of e) r[a] = o[a];
      ((V(o.properties) && o.properties) || [s]).forEach((a) => {
        (a === s || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options,
      s = Ga(t, n);
    if (!s) return [];
    const o = this._createAnimations(s, n);
    return (
      n.$shared &&
        qa(t.options.$animations, n).then(
          () => {
            t.options = n;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const n = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(e),
      a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === '$') continue;
      if (c === 'options') {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let f = o[c];
      const d = n.get(c);
      if (f)
        if (d && f.active()) {
          f.update(d, h, a);
          continue;
        } else f.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      (o[c] = f = new Ka(d, t, c, h)), s.push(f);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const n = this._createAnimations(t, e);
    if (n.length) return xt.add(this._chart, n), !0;
  }
}
function qa(i, t) {
  const e = [],
    n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = i[n[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Ga(i, t) {
  if (!t) return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return (
    e.$shared &&
      (i.options = e =
        Object.assign({}, e, {
          $shared: !1,
          $animations: {},
        })),
    e
  );
}
function Yn(i, t) {
  const e = (i && i.options) || {},
    n = e.reverse,
    s = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0;
  return {
    start: n ? o : s,
    end: n ? s : o,
  };
}
function Za(i, t, e) {
  if (e === !1) return !1;
  const n = Yn(i, e),
    s = Yn(t, e);
  return {
    top: s.end,
    right: n.end,
    bottom: s.start,
    left: n.start,
  };
}
function Ja(i) {
  let t, e, n, s;
  return (
    E(i) ? ((t = i.top), (e = i.right), (n = i.bottom), (s = i.left)) : (t = e = n = s = i),
    {
      top: t,
      right: e,
      bottom: n,
      left: s,
      disabled: i === !1,
    }
  );
}
function no(i, t) {
  const e = [],
    n = i._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s) e.push(n[s].index);
  return e;
}
function Un(i, t, e, n = {}) {
  const s = i.keys,
    o = n.mode === 'single';
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (((l = +s[r]), l === e)) {
        if (n.all) continue;
        break;
      }
      (c = i.values[l]), Z(c) && (o || t === 0 || te(t) === te(c)) && (t += c);
    }
    return t;
  }
}
function Qa(i) {
  const t = Object.keys(i),
    e = new Array(t.length);
  let n, s, o;
  for (n = 0, s = t.length; n < s; ++n)
    (o = t[n]),
      (e[n] = {
        x: o,
        y: i[o],
      });
  return e;
}
function Xn(i, t) {
  const e = i && i.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function tl(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function el(i) {
  const { min: t, max: e, minDefined: n, maxDefined: s } = i.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY,
  };
}
function il(i, t, e) {
  const n = i[t] || (i[t] = {});
  return n[e] || (n[e] = {});
}
function Kn(i, t, e, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = i[s.index];
    if ((e && o > 0) || (!e && o < 0)) return s.index;
  }
  return null;
}
function qn(i, t) {
  const { chart: e, _cachedMeta: n } = i,
    s = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: r, index: a } = n,
    l = o.axis,
    c = r.axis,
    h = tl(o, r, n),
    f = t.length;
  let d;
  for (let g = 0; g < f; ++g) {
    const p = t[g],
      { [l]: b, [c]: m } = p,
      _ = p._stacks || (p._stacks = {});
    (d = _[c] = il(s, h, b)),
      (d[a] = m),
      (d._top = Kn(d, r, !0, n.type)),
      (d._bottom = Kn(d, r, !1, n.type));
    const y = d._visualValues || (d._visualValues = {});
    y[a] = m;
  }
}
function Mi(i, t) {
  const e = i.scales;
  return Object.keys(e)
    .filter((n) => e[n].axis === t)
    .shift();
}
function nl(i, t) {
  return Et(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  });
}
function sl(i, t, e) {
  return Et(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: 'default',
    type: 'data',
  });
}
function re(i, t) {
  const e = i.controller.index,
    n = i.vScale && i.vScale.axis;
  if (n) {
    t = t || i._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][e] === void 0) return;
      delete o[n][e],
        o[n]._visualValues !== void 0 &&
          o[n]._visualValues[e] !== void 0 &&
          delete o[n]._visualValues[e];
    }
  }
}
const Si = (i) => i === 'reset' || i === 'none',
  Gn = (i, t) => (t ? i : Object.assign({}, i)),
  ol = (i, t, e) =>
    i &&
    !t.hidden &&
    t._stacked && {
      keys: no(e, !0),
      values: null,
    };
class ve {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = Xn(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && re(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      n = this.getDataset(),
      s = (f, d, g, p) => (f === 'x' ? d : f === 'r' ? p : g),
      o = (e.xAxisID = F(n.xAxisID, Mi(t, 'x'))),
      r = (e.yAxisID = F(n.yAxisID, Mi(t, 'y'))),
      a = (e.rAxisID = F(n.rAxisID, Mi(t, 'r'))),
      l = e.indexAxis,
      c = (e.iAxisID = s(l, o, r, a)),
      h = (e.vAxisID = s(l, r, o, a));
    (e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(r)),
      (e.rScale = this.getScaleForId(a)),
      (e.iScale = this.getScaleForId(c)),
      (e.vScale = this.getScaleForId(h));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Rn(this._data, this), t._stacked && re(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      n = this._data;
    if (E(e)) this._data = Qa(e);
    else if (n !== e) {
      if (n) {
        Rn(n, this);
        const s = this._cachedMeta;
        re(s), (s._parsed = []);
      }
      e && Object.isExtensible(e) && Fr(e, this), (this._syncList = []), (this._data = e);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    (e._stacked = Xn(e.vScale, e)),
      e.stack !== n.stack && ((s = !0), re(e), (e.stack = n.stack)),
      this._resyncElements(t),
      (s || o !== e._stacked) && qn(this, e._parsed);
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      n = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(n, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: s } = this,
      { iScale: o, _stacked: r } = n,
      a = o.axis;
    let l = t === 0 && e === s.length ? !0 : n._sorted,
      c = t > 0 && n._parsed[t - 1],
      h,
      f,
      d;
    if (this._parsing === !1) (n._parsed = s), (n._sorted = !0), (d = s);
    else {
      V(s[t])
        ? (d = this.parseArrayData(n, s, t, e))
        : E(s[t])
        ? (d = this.parseObjectData(n, s, t, e))
        : (d = this.parsePrimitiveData(n, s, t, e));
      const g = () => f[a] === null || (c && f[a] < c[a]);
      for (h = 0; h < e; ++h) (n._parsed[h + t] = f = d[h]), l && (g() && (l = !1), (c = f));
      n._sorted = l;
    }
    r && qn(this, d);
  }
  parsePrimitiveData(t, e, n, s) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      c = o.getLabels(),
      h = o === r,
      f = new Array(s);
    let d, g, p;
    for (d = 0, g = s; d < g; ++d)
      (p = d + n),
        (f[d] = {
          [a]: h || o.parse(c[p], p),
          [l]: r.parse(e[p], p),
        });
    return f;
  }
  parseArrayData(t, e, n, s) {
    const { xScale: o, yScale: r } = t,
      a = new Array(s);
    let l, c, h, f;
    for (l = 0, c = s; l < c; ++l)
      (h = l + n),
        (f = e[h]),
        (a[l] = {
          x: o.parse(f[0], h),
          y: r.parse(f[1], h),
        });
    return a;
  }
  parseObjectData(t, e, n, s) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = new Array(s);
    let h, f, d, g;
    for (h = 0, f = s; h < f; ++h)
      (d = h + n),
        (g = e[d]),
        (c[h] = {
          x: o.parse(ei(g, a), d),
          y: r.parse(ei(g, l), d),
        });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const s = this.chart,
      o = this._cachedMeta,
      r = e[t.axis],
      a = {
        keys: no(s, !0),
        values: e._stacks[t.axis]._visualValues,
      };
    return Un(a, r, o.index, {
      mode: n,
    });
  }
  updateRangeFromParsed(t, e, n, s) {
    const o = n[e.axis];
    let r = o === null ? NaN : o;
    const a = s && n._stacks[e.axis];
    s && a && ((s.values = a), (r = Un(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, e) {
    const n = this._cachedMeta,
      s = n._parsed,
      o = n._sorted && t === n.iScale,
      r = s.length,
      a = this._getOtherScale(t),
      l = ol(e, n, this.chart),
      c = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY,
      },
      { min: h, max: f } = el(a);
    let d, g;
    function p() {
      g = s[d];
      const b = g[a.axis];
      return !Z(g[t.axis]) || h > b || f < b;
    }
    for (d = 0; d < r && !(!p() && (this.updateRangeFromParsed(c, t, g, l), o)); ++d);
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!p()) {
          this.updateRangeFromParsed(c, t, g, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      n = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s) (r = e[s][t.axis]), Z(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = e.iScale,
      s = e.vScale,
      o = this.getParsed(t);
    return {
      label: n ? '' + n.getLabelForValue(o[n.axis]) : '',
      value: s ? '' + s.getLabelForValue(o[s.axis]) : '',
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || 'default'),
      (e._clip = Ja(F(this.options.clip, Za(e.xScale, e.yScale, this.getMaxOverflow()))));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      n = this._cachedMeta,
      s = n.data || [],
      o = e.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || s.length - a,
      c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const f = s[h];
      f.hidden || (f.active && c ? r.push(f) : f.draw(t, o));
    }
    for (h = 0; h < r.length; ++h) r[h].draw(t, o);
  }
  getStyle(t, e) {
    const n = e ? 'active' : 'default';
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(n)
      : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o = r.$context || (r.$context = sl(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o = this.$context || (this.$context = nl(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!e), (o.mode = n), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = 'default', n) {
    const s = e === 'active',
      o = this._cachedDataOpts,
      r = t + '-' + e,
      a = o[r],
      l = this.enableOptionSharing && ii(n);
    if (a) return Gn(a, l);
    const c = this.chart.config,
      h = c.datasetElementScopeKeys(this._type, t),
      f = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      d = c.getOptionScopes(this.getDataset(), h),
      g = Object.keys(U.elements[t]),
      p = () => this.getContext(n, s, e),
      b = c.resolveNamedOptions(d, g, p, f);
    return b.$shared && ((b.$shared = l), (o[r] = Object.freeze(Gn(b, l)))), b;
  }
  _resolveAnimations(t, e, n) {
    const s = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${e}`,
      a = o[r];
    if (a) return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config,
        f = h.datasetAnimationScopeKeys(this._type, e),
        d = h.getOptionScopes(this.getDataset(), f);
      l = h.createResolver(d, this.getContext(t, n, e));
    }
    const c = new io(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Si(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      o = this.getSharedOptions(n),
      r = this.includeOptions(e, o) || o !== s;
    return (
      this.updateSharedOptions(o, e, n),
      {
        sharedOptions: o,
        includeOptions: r,
      }
    );
  }
  updateElement(t, e, n, s) {
    Si(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !Si(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, n, s).update(t, {
      options: (!s && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, 'active', !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !0);
  }
  _resyncElements(t) {
    const e = this._data,
      n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const s = n.length,
      o = e.length,
      r = Math.min(o, s);
    r && this.parse(0, r),
      o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, n = !0) {
    const s = this._cachedMeta,
      o = s.data,
      r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--) c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, e), n && this.updateElements(o, t, e, 'reset');
  }
  updateElements(t, e, n, s) {}
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, e);
      n._stacked && re(n, s);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, n, s] = t;
      this[e](n, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(['_removeElements', t, e]);
    const n = arguments.length - 2;
    n && this._sync(['_insertElements', t, n]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
O(ve, 'defaults', {}), O(ve, 'datasetElementType', null), O(ve, 'dataElementType', null);
class qe extends ve {
  initialize() {
    (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: n, data: s = [], _dataset: o } = e,
      r = this.chart._animationsDisabled;
    let { start: a, count: l } = jr(e, s, r);
    (this._drawStart = a),
      (this._drawCount = l),
      Nr(e) && ((a = 0), (l = s.length)),
      (n._chart = this.chart),
      (n._datasetIndex = this.index),
      (n._decimated = !!o._decimated),
      (n.points = s);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(
        n,
        void 0,
        {
          animated: !r,
          options: c,
        },
        t
      ),
      this.updateElements(s, a, l, t);
  }
  updateElements(t, e, n, s) {
    const o = s === 'reset',
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: h, includeOptions: f } = this._getSharedOptions(e, s),
      d = r.axis,
      g = a.axis,
      { spanGaps: p, segment: b } = this.options,
      m = Me(p) ? p : Number.POSITIVE_INFINITY,
      _ = this.chart._animationsDisabled || o || s === 'none',
      y = e + n,
      M = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let v = 0; v < M; ++v) {
      const T = t[v],
        S = _ ? T : {};
      if (v < e || v >= y) {
        S.skip = !0;
        continue;
      }
      const C = this.getParsed(v),
        D = j(C[g]),
        N = (S[d] = r.getPixelForValue(C[d], v)),
        W = (S[g] =
          o || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, C, l) : C[g], v));
      (S.skip = isNaN(N) || isNaN(W) || D),
        (S.stop = v > 0 && Math.abs(C[d] - w[d]) > m),
        b && ((S.parsed = C), (S.raw = c.data[v])),
        f && (S.options = h || this.resolveDataElementOptions(v, T.active ? 'active' : s)),
        _ || this.updateElement(T, v, S, s),
        (w = C);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      n = (e.options && e.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return n;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
O(qe, 'id', 'line'),
  O(qe, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }),
  O(qe, 'overrides', {
    scales: {
      _index_: {
        type: 'category',
      },
      _value_: {
        type: 'linear',
      },
    },
  });
function Vt() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.'
  );
}
class sn {
  constructor(t) {
    O(this, 'options');
    this.options = t || {};
  }
  /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */
  static override(t) {
    Object.assign(sn.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {}
  formats() {
    return Vt();
  }
  parse() {
    return Vt();
  }
  format() {
    return Vt();
  }
  add() {
    return Vt();
  }
  diff() {
    return Vt();
  }
  startOf() {
    return Vt();
  }
  endOf() {
    return Vt();
  }
}
var rl = {
  _date: sn,
};
function al(i, t, e, n) {
  const { controller: s, data: o, _sorted: r } = i,
    a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== 'r' && r && o.length) {
    const l = a._reversePixels ? Er : Ut;
    if (n) {
      if (s._sharedOptions) {
        const c = o[0],
          h = typeof c.getRange == 'function' && c.getRange(t);
        if (h) {
          const f = l(o, t, e - h),
            d = l(o, t, e + h);
          return {
            lo: f.lo,
            hi: d.hi,
          };
        }
      }
    } else return l(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1,
  };
}
function Te(i, t, e, n, s) {
  const o = i.getSortedVisibleDatasetMetas(),
    r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a],
      { lo: f, hi: d } = al(o[a], t, r, s);
    for (let g = f; g <= d; ++g) {
      const p = h[g];
      p.skip || n(p, c, g);
    }
  }
}
function ll(i) {
  const t = i.indexOf('x') !== -1,
    e = i.indexOf('y') !== -1;
  return function (n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0,
      r = e ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Ci(i, t, e, n, s) {
  const o = [];
  return (
    (!s && !i.isPointInArea(t)) ||
      Te(
        i,
        e,
        t,
        function (a, l, c) {
          (!s && !wt(a, i.chartArea, 0)) ||
            (a.inRange(t.x, t.y, n) &&
              o.push({
                element: a,
                datasetIndex: l,
                index: c,
              }));
        },
        !0
      ),
    o
  );
}
function cl(i, t, e, n) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps(['startAngle', 'endAngle'], n),
      { angle: f } = Dr(r, {
        x: t.x,
        y: t.y,
      });
    Ns(f, c, h) &&
      s.push({
        element: r,
        datasetIndex: a,
        index: l,
      });
  }
  return Te(i, e, t, o), s;
}
function hl(i, t, e, n, s, o) {
  let r = [];
  const a = ll(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, f, d) {
    const g = h.inRange(t.x, t.y, s);
    if (n && !g) return;
    const p = h.getCenterPoint(s);
    if (!(!!o || i.isPointInArea(p)) && !g) return;
    const m = a(t, p);
    m < l
      ? ((r = [
          {
            element: h,
            datasetIndex: f,
            index: d,
          },
        ]),
        (l = m))
      : m === l &&
        r.push({
          element: h,
          datasetIndex: f,
          index: d,
        });
  }
  return Te(i, e, t, c), r;
}
function Pi(i, t, e, n, s, o) {
  return !o && !i.isPointInArea(t) ? [] : e === 'r' && !n ? cl(i, t, e, s) : hl(i, t, e, n, s, o);
}
function Zn(i, t, e, n, s) {
  const o = [],
    r = e === 'x' ? 'inXRange' : 'inYRange';
  let a = !1;
  return (
    Te(i, e, t, (l, c, h) => {
      l[r](t[e], s) &&
        (o.push({
          element: l,
          datasetIndex: c,
          index: h,
        }),
        (a = a || l.inRange(t.x, t.y, s)));
    }),
    n && !a ? [] : o
  );
}
var fl = {
  evaluateInteractionItems: Te,
  modes: {
    index(i, t, e, n) {
      const s = $t(t, i),
        o = e.axis || 'x',
        r = e.includeInvisible || !1,
        a = e.intersect ? Ci(i, s, o, n, r) : Pi(i, s, o, !1, n, r),
        l = [];
      return a.length
        ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
            const h = a[0].index,
              f = c.data[h];
            f &&
              !f.skip &&
              l.push({
                element: f,
                datasetIndex: c.index,
                index: h,
              });
          }),
          l)
        : [];
    },
    dataset(i, t, e, n) {
      const s = $t(t, i),
        o = e.axis || 'xy',
        r = e.includeInvisible || !1;
      let a = e.intersect ? Ci(i, s, o, n, r) : Pi(i, s, o, !1, n, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h,
          });
      }
      return a;
    },
    point(i, t, e, n) {
      const s = $t(t, i),
        o = e.axis || 'xy',
        r = e.includeInvisible || !1;
      return Ci(i, s, o, n, r);
    },
    nearest(i, t, e, n) {
      const s = $t(t, i),
        o = e.axis || 'xy',
        r = e.includeInvisible || !1;
      return Pi(i, s, o, e.intersect, n, r);
    },
    x(i, t, e, n) {
      const s = $t(t, i);
      return Zn(i, s, 'x', e.intersect, n);
    },
    y(i, t, e, n) {
      const s = $t(t, i);
      return Zn(i, s, 'y', e.intersect, n);
    },
  },
};
const so = ['left', 'top', 'right', 'bottom'];
function ae(i, t) {
  return i.filter((e) => e.pos === t);
}
function Jn(i, t) {
  return i.filter((e) => so.indexOf(e.pos) === -1 && e.box.axis === t);
}
function le(i, t) {
  return i.sort((e, n) => {
    const s = t ? n : e,
      o = t ? e : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function dl(i) {
  const t = [];
  let e, n, s, o, r, a;
  for (e = 0, n = (i || []).length; e < n; ++e)
    (s = i[e]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 },
      } = s),
      t.push({
        index: e,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: r && o + r,
        stackWeight: a,
      });
  return t;
}
function ul(i) {
  const t = {};
  for (const e of i) {
    const { stack: n, pos: s, stackWeight: o } = e;
    if (!n || !so.includes(s)) continue;
    const r =
      t[n] ||
      (t[n] = {
        count: 0,
        placed: 0,
        weight: 0,
        size: 0,
      });
    r.count++, (r.weight += o);
  }
  return t;
}
function gl(i, t) {
  const e = ul(i),
    { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box,
      c = e[a.stack],
      h = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = h ? h * n : l && t.availableWidth), (a.height = s))
      : ((a.width = n), (a.height = h ? h * s : l && t.availableHeight));
  }
  return e;
}
function pl(i) {
  const t = dl(i),
    e = le(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    n = le(ae(t, 'left'), !0),
    s = le(ae(t, 'right')),
    o = le(ae(t, 'top'), !0),
    r = le(ae(t, 'bottom')),
    a = Jn(t, 'x'),
    l = Jn(t, 'y');
  return {
    fullSize: e,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: ae(t, 'chartArea'),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(r).concat(a),
  };
}
function Qn(i, t, e, n) {
  return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
}
function oo(i, t) {
  (i.top = Math.max(i.top, t.top)),
    (i.left = Math.max(i.left, t.left)),
    (i.bottom = Math.max(i.bottom, t.bottom)),
    (i.right = Math.max(i.right, t.right));
}
function ml(i, t, e, n) {
  const { pos: s, box: o } = e,
    r = i.maxPadding;
  if (!E(s)) {
    e.size && (i[s] -= e.size);
    const f = n[e.stack] || {
      size: 0,
      count: 1,
    };
    (f.size = Math.max(f.size, e.horizontal ? o.height : o.width)),
      (e.size = f.size / f.count),
      (i[s] += e.size);
  }
  o.getPadding && oo(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Qn(r, i, 'left', 'right')),
    l = Math.max(0, t.outerHeight - Qn(r, i, 'top', 'bottom')),
    c = a !== i.w,
    h = l !== i.h;
  return (
    (i.w = a),
    (i.h = l),
    e.horizontal
      ? {
          same: c,
          other: h,
        }
      : {
          same: h,
          other: c,
        }
  );
}
function bl(i) {
  const t = i.maxPadding;
  function e(n) {
    const s = Math.max(t[n] - i[n], 0);
    return (i[n] += s), s;
  }
  (i.y += e('top')), (i.x += e('left')), e('right'), e('bottom');
}
function _l(i, t) {
  const e = t.maxPadding;
  function n(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
    return (
      s.forEach((r) => {
        o[r] = Math.max(t[r], e[r]);
      }),
      o
    );
  }
  return n(i ? ['left', 'right'] : ['top', 'bottom']);
}
function de(i, t, e, n) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    (a = i[o]), (l = a.box), l.update(a.width || t.w, a.height || t.h, _l(a.horizontal, t));
    const { same: f, other: d } = ml(t, e, a, n);
    (c |= f && s.length), (h = h || d), l.fullSize || s.push(a);
  }
  return (c && de(s, t, e, n)) || h;
}
function Ve(i, t, e, n, s) {
  (i.top = e), (i.left = t), (i.right = t + n), (i.bottom = e + s), (i.width = n), (i.height = s);
}
function ts(i, t, e, n) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box,
      c = n[a.stack] || {
        count: 1,
        placed: 0,
        weight: 1,
      },
      h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const f = t.w * h,
        d = c.size || l.height;
      ii(c.start) && (r = c.start),
        l.fullSize
          ? Ve(l, s.left, r, e.outerWidth - s.right - s.left, d)
          : Ve(l, t.left + c.placed, r, f, d),
        (c.start = r),
        (c.placed += f),
        (r = l.bottom);
    } else {
      const f = t.h * h,
        d = c.size || l.width;
      ii(c.start) && (o = c.start),
        l.fullSize
          ? Ve(l, o, s.top, d, e.outerHeight - s.bottom - s.top)
          : Ve(l, o, t.top + c.placed, d, f),
        (c.start = o),
        (c.placed += f),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = r);
}
var Dt = {
  addBox(i, t) {
    i.boxes || (i.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
  },
  update(i, t, e, n) {
    if (!i) return;
    const s = rt(i.options.layout.padding),
      o = Math.max(t - s.width, 0),
      r = Math.max(e - s.height, 0),
      a = pl(i.boxes),
      l = a.vertical,
      c = a.horizontal;
    I(i.boxes, (b) => {
      typeof b.beforeLayout == 'function' && b.beforeLayout();
    });
    const h =
        l.reduce((b, m) => (m.box.options && m.box.options.display === !1 ? b : b + 1), 0) || 1,
      f = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: s,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / h,
        hBoxMaxHeight: r / 2,
      }),
      d = Object.assign({}, s);
    oo(d, rt(n));
    const g = Object.assign(
        {
          maxPadding: d,
          w: o,
          h: r,
          x: s.left,
          y: s.top,
        },
        s
      ),
      p = gl(l.concat(c), f);
    de(a.fullSize, g, f, p),
      de(l, g, f, p),
      de(c, g, f, p) && de(l, g, f, p),
      bl(g),
      ts(a.leftAndTop, g, f, p),
      (g.x += g.w),
      (g.y += g.h),
      ts(a.rightAndBottom, g, f, p),
      (i.chartArea = {
        left: g.left,
        top: g.top,
        right: g.left + g.w,
        bottom: g.top + g.h,
        height: g.h,
        width: g.w,
      }),
      I(a.chartArea, (b) => {
        const m = b.box;
        Object.assign(m, i.chartArea),
          m.update(g.w, g.h, {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          });
      });
  },
};
class ro {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {}
  removeEventListener(t, e, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (n = n || t.height),
      {
        width: e,
        height: Math.max(0, s ? Math.floor(e / s) : n),
      }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class xl extends ro {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ge = '$chartjs',
  yl = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  es = (i) => i === null || i === '';
function vl(i, t) {
  const e = i.style,
    n = i.getAttribute('height'),
    s = i.getAttribute('width');
  if (
    ((i[Ge] = {
      initial: {
        height: n,
        width: s,
        style: {
          display: e.display,
          height: e.height,
          width: e.width,
        },
      },
    }),
    (e.display = e.display || 'block'),
    (e.boxSizing = e.boxSizing || 'border-box'),
    es(s))
  ) {
    const o = Nn(i, 'width');
    o !== void 0 && (i.width = o);
  }
  if (es(n))
    if (i.style.height === '') i.height = i.width / (t || 2);
    else {
      const o = Nn(i, 'height');
      o !== void 0 && (i.height = o);
    }
  return i;
}
const ao = Ra
  ? {
      passive: !0,
    }
  : !1;
function kl(i, t, e) {
  i.addEventListener(t, e, ao);
}
function wl(i, t, e) {
  i.canvas.removeEventListener(t, e, ao);
}
function Ml(i, t) {
  const e = yl[i.type] || i.type,
    { x: n, y: s } = $t(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null,
  };
}
function ri(i, t) {
  for (const e of i) if (e === t || e.contains(t)) return !0;
}
function Sl(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o) (r = r || ri(a.addedNodes, n)), (r = r && !ri(a.removedNodes, n));
      r && e();
    });
  return (
    s.observe(document, {
      childList: !0,
      subtree: !0,
    }),
    s
  );
}
function Cl(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o) (r = r || ri(a.removedNodes, n)), (r = r && !ri(a.addedNodes, n));
      r && e();
    });
  return (
    s.observe(document, {
      childList: !0,
      subtree: !0,
    }),
    s
  );
}
const Ce = /* @__PURE__ */ new Map();
let is = 0;
function lo() {
  const i = window.devicePixelRatio;
  i !== is &&
    ((is = i),
    Ce.forEach((t, e) => {
      e.currentDevicePixelRatio !== i && t();
    }));
}
function Pl(i, t) {
  Ce.size || window.addEventListener('resize', lo), Ce.set(i, t);
}
function Ol(i) {
  Ce.delete(i), Ce.size || window.removeEventListener('resize', lo);
}
function Tl(i, t, e) {
  const n = i.canvas,
    s = n && nn(n);
  if (!s) return;
  const o = Hs((a, l) => {
      const c = s.clientWidth;
      e(a, l), c < s.clientWidth && e();
    }, window),
    r = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        h = l.contentRect.height;
      (c === 0 && h === 0) || o(c, h);
    });
  return r.observe(s), Pl(i, o), r;
}
function Oi(i, t, e) {
  e && e.disconnect(), t === 'resize' && Ol(i);
}
function Dl(i, t, e) {
  const n = i.canvas,
    s = Hs((o) => {
      i.ctx !== null && e(Ml(o, i));
    }, i);
  return kl(n, t, s), s;
}
class Rl extends ro {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext('2d');
    return n && n.canvas === t ? (vl(t, e), n) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ge]) return !1;
    const n = e[Ge].initial;
    ['height', 'width'].forEach((o) => {
      const r = n[o];
      j(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = n.style || {};
    return (
      Object.keys(s).forEach((o) => {
        e.style[o] = s[o];
      }),
      (e.width = e.width),
      delete e[Ge],
      !0
    );
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      r =
        {
          attach: Sl,
          detach: Cl,
          resize: Tl,
        }[e] || Dl;
    s[e] = r(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}),
      s = n[e];
    if (!s) return;
    (
      ({
        attach: Oi,
        detach: Oi,
        resize: Oi,
      })[e] || wl
    )(t, e, s),
      (n[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, s) {
    return Da(t, e, n, s);
  }
  isAttached(t) {
    const e = nn(t);
    return !!(e && e.isConnected);
  }
}
function Al(i) {
  return !to() || (typeof OffscreenCanvas < 'u' && i instanceof OffscreenCanvas) ? xl : Rl;
}
class Lt {
  constructor() {
    O(this, 'x');
    O(this, 'y');
    O(this, 'active', !1);
    O(this, 'options');
    O(this, '$animations');
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps(['x', 'y'], t);
    return {
      x: e,
      y: n,
    };
  }
  hasValue() {
    return Me(this.x) && Me(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n) return this;
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
      }),
      s
    );
  }
}
O(Lt, 'defaults', {}), O(Lt, 'defaultRoutes');
function Ll(i, t) {
  const e = i.options.ticks,
    n = El(i),
    s = Math.min(e.maxTicksLimit || n, n),
    o = e.major.enabled ? Fl(t) : [],
    r = o.length,
    a = o[0],
    l = o[r - 1],
    c = [];
  if (r > s) return zl(t, c, o, r / s), c;
  const h = Il(o, t, s);
  if (r > 0) {
    let f, d;
    const g = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (He(t, c, h, j(g) ? 0 : a - g, a), f = 0, d = r - 1; f < d; f++)
      He(t, c, h, o[f], o[f + 1]);
    return He(t, c, h, l, j(g) ? t.length : l + g), c;
  }
  return He(t, c, h), c;
}
function El(i) {
  const t = i.options.offset,
    e = i._tickSize(),
    n = i._length / e + (t ? 0 : 1),
    s = i._maxLength / e;
  return Math.floor(Math.min(n, s));
}
function Il(i, t, e) {
  const n = Bl(i),
    s = t.length / e;
  if (!n) return Math.max(s, 1);
  const o = Or(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s) return l;
  }
  return Math.max(s, 1);
}
function Fl(i) {
  const t = [];
  let e, n;
  for (e = 0, n = i.length; e < n; e++) i[e].major && t.push(e);
  return t;
}
function zl(i, t, e, n) {
  let s = 0,
    o = e[0],
    r;
  for (n = Math.ceil(n), r = 0; r < i.length; r++) r === o && (t.push(i[r]), s++, (o = e[s * n]));
}
function He(i, t, e, n, s) {
  const o = F(n, 0),
    r = Math.min(F(s, i.length), i.length);
  let a = 0,
    l,
    c,
    h;
  for (e = Math.ceil(e), s && ((l = s - n), (e = l / Math.floor(l / e))), h = o; h < 0; )
    a++, (h = Math.round(o + a * e));
  for (c = Math.max(o, 0); c < r; c++) c === h && (t.push(i[c]), a++, (h = Math.round(o + a * e)));
}
function Bl(i) {
  const t = i.length;
  let e, n;
  if (t < 2) return !1;
  for (n = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== n) return !1;
  return n;
}
const jl = (i) => (i === 'left' ? 'right' : i === 'right' ? 'left' : i),
  ns = (i, t, e) => (t === 'top' || t === 'left' ? i[t] + e : i[t] - e),
  ss = (i, t) => Math.min(t || i, i);
function os(i, t) {
  const e = [],
    n = i.length / t,
    s = i.length;
  let o = 0;
  for (; o < s; o += n) e.push(i[Math.floor(o)]);
  return e;
}
function Nl(i, t, e) {
  const n = i.ticks.length,
    s = Math.min(t, n - 1),
    o = i._startPixel,
    r = i._endPixel,
    a = 1e-6;
  let l = i.getPixelForTick(s),
    c;
  if (
    !(
      e &&
      (n === 1
        ? (c = Math.max(l - o, r - l))
        : t === 0
        ? (c = (i.getPixelForTick(1) - l) / 2)
        : (c = (l - i.getPixelForTick(s - 1)) / 2),
      (l += s < t ? c : -c),
      l < o - a || l > r + a)
    )
  )
    return l;
}
function Wl(i, t) {
  I(i, (e) => {
    const n = e.gc,
      s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete e.data[n[o]];
      n.splice(0, s);
    }
  });
}
function ce(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function rs(i, t) {
  if (!i.display) return 0;
  const e = et(i.font, t),
    n = rt(i.padding);
  return (V(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
}
function Vl(i, t) {
  return Et(i, {
    scale: t,
    type: 'scale',
  });
}
function Hl(i, t, e) {
  return Et(i, {
    tick: e,
    index: t,
    type: 'tick',
  });
}
function $l(i, t, e) {
  let n = $s(i);
  return ((e && t !== 'right') || (!e && t === 'right')) && (n = jl(n)), n;
}
function Yl(i, t, e, n) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = i,
    { chartArea: c, scales: h } = l;
  let f = 0,
    d,
    g,
    p;
  const b = r - s,
    m = a - o;
  if (i.isHorizontal()) {
    if (((g = be(n, o, a)), E(e))) {
      const _ = Object.keys(e)[0],
        y = e[_];
      p = h[_].getPixelForValue(y) + b - t;
    } else e === 'center' ? (p = (c.bottom + c.top) / 2 + b - t) : (p = ns(i, e, t));
    d = a - o;
  } else {
    if (E(e)) {
      const _ = Object.keys(e)[0],
        y = e[_];
      g = h[_].getPixelForValue(y) - m + t;
    } else e === 'center' ? (g = (c.left + c.right) / 2 - m + t) : (g = ns(i, e, t));
    (p = be(n, r, s)), (f = e === 'left' ? -st : st);
  }
  return {
    titleX: g,
    titleY: p,
    maxWidth: d,
    rotation: f,
  };
}
class qt extends Lt {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: s } = this;
    return (
      (t = ot(t, Number.POSITIVE_INFINITY)),
      (e = ot(e, Number.NEGATIVE_INFINITY)),
      (n = ot(n, Number.POSITIVE_INFINITY)),
      (s = ot(s, Number.NEGATIVE_INFINITY)),
      {
        min: ot(t, n),
        max: ot(e, s),
        minDefined: Z(t),
        maxDefined: Z(e),
      }
    );
  }
  getMinMax(t) {
    let { min: e, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(),
      r;
    if (s && o)
      return {
        min: e,
        max: n,
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (r = a[l].controller.getMinMax(this, t)),
        s || (e = Math.min(e, r.min)),
        o || (n = Math.max(n, r.max));
    return (
      (e = o && e > n ? n : e),
      (n = s && e > n ? e : n),
      {
        min: ot(e, ot(n, e)),
        max: ot(n, ot(e, n)),
      }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    $(this.options.beforeUpdate, [this]);
  }
  update(t, e, n) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options,
      a = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n =
        Object.assign(
          {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
          n
        )),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + n.left + n.right
        : this.height + n.top + n.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = la(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? os(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === 'auto') &&
        ((this.ticks = Ll(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      e,
      n;
    this.isHorizontal()
      ? ((e = this.left), (n = this.right))
      : ((e = this.top), (n = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = n),
      (this._reversePixels = t),
      (this._length = n - e),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    $(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    $(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    $(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), $(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    $(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      (o = t[n]), (o.label = $(e.callback, [o.value, n, t], this));
  }
  afterTickToLabelConversion() {
    $(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    $(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      n = ss(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      o = e.maxRotation;
    let r = s,
      a,
      l,
      c;
    if (!this._isVisible() || !e.display || s >= o || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(),
      f = h.widest.width,
      d = h.highest.height,
      g = ct(this.chart.width - f, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / n : g / (n - 1)),
      f + 6 > a &&
        ((a = g / (n - (t.offset ? 0.5 : 1))),
        (l = this.maxHeight - ce(t.grid) - e.padding - rs(t.title, this.chart.options.font)),
        (c = Math.sqrt(f * f + d * d)),
        (r = qi(
          Math.min(
            Math.asin(ct((h.highest.height + 6) / a, -1, 1)),
            Math.asin(ct(l / c, -1, 1)) - Math.asin(ct(d / c, -1, 1))
          )
        )),
        (r = Math.max(s, Math.min(o, r)))),
      (this.labelRotation = r);
  }
  afterCalculateLabelRotation() {
    $(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    $(this.options.beforeFit, [this]);
  }
  fit() {
    const t = {
        width: 0,
        height: 0,
      },
      {
        chart: e,
        options: { ticks: n, title: s, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal();
    if (r) {
      const l = rs(s, e.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = ce(o) + l))
          : ((t.height = this.maxHeight), (t.width = ce(o) + l)),
        n.display && this.ticks.length)
      ) {
        const { first: c, last: h, widest: f, highest: d } = this._getLabelSizes(),
          g = n.padding * 2,
          p = Tt(this.labelRotation),
          b = Math.cos(p),
          m = Math.sin(p);
        if (a) {
          const _ = n.mirror ? 0 : m * f.width + b * d.height;
          t.height = Math.min(this.maxHeight, t.height + _ + g);
        } else {
          const _ = n.mirror ? 0 : b * f.width + m * d.height;
          t.width = Math.min(this.maxWidth, t.width + _ + g);
        }
        this._calculatePadding(c, h, m, b);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length = e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, n, s) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left,
        f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0,
        g = 0;
      l
        ? c
          ? ((d = s * t.width), (g = n * e.height))
          : ((d = n * t.height), (g = s * e.width))
        : o === 'start'
        ? (g = e.width)
        : o === 'end'
        ? (d = t.width)
        : o !== 'inner' && ((d = t.width / 2), (g = e.width / 2)),
        (this.paddingLeft = Math.max(((d - h + r) * this.width) / (this.width - h), 0)),
        (this.paddingRight = Math.max(((g - f + r) * this.width) / (this.width - f), 0));
    } else {
      let h = e.height / 2,
        f = t.height / 2;
      o === 'start' ? ((h = 0), (f = t.height)) : o === 'end' && ((h = e.height), (f = 0)),
        (this.paddingTop = h + r),
        (this.paddingBottom = f + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
  }
  afterFit() {
    $(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === 'top' || e === 'bottom' || t === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, n;
    for (e = 0, n = t.length; e < n; e++) j(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      e < n.length && (n = os(n, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit));
    }
    return t;
  }
  _computeLabelSizes(t, e, n) {
    const { ctx: s, _longestTextCache: o } = this,
      r = [],
      a = [],
      l = Math.floor(e / ss(e, n));
    let c = 0,
      h = 0,
      f,
      d,
      g,
      p,
      b,
      m,
      _,
      y,
      M,
      w,
      v;
    for (f = 0; f < e; f += l) {
      if (
        ((p = t[f].label),
        (b = this._resolveTickFontOptions(f)),
        (s.font = m = b.string),
        (_ = o[m] =
          o[m] || {
            data: {},
            gc: [],
          }),
        (y = b.lineHeight),
        (M = w = 0),
        !j(p) && !V(p))
      )
        (M = si(s, _.data, _.gc, M, p)), (w = y);
      else if (V(p))
        for (d = 0, g = p.length; d < g; ++d)
          (v = p[d]), !j(v) && !V(v) && ((M = si(s, _.data, _.gc, M, v)), (w += y));
      r.push(M), a.push(w), (c = Math.max(M, c)), (h = Math.max(w, h));
    }
    Wl(o, e);
    const T = r.indexOf(c),
      S = a.indexOf(h),
      C = (D) => ({
        width: r[D] || 0,
        height: a[D] || 0,
      });
    return {
      first: C(0),
      last: C(e - 1),
      widest: C(T),
      highest: C(S),
      widths: r,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Ar(this._alignToPixels ? Wt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return n.$context || (n.$context = Hl(this.getContext(), t, n));
    }
    return this.$context || (this.$context = Vl(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = Tt(this.labelRotation),
      n = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? (l * n > a * s ? a / n : l / s) : l * s < a * n ? l / n : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      n = this.chart,
      s = this.options,
      { grid: o, position: r, border: a } = s,
      l = o.offset,
      c = this.isHorizontal(),
      f = this.ticks.length + (l ? 1 : 0),
      d = ce(o),
      g = [],
      p = a.setContext(this.getContext()),
      b = p.display ? p.width : 0,
      m = b / 2,
      _ = function (K) {
        return Wt(n, K, b);
      };
    let y, M, w, v, T, S, C, D, N, W, H, X;
    if (r === 'top')
      (y = _(this.bottom)), (S = this.bottom - d), (D = y - m), (W = _(t.top) + m), (X = t.bottom);
    else if (r === 'bottom')
      (y = _(this.top)), (W = t.top), (X = _(t.bottom) - m), (S = y + m), (D = this.top + d);
    else if (r === 'left')
      (y = _(this.right)), (T = this.right - d), (C = y - m), (N = _(t.left) + m), (H = t.right);
    else if (r === 'right')
      (y = _(this.left)), (N = t.left), (H = _(t.right) - m), (T = y + m), (C = this.left + d);
    else if (e === 'x') {
      if (r === 'center') y = _((t.top + t.bottom) / 2 + 0.5);
      else if (E(r)) {
        const K = Object.keys(r)[0],
          Q = r[K];
        y = _(this.chart.scales[K].getPixelForValue(Q));
      }
      (W = t.top), (X = t.bottom), (S = y + m), (D = S + d);
    } else if (e === 'y') {
      if (r === 'center') y = _((t.left + t.right) / 2);
      else if (E(r)) {
        const K = Object.keys(r)[0],
          Q = r[K];
        y = _(this.chart.scales[K].getPixelForValue(Q));
      }
      (T = y - m), (C = T - d), (N = t.left), (H = t.right);
    }
    const J = F(s.ticks.maxTicksLimit, f),
      z = Math.max(1, Math.ceil(f / J));
    for (M = 0; M < f; M += z) {
      const K = this.getContext(M),
        Q = o.setContext(K),
        It = a.setContext(K),
        Ft = Q.lineWidth,
        gt = Q.color,
        zt = It.dash || [],
        pt = It.dashOffset,
        St = Q.tickWidth,
        Bt = Q.tickColor,
        jt = Q.tickBorderDash || [],
        mt = Q.tickBorderDashOffset;
      (w = Nl(this, M, l)),
        w !== void 0 &&
          ((v = Wt(n, w, Ft)),
          c ? (T = C = N = H = v) : (S = D = W = X = v),
          g.push({
            tx1: T,
            ty1: S,
            tx2: C,
            ty2: D,
            x1: N,
            y1: W,
            x2: H,
            y2: X,
            width: Ft,
            color: gt,
            borderDash: zt,
            borderDashOffset: pt,
            tickWidth: St,
            tickColor: Bt,
            tickBorderDash: jt,
            tickBorderDashOffset: mt,
          }));
    }
    return (this._ticksLength = f), (this._borderValue = y), g;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      n = this.options,
      { position: s, ticks: o } = n,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: h, mirror: f } = o,
      d = ce(n.grid),
      g = d + h,
      p = f ? -h : g,
      b = -Tt(this.labelRotation),
      m = [];
    let _,
      y,
      M,
      w,
      v,
      T,
      S,
      C,
      D,
      N,
      W,
      H,
      X = 'middle';
    if (s === 'top') (T = this.bottom - p), (S = this._getXAxisLabelAlignment());
    else if (s === 'bottom') (T = this.top + p), (S = this._getXAxisLabelAlignment());
    else if (s === 'left') {
      const z = this._getYAxisLabelAlignment(d);
      (S = z.textAlign), (v = z.x);
    } else if (s === 'right') {
      const z = this._getYAxisLabelAlignment(d);
      (S = z.textAlign), (v = z.x);
    } else if (e === 'x') {
      if (s === 'center') T = (t.top + t.bottom) / 2 + g;
      else if (E(s)) {
        const z = Object.keys(s)[0],
          K = s[z];
        T = this.chart.scales[z].getPixelForValue(K) + g;
      }
      S = this._getXAxisLabelAlignment();
    } else if (e === 'y') {
      if (s === 'center') v = (t.left + t.right) / 2 - g;
      else if (E(s)) {
        const z = Object.keys(s)[0],
          K = s[z];
        v = this.chart.scales[z].getPixelForValue(K);
      }
      S = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === 'y' && (l === 'start' ? (X = 'top') : l === 'end' && (X = 'bottom'));
    const J = this._getLabelSizes();
    for (_ = 0, y = a.length; _ < y; ++_) {
      (M = a[_]), (w = M.label);
      const z = o.setContext(this.getContext(_));
      (C = this.getPixelForTick(_) + o.labelOffset),
        (D = this._resolveTickFontOptions(_)),
        (N = D.lineHeight),
        (W = V(w) ? w.length : 1);
      const K = W / 2,
        Q = z.color,
        It = z.textStrokeColor,
        Ft = z.textStrokeWidth;
      let gt = S;
      r
        ? ((v = C),
          S === 'inner' &&
            (_ === y - 1
              ? (gt = this.options.reverse ? 'left' : 'right')
              : _ === 0
              ? (gt = this.options.reverse ? 'right' : 'left')
              : (gt = 'center')),
          s === 'top'
            ? c === 'near' || b !== 0
              ? (H = -W * N + N / 2)
              : c === 'center'
              ? (H = -J.highest.height / 2 - K * N + N)
              : (H = -J.highest.height + N / 2)
            : c === 'near' || b !== 0
            ? (H = N / 2)
            : c === 'center'
            ? (H = J.highest.height / 2 - K * N)
            : (H = J.highest.height - W * N),
          f && (H *= -1),
          b !== 0 && !z.showLabelBackdrop && (v += (N / 2) * Math.sin(b)))
        : ((T = C), (H = ((1 - W) * N) / 2));
      let zt;
      if (z.showLabelBackdrop) {
        const pt = rt(z.backdropPadding),
          St = J.heights[_],
          Bt = J.widths[_];
        let jt = H - pt.top,
          mt = 0 - pt.left;
        switch (X) {
          case 'middle':
            jt -= St / 2;
            break;
          case 'bottom':
            jt -= St;
            break;
        }
        switch (S) {
          case 'center':
            mt -= Bt / 2;
            break;
          case 'right':
            mt -= Bt;
            break;
        }
        zt = {
          left: mt,
          top: jt,
          width: Bt + pt.width,
          height: St + pt.height,
          color: z.backdropColor,
        };
      }
      m.push({
        label: w,
        font: D,
        textOffset: H,
        options: {
          rotation: b,
          color: Q,
          strokeColor: It,
          strokeWidth: Ft,
          textAlign: gt,
          textBaseline: X,
          translation: [v, T],
          backdrop: zt,
        },
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Tt(this.labelRotation)) return t === 'top' ? 'left' : 'right';
    let s = 'center';
    return (
      e.align === 'start'
        ? (s = 'left')
        : e.align === 'end'
        ? (s = 'right')
        : e.align === 'inner' && (s = 'inner'),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: n, mirror: s, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      l = r.widest.width;
    let c, h;
    return (
      e === 'left'
        ? s
          ? ((h = this.right + o),
            n === 'near'
              ? (c = 'left')
              : n === 'center'
              ? ((c = 'center'), (h += l / 2))
              : ((c = 'right'), (h += l)))
          : ((h = this.right - a),
            n === 'near'
              ? (c = 'right')
              : n === 'center'
              ? ((c = 'center'), (h -= l / 2))
              : ((c = 'left'), (h = this.left)))
        : e === 'right'
        ? s
          ? ((h = this.left + o),
            n === 'near'
              ? (c = 'right')
              : n === 'center'
              ? ((c = 'center'), (h -= l / 2))
              : ((c = 'left'), (h -= l)))
          : ((h = this.left + a),
            n === 'near'
              ? (c = 'left')
              : n === 'center'
              ? ((c = 'center'), (h += l / 2))
              : ((c = 'right'), (h = this.right)))
        : (c = 'right'),
      {
        textAlign: c,
        x: h,
      }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    if (e === 'left' || e === 'right')
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right,
      };
    if (e === 'top' || e === 'bottom')
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width,
      };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: n,
      top: s,
      width: o,
      height: r,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(n, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      n = this.ctx,
      s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width ||
        !h.color ||
        (n.save(),
        (n.lineWidth = h.width),
        (n.strokeStyle = h.color),
        n.setLineDash(h.borderDash || []),
        (n.lineDashOffset = h.borderDashOffset),
        n.beginPath(),
        n.moveTo(l.x, l.y),
        n.lineTo(c.x, c.y),
        n.stroke(),
        n.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        e.drawOnChartArea &&
          a(
            {
              x: l.x1,
              y: l.y1,
            },
            {
              x: l.x2,
              y: l.y2,
            },
            l
          ),
          e.drawTicks &&
            a(
              {
                x: l.tx1,
                y: l.ty1,
              },
              {
                x: l.tx2,
                y: l.ty2,
              },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: n, grid: s },
      } = this,
      o = n.setContext(this.getContext()),
      r = n.display ? o.width : 0;
    if (!r) return;
    const a = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, h, f, d;
    this.isHorizontal()
      ? ((c = Wt(t, this.left, r) - r / 2), (h = Wt(t, this.right, a) + a / 2), (f = d = l))
      : ((f = Wt(t, this.top, r) - r / 2), (d = Wt(t, this.bottom, a) + a / 2), (c = h = l)),
      e.save(),
      (e.lineWidth = o.width),
      (e.strokeStyle = o.color),
      e.beginPath(),
      e.moveTo(c, f),
      e.lineTo(h, d),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const n = this.ctx,
      s = this._computeLabelArea();
    s && Us(n, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options,
        l = r.font,
        c = r.label,
        h = r.textOffset;
      Se(n, c, 0, h, l, a);
    }
    s && Xs(n);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: n, reverse: s },
    } = this;
    if (!n.display) return;
    const o = et(n.font),
      r = rt(n.padding),
      a = n.align;
    let l = o.lineHeight / 2;
    e === 'bottom' || e === 'center' || E(e)
      ? ((l += r.bottom), V(n.text) && (l += o.lineHeight * (n.text.length - 1)))
      : (l += r.top);
    const { titleX: c, titleY: h, maxWidth: f, rotation: d } = Yl(this, l, e, a);
    Se(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: f,
      rotation: d,
      textAlign: $l(a, e, s),
      textBaseline: 'middle',
      translation: [c, h],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      n = F(t.grid && t.grid.z, -1),
      s = F(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== qt.prototype.draw
      ? [
          {
            z: e,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: n,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      n = this.axis + 'AxisID',
      s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[n] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return et(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class $e {
  constructor(t, e, n) {
    (this.type = t),
      (this.scope = e),
      (this.override = n),
      (this.items = /* @__PURE__ */ Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    Kl(e) && (n = this.register(e));
    const s = this.items,
      o = t.id,
      r = this.scope + '.' + o;
    if (!o) throw new Error('class does not have id: ' + t);
    return o in s || ((s[o] = t), Ul(t, r, n), this.override && U.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      n = t.id,
      s = this.scope;
    n in e && delete e[n], s && n in U[s] && (delete U[s][n], this.override && delete Kt[n]);
  }
}
function Ul(i, t, e) {
  const n = we(/* @__PURE__ */ Object.create(null), [e ? U.get(e) : {}, U.get(t), i.defaults]);
  U.set(t, n),
    i.defaultRoutes && Xl(t, i.defaultRoutes),
    i.descriptors && U.describe(t, i.descriptors);
}
function Xl(i, t) {
  Object.keys(t).forEach((e) => {
    const n = e.split('.'),
      s = n.pop(),
      o = [i].concat(n).join('.'),
      r = t[e].split('.'),
      a = r.pop(),
      l = r.join('.');
    U.route(o, s, l, a);
  });
}
function Kl(i) {
  return 'id' in i && 'defaults' in i;
}
class ql {
  constructor() {
    (this.controllers = new $e(ve, 'datasets', !0)),
      (this.elements = new $e(Lt, 'elements')),
      (this.plugins = new $e(Object, 'plugins')),
      (this.scales = new $e(qt, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each('register', t);
  }
  remove(...t) {
    this._each('unregister', t);
  }
  addControllers(...t) {
    this._each('register', t, this.controllers);
  }
  addElements(...t) {
    this._each('register', t, this.elements);
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins);
  }
  addScales(...t) {
    this._each('register', t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller');
  }
  getElement(t) {
    return this._get(t, this.elements, 'element');
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin');
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale');
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers);
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements);
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins);
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales);
  }
  _each(t, e, n) {
    [...e].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : I(s, (r) => {
            const a = n || this._getRegistryForType(r);
            this._exec(t, a, r);
          });
    });
  }
  _exec(t, e, n) {
    const s = Ki(t);
    $(n['before' + s], [], n), e[t](n), $(n['after' + s], [], n);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t)) return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const s = e.get(t);
    if (s === void 0) throw new Error('"' + t + '" is not a registered ' + n + '.');
    return s;
  }
}
var ut = /* @__PURE__ */ new ql();
class Gl {
  constructor() {
    this._init = [];
  }
  notify(t, e, n, s) {
    e === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      r = this._notify(o, t, e, n);
    return (
      e === 'afterDestroy' &&
        (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      r
    );
  }
  _notify(t, e, n, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin,
        a = r[n],
        l = [e, s, o.options];
      if ($(a, l, r) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    j(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const n = t && t.config,
      s = F(n.options && n.options.plugins, {}),
      o = Zl(n);
    return s === !1 && !e ? [] : Ql(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      n = this._cache,
      s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, n), t, 'stop'), this._notify(s(n, e), t, 'start');
  }
}
function Zl(i) {
  const t = {},
    e = [],
    n = Object.keys(ut.plugins.items);
  for (let o = 0; o < n.length; o++) e.push(ut.getPlugin(n[o]));
  const s = i.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    e.indexOf(r) === -1 && (e.push(r), (t[r.id] = !0));
  }
  return {
    plugins: e,
    localIds: t,
  };
}
function Jl(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Ql(i, { plugins: t, localIds: e }, n, s) {
  const o = [],
    r = i.getContext();
  for (const a of t) {
    const l = a.id,
      c = Jl(n[l], s);
    c !== null &&
      o.push({
        plugin: a,
        options: tc(
          i.config,
          {
            plugin: a,
            local: e[l],
          },
          c,
          r
        ),
      });
  }
  return o;
}
function tc(i, { plugin: t, local: e }, n, s) {
  const o = i.pluginScopeKeys(t),
    r = i.getOptionScopes(n, o);
  return (
    e && t.defaults && r.push(t.defaults),
    i.createResolver(r, s, [''], {
      scriptable: !1,
      indexable: !1,
      allKeys: !0,
    })
  );
}
function Fi(i, t) {
  const e = U.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x';
}
function ec(i, t) {
  let e = i;
  return i === '_index_' ? (e = t) : i === '_value_' && (e = t === 'x' ? 'y' : 'x'), e;
}
function ic(i, t) {
  return i === t ? '_index_' : '_value_';
}
function as(i) {
  if (i === 'x' || i === 'y' || i === 'r') return i;
}
function nc(i) {
  if (i === 'top' || i === 'bottom') return 'x';
  if (i === 'left' || i === 'right') return 'y';
}
function zi(i, ...t) {
  if (as(i)) return i;
  for (const e of t) {
    const n = e.axis || nc(e.position) || (i.length > 1 && as(i[0].toLowerCase()));
    if (n) return n;
  }
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`
  );
}
function ls(i, t, e) {
  if (e[t + 'AxisID'] === i)
    return {
      axis: t,
    };
}
function sc(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((n) => n.xAxisID === i || n.yAxisID === i);
    if (e.length) return ls(i, 'x', e[0]) || ls(i, 'y', e[0]);
  }
  return {};
}
function oc(i, t) {
  const e = Kt[i.type] || {
      scales: {},
    },
    n = t.scales || {},
    s = Fi(i.type, t),
    o = /* @__PURE__ */ Object.create(null);
  return (
    Object.keys(n).forEach((r) => {
      const a = n[r];
      if (!E(a)) return console.error(`Invalid scale configuration for scale: ${r}`);
      if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
      const l = zi(r, a, sc(r, i), U.scales[a.type]),
        c = ic(l, s),
        h = e.scales || {};
      o[r] = pe(/* @__PURE__ */ Object.create(null), [
        {
          axis: l,
        },
        a,
        h[l],
        h[c],
      ]);
    }),
    i.data.datasets.forEach((r) => {
      const a = r.type || i.type,
        l = r.indexAxis || Fi(a, t),
        h = (Kt[a] || {}).scales || {};
      Object.keys(h).forEach((f) => {
        const d = ec(f, l),
          g = r[d + 'AxisID'] || d;
        (o[g] = o[g] || /* @__PURE__ */ Object.create(null)),
          pe(o[g], [
            {
              axis: d,
            },
            n[g],
            h[f],
          ]);
      });
    }),
    Object.keys(o).forEach((r) => {
      const a = o[r];
      pe(a, [U.scales[a.type], U.scale]);
    }),
    o
  );
}
function co(i) {
  const t = i.options || (i.options = {});
  (t.plugins = F(t.plugins, {})), (t.scales = oc(i, t));
}
function ho(i) {
  return (i = i || {}), (i.datasets = i.datasets || []), (i.labels = i.labels || []), i;
}
function rc(i) {
  return (i = i || {}), (i.data = ho(i.data)), co(i), i;
}
const cs = /* @__PURE__ */ new Map(),
  fo = /* @__PURE__ */ new Set();
function Ye(i, t) {
  let e = cs.get(i);
  return e || ((e = t()), cs.set(i, e), fo.add(e)), e;
}
const he = (i, t, e) => {
  const n = ei(t, e);
  n !== void 0 && i.add(n);
};
class ac {
  constructor(t) {
    (this._config = rc(t)),
      (this._scopeCache = /* @__PURE__ */ new Map()),
      (this._resolverCache = /* @__PURE__ */ new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = ho(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), co(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ye(t, () => [[`datasets.${t}`, '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ye(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Ye(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      n = this.type;
    return Ye(`${n}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (!s || e) && ((s = /* @__PURE__ */ new Map()), n.set(t, s)), s;
  }
  getOptionScopes(t, e, n) {
    const { options: s, type: o } = this,
      r = this._cachedScopes(t, n),
      a = r.get(e);
    if (a) return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((f) => he(l, t, f))),
        h.forEach((f) => he(l, s, f)),
        h.forEach((f) => he(l, Kt[o] || {}, f)),
        h.forEach((f) => he(l, U, f)),
        h.forEach((f) => he(l, Li, f));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), fo.has(e) && r.set(e, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Kt[e] || {},
      U.datasets[e] || {},
      {
        type: e,
      },
      U,
      Li,
    ];
  }
  resolveNamedOptions(t, e, n, s = ['']) {
    const o = {
        $shared: !0,
      },
      { resolver: r, subPrefixes: a } = hs(this._resolverCache, t, s);
    let l = r;
    if (cc(r, e)) {
      (o.$shared = !1), (n = At(n) ? n() : n);
      const c = this.createResolver(t, n, a);
      l = ee(r, n, c);
    }
    for (const c of e) o[c] = l[c];
    return o;
  }
  createResolver(t, e, n = [''], s) {
    const { resolver: o } = hs(this._resolverCache, t, n);
    return E(e) ? ee(o, e, void 0, s) : o;
  }
}
function hs(i, t, e) {
  let n = i.get(t);
  n || ((n = /* @__PURE__ */ new Map()), i.set(t, n));
  const s = e.join();
  let o = n.get(s);
  return (
    o ||
      ((o = {
        resolver: Qi(t, e),
        subPrefixes: e.filter((a) => !a.toLowerCase().includes('hover')),
      }),
      n.set(s, o)),
    o
  );
}
const lc = (i) => E(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || At(i[e]), !1);
function cc(i, t) {
  const { isScriptable: e, isIndexable: n } = qs(i);
  for (const s of t) {
    const o = e(s),
      r = n(s),
      a = (r || o) && i[s];
    if ((o && (At(a) || lc(a))) || (r && V(a))) return !0;
  }
  return !1;
}
var hc = '4.3.0';
const fc = ['top', 'bottom', 'left', 'right', 'chartArea'];
function fs(i, t) {
  return i === 'top' || i === 'bottom' || (fc.indexOf(i) === -1 && t === 'x');
}
function ds(i, t) {
  return function (e, n) {
    return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
  };
}
function us(i) {
  const t = i.chart,
    e = t.options.animation;
  t.notifyPlugins('afterRender'), $(e && e.onComplete, [i], t);
}
function dc(i) {
  const t = i.chart,
    e = t.options.animation;
  $(e && e.onProgress, [i], t);
}
function uo(i) {
  return (
    to() && typeof i == 'string' ? (i = document.getElementById(i)) : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Ze = {},
  gs = (i) => {
    const t = uo(i);
    return Object.values(Ze)
      .filter((e) => e.canvas === t)
      .pop();
  };
function uc(i, t, e) {
  const n = Object.keys(i);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const r = i[s];
      delete i[s], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function gc(i, t, e, n) {
  return !e || i.type === 'mouseout' ? null : n ? t : i;
}
function pc(i) {
  const { xScale: t, yScale: e } = i;
  if (t && e)
    return {
      left: t.left,
      right: t.right,
      top: e.top,
      bottom: e.bottom,
    };
}
var Ct;
let Mt =
  ((Ct = class {
    static register(...t) {
      ut.add(...t), ps();
    }
    static unregister(...t) {
      ut.remove(...t), ps();
    }
    constructor(t, e) {
      const n = (this.config = new ac(e)),
        s = uo(t),
        o = gs(s);
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused."
        );
      const r = n.createResolver(n.chartOptionScopes(), this.getContext());
      (this.platform = new (n.platform || Al(s))()), this.platform.updateConfig(n);
      const a = this.platform.acquireContext(s, r.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        h = l && l.width;
      if (
        ((this.id = xr()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = h),
        (this.height = c),
        (this._options = r),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Gl()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = Br((f) => this.update(f), r.resizeDelay || 0)),
        (this._dataChanges = []),
        (Ze[this.id] = this),
        !a || !l)
      ) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
      xt.listen(this, 'complete', us),
        xt.listen(this, 'progress', dc),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: e },
        width: n,
        height: s,
        _aspectRatio: o,
      } = this;
      return j(t) ? (e && o ? o : s ? n / s : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return ut;
    }
    _initialize() {
      return (
        this.notifyPlugins('beforeInit'),
        this.options.responsive ? this.resize() : jn(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins('afterInit'),
        this
      );
    }
    clear() {
      return Fn(this.canvas, this.ctx), this;
    }
    stop() {
      return xt.stop(this), this;
    }
    resize(t, e) {
      xt.running(this)
        ? (this._resizeBeforeDraw = {
            width: t,
            height: e,
          })
        : this._resize(t, e);
    }
    _resize(t, e) {
      const n = this.options,
        s = this.canvas,
        o = n.maintainAspectRatio && this.aspectRatio,
        r = this.platform.getMaximumSize(s, t, e, o),
        a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? 'resize' : 'attach';
      (this.width = r.width),
        (this.height = r.height),
        (this._aspectRatio = this.aspectRatio),
        jn(this, a, !0) &&
          (this.notifyPlugins('resize', {
            size: r,
          }),
          $(n.onResize, [this, r], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const e = this.options.scales || {};
      I(e, (n, s) => {
        n.id = s;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        n = this.scales,
        s = Object.keys(n).reduce((r, a) => ((r[a] = !1), r), {});
      let o = [];
      e &&
        (o = o.concat(
          Object.keys(e).map((r) => {
            const a = e[r],
              l = zi(r, a),
              c = l === 'r',
              h = l === 'x';
            return {
              options: a,
              dposition: c ? 'chartArea' : h ? 'bottom' : 'left',
              dtype: c ? 'radialLinear' : h ? 'category' : 'linear',
            };
          })
        )),
        I(o, (r) => {
          const a = r.options,
            l = a.id,
            c = zi(l, a),
            h = F(a.type, r.dtype);
          (a.position === void 0 || fs(a.position, c) !== fs(r.dposition)) &&
            (a.position = r.dposition),
            (s[l] = !0);
          let f = null;
          if (l in n && n[l].type === h) f = n[l];
          else {
            const d = ut.getScale(h);
            (f = new d({
              id: l,
              type: h,
              ctx: this.ctx,
              chart: this,
            })),
              (n[f.id] = f);
          }
          f.init(a, t);
        }),
        I(s, (r, a) => {
          r || delete n[a];
        }),
        I(n, (r) => {
          Dt.configure(this, r, r.options), Dt.addBox(this, r);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        e = this.data.datasets.length,
        n = t.length;
      if ((t.sort((s, o) => s.index - o.index), n > e)) {
        for (let s = e; s < n; ++s) this._destroyDatasetMeta(s);
        t.splice(e, n - e);
      }
      this._sortedMetasets = t.slice(0).sort(ds('order', 'index'));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: e },
      } = this;
      t.length > e.length && delete this._stacks,
        t.forEach((n, s) => {
          e.filter((o) => o === n._dataset).length === 0 && this._destroyDatasetMeta(s);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        e = this.data.datasets;
      let n, s;
      for (this._removeUnreferencedMetasets(), n = 0, s = e.length; n < s; n++) {
        const o = e[n];
        let r = this.getDatasetMeta(n);
        const a = o.type || this.config.type;
        if (
          (r.type && r.type !== a && (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
          (r.type = a),
          (r.indexAxis = o.indexAxis || Fi(a, this.options)),
          (r.order = o.order || 0),
          (r.index = n),
          (r.label = '' + o.label),
          (r.visible = this.isDatasetVisible(n)),
          r.controller)
        )
          r.controller.updateIndex(n), r.controller.linkScales();
        else {
          const l = ut.getController(a),
            { datasetElementType: c, dataElementType: h } = U.datasets[a];
          Object.assign(l, {
            dataElementType: ut.getElement(h),
            datasetElementType: c && ut.getElement(c),
          }),
            (r.controller = new l(this, n)),
            t.push(r.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      I(
        this.data.datasets,
        (t, e) => {
          this.getDatasetMeta(e).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins('reset');
    }
    update(t) {
      const e = this.config;
      e.update();
      const n = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
        s = (this._animationsDisabled = !n.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins('beforeUpdate', {
          mode: t,
          cancelable: !0,
        }) === !1)
      )
        return;
      const o = this.buildOrUpdateControllers();
      this.notifyPlugins('beforeElementsUpdate');
      let r = 0;
      for (let c = 0, h = this.data.datasets.length; c < h; c++) {
        const { controller: f } = this.getDatasetMeta(c),
          d = !s && o.indexOf(f) === -1;
        f.buildOrUpdateElements(d), (r = Math.max(+f.getMaxOverflow(), r));
      }
      (r = this._minPadding = n.layout.autoPadding ? r : 0),
        this._updateLayout(r),
        s ||
          I(o, (c) => {
            c.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins('afterUpdate', {
          mode: t,
        }),
        this._layers.sort(ds('z', '_idx'));
      const { _active: a, _lastEvent: l } = this;
      l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
    }
    _updateScales() {
      I(this.scales, (t) => {
        Dt.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        n = new Set(t.events);
      (!Pn(e, n) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        e = this._getUniformDataChanges() || [];
      for (const { method: n, start: s, count: o } of e) {
        const r = n === '_removeElements' ? -o : o;
        uc(t, s, r);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const e = this.data.datasets.length,
        n = (o) =>
          new Set(t.filter((r) => r[0] === o).map((r, a) => a + ',' + r.splice(1).join(','))),
        s = n(0);
      for (let o = 1; o < e; o++) if (!Pn(s, n(o))) return;
      return Array.from(s)
        .map((o) => o.split(','))
        .map((o) => ({
          method: o[1],
          start: +o[2],
          count: +o[3],
        }));
    }
    _updateLayout(t) {
      if (
        this.notifyPlugins('beforeLayout', {
          cancelable: !0,
        }) === !1
      )
        return;
      Dt.update(this, this.width, this.height, t);
      const e = this.chartArea,
        n = e.width <= 0 || e.height <= 0;
      (this._layers = []),
        I(
          this.boxes,
          (s) => {
            (n && s.position === 'chartArea') ||
              (s.configure && s.configure(), this._layers.push(...s._layers()));
          },
          this
        ),
        this._layers.forEach((s, o) => {
          s._idx = o;
        }),
        this.notifyPlugins('afterLayout');
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins('beforeDatasetsUpdate', {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let e = 0, n = this.data.datasets.length; e < n; ++e)
          this.getDatasetMeta(e).controller.configure();
        for (let e = 0, n = this.data.datasets.length; e < n; ++e)
          this._updateDataset(
            e,
            At(t)
              ? t({
                  datasetIndex: e,
                })
              : t
          );
        this.notifyPlugins('afterDatasetsUpdate', {
          mode: t,
        });
      }
    }
    _updateDataset(t, e) {
      const n = this.getDatasetMeta(t),
        s = {
          meta: n,
          index: t,
          mode: e,
          cancelable: !0,
        };
      this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
        (n.controller._update(e), (s.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', s));
    }
    render() {
      this.notifyPlugins('beforeRender', {
        cancelable: !0,
      }) !== !1 &&
        (xt.has(this)
          ? this.attached && !xt.running(this) && xt.start(this)
          : (this.draw(),
            us({
              chart: this,
            })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: n, height: s } = this._resizeBeforeDraw;
        this._resize(n, s), (this._resizeBeforeDraw = null);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins('beforeDraw', {
            cancelable: !0,
          }) === !1)
      )
        return;
      const e = this._layers;
      for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
      for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
      this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets,
        n = [];
      let s, o;
      for (s = 0, o = e.length; s < o; ++s) {
        const r = e[s];
        (!t || r.visible) && n.push(r);
      }
      return n;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (
        this.notifyPlugins('beforeDatasetsDraw', {
          cancelable: !0,
        }) === !1
      )
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
      this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(t) {
      const e = this.ctx,
        n = t._clip,
        s = !n.disabled,
        o = pc(t) || this.chartArea,
        r = {
          meta: t,
          index: t.index,
          cancelable: !0,
        };
      this.notifyPlugins('beforeDatasetDraw', r) !== !1 &&
        (s &&
          Us(e, {
            left: n.left === !1 ? 0 : o.left - n.left,
            right: n.right === !1 ? this.width : o.right + n.right,
            top: n.top === !1 ? 0 : o.top - n.top,
            bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom,
          }),
        t.controller.draw(),
        s && Xs(e),
        (r.cancelable = !1),
        this.notifyPlugins('afterDatasetDraw', r));
    }
    isPointInArea(t) {
      return wt(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, n, s) {
      const o = fl.modes[e];
      return typeof o == 'function' ? o(this, t, n, s) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t],
        n = this._metasets;
      let s = n.filter((o) => o && o._dataset === e).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (e && e.order) || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1,
          }),
          n.push(s)),
        s
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Et(null, {
          chart: this,
          type: 'chart',
        }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const n = this.getDatasetMeta(t);
      return typeof n.hidden == 'boolean' ? !n.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      const n = this.getDatasetMeta(t);
      n.hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, n) {
      const s = n ? 'show' : 'hide',
        o = this.getDatasetMeta(t),
        r = o.controller._resolveAnimations(void 0, s);
      ii(e)
        ? ((o.data[e].hidden = !n), this.update())
        : (this.setDatasetVisibility(t, n),
          r.update(o, {
            visible: n,
          }),
          this.update((a) => (a.datasetIndex === t ? s : void 0)));
    }
    hide(t, e) {
      this._updateVisibility(t, e, !1);
    }
    show(t, e) {
      this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this._metasets[t];
      e && e.controller && e.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, e;
      for (this.stop(), xt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins('beforeDestroy');
      const { canvas: t, ctx: e } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Fn(t, e),
          this.platform.releaseContext(e),
          (this.canvas = null),
          (this.ctx = null)),
        delete Ze[this.id],
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        e = this.platform,
        n = (o, r) => {
          e.addEventListener(this, o, r), (t[o] = r);
        },
        s = (o, r, a) => {
          (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
        };
      I(this.options.events, (o) => n(o, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        n = (l, c) => {
          e.addEventListener(this, l, c), (t[l] = c);
        },
        s = (l, c) => {
          t[l] && (e.removeEventListener(this, l, c), delete t[l]);
        },
        o = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let r;
      const a = () => {
        s('attach', a), (this.attached = !0), this.resize(), n('resize', o), n('detach', r);
      };
      (r = () => {
        (this.attached = !1), s('resize', o), this._stop(), this._resize(0, 0), n('attach', a);
      }),
        e.isAttached(this.canvas) ? a() : r();
    }
    unbindEvents() {
      I(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
        (this._listeners = {}),
        I(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, e, n) {
      const s = n ? 'set' : 'remove';
      let o, r, a, l;
      for (
        e === 'dataset' &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller['_' + s + 'DatasetHoverStyle']()),
          a = 0,
          l = t.length;
        a < l;
        ++a
      ) {
        r = t[a];
        const c = r && this.getDatasetMeta(r.datasetIndex).controller;
        c && c[s + 'HoverStyle'](r.element, r.datasetIndex, r.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        n = t.map(({ datasetIndex: o, index: r }) => {
          const a = this.getDatasetMeta(o);
          if (!a) throw new Error('No dataset found at index ' + o);
          return {
            datasetIndex: o,
            element: a.data[r],
            index: r,
          };
        });
      !Qe(n, e) && ((this._active = n), (this._lastEvent = null), this._updateHoverStyles(n, e));
    }
    notifyPlugins(t, e, n) {
      return this._plugins.notify(this, t, e, n);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, e, n) {
      const s = this.options.hover,
        o = (l, c) =>
          l.filter((h) => !c.some((f) => h.datasetIndex === f.datasetIndex && h.index === f.index)),
        r = o(e, t),
        a = n ? t : o(t, e);
      r.length && this.updateHoverStyle(r, s.mode, !1),
        a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
    }
    _eventHandler(t, e) {
      const n = {
          event: t,
          replay: e,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        s = (r) => (r.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins('beforeEvent', n, s) === !1) return;
      const o = this._handleEvent(t, e, n.inChartArea);
      return (
        (n.cancelable = !1),
        this.notifyPlugins('afterEvent', n, s),
        (o || n.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, e, n) {
      const { _active: s = [], options: o } = this,
        r = e,
        a = this._getActiveElements(t, s, n, r),
        l = Sr(t),
        c = gc(t, this._lastEvent, n, l);
      n &&
        ((this._lastEvent = null),
        $(o.onHover, [t, a, this], this),
        l && $(o.onClick, [t, a, this], this));
      const h = !Qe(a, s);
      return (
        (h || e) && ((this._active = a), this._updateHoverStyles(a, s, e)), (this._lastEvent = c), h
      );
    }
    _getActiveElements(t, e, n, s) {
      if (t.type === 'mouseout') return [];
      if (!n) return e;
      const o = this.options.hover;
      return this.getElementsAtEventForMode(t, o.mode, o, s);
    }
  }),
  O(Ct, 'defaults', U),
  O(Ct, 'instances', Ze),
  O(Ct, 'overrides', Kt),
  O(Ct, 'registry', ut),
  O(Ct, 'version', hc),
  O(Ct, 'getChart', gs),
  Ct);
function ps() {
  return I(Mt.instances, (i) => i._plugins.invalidate());
}
function go(i, t, e = t) {
  (i.lineCap = F(e.borderCapStyle, t.borderCapStyle)),
    i.setLineDash(F(e.borderDash, t.borderDash)),
    (i.lineDashOffset = F(e.borderDashOffset, t.borderDashOffset)),
    (i.lineJoin = F(e.borderJoinStyle, t.borderJoinStyle)),
    (i.lineWidth = F(e.borderWidth, t.borderWidth)),
    (i.strokeStyle = F(e.borderColor, t.borderColor));
}
function mc(i, t, e) {
  i.lineTo(e.x, e.y);
}
function bc(i) {
  return i.stepped ? Jr : i.tension || i.cubicInterpolationMode === 'monotone' ? Qr : mc;
}
function po(i, t, e = {}) {
  const n = i.length,
    { start: s = 0, end: o = n - 1 } = e,
    { start: r, end: a } = t,
    l = Math.max(s, r),
    c = Math.min(o, a),
    h = (s < r && o < r) || (s > a && o > a);
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? n + c - l : c - l,
  };
}
function _c(i, t, e, n) {
  const { points: s, options: o } = t,
    { count: r, start: a, loop: l, ilen: c } = po(s, e, n),
    h = bc(o);
  let { move: f = !0, reverse: d } = n || {},
    g,
    p,
    b;
  for (g = 0; g <= c; ++g)
    (p = s[(a + (d ? c - g : g)) % r]),
      !p.skip && (f ? (i.moveTo(p.x, p.y), (f = !1)) : h(i, b, p, d, o.stepped), (b = p));
  return l && ((p = s[(a + (d ? c : 0)) % r]), h(i, b, p, d, o.stepped)), !!l;
}
function xc(i, t, e, n) {
  const s = t.points,
    { count: o, start: r, ilen: a } = po(s, e, n),
    { move: l = !0, reverse: c } = n || {};
  let h = 0,
    f = 0,
    d,
    g,
    p,
    b,
    m,
    _;
  const y = (w) => (r + (c ? a - w : w)) % o,
    M = () => {
      b !== m && (i.lineTo(h, m), i.lineTo(h, b), i.lineTo(h, _));
    };
  for (l && ((g = s[y(0)]), i.moveTo(g.x, g.y)), d = 0; d <= a; ++d) {
    if (((g = s[y(d)]), g.skip)) continue;
    const w = g.x,
      v = g.y,
      T = w | 0;
    T === p
      ? (v < b ? (b = v) : v > m && (m = v), (h = (f * h + w) / ++f))
      : (M(), i.lineTo(w, v), (p = T), (f = 0), (b = m = v)),
      (_ = v);
  }
  M();
}
function Bi(i) {
  const t = i.options,
    e = t.borderDash && t.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !e
    ? xc
    : _c;
}
function yc(i) {
  return i.stepped ? Aa : i.tension || i.cubicInterpolationMode === 'monotone' ? La : Yt;
}
function vc(i, t, e, n) {
  let s = t._path;
  s || ((s = t._path = new Path2D()), t.path(s, e, n) && s.closePath()),
    go(i, t.options),
    i.stroke(s);
}
function kc(i, t, e, n) {
  const { segments: s, options: o } = t,
    r = Bi(t);
  for (const a of s)
    go(i, o, a.style),
      i.beginPath(),
      r(i, t, a, {
        start: e,
        end: e + n - 1,
      }) && i.closePath(),
      i.stroke();
}
const wc = typeof Path2D == 'function';
function Mc(i, t, e, n) {
  wc && !t.options.segment ? vc(i, t, e, n) : kc(i, t, e, n);
}
class ue extends Lt {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const n = this.options;
    if (
      (n.tension || n.cubicInterpolationMode === 'monotone') &&
      !n.stepped &&
      !this._pointsUpdated
    ) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      Ma(this._points, n, t, s, e), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Ha(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      n = t.length;
    return n && e[t[n - 1].end];
  }
  interpolate(t, e) {
    const n = this.options,
      s = t[e],
      o = this.points,
      r = Na(this, {
        property: e,
        start: s,
        end: s,
      });
    if (!r.length) return;
    const a = [],
      l = yc(n);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: f, end: d } = r[c],
        g = o[f],
        p = o[d];
      if (g === p) {
        a.push(g);
        continue;
      }
      const b = Math.abs((s - g[e]) / (p[e] - g[e])),
        m = l(g, p, b, n.stepped);
      (m[e] = t[e]), a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, n) {
    return Bi(this)(t, this, e, n);
  }
  path(t, e, n) {
    const s = this.segments,
      o = Bi(this);
    let r = this._loop;
    (e = e || 0), (n = n || this.points.length - e);
    for (const a of s)
      r &= o(t, this, a, {
        start: e,
        end: e + n - 1,
      });
    return !!r;
  }
  draw(t, e, n, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Mc(t, this, n, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
O(ue, 'id', 'line'),
  O(ue, 'defaults', {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  O(ue, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  }),
  O(ue, 'descriptors', {
    _scriptable: !0,
    _indexable: (t) => t !== 'borderDash' && t !== 'fill',
  });
function ms(i, t, e, n) {
  const s = i.options,
    { [e]: o } = i.getProps([e], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Je extends Lt {
  constructor(e) {
    super();
    O(this, 'parsed');
    O(this, 'skip');
    O(this, 'stop');
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e);
  }
  inRange(e, n, s) {
    const o = this.options,
      { x: r, y: a } = this.getProps(['x', 'y'], s);
    return Math.pow(e - r, 2) + Math.pow(n - a, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(e, n) {
    return ms(this, e, 'x', n);
  }
  inYRange(e, n) {
    return ms(this, e, 'y', n);
  }
  getCenterPoint(e) {
    const { x: n, y: s } = this.getProps(['x', 'y'], e);
    return {
      x: n,
      y: s,
    };
  }
  size(e) {
    e = e || this.options || {};
    let n = e.radius || 0;
    n = Math.max(n, (n && e.hoverRadius) || 0);
    const s = (n && e.borderWidth) || 0;
    return (n + s) * 2;
  }
  draw(e, n) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !wt(this, n, this.size(s) / 2) ||
      ((e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      (e.fillStyle = s.backgroundColor),
      Ei(e, s, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
O(Je, 'id', 'point'),
  /**
   * @type {any}
   */
  O(Je, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }),
  /**
   * @type {any}
   */
  O(Je, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
class mo extends Lt {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const n = this.options;
    if (((this.left = 0), (this.top = 0), !n.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = e);
    const s = V(n.text) ? n.text.length : 1;
    this._padding = rt(n.padding);
    const o = s * et(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === 'top' || t === 'bottom';
  }
  _drawArgs(t) {
    const { top: e, left: n, bottom: s, right: o, options: r } = this,
      a = r.align;
    let l = 0,
      c,
      h,
      f;
    return (
      this.isHorizontal()
        ? ((h = be(a, n, o)), (f = e + t), (c = o - n))
        : (r.position === 'left'
            ? ((h = n + t), (f = be(a, s, e)), (l = G * -0.5))
            : ((h = o - t), (f = be(a, e, s)), (l = G * 0.5)),
          (c = s - e)),
      {
        titleX: h,
        titleY: f,
        maxWidth: c,
        rotation: l,
      }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const n = et(e.font),
      o = n.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Se(t, e.text, 0, 0, n, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: $s(e.align),
      textBaseline: 'middle',
      translation: [r, a],
    });
  }
}
function Sc(i, t) {
  const e = new mo({
    ctx: i.ctx,
    options: t,
    chart: i,
  });
  Dt.configure(i, e, t), Dt.addBox(i, e), (i.titleBlock = e);
}
var Cc = {
  id: 'title',
  _element: mo,
  start(i, t, e) {
    Sc(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    Dt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const n = i.titleBlock;
    Dt.configure(i, n, e), (n.options = e);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: {
      weight: 'bold',
    },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: {
    color: 'color',
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1,
  },
};
const ge = {
  average(i) {
    if (!i.length) return !1;
    let t,
      e,
      n = 0,
      s = 0,
      o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const r = i[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        (n += a.x), (s += a.y), ++o;
      }
    }
    return {
      x: n / o,
      y: s / o,
    };
  },
  nearest(i, t) {
    if (!i.length) return !1;
    let e = t.x,
      n = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      r,
      a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          h = Ai(t, c);
        h < s && ((s = h), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (e = l.x), (n = l.y);
    }
    return {
      x: e,
      y: n,
    };
  },
};
function dt(i, t) {
  return t && (V(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function yt(i) {
  return (typeof i == 'string' || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function Pc(i, t) {
  const { element: e, datasetIndex: n, index: s } = t,
    o = i.getDatasetMeta(n).controller,
    { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(s),
    raw: i.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: e,
  };
}
function bs(i, t) {
  const e = i.chart.ctx,
    { body: n, footer: s, title: o } = i,
    { boxWidth: r, boxHeight: a } = t,
    l = et(t.bodyFont),
    c = et(t.titleFont),
    h = et(t.footerFont),
    f = o.length,
    d = s.length,
    g = n.length,
    p = rt(t.padding);
  let b = p.height,
    m = 0,
    _ = n.reduce((w, v) => w + v.before.length + v.lines.length + v.after.length, 0);
  if (
    ((_ += i.beforeBody.length + i.afterBody.length),
    f && (b += f * c.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
    _)
  ) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    b += g * w + (_ - g) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  d && (b += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let y = 0;
  const M = function (w) {
    m = Math.max(m, e.measureText(w).width + y);
  };
  return (
    e.save(),
    (e.font = c.string),
    I(i.title, M),
    (e.font = l.string),
    I(i.beforeBody.concat(i.afterBody), M),
    (y = t.displayColors ? r + 2 + t.boxPadding : 0),
    I(n, (w) => {
      I(w.before, M), I(w.lines, M), I(w.after, M);
    }),
    (y = 0),
    (e.font = h.string),
    I(i.footer, M),
    e.restore(),
    (m += p.width),
    {
      width: m,
      height: b,
    }
  );
}
function Oc(i, t) {
  const { y: e, height: n } = t;
  return e < n / 2 ? 'top' : e > i.height - n / 2 ? 'bottom' : 'center';
}
function Tc(i, t, e, n) {
  const { x: s, width: o } = n,
    r = e.caretSize + e.caretPadding;
  if ((i === 'left' && s + o + r > t.width) || (i === 'right' && s - o - r < 0)) return !0;
}
function Dc(i, t, e, n) {
  const { x: s, width: o } = e,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = i;
  let c = 'center';
  return (
    n === 'center'
      ? (c = s <= (a + l) / 2 ? 'left' : 'right')
      : s <= o / 2
      ? (c = 'left')
      : s >= r - o / 2 && (c = 'right'),
    Tc(c, i, t, e) && (c = 'center'),
    c
  );
}
function _s(i, t, e) {
  const n = e.yAlign || t.yAlign || Oc(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Dc(i, t, e, n),
    yAlign: n,
  };
}
function Rc(i, t) {
  let { x: e, width: n } = i;
  return t === 'right' ? (e -= n) : t === 'center' && (e -= n / 2), e;
}
function Ac(i, t, e) {
  let { y: n, height: s } = i;
  return t === 'top' ? (n += e) : t === 'bottom' ? (n -= s + e) : (n -= s / 2), n;
}
function xs(i, t, e, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = i,
    { xAlign: a, yAlign: l } = e,
    c = s + o,
    { topLeft: h, topRight: f, bottomLeft: d, bottomRight: g } = ye(r);
  let p = Rc(t, a);
  const b = Ac(t, l, c);
  return (
    l === 'center'
      ? a === 'left'
        ? (p += c)
        : a === 'right' && (p -= c)
      : a === 'left'
      ? (p -= Math.max(h, d) + s)
      : a === 'right' && (p += Math.max(f, g) + s),
    {
      x: ct(p, 0, n.width - t.width),
      y: ct(b, 0, n.height - t.height),
    }
  );
}
function Ue(i, t, e) {
  const n = rt(e.padding);
  return t === 'center'
    ? i.x + i.width / 2
    : t === 'right'
    ? i.x + i.width - n.right
    : i.x + n.left;
}
function ys(i) {
  return dt([], yt(i));
}
function Lc(i, t, e) {
  return Et(i, {
    tooltip: t,
    tooltipItems: e,
    type: 'tooltip',
  });
}
function vs(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const bo = {
  beforeTitle: _t,
  title(i) {
    if (i.length > 0) {
      const t = i[0],
        e = t.chart.data.labels,
        n = e ? e.length : 0;
      if (this && this.options && this.options.mode === 'dataset') return t.dataset.label || '';
      if (t.label) return t.label;
      if (n > 0 && t.dataIndex < n) return e[t.dataIndex];
    }
    return '';
  },
  afterTitle: _t,
  beforeBody: _t,
  beforeLabel: _t,
  label(i) {
    if (this && this.options && this.options.mode === 'dataset')
      return i.label + ': ' + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || '';
    t && (t += ': ');
    const e = i.formattedValue;
    return j(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation,
    };
  },
  afterLabel: _t,
  afterBody: _t,
  beforeFooter: _t,
  footer: _t,
  afterFooter: _t,
};
function it(i, t, e, n) {
  const s = i[t].call(e, n);
  return typeof s > 'u' ? bo[t].call(e, n) : s;
}
class ji extends Lt {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      n = this.options.setContext(this.getContext()),
      s = n.enabled && e.options.animation && n.animations,
      o = new io(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Lc(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: n } = e,
      s = it(n, 'beforeTitle', this, t),
      o = it(n, 'title', this, t),
      r = it(n, 'afterTitle', this, t);
    let a = [];
    return (a = dt(a, yt(s))), (a = dt(a, yt(o))), (a = dt(a, yt(r))), a;
  }
  getBeforeBody(t, e) {
    return ys(it(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const { callbacks: n } = e,
      s = [];
    return (
      I(t, (o) => {
        const r = {
            before: [],
            lines: [],
            after: [],
          },
          a = vs(n, o);
        dt(r.before, yt(it(a, 'beforeLabel', this, o))),
          dt(r.lines, it(a, 'label', this, o)),
          dt(r.after, yt(it(a, 'afterLabel', this, o))),
          s.push(r);
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return ys(it(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const { callbacks: n } = e,
      s = it(n, 'beforeFooter', this, t),
      o = it(n, 'footer', this, t),
      r = it(n, 'afterFooter', this, t);
    let a = [];
    return (a = dt(a, yt(s))), (a = dt(a, yt(o))), (a = dt(a, yt(r))), a;
  }
  _createItems(t) {
    const e = this._active,
      n = this.chart.data,
      s = [],
      o = [],
      r = [];
    let a = [],
      l,
      c;
    for (l = 0, c = e.length; l < c; ++l) a.push(Pc(this.chart, e[l]));
    return (
      t.filter && (a = a.filter((h, f, d) => t.filter(h, f, d, n))),
      t.itemSort && (a = a.sort((h, f) => t.itemSort(h, f, n))),
      I(a, (h) => {
        const f = vs(t.callbacks, h);
        s.push(it(f, 'labelColor', this, h)),
          o.push(it(f, 'labelPointStyle', this, h)),
          r.push(it(f, 'labelTextColor', this, h));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    );
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      r = [];
    if (!s.length)
      this.opacity !== 0 &&
        (o = {
          opacity: 0,
        });
    else {
      const a = ge[n.position].call(this, s, this._eventPosition);
      (r = this._createItems(n)),
        (this.title = this.getTitle(r, n)),
        (this.beforeBody = this.getBeforeBody(r, n)),
        (this.body = this.getBody(r, n)),
        (this.afterBody = this.getAfterBody(r, n)),
        (this.footer = this.getFooter(r, n));
      const l = (this._size = bs(this, n)),
        c = Object.assign({}, a, l),
        h = _s(this.chart, n, c),
        f = xs(n, c, h, this.chart);
      (this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (o = {
          opacity: 1,
          x: f.x,
          y: f.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        n.external &&
        n.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay: e,
        });
  }
  drawCaret(t, e, n, s) {
    const o = this.getCaretPosition(t, n, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, n) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = n,
      { topLeft: l, topRight: c, bottomLeft: h, bottomRight: f } = ye(a),
      { x: d, y: g } = t,
      { width: p, height: b } = e;
    let m, _, y, M, w, v;
    return (
      o === 'center'
        ? ((w = g + b / 2),
          s === 'left'
            ? ((m = d), (_ = m - r), (M = w + r), (v = w - r))
            : ((m = d + p), (_ = m + r), (M = w - r), (v = w + r)),
          (y = m))
        : (s === 'left'
            ? (_ = d + Math.max(l, h) + r)
            : s === 'right'
            ? (_ = d + p - Math.max(c, f) - r)
            : (_ = this.caretX),
          o === 'top'
            ? ((M = g), (w = M - r), (m = _ - r), (y = _ + r))
            : ((M = g + b), (w = M + r), (m = _ + r), (y = _ - r)),
          (v = M)),
      {
        x1: m,
        x2: _,
        x3: y,
        y1: M,
        y2: w,
        y3: v,
      }
    );
  }
  drawTitle(t, e, n) {
    const s = this.title,
      o = s.length;
    let r, a, l;
    if (o) {
      const c = wi(n.rtl, this.x, this.width);
      for (
        t.x = Ue(this, n.titleAlign, n),
          e.textAlign = c.textAlign(n.titleAlign),
          e.textBaseline = 'middle',
          r = et(n.titleFont),
          a = n.titleSpacing,
          e.fillStyle = n.titleColor,
          e.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          l + 1 === o && (t.y += n.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, n, s, o) {
    const r = this.labelColors[n],
      a = this.labelPointStyles[n],
      { boxHeight: l, boxWidth: c } = o,
      h = et(o.bodyFont),
      f = Ue(this, 'left', o),
      d = s.x(f),
      g = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
      p = e.y + g;
    if (o.usePointStyle) {
      const b = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        m = s.leftForLtr(d, c) + c / 2,
        _ = p + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        Ei(t, b, m, _),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        Ei(t, b, m, _);
    } else {
      (t.lineWidth = E(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const b = s.leftForLtr(d, c),
        m = s.leftForLtr(s.xPlus(d, 1), c - 2),
        _ = ye(r.borderRadius);
      Object.values(_).some((y) => y !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          Ii(t, {
            x: b,
            y: p,
            w: c,
            h: l,
            radius: _,
          }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          Ii(t, {
            x: m,
            y: p + 1,
            w: c - 2,
            h: l - 2,
            radius: _,
          }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(b, p, c, l),
          t.strokeRect(b, p, c, l),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(m, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: h,
      } = n,
      f = et(n.bodyFont);
    let d = f.lineHeight,
      g = 0;
    const p = wi(n.rtl, this.x, this.width),
      b = function (C) {
        e.fillText(C, p.x(t.x + g), t.y + d / 2), (t.y += d + o);
      },
      m = p.textAlign(r);
    let _, y, M, w, v, T, S;
    for (
      e.textAlign = r,
        e.textBaseline = 'middle',
        e.font = f.string,
        t.x = Ue(this, m, n),
        e.fillStyle = n.bodyColor,
        I(this.beforeBody, b),
        g = a && m !== 'right' ? (r === 'center' ? c / 2 + h : c + 2 + h) : 0,
        w = 0,
        T = s.length;
      w < T;
      ++w
    ) {
      for (
        _ = s[w],
          y = this.labelTextColors[w],
          e.fillStyle = y,
          I(_.before, b),
          M = _.lines,
          a && M.length && (this._drawColorBox(e, t, w, p, n), (d = Math.max(f.lineHeight, l))),
          v = 0,
          S = M.length;
        v < S;
        ++v
      )
        b(M[v]), (d = f.lineHeight);
      I(_.after, b);
    }
    (g = 0), (d = f.lineHeight), I(this.afterBody, b), (t.y -= o);
  }
  drawFooter(t, e, n) {
    const s = this.footer,
      o = s.length;
    let r, a;
    if (o) {
      const l = wi(n.rtl, this.x, this.width);
      for (
        t.x = Ue(this, n.footerAlign, n),
          t.y += n.footerMarginTop,
          e.textAlign = l.textAlign(n.footerAlign),
          e.textBaseline = 'middle',
          r = et(n.footerFont),
          e.fillStyle = n.footerColor,
          e.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), (t.y += r.lineHeight + n.footerSpacing);
    }
  }
  drawBackground(t, e, n, s) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: l } = t,
      { width: c, height: h } = n,
      { topLeft: f, topRight: d, bottomLeft: g, bottomRight: p } = ye(s.cornerRadius);
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(a + f, l),
      r === 'top' && this.drawCaret(t, e, n, s),
      e.lineTo(a + c - d, l),
      e.quadraticCurveTo(a + c, l, a + c, l + d),
      r === 'center' && o === 'right' && this.drawCaret(t, e, n, s),
      e.lineTo(a + c, l + h - p),
      e.quadraticCurveTo(a + c, l + h, a + c - p, l + h),
      r === 'bottom' && this.drawCaret(t, e, n, s),
      e.lineTo(a + g, l + h),
      e.quadraticCurveTo(a, l + h, a, l + h - g),
      r === 'center' && o === 'left' && this.drawCaret(t, e, n, s),
      e.lineTo(a, l + f),
      e.quadraticCurveTo(a, l, a + f, l),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      n = this.$animations,
      s = n && n.x,
      o = n && n.y;
    if (s || o) {
      const r = ge[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const a = (this._size = bs(this, t)),
        l = Object.assign({}, r, this._size),
        c = _s(e, t, l),
        h = xs(t, l, c, e);
      (s._to !== h.x || o._to !== h.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n) return;
    this._updateAnimationTarget(e);
    const s = {
        width: this.width,
        height: this.height,
      },
      o = {
        x: this.x,
        y: this.y,
      };
    n = Math.abs(n) < 1e-3 ? 0 : n;
    const r = rt(e.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = n),
      this.drawBackground(o, t, s, e),
      Fa(t, e.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      za(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active,
      s = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error('Cannot find a dataset at index ' + a);
        return {
          datasetIndex: a,
          element: c.data[l],
          index: l,
        };
      }),
      o = !Qe(n, s),
      r = this._positionChanged(s, e);
    (o || r) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, e, n),
      a = this._positionChanged(r, t),
      l = e || !Qe(r, o) || a;
    return (
      l &&
        ((this._active = r),
        (s.enabled || s.external) &&
          ((this._eventPosition = {
            x: t.x,
            y: t.y,
          }),
          this.update(!0, e))),
      l
    );
  }
  _getActiveElements(t, e, n, s) {
    const o = this.options;
    if (t.type === 'mouseout') return [];
    if (!s) return e;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: s, options: o } = this,
      r = ge[o.position].call(this, t, e);
    return r !== !1 && (n !== r.x || s !== r.y);
  }
}
O(ji, 'positioners', ge);
var Ec = {
  id: 'tooltip',
  _element: ji,
  positioners: ge,
  afterInit(i, t, e) {
    e &&
      (i.tooltip = new ji({
        chart: i,
        options: e,
      }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t,
      };
      if (
        i.notifyPlugins('beforeTooltipDraw', {
          ...e,
          cancelable: !0,
        }) === !1
      )
        return;
      t.draw(i.ctx), i.notifyPlugins('afterTooltipDraw', e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold',
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold',
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: !0,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart',
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: {
        easing: 'linear',
        duration: 200,
      },
    },
    callbacks: bo,
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font',
  },
  descriptors: {
    _scriptable: (i) => i !== 'filter' && i !== 'itemSort' && i !== 'external',
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1,
    },
    animation: {
      _fallback: !1,
    },
    animations: {
      _fallback: 'animation',
    },
  },
  additionalOptionScopes: ['interaction'],
};
const Ic = (i, t, e, n) => (
  typeof t == 'string'
    ? ((e = i.push(t) - 1),
      n.unshift({
        index: e,
        label: t,
      }))
    : isNaN(t) && (e = null),
  e
);
function Fc(i, t, e, n) {
  const s = i.indexOf(t);
  if (s === -1) return Ic(i, t, e, n);
  const o = i.lastIndexOf(t);
  return s !== o ? e : s;
}
const zc = (i, t) => (i === null ? null : ct(Math.round(i), 0, t));
function ks(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Ni extends qt {
  constructor(t) {
    super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of e) n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (j(t)) return null;
    const n = this.getLabels();
    return (
      (e = isFinite(e) && n[e] === t ? e : Fc(n, t, F(e, t), this._addedLabels)),
      zc(e, n.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    this.options.bounds === 'ticks' && (t || (n = 0), e || (s = this.getLabels().length - 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      n = this.options.offset,
      s = [];
    let o = this.getLabels();
    (o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
      (this._startValue = this.min - (n ? 0.5 : 0));
    for (let r = t; r <= e; r++)
      s.push({
        value: r,
      });
    return s;
  }
  getLabelForValue(t) {
    return ks.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
O(Ni, 'id', 'category'),
  O(Ni, 'defaults', {
    ticks: {
      callback: ks,
    },
  });
function Bc(i, t) {
  const e = [],
    {
      bounds: s,
      step: o,
      min: r,
      max: a,
      precision: l,
      count: c,
      maxTicks: h,
      maxDigits: f,
      includeBounds: d,
    } = i,
    g = o || 1,
    p = h - 1,
    { min: b, max: m } = t,
    _ = !j(r),
    y = !j(a),
    M = !j(c),
    w = (m - b) / (f + 1);
  let v = Tn((m - b) / p / g) * g,
    T,
    S,
    C,
    D;
  if (v < 1e-14 && !_ && !y)
    return [
      {
        value: b,
      },
      {
        value: m,
      },
    ];
  (D = Math.ceil(m / v) - Math.floor(b / v)),
    D > p && (v = Tn((D * v) / p / g) * g),
    j(l) || ((T = Math.pow(10, l)), (v = Math.ceil(v * T) / T)),
    s === 'ticks' ? ((S = Math.floor(b / v) * v), (C = Math.ceil(m / v) * v)) : ((S = b), (C = m)),
    _ && y && o && Tr((a - r) / o, v / 1e3)
      ? ((D = Math.round(Math.min((a - r) / v, h))), (v = (a - r) / D), (S = r), (C = a))
      : M
      ? ((S = _ ? r : S), (C = y ? a : C), (D = c - 1), (v = (C - S) / D))
      : ((D = (C - S) / v),
        me(D, Math.round(D), v / 1e3) ? (D = Math.round(D)) : (D = Math.ceil(D)));
  const N = Math.max(Dn(v), Dn(S));
  (T = Math.pow(10, j(l) ? N : l)), (S = Math.round(S * T) / T), (C = Math.round(C * T) / T);
  let W = 0;
  for (
    _ &&
    (d && S !== r
      ? (e.push({
          value: r,
        }),
        S < r && W++,
        me(Math.round((S + W * v) * T) / T, r, ws(r, w, i)) && W++)
      : S < r && W++);
    W < D;
    ++W
  ) {
    const H = Math.round((S + W * v) * T) / T;
    if (y && H > a) break;
    e.push({
      value: H,
    });
  }
  return (
    y && d && C !== a
      ? e.length && me(e[e.length - 1].value, a, ws(a, w, i))
        ? (e[e.length - 1].value = a)
        : e.push({
            value: a,
          })
      : (!y || C === a) &&
        e.push({
          value: C,
        }),
    e
  );
}
function ws(i, t, { horizontal: e, minRotation: n }) {
  const s = Tt(n),
    o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3,
    r = 0.75 * t * ('' + i).length;
  return Math.min(t / o, r);
}
class ai extends qt {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return j(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => (s = e ? s : l),
      a = (l) => (o = n ? o : l);
    if (t) {
      const l = te(s),
        c = te(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    (this.min = s), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: n } = t,
      s;
    return (
      n
        ? ((s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (e = e || 11)),
      e && (s = Math.min(e, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      o = this._range || this,
      r = Bc(s, o);
    return (
      t.bounds === 'ticks' && js(r, this, 'value'),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      n = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (n - e) / Math.max(t.length - 1, 1) / 2;
      (e -= s), (n += s);
    }
    (this._startValue = e), (this._endValue = n), (this._valueRange = n - e);
  }
  getLabelForValue(t) {
    return Ji(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Wi extends ai {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = Z(t) ? t : 0), (this.max = Z(e) ? e : 1), this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      n = Tt(this.options.ticks.minRotation),
      s = (t ? Math.sin(n) : Math.cos(n)) || 1e-3,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
O(Wi, 'id', 'linear'),
  O(Wi, 'defaults', {
    ticks: {
      callback: hi.formatters.numeric,
    },
  });
const Pe = (i) => Math.floor(Ot(i)),
  Ht = (i, t) => Math.pow(10, Pe(i) + t);
function Ms(i) {
  return i / Math.pow(10, Pe(i)) === 1;
}
function Ss(i, t, e) {
  const n = Math.pow(10, e),
    s = Math.floor(i / n);
  return Math.ceil(t / n) - s;
}
function jc(i, t) {
  const e = t - i;
  let n = Pe(e);
  for (; Ss(i, t, n) > 10; ) n++;
  for (; Ss(i, t, n) < 10; ) n--;
  return Math.min(n, Pe(i));
}
function Nc(i, { min: t, max: e }) {
  t = ot(i.min, t);
  const n = [],
    s = Pe(t);
  let o = jc(t, e),
    r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o),
    l = s > o ? Math.pow(10, s) : 0,
    c = Math.round((t - l) * r) / r,
    h = Math.floor((t - l) / a / 10) * a * 10;
  let f = Math.floor((c - h) / Math.pow(10, o)),
    d = ot(i.min, Math.round((l + h + f * Math.pow(10, o)) * r) / r);
  for (; d < e; )
    n.push({
      value: d,
      major: Ms(d),
      significand: f,
    }),
      f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
      f >= 20 && (o++, (f = 2), (r = o >= 0 ? 1 : r)),
      (d = Math.round((l + h + f * Math.pow(10, o)) * r) / r);
  const g = ot(i.max, d);
  return (
    n.push({
      value: g,
      major: Ms(g),
      significand: f,
    }),
    n
  );
}
class Cs extends qt {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const n = ai.prototype.parse.apply(this, [t, e]);
    if (n === 0) {
      this._zero = !0;
      return;
    }
    return Z(n) && n > 0 ? n : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = Z(t) ? Math.max(0, t) : null),
      (this.max = Z(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Z(this._userMin) &&
        (this.min = t === Ht(this.min, 0) ? Ht(this.min, -1) : Ht(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let n = this.min,
      s = this.max;
    const o = (a) => (n = t ? n : a),
      r = (a) => (s = e ? s : a);
    n === s && (n <= 0 ? (o(1), r(10)) : (o(Ht(n, -1)), r(Ht(s, 1)))),
      n <= 0 && o(Ht(s, -1)),
      s <= 0 && r(Ht(n, 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.options,
      e = {
        min: this._userMin,
        max: this._userMax,
      },
      n = Nc(e, this);
    return (
      t.bounds === 'ticks' && js(n, this, 'value'),
      t.reverse
        ? (n.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      n
    );
  }
  getLabelForValue(t) {
    return t === void 0 ? '0' : Ji(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), (this._startValue = Ot(t)), (this._valueRange = Ot(this.max) - Ot(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Ot(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
O(Cs, 'id', 'logarithmic'),
  O(Cs, 'defaults', {
    ticks: {
      callback: hi.formatters.logarithmic,
      major: {
        enabled: !0,
      },
    },
  });
function Vi(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = rt(t.backdropPadding);
    return F(t.font && t.font.size, U.font.size) + e.height;
  }
  return 0;
}
function Wc(i, t, e) {
  return (
    (e = V(e) ? e : [e]),
    {
      w: Gr(i, t.string, e),
      h: e.length * t.lineHeight,
    }
  );
}
function Ps(i, t, e, n, s) {
  return i === n || i === s
    ? {
        start: t - e / 2,
        end: t + e / 2,
      }
    : i < n || i > s
    ? {
        start: t - e,
        end: t,
      }
    : {
        start: t,
        end: t + e,
      };
}
function Vc(i) {
  const t = {
      l: i.left + i._padding.left,
      r: i.right - i._padding.right,
      t: i.top + i._padding.top,
      b: i.bottom - i._padding.bottom,
    },
    e = Object.assign({}, t),
    n = [],
    s = [],
    o = i._pointLabels.length,
    r = i.options.pointLabels,
    a = r.centerPointLabels ? G / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    s[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + s[l], a),
      f = et(c.font),
      d = Wc(i.ctx, f, i._pointLabels[l]);
    n[l] = d;
    const g = ft(i.getIndexAngle(l) + a),
      p = Math.round(qi(g)),
      b = Ps(p, h.x, d.w, 0, 180),
      m = Ps(p, h.y, d.h, 90, 270);
    Hc(e, t, g, b, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), (i._pointLabelItems = Uc(i, n, s));
}
function Hc(i, t, e, n, s) {
  const o = Math.abs(Math.sin(e)),
    r = Math.abs(Math.cos(e));
  let a = 0,
    l = 0;
  n.start < t.l
    ? ((a = (t.l - n.start) / o), (i.l = Math.min(i.l, t.l - a)))
    : n.end > t.r && ((a = (n.end - t.r) / o), (i.r = Math.max(i.r, t.r + a))),
    s.start < t.t
      ? ((l = (t.t - s.start) / r), (i.t = Math.min(i.t, t.t - l)))
      : s.end > t.b && ((l = (s.end - t.b) / r), (i.b = Math.max(i.b, t.b + l)));
}
function $c(i, t, e) {
  const n = i.drawingArea,
    { extra: s, additionalAngle: o, padding: r, size: a } = e,
    l = i.getPointPosition(t, n + s + r, o),
    c = Math.round(qi(ft(l.angle + st))),
    h = qc(l.y, a.h, c),
    f = Xc(c),
    d = Kc(l.x, a.w, f);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: f,
    left: d,
    top: h,
    right: d + a.w,
    bottom: h + a.h,
  };
}
function Yc(i, t) {
  if (!t) return !0;
  const { left: e, top: n, right: s, bottom: o } = i;
  return !(
    wt(
      {
        x: e,
        y: n,
      },
      t
    ) ||
    wt(
      {
        x: e,
        y: o,
      },
      t
    ) ||
    wt(
      {
        x: s,
        y: n,
      },
      t
    ) ||
    wt(
      {
        x: s,
        y: o,
      },
      t
    )
  );
}
function Uc(i, t, e) {
  const n = [],
    s = i._pointLabels.length,
    o = i.options,
    { centerPointLabels: r, display: a } = o.pointLabels,
    l = {
      extra: Vi(o) / 2,
      additionalAngle: r ? G / s : 0,
    };
  let c;
  for (let h = 0; h < s; h++) {
    (l.padding = e[h]), (l.size = t[h]);
    const f = $c(i, h, l);
    n.push(f), a === 'auto' && ((f.visible = Yc(f, c)), f.visible && (c = f));
  }
  return n;
}
function Xc(i) {
  return i === 0 || i === 180 ? 'center' : i < 180 ? 'left' : 'right';
}
function Kc(i, t, e) {
  return e === 'right' ? (i -= t) : e === 'center' && (i -= t / 2), i;
}
function qc(i, t, e) {
  return e === 90 || e === 270 ? (i -= t / 2) : (e > 270 || e < 90) && (i -= t), i;
}
function Gc(i, t, e) {
  const { left: n, top: s, right: o, bottom: r } = e,
    { backdropColor: a } = t;
  if (!j(a)) {
    const l = ye(t.borderRadius),
      c = rt(t.backdropPadding);
    i.fillStyle = a;
    const h = n - c.left,
      f = s - c.top,
      d = o - n + c.width,
      g = r - s + c.height;
    Object.values(l).some((p) => p !== 0)
      ? (i.beginPath(),
        Ii(i, {
          x: h,
          y: f,
          w: d,
          h: g,
          radius: l,
        }),
        i.fill())
      : i.fillRect(h, f, d, g);
  }
}
function Zc(i, t) {
  const {
    ctx: e,
    options: { pointLabels: n },
  } = i;
  for (let s = t - 1; s >= 0; s--) {
    const o = i._pointLabelItems[s];
    if (!o.visible) continue;
    const r = n.setContext(i.getPointLabelContext(s));
    Gc(e, r, o);
    const a = et(r.font),
      { x: l, y: c, textAlign: h } = o;
    Se(e, i._pointLabels[s], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: 'middle',
    });
  }
}
function _o(i, t, e, n) {
  const { ctx: s } = i;
  if (e) s.arc(i.xCenter, i.yCenter, t, 0, ht);
  else {
    let o = i.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < n; r++) (o = i.getPointPosition(r, t)), s.lineTo(o.x, o.y);
  }
}
function Jc(i, t, e, n, s) {
  const o = i.ctx,
    r = t.circular,
    { color: a, lineWidth: l } = t;
  (!r && !n) ||
    !a ||
    !l ||
    e < 0 ||
    (o.save(),
    (o.strokeStyle = a),
    (o.lineWidth = l),
    o.setLineDash(s.dash),
    (o.lineDashOffset = s.dashOffset),
    o.beginPath(),
    _o(i, e, r, n),
    o.closePath(),
    o.stroke(),
    o.restore());
}
function Qc(i, t, e) {
  return Et(i, {
    label: e,
    index: t,
    type: 'pointLabel',
  });
}
class Xe extends ai {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = rt(Vi(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      n = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, n) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = Z(t) && !isNaN(t) ? t : 0),
      (this.max = Z(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Vi(this.options));
  }
  generateTickLabels(t) {
    ai.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, n) => {
          const s = $(this.options.pointLabels.callback, [e, n], this);
          return s || s === 0 ? s : '';
        })
        .filter((e, n) => this.chart.getDataVisibility(n)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Vc(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, n, s) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((n - s) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, n, s)));
  }
  getIndexAngle(t) {
    const e = ht / (this._pointLabels.length || 1),
      n = this.options.startAngle || 0;
    return ft(t * e + Tt(n));
  }
  getDistanceFromCenterForValue(t) {
    if (j(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (j(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return Qc(this.getContext(), t, n);
    }
  }
  getPointPosition(t, e, n = 0) {
    const s = this.getIndexAngle(t) - st + n;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: n, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: n,
      right: s,
      bottom: o,
    };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const n = this.ctx;
      n.save(),
        n.beginPath(),
        _o(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
        n.closePath(),
        (n.fillStyle = t),
        n.fill(),
        n.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: n, grid: s, border: o } = e,
      r = this._pointLabels.length;
    let a, l, c;
    if (
      (e.pointLabels.display && Zc(this, r),
      s.display &&
        this.ticks.forEach((h, f) => {
          if (f !== 0) {
            l = this.getDistanceFromCenterForValue(h.value);
            const d = this.getContext(f),
              g = s.setContext(d),
              p = o.setContext(d);
            Jc(this, g, l, r, p);
          }
        }),
      n.display)
    ) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = n.setContext(this.getPointLabelContext(a)),
          { color: f, lineWidth: d } = h;
        !d ||
          !f ||
          ((t.lineWidth = d),
          (t.strokeStyle = f),
          t.setLineDash(h.borderDash),
          (t.lineDashOffset = h.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
          (c = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      n = e.ticks;
    if (!n.display) return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !e.reverse) return;
        const c = n.setContext(this.getContext(l)),
          h = et(c.font);
        if (((o = this.getDistanceFromCenterForValue(this.ticks[l].value)), c.showLabelBackdrop)) {
          (t.font = h.string), (r = t.measureText(a.label).width), (t.fillStyle = c.backdropColor);
          const f = rt(c.backdropPadding);
          t.fillRect(-r / 2 - f.left, -o - h.size / 2 - f.top, r + f.width, h.size + f.height);
        }
        Se(t, a.label, 0, -o, h, {
          color: c.color,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
O(Xe, 'id', 'radialLinear'),
  O(Xe, 'defaults', {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: {
      circular: !1,
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: hi.formatters.numeric,
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10,
      },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  O(Xe, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }),
  O(Xe, 'descriptors', {
    angleLines: {
      _fallback: 'grid',
    },
  });
const di = {
    millisecond: {
      common: !0,
      size: 1,
      steps: 1e3,
    },
    second: {
      common: !0,
      size: 1e3,
      steps: 60,
    },
    minute: {
      common: !0,
      size: 6e4,
      steps: 60,
    },
    hour: {
      common: !0,
      size: 36e5,
      steps: 24,
    },
    day: {
      common: !0,
      size: 864e5,
      steps: 30,
    },
    week: {
      common: !1,
      size: 6048e5,
      steps: 4,
    },
    month: {
      common: !0,
      size: 2628e6,
      steps: 12,
    },
    quarter: {
      common: !1,
      size: 7884e6,
      steps: 4,
    },
    year: {
      common: !0,
      size: 3154e7,
    },
  },
  nt = /* @__PURE__ */ Object.keys(di);
function th(i, t) {
  return i - t;
}
function Os(i, t) {
  if (j(t)) return null;
  const e = i._adapter,
    { parser: n, round: s, isoWeekday: o } = i._parseOpts;
  let r = t;
  return (
    typeof n == 'function' && (r = n(r)),
    Z(r) || (r = typeof n == 'string' ? e.parse(r, n) : e.parse(r)),
    r === null
      ? null
      : (s &&
          (r = s === 'week' && (Me(o) || o === !0) ? e.startOf(r, 'isoWeek', o) : e.startOf(r, s)),
        +r)
  );
}
function Ts(i, t, e, n) {
  const s = nt.length;
  for (let o = nt.indexOf(i); o < s - 1; ++o) {
    const r = di[nt[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= n) return nt[o];
  }
  return nt[s - 1];
}
function eh(i, t, e, n, s) {
  for (let o = nt.length - 1; o >= nt.indexOf(e); o--) {
    const r = nt[o];
    if (di[r].common && i._adapter.diff(s, n, r) >= t - 1) return r;
  }
  return nt[e ? nt.indexOf(e) : 0];
}
function ih(i) {
  for (let t = nt.indexOf(i) + 1, e = nt.length; t < e; ++t) if (di[nt[t]].common) return nt[t];
}
function Ds(i, t, e) {
  if (!e) i[t] = !0;
  else if (e.length) {
    const { lo: n, hi: s } = Gi(e, t),
      o = e[n] >= t ? e[n] : e[s];
    i[o] = !0;
  }
}
function nh(i, t, e, n) {
  const s = i._adapter,
    o = +s.startOf(t[0].value, n),
    r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, n)) (l = e[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function Rs(i, t, e) {
  const n = [],
    s = {},
    o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    (a = t[r]),
      (s[a] = r),
      n.push({
        value: a,
        major: !1,
      });
  return o === 0 || !e ? n : nh(i, n, s, e);
}
class li extends qt {
  constructor(t) {
    super(t),
      (this._cache = {
        data: [],
        labels: [],
        all: [],
      }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e = {}) {
    const n = t.time || (t.time = {}),
      s = (this._adapter = new rl._date(t.adapters.date));
    s.init(e),
      pe(n.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: n.parser,
        round: n.round,
        isoWeekday: n.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return t === void 0 ? null : Os(this, t);
  }
  beforeLayout() {
    super.beforeLayout(),
      (this._cache = {
        data: [],
        labels: [],
        all: [],
      });
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      n = t.time.unit || 'day';
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && l(this.getMinMax(!1))),
      (s = Z(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n)),
      (o = Z(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      n = Number.NEGATIVE_INFINITY;
    return (
      t.length && ((e = t[0]), (n = t[t.length - 1])),
      {
        min: e,
        max: n,
      }
    );
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      n = t.ticks,
      s = n.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    t.bounds === 'ticks' &&
      s.length &&
      ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      r = this.max,
      a = Ir(s, o, r);
    return (
      (this._unit =
        e.unit ||
        (n.autoSkip
          ? Ts(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : eh(this, a.length, e.minUnit, this.min, this.max))),
      (this._majorUnit = !n.major.enabled || this._unit === 'year' ? void 0 : ih(this._unit)),
      this.initOffsets(s),
      t.reverse && a.reverse(),
      Rs(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0,
      n = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1 ? (e = 1 - s) : (e = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1 ? (n = o) : (n = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (e = ct(e, 0, r)),
      (n = ct(n, 0, r)),
      (this._offsets = {
        start: e,
        end: n,
        factor: 1 / (e + 1 + n),
      });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      n = this.max,
      s = this.options,
      o = s.time,
      r = o.unit || Ts(o.minUnit, e, n, this._getLabelCapacity(e)),
      a = F(s.ticks.stepSize, 1),
      l = r === 'week' ? o.isoWeekday : !1,
      c = Me(l) || l === !0,
      h = {};
    let f = e,
      d,
      g;
    if (
      (c && (f = +t.startOf(f, 'isoWeek', l)),
      (f = +t.startOf(f, c ? 'day' : r)),
      t.diff(n, e, r) > 1e5 * a)
    )
      throw new Error(e + ' and ' + n + ' are too far apart with stepSize of ' + a + ' ' + r);
    const p = s.ticks.source === 'data' && this.getDataTimestamps();
    for (d = f, g = 0; d < n; d = +t.add(d, a, r), g++) Ds(h, d, p);
    return (
      (d === n || s.bounds === 'ticks' || g === 1) && Ds(h, d, p),
      Object.keys(h)
        .sort((b, m) => b - m)
        .map((b) => +b)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      n = this.options.time;
    return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      r = e || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, n, s) {
    const o = this.options,
      r = o.ticks.callback;
    if (r) return $(r, [t, e, n], this);
    const a = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      h = l && a[l],
      f = c && a[c],
      d = n[e],
      g = c && f && d && d.major;
    return this._adapter.format(t, s || (g ? f : h));
  }
  generateTickLabels(t) {
    let e, n, s;
    for (e = 0, n = t.length; e < n; ++e)
      (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      n = this.ctx.measureText(t).width,
      s = Tt(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(s),
      r = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return {
      w: n * o + a * r,
      h: n * r + a * o,
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      n = e.displayFormats,
      s = n[e.unit] || n.millisecond,
      o = this._tickFormatFunction(t, 0, Rs(this, [t], this._majorUnit), s),
      r = this._getLabelSize(o),
      a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      n;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (e = 0, n = s.length; e < n; ++e) t = t.concat(s[e].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, n = s.length; e < n; ++e) t.push(Os(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return zr(t.sort(th));
  }
}
O(li, 'id', 'time'),
  O(li, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: {
      source: 'auto',
      callback: !1,
      major: {
        enabled: !1,
      },
    },
  });
function Ke(i, t, e) {
  let n = 0,
    s = i.length - 1,
    o,
    r,
    a,
    l;
  e
    ? (t >= i[n].pos && t <= i[s].pos && ({ lo: n, hi: s } = Ut(i, 'pos', t)),
      ({ pos: o, time: a } = i[n]),
      ({ pos: r, time: l } = i[s]))
    : (t >= i[n].time && t <= i[s].time && ({ lo: n, hi: s } = Ut(i, 'time', t)),
      ({ time: o, pos: a } = i[n]),
      ({ time: r, pos: l } = i[s]));
  const c = r - o;
  return c ? a + ((l - a) * (t - o)) / c : a;
}
class As extends li {
  constructor(t) {
    super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = Ke(e, this.min)),
      (this._tableRange = Ke(e, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: n } = this,
      s = [],
      o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r) (c = t[r]), c >= e && c <= n && s.push(c);
    if (s.length < 2)
      return [
        {
          time: e,
          pos: 0,
        },
        {
          time: n,
          pos: 1,
        },
      ];
    for (r = 0, a = s.length; r < a; ++r)
      (h = s[r + 1]),
        (l = s[r - 1]),
        (c = s[r]),
        Math.round((h + l) / 2) !== c &&
          o.push({
            time: c,
            pos: r / (a - 1),
          });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      n = this.getLabelTimestamps();
    return (
      e.length && n.length ? (t = this.normalize(e.concat(n))) : (t = e.length ? e : n),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Ke(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ke(this._table, n * this._tableRange + this._minPos, !0);
  }
}
O(As, 'id', 'timeseries'), O(As, 'defaults', li.defaults);
const xo = 'label';
function Ls(i, t) {
  typeof i == 'function' ? i(t) : i && (i.current = t);
}
function sh(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function yo(i, t) {
  i.labels = t;
}
function vo(i, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xo;
  const n = [];
  i.datasets = t.map((s) => {
    const o = i.datasets.find((r) => r[e] === s[e]);
    return !o || !s.data || n.includes(o)
      ? {
          ...s,
        }
      : (n.push(o), Object.assign(o, s), o);
  });
}
function oh(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xo;
  const e = {
    labels: [],
    datasets: [],
  };
  return yo(e, i.labels), vo(e, i.datasets, t), e;
}
function rh(i, t) {
  const {
      height: e = 150,
      width: n = 300,
      redraw: s = !1,
      datasetIdKey: o,
      type: r,
      data: a,
      options: l,
      plugins: c = [],
      fallbackContent: h,
      updateMode: f,
      ...d
    } = i,
    g = xn(null),
    p = xn(),
    b = () => {
      g.current &&
        ((p.current = new Mt(g.current, {
          type: r,
          data: oh(a, o),
          options: l && {
            ...l,
          },
          plugins: c,
        })),
        Ls(t, p.current));
    },
    m = () => {
      Ls(t, null), p.current && (p.current.destroy(), (p.current = null));
    };
  return (
    Jt(() => {
      !s && p.current && l && sh(p.current, l);
    }, [s, l]),
    Jt(() => {
      !s && p.current && yo(p.current.config.data, a.labels);
    }, [s, a.labels]),
    Jt(() => {
      !s && p.current && a.datasets && vo(p.current.config.data, a.datasets, o);
    }, [s, a.datasets]),
    Jt(() => {
      p.current && (s ? (m(), setTimeout(b)) : p.current.update(f));
    }, [s, l, a.labels, a.datasets, f]),
    Jt(() => {
      p.current && (m(), setTimeout(b));
    }, [r]),
    Jt(() => (b(), () => m()), []),
    /* @__PURE__ */ ci.createElement(
      'canvas',
      Object.assign(
        {
          ref: g,
          role: 'img',
          height: e,
          width: n,
        },
        d
      ),
      h
    )
  );
}
const ah = /* @__PURE__ */ Es(rh);
function lh(i, t) {
  return (
    Mt.register(t),
    /* @__PURE__ */ Es((e, n) =>
      /* @__PURE__ */ ci.createElement(
        ah,
        Object.assign({}, e, {
          ref: n,
          type: i,
        })
      )
    )
  );
}
const ch = /* @__PURE__ */ lh('line', qe),
  hh = (i) => 16 * i,
  fh = (i) => (t) => {
    const e = t.split(`${i}`)[0],
      n = Number(e);
    return i === 'rem' ? hh(n) : n;
  },
  Hi = fh('rem'),
  dh = {
    root: Ko({
      position: 'relative',
    }),
  },
  uh = 'Analytics line chart';
Mt.register(Ni, Wi, Je, ue, Cc, Ec);
const $i = Hi(kt.fontSizeS);
Mt.defaults.font.size = $i;
Mt.defaults.font.family = kt.fontStackPrimary;
Mt.defaults.font.weight = kt.fontWeightMedium.toString();
Mt.defaults.borderColor = kt.gray200;
Mt.defaults.datasets.line.borderColor = kt.colorPrimary;
const gh = 1.2,
  ph = (i) => {
    const { dataValues: t, xAxisLabels: e, tooltipMetricLabel: n, accessibilityLabel: s } = i,
      o = {
        labels: e,
        datasets: [
          {
            data: t,
          },
        ],
      },
      r = {
        responsive: !0,
        scales: {
          y: {
            beginAtZero: !0,
            suggestedMax: Math.max(...t) * gh,
            ticks: {
              precision: 0,
            },
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: kt.gray900,
            bodyColor: kt.colorWhite,
            padding: Hi(kt.spacingXs),
            titleMarginBottom: Hi(kt.spacing2Xs),
            titleFont: {
              size: $i,
            },
            bodyFont: {
              size: $i,
              // TO:DO once font weight is added to F36, replace with token
              weight: '700',
            },
            displayColors: !1,
            callbacks: {
              beforeBody: () => n,
            },
          },
        },
      },
      a = {
        'aria-label': s,
      };
    return /* @__PURE__ */ Di.jsx('div', {
      className: dh.root,
      children: /* @__PURE__ */ Di.jsx(ch, { data: o, options: r, fallbackContent: s, ...a }),
    });
  };
ph.defaultProps = {
  accessibilityLabel: uh,
};
export { vh as HyperLink, ph as LineChart };
