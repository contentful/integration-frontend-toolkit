var Qu = Object.defineProperty;
var Ju = (t, e, n) =>
  e in t ? Qu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var K = (t, e, n) => (Ju(t, typeof e != 'symbol' ? e + '' : e, n), n);
import * as Z from 'react';
import d, {
  createContext as Xn,
  forwardRef as $e,
  createElement as di,
  Fragment as k,
  useMemo as Ai,
  useState as Xe,
  useCallback as de,
  useRef as rt,
  useEffect as Fe,
  useContext as Zr,
  Children as e1,
  isValidElement as bc,
  useReducer as t1,
} from 'react';
import * as n1 from 'react-dom';
import { createPortal as i1 } from 'react-dom';
function is(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var La = { exports: {} },
  Kn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs;
function r1() {
  if (Zs) return Kn;
  Zs = 1;
  var t = d,
    e = Symbol.for('react.element'),
    n = Symbol.for('react.fragment'),
    i = Object.prototype.hasOwnProperty,
    r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, l, c) {
    var h,
      u = {},
      p = null,
      m = null;
    c !== void 0 && (p = '' + c),
      l.key !== void 0 && (p = '' + l.key),
      l.ref !== void 0 && (m = l.ref);
    for (h in l) i.call(l, h) && !a.hasOwnProperty(h) && (u[h] = l[h]);
    if (o && o.defaultProps) for (h in ((l = o.defaultProps), l)) u[h] === void 0 && (u[h] = l[h]);
    return { $$typeof: e, type: o, key: p, ref: m, props: u, _owner: r.current };
  }
  return (Kn.Fragment = n), (Kn.jsx = s), (Kn.jsxs = s), Kn;
}
var Zn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function a1() {
  return (
    Qs ||
      ((Qs = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var t = d,
            e = Symbol.for('react.element'),
            n = Symbol.for('react.portal'),
            i = Symbol.for('react.fragment'),
            r = Symbol.for('react.strict_mode'),
            a = Symbol.for('react.profiler'),
            s = Symbol.for('react.provider'),
            o = Symbol.for('react.context'),
            l = Symbol.for('react.forward_ref'),
            c = Symbol.for('react.suspense'),
            h = Symbol.for('react.suspense_list'),
            u = Symbol.for('react.memo'),
            p = Symbol.for('react.lazy'),
            m = Symbol.for('react.offscreen'),
            g = Symbol.iterator,
            b = '@@iterator';
          function v(x) {
            if (x === null || typeof x != 'object') return null;
            var A = (g && x[g]) || x[b];
            return typeof A == 'function' ? A : null;
          }
          var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function w(x) {
            {
              for (var A = arguments.length, H = new Array(A > 1 ? A - 1 : 0), G = 1; G < A; G++)
                H[G - 1] = arguments[G];
              S('error', x, H);
            }
          }
          function S(x, A, H) {
            {
              var G = y.ReactDebugCurrentFrame,
                oe = G.getStackAddendum();
              oe !== '' && ((A += '%s'), (H = H.concat([oe])));
              var be = H.map(function (re) {
                return String(re);
              });
              be.unshift('Warning: ' + A), Function.prototype.apply.call(console[x], console, be);
            }
          }
          var M = !1,
            _ = !1,
            O = !1,
            C = !1,
            L = !1,
            T;
          T = Symbol.for('react.module.reference');
          function R(x) {
            return !!(
              typeof x == 'string' ||
              typeof x == 'function' ||
              x === i ||
              x === a ||
              L ||
              x === r ||
              x === c ||
              x === h ||
              C ||
              x === m ||
              M ||
              _ ||
              O ||
              (typeof x == 'object' &&
                x !== null &&
                (x.$$typeof === p ||
                  x.$$typeof === u ||
                  x.$$typeof === s ||
                  x.$$typeof === o ||
                  x.$$typeof === l || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  x.$$typeof === T ||
                  x.getModuleId !== void 0))
            );
          }
          function P(x, A, H) {
            var G = x.displayName;
            if (G) return G;
            var oe = A.displayName || A.name || '';
            return oe !== '' ? H + '(' + oe + ')' : H;
          }
          function N(x) {
            return x.displayName || 'Context';
          }
          function j(x) {
            if (x == null) return null;
            if (
              (typeof x.tag == 'number' &&
                w(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                ),
              typeof x == 'function')
            )
              return x.displayName || x.name || null;
            if (typeof x == 'string') return x;
            switch (x) {
              case i:
                return 'Fragment';
              case n:
                return 'Portal';
              case a:
                return 'Profiler';
              case r:
                return 'StrictMode';
              case c:
                return 'Suspense';
              case h:
                return 'SuspenseList';
            }
            if (typeof x == 'object')
              switch (x.$$typeof) {
                case o:
                  var A = x;
                  return N(A) + '.Consumer';
                case s:
                  var H = x;
                  return N(H._context) + '.Provider';
                case l:
                  return P(x, x.render, 'ForwardRef');
                case u:
                  var G = x.displayName || null;
                  return G !== null ? G : j(x.type) || 'Memo';
                case p: {
                  var oe = x,
                    be = oe._payload,
                    re = oe._init;
                  try {
                    return j(re(be));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var q = Object.assign,
            F = 0,
            U,
            X,
            ue,
            _e,
            fe,
            Re,
            B;
          function V() {}
          V.__reactDisabledLog = !0;
          function $() {
            {
              if (F === 0) {
                (U = console.log),
                  (X = console.info),
                  (ue = console.warn),
                  (_e = console.error),
                  (fe = console.group),
                  (Re = console.groupCollapsed),
                  (B = console.groupEnd);
                var x = {
                  configurable: !0,
                  enumerable: !0,
                  value: V,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: x,
                  log: x,
                  warn: x,
                  error: x,
                  group: x,
                  groupCollapsed: x,
                  groupEnd: x,
                });
              }
              F++;
            }
          }
          function W() {
            {
              if ((F--, F === 0)) {
                var x = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: q({}, x, {
                    value: U,
                  }),
                  info: q({}, x, {
                    value: X,
                  }),
                  warn: q({}, x, {
                    value: ue,
                  }),
                  error: q({}, x, {
                    value: _e,
                  }),
                  group: q({}, x, {
                    value: fe,
                  }),
                  groupCollapsed: q({}, x, {
                    value: Re,
                  }),
                  groupEnd: q({}, x, {
                    value: B,
                  }),
                });
              }
              F < 0 &&
                w('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
            }
          }
          var z = y.ReactCurrentDispatcher,
            te;
          function D(x, A, H) {
            {
              if (te === void 0)
                try {
                  throw Error();
                } catch (oe) {
                  var G = oe.stack.trim().match(/\n( *(at )?)/);
                  te = (G && G[1]) || '';
                }
              return (
                `
` +
                te +
                x
              );
            }
          }
          var Me = !1,
            ae;
          {
            var xe = typeof WeakMap == 'function' ? WeakMap : Map;
            ae = new xe();
          }
          function J(x, A) {
            if (!x || Me) return '';
            {
              var H = ae.get(x);
              if (H !== void 0) return H;
            }
            var G;
            Me = !0;
            var oe = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var be;
            (be = z.current), (z.current = null), $();
            try {
              if (A) {
                var re = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(re.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(re, []);
                  } catch (Vt) {
                    G = Vt;
                  }
                  Reflect.construct(x, [], re);
                } else {
                  try {
                    re.call();
                  } catch (Vt) {
                    G = Vt;
                  }
                  x.call(re.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Vt) {
                  G = Vt;
                }
                x();
              }
            } catch (Vt) {
              if (Vt && G && typeof Vt.stack == 'string') {
                for (
                  var ie = Vt.stack.split(`
`),
                    Ye = G.stack.split(`
`),
                    Le = ie.length - 1,
                    De = Ye.length - 1;
                  Le >= 1 && De >= 0 && ie[Le] !== Ye[De];

                )
                  De--;
                for (; Le >= 1 && De >= 0; Le--, De--)
                  if (ie[Le] !== Ye[De]) {
                    if (Le !== 1 || De !== 1)
                      do
                        if ((Le--, De--, De < 0 || ie[Le] !== Ye[De])) {
                          var ft =
                            `
` + ie[Le].replace(' at new ', ' at ');
                          return (
                            x.displayName &&
                              ft.includes('<anonymous>') &&
                              (ft = ft.replace('<anonymous>', x.displayName)),
                            typeof x == 'function' && ae.set(x, ft),
                            ft
                          );
                        }
                      while (Le >= 1 && De >= 0);
                    break;
                  }
              }
            } finally {
              (Me = !1), (z.current = be), W(), (Error.prepareStackTrace = oe);
            }
            var On = x ? x.displayName || x.name : '',
              Ks = On ? D(On) : '';
            return typeof x == 'function' && ae.set(x, Ks), Ks;
          }
          function Be(x, A, H) {
            return J(x, !1);
          }
          function Ct(x) {
            var A = x.prototype;
            return !!(A && A.isReactComponent);
          }
          function ee(x, A, H) {
            if (x == null) return '';
            if (typeof x == 'function') return J(x, Ct(x));
            if (typeof x == 'string') return D(x);
            switch (x) {
              case c:
                return D('Suspense');
              case h:
                return D('SuspenseList');
            }
            if (typeof x == 'object')
              switch (x.$$typeof) {
                case l:
                  return Be(x.render);
                case u:
                  return ee(x.type, A, H);
                case p: {
                  var G = x,
                    oe = G._payload,
                    be = G._init;
                  try {
                    return ee(be(oe), A, H);
                  } catch {}
                }
              }
            return '';
          }
          var Ee = Object.prototype.hasOwnProperty,
            ne = {},
            ke = y.ReactDebugCurrentFrame;
          function dt(x) {
            if (x) {
              var A = x._owner,
                H = ee(x.type, x._source, A ? A.type : null);
              ke.setExtraStackFrame(H);
            } else ke.setExtraStackFrame(null);
          }
          function ge(x, A, H, G, oe) {
            {
              var be = Function.call.bind(Ee);
              for (var re in x)
                if (be(x, re)) {
                  var ie = void 0;
                  try {
                    if (typeof x[re] != 'function') {
                      var Ye = Error(
                        (G || 'React class') +
                          ': ' +
                          H +
                          ' type `' +
                          re +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof x[re] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                      );
                      throw ((Ye.name = 'Invariant Violation'), Ye);
                    }
                    ie = x[re](A, re, G, H, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                  } catch (Le) {
                    ie = Le;
                  }
                  ie &&
                    !(ie instanceof Error) &&
                    (dt(oe),
                    w(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      G || 'React class',
                      H,
                      re,
                      typeof ie
                    ),
                    dt(null)),
                    ie instanceof Error &&
                      !(ie.message in ne) &&
                      ((ne[ie.message] = !0),
                      dt(oe),
                      w('Failed %s type: %s', H, ie.message),
                      dt(null));
                }
            }
          }
          var _t = Array.isArray;
          function ht(x) {
            return _t(x);
          }
          function je(x) {
            {
              var A = typeof Symbol == 'function' && Symbol.toStringTag,
                H = (A && x[Symbol.toStringTag]) || x.constructor.name || 'Object';
              return H;
            }
          }
          function Y(x) {
            try {
              return ve(x), !1;
            } catch {
              return !0;
            }
          }
          function ve(x) {
            return '' + x;
          }
          function Ht(x) {
            if (Y(x))
              return (
                w(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  je(x)
                ),
                ve(x)
              );
          }
          var ut = y.ReactCurrentOwner,
            nt = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            $s,
            js,
            ua;
          ua = {};
          function Hu(x) {
            if (Ee.call(x, 'ref')) {
              var A = Object.getOwnPropertyDescriptor(x, 'ref').get;
              if (A && A.isReactWarning) return !1;
            }
            return x.ref !== void 0;
          }
          function Vu(x) {
            if (Ee.call(x, 'key')) {
              var A = Object.getOwnPropertyDescriptor(x, 'key').get;
              if (A && A.isReactWarning) return !1;
            }
            return x.key !== void 0;
          }
          function Bu(x, A) {
            if (typeof x.ref == 'string' && ut.current && A && ut.current.stateNode !== A) {
              var H = j(ut.current.type);
              ua[H] ||
                (w(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  j(ut.current.type),
                  x.ref
                ),
                (ua[H] = !0));
            }
          }
          function Nu(x, A) {
            {
              var H = function () {
                $s ||
                  (($s = !0),
                  w(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    A
                  ));
              };
              (H.isReactWarning = !0),
                Object.defineProperty(x, 'key', {
                  get: H,
                  configurable: !0,
                });
            }
          }
          function Fu(x, A) {
            {
              var H = function () {
                js ||
                  ((js = !0),
                  w(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    A
                  ));
              };
              (H.isReactWarning = !0),
                Object.defineProperty(x, 'ref', {
                  get: H,
                  configurable: !0,
                });
            }
          }
          var $u = function (x, A, H, G, oe, be, re) {
            var ie = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: e,
              // Built-in properties that belong on the element
              type: x,
              key: A,
              ref: H,
              props: re,
              // Record the component responsible for creating this element.
              _owner: be,
            };
            return (
              (ie._store = {}),
              Object.defineProperty(ie._store, 'validated', {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(ie, '_self', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: G,
              }),
              Object.defineProperty(ie, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: oe,
              }),
              Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)),
              ie
            );
          };
          function ju(x, A, H, G, oe) {
            {
              var be,
                re = {},
                ie = null,
                Ye = null;
              H !== void 0 && (Ht(H), (ie = '' + H)),
                Vu(A) && (Ht(A.key), (ie = '' + A.key)),
                Hu(A) && ((Ye = A.ref), Bu(A, oe));
              for (be in A) Ee.call(A, be) && !nt.hasOwnProperty(be) && (re[be] = A[be]);
              if (x && x.defaultProps) {
                var Le = x.defaultProps;
                for (be in Le) re[be] === void 0 && (re[be] = Le[be]);
              }
              if (ie || Ye) {
                var De = typeof x == 'function' ? x.displayName || x.name || 'Unknown' : x;
                ie && Nu(re, De), Ye && Fu(re, De);
              }
              return $u(x, ie, Ye, oe, G, ut.current, re);
            }
          }
          var fa = y.ReactCurrentOwner,
            Ws = y.ReactDebugCurrentFrame;
          function kn(x) {
            if (x) {
              var A = x._owner,
                H = ee(x.type, x._source, A ? A.type : null);
              Ws.setExtraStackFrame(H);
            } else Ws.setExtraStackFrame(null);
          }
          var pa;
          pa = !1;
          function ma(x) {
            return typeof x == 'object' && x !== null && x.$$typeof === e;
          }
          function Xs() {
            {
              if (fa.current) {
                var x = j(fa.current.type);
                if (x)
                  return (
                    `

Check the render method of \`` +
                    x +
                    '`.'
                  );
              }
              return '';
            }
          }
          function Wu(x) {
            {
              if (x !== void 0) {
                var A = x.fileName.replace(/^.*[\\\/]/, ''),
                  H = x.lineNumber;
                return (
                  `

Check your code at ` +
                  A +
                  ':' +
                  H +
                  '.'
                );
              }
              return '';
            }
          }
          var Ys = {};
          function Xu(x) {
            {
              var A = Xs();
              if (!A) {
                var H = typeof x == 'string' ? x : x.displayName || x.name;
                H &&
                  (A =
                    `

Check the top-level render call using <` +
                    H +
                    '>.');
              }
              return A;
            }
          }
          function Us(x, A) {
            {
              if (!x._store || x._store.validated || x.key != null) return;
              x._store.validated = !0;
              var H = Xu(A);
              if (Ys[H]) return;
              Ys[H] = !0;
              var G = '';
              x &&
                x._owner &&
                x._owner !== fa.current &&
                (G = ' It was passed a child from ' + j(x._owner.type) + '.'),
                kn(x),
                w(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  H,
                  G
                ),
                kn(null);
            }
          }
          function qs(x, A) {
            {
              if (typeof x != 'object') return;
              if (ht(x))
                for (var H = 0; H < x.length; H++) {
                  var G = x[H];
                  ma(G) && Us(G, A);
                }
              else if (ma(x)) x._store && (x._store.validated = !0);
              else if (x) {
                var oe = v(x);
                if (typeof oe == 'function' && oe !== x.entries)
                  for (var be = oe.call(x), re; !(re = be.next()).done; )
                    ma(re.value) && Us(re.value, A);
              }
            }
          }
          function Yu(x) {
            {
              var A = x.type;
              if (A == null || typeof A == 'string') return;
              var H;
              if (typeof A == 'function') H = A.propTypes;
              else if (
                typeof A == 'object' &&
                (A.$$typeof === l || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  A.$$typeof === u)
              )
                H = A.propTypes;
              else return;
              if (H) {
                var G = j(A);
                ge(H, x.props, 'prop', G, x);
              } else if (A.PropTypes !== void 0 && !pa) {
                pa = !0;
                var oe = j(A);
                w(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  oe || 'Unknown'
                );
              }
              typeof A.getDefaultProps == 'function' &&
                !A.getDefaultProps.isReactClassApproved &&
                w(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                );
            }
          }
          function Uu(x) {
            {
              for (var A = Object.keys(x.props), H = 0; H < A.length; H++) {
                var G = A[H];
                if (G !== 'children' && G !== 'key') {
                  kn(x),
                    w(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      G
                    ),
                    kn(null);
                  break;
                }
              }
              x.ref !== null &&
                (kn(x), w('Invalid attribute `ref` supplied to `React.Fragment`.'), kn(null));
            }
          }
          function Gs(x, A, H, G, oe, be) {
            {
              var re = R(x);
              if (!re) {
                var ie = '';
                (x === void 0 ||
                  (typeof x == 'object' && x !== null && Object.keys(x).length === 0)) &&
                  (ie +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var Ye = Wu(oe);
                Ye ? (ie += Ye) : (ie += Xs());
                var Le;
                x === null
                  ? (Le = 'null')
                  : ht(x)
                  ? (Le = 'array')
                  : x !== void 0 && x.$$typeof === e
                  ? ((Le = '<' + (j(x.type) || 'Unknown') + ' />'),
                    (ie = ' Did you accidentally export a JSX literal instead of a component?'))
                  : (Le = typeof x),
                  w(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    Le,
                    ie
                  );
              }
              var De = ju(x, A, H, oe, be);
              if (De == null) return De;
              if (re) {
                var ft = A.children;
                if (ft !== void 0)
                  if (G)
                    if (ht(ft)) {
                      for (var On = 0; On < ft.length; On++) qs(ft[On], x);
                      Object.freeze && Object.freeze(ft);
                    } else
                      w(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      );
                  else qs(ft, x);
              }
              return x === i ? Uu(De) : Yu(De), De;
            }
          }
          function qu(x, A, H) {
            return Gs(x, A, H, !0);
          }
          function Gu(x, A, H) {
            return Gs(x, A, H, !1);
          }
          var Ku = Gu,
            Zu = qu;
          (Zn.Fragment = i), (Zn.jsx = Ku), (Zn.jsxs = Zu);
        })()),
    Zn
  );
}
process.env.NODE_ENV === 'production' ? (La.exports = r1()) : (La.exports = a1());
var ye = La.exports;
function s1(t) {
  if (t.sheet) return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e];
}
function o1(t) {
  var e = document.createElement('style');
  return (
    e.setAttribute('data-emotion', t.key),
    t.nonce !== void 0 && e.setAttribute('nonce', t.nonce),
    e.appendChild(document.createTextNode('')),
    e
  );
}
var l1 = /* @__PURE__ */ (function () {
  function t(n) {
    (this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === 'production' : n.speedy),
      (this.tags = []),
      (this.ctr = 0),
      (this.nonce = n.nonce),
      (this.key = n.key),
      (this.container = n.container),
      (this.before = null);
  }
  var e = t.prototype;
  return (
    (e.insert = function (i) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        var r = o1(this),
          a;
        this.tags.length === 0
          ? (a = this.before)
          : (a = this.tags[this.tags.length - 1].nextSibling),
          this.container.insertBefore(r, a),
          this.tags.push(r);
      }
      var s = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = s1(s);
        try {
          var l = i.charCodeAt(1) === 105 && i.charCodeAt(0) === 64;
          o.insertRule(
            i,
            // we need to insert @import rules before anything else
            // otherwise there will be an error
            // technically this means that the @import rules will
            // _usually_(not always since there could be multiple style tags)
            // be the first ones in prod and generally later in dev
            // this shouldn't really matter in the real world though
            // @import is generally only used for font faces from google fonts and etc.
            // so while this could be technically correct then it would be slower and larger
            // for a tiny bit of correctness that won't matter in the real world
            l ? 0 : o.cssRules.length
          );
        } catch (c) {
          process.env.NODE_ENV !== 'production' &&
            console.warn('There was a problem inserting the following rule: "' + i + '"', c);
        }
      } else s.appendChild(document.createTextNode(i));
      this.ctr++;
    }),
    (e.flush = function () {
      this.tags.forEach(function (i) {
        return i.parentNode.removeChild(i);
      }),
        (this.tags = []),
        (this.ctr = 0);
    }),
    t
  );
})();
function c1(t) {
  function e(B, V, $, W, z) {
    for (
      var te = 0,
        D = 0,
        Me = 0,
        ae = 0,
        xe,
        J,
        Be = 0,
        Ct = 0,
        ee,
        Ee = (ee = xe = 0),
        ne = 0,
        ke = 0,
        dt = 0,
        ge = 0,
        _t = $.length,
        ht = _t - 1,
        je,
        Y = '',
        ve = '',
        Ht = '',
        ut = '',
        nt;
      ne < _t;

    ) {
      if (
        ((J = $.charCodeAt(ne)),
        ne === ht &&
          D + ae + Me + te !== 0 &&
          (D !== 0 && (J = D === 47 ? 10 : 47), (ae = Me = te = 0), _t++, ht++),
        D + ae + Me + te === 0)
      ) {
        if (ne === ht && (0 < ke && (Y = Y.replace(p, '')), 0 < Y.trim().length)) {
          switch (J) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += $.charAt(ne);
          }
          J = 59;
        }
        switch (J) {
          case 123:
            for (Y = Y.trim(), xe = Y.charCodeAt(0), ee = 1, ge = ++ne; ne < _t; ) {
              switch ((J = $.charCodeAt(ne))) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch ((J = $.charCodeAt(ne + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Ee = ne + 1; Ee < ht; ++Ee)
                          switch ($.charCodeAt(Ee)) {
                            case 47:
                              if (J === 42 && $.charCodeAt(Ee - 1) === 42 && ne + 2 !== Ee) {
                                ne = Ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (J === 47) {
                                ne = Ee + 1;
                                break e;
                              }
                          }
                        ne = Ee;
                      }
                  }
                  break;
                case 91:
                  J++;
                case 40:
                  J++;
                case 34:
                case 39:
                  for (; ne++ < ht && $.charCodeAt(ne) !== J; );
              }
              if (ee === 0) break;
              ne++;
            }
            switch (
              ((ee = $.substring(ge, ne)),
              xe === 0 && (xe = (Y = Y.replace(u, '').trim()).charCodeAt(0)),
              xe)
            ) {
              case 64:
                switch ((0 < ke && (Y = Y.replace(p, '')), (J = Y.charCodeAt(1)), J)) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ke = V;
                    break;
                  default:
                    ke = U;
                }
                if (
                  ((ee = e(V, ke, ee, J, z + 1)),
                  (ge = ee.length),
                  0 < ue &&
                    ((ke = n(U, Y, dt)),
                    (nt = o(3, ee, ke, V, j, N, ge, J, z, W)),
                    (Y = ke.join('')),
                    nt !== void 0 && (ge = (ee = nt.trim()).length) === 0 && ((J = 0), (ee = ''))),
                  0 < ge)
                )
                  switch (J) {
                    case 115:
                      Y = Y.replace(O, s);
                    case 100:
                    case 109:
                    case 45:
                      ee = Y + '{' + ee + '}';
                      break;
                    case 107:
                      (Y = Y.replace(w, '$1 $2')),
                        (ee = Y + '{' + ee + '}'),
                        (ee =
                          F === 1 || (F === 2 && a('@' + ee, 3))
                            ? '@-webkit-' + ee + '@' + ee
                            : '@' + ee);
                      break;
                    default:
                      (ee = Y + ee), W === 112 && (ee = ((ve += ee), ''));
                  }
                else ee = '';
                break;
              default:
                ee = e(V, n(V, Y, dt), ee, W, z + 1);
            }
            (Ht += ee), (ee = dt = ke = Ee = xe = 0), (Y = ''), (J = $.charCodeAt(++ne));
            break;
          case 125:
          case 59:
            if (((Y = (0 < ke ? Y.replace(p, '') : Y).trim()), 1 < (ge = Y.length)))
              switch (
                (Ee === 0 &&
                  ((xe = Y.charCodeAt(0)), xe === 45 || (96 < xe && 123 > xe)) &&
                  (ge = (Y = Y.replace(' ', ':')).length),
                0 < ue &&
                  (nt = o(1, Y, V, B, j, N, ve.length, W, z, W)) !== void 0 &&
                  (ge = (Y = nt.trim()).length) === 0 &&
                  (Y = '\0\0'),
                (xe = Y.charCodeAt(0)),
                (J = Y.charCodeAt(1)),
                xe)
              ) {
                case 0:
                  break;
                case 64:
                  if (J === 105 || J === 99) {
                    ut += Y + $.charAt(ne);
                    break;
                  }
                default:
                  Y.charCodeAt(ge - 1) !== 58 && (ve += r(Y, xe, J, Y.charCodeAt(2)));
              }
            (dt = ke = Ee = xe = 0), (Y = ''), (J = $.charCodeAt(++ne));
        }
      }
      switch (J) {
        case 13:
        case 10:
          D === 47 ? (D = 0) : 1 + xe === 0 && W !== 107 && 0 < Y.length && ((ke = 1), (Y += '\0')),
            0 < ue * fe && o(0, Y, V, B, j, N, ve.length, W, z, W),
            (N = 1),
            j++;
          break;
        case 59:
        case 125:
          if (D + ae + Me + te === 0) {
            N++;
            break;
          }
        default:
          switch ((N++, (je = $.charAt(ne)), J)) {
            case 9:
            case 32:
              if (ae + te + D === 0)
                switch (Be) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    je = '';
                    break;
                  default:
                    J !== 32 && (je = ' ');
                }
              break;
            case 0:
              je = '\\0';
              break;
            case 12:
              je = '\\f';
              break;
            case 11:
              je = '\\v';
              break;
            case 38:
              ae + D + te === 0 && ((ke = dt = 1), (je = '\f' + je));
              break;
            case 108:
              if (ae + D + te + q === 0 && 0 < Ee)
                switch (ne - Ee) {
                  case 2:
                    Be === 112 && $.charCodeAt(ne - 3) === 58 && (q = Be);
                  case 8:
                    Ct === 111 && (q = Ct);
                }
              break;
            case 58:
              ae + D + te === 0 && (Ee = ne);
              break;
            case 44:
              D + Me + ae + te === 0 && ((ke = 1), (je += '\r'));
              break;
            case 34:
            case 39:
              D === 0 && (ae = ae === J ? 0 : ae === 0 ? J : ae);
              break;
            case 91:
              ae + D + Me === 0 && te++;
              break;
            case 93:
              ae + D + Me === 0 && te--;
              break;
            case 41:
              ae + D + te === 0 && Me--;
              break;
            case 40:
              if (ae + D + te === 0) {
                if (xe === 0)
                  switch (2 * Be + 3 * Ct) {
                    case 533:
                      break;
                    default:
                      xe = 1;
                  }
                Me++;
              }
              break;
            case 64:
              D + Me + ae + te + Ee + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ae + te + Me))
                switch (D) {
                  case 0:
                    switch (2 * J + 3 * $.charCodeAt(ne + 1)) {
                      case 235:
                        D = 47;
                        break;
                      case 220:
                        (ge = ne), (D = 42);
                    }
                    break;
                  case 42:
                    J === 47 &&
                      Be === 42 &&
                      ge + 2 !== ne &&
                      ($.charCodeAt(ge + 2) === 33 && (ve += $.substring(ge, ne + 1)),
                      (je = ''),
                      (D = 0));
                }
          }
          D === 0 && (Y += je);
      }
      (Ct = Be), (Be = J), ne++;
    }
    if (((ge = ve.length), 0 < ge)) {
      if (
        ((ke = V),
        0 < ue &&
          ((nt = o(2, ve, ke, B, j, N, ge, W, z, W)), nt !== void 0 && (ve = nt).length === 0))
      )
        return ut + ve + Ht;
      if (((ve = ke.join(',') + '{' + ve + '}'), F * q !== 0)) {
        switch ((F !== 2 || a(ve, 2) || (q = 0), q)) {
          case 111:
            ve = ve.replace(M, ':-moz-$1') + ve;
            break;
          case 112:
            ve =
              ve.replace(S, '::-webkit-input-$1') +
              ve.replace(S, '::-moz-$1') +
              ve.replace(S, ':-ms-input-$1') +
              ve;
        }
        q = 0;
      }
    }
    return ut + ve + Ht;
  }
  function n(B, V, $) {
    var W = V.trim().split(v);
    V = W;
    var z = W.length,
      te = B.length;
    switch (te) {
      case 0:
      case 1:
        var D = 0;
        for (B = te === 0 ? '' : B[0] + ' '; D < z; ++D) V[D] = i(B, V[D], $).trim();
        break;
      default:
        var Me = (D = 0);
        for (V = []; D < z; ++D)
          for (var ae = 0; ae < te; ++ae) V[Me++] = i(B[ae] + ' ', W[D], $).trim();
    }
    return V;
  }
  function i(B, V, $) {
    var W = V.charCodeAt(0);
    switch ((33 > W && (W = (V = V.trim()).charCodeAt(0)), W)) {
      case 38:
        return V.replace(y, '$1' + B.trim());
      case 58:
        return B.trim() + V.replace(y, '$1' + B.trim());
      default:
        if (0 < 1 * $ && 0 < V.indexOf('\f'))
          return V.replace(y, (B.charCodeAt(0) === 58 ? '' : '$1') + B.trim());
    }
    return B + V;
  }
  function r(B, V, $, W) {
    var z = B + ';',
      te = 2 * V + 3 * $ + 4 * W;
    if (te === 944) {
      B = z.indexOf(':', 9) + 1;
      var D = z.substring(B, z.length - 1).trim();
      return (
        (D = z.substring(0, B).trim() + D + ';'),
        F === 1 || (F === 2 && a(D, 1)) ? '-webkit-' + D + D : D
      );
    }
    if (F === 0 || (F === 2 && !a(z, 1))) return z;
    switch (te) {
      case 1015:
        return z.charCodeAt(10) === 97 ? '-webkit-' + z + z : z;
      case 951:
        return z.charCodeAt(3) === 116 ? '-webkit-' + z + z : z;
      case 963:
        return z.charCodeAt(5) === 110 ? '-webkit-' + z + z : z;
      case 1009:
        if (z.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + z + z;
      case 978:
        return '-webkit-' + z + '-moz-' + z + z;
      case 1019:
      case 983:
        return '-webkit-' + z + '-moz-' + z + '-ms-' + z + z;
      case 883:
        if (z.charCodeAt(8) === 45) return '-webkit-' + z + z;
        if (0 < z.indexOf('image-set(', 11)) return z.replace(P, '$1-webkit-$2') + z;
        break;
      case 932:
        if (z.charCodeAt(4) === 45)
          switch (z.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                z.replace('-grow', '') +
                '-webkit-' +
                z +
                '-ms-' +
                z.replace('grow', 'positive') +
                z
              );
            case 115:
              return '-webkit-' + z + '-ms-' + z.replace('shrink', 'negative') + z;
            case 98:
              return '-webkit-' + z + '-ms-' + z.replace('basis', 'preferred-size') + z;
          }
        return '-webkit-' + z + '-ms-' + z + z;
      case 964:
        return '-webkit-' + z + '-ms-flex-' + z + z;
      case 1023:
        if (z.charCodeAt(8) !== 99) break;
        return (
          (D = z
            .substring(z.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + D + '-webkit-' + z + '-ms-flex-pack' + D + z
        );
      case 1005:
        return g.test(z) ? z.replace(m, ':-webkit-') + z.replace(m, ':-moz-') + z : z;
      case 1e3:
        switch (
          ((D = z.substring(13).trim()),
          (V = D.indexOf('-') + 1),
          D.charCodeAt(0) + D.charCodeAt(V))
        ) {
          case 226:
            D = z.replace(_, 'tb');
            break;
          case 232:
            D = z.replace(_, 'tb-rl');
            break;
          case 220:
            D = z.replace(_, 'lr');
            break;
          default:
            return z;
        }
        return '-webkit-' + z + '-ms-' + D + z;
      case 1017:
        if (z.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((V = (z = B).length - 10),
          (D = (z.charCodeAt(V) === 33 ? z.substring(0, V) : z)
            .substring(B.indexOf(':', 7) + 1)
            .trim()),
          (te = D.charCodeAt(0) + (D.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > D.charCodeAt(8)) break;
          case 115:
            z = z.replace(D, '-webkit-' + D) + ';' + z;
            break;
          case 207:
          case 102:
            z =
              z.replace(D, '-webkit-' + (102 < te ? 'inline-' : '') + 'box') +
              ';' +
              z.replace(D, '-webkit-' + D) +
              ';' +
              z.replace(D, '-ms-' + D + 'box') +
              ';' +
              z;
        }
        return z + ';';
      case 938:
        if (z.charCodeAt(5) === 45)
          switch (z.charCodeAt(6)) {
            case 105:
              return (
                (D = z.replace('-items', '')),
                '-webkit-' + z + '-webkit-box-' + D + '-ms-flex-' + D + z
              );
            case 115:
              return '-webkit-' + z + '-ms-flex-item-' + z.replace(L, '') + z;
            default:
              return (
                '-webkit-' +
                z +
                '-ms-flex-line-pack' +
                z.replace('align-content', '').replace(L, '') +
                z
              );
          }
        break;
      case 973:
      case 989:
        if (z.charCodeAt(3) !== 45 || z.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (R.test(B) === !0)
          return (D = B.substring(B.indexOf(':') + 1)).charCodeAt(0) === 115
            ? r(B.replace('stretch', 'fill-available'), V, $, W).replace(
                ':fill-available',
                ':stretch'
              )
            : z.replace(D, '-webkit-' + D) + z.replace(D, '-moz-' + D.replace('fill-', '')) + z;
        break;
      case 962:
        if (
          ((z = '-webkit-' + z + (z.charCodeAt(5) === 102 ? '-ms-' + z : '') + z),
          $ + W === 211 && z.charCodeAt(13) === 105 && 0 < z.indexOf('transform', 10))
        )
          return z.substring(0, z.indexOf(';', 27) + 1).replace(b, '$1-webkit-$2') + z;
    }
    return z;
  }
  function a(B, V) {
    var $ = B.indexOf(V === 1 ? ':' : '{'),
      W = B.substring(0, V !== 3 ? $ : 10);
    return ($ = B.substring($ + 1, B.length - 1)), _e(V !== 2 ? W : W.replace(T, '$1'), $, V);
  }
  function s(B, V) {
    var $ = r(V, V.charCodeAt(0), V.charCodeAt(1), V.charCodeAt(2));
    return $ !== V + ';' ? $.replace(C, ' or ($1)').substring(4) : '(' + V + ')';
  }
  function o(B, V, $, W, z, te, D, Me, ae, xe) {
    for (var J = 0, Be = V, Ct; J < ue; ++J)
      switch ((Ct = X[J].call(h, B, Be, $, W, z, te, D, Me, ae, xe))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Be = Ct;
      }
    if (Be !== V) return Be;
  }
  function l(B) {
    switch (B) {
      case void 0:
      case null:
        ue = X.length = 0;
        break;
      default:
        if (typeof B == 'function') X[ue++] = B;
        else if (typeof B == 'object') for (var V = 0, $ = B.length; V < $; ++V) l(B[V]);
        else fe = !!B | 0;
    }
    return l;
  }
  function c(B) {
    return (
      (B = B.prefix),
      B !== void 0 &&
        ((_e = null), B ? (typeof B != 'function' ? (F = 1) : ((F = 2), (_e = B))) : (F = 0)),
      c
    );
  }
  function h(B, V) {
    var $ = B;
    if ((33 > $.charCodeAt(0) && ($ = $.trim()), (Re = $), ($ = [Re]), 0 < ue)) {
      var W = o(-1, V, $, $, j, N, 0, 0, 0, 0);
      W !== void 0 && typeof W == 'string' && (V = W);
    }
    var z = e(U, $, V, 0, 0);
    return (
      0 < ue && ((W = o(-2, z, $, $, j, N, z.length, 0, 0, 0)), W !== void 0 && (z = W)),
      (Re = ''),
      (q = 0),
      (N = j = 1),
      z
    );
  }
  var u = /^\0+/g,
    p = /[\0\r\f]/g,
    m = /: */g,
    g = /zoo|gra/,
    b = /([,: ])(transform)/g,
    v = /,\r+?/g,
    y = /([\t\r\n ])*\f?&/g,
    w = /@(k\w+)\s*(\S*)\s*/,
    S = /::(place)/g,
    M = /:(read-only)/g,
    _ = /[svh]\w+-[tblr]{2}/,
    O = /\(\s*(.*)\s*\)/g,
    C = /([\s\S]*?);/g,
    L = /-self|flex-/g,
    T = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    R = /stretch|:\s*\w+\-(?:conte|avail)/,
    P = /([^-])(image-set\()/,
    N = 1,
    j = 1,
    q = 0,
    F = 1,
    U = [],
    X = [],
    ue = 0,
    _e = null,
    fe = 0,
    Re = '';
  return (h.use = l), (h.set = c), t !== void 0 && c(t), h;
}
var Ia = '/*|*/',
  d1 = Ia + '}';
function h1(t) {
  t && xi.current.insert(t + '}');
}
var xi = {
    current: null,
  },
  u1 = function (e, n, i, r, a, s, o, l, c, h) {
    switch (e) {
      case 1: {
        switch (n.charCodeAt(0)) {
          case 64:
            return xi.current.insert(n + ';'), '';
          case 108:
            if (n.charCodeAt(2) === 98) return '';
        }
        break;
      }
      case 2: {
        if (l === 0) return n + Ia;
        break;
      }
      case 3:
        switch (l) {
          case 102:
          case 112:
            return xi.current.insert(i[0] + n), '';
          default:
            return n + (h === 0 ? Ia : '');
        }
      case -2:
        n.split(d1).forEach(h1);
    }
  },
  yc = function (e) {
    e === void 0 && (e = {});
    var n = e.key || 'css',
      i;
    e.prefix !== void 0 &&
      (i = {
        prefix: e.prefix,
      });
    var r = new c1(i);
    if (process.env.NODE_ENV !== 'production' && /[^a-z-]/.test(n))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          n +
          '" was passed'
      );
    var a = {},
      s;
    {
      s = e.container || document.head;
      var o = document.querySelectorAll('style[data-emotion-' + n + ']');
      Array.prototype.forEach.call(o, function (p) {
        var m = p.getAttribute('data-emotion-' + n);
        m.split(' ').forEach(function (g) {
          a[g] = !0;
        }),
          p.parentNode !== s && s.appendChild(p);
      });
    }
    var l;
    if (
      (r.use(e.stylisPlugins)(u1),
      (l = function (m, g, b, v) {
        var y = g.name;
        if (((xi.current = b), process.env.NODE_ENV !== 'production' && g.map !== void 0)) {
          var w = g.map;
          xi.current = {
            insert: function (M) {
              b.insert(M + w);
            },
          };
        }
        r(m, g.styles), v && (u.inserted[y] = !0);
      }),
      process.env.NODE_ENV !== 'production')
    ) {
      var c = /\/\*/g,
        h = /\*\//g;
      r.use(function (p, m) {
        switch (p) {
          case -1: {
            for (; c.test(m); ) {
              if (((h.lastIndex = c.lastIndex), h.test(m))) {
                c.lastIndex = h.lastIndex;
                continue;
              }
              throw new Error(
                'Your styles have an unterminated comment ("/*" without corresponding "*/").'
              );
            }
            c.lastIndex = 0;
            break;
          }
        }
      }),
        r.use(function (p, m, g) {
          switch (p) {
            case -1: {
              var b =
                  'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
                v = m.match(/(:first|:nth|:nth-last)-child/g);
              v &&
                u.compat !== !0 &&
                v.forEach(function (y) {
                  var w = new RegExp(y + '.*\\/\\* ' + b + ' \\*\\/'),
                    S = w.test(m);
                  y &&
                    !S &&
                    console.error(
                      'The pseudo class "' +
                        y +
                        '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                        y.split('-child')[0] +
                        '-of-type".'
                    );
                });
              break;
            }
          }
        });
    }
    var u = {
      key: n,
      sheet: new l1({
        key: n,
        container: s,
        nonce: e.nonce,
        speedy: e.speedy,
      }),
      nonce: e.nonce,
      inserted: a,
      registered: {},
      insert: l,
    };
    return u;
  },
  f1 = !0;
function rs(t, e, n) {
  var i = '';
  return (
    n.split(' ').forEach(function (r) {
      t[r] !== void 0 ? e.push(t[r]) : (i += r + ' ');
    }),
    i
  );
}
var xc = function (e, n, i) {
  var r = e.key + '-' + n.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    ((i === !1 || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      f1 === !1) &&
      e.registered[r] === void 0 &&
      (e.registered[r] = n.styles),
    e.inserted[n.name] === void 0)
  ) {
    var a = n;
    do e.insert('.' + r, a, e.sheet, !0), (a = a.next);
    while (a !== void 0);
  }
};
function p1(t) {
  for (var e = 0, n, i = 0, r = t.length; r >= 4; ++i, r -= 4)
    (n =
      (t.charCodeAt(i) & 255) |
      ((t.charCodeAt(++i) & 255) << 8) |
      ((t.charCodeAt(++i) & 255) << 16) |
      ((t.charCodeAt(++i) & 255) << 24)),
      (n = /* Math.imul(k, m): */ (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= /* k >>> r: */ n >>> 24),
      (e =
        /* Math.imul(k, m): */
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) /* Math.imul(h, m): */ ^
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
  switch (r) {
    case 3:
      e ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (e ^= t.charCodeAt(i) & 255),
        (e = /* Math.imul(h, m): */ (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
  }
  return (
    (e ^= e >>> 13),
    (e = /* Math.imul(h, m): */ (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
    ((e ^ (e >>> 15)) >>> 0).toString(36)
  );
}
var m1 = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function g1(t) {
  var e = {};
  return function (n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var Js = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  v1 =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  b1 = /[A-Z]|^ms/g,
  wc = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  as = function (e) {
    return e.charCodeAt(1) === 45;
  },
  eo = function (e) {
    return e != null && typeof e != 'boolean';
  },
  ga = g1(function (t) {
    return as(t) ? t : t.replace(b1, '-$&').toLowerCase();
  }),
  br = function (e, n) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(wc, function (i, r, a) {
            return (
              (St = {
                name: r,
                styles: a,
                next: St,
              }),
              r
            );
          });
    }
    return m1[e] !== 1 && !as(e) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
  };
if (process.env.NODE_ENV !== 'production') {
  var y1 = /(attr|calc|counters?|url)\(/,
    x1 = [
      'normal',
      'none',
      'counter',
      'open-quote',
      'close-quote',
      'no-open-quote',
      'no-close-quote',
      'initial',
      'inherit',
      'unset',
    ],
    w1 = br,
    E1 = /^-ms-/,
    C1 = /-(.)/g,
    to = {};
  br = function (e, n) {
    e === 'content' &&
      (typeof n != 'string' ||
        (x1.indexOf(n) === -1 &&
          !y1.test(n) &&
          (n.charAt(0) !== n.charAt(n.length - 1) ||
            (n.charAt(0) !== '"' && n.charAt(0) !== "'")))) &&
      console.error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          n +
          '"\'`'
      );
    var i = w1(e, n);
    return (
      i !== '' &&
        !as(e) &&
        e.indexOf('-') !== -1 &&
        to[e] === void 0 &&
        ((to[e] = !0),
        console.error(
          'Using kebab-case for css properties in objects is not supported. Did you mean ' +
            e.replace(E1, 'ms-').replace(C1, function (r, a) {
              return a.toUpperCase();
            }) +
            '?'
        )),
      i
    );
  };
}
var no = !0;
function wi(t, e, n, i) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== 'production' && n.toString() === 'NO_COMPONENT_SELECTOR')
      throw new Error(
        'Component selectors can only be used in conjunction with babel-plugin-emotion.'
      );
    return n;
  }
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (
          (St = {
            name: n.name,
            styles: n.styles,
            next: St,
          }),
          n.name
        );
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (St = {
              name: r.name,
              styles: r.styles,
              next: St,
            }),
              (r = r.next);
        var a = n.styles + ';';
        return process.env.NODE_ENV !== 'production' && n.map !== void 0 && (a += n.map), a;
      }
      return _1(t, e, n);
    }
    case 'function': {
      if (t !== void 0) {
        var s = St,
          o = n(t);
        return (St = s), wi(t, e, o, i);
      } else
        process.env.NODE_ENV !== 'production' &&
          console.error(
            "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
          );
      break;
    }
    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var l = [],
          c = n.replace(wc, function (u, p, m) {
            var g = 'animation' + l.length;
            return (
              l.push(
                'const ' + g + ' = keyframes`' + m.replace(/^@keyframes animation-\w+/, '') + '`'
              ),
              '${' + g + '}'
            );
          });
        l.length &&
          console.error(
            '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
              [].concat(l, ['`' + c + '`']).join(`
`) +
              `

You should wrap it with \`css\` like this:

` +
              ('css`' + c + '`')
          );
      }
      break;
  }
  if (e == null) return n;
  var h = e[n];
  return (
    process.env.NODE_ENV !== 'production' &&
      i &&
      no &&
      h !== void 0 &&
      (console.error(
        'Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion'
      ),
      (no = !1)),
    h !== void 0 && !i ? h : n
  );
}
function _1(t, e, n) {
  var i = '';
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) i += wi(t, e, n[r], !1);
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != 'object')
        e != null && e[s] !== void 0
          ? (i += a + '{' + e[s] + '}')
          : eo(s) && (i += ga(a) + ':' + br(a, s) + ';');
      else {
        if (a === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
          throw new Error(
            'Component selectors can only be used in conjunction with babel-plugin-emotion.'
          );
        if (Array.isArray(s) && typeof s[0] == 'string' && (e == null || e[s[0]] === void 0))
          for (var o = 0; o < s.length; o++) eo(s[o]) && (i += ga(a) + ':' + br(a, s[o]) + ';');
        else {
          var l = wi(t, e, s, !1);
          switch (a) {
            case 'animation':
            case 'animationName': {
              i += ga(a) + ':' + l + ';';
              break;
            }
            default:
              process.env.NODE_ENV !== 'production' && a === 'undefined' && console.error(v1),
                (i += a + '{' + l + '}');
          }
        }
      }
    }
  return i;
}
var io = /label:\s*([^\s;\n{]+)\s*;/g,
  Ec;
process.env.NODE_ENV !== 'production' &&
  (Ec = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var St,
  An = function (e, n, i) {
    if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
      return e[0];
    var r = !0,
      a = '';
    St = void 0;
    var s = e[0];
    s == null || s.raw === void 0
      ? ((r = !1), (a += wi(i, n, s, !1)))
      : (process.env.NODE_ENV !== 'production' && s[0] === void 0 && console.error(Js),
        (a += s[0]));
    for (var o = 1; o < e.length; o++)
      (a += wi(i, n, e[o], a.charCodeAt(a.length - 1) === 46)),
        r &&
          (process.env.NODE_ENV !== 'production' && s[o] === void 0 && console.error(Js),
          (a += s[o]));
    var l;
    process.env.NODE_ENV !== 'production' &&
      (a = a.replace(Ec, function (p) {
        return (l = p), '';
      })),
      (io.lastIndex = 0);
    for (var c = '', h; (h = io.exec(a)) !== null; )
      c +=
        '-' + // $FlowFixMe we know it's not null
        h[1];
    var u = p1(a) + c;
    return process.env.NODE_ENV !== 'production'
      ? {
          name: u,
          styles: a,
          map: l,
          next: St,
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        }
      : {
          name: u,
          styles: a,
          next: St,
        };
  },
  M1 = Object.prototype.hasOwnProperty,
  Cc = /* @__PURE__ */ Xn(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement < 'u' ? yc() : null
  ),
  S1 = /* @__PURE__ */ Xn({});
Cc.Provider;
var z1 = function (e) {
    var n = function (r, a) {
      return /* @__PURE__ */ di(Cc.Consumer, null, function (s) {
        return e(r, s, a);
      });
    };
    return /* @__PURE__ */ $e(n);
  },
  ro = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  ao = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
  k1 = function () {
    return null;
  },
  so = function (e, n, i, r) {
    var a = i === null ? n.css : n.css(i);
    typeof a == 'string' && e.registered[a] !== void 0 && (a = e.registered[a]);
    var s = n[ro],
      o = [a],
      l = '';
    typeof n.className == 'string'
      ? (l = rs(e.registered, o, n.className))
      : n.className != null && (l = n.className + ' ');
    var c = An(o);
    if (process.env.NODE_ENV !== 'production' && c.name.indexOf('-') === -1) {
      var h = n[ao];
      h && (c = An([c, 'label:' + h + ';']));
    }
    xc(e, c, typeof s == 'string'), (l += e.key + '-' + c.name);
    var u = {};
    for (var p in n)
      M1.call(n, p) &&
        p !== 'css' &&
        p !== ro &&
        (process.env.NODE_ENV === 'production' || p !== ao) &&
        (u[p] = n[p]);
    (u.ref = r), (u.className = l);
    var m = /* @__PURE__ */ di(s, u),
      g = /* @__PURE__ */ di(k1, null);
    return /* @__PURE__ */ di(k, null, g, m);
  },
  O1 = /* @__PURE__ */ z1(function (t, e, n) {
    return typeof t.css == 'function'
      ? /* @__PURE__ */ di(S1.Consumer, null, function (i) {
          return so(e, t, i, n);
        })
      : so(e, t, null, n);
  });
process.env.NODE_ENV !== 'production' && (O1.displayName = 'EmotionCssPropInternal');
function L1() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return An(e);
}
var ss = { exports: {} },
  I1 = ss.exports;
Object.defineProperty(I1, '__esModule', {
  value: !0,
});
ss.exports = {
  contentWidthDefault: '1280px',
  contentWidthText: '768px',
  contentWidthFull: '100%',
  spacing2Xs: '0.25rem',
  spacingXs: '0.5rem',
  spacingS: '0.75rem',
  spacingM: '1rem',
  spacingL: '1.5rem',
  spacingXl: '2rem',
  spacing2Xl: '3rem',
  spacing3Xl: '4rem',
  spacing4Xl: '5rem',
  zIndexNegative: -1,
  zIndexWorkbench: 0,
  zIndexDefault: 1,
  zIndexWorkbenchHeader: 10,
  zIndexModal: 100,
  zIndexModalContent: 101,
  zIndexDropdown: 1e3,
  zIndexTooltip: 1e4,
  zIndexNotification: 1e5,
  borderRadiusSmall: '4px',
  borderRadiusMedium: '6px',
  boxShadowPositive: '0px 1px 0px rgb(25, 37, 50, 0.1)',
  boxShadowDefault:
    '0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px 3px 7px -3px rgba(25, 37, 50, 0.1), 0px 6px 12px -2px rgba(25, 37, 50, 0.1);',
  boxShadowHeavy:
    '0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px -6px 16px -6px rgba(25, 37, 50, 0.03), 0px 8px 16px -8px rgba(25, 37, 50, 0.2), 0px 13px 27px -5px rgba(25, 37, 50, 0.15);',
  insetBoxShadowDefault: 'inset 0px 2px 0px rgba(225, 228, 232, 0.2);',
  glowPrimary: '0px 0px 0px 3px #98CBFF',
  glowNegative: '0px 0px 0px 3px #FFB1B2',
  glowPositive: '0px 0px 0px 3px #9ED696',
  glowWarning: '0px 0px 0px 3px #FDE5C0',
  glowMuted: '0px 0px 0px 3px #E7EBEE',
  colorBlack: '#0C141C',
  colorBlueLightest: '#E8F5FF',
  colorBlueLight: '#98CBFF',
  colorBlueMid: '#036FE3',
  colorBlueBase: '#0059C8',
  colorBlueDark: '#0041AB',
  blue100: '#E8F5FF',
  blue200: '#CEECFF',
  blue300: '#98CBFF',
  blue400: '#40A0FF',
  blue500: '#036FE3',
  blue600: '#0059C8',
  blue700: '#0041AB',
  blue800: '#003298',
  blue900: '#002A8E',
  colorContrastDark: '#0C141C',
  colorContrastMid: '#111B2B',
  colorContrastLight: '#1B273A',
  colorCoralDark: '#FFE0E0',
  colorCoralMid: '#FFF2F2',
  colorElementDarkest: '#67728A',
  colorElementDark: '#AEC1CC',
  colorElementMid: '#CFD9E0',
  colorElementLight: '#E7EBEE',
  colorElementLightest: '#F7F9FA',
  gray100: '#F7F9FA',
  gray200: '#E7EBEE',
  gray300: '#CFD9E0',
  gray400: '#AEC1CC',
  gray500: '#67728A',
  gray600: '#5A657C',
  gray700: '#414D63',
  gray800: '#1B273A',
  gray900: '#111B2B',
  colorGreenDark: '#00550C',
  colorGreenBase: '#006D23',
  colorGreenMid: '#008539',
  colorGreenLight: '#9ED696',
  colorGreenLightest: '#EAF9E8',
  green100: '#EAF9E8',
  green200: '#CDF3C6',
  green300: '#9ED696',
  green400: '#5DB057',
  green500: '#008539',
  green600: '#006D23',
  green700: '#00550C',
  green800: '#004700',
  green900: '#003F00',
  colorIceDark: '#CEECFF',
  colorIceMid: '#E8F5FF',
  colorMintDark: '#CDF3C6',
  colorMintMid: '#EAF9E8',
  colorOrangeDark: '#B12D00',
  colorOrangeBase: '#CC4500',
  colorOrangeMid: '#F07F23',
  colorOrangeLight: '#FDE5C0',
  colorOrangeLightest: '#FFF2E4',
  orange100: '#FFF2E4',
  orange200: '#FDE5C0',
  orange300: '#FDB882',
  orange400: '#F07F23',
  orange500: '#CC4500',
  orange600: '#B12D00',
  orange700: '#892300',
  orange800: '#731A00',
  orange900: '#631C00',
  colorPeachDark: '#FDE5C0',
  colorPeachMid: '#FFF2E4',
  colorPurpleDark: '#5127B5',
  colorPurpleBase: '#6C3ECF',
  colorPurpleMid: '#8553E7',
  colorPurpleLight: '#D1BBFF',
  colorPurpleLightest: '#F7F2FF',
  purple100: '#F7F2FF',
  purple200: '#EDE3FF',
  purple300: '#D1BBFF',
  purple400: '#AE89FF',
  purple500: '#8553E7',
  purple600: '#6C3ECF',
  purple700: '#5127B5',
  purple800: '#3E16A4',
  purple900: '#340E9C',
  colorRedDark: '#990017',
  colorRedBase: '#BD002A',
  colorRedMid: '#DA294A',
  colorRedLight: '#FFB1B2',
  colorRedLightest: '#FFF2F2',
  red100: '#FFF2F2',
  red200: '#FFE0E0',
  red300: '#FFB1B2',
  red400: '#FF707D',
  red500: '#DA294A',
  red600: '#BD002A',
  red700: '#990017',
  red800: '#7F0010',
  red900: '#72000E',
  colorPrimary: '#036FE3',
  colorPositive: '#008539',
  colorNegative: '#DA294A',
  colorWarning: '#F07F23',
  colorTextDark: '#111B2B',
  colorTextBase: '#1B273A',
  colorTextMid: '#414D63',
  colorTextLight: '#5A657C',
  colorTextLightest: '#67728A',
  colorWhite: '#ffffff',
  colorYellowDark: '#956300',
  colorYellowBase: '#EAAF09',
  colorYellowMid: '#FFC835',
  colorYellowLight: '#FFD960',
  colorYellowLightest: '#FFF6CC',
  yellow100: '#FEF9DF',
  yellow200: '#FFF6CC',
  yellow300: '#FFE993',
  yellow400: '#FFD960',
  yellow500: '#FFC835',
  yellow600: '#EAAF09',
  yellow700: '#B78300',
  yellow800: '#956300',
  yellow900: '#7F5200',
  transitionDurationShort: '0.1s',
  transitionDurationDefault: '0.2s',
  transitionDurationLong: '0.3s',
  transitionEasingDefault: 'ease-in-out',
  transitionEasingCubicBezier: 'cubic-bezier(0.13, 0.62, 0.11, 0.99)',
  fontBaseDefault: '16',
  fontSize4Xl: '3rem',
  fontSize3Xl: '2.25rem',
  fontSize2Xl: '1.75rem',
  fontSizeXl: '1.25rem',
  fontSizeL: '1rem',
  fontSizeM: '0.875rem',
  fontSizeS: '0.75rem',
  fontStackPrimary:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  fontStackMonospace: 'SFMono-Regular, Consolas, Liberation Mono, Menlo,monospace',
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightDemiBold: 600,
  letterSpacingWide: '0.1rem',
  lineHeightDefault: '1.5',
  lineHeightCondensed: '1.25',
  lineHeight4Xl: '3.5rem',
  lineHeight3Xl: '3rem',
  lineHeight2Xl: '2.25rem',
  lineHeightXl: '2rem',
  lineHeightL: '1.5rem',
  lineHeightM: '1.25rem',
  lineHeightS: '1rem',
};
var R1 = ss.exports;
const f = /* @__PURE__ */ is(R1);
function oo(t, e) {
  if (t.inserted[e.name] === void 0) return t.insert('', e, t.sheet, !0);
}
function lo(t, e, n) {
  var i = [],
    r = rs(t, i, n);
  return i.length < 2 ? n : r + e(i);
}
var D1 = function (e) {
    var n = yc(e);
    (n.sheet.speedy = function (o) {
      if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
        throw new Error('speedy must be changed before any rules are inserted');
      this.isSpeedy = o;
    }),
      (n.compat = !0);
    var i = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        var u = An(c, n.registered, void 0);
        return xc(n, u, !1), n.key + '-' + u.name;
      },
      r = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        var u = An(c, n.registered),
          p = 'animation-' + u.name;
        return (
          oo(n, {
            name: u.name,
            styles: '@keyframes ' + p + '{' + u.styles + '}',
          }),
          p
        );
      },
      a = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        var u = An(c, n.registered);
        oo(n, u);
      },
      s = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        return lo(n.registered, i, A1(c));
      };
    return {
      css: i,
      cx: s,
      injectGlobal: a,
      keyframes: r,
      hydrate: function (l) {
        l.forEach(function (c) {
          n.inserted[c] = !0;
        });
      },
      flush: function () {
        (n.registered = {}), (n.inserted = {}), n.sheet.flush();
      },
      // $FlowFixMe
      sheet: n.sheet,
      cache: n,
      getRegisteredStyles: rs.bind(null, n.registered),
      merge: lo.bind(null, n.registered, i),
    };
  },
  A1 = function t(e) {
    for (var n = '', i = 0; i < e.length; i++) {
      var r = e[i];
      if (r != null) {
        var a = void 0;
        switch (typeof r) {
          case 'boolean':
            break;
          case 'object': {
            if (Array.isArray(r)) a = t(r);
            else {
              a = '';
              for (var s in r) r[s] && s && (a && (a += ' '), (a += s));
            }
            break;
          }
          default:
            a = r;
        }
        a && (n && (n += ' '), (n += a));
      }
    }
    return n;
  },
  os = D1(),
  Q = os.cx,
  Ln = os.keyframes,
  I = os.css,
  T1 = Object.defineProperty,
  P1 = Object.defineProperties,
  H1 = Object.getOwnPropertyDescriptors,
  yr = Object.getOwnPropertySymbols,
  _c = Object.prototype.hasOwnProperty,
  Mc = Object.prototype.propertyIsEnumerable,
  co = (t, e, n) =>
    e in t ? T1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  Tt = (t, e) => {
    for (var n in e || (e = {})) _c.call(e, n) && co(t, n, e[n]);
    if (yr) for (var n of yr(e)) Mc.call(e, n) && co(t, n, e[n]);
    return t;
  },
  tn = (t, e) => P1(t, H1(e)),
  Ti = (t, e) => {
    var n = {};
    for (var i in t) _c.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && yr) for (var i of yr(t)) e.indexOf(i) < 0 && Mc.call(t, i) && (n[i] = t[i]);
    return n;
  };
L1`
  /* Remove default margin */
  /* Button has default margin in some browsers, like safari */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  button {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
var V1 = {
  none: 0,
  spacing2Xs: f.spacing2Xs,
  spacingXs: f.spacingXs,
  spacingS: f.spacingS,
  spacingM: f.spacingM,
  spacingL: f.spacingL,
  spacingXl: f.spacingXl,
  spacing2Xl: f.spacing2Xl,
  spacing3Xl: f.spacing3Xl,
  spacing4Xl: f.spacing4Xl,
};
function mt(t) {
  return V1[t];
}
function B1(t) {
  return Object.assign(
    {},
    t.margin ? { margin: mt(t.margin) } : null,
    t.marginLeft ? { marginLeft: mt(t.marginLeft) } : null,
    t.marginRight ? { marginRight: mt(t.marginRight) } : null,
    t.marginTop ? { marginTop: mt(t.marginTop) } : null,
    t.marginBottom ? { marginBottom: mt(t.marginBottom) } : null,
    t.padding ? { padding: mt(t.padding) } : null,
    t.paddingLeft ? { paddingLeft: mt(t.paddingLeft) } : null,
    t.paddingRight ? { paddingRight: mt(t.paddingRight) } : null,
    t.paddingTop ? { paddingTop: mt(t.paddingTop) } : null,
    t.paddingBottom ? { paddingBottom: mt(t.paddingBottom) } : null
  );
}
var N1 = 'div';
function Pi(t) {
  let e = t,
    {
      display: n,
      className: i,
      margin: r,
      marginBottom: a,
      marginLeft: s,
      marginRight: o,
      marginTop: l,
      padding: c,
      paddingBottom: h,
      paddingLeft: u,
      paddingRight: p,
      paddingTop: m,
      testId: g,
      as: b = N1,
    } = e,
    v = Ti(e, [
      'display',
      'className',
      'margin',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'padding',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
      'testId',
      'as',
    ]);
  return {
    boxProps: Tt(
      {
        className: Q(
          I({ display: n }),
          I(
            Tt(
              {},
              B1({
                margin: r,
                marginBottom: a,
                marginLeft: s,
                marginRight: o,
                marginTop: l,
                padding: c,
                paddingBottom: h,
                paddingLeft: u,
                paddingRight: p,
                paddingTop: m,
              })
            )
          ),
          i
        ),
        ['data-test-id']: g,
      },
      v
    ),
    Element: b,
  };
}
function Sc(t, e) {
  let { boxProps: n, Element: i } = Pi(t);
  return Z.createElement(i, tn(Tt({}, n), { ref: e }), t.children);
}
Sc.displayName = 'Box';
var Ve = Z.forwardRef(Sc),
  F1 = 'div';
function zc(t, e) {
  var n = t,
    {
      isInline: i,
      alignItems: r,
      alignSelf: a,
      alignContent: s,
      flex: o,
      flexBasis: l,
      flexShrink: c,
      flexDirection: h,
      flexGrow: u,
      flexWrap: p,
      fullHeight: m,
      fullWidth: g,
      gap: b,
      justifyContent: v,
      justifyItems: y,
      justifySelf: w,
      order: S,
      children: M,
      as: _,
    } = n,
    O = Ti(n, [
      'isInline',
      'alignItems',
      'alignSelf',
      'alignContent',
      'flex',
      'flexBasis',
      'flexShrink',
      'flexDirection',
      'flexGrow',
      'flexWrap',
      'fullHeight',
      'fullWidth',
      'gap',
      'justifyContent',
      'justifyItems',
      'justifySelf',
      'order',
      'children',
      'as',
    ]),
    C;
  let { boxProps: L, Element: T } = Pi(tn(Tt({}, O), { as: _ || F1 }));
  return Z.createElement(
    T,
    tn(Tt({}, L), {
      className: Q(
        I({
          display: i ? 'inline-flex' : 'flex',
          width: g ? '100%' : void 0,
          height: m ? '100%' : void 0,
          flex: o,
          flexBasis: l,
          flexShrink: c,
          flexDirection: h,
          gap: (C = f[b]) != null ? C : b,
          justifyContent: v,
          justifyItems: y,
          justifySelf: w,
          alignItems: r,
          alignSelf: a,
          alignContent: s,
          order: S,
          flexWrap: p,
          flexGrow: u,
        }),
        L.className
      ),
      ref: e,
    }),
    M
  );
}
zc.displayName = 'Flex';
var Se = Z.forwardRef(zc),
  $1 = 'div';
function kc(t, e) {
  var n = t,
    {
      alignContent: i,
      children: r,
      columnGap: a = 'spacingM',
      columns: s = 'auto',
      flow: o,
      isInline: l,
      justifyContent: c,
      rowGap: h = 'none',
      rows: u = 'auto',
      as: p,
    } = n,
    m = Ti(n, [
      'alignContent',
      'children',
      'columnGap',
      'columns',
      'flow',
      'isInline',
      'justifyContent',
      'rowGap',
      'rows',
      'as',
    ]),
    g,
    b;
  let v = (S) => (typeof S == 'number' ? `repeat(${S}, minmax(0, 1fr))` : S),
    { boxProps: y, Element: w } = Pi(tn(Tt({}, m), { as: p || $1 }));
  return Z.createElement(
    w,
    tn(Tt({}, y), {
      className: Q(
        I({
          display: l ? 'inline-grid' : 'grid',
          gridTemplateColumns: v(s),
          gridTemplateRows: v(u),
          flow: o,
          justifyContent: c,
          alignContent: i,
          columnGap: (g = mt(a)) != null ? g : 0,
          rowGap: (b = mt(h)) != null ? b : 0,
        }),
        y.className
      ),
      ref: e,
    }),
    r
  );
}
kc.displayName = 'Grid';
var j1 = Z.forwardRef(kc);
function Oc(t, e) {
  var n = t,
    { children: i, columnStart: r, columnEnd: a, rowStart: s, rowEnd: o, area: l, order: c } = n,
    h = Ti(n, ['children', 'columnStart', 'columnEnd', 'rowStart', 'rowEnd', 'area', 'order']);
  let u = l || [s || 'auto', r || 'auto', o || 'auto', a || 'auto'].join(' / '),
    { boxProps: p, Element: m } = Pi(h);
  return Z.createElement(
    m,
    tn(Tt({}, p), { className: Q(I({ gridArea: u, order: c }), p.className), ref: e }),
    i
  );
}
Oc.displayName = 'GridItem';
var W1 = Z.forwardRef(Oc),
  Lc = j1;
Lc.Item = W1;
var X1 = 'div';
function Ic(t, e) {
  var n = t,
    {
      flexDirection: i = 'row',
      alignItems: r = 'center',
      isInline: a = !1,
      spacing: s = 'spacingM',
      children: o,
      as: l,
    } = n,
    c = Ti(n, ['flexDirection', 'alignItems', 'isInline', 'spacing', 'children', 'as']);
  let { boxProps: h, Element: u } = Pi(tn(Tt({}, c), { as: l || X1 }));
  return Z.createElement(
    Se,
    tn(Tt({}, h), {
      as: u,
      flexDirection: i,
      alignItems: r,
      isInline: a,
      className: h.className,
      gap: s,
      ref: e,
    }),
    o
  );
}
Ic.displayName = 'Stack';
var ls = Z.forwardRef(Ic);
function Wt(t, e) {
  return Ai(() => t || [e || 'id', Math.round(Math.random() * 1e4)].join('_'), []);
}
function Y1({ isOpen: t, defaultIsOpen: e, onOpen: n, onClose: i }) {
  let [r, a] = Xe(e || !1),
    s = t !== void 0,
    o = s ? t : r,
    l = de(() => {
      s || a(!1), i == null || i();
    }, [s, i]),
    c = de(() => {
      s || a(!0), n == null || n();
    }, [s, n]);
  return { isOpen: o, isControlled: s, handleClose: l, handleOpen: c };
}
function Pn(...t) {
  return (e) => {
    t.forEach((n) => {
      typeof n == 'function' ? n(e) : n != null && (n.current = e);
    });
  };
}
var U1 = Object.defineProperty,
  q1 = Object.defineProperties,
  G1 = Object.getOwnPropertyDescriptors,
  xr = Object.getOwnPropertySymbols,
  Rc = Object.prototype.hasOwnProperty,
  Dc = Object.prototype.propertyIsEnumerable,
  ho = (t, e, n) =>
    e in t ? U1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  wn = (t, e) => {
    for (var n in e || (e = {})) Rc.call(e, n) && ho(t, n, e[n]);
    if (xr) for (var n of xr(e)) Dc.call(e, n) && ho(t, n, e[n]);
    return t;
  },
  En = (t, e) => q1(t, G1(e)),
  Cn = (t, e) => {
    var n = {};
    for (var i in t) Rc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && xr) for (var i of xr(t)) e.indexOf(i) < 0 && Dc.call(t, i) && (n[i] = t[i]);
    return n;
  },
  K1 = 'span';
function Z1() {
  return I({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
  });
}
function Q1() {
  return I({ wordBreak: 'break-word' });
}
function Ac(t, e) {
  var n = t,
    {
      fontSize: i = 'fontSizeM',
      fontStack: r = 'fontStackPrimary',
      fontWeight: a = 'fontWeightNormal',
      fontColor: s = 'gray800',
      lineHeight: o = 'lineHeightM',
      children: l,
      isTruncated: c,
      isWordBreak: h,
      as: u,
      className: p,
      margin: m = 'none',
    } = n,
    g = Cn(n, [
      'fontSize',
      'fontStack',
      'fontWeight',
      'fontColor',
      'lineHeight',
      'children',
      'isTruncated',
      'isWordBreak',
      'as',
      'className',
      'margin',
    ]);
  let b = u || K1;
  return d.createElement(
    Ve,
    En(wn({}, g), {
      as: b,
      className: Q(
        I({
          padding: 0,
          fontFamily: f[r],
          fontWeight: f[a],
          color: f[s],
          fontSize: f[i],
          lineHeight: f[o],
        }),
        c ? Z1() : null,
        h ? Q1() : null,
        p
      ),
      margin: m,
      ref: e,
    }),
    l
  );
}
Ac.displayName = 'Text';
var Ge = d.forwardRef(Ac),
  J1 = 'span';
function Tc(t, e) {
  var n = t,
    { children: i, fontWeight: r = 'fontWeightNormal', testId: a = 'cf-ui-caption' } = n,
    s = Cn(n, ['children', 'fontWeight', 'testId']);
  return d.createElement(
    Ge,
    En(
      wn(
        {
          as: J1,
          testId: a,
          fontSize: 'fontSizeS',
          lineHeight: 'lineHeightS',
          fontColor: 'gray900',
          fontWeight: r,
        },
        s
      ),
      { ref: e }
    ),
    i
  );
}
Tc.displayName = 'Caption';
var Pc = d.forwardRef(Tc),
  ef = 'h1';
function Hc(t, e) {
  var n = t,
    { children: i, testId: r = 'cf-ui-heading' } = n,
    a = Cn(n, ['children', 'testId']);
  return d.createElement(
    Ge,
    En(
      wn(
        {
          as: ef,
          testId: r,
          marginBottom: 'spacingM',
          fontWeight: 'fontWeightDemiBold',
          fontColor: 'gray900',
          fontSize: 'fontSizeXl',
          lineHeight: 'lineHeightXl',
        },
        a
      ),
      { ref: e }
    ),
    i
  );
}
Hc.displayName = 'Heading';
var Vc = d.forwardRef(Hc),
  tf = 'h3';
function Bc(t, e) {
  var n = t,
    { children: i, testId: r = 'cf-ui-subheading' } = n,
    a = Cn(n, ['children', 'testId']);
  return d.createElement(
    Ge,
    En(
      wn(
        {
          as: tf,
          testId: r,
          marginBottom: 'spacingM',
          fontSize: 'fontSizeL',
          lineHeight: 'lineHeightL',
          fontWeight: 'fontWeightDemiBold',
          fontColor: 'gray900',
        },
        a
      ),
      { ref: e }
    ),
    i
  );
}
Bc.displayName = 'Subheading';
var nf = d.forwardRef(Bc),
  rf = 'h2';
function Nc(t, e) {
  var n = t,
    { children: i, size: r = 'default', testId: a = 'cf-ui-display-text' } = n,
    s = Cn(n, ['children', 'size', 'testId']);
  let o = 'fontSize2Xl',
    l = 'lineHeight2Xl';
  return (
    r === 'large' && ((o = 'fontSize3Xl'), (l = 'lineHeight3Xl')),
    d.createElement(
      Ge,
      En(
        wn(
          {
            as: rf,
            testId: a,
            marginBottom: r === 'default' ? 'spacingL' : 'spacingXl',
            fontSize: o,
            lineHeight: l,
            fontColor: 'gray900',
            fontWeight: 'fontWeightDemiBold',
          },
          s
        ),
        { ref: e }
      ),
      i
    )
  );
}
Nc.displayName = 'DisplayText';
d.forwardRef(Nc);
var af = 'h2';
function Fc(t, e) {
  var n = t,
    { children: i, className: r, testId: a = 'cf-ui-section-heading' } = n,
    s = Cn(n, ['children', 'className', 'testId']);
  return d.createElement(
    Ge,
    En(
      wn(
        {
          as: af,
          testId: a,
          marginBottom: 'spacingL',
          fontWeight: 'fontWeightDemiBold',
          fontColor: 'gray900',
          fontSize: 'fontSizeS',
          lineHeight: 'lineHeightS',
          className: Q(I({ letterSpacing: f.letterSpacingWide, textTransform: 'uppercase' }), r),
        },
        s
      ),
      { ref: e }
    ),
    i
  );
}
Fc.displayName = 'SectionHeading';
d.forwardRef(Fc);
var cs = d.forwardRef((t, e) => {
  var n = t,
    { children: i, testId: r = 'cf-ui-paragraph' } = n,
    a = Cn(n, ['children', 'testId']);
  return d.createElement(
    Ge,
    En(wn({ as: 'p', testId: r, marginBottom: 'spacingM', lineHeight: 'lineHeightM' }, a), {
      ref: e,
    }),
    i
  );
});
cs.displayName = 'Paragraph';
var sf = Object.defineProperty,
  of = Object.defineProperties,
  lf = Object.getOwnPropertyDescriptors,
  wr = Object.getOwnPropertySymbols,
  $c = Object.prototype.hasOwnProperty,
  jc = Object.prototype.propertyIsEnumerable,
  uo = (t, e, n) =>
    e in t ? sf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  qt = (t, e) => {
    for (var n in e || (e = {})) $c.call(e, n) && uo(t, n, e[n]);
    if (wr) for (var n of wr(e)) jc.call(e, n) && uo(t, n, e[n]);
    return t;
  },
  Ra = (t, e) => of(t, lf(e)),
  cf = (t, e) => {
    var n = {};
    for (var i in t) $c.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && wr) for (var i of wr(t)) e.indexOf(i) < 0 && jc.call(t, i) && (n[i] = t[i]);
    return n;
  },
  df = 'svg',
  fo = {
    xlarge: { height: '48px', width: '48px' },
    large: { height: '32px', width: '32px' },
    medium: { height: '24px', width: '24px' },
    small: { height: '18px', width: '18px' },
    tiny: { height: '16px', width: '16px' },
  },
  hf = {
    muted: f.gray600,
    negative: f.colorNegative,
    positive: f.colorPositive,
    primary: f.blue600,
    secondary: f.gray900,
    warning: f.colorWarning,
    white: f.colorWhite,
  },
  uf = (t) => {
    let e = t['aria-label'],
      n = t['aria-labelledby'];
    return e || n ? {} : { 'aria-hidden': !0 };
  };
function ff(t, e) {
  var n = t,
    {
      as: i,
      children: r,
      className: a,
      variant: s = 'primary',
      size: o = 'small',
      testId: l = 'cf-ui-icon',
      trimmed: c,
      viewBox: h = '0 0 24 24',
    } = n,
    u = cf(n, ['as', 'children', 'className', 'variant', 'size', 'testId', 'trimmed', 'viewBox']);
  let p = {
      className: Q(I({ fill: hf[s], height: fo[o].height, width: c ? 'auto' : fo[o].width }), a),
      ref: e,
      testId: l,
    },
    m = uf(u);
  return i
    ? d.createElement(Ve, Ra(qt(qt(qt({ display: 'inline-block' }, m), u), p), { as: i }))
    : d.createElement(
        Ve,
        qt(Ra(qt(qt({ viewBox: h, display: 'inline-block' }, m), u), { as: df }), p),
        r
      );
}
var Wc = $e(ff);
function E({ name: t, path: e, props: n, trimmed: i, viewBox: r }) {
  let a = function (s) {
    return d.createElement(Wc, Ra(qt(qt({ viewBox: r }, n), s), { trimmed: i }), e);
  };
  return t && (a.displayName = t), a;
}
E({
  name: 'Archive',
  viewBox: '0 0 24 24',
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M6 1H5v6h1v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1h2v-1H8v-1h1v-1H8v-1h1v-1H8v-1h1v-1H8v-1h1v-1H8V9h1V8H8V7h1V1H8v5H6V5h1V4H6V1z',
    })
  ),
});
E({
  name: 'ArrowBackward',
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', { d: 'm12 20 1.41-1.41L7.83 13H20v-2H7.83l5.58-5.59L12 4l-8 8 8 8Z' })
  ),
});
E({
  name: 'ArrowDown',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M7 10l5 5 5-5z' }),
    ',',
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'ArrowDownTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 10l5 5 5-5H0z' }),
    d.createElement('path', { d: 'M0 0h10v24H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 10 24',
});
E({
  name: 'ArrowForward',
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', { d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' })
  ),
});
E({
  name: 'ArrowForwardTrimmed',
  viewBox: '0 0 24 24',
  trimmed: !0,
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', { d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' })
  ),
});
E({
  name: 'ArrowUp',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M7 14l5-5 5 5z' }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'ArrowUpTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 14l5-5 5 5H0z' }),
    d.createElement('path', { d: 'M0 0h10v24H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 10 24',
});
E({
  name: 'ArrowUpward',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M21.65 40.55V16.45L10.8 27.35L7.45 24L24 7.45L40.55 24L37.25 27.35L26.35 16.45V40.55Z',
    })
  ),
  viewBox: '0 0 48 48',
});
E({
  name: 'ArrowDownward',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M13.3333 8.00008L12.3933 7.06008L8.66667 10.7801V2.66675H7.33333L7.33333 10.7801L3.60667 7.06008L2.66667 8.00008L8 13.3334L13.3333 8.00008Z',
    })
  ),
  viewBox: '0 0 16 16',
});
E({
  name: 'Asset',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    d.createElement(
      'g',
      null,
      d.createElement('path', {
        d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
      }),
      d.createElement('path', { d: 'M14.14 11.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z' })
    )
  ),
});
E({
  name: 'AssetTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h18v24H0V0z', fill: 'none' }),
    d.createElement(
      'g',
      null,
      d.createElement('path', {
        d: 'M16 5v14H2V5h14m0-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
      }),
      d.createElement('path', { d: 'M11.1 11.9l-3 3.9L6 13.1 3 17h12l-3.9-5.1z' })
    )
  ),
  trimmed: !0,
  viewBox: '0 0 18 24',
});
E({
  name: 'Audio',
  viewBox: '0 0 24 24',
  path: d.createElement(
    'g',
    null,
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    d.createElement('path', {
      d: 'M10.4413 9.03807C10.6282 9.11547 10.75 9.29778 10.75 9.50001V19.0833C10.75 19.2856 10.6282 19.4679 10.4413 19.5453C10.2545 19.6227 10.0394 19.5799 9.89645 19.4369L6.68873 16.2292H5.21875C4.54586 16.2292 4 15.6833 4 15.0104V13.5729C4 13.2497 4.1284 12.9397 4.35696 12.7111C4.58552 12.4826 4.89552 12.3542 5.21875 12.3542H6.68873L9.89645 9.14646C10.0394 9.00346 10.2545 8.96068 10.4413 9.03807ZM9.75 10.7071L7.24939 13.2077C7.15562 13.3015 7.02844 13.3542 6.89583 13.3542H5.21875C5.16073 13.3542 5.10509 13.3772 5.06407 13.4183C5.02305 13.4593 5 13.5149 5 13.5729V15.0104C5 15.131 5.09814 15.2292 5.21875 15.2292H6.89583C7.02844 15.2292 7.15562 15.2819 7.24939 15.3756L9.75 17.8762V10.7071ZM13.2185 11.0985C13.3942 10.8855 13.7093 10.8553 13.9223 11.031C14.8125 11.7653 15.5417 12.9972 15.5417 14.2917C15.5417 15.5848 14.8092 16.8181 13.923 17.5518C13.7103 17.7279 13.3951 17.6982 13.219 17.4855C13.0429 17.2728 13.0726 16.9576 13.2853 16.7815C13.9919 16.1966 14.5417 15.2277 14.5417 14.2917C14.5417 13.3533 13.9943 12.3867 13.286 11.8024C13.073 11.6267 13.0427 11.3115 13.2185 11.0985ZM11.2832 12.3204C11.4457 12.0971 11.7584 12.0478 11.9817 12.2103C12.5976 12.6585 13.1458 13.359 13.1458 14.2917C13.1458 15.2243 12.5976 15.9248 11.9817 16.373C11.7584 16.5355 11.4457 16.4863 11.2832 16.263C11.1207 16.0397 11.17 15.727 11.3933 15.5645C11.8546 15.2288 12.1458 14.7946 12.1458 14.2917C12.1458 13.7888 11.8546 13.3546 11.3933 13.0189C11.17 12.8564 11.1207 12.5437 11.2832 12.3204Z',
    })
  ),
});
E({
  name: 'Calendar',
  path: d.createElement('path', {
    d: 'M8 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h2.778A3.222 3.222 0 0123 5.222v15.556A3.222 3.222 0 0119.778 24H4.222A3.222 3.222 0 011 20.778V5.222A3.222 3.222 0 014.222 2H7V1a1 1 0 011-1zM7 4H4.222C3.547 4 3 4.547 3 5.222V9h18V5.222C21 4.547 20.453 4 19.778 4H17v1a1 1 0 11-2 0V4H9v1a1 1 0 01-2 0V4zm14 7H3v9.778C3 21.453 3.547 22 4.222 22h15.556c.675 0 1.222-.547 1.222-1.222V11z',
  }),
});
E({
  name: 'ChatBubble',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'ChatBubbleTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M13.5 1.5h-12C.7 1.5 0 2.2 0 3v13.5l3-3h10.5c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5z',
    }),
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
var pf = E({
  name: 'CheckCircle',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    })
  ),
});
E({
  name: 'CheckCircleTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zM6 12.8L2.2 9l1.1-1.1L6 10.6l5.7-5.7L12.8 6 6 12.8z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
var mf = E({
  name: 'ChevronDown',
  path: d.createElement('path', {
    d: 'M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z',
  }),
});
E({
  name: 'ChevronDownTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M1.1 5.9l3.4 3.4 3.4-3.4 1.1 1-4.5 4.5L0 6.9l1.1-1z' }),
    d.createElement('path', { d: 'M0 0h9v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 9 18',
});
E({
  name: 'ChevronLeft',
  path: d.createElement('path', {
    d: 'M15.3738 5.29289C15.7643 5.68342 15.7643 6.31658 15.3738 6.70711L10.0809 12L15.3738 17.2929C15.7643 17.6834 15.7643 18.3166 15.3738 18.7071C14.9833 19.0976 14.3501 19.0976 13.9596 18.7071L7.95956 12.7071C7.56904 12.3166 7.56904 11.6834 7.95956 11.2929L13.9596 5.29289C14.3501 4.90237 14.9833 4.90237 15.3738 5.29289Z',
  }),
});
E({
  name: 'ChevronLeftTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M5.6 5.6L4.5 4.5 0 9l4.5 4.5 1.1-1.1L2.1 9l3.5-3.4z' }),
    d.createElement('path', { d: 'M0 0h5.6v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 5.6 18',
});
var gf = E({
  name: 'ChevronRight',
  path: d.createElement('path', {
    d: 'M8.62623 18.7071C8.2357 18.3166 8.2357 17.6834 8.62623 17.2929L13.9191 12L8.62623 6.70711C8.2357 6.31658 8.2357 5.68342 8.62623 5.29289C9.01675 4.90237 9.64992 4.90237 10.0404 5.29289L16.0404 11.2929C16.431 11.6834 16.431 12.3166 16.0404 12.7071L10.0404 18.7071C9.64992 19.0976 9.01675 19.0976 8.62623 18.7071Z',
  }),
});
E({
  name: 'ChevronRightTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M1.1 4.5L0 5.6 3.4 9 0 12.4l1.1 1.1L5.6 9 1.1 4.5z' }),
    d.createElement('path', { d: 'M0 0h5.6v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 5.6 18',
});
E({
  name: 'ChevronUp',
  path: d.createElement('path', {
    d: 'M18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31659 16.0976 5.68342 16.0976 5.2929 15.7071C4.90237 15.3166 4.90237 14.6834 5.2929 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071Z',
  }),
});
E({
  name: 'ChevronUpTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M1.1 11.6l3.4-3.4 3.4 3.4L9 10.5 4.5 6 0 10.5l1.1 1.1z' }),
    d.createElement('path', { d: 'M0 0h9v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 9 18',
});
E({
  name: 'Clock',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', { d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' })
  ),
});
E({
  name: 'ClockTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    d.createElement('path', { d: 'M10.5 5H9v6l5.25 3.15.75-1.23-4.5-2.67V5z' })
  ),
  trimmed: !0,
  viewBox: '0 0 20 24',
});
var Xc = E({
  name: 'Close',
  path: d.createElement('path', {
    d: 'M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z',
  }),
});
E({
  name: 'CloseTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M14 6.4L12.6 5 7 10.6 1.4 5 0 6.4 5.6 12 0 17.6 1.4 19 7 13.4l5.6 5.6 1.4-1.4L8.4 12 14 6.4z',
    }),
    d.createElement('path', { d: 'M0 0h14v24H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 14 24',
});
E({
  name: 'CloudUpload',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 24 24',
});
E({
  name: 'Code',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    d.createElement('path', {
      d: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    })
  ),
});
E({
  name: 'CodeIllustration',
  viewBox: '0 0 24 24',
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M13.1133 8.91158C13.3622 9.31598 13.5 9.85137 13.5 10.5408C13.5 11.7245 13.7365 12.3844 13.9341 12.7302C14.0332 12.9037 14.1256 13.0037 14.1816 13.055C14.2099 13.081 14.2298 13.0953 14.2378 13.1007C14.2386 13.1012 14.2392 13.1017 14.2398 13.1021C14.3998 13.1895 14.5 13.3575 14.5 13.5408C14.5 13.7241 14.3998 13.8921 14.2399 13.9795C14.2393 13.9799 14.2386 13.9804 14.2378 13.9809C14.2298 13.9864 14.2099 14.0007 14.1816 14.0266C14.1256 14.0779 14.0332 14.178 13.9341 14.3514C13.7365 14.6972 13.5 15.3571 13.5 16.5408C13.5 17.2294 13.3625 17.7622 13.1098 18.1609C12.8523 18.5671 12.5011 18.7928 12.1556 18.906C11.8197 19.016 11.4962 19.0181 11.2681 18.9977C11.1519 18.9874 11.0543 18.9706 10.984 18.956C10.9487 18.9487 10.9199 18.9418 10.8985 18.9363C10.8878 18.9336 10.879 18.9312 10.8721 18.9293L10.8633 18.9268L10.86 18.9258L10.8586 18.9254C10.8583 18.9253 10.8574 18.9251 11 18.4458C11.1426 17.9666 11.1423 17.9665 11.1421 17.9664L11.1408 17.966L11.1396 17.9657L11.1464 17.9675C11.1543 17.9695 11.1685 17.973 11.1879 17.977C11.2269 17.9851 11.2856 17.9953 11.3569 18.0017C11.5038 18.0148 11.6803 18.0094 11.8444 17.9556C11.9989 17.905 12.1477 17.8108 12.2652 17.6255C12.3875 17.4326 12.5 17.1023 12.5 16.5408C12.5 15.2245 12.7635 14.3844 13.0659 13.8552C13.1354 13.7336 13.2064 13.6295 13.2755 13.5408C13.2064 13.4522 13.1354 13.3481 13.0659 13.2264C12.7635 12.6972 12.5 11.8571 12.5 10.5408C12.5 9.98026 12.3878 9.64065 12.2617 9.43568C12.1393 9.23685 11.9835 9.13114 11.8244 9.07148C11.6571 9.00872 11.4791 8.99525 11.3333 9.00132C11.2623 9.00428 11.2039 9.01167 11.1653 9.01788C11.1461 9.02097 11.1322 9.02369 11.1244 9.0253L11.1177 9.02676C11.1175 9.02682 11.1172 9.02689 11.1177 9.02676L11.1194 9.02636L11.1207 9.02602C11.121 9.02596 11.1213 9.02589 11 8.54082C10.8787 8.05575 10.879 8.05568 10.8793 8.0556L10.8813 8.0551L10.8847 8.05428L10.8937 8.05217C10.9007 8.05056 10.9097 8.04857 10.9205 8.04632C10.942 8.04183 10.9711 8.03626 11.0066 8.03055C11.0773 8.01919 11.1752 8.00704 11.2917 8.00219C11.5209 7.99264 11.8429 8.01041 12.1756 8.13515C12.5165 8.26299 12.8607 8.50103 13.1133 8.91158ZM8.64201 8.08247C8.6423 8.08256 8.64257 8.08264 8.5 8.56188C8.35743 9.04112 8.35769 9.0412 8.35794 9.04128L8.35923 9.04166L8.36036 9.04199L8.35362 9.04021C8.34567 9.03818 8.33154 9.03474 8.31214 9.0307C8.27305 9.02256 8.21435 9.01236 8.14309 9.006C7.99625 8.99291 7.81971 8.99831 7.65562 9.05205C7.50106 9.10267 7.3523 9.19689 7.2348 9.38225C7.11253 9.57513 7 9.90544 7 10.4669C7 11.7832 6.73652 12.6233 6.43412 13.1525C6.36459 13.2741 6.29363 13.3782 6.22447 13.4669C6.29363 13.5555 6.36459 13.6596 6.43412 13.7813C6.73652 14.3105 7 15.1506 7 16.4669C7 17.0274 7.11219 17.367 7.23833 17.572C7.36068 17.7708 7.51646 17.8766 7.67556 17.9362C7.84292 17.999 8.02088 18.0125 8.16668 18.0064C8.2377 18.0034 8.29606 17.996 8.33472 17.9898C8.35391 17.9867 8.36783 17.984 8.37556 17.9824L8.38182 17.981L8.38062 17.9813L8.37927 17.9817C8.379 17.9817 8.37873 17.9818 8.5 18.4669C8.62127 18.952 8.62098 18.952 8.62069 18.9521L8.61866 18.9526L8.61528 18.9534L8.60626 18.9555C8.59927 18.9571 8.59031 18.9591 8.57952 18.9614C8.55795 18.9659 8.5289 18.9714 8.4934 18.9771C8.42269 18.9885 8.3248 19.0007 8.20832 19.0055C7.97912 19.0151 7.65708 18.9973 7.32444 18.8726C6.98354 18.7447 6.63932 18.5067 6.38667 18.0961C6.13781 17.6917 6 17.1563 6 16.4669C6 15.2832 5.76348 14.6233 5.56588 14.2775C5.46679 14.104 5.37439 14.004 5.31839 13.9527C5.29012 13.9267 5.27024 13.9124 5.26222 13.907C5.2614 13.9064 5.2607 13.906 5.26012 13.9056C5.10018 13.8182 5 13.6501 5 13.4669C5 13.2837 5.10017 13.1156 5.26012 13.0282C5.26069 13.0278 5.26139 13.0273 5.26222 13.0268C5.27024 13.0213 5.29011 13.007 5.31839 12.9811C5.37438 12.9298 5.46679 12.8297 5.56588 12.6563C5.76348 12.3105 6 11.6506 6 10.4669C6 9.77834 6.13747 9.24552 6.3902 8.84684C6.6477 8.44064 6.99894 8.21485 7.34438 8.10172C7.68029 7.99171 8.00375 7.98961 8.23191 8.00995C8.34815 8.02032 8.4457 8.03706 8.51598 8.0517C8.55127 8.05904 8.58011 8.06595 8.60146 8.07141C8.61215 8.07415 8.621 8.07653 8.62789 8.07844L8.63674 8.08094L8.64004 8.08189L8.64201 8.08247ZM8.38182 17.981C8.38211 17.981 8.38241 17.9809 8.38182 17.981V17.981Z',
    })
  ),
});
E({
  name: 'CodeTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M5.5 12.5L2.1 9l3.4-3.4-1-1.1L0 9l4.5 4.5 1-1zm3.9 0L12.9 9 9.4 5.6l1.1-1.1L15 9l-4.5 4.5s-1-1-1.1-1z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'Copy',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    })
  ),
});
E({
  name: 'CopyTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h14.2v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M10.5.8h-9C.7.8 0 1.4 0 2.2v10.5h1.5V2.2h9V.8zm2.3 3H4.5c-.8 0-1.5.6-1.5 1.4v10.5c0 .8.7 1.5 1.5 1.5h8.2c.8 0 1.5-.7 1.5-1.5V5.2c0-.8-.6-1.4-1.4-1.4zm0 12H4.5V5.2h8.2v10.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 14.2 18',
});
E({
  name: 'Cycle',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'CycleTrimmed',
  path: d.createElement('path', {
    d: 'M8 4V1L4 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0016 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L1.24 7.74A7.93 7.93 0 000 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
  }),
  props: {
    fillRule: 'nonzero',
    clipRule: 'evenodd',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.414,
  },
  trimmed: !0,
  viewBox: '0 0 16 24',
});
E({
  name: 'Delete',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'DeleteTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M1 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H1v12zM14 4h-3.5l-1-1h-5l-1 1H0v2h14V4z',
    }),
    d.createElement('path', { fill: 'none', d: 'M-5 0h24v24H-5V0z' })
  ),
  trimmed: !0,
  viewBox: '0 0 14 24',
});
var po = E({
  name: 'Done',
  path: d.createElement('path', {
    d: 'M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.51957 17.8946 9.26522 18 9 18C8.73478 18 8.48043 17.8946 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z',
  }),
});
E({
  name: 'DoubleArrow',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M 7 14 L 12 20 L 17 14 Z' }),
    d.createElement('path', { d: 'M 6.989 9.951 L 11.989 4 L 16.989 9.951 Z' }),
    d.createElement('path', { d: 'M 0 0 L 24 0 L 24 24 L 0 24 Z', fill: 'none' })
  ),
});
E({
  name: 'Download',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'DownloadTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M10.5 6.8h-3V2.2H3v4.5H0L5.2 12l5.3-5.2zM0 13.5V15h10.5v-1.5H0z',
    }),
    d.createElement('path', { d: 'M0 0h10.5v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 10.5 18',
});
var mo = E({
  name: 'Drag',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    d.createElement('path', {
      d: 'M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    })
  ),
});
E({
  name: 'DragTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h10v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M4 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 4 0 4.9 0 6s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 10 24',
});
E({
  name: 'Edit',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'EditTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M0 12.9v2.8h2.8l8.3-8.3-2.8-2.8L0 12.9zm13.3-7.6c.3-.3.3-.8 0-1.1l-1.8-1.8c-.3-.3-.8-.3-1.1 0L9.1 3.8l2.8 2.8c0 .1 1.4-1.3 1.4-1.3z',
    }),
    d.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 13.5 18',
});
E({
  name: 'EmbeddedEntryBlock',
  path: d.createElement('path', {
    d: 'M21 15H3c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h18c.5 0 1 .4 1 1v4c0 .6-.5 1-1 1zM19.5 7h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM19.5 19h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM17.6 23H6.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM17.6 3H6.4c-.2 0-.4-.2-.4-.4V1.4c0-.2.2-.4.4-.4h11.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
  }),
});
E({
  name: 'EmbeddedEntryBlockTrimmed',
  path: d.createElement('path', {
    d: 'M19 15H1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h18c.5 0 1 .4 1 1v4c0 .6-.5 1-1 1zM17.5 7h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM17.5 19h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM15.6 23H4.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM15.6 3H4.4c-.2 0-.4-.2-.4-.4V1.4c0-.2.2-.4.4-.4h11.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
  }),
  trimmed: !0,
  viewBox: '0 0 20 24',
});
E({
  name: 'EmbeddedEntryInline',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M13.4 17H6.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h6.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6zM22.5 11h-21c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h20.9c.4 0 .6.2.6.5v.9c0 .4-.2.6-.5.6zM4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM12.6 21H1.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM15.6 6H1.4c-.2 0-.4-.2-.4-.4V4.4c0-.2.2-.4.4-.4h14.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
    }),
    d.createElement('path', {
      d: 'M4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM19.5 16h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z',
    })
  ),
});
E({
  name: 'EmbeddedEntryInlineTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M12.4 17H5.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h6.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6zM21.5 11H.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h20.9c.4 0 .6.2.6.5v.9c0 .4-.2.6-.5.6zM3.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM11.6 21H.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM14.6 6H.4C.2 6 0 5.8 0 5.6V4.4c0-.2.2-.4.4-.4h14.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
    }),
    d.createElement('path', {
      d: 'M3.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM18.5 16h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 22 24',
});
E({
  name: 'Entry',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M3 13.5V11C3 10.4477 3.44772 10 4 10H6.5C7.05228 10 7.5 10.4477 7.5 11V13.5C7.5 14.0523 7.05228 14.5 6.5 14.5H4C3.44772 14.5 3 14.0523 3 13.5Z',
    }),
    d.createElement('path', {
      d: 'M11 13.5V11C11 10.4477 11.4477 10 12 10H14.5C15.0523 10 15.5 10.4477 15.5 11V13.5C15.5 14.0523 15.0523 14.5 14.5 14.5H12C11.4477 14.5 11 14.0523 11 13.5Z',
    }),
    d.createElement('path', {
      d: 'M7 6.5V4C7 3.44772 7.44772 3 8 3H10.5C11.0523 3 11.5 3.44772 11.5 4V6.5C11.5 7.05228 11.0523 7.5 10.5 7.5H8C7.44772 7.5 7 7.05228 7 6.5Z',
    })
  ),
  viewBox: '0 0 18 18',
});
E({
  name: 'EntryTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M3 13.5V11C3 10.4477 3.44772 10 4 10H6.5C7.05228 10 7.5 10.4477 7.5 11V13.5C7.5 14.0523 7.05228 14.5 6.5 14.5H4C3.44772 14.5 3 14.0523 3 13.5Z',
    }),
    d.createElement('path', {
      d: 'M11 13.5V11C11 10.4477 11.4477 10 12 10H14.5C15.0523 10 15.5 10.4477 15.5 11V13.5C15.5 14.0523 15.0523 14.5 14.5 14.5H12C11.4477 14.5 11 14.0523 11 13.5Z',
    }),
    d.createElement('path', {
      d: 'M7 6.5V4C7 3.44772 7.44772 3 8 3H10.5C11.0523 3 11.5 3.44772 11.5 4V6.5C11.5 7.05228 11.0523 7.5 10.5 7.5H8C7.44772 7.5 7 7.05228 7 6.5Z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 18 18',
});
E({
  name: 'Environment',
  path: d.createElement('path', {
    d: 'M10.5 3.75a.75.75 0 0 1 .75-.75h2.992c.419 0 .758.34.758.757V6.75a.75.75 0 0 1-1.5 0V5.56L9.97 9.092a2.25 2.25 0 0 1-1.591.659H3.75a.75.75 0 0 1 0-1.5h4.629a.75.75 0 0 0 .53-.22l3.53-3.53H11.25a.75.75 0 0 1-.75-.75Zm.22 8.03a.75.75 0 1 1 1.06-1.06l1.72 1.72v-1.19a.75.75 0 0 1 1.5 0v2.992c0 .419-.34.758-.758.758H11.25a.75.75 0 0 1 0-1.5h1.19l-1.72-1.72Z',
  }),
  viewBox: '0 0 18 18',
});
E({
  name: 'EnvironmentAlias',
  path: d.createElement('path', {
    d: 'M12.75 3C12.3358 3 12 3.33579 12 3.75C12 4.16421 12.3358 4.5 12.75 4.5H13.9393L10.409 8.03033C10.2684 8.17098 10.0776 8.25 9.87868 8.25H6.75C6.33579 8.25 6 8.58579 6 9C6 9.41421 6.33579 9.75 6.75 9.75H9.87868C10.4754 9.75 11.0477 9.51295 11.4697 9.09099L15 5.56066V6.75C15 7.16421 15.3358 7.5 15.75 7.5C16.1642 7.5 16.5 7.16421 16.5 6.75V3.7575C16.5 3.33914 16.1609 3 15.7425 3H12.75ZM12.2197 10.7197C11.9268 11.0126 11.9268 11.4874 12.2197 11.7803L13.9393 13.5H12.75C12.3358 13.5 12 13.8358 12 14.25C12 14.6642 12.3358 15 12.75 15H15.7425C16.1609 15 16.5 14.6609 16.5 14.2425V11.25C16.5 10.8358 16.1642 10.5 15.75 10.5C15.3358 10.5 15 10.8358 15 11.25V12.4393L13.2803 10.7197C12.9874 10.4268 12.5126 10.4268 12.2197 10.7197ZM3 9C3 6.95749 4.73373 5.25 6.9375 5.25C7.83237 5.25 8.65324 5.53347 9.31134 6.00801C9.64731 6.25027 10.1161 6.17431 10.3583 5.83833C10.6006 5.50236 10.5246 5.0336 10.1887 4.79133C9.27989 4.13603 8.15314 3.75 6.9375 3.75C3.9636 3.75 1.5 6.07194 1.5 9C1.5 11.9281 3.9636 14.25 6.9375 14.25C8.15314 14.25 9.27989 13.864 10.1887 13.2087C10.5246 12.9664 10.6006 12.4976 10.3583 12.1617C10.1161 11.8257 9.64731 11.7497 9.31134 11.992C8.65324 12.4665 7.83237 12.75 6.9375 12.75C4.73373 12.75 3 11.0425 3 9Z',
  }),
  viewBox: '0 0 18 18',
});
var vf = E({
    name: 'ErrorCircle',
    path: d.createElement(
      k,
      null,
      d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      d.createElement('path', {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
      })
    ),
  }),
  bf = E({
    name: 'ErrorCircleOutline',
    path: d.createElement(
      k,
      null,
      d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
      d.createElement('path', {
        d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
      })
    ),
  });
E({
  name: 'ErrorCircleTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8v-1.5h1.5v1.5zm0-3H6.8V5.2h1.5v4.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'ExternalLink',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'ExternalLinkTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M12 14.2H1.5V3.8h5.2V2.2H1.5C.7 2.2 0 2.9 0 3.8v10.5c0 .8.7 1.5 1.5 1.5H12c.8 0 1.5-.7 1.5-1.5V9H12v5.2zm-3.8-12v1.5h2.7l-7.4 7.4 1.1 1.1L12 4.8v2.7h1.5V2.2H8.2z',
    }),
    d.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 13.5 18',
});
E({
  name: 'FaceHappy',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'FaceHappyTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm0 13.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm.7-7.5l.8.7.8-.8.8.8.8-.8-1.6-1.5-1.6 1.6zm-3 0l.8.7.8-.8-1.6-1.5-1.6 1.6.8.8.8-.8zm2.3 5.6c1.7 0 3.2-1.1 3.8-2.6H3.7c.6 1.5 2.1 2.6 3.8 2.6z',
    }),
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'Filter',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'FilterTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M5.2 13.5h3V12h-3v1.5zM0 4.5V6h13.5V4.5H0zm2.2 5.3h9V8.2h-9v1.6z',
    }),
    d.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 13.5 18',
});
E({
  name: 'Folder',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'FolderCreate',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z',
    })
  ),
});
E({
  name: 'FolderCreateTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm-.7 6h-2.2v2.2H9v-2.2H6.8V9H9V6.8h1.5V9h2.2v1.5z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'FolderOpen',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z',
    })
  ),
});
E({
  name: 'FolderOpenTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm0 9h-12V6h12v7.5z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'FolderTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5h-6L6 3z',
    }),
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'FormatBold',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'FormatBoldTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M8.6 10.8c1-.7 1.6-1.8 1.6-2.8 0-2.3-1.8-4-4-4H0v14h7c2.1 0 3.7-1.7 3.7-3.8.1-1.5-.8-2.8-2.1-3.4zM3 6.5h3c.8 0 1.5.7 1.5 1.5S6.8 9.5 6 9.5H3v-3zm3.5 9H3v-3h3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z',
    }),
    d.createElement('path', { d: 'M0 0h10.8v24H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 10.8 24',
});
E({
  name: 'FormatItalic',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', { d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z' })
  ),
});
E({
  name: 'FormatItalicTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h12v24H0V0z', fill: 'none' }),
    d.createElement('path', { d: 'M4 4v3h2.2l-3.4 8H0v3h8v-3H5.8l3.4-8H12V4H4z' })
  ),
  trimmed: !0,
  viewBox: '0 0 12 24',
});
E({
  name: 'FormatUnderlined',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
    })
  ),
});
E({
  name: 'FormatUnderlinedTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h14v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M7 17c3.3 0 6-2.7 6-6V3h-2.5v8c0 1.9-1.6 3.5-3.5 3.5S3.5 12.9 3.5 11V3H1v8c0 3.3 2.7 6 6 6zm-7 2v2h14v-2H0z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 14 24',
});
E({
  name: 'Gift',
  viewBox: '0 0 18 18',
  path: d.createElement(
    k,
    null,
    d.createElement(
      'g',
      { clipPath: 'url(#prefix__clip0)', fillRule: 'evenodd', clipRule: 'evenodd' },
      d.createElement('path', {
        d: 'M3 9.25a.75.75 0 01.75.75v6.75h10.5V10a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V10A.75.75 0 013 9.25z',
      }),
      d.createElement('path', {
        d: 'M.75 6.25a.75.75 0 01.75-.75h15a.75.75 0 01.75.75V10a.75.75 0 01-.75.75h-15A.75.75 0 01.75 10V6.25zm1.5.75v2.25h13.5V7H2.25z',
      }),
      d.createElement('path', {
        d: 'M9 5.5a.75.75 0 01.75.75V17.5a.75.75 0 01-1.5 0V6.25A.75.75 0 019 5.5z',
      }),
      d.createElement('path', {
        d: 'M5.625 3.25a1.125 1.125 0 000 2.25h2.366a6.15 6.15 0 00-.351-.764C7.168 3.88 6.52 3.25 5.625 3.25zM9 6.25l.735-.148v-.006l-.003-.012-.01-.04a7.962 7.962 0 00-.166-.607 8.02 8.02 0 00-.602-1.423c-.56-1.018-1.6-2.264-3.329-2.264a2.625 2.625 0 000 5.25H9a.75.75 0 00.735-.897L9 6.25z',
      }),
      d.createElement('path', {
        d: 'M9.046 4.014c.56-1.018 1.6-2.264 3.329-2.264a2.625 2.625 0 010 5.25H9a.75.75 0 01-.735-.897L9 6.25a101.52 101.52 0 01-.735-.148v-.006l.003-.012.01-.04a7.977 7.977 0 01.166-.607c.12-.382.314-.899.602-1.423zm.963 1.486h2.366a1.125 1.125 0 000-2.25c-.895 0-1.543.629-2.015 1.486a6.15 6.15 0 00-.35.764zm-.274.898z',
      })
    ),
    d.createElement(
      'defs',
      null,
      d.createElement(
        'clipPath',
        { id: 'prefix__clip0' },
        d.createElement('path', { fill: '#fff', d: 'M0 0h18v18H0z' })
      )
    )
  ),
});
E({
  name: 'Heading',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    d.createElement('path', { d: 'M14.8 5v5.5H9.2V5H6.4v14h2.8v-6.1h5.6V19h2.8V5z' })
  ),
});
E({
  name: 'HeadingOne',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M11.7 5v5.5H6.1V5H3.3v14h2.8v-6.1h5.6V19h2.8V5zM18.6 19v-6.3L17.1 14l-1-1.4 2.8-2.1h1.8V19h-2.1z',
    })
  ),
});
E({
  name: 'HeadingOneTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h13v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8zM11.5 14.2V9.5l-1.1 1-.8-1 2.1-1.6H13v6.4h-1.5z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 13 18',
});
E({
  name: 'HeadingTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h8.4v18H0V0z', fill: 'none' }),
    d.createElement('path', { d: 'M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8z' })
  ),
  trimmed: !0,
  viewBox: '0 0 8.4 18',
});
E({
  name: 'HeadingTwo',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M10.8 5v5.5H5.3V5H2.4v14h2.9v-6.1h5.5V19h2.9V5zM15.4 19v-1.7l3.3-3c.2-.2.4-.4.5-.6.1-.2.2-.4.2-.7 0-.3-.1-.6-.3-.7-.2-.2-.4-.3-.8-.3-.3 0-.6.1-.8.4-.2.2-.3.5-.4.9l-1.9-.3c0-.4.2-.8.4-1.2.2-.3.4-.6.7-.9.3-.2.6-.4 1-.5s.8-.2 1.2-.2c.4 0 .8.1 1.1.2.4.1.7.3 1 .5.3.2.5.5.7.8.2.3.3.7.3 1.2 0 .3 0 .6-.1.8-.1.2-.2.5-.3.7-.1.2-.3.4-.5.6-.2.2-.4.4-.6.5l-2 1.8h3.5V19h-6.2z',
    })
  ),
});
E({
  name: 'HeadingTwoTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h14.4v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M6.3 3.8v4.1H2.2V3.8H0V14.2h2.2V9.7h4.1v4.5h2.2V3.8zM9.8 14.2V13l2.5-2.2c.2-.1.3-.3.4-.4.1-.2.2-.3.2-.5s-.1-.4-.2-.5c-.3-.3-.5-.4-.8-.4-.2 0-.5.1-.6.3-.1.1-.2.4-.3.7l-1.4-.2c0-.3.2-.6.3-.9.1-.2.3-.5.5-.7.2-.1.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.8.1.3.1.5.2.8.4.2.2.4.4.5.6s.2.5.2.9c0 .2 0 .5-.1.6-.1.1-.2.4-.2.5-.1.2-.2.3-.4.5-.2.1-.3.3-.4.4L11.8 13h2.6v1.3H9.8z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 14.4 18',
});
E({
  name: 'HelpCircle',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
    })
  ),
});
E({
  name: 'HelpCircleInverted',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z',
      stroke: 'white',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      fill: 'none',
    }),
    d.createElement('path', {
      d: 'M11.545 12.4267L11.545 12.4267L11.5452 12.424C11.5617 12.1009 11.6251 11.8675 11.7824 11.6526C11.9426 11.4337 12.2066 11.225 12.6445 10.967L12.6451 10.9667C13.5697 10.4133 14.1293 9.65976 14.1293 8.55664C14.1293 7.77191 13.8071 7.1048 13.2522 6.63544C12.6986 6.16714 11.919 5.9 11.0078 5.9C9.61504 5.9 8.53153 6.48625 8.09344 7.47641C7.96552 7.75376 7.9 8.00709 7.9 8.31738C7.9 8.54471 7.96551 8.73994 8.10111 8.87863C8.23704 9.01765 8.43116 9.0873 8.66309 9.0873C8.84907 9.0873 9.01208 9.0461 9.14782 8.9371C9.28176 8.82955 9.37718 8.66547 9.44869 8.44379L9.44872 8.4438L9.44947 8.44125C9.55376 8.08601 9.73402 7.81728 9.9808 7.63674C10.2278 7.45603 10.5494 7.35781 10.9463 7.35781C11.3808 7.35781 11.7386 7.48996 11.9864 7.71024C12.2333 7.92968 12.3775 8.24212 12.3775 8.61816C12.3775 8.93652 12.3083 9.18522 12.1457 9.41384C11.9806 9.64593 11.7141 9.8647 11.3048 10.1116C10.8536 10.3824 10.5122 10.67 10.2841 11.0077C10.0546 11.3474 9.94395 11.7314 9.94395 12.1865V12.3438C9.94395 12.5858 10.0081 12.8107 10.1466 12.9769C10.2871 13.1456 10.496 13.2436 10.7617 13.2436C11.0072 13.2436 11.1991 13.1631 11.3325 13.0113C11.463 12.8626 11.527 12.6575 11.545 12.4267ZM10.7617 16.1488C11.3276 16.1488 11.7641 15.7232 11.7641 15.167C11.7641 14.6107 11.3276 14.1852 10.7617 14.1852C10.2095 14.1852 9.76621 14.6107 9.76621 15.167C9.76621 15.7232 10.2095 16.1488 10.7617 16.1488Z',
      fill: 'white',
      stroke: 'white',
      strokeWidth: '0.2',
    })
  ),
  viewBox: '0 0 22 22',
});
E({
  name: 'HelpCircleTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 12.7H6.8v-1.5h1.5v1.5zm1.6-5.8l-.7.7c-.5.5-.9 1-.9 2.1H6.8v-.4c0-.8.3-1.6.9-2.1l.9-.9c.2-.3.4-.6.4-1 0-.8-.7-1.5-1.5-1.5S6 5.9 6 6.8H4.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 .6-.3 1.2-.7 1.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'HorizontalRule',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    d.createElement('path', { d: 'M3.6 11.2h16.8v1.7H3.6z' })
  ),
});
E({
  name: 'HorizontalRuleTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h12.6v18H0V0z', fill: 'none' }),
    d.createElement('path', { d: 'M0 8.4h12.6v1.3H0z' })
  ),
  trimmed: !0,
  viewBox: '0 0 12.6 18',
});
E({
  name: 'Image',
  viewBox: '0 0 24 24',
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M12.053 10.503a.5.5 0 01.427.356l2.5 8.5a.5.5 0 01-.48.641h-10a.5.5 0 01-.447-.724l2.5-5a.5.5 0 01.8-.13l1.528 1.528 2.68-4.913a.5.5 0 01.492-.258zm-.192 1.796l-2.422 4.44a.5.5 0 01-.793.114l-1.509-1.509L5.309 19h8.523l-1.971-6.7zM6 8a1 1 0 100 2 1 1 0 000-2zM4 9a2 2 0 114 0 2 2 0 01-4 0z',
    })
  ),
});
var go = E({
  name: 'InfoCircle',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    })
  ),
});
E({
  name: 'InfoCircleTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8V8.2h1.5v4.6zm0-6H6.8V5.2h1.5v1.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'Language',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
    })
  ),
});
E({
  name: 'Link',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    })
  ),
});
E({
  name: 'LinkAlternate',
  path: d.createElement('path', {
    d: 'm10.4744 13.5256c.4436.4219.4436 1.1144 0 1.5363-.4219.422-1.11438.422-1.53634 0-2.10982-2.1098-2.10982-5.53958 0-7.6494l3.83014-3.83014c2.1098-2.10981 5.5396-2.10981 7.6494 0 2.1099 2.10982 2.1099 5.53963 0 7.64944l-1.6121 1.6121c.0108-.8872-.1298-1.7744-.4328-2.6183l.5086-.51935c1.2767-1.26589 1.2767-3.32161 0-4.58751-1.2659-1.27671-3.3217-1.27671-4.5875 0l-3.8194 3.81932c-1.27667 1.26584-1.27667 3.32164 0 4.58754zm3.0512-4.58754c.4219-.42197 1.1144-.42197 1.5363 0 2.1099 2.10984 2.1099 5.53964 0 7.64944l-3.8301 3.8301c-2.10981 2.1099-5.53962 2.1099-7.64944 0-2.10981-2.1098-2.10981-5.5396 0-7.6494l1.61212-1.6121c-.01082.8872.12984 1.7744.43279 2.6291l-.50853.5086c-1.27671 1.2658-1.27671 3.3216 0 4.5875 1.2659 1.2767 3.32162 1.2767 4.58751 0l3.81935-3.8194c1.2767-1.2658 1.2767-3.3216 0-4.5875-.4436-.4219-.4436-1.11438 0-1.53634z',
  }),
});
E({
  name: 'LinkTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M1.4 9c0-1.3 1-2.3 2.3-2.3h3V5.2h-3C1.7 5.2 0 6.9 0 9s1.7 3.8 3.8 3.8h3v-1.4h-3c-1.3-.1-2.4-1.1-2.4-2.4zm3.1.8h6V8.2h-6v1.6zm6.7-4.6h-3v1.4h3c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3h-3v1.4h3c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.6-3.8-3.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'ListBulleted',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
    }),
    d.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' })
  ),
});
E({
  name: 'ListBulletedTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M1.1 7.9C.5 7.9 0 8.4 0 9s.5 1.1 1.1 1.1S2.2 9.6 2.2 9s-.5-1.1-1.1-1.1zm0-4.5C.5 3.4 0 3.9 0 4.5s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm0 9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm2.3 1.8h10.5v-1.5H3.4v1.5zm0-4.4h10.5V8.2H3.4v1.6zm0-6v1.5h10.5V3.8H3.4z',
    }),
    d.createElement('path', { d: 'M0 0h13.9v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 13.9 18',
});
E({
  name: 'ListNumbered',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'ListNumberedTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M0 12.8h1.5v.4H.8v.8h.8v.4H0v.6h2.2v-3H0v.8zM.8 6h.8V3H0v.8h.8V6zM0 8.2h1.3L0 9.8v.7h2.2v-.7H.9l1.3-1.6v-.7H0v.7zm3.8-4.4v1.5h10.5V3.8H3.8zm0 10.4h10.5v-1.5H3.8v1.5zm0-4.4h10.5V8.2H3.8v1.6z',
    }),
    d.createElement('path', { d: 'M0 0h14.2v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 14.2 18',
});
E({
  name: 'Lock',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
    })
  ),
});
E({
  name: 'LockTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h12v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M10.5 6h-.7V4.5C9.8 2.4 8.1.7 6 .7S2.2 2.4 2.2 4.5V6h-.7C.7 6 0 6.7 0 7.5V15c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5V7.5c0-.8-.7-1.5-1.5-1.5zM6 12.8c-.8 0-1.5-.7-1.5-1.5S5.2 9.8 6 9.8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM8.3 6H3.7V4.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3V6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 12 18',
});
E({
  name: 'Logout',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      clipRule: 'evenodd',
      d: 'M5 4a1 1 0 00-1 1v14a1 1 0 001 1h4a1 1 0 110 2H5a3 3 0 01-3-3V5a3 3 0 013-3h4a1 1 0 010 2H5zM15.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L19.586 12l-4.293-4.293a1 1 0 010-1.414z',
    }),
    d.createElement('path', {
      clipRule: 'evenodd',
      d: 'M8 12a1 1 0 011-1h12a1 1 0 110 2H9a1 1 0 01-1-1z',
    })
  ),
});
E({
  name: 'LooksOne',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z',
    })
  ),
});
E({
  name: 'LooksOneTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h18v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H9V9H7V7h4v10z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 18 24',
});
E({
  name: 'LooksTwo',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 01-2 2h-2v2h4v2H9v-4a2 2 0 012-2h2V9H9V7h4a2 2 0 012 2v2z',
    })
  ),
});
E({
  name: 'LooksTwoTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h18v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.1-.9 2-2 2H8v2h4v2H6v-4c0-1.1.9-2 2-2h2V9H6V7h4c1.1 0 2 .9 2 2v2z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 18 24',
});
E({
  name: 'Markup',
  viewBox: '0 0 24 24',
  path: Z.createElement(
    Z.Fragment,
    null,
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M7.854 10.139a.5.5 0 010 .707l-3.647 3.646 3.647 3.646a.5.5 0 11-.708.708l-4-4a.5.5 0 010-.707l4-4a.5.5 0 01.708 0zM12 18.846a.5.5 0 010-.707l3.646-3.647L12 10.846a.5.5 0 11.707-.707l4 4a.5.5 0 010 .707l-4 4a.5.5 0 01-.707 0z',
    })
  ),
});
E({
  name: 'Menu',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
  ),
});
E({
  name: 'MenuTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M0 13.5h13.5V12H0v1.5zm0-3.7h13.5V8.2H0v1.6zm0-5.3V6h13.5V4.5H0z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 13.5 18',
});
var yf = E({
    name: 'Minus',
    path: d.createElement('rect', { x: '4', y: '11', width: '16', height: '2', rx: '1' }),
  }),
  xf = E({
    name: 'MoreHorizontal',
    path: d.createElement(
      k,
      null,
      d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      d.createElement('path', {
        d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      })
    ),
  });
E({
  name: 'MoreHorizontalTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h12v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M1.5 7.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm9 0C9.7 7.5 9 8.2 9 9s.7 1.5 1.5 1.5S12 9.8 12 9s-.7-1.5-1.5-1.5zM6 7.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S7.5 9.8 7.5 9 6.8 7.5 6 7.5z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 12 18',
});
E({
  name: 'MoreVertical',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    })
  ),
});
E({
  name: 'MoreVerticalTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h3v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M1.5 6C2.3 6 3 5.3 3 4.5S2.3 3 1.5 3 0 3.7 0 4.5.7 6 1.5 6zm0 1.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm0 4.5c-.8 0-1.5.7-1.5 1.5S.7 15 1.5 15 3 14.3 3 13.5 2.3 12 1.5 12z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 3 18',
});
E({
  name: 'Page',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    d.createElement('path', { d: 'M8 16h8v2H8zM8 12h8v2H8z' }),
    d.createElement('path', {
      d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z',
    })
  ),
});
E({
  name: 'PageTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h16v24H0V0z', fill: 'none' }),
    d.createElement('path', { d: 'M4 16h8v2H4zM4 12h8v2H4z' }),
    d.createElement('path', {
      d: 'M10 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H2V4h7v5h5v11z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 16 24',
});
E({
  name: 'Pdf',
  viewBox: '0 0 24 24',
  path: Z.createElement(
    Z.Fragment,
    null,
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M0 .5A.5.5 0 01.5 0h13a.5.5 0 01.354.146l6 6A.5.5 0 0120 6.5v17a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5V.5zM1 1v22h18V7h-5.5a.5.5 0 01-.5-.5V1H1zm13 .707L18.293 6H14V1.707zM4 14.5a.5.5 0 01.5-.5h1.25a1.75 1.75 0 010 3.5H5v1.999a.5.5 0 01-1 0V14.5zm1.75 2a.75.75 0 100-1.5H5v1.5h.75zm2.75-2A.5.5 0 019 14h1c1.527 0 2.5 1.403 2.5 3s-.973 3-2.5 3H9a.5.5 0 01-.5-.5v-5zM10 19c.777 0 1.5-.733 1.5-2s-.723-2-1.5-2h-.5v4h.5zm4.013-5h2.5s.5 0 .5.5-.5.5-.5.5h-2v1h1s.5.013.5.5-.5.5-.5.5h-1v2.5s0 .5-.5.5-.5-.5-.5-.5-.026-4.473-.013-4.987c.013-.513.513-.513.513-.513z',
    })
  ),
});
E({
  name: 'Person',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    })
  ),
});
E({
  name: 'Plaintext',
  viewBox: '0 0 24 24',
  path: Z.createElement(
    Z.Fragment,
    null,
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M4 7.5a.5.5 0 01.5-.5H9a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM13.5 13h-4s-.5 0-.5.5v1c0 .5.5.5.5.5s.5 0 .5-.5V14h1v5h-1c-.5 0-.5.5-.5.5s0 .5.5.5h3c.5 0 .5-.5.5-.5s0-.5-.5-.5h-1v-5h1v.5c0 .5.5.5.5.5s.5 0 .5-.5v-1c0-.5-.5-.5-.5-.5z',
    })
  ),
});
E({
  name: 'Plus',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'PlusCircle',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
    })
  ),
});
E({
  name: 'PlusCircleTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm3.7 8.3h-3v3H6.8v-3h-3V8.2h3v-3h1.5v3h3v1.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'PlusTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M10.5 9.8H6v4.5H4.5V9.8H0V8.2h4.5V3.8H6v4.5h4.5v1.5z' }),
    d.createElement('path', { d: 'M0 0h10.5v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 10.5 18',
});
E({
  name: 'Presentation',
  viewBox: '0 0 24 24',
  path: Z.createElement(
    Z.Fragment,
    null,
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M0 .5A.5.5 0 01.5 0h22a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-3zM1 1v2h21V1H1zM.021 17.5a.5.5 0 01.5-.5h21.958a.5.5 0 010 1H.521a.5.5 0 01-.5-.5z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M2 3.5a.5.5 0 01.5-.5h18a.5.5 0 01.5.5v14a.5.5 0 01-.5.5H12v2.5h-1V18H2.5a.5.5 0 01-.5-.5v-14zM3 4v13h17V4H3z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M11.5 21a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zM10.268 7.785a.5.5 0 01.517.032l3.272 2.272a.5.5 0 010 .822l-3.272 2.272a.5.5 0 01-.785-.411V8.228a.5.5 0 01.268-.443zM11 9.184v2.632l1.895-1.316L11 9.184z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M11.5 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM6 10.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z',
    })
  ),
});
E({
  name: 'Preview',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    })
  ),
});
E({
  name: 'PreviewOff',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z',
      fill: 'none',
    }),
    d.createElement('path', {
      d: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
    })
  ),
});
E({
  name: 'Puzzle',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M9.793.005a3.493 3.493 0 013.487 3.28l.006.212v.704h3.326a2.972 2.972 0 011.803.614l.15.123.143.134c.51.51.816 1.186.865 1.901l.008.196-.002 3.323h.703c.784 0 1.54.264 2.152.742l.163.135.155.147a3.494 3.494 0 01-2.258 5.957l-.212.007h-.704v3.325a2.974 2.974 0 01-.613 1.802l-.124.15-.134.144a2.974 2.974 0 01-1.9.865l-.196.007h-4.857V21.34a1.962 1.962 0 00-3.911-.176l-.012.166v2.443H2.975A2.974 2.974 0 01.012 21l-.007-.196v-4.856h2.433a1.962 1.962 0 00.176-3.91l-.166-.014H.018V7.17a2.965 2.965 0 012.76-2.961l.196-.007H6.3V3.5c0-.785.264-1.542.741-2.152l.136-.163.147-.155A3.493 3.493 0 019.793.005zm0 1.74c-.908 0-1.665.693-1.745 1.597l-.008.154V5.94H2.974c-.628 0-1.149.484-1.21 1.103l-.007.125-.001 3.115h.692c.913 0 1.791.336 2.468.941l.152.144a3.704 3.704 0 01-2.41 6.315l-.209.005h-.702v3.116c0 .634.492 1.163 1.11 1.222l.118.005H6.09v-.703c0-.912.338-1.789.941-2.465l.145-.152a3.704 3.704 0 016.314 2.408l.006.21v.702h3.114c.631 0 1.157-.487 1.22-1.103l.007-.124v-5.065h2.445a1.752 1.752 0 00.153-3.499l-.153-.005h-2.446V7.168c0-.634-.49-1.163-1.108-1.223l-.118-.006h-5.067V3.496a1.75 1.75 0 00-1.75-1.751z',
    })
  ),
});
E({
  name: 'Quote',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'QuoteTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M.8 12.8H3l1.5-3V5.2H0v4.5h2.2L.8 12.8zm6 0H9l1.5-3V5.2H6v4.5h2.2l-1.4 3.1z',
    }),
    d.createElement('path', { d: 'M0 0h10.5v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 10.5 18',
});
E({
  name: 'Receipt',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'ReceiptTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M11.2 12.8h-9v-1.5h9v1.5zm0-3h-9V8.2h9v1.6zm0-3h-9V5.2h9v1.6zM0 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1L9 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1v-15l-1.1 1.1-1.1-1.1-1.1 1.1L9 1.5 7.9 2.6 6.8 1.5 5.6 2.6 4.5 1.5 3.4 2.6 2.2 1.5 1.1 2.6 0 1.5v15z',
    }),
    d.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 13.5 18',
});
E({
  name: 'References',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
    d.createElement('path', {
      d: 'M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z',
    })
  ),
});
E({
  name: 'Release',
  path: d.createElement('path', {
    d: 'M3.426 1.5C3.865.569 4.68 0 5.689 0h12.622c.995 0 1.95.666 2.294 1.57v.003s2.262 5.71 2.329 6.069C23 8 23 8 23 8.455v13.09C23 22.857 21.902 24 20.571 24H3.43C2.097 24 1 22.856 1 21.546V8.455C1 8 1 8 1.066 7.642c.067-.358 2.33-6.074 2.33-6.074a.997.997 0 01.03-.068zM3.838 6H11V2H5.69c-.152 0-.302.046-.441.324L3.839 6zM13 2v4h7.162l-1.426-3.715-.002-.006C18.688 2.156 18.48 2 18.311 2H13zM3.429 8C3.236 8 3 8.214 3 8.455v13.09c0 .241.236.455.429.455H20.57c.193 0 .429-.214.429-.454V8.455c0-.241-.236-.455-.429-.455H3.43zM13 19a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z',
  }),
});
E({
  name: 'ReleaseTrimmed',
  path: d.createElement('path', {
    d: 'M2.426 1.5C2.865.569 3.68 0 4.689 0h12.622c.995 0 1.95.666 2.294 1.57v.003s2.262 5.71 2.329 6.069C22 8 22 8 22 8.455v13.09C22 22.857 20.902 24 19.571 24H2.43C1.097 24 0 22.856 0 21.546V8.455C0 8 0 8 .066 7.642c.067-.358 2.33-6.074 2.33-6.074a.997.997 0 01.03-.068zM2.838 6H10V2H4.69c-.152 0-.302.046-.441.324L2.839 6zM12 2v4h7.162l-1.426-3.715-.002-.006C17.688 2.156 17.48 2 17.311 2H12zM2.429 8C2.236 8 2 8.214 2 8.455v13.09c0 .241.236.455.429.455H19.57c.193 0 .429-.214.429-.454V8.455c0-.241-.236-.455-.429-.455H2.43zM12 19a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z',
  }),
  trimmed: !0,
  viewBox: '0 0 22 24',
});
E({
  name: 'Richtext',
  viewBox: '0 0 24 24',
  path: Z.createElement(
    Z.Fragment,
    null,
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M4.5 7a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 3a.5.5 0 000 1h2a.5.5 0 000-1h-2zm8.946 2.237a.5.5 0 00-.802-.065L10 18.212V14h5v3.744l-1.554-2.507zM16 19.5v-6a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.498.498 0 00.5-.5zm-1.398-.5l-1.649-2.66L10.64 19h3.962zM4.5 16a.5.5 0 000 1h2a.5.5 0 000-1h-2zm0 3a.5.5 0 000 1h2a.5.5 0 000-1h-2z',
    })
  ),
});
E({
  name: 'Search',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'SearchTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M9.4 10.5h-.6l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S0 4.4 0 7.1 2.2 12 4.9 12c1.2 0 2.3-.4 3.2-1.2l.1.2v.6l3.8 3.7 1.1-1.1-3.7-3.7zm-4.5 0C3 10.5 1.5 9 1.5 7.1S3 3.8 4.9 3.8s3.4 1.5 3.4 3.4-1.6 3.3-3.4 3.3z',
    }),
    d.createElement('path', { d: 'M0 0h13.1v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 13.1 18',
});
E({
  name: 'Settings',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z',
    })
  ),
});
E({
  name: 'SettingsTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h14.6v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12.9 9.7c0-.2.1-.5.1-.7s0-.5-.1-.7L14.5 7c.1-.1.2-.3.1-.5L13 4c-.1-.2-.3-.2-.5-.2l-1.9.8c-.3-.4-.7-.6-1.2-.8l-.3-2c0-.2-.2-.3-.4-.3h-3c-.2 0-.3.1-.4.3l-.3 2c-.3.2-.7.4-1.1.7L2 3.8c-.2-.1-.4 0-.4.2L.1 6.5c-.1.2-.1.4 0 .5l1.6 1.2c0 .2-.1.5-.1.7s0 .5.1.7L.1 11c-.1.1-.1.3 0 .5L1.6 14c.1.2.3.2.5.2l1.9-.8c.4.3.8.5 1.3.7l.3 2c0 .2.2.3.4.3h3c.2 0 .3-.1.4-.3l.3-2c.5-.2.9-.4 1.3-.7l1.9.8c.2.1.4 0 .5-.2l1.5-2.6c.1-.2.1-.4-.1-.5l-1.9-1.2zm-5.6 1.9c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6S9.9 7.6 9.9 9s-1.2 2.6-2.6 2.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 14.6 18',
});
E({
  name: 'ShoppingCart',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
var wf = E({
    name: 'Sort',
    path: d.createElement(
      d.Fragment,
      null,
      d.createElement('path', {
        d: 'M16.5 14.25h-9a.75.75 0 0 0-.53 1.28l4.5 4.5a.747.747 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-.53-1.28ZM6.764 8.854a.75.75 0 0 0 .736.896h9a.75.75 0 0 0 .53-1.28l-4.5-4.5a.751.751 0 0 0-1.061 0l-4.5 4.5a.75.75 0 0 0-.205.384Z',
      })
    ),
  }),
  Ef = E({
    name: 'SortAscending',
    path: d.createElement(
      d.Fragment,
      null,
      d.createElement('path', {
        fillOpacity: 0.2,
        d: 'M16.5 14.25h-9a.75.75 0 0 0-.53 1.28l4.5 4.5a.747.747 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-.53-1.28Z',
      }),
      d.createElement('path', {
        d: 'M6.764 8.854a.75.75 0 0 0 .736.896h9a.75.75 0 0 0 .53-1.28l-4.5-4.5a.751.751 0 0 0-1.061 0l-4.5 4.5a.75.75 0 0 0-.205.384Z',
      })
    ),
  }),
  Cf = E({
    name: 'SortDescending',
    path: d.createElement(
      d.Fragment,
      null,
      d.createElement('path', {
        d: 'M16.5 14.25h-9a.75.75 0 0 0-.53 1.28l4.5 4.5a.747.747 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-.53-1.28Z',
      }),
      d.createElement('path', {
        fillOpacity: 0.2,
        d: 'M6.764 8.854a.75.75 0 0 0 .736.896h9a.75.75 0 0 0 .53-1.28l-4.5-4.5a.751.751 0 0 0-1.061 0l-4.5 4.5a.75.75 0 0 0-.205.384Z',
      })
    ),
  });
E({
  name: 'ShoppingCartTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M4.5 13.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S6 15.8 6 15s-.7-1.5-1.5-1.5zM0 1.5V3h1.5l2.7 5.7-1 1.8c-.1.2-.2.5-.2.7 0 .8.7 1.5 1.5 1.5h9v-1.5H4.8c-.1 0-.2-.1-.2-.2v-.1l.7-1.2h5.6c.6 0 1.1-.3 1.3-.8L14.9 4c.1 0 .1-.1.1-.2 0-.5-.3-.8-.8-.8h-11l-.7-1.5H0zm12 12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z',
    }),
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'Spreadsheet',
  viewBox: '0 0 24 24',
  path: Z.createElement(
    Z.Fragment,
    null,
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M4 8.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-12zM5 12h3v2H5v-2zm0 3h3v2H5v-2zm0 3h3v2H5v-2zm4 2h6v-2H9v2zm0-3h6v-2H9v2zm0-3h6v-2H9v2zm0-3h6V9H9v2zM8 9H5v2h3V9z',
    })
  ),
});
E({
  name: 'Star',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    }),
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),
});
E({
  name: 'StarTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M7.5 13l4.6 2.8-1.2-5.3L15 6.9l-5.4-.4-2.1-5-2.1 5-5.4.4 4.1 3.5-1.2 5.3L7.5 13z',
    }),
    d.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
  ),
  trimmed: !0,
  viewBox: '0 0 15 18',
});
E({
  name: 'Subscript',
  path: d.createElement(
    k,
    null,
    d.createElement('rect', { fill: 'none', height: '24', width: '24' }),
    d.createElement('path', {
      d: 'M22,18h-2v1h3v1h-4v-2c0-0.55,0.45-1,1-1h2v-1h-3v-1h3c0.55,0,1,0.45,1,1v1C23,17.55,22.55,18,22,18z M5.88,18h2.66 l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,4h-2.68l-3.07,4.99h-0.12L8.85,4H6.19l4.32,6.73L5.88,18z',
    })
  ),
  viewBox: '0 0 13 18',
});
E({
  name: 'SubscriptTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('rect', { fill: 'none', height: '24', width: '24' }),
    d.createElement('path', {
      d: 'M22,18h-2v1h3v1h-4v-2c0-0.55,0.45-1,1-1h2v-1h-3v-1h3c0.55,0,1,0.45,1,1v1C23,17.55,22.55,18,22,18z M5.88,18h2.66 l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,4h-2.68l-3.07,4.99h-0.12L8.85,4H6.19l4.32,6.73L5.88,18z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 13 18',
});
E({
  name: 'Superscript',
  path: d.createElement(
    k,
    null,
    d.createElement('rect', { fill: 'none', height: '24', width: '24', x: '0', y: '0' }),
    d.createElement('path', {
      d: 'M22,7h-2v1h3v1h-4V7c0-0.55,0.45-1,1-1h2V5h-3V4h3c0.55,0,1,0.45,1,1v1C23,6.55,22.55,7,22,7z M5.88,20h2.66l3.4-5.42h0.12 l3.4,5.42h2.66l-4.65-7.27L17.81,6h-2.68l-3.07,4.99h-0.12L8.85,6H6.19l4.32,6.73L5.88,20z',
    })
  ),
});
E({
  name: 'SuperscriptTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('rect', { fill: 'none', height: '24', width: '24', x: '0', y: '0' }),
    d.createElement('path', {
      d: 'M22,7h-2v1h3v1h-4V7c0-0.55,0.45-1,1-1h2V5h-3V4h3c0.55,0,1,0.45,1,1v1C23,6.55,22.55,7,22,7z M5.88,20h2.66l3.4-5.42h0.12 l3.4,5.42h2.66l-4.65-7.27L17.81,6h-2.68l-3.07,4.99h-0.12L8.85,6H6.19l4.32,6.73L5.88,20z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 13 18',
});
E({
  name: 'Tab',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z',
    })
  ),
});
E({
  name: 'Table',
  path: d.createElement(
    k,
    null,
    d.createElement('path', {
      d: 'M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z',
    })
  ),
  viewBox: '0 0 24 24',
});
E({
  name: 'Tags',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z',
    }),
    d.createElement('circle', { cx: 6.5, cy: 6.5, r: 1.5 })
  ),
});
E({
  name: 'Text',
  path: d.createElement(
    k,
    null,
    d.createElement(
      'defs',
      null,
      d.createElement('path', { d: 'M24 24H0V0h24v24z', id: 'Text_svg__a' })
    ),
    d.createElement(
      'clipPath',
      { id: 'Text_svg__b' },
      d.createElement('use', { overflow: 'visible', xlinkHref: '#Text_svg__a' })
    ),
    d.createElement('path', {
      clipPath: 'url(#Text_svg__b)',
      d: 'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z',
    })
  ),
});
E({
  name: 'TextTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement(
      'defs',
      null,
      d.createElement('path', { id: 'TextTrimmed_svg__a', d: 'M0 0h14.2v18H0z' })
    ),
    d.createElement(
      'clipPath',
      { id: 'TextTrimmed_svg__b' },
      d.createElement('use', { xlinkHref: '#TextTrimmed_svg__a', overflow: 'visible' })
    ),
    d.createElement('path', {
      d: 'M0 3v2.2h3.8v9H6v-9h3.8V3H0zm14.2 3.8H7.5V9h2.2v5.2H12V9h2.2V6.8z',
      clipPath: 'url(#TextTrimmed_svg__b)',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 14.2 18',
});
E({
  name: 'ThumbDown',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z',
    })
  ),
});
E({
  name: 'ThumbDownTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M10.5 2.2H3.8c-.6 0-1.2.4-1.4.9L.1 8.5c-.1.1-.1.3-.1.5v1.5c0 .8.7 1.5 1.5 1.5h4.7l-.7 3.4v.2c0 .3.1.6.3.8l.8.8 4.9-4.9c.3-.3.4-.6.4-1.1V3.8c.1-.9-.6-1.6-1.4-1.6zm3 0v9h3v-9h-3z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 16.5 18',
});
E({
  name: 'ThumbUp',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z',
    })
  ),
});
E({
  name: 'ThumbUpTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M0 15.8h3v-9H0v9zm16.5-8.3c0-.8-.7-1.5-1.5-1.5h-4.7l.7-3.4v-.2c0-.3-.1-.6-.3-.8L9.9.8l-5 4.9c-.2.3-.4.6-.4 1.1v7.5c0 .8.7 1.5 1.5 1.5h6.8c.6 0 1.2-.4 1.4-.9l2.3-5.3c.1-.2.1-.4.1-.5V7.5h-.1z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 16.5 18',
});
E({
  name: 'Toggle',
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', {
      d: 'M15.31 4.19 16.5 3 21 7.5 16.5 12l-1.19-1.19 2.458-2.466H4.125V6.656h13.643L15.31 4.19ZM8.69 19.81 7.5 21 3 16.5 7.5 12l1.19 1.19-2.458 2.466h13.643v1.688H6.232L8.69 19.81Z',
    })
  ),
});
E({
  name: 'TriangleOutline',
  path: d.createElement(
    d.Fragment,
    null,
    d.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'm12 4 9 15.546H3L12 4ZM5.838 17.91 12 7.265l6.162 10.643H5.838Z',
    })
  ),
});
E({
  name: 'Users',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    })
  ),
});
E({
  name: 'UsersTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M11.2 8.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S9 4.8 9 6s1 2.2 2.2 2.2zm-6 0c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S3 4.8 3 6s1 2.2 2.2 2.2zm0 1.6c-1.7 0-5.2.8-5.2 2.6v1.9h10.5v-1.9c0-1.8-3.5-2.6-5.3-2.6zm6 0h-.7c.9.6 1.5 1.5 1.5 2.6v1.9h4.5v-1.9c0-1.8-3.5-2.6-5.3-2.6z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 16.5 18',
});
E({
  name: 'Video',
  viewBox: '0 0 24 24',
  path: Z.createElement(
    Z.Fragment,
    null,
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
    }),
    Z.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M6.258 8.063a.5.5 0 01.507.013l8 5a.5.5 0 010 .848l-8 5A.5.5 0 016 18.5v-10a.5.5 0 01.258-.437zM7 9.403v8.195l6.557-4.098L7 9.402z',
    })
  ),
});
var _f = E({
  name: 'Warning',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    d.createElement('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' })
  ),
});
E({
  name: 'WarningTrimmed',
  path: d.createElement(
    k,
    null,
    d.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
    d.createElement('path', {
      d: 'M0 15.8h16.5L8.2 1.5 0 15.8zm9-2.3H7.5V12H9v1.5zm0-3H7.5v-3H9v3z',
    })
  ),
  trimmed: !0,
  viewBox: '0 0 16.5 18',
});
E({
  name: 'Workflows',
  path: d.createElement('path', {
    d: 'M18.6 4l-4.4 4.533h3.3v7.934c0 1.246-.99 2.266-2.2 2.266s-2.2-1.02-2.2-2.266V8.533C13.1 6.03 11.131 4 8.7 4S4.3 6.029 4.3 8.533v7.934H1L5.4 21l4.4-4.533H6.5V8.533c0-1.246.99-2.266 2.2-2.266s2.2 1.02 2.2 2.266v7.934C10.9 18.97 12.869 21 15.3 21s4.4-2.029 4.4-4.533V8.533H23z',
  }),
});
var Mf = Object.defineProperty,
  Sf = Object.defineProperties,
  zf = Object.getOwnPropertyDescriptors,
  Er = Object.getOwnPropertySymbols,
  Yc = Object.prototype.hasOwnProperty,
  Uc = Object.prototype.propertyIsEnumerable,
  vo = (t, e, n) =>
    e in t ? Mf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  kf = (t, e) => {
    for (var n in e || (e = {})) Yc.call(e, n) && vo(t, n, e[n]);
    if (Er) for (var n of Er(e)) Uc.call(e, n) && vo(t, n, e[n]);
    return t;
  },
  Of = (t, e) => Sf(t, zf(e)),
  Lf = (t, e) => {
    var n = {};
    for (var i in t) Yc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Er) for (var i of Er(t)) e.indexOf(i) < 0 && Uc.call(t, i) && (n[i] = t[i]);
    return n;
  },
  If = { large: '36px', medium: '20px', small: '14px' },
  Rf = () => {
    let t = {
      scale1: Ln`
    0% {
      transform: scale(1, 1);
    }
    6.666667% {
      transform: scale(1.5, 0.5);
    }
    13.333333% {
      transform: scale(1, 1);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    33.333333% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    60% {
      transform: scale(1.5, 0.5);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
      scale2: Ln`
    0% {
      transform: scale(1, 1);
    }
    13.333333% {
      transform: scale(1, 1);
    }
    20% {
      transform: scale(1.5, 0.5);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    46.666667% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    73.333333% {
      transform: scale(1.5, 0.5);
    }
    80% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
      scale3: Ln`
    0% {
      transform: scale(1, 1);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    33.333333% {
      transform: scale(1.5, 0.5);
    }
    40% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    60% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    80% {
      transform: scale(1, 1);
    }
    86.666667% {
      transform: scale(1.5, 0.5);
    }
    93.333333% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
      translate1: Ln`
    0% {
      transform: translate(10px, 33.528168px);
    }
    6.666667% {
      transform: translate(10px, 41.764084px);
    }
    13.333333% {
      transform: translate(10px, 33.528168px);
    }
    26.666667% {
      transform: translate(10px, -2.651608px);
    }
    33.333333% {
      transform: translate(10px, -4.471832px);
    }
    40% {
      transform: translate(10px, -2.651608px);
    }
    53.333333% {
      transform: translate(10px, 33.528168px);
    }
    60% {
      transform: translate(10px, 41.764084px);
    }
    66.666667% {
      transform: translate(10px, 33.528168px);
    }
    100% {
      transform: translate(10px, 33.528168px);
    }
  `,
      translate2: Ln`
    0% {
      transform: translate(30px, 33.528168px);
    }
    13.333333% {
      transform: translate(30px, 33.528168px);
    }
    20% {
      transform: translate(30px, 41.764084px);
    }
    26.666667% {
      transform: translate(30px, 33.528168px);
    }
    40% {
      transform: translate(30px, -2.651608px);
    }
    46.666667% {
      transform: translate(30px, -4.471832px);
    }
    53.333333% {
      transform: translate(30px, -2.651608px);
    }
    66.666667% {
      transform: translate(30px, 33.528168px);
    }
    73.333333% {
      transform: translate(30px, 41.764084px);
    }
    80% {
      transform: translate(30px, 33.528168px);
    }
    100% {
      transform: translate(30px, 33.528168px);
    }
  `,
      translate3: Ln`
    0% {
      transform: translate(50px, 33.528168px);
    }
    26.666667% {
      transform: translate(50px, 33.528168px);
    }
    33.333333% {
      transform: translate(50px, 41.764084px);
    }
    40% {
      transform: translate(50px, 33.528168px);
    }
    53.333333% {
      transform: translate(50px, -2.651608px);
    }
    60% {
      transform: translate(50px, -4.471832px);
    }
    66.666667% {
      transform: translate(50px, -2.651608px);
    }
    80% {
      transform: translate(50px, 33.528168px);
    }
    86.666667% {
      transform: translate(50px, 41.764084px);
    }
    93.333333% {
      transform: translate(50px, 33.528168px);
    }
    100% {
      transform: translate(50px, 33.528168px);
    }
  `,
    };
    return {
      root: (e) =>
        I({
          height: e.customSize ? `${e.customSize}px` : void 0,
          verticalAlign: 'middle',
          width: e.customSize ? `${e.customSize}px` : If[e.size],
        }),
      circle1Scale: I({ animation: `${t.scale1} 1s linear infinite normal forwards;` }),
      circle2Scale: I({ animation: `${t.scale2} 1s linear infinite normal forwards;` }),
      circle3Scale: I({ animation: `${t.scale3} 1s linear infinite normal forwards;` }),
      circle1Translate: I({ animation: `${t.translate1} 1s linear infinite normal forwards;` }),
      circle2Translate: I({ animation: `${t.translate2} 1s linear infinite normal forwards;` }),
      circle3Translate: I({ animation: `${t.translate3} 1s linear infinite normal forwards;` }),
    };
  },
  Df = 'div',
  Af = { default: f.gray700, primary: f.colorPrimary, white: f.colorWhite },
  qc = $e((t, e) => {
    var n = t,
      {
        className: i,
        customSize: r,
        size: a = 'medium',
        variant: s = 'default',
        testId: o = 'cf-ui-spinner',
      } = n,
      l = Lf(n, ['className', 'customSize', 'size', 'variant', 'testId']);
    let c = Rf();
    return d.createElement(
      Ve,
      Of(kf({ as: Df, display: 'inline-block' }, l), {
        className: Q(c.root({ size: a, customSize: r }), i),
        ref: e,
        testId: o,
      }),
      d.createElement(
        'svg',
        {
          className: I({ display: 'block', fill: Af[s] }),
          viewBox: '0 0 60 51',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        d.createElement('title', null, 'Loading…'),
        d.createElement(
          'g',
          { className: c.circle1Translate, transform: 'translate(10,33.528168)' },
          d.createElement(
            'g',
            { className: c.circle1Scale },
            d.createElement('circle', { r: '6', transform: 'translate(0,10.471832)' })
          )
        ),
        d.createElement(
          'g',
          { className: c.circle2Translate, transform: 'translate(30,33.528168)' },
          d.createElement(
            'g',
            { className: c.circle2Scale },
            d.createElement('circle', { r: '6', transform: 'translate(0,10.471832)' })
          )
        ),
        d.createElement(
          'g',
          { className: c.circle3Translate, transform: 'translate(50,33.528168)' },
          d.createElement(
            'g',
            { className: c.circle3Scale },
            d.createElement('circle', { r: '6', transform: 'translate(0,10.471832)' })
          )
        )
      )
    );
  });
qc.displayName = 'Spinner';
var Tf = Object.defineProperty,
  Pf = Object.defineProperties,
  Hf = Object.getOwnPropertyDescriptors,
  Cr = Object.getOwnPropertySymbols,
  Gc = Object.prototype.hasOwnProperty,
  Kc = Object.prototype.propertyIsEnumerable,
  bo = (t, e, n) =>
    e in t ? Tf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  vt = (t, e) => {
    for (var n in e || (e = {})) Gc.call(e, n) && bo(t, n, e[n]);
    if (Cr) for (var n of Cr(e)) Kc.call(e, n) && bo(t, n, e[n]);
    return t;
  },
  Da = (t, e) => Pf(t, Hf(e)),
  ds = (t, e) => {
    var n = {};
    for (var i in t) Gc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Cr) for (var i of Cr(t)) e.indexOf(i) < 0 && Kc.call(t, i) && (n[i] = t[i]);
    return n;
  },
  Vf = ({ withDivider: t }) => {
    let e = Bf(t);
    return vt(
      {
        borderRadius: '0 !important',
        marginRight: '-1px',
        zIndex: f.zIndexDefault,
        '&:first-child': {
          borderBottomLeftRadius: `${f.borderRadiusMedium} !important`,
          borderTopLeftRadius: `${f.borderRadiusMedium} !important`,
        },
        '&:last-child': {
          borderBottomRightRadius: `${f.borderRadiusMedium} !important`,
          borderTopRightRadius: `${f.borderRadiusMedium} !important`,
          marginRight: 0,
        },
        '&:focus': { zIndex: f.zIndexDefault + 1 },
      },
      e
    );
  },
  Bf = (t) =>
    t
      ? {
          position: 'relative',
          '&:before': {
            content: '""',
            width: '1px',
            opacity: '20%',
            backgroundColor: f.colorWhite,
            height: '60%',
            left: '0',
            position: 'absolute',
          },
          '&:first-child, &:focus': { '&:before': { display: 'none' } },
          '&:hover, &:hover + &': { '&:before': { display: 'none' } },
        }
      : {},
  Nf = ({ withDivider: t }) => ({
    buttonGroup: I({ display: 'inline-flex', position: 'relative' }),
    groupContent: I(Vf({ withDivider: t })),
  });
function Zc(t, e) {
  let {
      variant: n = 'merged',
      withDivider: i,
      testId: r = 'cf-ui-button-group',
      children: a,
      className: s,
      spacing: o,
    } = t,
    l = Nf({ withDivider: i });
  return n === 'spaced'
    ? d.createElement(
        ls,
        { className: s, isInline: !0, flexDirection: 'row', testId: r, ref: e, spacing: o },
        a
      )
    : d.createElement(
        Ve,
        { testId: r, ref: e, className: Q(l.buttonGroup, s) },
        d.Children.map(a, (c, h) =>
          c ? d.cloneElement(c, { key: h, className: Q(l.groupContent, c.props.className) }) : null
        )
      );
}
Zc.displayName = 'ButtonGroup';
d.forwardRef(Zc);
var Dn = (t) => {
    switch (t) {
      case 'primary':
        return { backgroundColor: f.blue700, borderColor: f.blue700 };
      case 'secondary':
        return { backgroundColor: f.gray200 };
      case 'positive':
        return { backgroundColor: f.green700, borderColor: f.green700 };
      case 'negative':
        return { backgroundColor: f.red800, borderColor: f.red800 };
      case 'transparent':
        return { backgroundColor: f.gray100, borderColor: f.gray100 };
      default:
        return {};
    }
  },
  Ff = (t) => {
    switch (t) {
      case 'primary':
        return {
          color: f.colorWhite,
          backgroundColor: f.blue500,
          borderColor: f.blue500,
          '&:hover': { backgroundColor: f.blue600, borderColor: f.blue600, color: f.colorWhite },
          '&:active': Dn(t),
          '&:focus': { borderColor: f.blue600, boxShadow: f.glowPrimary },
          '&:focus:not(:focus-visible)': { borderColor: f.blue500, boxShadow: 'unset' },
          '&:focus-visible': { borderColor: f.blue600, boxShadow: f.glowPrimary },
        };
      case 'secondary':
        return {
          color: f.gray900,
          backgroundColor: f.colorWhite,
          borderColor: f.gray300,
          '&:hover': { backgroundColor: f.gray100, color: f.gray900 },
          '&:active': Dn(t),
          '&:focus': { boxShadow: f.glowPrimary },
          '&:focus:not(:focus-visible)': { boxShadow: 'unset' },
          '&:focus-visible': { boxShadow: f.glowPrimary },
        };
      case 'positive':
        return {
          color: f.colorWhite,
          backgroundColor: f.colorPositive,
          borderColor: f.colorPositive,
          '&:hover': { backgroundColor: f.green600, borderColor: f.green600, color: f.colorWhite },
          '&:active': Dn(t),
          '&:focus': { borderColor: f.green600, boxShadow: f.glowPositive },
          '&:focus:not(:focus-visible)': { borderColor: f.colorPositive, boxShadow: 'unset' },
          '&:focus-visible': { borderColor: f.green600, boxShadow: f.glowPositive },
        };
      case 'negative':
        return {
          color: f.colorWhite,
          backgroundColor: f.red600,
          borderColor: f.red600,
          '&:hover': { backgroundColor: f.red700, borderColor: f.red700, color: f.colorWhite },
          '&:active': Dn(t),
          '&:focus': { borderColor: f.red700, boxShadow: f.glowNegative },
          '&:focus:not(:focus-visible)': { borderColor: f.red600, boxShadow: 'unset' },
          '&:focus-visible': { borderColor: f.red700, boxShadow: f.glowNegative },
        };
      case 'transparent':
        return {
          color: f.gray800,
          background: 'none',
          borderColor: 'transparent',
          boxShadow: 'none',
          '&:hover': { backgroundColor: f.gray100, color: f.gray900 },
          '&:active': Dn(t),
          '&:focus': { backgroundColor: 'transparent', boxShadow: f.glowPrimary },
          '&:focus:not(:focus-visible)': { boxShadow: 'unset' },
          '&:focus-visible': { boxShadow: f.glowPrimary },
        };
      default:
        return {};
    }
  },
  $f = (t) => {
    switch (t) {
      case 'small':
        return {
          fontSize: f.fontSizeM,
          lineHeight: f.lineHeightCondensed,
          padding: `${f.spacing2Xs} ${f.spacingS}`,
          minHeight: '32px',
        };
      case 'medium':
        return {
          fontSize: f.fontSizeM,
          lineHeight: f.lineHeightCondensed,
          padding: `${f.spacingXs} ${f.spacingM}`,
          minHeight: '40px',
        };
      case 'large':
        return {
          fontSize: f.fontSizeXl,
          lineHeight: f.lineHeightXl,
          padding: `${f.spacingXs} ${f.spacingM}`,
          minHeight: '48px',
        };
      default:
        return {};
    }
  },
  jf = ({ hasChildren: t, variant: e }) => {
    let n = {
      '&:first-child': { marginRight: f.spacing2Xs },
      '&:last-child': { marginLeft: f.spacing2Xs },
    };
    return I([t ? n : {}, e !== 'transparent' && t && { '& svg': { fill: 'currentColor' } }]);
  },
  Wf = () => ({
    button: ({ variant: t, size: e, isActive: n, isDisabled: i, isFullWidth: r }) =>
      I(
        vt(
          vt(
            vt(
              {
                boxSizing: 'border-box',
                border: '1px solid',
                boxShadow: '0px 1px 0px rgb(25, 37, 50, 0.08)',
                borderRadius: f.borderRadiusMedium,
                cursor: i ? 'not-allowed' : 'pointer',
                fontFamily: f.fontStackPrimary,
                opacity: i ? 0.5 : 1,
                display: r ? 'flex' : 'inline-flex',
                minWidth: r ? '100%' : 'auto',
                maxWidth: r ? '100%' : '240px',
                overflow: 'hidden',
                flexShrink: 0,
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: f.fontWeightMedium,
                outline: 'none',
                textDecoration: 'none',
                margin: 0,
                transition: `background ${f.transitionDurationShort} ${f.transitionEasingDefault},
        opacity ${f.transitionDurationDefault} ${f.transitionEasingDefault},
        border-color ${f.transitionDurationDefault} ${f.transitionEasingDefault}`,
              },
              Ff(t)
            ),
            $f(e)
          ),
          n ? { transition: 'none', '&, &:hover': Dn(t) } : {}
        )
      ),
    buttonIcon: jf,
    buttonContent: I({ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }),
  }),
  Xf = 'button';
function Qc(t, e) {
  let n = Wf(),
    i = t,
    {
      as: r = Xf,
      children: a,
      className: s,
      testId: o = 'cf-ui-button',
      variant: l = 'secondary',
      size: c = 'medium',
      startIcon: h,
      endIcon: u,
      isActive: p,
      isDisabled: m,
      isLoading: g,
      isFullWidth: b,
      style: v,
    } = i,
    y = ds(i, [
      'as',
      'children',
      'className',
      'testId',
      'variant',
      'size',
      'startIcon',
      'endIcon',
      'isActive',
      'isDisabled',
      'isLoading',
      'isFullWidth',
      'style',
    ]),
    w = Q(n.button({ variant: l, size: c, isActive: p, isDisabled: m, isFullWidth: b }), s),
    S = (O) => {
      var C;
      let L = {
        primary: 'white',
        secondary: 'secondary',
        positive: 'white',
        negative: 'white',
        transparent: 'secondary',
      };
      return (
        !g &&
        d.createElement(
          Se,
          { as: 'span', className: n.buttonIcon({ hasChildren: !!a, variant: l }) },
          d.cloneElement(O, {
            size: (C = O.props.size) != null ? C : `${c === 'large' ? 'medium' : 'small'}`,
            variant: (l === 'transparent' && O.props.variant) || L[l],
          })
        )
      );
    },
    M = d.createElement(
      d.Fragment,
      null,
      h && S(h),
      a && d.createElement(Ve, { as: 'span', display: 'block', className: n.buttonContent }, a),
      u && S(u),
      g &&
        d.createElement(
          Ve,
          { as: 'span', marginLeft: a || !g ? 'spacingXs' : 'none' },
          d.createElement(qc, { customSize: 18, variant: l === 'secondary' ? 'default' : 'white' })
        )
    ),
    _ = { ['data-test-id']: o, className: w, ref: e, style: v };
  return r === 'a'
    ? d.createElement('a', Da(vt(vt({}, y), _), { disabled: m }), M)
    : d.createElement('button', Da(vt(vt({ type: 'button' }, y), _), { disabled: m }), M);
}
Qc.displayName = 'Button';
var Ei = d.forwardRef(Qc),
  Yf = ({ isActive: t, isDisabled: e }) => {
    let n = {
        background: f.blue100,
        borderColor: f.blue600,
        '&': { zIndex: f.zIndexDefault + 1 },
        '&:hover': { background: f.blue100 },
      },
      i = {
        background: f.colorWhite,
        '&:hover': {
          background: f.colorWhite,
          borderColor: e ? f.gray300 : f.blue600,
          zIndex: f.zIndexDefault + 1,
        },
        '&:focus': { boxShadow: f.glowPrimary, zIndex: f.zIndexDefault + 2 },
        '&:active, &:active:hover': e
          ? { background: f.colorWhite, borderColor: f.gray300, zIndex: f.zIndexDefault + 1 }
          : { background: f.blue100, borderColor: f.blue600, zIndex: f.zIndexDefault + 1 },
      };
    return t ? vt(vt({}, i), n) : i;
  },
  Uf = ({ isActive: t, isDisabled: e }) => ({
    toggleButton: I(Yf({ isActive: t, isDisabled: e })),
  });
function Jc(t, e) {
  let n = t,
    {
      testId: i = 'cf-ui-toggle-button',
      children: r,
      className: a,
      isDisabled: s = !1,
      isActive: o = !1,
      icon: l,
      onToggle: c,
      size: h = 'medium',
    } = n,
    u = ds(n, [
      'testId',
      'children',
      'className',
      'isDisabled',
      'isActive',
      'icon',
      'onToggle',
      'size',
    ]),
    p = Uf({ isActive: o, isDisabled: s });
  return d.createElement(
    Ei,
    vt(
      {
        testId: i,
        type: 'button',
        ref: e,
        size: h,
        onClick: () => {
          !s && c && c();
        },
        className: Q(p.toggleButton, a),
        startIcon: l,
        isDisabled: s,
        'aria-pressed': o,
        'data-state': o ? 'on' : 'off',
      },
      u
    ),
    r
  );
}
Jc.displayName = 'ToggleButton';
d.forwardRef(Jc);
function ed(t, e) {
  let n = t,
    { testId: i = 'cf-ui-icon-button', variant: r = 'transparent', icon: a } = n,
    s = ds(n, ['testId', 'variant', 'icon']);
  return d.createElement(Ei, Da(vt({ testId: i, ref: e, variant: r }, s), { startIcon: a }));
}
ed.displayName = 'IconButton';
var qf = d.forwardRef(ed),
  Gf = Object.defineProperty,
  Kf = Object.defineProperties,
  Zf = Object.getOwnPropertyDescriptors,
  _r = Object.getOwnPropertySymbols,
  td = Object.prototype.hasOwnProperty,
  nd = Object.prototype.propertyIsEnumerable,
  yo = (t, e, n) =>
    e in t ? Gf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  se = (t, e) => {
    for (var n in e || (e = {})) td.call(e, n) && yo(t, n, e[n]);
    if (_r) for (var n of _r(e)) nd.call(e, n) && yo(t, n, e[n]);
    return t;
  },
  Te = (t, e) => Kf(t, Zf(e)),
  Ce = (t, e) => {
    var n = {};
    for (var i in t) td.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && _r) for (var i of _r(t)) e.indexOf(i) < 0 && nd.call(t, i) && (n[i] = t[i]);
    return n;
  },
  xo = () => {},
  id = Xn(void 0),
  Qf = () => Zr(id),
  Lt = (t) => {
    var e, n, i, r, a;
    let s = Qf();
    return s
      ? {
          isDisabled: (e = t.isDisabled) != null ? e : s.isDisabled,
          isInvalid: (n = t.isInvalid) != null ? n : s.isInvalid,
          isReadOnly: (i = t.isReadOnly) != null ? i : s.isReadOnly,
          isRequired: (r = t.isRequired) != null ? r : s.isRequired,
          id: (a = t.id) != null ? a : s.id,
          maxLength: s.maxLength,
          inputValue: s.inputValue,
          setMaxLength: s.setMaxLength || xo,
          setInputValue: s.setInputValue || xo,
        }
      : t;
  },
  hs = d.forwardRef((t, e) => {
    var n = t,
      { testId: i = 'cf-ui-help-text' } = n,
      r = Ce(n, ['testId']);
    let { id: a } = Lt({});
    return d.createElement(
      Ge,
      Te(
        se(
          {
            as: 'p',
            fontColor: 'gray500',
            fontSize: 'fontSizeM',
            testId: i,
            id: `${a}-helptext`,
            marginTop: 'spacingXs',
          },
          r
        ),
        { ref: e }
      )
    );
  });
hs.displayName = 'HelpText';
var rd = $e((t, e) => {
  var n = t,
    { children: i, testId: r = 'cf-ui-validation-message' } = n,
    a = Ce(n, ['children', 'testId']);
  let { id: s } = Lt({});
  return d.createElement(
    Se,
    Te(se({ marginTop: 'spacingXs' }, a), {
      ref: e,
      testId: r,
      alignItems: 'center',
      id: s ? `${s}-validation` : void 0,
      'aria-live': 'assertive',
    }),
    d.createElement(
      Se,
      { marginRight: 'spacing2Xs' },
      d.createElement(bf, { size: 'small', variant: 'negative', 'aria-hidden': 'true' })
    ),
    d.createElement(Ge, { as: 'p', fontColor: 'colorNegative' }, i)
  );
});
rd.displayName = 'ValidationMessage';
var us = ({ isDisabled: t }) => ({
    alignItems: 'center',
    background: t ? f.gray300 : f.colorWhite,
    border: `2px solid ${f.gray300}`,
    boxSizing: 'border-box',
    display: 'inline-flex',
    height: f.spacingM,
    justifyContent: 'center',
    marginRight: f.spacingXs,
    width: f.spacingM,
  }),
  Jf = ({ isDisabled: t }) => {
    let e = Te(se({}, us({ isDisabled: t })), {
      backgroundColor: t ? f.gray300 : f.colorWhite,
      borderRadius: f.borderRadiusSmall,
      '& svg': { fill: t ? f.gray300 : f.colorWhite },
      'input:indeterminate + &, input:checked + &': {
        backgroundColor: t ? f.gray300 : f.blue600,
        borderColor: t ? f.gray300 : f.blue600,
        '& svg': { fill: t ? f.gray600 : f.colorWhite },
      },
    });
    return I(e);
  },
  e0 = ({ isDisabled: t }) => {
    let e = {
        content: '""',
        borderRadius: '50%',
        backgroundColor: t ? f.gray300 : f.colorWhite,
        width: f.borderRadiusMedium,
        height: f.borderRadiusMedium,
      },
      n = Te(se({}, us({ isDisabled: t })), {
        backgroundColor: t ? f.gray300 : f.colorWhite,
        borderRadius: '50%',
        '&:before': se({}, e),
        'input:checked + &': {
          backgroundColor: t ? f.gray300 : f.blue600,
          borderColor: t ? f.gray300 : f.blue600,
          '&:before': { backgroundColor: t ? f.gray600 : f.colorWhite },
        },
      });
    return I(n);
  },
  t0 = ({ isDisabled: t, size: e }) => {
    let n =
        e === 'small'
          ? {
              height: f.spacingM,
              width: f.spacingXl,
              '&:before': { height: f.spacingS, width: f.spacingS },
              'input:checked + &:before': { transform: `translateX(${f.spacingM})` },
            }
          : {
              height: '20px',
              width: '40px',
              '&:before': { height: f.spacingM, width: f.spacingM },
              'input:checked + &:before': { transform: 'translateX(20px)' },
            },
      i = Te(se({}, us({ isDisabled: t })), {
        background: f.gray600,
        borderColor: f.gray600,
        borderRadius: f.borderRadiusSmall,
        justifyContent: 'space-around',
        position: 'relative',
        flexShrink: 0,
        '&:before': {
          background: f.colorWhite,
          borderRadius: `calc(${f.borderRadiusSmall}/2)`,
          content: '""',
          left: 0,
          position: 'absolute',
          transition: `transform ${f.transitionEasingDefault} ${f.transitionDurationDefault}`,
        },
        'input:checked + &': { background: f.blue600, borderColor: f.blue600 },
      }),
      r = {
        '&, input:checked + &': { background: f.gray200, borderColor: f.gray200 },
        '&:before': { background: f.gray400 },
        '& svg': { fill: f.gray400 },
      };
    return I([i, n, t && r]);
  },
  n0 = (t) => {
    let { isDisabled: e, size: n } = t;
    return {
      radio: e0({ isDisabled: e }),
      checkbox: Jf({ isDisabled: e }),
      switch: t0({ isDisabled: e, size: n }),
    };
  },
  i0 = n0,
  r0 = (t) => {
    let { type: e, isIndeterminate: n, isDisabled: i, size: r = 'medium' } = t,
      a = i0({ isDisabled: i, size: r });
    return e === 'switch'
      ? d.createElement(
          'span',
          { className: a.switch },
          d.createElement(po, { size: 'tiny', variant: 'white' }),
          d.createElement(Xc, { size: 'tiny', variant: 'white' })
        )
      : d.createElement(
          'span',
          { className: a[e] },
          e === 'checkbox' &&
            (n
              ? d.createElement(yf, { size: 'tiny', variant: 'white' })
              : d.createElement(po, { size: 'tiny', variant: 'white' }))
        );
  },
  ad = (t) =>
    t === 'small' ? { height: f.spacingM, width: f.spacingXl } : { height: '20px', width: '40px' },
  a0 = ({ size: t, type: e }) => {
    let n = f.spacingM;
    return (
      e === 'switch' && (n = ad(t).width),
      { marginLeft: `calc(${n} + ${f.spacingXs})`, marginTop: 0 }
    );
  },
  s0 = ({ isDisabled: t, type: e, size: n }) => ({
    wrapper: I({ alignItems: 'center', display: 'inline-flex', position: 'relative', margin: '0' }),
    input: I([
      {
        cursor: t ? 'not-allowed' : 'pointer',
        height: f.spacingM,
        margin: 0,
        opacity: 0,
        position: 'absolute',
        width: f.spacingM,
        zIndex: f.zIndexDefault,
        '&:focus': { outline: 'none', '& + span': { boxShadow: f.glowPrimary } },
        '&:focus:not(:focus-visible) + span': { boxShadow: 'unset' },
        '&:focus-visible + span': { boxShadow: f.glowPrimary },
      },
      e === 'switch' && ad(n),
    ]),
    helpText: I(a0({ size: n, type: e })),
  }),
  o0 = s0;
function sd(t, e) {
  let n = t,
    {
      isChecked: i = void 0,
      onChange: r,
      onFocus: a,
      onBlur: s,
      onKeyDown: o,
      type: l = 'checkbox',
      value: c,
      isDisabled: h,
      isIndeterminate: u,
      isInvalid: p,
      isRequired: m = !1,
      id: g,
      willBlurOnEsc: b = !0,
      testId: v = 'cf-ui-base-checkbox',
      className: y = '',
      defaultChecked: w = void 0,
      name: S,
      inputProps: M = {},
      children: _,
      'aria-label': O,
      size: C = 'medium',
      helpText: L,
    } = n,
    T = Ce(n, [
      'isChecked',
      'onChange',
      'onFocus',
      'onBlur',
      'onKeyDown',
      'type',
      'value',
      'isDisabled',
      'isIndeterminate',
      'isInvalid',
      'isRequired',
      'id',
      'willBlurOnEsc',
      'testId',
      'className',
      'defaultChecked',
      'name',
      'inputProps',
      'children',
      'aria-label',
      'size',
      'helpText',
    ]),
    R = rt(null),
    P = e || R,
    { id: N } = Lt({});
  Fe(() => {
    P.current && (P.current.indeterminate = u);
  }, [u, P]);
  let j = o0({ isDisabled: h, type: l, size: C }),
    q = de(
      (fe) => {
        fe.persist(), a && a(fe);
      },
      [a]
    ),
    F = de(
      (fe) => {
        fe.persist(), s && s(fe);
      },
      [s]
    ),
    U = de(
      (fe) => {
        var Re;
        fe.persist(),
          b && fe.key === 'Escape' && ((Re = P == null ? void 0 : P.current) == null || Re.blur()),
          o && o(fe);
      },
      [b, o, P]
    ),
    X = typeof i !== void 0 ? i : w,
    ue = g ? `${g}-helptext` : void 0,
    _e = p ? `${N}-validation` : L ? ue : void 0;
  return d.createElement(
    Se,
    { alignItems: 'flex-start', flexDirection: 'column', className: y },
    d.createElement(
      Ge,
      se(
        {
          as: 'label',
          fontColor: 'gray900',
          fontWeight: 'fontWeightMedium',
          className: j.wrapper,
          htmlFor: g,
          testId: v,
        },
        T
      ),
      d.createElement(
        'input',
        Te(se({}, M), {
          'aria-label': O,
          checked: i,
          defaultChecked: w,
          className: j.input,
          type: l === 'switch' ? 'checkbox' : l,
          onChange: r,
          onFocus: q,
          onBlur: F,
          onKeyDown: U,
          value: c,
          disabled: h,
          role: l,
          'aria-checked': u ? 'mixed' : X,
          ref: P,
          required: m,
          'aria-required': m ? 'true' : void 0,
          'aria-invalid': p ? 'true' : void 0,
          'aria-describedby': _e,
          id: g,
          name: S,
        })
      ),
      d.createElement(r0, { type: l, isDisabled: h, isIndeterminate: u, size: C }),
      _
    ),
    L && d.createElement(hs, { id: ue, className: j.helpText }, L)
  );
}
sd.displayName = 'BaseCheckbox';
var fs = d.forwardRef(sd),
  od = Xn(void 0),
  l0 = () => Zr(od),
  ld = (t) => {
    var e, n, i;
    let r = l0();
    if (!r) return t;
    let a, s;
    return (
      r.type === 'checkbox' &&
        ((a = r.value === void 0 || (e = r.value) == null ? void 0 : e.includes(t.value)),
        (s = a !== void 0 || (n = r.defaultValue) == null ? void 0 : n.includes(t.value))),
      r.type === 'radio' &&
        ((a = r.value === void 0 ? void 0 : r.value === t.value),
        (s = a !== void 0 ? void 0 : r.defaultValue === t.value)),
      {
        defaultChecked: s,
        isChecked: a,
        onBlur: (o) => {
          t.onBlur && t.onBlur(o), r.onBlur && r.onBlur(o);
        },
        onChange: (o) => {
          t.onChange && t.onChange(o), r.onChange && r.onChange(o);
        },
        name: (i = r.name) != null ? i : t.name,
        value: t.value,
      }
    );
  },
  c0 = (t, e) => {
    let n = t,
      {
        testId: i = 'cf-ui-checkbox',
        id: r,
        isDisabled: a,
        isRequired: s,
        isInvalid: o,
        children: l,
        onBlur: c,
        onChange: h,
        defaultChecked: u,
        isChecked: p,
        value: m,
        name: g,
      } = n,
      b = Ce(n, [
        'testId',
        'id',
        'isDisabled',
        'isRequired',
        'isInvalid',
        'children',
        'onBlur',
        'onChange',
        'defaultChecked',
        'isChecked',
        'value',
        'name',
      ]),
      v = Wt(r, 'checkbox'),
      y = ld({ onBlur: c, onChange: h, value: m, defaultChecked: u, isChecked: p, name: g }),
      w = Lt({ id: v, isDisabled: a, isInvalid: o, isRequired: s }),
      S = Ce(w, ['inputValue', 'setInputValue', 'maxLength', 'setMaxLength', 'isReadOnly']);
    return d.createElement(
      fs,
      Te(se(se(se({}, S), y), b), { type: 'checkbox', testId: i, ref: e }),
      l
    );
  },
  d0 = d.forwardRef(c0),
  h0 = (t, e) => {
    let n = t,
      { children: i, className: r, testId: a = 'cf-ui-base-checkbox-group' } = n,
      s = Ce(n, ['children', 'className', 'testId']);
    return d.createElement(
      od.Provider,
      { value: s },
      d.createElement(
        ls,
        {
          ref: e,
          testId: a,
          className: r,
          flexDirection: 'column',
          alignItems: 'flex-start',
          spacing: 'spacingXs',
        },
        i
      )
    );
  },
  cd = d.forwardRef(h0),
  u0 = (t, e) => {
    let n = t,
      { children: i, testId: r = 'cf-ui-checkbox-group' } = n,
      a = Ce(n, ['children', 'testId']);
    return d.createElement(cd, se({ ref: e, testId: r, type: 'checkbox' }, a), i);
  },
  f0 = d.forwardRef(u0),
  p0 = d0;
p0.Group = f0;
var m0 = 'div';
function dd(t, e) {
  var n = t,
    {
      as: i,
      isInvalid: r,
      isRequired: a,
      isDisabled: s,
      isReadOnly: o,
      children: l,
      marginBottom: c = 'spacingL',
      id: h,
      testId: u = 'cf-ui-form-control',
    } = n,
    p = Ce(n, [
      'as',
      'isInvalid',
      'isRequired',
      'isDisabled',
      'isReadOnly',
      'children',
      'marginBottom',
      'id',
      'testId',
    ]);
  let m = Wt(h, 'field-'),
    [g, b] = Xe(''),
    [v, y] = Xe(0),
    w = i === 'fieldset' ? void 0 : 'group',
    S = i || m0,
    M = {
      id: m,
      isRequired: a,
      isDisabled: s,
      isInvalid: r,
      isReadOnly: o,
      inputValue: g,
      setInputValue: b,
      maxLength: v,
      setMaxLength: y,
    };
  return d.createElement(
    id.Provider,
    { value: M },
    d.createElement(Ve, se({ as: S, ref: e, role: w, testId: u, marginBottom: c }, p), l)
  );
}
dd.displayName = 'FormControl';
var g0 = d.forwardRef(dd);
function v0() {
  return {
    root: I({ display: 'inline-block', fontWeight: f.fontWeightMedium }),
    indicator: I({ color: f.gray500, fontWeight: f.fontWeightNormal, marginLeft: f.spacing2Xs }),
  };
}
var b0 = 'label';
function hd(t, e) {
  var n = t,
    {
      as: i,
      children: r,
      className: a,
      isRequired: s,
      requiredText: o = 'required',
      testId: l = 'cf-ui-form-label',
    } = n,
    c = Ce(n, ['as', 'children', 'className', 'isRequired', 'requiredText', 'testId']);
  let h = v0(),
    u = Lt({ isRequired: s }),
    p = u.id ? u.id + '-label' : void 0,
    m = i !== 'legend' ? { htmlFor: c.htmlFor || u.id } : {};
  return d.createElement(
    Ge,
    Te(
      se(Te(se({ as: i || b0, marginBottom: 'spacingXs' }, c), { fontColor: 'gray900', id: p }), m),
      { className: Q(h.root, a), ref: e, testId: l }
    ),
    r,
    u.isRequired && d.createElement('span', { className: h.indicator }, '(', o, ')')
  );
}
hd.displayName = 'FormLabel';
var y0 = $e(hd);
function x0() {
  return { root: I({ flexShrink: 0, paddingLeft: f.spacingM, textAlign: 'right' }) };
}
var ud = $e((t, e) => {
  var n = t,
    { testId: i = 'cf-ui-counter', className: r } = n,
    a = Ce(n, ['testId', 'className']);
  let { maxLength: s, inputValue: o } = Lt({}),
    l = x0();
  return (
    !!s &&
    d.createElement(
      Ge,
      Te(
        se(
          {
            as: 'p',
            fontColor: 'gray700',
            fontSize: 'fontSizeM',
            testId: i,
            marginTop: 'spacingXs',
          },
          a
        ),
        { className: Q(l.root, r), ref: e }
      ),
      o.length,
      ' / ',
      s
    )
  );
});
ud.displayName = 'Counter';
var Qr = g0;
Qr.Label = y0;
Qr.ValidationMessage = rd;
Qr.HelpText = hs;
Qr.Counter = ud;
var w0 = (t, e) => {
    let n = t,
      {
        testId: i = 'cf-ui-radio-button',
        id: r,
        isDisabled: a,
        isInvalid: s,
        isRequired: o,
        children: l,
        onBlur: c,
        onChange: h,
        defaultChecked: u,
        isChecked: p,
        value: m,
        name: g,
      } = n,
      b = Ce(n, [
        'testId',
        'id',
        'isDisabled',
        'isInvalid',
        'isRequired',
        'children',
        'onBlur',
        'onChange',
        'defaultChecked',
        'isChecked',
        'value',
        'name',
      ]),
      v = Wt(r, 'radio'),
      y = ld({ onBlur: c, onChange: h, value: m, defaultChecked: u, isChecked: p, name: g }),
      w = Lt({ id: v, isDisabled: a, isInvalid: s, isRequired: o }),
      S = Ce(w, ['inputValue', 'setInputValue', 'maxLength', 'setMaxLength', 'isReadOnly']);
    return d.createElement(
      fs,
      Te(se(se(se({}, S), b), y), { type: 'radio', testId: i, ref: e }),
      l
    );
  },
  E0 = d.forwardRef(w0),
  C0 = (t, e) => {
    let n = t,
      { children: i, testId: r = 'cf-ui-radio-group' } = n,
      a = Ce(n, ['children', 'testId']);
    return d.createElement(cd, se({ ref: e, testId: r, type: 'radio' }, a), i);
  },
  _0 = d.forwardRef(C0),
  M0 = E0;
M0.Group = _0;
var S0 = ({ size: t }) =>
    t === 'small'
      ? { padding: `${f.spacing2Xs} ${f.spacingXs}`, height: '32px', maxHeight: '32px' }
      : { height: '40px', maxHeight: '40px' },
  wo = ({ isDisabled: t, isInvalid: e, zIndexBase: n = f.zIndexDefault }) => (t || e ? n + 1 : n),
  z0 = ({ as: t, isDisabled: e, isInvalid: n, size: i, resize: r }) => ({
    rootComponentWithIcon: I({
      position: 'relative',
      display: 'flex',
      width: '100%',
      zIndex: wo({ isDisabled: e, isInvalid: n }),
    }),
    input: I(
      Te(
        se(
          {
            outline: 'none',
            boxShadow: f.insetBoxShadowDefault,
            boxSizing: 'border-box',
            backgroundColor: e ? f.gray100 : f.colorWhite,
            border: `1px solid ${n ? f.red600 : f.gray300}`,
            borderRadius: f.borderRadiusMedium,
            color: f.gray700,
            fontFamily: f.fontStackPrimary,
            fontSize: f.fontSizeM,
            lineHeight: f.lineHeightM,
            padding: `10px ${f.spacingS}`,
            margin: 0,
            cursor: e ? 'not-allowed' : 'auto',
            width: '100%',
            zIndex: wo({ isDisabled: e, isInvalid: n }),
          },
          t === 'textarea' ? { resize: r } : S0({ size: i })
        ),
        {
          '&::placeholder': { color: f.gray500 },
          '&:active, &:active:hover': {
            borderColor: n ? f.red600 : e ? f.gray300 : f.blue600,
            boxShadow: n ? f.glowNegative : e ? 'none' : f.glowPrimary,
          },
          '&:focus': {
            borderColor: n ? f.red600 : e ? f.gray300 : f.blue600,
            boxShadow: n ? f.glowNegative : e ? 'none' : f.glowPrimary,
          },
        }
      )
    ),
    inputWithIcon: I({ paddingLeft: i === 'small' ? f.spacingXl : '38px' }),
    iconPlaceholder: I({
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      bottom: 0,
      left: i === 'small' ? f.spacingXs : f.spacingS,
      display: 'flex',
      alignItems: 'center',
      zIndex: f.zIndexDefault,
    }),
  }),
  k0 = z0,
  O0 = 'input';
function fd(t, e) {
  let n = t,
    {
      as: i = O0,
      className: r,
      isDisabled: a,
      isReadOnly: s,
      isRequired: o,
      isInvalid: l,
      id: c,
      name: h,
      onBlur: u,
      onChange: p,
      onFocus: m,
      onKeyDown: g,
      testId: b = 'cf-ui-base-input',
      type: v = 'text',
      value: y = void 0,
      placeholder: w,
      willBlurOnEsc: S = !0,
      style: M,
      icon: _,
      defaultValue: O,
      size: C = 'medium',
      resize: L = 'vertical',
    } = n,
    T = Ce(n, [
      'as',
      'className',
      'isDisabled',
      'isReadOnly',
      'isRequired',
      'isInvalid',
      'id',
      'name',
      'onBlur',
      'onChange',
      'onFocus',
      'onKeyDown',
      'testId',
      'type',
      'value',
      'placeholder',
      'willBlurOnEsc',
      'style',
      'icon',
      'defaultValue',
      'size',
      'resize',
    ]),
    R = k0({ as: i, isDisabled: a, isInvalid: l, size: C, resize: L }),
    P = de(
      (X) => {
        X.persist(), m && m(X);
      },
      [m]
    ),
    N = de(
      (X) => {
        X.persist(), !(a || s) && p && p(X);
      },
      [p, a, s]
    ),
    j = de(
      (X) => {
        X.persist(), g && g(X), X.nativeEvent.code === 'Escape' && S && X.currentTarget.blur();
      },
      [S, g]
    ),
    q =
      _ &&
      d.createElement(
        Ve,
        { as: 'span', className: R.iconPlaceholder },
        d.cloneElement(_, {
          size: C === 'small' ? 'tiny' : 'small',
          variant: 'muted',
          'aria-hidden': !0,
        })
      ),
    F = i,
    U = (X) =>
      d.createElement(
        F,
        Te(se({}, T), {
          value: y,
          defaultValue: O,
          'data-test-id': b,
          style: M,
          placeholder: w,
          className: Q(R.input, X, r),
          name: h,
          type: v,
          ref: e,
          id: c,
          readOnly: s,
          'aria-readonly': s ? 'true' : void 0,
          'aria-required': o ? 'true' : void 0,
          'aria-invalid': l ? 'true' : void 0,
          'aria-describedby': c ? `${c}-${l ? 'validation' : 'helptext'}` : void 0,
          disabled: a,
          required: o,
          onChange: N,
          onBlur: u,
          onKeyDown: j,
          onFocus: P,
          size: C,
        })
      );
  return _
    ? d.createElement(Ve, { as: 'div', className: R.rootComponentWithIcon }, U(R.inputWithIcon), q)
    : U();
}
fd.displayName = 'BaseInput';
var pd = d.forwardRef(fd),
  L0 = (t, e) => {
    var n = t,
      {
        className: i,
        testId: r = 'cf-ui-text-input',
        id: a,
        value: s,
        defaultValue: o,
        onChange: l,
        onFocus: c,
        isInvalid: h,
        isDisabled: u,
        isRequired: p,
        isReadOnly: m,
        size: g = 'medium',
        maxLength: b,
      } = n,
      v = Ce(n, [
        'className',
        'testId',
        'id',
        'value',
        'defaultValue',
        'onChange',
        'onFocus',
        'isInvalid',
        'isDisabled',
        'isRequired',
        'isReadOnly',
        'size',
        'maxLength',
      ]);
    let y = Lt({ id: a, isInvalid: h, isDisabled: u, isRequired: p, isReadOnly: m }),
      { setMaxLength: w, maxLength: S, setInputValue: M, inputValue: _ } = y,
      O = Ce(y, ['setMaxLength', 'maxLength', 'setInputValue', 'inputValue']);
    Fe(() => {
      var R;
      b !== void 0 && typeof w == 'function' && (w(b), M((R = s ?? o) != null ? R : ''));
    }, [b, w, M, o, s]);
    let C = (R) => {
        typeof M == 'function' && M(R.target.value), l == null || l(R);
      },
      L = rt(null),
      T = e || L;
    return d.createElement(
      pd,
      Te(se(se({ type: 'text' }, v), O), {
        testId: r,
        ref: T,
        onChange: b ? C : l,
        onFocus: c,
        as: 'input',
        className: i,
        value: s,
        defaultValue: o,
        size: g,
        maxLength: b,
      })
    );
  },
  I0 = d.forwardRef(L0),
  R0 = ({ spacing: t }) => {
    if (t === 'none')
      return I({
        position: 'relative',
        '& button, & input': { borderRadius: '0 !important' },
        '& > *': {
          marginRight: '-1px !important',
          '&:not(:focus), & button:not(:focus)': { boxShadow: 'none !important' },
          '&:first-child, &:first-child > input, &:first-child button': {
            borderBottomLeftRadius: `${f.borderRadiusMedium} !important`,
            borderTopLeftRadius: `${f.borderRadiusMedium} !important`,
          },
          '&:last-child, &:last-child > input, &:last-child button': {
            borderBottomRightRadius: `${f.borderRadiusMedium} !important`,
            borderTopRightRadius: `${f.borderRadiusMedium} !important`,
            marginRight: '0 !important',
          },
          '&:focus, &:focus-within': { zIndex: f.zIndexDefault + 1 },
        },
      });
  },
  D0 = ({ spacing: t }) => ({ inputGroup: R0({ spacing: t }) }),
  A0 = (t, e) => {
    let n = t,
      { children: i, className: r, spacing: a = 'none' } = n,
      s = Ce(n, ['children', 'className', 'spacing']),
      o = D0({ spacing: a });
    return d.createElement(
      ls,
      Te(se({}, s), { spacing: a, ref: e, fullWidth: !0, className: Q(o.inputGroup, r) }),
      i
    );
  },
  T0 = d.forwardRef(A0),
  md = I0;
md.Group = T0;
var P0 = (t, e) => {
  let n = t,
    {
      testId: i = 'cf-ui-switch',
      id: r,
      isDisabled: a,
      isInvalid: s,
      isRequired: o,
      children: l,
    } = n,
    c = Ce(n, ['testId', 'id', 'isDisabled', 'isInvalid', 'isRequired', 'children']),
    h = Lt({ id: r, isDisabled: a, isInvalid: s, isRequired: o }),
    u = Ce(h, ['inputValue', 'setInputValue', 'maxLength', 'setMaxLength', 'isReadOnly']);
  return d.createElement(fs, Te(se(se({}, u), c), { testId: i, type: 'switch', ref: e }), l);
};
d.forwardRef(P0);
var H0 = () => ({
    error: I({ '&:focus': { borderColor: f.colorNegative, boxShadow: f.glowNegative } }),
    disabled: I({ '&:focus': { borderColor: f.gray300, boxShadow: 'none' } }),
  }),
  V0 = (t, e) => {
    var n = t,
      {
        className: i,
        isDisabled: r,
        isInvalid: a,
        isRequired: s,
        isReadOnly: o,
        onChange: l,
        testId: c = 'cf-ui-textarea',
        id: h,
        resize: u = 'vertical',
        maxLength: p,
        value: m,
        defaultValue: g,
      } = n,
      b = Ce(n, [
        'className',
        'isDisabled',
        'isInvalid',
        'isRequired',
        'isReadOnly',
        'onChange',
        'testId',
        'id',
        'resize',
        'maxLength',
        'value',
        'defaultValue',
      ]);
    let v = H0(),
      y = Lt({ id: h, isInvalid: a, isDisabled: r, isRequired: s, isReadOnly: o }),
      { setMaxLength: w, maxLength: S, setInputValue: M, inputValue: _ } = y,
      O = Ce(y, ['setMaxLength', 'maxLength', 'setInputValue', 'inputValue']);
    Fe(() => {
      var L;
      p !== void 0 && typeof w == 'function' && (w(p), M((L = m ?? g) != null ? L : ''));
    }, [g, p, M, w, m]);
    let C = (L) => {
      typeof M == 'function' && M(L.target.value), l == null || l(L);
    };
    return d.createElement(
      pd,
      Te(se(se({}, b), O), {
        defaultValue: g,
        value: m,
        testId: c,
        as: 'textarea',
        ref: e,
        className: Q(i, { [v.disabled]: r, [v.error]: a }),
        maxLength: p,
        resize: u,
        onChange: p ? C : l,
      })
    );
  };
d.forwardRef(V0);
var B0 = (t) => {
  var e = t,
    { testId: n = 'cf-ui-select-option', isDisabled: i } = e,
    r = Ce(e, ['testId', 'isDisabled']);
  return d.createElement('option', Te(se({ 'data-test-id': n }, r), { disabled: i }));
};
function N0({ isInvalid: t, isDisabled: e, size: n }) {
  let i =
      n === 'small'
        ? { padding: `${f.spacing2Xs} ${f.spacingXs}`, height: '32px' }
        : { padding: `10px ${f.spacingL} 10px ${f.spacingS}`, height: '40px' },
    r = I({
      width: '100%',
      display: 'block',
      appearance: 'none',
      backgroundColor: f.colorWhite,
      color: f.gray700,
      fontSize: f.fontSizeM,
      lineHeight: f.lineHeightM,
      fontFamily: f.fontStackPrimary,
      borderRadius: f.borderRadiusMedium,
      boxShadow: f.insetBoxShadowDefault,
      outline: 'none',
      border: `1px solid ${f.gray300}`,
      cursor: 'pointer',
      '&::placeholder': { color: f.gray500 },
      '&:focus': { outline: 'none', boxShadow: f.glowPrimary, borderColor: f.colorPrimary },
      '&:-moz-focusring': { color: 'transparent', textShadow: '0 0 0 #000' },
      '&::-ms-expand': { display: 'none' },
    }),
    a = I({
      backgroundColor: f.gray100,
      cursor: 'not-allowed',
      color: f.gray600,
      '&:focus, &:active': { borderColor: f.gray300 },
    }),
    s = I({
      borderColor: e ? f.red300 : f.red600,
      '&:focus': { borderColor: f.red600, boxShadow: f.glowNegative },
    });
  return {
    wrapper: I({ position: 'relative', display: 'block', width: 'auto' }),
    select: I([r, i, e && a, t && s]),
    icon: I({
      position: 'absolute',
      right: f.spacingXs,
      top: '50%',
      marginTop: '-8px',
      pointerEvents: 'none',
    }),
  };
}
var F0 = (t, e) => {
    var n = t,
      {
        id: i,
        children: r,
        className: a,
        isInvalid: s,
        isDisabled: o,
        isRequired: l,
        testId: c = 'cf-ui-select',
        willBlurOnEsc: h = !0,
        onKeyDown: u,
        size: p = 'medium',
        value: m = void 0,
        defaultValue: g = void 0,
      } = n,
      b = Ce(n, [
        'id',
        'children',
        'className',
        'isInvalid',
        'isDisabled',
        'isRequired',
        'testId',
        'willBlurOnEsc',
        'onKeyDown',
        'size',
        'value',
        'defaultValue',
      ]);
    let v = Lt({ isDisabled: o, isInvalid: s, isRequired: l, id: i }),
      y = N0({ isDisabled: v.isDisabled, isInvalid: v.isInvalid, size: p }),
      w = de(
        (S) => {
          S.nativeEvent.code === 'Escape' && h && S.currentTarget.blur(), u && u(S);
        },
        [u, h]
      );
    return d.createElement(
      'div',
      { className: Q(y.wrapper, a) },
      d.createElement(
        'select',
        Te(se({}, b), {
          id: v.id,
          'data-test-id': c,
          className: y.select,
          onKeyDown: w,
          required: v.isRequired,
          'aria-required': v.isRequired ? 'true' : void 0,
          'aria-invalid': v.isInvalid ? !0 : void 0,
          'aria-describedby': v.id ? `${v.id}-${v.isInvalid ? 'validation' : 'helptext'}` : void 0,
          disabled: v.isDisabled,
          defaultValue: g,
          value: m,
          ref: e,
        }),
        r
      ),
      d.createElement(mf, { className: y.icon, variant: 'muted' })
    );
  },
  $0 = d.forwardRef(F0),
  j0 = $0;
j0.Option = B0;
function gd(t, e) {
  var n = t,
    { children: i, onSubmit: r, testId: a = 'cf-ui-form-label' } = n,
    s = Ce(n, ['children', 'onSubmit', 'testId']);
  let o = de(
    (l) => {
      l.preventDefault(), r && r(l);
    },
    [r]
  );
  return d.createElement('form', se({ ref: e, 'data-test-id': a, onSubmit: o }, s), i);
}
gd.displayName = 'Form';
var W0 = $e(gd),
  X0 = Object.defineProperty,
  Y0 = Object.defineProperties,
  U0 = Object.getOwnPropertyDescriptors,
  Mr = Object.getOwnPropertySymbols,
  vd = Object.prototype.hasOwnProperty,
  bd = Object.prototype.propertyIsEnumerable,
  Eo = (t, e, n) =>
    e in t ? X0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  Jt = (t, e) => {
    for (var n in e || (e = {})) vd.call(e, n) && Eo(t, n, e[n]);
    if (Mr) for (var n of Mr(e)) bd.call(e, n) && Eo(t, n, e[n]);
    return t;
  },
  bn = (t, e) => Y0(t, U0(e)),
  Hi = (t, e) => {
    var n = {};
    for (var i in t) vd.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Mr) for (var i of Mr(t)) e.indexOf(i) < 0 && bd.call(t, i) && (n[i] = t[i]);
    return n;
  },
  q0 = () => ({
    inline: I({
      borderRadius: f.borderRadiusMedium,
      boxShadow: `0 0 0 1px ${f.gray200}`,
      'th:first-child': { borderTopLeftRadius: f.borderRadiusMedium },
      'th:last-child': { borderTopRightRadius: f.borderRadiusMedium },
      'tr:last-child td:first-child': { borderBottomLeftRadius: f.borderRadiusMedium },
      'tr:last-child td:last-child': { borderBottomRightRadius: f.borderRadiusMedium },
    }),
    embedded: I({ borderBottom: `1px solid ${f.gray200}` }),
    root: I({ width: '100%' }),
  }),
  yd = Xn({}),
  G0 = () => Zr(yd),
  K0 = yd.Provider,
  xd = $e((t, e) => {
    var n = t,
      {
        children: i,
        className: r,
        layout: a = 'inline',
        testId: s = 'cf-ui-table',
        verticalAlign: o = 'top',
      } = n,
      l = Hi(n, ['children', 'className', 'layout', 'testId', 'verticalAlign']);
    let c = q0();
    return d.createElement(
      Ve,
      bn(Jt({ cellPadding: '0', cellSpacing: '0' }, l), {
        as: 'table',
        display: 'table',
        ref: e,
        className: Q(c.root, c[a], r),
        testId: s,
      }),
      d.createElement(K0, { value: { verticalAlign: o } }, i)
    );
  });
xd.displayName = 'Table';
function wd(t, e) {
  var n = t,
    { className: i, children: r, testId: a = 'cf-ui-table-body' } = n,
    s = Hi(n, ['className', 'children', 'testId']);
  return d.createElement(Ve, bn(Jt({}, s), { as: 'tbody', className: i, ref: e, testId: a }), r);
}
wd.displayName = 'TableBody';
var Z0 = $e(wd),
  Ed = {
    body: { name: 'body', as: 'td', offsetTop: 0 },
    head: { name: 'head', as: 'th', offsetTop: 0 },
  },
  Cd = Xn(Ed.body),
  Q0 = () => Zr(Cd),
  J0 = Cd.Provider,
  ep = ({ align: t, isSortable: e, isTableHead: n, sortDirection: i, verticalAlign: r }) => ({
    button: I({
      alignItems: 'flex-start',
      appearance: 'none',
      background: 'none',
      border: 0,
      color: i ? f.gray900 : 'inherit',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: f.spacing2Xs,
      outline: 0,
      padding: f.spacingS,
      '&:focus': { backgroundColor: f.gray100, boxShadow: f.glowPrimary },
      '&:focus:not(:focus-visible)': { backgroundColor: 'unset', boxShadow: 'unset' },
      '&:focus-visible': { backgroundColor: f.gray100, boxShadow: f.glowPrimary },
    }),
    container: I({
      backgroundColor: f.colorWhite,
      borderBottom: `1px solid ${f.gray200}`,
      padding: e ? 0 : f.spacingS,
      textAlign: t,
      color: f.gray700,
      fontWeight: n ? f.fontWeightMedium : f.fontWeightNormal,
      verticalAlign: r,
    }),
    sortIcon: (a) =>
      I({
        fill: f.gray400,
        opacity: a ? 1 : 0,
        transition: `opacity ${f.transitionEasingCubicBezier} ${f.transitionDurationDefault}`,
      }),
  });
function tp(t) {
  return bc(t) && !!t.props.children;
}
function _d(t) {
  let e = '';
  return (
    e1.toArray(t).map((n) => {
      bc(n) && tp(n)
        ? (e += _d(n.props.children))
        : (typeof n == 'string' || typeof n == 'number') && (e = `${e}${n}`);
    }),
    e
  );
}
var np = ((t) => ((t.Ascending = 'ascending'), (t.Descending = 'descending'), t))(np || {}),
  ip = { ascending: Ef, descending: Cf };
function Md(t, e) {
  var n = t,
    {
      align: i = 'left',
      children: r,
      className: a,
      isSortable: s,
      sortDirection: o,
      testId: l = 'cf-ui-table-cell',
    } = n,
    c = Hi(n, ['align', 'children', 'className', 'isSortable', 'sortDirection', 'testId']);
  let [h, u] = Xe(!1),
    { as: p, name: m, offsetTop: g } = Q0(),
    { verticalAlign: b } = G0(),
    v = ip[o],
    y = m === 'head',
    w = ep({
      isSortable: y ? s : void 0,
      sortDirection: o,
      isTableHead: y,
      align: i,
      verticalAlign: b,
    }),
    S = y ? Pc : Ge,
    M = s
      ? {
          'aria-sort': o ?? 'none',
          onBlur: () => u(!1),
          onFocus: () => u(!0),
          onMouseEnter: () => u(!0),
          onMouseLeave: () => u(!1),
        }
      : {},
    _ = Ai(() => _d(r), [r]),
    O = r;
  return (
    s &&
      (O = d.createElement(
        'button',
        {
          'aria-label': `Sort ${o === 'ascending' ? 'descending' : 'ascending'} by ${_}`,
          className: w.button,
          type: 'button',
        },
        r,
        o
          ? d.createElement(v, { size: 'tiny', variant: 'secondary' })
          : d.createElement(wf, {
              'aria-hidden': !h,
              className: w.sortIcon(h),
              size: 'tiny',
              variant: 'secondary',
            })
      )),
    d.createElement(
      S,
      bn(Jt(Jt({}, c), M), {
        as: p,
        className: Q(w.container, a),
        ref: e,
        style: bn(Jt({}, c.style), { top: g || void 0 }),
        testId: l,
      }),
      O
    )
  );
}
Md.displayName = 'TableCell';
var Sd = $e(Md),
  rp = () => ({ sticky: I({ th: { position: 'sticky', top: 0, zIndex: f.zIndexDefault } }) }),
  zd = $e((t, e) => {
    var n = t,
      {
        children: i,
        className: r,
        isSticky: a = !1,
        offsetTop: s,
        testId: o = 'cf-ui-table-head',
      } = n,
      l = Hi(n, ['children', 'className', 'isSticky', 'offsetTop', 'testId']);
    let c = rp(),
      h = Q(a && c.sticky, r);
    return d.createElement(
      J0,
      { value: bn(Jt({}, Ed.head), { offsetTop: s || 0 }) },
      d.createElement(Ve, bn(Jt({}, l), { as: 'thead', className: h, ref: e, testId: o }), i)
    );
  });
zd.displayName = 'TableHead';
var ap = () => ({
    root: I({
      '&:last-child td': { borderBottom: 'none' },
      '&:hover td': { backgroundColor: f.gray100 },
    }),
    selected: I({
      'td, th': { backgroundColor: f.blue100 },
      'td:last-child': { boxShadow: `inset -2px 0 0 ${f.blue500}` },
    }),
  }),
  ps = $e((t, e) => {
    var n = t,
      { className: i, children: r, isSelected: a = !1, testId: s = 'cf-ui-table-row' } = n,
      o = Hi(n, ['className', 'children', 'isSelected', 'testId']);
    let l = ap();
    return d.createElement(
      Ve,
      bn(Jt({}, o), { as: 'tr', className: Q(l.root, { [l.selected]: a }, i), ref: e, testId: s }),
      r
    );
  });
ps.displayName = 'TableRow';
var Jr = xd;
Jr.Row = ps;
Jr.Head = zd;
Jr.Cell = Sd;
Jr.Body = Z0;
var sp = Object.defineProperty,
  Sr = Object.getOwnPropertySymbols,
  kd = Object.prototype.hasOwnProperty,
  Od = Object.prototype.propertyIsEnumerable,
  Co = (t, e, n) =>
    e in t ? sp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  ea = (t, e) => {
    for (var n in e || (e = {})) kd.call(e, n) && Co(t, n, e[n]);
    if (Sr) for (var n of Sr(e)) Od.call(e, n) && Co(t, n, e[n]);
    return t;
  },
  ta = (t, e) => {
    var n = {};
    for (var i in t) kd.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Sr) for (var i of Sr(t)) e.indexOf(i) < 0 && Od.call(t, i) && (n[i] = t[i]);
    return n;
  },
  op = (t) => {
    var e = t,
      {
        lineHeight: n = 16,
        marginBottom: i = 8,
        numberOfLines: r = 2,
        offsetLeft: a = 0,
        offsetTop: s = 0,
      } = e,
      o = ta(e, ['lineHeight', 'marginBottom', 'numberOfLines', 'offsetLeft', 'offsetTop']);
    return d.createElement(
      at.Text,
      ea(
        {
          lineHeight: n,
          marginBottom: i,
          numberOfLines: r > 0 ? r : 1,
          offsetLeft: a,
          offsetTop: s,
        },
        o
      )
    );
  },
  Ld = (t) => {
    var e = t,
      {
        children: n,
        testId: i = 'cf-ui-skeleton-form',
        ariaLabel: r = 'Loading component...',
        width: a = '100%',
        height: s = '100%',
        preserveAspectRatio: o,
        backgroundColor: l = '#e5ebed',
        backgroundOpacity: c = 1,
        isAnimated: h = !0,
        speed: u = 2,
        foregroundColor: p = '#f7f9fa',
        foregroundOpacity: m = 1,
        svgWidth: g = '100%',
        svgHeight: b = '100%',
        clipId: v,
        gradientId: y,
        animateId: w,
      } = e,
      S = ta(e, [
        'children',
        'testId',
        'ariaLabel',
        'width',
        'height',
        'preserveAspectRatio',
        'backgroundColor',
        'backgroundOpacity',
        'isAnimated',
        'speed',
        'foregroundColor',
        'foregroundOpacity',
        'svgWidth',
        'svgHeight',
        'clipId',
        'gradientId',
        'animateId',
      ]);
    let M = Wt(v, 'cf-ui-skeleton-clip'),
      _ = Wt(y, 'cf-ui-skeleton-clip-gradient'),
      O = Wt(void 0, 'animation'),
      C = w || O;
    return d.createElement(
      Ve,
      ea(
        {
          as: 'svg',
          display: 'block',
          role: 'img',
          'aria-label': r,
          preserveAspectRatio: o,
          width: g,
          height: b,
          testId: i,
        },
        S
      ),
      r ? d.createElement('title', null, r) : null,
      d.createElement('rect', {
        x: '0',
        y: '0',
        width: a,
        height: s,
        clipPath: `url(#${M})`,
        style: { fill: `url(#${_})` },
      }),
      d.createElement(
        'defs',
        null,
        d.createElement('clipPath', { id: M }, n),
        d.createElement(
          'linearGradient',
          { id: _ },
          d.createElement(
            'stop',
            { offset: '0%', stopColor: l, stopOpacity: c },
            h &&
              d.createElement('animate', {
                id: C,
                attributeName: 'stop-color',
                values: `${l}; ${p}; ${l}`,
                dur: `${u}s`,
                repeatCount: 'indefinite',
              })
          ),
          d.createElement(
            'stop',
            { offset: '50%', stopColor: p, stopOpacity: m },
            h &&
              d.createElement('animate', {
                attributeName: 'stop-color',
                values: `${l}; ${p}; ${l}`,
                begin: `${C}.begin+0.25s`,
                dur: `${u}s`,
                repeatCount: 'indefinite',
              })
          ),
          d.createElement(
            'stop',
            { offset: '100%', stopColor: l, stopOpacity: c },
            h &&
              d.createElement('animate', {
                attributeName: 'stop-color',
                begin: `${C}.begin+0.5s`,
                values: `${l}; ${p}; ${l}`,
                dur: `${u}s`,
                repeatCount: 'indefinite',
              })
          )
        )
      )
    );
  };
Ld.displayName = 'SkeletonContainer';
var Id = (t) => {
  var e = t,
    {
      lineHeight: n = 21,
      marginBottom: i = 20,
      numberOfLines: r = 1,
      offsetLeft: a = 0,
      offsetTop: s = 0,
      width: o = 100,
    } = e,
    l = ta(e, ['lineHeight', 'marginBottom', 'numberOfLines', 'offsetLeft', 'offsetTop', 'width']);
  return d.createElement(
    at.Text,
    ea(
      { lineHeight: n, marginBottom: i, numberOfLines: r, offsetLeft: a, offsetTop: s, width: o },
      l
    )
  );
};
Id.displayName = 'SkeletonDisplayText';
var Rd = (t) => {
  var e = t,
    {
      testId: n = 'cf-ui-skeleton-image',
      offsetLeft: i,
      offsetTop: r,
      width: a = 70,
      height: s = 70,
      radiusX: o = f.borderRadiusSmall,
      radiusY: l = f.borderRadiusSmall,
    } = e,
    c = ta(e, ['testId', 'offsetLeft', 'offsetTop', 'width', 'height', 'radiusX', 'radiusY']);
  return d.createElement(
    'rect',
    ea({ x: i, y: r, rx: o, ry: l, width: a, height: s, 'data-test-id': n }, c)
  );
};
Rd.displayName = 'SkeletonImage';
var lp = () =>
    d.createElement(
      Sd,
      null,
      d.createElement(
        at.Container,
        { svgHeight: 16 },
        d.createElement(at.BodyText, { numberOfLines: 1 })
      )
    ),
  cp = ({ columnCount: t = 5, rowCount: e = 1 }) =>
    d.createElement(
      d.Fragment,
      null,
      Array.from(Array(e)).map((n, i) =>
        d.createElement(
          ps,
          { key: i },
          Array.from(Array(t)).map((r, a) => d.createElement(lp, { key: a }))
        )
      )
    ),
  Dd = ({
    numberOfLines: t = 1,
    offsetLeft: e = 0,
    offsetTop: n = 0,
    lineHeight: i = 21,
    marginBottom: r = 20,
    radiusX: a = f.borderRadiusSmall,
    radiusY: s = f.borderRadiusSmall,
    width: o,
  }) => {
    let l = de((c) => o || (c ? '80%' : '100%'), [o]);
    return d.createElement(
      d.Fragment,
      null,
      Array.from(Array(t)).map((c, h) =>
        d.createElement('rect', {
          key: `skeleton-display-text-${h}`,
          x: e,
          y: h * (+i + +r) + +n,
          rx: a,
          ry: s,
          width: l(t > 1 && t - h === 1),
          height: i,
        })
      )
    );
  };
Dd.displayName = 'SkeletonText';
var at = {};
at.BodyText = op;
at.Container = Ld;
at.DisplayText = Id;
at.Image = Rd;
at.Row = cp;
at.Text = Dd;
var _o = function (e) {
    return e.reduce(function (n, i) {
      var r = i[0],
        a = i[1];
      return (n[r] = a), n;
    }, {});
  },
  Mo =
    typeof window < 'u' && window.document && window.document.createElement
      ? Z.useLayoutEffect
      : Z.useEffect,
  Je = 'top',
  wt = 'bottom',
  Et = 'right',
  et = 'left',
  na = 'auto',
  Vi = [Je, wt, Et, et],
  Hn = 'start',
  Ci = 'end',
  dp = 'clippingParents',
  Ad = 'viewport',
  Qn = 'popper',
  hp = 'reference',
  So = /* @__PURE__ */ Vi.reduce(function (t, e) {
    return t.concat([e + '-' + Hn, e + '-' + Ci]);
  }, []),
  Td = /* @__PURE__ */ [].concat(Vi, [na]).reduce(function (t, e) {
    return t.concat([e, e + '-' + Hn, e + '-' + Ci]);
  }, []),
  up = 'beforeRead',
  fp = 'read',
  pp = 'afterRead',
  mp = 'beforeMain',
  gp = 'main',
  vp = 'afterMain',
  bp = 'beforeWrite',
  yp = 'write',
  xp = 'afterWrite',
  Aa = [up, fp, pp, mp, gp, vp, bp, yp, xp];
function Pt(t) {
  return t ? (t.nodeName || '').toLowerCase() : null;
}
function lt(t) {
  if (t == null) return window;
  if (t.toString() !== '[object Window]') {
    var e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function yn(t) {
  var e = lt(t).Element;
  return t instanceof e || t instanceof Element;
}
function st(t) {
  var e = lt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function ms(t) {
  if (typeof ShadowRoot > 'u') return !1;
  var e = lt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function wp(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (n) {
    var i = e.styles[n] || {},
      r = e.attributes[n] || {},
      a = e.elements[n];
    !st(a) ||
      !Pt(a) ||
      (Object.assign(a.style, i),
      Object.keys(r).forEach(function (s) {
        var o = r[s];
        o === !1 ? a.removeAttribute(s) : a.setAttribute(s, o === !0 ? '' : o);
      }));
  });
}
function Ep(t) {
  var e = t.state,
    n = {
      popper: {
        position: e.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: {
        position: 'absolute',
      },
      reference: {},
    };
  return (
    Object.assign(e.elements.popper.style, n.popper),
    (e.styles = n),
    e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
    function () {
      Object.keys(e.elements).forEach(function (i) {
        var r = e.elements[i],
          a = e.attributes[i] || {},
          s = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]),
          o = s.reduce(function (l, c) {
            return (l[c] = ''), l;
          }, {});
        !st(r) ||
          !Pt(r) ||
          (Object.assign(r.style, o),
          Object.keys(a).forEach(function (l) {
            r.removeAttribute(l);
          }));
      });
    }
  );
}
const Cp = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: wp,
  effect: Ep,
  requires: ['computeStyles'],
};
function kt(t) {
  return t.split('-')[0];
}
var gn = Math.max,
  zr = Math.min,
  Vn = Math.round;
function Ta() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (e) {
          return e.brand + '/' + e.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function Pd() {
  return !/^((?!chrome|android).)*safari/i.test(Ta());
}
function Bn(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var i = t.getBoundingClientRect(),
    r = 1,
    a = 1;
  e &&
    st(t) &&
    ((r = (t.offsetWidth > 0 && Vn(i.width) / t.offsetWidth) || 1),
    (a = (t.offsetHeight > 0 && Vn(i.height) / t.offsetHeight) || 1));
  var s = yn(t) ? lt(t) : window,
    o = s.visualViewport,
    l = !Pd() && n,
    c = (i.left + (l && o ? o.offsetLeft : 0)) / r,
    h = (i.top + (l && o ? o.offsetTop : 0)) / a,
    u = i.width / r,
    p = i.height / a;
  return {
    width: u,
    height: p,
    top: h,
    right: c + u,
    bottom: h + p,
    left: c,
    x: c,
    y: h,
  };
}
function gs(t) {
  var e = Bn(t),
    n = t.offsetWidth,
    i = t.offsetHeight;
  return (
    Math.abs(e.width - n) <= 1 && (n = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: n,
      height: i,
    }
  );
}
function Hd(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && ms(n)) {
    var i = e;
    do {
      if (i && t.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Ot(t) {
  return lt(t).getComputedStyle(t);
}
function _p(t) {
  return ['table', 'td', 'th'].indexOf(Pt(t)) >= 0;
}
function rn(t) {
  return (
    (yn(t)
      ? t.ownerDocument
      : // $FlowFixMe[prop-missing]
        t.document) || window.document
  ).documentElement;
}
function ia(t) {
  return Pt(t) === 'html'
    ? t
    : // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
        t.parentNode || // DOM Element detected
        (ms(t) ? t.host : null) || // ShadowRoot detected
        // $FlowFixMe[incompatible-call]: HTMLElement is a Node
        rn(t);
}
function zo(t) {
  return !st(t) || // https://github.com/popperjs/popper-core/issues/837
    Ot(t).position === 'fixed'
    ? null
    : t.offsetParent;
}
function Mp(t) {
  var e = /firefox/i.test(Ta()),
    n = /Trident/i.test(Ta());
  if (n && st(t)) {
    var i = Ot(t);
    if (i.position === 'fixed') return null;
  }
  var r = ia(t);
  for (ms(r) && (r = r.host); st(r) && ['html', 'body'].indexOf(Pt(r)) < 0; ) {
    var a = Ot(r);
    if (
      a.transform !== 'none' ||
      a.perspective !== 'none' ||
      a.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
      (e && a.willChange === 'filter') ||
      (e && a.filter && a.filter !== 'none')
    )
      return r;
    r = r.parentNode;
  }
  return null;
}
function Bi(t) {
  for (var e = lt(t), n = zo(t); n && _p(n) && Ot(n).position === 'static'; ) n = zo(n);
  return n && (Pt(n) === 'html' || (Pt(n) === 'body' && Ot(n).position === 'static'))
    ? e
    : n || Mp(t) || e;
}
function vs(t) {
  return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
}
function hi(t, e, n) {
  return gn(t, zr(e, n));
}
function Sp(t, e, n) {
  var i = hi(t, e, n);
  return i > n ? n : i;
}
function Vd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
}
function Bd(t) {
  return Object.assign({}, Vd(), t);
}
function Nd(t, e) {
  return e.reduce(function (n, i) {
    return (n[i] = t), n;
  }, {});
}
var zp = function (e, n) {
  return (
    (e =
      typeof e == 'function'
        ? e(
            Object.assign({}, n.rects, {
              placement: n.placement,
            })
          )
        : e),
    Bd(typeof e != 'number' ? e : Nd(e, Vi))
  );
};
function kp(t) {
  var e,
    n = t.state,
    i = t.name,
    r = t.options,
    a = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    o = kt(n.placement),
    l = vs(o),
    c = [et, Et].indexOf(o) >= 0,
    h = c ? 'height' : 'width';
  if (!(!a || !s)) {
    var u = zp(r.padding, n),
      p = gs(a),
      m = l === 'y' ? Je : et,
      g = l === 'y' ? wt : Et,
      b = n.rects.reference[h] + n.rects.reference[l] - s[l] - n.rects.popper[h],
      v = s[l] - n.rects.reference[l],
      y = Bi(a),
      w = y ? (l === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      S = b / 2 - v / 2,
      M = u[m],
      _ = w - p[h] - u[g],
      O = w / 2 - p[h] / 2 + S,
      C = hi(M, O, _),
      L = l;
    n.modifiersData[i] = ((e = {}), (e[L] = C), (e.centerOffset = C - O), e);
  }
}
function Op(t) {
  var e = t.state,
    n = t.options,
    i = n.element,
    r = i === void 0 ? '[data-popper-arrow]' : i;
  if (r != null && !(typeof r == 'string' && ((r = e.elements.popper.querySelector(r)), !r))) {
    if (
      (process.env.NODE_ENV !== 'production' &&
        (st(r) ||
          console.error(
            [
              'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
              'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
              'the arrow.',
            ].join(' ')
          )),
      !Hd(e.elements.popper, r))
    ) {
      process.env.NODE_ENV !== 'production' &&
        console.error(
          ['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(
            ' '
          )
        );
      return;
    }
    e.elements.arrow = r;
  }
}
const Lp = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: kp,
  effect: Op,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Nn(t) {
  return t.split('-')[1];
}
var Ip = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
};
function Rp(t, e) {
  var n = t.x,
    i = t.y,
    r = e.devicePixelRatio || 1;
  return {
    x: Vn(n * r) / r || 0,
    y: Vn(i * r) / r || 0,
  };
}
function ko(t) {
  var e,
    n = t.popper,
    i = t.popperRect,
    r = t.placement,
    a = t.variation,
    s = t.offsets,
    o = t.position,
    l = t.gpuAcceleration,
    c = t.adaptive,
    h = t.roundOffsets,
    u = t.isFixed,
    p = s.x,
    m = p === void 0 ? 0 : p,
    g = s.y,
    b = g === void 0 ? 0 : g,
    v =
      typeof h == 'function'
        ? h({
            x: m,
            y: b,
          })
        : {
            x: m,
            y: b,
          };
  (m = v.x), (b = v.y);
  var y = s.hasOwnProperty('x'),
    w = s.hasOwnProperty('y'),
    S = et,
    M = Je,
    _ = window;
  if (c) {
    var O = Bi(n),
      C = 'clientHeight',
      L = 'clientWidth';
    if (
      (O === lt(n) &&
        ((O = rn(n)),
        Ot(O).position !== 'static' &&
          o === 'absolute' &&
          ((C = 'scrollHeight'), (L = 'scrollWidth'))),
      (O = O),
      r === Je || ((r === et || r === Et) && a === Ci))
    ) {
      M = wt;
      var T =
        u && O === _ && _.visualViewport
          ? _.visualViewport.height
          : // $FlowFixMe[prop-missing]
            O[C];
      (b -= T - i.height), (b *= l ? 1 : -1);
    }
    if (r === et || ((r === Je || r === wt) && a === Ci)) {
      S = Et;
      var R =
        u && O === _ && _.visualViewport
          ? _.visualViewport.width
          : // $FlowFixMe[prop-missing]
            O[L];
      (m -= R - i.width), (m *= l ? 1 : -1);
    }
  }
  var P = Object.assign(
      {
        position: o,
      },
      c && Ip
    ),
    N =
      h === !0
        ? Rp(
            {
              x: m,
              y: b,
            },
            lt(n)
          )
        : {
            x: m,
            y: b,
          };
  if (((m = N.x), (b = N.y), l)) {
    var j;
    return Object.assign(
      {},
      P,
      ((j = {}),
      (j[M] = w ? '0' : ''),
      (j[S] = y ? '0' : ''),
      (j.transform =
        (_.devicePixelRatio || 1) <= 1
          ? 'translate(' + m + 'px, ' + b + 'px)'
          : 'translate3d(' + m + 'px, ' + b + 'px, 0)'),
      j)
    );
  }
  return Object.assign(
    {},
    P,
    ((e = {}), (e[M] = w ? b + 'px' : ''), (e[S] = y ? m + 'px' : ''), (e.transform = ''), e)
  );
}
function Dp(t) {
  var e = t.state,
    n = t.options,
    i = n.gpuAcceleration,
    r = i === void 0 ? !0 : i,
    a = n.adaptive,
    s = a === void 0 ? !0 : a,
    o = n.roundOffsets,
    l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== 'production') {
    var c = Ot(e.elements.popper).transitionProperty || '';
    s &&
      ['transform', 'top', 'right', 'bottom', 'left'].some(function (u) {
        return c.indexOf(u) >= 0;
      }) &&
      console.warn(
        [
          'Popper: Detected CSS transitions on at least one of the following',
          'CSS properties: "transform", "top", "right", "bottom", "left".',
          `

`,
          'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
          'for smooth transitions, or remove these properties from the CSS',
          'transition declaration on the popper element if only transitioning',
          'opacity or background-color for example.',
          `

`,
          'We recommend using the popper element as a wrapper around an inner',
          'element that can have any CSS property transitioned for animations.',
        ].join(' ')
      );
  }
  var h = {
    placement: kt(e.placement),
    variation: Nn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: r,
    isFixed: e.options.strategy === 'fixed',
  };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      ko(
        Object.assign({}, h, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: s,
          roundOffsets: l,
        })
      )
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        ko(
          Object.assign({}, h, {
            offsets: e.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      'data-popper-placement': e.placement,
    }));
}
const Ap = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: Dp,
  data: {},
};
var Xi = {
  passive: !0,
};
function Tp(t) {
  var e = t.state,
    n = t.instance,
    i = t.options,
    r = i.scroll,
    a = r === void 0 ? !0 : r,
    s = i.resize,
    o = s === void 0 ? !0 : s,
    l = lt(e.elements.popper),
    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    a &&
      c.forEach(function (h) {
        h.addEventListener('scroll', n.update, Xi);
      }),
    o && l.addEventListener('resize', n.update, Xi),
    function () {
      a &&
        c.forEach(function (h) {
          h.removeEventListener('scroll', n.update, Xi);
        }),
        o && l.removeEventListener('resize', n.update, Xi);
    }
  );
}
const Pp = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: Tp,
  data: {},
};
var Hp = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom',
};
function cr(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return Hp[e];
  });
}
var Vp = {
  start: 'end',
  end: 'start',
};
function Oo(t) {
  return t.replace(/start|end/g, function (e) {
    return Vp[e];
  });
}
function bs(t) {
  var e = lt(t),
    n = e.pageXOffset,
    i = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: i,
  };
}
function ys(t) {
  return Bn(rn(t)).left + bs(t).scrollLeft;
}
function Bp(t, e) {
  var n = lt(t),
    i = rn(t),
    r = n.visualViewport,
    a = i.clientWidth,
    s = i.clientHeight,
    o = 0,
    l = 0;
  if (r) {
    (a = r.width), (s = r.height);
    var c = Pd();
    (c || (!c && e === 'fixed')) && ((o = r.offsetLeft), (l = r.offsetTop));
  }
  return {
    width: a,
    height: s,
    x: o + ys(t),
    y: l,
  };
}
function Np(t) {
  var e,
    n = rn(t),
    i = bs(t),
    r = (e = t.ownerDocument) == null ? void 0 : e.body,
    a = gn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    s = gn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -i.scrollLeft + ys(t),
    l = -i.scrollTop;
  return (
    Ot(r || n).direction === 'rtl' && (o += gn(n.clientWidth, r ? r.clientWidth : 0) - a),
    {
      width: a,
      height: s,
      x: o,
      y: l,
    }
  );
}
function xs(t) {
  var e = Ot(t),
    n = e.overflow,
    i = e.overflowX,
    r = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + i);
}
function Fd(t) {
  return ['html', 'body', '#document'].indexOf(Pt(t)) >= 0
    ? t.ownerDocument.body
    : st(t) && xs(t)
    ? t
    : Fd(ia(t));
}
function ui(t, e) {
  var n;
  e === void 0 && (e = []);
  var i = Fd(t),
    r = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
    a = lt(i),
    s = r ? [a].concat(a.visualViewport || [], xs(i) ? i : []) : i,
    o = e.concat(s);
  return r
    ? o
    : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      o.concat(ui(ia(s)));
}
function Pa(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function Fp(t, e) {
  var n = Bn(t, !1, e === 'fixed');
  return (
    (n.top = n.top + t.clientTop),
    (n.left = n.left + t.clientLeft),
    (n.bottom = n.top + t.clientHeight),
    (n.right = n.left + t.clientWidth),
    (n.width = t.clientWidth),
    (n.height = t.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Lo(t, e, n) {
  return e === Ad ? Pa(Bp(t, n)) : yn(e) ? Fp(e, n) : Pa(Np(rn(t)));
}
function $p(t) {
  var e = ui(ia(t)),
    n = ['absolute', 'fixed'].indexOf(Ot(t).position) >= 0,
    i = n && st(t) ? Bi(t) : t;
  return yn(i)
    ? e.filter(function (r) {
        return yn(r) && Hd(r, i) && Pt(r) !== 'body';
      })
    : [];
}
function jp(t, e, n, i) {
  var r = e === 'clippingParents' ? $p(t) : [].concat(e),
    a = [].concat(r, [n]),
    s = a[0],
    o = a.reduce(function (l, c) {
      var h = Lo(t, c, i);
      return (
        (l.top = gn(h.top, l.top)),
        (l.right = zr(h.right, l.right)),
        (l.bottom = zr(h.bottom, l.bottom)),
        (l.left = gn(h.left, l.left)),
        l
      );
    }, Lo(t, s, i));
  return (
    (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o
  );
}
function $d(t) {
  var e = t.reference,
    n = t.element,
    i = t.placement,
    r = i ? kt(i) : null,
    a = i ? Nn(i) : null,
    s = e.x + e.width / 2 - n.width / 2,
    o = e.y + e.height / 2 - n.height / 2,
    l;
  switch (r) {
    case Je:
      l = {
        x: s,
        y: e.y - n.height,
      };
      break;
    case wt:
      l = {
        x: s,
        y: e.y + e.height,
      };
      break;
    case Et:
      l = {
        x: e.x + e.width,
        y: o,
      };
      break;
    case et:
      l = {
        x: e.x - n.width,
        y: o,
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y,
      };
  }
  var c = r ? vs(r) : null;
  if (c != null) {
    var h = c === 'y' ? 'height' : 'width';
    switch (a) {
      case Hn:
        l[c] = l[c] - (e[h] / 2 - n[h] / 2);
        break;
      case Ci:
        l[c] = l[c] + (e[h] / 2 - n[h] / 2);
        break;
    }
  }
  return l;
}
function _i(t, e) {
  e === void 0 && (e = {});
  var n = e,
    i = n.placement,
    r = i === void 0 ? t.placement : i,
    a = n.strategy,
    s = a === void 0 ? t.strategy : a,
    o = n.boundary,
    l = o === void 0 ? dp : o,
    c = n.rootBoundary,
    h = c === void 0 ? Ad : c,
    u = n.elementContext,
    p = u === void 0 ? Qn : u,
    m = n.altBoundary,
    g = m === void 0 ? !1 : m,
    b = n.padding,
    v = b === void 0 ? 0 : b,
    y = Bd(typeof v != 'number' ? v : Nd(v, Vi)),
    w = p === Qn ? hp : Qn,
    S = t.rects.popper,
    M = t.elements[g ? w : p],
    _ = jp(yn(M) ? M : M.contextElement || rn(t.elements.popper), l, h, s),
    O = Bn(t.elements.reference),
    C = $d({
      reference: O,
      element: S,
      strategy: 'absolute',
      placement: r,
    }),
    L = Pa(Object.assign({}, S, C)),
    T = p === Qn ? L : O,
    R = {
      top: _.top - T.top + y.top,
      bottom: T.bottom - _.bottom + y.bottom,
      left: _.left - T.left + y.left,
      right: T.right - _.right + y.right,
    },
    P = t.modifiersData.offset;
  if (p === Qn && P) {
    var N = P[r];
    Object.keys(R).forEach(function (j) {
      var q = [Et, wt].indexOf(j) >= 0 ? 1 : -1,
        F = [Je, wt].indexOf(j) >= 0 ? 'y' : 'x';
      R[j] += N[F] * q;
    });
  }
  return R;
}
function Wp(t, e) {
  e === void 0 && (e = {});
  var n = e,
    i = n.placement,
    r = n.boundary,
    a = n.rootBoundary,
    s = n.padding,
    o = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Td : l,
    h = Nn(i),
    u = h
      ? o
        ? So
        : So.filter(function (g) {
            return Nn(g) === h;
          })
      : Vi,
    p = u.filter(function (g) {
      return c.indexOf(g) >= 0;
    });
  p.length === 0 &&
    ((p = u),
    process.env.NODE_ENV !== 'production' &&
      console.error(
        [
          'Popper: The `allowedAutoPlacements` option did not allow any',
          'placements. Ensure the `placement` option matches the variation',
          'of the allowed placements.',
          'For example, "auto" cannot be used to allow "bottom-start".',
          'Use "auto-start" instead.',
        ].join(' ')
      ));
  var m = p.reduce(function (g, b) {
    return (
      (g[b] = _i(t, {
        placement: b,
        boundary: r,
        rootBoundary: a,
        padding: s,
      })[kt(b)]),
      g
    );
  }, {});
  return Object.keys(m).sort(function (g, b) {
    return m[g] - m[b];
  });
}
function Xp(t) {
  if (kt(t) === na) return [];
  var e = cr(t);
  return [Oo(t), e, Oo(e)];
}
function Yp(t) {
  var e = t.state,
    n = t.options,
    i = t.name;
  if (!e.modifiersData[i]._skip) {
    for (
      var r = n.mainAxis,
        a = r === void 0 ? !0 : r,
        s = n.altAxis,
        o = s === void 0 ? !0 : s,
        l = n.fallbackPlacements,
        c = n.padding,
        h = n.boundary,
        u = n.rootBoundary,
        p = n.altBoundary,
        m = n.flipVariations,
        g = m === void 0 ? !0 : m,
        b = n.allowedAutoPlacements,
        v = e.options.placement,
        y = kt(v),
        w = y === v,
        S = l || (w || !g ? [cr(v)] : Xp(v)),
        M = [v].concat(S).reduce(function ($, W) {
          return $.concat(
            kt(W) === na
              ? Wp(e, {
                  placement: W,
                  boundary: h,
                  rootBoundary: u,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: b,
                })
              : W
          );
        }, []),
        _ = e.rects.reference,
        O = e.rects.popper,
        C = /* @__PURE__ */ new Map(),
        L = !0,
        T = M[0],
        R = 0;
      R < M.length;
      R++
    ) {
      var P = M[R],
        N = kt(P),
        j = Nn(P) === Hn,
        q = [Je, wt].indexOf(N) >= 0,
        F = q ? 'width' : 'height',
        U = _i(e, {
          placement: P,
          boundary: h,
          rootBoundary: u,
          altBoundary: p,
          padding: c,
        }),
        X = q ? (j ? Et : et) : j ? wt : Je;
      _[F] > O[F] && (X = cr(X));
      var ue = cr(X),
        _e = [];
      if (
        (a && _e.push(U[N] <= 0),
        o && _e.push(U[X] <= 0, U[ue] <= 0),
        _e.every(function ($) {
          return $;
        }))
      ) {
        (T = P), (L = !1);
        break;
      }
      C.set(P, _e);
    }
    if (L)
      for (
        var fe = g ? 3 : 1,
          Re = function (W) {
            var z = M.find(function (te) {
              var D = C.get(te);
              if (D)
                return D.slice(0, W).every(function (Me) {
                  return Me;
                });
            });
            if (z) return (T = z), 'break';
          },
          B = fe;
        B > 0;
        B--
      ) {
        var V = Re(B);
        if (V === 'break') break;
      }
    e.placement !== T && ((e.modifiersData[i]._skip = !0), (e.placement = T), (e.reset = !0));
  }
}
const Up = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: Yp,
  requiresIfExists: ['offset'],
  data: {
    _skip: !1,
  },
};
function Io(t, e, n) {
  return (
    n === void 0 &&
      (n = {
        x: 0,
        y: 0,
      }),
    {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x,
    }
  );
}
function Ro(t) {
  return [Je, Et, wt, et].some(function (e) {
    return t[e] >= 0;
  });
}
function qp(t) {
  var e = t.state,
    n = t.name,
    i = e.rects.reference,
    r = e.rects.popper,
    a = e.modifiersData.preventOverflow,
    s = _i(e, {
      elementContext: 'reference',
    }),
    o = _i(e, {
      altBoundary: !0,
    }),
    l = Io(s, i),
    c = Io(o, r, a),
    h = Ro(l),
    u = Ro(c);
  (e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: h,
    hasPopperEscaped: u,
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      'data-popper-reference-hidden': h,
      'data-popper-escaped': u,
    }));
}
const Gp = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: qp,
};
function Kp(t, e, n) {
  var i = kt(t),
    r = [et, Je].indexOf(i) >= 0 ? -1 : 1,
    a =
      typeof n == 'function'
        ? n(
            Object.assign({}, e, {
              placement: t,
            })
          )
        : n,
    s = a[0],
    o = a[1];
  return (
    (s = s || 0),
    (o = (o || 0) * r),
    [et, Et].indexOf(i) >= 0
      ? {
          x: o,
          y: s,
        }
      : {
          x: s,
          y: o,
        }
  );
}
function Zp(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    r = n.offset,
    a = r === void 0 ? [0, 0] : r,
    s = Td.reduce(function (h, u) {
      return (h[u] = Kp(u, e.rects, a)), h;
    }, {}),
    o = s[e.placement],
    l = o.x,
    c = o.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l), (e.modifiersData.popperOffsets.y += c)),
    (e.modifiersData[i] = s);
}
const Qp = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: Zp,
};
function Jp(t) {
  var e = t.state,
    n = t.name;
  e.modifiersData[n] = $d({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: 'absolute',
    placement: e.placement,
  });
}
const em = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: Jp,
  data: {},
};
function tm(t) {
  return t === 'x' ? 'y' : 'x';
}
function nm(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    r = n.mainAxis,
    a = r === void 0 ? !0 : r,
    s = n.altAxis,
    o = s === void 0 ? !1 : s,
    l = n.boundary,
    c = n.rootBoundary,
    h = n.altBoundary,
    u = n.padding,
    p = n.tether,
    m = p === void 0 ? !0 : p,
    g = n.tetherOffset,
    b = g === void 0 ? 0 : g,
    v = _i(e, {
      boundary: l,
      rootBoundary: c,
      padding: u,
      altBoundary: h,
    }),
    y = kt(e.placement),
    w = Nn(e.placement),
    S = !w,
    M = vs(y),
    _ = tm(M),
    O = e.modifiersData.popperOffsets,
    C = e.rects.reference,
    L = e.rects.popper,
    T =
      typeof b == 'function'
        ? b(
            Object.assign({}, e.rects, {
              placement: e.placement,
            })
          )
        : b,
    R =
      typeof T == 'number'
        ? {
            mainAxis: T,
            altAxis: T,
          }
        : Object.assign(
            {
              mainAxis: 0,
              altAxis: 0,
            },
            T
          ),
    P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    N = {
      x: 0,
      y: 0,
    };
  if (O) {
    if (a) {
      var j,
        q = M === 'y' ? Je : et,
        F = M === 'y' ? wt : Et,
        U = M === 'y' ? 'height' : 'width',
        X = O[M],
        ue = X + v[q],
        _e = X - v[F],
        fe = m ? -L[U] / 2 : 0,
        Re = w === Hn ? C[U] : L[U],
        B = w === Hn ? -L[U] : -C[U],
        V = e.elements.arrow,
        $ =
          m && V
            ? gs(V)
            : {
                width: 0,
                height: 0,
              },
        W = e.modifiersData['arrow#persistent']
          ? e.modifiersData['arrow#persistent'].padding
          : Vd(),
        z = W[q],
        te = W[F],
        D = hi(0, C[U], $[U]),
        Me = S ? C[U] / 2 - fe - D - z - R.mainAxis : Re - D - z - R.mainAxis,
        ae = S ? -C[U] / 2 + fe + D + te + R.mainAxis : B + D + te + R.mainAxis,
        xe = e.elements.arrow && Bi(e.elements.arrow),
        J = xe ? (M === 'y' ? xe.clientTop || 0 : xe.clientLeft || 0) : 0,
        Be = (j = P == null ? void 0 : P[M]) != null ? j : 0,
        Ct = X + Me - Be - J,
        ee = X + ae - Be,
        Ee = hi(m ? zr(ue, Ct) : ue, X, m ? gn(_e, ee) : _e);
      (O[M] = Ee), (N[M] = Ee - X);
    }
    if (o) {
      var ne,
        ke = M === 'x' ? Je : et,
        dt = M === 'x' ? wt : Et,
        ge = O[_],
        _t = _ === 'y' ? 'height' : 'width',
        ht = ge + v[ke],
        je = ge - v[dt],
        Y = [Je, et].indexOf(y) !== -1,
        ve = (ne = P == null ? void 0 : P[_]) != null ? ne : 0,
        Ht = Y ? ht : ge - C[_t] - L[_t] - ve + R.altAxis,
        ut = Y ? ge + C[_t] + L[_t] - ve - R.altAxis : je,
        nt = m && Y ? Sp(Ht, ge, ut) : hi(m ? Ht : ht, ge, m ? ut : je);
      (O[_] = nt), (N[_] = nt - ge);
    }
    e.modifiersData[i] = N;
  }
}
const im = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: nm,
  requiresIfExists: ['offset'],
};
function rm(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop,
  };
}
function am(t) {
  return t === lt(t) || !st(t) ? bs(t) : rm(t);
}
function sm(t) {
  var e = t.getBoundingClientRect(),
    n = Vn(e.width) / t.offsetWidth || 1,
    i = Vn(e.height) / t.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function om(t, e, n) {
  n === void 0 && (n = !1);
  var i = st(e),
    r = st(e) && sm(e),
    a = rn(e),
    s = Bn(t, r, n),
    o = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    l = {
      x: 0,
      y: 0,
    };
  return (
    (i || (!i && !n)) &&
      ((Pt(e) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        xs(a)) &&
        (o = am(e)),
      st(e) ? ((l = Bn(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop)) : a && (l.x = ys(a))),
    {
      x: s.left + o.scrollLeft - l.x,
      y: s.top + o.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function lm(t) {
  var e = /* @__PURE__ */ new Map(),
    n = /* @__PURE__ */ new Set(),
    i = [];
  t.forEach(function (a) {
    e.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function (o) {
      if (!n.has(o)) {
        var l = e.get(o);
        l && r(l);
      }
    }),
      i.push(a);
  }
  return (
    t.forEach(function (a) {
      n.has(a.name) || r(a);
    }),
    i
  );
}
function cm(t) {
  var e = lm(t);
  return Aa.reduce(function (n, i) {
    return n.concat(
      e.filter(function (r) {
        return r.phase === i;
      })
    );
  }, []);
}
function dm(t) {
  var e;
  return function () {
    return (
      e ||
        (e = new Promise(function (n) {
          Promise.resolve().then(function () {
            (e = void 0), n(t());
          });
        })),
      e
    );
  };
}
function Yt(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return [].concat(n).reduce(function (r, a) {
    return r.replace(/%s/, a);
  }, t);
}
var on = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
  hm = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
  Do = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function um(t) {
  t.forEach(function (e) {
    []
      .concat(Object.keys(e), Do)
      .filter(function (n, i, r) {
        return r.indexOf(n) === i;
      })
      .forEach(function (n) {
        switch (n) {
          case 'name':
            typeof e.name != 'string' &&
              console.error(
                Yt(on, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"')
              );
            break;
          case 'enabled':
            typeof e.enabled != 'boolean' &&
              console.error(
                Yt(on, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"')
              );
            break;
          case 'phase':
            Aa.indexOf(e.phase) < 0 &&
              console.error(
                Yt(on, e.name, '"phase"', 'either ' + Aa.join(', '), '"' + String(e.phase) + '"')
              );
            break;
          case 'fn':
            typeof e.fn != 'function' &&
              console.error(Yt(on, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
            break;
          case 'effect':
            e.effect != null &&
              typeof e.effect != 'function' &&
              console.error(Yt(on, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
            break;
          case 'requires':
            e.requires != null &&
              !Array.isArray(e.requires) &&
              console.error(
                Yt(on, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"')
              );
            break;
          case 'requiresIfExists':
            Array.isArray(e.requiresIfExists) ||
              console.error(
                Yt(
                  on,
                  e.name,
                  '"requiresIfExists"',
                  '"array"',
                  '"' + String(e.requiresIfExists) + '"'
                )
              );
            break;
          case 'options':
          case 'data':
            break;
          default:
            console.error(
              'PopperJS: an invalid property has been provided to the "' +
                e.name +
                '" modifier, valid properties are ' +
                Do.map(function (i) {
                  return '"' + i + '"';
                }).join(', ') +
                '; but "' +
                n +
                '" was provided.'
            );
        }
        e.requires &&
          e.requires.forEach(function (i) {
            t.find(function (r) {
              return r.name === i;
            }) == null && console.error(Yt(hm, String(e.name), i, i));
          });
      });
  });
}
function fm(t, e) {
  var n = /* @__PURE__ */ new Set();
  return t.filter(function (i) {
    var r = e(i);
    if (!n.has(r)) return n.add(r), !0;
  });
}
function pm(t) {
  var e = t.reduce(function (n, i) {
    var r = n[i.name];
    return (
      (n[i.name] = r
        ? Object.assign({}, r, i, {
            options: Object.assign({}, r.options, i.options),
            data: Object.assign({}, r.data, i.data),
          })
        : i),
      n
    );
  }, {});
  return Object.keys(e).map(function (n) {
    return e[n];
  });
}
var Ao =
    'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
  mm =
    'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
  To = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute',
  };
function Po() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return !e.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == 'function');
  });
}
function gm(t) {
  t === void 0 && (t = {});
  var e = t,
    n = e.defaultModifiers,
    i = n === void 0 ? [] : n,
    r = e.defaultOptions,
    a = r === void 0 ? To : r;
  return function (o, l, c) {
    c === void 0 && (c = a);
    var h = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, To, a),
        modifiersData: {},
        elements: {
          reference: o,
          popper: l,
        },
        attributes: {},
        styles: {},
      },
      u = [],
      p = !1,
      m = {
        state: h,
        setOptions: function (y) {
          var w = typeof y == 'function' ? y(h.options) : y;
          b(),
            (h.options = Object.assign({}, a, h.options, w)),
            (h.scrollParents = {
              reference: yn(o) ? ui(o) : o.contextElement ? ui(o.contextElement) : [],
              popper: ui(l),
            });
          var S = cm(pm([].concat(i, h.options.modifiers)));
          if (
            ((h.orderedModifiers = S.filter(function (P) {
              return P.enabled;
            })),
            process.env.NODE_ENV !== 'production')
          ) {
            var M = fm([].concat(S, h.options.modifiers), function (P) {
              var N = P.name;
              return N;
            });
            if ((um(M), kt(h.options.placement) === na)) {
              var _ = h.orderedModifiers.find(function (P) {
                var N = P.name;
                return N === 'flip';
              });
              _ ||
                console.error(
                  [
                    'Popper: "auto" placements require the "flip" modifier be',
                    'present and enabled to work.',
                  ].join(' ')
                );
            }
            var O = Ot(l),
              C = O.marginTop,
              L = O.marginRight,
              T = O.marginBottom,
              R = O.marginLeft;
            [C, L, T, R].some(function (P) {
              return parseFloat(P);
            }) &&
              console.warn(
                [
                  'Popper: CSS "margin" styles cannot be used to apply padding',
                  'between the popper and its reference element or boundary.',
                  'To replicate margin, use the `offset` modifier, as well as',
                  'the `padding` option in the `preventOverflow` and `flip`',
                  'modifiers.',
                ].join(' ')
              );
          }
          return g(), m.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function () {
          if (!p) {
            var y = h.elements,
              w = y.reference,
              S = y.popper;
            if (!Po(w, S)) {
              process.env.NODE_ENV !== 'production' && console.error(Ao);
              return;
            }
            (h.rects = {
              reference: om(w, Bi(S), h.options.strategy === 'fixed'),
              popper: gs(S),
            }),
              (h.reset = !1),
              (h.placement = h.options.placement),
              h.orderedModifiers.forEach(function (P) {
                return (h.modifiersData[P.name] = Object.assign({}, P.data));
              });
            for (var M = 0, _ = 0; _ < h.orderedModifiers.length; _++) {
              if (process.env.NODE_ENV !== 'production' && ((M += 1), M > 100)) {
                console.error(mm);
                break;
              }
              if (h.reset === !0) {
                (h.reset = !1), (_ = -1);
                continue;
              }
              var O = h.orderedModifiers[_],
                C = O.fn,
                L = O.options,
                T = L === void 0 ? {} : L,
                R = O.name;
              typeof C == 'function' &&
                (h =
                  C({
                    state: h,
                    options: T,
                    name: R,
                    instance: m,
                  }) || h);
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: dm(function () {
          return new Promise(function (v) {
            m.forceUpdate(), v(h);
          });
        }),
        destroy: function () {
          b(), (p = !0);
        },
      };
    if (!Po(o, l)) return process.env.NODE_ENV !== 'production' && console.error(Ao), m;
    m.setOptions(c).then(function (v) {
      !p && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function g() {
      h.orderedModifiers.forEach(function (v) {
        var y = v.name,
          w = v.options,
          S = w === void 0 ? {} : w,
          M = v.effect;
        if (typeof M == 'function') {
          var _ = M({
              state: h,
              name: y,
              instance: m,
              options: S,
            }),
            O = function () {};
          u.push(_ || O);
        }
      });
    }
    function b() {
      u.forEach(function (v) {
        return v();
      }),
        (u = []);
    }
    return m;
  };
}
var vm = [Pp, em, Ap, Cp, Qp, Up, im, Lp, Gp],
  bm = /* @__PURE__ */ gm({
    defaultModifiers: vm,
  }),
  ym = typeof Element < 'u',
  xm = typeof Map == 'function',
  wm = typeof Set == 'function',
  Em = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function dr(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == 'object' && typeof e == 'object') {
    if (t.constructor !== e.constructor) return !1;
    var n, i, r;
    if (Array.isArray(t)) {
      if (((n = t.length), n != e.length)) return !1;
      for (i = n; i-- !== 0; ) if (!dr(t[i], e[i])) return !1;
      return !0;
    }
    var a;
    if (xm && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size) return !1;
      for (a = t.entries(); !(i = a.next()).done; ) if (!e.has(i.value[0])) return !1;
      for (a = t.entries(); !(i = a.next()).done; )
        if (!dr(i.value[1], e.get(i.value[0]))) return !1;
      return !0;
    }
    if (wm && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size) return !1;
      for (a = t.entries(); !(i = a.next()).done; ) if (!e.has(i.value[0])) return !1;
      return !0;
    }
    if (Em && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (((n = t.length), n != e.length)) return !1;
      for (i = n; i-- !== 0; ) if (t[i] !== e[i]) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
    if (
      t.valueOf !== Object.prototype.valueOf &&
      typeof t.valueOf == 'function' &&
      typeof e.valueOf == 'function'
    )
      return t.valueOf() === e.valueOf();
    if (
      t.toString !== Object.prototype.toString &&
      typeof t.toString == 'function' &&
      typeof e.toString == 'function'
    )
      return t.toString() === e.toString();
    if (((r = Object.keys(t)), (n = r.length), n !== Object.keys(e).length)) return !1;
    for (i = n; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, r[i])) return !1;
    if (ym && t instanceof Element) return !1;
    for (i = n; i-- !== 0; )
      if (
        !((r[i] === '_owner' || r[i] === '__v' || r[i] === '__o') && t.$$typeof) &&
        !dr(t[r[i]], e[r[i]])
      )
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var Cm = function (e, n) {
  try {
    return dr(e, n);
  } catch (i) {
    if ((i.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1;
    throw i;
  }
};
const _m = /* @__PURE__ */ is(Cm);
var Mm = [],
  Sm = function (e, n, i) {
    i === void 0 && (i = {});
    var r = Z.useRef(null),
      a = {
        onFirstUpdate: i.onFirstUpdate,
        placement: i.placement || 'bottom',
        strategy: i.strategy || 'absolute',
        modifiers: i.modifiers || Mm,
      },
      s = Z.useState({
        styles: {
          popper: {
            position: a.strategy,
            left: '0',
            top: '0',
          },
          arrow: {
            position: 'absolute',
          },
        },
        attributes: {},
      }),
      o = s[0],
      l = s[1],
      c = Z.useMemo(function () {
        return {
          name: 'updateState',
          enabled: !0,
          phase: 'write',
          fn: function (m) {
            var g = m.state,
              b = Object.keys(g.elements);
            n1.flushSync(function () {
              l({
                styles: _o(
                  b.map(function (v) {
                    return [v, g.styles[v] || {}];
                  })
                ),
                attributes: _o(
                  b.map(function (v) {
                    return [v, g.attributes[v]];
                  })
                ),
              });
            });
          },
          requires: ['computeStyles'],
        };
      }, []),
      h = Z.useMemo(
        function () {
          var p = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [
              c,
              {
                name: 'applyStyles',
                enabled: !1,
              },
            ]),
          };
          return _m(r.current, p) ? r.current || p : ((r.current = p), p);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c]
      ),
      u = Z.useRef();
    return (
      Mo(
        function () {
          u.current && u.current.setOptions(h);
        },
        [h]
      ),
      Mo(
        function () {
          if (!(e == null || n == null)) {
            var p = i.createPopper || bm,
              m = p(e, n, h);
            return (
              (u.current = m),
              function () {
                m.destroy(), (u.current = null);
              }
            );
          }
        },
        [e, n, i.createPopper]
      ),
      {
        state: u.current ? u.current.state : null,
        styles: o.styles,
        attributes: o.attributes,
        update: u.current ? u.current.update : null,
        forceUpdate: u.current ? u.current.forceUpdate : null,
      }
    );
  };
function zm({ children: t, container: e }) {
  let n = rt(e),
    i = rt(document.createElement('div'));
  return (
    Fe(() => {
      n.current || (n.current = document.body);
      let r = i.current;
      return (
        r.setAttribute('data-cf-ui-portal', ''),
        n.current.appendChild(r),
        () => {
          n.current && n.current.removeChild(r);
        }
      );
    }, []),
    i.current ? i1(t, i.current) : null
  );
}
var km = Object.defineProperty,
  Om = Object.defineProperties,
  Lm = Object.getOwnPropertyDescriptors,
  kr = Object.getOwnPropertySymbols,
  jd = Object.prototype.hasOwnProperty,
  Wd = Object.prototype.propertyIsEnumerable,
  Ho = (t, e, n) =>
    e in t ? km(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  pn = (t, e) => {
    for (var n in e || (e = {})) jd.call(e, n) && Ho(t, n, e[n]);
    if (kr) for (var n of kr(e)) Wd.call(e, n) && Ho(t, n, e[n]);
    return t;
  },
  Or = (t, e) => Om(t, Lm(e)),
  Im = (t, e) => {
    var n = {};
    for (var i in t) jd.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && kr) for (var i of kr(t)) e.indexOf(i) < 0 && Wd.call(t, i) && (n[i] = t[i]);
    return n;
  },
  Rm = (t, e, n) =>
    new Promise((i, r) => {
      var a = (l) => {
          try {
            o(n.next(l));
          } catch (c) {
            r(c);
          }
        },
        s = (l) => {
          try {
            o(n.throw(l));
          } catch (c) {
            r(c);
          }
        },
        o = (l) => (l.done ? i(l.value) : Promise.resolve(l.value).then(a, s));
      o((n = n.apply(t, e)).next());
    }),
  Xd = d.createContext(void 0),
  Yd = () => {
    let t = d.useContext(Xd);
    if (t === void 0)
      throw new Error('usePopoverContext must be used within a PopoverContextProvider');
    return t;
  },
  Dm = Xd.Provider;
function Am(t) {
  let {
      children: e,
      isOpen: n,
      placement: i = 'bottom-start',
      isFullWidth: r = !1,
      isAutoalignmentEnabled: a = !0,
      usePortal: s = !0,
      closeOnBlur: o = !0,
      closeOnEsc: l = !0,
      onClose: c,
      autoFocus: h = !0,
      id: u,
      offset: p = [1, 4],
      renderOnlyWhenOpen: m = !0,
    } = t,
    [g, b] = Xe(null),
    [v, y] = Xe(null),
    {
      attributes: w,
      update: S,
      styles: M,
    } = Sm(g, v, {
      placement: i,
      modifiers: [
        { name: 'offset', options: { offset: p } },
        Or(pn({}, Tm), { enabled: r }),
        { name: 'preventOverflow', enabled: a, options: { mainAxis: !0 } },
        { name: 'flip', enabled: a },
      ],
    });
  Fe(() => {
    n && h && v && v.focus({ preventScroll: !0 });
  }, [n, v]),
    Fe(() => {
      Rm(this, null, function* () {
        n && S && (yield S());
      });
    }, [n, S]);
  let _ = Wt(void 0, 'popover-content'),
    O = u || _,
    C = de(() => {
      c == null || c(), setTimeout(() => (g == null ? void 0 : g.focus({ preventScroll: !0 })), 0);
    }, [c, g]),
    L = rt(!1),
    T = Ai(
      () => ({
        isOpen: !!n,
        usePortal: s,
        renderOnlyWhenOpen: m,
        getTriggerProps: (R = {}, P = null) => ({
          onMouseDown: (N) => {
            var j;
            (L.current = !0), (j = R.onMouseDown) == null || j.call(R, N);
          },
          onMouseUp: (N) => {
            var j;
            (L.current = !1), (j = R.onMouseUp) == null || j.call(R, N);
          },
          ref: Pn(b, P),
          ['aria-expanded']: !!n,
          ['aria-controls']: O,
        }),
        getPopoverProps: (R = {}, P = null) =>
          Or(pn({}, w.popper), {
            style: pn(pn({}, R.style || {}), M.popper),
            ref: Pn(y, P),
            id: O,
            onBlur: (N) => {
              if ((R.onBlur && R.onBlur(N), !o)) return;
              let j = document.activeElement,
                q = N.relatedTarget || j,
                F = v === q || (v == null ? void 0 : v.contains(q)),
                U = g === q || (g == null ? void 0 : g.contains(q)) || L.current;
              F || U || c == null || c();
            },
            onKeyDown: (N) => {
              R.onKeyDown && R.onKeyDown(N), l && N.key === 'Escape' && C();
            },
          }),
      }),
      [n, m, w, M, s, O, l, o, v, g, C, c]
    );
  return d.createElement(Dm, { value: T }, e);
}
var Tm = {
    name: 'sameWidth',
    enabled: !0,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({ state: t }) => {
      t.styles.popper.width = `${t.rects.reference.width}px`;
    },
    effect:
      ({ state: t }) =>
      () => {
        let e = t.elements.reference;
        t.elements.popper.style.width = `${e.offsetWidth}px`;
      },
  },
  Pm = (t) => ({
    container: I({
      display: t ? 'initial' : 'none',
      background: f.colorWhite,
      border: 0,
      borderRadius: f.borderRadiusMedium,
      boxShadow: f.boxShadowDefault,
      zIndex: f.zIndexDropdown,
      '&:focus': { boxShadow: f.glowPrimary, outline: 'none' },
      '&:focus:not(:focus-visible)': { boxShadow: f.boxShadowDefault },
    }),
  }),
  Hm = (t, e) => {
    let n = t,
      { children: i, className: r, testId: a = 'cf-ui-popover-content', role: s = 'dialog' } = n,
      o = Im(n, ['children', 'className', 'testId', 'role']),
      { isOpen: l, renderOnlyWhenOpen: c, getPopoverProps: h, usePortal: u } = Yd(),
      p = Pm(l),
      m = d.createElement(
        'div',
        Or(pn(pn({}, o), h(o, e)), {
          className: Q(p.container, r),
          'data-test-id': a,
          tabIndex: -1,
          role: s,
          'data-position-absolute': !0,
        }),
        i
      );
    return c && !l ? null : u ? d.createElement(zm, null, m) : m;
  },
  Vm = d.forwardRef(Hm),
  Bm = (t) => {
    var e;
    let n = d.Children.only(t.children),
      { getTriggerProps: i } = Yd();
    return d.cloneElement(
      n,
      Or(pn({}, i(n.props, n.ref)), {
        'aria-haspopup': (e = n.props['aria-haspopup']) != null ? e : 'dialog',
      })
    );
  },
  Ni = Am;
Ni.Content = Vm;
Ni.Trigger = Bm;
var Nm = Object.defineProperty,
  Fm = Object.defineProperties,
  $m = Object.getOwnPropertyDescriptors,
  Lr = Object.getOwnPropertySymbols,
  Ud = Object.prototype.hasOwnProperty,
  qd = Object.prototype.propertyIsEnumerable,
  Vo = (t, e, n) =>
    e in t ? Nm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  Ir = (t, e) => {
    for (var n in e || (e = {})) Ud.call(e, n) && Vo(t, n, e[n]);
    if (Lr) for (var n of Lr(e)) qd.call(e, n) && Vo(t, n, e[n]);
    return t;
  },
  Gd = (t, e) => Fm(t, $m(e)),
  Kd = (t, e) => {
    var n = {};
    for (var i in t) Ud.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Lr) for (var i of Lr(t)) e.indexOf(i) < 0 && qd.call(t, i) && (n[i] = t[i]);
    return n;
  },
  jm = ({ variant: t }) => {
    switch (t) {
      case 'positive':
        return { color: f.green600, backgroundColor: f.green200 };
      case 'primary':
        return { color: f.blue600, backgroundColor: f.blue200 };
      case 'negative':
        return { color: f.red600, backgroundColor: f.red200 };
      case 'warning':
        return { color: f.orange600, backgroundColor: f.orange200 };
      case 'secondary':
        return { color: f.gray700, backgroundColor: f.gray200 };
      case 'primary-filled':
        return { color: f.colorWhite, backgroundColor: f.blue600 };
      case 'featured':
        return { color: f.purple600, backgroundColor: f.purple200 };
      default:
        return {};
    }
  },
  Wm = ({ size: t }) => {
    switch (t) {
      case 'small':
        return {
          padding: `0 ${f.spacing2Xs}`,
          lineHeight: f.lineHeightS,
          maxHeight: f.lineHeightS,
        };
      default:
        return { padding: `0 ${f.spacingXs}`, lineHeight: f.lineHeightM, maxHeight: f.lineHeightM };
    }
  },
  Xm = () => ({
    badge: ({ variant: t, size: e }) =>
      I(
        Ir(
          Ir(
            {
              columnGap: f.spacing2Xs,
              alignItems: 'center',
              borderRadius: f.borderRadiusSmall,
              overflow: 'hidden',
              verticalAlign: 'middle',
            },
            jm({ variant: t })
          ),
          Wm({ size: e })
        )
      ),
    badgeIcon: I({ flexShrink: 0 }),
    badgeText: I({
      color: 'currentcolor',
      lineHeight: 'inherit',
      textTransform: 'lowercase',
      '::first-letter': { textTransform: 'uppercase' },
    }),
  }),
  Ym = Object.defineProperty,
  Um = Object.defineProperties,
  qm = Object.getOwnPropertyDescriptors,
  Rr = Object.getOwnPropertySymbols,
  Zd = Object.prototype.hasOwnProperty,
  Qd = Object.prototype.propertyIsEnumerable,
  Bo = (t, e, n) =>
    e in t ? Ym(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  _n = (t, e) => {
    for (var n in e || (e = {})) Zd.call(e, n) && Bo(t, n, e[n]);
    if (Rr) for (var n of Rr(e)) Qd.call(e, n) && Bo(t, n, e[n]);
    return t;
  },
  Mn = (t, e) => Um(t, qm(e)),
  Sn = (t, e) => {
    var n = {};
    for (var i in t) Zd.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Rr) for (var i of Rr(t)) e.indexOf(i) < 0 && Qd.call(t, i) && (n[i] = t[i]);
    return n;
  },
  Gm = 'span';
function Km() {
  return I({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
  });
}
function Zm() {
  return I({ wordBreak: 'break-word' });
}
function Jd(t, e) {
  var n = t,
    {
      fontSize: i = 'fontSizeM',
      fontStack: r = 'fontStackPrimary',
      fontWeight: a = 'fontWeightNormal',
      fontColor: s = 'gray800',
      lineHeight: o = 'lineHeightM',
      children: l,
      isTruncated: c,
      isWordBreak: h,
      as: u,
      className: p,
      margin: m = 'none',
    } = n,
    g = Sn(n, [
      'fontSize',
      'fontStack',
      'fontWeight',
      'fontColor',
      'lineHeight',
      'children',
      'isTruncated',
      'isWordBreak',
      'as',
      'className',
      'margin',
    ]);
  let b = u || Gm;
  return d.createElement(
    Ve,
    Mn(_n({}, g), {
      as: b,
      className: Q(
        I({
          padding: 0,
          fontFamily: f[r],
          fontWeight: f[a],
          color: f[s],
          fontSize: f[i],
          lineHeight: f[o],
        }),
        c ? Km() : null,
        h ? Zm() : null,
        p
      ),
      margin: m,
      ref: e,
    }),
    l
  );
}
Jd.displayName = 'Text';
var Yn = d.forwardRef(Jd),
  Qm = 'span';
function eh(t, e) {
  var n = t,
    { children: i, fontWeight: r = 'fontWeightNormal', testId: a = 'cf-ui-caption' } = n,
    s = Sn(n, ['children', 'fontWeight', 'testId']);
  return d.createElement(
    Yn,
    Mn(
      _n(
        {
          as: Qm,
          testId: a,
          fontSize: 'fontSizeS',
          lineHeight: 'lineHeightS',
          fontColor: 'gray900',
          fontWeight: r,
        },
        s
      ),
      { ref: e }
    ),
    i
  );
}
eh.displayName = 'Caption';
var Jm = d.forwardRef(eh),
  e2 = 'h1';
function th(t, e) {
  var n = t,
    { children: i, testId: r = 'cf-ui-heading' } = n,
    a = Sn(n, ['children', 'testId']);
  return d.createElement(
    Yn,
    Mn(
      _n(
        {
          as: e2,
          testId: r,
          marginBottom: 'spacingM',
          fontWeight: 'fontWeightDemiBold',
          fontColor: 'gray900',
          fontSize: 'fontSizeXl',
          lineHeight: 'lineHeightXl',
        },
        a
      ),
      { ref: e }
    ),
    i
  );
}
th.displayName = 'Heading';
d.forwardRef(th);
var t2 = 'h3';
function nh(t, e) {
  var n = t,
    { children: i, testId: r = 'cf-ui-subheading' } = n,
    a = Sn(n, ['children', 'testId']);
  return d.createElement(
    Yn,
    Mn(
      _n(
        {
          as: t2,
          testId: r,
          marginBottom: 'spacingM',
          fontSize: 'fontSizeL',
          lineHeight: 'lineHeightL',
          fontWeight: 'fontWeightDemiBold',
          fontColor: 'gray900',
        },
        a
      ),
      { ref: e }
    ),
    i
  );
}
nh.displayName = 'Subheading';
d.forwardRef(nh);
var n2 = 'h2';
function ih(t, e) {
  var n = t,
    { children: i, size: r = 'default', testId: a = 'cf-ui-display-text' } = n,
    s = Sn(n, ['children', 'size', 'testId']);
  let o = 'fontSize2Xl',
    l = 'lineHeight2Xl';
  return (
    r === 'large' && ((o = 'fontSize3Xl'), (l = 'lineHeight3Xl')),
    d.createElement(
      Yn,
      Mn(
        _n(
          {
            as: n2,
            testId: a,
            marginBottom: r === 'default' ? 'spacingL' : 'spacingXl',
            fontSize: o,
            lineHeight: l,
            fontColor: 'gray900',
            fontWeight: 'fontWeightDemiBold',
          },
          s
        ),
        { ref: e }
      ),
      i
    )
  );
}
ih.displayName = 'DisplayText';
d.forwardRef(ih);
var i2 = 'h2';
function rh(t, e) {
  var n = t,
    { children: i, className: r, testId: a = 'cf-ui-section-heading' } = n,
    s = Sn(n, ['children', 'className', 'testId']);
  return d.createElement(
    Yn,
    Mn(
      _n(
        {
          as: i2,
          testId: a,
          marginBottom: 'spacingL',
          fontWeight: 'fontWeightDemiBold',
          fontColor: 'gray900',
          fontSize: 'fontSizeS',
          lineHeight: 'lineHeightS',
          className: Q(I({ letterSpacing: f.letterSpacingWide, textTransform: 'uppercase' }), r),
        },
        s
      ),
      { ref: e }
    ),
    i
  );
}
rh.displayName = 'SectionHeading';
d.forwardRef(rh);
var r2 = d.forwardRef((t, e) => {
  var n = t,
    { children: i, testId: r = 'cf-ui-paragraph' } = n,
    a = Sn(n, ['children', 'testId']);
  return d.createElement(
    Yn,
    Mn(_n({ as: 'p', testId: r, marginBottom: 'spacingM', lineHeight: 'lineHeightM' }, a), {
      ref: e,
    }),
    i
  );
});
r2.displayName = 'Paragraph';
var ah = d.forwardRef((t, e) => {
  let n = Xm(),
    i = t,
    {
      children: r,
      variant: a = 'primary',
      size: s = 'default',
      testId: o = 'cf-ui-badge',
      startIcon: l,
      endIcon: c,
      className: h,
    } = i,
    u = Kd(i, ['children', 'variant', 'size', 'testId', 'startIcon', 'endIcon', 'className']),
    p = (m) =>
      d.cloneElement(m, {
        size: 'tiny',
        className: Q(n.badgeIcon, m.props.className),
        variant: a === 'primary-filled' ? 'white' : a,
      });
  return d.createElement(
    Ve,
    Gd(
      Ir(
        {
          as: 'div',
          testId: o,
          display: 'inline-flex',
          className: Q(n.badge({ variant: a, size: s }), h),
        },
        u
      ),
      { ref: e }
    ),
    l && s === 'default' && p(l),
    d.createElement(
      Jm,
      { fontWeight: 'fontWeightMedium', isTruncated: !0, className: n.badgeText },
      r
    ),
    c && s === 'default' && p(c)
  );
});
ah.displayName = 'Badge';
var a2 = {
  published: 'positive',
  draft: 'warning',
  archived: 'secondary',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};
function sh(t, e) {
  let n = t,
    { entityStatus: i, size: r = 'default' } = n,
    a = Kd(n, ['entityStatus', 'size']),
    s = a2[i];
  return d.createElement(ah, Gd(Ir({}, a), { size: r, variant: s, ref: e }), i);
}
sh.displayName = 'EntityStatusBadge';
var s2 = d.forwardRef(sh),
  o2 = Object.defineProperty,
  l2 = Object.defineProperties,
  c2 = Object.getOwnPropertyDescriptors,
  Dr = Object.getOwnPropertySymbols,
  oh = Object.prototype.hasOwnProperty,
  lh = Object.prototype.propertyIsEnumerable,
  No = (t, e, n) =>
    e in t ? o2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  Yi = (t, e) => {
    for (var n in e || (e = {})) oh.call(e, n) && No(t, n, e[n]);
    if (Dr) for (var n of Dr(e)) lh.call(e, n) && No(t, n, e[n]);
    return t;
  },
  Fo = (t, e) => l2(t, c2(e)),
  d2 = (t, e) => {
    var n = {};
    for (var i in t) oh.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Dr) for (var i of Dr(t)) e.indexOf(i) < 0 && lh.call(t, i) && (n[i] = t[i]);
    return n;
  },
  h2 = () => ({
    label: I({
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      border: 0,
    }),
    root: ({ isActive: t, isFocused: e, isHovered: n }) =>
      Q(
        I({
          alignItems: 'center',
          backgroundColor: f.gray100,
          border: 0,
          borderBottomLeftRadius: f.borderRadiusMedium,
          borderRight: `1px solid ${f.gray200}`,
          borderTopLeftRadius: f.borderRadiusMedium,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
          position: 'relative',
          transition: `background-color ${f.transitionDurationDefault} ${f.transitionEasingDefault}`,
          width: f.spacingL,
          '&:hover': { backgroundColor: f.gray200 },
          '&:focus': { boxShadow: f.glowPrimary },
          '&:focus:not(:focus-visible)': { boxShadow: 'unset' },
          '&:focus-visible': { boxShadow: f.glowPrimary },
        }),
        (t || e || n) && I({ backgroundColor: f.gray200, cursor: t ? 'grabbing' : 'grab' })
      ),
  }),
  u2 = 'div';
function f2(t, e) {
  let n = h2(),
    i = t,
    {
      as: r = u2,
      className: a,
      isActive: s,
      isFocused: o,
      isHovered: l,
      label: c,
      onBlur: h,
      onFocus: u,
      onMouseEnter: p,
      onMouseLeave: m,
      testId: g = 'cf-ui-drag-handle',
      style: b,
    } = i,
    v = d2(i, [
      'as',
      'className',
      'isActive',
      'isFocused',
      'isHovered',
      'label',
      'onBlur',
      'onFocus',
      'onMouseEnter',
      'onMouseLeave',
      'testId',
      'style',
    ]),
    [y, w] = Xe(o),
    [S, M] = Xe(l),
    _ = de(
      (R) => {
        w(!0), u && u(R);
      },
      [u]
    ),
    O = de(
      (R) => {
        w(!1), h && h(R);
      },
      [h]
    ),
    C = de(
      (R) => {
        M(!0), p && p(R);
      },
      [p]
    ),
    L = de(
      (R) => {
        M(!1), m && m(R);
      },
      [m]
    ),
    T = {
      className: Q(n.root({ isActive: s, isFocused: y, isHovered: S }), a),
      'data-test-id': g,
      onBlur: O,
      onFocus: _,
      onMouseEnter: C,
      onMouseLeave: L,
      ref: e,
      style: b,
    };
  return r === 'div'
    ? d.createElement(
        'div',
        Fo(Yi(Yi({}, v), T), { role: 'button', tabIndex: 0 }),
        d.createElement(mo, { variant: 'muted' }),
        d.createElement('span', { className: n.label }, c)
      )
    : d.createElement(
        'button',
        Fo(Yi(Yi({}, v), T), { type: 'button' }),
        d.createElement(mo, { variant: 'muted' }),
        d.createElement('span', { className: n.label }, c)
      );
}
var p2 = d.forwardRef(f2),
  m2 = Object.defineProperty,
  g2 = Object.defineProperties,
  v2 = Object.getOwnPropertyDescriptors,
  Ar = Object.getOwnPropertySymbols,
  ch = Object.prototype.hasOwnProperty,
  dh = Object.prototype.propertyIsEnumerable,
  $o = (t, e, n) =>
    e in t ? m2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  qe = (t, e) => {
    for (var n in e || (e = {})) ch.call(e, n) && $o(t, n, e[n]);
    if (Ar) for (var n of Ar(e)) dh.call(e, n) && $o(t, n, e[n]);
    return t;
  },
  Un = (t, e) => g2(t, v2(e)),
  an = (t, e) => {
    var n = {};
    for (var i in t) ch.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Ar) for (var i of Ar(t)) e.indexOf(i) < 0 && dh.call(t, i) && (n[i] = t[i]);
    return n;
  },
  jo = {
    vertical: { prev: 'ArrowUp', next: 'ArrowDown' },
    horizontal: { prev: 'ArrowLeft', next: 'ArrowRight' },
  },
  b2 = ({ itemsContainerRef: t, itemsSelector: e, keyType: n = 'vertical' }) => {
    let [i, r] = Xe(0),
      a = de(
        (s) => {
          let o = t.current;
          if (!o) return;
          let l = o.querySelectorAll(e);
          if (l.length === 0) return;
          let c = l.length - 1,
            h = () => r(0),
            u = () => r(c),
            p = () => {
              i === c ? h() : r(i + 1);
            },
            m = () => {
              i === 0 ? u() : r(i - 1);
            },
            g = { [jo[n].next]: p, [jo[n].prev]: m }[s.key];
          g && (s.preventDefault(), g());
        },
        [i, e, t, n]
      );
    return { focusedIndex: i, handleArrowsKeyDown: a, setFocusedIndex: r };
  },
  hh = d.createContext(void 0),
  ra = () => {
    let t = d.useContext(hh);
    if (t === void 0) throw new Error('useMenuContext must be used within a MenuContextProvider');
    return t;
  },
  y2 = hh.Provider,
  va = '[role="menuitem"]:not(:disabled)';
function uh(t) {
  let e = t,
    { closeOnSelect: n = !0, closeOnBlur: i = !0, closeOnEsc: r = !0, children: a, onOpen: s } = e,
    o = an(e, ['closeOnSelect', 'closeOnBlur', 'closeOnEsc', 'children', 'onOpen']),
    {
      isOpen: l,
      handleOpen: c,
      handleClose: h,
      isControlled: u,
    } = Y1({ isOpen: t.isOpen, defaultIsOpen: t.defaultIsOpen, onOpen: s, onClose: t.onClose }),
    p = rt(null),
    m = rt(null),
    g = Wt(null, 'menu'),
    {
      focusedIndex: b,
      handleArrowsKeyDown: v,
      setFocusedIndex: y,
    } = b2({ itemsContainerRef: m, itemsSelector: va });
  Fe(() => {
    if (l && m.current) {
      let C = m.current.querySelectorAll(va);
      C.length > 0 &&
        b < C.length &&
        setTimeout(() => {
          C[b].focus({ preventScroll: !1 });
        }, 0);
    }
  }, [l, b]);
  let w = de(
      (C) => {
        let L = [...m.current.querySelectorAll(va)].findIndex((T) => C === T);
        L !== -1 && y(L);
      },
      [y]
    ),
    S = de(() => {
      var C;
      h(), (C = p.current) == null || C.focus({ preventScroll: !0 });
    }, [h]),
    M = de(
      (C) => {
        if (C.key === 'Tab') {
          C.preventDefault(), S();
          return;
        }
        if ((C.stopPropagation(), C.key === 'ArrowLeft')) {
          C.preventDefault(), S();
          return;
        }
        v(C);
      },
      [S, v]
    ),
    _ = rt(!1),
    O = Ai(
      () => ({
        isOpen: l,
        menuId: g,
        focusMenuItem: w,
        getTriggerProps: (C = {}, L = null) => ({
          onMouseDown: (T) => {
            var R;
            (_.current = !0), (R = C.onMouseDown) == null || R.call(C, T);
          },
          onMouseUp: (T) => {
            var R;
            (_.current = !1), (R = C.onMouseUp) == null || R.call(C, T);
          },
          onClick: (T) => {
            var R;
            (u && !s) || (l ? h() : c()), (R = C.onClick) == null || R.call(C, T);
          },
          ref: Pn(p, L),
        }),
        getMenuListProps: (C = {}, L = null) => ({
          ref: Pn(m, L),
          onKeyDown: (T) => {
            var R;
            M(T), (R = C.onKeyDown) == null || R.call(C, T);
          },
          onBlur: (T) => {
            var R, P, N, j;
            if (((R = C.onBlur) == null || R.call(C, T), !i)) return;
            let q = document.activeElement,
              F = T.relatedTarget || q,
              U = m.current === F || ((P = m.current) == null ? void 0 : P.contains(F)),
              X =
                p.current === F || ((N = p.current) == null ? void 0 : N.contains(F)) || _.current,
              ue =
                ((j = F == null ? void 0 : F.parentElement) == null
                  ? void 0
                  : j.dataset.parentMenu) === g;
            if (U || X || ue) {
              T.stopPropagation();
              return;
            }
            h();
          },
        }),
        getMenuItemProps: (C = {}) => ({
          onClick: (L) => {
            var T;
            (T = C.onClick) == null || T.call(C, L);
            let R = !!L.target.getAttribute('aria-haspopup');
            n && !R && S();
          },
        }),
        propsToPropagateToSubmenus: { closeOnSelect: n, closeOnBlur: i, closeOnEsc: r },
      }),
      [g, l, M, n, h, c, w, i, r, S, u, s]
    );
  return d.createElement(
    y2,
    { value: O },
    d.createElement(
      Ni,
      Un(qe({}, o), {
        isOpen: l,
        onClose: h,
        id: g,
        closeOnEsc: r,
        autoFocus: !1,
        closeOnBlur: !1,
      }),
      a
    )
  );
}
var fh = d.createContext(void 0),
  ph = () => d.useContext(fh),
  x2 = fh.Provider,
  w2 = () =>
    I({
      position: 'sticky',
      top: 0,
      left: 0,
      backgroundColor: f.colorWhite,
      borderBottom: `1px solid ${f.gray300}`,
      marginBottom: f.spacing2Xs,
      padding: `${f.spacing2Xs} 0`,
      zIndex: 1001,
    }),
  E2 = () =>
    I({
      position: 'sticky',
      bottom: 0,
      left: 0,
      backgroundColor: f.colorWhite,
      borderTop: `1px solid ${f.gray300}`,
      marginTop: f.spacing2Xs,
      padding: `${f.spacing2Xs} 0`,
      zIndex: 1001,
    }),
  C2 = (t) => ({
    container: I({
      borderRadius: '8px',
      overflowY: 'auto',
      position: 'relative',
      padding: 0,
      paddingTop: t.hasStickyHeader ? 0 : f.spacing2Xs,
      paddingBottom: t.hasStickyFooter ? 0 : f.spacing2Xs,
    }),
  }),
  ws = (t) => {
    let e = t,
      { children: n, testId: i = 'cf-ui-menu-list-header', className: r } = e,
      a = an(e, ['children', 'testId', 'className']),
      s = w2();
    return d.createElement('div', qe({ 'data-test-id': i, className: Q(s, r) }, a), n);
  };
ws.displayName = 'MenuListHeader';
var Es = (t) => {
  let e = t,
    { children: n, testId: i = 'cf-ui-menu-list-footer', className: r } = e,
    a = an(e, ['children', 'testId', 'className']),
    s = E2();
  return d.createElement('div', qe({ 'data-test-id': i, className: Q(s, r) }, a), n);
};
Es.displayName = 'MenuListFooter';
function _2(t) {
  var e;
  return !!((e = t == null ? void 0 : t.type) != null && e.displayName);
}
var M2 = (t, e) => {
    let n = t,
      { children: i, testId: r = 'cf-ui-menu-list', className: a } = n,
      s = an(n, ['children', 'testId', 'className']),
      { getMenuListProps: o } = ra(),
      l = ph(),
      c = null,
      h = null,
      u = [];
    d.Children.forEach(i, (g) => {
      let b = !0;
      _2(g) &&
        (g.type.displayName === ws.displayName
          ? ((c = g), (b = !1))
          : g.type.displayName === Es.displayName && ((h = g), (b = !1))),
        b && u.push(g);
    });
    let p = C2({ hasStickyHeader: !!c, hasStickyFooter: !!h }),
      m = l ? l.getSubmenuListProps(s) : s;
    return d.createElement(
      Ni.Content,
      Un(qe(qe({ role: 'menu' }, m), o(m, e)), { className: Q(p.container, a), testId: r }),
      c,
      u,
      h
    );
  },
  S2 = d.forwardRef(M2),
  z2 = {
    backgroundColor: f.gray200,
    fontWeight: f.fontWeightMedium,
    '&:hover': { backgroundColor: f.gray200 },
  },
  Wo = { opacity: 0.5, cursor: 'auto', '&:hover': { backgroundColor: 'unset' } },
  k2 = ({ isActive: t, isDisabled: e }) => ({
    root: I(
      [
        {
          alignItems: 'center',
          gap: f.spacingXs,
          display: 'flex',
          width: `calc(100% - 2 * ${f.spacing2Xs})`,
          background: 'none',
          border: 0,
          borderRadius: f.borderRadiusMedium,
          margin: `0 ${f.spacing2Xs}`,
          outline: 'none',
          fontSize: f.fontSizeM,
          lineHeight: f.lineHeightM,
          fontWeight: f.fontWeightNormal,
          position: 'relative',
          textAlign: 'left',
          padding: `6px ${f.spacingXs}`,
          wordBreak: 'break-word',
          whiteSpace: 'break-spaces',
          cursor: 'pointer',
          hyphens: 'auto',
          minWidth: '150px',
          textDecoration: 'none',
          color: f.gray900,
          '[role="menuitem"] + &': { marginTop: '2px' },
          '&:hover': { backgroundColor: f.gray100 },
          '&:focus': { boxShadow: `inset ${f.glowPrimary}` },
          '&:focus:not(:focus-visible)': { boxShadow: 'unset' },
          '&:focus-visible': { boxShadow: `inset ${f.glowPrimary}` },
          '&:active': { backgroundColor: f.gray200 },
          '&:disabled': Wo,
        },
      ],
      t && z2,
      e && Wo
    ),
  }),
  O2 = 'button';
function mh(t, e) {
  let n = t,
    {
      testId: i,
      className: r,
      as: a,
      isActive: s = !1,
      isDisabled: o = !1,
      isInitiallyFocused: l,
      icon: c,
    } = n,
    h = an(n, [
      'testId',
      'className',
      'as',
      'isActive',
      'isDisabled',
      'isInitiallyFocused',
      'icon',
    ]),
    u = Wt(void 0, 'menu-item'),
    p = i || `cf-ui-${u}`,
    m = k2({ isActive: s, isDisabled: o }),
    { getMenuItemProps: g, focusMenuItem: b } = ra(),
    v = rt(null);
  Fe(() => {
    l && v.current && b(v.current);
  }, [l, b]);
  let y = a ?? O2;
  return d.createElement(
    y,
    Un(qe(qe({ role: 'menuitem' }, h), g(h)), {
      className: Q(m.root, r),
      'data-test-id': p,
      ref: Pn(v, e),
      tabIndex: -1,
    }),
    c,
    t.children
  );
}
mh.displayName = 'MenuItem';
var gh = d.forwardRef(mh),
  vh = (t) => {
    let e = d.Children.only(t.children),
      { getTriggerProps: n } = ra();
    return d.createElement(
      Ni.Trigger,
      null,
      d.cloneElement(e, Un(qe({}, n(e.props, e.ref)), { ['aria-haspopup']: 'menu' }))
    );
  },
  L2 = () =>
    I({
      border: 'none',
      width: '100%',
      height: '1px',
      backgroundColor: f.gray200,
      margin: `${f.spacing2Xs} 0`,
    }),
  I2 = (t) => {
    let e = t,
      { children: n, testId: i = 'cf-ui-menu-divider', className: r } = e,
      a = an(e, ['children', 'testId', 'className']),
      s = L2();
    return d.createElement(
      'hr',
      qe({ 'aria-orientation': 'horizontal', 'data-test-id': i, className: Q(s, r) }, a)
    );
  },
  R2 = () =>
    I({
      color: f.gray500,
      textAlign: 'left',
      padding: `${f.spacingXs} ${f.spacingS} ${f.spacing2Xs}`,
      lineHeight: f.lineHeightM,
    }),
  D2 = (t) => {
    let e = t,
      { children: n, testId: i = 'cf-ui-menu-section-title', className: r } = e,
      a = an(e, ['children', 'testId', 'className']),
      s = R2();
    return d.createElement(
      Pc,
      qe(
        { 'aria-hidden': 'true', as: 'div', testId: i, className: Q(s, r), marginBottom: 'none' },
        a
      ),
      n
    );
  },
  A2 = [-8, 2],
  T2 = (t) => {
    let e = t,
      { onClose: n, onOpen: i } = e,
      r = an(e, ['onClose', 'onOpen']),
      { isOpen: a, menuId: s, propsToPropagateToSubmenus: o } = ra(),
      l = rt(null),
      c = rt(null),
      [h, u] = Xe(!1),
      p = de(() => {
        u(!0), window.clearTimeout(c.current), i == null || i();
      }, [i]),
      m = de(() => {
        u(!1), window.clearTimeout(c.current), n == null || n();
      }, [n]),
      g = de(() => {
        var v;
        m(), (v = l.current) == null || v.focus({ preventScroll: !0 });
      }, [m]);
    Fe(() => {
      a === !1 && u(!1);
    }, [a]);
    let b = Ai(
      () => ({
        isOpen: h,
        getSubmenuListProps: (v) => ({
          'data-parent-menu': s,
          onMouseOver: (y) => {
            var w;
            p(), (w = v.onMouseOver) == null || w.call(v, y);
          },
          onMouseLeave: (y) => {
            var w;
            g(), (w = v.onMouseLeave) == null || w.call(v, y);
          },
        }),
        getSubmenuTriggerProps: (v, y) => ({
          ref: Pn(l, y),
          onKeyDown: (w) => {
            var S;
            w.key === 'ArrowRight' && (w.preventDefault(), p()),
              (S = v.onKeyDown) == null || S.call(v, w);
          },
          onMouseOver: (w) => {
            var S;
            p(), (S = v.onMouseOver) == null || S.call(v, w);
          },
          onMouseLeave: (w) => {
            var S;
            (c.current = window.setTimeout(g, 300)), (S = v.onMouseLeave) == null || S.call(v, w);
          },
        }),
      }),
      [h, s, p, g]
    );
    return d.createElement(
      x2,
      { value: b },
      d.createElement(
        uh,
        Un(qe(qe({}, o), r), {
          isOpen: h,
          onClose: m,
          onOpen: p,
          placement: 'right-start',
          offset: A2,
          isAutoalignmentEnabled: !1,
        })
      )
    );
  },
  P2 = () => ({
    root: ({ isActive: t }) =>
      I(
        qe(
          { display: 'flex', alignItems: 'center', paddingRight: f.spacingXs },
          t ? { backgroundColor: f.gray100 } : {}
        )
      ),
    content: I({ marginRight: f.spacingM }),
    icon: I({ marginLeft: 'auto', fill: 'currentColor' }),
  }),
  H2 = (t, e) => {
    let { className: n, children: i } = t,
      { getSubmenuTriggerProps: r, isOpen: a } = ph(),
      s = P2();
    return d.createElement(
      vh,
      null,
      d.createElement(
        gh,
        Un(qe(qe({}, t), r(t, e)), { className: Q(s.root({ isActive: a }), n) }),
        d.createElement('span', { className: s.content }, i),
        d.createElement(gf, { className: s.icon })
      )
    );
  },
  V2 = d.forwardRef(H2),
  yt = uh;
yt.List = S2;
yt.ListHeader = ws;
yt.ListFooter = Es;
yt.Item = gh;
yt.Trigger = vh;
yt.Divider = I2;
yt.SectionTitle = D2;
yt.Submenu = T2;
yt.SubmenuTrigger = V2;
var bh = { exports: {} };
(function (t) {
  (function (e, n) {
    var i = '…',
      r =
        /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]{1,300}@(.{1,300}\.)[a-zA-Z]{2,3})/g;
    function a(o, l, c) {
      return c.length === o.length || !l.ellipsis || (c += l.ellipsis), c;
    }
    function s(o, l, c) {
      var h = '',
        u = !0,
        p = l,
        m,
        g;
      if (
        ((c = c || {}),
        (c.ellipsis = typeof c.ellipsis > 'u' ? i : c.ellipsis),
        !o || o.length === 0)
      )
        return '';
      for (u = !0; u; ) {
        if (
          ((r.lastIndex = h.length),
          (u = r.exec(o)),
          !u || u.index - h.length >= p || r.lastIndex >= l + 3e3)
        )
          return (h += o.substring(h.length, l)), a(o, c, h);
        if (
          ((m = u[0]),
          (g = u.index),
          (h += o.substring(h.length, g + m.length)),
          (p -= g + m.length),
          p <= 0)
        )
          break;
      }
      return a(o, c, h);
    }
    t.exports ? (t.exports = s) : (e.truncate = s);
  })(String);
})(bh);
var B2 = bh.exports;
const yh = /* @__PURE__ */ is(B2);
var N2 = Object.defineProperty,
  F2 = Object.defineProperties,
  $2 = Object.getOwnPropertyDescriptors,
  Tr = Object.getOwnPropertySymbols,
  xh = Object.prototype.hasOwnProperty,
  wh = Object.prototype.propertyIsEnumerable,
  Xo = (t, e, n) =>
    e in t ? N2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  Fi = (t, e) => {
    for (var n in e || (e = {})) xh.call(e, n) && Xo(t, n, e[n]);
    if (Tr) for (var n of Tr(e)) wh.call(e, n) && Xo(t, n, e[n]);
    return t;
  },
  aa = (t, e) => F2(t, $2(e)),
  Cs = (t, e) => {
    var n = {};
    for (var i in t) xh.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Tr) for (var i of Tr(t)) e.indexOf(i) < 0 && wh.call(t, i) && (n[i] = t[i]);
    return n;
  },
  j2 = () => ({
    contentBody: I({ gridColumn: 'content', gridRow: 'content', whiteSpace: 'initial' }),
    wrapper: I({
      flex: '1 1 0',
      display: 'grid',
      gridTemplateRows: '[header] auto [content] minmax(0, 1fr)',
      gridTemplateColumns: 'auto [content] minmax(0, 1fr)',
    }),
    dragHandle: I({
      borderBottomLeftRadius: f.borderRadiusMedium,
      borderTopLeftRadius: f.borderRadiusMedium,
      cursor: 'grab',
    }),
    root: ({ hasHeader: t, isHovered: e, isSelected: n }) => {
      let i = {
        backgroundColor: f.colorWhite,
        borderColor: f.gray300,
        borderRadius: f.borderRadiusMedium,
        borderStyle: 'solid',
        borderWidth: 1,
        color: f.gray900,
        display: 'flex',
        textAlign: 'left',
        width: '100%',
        fontSize: f.fontSizeM,
        fontWeight: f.fontWeightNormal,
        position: 'relative',
        textDecoration: 'none',
        margin: 0,
        transition: `border-color ${f.transitionDurationDefault} ${f.transitionEasingDefault},
    box-shadow ${f.transitionDurationShort} ${f.transitionEasingDefault}`,
        '&:focus': I({
          borderColor: n ? f.blue100 : f.colorPrimary,
          boxShadow: f.glowPrimary,
          outline: 'none',
        }),
        '&:focus:not(:focus-visible)': I({
          borderColor: n ? f.colorPrimary : f.gray300,
          boxShadow: 'unset',
        }),
        '&:focus-visible': I({ borderColor: f.colorPrimary, boxShadow: f.glowPrimary }),
      };
      return (
        t || (i.paddingTop = f.spacingM),
        e && ((i.borderColor = f.colorPrimary), (i.cursor = 'pointer')),
        n && ((i.backgroundColor = f.blue100), (i.borderColor = f.colorPrimary)),
        I(i)
      );
    },
    skeleton: I({
      border: `1px solid ${f.gray300}`,
      borderRadius: f.borderRadiusMedium,
      padding: f.spacingM,
    }),
  }),
  W2 = () => ({ root: I({ minHeight: 'auto', padding: f.spacing2Xs, marginLeft: f.spacingXs }) }),
  Eh = ({ buttonProps: t, children: e }) => {
    let n = W2();
    return d.createElement(
      yt,
      null,
      d.createElement(
        yt.Trigger,
        null,
        d.createElement(
          qf,
          aa(Fi({ 'aria-label': 'Actions', icon: d.createElement(xf, null) }, t), {
            className: Q(n.root, t == null ? void 0 : t.className),
            size: 'small',
            variant: 'transparent',
            testId: 'cf-ui-card-actions',
          })
        )
      ),
      d.createElement(yt.List, null, e)
    );
  },
  X2 = () => ({
    header: I({
      alignItems: 'center',
      borderBottomColor: f.gray200,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderTopLeftRadius: f.borderRadiusMedium,
      borderTopRightRadius: f.borderRadiusMedium,
      boxSizing: 'border-box',
      color: f.gray600,
      fontSize: f.fontSizeM,
      fontWeight: f.fontWeightNormal,
      gridColumn: 'content',
      gridRow: 'header',
      lineHeight: f.lineHeightM,
      paddingBottom: f.spacingXs,
      paddingLeft: f.spacingM,
      paddingRight: f.spacingXs,
      paddingTop: f.spacingXs,
      minHeight: '37px',
    }),
    headerWithActions: I({ paddingBottom: 0, paddingRight: f.spacingXs, paddingTop: 0 }),
  }),
  Ch = (t) => {
    t.preventDefault(), t.stopPropagation();
  },
  _h = (t) => {
    let { icon: e, type: n, actions: i, actionsButtonProps: r, badge: a } = t,
      s = X2();
    return d.createElement(
      Se,
      { className: Q(s.header, i && s.headerWithActions) },
      d.createElement(
        Se,
        { flexGrow: 1 },
        n && d.createElement(Ge, { fontColor: 'gray600', isWordBreak: !0 }, n)
      ),
      e && d.createElement(Se, { alignItems: 'center', marginLeft: 'spacingXs' }, e),
      a && d.createElement(Se, { alignItems: 'center', marginLeft: 'spacingXs' }, a),
      i &&
        i.length > 0 &&
        d.createElement(
          Se,
          { onClick: Ch, alignItems: 'center' },
          d.createElement(Eh, { buttonProps: r }, i)
        )
    );
  };
_h.displayName = 'DefaultCardHeader';
var Y2 = 'article';
function Mh(t, e) {
  var n = t,
    {
      actions: i,
      actionsButtonProps: r,
      ariaLabel: a,
      badge: s,
      children: o,
      className: l,
      contentBodyProps: c,
      header: h,
      href: u,
      icon: p,
      isDragging: m = !1,
      isHovered: g,
      isSelected: b = !1,
      onBlur: v,
      onClick: y,
      onFocus: w,
      onKeyDown: S,
      onMouseEnter: M,
      onMouseLeave: _,
      target: O,
      rel: C,
      testId: L = 'cf-ui-base-card',
      title: T,
      type: R,
      withDragHandle: P,
      dragHandleRender: N,
      isLoading: j,
    } = n,
    q = Cs(n, [
      'actions',
      'actionsButtonProps',
      'ariaLabel',
      'badge',
      'children',
      'className',
      'contentBodyProps',
      'header',
      'href',
      'icon',
      'isDragging',
      'isHovered',
      'isSelected',
      'onBlur',
      'onClick',
      'onFocus',
      'onKeyDown',
      'onMouseEnter',
      'onMouseLeave',
      'target',
      'rel',
      'testId',
      'title',
      'type',
      'withDragHandle',
      'dragHandleRender',
      'isLoading',
    ]);
  let F = j2(),
    [U, X] = Xe(g ?? !1),
    ue = !!(y || u || P),
    _e = !!h,
    fe =
      R || p || s || i
        ? d.createElement(_h, { type: R, icon: p, badge: s, actions: i, actionsButtonProps: r })
        : null,
    Re = de(
      (D) => {
        w && w(D);
      },
      [w]
    ),
    B = de(
      (D) => {
        v && v(D);
      },
      [v]
    ),
    V = de(
      (D) => {
        X(!0), M && M(D);
      },
      [M]
    ),
    $ = de(
      (D) => {
        X(!1), _ && _(D);
      },
      [_]
    ),
    W = y
      ? (D) => {
          y(D);
        }
      : void 0,
    z = de(
      (D) => {
        S && S(D);
      },
      [S]
    );
  if (j)
    return d.createElement(
      at.Container,
      { className: F.skeleton, svgHeight: '5.6rem' },
      d.createElement(at.DisplayText, { numberOfLines: 1 }),
      d.createElement(at.BodyText, { numberOfLines: 1, offsetTop: 35 })
    );
  let te = d.createElement(p2, {
    className: F.dragHandle,
    isActive: m,
    label: 'Reorder entry',
    onClick: Ch,
  });
  return d.createElement(
    Ve,
    aa(
      Fi(
        {
          'aria-label': T || a,
          'aria-pressed': q.as === 'button' ? (b ? 'true' : 'false') : void 0,
          as: Y2,
          className: Q(F.root({ hasHeader: _e, isHovered: U, isSelected: b }), l),
          href: u,
          onBlur: B,
          onClick: W,
          onFocus: Re,
          onMouseEnter: typeof g > 'u' && ue ? V : void 0,
          onMouseLeave: typeof g > 'u' && ue ? $ : void 0,
          onKeyDown: z,
          rel: u && (C || 'noreferrer'),
          role: y && !u ? 'button' : void 0,
          tabIndex: y ? 0 : void 0,
          target: O,
        },
        q
      ),
      { ref: e, testId: L, title: T }
    ),
    P ? (N ? N({ drag: te, isDragging: m }) : te) : null,
    d.createElement(
      'div',
      { className: F.wrapper, 'data-card-part': 'wrapper' },
      h ?? fe,
      d.createElement('div', { className: F.contentBody, 'data-card-part': 'content' }, o)
    )
  );
}
Mh.displayName = 'BaseCard';
var Sh = $e(Mh),
  U2 = (t) => {
    switch (t) {
      case 'large':
        return f.spacingL;
      case 'none':
        return 0;
      default:
        return f.spacingM;
    }
  },
  q2 = ({ padding: t }) => ({
    header: I({ gridColumn: 'content', gridRow: 'header', marginBottom: f.spacingM }),
    root: I({ padding: U2(t) }),
  });
function zh(t, e) {
  var n = t,
    {
      actions: i,
      badge: r,
      icon: a,
      padding: s = 'default',
      title: o,
      className: l,
      testId: c = 'cf-ui-card',
    } = n,
    h = Cs(n, ['actions', 'badge', 'icon', 'padding', 'title', 'className', 'testId']);
  let u = q2({ padding: s }),
    p = !!(o || a || r || i);
  return d.createElement(
    Sh,
    aa(Fi({ className: Q(u.root, l) }, h), {
      testId: c,
      header:
        p &&
        d.createElement(
          Se,
          { alignItems: 'center', className: Q(u.header) },
          o &&
            d.createElement(
              Se,
              { as: 'header', flexGrow: 1 },
              d.createElement(Vc, { marginBottom: 'none' }, o)
            ),
          a && d.createElement(Se, { alignItems: 'center', marginLeft: 'spacingXs' }, a),
          r && d.createElement(Se, { alignItems: 'center', marginLeft: 'spacingXs' }, r),
          i && d.createElement(Eh, null, i)
        ),
      ref: e,
    })
  );
}
zh.displayName = 'Card';
$e(zh);
var G2 = () => ({
    actionsButton: I({
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: f.borderRadiusMedium,
    }),
    content: (t) =>
      I({
        gridColumn: 'content',
        marginTop: t === 'small' ? f.spacingXs : f.spacingS,
        marginBottom: t === 'small' ? `calc(-1 * ${f.spacingXs})` : 0,
      }),
    root: I({
      padding: 0,
      '[data-card-part="content"]': {
        paddingBottom: f.spacingM,
        paddingLeft: f.spacingM,
        paddingRight: f.spacingM,
      },
    }),
    header: I({
      borderBottomWidth: 1,
      borderBottomColor: f.gray200,
      borderBottomStyle: 'solid',
      minHeight: 'auto',
      paddingBottom: f.spacingXs,
      paddingLeft: f.spacingM,
      paddingRight: f.spacingXs,
    }),
    thumbnail: (t) =>
      I(
        Fi(
          {
            margin: `0 0 0 ${f.spacingS}`,
            padding: 0,
            overflow: 'hidden',
            position: 'relative',
            img: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              zIndex: 1,
            },
          },
          t === 'small' ? { height: '40px', width: '40px' } : { height: '70px', width: '70px' }
        )
      ),
  }),
  K2 = 'article';
function kh({ title: t, titleTag: e }) {
  if (!t) return null;
  let n = yh(t, 255, {});
  return d.createElement(
    nf,
    {
      title: t.length > 255 ? t : '',
      testId: 'title',
      as: e,
      marginBottom: 'none',
      isWordBreak: !0,
    },
    n
  );
}
kh.displayName = 'EntryCardTitle';
function Oh({ description: t, size: e }) {
  if (!t || e === 'small') return null;
  let n = yh(t, 95, {});
  return d.createElement(cs, { marginBottom: 'none', isWordBreak: !0 }, n);
}
Oh.displayName = 'EntryCardDescription';
function Lh(t, e) {
  var n = t,
    {
      actions: i,
      children: r,
      className: a,
      src: s,
      status: o,
      thumbnailElement: l,
      description: c,
      withDragHandle: h = !1,
      title: u,
      titleTag: p = 'h2',
      size: m,
      testId: g = 'cf-ui-entry-card',
      contentType: b,
    } = n,
    v = Cs(n, [
      'actions',
      'children',
      'className',
      'src',
      'status',
      'thumbnailElement',
      'description',
      'withDragHandle',
      'title',
      'titleTag',
      'size',
      'testId',
      'contentType',
    ]);
  let y = G2(),
    w = o ? d.createElement(s2, { entityStatus: o }) : null;
  return d.createElement(
    Sh,
    aa(Fi({ as: K2 }, v), {
      actions: i,
      badge: w,
      className: Q(y.root, a),
      withDragHandle: h,
      ref: e,
      type: b,
      testId: g,
    }),
    d.createElement(
      Se,
      { alignItems: 'center', className: y.content(m), flexDirection: 'row' },
      d.createElement(
        Se,
        { flexDirection: 'column', flexGrow: 1, gap: 'spacingS' },
        d.createElement(kh, { title: u, titleTag: p }),
        d.createElement(Oh, { size: m, description: c }),
        r
      ),
      l && m !== 'small' && d.createElement('figure', { className: y.thumbnail(m) }, l)
    )
  );
}
Lh.displayName = 'EntryCard';
var Yo = $e(Lh),
  Z2 = Object.defineProperty,
  Q2 = Object.defineProperties,
  J2 = Object.getOwnPropertyDescriptors,
  Pr = Object.getOwnPropertySymbols,
  Ih = Object.prototype.hasOwnProperty,
  Rh = Object.prototype.propertyIsEnumerable,
  Uo = (t, e, n) =>
    e in t ? Z2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  Dh = (t, e) => {
    for (var n in e || (e = {})) Ih.call(e, n) && Uo(t, n, e[n]);
    if (Pr) for (var n of Pr(e)) Rh.call(e, n) && Uo(t, n, e[n]);
    return t;
  },
  eg = (t, e) => Q2(t, J2(e)),
  tg = (t, e) => {
    var n = {};
    for (var i in t) Ih.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Pr) for (var i of Pr(t)) e.indexOf(i) < 0 && Rh.call(t, i) && (n[i] = t[i]);
    return n;
  },
  ng = (t) => {
    switch (t) {
      case 'primary':
        return { backgroundColor: f.blue100, borderColor: f.blue300, a: { color: f.blue700 } };
      case 'positive':
        return { backgroundColor: f.green100, borderColor: f.green300, a: { color: f.blue700 } };
      case 'negative':
        return { backgroundColor: f.red100, borderColor: f.red300, a: { color: f.blue700 } };
      case 'warning':
        return { backgroundColor: f.orange100, borderColor: f.orange300, a: { color: f.blue700 } };
      case 'neutral':
        return { backgroundColor: f.gray100, borderColor: f.gray300, a: { color: f.blue700 } };
      default:
        return {};
    }
  },
  ig = () => ({
    container: ({ variant: t }) =>
      I(
        Dh({ position: 'relative', borderRadius: f.borderRadiusMedium, border: '1px solid' }, ng(t))
      ),
    title: I({ color: f.gray800, fontSize: f.fontSizeL, lineHeight: f.lineHeightL }),
    description: I({ color: f.gray700 }),
    close: I({
      position: 'absolute',
      top: f.spacingXs,
      right: f.spacingXs,
      padding: f.spacingXs,
      '&:hover, &:active': { backgroundColor: 'transparent' },
    }),
    closeIcon: I({ fill: f.gray600 }),
  }),
  rg = { primary: go, positive: pf, negative: vf, warning: _f, neutral: go },
  Ha = d.forwardRef((t, e) => {
    let n = t,
      {
        children: i,
        className: r,
        withCloseButton: a = !1,
        variant: s = 'primary',
        onClose: o,
        testId: l = 'cf-ui-note',
        title: c,
      } = n,
      h = tg(n, [
        'children',
        'className',
        'withCloseButton',
        'variant',
        'onClose',
        'testId',
        'title',
      ]),
      u = ig();
    return d.createElement(
      Lc,
      eg(Dh({}, h), {
        columns: a ? 'auto 1fr 24px' : 'auto 1fr',
        as: 'article',
        className: Q(u.container({ variant: s }), r),
        testId: l,
        ref: e,
        padding: 'spacingM',
      }),
      d.createElement(Wc, {
        as: rg[s],
        variant: s === 'neutral' ? 'muted' : s,
        size: c ? 'medium' : 'small',
      }),
      d.createElement(
        Se,
        { flexDirection: 'column' },
        c &&
          d.createElement(
            Vc,
            { as: 'h2', className: u.title, marginBottom: i ? 'spacingS' : 'none' },
            c
          ),
        i &&
          d.createElement(
            Ge,
            { as: 'div', lineHeight: 'lineHeightM', className: u.description },
            typeof i == 'string' ? d.createElement(cs, { marginBottom: 'none' }, i) : i
          )
      ),
      a &&
        d.createElement(Ei, {
          variant: 'transparent',
          startIcon: d.createElement(Xc, { className: u.closeIcon }),
          onClick: o,
          testId: `${l}-close`,
          'aria-label': 'Dismiss',
          className: u.close,
        })
    );
  });
Ha.displayName = 'Note';
var ag = Object.defineProperty,
  sg = Object.defineProperties,
  og = Object.getOwnPropertyDescriptors,
  Hr = Object.getOwnPropertySymbols,
  Ah = Object.prototype.hasOwnProperty,
  Th = Object.prototype.propertyIsEnumerable,
  qo = (t, e, n) =>
    e in t ? ag(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  ai = (t, e) => {
    for (var n in e || (e = {})) Ah.call(e, n) && qo(t, n, e[n]);
    if (Hr) for (var n of Hr(e)) Th.call(e, n) && qo(t, n, e[n]);
    return t;
  },
  Va = (t, e) => sg(t, og(e)),
  lg = (t, e) => {
    var n = {};
    for (var i in t) Ah.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && Hr) for (var i of Hr(t)) e.indexOf(i) < 0 && Th.call(t, i) && (n[i] = t[i]);
    return n;
  },
  cg = (t) => {
    switch (t) {
      case 'primary':
        return { color: f.blue600, '&:hover, &:focus': { color: f.blue700 } };
      case 'secondary':
        return { color: f.gray600, '&:hover, &:focus': { color: f.gray700 } };
      case 'positive':
        return { color: f.green600, '&:hover, &:focus': { color: f.green700 } };
      case 'negative':
        return { color: f.red600, '&:hover, &:focus': { color: f.red700 } };
      case 'muted':
        return { color: f.gray400, '&:hover, &:focus': { color: f.gray500 } };
      case 'white':
        return { color: f.colorWhite, '&:hover, &:focus': { color: f.gray100 } };
      default:
        return { color: f.colorWhite };
    }
  },
  dg = ({ variant: t, isDisabled: e }) =>
    I(
      Va(
        ai(
          {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            border: 0,
            padding: 0,
            margin: 0,
            fontFamily: f.fontStackPrimary,
            fontSize: f.fontSizeM,
            fontWeight: f.fontWeightMedium,
            transition: `color ${f.transitionDurationShort} ${f.transitionEasingDefault}`,
            textDecoration: 'none',
            background: 'none',
            appearance: 'none',
            whiteSpace: 'normal',
            textAlign: 'left',
            cursor: e ? 'not-allowed' : 'pointer',
            opacity: e ? 0.5 : 1,
          },
          cg(t)
        ),
        {
          outline: 'none',
          verticalAlign: 'bottom',
          '&:focus, &:focus-visible, &:hover': { textDecoration: e ? 'none' : 'underline' },
          '&:focus': { boxShadow: e ? 'none' : f.glowPrimary, borderRadius: f.borderRadiusSmall },
          '&:focus:not(:focus-visible)': { borderRadius: 0, boxShadow: 'none' },
          '&:focus-visible': {
            borderRadius: f.borderRadiusSmall,
            boxShadow: e ? 'none' : f.glowPrimary,
          },
        }
      )
    ),
  hg = () =>
    I({
      fill: 'currentColor',
      transition: `fill ${f.transitionDurationShort} ${f.transitionEasingDefault}`,
    }),
  ug = ({ alignIcon: t }) => {
    if (t === 'start') return I({ marginLeft: f.spacing2Xs });
    if (t === 'end') return I({ marginRight: f.spacing2Xs });
  },
  ba = { textLink: dg, textLinkIcon: hg, textLinkText: ug },
  fg = 'a';
function Ph(t, e) {
  let n = t,
    {
      children: i,
      className: r,
      testId: a = 'cf-ui-text-link',
      variant: s = 'primary',
      href: o,
      icon: l,
      alignIcon: c = 'start',
      isDisabled: h,
      as: u = fg,
    } = n,
    p = lg(n, [
      'children',
      'className',
      'testId',
      'variant',
      'href',
      'icon',
      'alignIcon',
      'isDisabled',
      'as',
    ]),
    m = ai(
      {
        ref: e,
        className: Q(ba.textLink({ variant: s, isDisabled: h }), t.className),
        ['data-test-id']: a,
      },
      p
    ),
    g = l
      ? d.createElement(
          Se,
          { as: 'span' },
          d.cloneElement(l, { className: Q(l.props.className, ba.textLinkIcon()), size: 'small' })
        )
      : null,
    b = d.createElement(
      d.Fragment,
      null,
      l && c === 'start' && g,
      i &&
        d.createElement('span', { className: ba.textLinkText({ alignIcon: l ? c : void 0 }) }, i),
      l && c === 'end' && g
    );
  return u === 'button'
    ? d.createElement('button', Va(ai({}, m), { disabled: h, type: 'button' }), b)
    : d.createElement(
        'a',
        ai(
          Va(ai({}, m), {
            onClick: h
              ? (v) => {
                  v.preventDefault();
                }
              : m.onClick,
            href: o,
          }),
          h ? { tabIndex: -1 } : {}
        ),
        b
      );
}
Ph.displayName = 'TextLink';
var Ba = d.forwardRef(Ph);
const $4 = (t) => {
  const {
      body: e,
      substring: n,
      onClick: i = () => {},
      hyperLinkHref: r,
      icon: a,
      alignIcon: s,
    } = t,
    o = (c) =>
      /* @__PURE__ */ ye.jsx(
        Ba,
        {
          onClick: i,
          href: r,
          target: '_blank',
          rel: 'noopener noreferer',
          icon: a,
          alignIcon: s,
          children: n,
        },
        `textLink-${c}`
      );
  return (() => e.split(n).reduce((h, u, p) => (p ? h.concat(o(p), u) : [u]), []))();
};
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function $i(t) {
  return (t + 0.5) | 0;
}
const Gt = (t, e, n) => Math.max(Math.min(t, n), e);
function si(t) {
  return Gt($i(t * 2.55), 0, 255);
}
function en(t) {
  return Gt($i(t * 255), 0, 255);
}
function $t(t) {
  return Gt($i(t / 2.55) / 100, 0, 1);
}
function Go(t) {
  return Gt($i(t * 100), 0, 100);
}
const pt = {
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
  Na = [...'0123456789ABCDEF'],
  pg = (t) => Na[t & 15],
  mg = (t) => Na[(t & 240) >> 4] + Na[t & 15],
  Ui = (t) => (t & 240) >> 4 === (t & 15),
  gg = (t) => Ui(t.r) && Ui(t.g) && Ui(t.b) && Ui(t.a);
function vg(t) {
  var e = t.length,
    n;
  return (
    t[0] === '#' &&
      (e === 4 || e === 5
        ? (n = {
            r: 255 & (pt[t[1]] * 17),
            g: 255 & (pt[t[2]] * 17),
            b: 255 & (pt[t[3]] * 17),
            a: e === 5 ? pt[t[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (n = {
            r: (pt[t[1]] << 4) | pt[t[2]],
            g: (pt[t[3]] << 4) | pt[t[4]],
            b: (pt[t[5]] << 4) | pt[t[6]],
            a: e === 9 ? (pt[t[7]] << 4) | pt[t[8]] : 255,
          })),
    n
  );
}
const bg = (t, e) => (t < 255 ? e(t) : '');
function yg(t) {
  var e = gg(t) ? pg : mg;
  return t ? '#' + e(t.r) + e(t.g) + e(t.b) + bg(t.a, e) : void 0;
}
const xg =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Hh(t, e, n) {
  const i = e * Math.min(n, 1 - n),
    r = (a, s = (a + t / 30) % 12) => n - i * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [r(0), r(8), r(4)];
}
function wg(t, e, n) {
  const i = (r, a = (r + t / 60) % 6) => n - n * e * Math.max(Math.min(a, 4 - a, 1), 0);
  return [i(5), i(3), i(1)];
}
function Eg(t, e, n) {
  const i = Hh(t, 1, 0.5);
  let r;
  for (e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0; r < 3; r++)
    (i[r] *= 1 - e - n), (i[r] += e);
  return i;
}
function Cg(t, e, n, i, r) {
  return t === r ? (e - n) / i + (e < n ? 6 : 0) : e === r ? (n - t) / i + 2 : (t - e) / i + 4;
}
function _s(t) {
  const n = t.r / 255,
    i = t.g / 255,
    r = t.b / 255,
    a = Math.max(n, i, r),
    s = Math.min(n, i, r),
    o = (a + s) / 2;
  let l, c, h;
  return (
    a !== s &&
      ((h = a - s),
      (c = o > 0.5 ? h / (2 - a - s) : h / (a + s)),
      (l = Cg(n, i, r, h, a)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, o]
  );
}
function Ms(t, e, n, i) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(en);
}
function Ss(t, e, n) {
  return Ms(Hh, t, e, n);
}
function _g(t, e, n) {
  return Ms(Eg, t, e, n);
}
function Mg(t, e, n) {
  return Ms(wg, t, e, n);
}
function Vh(t) {
  return ((t % 360) + 360) % 360;
}
function Sg(t) {
  const e = xg.exec(t);
  let n = 255,
    i;
  if (!e) return;
  e[5] !== i && (n = e[6] ? si(+e[5]) : en(+e[5]));
  const r = Vh(+e[2]),
    a = +e[3] / 100,
    s = +e[4] / 100;
  return (
    e[1] === 'hwb' ? (i = _g(r, a, s)) : e[1] === 'hsv' ? (i = Mg(r, a, s)) : (i = Ss(r, a, s)),
    {
      r: i[0],
      g: i[1],
      b: i[2],
      a: n,
    }
  );
}
function zg(t, e) {
  var n = _s(t);
  (n[0] = Vh(n[0] + e)), (n = Ss(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
}
function kg(t) {
  if (!t) return;
  const e = _s(t),
    n = e[0],
    i = Go(e[1]),
    r = Go(e[2]);
  return t.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${$t(t.a)})` : `hsl(${n}, ${i}%, ${r}%)`;
}
const Ko = {
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
  Zo = {
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
function Og() {
  const t = {},
    e = Object.keys(Zo),
    n = Object.keys(Ko);
  let i, r, a, s, o;
  for (i = 0; i < e.length; i++) {
    for (s = o = e[i], r = 0; r < n.length; r++) (a = n[r]), (o = o.replace(a, Ko[a]));
    (a = parseInt(Zo[s], 16)), (t[o] = [(a >> 16) & 255, (a >> 8) & 255, a & 255]);
  }
  return t;
}
let qi;
function Lg(t) {
  qi || ((qi = Og()), (qi.transparent = [0, 0, 0, 0]));
  const e = qi[t.toLowerCase()];
  return (
    e && {
      r: e[0],
      g: e[1],
      b: e[2],
      a: e.length === 4 ? e[3] : 255,
    }
  );
}
const Ig =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Rg(t) {
  const e = Ig.exec(t);
  let n = 255,
    i,
    r,
    a;
  if (e) {
    if (e[7] !== i) {
      const s = +e[7];
      n = e[8] ? si(s) : Gt(s * 255, 0, 255);
    }
    return (
      (i = +e[1]),
      (r = +e[3]),
      (a = +e[5]),
      (i = 255 & (e[2] ? si(i) : Gt(i, 0, 255))),
      (r = 255 & (e[4] ? si(r) : Gt(r, 0, 255))),
      (a = 255 & (e[6] ? si(a) : Gt(a, 0, 255))),
      {
        r: i,
        g: r,
        b: a,
        a: n,
      }
    );
  }
}
function Dg(t) {
  return (
    t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${$t(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`)
  );
}
const ya = (t) => (t <= 31308e-7 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055),
  In = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function Ag(t, e, n) {
  const i = In($t(t.r)),
    r = In($t(t.g)),
    a = In($t(t.b));
  return {
    r: en(ya(i + n * (In($t(e.r)) - i))),
    g: en(ya(r + n * (In($t(e.g)) - r))),
    b: en(ya(a + n * (In($t(e.b)) - a))),
    a: t.a + n * (e.a - t.a),
  };
}
function Gi(t, e, n) {
  if (t) {
    let i = _s(t);
    (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
      (i = Ss(i)),
      (t.r = i[0]),
      (t.g = i[1]),
      (t.b = i[2]);
  }
}
function Bh(t, e) {
  return t && Object.assign(e || {}, t);
}
function Qo(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = en(t[3])))
      : ((e = Bh(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = en(e.a))),
    e
  );
}
function Tg(t) {
  return t.charAt(0) === 'r' ? Rg(t) : Sg(t);
}
class Mi {
  constructor(e) {
    if (e instanceof Mi) return e;
    const n = typeof e;
    let i;
    n === 'object' ? (i = Qo(e)) : n === 'string' && (i = vg(e) || Lg(e) || Tg(e)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = Bh(this._rgb);
    return e && (e.a = $t(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Qo(e);
  }
  rgbString() {
    return this._valid ? Dg(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? yg(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? kg(this._rgb) : void 0;
  }
  mix(e, n) {
    if (e) {
      const i = this.rgb,
        r = e.rgb;
      let a;
      const s = n === a ? 0.5 : n,
        o = 2 * s - 1,
        l = i.a - r.a,
        c = ((o * l === -1 ? o : (o + l) / (1 + o * l)) + 1) / 2;
      (a = 1 - c),
        (i.r = 255 & (c * i.r + a * r.r + 0.5)),
        (i.g = 255 & (c * i.g + a * r.g + 0.5)),
        (i.b = 255 & (c * i.b + a * r.b + 0.5)),
        (i.a = s * i.a + (1 - s) * r.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(e, n) {
    return e && (this._rgb = Ag(this._rgb, e._rgb, n)), this;
  }
  clone() {
    return new Mi(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = en(e)), this;
  }
  clearer(e) {
    const n = this._rgb;
    return (n.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      n = $i(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return (e.r = e.g = e.b = n), this;
  }
  opaquer(e) {
    const n = this._rgb;
    return (n.a *= 1 + e), this;
  }
  negate() {
    const e = this._rgb;
    return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
  }
  lighten(e) {
    return Gi(this._rgb, 2, e), this;
  }
  darken(e) {
    return Gi(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return Gi(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return Gi(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return zg(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function Bt() {}
const Pg = (() => {
  let t = 0;
  return () => t++;
})();
function we(t) {
  return t === null || typeof t > 'u';
}
function ze(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === '[object' && e.slice(-6) === 'Array]';
}
function he(t) {
  return t !== null && Object.prototype.toString.call(t) === '[object Object]';
}
function He(t) {
  return (typeof t == 'number' || t instanceof Number) && isFinite(+t);
}
function it(t, e) {
  return He(t) ? t : e;
}
function me(t, e) {
  return typeof t > 'u' ? e : t;
}
const Hg = (t, e) => (typeof t == 'string' && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t);
function Oe(t, e, n) {
  if (t && typeof t.call == 'function') return t.apply(n, e);
}
function pe(t, e, n, i) {
  let r, a, s;
  if (ze(t))
    if (((a = t.length), i)) for (r = a - 1; r >= 0; r--) e.call(n, t[r], r);
    else for (r = 0; r < a; r++) e.call(n, t[r], r);
  else if (he(t))
    for (s = Object.keys(t), a = s.length, r = 0; r < a; r++) e.call(n, t[s[r]], s[r]);
}
function Vr(t, e) {
  let n, i, r, a;
  if (!t || !e || t.length !== e.length) return !1;
  for (n = 0, i = t.length; n < i; ++n)
    if (((r = t[n]), (a = e[n]), r.datasetIndex !== a.datasetIndex || r.index !== a.index))
      return !1;
  return !0;
}
function Br(t) {
  if (ze(t)) return t.map(Br);
  if (he(t)) {
    const e = /* @__PURE__ */ Object.create(null),
      n = Object.keys(t),
      i = n.length;
    let r = 0;
    for (; r < i; ++r) e[n[r]] = Br(t[n[r]]);
    return e;
  }
  return t;
}
function Nh(t) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(t) === -1;
}
function Vg(t, e, n, i) {
  if (!Nh(t)) return;
  const r = e[t],
    a = n[t];
  he(r) && he(a) ? Si(r, a, i) : (e[t] = Br(a));
}
function Si(t, e, n) {
  const i = ze(e) ? e : [e],
    r = i.length;
  if (!he(t)) return t;
  n = n || {};
  const a = n.merger || Vg;
  let s;
  for (let o = 0; o < r; ++o) {
    if (((s = i[o]), !he(s))) continue;
    const l = Object.keys(s);
    for (let c = 0, h = l.length; c < h; ++c) a(l[c], t, s, n);
  }
  return t;
}
function fi(t, e) {
  return Si(t, e, {
    merger: Bg,
  });
}
function Bg(t, e, n) {
  if (!Nh(t)) return;
  const i = e[t],
    r = n[t];
  he(i) && he(r) ? fi(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Br(r));
}
const Jo = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  '': (t) => t,
  // default resolvers
  x: (t) => t.x,
  y: (t) => t.y,
};
function Ng(t) {
  const e = t.split('.'),
    n = [];
  let i = '';
  for (const r of e)
    (i += r), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (n.push(i), (i = ''));
  return n;
}
function Fg(t) {
  const e = Ng(t);
  return (n) => {
    for (const i of e) {
      if (i === '') break;
      n = n && n[i];
    }
    return n;
  };
}
function Nr(t, e) {
  return (Jo[e] || (Jo[e] = Fg(e)))(t);
}
function zs(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const Fr = (t) => typeof t < 'u',
  nn = (t) => typeof t == 'function',
  el = (t, e) => {
    if (t.size !== e.size) return !1;
    for (const n of t) if (!e.has(n)) return !1;
    return !0;
  };
function $g(t) {
  return t.type === 'mouseup' || t.type === 'click' || t.type === 'contextmenu';
}
const Pe = Math.PI,
  xt = 2 * Pe,
  jg = xt + Pe,
  $r = Number.POSITIVE_INFINITY,
  Wg = Pe / 180,
  Qe = Pe / 2,
  ln = Pe / 4,
  tl = (Pe * 2) / 3,
  Kt = Math.log10,
  Fn = Math.sign;
function pi(t, e, n) {
  return Math.abs(t - e) < n;
}
function nl(t) {
  const e = Math.round(t);
  t = pi(t, e, t / 1e3) ? e : t;
  const n = Math.pow(10, Math.floor(Kt(t))),
    i = t / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function Xg(t) {
  const e = [],
    n = Math.sqrt(t);
  let i;
  for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
  return n === (n | 0) && e.push(n), e.sort((r, a) => r - a).pop(), e;
}
function zi(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Yg(t, e) {
  const n = Math.round(t);
  return n - e <= t && n + e >= t;
}
function Fh(t, e, n) {
  let i, r, a;
  for (i = 0, r = t.length; i < r; i++)
    (a = t[i][n]), isNaN(a) || ((e.min = Math.min(e.min, a)), (e.max = Math.max(e.max, a)));
}
function Zt(t) {
  return t * (Pe / 180);
}
function ks(t) {
  return t * (180 / Pe);
}
function il(t) {
  if (!He(t)) return;
  let e = 1,
    n = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
  return n;
}
function Ug(t, e) {
  const n = e.x - t.x,
    i = e.y - t.y,
    r = Math.sqrt(n * n + i * i);
  let a = Math.atan2(i, n);
  return (
    a < -0.5 * Pe && (a += xt),
    {
      angle: a,
      distance: r,
    }
  );
}
function Fa(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function qg(t, e) {
  return ((t - e + jg) % xt) - Pe;
}
function Mt(t) {
  return ((t % xt) + xt) % xt;
}
function $h(t, e, n, i) {
  const r = Mt(t),
    a = Mt(e),
    s = Mt(n),
    o = Mt(a - r),
    l = Mt(s - r),
    c = Mt(r - a),
    h = Mt(r - s);
  return r === a || r === s || (i && a === s) || (o > l && c < h);
}
function bt(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Gg(t) {
  return bt(t, -32768, 32767);
}
function Kg(t, e, n, i = 1e-6) {
  return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
}
function Os(t, e, n) {
  n = n || ((s) => t[s] < e);
  let i = t.length - 1,
    r = 0,
    a;
  for (; i - r > 1; ) (a = (r + i) >> 1), n(a) ? (r = a) : (i = a);
  return {
    lo: r,
    hi: i,
  };
}
const mn = (t, e, n, i) =>
    Os(
      t,
      n,
      i
        ? (r) => {
            const a = t[r][e];
            return a < n || (a === n && t[r + 1][e] === n);
          }
        : (r) => t[r][e] < n
    ),
  Zg = (t, e, n) => Os(t, n, (i) => t[i][e] >= n);
function Qg(t, e, n) {
  let i = 0,
    r = t.length;
  for (; i < r && t[i] < e; ) i++;
  for (; r > i && t[r - 1] > n; ) r--;
  return i > 0 || r < t.length ? t.slice(i, r) : t;
}
const jh = ['push', 'pop', 'shift', 'splice', 'unshift'];
function Jg(t, e) {
  if (t._chartjs) {
    t._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [e],
    },
  }),
    jh.forEach((n) => {
      const i = '_onData' + zs(n),
        r = t[n];
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        value(...a) {
          const s = r.apply(this, a);
          return (
            t._chartjs.listeners.forEach((o) => {
              typeof o[i] == 'function' && o[i](...a);
            }),
            s
          );
        },
      });
    });
}
function rl(t, e) {
  const n = t._chartjs;
  if (!n) return;
  const i = n.listeners,
    r = i.indexOf(e);
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (jh.forEach((a) => {
        delete t[a];
      }),
      delete t._chartjs);
}
function e5(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const Wh = (function () {
  return typeof window > 'u'
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
})();
function Xh(t, e) {
  let n = [],
    i = !1;
  return function (...r) {
    (n = r),
      i ||
        ((i = !0),
        Wh.call(window, () => {
          (i = !1), t.apply(e, n);
        }));
  };
}
function t5(t, e) {
  let n;
  return function (...i) {
    return e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e;
  };
}
const Yh = (t) => (t === 'start' ? 'left' : t === 'end' ? 'right' : 'center'),
  mi = (t, e, n) => (t === 'start' ? e : t === 'end' ? n : (e + n) / 2);
function n5(t, e, n) {
  const i = e.length;
  let r = 0,
    a = i;
  if (t._sorted) {
    const { iScale: s, _parsed: o } = t,
      l = s.axis,
      { min: c, max: h, minDefined: u, maxDefined: p } = s.getUserBounds();
    u &&
      (r = bt(
        Math.min(
          // @ts-expect-error Need to type _parsed
          mn(o, s.axis, c).lo,
          // @ts-expect-error Need to fix types on _lookupByKey
          n ? i : mn(e, l, s.getPixelForValue(c)).lo
        ),
        0,
        i - 1
      )),
      p
        ? (a =
            bt(
              Math.max(
                // @ts-expect-error Need to type _parsed
                mn(o, s.axis, h, !0).hi + 1,
                // @ts-expect-error Need to fix types on _lookupByKey
                n ? 0 : mn(e, l, s.getPixelForValue(h), !0).hi + 1
              ),
              r,
              i
            ) - r)
        : (a = i - r);
  }
  return {
    start: r,
    count: a,
  };
}
function i5(t) {
  const { xScale: e, yScale: n, _scaleRanges: i } = t,
    r = {
      xmin: e.min,
      xmax: e.max,
      ymin: n.min,
      ymax: n.max,
    };
  if (!i) return (t._scaleRanges = r), !0;
  const a = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max;
  return Object.assign(i, r), a;
}
const Ki = (t) => t === 0 || t === 1,
  al = (t, e, n) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * xt) / n)),
  sl = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * xt) / n) + 1,
  gi = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t) => -Math.cos(t * Qe) + 1,
    easeOutSine: (t) => Math.sin(t * Qe),
    easeInOutSine: (t) => -0.5 * (Math.cos(Pe * t) - 1),
    easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
    easeInOutExpo: (t) =>
      Ki(t)
        ? t
        : t < 0.5
        ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) =>
      (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => (Ki(t) ? t : al(t, 0.075, 0.3)),
    easeOutElastic: (t) => (Ki(t) ? t : sl(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      return Ki(t)
        ? t
        : t < 0.5
        ? 0.5 * al(t * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * sl(t * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(t) {
      return t * t * ((1.70158 + 1) * t - 1.70158);
    },
    easeOutBack(t) {
      return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
    },
    easeInOutBack(t) {
      let e = 1.70158;
      return (t /= 0.5) < 1
        ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
        : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
    },
    easeInBounce: (t) => 1 - gi.easeOutBounce(1 - t),
    easeOutBounce(t) {
      return t < 1 / 2.75
        ? 7.5625 * t * t
        : t < 2 / 2.75
        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
        : t < 2.5 / 2.75
        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    easeInOutBounce: (t) =>
      t < 0.5 ? gi.easeInBounce(t * 2) * 0.5 : gi.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
  };
function Ls(t) {
  if (t && typeof t == 'object') {
    const e = t.toString();
    return e === '[object CanvasPattern]' || e === '[object CanvasGradient]';
  }
  return !1;
}
function ol(t) {
  return Ls(t) ? t : new Mi(t);
}
function xa(t) {
  return Ls(t) ? t : new Mi(t).saturate(0.5).darken(0.1).hexString();
}
const r5 = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  a5 = ['color', 'borderColor', 'backgroundColor'];
function s5(t) {
  t.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    t.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) => e !== 'onProgress' && e !== 'onComplete' && e !== 'fn',
    }),
    t.set('animations', {
      colors: {
        type: 'color',
        properties: a5,
      },
      numbers: {
        type: 'number',
        properties: r5,
      },
    }),
    t.describe('animations', {
      _fallback: 'animation',
    }),
    t.set('transitions', {
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
            fn: (e) => e | 0,
          },
        },
      },
    });
}
function o5(t) {
  t.set('layout', {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });
}
const ll = /* @__PURE__ */ new Map();
function l5(t, e) {
  e = e || {};
  const n = t + JSON.stringify(e);
  let i = ll.get(n);
  return i || ((i = new Intl.NumberFormat(t, e)), ll.set(n, i)), i;
}
function Is(t, e, n) {
  return l5(e, n).format(t);
}
const Uh = {
  values(t) {
    return ze(t) ? t : '' + t;
  },
  numeric(t, e, n) {
    if (t === 0) return '0';
    const i = this.chart.options.locale;
    let r,
      a = t;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (r = 'scientific'), (a = c5(t, n));
    }
    const s = Kt(Math.abs(a)),
      o = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
      l = {
        notation: r,
        minimumFractionDigits: o,
        maximumFractionDigits: o,
      };
    return Object.assign(l, this.options.ticks.format), Is(t, i, l);
  },
  logarithmic(t, e, n) {
    if (t === 0) return '0';
    const i = n[e].significand || t / Math.pow(10, Math.floor(Kt(t)));
    return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
      ? Uh.numeric.call(this, t, e, n)
      : '';
  },
};
function c5(t, e) {
  let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
}
var sa = {
  formatters: Uh,
};
function d5(t) {
  t.set('scale', {
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
      tickWidth: (e, n) => n.lineWidth,
      tickColor: (e, n) => n.color,
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
      callback: sa.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    t.route('scale.ticks', 'color', '', 'color'),
    t.route('scale.grid', 'color', '', 'borderColor'),
    t.route('scale.border', 'color', '', 'borderColor'),
    t.route('scale.title', 'color', '', 'color'),
    t.describe('scale', {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith('before') && !e.startsWith('after') && e !== 'callback' && e !== 'parser',
      _indexable: (e) => e !== 'borderDash' && e !== 'tickBorderDash' && e !== 'dash',
    }),
    t.describe('scales', {
      _fallback: 'scale',
    }),
    t.describe('scale.ticks', {
      _scriptable: (e) => e !== 'backdropPadding' && e !== 'callback',
      _indexable: (e) => e !== 'backdropPadding',
    });
}
const xn = /* @__PURE__ */ Object.create(null),
  $a = /* @__PURE__ */ Object.create(null);
function vi(t, e) {
  if (!e) return t;
  const n = e.split('.');
  for (let i = 0, r = n.length; i < r; ++i) {
    const a = n[i];
    t = t[a] || (t[a] = /* @__PURE__ */ Object.create(null));
  }
  return t;
}
function wa(t, e, n) {
  return typeof e == 'string' ? Si(vi(t, e), n) : Si(vi(t, ''), e);
}
class h5 {
  constructor(e, n) {
    (this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
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
      (this.hoverBackgroundColor = (i, r) => xa(r.backgroundColor)),
      (this.hoverBorderColor = (i, r) => xa(r.borderColor)),
      (this.hoverColor = (i, r) => xa(r.color)),
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
      this.describe(e),
      this.apply(n);
  }
  set(e, n) {
    return wa(this, e, n);
  }
  get(e) {
    return vi(this, e);
  }
  describe(e, n) {
    return wa($a, e, n);
  }
  override(e, n) {
    return wa(xn, e, n);
  }
  route(e, n, i, r) {
    const a = vi(this, e),
      s = vi(this, i),
      o = '_' + n;
    Object.defineProperties(a, {
      [o]: {
        value: a[n],
        writable: !0,
      },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[o],
            c = s[r];
          return he(l) ? Object.assign({}, c, l) : me(l, c);
        },
        set(l) {
          this[o] = l;
        },
      },
    });
  }
  apply(e) {
    e.forEach((n) => n(this));
  }
}
var Ie = /* @__PURE__ */ new h5(
  {
    _scriptable: (t) => !t.startsWith('on'),
    _indexable: (t) => t !== 'events',
    hover: {
      _fallback: 'interaction',
    },
    interaction: {
      _scriptable: !1,
      _indexable: !1,
    },
  },
  [s5, o5, d5]
);
function u5(t) {
  return !t || we(t.size) || we(t.family)
    ? null
    : (t.style ? t.style + ' ' : '') + (t.weight ? t.weight + ' ' : '') + t.size + 'px ' + t.family;
}
function jr(t, e, n, i, r) {
  let a = e[r];
  return a || ((a = e[r] = t.measureText(r).width), n.push(r)), a > i && (i = a), i;
}
function f5(t, e, n, i) {
  i = i || {};
  let r = (i.data = i.data || {}),
    a = (i.garbageCollect = i.garbageCollect || []);
  i.font !== e && ((r = i.data = {}), (a = i.garbageCollect = []), (i.font = e)),
    t.save(),
    (t.font = e);
  let s = 0;
  const o = n.length;
  let l, c, h, u, p;
  for (l = 0; l < o; l++)
    if (((u = n[l]), u != null && !ze(u))) s = jr(t, r, a, s, u);
    else if (ze(u))
      for (c = 0, h = u.length; c < h; c++)
        (p = u[c]), p != null && !ze(p) && (s = jr(t, r, a, s, p));
  t.restore();
  const m = a.length / 2;
  if (m > n.length) {
    for (l = 0; l < m; l++) delete r[a[l]];
    a.splice(0, m);
  }
  return s;
}
function cn(t, e, n) {
  const i = t.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((e - r) * i) / i + r;
}
function cl(t, e) {
  (e = e || t.getContext('2d')),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore();
}
function ja(t, e, n, i) {
  p5(t, e, n, i, null);
}
function p5(t, e, n, i, r) {
  let a, s, o, l, c, h, u, p;
  const m = e.pointStyle,
    g = e.rotation,
    b = e.radius;
  let v = (g || 0) * Wg;
  if (
    m &&
    typeof m == 'object' &&
    ((a = m.toString()), a === '[object HTMLImageElement]' || a === '[object HTMLCanvasElement]')
  ) {
    t.save(),
      t.translate(n, i),
      t.rotate(v),
      t.drawImage(m, -m.width / 2, -m.height / 2, m.width, m.height),
      t.restore();
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch ((t.beginPath(), m)) {
      default:
        r ? t.ellipse(n, i, r / 2, b, 0, 0, xt) : t.arc(n, i, b, 0, xt), t.closePath();
        break;
      case 'triangle':
        (h = r ? r / 2 : b),
          t.moveTo(n + Math.sin(v) * h, i - Math.cos(v) * b),
          (v += tl),
          t.lineTo(n + Math.sin(v) * h, i - Math.cos(v) * b),
          (v += tl),
          t.lineTo(n + Math.sin(v) * h, i - Math.cos(v) * b),
          t.closePath();
        break;
      case 'rectRounded':
        (c = b * 0.516),
          (l = b - c),
          (s = Math.cos(v + ln) * l),
          (u = Math.cos(v + ln) * (r ? r / 2 - c : l)),
          (o = Math.sin(v + ln) * l),
          (p = Math.sin(v + ln) * (r ? r / 2 - c : l)),
          t.arc(n - u, i - o, c, v - Pe, v - Qe),
          t.arc(n + p, i - s, c, v - Qe, v),
          t.arc(n + u, i + o, c, v, v + Qe),
          t.arc(n - p, i + s, c, v + Qe, v + Pe),
          t.closePath();
        break;
      case 'rect':
        if (!g) {
          (l = Math.SQRT1_2 * b), (h = r ? r / 2 : l), t.rect(n - h, i - l, 2 * h, 2 * l);
          break;
        }
        v += ln;
      case 'rectRot':
        (u = Math.cos(v) * (r ? r / 2 : b)),
          (s = Math.cos(v) * b),
          (o = Math.sin(v) * b),
          (p = Math.sin(v) * (r ? r / 2 : b)),
          t.moveTo(n - u, i - o),
          t.lineTo(n + p, i - s),
          t.lineTo(n + u, i + o),
          t.lineTo(n - p, i + s),
          t.closePath();
        break;
      case 'crossRot':
        v += ln;
      case 'cross':
        (u = Math.cos(v) * (r ? r / 2 : b)),
          (s = Math.cos(v) * b),
          (o = Math.sin(v) * b),
          (p = Math.sin(v) * (r ? r / 2 : b)),
          t.moveTo(n - u, i - o),
          t.lineTo(n + u, i + o),
          t.moveTo(n + p, i - s),
          t.lineTo(n - p, i + s);
        break;
      case 'star':
        (u = Math.cos(v) * (r ? r / 2 : b)),
          (s = Math.cos(v) * b),
          (o = Math.sin(v) * b),
          (p = Math.sin(v) * (r ? r / 2 : b)),
          t.moveTo(n - u, i - o),
          t.lineTo(n + u, i + o),
          t.moveTo(n + p, i - s),
          t.lineTo(n - p, i + s),
          (v += ln),
          (u = Math.cos(v) * (r ? r / 2 : b)),
          (s = Math.cos(v) * b),
          (o = Math.sin(v) * b),
          (p = Math.sin(v) * (r ? r / 2 : b)),
          t.moveTo(n - u, i - o),
          t.lineTo(n + u, i + o),
          t.moveTo(n + p, i - s),
          t.lineTo(n - p, i + s);
        break;
      case 'line':
        (s = r ? r / 2 : Math.cos(v) * b),
          (o = Math.sin(v) * b),
          t.moveTo(n - s, i - o),
          t.lineTo(n + s, i + o);
        break;
      case 'dash':
        t.moveTo(n, i), t.lineTo(n + Math.cos(v) * (r ? r / 2 : b), i + Math.sin(v) * b);
        break;
      case !1:
        t.closePath();
        break;
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function jt(t, e, n) {
  return (
    (n = n || 0.5),
    !e || (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n)
  );
}
function qh(t, e) {
  t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
}
function Gh(t) {
  t.restore();
}
function m5(t, e, n, i, r) {
  if (!e) return t.lineTo(n.x, n.y);
  if (r === 'middle') {
    const a = (e.x + n.x) / 2;
    t.lineTo(a, e.y), t.lineTo(a, n.y);
  } else (r === 'after') != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
  t.lineTo(n.x, n.y);
}
function g5(t, e, n, i) {
  if (!e) return t.lineTo(n.x, n.y);
  t.bezierCurveTo(
    i ? e.cp1x : e.cp2x,
    i ? e.cp1y : e.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function v5(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]),
    we(e.rotation) || t.rotate(e.rotation),
    e.color && (t.fillStyle = e.color),
    e.textAlign && (t.textAlign = e.textAlign),
    e.textBaseline && (t.textBaseline = e.textBaseline);
}
function b5(t, e, n, i, r) {
  if (r.strikethrough || r.underline) {
    const a = t.measureText(i),
      s = e - a.actualBoundingBoxLeft,
      o = e + a.actualBoundingBoxRight,
      l = n - a.actualBoundingBoxAscent,
      c = n + a.actualBoundingBoxDescent,
      h = r.strikethrough ? (l + c) / 2 : c;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = r.decorationWidth || 2),
      t.moveTo(s, h),
      t.lineTo(o, h),
      t.stroke();
  }
}
function y5(t, e) {
  const n = t.fillStyle;
  (t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = n);
}
function ki(t, e, n, i, r, a = {}) {
  const s = ze(e) ? e : [e],
    o = a.strokeWidth > 0 && a.strokeColor !== '';
  let l, c;
  for (t.save(), t.font = r.string, v5(t, a), l = 0; l < s.length; ++l)
    (c = s[l]),
      a.backdrop && y5(t, a.backdrop),
      o &&
        (a.strokeColor && (t.strokeStyle = a.strokeColor),
        we(a.strokeWidth) || (t.lineWidth = a.strokeWidth),
        t.strokeText(c, n, i, a.maxWidth)),
      t.fillText(c, n, i, a.maxWidth),
      b5(t, n, i, c, a),
      (i += Number(r.lineHeight));
  t.restore();
}
function Wa(t, e) {
  const { x: n, y: i, w: r, h: a, radius: s } = e;
  t.arc(n + s.topLeft, i + s.topLeft, s.topLeft, -Qe, Pe, !0),
    t.lineTo(n, i + a - s.bottomLeft),
    t.arc(n + s.bottomLeft, i + a - s.bottomLeft, s.bottomLeft, Pe, Qe, !0),
    t.lineTo(n + r - s.bottomRight, i + a),
    t.arc(n + r - s.bottomRight, i + a - s.bottomRight, s.bottomRight, Qe, 0, !0),
    t.lineTo(n + r, i + s.topRight),
    t.arc(n + r - s.topRight, i + s.topRight, s.topRight, 0, -Qe, !0),
    t.lineTo(n + s.topLeft, i);
}
const x5 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  w5 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function E5(t, e) {
  const n = ('' + t).match(x5);
  if (!n || n[1] === 'normal') return e * 1.2;
  switch (((t = +n[2]), n[3])) {
    case 'px':
      return t;
    case '%':
      t /= 100;
      break;
  }
  return e * t;
}
const C5 = (t) => +t || 0;
function Kh(t, e) {
  const n = {},
    i = he(e),
    r = i ? Object.keys(e) : e,
    a = he(t) ? (i ? (s) => me(t[s], t[e[s]]) : (s) => t[s]) : () => t;
  for (const s of r) n[s] = C5(a(s));
  return n;
}
function _5(t) {
  return Kh(t, {
    top: 'y',
    right: 'x',
    bottom: 'y',
    left: 'x',
  });
}
function bi(t) {
  return Kh(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function ct(t) {
  const e = _5(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Ue(t, e) {
  (t = t || {}), (e = e || Ie.font);
  let n = me(t.size, e.size);
  typeof n == 'string' && (n = parseInt(n, 10));
  let i = me(t.style, e.style);
  i &&
    !('' + i).match(w5) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const r = {
    family: me(t.family, e.family),
    lineHeight: E5(me(t.lineHeight, e.lineHeight), n),
    size: n,
    style: i,
    weight: me(t.weight, e.weight),
    string: '',
  };
  return (r.string = u5(r)), r;
}
function Zi(t, e, n, i) {
  let r = !0,
    a,
    s,
    o;
  for (a = 0, s = t.length; a < s; ++a)
    if (
      ((o = t[a]),
      o !== void 0 &&
        (e !== void 0 && typeof o == 'function' && ((o = o(e)), (r = !1)),
        n !== void 0 && ze(o) && ((o = o[n % o.length]), (r = !1)),
        o !== void 0))
    )
      return i && !r && (i.cacheable = !1), o;
}
function M5(t, e, n) {
  const { min: i, max: r } = t,
    a = Hg(e, (r - i) / 2),
    s = (o, l) => (n && o === 0 ? 0 : o + l);
  return {
    min: s(i, -Math.abs(a)),
    max: s(r, a),
  };
}
function sn(t, e) {
  return Object.assign(Object.create(t), e);
}
function Rs(t, e = [''], n, i, r = () => t[0]) {
  const a = n || t;
  typeof i > 'u' && (i = eu('_fallback', t));
  const s = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: t,
    _rootScopes: a,
    _fallback: i,
    _getTarget: r,
    override: (o) => Rs([o, ...t], e, a, i),
  };
  return new Proxy(s, {
    /**
     * A trap for the delete operator.
     */
    deleteProperty(o, l) {
      return delete o[l], delete o._keys, delete t[0][l], !0;
    },
    /**
     * A trap for getting property values.
     */
    get(o, l) {
      return Qh(o, l, () => D5(l, e, t, o));
    },
    /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */
    getOwnPropertyDescriptor(o, l) {
      return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
    },
    /**
     * A trap for Object.getPrototypeOf.
     */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    /**
     * A trap for the in operator.
     */
    has(o, l) {
      return hl(o).includes(l);
    },
    /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */
    ownKeys(o) {
      return hl(o);
    },
    /**
     * A trap for setting property values.
     */
    set(o, l, c) {
      const h = o._storage || (o._storage = r());
      return (o[l] = h[l] = c), delete o._keys, !0;
    },
  });
}
function $n(t, e, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Zh(t, i),
    setContext: (a) => $n(t, a, n, i),
    override: (a) => $n(t.override(a), e, n, i),
  };
  return new Proxy(r, {
    /**
     * A trap for the delete operator.
     */
    deleteProperty(a, s) {
      return delete a[s], delete t[s], !0;
    },
    /**
     * A trap for getting property values.
     */
    get(a, s, o) {
      return Qh(a, s, () => z5(a, s, o));
    },
    /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */
    getOwnPropertyDescriptor(a, s) {
      return a._descriptors.allKeys
        ? Reflect.has(t, s)
          ? {
              enumerable: !0,
              configurable: !0,
            }
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, s);
    },
    /**
     * A trap for Object.getPrototypeOf.
     */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t);
    },
    /**
     * A trap for the in operator.
     */
    has(a, s) {
      return Reflect.has(t, s);
    },
    /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */
    ownKeys() {
      return Reflect.ownKeys(t);
    },
    /**
     * A trap for setting property values.
     */
    set(a, s, o) {
      return (t[s] = o), delete a[s], !0;
    },
  });
}
function Zh(
  t,
  e = {
    scriptable: !0,
    indexable: !0,
  }
) {
  const { _scriptable: n = e.scriptable, _indexable: i = e.indexable, _allKeys: r = e.allKeys } = t;
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: nn(n) ? n : () => n,
    isIndexable: nn(i) ? i : () => i,
  };
}
const S5 = (t, e) => (t ? t + zs(e) : e),
  Ds = (t, e) =>
    he(e) && t !== 'adapters' && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function Qh(t, e, n) {
  if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
  const i = n();
  return (t[e] = i), i;
}
function z5(t, e, n) {
  const { _proxy: i, _context: r, _subProxy: a, _descriptors: s } = t;
  let o = i[e];
  return (
    nn(o) && s.isScriptable(e) && (o = k5(e, o, t, n)),
    ze(o) && o.length && (o = O5(e, o, t, s.isIndexable)),
    Ds(e, o) && (o = $n(o, r, a && a[e], s)),
    o
  );
}
function k5(t, e, n, i) {
  const { _proxy: r, _context: a, _subProxy: s, _stack: o } = n;
  if (o.has(t)) throw new Error('Recursion detected: ' + Array.from(o).join('->') + '->' + t);
  o.add(t);
  let l = e(a, s || i);
  return o.delete(t), Ds(t, l) && (l = As(r._scopes, r, t, l)), l;
}
function O5(t, e, n, i) {
  const { _proxy: r, _context: a, _subProxy: s, _descriptors: o } = n;
  if (typeof a.index < 'u' && i(t)) return e[a.index % e.length];
  if (he(e[0])) {
    const l = e,
      c = r._scopes.filter((h) => h !== l);
    e = [];
    for (const h of l) {
      const u = As(c, r, t, h);
      e.push($n(u, a, s && s[t], o));
    }
  }
  return e;
}
function Jh(t, e, n) {
  return nn(t) ? t(e, n) : t;
}
const L5 = (t, e) => (t === !0 ? e : typeof t == 'string' ? Nr(e, t) : void 0);
function I5(t, e, n, i, r) {
  for (const a of e) {
    const s = L5(n, a);
    if (s) {
      t.add(s);
      const o = Jh(s._fallback, n, r);
      if (typeof o < 'u' && o !== n && o !== i) return o;
    } else if (s === !1 && typeof i < 'u' && n !== i) return null;
  }
  return !1;
}
function As(t, e, n, i) {
  const r = e._rootScopes,
    a = Jh(e._fallback, n, i),
    s = [...t, ...r],
    o = /* @__PURE__ */ new Set();
  o.add(i);
  let l = dl(o, s, n, a || n, i);
  return l === null || (typeof a < 'u' && a !== n && ((l = dl(o, s, a, l, i)), l === null))
    ? !1
    : Rs(Array.from(o), [''], r, a, () => R5(e, n, i));
}
function dl(t, e, n, i, r) {
  for (; n; ) n = I5(t, e, n, i, r);
  return n;
}
function R5(t, e, n) {
  const i = t._getTarget();
  e in i || (i[e] = {});
  const r = i[e];
  return ze(r) && he(n) ? n : r || {};
}
function D5(t, e, n, i) {
  let r;
  for (const a of e)
    if (((r = eu(S5(a, t), n)), typeof r < 'u')) return Ds(t, r) ? As(n, i, t, r) : r;
}
function eu(t, e) {
  for (const n of e) {
    if (!n) continue;
    const i = n[t];
    if (typeof i < 'u') return i;
  }
}
function hl(t) {
  let e = t._keys;
  return e || (e = t._keys = A5(t._scopes)), e;
}
function A5(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t) for (const i of Object.keys(n).filter((r) => !r.startsWith('_'))) e.add(i);
  return Array.from(e);
}
const T5 = Number.EPSILON || 1e-14,
  jn = (t, e) => e < t.length && !t[e].skip && t[e],
  tu = (t) => (t === 'x' ? 'y' : 'x');
function P5(t, e, n, i) {
  const r = t.skip ? e : t,
    a = e,
    s = n.skip ? e : n,
    o = Fa(a, r),
    l = Fa(s, a);
  let c = o / (o + l),
    h = l / (o + l);
  (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
  const u = i * c,
    p = i * h;
  return {
    previous: {
      x: a.x - u * (s.x - r.x),
      y: a.y - u * (s.y - r.y),
    },
    next: {
      x: a.x + p * (s.x - r.x),
      y: a.y + p * (s.y - r.y),
    },
  };
}
function H5(t, e, n) {
  const i = t.length;
  let r,
    a,
    s,
    o,
    l,
    c = jn(t, 0);
  for (let h = 0; h < i - 1; ++h)
    if (((l = c), (c = jn(t, h + 1)), !(!l || !c))) {
      if (pi(e[h], 0, T5)) {
        n[h] = n[h + 1] = 0;
        continue;
      }
      (r = n[h] / e[h]),
        (a = n[h + 1] / e[h]),
        (o = Math.pow(r, 2) + Math.pow(a, 2)),
        !(o <= 9) && ((s = 3 / Math.sqrt(o)), (n[h] = r * s * e[h]), (n[h + 1] = a * s * e[h]));
    }
}
function V5(t, e, n = 'x') {
  const i = tu(n),
    r = t.length;
  let a,
    s,
    o,
    l = jn(t, 0);
  for (let c = 0; c < r; ++c) {
    if (((s = o), (o = l), (l = jn(t, c + 1)), !o)) continue;
    const h = o[n],
      u = o[i];
    s && ((a = (h - s[n]) / 3), (o[`cp1${n}`] = h - a), (o[`cp1${i}`] = u - a * e[c])),
      l && ((a = (l[n] - h) / 3), (o[`cp2${n}`] = h + a), (o[`cp2${i}`] = u + a * e[c]));
  }
}
function B5(t, e = 'x') {
  const n = tu(e),
    i = t.length,
    r = Array(i).fill(0),
    a = Array(i);
  let s,
    o,
    l,
    c = jn(t, 0);
  for (s = 0; s < i; ++s)
    if (((o = l), (l = c), (c = jn(t, s + 1)), !!l)) {
      if (c) {
        const h = c[e] - l[e];
        r[s] = h !== 0 ? (c[n] - l[n]) / h : 0;
      }
      a[s] = o ? (c ? (Fn(r[s - 1]) !== Fn(r[s]) ? 0 : (r[s - 1] + r[s]) / 2) : r[s - 1]) : r[s];
    }
  H5(t, r, a), V5(t, a, e);
}
function Qi(t, e, n) {
  return Math.max(Math.min(t, n), e);
}
function N5(t, e) {
  let n,
    i,
    r,
    a,
    s,
    o = jt(t[0], e);
  for (n = 0, i = t.length; n < i; ++n)
    (s = a),
      (a = o),
      (o = n < i - 1 && jt(t[n + 1], e)),
      a &&
        ((r = t[n]),
        s && ((r.cp1x = Qi(r.cp1x, e.left, e.right)), (r.cp1y = Qi(r.cp1y, e.top, e.bottom))),
        o && ((r.cp2x = Qi(r.cp2x, e.left, e.right)), (r.cp2y = Qi(r.cp2y, e.top, e.bottom))));
}
function F5(t, e, n, i, r) {
  let a, s, o, l;
  if ((e.spanGaps && (t = t.filter((c) => !c.skip)), e.cubicInterpolationMode === 'monotone'))
    B5(t, r);
  else {
    let c = i ? t[t.length - 1] : t[0];
    for (a = 0, s = t.length; a < s; ++a)
      (o = t[a]),
        (l = P5(c, o, t[Math.min(a + 1, s - (i ? 0 : 1)) % s], e.tension)),
        (o.cp1x = l.previous.x),
        (o.cp1y = l.previous.y),
        (o.cp2x = l.next.x),
        (o.cp2y = l.next.y),
        (c = o);
  }
  e.capBezierPoints && N5(t, n);
}
function nu() {
  return typeof window < 'u' && typeof document < 'u';
}
function Ts(t) {
  let e = t.parentNode;
  return e && e.toString() === '[object ShadowRoot]' && (e = e.host), e;
}
function Wr(t, e, n) {
  let i;
  return (
    typeof t == 'string'
      ? ((i = parseInt(t, 10)), t.indexOf('%') !== -1 && (i = (i / 100) * e.parentNode[n]))
      : (i = t),
    i
  );
}
const oa = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function $5(t, e) {
  return oa(t).getPropertyValue(e);
}
const j5 = ['top', 'right', 'bottom', 'left'];
function vn(t, e, n) {
  const i = {};
  n = n ? '-' + n : '';
  for (let r = 0; r < 4; r++) {
    const a = j5[r];
    i[a] = parseFloat(t[e + '-' + a + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const W5 = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function X5(t, e) {
  const n = t.touches,
    i = n && n.length ? n[0] : t,
    { offsetX: r, offsetY: a } = i;
  let s = !1,
    o,
    l;
  if (W5(r, a, t.target)) (o = r), (l = a);
  else {
    const c = e.getBoundingClientRect();
    (o = i.clientX - c.left), (l = i.clientY - c.top), (s = !0);
  }
  return {
    x: o,
    y: l,
    box: s,
  };
}
function un(t, e) {
  if ('native' in t) return t;
  const { canvas: n, currentDevicePixelRatio: i } = e,
    r = oa(n),
    a = r.boxSizing === 'border-box',
    s = vn(r, 'padding'),
    o = vn(r, 'border', 'width'),
    { x: l, y: c, box: h } = X5(t, n),
    u = s.left + (h && o.left),
    p = s.top + (h && o.top);
  let { width: m, height: g } = e;
  return (
    a && ((m -= s.width + o.width), (g -= s.height + o.height)),
    {
      x: Math.round((((l - u) / m) * n.width) / i),
      y: Math.round((((c - p) / g) * n.height) / i),
    }
  );
}
function Y5(t, e, n) {
  let i, r;
  if (e === void 0 || n === void 0) {
    const a = Ts(t);
    if (!a) (e = t.clientWidth), (n = t.clientHeight);
    else {
      const s = a.getBoundingClientRect(),
        o = oa(a),
        l = vn(o, 'border', 'width'),
        c = vn(o, 'padding');
      (e = s.width - c.width - l.width),
        (n = s.height - c.height - l.height),
        (i = Wr(o.maxWidth, a, 'clientWidth')),
        (r = Wr(o.maxHeight, a, 'clientHeight'));
    }
  }
  return {
    width: e,
    height: n,
    maxWidth: i || $r,
    maxHeight: r || $r,
  };
}
const Ji = (t) => Math.round(t * 10) / 10;
function U5(t, e, n, i) {
  const r = oa(t),
    a = vn(r, 'margin'),
    s = Wr(r.maxWidth, t, 'clientWidth') || $r,
    o = Wr(r.maxHeight, t, 'clientHeight') || $r,
    l = Y5(t, e, n);
  let { width: c, height: h } = l;
  if (r.boxSizing === 'content-box') {
    const p = vn(r, 'border', 'width'),
      m = vn(r, 'padding');
    (c -= m.width + p.width), (h -= m.height + p.height);
  }
  return (
    (c = Math.max(0, c - a.width)),
    (h = Math.max(0, i ? c / i : h - a.height)),
    (c = Ji(Math.min(c, s, l.maxWidth))),
    (h = Ji(Math.min(h, o, l.maxHeight))),
    c && !h && (h = Ji(c / 2)),
    (e !== void 0 || n !== void 0) &&
      i &&
      l.height &&
      h > l.height &&
      ((h = l.height), (c = Ji(Math.floor(h * i)))),
    {
      width: c,
      height: h,
    }
  );
}
function ul(t, e, n) {
  const i = e || 1,
    r = Math.floor(t.height * i),
    a = Math.floor(t.width * i);
  (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
  const s = t.canvas;
  return (
    s.style &&
      (n || (!s.style.height && !s.style.width)) &&
      ((s.style.height = `${t.height}px`), (s.style.width = `${t.width}px`)),
    t.currentDevicePixelRatio !== i || s.height !== r || s.width !== a
      ? ((t.currentDevicePixelRatio = i),
        (s.height = r),
        (s.width = a),
        t.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const q5 = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    window.addEventListener('test', null, e), window.removeEventListener('test', null, e);
  } catch {}
  return t;
})();
function fl(t, e) {
  const n = $5(t, e),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function fn(t, e, n, i) {
  return {
    x: t.x + n * (e.x - t.x),
    y: t.y + n * (e.y - t.y),
  };
}
function G5(t, e, n, i) {
  return {
    x: t.x + n * (e.x - t.x),
    y:
      i === 'middle'
        ? n < 0.5
          ? t.y
          : e.y
        : i === 'after'
        ? n < 1
          ? t.y
          : e.y
        : n > 0
        ? e.y
        : t.y,
  };
}
function K5(t, e, n, i) {
  const r = {
      x: t.cp2x,
      y: t.cp2y,
    },
    a = {
      x: e.cp1x,
      y: e.cp1y,
    },
    s = fn(t, r, n),
    o = fn(r, a, n),
    l = fn(a, e, n),
    c = fn(s, o, n),
    h = fn(o, l, n);
  return fn(c, h, n);
}
const Z5 = function (t, e) {
    return {
      x(n) {
        return t + t + e - n;
      },
      setWidth(n) {
        e = n;
      },
      textAlign(n) {
        return n === 'center' ? n : n === 'right' ? 'left' : 'right';
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  Q5 = function () {
    return {
      x(t) {
        return t;
      },
      setWidth(t) {},
      textAlign(t) {
        return t;
      },
      xPlus(t, e) {
        return t + e;
      },
      leftForLtr(t, e) {
        return t;
      },
    };
  };
function Ea(t, e, n) {
  return t ? Z5(e, n) : Q5();
}
function J5(t, e) {
  let n, i;
  (e === 'ltr' || e === 'rtl') &&
    ((n = t.canvas.style),
    (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
    n.setProperty('direction', e, 'important'),
    (t.prevTextDirection = i));
}
function ev(t, e) {
  e !== void 0 && (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]));
}
function iu(t) {
  return t === 'angle'
    ? {
        between: $h,
        compare: qg,
        normalize: Mt,
      }
    : {
        between: Kg,
        compare: (e, n) => e - n,
        normalize: (e) => e,
      };
}
function pl({ start: t, end: e, count: n, loop: i, style: r }) {
  return {
    start: t % n,
    end: e % n,
    loop: i && (e - t + 1) % n === 0,
    style: r,
  };
}
function tv(t, e, n) {
  const { property: i, start: r, end: a } = n,
    { between: s, normalize: o } = iu(i),
    l = e.length;
  let { start: c, end: h, loop: u } = t,
    p,
    m;
  if (u) {
    for (c += l, h += l, p = 0, m = l; p < m && s(o(e[c % l][i]), r, a); ++p) c--, h--;
    (c %= l), (h %= l);
  }
  return (
    h < c && (h += l),
    {
      start: c,
      end: h,
      loop: u,
      style: t.style,
    }
  );
}
function nv(t, e, n) {
  if (!n) return [t];
  const { property: i, start: r, end: a } = n,
    s = e.length,
    { compare: o, between: l, normalize: c } = iu(i),
    { start: h, end: u, loop: p, style: m } = tv(t, e, n),
    g = [];
  let b = !1,
    v = null,
    y,
    w,
    S;
  const M = () => l(r, S, y) && o(r, S) !== 0,
    _ = () => o(a, y) === 0 || l(a, S, y),
    O = () => b || M(),
    C = () => !b || _();
  for (let L = h, T = h; L <= u; ++L)
    (w = e[L % s]),
      !w.skip &&
        ((y = c(w[i])),
        y !== S &&
          ((b = l(y, r, a)),
          v === null && O() && (v = o(y, r) === 0 ? L : T),
          v !== null &&
            C() &&
            (g.push(
              pl({
                start: v,
                end: L,
                loop: p,
                count: s,
                style: m,
              })
            ),
            (v = null)),
          (T = L),
          (S = y)));
  return (
    v !== null &&
      g.push(
        pl({
          start: v,
          end: u,
          loop: p,
          count: s,
          style: m,
        })
      ),
    g
  );
}
function iv(t, e) {
  const n = [],
    i = t.segments;
  for (let r = 0; r < i.length; r++) {
    const a = nv(i[r], t.points, e);
    a.length && n.push(...a);
  }
  return n;
}
function rv(t, e, n, i) {
  let r = 0,
    a = e - 1;
  if (n && !i) for (; r < e && !t[r].skip; ) r++;
  for (; r < e && t[r].skip; ) r++;
  for (r %= e, n && (a += r); a > r && t[a % e].skip; ) a--;
  return (
    (a %= e),
    {
      start: r,
      end: a,
    }
  );
}
function av(t, e, n, i) {
  const r = t.length,
    a = [];
  let s = e,
    o = t[e],
    l;
  for (l = e + 1; l <= n; ++l) {
    const c = t[l % r];
    c.skip || c.stop
      ? o.skip ||
        ((i = !1),
        a.push({
          start: e % r,
          end: (l - 1) % r,
          loop: i,
        }),
        (e = s = c.stop ? l : null))
      : ((s = l), o.skip && (e = l)),
      (o = c);
  }
  return (
    s !== null &&
      a.push({
        start: e % r,
        end: s % r,
        loop: i,
      }),
    a
  );
}
function sv(t, e) {
  const n = t.points,
    i = t.options.spanGaps,
    r = n.length;
  if (!r) return [];
  const a = !!t._loop,
    { start: s, end: o } = rv(n, r, a, i);
  if (i === !0)
    return ml(
      t,
      [
        {
          start: s,
          end: o,
          loop: a,
        },
      ],
      n,
      e
    );
  const l = o < s ? o + r : o,
    c = !!t._fullLoop && s === 0 && o === r - 1;
  return ml(t, av(n, s, l, c), n, e);
}
function ml(t, e, n, i) {
  return !i || !i.setContext || !n ? e : ov(t, e, n, i);
}
function ov(t, e, n, i) {
  const r = t._chart.getContext(),
    a = gl(t.options),
    {
      _datasetIndex: s,
      options: { spanGaps: o },
    } = t,
    l = n.length,
    c = [];
  let h = a,
    u = e[0].start,
    p = u;
  function m(g, b, v, y) {
    const w = o ? -1 : 1;
    if (g !== b) {
      for (g += l; n[g % l].skip; ) g -= w;
      for (; n[b % l].skip; ) b += w;
      g % l !== b % l &&
        (c.push({
          start: g % l,
          end: b % l,
          loop: v,
          style: y,
        }),
        (h = y),
        (u = b % l));
    }
  }
  for (const g of e) {
    u = o ? u : g.start;
    let b = n[u % l],
      v;
    for (p = u + 1; p <= g.end; p++) {
      const y = n[p % l];
      (v = gl(
        i.setContext(
          sn(r, {
            type: 'segment',
            p0: b,
            p1: y,
            p0DataIndex: (p - 1) % l,
            p1DataIndex: p % l,
            datasetIndex: s,
          })
        )
      )),
        lv(v, h) && m(u, p - 1, g.loop, h),
        (b = y),
        (h = v);
    }
    u < p - 1 && m(u, p - 1, g.loop, h);
  }
  return c;
}
function gl(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor,
  };
}
function lv(t, e) {
  if (!e) return !1;
  const n = [],
    i = function (r, a) {
      return Ls(a) ? (n.includes(a) || n.push(a), n.indexOf(a)) : a;
    };
  return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class cv {
  constructor() {
    (this._request = null),
      (this._charts = /* @__PURE__ */ new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(e, n, i, r) {
    const a = n.listeners[r],
      s = n.duration;
    a.forEach((o) =>
      o({
        chart: e,
        initial: n.initial,
        numSteps: s,
        currentStep: Math.min(i - n.start, s),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Wh.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let n = 0;
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return;
      const a = i.items;
      let s = a.length - 1,
        o = !1,
        l;
      for (; s >= 0; --s)
        (l = a[s]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total), l.tick(e), (o = !0))
            : ((a[s] = a[a.length - 1]), a.pop());
      o && (r.draw(), this._notify(r, i, e, 'progress')),
        a.length || ((i.running = !1), this._notify(r, i, e, 'complete'), (i.initial = !1)),
        (n += a.length);
    }),
      (this._lastDate = e),
      n === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const n = this._charts;
    let i = n.get(e);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: {
            complete: [],
            progress: [],
          },
        }),
        n.set(e, i)),
      i
    );
  }
  listen(e, n, i) {
    this._getAnims(e).listeners[n].push(i);
  }
  add(e, n) {
    !n || !n.length || this._getAnims(e).items.push(...n);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const n = this._charts.get(e);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const n = this._charts.get(e);
    return !(!n || !n.running || !n.items.length);
  }
  stop(e) {
    const n = this._charts.get(e);
    if (!n || !n.items.length) return;
    const i = n.items;
    let r = i.length - 1;
    for (; r >= 0; --r) i[r].cancel();
    (n.items = []), this._notify(e, n, Date.now(), 'complete');
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var Nt = /* @__PURE__ */ new cv();
const vl = 'transparent',
  dv = {
    boolean(t, e, n) {
      return n > 0.5 ? e : t;
    },
    color(t, e, n) {
      const i = ol(t || vl),
        r = i.valid && ol(e || vl);
      return r && r.valid ? r.mix(i, n).hexString() : e;
    },
    number(t, e, n) {
      return t + (e - t) * n;
    },
  };
class hv {
  constructor(e, n, i, r) {
    const a = n[i];
    r = Zi([e.to, r, a, e.from]);
    const s = Zi([e.from, a, r]);
    (this._active = !0),
      (this._fn = e.fn || dv[e.type || typeof s]),
      (this._easing = gi[e.easing] || gi.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = s),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, n, i) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        a = i - this._start,
        s = this._duration - a;
      (this._start = i),
        (this._duration = Math.floor(Math.max(s, e.duration))),
        (this._total += a),
        (this._loop = !!e.loop),
        (this._to = Zi([e.to, n, r, e.from])),
        (this._from = Zi([e.from, r, n]));
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const n = e - this._start,
      i = this._duration,
      r = this._prop,
      a = this._from,
      s = this._loop,
      o = this._to;
    let l;
    if (((this._active = a !== o && (s || n < i)), !this._active)) {
      (this._target[r] = o), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[r] = a;
      return;
    }
    (l = (n / i) % 2),
      (l = s && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[r] = this._fn(a, o, l));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      e.push({
        res: n,
        rej: i,
      });
    });
  }
  _notify(e) {
    const n = e ? 'res' : 'rej',
      i = this._promises || [];
    for (let r = 0; r < i.length; r++) i[r][n]();
  }
}
class ru {
  constructor(e, n) {
    (this._chart = e), (this._properties = /* @__PURE__ */ new Map()), this.configure(n);
  }
  configure(e) {
    if (!he(e)) return;
    const n = Object.keys(Ie.animation),
      i = this._properties;
    Object.getOwnPropertyNames(e).forEach((r) => {
      const a = e[r];
      if (!he(a)) return;
      const s = {};
      for (const o of n) s[o] = a[o];
      ((ze(a.properties) && a.properties) || [r]).forEach((o) => {
        (o === r || !i.has(o)) && i.set(o, s);
      });
    });
  }
  _animateOptions(e, n) {
    const i = n.options,
      r = fv(e, i);
    if (!r) return [];
    const a = this._createAnimations(r, i);
    return (
      i.$shared &&
        uv(e.options.$animations, i).then(
          () => {
            e.options = i;
          },
          () => {}
        ),
      a
    );
  }
  _createAnimations(e, n) {
    const i = this._properties,
      r = [],
      a = e.$animations || (e.$animations = {}),
      s = Object.keys(n),
      o = Date.now();
    let l;
    for (l = s.length - 1; l >= 0; --l) {
      const c = s[l];
      if (c.charAt(0) === '$') continue;
      if (c === 'options') {
        r.push(...this._animateOptions(e, n));
        continue;
      }
      const h = n[c];
      let u = a[c];
      const p = i.get(c);
      if (u)
        if (p && u.active()) {
          u.update(p, h, o);
          continue;
        } else u.cancel();
      if (!p || !p.duration) {
        e[c] = h;
        continue;
      }
      (a[c] = u = new hv(p, e, c, h)), r.push(u);
    }
    return r;
  }
  update(e, n) {
    if (this._properties.size === 0) {
      Object.assign(e, n);
      return;
    }
    const i = this._createAnimations(e, n);
    if (i.length) return Nt.add(this._chart, i), !0;
  }
}
function uv(t, e) {
  const n = [],
    i = Object.keys(e);
  for (let r = 0; r < i.length; r++) {
    const a = t[i[r]];
    a && a.active() && n.push(a.wait());
  }
  return Promise.all(n);
}
function fv(t, e) {
  if (!e) return;
  let n = t.options;
  if (!n) {
    t.options = e;
    return;
  }
  return (
    n.$shared &&
      (t.options = n =
        Object.assign({}, n, {
          $shared: !1,
          $animations: {},
        })),
    n
  );
}
function bl(t, e) {
  const n = (t && t.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? e : 0,
    a = n.max === void 0 ? e : 0;
  return {
    start: i ? a : r,
    end: i ? r : a,
  };
}
function pv(t, e, n) {
  if (n === !1) return !1;
  const i = bl(t, n),
    r = bl(e, n);
  return {
    top: r.end,
    right: i.end,
    bottom: r.start,
    left: i.start,
  };
}
function mv(t) {
  let e, n, i, r;
  return (
    he(t) ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left)) : (e = n = i = r = t),
    {
      top: e,
      right: n,
      bottom: i,
      left: r,
      disabled: t === !1,
    }
  );
}
function au(t, e) {
  const n = [],
    i = t._getSortedDatasetMetas(e);
  let r, a;
  for (r = 0, a = i.length; r < a; ++r) n.push(i[r].index);
  return n;
}
function yl(t, e, n, i = {}) {
  const r = t.keys,
    a = i.mode === 'single';
  let s, o, l, c;
  if (e !== null) {
    for (s = 0, o = r.length; s < o; ++s) {
      if (((l = +r[s]), l === n)) {
        if (i.all) continue;
        break;
      }
      (c = t.values[l]), He(c) && (a || e === 0 || Fn(e) === Fn(c)) && (e += c);
    }
    return e;
  }
}
function gv(t) {
  const e = Object.keys(t),
    n = new Array(e.length);
  let i, r, a;
  for (i = 0, r = e.length; i < r; ++i)
    (a = e[i]),
      (n[i] = {
        x: a,
        y: t[a],
      });
  return n;
}
function xl(t, e) {
  const n = t && t.options.stacked;
  return n || (n === void 0 && e.stack !== void 0);
}
function vv(t, e, n) {
  return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function bv(t) {
  const { min: e, max: n, minDefined: i, maxDefined: r } = t.getUserBounds();
  return {
    min: i ? e : Number.NEGATIVE_INFINITY,
    max: r ? n : Number.POSITIVE_INFINITY,
  };
}
function yv(t, e, n) {
  const i = t[e] || (t[e] = {});
  return i[n] || (i[n] = {});
}
function wl(t, e, n, i) {
  for (const r of e.getMatchingVisibleMetas(i).reverse()) {
    const a = t[r.index];
    if ((n && a > 0) || (!n && a < 0)) return r.index;
  }
  return null;
}
function El(t, e) {
  const { chart: n, _cachedMeta: i } = t,
    r = n._stacks || (n._stacks = {}),
    { iScale: a, vScale: s, index: o } = i,
    l = a.axis,
    c = s.axis,
    h = vv(a, s, i),
    u = e.length;
  let p;
  for (let m = 0; m < u; ++m) {
    const g = e[m],
      { [l]: b, [c]: v } = g,
      y = g._stacks || (g._stacks = {});
    (p = y[c] = yv(r, h, b)),
      (p[o] = v),
      (p._top = wl(p, s, !0, i.type)),
      (p._bottom = wl(p, s, !1, i.type));
    const w = p._visualValues || (p._visualValues = {});
    w[o] = v;
  }
}
function Ca(t, e) {
  const n = t.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === e)
    .shift();
}
function xv(t, e) {
  return sn(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: 'default',
    type: 'dataset',
  });
}
function wv(t, e, n) {
  return sn(t, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: e,
    mode: 'default',
    type: 'data',
  });
}
function Jn(t, e) {
  const n = t.controller.index,
    i = t.vScale && t.vScale.axis;
  if (i) {
    e = e || t._parsed;
    for (const r of e) {
      const a = r._stacks;
      if (!a || a[i] === void 0 || a[i][n] === void 0) return;
      delete a[i][n],
        a[i]._visualValues !== void 0 &&
          a[i]._visualValues[n] !== void 0 &&
          delete a[i]._visualValues[n];
    }
  }
}
const _a = (t) => t === 'reset' || t === 'none',
  Cl = (t, e) => (e ? t : Object.assign({}, t)),
  Ev = (t, e, n) =>
    t &&
    !e.hidden &&
    e._stacked && {
      keys: au(n, !0),
      values: null,
    };
class yi {
  constructor(e, n) {
    (this.chart = e),
      (this._ctx = e.ctx),
      (this.index = n),
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
    const e = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (e._stacked = xl(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(e) {
    this.index !== e && Jn(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (u, p, m, g) => (u === 'x' ? p : u === 'r' ? g : m),
      a = (n.xAxisID = me(i.xAxisID, Ca(e, 'x'))),
      s = (n.yAxisID = me(i.yAxisID, Ca(e, 'y'))),
      o = (n.rAxisID = me(i.rAxisID, Ca(e, 'r'))),
      l = n.indexAxis,
      c = (n.iAxisID = r(l, a, s, o)),
      h = (n.vAxisID = r(l, s, a, o));
    (n.xScale = this.getScaleForId(a)),
      (n.yScale = this.getScaleForId(s)),
      (n.rScale = this.getScaleForId(o)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(h));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const n = this._cachedMeta;
    return e === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && rl(this._data, this), e._stacked && Jn(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      n = e.data || (e.data = []),
      i = this._data;
    if (he(n)) this._data = gv(n);
    else if (i !== n) {
      if (i) {
        rl(i, this);
        const r = this._cachedMeta;
        Jn(r), (r._parsed = []);
      }
      n && Object.isExtensible(n) && Jg(n, this), (this._syncList = []), (this._data = n);
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let r = !1;
    this._dataCheck();
    const a = n._stacked;
    (n._stacked = xl(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), Jn(n), (n.stack = i.stack)),
      this._resyncElements(e),
      (r || a !== n._stacked) && El(this, n._parsed);
  }
  configure() {
    const e = this.chart.config,
      n = e.datasetScopeKeys(this._type),
      i = e.getOptionScopes(this.getDataset(), n, !0);
    (this.options = e.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: a, _stacked: s } = i,
      o = a.axis;
    let l = e === 0 && n === r.length ? !0 : i._sorted,
      c = e > 0 && i._parsed[e - 1],
      h,
      u,
      p;
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (p = r);
    else {
      ze(r[e])
        ? (p = this.parseArrayData(i, r, e, n))
        : he(r[e])
        ? (p = this.parseObjectData(i, r, e, n))
        : (p = this.parsePrimitiveData(i, r, e, n));
      const m = () => u[o] === null || (c && u[o] < c[o]);
      for (h = 0; h < n; ++h) (i._parsed[h + e] = u = p[h]), l && (m() && (l = !1), (c = u));
      i._sorted = l;
    }
    s && El(this, p);
  }
  parsePrimitiveData(e, n, i, r) {
    const { iScale: a, vScale: s } = e,
      o = a.axis,
      l = s.axis,
      c = a.getLabels(),
      h = a === s,
      u = new Array(r);
    let p, m, g;
    for (p = 0, m = r; p < m; ++p)
      (g = p + i),
        (u[p] = {
          [o]: h || a.parse(c[g], g),
          [l]: s.parse(n[g], g),
        });
    return u;
  }
  parseArrayData(e, n, i, r) {
    const { xScale: a, yScale: s } = e,
      o = new Array(r);
    let l, c, h, u;
    for (l = 0, c = r; l < c; ++l)
      (h = l + i),
        (u = n[h]),
        (o[l] = {
          x: a.parse(u[0], h),
          y: s.parse(u[1], h),
        });
    return o;
  }
  parseObjectData(e, n, i, r) {
    const { xScale: a, yScale: s } = e,
      { xAxisKey: o = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = new Array(r);
    let h, u, p, m;
    for (h = 0, u = r; h < u; ++h)
      (p = h + i),
        (m = n[p]),
        (c[h] = {
          x: a.parse(Nr(m, o), p),
          y: s.parse(Nr(m, l), p),
        });
    return c;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, n, i) {
    const r = this.chart,
      a = this._cachedMeta,
      s = n[e.axis],
      o = {
        keys: au(r, !0),
        values: n._stacks[e.axis]._visualValues,
      };
    return yl(o, s, a.index, {
      mode: i,
    });
  }
  updateRangeFromParsed(e, n, i, r) {
    const a = i[n.axis];
    let s = a === null ? NaN : a;
    const o = r && i._stacks[n.axis];
    r && o && ((r.values = o), (s = yl(r, a, this._cachedMeta.index))),
      (e.min = Math.min(e.min, s)),
      (e.max = Math.max(e.max, s));
  }
  getMinMax(e, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      a = i._sorted && e === i.iScale,
      s = r.length,
      o = this._getOtherScale(e),
      l = Ev(n, i, this.chart),
      c = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY,
      },
      { min: h, max: u } = bv(o);
    let p, m;
    function g() {
      m = r[p];
      const b = m[o.axis];
      return !He(m[e.axis]) || h > b || u < b;
    }
    for (p = 0; p < s && !(!g() && (this.updateRangeFromParsed(c, e, m, l), a)); ++p);
    if (a) {
      for (p = s - 1; p >= 0; --p)
        if (!g()) {
          this.updateRangeFromParsed(c, e, m, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(e) {
    const n = this._cachedMeta._parsed,
      i = [];
    let r, a, s;
    for (r = 0, a = n.length; r < a; ++r) (s = n[r][e.axis]), He(s) && i.push(s);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      a = this.getParsed(e);
    return {
      label: i ? '' + i.getLabelForValue(a[i.axis]) : '',
      value: r ? '' + r.getLabelForValue(a[r.axis]) : '',
    };
  }
  _update(e) {
    const n = this._cachedMeta;
    this.update(e || 'default'),
      (n._clip = mv(me(this.options.clip, pv(n.xScale, n.yScale, this.getMaxOverflow()))));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      a = n.chartArea,
      s = [],
      o = this._drawStart || 0,
      l = this._drawCount || r.length - o,
      c = this.options.drawActiveElementsOnTop;
    let h;
    for (i.dataset && i.dataset.draw(e, a, o, l), h = o; h < o + l; ++h) {
      const u = r[h];
      u.hidden || (u.active && c ? s.push(u) : u.draw(e, a));
    }
    for (h = 0; h < s.length; ++h) s[h].draw(e, a);
  }
  getStyle(e, n) {
    const i = n ? 'active' : 'default';
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(e || 0, i);
  }
  getContext(e, n, i) {
    const r = this.getDataset();
    let a;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const s = this._cachedMeta.data[e];
      (a = s.$context || (s.$context = wv(this.getContext(), e, s))),
        (a.parsed = this.getParsed(e)),
        (a.raw = r.data[e]),
        (a.index = a.dataIndex = e);
    } else
      (a = this.$context || (this.$context = xv(this.chart.getContext(), this.index))),
        (a.dataset = r),
        (a.index = a.datasetIndex = this.index);
    return (a.active = !!n), (a.mode = i), a;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, e);
  }
  _resolveElementOptions(e, n = 'default', i) {
    const r = n === 'active',
      a = this._cachedDataOpts,
      s = e + '-' + n,
      o = a[s],
      l = this.enableOptionSharing && Fr(i);
    if (o) return Cl(o, l);
    const c = this.chart.config,
      h = c.datasetElementScopeKeys(this._type, e),
      u = r ? [`${e}Hover`, 'hover', e, ''] : [e, ''],
      p = c.getOptionScopes(this.getDataset(), h),
      m = Object.keys(Ie.elements[e]),
      g = () => this.getContext(i, r, n),
      b = c.resolveNamedOptions(p, m, g, u);
    return b.$shared && ((b.$shared = l), (a[s] = Object.freeze(Cl(b, l)))), b;
  }
  _resolveAnimations(e, n, i) {
    const r = this.chart,
      a = this._cachedDataOpts,
      s = `animation-${n}`,
      o = a[s];
    if (o) return o;
    let l;
    if (r.options.animation !== !1) {
      const h = this.chart.config,
        u = h.datasetAnimationScopeKeys(this._type, n),
        p = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(p, this.getContext(e, i, n));
    }
    const c = new ru(r, l && l.animations);
    return l && l._cacheable && (a[s] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
  }
  includeOptions(e, n) {
    return !n || _a(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, n) {
    const i = this.resolveDataElementOptions(e, n),
      r = this._sharedOptions,
      a = this.getSharedOptions(i),
      s = this.includeOptions(n, a) || a !== r;
    return (
      this.updateSharedOptions(a, n, i),
      {
        sharedOptions: a,
        includeOptions: s,
      }
    );
  }
  updateElement(e, n, i, r) {
    _a(r) ? Object.assign(e, i) : this._resolveAnimations(n, r).update(e, i);
  }
  updateSharedOptions(e, n, i) {
    e && !_a(n) && this._resolveAnimations(void 0, n).update(e, i);
  }
  _setStyle(e, n, i, r) {
    e.active = r;
    const a = this.getStyle(n, r);
    this._resolveAnimations(n, i, r).update(e, {
      options: (!r && this.getSharedOptions(a)) || a,
    });
  }
  removeHoverStyle(e, n, i) {
    this._setStyle(e, i, 'active', !1);
  }
  setHoverStyle(e, n, i) {
    this._setStyle(e, i, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, 'active', !0);
  }
  _resyncElements(e) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [o, l, c] of this._syncList) this[o](l, c);
    this._syncList = [];
    const r = i.length,
      a = n.length,
      s = Math.min(a, r);
    s && this.parse(0, s),
      a > r ? this._insertElements(r, a - r, e) : a < r && this._removeElements(a, r - a);
  }
  _insertElements(e, n, i = !0) {
    const r = this._cachedMeta,
      a = r.data,
      s = e + n;
    let o;
    const l = (c) => {
      for (c.length += n, o = c.length - 1; o >= s; o--) c[o] = c[o - n];
    };
    for (l(a), o = e; o < s; ++o) a[o] = new this.dataElementType();
    this._parsing && l(r._parsed), this.parse(e, n), i && this.updateElements(a, e, n, 'reset');
  }
  updateElements(e, n, i, r) {}
  _removeElements(e, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const r = i._parsed.splice(e, n);
      i._stacked && Jn(i, r);
    }
    i.data.splice(e, n);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [n, i, r] = e;
      this[n](i, r);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(e, n) {
    n && this._sync(['_removeElements', e, n]);
    const i = arguments.length - 2;
    i && this._sync(['_insertElements', e, i]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
K(yi, 'defaults', {}), K(yi, 'datasetElementType', null), K(yi, 'dataElementType', null);
class hr extends yi {
  initialize() {
    (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
  }
  update(e) {
    const n = this._cachedMeta,
      { dataset: i, data: r = [], _dataset: a } = n,
      s = this.chart._animationsDisabled;
    let { start: o, count: l } = n5(n, r, s);
    (this._drawStart = o),
      (this._drawCount = l),
      i5(n) && ((o = 0), (l = r.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!a._decimated),
      (i.points = r);
    const c = this.resolveDatasetElementOptions(e);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(
        i,
        void 0,
        {
          animated: !s,
          options: c,
        },
        e
      ),
      this.updateElements(r, o, l, e);
  }
  updateElements(e, n, i, r) {
    const a = r === 'reset',
      { iScale: s, vScale: o, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: h, includeOptions: u } = this._getSharedOptions(n, r),
      p = s.axis,
      m = o.axis,
      { spanGaps: g, segment: b } = this.options,
      v = zi(g) ? g : Number.POSITIVE_INFINITY,
      y = this.chart._animationsDisabled || a || r === 'none',
      w = n + i,
      S = e.length;
    let M = n > 0 && this.getParsed(n - 1);
    for (let _ = 0; _ < S; ++_) {
      const O = e[_],
        C = y ? O : {};
      if (_ < n || _ >= w) {
        C.skip = !0;
        continue;
      }
      const L = this.getParsed(_),
        T = we(L[m]),
        R = (C[p] = s.getPixelForValue(L[p], _)),
        P = (C[m] =
          a || T ? o.getBasePixel() : o.getPixelForValue(l ? this.applyStack(o, L, l) : L[m], _));
      (C.skip = isNaN(R) || isNaN(P) || T),
        (C.stop = _ > 0 && Math.abs(L[p] - M[p]) > v),
        b && ((C.parsed = L), (C.raw = c.data[_])),
        u && (C.options = h || this.resolveDataElementOptions(_, O.active ? 'active' : r)),
        y || this.updateElement(O, _, C, r),
        (M = L);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      n = e.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      r = e.data || [];
    if (!r.length) return i;
    const a = r[0].size(this.resolveDataElementOptions(0)),
      s = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(i, a, s) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis), super.draw();
  }
}
K(hr, 'id', 'line'),
  K(hr, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }),
  K(hr, 'overrides', {
    scales: {
      _index_: {
        type: 'category',
      },
      _value_: {
        type: 'linear',
      },
    },
  });
function dn() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.'
  );
}
class Ps {
  constructor(e) {
    K(this, 'options');
    this.options = e || {};
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
  static override(e) {
    Object.assign(Ps.prototype, e);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {}
  formats() {
    return dn();
  }
  parse() {
    return dn();
  }
  format() {
    return dn();
  }
  add() {
    return dn();
  }
  diff() {
    return dn();
  }
  startOf() {
    return dn();
  }
  endOf() {
    return dn();
  }
}
var Cv = {
  _date: Ps,
};
function _v(t, e, n, i) {
  const { controller: r, data: a, _sorted: s } = t,
    o = r._cachedMeta.iScale;
  if (o && e === o.axis && e !== 'r' && s && a.length) {
    const l = o._reversePixels ? Zg : mn;
    if (i) {
      if (r._sharedOptions) {
        const c = a[0],
          h = typeof c.getRange == 'function' && c.getRange(e);
        if (h) {
          const u = l(a, e, n - h),
            p = l(a, e, n + h);
          return {
            lo: u.lo,
            hi: p.hi,
          };
        }
      }
    } else return l(a, e, n);
  }
  return {
    lo: 0,
    hi: a.length - 1,
  };
}
function ji(t, e, n, i, r) {
  const a = t.getSortedVisibleDatasetMetas(),
    s = n[e];
  for (let o = 0, l = a.length; o < l; ++o) {
    const { index: c, data: h } = a[o],
      { lo: u, hi: p } = _v(a[o], e, s, r);
    for (let m = u; m <= p; ++m) {
      const g = h[m];
      g.skip || i(g, c, m);
    }
  }
}
function Mv(t) {
  const e = t.indexOf('x') !== -1,
    n = t.indexOf('y') !== -1;
  return function (i, r) {
    const a = e ? Math.abs(i.x - r.x) : 0,
      s = n ? Math.abs(i.y - r.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
  };
}
function Ma(t, e, n, i, r) {
  const a = [];
  return (
    (!r && !t.isPointInArea(e)) ||
      ji(
        t,
        n,
        e,
        function (o, l, c) {
          (!r && !jt(o, t.chartArea, 0)) ||
            (o.inRange(e.x, e.y, i) &&
              a.push({
                element: o,
                datasetIndex: l,
                index: c,
              }));
        },
        !0
      ),
    a
  );
}
function Sv(t, e, n, i) {
  let r = [];
  function a(s, o, l) {
    const { startAngle: c, endAngle: h } = s.getProps(['startAngle', 'endAngle'], i),
      { angle: u } = Ug(s, {
        x: e.x,
        y: e.y,
      });
    $h(u, c, h) &&
      r.push({
        element: s,
        datasetIndex: o,
        index: l,
      });
  }
  return ji(t, n, e, a), r;
}
function zv(t, e, n, i, r, a) {
  let s = [];
  const o = Mv(n);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, p) {
    const m = h.inRange(e.x, e.y, r);
    if (i && !m) return;
    const g = h.getCenterPoint(r);
    if (!(!!a || t.isPointInArea(g)) && !m) return;
    const v = o(e, g);
    v < l
      ? ((s = [
          {
            element: h,
            datasetIndex: u,
            index: p,
          },
        ]),
        (l = v))
      : v === l &&
        s.push({
          element: h,
          datasetIndex: u,
          index: p,
        });
  }
  return ji(t, n, e, c), s;
}
function Sa(t, e, n, i, r, a) {
  return !a && !t.isPointInArea(e) ? [] : n === 'r' && !i ? Sv(t, e, n, r) : zv(t, e, n, i, r, a);
}
function _l(t, e, n, i, r) {
  const a = [],
    s = n === 'x' ? 'inXRange' : 'inYRange';
  let o = !1;
  return (
    ji(t, n, e, (l, c, h) => {
      l[s](e[n], r) &&
        (a.push({
          element: l,
          datasetIndex: c,
          index: h,
        }),
        (o = o || l.inRange(e.x, e.y, r)));
    }),
    i && !o ? [] : a
  );
}
var kv = {
  evaluateInteractionItems: ji,
  modes: {
    index(t, e, n, i) {
      const r = un(e, t),
        a = n.axis || 'x',
        s = n.includeInvisible || !1,
        o = n.intersect ? Ma(t, r, a, i, s) : Sa(t, r, a, !1, i, s),
        l = [];
      return o.length
        ? (t.getSortedVisibleDatasetMetas().forEach((c) => {
            const h = o[0].index,
              u = c.data[h];
            u &&
              !u.skip &&
              l.push({
                element: u,
                datasetIndex: c.index,
                index: h,
              });
          }),
          l)
        : [];
    },
    dataset(t, e, n, i) {
      const r = un(e, t),
        a = n.axis || 'xy',
        s = n.includeInvisible || !1;
      let o = n.intersect ? Ma(t, r, a, i, s) : Sa(t, r, a, !1, i, s);
      if (o.length > 0) {
        const l = o[0].datasetIndex,
          c = t.getDatasetMeta(l).data;
        o = [];
        for (let h = 0; h < c.length; ++h)
          o.push({
            element: c[h],
            datasetIndex: l,
            index: h,
          });
      }
      return o;
    },
    point(t, e, n, i) {
      const r = un(e, t),
        a = n.axis || 'xy',
        s = n.includeInvisible || !1;
      return Ma(t, r, a, i, s);
    },
    nearest(t, e, n, i) {
      const r = un(e, t),
        a = n.axis || 'xy',
        s = n.includeInvisible || !1;
      return Sa(t, r, a, n.intersect, i, s);
    },
    x(t, e, n, i) {
      const r = un(e, t);
      return _l(t, r, 'x', n.intersect, i);
    },
    y(t, e, n, i) {
      const r = un(e, t);
      return _l(t, r, 'y', n.intersect, i);
    },
  },
};
const su = ['left', 'top', 'right', 'bottom'];
function ei(t, e) {
  return t.filter((n) => n.pos === e);
}
function Ml(t, e) {
  return t.filter((n) => su.indexOf(n.pos) === -1 && n.box.axis === e);
}
function ti(t, e) {
  return t.sort((n, i) => {
    const r = e ? i : n,
      a = e ? n : i;
    return r.weight === a.weight ? r.index - a.index : r.weight - a.weight;
  });
}
function Ov(t) {
  const e = [];
  let n, i, r, a, s, o;
  for (n = 0, i = (t || []).length; n < i; ++n)
    (r = t[n]),
      ({
        position: a,
        options: { stack: s, stackWeight: o = 1 },
      } = r),
      e.push({
        index: n,
        box: r,
        pos: a,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: s && a + s,
        stackWeight: o,
      });
  return e;
}
function Lv(t) {
  const e = {};
  for (const n of t) {
    const { stack: i, pos: r, stackWeight: a } = n;
    if (!i || !su.includes(r)) continue;
    const s =
      e[i] ||
      (e[i] = {
        count: 0,
        placed: 0,
        weight: 0,
        size: 0,
      });
    s.count++, (s.weight += a);
  }
  return e;
}
function Iv(t, e) {
  const n = Lv(t),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
  let a, s, o;
  for (a = 0, s = t.length; a < s; ++a) {
    o = t[a];
    const { fullSize: l } = o.box,
      c = n[o.stack],
      h = c && o.stackWeight / c.weight;
    o.horizontal
      ? ((o.width = h ? h * i : l && e.availableWidth), (o.height = r))
      : ((o.width = i), (o.height = h ? h * r : l && e.availableHeight));
  }
  return n;
}
function Rv(t) {
  const e = Ov(t),
    n = ti(
      e.filter((c) => c.box.fullSize),
      !0
    ),
    i = ti(ei(e, 'left'), !0),
    r = ti(ei(e, 'right')),
    a = ti(ei(e, 'top'), !0),
    s = ti(ei(e, 'bottom')),
    o = Ml(e, 'x'),
    l = Ml(e, 'y');
  return {
    fullSize: n,
    leftAndTop: i.concat(a),
    rightAndBottom: r.concat(l).concat(s).concat(o),
    chartArea: ei(e, 'chartArea'),
    vertical: i.concat(r).concat(l),
    horizontal: a.concat(s).concat(o),
  };
}
function Sl(t, e, n, i) {
  return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
}
function ou(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function Dv(t, e, n, i) {
  const { pos: r, box: a } = n,
    s = t.maxPadding;
  if (!he(r)) {
    n.size && (t[r] -= n.size);
    const u = i[n.stack] || {
      size: 0,
      count: 1,
    };
    (u.size = Math.max(u.size, n.horizontal ? a.height : a.width)),
      (n.size = u.size / u.count),
      (t[r] += n.size);
  }
  a.getPadding && ou(s, a.getPadding());
  const o = Math.max(0, e.outerWidth - Sl(s, t, 'left', 'right')),
    l = Math.max(0, e.outerHeight - Sl(s, t, 'top', 'bottom')),
    c = o !== t.w,
    h = l !== t.h;
  return (
    (t.w = o),
    (t.h = l),
    n.horizontal
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
function Av(t) {
  const e = t.maxPadding;
  function n(i) {
    const r = Math.max(e[i] - t[i], 0);
    return (t[i] += r), r;
  }
  (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
}
function Tv(t, e) {
  const n = e.maxPadding;
  function i(r) {
    const a = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
    return (
      r.forEach((s) => {
        a[s] = Math.max(e[s], n[s]);
      }),
      a
    );
  }
  return i(t ? ['left', 'right'] : ['top', 'bottom']);
}
function oi(t, e, n, i) {
  const r = [];
  let a, s, o, l, c, h;
  for (a = 0, s = t.length, c = 0; a < s; ++a) {
    (o = t[a]), (l = o.box), l.update(o.width || e.w, o.height || e.h, Tv(o.horizontal, e));
    const { same: u, other: p } = Dv(e, n, o, i);
    (c |= u && r.length), (h = h || p), l.fullSize || r.push(o);
  }
  return (c && oi(r, e, n, i)) || h;
}
function er(t, e, n, i, r) {
  (t.top = n), (t.left = e), (t.right = e + i), (t.bottom = n + r), (t.width = i), (t.height = r);
}
function zl(t, e, n, i) {
  const r = n.padding;
  let { x: a, y: s } = e;
  for (const o of t) {
    const l = o.box,
      c = i[o.stack] || {
        count: 1,
        placed: 0,
        weight: 1,
      },
      h = o.stackWeight / c.weight || 1;
    if (o.horizontal) {
      const u = e.w * h,
        p = c.size || l.height;
      Fr(c.start) && (s = c.start),
        l.fullSize
          ? er(l, r.left, s, n.outerWidth - r.right - r.left, p)
          : er(l, e.left + c.placed, s, u, p),
        (c.start = s),
        (c.placed += u),
        (s = l.bottom);
    } else {
      const u = e.h * h,
        p = c.size || l.width;
      Fr(c.start) && (a = c.start),
        l.fullSize
          ? er(l, a, r.top, p, n.outerHeight - r.bottom - r.top)
          : er(l, a, e.top + c.placed, p, u),
        (c.start = a),
        (c.placed += u),
        (a = l.right);
    }
  }
  (e.x = a), (e.y = s);
}
var Qt = {
  addBox(t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || 'top'),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                e.draw(n);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  removeBox(t, e) {
    const n = t.boxes ? t.boxes.indexOf(e) : -1;
    n !== -1 && t.boxes.splice(n, 1);
  },
  configure(t, e, n) {
    (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
  },
  update(t, e, n, i) {
    if (!t) return;
    const r = ct(t.options.layout.padding),
      a = Math.max(e - r.width, 0),
      s = Math.max(n - r.height, 0),
      o = Rv(t.boxes),
      l = o.vertical,
      c = o.horizontal;
    pe(t.boxes, (b) => {
      typeof b.beforeLayout == 'function' && b.beforeLayout();
    });
    const h =
        l.reduce((b, v) => (v.box.options && v.box.options.display === !1 ? b : b + 1), 0) || 1,
      u = Object.freeze({
        outerWidth: e,
        outerHeight: n,
        padding: r,
        availableWidth: a,
        availableHeight: s,
        vBoxMaxWidth: a / 2 / h,
        hBoxMaxHeight: s / 2,
      }),
      p = Object.assign({}, r);
    ou(p, ct(i));
    const m = Object.assign(
        {
          maxPadding: p,
          w: a,
          h: s,
          x: r.left,
          y: r.top,
        },
        r
      ),
      g = Iv(l.concat(c), u);
    oi(o.fullSize, m, u, g),
      oi(l, m, u, g),
      oi(c, m, u, g) && oi(l, m, u, g),
      Av(m),
      zl(o.leftAndTop, m, u, g),
      (m.x += m.w),
      (m.y += m.h),
      zl(o.rightAndBottom, m, u, g),
      (t.chartArea = {
        left: m.left,
        top: m.top,
        right: m.left + m.w,
        bottom: m.top + m.h,
        height: m.h,
        width: m.w,
      }),
      pe(o.chartArea, (b) => {
        const v = b.box;
        Object.assign(v, t.chartArea),
          v.update(m.w, m.h, {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          });
      });
  },
};
class lu {
  acquireContext(e, n) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, n, i) {}
  removeEventListener(e, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, n, i, r) {
    return (
      (n = Math.max(0, n || e.width)),
      (i = i || e.height),
      {
        width: n,
        height: Math.max(0, r ? Math.floor(n / r) : i),
      }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class Pv extends lu {
  acquireContext(e) {
    return (e && e.getContext && e.getContext('2d')) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const ur = '$chartjs',
  Hv = {
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
  kl = (t) => t === null || t === '';
function Vv(t, e) {
  const n = t.style,
    i = t.getAttribute('height'),
    r = t.getAttribute('width');
  if (
    ((t[ur] = {
      initial: {
        height: i,
        width: r,
        style: {
          display: n.display,
          height: n.height,
          width: n.width,
        },
      },
    }),
    (n.display = n.display || 'block'),
    (n.boxSizing = n.boxSizing || 'border-box'),
    kl(r))
  ) {
    const a = fl(t, 'width');
    a !== void 0 && (t.width = a);
  }
  if (kl(i))
    if (t.style.height === '') t.height = t.width / (e || 2);
    else {
      const a = fl(t, 'height');
      a !== void 0 && (t.height = a);
    }
  return t;
}
const cu = q5
  ? {
      passive: !0,
    }
  : !1;
function Bv(t, e, n) {
  t.addEventListener(e, n, cu);
}
function Nv(t, e, n) {
  t.canvas.removeEventListener(e, n, cu);
}
function Fv(t, e) {
  const n = Hv[t.type] || t.type,
    { x: i, y: r } = un(t, e);
  return {
    type: n,
    chart: e,
    native: t,
    x: i !== void 0 ? i : null,
    y: r !== void 0 ? r : null,
  };
}
function Xr(t, e) {
  for (const n of t) if (n === e || n.contains(e)) return !0;
}
function $v(t, e, n) {
  const i = t.canvas,
    r = new MutationObserver((a) => {
      let s = !1;
      for (const o of a) (s = s || Xr(o.addedNodes, i)), (s = s && !Xr(o.removedNodes, i));
      s && n();
    });
  return (
    r.observe(document, {
      childList: !0,
      subtree: !0,
    }),
    r
  );
}
function jv(t, e, n) {
  const i = t.canvas,
    r = new MutationObserver((a) => {
      let s = !1;
      for (const o of a) (s = s || Xr(o.removedNodes, i)), (s = s && !Xr(o.addedNodes, i));
      s && n();
    });
  return (
    r.observe(document, {
      childList: !0,
      subtree: !0,
    }),
    r
  );
}
const Oi = /* @__PURE__ */ new Map();
let Ol = 0;
function du() {
  const t = window.devicePixelRatio;
  t !== Ol &&
    ((Ol = t),
    Oi.forEach((e, n) => {
      n.currentDevicePixelRatio !== t && e();
    }));
}
function Wv(t, e) {
  Oi.size || window.addEventListener('resize', du), Oi.set(t, e);
}
function Xv(t) {
  Oi.delete(t), Oi.size || window.removeEventListener('resize', du);
}
function Yv(t, e, n) {
  const i = t.canvas,
    r = i && Ts(i);
  if (!r) return;
  const a = Xh((o, l) => {
      const c = r.clientWidth;
      n(o, l), c < r.clientWidth && n();
    }, window),
    s = new ResizeObserver((o) => {
      const l = o[0],
        c = l.contentRect.width,
        h = l.contentRect.height;
      (c === 0 && h === 0) || a(c, h);
    });
  return s.observe(r), Wv(t, a), s;
}
function za(t, e, n) {
  n && n.disconnect(), e === 'resize' && Xv(t);
}
function Uv(t, e, n) {
  const i = t.canvas,
    r = Xh((a) => {
      t.ctx !== null && n(Fv(a, t));
    }, t);
  return Bv(i, e, r), r;
}
class qv extends lu {
  acquireContext(e, n) {
    const i = e && e.getContext && e.getContext('2d');
    return i && i.canvas === e ? (Vv(e, n), i) : null;
  }
  releaseContext(e) {
    const n = e.canvas;
    if (!n[ur]) return !1;
    const i = n[ur].initial;
    ['height', 'width'].forEach((a) => {
      const s = i[a];
      we(s) ? n.removeAttribute(a) : n.setAttribute(a, s);
    });
    const r = i.style || {};
    return (
      Object.keys(r).forEach((a) => {
        n.style[a] = r[a];
      }),
      (n.width = n.width),
      delete n[ur],
      !0
    );
  }
  addEventListener(e, n, i) {
    this.removeEventListener(e, n);
    const r = e.$proxies || (e.$proxies = {}),
      s =
        {
          attach: $v,
          detach: jv,
          resize: Yv,
        }[n] || Uv;
    r[n] = s(e, n, i);
  }
  removeEventListener(e, n) {
    const i = e.$proxies || (e.$proxies = {}),
      r = i[n];
    if (!r) return;
    (
      ({
        attach: za,
        detach: za,
        resize: za,
      })[n] || Nv
    )(e, n, r),
      (i[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, n, i, r) {
    return U5(e, n, i, r);
  }
  isAttached(e) {
    const n = Ts(e);
    return !!(n && n.isConnected);
  }
}
function Gv(t) {
  return !nu() || (typeof OffscreenCanvas < 'u' && t instanceof OffscreenCanvas) ? Pv : qv;
}
var lr;
let qn =
  ((lr = class {
    constructor() {
      K(this, 'x');
      K(this, 'y');
      K(this, 'active', !1);
      K(this, 'options');
      K(this, '$animations');
    }
    tooltipPosition(e) {
      const { x: n, y: i } = this.getProps(['x', 'y'], e);
      return {
        x: n,
        y: i,
      };
    }
    hasValue() {
      return zi(this.x) && zi(this.y);
    }
    getProps(e, n) {
      const i = this.$animations;
      if (!n || !i) return this;
      const r = {};
      return (
        e.forEach((a) => {
          r[a] = i[a] && i[a].active() ? i[a]._to : this[a];
        }),
        r
      );
    }
  }),
  K(lr, 'defaults', {}),
  K(lr, 'defaultRoutes'),
  lr);
function Kv(t, e) {
  const n = t.options.ticks,
    i = Zv(t),
    r = Math.min(n.maxTicksLimit || i, i),
    a = n.major.enabled ? Jv(e) : [],
    s = a.length,
    o = a[0],
    l = a[s - 1],
    c = [];
  if (s > r) return e3(e, c, a, s / r), c;
  const h = Qv(a, e, r);
  if (s > 0) {
    let u, p;
    const m = s > 1 ? Math.round((l - o) / (s - 1)) : null;
    for (tr(e, c, h, we(m) ? 0 : o - m, o), u = 0, p = s - 1; u < p; u++)
      tr(e, c, h, a[u], a[u + 1]);
    return tr(e, c, h, l, we(m) ? e.length : l + m), c;
  }
  return tr(e, c, h), c;
}
function Zv(t) {
  const e = t.options.offset,
    n = t._tickSize(),
    i = t._length / n + (e ? 0 : 1),
    r = t._maxLength / n;
  return Math.floor(Math.min(i, r));
}
function Qv(t, e, n) {
  const i = t3(t),
    r = e.length / n;
  if (!i) return Math.max(r, 1);
  const a = Xg(i);
  for (let s = 0, o = a.length - 1; s < o; s++) {
    const l = a[s];
    if (l > r) return l;
  }
  return Math.max(r, 1);
}
function Jv(t) {
  const e = [];
  let n, i;
  for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
  return e;
}
function e3(t, e, n, i) {
  let r = 0,
    a = n[0],
    s;
  for (i = Math.ceil(i), s = 0; s < t.length; s++) s === a && (e.push(t[s]), r++, (a = n[r * i]));
}
function tr(t, e, n, i, r) {
  const a = me(i, 0),
    s = Math.min(me(r, t.length), t.length);
  let o = 0,
    l,
    c,
    h;
  for (n = Math.ceil(n), r && ((l = r - i), (n = l / Math.floor(l / n))), h = a; h < 0; )
    o++, (h = Math.round(a + o * n));
  for (c = Math.max(a, 0); c < s; c++) c === h && (e.push(t[c]), o++, (h = Math.round(a + o * n)));
}
function t3(t) {
  const e = t.length;
  let n, i;
  if (e < 2) return !1;
  for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
  return i;
}
const n3 = (t) => (t === 'left' ? 'right' : t === 'right' ? 'left' : t),
  Ll = (t, e, n) => (e === 'top' || e === 'left' ? t[e] + n : t[e] - n),
  Il = (t, e) => Math.min(e || t, t);
function Rl(t, e) {
  const n = [],
    i = t.length / e,
    r = t.length;
  let a = 0;
  for (; a < r; a += i) n.push(t[Math.floor(a)]);
  return n;
}
function i3(t, e, n) {
  const i = t.ticks.length,
    r = Math.min(e, i - 1),
    a = t._startPixel,
    s = t._endPixel,
    o = 1e-6;
  let l = t.getPixelForTick(r),
    c;
  if (
    !(
      n &&
      (i === 1
        ? (c = Math.max(l - a, s - l))
        : e === 0
        ? (c = (t.getPixelForTick(1) - l) / 2)
        : (c = (l - t.getPixelForTick(r - 1)) / 2),
      (l += r < e ? c : -c),
      l < a - o || l > s + o)
    )
  )
    return l;
}
function r3(t, e) {
  pe(t, (n) => {
    const i = n.gc,
      r = i.length / 2;
    let a;
    if (r > e) {
      for (a = 0; a < r; ++a) delete n.data[i[a]];
      i.splice(0, r);
    }
  });
}
function ni(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function Dl(t, e) {
  if (!t.display) return 0;
  const n = Ue(t.font, e),
    i = ct(t.padding);
  return (ze(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
}
function a3(t, e) {
  return sn(t, {
    scale: e,
    type: 'scale',
  });
}
function s3(t, e, n) {
  return sn(t, {
    tick: n,
    index: e,
    type: 'tick',
  });
}
function o3(t, e, n) {
  let i = Yh(t);
  return ((n && e !== 'right') || (!n && e === 'right')) && (i = n3(i)), i;
}
function l3(t, e, n, i) {
  const { top: r, left: a, bottom: s, right: o, chart: l } = t,
    { chartArea: c, scales: h } = l;
  let u = 0,
    p,
    m,
    g;
  const b = s - r,
    v = o - a;
  if (t.isHorizontal()) {
    if (((m = mi(i, a, o)), he(n))) {
      const y = Object.keys(n)[0],
        w = n[y];
      g = h[y].getPixelForValue(w) + b - e;
    } else n === 'center' ? (g = (c.bottom + c.top) / 2 + b - e) : (g = Ll(t, n, e));
    p = o - a;
  } else {
    if (he(n)) {
      const y = Object.keys(n)[0],
        w = n[y];
      m = h[y].getPixelForValue(w) - v + e;
    } else n === 'center' ? (m = (c.left + c.right) / 2 - v + e) : (m = Ll(t, n, e));
    (g = mi(i, s, r)), (u = n === 'left' ? -Qe : Qe);
  }
  return {
    titleX: m,
    titleY: g,
    maxWidth: p,
    rotation: u,
  };
}
class zn extends qn {
  constructor(e) {
    super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
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
  init(e) {
    (this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax));
  }
  parse(e, n) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
    return (
      (e = it(e, Number.POSITIVE_INFINITY)),
      (n = it(n, Number.NEGATIVE_INFINITY)),
      (i = it(i, Number.POSITIVE_INFINITY)),
      (r = it(r, Number.NEGATIVE_INFINITY)),
      {
        min: it(e, i),
        max: it(n, r),
        minDefined: He(e),
        maxDefined: He(n),
      }
    );
  }
  getMinMax(e) {
    let { min: n, max: i, minDefined: r, maxDefined: a } = this.getUserBounds(),
      s;
    if (r && a)
      return {
        min: n,
        max: i,
      };
    const o = this.getMatchingVisibleMetas();
    for (let l = 0, c = o.length; l < c; ++l)
      (s = o[l].controller.getMinMax(this, e)),
        r || (n = Math.min(n, s.min)),
        a || (i = Math.max(i, s.max));
    return (
      (n = a && n > i ? i : n),
      (i = r && n > i ? n : i),
      {
        min: it(n, it(i, n)),
        max: it(i, it(n, i)),
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
    const e = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Oe(this.options.beforeUpdate, [this]);
  }
  update(e, n, i) {
    const { beginAtZero: r, grace: a, ticks: s } = this.options,
      o = s.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign(
          {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
          i
        )),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = M5(this, a, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = o < this.ticks.length;
    this._convertTicksToLabels(l ? Rl(this.ticks, o) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      s.display &&
        (s.autoSkip || s.source === 'auto') &&
        ((this.ticks = Kv(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse,
      n,
      i;
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (e = !e)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = e),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Oe(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Oe(this.options.beforeSetDimensions, [this]);
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
    Oe(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), Oe(this.options[e], [this]);
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
    Oe(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const n = this.options.ticks;
    let i, r, a;
    for (i = 0, r = e.length; i < r; i++)
      (a = e[i]), (a.label = Oe(n.callback, [a.value, i, e], this));
  }
  afterTickToLabelConversion() {
    Oe(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Oe(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      n = e.ticks,
      i = Il(this.ticks.length, e.ticks.maxTicksLimit),
      r = n.minRotation || 0,
      a = n.maxRotation;
    let s = r,
      o,
      l,
      c;
    if (!this._isVisible() || !n.display || r >= a || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = r;
      return;
    }
    const h = this._getLabelSizes(),
      u = h.widest.width,
      p = h.highest.height,
      m = bt(this.chart.width - u, 0, this.maxWidth);
    (o = e.offset ? this.maxWidth / i : m / (i - 1)),
      u + 6 > o &&
        ((o = m / (i - (e.offset ? 0.5 : 1))),
        (l = this.maxHeight - ni(e.grid) - n.padding - Dl(e.title, this.chart.options.font)),
        (c = Math.sqrt(u * u + p * p)),
        (s = ks(
          Math.min(
            Math.asin(bt((h.highest.height + 6) / o, -1, 1)),
            Math.asin(bt(l / c, -1, 1)) - Math.asin(bt(p / c, -1, 1))
          )
        )),
        (s = Math.max(r, Math.min(a, s)))),
      (this.labelRotation = s);
  }
  afterCalculateLabelRotation() {
    Oe(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Oe(this.options.beforeFit, [this]);
  }
  fit() {
    const e = {
        width: 0,
        height: 0,
      },
      {
        chart: n,
        options: { ticks: i, title: r, grid: a },
      } = this,
      s = this._isVisible(),
      o = this.isHorizontal();
    if (s) {
      const l = Dl(r, n.options.font);
      if (
        (o
          ? ((e.width = this.maxWidth), (e.height = ni(a) + l))
          : ((e.height = this.maxHeight), (e.width = ni(a) + l)),
        i.display && this.ticks.length)
      ) {
        const { first: c, last: h, widest: u, highest: p } = this._getLabelSizes(),
          m = i.padding * 2,
          g = Zt(this.labelRotation),
          b = Math.cos(g),
          v = Math.sin(g);
        if (o) {
          const y = i.mirror ? 0 : v * u.width + b * p.height;
          e.height = Math.min(this.maxHeight, e.height + y + m);
        } else {
          const y = i.mirror ? 0 : b * u.width + v * p.height;
          e.width = Math.min(this.maxWidth, e.width + y + m);
        }
        this._calculatePadding(c, h, v, b);
      }
    }
    this._handleMargins(),
      o
        ? ((this.width = this._length = n.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length = n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(e, n, i, r) {
    const {
        ticks: { align: a, padding: s },
        position: o,
      } = this.options,
      l = this.labelRotation !== 0,
      c = o !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left,
        u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let p = 0,
        m = 0;
      l
        ? c
          ? ((p = r * e.width), (m = i * n.height))
          : ((p = i * e.height), (m = r * n.width))
        : a === 'start'
        ? (m = n.width)
        : a === 'end'
        ? (p = e.width)
        : a !== 'inner' && ((p = e.width / 2), (m = n.width / 2)),
        (this.paddingLeft = Math.max(((p - h + s) * this.width) / (this.width - h), 0)),
        (this.paddingRight = Math.max(((m - u + s) * this.width) / (this.width - u), 0));
    } else {
      let h = n.height / 2,
        u = e.height / 2;
      a === 'start' ? ((h = 0), (u = e.height)) : a === 'end' && ((h = n.height), (u = 0)),
        (this.paddingTop = h + s),
        (this.paddingBottom = u + s);
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
    Oe(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: n } = this.options;
    return n === 'top' || n === 'bottom' || e === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let n, i;
    for (n = 0, i = e.length; n < i; n++) we(e[n].label) && (e.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = Rl(i, n)),
        (this._labelSizes = e =
          this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
    }
    return e;
  }
  _computeLabelSizes(e, n, i) {
    const { ctx: r, _longestTextCache: a } = this,
      s = [],
      o = [],
      l = Math.floor(n / Il(n, i));
    let c = 0,
      h = 0,
      u,
      p,
      m,
      g,
      b,
      v,
      y,
      w,
      S,
      M,
      _;
    for (u = 0; u < n; u += l) {
      if (
        ((g = e[u].label),
        (b = this._resolveTickFontOptions(u)),
        (r.font = v = b.string),
        (y = a[v] =
          a[v] || {
            data: {},
            gc: [],
          }),
        (w = b.lineHeight),
        (S = M = 0),
        !we(g) && !ze(g))
      )
        (S = jr(r, y.data, y.gc, S, g)), (M = w);
      else if (ze(g))
        for (p = 0, m = g.length; p < m; ++p)
          (_ = g[p]), !we(_) && !ze(_) && ((S = jr(r, y.data, y.gc, S, _)), (M += w));
      s.push(S), o.push(M), (c = Math.max(S, c)), (h = Math.max(M, h));
    }
    r3(a, n);
    const O = s.indexOf(c),
      C = o.indexOf(h),
      L = (T) => ({
        width: s[T] || 0,
        height: o[T] || 0,
      });
    return {
      first: L(0),
      last: L(n - 1),
      widest: L(O),
      highest: L(C),
      widths: s,
      heights: o,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, n) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const n = this._startPixel + e * this._length;
    return Gg(this._alignToPixels ? cn(this.chart, n, 0) : n);
  }
  getDecimalForPixel(e) {
    const n = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: n } = this;
    return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
  }
  getContext(e) {
    const n = this.ticks || [];
    if (e >= 0 && e < n.length) {
      const i = n[e];
      return i.$context || (i.$context = s3(this.getContext(), e, i));
    }
    return this.$context || (this.$context = a3(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      n = Zt(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      a = this._getLabelSizes(),
      s = e.autoSkipPadding || 0,
      o = a ? a.widest.width + s : 0,
      l = a ? a.highest.height + s : 0;
    return this.isHorizontal() ? (l * i > o * r ? o / i : l / r) : l * r < o * i ? l / i : o / r;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== 'auto' ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: a, position: s, border: o } = r,
      l = a.offset,
      c = this.isHorizontal(),
      u = this.ticks.length + (l ? 1 : 0),
      p = ni(a),
      m = [],
      g = o.setContext(this.getContext()),
      b = g.display ? g.width : 0,
      v = b / 2,
      y = function (U) {
        return cn(i, U, b);
      };
    let w, S, M, _, O, C, L, T, R, P, N, j;
    if (s === 'top')
      (w = y(this.bottom)), (C = this.bottom - p), (T = w - v), (P = y(e.top) + v), (j = e.bottom);
    else if (s === 'bottom')
      (w = y(this.top)), (P = e.top), (j = y(e.bottom) - v), (C = w + v), (T = this.top + p);
    else if (s === 'left')
      (w = y(this.right)), (O = this.right - p), (L = w - v), (R = y(e.left) + v), (N = e.right);
    else if (s === 'right')
      (w = y(this.left)), (R = e.left), (N = y(e.right) - v), (O = w + v), (L = this.left + p);
    else if (n === 'x') {
      if (s === 'center') w = y((e.top + e.bottom) / 2 + 0.5);
      else if (he(s)) {
        const U = Object.keys(s)[0],
          X = s[U];
        w = y(this.chart.scales[U].getPixelForValue(X));
      }
      (P = e.top), (j = e.bottom), (C = w + v), (T = C + p);
    } else if (n === 'y') {
      if (s === 'center') w = y((e.left + e.right) / 2);
      else if (he(s)) {
        const U = Object.keys(s)[0],
          X = s[U];
        w = y(this.chart.scales[U].getPixelForValue(X));
      }
      (O = w - v), (L = O - p), (R = e.left), (N = e.right);
    }
    const q = me(r.ticks.maxTicksLimit, u),
      F = Math.max(1, Math.ceil(u / q));
    for (S = 0; S < u; S += F) {
      const U = this.getContext(S),
        X = a.setContext(U),
        ue = o.setContext(U),
        _e = X.lineWidth,
        fe = X.color,
        Re = ue.dash || [],
        B = ue.dashOffset,
        V = X.tickWidth,
        $ = X.tickColor,
        W = X.tickBorderDash || [],
        z = X.tickBorderDashOffset;
      (M = i3(this, S, l)),
        M !== void 0 &&
          ((_ = cn(i, M, _e)),
          c ? (O = L = R = N = _) : (C = T = P = j = _),
          m.push({
            tx1: O,
            ty1: C,
            tx2: L,
            ty2: T,
            x1: R,
            y1: P,
            x2: N,
            y2: j,
            width: _e,
            color: fe,
            borderDash: Re,
            borderDashOffset: B,
            tickWidth: V,
            tickColor: $,
            tickBorderDash: W,
            tickBorderDashOffset: z,
          }));
    }
    return (this._ticksLength = u), (this._borderValue = w), m;
  }
  _computeLabelItems(e) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: a } = i,
      s = this.isHorizontal(),
      o = this.ticks,
      { align: l, crossAlign: c, padding: h, mirror: u } = a,
      p = ni(i.grid),
      m = p + h,
      g = u ? -h : m,
      b = -Zt(this.labelRotation),
      v = [];
    let y,
      w,
      S,
      M,
      _,
      O,
      C,
      L,
      T,
      R,
      P,
      N,
      j = 'middle';
    if (r === 'top') (O = this.bottom - g), (C = this._getXAxisLabelAlignment());
    else if (r === 'bottom') (O = this.top + g), (C = this._getXAxisLabelAlignment());
    else if (r === 'left') {
      const F = this._getYAxisLabelAlignment(p);
      (C = F.textAlign), (_ = F.x);
    } else if (r === 'right') {
      const F = this._getYAxisLabelAlignment(p);
      (C = F.textAlign), (_ = F.x);
    } else if (n === 'x') {
      if (r === 'center') O = (e.top + e.bottom) / 2 + m;
      else if (he(r)) {
        const F = Object.keys(r)[0],
          U = r[F];
        O = this.chart.scales[F].getPixelForValue(U) + m;
      }
      C = this._getXAxisLabelAlignment();
    } else if (n === 'y') {
      if (r === 'center') _ = (e.left + e.right) / 2 - m;
      else if (he(r)) {
        const F = Object.keys(r)[0],
          U = r[F];
        _ = this.chart.scales[F].getPixelForValue(U);
      }
      C = this._getYAxisLabelAlignment(p).textAlign;
    }
    n === 'y' && (l === 'start' ? (j = 'top') : l === 'end' && (j = 'bottom'));
    const q = this._getLabelSizes();
    for (y = 0, w = o.length; y < w; ++y) {
      (S = o[y]), (M = S.label);
      const F = a.setContext(this.getContext(y));
      (L = this.getPixelForTick(y) + a.labelOffset),
        (T = this._resolveTickFontOptions(y)),
        (R = T.lineHeight),
        (P = ze(M) ? M.length : 1);
      const U = P / 2,
        X = F.color,
        ue = F.textStrokeColor,
        _e = F.textStrokeWidth;
      let fe = C;
      s
        ? ((_ = L),
          C === 'inner' &&
            (y === w - 1
              ? (fe = this.options.reverse ? 'left' : 'right')
              : y === 0
              ? (fe = this.options.reverse ? 'right' : 'left')
              : (fe = 'center')),
          r === 'top'
            ? c === 'near' || b !== 0
              ? (N = -P * R + R / 2)
              : c === 'center'
              ? (N = -q.highest.height / 2 - U * R + R)
              : (N = -q.highest.height + R / 2)
            : c === 'near' || b !== 0
            ? (N = R / 2)
            : c === 'center'
            ? (N = q.highest.height / 2 - U * R)
            : (N = q.highest.height - P * R),
          u && (N *= -1),
          b !== 0 && !F.showLabelBackdrop && (_ += (R / 2) * Math.sin(b)))
        : ((O = L), (N = ((1 - P) * R) / 2));
      let Re;
      if (F.showLabelBackdrop) {
        const B = ct(F.backdropPadding),
          V = q.heights[y],
          $ = q.widths[y];
        let W = N - B.top,
          z = 0 - B.left;
        switch (j) {
          case 'middle':
            W -= V / 2;
            break;
          case 'bottom':
            W -= V;
            break;
        }
        switch (C) {
          case 'center':
            z -= $ / 2;
            break;
          case 'right':
            z -= $;
            break;
        }
        Re = {
          left: z,
          top: W,
          width: $ + B.width,
          height: V + B.height,
          color: F.backdropColor,
        };
      }
      v.push({
        label: M,
        font: T,
        textOffset: N,
        options: {
          rotation: b,
          color: X,
          strokeColor: ue,
          strokeWidth: _e,
          textAlign: fe,
          textBaseline: j,
          translation: [_, O],
          backdrop: Re,
        },
      });
    }
    return v;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: n } = this.options;
    if (-Zt(this.labelRotation)) return e === 'top' ? 'left' : 'right';
    let r = 'center';
    return (
      n.align === 'start'
        ? (r = 'left')
        : n.align === 'end'
        ? (r = 'right')
        : n.align === 'inner' && (r = 'inner'),
      r
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: a },
      } = this.options,
      s = this._getLabelSizes(),
      o = e + a,
      l = s.widest.width;
    let c, h;
    return (
      n === 'left'
        ? r
          ? ((h = this.right + a),
            i === 'near'
              ? (c = 'left')
              : i === 'center'
              ? ((c = 'center'), (h += l / 2))
              : ((c = 'right'), (h += l)))
          : ((h = this.right - o),
            i === 'near'
              ? (c = 'right')
              : i === 'center'
              ? ((c = 'center'), (h -= l / 2))
              : ((c = 'left'), (h = this.left)))
        : n === 'right'
        ? r
          ? ((h = this.left + a),
            i === 'near'
              ? (c = 'right')
              : i === 'center'
              ? ((c = 'center'), (h -= l / 2))
              : ((c = 'left'), (h -= l)))
          : ((h = this.left + o),
            i === 'near'
              ? (c = 'left')
              : i === 'center'
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
    const e = this.chart,
      n = this.options.position;
    if (n === 'left' || n === 'right')
      return {
        top: 0,
        left: this.left,
        bottom: e.height,
        right: this.right,
      };
    if (n === 'top' || n === 'bottom')
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: e.width,
      };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: a,
      height: s,
    } = this;
    n && (e.save(), (e.fillStyle = n), e.fillRect(i, r, a, s), e.restore());
  }
  getLineWidthForValue(e) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const r = this.ticks.findIndex((a) => a.value === e);
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(e) {
    const n = this.options.grid,
      i = this.ctx,
      r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
    let a, s;
    const o = (l, c, h) => {
      !h.width ||
        !h.color ||
        (i.save(),
        (i.lineWidth = h.width),
        (i.strokeStyle = h.color),
        i.setLineDash(h.borderDash || []),
        (i.lineDashOffset = h.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(c.x, c.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (a = 0, s = r.length; a < s; ++a) {
        const l = r[a];
        n.drawOnChartArea &&
          o(
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
          n.drawTicks &&
            o(
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
        chart: e,
        ctx: n,
        options: { border: i, grid: r },
      } = this,
      a = i.setContext(this.getContext()),
      s = i.display ? a.width : 0;
    if (!s) return;
    const o = r.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, h, u, p;
    this.isHorizontal()
      ? ((c = cn(e, this.left, s) - s / 2), (h = cn(e, this.right, o) + o / 2), (u = p = l))
      : ((u = cn(e, this.top, s) - s / 2), (p = cn(e, this.bottom, o) + o / 2), (c = h = l)),
      n.save(),
      (n.lineWidth = a.width),
      (n.strokeStyle = a.color),
      n.beginPath(),
      n.moveTo(c, u),
      n.lineTo(h, p),
      n.stroke(),
      n.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      r = this._computeLabelArea();
    r && qh(i, r);
    const a = this.getLabelItems(e);
    for (const s of a) {
      const o = s.options,
        l = s.font,
        c = s.label,
        h = s.textOffset;
      ki(i, c, 0, h, l, o);
    }
    r && Gh(i);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: n, title: i, reverse: r },
    } = this;
    if (!i.display) return;
    const a = Ue(i.font),
      s = ct(i.padding),
      o = i.align;
    let l = a.lineHeight / 2;
    n === 'bottom' || n === 'center' || he(n)
      ? ((l += s.bottom), ze(i.text) && (l += a.lineHeight * (i.text.length - 1)))
      : (l += s.top);
    const { titleX: c, titleY: h, maxWidth: u, rotation: p } = l3(this, l, n, o);
    ki(e, i.text, 0, 0, a, {
      color: i.color,
      maxWidth: u,
      rotation: p,
      textAlign: o3(o, n, r),
      textBaseline: 'middle',
      translation: [c, h],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      n = (e.ticks && e.ticks.z) || 0,
      i = me(e.grid && e.grid.z, -1),
      r = me(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== zn.prototype.draw
      ? [
          {
            z: n,
            draw: (a) => {
              this.draw(a);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (a) => {
              this.drawBackground(), this.drawGrid(a), this.drawTitle();
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (a) => {
              this.drawLabels(a);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + 'AxisID',
      r = [];
    let a, s;
    for (a = 0, s = n.length; a < s; ++a) {
      const o = n[a];
      o[i] === this.id && (!e || o.type === e) && r.push(o);
    }
    return r;
  }
  _resolveTickFontOptions(e) {
    const n = this.options.ticks.setContext(this.getContext(e));
    return Ue(n.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class nr {
  constructor(e, n, i) {
    (this.type = e),
      (this.scope = n),
      (this.override = i),
      (this.items = /* @__PURE__ */ Object.create(null));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const n = Object.getPrototypeOf(e);
    let i;
    h3(n) && (i = this.register(n));
    const r = this.items,
      a = e.id,
      s = this.scope + '.' + a;
    if (!a) throw new Error('class does not have id: ' + e);
    return a in r || ((r[a] = e), c3(e, s, i), this.override && Ie.override(e.id, e.overrides)), s;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const n = this.items,
      i = e.id,
      r = this.scope;
    i in n && delete n[i], r && i in Ie[r] && (delete Ie[r][i], this.override && delete xn[i]);
  }
}
function c3(t, e, n) {
  const i = Si(/* @__PURE__ */ Object.create(null), [n ? Ie.get(n) : {}, Ie.get(e), t.defaults]);
  Ie.set(e, i),
    t.defaultRoutes && d3(e, t.defaultRoutes),
    t.descriptors && Ie.describe(e, t.descriptors);
}
function d3(t, e) {
  Object.keys(e).forEach((n) => {
    const i = n.split('.'),
      r = i.pop(),
      a = [t].concat(i).join('.'),
      s = e[n].split('.'),
      o = s.pop(),
      l = s.join('.');
    Ie.route(a, r, l, o);
  });
}
function h3(t) {
  return 'id' in t && 'defaults' in t;
}
class u3 {
  constructor() {
    (this.controllers = new nr(yi, 'datasets', !0)),
      (this.elements = new nr(qn, 'elements')),
      (this.plugins = new nr(Object, 'plugins')),
      (this.scales = new nr(zn, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...e) {
    this._each('register', e);
  }
  remove(...e) {
    this._each('unregister', e);
  }
  addControllers(...e) {
    this._each('register', e, this.controllers);
  }
  addElements(...e) {
    this._each('register', e, this.elements);
  }
  addPlugins(...e) {
    this._each('register', e, this.plugins);
  }
  addScales(...e) {
    this._each('register', e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, 'controller');
  }
  getElement(e) {
    return this._get(e, this.elements, 'element');
  }
  getPlugin(e) {
    return this._get(e, this.plugins, 'plugin');
  }
  getScale(e) {
    return this._get(e, this.scales, 'scale');
  }
  removeControllers(...e) {
    this._each('unregister', e, this.controllers);
  }
  removeElements(...e) {
    this._each('unregister', e, this.elements);
  }
  removePlugins(...e) {
    this._each('unregister', e, this.plugins);
  }
  removeScales(...e) {
    this._each('unregister', e, this.scales);
  }
  _each(e, n, i) {
    [...n].forEach((r) => {
      const a = i || this._getRegistryForType(r);
      i || a.isForType(r) || (a === this.plugins && r.id)
        ? this._exec(e, a, r)
        : pe(r, (s) => {
            const o = i || this._getRegistryForType(s);
            this._exec(e, o, s);
          });
    });
  }
  _exec(e, n, i) {
    const r = zs(e);
    Oe(i['before' + r], [], i), n[e](i), Oe(i['after' + r], [], i);
  }
  _getRegistryForType(e) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(e)) return i;
    }
    return this.plugins;
  }
  _get(e, n, i) {
    const r = n.get(e);
    if (r === void 0) throw new Error('"' + e + '" is not a registered ' + i + '.');
    return r;
  }
}
var Rt = /* @__PURE__ */ new u3();
class f3 {
  constructor() {
    this._init = [];
  }
  notify(e, n, i, r) {
    n === 'beforeInit' &&
      ((this._init = this._createDescriptors(e, !0)), this._notify(this._init, e, 'install'));
    const a = r ? this._descriptors(e).filter(r) : this._descriptors(e),
      s = this._notify(a, e, n, i);
    return (
      n === 'afterDestroy' &&
        (this._notify(a, e, 'stop'), this._notify(this._init, e, 'uninstall')),
      s
    );
  }
  _notify(e, n, i, r) {
    r = r || {};
    for (const a of e) {
      const s = a.plugin,
        o = s[i],
        l = [n, r, a.options];
      if (Oe(o, l, s) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    we(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), n;
  }
  _createDescriptors(e, n) {
    const i = e && e.config,
      r = me(i.options && i.options.plugins, {}),
      a = p3(i);
    return r === !1 && !n ? [] : g3(e, a, r, n);
  }
  _notifyStateChanges(e) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (a, s) => a.filter((o) => !s.some((l) => o.plugin.id === l.plugin.id));
    this._notify(r(n, i), e, 'stop'), this._notify(r(i, n), e, 'start');
  }
}
function p3(t) {
  const e = {},
    n = [],
    i = Object.keys(Rt.plugins.items);
  for (let a = 0; a < i.length; a++) n.push(Rt.getPlugin(i[a]));
  const r = t.plugins || [];
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    n.indexOf(s) === -1 && (n.push(s), (e[s.id] = !0));
  }
  return {
    plugins: n,
    localIds: e,
  };
}
function m3(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function g3(t, { plugins: e, localIds: n }, i, r) {
  const a = [],
    s = t.getContext();
  for (const o of e) {
    const l = o.id,
      c = m3(i[l], r);
    c !== null &&
      a.push({
        plugin: o,
        options: v3(
          t.config,
          {
            plugin: o,
            local: n[l],
          },
          c,
          s
        ),
      });
  }
  return a;
}
function v3(t, { plugin: e, local: n }, i, r) {
  const a = t.pluginScopeKeys(e),
    s = t.getOptionScopes(i, a);
  return (
    n && e.defaults && s.push(e.defaults),
    t.createResolver(s, r, [''], {
      scriptable: !1,
      indexable: !1,
      allKeys: !0,
    })
  );
}
function Xa(t, e) {
  const n = Ie.datasets[t] || {};
  return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || 'x';
}
function b3(t, e) {
  let n = t;
  return t === '_index_' ? (n = e) : t === '_value_' && (n = e === 'x' ? 'y' : 'x'), n;
}
function y3(t, e) {
  return t === e ? '_index_' : '_value_';
}
function Al(t) {
  if (t === 'x' || t === 'y' || t === 'r') return t;
}
function x3(t) {
  if (t === 'top' || t === 'bottom') return 'x';
  if (t === 'left' || t === 'right') return 'y';
}
function Ya(t, ...e) {
  if (Al(t)) return t;
  for (const n of e) {
    const i = n.axis || x3(n.position) || (t.length > 1 && Al(t[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
  );
}
function Tl(t, e, n) {
  if (n[e + 'AxisID'] === t)
    return {
      axis: e,
    };
}
function w3(t, e) {
  if (e.data && e.data.datasets) {
    const n = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
    if (n.length) return Tl(t, 'x', n[0]) || Tl(t, 'y', n[0]);
  }
  return {};
}
function E3(t, e) {
  const n = xn[t.type] || {
      scales: {},
    },
    i = e.scales || {},
    r = Xa(t.type, e),
    a = /* @__PURE__ */ Object.create(null);
  return (
    Object.keys(i).forEach((s) => {
      const o = i[s];
      if (!he(o)) return console.error(`Invalid scale configuration for scale: ${s}`);
      if (o._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${s}`);
      const l = Ya(s, o, w3(s, t), Ie.scales[o.type]),
        c = y3(l, r),
        h = n.scales || {};
      a[s] = fi(/* @__PURE__ */ Object.create(null), [
        {
          axis: l,
        },
        o,
        h[l],
        h[c],
      ]);
    }),
    t.data.datasets.forEach((s) => {
      const o = s.type || t.type,
        l = s.indexAxis || Xa(o, e),
        h = (xn[o] || {}).scales || {};
      Object.keys(h).forEach((u) => {
        const p = b3(u, l),
          m = s[p + 'AxisID'] || p;
        (a[m] = a[m] || /* @__PURE__ */ Object.create(null)),
          fi(a[m], [
            {
              axis: p,
            },
            i[m],
            h[u],
          ]);
      });
    }),
    Object.keys(a).forEach((s) => {
      const o = a[s];
      fi(o, [Ie.scales[o.type], Ie.scale]);
    }),
    a
  );
}
function hu(t) {
  const e = t.options || (t.options = {});
  (e.plugins = me(e.plugins, {})), (e.scales = E3(t, e));
}
function uu(t) {
  return (t = t || {}), (t.datasets = t.datasets || []), (t.labels = t.labels || []), t;
}
function C3(t) {
  return (t = t || {}), (t.data = uu(t.data)), hu(t), t;
}
const Pl = /* @__PURE__ */ new Map(),
  fu = /* @__PURE__ */ new Set();
function ir(t, e) {
  let n = Pl.get(t);
  return n || ((n = e()), Pl.set(t, n), fu.add(n)), n;
}
const ii = (t, e, n) => {
  const i = Nr(e, n);
  i !== void 0 && t.add(i);
};
class _3 {
  constructor(e) {
    (this._config = C3(e)),
      (this._scopeCache = /* @__PURE__ */ new Map()),
      (this._resolverCache = /* @__PURE__ */ new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = uu(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), hu(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return ir(e, () => [[`datasets.${e}`, '']]);
  }
  datasetAnimationScopeKeys(e, n) {
    return ir(`${e}.transition.${n}`, () => [
      [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${e}`, ''],
    ]);
  }
  datasetElementScopeKeys(e, n) {
    return ir(`${e}-${n}`, () => [
      [`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ''],
    ]);
  }
  pluginScopeKeys(e) {
    const n = e.id,
      i = this.type;
    return ir(`${i}-plugin-${n}`, () => [[`plugins.${n}`, ...(e.additionalOptionScopes || [])]]);
  }
  _cachedScopes(e, n) {
    const i = this._scopeCache;
    let r = i.get(e);
    return (!r || n) && ((r = /* @__PURE__ */ new Map()), i.set(e, r)), r;
  }
  getOptionScopes(e, n, i) {
    const { options: r, type: a } = this,
      s = this._cachedScopes(e, i),
      o = s.get(n);
    if (o) return o;
    const l = /* @__PURE__ */ new Set();
    n.forEach((h) => {
      e && (l.add(e), h.forEach((u) => ii(l, e, u))),
        h.forEach((u) => ii(l, r, u)),
        h.forEach((u) => ii(l, xn[a] || {}, u)),
        h.forEach((u) => ii(l, Ie, u)),
        h.forEach((u) => ii(l, $a, u));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), fu.has(n) && s.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: e, type: n } = this;
    return [
      e,
      xn[n] || {},
      Ie.datasets[n] || {},
      {
        type: n,
      },
      Ie,
      $a,
    ];
  }
  resolveNamedOptions(e, n, i, r = ['']) {
    const a = {
        $shared: !0,
      },
      { resolver: s, subPrefixes: o } = Hl(this._resolverCache, e, r);
    let l = s;
    if (S3(s, n)) {
      (a.$shared = !1), (i = nn(i) ? i() : i);
      const c = this.createResolver(e, i, o);
      l = $n(s, i, c);
    }
    for (const c of n) a[c] = l[c];
    return a;
  }
  createResolver(e, n, i = [''], r) {
    const { resolver: a } = Hl(this._resolverCache, e, i);
    return he(n) ? $n(a, n, void 0, r) : a;
  }
}
function Hl(t, e, n) {
  let i = t.get(e);
  i || ((i = /* @__PURE__ */ new Map()), t.set(e, i));
  const r = n.join();
  let a = i.get(r);
  return (
    a ||
      ((a = {
        resolver: Rs(e, n),
        subPrefixes: n.filter((o) => !o.toLowerCase().includes('hover')),
      }),
      i.set(r, a)),
    a
  );
}
const M3 = (t) => he(t) && Object.getOwnPropertyNames(t).reduce((e, n) => e || nn(t[n]), !1);
function S3(t, e) {
  const { isScriptable: n, isIndexable: i } = Zh(t);
  for (const r of e) {
    const a = n(r),
      s = i(r),
      o = (s || a) && t[r];
    if ((a && (nn(o) || M3(o))) || (s && ze(o))) return !0;
  }
  return !1;
}
var z3 = '4.3.0';
const k3 = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Vl(t, e) {
  return t === 'top' || t === 'bottom' || (k3.indexOf(t) === -1 && e === 'x');
}
function Bl(t, e) {
  return function (n, i) {
    return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
  };
}
function Nl(t) {
  const e = t.chart,
    n = e.options.animation;
  e.notifyPlugins('afterRender'), Oe(n && n.onComplete, [t], e);
}
function O3(t) {
  const e = t.chart,
    n = e.options.animation;
  Oe(n && n.onProgress, [t], e);
}
function pu(t) {
  return (
    nu() && typeof t == 'string' ? (t = document.getElementById(t)) : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const fr = {},
  Fl = (t) => {
    const e = pu(t);
    return Object.values(fr)
      .filter((n) => n.canvas === e)
      .pop();
  };
function L3(t, e, n) {
  const i = Object.keys(t);
  for (const r of i) {
    const a = +r;
    if (a >= e) {
      const s = t[r];
      delete t[r], (n > 0 || a > e) && (t[a + n] = s);
    }
  }
}
function I3(t, e, n, i) {
  return !n || t.type === 'mouseout' ? null : i ? e : t;
}
function R3(t) {
  const { xScale: e, yScale: n } = t;
  if (e && n)
    return {
      left: e.left,
      right: e.right,
      top: n.top,
      bottom: n.bottom,
    };
}
var Ut;
let Xt =
  ((Ut = class {
    static register(...e) {
      Rt.add(...e), $l();
    }
    static unregister(...e) {
      Rt.remove(...e), $l();
    }
    constructor(e, n) {
      const i = (this.config = new _3(n)),
        r = pu(e),
        a = Fl(r);
      if (a)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            a.id +
            "' must be destroyed before the canvas with ID '" +
            a.canvas.id +
            "' can be reused."
        );
      const s = i.createResolver(i.chartOptionScopes(), this.getContext());
      (this.platform = new (i.platform || Gv(r))()), this.platform.updateConfig(i);
      const o = this.platform.acquireContext(r, s.aspectRatio),
        l = o && o.canvas,
        c = l && l.height,
        h = l && l.width;
      if (
        ((this.id = Pg()),
        (this.ctx = o),
        (this.canvas = l),
        (this.width = h),
        (this.height = c),
        (this._options = s),
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
        (this._plugins = new f3()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = t5((u) => this.update(u), s.resizeDelay || 0)),
        (this._dataChanges = []),
        (fr[this.id] = this),
        !o || !l)
      ) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
      Nt.listen(this, 'complete', Nl),
        Nt.listen(this, 'progress', O3),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: e, maintainAspectRatio: n },
        width: i,
        height: r,
        _aspectRatio: a,
      } = this;
      return we(e) ? (n && a ? a : r ? i / r : null) : e;
    }
    get data() {
      return this.config.data;
    }
    set data(e) {
      this.config.data = e;
    }
    get options() {
      return this._options;
    }
    set options(e) {
      this.config.options = e;
    }
    get registry() {
      return Rt;
    }
    _initialize() {
      return (
        this.notifyPlugins('beforeInit'),
        this.options.responsive ? this.resize() : ul(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins('afterInit'),
        this
      );
    }
    clear() {
      return cl(this.canvas, this.ctx), this;
    }
    stop() {
      return Nt.stop(this), this;
    }
    resize(e, n) {
      Nt.running(this)
        ? (this._resizeBeforeDraw = {
            width: e,
            height: n,
          })
        : this._resize(e, n);
    }
    _resize(e, n) {
      const i = this.options,
        r = this.canvas,
        a = i.maintainAspectRatio && this.aspectRatio,
        s = this.platform.getMaximumSize(r, e, n, a),
        o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? 'resize' : 'attach';
      (this.width = s.width),
        (this.height = s.height),
        (this._aspectRatio = this.aspectRatio),
        ul(this, o, !0) &&
          (this.notifyPlugins('resize', {
            size: s,
          }),
          Oe(i.onResize, [this, s], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      pe(n, (i, r) => {
        i.id = r;
      });
    }
    buildOrUpdateScales() {
      const e = this.options,
        n = e.scales,
        i = this.scales,
        r = Object.keys(i).reduce((s, o) => ((s[o] = !1), s), {});
      let a = [];
      n &&
        (a = a.concat(
          Object.keys(n).map((s) => {
            const o = n[s],
              l = Ya(s, o),
              c = l === 'r',
              h = l === 'x';
            return {
              options: o,
              dposition: c ? 'chartArea' : h ? 'bottom' : 'left',
              dtype: c ? 'radialLinear' : h ? 'category' : 'linear',
            };
          })
        )),
        pe(a, (s) => {
          const o = s.options,
            l = o.id,
            c = Ya(l, o),
            h = me(o.type, s.dtype);
          (o.position === void 0 || Vl(o.position, c) !== Vl(s.dposition)) &&
            (o.position = s.dposition),
            (r[l] = !0);
          let u = null;
          if (l in i && i[l].type === h) u = i[l];
          else {
            const p = Rt.getScale(h);
            (u = new p({
              id: l,
              type: h,
              ctx: this.ctx,
              chart: this,
            })),
              (i[u.id] = u);
          }
          u.init(o, e);
        }),
        pe(r, (s, o) => {
          s || delete i[o];
        }),
        pe(i, (s) => {
          Qt.configure(this, s, s.options), Qt.addBox(this, s);
        });
    }
    _updateMetasets() {
      const e = this._metasets,
        n = this.data.datasets.length,
        i = e.length;
      if ((e.sort((r, a) => r.index - a.index), i > n)) {
        for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
        e.splice(n, i - n);
      }
      this._sortedMetasets = e.slice(0).sort(Bl('order', 'index'));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: e,
        data: { datasets: n },
      } = this;
      e.length > n.length && delete this._stacks,
        e.forEach((i, r) => {
          n.filter((a) => a === i._dataset).length === 0 && this._destroyDatasetMeta(r);
        });
    }
    buildOrUpdateControllers() {
      const e = [],
        n = this.data.datasets;
      let i, r;
      for (this._removeUnreferencedMetasets(), i = 0, r = n.length; i < r; i++) {
        const a = n[i];
        let s = this.getDatasetMeta(i);
        const o = a.type || this.config.type;
        if (
          (s.type && s.type !== o && (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
          (s.type = o),
          (s.indexAxis = a.indexAxis || Xa(o, this.options)),
          (s.order = a.order || 0),
          (s.index = i),
          (s.label = '' + a.label),
          (s.visible = this.isDatasetVisible(i)),
          s.controller)
        )
          s.controller.updateIndex(i), s.controller.linkScales();
        else {
          const l = Rt.getController(o),
            { datasetElementType: c, dataElementType: h } = Ie.datasets[o];
          Object.assign(l, {
            dataElementType: Rt.getElement(h),
            datasetElementType: c && Rt.getElement(c),
          }),
            (s.controller = new l(this, i)),
            e.push(s.controller);
        }
      }
      return this._updateMetasets(), e;
    }
    _resetElements() {
      pe(
        this.data.datasets,
        (e, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins('reset');
    }
    update(e) {
      const n = this.config;
      n.update();
      const i = (this._options = n.createResolver(n.chartOptionScopes(), this.getContext())),
        r = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins('beforeUpdate', {
          mode: e,
          cancelable: !0,
        }) === !1)
      )
        return;
      const a = this.buildOrUpdateControllers();
      this.notifyPlugins('beforeElementsUpdate');
      let s = 0;
      for (let c = 0, h = this.data.datasets.length; c < h; c++) {
        const { controller: u } = this.getDatasetMeta(c),
          p = !r && a.indexOf(u) === -1;
        u.buildOrUpdateElements(p), (s = Math.max(+u.getMaxOverflow(), s));
      }
      (s = this._minPadding = i.layout.autoPadding ? s : 0),
        this._updateLayout(s),
        r ||
          pe(a, (c) => {
            c.reset();
          }),
        this._updateDatasets(e),
        this.notifyPlugins('afterUpdate', {
          mode: e,
        }),
        this._layers.sort(Bl('z', '_idx'));
      const { _active: o, _lastEvent: l } = this;
      l ? this._eventHandler(l, !0) : o.length && this._updateHoverStyles(o, o, !0), this.render();
    }
    _updateScales() {
      pe(this.scales, (e) => {
        Qt.removeBox(this, e);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const e = this.options,
        n = new Set(Object.keys(this._listeners)),
        i = new Set(e.events);
      (!el(n, i) || !!this._responsiveListeners !== e.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: e } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: i, start: r, count: a } of n) {
        const s = i === '_removeElements' ? -a : a;
        L3(e, r, s);
      }
    }
    _getUniformDataChanges() {
      const e = this._dataChanges;
      if (!e || !e.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        i = (a) =>
          new Set(e.filter((s) => s[0] === a).map((s, o) => o + ',' + s.splice(1).join(','))),
        r = i(0);
      for (let a = 1; a < n; a++) if (!el(r, i(a))) return;
      return Array.from(r)
        .map((a) => a.split(','))
        .map((a) => ({
          method: a[1],
          start: +a[2],
          count: +a[3],
        }));
    }
    _updateLayout(e) {
      if (
        this.notifyPlugins('beforeLayout', {
          cancelable: !0,
        }) === !1
      )
        return;
      Qt.update(this, this.width, this.height, e);
      const n = this.chartArea,
        i = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        pe(
          this.boxes,
          (r) => {
            (i && r.position === 'chartArea') ||
              (r.configure && r.configure(), this._layers.push(...r._layers()));
          },
          this
        ),
        this._layers.forEach((r, a) => {
          r._idx = a;
        }),
        this.notifyPlugins('afterLayout');
    }
    _updateDatasets(e) {
      if (
        this.notifyPlugins('beforeDatasetsUpdate', {
          mode: e,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this._updateDataset(
            n,
            nn(e)
              ? e({
                  datasetIndex: n,
                })
              : e
          );
        this.notifyPlugins('afterDatasetsUpdate', {
          mode: e,
        });
      }
    }
    _updateDataset(e, n) {
      const i = this.getDatasetMeta(e),
        r = {
          meta: i,
          index: e,
          mode: n,
          cancelable: !0,
        };
      this.notifyPlugins('beforeDatasetUpdate', r) !== !1 &&
        (i.controller._update(n), (r.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', r));
    }
    render() {
      this.notifyPlugins('beforeRender', {
        cancelable: !0,
      }) !== !1 &&
        (Nt.has(this)
          ? this.attached && !Nt.running(this) && Nt.start(this)
          : (this.draw(),
            Nl({
              chart: this,
            })));
    }
    draw() {
      let e;
      if (this._resizeBeforeDraw) {
        const { width: i, height: r } = this._resizeBeforeDraw;
        this._resize(i, r), (this._resizeBeforeDraw = null);
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
      const n = this._layers;
      for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
      for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
      this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(e) {
      const n = this._sortedMetasets,
        i = [];
      let r, a;
      for (r = 0, a = n.length; r < a; ++r) {
        const s = n[r];
        (!e || s.visible) && i.push(s);
      }
      return i;
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
      const e = this.getSortedVisibleDatasetMetas();
      for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
      this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(e) {
      const n = this.ctx,
        i = e._clip,
        r = !i.disabled,
        a = R3(e) || this.chartArea,
        s = {
          meta: e,
          index: e.index,
          cancelable: !0,
        };
      this.notifyPlugins('beforeDatasetDraw', s) !== !1 &&
        (r &&
          qh(n, {
            left: i.left === !1 ? 0 : a.left - i.left,
            right: i.right === !1 ? this.width : a.right + i.right,
            top: i.top === !1 ? 0 : a.top - i.top,
            bottom: i.bottom === !1 ? this.height : a.bottom + i.bottom,
          }),
        e.controller.draw(),
        r && Gh(n),
        (s.cancelable = !1),
        this.notifyPlugins('afterDatasetDraw', s));
    }
    isPointInArea(e) {
      return jt(e, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, n, i, r) {
      const a = kv.modes[n];
      return typeof a == 'function' ? a(this, e, i, r) : [];
    }
    getDatasetMeta(e) {
      const n = this.data.datasets[e],
        i = this._metasets;
      let r = i.filter((a) => a && a._dataset === n).pop();
      return (
        r ||
          ((r = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: e,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(r)),
        r
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = sn(null, {
          chart: this,
          type: 'chart',
        }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(e) {
      const n = this.data.datasets[e];
      if (!n) return !1;
      const i = this.getDatasetMeta(e);
      return typeof i.hidden == 'boolean' ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(e, n) {
      const i = this.getDatasetMeta(e);
      i.hidden = !n;
    }
    toggleDataVisibility(e) {
      this._hiddenIndices[e] = !this._hiddenIndices[e];
    }
    getDataVisibility(e) {
      return !this._hiddenIndices[e];
    }
    _updateVisibility(e, n, i) {
      const r = i ? 'show' : 'hide',
        a = this.getDatasetMeta(e),
        s = a.controller._resolveAnimations(void 0, r);
      Fr(n)
        ? ((a.data[n].hidden = !i), this.update())
        : (this.setDatasetVisibility(e, i),
          s.update(a, {
            visible: i,
          }),
          this.update((o) => (o.datasetIndex === e ? r : void 0)));
    }
    hide(e, n) {
      this._updateVisibility(e, n, !1);
    }
    show(e, n) {
      this._updateVisibility(e, n, !0);
    }
    _destroyDatasetMeta(e) {
      const n = this._metasets[e];
      n && n.controller && n.controller._destroy(), delete this._metasets[e];
    }
    _stop() {
      let e, n;
      for (this.stop(), Nt.remove(this), e = 0, n = this.data.datasets.length; e < n; ++e)
        this._destroyDatasetMeta(e);
    }
    destroy() {
      this.notifyPlugins('beforeDestroy');
      const { canvas: e, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        e &&
          (this.unbindEvents(),
          cl(e, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete fr[this.id],
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...e) {
      return this.canvas.toDataURL(...e);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
    }
    bindUserEvents() {
      const e = this._listeners,
        n = this.platform,
        i = (a, s) => {
          n.addEventListener(this, a, s), (e[a] = s);
        },
        r = (a, s, o) => {
          (a.offsetX = s), (a.offsetY = o), this._eventHandler(a);
        };
      pe(this.options.events, (a) => i(a, r));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const e = this._responsiveListeners,
        n = this.platform,
        i = (l, c) => {
          n.addEventListener(this, l, c), (e[l] = c);
        },
        r = (l, c) => {
          e[l] && (n.removeEventListener(this, l, c), delete e[l]);
        },
        a = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let s;
      const o = () => {
        r('attach', o), (this.attached = !0), this.resize(), i('resize', a), i('detach', s);
      };
      (s = () => {
        (this.attached = !1), r('resize', a), this._stop(), this._resize(0, 0), i('attach', o);
      }),
        n.isAttached(this.canvas) ? o() : s();
    }
    unbindEvents() {
      pe(this._listeners, (e, n) => {
        this.platform.removeEventListener(this, n, e);
      }),
        (this._listeners = {}),
        pe(this._responsiveListeners, (e, n) => {
          this.platform.removeEventListener(this, n, e);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(e, n, i) {
      const r = i ? 'set' : 'remove';
      let a, s, o, l;
      for (
        n === 'dataset' &&
          ((a = this.getDatasetMeta(e[0].datasetIndex)),
          a.controller['_' + r + 'DatasetHoverStyle']()),
          o = 0,
          l = e.length;
        o < l;
        ++o
      ) {
        s = e[o];
        const c = s && this.getDatasetMeta(s.datasetIndex).controller;
        c && c[r + 'HoverStyle'](s.element, s.datasetIndex, s.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e) {
      const n = this._active || [],
        i = e.map(({ datasetIndex: a, index: s }) => {
          const o = this.getDatasetMeta(a);
          if (!o) throw new Error('No dataset found at index ' + a);
          return {
            datasetIndex: a,
            element: o.data[s],
            index: s,
          };
        });
      !Vr(i, n) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, n));
    }
    notifyPlugins(e, n, i) {
      return this._plugins.notify(this, e, n, i);
    }
    isPluginEnabled(e) {
      return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
    }
    _updateHoverStyles(e, n, i) {
      const r = this.options.hover,
        a = (l, c) =>
          l.filter((h) => !c.some((u) => h.datasetIndex === u.datasetIndex && h.index === u.index)),
        s = a(n, e),
        o = i ? e : a(e, n);
      s.length && this.updateHoverStyle(s, r.mode, !1),
        o.length && r.mode && this.updateHoverStyle(o, r.mode, !0);
    }
    _eventHandler(e, n) {
      const i = {
          event: e,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(e),
        },
        r = (s) => (s.options.events || this.options.events).includes(e.native.type);
      if (this.notifyPlugins('beforeEvent', i, r) === !1) return;
      const a = this._handleEvent(e, n, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins('afterEvent', i, r),
        (a || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(e, n, i) {
      const { _active: r = [], options: a } = this,
        s = n,
        o = this._getActiveElements(e, r, i, s),
        l = $g(e),
        c = I3(e, this._lastEvent, i, l);
      i &&
        ((this._lastEvent = null),
        Oe(a.onHover, [e, o, this], this),
        l && Oe(a.onClick, [e, o, this], this));
      const h = !Vr(o, r);
      return (
        (h || n) && ((this._active = o), this._updateHoverStyles(o, r, n)), (this._lastEvent = c), h
      );
    }
    _getActiveElements(e, n, i, r) {
      if (e.type === 'mouseout') return [];
      if (!i) return n;
      const a = this.options.hover;
      return this.getElementsAtEventForMode(e, a.mode, a, r);
    }
  }),
  K(Ut, 'defaults', Ie),
  K(Ut, 'instances', fr),
  K(Ut, 'overrides', xn),
  K(Ut, 'registry', Rt),
  K(Ut, 'version', z3),
  K(Ut, 'getChart', Fl),
  Ut);
function $l() {
  return pe(Xt.instances, (t) => t._plugins.invalidate());
}
function mu(t, e, n = e) {
  (t.lineCap = me(n.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(me(n.borderDash, e.borderDash)),
    (t.lineDashOffset = me(n.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = me(n.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = me(n.borderWidth, e.borderWidth)),
    (t.strokeStyle = me(n.borderColor, e.borderColor));
}
function D3(t, e, n) {
  t.lineTo(n.x, n.y);
}
function A3(t) {
  return t.stepped ? m5 : t.tension || t.cubicInterpolationMode === 'monotone' ? g5 : D3;
}
function gu(t, e, n = {}) {
  const i = t.length,
    { start: r = 0, end: a = i - 1 } = n,
    { start: s, end: o } = e,
    l = Math.max(r, s),
    c = Math.min(a, o),
    h = (r < s && a < s) || (r > o && a > o);
  return {
    count: i,
    start: l,
    loop: e.loop,
    ilen: c < l && !h ? i + c - l : c - l,
  };
}
function T3(t, e, n, i) {
  const { points: r, options: a } = e,
    { count: s, start: o, loop: l, ilen: c } = gu(r, n, i),
    h = A3(a);
  let { move: u = !0, reverse: p } = i || {},
    m,
    g,
    b;
  for (m = 0; m <= c; ++m)
    (g = r[(o + (p ? c - m : m)) % s]),
      !g.skip && (u ? (t.moveTo(g.x, g.y), (u = !1)) : h(t, b, g, p, a.stepped), (b = g));
  return l && ((g = r[(o + (p ? c : 0)) % s]), h(t, b, g, p, a.stepped)), !!l;
}
function P3(t, e, n, i) {
  const r = e.points,
    { count: a, start: s, ilen: o } = gu(r, n, i),
    { move: l = !0, reverse: c } = i || {};
  let h = 0,
    u = 0,
    p,
    m,
    g,
    b,
    v,
    y;
  const w = (M) => (s + (c ? o - M : M)) % a,
    S = () => {
      b !== v && (t.lineTo(h, v), t.lineTo(h, b), t.lineTo(h, y));
    };
  for (l && ((m = r[w(0)]), t.moveTo(m.x, m.y)), p = 0; p <= o; ++p) {
    if (((m = r[w(p)]), m.skip)) continue;
    const M = m.x,
      _ = m.y,
      O = M | 0;
    O === g
      ? (_ < b ? (b = _) : _ > v && (v = _), (h = (u * h + M) / ++u))
      : (S(), t.lineTo(M, _), (g = O), (u = 0), (b = v = _)),
      (y = _);
  }
  S();
}
function Ua(t) {
  const e = t.options,
    n = e.borderDash && e.borderDash.length;
  return !t._decimated &&
    !t._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== 'monotone' &&
    !e.stepped &&
    !n
    ? P3
    : T3;
}
function H3(t) {
  return t.stepped ? G5 : t.tension || t.cubicInterpolationMode === 'monotone' ? K5 : fn;
}
function V3(t, e, n, i) {
  let r = e._path;
  r || ((r = e._path = new Path2D()), e.path(r, n, i) && r.closePath()),
    mu(t, e.options),
    t.stroke(r);
}
function B3(t, e, n, i) {
  const { segments: r, options: a } = e,
    s = Ua(e);
  for (const o of r)
    mu(t, a, o.style),
      t.beginPath(),
      s(t, e, o, {
        start: n,
        end: n + i - 1,
      }) && t.closePath(),
      t.stroke();
}
const N3 = typeof Path2D == 'function';
function F3(t, e, n, i) {
  N3 && !e.options.segment ? V3(t, e, n, i) : B3(t, e, n, i);
}
class li extends qn {
  constructor(e) {
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
      e && Object.assign(this, e);
  }
  updateControlPoints(e, n) {
    const i = this.options;
    if (
      (i.tension || i.cubicInterpolationMode === 'monotone') &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const r = i.spanGaps ? this._loop : this._fullLoop;
      F5(this._points, i, e, r, n), (this._pointsUpdated = !0);
    }
  }
  set points(e) {
    (this._points = e), delete this._segments, delete this._path, (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = sv(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      n = this.points;
    return e.length && n[e[0].start];
  }
  last() {
    const e = this.segments,
      n = this.points,
      i = e.length;
    return i && n[e[i - 1].end];
  }
  interpolate(e, n) {
    const i = this.options,
      r = e[n],
      a = this.points,
      s = iv(this, {
        property: n,
        start: r,
        end: r,
      });
    if (!s.length) return;
    const o = [],
      l = H3(i);
    let c, h;
    for (c = 0, h = s.length; c < h; ++c) {
      const { start: u, end: p } = s[c],
        m = a[u],
        g = a[p];
      if (m === g) {
        o.push(m);
        continue;
      }
      const b = Math.abs((r - m[n]) / (g[n] - m[n])),
        v = l(m, g, b, i.stepped);
      (v[n] = e[n]), o.push(v);
    }
    return o.length === 1 ? o[0] : o;
  }
  pathSegment(e, n, i) {
    return Ua(this)(e, this, n, i);
  }
  path(e, n, i) {
    const r = this.segments,
      a = Ua(this);
    let s = this._loop;
    (n = n || 0), (i = i || this.points.length - n);
    for (const o of r)
      s &= a(e, this, o, {
        start: n,
        end: n + i - 1,
      });
    return !!s;
  }
  draw(e, n, i, r) {
    const a = this.options || {};
    (this.points || []).length && a.borderWidth && (e.save(), F3(e, this, i, r), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
K(li, 'id', 'line'),
  K(li, 'defaults', {
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
  K(li, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  }),
  K(li, 'descriptors', {
    _scriptable: !0,
    _indexable: (e) => e !== 'borderDash' && e !== 'fill',
  });
function jl(t, e, n, i) {
  const r = t.options,
    { [n]: a } = t.getProps([n], i);
  return Math.abs(e - a) < r.radius + r.hitRadius;
}
class pr extends qn {
  constructor(n) {
    super();
    K(this, 'parsed');
    K(this, 'skip');
    K(this, 'stop');
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, r) {
    const a = this.options,
      { x: s, y: o } = this.getProps(['x', 'y'], r);
    return Math.pow(n - s, 2) + Math.pow(i - o, 2) < Math.pow(a.hitRadius + a.radius, 2);
  }
  inXRange(n, i) {
    return jl(this, n, 'x', i);
  }
  inYRange(n, i) {
    return jl(this, n, 'y', i);
  }
  getCenterPoint(n) {
    const { x: i, y: r } = this.getProps(['x', 'y'], n);
    return {
      x: i,
      y: r,
    };
  }
  size(n) {
    n = n || this.options || {};
    let i = n.radius || 0;
    i = Math.max(i, (i && n.hoverRadius) || 0);
    const r = (i && n.borderWidth) || 0;
    return (i + r) * 2;
  }
  draw(n, i) {
    const r = this.options;
    this.skip ||
      r.radius < 0.1 ||
      !jt(this, i, this.size(r) / 2) ||
      ((n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      (n.fillStyle = r.backgroundColor),
      ja(n, r, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
K(pr, 'id', 'point'),
  /**
   * @type {any}
   */
  K(pr, 'defaults', {
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
  K(pr, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
class vu extends qn {
  constructor(e) {
    super(),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
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
  update(e, n) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = e), (this.height = this.bottom = n);
    const r = ze(i.text) ? i.text.length : 1;
    this._padding = ct(i.padding);
    const a = r * Ue(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = a) : (this.width = a);
  }
  isHorizontal() {
    const e = this.options.position;
    return e === 'top' || e === 'bottom';
  }
  _drawArgs(e) {
    const { top: n, left: i, bottom: r, right: a, options: s } = this,
      o = s.align;
    let l = 0,
      c,
      h,
      u;
    return (
      this.isHorizontal()
        ? ((h = mi(o, i, a)), (u = n + e), (c = a - i))
        : (s.position === 'left'
            ? ((h = i + e), (u = mi(o, r, n)), (l = Pe * -0.5))
            : ((h = a - e), (u = mi(o, n, r)), (l = Pe * 0.5)),
          (c = r - n)),
      {
        titleX: h,
        titleY: u,
        maxWidth: c,
        rotation: l,
      }
    );
  }
  draw() {
    const e = this.ctx,
      n = this.options;
    if (!n.display) return;
    const i = Ue(n.font),
      a = i.lineHeight / 2 + this._padding.top,
      { titleX: s, titleY: o, maxWidth: l, rotation: c } = this._drawArgs(a);
    ki(e, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: Yh(n.align),
      textBaseline: 'middle',
      translation: [s, o],
    });
  }
}
function $3(t, e) {
  const n = new vu({
    ctx: t.ctx,
    options: e,
    chart: t,
  });
  Qt.configure(t, n, e), Qt.addBox(t, n), (t.titleBlock = n);
}
var j3 = {
  id: 'title',
  _element: vu,
  start(t, e, n) {
    $3(t, n);
  },
  stop(t) {
    const e = t.titleBlock;
    Qt.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, n) {
    const i = t.titleBlock;
    Qt.configure(t, i, n), (i.options = n);
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
const ci = {
  average(t) {
    if (!t.length) return !1;
    let e,
      n,
      i = 0,
      r = 0,
      a = 0;
    for (e = 0, n = t.length; e < n; ++e) {
      const s = t[e].element;
      if (s && s.hasValue()) {
        const o = s.tooltipPosition();
        (i += o.x), (r += o.y), ++a;
      }
    }
    return {
      x: i / a,
      y: r / a,
    };
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let n = e.x,
      i = e.y,
      r = Number.POSITIVE_INFINITY,
      a,
      s,
      o;
    for (a = 0, s = t.length; a < s; ++a) {
      const l = t[a].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          h = Fa(e, c);
        h < r && ((r = h), (o = l));
      }
    }
    if (o) {
      const l = o.tooltipPosition();
      (n = l.x), (i = l.y);
    }
    return {
      x: n,
      y: i,
    };
  },
};
function It(t, e) {
  return e && (ze(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Ft(t) {
  return (typeof t == 'string' || t instanceof String) &&
    t.indexOf(`
`) > -1
    ? t.split(`
`)
    : t;
}
function W3(t, e) {
  const { element: n, datasetIndex: i, index: r } = e,
    a = t.getDatasetMeta(i).controller,
    { label: s, value: o } = a.getLabelAndValue(r);
  return {
    chart: t,
    label: s,
    parsed: a.getParsed(r),
    raw: t.data.datasets[i].data[r],
    formattedValue: o,
    dataset: a.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n,
  };
}
function Wl(t, e) {
  const n = t.chart.ctx,
    { body: i, footer: r, title: a } = t,
    { boxWidth: s, boxHeight: o } = e,
    l = Ue(e.bodyFont),
    c = Ue(e.titleFont),
    h = Ue(e.footerFont),
    u = a.length,
    p = r.length,
    m = i.length,
    g = ct(e.padding);
  let b = g.height,
    v = 0,
    y = i.reduce((M, _) => M + _.before.length + _.lines.length + _.after.length, 0);
  if (
    ((y += t.beforeBody.length + t.afterBody.length),
    u && (b += u * c.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom),
    y)
  ) {
    const M = e.displayColors ? Math.max(o, l.lineHeight) : l.lineHeight;
    b += m * M + (y - m) * l.lineHeight + (y - 1) * e.bodySpacing;
  }
  p && (b += e.footerMarginTop + p * h.lineHeight + (p - 1) * e.footerSpacing);
  let w = 0;
  const S = function (M) {
    v = Math.max(v, n.measureText(M).width + w);
  };
  return (
    n.save(),
    (n.font = c.string),
    pe(t.title, S),
    (n.font = l.string),
    pe(t.beforeBody.concat(t.afterBody), S),
    (w = e.displayColors ? s + 2 + e.boxPadding : 0),
    pe(i, (M) => {
      pe(M.before, S), pe(M.lines, S), pe(M.after, S);
    }),
    (w = 0),
    (n.font = h.string),
    pe(t.footer, S),
    n.restore(),
    (v += g.width),
    {
      width: v,
      height: b,
    }
  );
}
function X3(t, e) {
  const { y: n, height: i } = e;
  return n < i / 2 ? 'top' : n > t.height - i / 2 ? 'bottom' : 'center';
}
function Y3(t, e, n, i) {
  const { x: r, width: a } = i,
    s = n.caretSize + n.caretPadding;
  if ((t === 'left' && r + a + s > e.width) || (t === 'right' && r - a - s < 0)) return !0;
}
function U3(t, e, n, i) {
  const { x: r, width: a } = n,
    {
      width: s,
      chartArea: { left: o, right: l },
    } = t;
  let c = 'center';
  return (
    i === 'center'
      ? (c = r <= (o + l) / 2 ? 'left' : 'right')
      : r <= a / 2
      ? (c = 'left')
      : r >= s - a / 2 && (c = 'right'),
    Y3(c, t, e, n) && (c = 'center'),
    c
  );
}
function Xl(t, e, n) {
  const i = n.yAlign || e.yAlign || X3(t, n);
  return {
    xAlign: n.xAlign || e.xAlign || U3(t, e, n, i),
    yAlign: i,
  };
}
function q3(t, e) {
  let { x: n, width: i } = t;
  return e === 'right' ? (n -= i) : e === 'center' && (n -= i / 2), n;
}
function G3(t, e, n) {
  let { y: i, height: r } = t;
  return e === 'top' ? (i += n) : e === 'bottom' ? (i -= r + n) : (i -= r / 2), i;
}
function Yl(t, e, n, i) {
  const { caretSize: r, caretPadding: a, cornerRadius: s } = t,
    { xAlign: o, yAlign: l } = n,
    c = r + a,
    { topLeft: h, topRight: u, bottomLeft: p, bottomRight: m } = bi(s);
  let g = q3(e, o);
  const b = G3(e, l, c);
  return (
    l === 'center'
      ? o === 'left'
        ? (g += c)
        : o === 'right' && (g -= c)
      : o === 'left'
      ? (g -= Math.max(h, p) + r)
      : o === 'right' && (g += Math.max(u, m) + r),
    {
      x: bt(g, 0, i.width - e.width),
      y: bt(b, 0, i.height - e.height),
    }
  );
}
function rr(t, e, n) {
  const i = ct(n.padding);
  return e === 'center'
    ? t.x + t.width / 2
    : e === 'right'
    ? t.x + t.width - i.right
    : t.x + i.left;
}
function Ul(t) {
  return It([], Ft(t));
}
function K3(t, e, n) {
  return sn(t, {
    tooltip: e,
    tooltipItems: n,
    type: 'tooltip',
  });
}
function ql(t, e) {
  const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return n ? t.override(n) : t;
}
const bu = {
  beforeTitle: Bt,
  title(t) {
    if (t.length > 0) {
      const e = t[0],
        n = e.chart.data.labels,
        i = n ? n.length : 0;
      if (this && this.options && this.options.mode === 'dataset') return e.dataset.label || '';
      if (e.label) return e.label;
      if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
    }
    return '';
  },
  afterTitle: Bt,
  beforeBody: Bt,
  beforeLabel: Bt,
  label(t) {
    if (this && this.options && this.options.mode === 'dataset')
      return t.label + ': ' + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || '';
    e && (e += ': ');
    const n = t.formattedValue;
    return we(n) || (e += n), e;
  },
  labelColor(t) {
    const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return {
      pointStyle: n.pointStyle,
      rotation: n.rotation,
    };
  },
  afterLabel: Bt,
  afterBody: Bt,
  beforeFooter: Bt,
  footer: Bt,
  afterFooter: Bt,
};
function Ke(t, e, n, i) {
  const r = t[e].call(n, i);
  return typeof r > 'u' ? bu[e].call(n, i) : r;
}
class qa extends qn {
  constructor(e) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
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
  initialize(e) {
    (this.options = e), (this._cachedAnimations = void 0), (this.$context = void 0);
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      r = i.enabled && n.options.animation && i.animations,
      a = new ru(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
  }
  getContext() {
    return this.$context || (this.$context = K3(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(e, n) {
    const { callbacks: i } = n,
      r = Ke(i, 'beforeTitle', this, e),
      a = Ke(i, 'title', this, e),
      s = Ke(i, 'afterTitle', this, e);
    let o = [];
    return (o = It(o, Ft(r))), (o = It(o, Ft(a))), (o = It(o, Ft(s))), o;
  }
  getBeforeBody(e, n) {
    return Ul(Ke(n.callbacks, 'beforeBody', this, e));
  }
  getBody(e, n) {
    const { callbacks: i } = n,
      r = [];
    return (
      pe(e, (a) => {
        const s = {
            before: [],
            lines: [],
            after: [],
          },
          o = ql(i, a);
        It(s.before, Ft(Ke(o, 'beforeLabel', this, a))),
          It(s.lines, Ke(o, 'label', this, a)),
          It(s.after, Ft(Ke(o, 'afterLabel', this, a))),
          r.push(s);
      }),
      r
    );
  }
  getAfterBody(e, n) {
    return Ul(Ke(n.callbacks, 'afterBody', this, e));
  }
  getFooter(e, n) {
    const { callbacks: i } = n,
      r = Ke(i, 'beforeFooter', this, e),
      a = Ke(i, 'footer', this, e),
      s = Ke(i, 'afterFooter', this, e);
    let o = [];
    return (o = It(o, Ft(r))), (o = It(o, Ft(a))), (o = It(o, Ft(s))), o;
  }
  _createItems(e) {
    const n = this._active,
      i = this.chart.data,
      r = [],
      a = [],
      s = [];
    let o = [],
      l,
      c;
    for (l = 0, c = n.length; l < c; ++l) o.push(W3(this.chart, n[l]));
    return (
      e.filter && (o = o.filter((h, u, p) => e.filter(h, u, p, i))),
      e.itemSort && (o = o.sort((h, u) => e.itemSort(h, u, i))),
      pe(o, (h) => {
        const u = ql(e.callbacks, h);
        r.push(Ke(u, 'labelColor', this, h)),
          a.push(Ke(u, 'labelPointStyle', this, h)),
          s.push(Ke(u, 'labelTextColor', this, h));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = a),
      (this.labelTextColors = s),
      (this.dataPoints = o),
      o
    );
  }
  update(e, n) {
    const i = this.options.setContext(this.getContext()),
      r = this._active;
    let a,
      s = [];
    if (!r.length)
      this.opacity !== 0 &&
        (a = {
          opacity: 0,
        });
    else {
      const o = ci[i.position].call(this, r, this._eventPosition);
      (s = this._createItems(i)),
        (this.title = this.getTitle(s, i)),
        (this.beforeBody = this.getBeforeBody(s, i)),
        (this.body = this.getBody(s, i)),
        (this.afterBody = this.getAfterBody(s, i)),
        (this.footer = this.getFooter(s, i));
      const l = (this._size = Wl(this, i)),
        c = Object.assign({}, o, l),
        h = Xl(this.chart, i, c),
        u = Yl(i, c, h, this.chart);
      (this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (a = {
          opacity: 1,
          x: u.x,
          y: u.y,
          width: l.width,
          height: l.height,
          caretX: o.x,
          caretY: o.y,
        });
    }
    (this._tooltipItems = s),
      (this.$context = void 0),
      a && this._resolveAnimations().update(this, a),
      e &&
        i.external &&
        i.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay: n,
        });
  }
  drawCaret(e, n, i, r) {
    const a = this.getCaretPosition(e, i, r);
    n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
  }
  getCaretPosition(e, n, i) {
    const { xAlign: r, yAlign: a } = this,
      { caretSize: s, cornerRadius: o } = i,
      { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = bi(o),
      { x: p, y: m } = e,
      { width: g, height: b } = n;
    let v, y, w, S, M, _;
    return (
      a === 'center'
        ? ((M = m + b / 2),
          r === 'left'
            ? ((v = p), (y = v - s), (S = M + s), (_ = M - s))
            : ((v = p + g), (y = v + s), (S = M - s), (_ = M + s)),
          (w = v))
        : (r === 'left'
            ? (y = p + Math.max(l, h) + s)
            : r === 'right'
            ? (y = p + g - Math.max(c, u) - s)
            : (y = this.caretX),
          a === 'top'
            ? ((S = m), (M = S - s), (v = y - s), (w = y + s))
            : ((S = m + b), (M = S + s), (v = y + s), (w = y - s)),
          (_ = S)),
      {
        x1: v,
        x2: y,
        x3: w,
        y1: S,
        y2: M,
        y3: _,
      }
    );
  }
  drawTitle(e, n, i) {
    const r = this.title,
      a = r.length;
    let s, o, l;
    if (a) {
      const c = Ea(i.rtl, this.x, this.width);
      for (
        e.x = rr(this, i.titleAlign, i),
          n.textAlign = c.textAlign(i.titleAlign),
          n.textBaseline = 'middle',
          s = Ue(i.titleFont),
          o = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = s.string,
          l = 0;
        l < a;
        ++l
      )
        n.fillText(r[l], c.x(e.x), e.y + s.lineHeight / 2),
          (e.y += s.lineHeight + o),
          l + 1 === a && (e.y += i.titleMarginBottom - o);
    }
  }
  _drawColorBox(e, n, i, r, a) {
    const s = this.labelColors[i],
      o = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: c } = a,
      h = Ue(a.bodyFont),
      u = rr(this, 'left', a),
      p = r.x(u),
      m = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
      g = n.y + m;
    if (a.usePointStyle) {
      const b = {
          radius: Math.min(c, l) / 2,
          pointStyle: o.pointStyle,
          rotation: o.rotation,
          borderWidth: 1,
        },
        v = r.leftForLtr(p, c) + c / 2,
        y = g + l / 2;
      (e.strokeStyle = a.multiKeyBackground),
        (e.fillStyle = a.multiKeyBackground),
        ja(e, b, v, y),
        (e.strokeStyle = s.borderColor),
        (e.fillStyle = s.backgroundColor),
        ja(e, b, v, y);
    } else {
      (e.lineWidth = he(s.borderWidth)
        ? Math.max(...Object.values(s.borderWidth))
        : s.borderWidth || 1),
        (e.strokeStyle = s.borderColor),
        e.setLineDash(s.borderDash || []),
        (e.lineDashOffset = s.borderDashOffset || 0);
      const b = r.leftForLtr(p, c),
        v = r.leftForLtr(r.xPlus(p, 1), c - 2),
        y = bi(s.borderRadius);
      Object.values(y).some((w) => w !== 0)
        ? (e.beginPath(),
          (e.fillStyle = a.multiKeyBackground),
          Wa(e, {
            x: b,
            y: g,
            w: c,
            h: l,
            radius: y,
          }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = s.backgroundColor),
          e.beginPath(),
          Wa(e, {
            x: v,
            y: g + 1,
            w: c - 2,
            h: l - 2,
            radius: y,
          }),
          e.fill())
        : ((e.fillStyle = a.multiKeyBackground),
          e.fillRect(b, g, c, l),
          e.strokeRect(b, g, c, l),
          (e.fillStyle = s.backgroundColor),
          e.fillRect(v, g + 1, c - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[i];
  }
  drawBody(e, n, i) {
    const { body: r } = this,
      {
        bodySpacing: a,
        bodyAlign: s,
        displayColors: o,
        boxHeight: l,
        boxWidth: c,
        boxPadding: h,
      } = i,
      u = Ue(i.bodyFont);
    let p = u.lineHeight,
      m = 0;
    const g = Ea(i.rtl, this.x, this.width),
      b = function (L) {
        n.fillText(L, g.x(e.x + m), e.y + p / 2), (e.y += p + a);
      },
      v = g.textAlign(s);
    let y, w, S, M, _, O, C;
    for (
      n.textAlign = s,
        n.textBaseline = 'middle',
        n.font = u.string,
        e.x = rr(this, v, i),
        n.fillStyle = i.bodyColor,
        pe(this.beforeBody, b),
        m = o && v !== 'right' ? (s === 'center' ? c / 2 + h : c + 2 + h) : 0,
        M = 0,
        O = r.length;
      M < O;
      ++M
    ) {
      for (
        y = r[M],
          w = this.labelTextColors[M],
          n.fillStyle = w,
          pe(y.before, b),
          S = y.lines,
          o && S.length && (this._drawColorBox(n, e, M, g, i), (p = Math.max(u.lineHeight, l))),
          _ = 0,
          C = S.length;
        _ < C;
        ++_
      )
        b(S[_]), (p = u.lineHeight);
      pe(y.after, b);
    }
    (m = 0), (p = u.lineHeight), pe(this.afterBody, b), (e.y -= a);
  }
  drawFooter(e, n, i) {
    const r = this.footer,
      a = r.length;
    let s, o;
    if (a) {
      const l = Ea(i.rtl, this.x, this.width);
      for (
        e.x = rr(this, i.footerAlign, i),
          e.y += i.footerMarginTop,
          n.textAlign = l.textAlign(i.footerAlign),
          n.textBaseline = 'middle',
          s = Ue(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = s.string,
          o = 0;
        o < a;
        ++o
      )
        n.fillText(r[o], l.x(e.x), e.y + s.lineHeight / 2), (e.y += s.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(e, n, i, r) {
    const { xAlign: a, yAlign: s } = this,
      { x: o, y: l } = e,
      { width: c, height: h } = i,
      { topLeft: u, topRight: p, bottomLeft: m, bottomRight: g } = bi(r.cornerRadius);
    (n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      n.beginPath(),
      n.moveTo(o + u, l),
      s === 'top' && this.drawCaret(e, n, i, r),
      n.lineTo(o + c - p, l),
      n.quadraticCurveTo(o + c, l, o + c, l + p),
      s === 'center' && a === 'right' && this.drawCaret(e, n, i, r),
      n.lineTo(o + c, l + h - g),
      n.quadraticCurveTo(o + c, l + h, o + c - g, l + h),
      s === 'bottom' && this.drawCaret(e, n, i, r),
      n.lineTo(o + m, l + h),
      n.quadraticCurveTo(o, l + h, o, l + h - m),
      s === 'center' && a === 'left' && this.drawCaret(e, n, i, r),
      n.lineTo(o, l + u),
      n.quadraticCurveTo(o, l, o + u, l),
      n.closePath(),
      n.fill(),
      r.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(e) {
    const n = this.chart,
      i = this.$animations,
      r = i && i.x,
      a = i && i.y;
    if (r || a) {
      const s = ci[e.position].call(this, this._active, this._eventPosition);
      if (!s) return;
      const o = (this._size = Wl(this, e)),
        l = Object.assign({}, s, this._size),
        c = Xl(n, e, l),
        h = Yl(e, l, c, n);
      (r._to !== h.x || a._to !== h.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = o.width),
        (this.height = o.height),
        (this.caretX = s.x),
        (this.caretY = s.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(n);
    const r = {
        width: this.width,
        height: this.height,
      },
      a = {
        x: this.x,
        y: this.y,
      };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const s = ct(n.padding),
      o =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      o &&
      (e.save(),
      (e.globalAlpha = i),
      this.drawBackground(a, e, r, n),
      J5(e, n.textDirection),
      (a.y += s.top),
      this.drawTitle(a, e, n),
      this.drawBody(a, e, n),
      this.drawFooter(a, e, n),
      ev(e, n.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, n) {
    const i = this._active,
      r = e.map(({ datasetIndex: o, index: l }) => {
        const c = this.chart.getDatasetMeta(o);
        if (!c) throw new Error('Cannot find a dataset at index ' + o);
        return {
          datasetIndex: o,
          element: c.data[l],
          index: l,
        };
      }),
      a = !Vr(i, r),
      s = this._positionChanged(r, n);
    (a || s) &&
      ((this._active = r),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(e, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      a = this._active || [],
      s = this._getActiveElements(e, a, n, i),
      o = this._positionChanged(s, e),
      l = n || !Vr(s, a) || o;
    return (
      l &&
        ((this._active = s),
        (r.enabled || r.external) &&
          ((this._eventPosition = {
            x: e.x,
            y: e.y,
          }),
          this.update(!0, n))),
      l
    );
  }
  _getActiveElements(e, n, i, r) {
    const a = this.options;
    if (e.type === 'mouseout') return [];
    if (!r) return n;
    const s = this.chart.getElementsAtEventForMode(e, a.mode, a, i);
    return a.reverse && s.reverse(), s;
  }
  _positionChanged(e, n) {
    const { caretX: i, caretY: r, options: a } = this,
      s = ci[a.position].call(this, e, n);
    return s !== !1 && (i !== s.x || r !== s.y);
  }
}
K(qa, 'positioners', ci);
var Z3 = {
  id: 'tooltip',
  _element: qa,
  positioners: ci,
  afterInit(t, e, n) {
    n &&
      (t.tooltip = new qa({
        chart: t,
        options: n,
      }));
  },
  beforeUpdate(t, e, n) {
    t.tooltip && t.tooltip.initialize(n);
  },
  reset(t, e, n) {
    t.tooltip && t.tooltip.initialize(n);
  },
  afterDraw(t) {
    const e = t.tooltip;
    if (e && e._willRender()) {
      const n = {
        tooltip: e,
      };
      if (
        t.notifyPlugins('beforeTooltipDraw', {
          ...n,
          cancelable: !0,
        }) === !1
      )
        return;
      e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n);
    }
  },
  afterEvent(t, e) {
    if (t.tooltip) {
      const n = e.replay;
      t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
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
    boxHeight: (t, e) => e.bodyFont.size,
    boxWidth: (t, e) => e.bodyFont.size,
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
    callbacks: bu,
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font',
  },
  descriptors: {
    _scriptable: (t) => t !== 'filter' && t !== 'itemSort' && t !== 'external',
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
const Q3 = (t, e, n, i) => (
  typeof e == 'string'
    ? ((n = t.push(e) - 1),
      i.unshift({
        index: n,
        label: e,
      }))
    : isNaN(e) && (n = null),
  n
);
function J3(t, e, n, i) {
  const r = t.indexOf(e);
  if (r === -1) return Q3(t, e, n, i);
  const a = t.lastIndexOf(e);
  return r !== a ? n : r;
}
const eb = (t, e) => (t === null ? null : bt(Math.round(t), 0, e));
function Gl(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class Ga extends zn {
  constructor(e) {
    super(e), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
  }
  init(e) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: r, label: a } of n) i[r] === a && i.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, n) {
    if (we(e)) return null;
    const i = this.getLabels();
    return (
      (n = isFinite(n) && i[n] === e ? n : J3(i, e, me(n, e), this._addedLabels)),
      eb(n, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: i, max: r } = this.getMinMax(!0);
    this.options.bounds === 'ticks' && (e || (i = 0), n || (r = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const e = this.min,
      n = this.max,
      i = this.options.offset,
      r = [];
    let a = this.getLabels();
    (a = e === 0 && n === a.length - 1 ? a : a.slice(e, n + 1)),
      (this._valueRange = Math.max(a.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let s = e; s <= n; s++)
      r.push({
        value: s,
      });
    return r;
  }
  getLabelForValue(e) {
    return Gl.call(this, e);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return (
      typeof e != 'number' && (e = this.parse(e)),
      e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getValueForPixel(e) {
    return Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
K(Ga, 'id', 'category'),
  K(Ga, 'defaults', {
    ticks: {
      callback: Gl,
    },
  });
function tb(t, e) {
  const n = [],
    {
      bounds: r,
      step: a,
      min: s,
      max: o,
      precision: l,
      count: c,
      maxTicks: h,
      maxDigits: u,
      includeBounds: p,
    } = t,
    m = a || 1,
    g = h - 1,
    { min: b, max: v } = e,
    y = !we(s),
    w = !we(o),
    S = !we(c),
    M = (v - b) / (u + 1);
  let _ = nl((v - b) / g / m) * m,
    O,
    C,
    L,
    T;
  if (_ < 1e-14 && !y && !w)
    return [
      {
        value: b,
      },
      {
        value: v,
      },
    ];
  (T = Math.ceil(v / _) - Math.floor(b / _)),
    T > g && (_ = nl((T * _) / g / m) * m),
    we(l) || ((O = Math.pow(10, l)), (_ = Math.ceil(_ * O) / O)),
    r === 'ticks' ? ((C = Math.floor(b / _) * _), (L = Math.ceil(v / _) * _)) : ((C = b), (L = v)),
    y && w && a && Yg((o - s) / a, _ / 1e3)
      ? ((T = Math.round(Math.min((o - s) / _, h))), (_ = (o - s) / T), (C = s), (L = o))
      : S
      ? ((C = y ? s : C), (L = w ? o : L), (T = c - 1), (_ = (L - C) / T))
      : ((T = (L - C) / _),
        pi(T, Math.round(T), _ / 1e3) ? (T = Math.round(T)) : (T = Math.ceil(T)));
  const R = Math.max(il(_), il(C));
  (O = Math.pow(10, we(l) ? R : l)), (C = Math.round(C * O) / O), (L = Math.round(L * O) / O);
  let P = 0;
  for (
    y &&
    (p && C !== s
      ? (n.push({
          value: s,
        }),
        C < s && P++,
        pi(Math.round((C + P * _) * O) / O, s, Kl(s, M, t)) && P++)
      : C < s && P++);
    P < T;
    ++P
  ) {
    const N = Math.round((C + P * _) * O) / O;
    if (w && N > o) break;
    n.push({
      value: N,
    });
  }
  return (
    w && p && L !== o
      ? n.length && pi(n[n.length - 1].value, o, Kl(o, M, t))
        ? (n[n.length - 1].value = o)
        : n.push({
            value: o,
          })
      : (!w || L === o) &&
        n.push({
          value: L,
        }),
    n
  );
}
function Kl(t, e, { horizontal: n, minRotation: i }) {
  const r = Zt(i),
    a = (n ? Math.sin(r) : Math.cos(r)) || 1e-3,
    s = 0.75 * e * ('' + t).length;
  return Math.min(e / a, s);
}
class Yr extends zn {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    return we(e) || ((typeof e == 'number' || e instanceof Number) && !isFinite(+e)) ? null : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: r, max: a } = this;
    const s = (l) => (r = n ? r : l),
      o = (l) => (a = i ? a : l);
    if (e) {
      const l = Fn(r),
        c = Fn(a);
      l < 0 && c < 0 ? o(0) : l > 0 && c > 0 && s(0);
    }
    if (r === a) {
      let l = a === 0 ? 1 : Math.abs(a * 0.05);
      o(a + l), e || s(r - l);
    }
    (this.min = r), (this.max = a);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = e,
      r;
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      n = e.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const r = {
        maxTicks: i,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      a = this._range || this,
      s = tb(r, a);
    return (
      e.bounds === 'ticks' && Fh(s, this, 'value'),
      e.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  configure() {
    const e = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const r = (i - n) / Math.max(e.length - 1, 1) / 2;
      (n -= r), (i += r);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(e) {
    return Is(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ka extends Yr {
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = He(e) ? e : 0), (this.max = He(n) ? n : 1), this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      n = e ? this.width : this.height,
      i = Zt(this.options.ticks.minRotation),
      r = (e ? Math.sin(i) : Math.cos(i)) || 1e-3,
      a = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, a.lineHeight / r));
  }
  getPixelForValue(e) {
    return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
K(Ka, 'id', 'linear'),
  K(Ka, 'defaults', {
    ticks: {
      callback: sa.formatters.numeric,
    },
  });
const Li = (t) => Math.floor(Kt(t)),
  hn = (t, e) => Math.pow(10, Li(t) + e);
function Zl(t) {
  return t / Math.pow(10, Li(t)) === 1;
}
function Ql(t, e, n) {
  const i = Math.pow(10, n),
    r = Math.floor(t / i);
  return Math.ceil(e / i) - r;
}
function nb(t, e) {
  const n = e - t;
  let i = Li(n);
  for (; Ql(t, e, i) > 10; ) i++;
  for (; Ql(t, e, i) < 10; ) i--;
  return Math.min(i, Li(t));
}
function ib(t, { min: e, max: n }) {
  e = it(t.min, e);
  const i = [],
    r = Li(e);
  let a = nb(e, n),
    s = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  const o = Math.pow(10, a),
    l = r > a ? Math.pow(10, r) : 0,
    c = Math.round((e - l) * s) / s,
    h = Math.floor((e - l) / o / 10) * o * 10;
  let u = Math.floor((c - h) / Math.pow(10, a)),
    p = it(t.min, Math.round((l + h + u * Math.pow(10, a)) * s) / s);
  for (; p < n; )
    i.push({
      value: p,
      major: Zl(p),
      significand: u,
    }),
      u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
      u >= 20 && (a++, (u = 2), (s = a >= 0 ? 1 : s)),
      (p = Math.round((l + h + u * Math.pow(10, a)) * s) / s);
  const m = it(t.max, p);
  return (
    i.push({
      value: m,
      major: Zl(m),
      significand: u,
    }),
    i
  );
}
class Jl extends zn {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    const i = Yr.prototype.parse.apply(this, [e, n]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return He(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = He(e) ? Math.max(0, e) : null),
      (this.max = He(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !He(this._userMin) &&
        (this.min = e === hn(this.min, 0) ? hn(this.min, -1) : hn(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let i = this.min,
      r = this.max;
    const a = (o) => (i = e ? i : o),
      s = (o) => (r = n ? r : o);
    i === r && (i <= 0 ? (a(1), s(10)) : (a(hn(i, -1)), s(hn(r, 1)))),
      i <= 0 && a(hn(r, -1)),
      r <= 0 && s(hn(i, 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const e = this.options,
      n = {
        min: this._userMin,
        max: this._userMax,
      },
      i = ib(n, this);
    return (
      e.bounds === 'ticks' && Fh(i, this, 'value'),
      e.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(e) {
    return e === void 0 ? '0' : Is(e, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const e = this.min;
    super.configure(), (this._startValue = Kt(e)), (this._valueRange = Kt(this.max) - Kt(e));
  }
  getPixelForValue(e) {
    return (
      (e === void 0 || e === 0) && (e = this.min),
      e === null || isNaN(e)
        ? NaN
        : this.getPixelForDecimal(
            e === this.min ? 0 : (Kt(e) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(e) {
    const n = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
K(Jl, 'id', 'logarithmic'),
  K(Jl, 'defaults', {
    ticks: {
      callback: sa.formatters.logarithmic,
      major: {
        enabled: !0,
      },
    },
  });
function Za(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const n = ct(e.backdropPadding);
    return me(e.font && e.font.size, Ie.font.size) + n.height;
  }
  return 0;
}
function rb(t, e, n) {
  return (
    (n = ze(n) ? n : [n]),
    {
      w: f5(t, e.string, n),
      h: n.length * e.lineHeight,
    }
  );
}
function ec(t, e, n, i, r) {
  return t === i || t === r
    ? {
        start: e - n / 2,
        end: e + n / 2,
      }
    : t < i || t > r
    ? {
        start: e - n,
        end: e,
      }
    : {
        start: e,
        end: e + n,
      };
}
function ab(t) {
  const e = {
      l: t.left + t._padding.left,
      r: t.right - t._padding.right,
      t: t.top + t._padding.top,
      b: t.bottom - t._padding.bottom,
    },
    n = Object.assign({}, e),
    i = [],
    r = [],
    a = t._pointLabels.length,
    s = t.options.pointLabels,
    o = s.centerPointLabels ? Pe / a : 0;
  for (let l = 0; l < a; l++) {
    const c = s.setContext(t.getPointLabelContext(l));
    r[l] = c.padding;
    const h = t.getPointPosition(l, t.drawingArea + r[l], o),
      u = Ue(c.font),
      p = rb(t.ctx, u, t._pointLabels[l]);
    i[l] = p;
    const m = Mt(t.getIndexAngle(l) + o),
      g = Math.round(ks(m)),
      b = ec(g, h.x, p.w, 0, 180),
      v = ec(g, h.y, p.h, 90, 270);
    sb(n, e, m, b, v);
  }
  t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b), (t._pointLabelItems = cb(t, i, r));
}
function sb(t, e, n, i, r) {
  const a = Math.abs(Math.sin(n)),
    s = Math.abs(Math.cos(n));
  let o = 0,
    l = 0;
  i.start < e.l
    ? ((o = (e.l - i.start) / a), (t.l = Math.min(t.l, e.l - o)))
    : i.end > e.r && ((o = (i.end - e.r) / a), (t.r = Math.max(t.r, e.r + o))),
    r.start < e.t
      ? ((l = (e.t - r.start) / s), (t.t = Math.min(t.t, e.t - l)))
      : r.end > e.b && ((l = (r.end - e.b) / s), (t.b = Math.max(t.b, e.b + l)));
}
function ob(t, e, n) {
  const i = t.drawingArea,
    { extra: r, additionalAngle: a, padding: s, size: o } = n,
    l = t.getPointPosition(e, i + r + s, a),
    c = Math.round(ks(Mt(l.angle + Qe))),
    h = ub(l.y, o.h, c),
    u = db(c),
    p = hb(l.x, o.w, u);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: u,
    left: p,
    top: h,
    right: p + o.w,
    bottom: h + o.h,
  };
}
function lb(t, e) {
  if (!e) return !0;
  const { left: n, top: i, right: r, bottom: a } = t;
  return !(
    jt(
      {
        x: n,
        y: i,
      },
      e
    ) ||
    jt(
      {
        x: n,
        y: a,
      },
      e
    ) ||
    jt(
      {
        x: r,
        y: i,
      },
      e
    ) ||
    jt(
      {
        x: r,
        y: a,
      },
      e
    )
  );
}
function cb(t, e, n) {
  const i = [],
    r = t._pointLabels.length,
    a = t.options,
    { centerPointLabels: s, display: o } = a.pointLabels,
    l = {
      extra: Za(a) / 2,
      additionalAngle: s ? Pe / r : 0,
    };
  let c;
  for (let h = 0; h < r; h++) {
    (l.padding = n[h]), (l.size = e[h]);
    const u = ob(t, h, l);
    i.push(u), o === 'auto' && ((u.visible = lb(u, c)), u.visible && (c = u));
  }
  return i;
}
function db(t) {
  return t === 0 || t === 180 ? 'center' : t < 180 ? 'left' : 'right';
}
function hb(t, e, n) {
  return n === 'right' ? (t -= e) : n === 'center' && (t -= e / 2), t;
}
function ub(t, e, n) {
  return n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t;
}
function fb(t, e, n) {
  const { left: i, top: r, right: a, bottom: s } = n,
    { backdropColor: o } = e;
  if (!we(o)) {
    const l = bi(e.borderRadius),
      c = ct(e.backdropPadding);
    t.fillStyle = o;
    const h = i - c.left,
      u = r - c.top,
      p = a - i + c.width,
      m = s - r + c.height;
    Object.values(l).some((g) => g !== 0)
      ? (t.beginPath(),
        Wa(t, {
          x: h,
          y: u,
          w: p,
          h: m,
          radius: l,
        }),
        t.fill())
      : t.fillRect(h, u, p, m);
  }
}
function pb(t, e) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = t;
  for (let r = e - 1; r >= 0; r--) {
    const a = t._pointLabelItems[r];
    if (!a.visible) continue;
    const s = i.setContext(t.getPointLabelContext(r));
    fb(n, s, a);
    const o = Ue(s.font),
      { x: l, y: c, textAlign: h } = a;
    ki(n, t._pointLabels[r], l, c + o.lineHeight / 2, o, {
      color: s.color,
      textAlign: h,
      textBaseline: 'middle',
    });
  }
}
function yu(t, e, n, i) {
  const { ctx: r } = t;
  if (n) r.arc(t.xCenter, t.yCenter, e, 0, xt);
  else {
    let a = t.getPointPosition(0, e);
    r.moveTo(a.x, a.y);
    for (let s = 1; s < i; s++) (a = t.getPointPosition(s, e)), r.lineTo(a.x, a.y);
  }
}
function mb(t, e, n, i, r) {
  const a = t.ctx,
    s = e.circular,
    { color: o, lineWidth: l } = e;
  (!s && !i) ||
    !o ||
    !l ||
    n < 0 ||
    (a.save(),
    (a.strokeStyle = o),
    (a.lineWidth = l),
    a.setLineDash(r.dash),
    (a.lineDashOffset = r.dashOffset),
    a.beginPath(),
    yu(t, n, s, i),
    a.closePath(),
    a.stroke(),
    a.restore());
}
function gb(t, e, n) {
  return sn(t, {
    label: n,
    index: e,
    type: 'pointLabel',
  });
}
class ar extends Yr {
  constructor(e) {
    super(e),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const e = (this._padding = ct(Za(this.options) / 2)),
      n = (this.width = this.maxWidth - e.width),
      i = (this.height = this.maxHeight - e.height);
    (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2));
  }
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!1);
    (this.min = He(e) && !isNaN(e) ? e : 0),
      (this.max = He(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Za(this.options));
  }
  generateTickLabels(e) {
    Yr.prototype.generateTickLabels.call(this, e),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const r = Oe(this.options.pointLabels.callback, [n, i], this);
          return r || r === 0 ? r : '';
        })
        .filter((n, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const e = this.options;
    e.display && e.pointLabels.display ? ab(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(e, n, i, r) {
    (this.xCenter += Math.floor((e - n) / 2)),
      (this.yCenter += Math.floor((i - r) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, n, i, r)));
  }
  getIndexAngle(e) {
    const n = xt / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return Mt(e * n + Zt(i));
  }
  getDistanceFromCenterForValue(e) {
    if (we(e)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
  }
  getValueForDistanceFromCenter(e) {
    if (we(e)) return NaN;
    const n = e / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(e) {
    const n = this._pointLabels || [];
    if (e >= 0 && e < n.length) {
      const i = n[e];
      return gb(this.getContext(), e, i);
    }
  }
  getPointPosition(e, n, i = 0) {
    const r = this.getIndexAngle(e) - Qe + i;
    return {
      x: Math.cos(r) * n + this.xCenter,
      y: Math.sin(r) * n + this.yCenter,
      angle: r,
    };
  }
  getPointPositionForValue(e, n) {
    return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(e) {
    return this.getPointPositionForValue(e || 0, this.getBaseValue());
  }
  getPointLabelPosition(e) {
    const { left: n, top: i, right: r, bottom: a } = this._pointLabelItems[e];
    return {
      left: n,
      top: i,
      right: r,
      bottom: a,
    };
  }
  drawBackground() {
    const {
      backgroundColor: e,
      grid: { circular: n },
    } = this.options;
    if (e) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        yu(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
        i.closePath(),
        (i.fillStyle = e),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const e = this.ctx,
      n = this.options,
      { angleLines: i, grid: r, border: a } = n,
      s = this._pointLabels.length;
    let o, l, c;
    if (
      (n.pointLabels.display && pb(this, s),
      r.display &&
        this.ticks.forEach((h, u) => {
          if (u !== 0) {
            l = this.getDistanceFromCenterForValue(h.value);
            const p = this.getContext(u),
              m = r.setContext(p),
              g = a.setContext(p);
            mb(this, m, l, s, g);
          }
        }),
      i.display)
    ) {
      for (e.save(), o = s - 1; o >= 0; o--) {
        const h = i.setContext(this.getPointLabelContext(o)),
          { color: u, lineWidth: p } = h;
        !p ||
          !u ||
          ((e.lineWidth = p),
          (e.strokeStyle = u),
          e.setLineDash(h.borderDash),
          (e.lineDashOffset = h.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max)),
          (c = this.getPointPosition(o, l)),
          e.beginPath(),
          e.moveTo(this.xCenter, this.yCenter),
          e.lineTo(c.x, c.y),
          e.stroke());
      }
      e.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const e = this.ctx,
      n = this.options,
      i = n.ticks;
    if (!i.display) return;
    const r = this.getIndexAngle(0);
    let a, s;
    e.save(),
      e.translate(this.xCenter, this.yCenter),
      e.rotate(r),
      (e.textAlign = 'center'),
      (e.textBaseline = 'middle'),
      this.ticks.forEach((o, l) => {
        if (l === 0 && !n.reverse) return;
        const c = i.setContext(this.getContext(l)),
          h = Ue(c.font);
        if (((a = this.getDistanceFromCenterForValue(this.ticks[l].value)), c.showLabelBackdrop)) {
          (e.font = h.string), (s = e.measureText(o.label).width), (e.fillStyle = c.backdropColor);
          const u = ct(c.backdropPadding);
          e.fillRect(-s / 2 - u.left, -a - h.size / 2 - u.top, s + u.width, h.size + u.height);
        }
        ki(e, o.label, 0, -a, h, {
          color: c.color,
        });
      }),
      e.restore();
  }
  drawTitle() {}
}
K(ar, 'id', 'radialLinear'),
  K(ar, 'defaults', {
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
      callback: sa.formatters.numeric,
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10,
      },
      callback(e) {
        return e;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  K(ar, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }),
  K(ar, 'descriptors', {
    angleLines: {
      _fallback: 'grid',
    },
  });
const la = {
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
  Ze = /* @__PURE__ */ Object.keys(la);
function vb(t, e) {
  return t - e;
}
function tc(t, e) {
  if (we(e)) return null;
  const n = t._adapter,
    { parser: i, round: r, isoWeekday: a } = t._parseOpts;
  let s = e;
  return (
    typeof i == 'function' && (s = i(s)),
    He(s) || (s = typeof i == 'string' ? n.parse(s, i) : n.parse(s)),
    s === null
      ? null
      : (r &&
          (s = r === 'week' && (zi(a) || a === !0) ? n.startOf(s, 'isoWeek', a) : n.startOf(s, r)),
        +s)
  );
}
function nc(t, e, n, i) {
  const r = Ze.length;
  for (let a = Ze.indexOf(t); a < r - 1; ++a) {
    const s = la[Ze[a]],
      o = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
    if (s.common && Math.ceil((n - e) / (o * s.size)) <= i) return Ze[a];
  }
  return Ze[r - 1];
}
function bb(t, e, n, i, r) {
  for (let a = Ze.length - 1; a >= Ze.indexOf(n); a--) {
    const s = Ze[a];
    if (la[s].common && t._adapter.diff(r, i, s) >= e - 1) return s;
  }
  return Ze[n ? Ze.indexOf(n) : 0];
}
function yb(t) {
  for (let e = Ze.indexOf(t) + 1, n = Ze.length; e < n; ++e) if (la[Ze[e]].common) return Ze[e];
}
function ic(t, e, n) {
  if (!n) t[e] = !0;
  else if (n.length) {
    const { lo: i, hi: r } = Os(n, e),
      a = n[i] >= e ? n[i] : n[r];
    t[a] = !0;
  }
}
function xb(t, e, n, i) {
  const r = t._adapter,
    a = +r.startOf(e[0].value, i),
    s = e[e.length - 1].value;
  let o, l;
  for (o = a; o <= s; o = +r.add(o, 1, i)) (l = n[o]), l >= 0 && (e[l].major = !0);
  return e;
}
function rc(t, e, n) {
  const i = [],
    r = {},
    a = e.length;
  let s, o;
  for (s = 0; s < a; ++s)
    (o = e[s]),
      (r[o] = s),
      i.push({
        value: o,
        major: !1,
      });
  return a === 0 || !n ? i : xb(t, i, r, n);
}
class Ur extends zn {
  constructor(e) {
    super(e),
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
  init(e, n = {}) {
    const i = e.time || (e.time = {}),
      r = (this._adapter = new Cv._date(e.adapters.date));
    r.init(n),
      fi(i.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(e),
      (this._normalized = n.normalized);
  }
  parse(e, n) {
    return e === void 0 ? null : tc(this, e);
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
    const e = this.options,
      n = this._adapter,
      i = e.time.unit || 'day';
    let { min: r, max: a, minDefined: s, maxDefined: o } = this.getUserBounds();
    function l(c) {
      !s && !isNaN(c.min) && (r = Math.min(r, c.min)),
        !o && !isNaN(c.max) && (a = Math.max(a, c.max));
    }
    (!s || !o) &&
      (l(this._getLabelBounds()),
      (e.bounds !== 'ticks' || e.ticks.source !== 'labels') && l(this.getMinMax(!1))),
      (r = He(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (a = He(a) && !isNaN(a) ? a : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, a - 1)),
      (this.max = Math.max(r + 1, a));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return (
      e.length && ((n = e[0]), (i = e[e.length - 1])),
      {
        min: n,
        max: i,
      }
    );
  }
  buildTicks() {
    const e = this.options,
      n = e.time,
      i = e.ticks,
      r = i.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    e.bounds === 'ticks' &&
      r.length &&
      ((this.min = this._userMin || r[0]), (this.max = this._userMax || r[r.length - 1]));
    const a = this.min,
      s = this.max,
      o = Qg(r, a, s);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? nc(n.minUnit, this.min, this.max, this._getLabelCapacity(a))
          : bb(this, o.length, n.minUnit, this.min, this.max))),
      (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : yb(this._unit)),
      this.initOffsets(r),
      e.reverse && o.reverse(),
      rc(this, o, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let n = 0,
      i = 0,
      r,
      a;
    this.options.offset &&
      e.length &&
      ((r = this.getDecimalForValue(e[0])),
      e.length === 1 ? (n = 1 - r) : (n = (this.getDecimalForValue(e[1]) - r) / 2),
      (a = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1 ? (i = a) : (i = (a - this.getDecimalForValue(e[e.length - 2])) / 2));
    const s = e.length < 3 ? 0.5 : 0.25;
    (n = bt(n, 0, s)),
      (i = bt(i, 0, s)),
      (this._offsets = {
        start: n,
        end: i,
        factor: 1 / (n + 1 + i),
      });
  }
  _generate() {
    const e = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      a = r.time,
      s = a.unit || nc(a.minUnit, n, i, this._getLabelCapacity(n)),
      o = me(r.ticks.stepSize, 1),
      l = s === 'week' ? a.isoWeekday : !1,
      c = zi(l) || l === !0,
      h = {};
    let u = n,
      p,
      m;
    if (
      (c && (u = +e.startOf(u, 'isoWeek', l)),
      (u = +e.startOf(u, c ? 'day' : s)),
      e.diff(i, n, s) > 1e5 * o)
    )
      throw new Error(n + ' and ' + i + ' are too far apart with stepSize of ' + o + ' ' + s);
    const g = r.ticks.source === 'data' && this.getDataTimestamps();
    for (p = u, m = 0; p < i; p = +e.add(p, o, s), m++) ic(h, p, g);
    return (
      (p === i || r.bounds === 'ticks' || m === 1) && ic(h, p, g),
      Object.keys(h)
        .sort((b, v) => b - v)
        .map((b) => +b)
    );
  }
  getLabelForValue(e) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat ? n.format(e, i.tooltipFormat) : n.format(e, i.displayFormats.datetime);
  }
  format(e, n) {
    const r = this.options.time.displayFormats,
      a = this._unit,
      s = n || r[a];
    return this._adapter.format(e, s);
  }
  _tickFormatFunction(e, n, i, r) {
    const a = this.options,
      s = a.ticks.callback;
    if (s) return Oe(s, [e, n, i], this);
    const o = a.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      h = l && o[l],
      u = c && o[c],
      p = i[n],
      m = c && u && p && p.major;
    return this._adapter.format(e, r || (m ? u : h));
  }
  generateTickLabels(e) {
    let n, i, r;
    for (n = 0, i = e.length; n < i; ++n)
      (r = e[n]), (r.label = this._tickFormatFunction(r.value, n, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const n = this._offsets,
      i = this.getDecimalForValue(e);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(e) {
    const n = this.options.ticks,
      i = this.ctx.measureText(e).width,
      r = Zt(this.isHorizontal() ? n.maxRotation : n.minRotation),
      a = Math.cos(r),
      s = Math.sin(r),
      o = this._resolveTickFontOptions(0).size;
    return {
      w: i * a + o * s,
      h: i * s + o * a,
    };
  }
  _getLabelCapacity(e) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      a = this._tickFormatFunction(e, 0, rc(this, [e], this._majorUnit), r),
      s = this._getLabelSize(a),
      o = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
    return o > 0 ? o : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      n,
      i;
    if (e.length) return e;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (n = 0, i = r.length; n < i; ++n) e = e.concat(r[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let n, i;
    if (e.length) return e;
    const r = this.getLabels();
    for (n = 0, i = r.length; n < i; ++n) e.push(tc(this, r[n]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return e5(e.sort(vb));
  }
}
K(Ur, 'id', 'time'),
  K(Ur, 'defaults', {
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
function sr(t, e, n) {
  let i = 0,
    r = t.length - 1,
    a,
    s,
    o,
    l;
  n
    ? (e >= t[i].pos && e <= t[r].pos && ({ lo: i, hi: r } = mn(t, 'pos', e)),
      ({ pos: a, time: o } = t[i]),
      ({ pos: s, time: l } = t[r]))
    : (e >= t[i].time && e <= t[r].time && ({ lo: i, hi: r } = mn(t, 'time', e)),
      ({ time: a, pos: o } = t[i]),
      ({ time: s, pos: l } = t[r]));
  const c = s - a;
  return c ? o + ((l - o) * (e - a)) / c : o;
}
class ac extends Ur {
  constructor(e) {
    super(e), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(e));
    (this._minPos = sr(n, this.min)),
      (this._tableRange = sr(n, this.max) - this._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: n, max: i } = this,
      r = [],
      a = [];
    let s, o, l, c, h;
    for (s = 0, o = e.length; s < o; ++s) (c = e[s]), c >= n && c <= i && r.push(c);
    if (r.length < 2)
      return [
        {
          time: n,
          pos: 0,
        },
        {
          time: i,
          pos: 1,
        },
      ];
    for (s = 0, o = r.length; s < o; ++s)
      (h = r[s + 1]),
        (l = r[s - 1]),
        (c = r[s]),
        Math.round((h + l) / 2) !== c &&
          a.push({
            time: c,
            pos: s / (o - 1),
          });
    return a;
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length ? (e = this.normalize(n.concat(i))) : (e = n.length ? n : i),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (sr(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return sr(this._table, i * this._tableRange + this._minPos, !0);
  }
}
K(ac, 'id', 'timeseries'), K(ac, 'defaults', Ur.defaults);
const xu = 'label';
function sc(t, e) {
  typeof t == 'function' ? t(e) : t && (t.current = e);
}
function wb(t, e) {
  const n = t.options;
  n && e && Object.assign(n, e);
}
function wu(t, e) {
  t.labels = e;
}
function Eu(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xu;
  const i = [];
  t.datasets = e.map((r) => {
    const a = t.datasets.find((s) => s[n] === r[n]);
    return !a || !r.data || i.includes(a)
      ? {
          ...r,
        }
      : (i.push(a), Object.assign(a, r), a);
  });
}
function Eb(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xu;
  const n = {
    labels: [],
    datasets: [],
  };
  return wu(n, t.labels), Eu(n, t.datasets, e), n;
}
function Cb(t, e) {
  const {
      height: n = 150,
      width: i = 300,
      redraw: r = !1,
      datasetIdKey: a,
      type: s,
      data: o,
      options: l,
      plugins: c = [],
      fallbackContent: h,
      updateMode: u,
      ...p
    } = t,
    m = rt(null),
    g = rt(),
    b = () => {
      m.current &&
        ((g.current = new Xt(m.current, {
          type: s,
          data: Eb(o, a),
          options: l && {
            ...l,
          },
          plugins: c,
        })),
        sc(e, g.current));
    },
    v = () => {
      sc(e, null), g.current && (g.current.destroy(), (g.current = null));
    };
  return (
    Fe(() => {
      !r && g.current && l && wb(g.current, l);
    }, [r, l]),
    Fe(() => {
      !r && g.current && wu(g.current.config.data, o.labels);
    }, [r, o.labels]),
    Fe(() => {
      !r && g.current && o.datasets && Eu(g.current.config.data, o.datasets, a);
    }, [r, o.datasets]),
    Fe(() => {
      g.current && (r ? (v(), setTimeout(b)) : g.current.update(u));
    }, [r, l, o.labels, o.datasets, u]),
    Fe(() => {
      g.current && (v(), setTimeout(b));
    }, [s]),
    Fe(() => (b(), () => v()), []),
    /* @__PURE__ */ d.createElement(
      'canvas',
      Object.assign(
        {
          ref: m,
          role: 'img',
          height: n,
          width: i,
        },
        p
      ),
      h
    )
  );
}
const _b = /* @__PURE__ */ $e(Cb);
function Mb(t, e) {
  return (
    Xt.register(e),
    /* @__PURE__ */ $e((n, i) =>
      /* @__PURE__ */ d.createElement(
        _b,
        Object.assign({}, n, {
          ref: i,
          type: t,
        })
      )
    )
  );
}
const Sb = /* @__PURE__ */ Mb('line', hr),
  zb = (t) => 16 * t,
  kb = (t) => (e) => {
    const n = e.split(`${t}`)[0],
      i = Number(n);
    return t === 'rem' ? zb(i) : i;
  },
  Qa = kb('rem');
function Ob(t) {
  if (t.sheet) return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e];
}
function Lb(t) {
  var e = document.createElement('style');
  return (
    e.setAttribute('data-emotion', t.key),
    t.nonce !== void 0 && e.setAttribute('nonce', t.nonce),
    e.appendChild(document.createTextNode('')),
    e.setAttribute('data-s', ''),
    e
  );
}
var Ib = /* @__PURE__ */ (function () {
    function t(n) {
      var i = this;
      (this._insertTag = function (r) {
        var a;
        i.tags.length === 0
          ? i.insertionPoint
            ? (a = i.insertionPoint.nextSibling)
            : i.prepend
            ? (a = i.container.firstChild)
            : (a = i.before)
          : (a = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(r, a),
          i.tags.push(r);
      }),
        (this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === 'production' : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var e = t.prototype;
    return (
      (e.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (e.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Lb(this));
        var r = this.tags[this.tags.length - 1];
        if (process.env.NODE_ENV !== 'production') {
          var a = i.charCodeAt(0) === 64 && i.charCodeAt(1) === 105;
          a &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                i +
                '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
            ),
            (this._alreadyInsertedOrderInsensitiveRule =
              this._alreadyInsertedOrderInsensitiveRule || !a);
        }
        if (this.isSpeedy) {
          var s = Ob(r);
          try {
            s.insertRule(i, s.cssRules.length);
          } catch (o) {
            process.env.NODE_ENV !== 'production' &&
              !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
                i
              ) &&
              console.error('There was a problem inserting the following rule: "' + i + '"', o);
          }
        } else r.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (e.flush = function () {
        this.tags.forEach(function (i) {
          return i.parentNode && i.parentNode.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0),
          process.env.NODE_ENV !== 'production' && (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      t
    );
  })(),
  We = '-ms-',
  qr = '-moz-',
  le = '-webkit-',
  Hs = 'comm',
  Vs = 'rule',
  Bs = 'decl',
  Rb = '@import',
  Cu = '@keyframes',
  Db = '@layer',
  Ab = Math.abs,
  ca = String.fromCharCode,
  Tb = Object.assign;
function Pb(t, e) {
  return Ne(t, 0) ^ 45
    ? (((((((e << 2) ^ Ne(t, 0)) << 2) ^ Ne(t, 1)) << 2) ^ Ne(t, 2)) << 2) ^ Ne(t, 3)
    : 0;
}
function _u(t) {
  return t.trim();
}
function Hb(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function ce(t, e, n) {
  return t.replace(e, n);
}
function Ja(t, e) {
  return t.indexOf(e);
}
function Ne(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ii(t, e, n) {
  return t.slice(e, n);
}
function Dt(t) {
  return t.length;
}
function Ns(t) {
  return t.length;
}
function or(t, e) {
  return e.push(t), t;
}
function Vb(t, e) {
  return t.map(e).join('');
}
var da = 1,
  Wn = 1,
  Mu = 0,
  tt = 0,
  Ae = 0,
  Gn = '';
function ha(t, e, n, i, r, a, s) {
  return {
    value: t,
    root: e,
    parent: n,
    type: i,
    props: r,
    children: a,
    line: da,
    column: Wn,
    length: s,
    return: '',
  };
}
function ri(t, e) {
  return Tb(ha('', null, null, '', null, null, 0), t, { length: -t.length }, e);
}
function Bb() {
  return Ae;
}
function Nb() {
  return (Ae = tt > 0 ? Ne(Gn, --tt) : 0), Wn--, Ae === 10 && ((Wn = 1), da--), Ae;
}
function ot() {
  return (Ae = tt < Mu ? Ne(Gn, tt++) : 0), Wn++, Ae === 10 && ((Wn = 1), da++), Ae;
}
function At() {
  return Ne(Gn, tt);
}
function mr() {
  return tt;
}
function Wi(t, e) {
  return Ii(Gn, t, e);
}
function Ri(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Su(t) {
  return (da = Wn = 1), (Mu = Dt((Gn = t))), (tt = 0), [];
}
function zu(t) {
  return (Gn = ''), t;
}
function gr(t) {
  return _u(Wi(tt - 1, es(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Fb(t) {
  for (; (Ae = At()) && Ae < 33; ) ot();
  return Ri(t) > 2 || Ri(Ae) > 3 ? '' : ' ';
}
function $b(t, e) {
  for (; --e && ot() && !(Ae < 48 || Ae > 102 || (Ae > 57 && Ae < 65) || (Ae > 70 && Ae < 97)); );
  return Wi(t, mr() + (e < 6 && At() == 32 && ot() == 32));
}
function es(t) {
  for (; ot(); )
    switch (Ae) {
      case t:
        return tt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && es(Ae);
        break;
      case 40:
        t === 41 && es(t);
        break;
      case 92:
        ot();
        break;
    }
  return tt;
}
function jb(t, e) {
  for (; ot() && t + Ae !== 47 + 10; ) if (t + Ae === 42 + 42 && At() === 47) break;
  return '/*' + Wi(e, tt - 1) + '*' + ca(t === 47 ? t : ot());
}
function Wb(t) {
  for (; !Ri(At()); ) ot();
  return Wi(t, tt);
}
function Xb(t) {
  return zu(vr('', null, null, null, [''], (t = Su(t)), 0, [0], t));
}
function vr(t, e, n, i, r, a, s, o, l) {
  for (
    var c = 0,
      h = 0,
      u = s,
      p = 0,
      m = 0,
      g = 0,
      b = 1,
      v = 1,
      y = 1,
      w = 0,
      S = '',
      M = r,
      _ = a,
      O = i,
      C = S;
    v;

  )
    switch (((g = w), (w = ot()))) {
      case 40:
        if (g != 108 && Ne(C, u - 1) == 58) {
          Ja((C += ce(gr(w), '&', '&\f')), '&\f') != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += gr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Fb(g);
        break;
      case 92:
        C += $b(mr() - 1, 7);
        continue;
      case 47:
        switch (At()) {
          case 42:
          case 47:
            or(Yb(jb(ot(), mr()), e, n), l);
            break;
          default:
            C += '/';
        }
        break;
      case 123 * b:
        o[c++] = Dt(C) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            v = 0;
          case 59 + h:
            y == -1 && (C = ce(C, /\f/g, '')),
              m > 0 &&
                Dt(C) - u &&
                or(m > 32 ? lc(C + ';', i, n, u - 1) : lc(ce(C, ' ', '') + ';', i, n, u - 2), l);
            break;
          case 59:
            C += ';';
          default:
            if ((or((O = oc(C, e, n, c, h, r, o, S, (M = []), (_ = []), u)), a), w === 123))
              if (h === 0) vr(C, e, O, O, M, a, u, o, _);
              else
                switch (p === 99 && Ne(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vr(
                      t,
                      O,
                      O,
                      i && or(oc(t, O, O, 0, 0, r, o, S, r, (M = []), u), _),
                      r,
                      _,
                      u,
                      o,
                      i ? M : _
                    );
                    break;
                  default:
                    vr(C, O, O, O, [''], _, 0, o, _);
                }
        }
        (c = h = m = 0), (b = y = 1), (S = C = ''), (u = s);
        break;
      case 58:
        (u = 1 + Dt(C)), (m = g);
      default:
        if (b < 1) {
          if (w == 123) --b;
          else if (w == 125 && b++ == 0 && Nb() == 125) continue;
        }
        switch (((C += ca(w)), w * b)) {
          case 38:
            y = h > 0 ? 1 : ((C += '\f'), -1);
            break;
          case 44:
            (o[c++] = (Dt(C) - 1) * y), (y = 1);
            break;
          case 64:
            At() === 45 && (C += gr(ot())), (p = At()), (h = u = Dt((S = C += Wb(mr())))), w++;
            break;
          case 45:
            g === 45 && Dt(C) == 2 && (b = 0);
        }
    }
  return a;
}
function oc(t, e, n, i, r, a, s, o, l, c, h) {
  for (var u = r - 1, p = r === 0 ? a : [''], m = Ns(p), g = 0, b = 0, v = 0; g < i; ++g)
    for (var y = 0, w = Ii(t, u + 1, (u = Ab((b = s[g])))), S = t; y < m; ++y)
      (S = _u(b > 0 ? p[y] + ' ' + w : ce(w, /&\f/g, p[y]))) && (l[v++] = S);
  return ha(t, e, n, r === 0 ? Vs : o, l, c, h);
}
function Yb(t, e, n) {
  return ha(t, e, n, Hs, ca(Bb()), Ii(t, 2, -2), 0);
}
function lc(t, e, n, i) {
  return ha(t, e, n, Bs, Ii(t, 0, i), Ii(t, i + 1, -1), i);
}
function Tn(t, e) {
  for (var n = '', i = Ns(t), r = 0; r < i; r++) n += e(t[r], r, t, e) || '';
  return n;
}
function Ub(t, e, n, i) {
  switch (t.type) {
    case Db:
      if (t.children.length) break;
    case Rb:
    case Bs:
      return (t.return = t.return || t.value);
    case Hs:
      return '';
    case Cu:
      return (t.return = t.value + '{' + Tn(t.children, i) + '}');
    case Vs:
      t.value = t.props.join(',');
  }
  return Dt((n = Tn(t.children, i))) ? (t.return = t.value + '{' + n + '}') : '';
}
function qb(t) {
  var e = Ns(t);
  return function (n, i, r, a) {
    for (var s = '', o = 0; o < e; o++) s += t[o](n, i, r, a) || '';
    return s;
  };
}
function Gb(t) {
  return function (e) {
    e.root || ((e = e.return) && t(e));
  };
}
function Kb(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function (n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var Zb = function (e, n, i) {
    for (var r = 0, a = 0; (r = a), (a = At()), r === 38 && a === 12 && (n[i] = 1), !Ri(a); ) ot();
    return Wi(e, tt);
  },
  Qb = function (e, n) {
    var i = -1,
      r = 44;
    do
      switch (Ri(r)) {
        case 0:
          r === 38 && At() === 12 && (n[i] = 1), (e[i] += Zb(tt - 1, n, i));
          break;
        case 2:
          e[i] += gr(r);
          break;
        case 4:
          if (r === 44) {
            (e[++i] = At() === 58 ? '&\f' : ''), (n[i] = e[i].length);
            break;
          }
        default:
          e[i] += ca(r);
      }
    while ((r = ot()));
    return e;
  },
  Jb = function (e, n) {
    return zu(Qb(Su(e), n));
  },
  cc = /* @__PURE__ */ new WeakMap(),
  e4 = function (e) {
    if (
      !(
        e.type !== 'rule' ||
        !e.parent || // positive .length indicates that this rule contains pseudo
        // negative .length indicates that this rule has been already prefixed
        e.length < 1
      )
    ) {
      for (
        var n = e.value, i = e.parent, r = e.column === i.column && e.line === i.line;
        i.type !== 'rule';

      )
        if (((i = i.parent), !i)) return;
      if (!(e.props.length === 1 && n.charCodeAt(0) !== 58 && !cc.get(i)) && !r) {
        cc.set(e, !0);
        for (var a = [], s = Jb(n, a), o = i.props, l = 0, c = 0; l < s.length; l++)
          for (var h = 0; h < o.length; h++, c++)
            e.props[c] = a[l] ? s[l].replace(/&\f/g, o[h]) : o[h] + ' ' + s[l];
      }
    }
  },
  t4 = function (e) {
    if (e.type === 'decl') {
      var n = e.value;
      // charcode for l
      n.charCodeAt(0) === 108 && // charcode for b
        n.charCodeAt(2) === 98 &&
        ((e.return = ''), (e.value = ''));
    }
  },
  n4 =
    'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
  i4 = function (e) {
    return e.type === 'comm' && e.children.indexOf(n4) > -1;
  },
  r4 = function (e) {
    return function (n, i, r) {
      if (!(n.type !== 'rule' || e.compat)) {
        var a = n.value.match(/(:first|:nth|:nth-last)-child/g);
        if (a) {
          for (
            var s = !!n.parent,
              o = s
                ? n.parent.children
                : // global rule at the root level
                  r,
              l = o.length - 1;
            l >= 0;
            l--
          ) {
            var c = o[l];
            if (c.line < n.line) break;
            if (c.column < n.column) {
              if (i4(c)) return;
              break;
            }
          }
          a.forEach(function (h) {
            console.error(
              'The pseudo class "' +
                h +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                h.split('-child')[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  ku = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  a4 = function (e, n) {
    for (var i = e - 1; i >= 0; i--) if (!ku(n[i])) return !0;
    return !1;
  },
  dc = function (e) {
    (e.type = ''), (e.value = ''), (e.return = ''), (e.children = ''), (e.props = '');
  },
  s4 = function (e, n, i) {
    ku(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          dc(e))
        : a4(n, i) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          dc(e)));
  };
function Ou(t, e) {
  switch (Pb(t, e)) {
    case 5103:
      return le + 'print-' + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return le + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return le + t + qr + t + We + t + t;
    case 6828:
    case 4268:
      return le + t + We + t + t;
    case 6165:
      return le + t + We + 'flex-' + t + t;
    case 5187:
      return le + t + ce(t, /(\w+).+(:[^]+)/, le + 'box-$1$2' + We + 'flex-$1$2') + t;
    case 5443:
      return le + t + We + 'flex-item-' + ce(t, /flex-|-self/, '') + t;
    case 4675:
      return le + t + We + 'flex-line-pack' + ce(t, /align-content|flex-|-self/, '') + t;
    case 5548:
      return le + t + We + ce(t, 'shrink', 'negative') + t;
    case 5292:
      return le + t + We + ce(t, 'basis', 'preferred-size') + t;
    case 6060:
      return le + 'box-' + ce(t, '-grow', '') + le + t + We + ce(t, 'grow', 'positive') + t;
    case 4554:
      return le + ce(t, /([^-])(transform)/g, '$1' + le + '$2') + t;
    case 6187:
      return ce(ce(ce(t, /(zoom-|grab)/, le + '$1'), /(image-set)/, le + '$1'), t, '') + t;
    case 5495:
    case 3959:
      return ce(t, /(image-set\([^]*)/, le + '$1$`$1');
    case 4968:
      return (
        ce(
          ce(t, /(.+:)(flex-)?(.*)/, le + 'box-pack:$3' + We + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        le +
        t +
        t
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(t, /(.+)-inline(.+)/, le + '$1$2') + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Dt(t) - 1 - e > 6)
        switch (Ne(t, e + 1)) {
          case 109:
            if (Ne(t, e + 4) !== 45) break;
          case 102:
            return (
              ce(
                t,
                /(.+:)(.+)-([^]+)/,
                '$1' + le + '$2-$3$1' + qr + (Ne(t, e + 3) == 108 ? '$3' : '$2-$3')
              ) + t
            );
          case 115:
            return ~Ja(t, 'stretch') ? Ou(ce(t, 'stretch', 'fill-available'), e) + t : t;
        }
      break;
    case 4949:
      if (Ne(t, e + 1) !== 115) break;
    case 6444:
      switch (Ne(t, Dt(t) - 3 - (~Ja(t, '!important') && 10))) {
        case 107:
          return ce(t, ':', ':' + le) + t;
        case 101:
          return (
            ce(
              t,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                le +
                (Ne(t, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                le +
                '$2$3$1' +
                We +
                '$2box$3'
            ) + t
          );
      }
      break;
    case 5936:
      switch (Ne(t, e + 11)) {
        case 114:
          return le + t + We + ce(t, /[svh]\w+-[tblr]{2}/, 'tb') + t;
        case 108:
          return le + t + We + ce(t, /[svh]\w+-[tblr]{2}/, 'tb-rl') + t;
        case 45:
          return le + t + We + ce(t, /[svh]\w+-[tblr]{2}/, 'lr') + t;
      }
      return le + t + We + t + t;
  }
  return t;
}
var o4 = function (e, n, i, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Bs:
          e.return = Ou(e.value, e.length);
          break;
        case Cu:
          return Tn(
            [
              ri(e, {
                value: ce(e.value, '@', '@' + le),
              }),
            ],
            r
          );
        case Vs:
          if (e.length)
            return Vb(e.props, function (a) {
              switch (Hb(a, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Tn(
                    [
                      ri(e, {
                        props: [ce(a, /:(read-\w+)/, ':' + qr + '$1')],
                      }),
                    ],
                    r
                  );
                case '::placeholder':
                  return Tn(
                    [
                      ri(e, {
                        props: [ce(a, /:(plac\w+)/, ':' + le + 'input-$1')],
                      }),
                      ri(e, {
                        props: [ce(a, /:(plac\w+)/, ':' + qr + '$1')],
                      }),
                      ri(e, {
                        props: [ce(a, /:(plac\w+)/, We + 'input-$1')],
                      }),
                    ],
                    r
                  );
              }
              return '';
            });
      }
  },
  l4 = [o4],
  c4 = function (e) {
    var n = e.key;
    if (process.env.NODE_ENV !== 'production' && !n)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (n === 'css') {
      var i = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(i, function (b) {
        var v = b.getAttribute('data-emotion');
        v.indexOf(' ') !== -1 && (document.head.appendChild(b), b.setAttribute('data-s', ''));
      });
    }
    var r = e.stylisPlugins || l4;
    if (process.env.NODE_ENV !== 'production' && /[^a-z-]/.test(n))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          n +
          '" was passed'
      );
    var a = {},
      s,
      o = [];
    (s = e.container || document.head),
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (b) {
          for (var v = b.getAttribute('data-emotion').split(' '), y = 1; y < v.length; y++)
            a[v[y]] = !0;
          o.push(b);
        }
      );
    var l,
      c = [e4, t4];
    process.env.NODE_ENV !== 'production' &&
      c.push(
        r4({
          get compat() {
            return g.compat;
          },
        }),
        s4
      );
    {
      var h,
        u = [
          Ub,
          process.env.NODE_ENV !== 'production'
            ? function (b) {
                b.root ||
                  (b.return
                    ? h.insert(b.return)
                    : b.value && b.type !== Hs && h.insert(b.value + '{}'));
              }
            : Gb(function (b) {
                h.insert(b);
              }),
        ],
        p = qb(c.concat(r, u)),
        m = function (v) {
          return Tn(Xb(v), p);
        };
      l = function (v, y, w, S) {
        (h = w),
          process.env.NODE_ENV !== 'production' &&
            y.map !== void 0 &&
            (h = {
              insert: function (_) {
                w.insert(_ + y.map);
              },
            }),
          m(v ? v + '{' + y.styles + '}' : y.styles),
          S && (g.inserted[y.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new Ib({
        key: n,
        container: s,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: a,
      registered: {},
      insert: l,
    };
    return g.sheet.hydrate(o), g;
  };
function d4(t) {
  for (var e = 0, n, i = 0, r = t.length; r >= 4; ++i, r -= 4)
    (n =
      (t.charCodeAt(i) & 255) |
      ((t.charCodeAt(++i) & 255) << 8) |
      ((t.charCodeAt(++i) & 255) << 16) |
      ((t.charCodeAt(++i) & 255) << 24)),
      (n = /* Math.imul(k, m): */ (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= /* k >>> r: */ n >>> 24),
      (e =
        /* Math.imul(k, m): */
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) /* Math.imul(h, m): */ ^
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
  switch (r) {
    case 3:
      e ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (e ^= t.charCodeAt(i) & 255),
        (e = /* Math.imul(h, m): */ (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
  }
  return (
    (e ^= e >>> 13),
    (e = /* Math.imul(h, m): */ (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
    ((e ^ (e >>> 15)) >>> 0).toString(36)
  );
}
var h4 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  hc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  u4 =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  f4 = /[A-Z]|^ms/g,
  Lu = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Fs = function (e) {
    return e.charCodeAt(1) === 45;
  },
  uc = function (e) {
    return e != null && typeof e != 'boolean';
  },
  ka = /* @__PURE__ */ Kb(function (t) {
    return Fs(t) ? t : t.replace(f4, '-$&').toLowerCase();
  }),
  Gr = function (e, n) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(Lu, function (i, r, a) {
            return (
              (zt = {
                name: r,
                styles: a,
                next: zt,
              }),
              r
            );
          });
    }
    return h4[e] !== 1 && !Fs(e) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
  };
if (process.env.NODE_ENV !== 'production') {
  var p4 =
      /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,
    m4 = ['normal', 'none', 'initial', 'inherit', 'unset'],
    g4 = Gr,
    v4 = /^-ms-/,
    b4 = /-(.)/g,
    fc = {};
  Gr = function (e, n) {
    if (
      e === 'content' &&
      (typeof n != 'string' ||
        (m4.indexOf(n) === -1 &&
          !p4.test(n) &&
          (n.charAt(0) !== n.charAt(n.length - 1) || (n.charAt(0) !== '"' && n.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          n +
          '"\'`'
      );
    var i = g4(e, n);
    return (
      i !== '' &&
        !Fs(e) &&
        e.indexOf('-') !== -1 &&
        fc[e] === void 0 &&
        ((fc[e] = !0),
        console.error(
          'Using kebab-case for css properties in objects is not supported. Did you mean ' +
            e.replace(v4, 'ms-').replace(b4, function (r, a) {
              return a.toUpperCase();
            }) +
            '?'
        )),
      i
    );
  };
}
var Iu =
  'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function Di(t, e, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== 'production' && n.toString() === 'NO_COMPONENT_SELECTOR')
      throw new Error(Iu);
    return n;
  }
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (
          (zt = {
            name: n.name,
            styles: n.styles,
            next: zt,
          }),
          n.name
        );
      if (n.styles !== void 0) {
        var i = n.next;
        if (i !== void 0)
          for (; i !== void 0; )
            (zt = {
              name: i.name,
              styles: i.styles,
              next: zt,
            }),
              (i = i.next);
        var r = n.styles + ';';
        return process.env.NODE_ENV !== 'production' && n.map !== void 0 && (r += n.map), r;
      }
      return y4(t, e, n);
    }
    case 'function': {
      if (t !== void 0) {
        var a = zt,
          s = n(t);
        return (zt = a), Di(t, e, s);
      } else
        process.env.NODE_ENV !== 'production' &&
          console.error(
            "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
          );
      break;
    }
    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var o = [],
          l = n.replace(Lu, function (h, u, p) {
            var m = 'animation' + o.length;
            return (
              o.push(
                'const ' + m + ' = keyframes`' + p.replace(/^@keyframes animation-\w+/, '') + '`'
              ),
              '${' + m + '}'
            );
          });
        o.length &&
          console.error(
            '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
              [].concat(o, ['`' + l + '`']).join(`
`) +
              `

You should wrap it with \`css\` like this:

` +
              ('css`' + l + '`')
          );
      }
      break;
  }
  if (e == null) return n;
  var c = e[n];
  return c !== void 0 ? c : n;
}
function y4(t, e, n) {
  var i = '';
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) i += Di(t, e, n[r]) + ';';
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != 'object')
        e != null && e[s] !== void 0
          ? (i += a + '{' + e[s] + '}')
          : uc(s) && (i += ka(a) + ':' + Gr(a, s) + ';');
      else {
        if (a === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
          throw new Error(Iu);
        if (Array.isArray(s) && typeof s[0] == 'string' && (e == null || e[s[0]] === void 0))
          for (var o = 0; o < s.length; o++) uc(s[o]) && (i += ka(a) + ':' + Gr(a, s[o]) + ';');
        else {
          var l = Di(t, e, s);
          switch (a) {
            case 'animation':
            case 'animationName': {
              i += ka(a) + ':' + l + ';';
              break;
            }
            default:
              process.env.NODE_ENV !== 'production' && a === 'undefined' && console.error(u4),
                (i += a + '{' + l + '}');
          }
        }
      }
    }
  return i;
}
var pc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ru;
process.env.NODE_ENV !== 'production' &&
  (Ru = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var zt,
  Oa = function (e, n, i) {
    if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
      return e[0];
    var r = !0,
      a = '';
    zt = void 0;
    var s = e[0];
    s == null || s.raw === void 0
      ? ((r = !1), (a += Di(i, n, s)))
      : (process.env.NODE_ENV !== 'production' && s[0] === void 0 && console.error(hc),
        (a += s[0]));
    for (var o = 1; o < e.length; o++)
      (a += Di(i, n, e[o])),
        r &&
          (process.env.NODE_ENV !== 'production' && s[o] === void 0 && console.error(hc),
          (a += s[o]));
    var l;
    process.env.NODE_ENV !== 'production' &&
      (a = a.replace(Ru, function (p) {
        return (l = p), '';
      })),
      (pc.lastIndex = 0);
    for (var c = '', h; (h = pc.exec(a)) !== null; )
      c +=
        '-' + // $FlowFixMe we know it's not null
        h[1];
    var u = d4(a) + c;
    return process.env.NODE_ENV !== 'production'
      ? {
          name: u,
          styles: a,
          map: l,
          next: zt,
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        }
      : {
          name: u,
          styles: a,
          next: zt,
        };
  },
  x4 = !0;
function Du(t, e, n) {
  var i = '';
  return (
    n.split(' ').forEach(function (r) {
      t[r] !== void 0 ? e.push(t[r] + ';') : (i += r + ' ');
    }),
    i
  );
}
var w4 = function (e, n, i) {
    var r = e.key + '-' + n.name;
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (i === !1 || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      x4 === !1) &&
      e.registered[r] === void 0 &&
      (e.registered[r] = n.styles);
  },
  E4 = function (e, n, i) {
    w4(e, n, i);
    var r = e.key + '-' + n.name;
    if (e.inserted[n.name] === void 0) {
      var a = n;
      do e.insert(n === a ? '.' + r : '', a, e.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function mc(t, e) {
  if (t.inserted[e.name] === void 0) return t.insert('', e, t.sheet, !0);
}
function gc(t, e, n) {
  var i = [],
    r = Du(t, i, n);
  return i.length < 2 ? n : r + e(i);
}
var C4 = function (e) {
    var n = c4(e);
    (n.sheet.speedy = function (o) {
      if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
        throw new Error('speedy must be changed before any rules are inserted');
      this.isSpeedy = o;
    }),
      (n.compat = !0);
    var i = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        var u = Oa(c, n.registered, void 0);
        return E4(n, u, !1), n.key + '-' + u.name;
      },
      r = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        var u = Oa(c, n.registered),
          p = 'animation-' + u.name;
        return (
          mc(n, {
            name: u.name,
            styles: '@keyframes ' + p + '{' + u.styles + '}',
          }),
          p
        );
      },
      a = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        var u = Oa(c, n.registered);
        mc(n, u);
      },
      s = function () {
        for (var l = arguments.length, c = new Array(l), h = 0; h < l; h++) c[h] = arguments[h];
        return gc(n.registered, i, _4(c));
      };
    return {
      css: i,
      cx: s,
      injectGlobal: a,
      keyframes: r,
      hydrate: function (l) {
        l.forEach(function (c) {
          n.inserted[c] = !0;
        });
      },
      flush: function () {
        (n.registered = {}), (n.inserted = {}), n.sheet.flush();
      },
      // $FlowFixMe
      sheet: n.sheet,
      cache: n,
      getRegisteredStyles: Du.bind(null, n.registered),
      merge: gc.bind(null, n.registered, i),
    };
  },
  _4 = function t(e) {
    for (var n = '', i = 0; i < e.length; i++) {
      var r = e[i];
      if (r != null) {
        var a = void 0;
        switch (typeof r) {
          case 'boolean':
            break;
          case 'object': {
            if (Array.isArray(r)) a = t(r);
            else {
              a = '';
              for (var s in r) r[s] && s && (a && (a += ' '), (a += s));
            }
            break;
          }
          default:
            a = r;
        }
        a && (n && (n += ' '), (n += a));
      }
    }
    return n;
  },
  M4 = C4({
    key: 'css',
  }),
  gt = M4.css;
const S4 = {
    root: gt({
      position: 'relative',
    }),
  },
  z4 = 'Analytics line chart';
Xt.register(Ga, Ka, pr, li, j3, Z3);
const ts = Qa(f.fontSizeS);
Xt.defaults.font.size = ts;
Xt.defaults.font.family = f.fontStackPrimary;
Xt.defaults.font.weight = f.fontWeightMedium.toString();
Xt.defaults.borderColor = f.gray200;
Xt.defaults.datasets.line.borderColor = f.colorPrimary;
const k4 = 1.2,
  O4 = (t) => {
    const { dataValues: e, xAxisLabels: n, tooltipMetricLabel: i, accessibilityLabel: r } = t,
      a = {
        labels: n,
        datasets: [
          {
            data: e,
          },
        ],
      },
      s = {
        responsive: !0,
        scales: {
          y: {
            beginAtZero: !0,
            suggestedMax: Math.max(...e) * k4,
            ticks: {
              precision: 0,
            },
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: f.gray900,
            bodyColor: f.colorWhite,
            padding: Qa(f.spacingXs),
            titleMarginBottom: Qa(f.spacing2Xs),
            titleFont: {
              size: ts,
            },
            bodyFont: {
              size: ts,
              // TO:DO once font weight is added to F36, replace with token
              weight: '700',
            },
            displayColors: !1,
            callbacks: {
              beforeBody: () => i,
            },
          },
        },
      },
      o = {
        'aria-label': r,
      };
    return /* @__PURE__ */ ye.jsx('div', {
      className: S4.root,
      children: /* @__PURE__ */ ye.jsx(Sb, { data: a, options: s, fallbackContent: r, ...o }),
    });
  };
O4.defaultProps = {
  accessibilityLabel: z4,
};
globalThis && globalThis.__awaiter;
function L4(t, e) {
  const [n, i] = Xe(t);
  return (
    Fe(() => {
      const r = setTimeout(() => i(t), e || 500);
      return () => {
        clearTimeout(r);
      };
    }, [t, e]),
    n
  );
}
globalThis && globalThis.__awaiter;
var Au = /* @__PURE__ */ ((t) => (
  (t[(t.SET_SEARCH = 0)] = 'SET_SEARCH'),
  (t[(t.SET_GROUP_FILTER = 1)] = 'SET_GROUP_FILTER'),
  (t[(t.SET_FILTER_FACETS = 2)] = 'SET_FILTER_FACETS'),
  t
))(Au || {});
const { SET_SEARCH: Tu, SET_FILTER_FACETS: ns, SET_GROUP_FILTER: Pu } = Au,
  I4 = (t, e) => {
    switch (e.type) {
      case Tu:
        return {
          ...t,
          searchValue: e.payload,
        };
      case ns:
        return {
          ...t,
          selectedFilterFacets: e.payload,
        };
      case Pu:
        return {
          ...t,
          selectedGroupFilter: e.payload,
        };
      default:
        return t;
    }
  },
  R4 = (t) => {
    const [e, n] = t1(I4, t),
      i = de(
        (s) => {
          n({ type: Tu, payload: s.target.value });
        },
        [n]
      ),
      r = de(
        (s) => {
          const o = {
              label: s.target.name,
              value: s.target.value,
            },
            { selectedFilterFacets: l } = e,
            c = l.findIndex((h) => h.label === o.label);
          if (c > -1) {
            const h = [...l];
            h.splice(c, 1),
              n({
                type: ns,
                payload: h,
              });
          } else
            n({
              type: ns,
              payload: [...l, o],
            });
        },
        [n]
      ),
      a = de(
        (s) => {
          n({ type: Pu, payload: s.target.value });
        },
        [n]
      );
    return {
      searchState: e,
      onSearchInput: i,
      onFilterChange: r,
      onGroupFilterChange: a,
    };
  },
  D4 = (t) => {
    const { groupFilters: e, filterFacets: n, onSearch: i, searchTitle: r, placeholder: a } = t,
      s = {
        selectedGroupFilter: e != null && e.length ? e[0].value : '',
        searchValue: '',
        selectedFilterFacets: [],
      },
      { searchState: o, onSearchInput: l } = R4(s),
      c = L4(o, 300);
    return (
      Fe(() => {
        i(o);
      }, [c]),
      /* @__PURE__ */ ye.jsx(md, {
        id: 'search-input',
        type: 'text',
        value: o.searchValue,
        placeholder: a || 'Search',
        title: r || 'Search',
        'aria-label': r || 'Search',
        onChange: l,
      })
    );
  },
  A4 = {
    root: gt({
      position: 'relative',
    }),
    missingBadge: gt({
      marginBottom: f.spacingXs,
    }),
  },
  T4 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADJCAYAAABfY8xgAAAACXBIWXMAAAsSAAALEgHS3X78AAAKZklEQVR4nO3dT2wV1xXH8WtCwp+CDQKhpJIJVEpZ1FUg0CzsBQ6b1JFI6KZyN8Wr0EUjvKpUFQkv2k0rNZZSqWk2mF2UbEyDwqrEWSTZtBWo7oZEwsWJgqzQ4CglsiLlVb8xj4Lr9zzvec7MPXe+HwklEc574+f53bn3zJ3jnkajEQAUawOfJ1A8ggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWICBjUW/ZM+Lnw2HEN7hh4UqNV7b3VPl+3PFAgwQLMAAwQIMECzAAMECDBAswADBAgwQLMAAwQIMFL7zAojBW9fDcN7DOL4/zBR9yAQLqepkW13h25+YCgIGCBZggGABBggWYIDixRp2bFoMB/fMhh2bl/+5mrnFvWFusT/cXuoLVxYG4v1mUBqCtYLCc+KJt8Nw/3vZv/dt+qLj13h3fjAL2Mz8UJi5MZQFDvVCsO6Gafzwn7JAdROklY72v5/9OX34texvLnw0EqY/fC5MzY4We+CIVk+j0Sj02Dw9mj828HoYP/xqeHLPP0t5v8Wl3jD5t1NhavYn2dQRdv78y925X/v4fu5jFUKBmjv1VDg38lJpoRJdDc8O/i5cf/GpMDXyUrZ+Q5pqFSytm66cHM4C9XjvfKXHcvJuuDUFRXpqESxdGSaP/Sq8M3qi1CvUWnQFe/nYmSzsrSqO8Cn5YOmEnRl94V4hIUYKu45RU1SkIelg6UTVCRvTVaoVXb00RdXaC/4lGyyFSidqEeXzMmntpakhhQ3fkgyWRv1zjkf+5tSQcPmVXLAmhn6bjfreES7fkgqWpn+6T5QKhWv6Rz9N5vupk2SCpXtUnqd/rWhrFAUNf5IIlqZLKY/smtpSivcliWApVN6qf53SDe59fdXuFkF+7oOlLUGaLqVOA8fUyM+T/z5T4TpYmgKqClgXGkCYEvrgOliTx84kPwVcSVNCSvDxcxssrTdSuF/VKQ0k40fYER87t8GaGKzPFHAlrSu5asXNZbDqerVq0lWLtVbcXAZLj9PXHdPBuLkM1oknLkVwFNXSE9DabYI4uQuWOilV/Vh9LJgOxstdsBil/0eDDOLk8IrFNLBJRQx6ZcTJVbBUDWQa+CCu4HFyFayDe/5R+nve+WZH9idWw3sJVoycBavcaY8C9fsbM+HNhclS37cTTAXj5Kp3e9nTHgXq46Unsz9bNtwOP94zXur758HUOE78fqwW3liYDB8snrz3l5c/Px0+WByL7CiXcdWKj6tglfXclQKkIK10/ua5cO1O7l/GXhr2DcaHK9YK80sHswC18sdPprOvAdohWPdRYFSsaOerb/rC+U+noqoU8sh+fAjWXQqKAqPgrEXFjLUCWKZ9fTeiORYsI1h3KSgKTF762vM3p6o/cESJYGVFiamOQtWkquHFzyasDis3/Z5jxKX2wfrL5+MPlNU7dfHW2WjL8KiOq2BdXfheoa+nQLy58PK6X0f3vKgU4n6ugnV7ae3CQl4KwhsFbVVSwUNrtFtf7yvs+DpxZWGgkvdFa66CVdQJpAAoCHkqgHnptXSPq+wyvH4Tf5EDDorhKlhzi3vX/Ro68RWAIkPVpALIq59MF/667XC1ipOrYM3Mr7/6pXtV3VQA87p252ipZXiCFSd3U0FNfbqlE/7qly+YH6eqjGVVCosYbFA8d+X2bk8knejrKat3SvsNr3x5wvx9uIcVJ3fBmv7wuY7/H53g7TbWWtG007IMf+GjEQoXkXIYrJGOvj7brf5pNVuPrCuF3QwyRdrVtzEMDnyr0mOIlbtgaYTWSJ2HZQUwr39//XhW2rcIV6eDTJEeebgnPHNoW/j+d7YQrlW43NI0+ddTa35Ns1+FTuyqqQpZdN+M87OjlU4Dnx/qC7t6lzs7KFwH+jdXdiwxchksFTD+9UV/269p9quIhQonRe30kIn3f1HZd/bMoe33QtU0fGhb+Pbuhys7ptj4/TU+77U+sVb2q4hFUX0z3p0fDHOL7QcWK0cObA3f7d+06qs/+4PebN0Fx8Gamh1d9arVql9FLFSdXG+lcPzybyr5bjTdO3xga8u/b6679M+6c/3YyNjbrzzw32v1q4iF1n7dhktrqyp2W+StAGqKqPVX3bkOltZazQphnn4Vsei2b4Z2nYxf/nXp38X2rQ+F5wf7cl+JFC6tw+rM/YOOumrd/Ko/d7+KWHTTN2Ps0iulVwIVpmef3t7x9E7rsCNtpo2pcx8snWhnrl2NqgKYVyd9M3RlruKG8A+f7v2/CmBeWo/VtQzvPliacmzcvDOCI+mOqpdqD9COnpxeuZ4sgz7bx3atr4SudVkdK4Wug6Ubk61Kv56oPUCrMrzWVWOX/lD6FFBXmiI+W00htT7TOq1O3AZLP/iUttKs1jdDoRp+/ULpVcB9jz6S3fAtSrfrNM9cBivFzZ8r+2ZUFSp9thYVPa3TtF6rC3fBak4tUhz9mrvhVeWsIlTWn63Wa3Upw7sKVvaDH0ozVE2qFJ6++vdqQlXCZ6t1Wx0qha6CtdrmzxTt3Lm79JF9aGBbaZ+t1m9ax6XMTbB0oqX+w7hfmSO71qtlV1ezQTLhMryLYBVV+vWmjJFdn61uW5Qt5bVy8BAsPeNTZOnXG8uRXa9b5Web8po56mDpB69nfOps+R5Qb+Ennz5bXTGqpnWd1nepiTZYVieUR9u3bCh0ZI/tuSlN81O7LxllsJpTBJ1QWFbkyH5/v4pYpNY3I8ozt8zSrydFjOwx37JIqW9GdMFq11MB6xvZPWxaTqVvRlTBWqunApZpZO/05POyaTmVvhnRBKvq0q83qujlDZe3Tcsp9M2IIlixlH49yTuyd9qvIhbe+2ZUHixaZnVvrUcxvD8H5blvRuXBWk9PBbR/FCOFTcte+2ZUGqwieipgeWRfud8vpU3LHvtmVBasVPpVxEInX3NkT23Tsse+GZUEK7V+FbHQZ6oBK8Xqqrf1YunB4peV2dFJl/Jn66lvRqnBSv0ZHNjz0jejtGDVoV8FyuGhb0ZpwapLvwqUI/a+GaUEq279KlCOmPtmmAerrv0qYC/mNXtPo9EwfYOfXQwTrf7usd4wvG1TOGp6AAm79Z9839tDG0LYUX6/mNL0bgnh0XXUM47vD4Un0zxY7bx1PQvd2coOADAKFs++AwYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGKt15AaSKKxZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZQtBDCfwG958nSihESTQAAAABJRU5ErkJggg==',
  P4 = (t) => !t,
  H4 = (t) => {
    const { title: e, loading: n, entityType: i, thumbnail: r, className: a } = t,
      s = P4(e)
        ? /* @__PURE__ */ ye.jsx(Yo, {
            status: 'deleted',
            title: `${i} Missing`,
            description: `This ${i} is missing. It may have been deleted or moved.`,
            isLoading: n,
            role: 'article',
            'data-test-id': 'missing',
          })
        : /* @__PURE__ */ ye.jsx(Yo, {
            ...t,
            isLoading: n,
            thumbnailElement: /* @__PURE__ */ ye.jsx('img', { alt: 'Thumbnail', src: r || T4 }),
            role: 'article',
          });
    return /* @__PURE__ */ ye.jsx('div', {
      className: `${A4.root} ${a}`,
      'data-test-id': 'entity-card-single',
      children: s,
    });
  },
  vc = {
    root: gt({
      position: 'relative',
    }),
    missingBadge: gt({
      marginBottom: f.spacingXs,
    }),
    entityCard: gt({
      '&&': {
        marginTop: f.spacingXs,
        marginBottom: f.spacingXs,
      },
    }),
  };
var Kr = /* @__PURE__ */ ((t) => ((t.MULTIPLE = 'multiple'), (t.SINGLE = 'single'), t))(Kr || {});
const V4 = (t) => {
    const {
        entityType: e,
        list: n,
        loading: i,
        error: r,
        selected: a,
        selectType: s,
        onSelect: o,
      } = t,
      l = (h) => a.findIndex((u) => u.title === h.title) > -1,
      c = () => (s === Kr.SINGLE ? !a[0].title : s === Kr.MULTIPLE);
    return /* @__PURE__ */ ye.jsxs('div', {
      className: vc.root,
      id: 'EntityCardList',
      children: [
        r &&
          /* @__PURE__ */ ye.jsxs(Ha, {
            variant: 'negative',
            'date-test-id': 'cards-error',
            children: ["We're sorry, but no ", e.toLowerCase(), 's could be loaded.'],
          }),
        n.length === 0 &&
          /* @__PURE__ */ ye.jsxs(Ha, {
            variant: 'negative',
            'data-test-id': 'no-cards',
            children: ['There are no ', e.toLowerCase(), 's to show.'],
          }),
        !r &&
          n.length > 0 &&
          n.map((h, u) =>
            /* @__PURE__ */ ye.jsx(
              H4,
              {
                className: `${vc.entityCard} entity-card-${u}`,
                'data-test-id': 'entity-card',
                onClick: () => (c() ? o && o(h) : null),
                isSelected: l(h),
                loading: i,
                ...h,
              },
              u
            )
          ),
      ],
    });
  },
  Rn = {
    root: gt({
      position: 'relative',
    }),
    heading: gt({
      '&&': {
        fontSize: f.fontSizeM,
        fontWeight: f.fontWeightMedium,
        marginBottom: f.spacingS,
      },
    }),
    searchBox: gt({
      marginBottom: f.spacingM,
    }),
    controls: gt({
      marginBottom: f.spacingM,
    }),
    searchResults: gt({
      overflowY: 'scroll',
      padding: `0 ${f.spacingXs}`,
      boxSizing: 'border-box',
    }),
    actions: gt({
      marginTop: f.spacingM,
      'button:first-child': {
        marginRight: f.spacingM,
      },
    }),
  },
  X4 = (t) => {
    const { entityType: e, selectType: n, list: i, onCancel: r, onSubmit: a } = t,
      [s, o] = Xe(i),
      [l, c] = Xe({}),
      [h, u] = Xe([]),
      [p, m] = Xe(!1),
      g = (M) => {
        const _ = M.searchValue
          ? s.filter((O) => O.title.toLowerCase().includes(M.searchValue.toLowerCase()))
          : i;
        o(_);
      },
      b = () => n === Kr.MULTIPLE,
      v = () => (b() ? h.length === 0 : !l.title),
      y = (M) => {
        if (!b()) {
          l.title === M.title ? c({}) : c(M);
          return;
        }
        if (h.length !== 0) {
          if (h.findIndex((O) => O.title === M.title) > -1) {
            const O = h.filter((C) => C.title !== M.title);
            u(O);
          } else u([...h, M]);
          return;
        }
        u([M]);
      },
      w = () => {
        b() ? u([]) : c({});
      },
      S = p ? (b() ? h : [l]) : s;
    return /* @__PURE__ */ ye.jsx('div', {
      className: Rn.root,
      id: 'EntityForm',
      children: /* @__PURE__ */ ye.jsxs(W0, {
        onSubmit: () => a && a(b() ? h : l),
        children: [
          /* @__PURE__ */ ye.jsx(Se, {
            className: Rn.heading,
            alignItems: 'center',
            justifyContent: 'space-between',
            children: /* @__PURE__ */ ye.jsxs(Ge, {
              id: 'search-input-helptext',
              children: ['Search for a ', e, ': '],
            }),
          }),
          /* @__PURE__ */ ye.jsx(Se, {
            className: Rn.searchBox,
            'data-test-id': 'search-bar',
            children: /* @__PURE__ */ ye.jsx(D4, {
              onSearch: g,
              placeholder: `Type to search for ${e}s`,
              searchTitle: `Search for ${e}s`,
            }),
          }),
          /* @__PURE__ */ ye.jsxs(Se, {
            className: Rn.controls,
            alignItems: 'center',
            justifyContent: 'space-between',
            children: [
              /* @__PURE__ */ ye.jsx(Ba, {
                onClick: () => m(!p),
                children: p ? 'Show all' : `Show Selected ${b() ? '(' + h.length + ')' : ''}`,
              }),
              /* @__PURE__ */ ye.jsx(Ba, { onClick: w, children: 'Clear Selected' }),
            ],
          }),
          /* @__PURE__ */ ye.jsx(Se, {
            className: Rn.searchResults,
            children: /* @__PURE__ */ ye.jsx(V4, {
              entityType: e,
              list: S,
              selected: b() ? h : [l],
              onSelect: y,
              selectType: n,
            }),
          }),
          /* @__PURE__ */ ye.jsxs(Se, {
            className: Rn.actions,
            alignItems: 'center',
            justifyContent: 'flex-end',
            children: [
              r && /* @__PURE__ */ ye.jsx(Ei, { onClick: r, children: 'Cancel' }),
              a &&
                /* @__PURE__ */ ye.jsxs(Ei, {
                  variant: 'primary',
                  type: 'submit',
                  isDisabled: v(),
                  children: ['Select ', e, 's'],
                }),
            ],
          }),
        ],
      }),
    });
  };
export {
  H4 as EntityCard,
  V4 as EntityCardList,
  X4 as EntityForm,
  $4 as HyperLink,
  O4 as LineChart,
  D4 as SearchBar,
};
