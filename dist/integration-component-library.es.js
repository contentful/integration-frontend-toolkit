import * as ue from 'react';
import le, {
  createContext as Ar,
  forwardRef as st,
  createElement as Le,
  Fragment as lt,
} from 'react';
function ct(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var qe = { exports: {} },
  Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function ut() {
  if (hr) return Pe;
  hr = 1;
  var n = le,
    t = Symbol.for('react.element'),
    r = Symbol.for('react.fragment'),
    i = Object.prototype.hasOwnProperty,
    l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(g, u, h) {
    var d,
      y = {},
      E = null,
      k = null;
    h !== void 0 && (E = '' + h),
      u.key !== void 0 && (E = '' + u.key),
      u.ref !== void 0 && (k = u.ref);
    for (d in u) i.call(u, d) && !s.hasOwnProperty(d) && (y[d] = u[d]);
    if (g && g.defaultProps) for (d in ((u = g.defaultProps), u)) y[d] === void 0 && (y[d] = u[d]);
    return { $$typeof: t, type: g, key: E, ref: k, props: y, _owner: l.current };
  }
  return (Pe.Fragment = r), (Pe.jsx = p), (Pe.jsxs = p), Pe;
}
var je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function ft() {
  return (
    mr ||
      ((mr = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var n = le,
            t = Symbol.for('react.element'),
            r = Symbol.for('react.portal'),
            i = Symbol.for('react.fragment'),
            l = Symbol.for('react.strict_mode'),
            s = Symbol.for('react.profiler'),
            p = Symbol.for('react.provider'),
            g = Symbol.for('react.context'),
            u = Symbol.for('react.forward_ref'),
            h = Symbol.for('react.suspense'),
            d = Symbol.for('react.suspense_list'),
            y = Symbol.for('react.memo'),
            E = Symbol.for('react.lazy'),
            k = Symbol.for('react.offscreen'),
            P = Symbol.iterator,
            Y = '@@iterator';
          function H(e) {
            if (e === null || typeof e != 'object') return null;
            var o = (P && e[P]) || e[Y];
            return typeof o == 'function' ? o : null;
          }
          var B = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function I(e) {
            {
              for (var o = arguments.length, f = new Array(o > 1 ? o - 1 : 0), w = 1; w < o; w++)
                f[w - 1] = arguments[w];
              Q('error', e, f);
            }
          }
          function Q(e, o, f) {
            {
              var w = B.ReactDebugCurrentFrame,
                D = w.getStackAddendum();
              D !== '' && ((o += '%s'), (f = f.concat([D])));
              var j = f.map(function (A) {
                return String(A);
              });
              j.unshift('Warning: ' + o), Function.prototype.apply.call(console[e], console, j);
            }
          }
          var ve = !1,
            be = !1,
            Ne = !1,
            Ee = !1,
            ye = !1,
            xe;
          xe = Symbol.for('react.module.reference');
          function Xe(e) {
            return !!(
              typeof e == 'string' ||
              typeof e == 'function' ||
              e === i ||
              e === s ||
              ye ||
              e === l ||
              e === h ||
              e === d ||
              Ee ||
              e === k ||
              ve ||
              be ||
              Ne ||
              (typeof e == 'object' &&
                e !== null &&
                (e.$$typeof === E ||
                  e.$$typeof === y ||
                  e.$$typeof === p ||
                  e.$$typeof === g ||
                  e.$$typeof === u || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  e.$$typeof === xe ||
                  e.getModuleId !== void 0))
            );
          }
          function Ge(e, o, f) {
            var w = e.displayName;
            if (w) return w;
            var D = o.displayName || o.name || '';
            return D !== '' ? f + '(' + D + ')' : f;
          }
          function ee(e) {
            return e.displayName || 'Context';
          }
          function U(e) {
            if (e == null) return null;
            if (
              (typeof e.tag == 'number' &&
                I(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                ),
              typeof e == 'function')
            )
              return e.displayName || e.name || null;
            if (typeof e == 'string') return e;
            switch (e) {
              case i:
                return 'Fragment';
              case r:
                return 'Portal';
              case s:
                return 'Profiler';
              case l:
                return 'StrictMode';
              case h:
                return 'Suspense';
              case d:
                return 'SuspenseList';
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case g:
                  var o = e;
                  return ee(o) + '.Consumer';
                case p:
                  var f = e;
                  return ee(f._context) + '.Provider';
                case u:
                  return Ge(e, e.render, 'ForwardRef');
                case y:
                  var w = e.displayName || null;
                  return w !== null ? w : U(e.type) || 'Memo';
                case E: {
                  var D = e,
                    j = D._payload,
                    A = D._init;
                  try {
                    return U(A(j));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var K = Object.assign,
            J = 0,
            we,
            Ce,
            te,
            Se,
            Te,
            Fe,
            v;
          function m() {}
          m.__reactDisabledLog = !0;
          function b() {
            {
              if (J === 0) {
                (we = console.log),
                  (Ce = console.info),
                  (te = console.warn),
                  (Se = console.error),
                  (Te = console.group),
                  (Fe = console.groupCollapsed),
                  (v = console.groupEnd);
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: m,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: e,
                  log: e,
                  warn: e,
                  error: e,
                  group: e,
                  groupCollapsed: e,
                  groupEnd: e,
                });
              }
              J++;
            }
          }
          function F() {
            {
              if ((J--, J === 0)) {
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: K({}, e, {
                    value: we,
                  }),
                  info: K({}, e, {
                    value: Ce,
                  }),
                  warn: K({}, e, {
                    value: te,
                  }),
                  error: K({}, e, {
                    value: Se,
                  }),
                  group: K({}, e, {
                    value: Te,
                  }),
                  groupCollapsed: K({}, e, {
                    value: Fe,
                  }),
                  groupEnd: K({}, e, {
                    value: v,
                  }),
                });
              }
              J < 0 &&
                I('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
            }
          }
          var a = B.ReactCurrentDispatcher,
            N;
          function c(e, o, f) {
            {
              if (N === void 0)
                try {
                  throw Error();
                } catch (D) {
                  var w = D.stack.trim().match(/\n( *(at )?)/);
                  N = (w && w[1]) || '';
                }
              return (
                `
` +
                N +
                e
              );
            }
          }
          var X = !1,
            T;
          {
            var M = typeof WeakMap == 'function' ? WeakMap : Map;
            T = new M();
          }
          function C(e, o) {
            if (!e || X) return '';
            {
              var f = T.get(e);
              if (f !== void 0) return f;
            }
            var w;
            X = !0;
            var D = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var j;
            (j = a.current), (a.current = null), b();
            try {
              if (o) {
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
                  } catch (he) {
                    w = he;
                  }
                  Reflect.construct(e, [], A);
                } else {
                  try {
                    A.call();
                  } catch (he) {
                    w = he;
                  }
                  e.call(A.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (he) {
                  w = he;
                }
                e();
              }
            } catch (he) {
              if (he && w && typeof he.stack == 'string') {
                for (
                  var R = he.stack.split(`
`),
                    Z = w.stack.split(`
`),
                    W = R.length - 1,
                    z = Z.length - 1;
                  W >= 1 && z >= 0 && R[W] !== Z[z];

                )
                  z--;
                for (; W >= 1 && z >= 0; W--, z--)
                  if (R[W] !== Z[z]) {
                    if (W !== 1 || z !== 1)
                      do
                        if ((W--, z--, z < 0 || R[W] !== Z[z])) {
                          var ne =
                            `
` + R[W].replace(' at new ', ' at ');
                          return (
                            e.displayName &&
                              ne.includes('<anonymous>') &&
                              (ne = ne.replace('<anonymous>', e.displayName)),
                            typeof e == 'function' && T.set(e, ne),
                            ne
                          );
                        }
                      while (W >= 1 && z >= 0);
                    break;
                  }
              }
            } finally {
              (X = !1), (a.current = j), F(), (Error.prepareStackTrace = D);
            }
            var ke = e ? e.displayName || e.name : '',
              pr = ke ? c(ke) : '';
            return typeof e == 'function' && T.set(e, pr), pr;
          }
          function q(e, o, f) {
            return C(e, !1);
          }
          function fe(e) {
            var o = e.prototype;
            return !!(o && o.isReactComponent);
          }
          function S(e, o, f) {
            if (e == null) return '';
            if (typeof e == 'function') return C(e, fe(e));
            if (typeof e == 'string') return c(e);
            switch (e) {
              case h:
                return c('Suspense');
              case d:
                return c('SuspenseList');
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case u:
                  return q(e.render);
                case y:
                  return S(e.type, o, f);
                case E: {
                  var w = e,
                    D = w._payload,
                    j = w._init;
                  try {
                    return S(j(D), o, f);
                  } catch {}
                }
              }
            return '';
          }
          var $ = Object.prototype.hasOwnProperty,
            _ = {},
            V = B.ReactDebugCurrentFrame;
          function oe(e) {
            if (e) {
              var o = e._owner,
                f = S(e.type, e._source, o ? o.type : null);
              V.setExtraStackFrame(f);
            } else V.setExtraStackFrame(null);
          }
          function G(e, o, f, w, D) {
            {
              var j = Function.call.bind($);
              for (var A in e)
                if (j(e, A)) {
                  var R = void 0;
                  try {
                    if (typeof e[A] != 'function') {
                      var Z = Error(
                        (w || 'React class') +
                          ': ' +
                          f +
                          ' type `' +
                          A +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof e[A] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                      );
                      throw ((Z.name = 'Invariant Violation'), Z);
                    }
                    R = e[A](o, A, w, f, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                  } catch (W) {
                    R = W;
                  }
                  R &&
                    !(R instanceof Error) &&
                    (oe(D),
                    I(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      w || 'React class',
                      f,
                      A,
                      typeof R
                    ),
                    oe(null)),
                    R instanceof Error &&
                      !(R.message in _) &&
                      ((_[R.message] = !0), oe(D), I('Failed %s type: %s', f, R.message), oe(null));
                }
            }
          }
          var Re = Array.isArray;
          function de(e) {
            return Re(e);
          }
          function re(e) {
            {
              var o = typeof Symbol == 'function' && Symbol.toStringTag,
                f = (o && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
              return f;
            }
          }
          function x(e) {
            try {
              return L(e), !1;
            } catch {
              return !0;
            }
          }
          function L(e) {
            return '' + e;
          }
          function Oe(e) {
            if (x(e))
              return (
                I(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  re(e)
                ),
                L(e)
              );
          }
          var pe = B.ReactCurrentOwner,
            se = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            ir,
            or,
            Ue;
          Ue = {};
          function Gr(e) {
            if ($.call(e, 'ref')) {
              var o = Object.getOwnPropertyDescriptor(e, 'ref').get;
              if (o && o.isReactWarning) return !1;
            }
            return e.ref !== void 0;
          }
          function Ur(e) {
            if ($.call(e, 'key')) {
              var o = Object.getOwnPropertyDescriptor(e, 'key').get;
              if (o && o.isReactWarning) return !1;
            }
            return e.key !== void 0;
          }
          function Hr(e, o) {
            if (typeof e.ref == 'string' && pe.current && o && pe.current.stateNode !== o) {
              var f = U(pe.current.type);
              Ue[f] ||
                (I(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  U(pe.current.type),
                  e.ref
                ),
                (Ue[f] = !0));
            }
          }
          function Jr(e, o) {
            {
              var f = function () {
                ir ||
                  ((ir = !0),
                  I(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    o
                  ));
              };
              (f.isReactWarning = !0),
                Object.defineProperty(e, 'key', {
                  get: f,
                  configurable: !0,
                });
            }
          }
          function Kr(e, o) {
            {
              var f = function () {
                or ||
                  ((or = !0),
                  I(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    o
                  ));
              };
              (f.isReactWarning = !0),
                Object.defineProperty(e, 'ref', {
                  get: f,
                  configurable: !0,
                });
            }
          }
          var Zr = function (e, o, f, w, D, j, A) {
            var R = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: t,
              // Built-in properties that belong on the element
              type: e,
              key: o,
              ref: f,
              props: A,
              // Record the component responsible for creating this element.
              _owner: j,
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
                value: w,
              }),
              Object.defineProperty(R, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: D,
              }),
              Object.freeze && (Object.freeze(R.props), Object.freeze(R)),
              R
            );
          };
          function Qr(e, o, f, w, D) {
            {
              var j,
                A = {},
                R = null,
                Z = null;
              f !== void 0 && (Oe(f), (R = '' + f)),
                Ur(o) && (Oe(o.key), (R = '' + o.key)),
                Gr(o) && ((Z = o.ref), Hr(o, D));
              for (j in o) $.call(o, j) && !se.hasOwnProperty(j) && (A[j] = o[j]);
              if (e && e.defaultProps) {
                var W = e.defaultProps;
                for (j in W) A[j] === void 0 && (A[j] = W[j]);
              }
              if (R || Z) {
                var z = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e;
                R && Jr(A, z), Z && Kr(A, z);
              }
              return Zr(e, R, Z, D, w, pe.current, A);
            }
          }
          var He = B.ReactCurrentOwner,
            sr = B.ReactDebugCurrentFrame;
          function Ae(e) {
            if (e) {
              var o = e._owner,
                f = S(e.type, e._source, o ? o.type : null);
              sr.setExtraStackFrame(f);
            } else sr.setExtraStackFrame(null);
          }
          var Je;
          Je = !1;
          function Ke(e) {
            return typeof e == 'object' && e !== null && e.$$typeof === t;
          }
          function lr() {
            {
              if (He.current) {
                var e = U(He.current.type);
                if (e)
                  return (
                    `

Check the render method of \`` +
                    e +
                    '`.'
                  );
              }
              return '';
            }
          }
          function qr(e) {
            {
              if (e !== void 0) {
                var o = e.fileName.replace(/^.*[\\\/]/, ''),
                  f = e.lineNumber;
                return (
                  `

Check your code at ` +
                  o +
                  ':' +
                  f +
                  '.'
                );
              }
              return '';
            }
          }
          var cr = {};
          function et(e) {
            {
              var o = lr();
              if (!o) {
                var f = typeof e == 'string' ? e : e.displayName || e.name;
                f &&
                  (o =
                    `

Check the top-level render call using <` +
                    f +
                    '>.');
              }
              return o;
            }
          }
          function ur(e, o) {
            {
              if (!e._store || e._store.validated || e.key != null) return;
              e._store.validated = !0;
              var f = et(o);
              if (cr[f]) return;
              cr[f] = !0;
              var w = '';
              e &&
                e._owner &&
                e._owner !== He.current &&
                (w = ' It was passed a child from ' + U(e._owner.type) + '.'),
                Ae(e),
                I(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  f,
                  w
                ),
                Ae(null);
            }
          }
          function fr(e, o) {
            {
              if (typeof e != 'object') return;
              if (de(e))
                for (var f = 0; f < e.length; f++) {
                  var w = e[f];
                  Ke(w) && ur(w, o);
                }
              else if (Ke(e)) e._store && (e._store.validated = !0);
              else if (e) {
                var D = H(e);
                if (typeof D == 'function' && D !== e.entries)
                  for (var j = D.call(e), A; !(A = j.next()).done; ) Ke(A.value) && ur(A.value, o);
              }
            }
          }
          function rt(e) {
            {
              var o = e.type;
              if (o == null || typeof o == 'string') return;
              var f;
              if (typeof o == 'function') f = o.propTypes;
              else if (
                typeof o == 'object' &&
                (o.$$typeof === u || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  o.$$typeof === y)
              )
                f = o.propTypes;
              else return;
              if (f) {
                var w = U(o);
                G(f, e.props, 'prop', w, e);
              } else if (o.PropTypes !== void 0 && !Je) {
                Je = !0;
                var D = U(o);
                I(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  D || 'Unknown'
                );
              }
              typeof o.getDefaultProps == 'function' &&
                !o.getDefaultProps.isReactClassApproved &&
                I(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                );
            }
          }
          function tt(e) {
            {
              for (var o = Object.keys(e.props), f = 0; f < o.length; f++) {
                var w = o[f];
                if (w !== 'children' && w !== 'key') {
                  Ae(e),
                    I(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      w
                    ),
                    Ae(null);
                  break;
                }
              }
              e.ref !== null &&
                (Ae(e), I('Invalid attribute `ref` supplied to `React.Fragment`.'), Ae(null));
            }
          }
          function dr(e, o, f, w, D, j) {
            {
              var A = Xe(e);
              if (!A) {
                var R = '';
                (e === void 0 ||
                  (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                  (R +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var Z = qr(D);
                Z ? (R += Z) : (R += lr());
                var W;
                e === null
                  ? (W = 'null')
                  : de(e)
                  ? (W = 'array')
                  : e !== void 0 && e.$$typeof === t
                  ? ((W = '<' + (U(e.type) || 'Unknown') + ' />'),
                    (R = ' Did you accidentally export a JSX literal instead of a component?'))
                  : (W = typeof e),
                  I(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    W,
                    R
                  );
              }
              var z = Qr(e, o, f, D, j);
              if (z == null) return z;
              if (A) {
                var ne = o.children;
                if (ne !== void 0)
                  if (w)
                    if (de(ne)) {
                      for (var ke = 0; ke < ne.length; ke++) fr(ne[ke], e);
                      Object.freeze && Object.freeze(ne);
                    } else
                      I(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      );
                  else fr(ne, e);
              }
              return e === i ? tt(z) : rt(z), z;
            }
          }
          function nt(e, o, f) {
            return dr(e, o, f, !0);
          }
          function at(e, o, f) {
            return dr(e, o, f, !1);
          }
          var it = at,
            ot = nt;
          (je.Fragment = i), (je.jsx = it), (je.jsxs = ot);
        })()),
    je
  );
}
process.env.NODE_ENV === 'production' ? (qe.exports = ut()) : (qe.exports = ft());
var dt = qe.exports;
function pt(n) {
  if (n.sheet) return n.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === n) return document.styleSheets[t];
}
function ht(n) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', n.key),
    n.nonce !== void 0 && t.setAttribute('nonce', n.nonce),
    t.appendChild(document.createTextNode('')),
    t
  );
}
var mt = /* @__PURE__ */ (function () {
  function n(r) {
    (this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === 'production' : r.speedy),
      (this.tags = []),
      (this.ctr = 0),
      (this.nonce = r.nonce),
      (this.key = r.key),
      (this.container = r.container),
      (this.before = null);
  }
  var t = n.prototype;
  return (
    (t.insert = function (i) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        var l = ht(this),
          s;
        this.tags.length === 0
          ? (s = this.before)
          : (s = this.tags[this.tags.length - 1].nextSibling),
          this.container.insertBefore(l, s),
          this.tags.push(l);
      }
      var p = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var g = pt(p);
        try {
          var u = i.charCodeAt(1) === 105 && i.charCodeAt(0) === 64;
          g.insertRule(
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
            u ? 0 : g.cssRules.length
          );
        } catch (h) {
          process.env.NODE_ENV !== 'production' &&
            console.warn('There was a problem inserting the following rule: "' + i + '"', h);
        }
      } else p.appendChild(document.createTextNode(i));
      this.ctr++;
    }),
    (t.flush = function () {
      this.tags.forEach(function (i) {
        return i.parentNode.removeChild(i);
      }),
        (this.tags = []),
        (this.ctr = 0);
    }),
    n
  );
})();
function gt(n) {
  function t(v, m, b, F, a) {
    for (
      var N = 0,
        c = 0,
        X = 0,
        T = 0,
        M,
        C,
        q = 0,
        fe = 0,
        S,
        $ = (S = M = 0),
        _ = 0,
        V = 0,
        oe = 0,
        G = 0,
        Re = b.length,
        de = Re - 1,
        re,
        x = '',
        L = '',
        Oe = '',
        pe = '',
        se;
      _ < Re;

    ) {
      if (
        ((C = b.charCodeAt(_)),
        _ === de &&
          c + T + X + N !== 0 &&
          (c !== 0 && (C = c === 47 ? 10 : 47), (T = X = N = 0), Re++, de++),
        c + T + X + N === 0)
      ) {
        if (_ === de && (0 < V && (x = x.replace(E, '')), 0 < x.trim().length)) {
          switch (C) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              x += b.charAt(_);
          }
          C = 59;
        }
        switch (C) {
          case 123:
            for (x = x.trim(), M = x.charCodeAt(0), S = 1, G = ++_; _ < Re; ) {
              switch ((C = b.charCodeAt(_))) {
                case 123:
                  S++;
                  break;
                case 125:
                  S--;
                  break;
                case 47:
                  switch ((C = b.charCodeAt(_ + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for ($ = _ + 1; $ < de; ++$)
                          switch (b.charCodeAt($)) {
                            case 47:
                              if (C === 42 && b.charCodeAt($ - 1) === 42 && _ + 2 !== $) {
                                _ = $ + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (C === 47) {
                                _ = $ + 1;
                                break e;
                              }
                          }
                        _ = $;
                      }
                  }
                  break;
                case 91:
                  C++;
                case 40:
                  C++;
                case 34:
                case 39:
                  for (; _++ < de && b.charCodeAt(_) !== C; );
              }
              if (S === 0) break;
              _++;
            }
            switch (
              ((S = b.substring(G, _)),
              M === 0 && (M = (x = x.replace(y, '').trim()).charCodeAt(0)),
              M)
            ) {
              case 64:
                switch ((0 < V && (x = x.replace(E, '')), (C = x.charCodeAt(1)), C)) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    V = m;
                    break;
                  default:
                    V = we;
                }
                if (
                  ((S = t(m, V, S, C, a + 1)),
                  (G = S.length),
                  0 < te &&
                    ((V = r(we, x, oe)),
                    (se = g(3, S, V, m, U, ee, G, C, a, F)),
                    (x = V.join('')),
                    se !== void 0 && (G = (S = se.trim()).length) === 0 && ((C = 0), (S = ''))),
                  0 < G)
                )
                  switch (C) {
                    case 115:
                      x = x.replace(Ne, p);
                    case 100:
                    case 109:
                    case 45:
                      S = x + '{' + S + '}';
                      break;
                    case 107:
                      (x = x.replace(I, '$1 $2')),
                        (S = x + '{' + S + '}'),
                        (S =
                          J === 1 || (J === 2 && s('@' + S, 3))
                            ? '@-webkit-' + S + '@' + S
                            : '@' + S);
                      break;
                    default:
                      (S = x + S), F === 112 && (S = ((L += S), ''));
                  }
                else S = '';
                break;
              default:
                S = t(m, r(m, x, oe), S, F, a + 1);
            }
            (Oe += S), (S = oe = V = $ = M = 0), (x = ''), (C = b.charCodeAt(++_));
            break;
          case 125:
          case 59:
            if (((x = (0 < V ? x.replace(E, '') : x).trim()), 1 < (G = x.length)))
              switch (
                ($ === 0 &&
                  ((M = x.charCodeAt(0)), M === 45 || (96 < M && 123 > M)) &&
                  (G = (x = x.replace(' ', ':')).length),
                0 < te &&
                  (se = g(1, x, m, v, U, ee, L.length, F, a, F)) !== void 0 &&
                  (G = (x = se.trim()).length) === 0 &&
                  (x = '\0\0'),
                (M = x.charCodeAt(0)),
                (C = x.charCodeAt(1)),
                M)
              ) {
                case 0:
                  break;
                case 64:
                  if (C === 105 || C === 99) {
                    pe += x + b.charAt(_);
                    break;
                  }
                default:
                  x.charCodeAt(G - 1) !== 58 && (L += l(x, M, C, x.charCodeAt(2)));
              }
            (oe = V = $ = M = 0), (x = ''), (C = b.charCodeAt(++_));
        }
      }
      switch (C) {
        case 13:
        case 10:
          c === 47 ? (c = 0) : 1 + M === 0 && F !== 107 && 0 < x.length && ((V = 1), (x += '\0')),
            0 < te * Te && g(0, x, m, v, U, ee, L.length, F, a, F),
            (ee = 1),
            U++;
          break;
        case 59:
        case 125:
          if (c + T + X + N === 0) {
            ee++;
            break;
          }
        default:
          switch ((ee++, (re = b.charAt(_)), C)) {
            case 9:
            case 32:
              if (T + N + c === 0)
                switch (q) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    re = '';
                    break;
                  default:
                    C !== 32 && (re = ' ');
                }
              break;
            case 0:
              re = '\\0';
              break;
            case 12:
              re = '\\f';
              break;
            case 11:
              re = '\\v';
              break;
            case 38:
              T + c + N === 0 && ((V = oe = 1), (re = '\f' + re));
              break;
            case 108:
              if (T + c + N + K === 0 && 0 < $)
                switch (_ - $) {
                  case 2:
                    q === 112 && b.charCodeAt(_ - 3) === 58 && (K = q);
                  case 8:
                    fe === 111 && (K = fe);
                }
              break;
            case 58:
              T + c + N === 0 && ($ = _);
              break;
            case 44:
              c + X + T + N === 0 && ((V = 1), (re += '\r'));
              break;
            case 34:
            case 39:
              c === 0 && (T = T === C ? 0 : T === 0 ? C : T);
              break;
            case 91:
              T + c + X === 0 && N++;
              break;
            case 93:
              T + c + X === 0 && N--;
              break;
            case 41:
              T + c + N === 0 && X--;
              break;
            case 40:
              if (T + c + N === 0) {
                if (M === 0)
                  switch (2 * q + 3 * fe) {
                    case 533:
                      break;
                    default:
                      M = 1;
                  }
                X++;
              }
              break;
            case 64:
              c + X + T + N + $ + S === 0 && (S = 1);
              break;
            case 42:
            case 47:
              if (!(0 < T + N + X))
                switch (c) {
                  case 0:
                    switch (2 * C + 3 * b.charCodeAt(_ + 1)) {
                      case 235:
                        c = 47;
                        break;
                      case 220:
                        (G = _), (c = 42);
                    }
                    break;
                  case 42:
                    C === 47 &&
                      q === 42 &&
                      G + 2 !== _ &&
                      (b.charCodeAt(G + 2) === 33 && (L += b.substring(G, _ + 1)),
                      (re = ''),
                      (c = 0));
                }
          }
          c === 0 && (x += re);
      }
      (fe = q), (q = C), _++;
    }
    if (((G = L.length), 0 < G)) {
      if (
        ((V = m),
        0 < te && ((se = g(2, L, V, v, U, ee, G, F, a, F)), se !== void 0 && (L = se).length === 0))
      )
        return pe + L + Oe;
      if (((L = V.join(',') + '{' + L + '}'), J * K !== 0)) {
        switch ((J !== 2 || s(L, 2) || (K = 0), K)) {
          case 111:
            L = L.replace(ve, ':-moz-$1') + L;
            break;
          case 112:
            L =
              L.replace(Q, '::-webkit-input-$1') +
              L.replace(Q, '::-moz-$1') +
              L.replace(Q, ':-ms-input-$1') +
              L;
        }
        K = 0;
      }
    }
    return pe + L + Oe;
  }
  function r(v, m, b) {
    var F = m.trim().split(H);
    m = F;
    var a = F.length,
      N = v.length;
    switch (N) {
      case 0:
      case 1:
        var c = 0;
        for (v = N === 0 ? '' : v[0] + ' '; c < a; ++c) m[c] = i(v, m[c], b).trim();
        break;
      default:
        var X = (c = 0);
        for (m = []; c < a; ++c) for (var T = 0; T < N; ++T) m[X++] = i(v[T] + ' ', F[c], b).trim();
    }
    return m;
  }
  function i(v, m, b) {
    var F = m.charCodeAt(0);
    switch ((33 > F && (F = (m = m.trim()).charCodeAt(0)), F)) {
      case 38:
        return m.replace(B, '$1' + v.trim());
      case 58:
        return v.trim() + m.replace(B, '$1' + v.trim());
      default:
        if (0 < 1 * b && 0 < m.indexOf('\f'))
          return m.replace(B, (v.charCodeAt(0) === 58 ? '' : '$1') + v.trim());
    }
    return v + m;
  }
  function l(v, m, b, F) {
    var a = v + ';',
      N = 2 * m + 3 * b + 4 * F;
    if (N === 944) {
      v = a.indexOf(':', 9) + 1;
      var c = a.substring(v, a.length - 1).trim();
      return (
        (c = a.substring(0, v).trim() + c + ';'),
        J === 1 || (J === 2 && s(c, 1)) ? '-webkit-' + c + c : c
      );
    }
    if (J === 0 || (J === 2 && !s(a, 1))) return a;
    switch (N) {
      case 1015:
        return a.charCodeAt(10) === 97 ? '-webkit-' + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? '-webkit-' + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? '-webkit-' + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + a + a;
      case 978:
        return '-webkit-' + a + '-moz-' + a + a;
      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
      case 883:
        if (a.charCodeAt(8) === 45) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(Ge, '$1-webkit-$2') + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                a.replace('-grow', '') +
                '-webkit-' +
                a +
                '-ms-' +
                a.replace('grow', 'positive') +
                a
              );
            case 115:
              return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
            case 98:
              return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
          }
        return '-webkit-' + a + '-ms-' + a + a;
      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99) break;
        return (
          (c = a
            .substring(a.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + c + '-webkit-' + a + '-ms-flex-pack' + c + a
        );
      case 1005:
        return P.test(a) ? a.replace(k, ':-webkit-') + a.replace(k, ':-moz-') + a : a;
      case 1e3:
        switch (
          ((c = a.substring(13).trim()),
          (m = c.indexOf('-') + 1),
          c.charCodeAt(0) + c.charCodeAt(m))
        ) {
          case 226:
            c = a.replace(be, 'tb');
            break;
          case 232:
            c = a.replace(be, 'tb-rl');
            break;
          case 220:
            c = a.replace(be, 'lr');
            break;
          default:
            return a;
        }
        return '-webkit-' + a + '-ms-' + c + a;
      case 1017:
        if (a.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((m = (a = v).length - 10),
          (c = (a.charCodeAt(m) === 33 ? a.substring(0, m) : a)
            .substring(v.indexOf(':', 7) + 1)
            .trim()),
          (N = c.charCodeAt(0) + (c.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > c.charCodeAt(8)) break;
          case 115:
            a = a.replace(c, '-webkit-' + c) + ';' + a;
            break;
          case 207:
          case 102:
            a =
              a.replace(c, '-webkit-' + (102 < N ? 'inline-' : '') + 'box') +
              ';' +
              a.replace(c, '-webkit-' + c) +
              ';' +
              a.replace(c, '-ms-' + c + 'box') +
              ';' +
              a;
        }
        return a + ';';
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return (
                (c = a.replace('-items', '')),
                '-webkit-' + a + '-webkit-box-' + c + '-ms-flex-' + c + a
              );
            case 115:
              return '-webkit-' + a + '-ms-flex-item-' + a.replace(ye, '') + a;
            default:
              return (
                '-webkit-' +
                a +
                '-ms-flex-line-pack' +
                a.replace('align-content', '').replace(ye, '') +
                a
              );
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Xe.test(v) === !0)
          return (c = v.substring(v.indexOf(':') + 1)).charCodeAt(0) === 115
            ? l(v.replace('stretch', 'fill-available'), m, b, F).replace(
                ':fill-available',
                ':stretch'
              )
            : a.replace(c, '-webkit-' + c) + a.replace(c, '-moz-' + c.replace('fill-', '')) + a;
        break;
      case 962:
        if (
          ((a = '-webkit-' + a + (a.charCodeAt(5) === 102 ? '-ms-' + a : '') + a),
          b + F === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf('transform', 10))
        )
          return a.substring(0, a.indexOf(';', 27) + 1).replace(Y, '$1-webkit-$2') + a;
    }
    return a;
  }
  function s(v, m) {
    var b = v.indexOf(m === 1 ? ':' : '{'),
      F = v.substring(0, m !== 3 ? b : 10);
    return (b = v.substring(b + 1, v.length - 1)), Se(m !== 2 ? F : F.replace(xe, '$1'), b, m);
  }
  function p(v, m) {
    var b = l(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return b !== m + ';' ? b.replace(Ee, ' or ($1)').substring(4) : '(' + m + ')';
  }
  function g(v, m, b, F, a, N, c, X, T, M) {
    for (var C = 0, q = m, fe; C < te; ++C)
      switch ((fe = Ce[C].call(d, v, q, b, F, a, N, c, X, T, M))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          q = fe;
      }
    if (q !== m) return q;
  }
  function u(v) {
    switch (v) {
      case void 0:
      case null:
        te = Ce.length = 0;
        break;
      default:
        if (typeof v == 'function') Ce[te++] = v;
        else if (typeof v == 'object') for (var m = 0, b = v.length; m < b; ++m) u(v[m]);
        else Te = !!v | 0;
    }
    return u;
  }
  function h(v) {
    return (
      (v = v.prefix),
      v !== void 0 &&
        ((Se = null), v ? (typeof v != 'function' ? (J = 1) : ((J = 2), (Se = v))) : (J = 0)),
      h
    );
  }
  function d(v, m) {
    var b = v;
    if ((33 > b.charCodeAt(0) && (b = b.trim()), (Fe = b), (b = [Fe]), 0 < te)) {
      var F = g(-1, m, b, b, U, ee, 0, 0, 0, 0);
      F !== void 0 && typeof F == 'string' && (m = F);
    }
    var a = t(we, b, m, 0, 0);
    return (
      0 < te && ((F = g(-2, a, b, b, U, ee, a.length, 0, 0, 0)), F !== void 0 && (a = F)),
      (Fe = ''),
      (K = 0),
      (ee = U = 1),
      a
    );
  }
  var y = /^\0+/g,
    E = /[\0\r\f]/g,
    k = /: */g,
    P = /zoo|gra/,
    Y = /([,: ])(transform)/g,
    H = /,\r+?/g,
    B = /([\t\r\n ])*\f?&/g,
    I = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ve = /:(read-only)/g,
    be = /[svh]\w+-[tblr]{2}/,
    Ne = /\(\s*(.*)\s*\)/g,
    Ee = /([\s\S]*?);/g,
    ye = /-self|flex-/g,
    xe = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    Xe = /stretch|:\s*\w+\-(?:conte|avail)/,
    Ge = /([^-])(image-set\()/,
    ee = 1,
    U = 1,
    K = 0,
    J = 1,
    we = [],
    Ce = [],
    te = 0,
    Se = null,
    Te = 0,
    Fe = '';
  return (d.use = u), (d.set = h), n !== void 0 && h(n), d;
}
var er = '/*|*/',
  vt = er + '}';
function bt(n) {
  n && Be.current.insert(n + '}');
}
var Be = {
    current: null,
  },
  yt = function (t, r, i, l, s, p, g, u, h, d) {
    switch (t) {
      case 1: {
        switch (r.charCodeAt(0)) {
          case 64:
            return Be.current.insert(r + ';'), '';
          case 108:
            if (r.charCodeAt(2) === 98) return '';
        }
        break;
      }
      case 2: {
        if (u === 0) return r + er;
        break;
      }
      case 3:
        switch (u) {
          case 102:
          case 112:
            return Be.current.insert(i[0] + r), '';
          default:
            return r + (d === 0 ? er : '');
        }
      case -2:
        r.split(vt).forEach(bt);
    }
  },
  kr = function (t) {
    t === void 0 && (t = {});
    var r = t.key || 'css',
      i;
    t.prefix !== void 0 &&
      (i = {
        prefix: t.prefix,
      });
    var l = new gt(i);
    if (process.env.NODE_ENV !== 'production' && /[^a-z-]/.test(r))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          r +
          '" was passed'
      );
    var s = {},
      p;
    {
      p = t.container || document.head;
      var g = document.querySelectorAll('style[data-emotion-' + r + ']');
      Array.prototype.forEach.call(g, function (E) {
        var k = E.getAttribute('data-emotion-' + r);
        k.split(' ').forEach(function (P) {
          s[P] = !0;
        }),
          E.parentNode !== p && p.appendChild(E);
      });
    }
    var u;
    if (
      (l.use(t.stylisPlugins)(yt),
      (u = function (k, P, Y, H) {
        var B = P.name;
        if (((Be.current = Y), process.env.NODE_ENV !== 'production' && P.map !== void 0)) {
          var I = P.map;
          Be.current = {
            insert: function (ve) {
              Y.insert(ve + I);
            },
          };
        }
        l(k, P.styles), H && (y.inserted[B] = !0);
      }),
      process.env.NODE_ENV !== 'production')
    ) {
      var h = /\/\*/g,
        d = /\*\//g;
      l.use(function (E, k) {
        switch (E) {
          case -1: {
            for (; h.test(k); ) {
              if (((d.lastIndex = h.lastIndex), d.test(k))) {
                h.lastIndex = d.lastIndex;
                continue;
              }
              throw new Error(
                'Your styles have an unterminated comment ("/*" without corresponding "*/").'
              );
            }
            h.lastIndex = 0;
            break;
          }
        }
      }),
        l.use(function (E, k, P) {
          switch (E) {
            case -1: {
              var Y =
                  'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
                H = k.match(/(:first|:nth|:nth-last)-child/g);
              H &&
                y.compat !== !0 &&
                H.forEach(function (B) {
                  var I = new RegExp(B + '.*\\/\\* ' + Y + ' \\*\\/'),
                    Q = I.test(k);
                  B &&
                    !Q &&
                    console.error(
                      'The pseudo class "' +
                        B +
                        '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                        B.split('-child')[0] +
                        '-of-type".'
                    );
                });
              break;
            }
          }
        });
    }
    var y = {
      key: r,
      sheet: new mt({
        key: r,
        container: p,
        nonce: t.nonce,
        speedy: t.speedy,
      }),
      nonce: t.nonce,
      inserted: s,
      registered: {},
      insert: u,
    };
    return y;
  },
  Et = !0;
function tr(n, t, r) {
  var i = '';
  return (
    r.split(' ').forEach(function (l) {
      n[l] !== void 0 ? t.push(n[l]) : (i += l + ' ');
    }),
    i
  );
}
var _r = function (t, r, i) {
  var l = t.key + '-' + r.name;
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
      Et === !1) &&
      t.registered[l] === void 0 &&
      (t.registered[l] = r.styles),
    t.inserted[r.name] === void 0)
  ) {
    var s = r;
    do t.insert('.' + l, s, t.sheet, !0), (s = s.next);
    while (s !== void 0);
  }
};
function xt(n) {
  for (var t = 0, r, i = 0, l = n.length; l >= 4; ++i, l -= 4)
    (r =
      (n.charCodeAt(i) & 255) |
      ((n.charCodeAt(++i) & 255) << 8) |
      ((n.charCodeAt(++i) & 255) << 16) |
      ((n.charCodeAt(++i) & 255) << 24)),
      (r = /* Math.imul(k, m): */ (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= /* k >>> r: */ r >>> 24),
      (t =
        /* Math.imul(k, m): */
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) /* Math.imul(h, m): */ ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (l) {
    case 3:
      t ^= (n.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (n.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (t ^= n.charCodeAt(i) & 255),
        (t = /* Math.imul(h, m): */ (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = /* Math.imul(h, m): */ (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var wt = {
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
function Ct(n) {
  var t = {};
  return function (r) {
    return t[r] === void 0 && (t[r] = n(r)), t[r];
  };
}
var gr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  St =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  Ft = /[A-Z]|^ms/g,
  Dr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  nr = function (t) {
    return t.charCodeAt(1) === 45;
  },
  vr = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Ze = Ct(function (n) {
    return nr(n) ? n : n.replace(Ft, '-$&').toLowerCase();
  }),
  Ve = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(Dr, function (i, l, s) {
            return (
              (ie = {
                name: l,
                styles: s,
                next: ie,
              }),
              l
            );
          });
    }
    return wt[t] !== 1 && !nr(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r;
  };
if (process.env.NODE_ENV !== 'production') {
  var Rt = /(attr|calc|counters?|url)\(/,
    Ot = [
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
    At = Ve,
    kt = /^-ms-/,
    _t = /-(.)/g,
    br = {};
  Ve = function (t, r) {
    t === 'content' &&
      (typeof r != 'string' ||
        (Ot.indexOf(r) === -1 &&
          !Rt.test(r) &&
          (r.charAt(0) !== r.charAt(r.length - 1) ||
            (r.charAt(0) !== '"' && r.charAt(0) !== "'")))) &&
      console.error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          r +
          '"\'`'
      );
    var i = At(t, r);
    return (
      i !== '' &&
        !nr(t) &&
        t.indexOf('-') !== -1 &&
        br[t] === void 0 &&
        ((br[t] = !0),
        console.error(
          'Using kebab-case for css properties in objects is not supported. Did you mean ' +
            t.replace(kt, 'ms-').replace(_t, function (l, s) {
              return s.toUpperCase();
            }) +
            '?'
        )),
      i
    );
  };
}
var yr = !0;
function Me(n, t, r, i) {
  if (r == null) return '';
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== 'production' && r.toString() === 'NO_COMPONENT_SELECTOR')
      throw new Error(
        'Component selectors can only be used in conjunction with babel-plugin-emotion.'
      );
    return r;
  }
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object': {
      if (r.anim === 1)
        return (
          (ie = {
            name: r.name,
            styles: r.styles,
            next: ie,
          }),
          r.name
        );
      if (r.styles !== void 0) {
        var l = r.next;
        if (l !== void 0)
          for (; l !== void 0; )
            (ie = {
              name: l.name,
              styles: l.styles,
              next: ie,
            }),
              (l = l.next);
        var s = r.styles + ';';
        return process.env.NODE_ENV !== 'production' && r.map !== void 0 && (s += r.map), s;
      }
      return Dt(n, t, r);
    }
    case 'function': {
      if (n !== void 0) {
        var p = ie,
          g = r(n);
        return (ie = p), Me(n, t, g, i);
      } else
        process.env.NODE_ENV !== 'production' &&
          console.error(
            "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
          );
      break;
    }
    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var u = [],
          h = r.replace(Dr, function (y, E, k) {
            var P = 'animation' + u.length;
            return (
              u.push(
                'const ' + P + ' = keyframes`' + k.replace(/^@keyframes animation-\w+/, '') + '`'
              ),
              '${' + P + '}'
            );
          });
        u.length &&
          console.error(
            '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
              [].concat(u, ['`' + h + '`']).join(`
`) +
              `

You should wrap it with \`css\` like this:

` +
              ('css`' + h + '`')
          );
      }
      break;
  }
  if (t == null) return r;
  var d = t[r];
  return (
    process.env.NODE_ENV !== 'production' &&
      i &&
      yr &&
      d !== void 0 &&
      (console.error(
        'Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion'
      ),
      (yr = !1)),
    d !== void 0 && !i ? d : r
  );
}
function Dt(n, t, r) {
  var i = '';
  if (Array.isArray(r)) for (var l = 0; l < r.length; l++) i += Me(n, t, r[l], !1);
  else
    for (var s in r) {
      var p = r[s];
      if (typeof p != 'object')
        t != null && t[p] !== void 0
          ? (i += s + '{' + t[p] + '}')
          : vr(p) && (i += Ze(s) + ':' + Ve(s, p) + ';');
      else {
        if (s === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
          throw new Error(
            'Component selectors can only be used in conjunction with babel-plugin-emotion.'
          );
        if (Array.isArray(p) && typeof p[0] == 'string' && (t == null || t[p[0]] === void 0))
          for (var g = 0; g < p.length; g++) vr(p[g]) && (i += Ze(s) + ':' + Ve(s, p[g]) + ';');
        else {
          var u = Me(n, t, p, !1);
          switch (s) {
            case 'animation':
            case 'animationName': {
              i += Ze(s) + ':' + u + ';';
              break;
            }
            default:
              process.env.NODE_ENV !== 'production' && s === 'undefined' && console.error(St),
                (i += s + '{' + u + '}');
          }
        }
      }
    }
  return i;
}
var Er = /label:\s*([^\s;\n{]+)\s*;/g,
  Nr;
process.env.NODE_ENV !== 'production' &&
  (Nr = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var ie,
  _e = function (t, r, i) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
      return t[0];
    var l = !0,
      s = '';
    ie = void 0;
    var p = t[0];
    p == null || p.raw === void 0
      ? ((l = !1), (s += Me(i, r, p, !1)))
      : (process.env.NODE_ENV !== 'production' && p[0] === void 0 && console.error(gr),
        (s += p[0]));
    for (var g = 1; g < t.length; g++)
      (s += Me(i, r, t[g], s.charCodeAt(s.length - 1) === 46)),
        l &&
          (process.env.NODE_ENV !== 'production' && p[g] === void 0 && console.error(gr),
          (s += p[g]));
    var u;
    process.env.NODE_ENV !== 'production' &&
      (s = s.replace(Nr, function (E) {
        return (u = E), '';
      })),
      (Er.lastIndex = 0);
    for (var h = '', d; (d = Er.exec(s)) !== null; )
      h +=
        '-' + // $FlowFixMe we know it's not null
        d[1];
    var y = xt(s) + h;
    return process.env.NODE_ENV !== 'production'
      ? {
          name: y,
          styles: s,
          map: u,
          next: ie,
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        }
      : {
          name: y,
          styles: s,
          next: ie,
        };
  },
  Nt = Object.prototype.hasOwnProperty,
  Tr = /* @__PURE__ */ Ar(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement < 'u' ? kr() : null
  ),
  Tt = /* @__PURE__ */ Ar({});
Tr.Provider;
var Pt = function (t) {
    var r = function (l, s) {
      return /* @__PURE__ */ Le(Tr.Consumer, null, function (p) {
        return t(l, p, s);
      });
    };
    return /* @__PURE__ */ st(r);
  },
  xr = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  wr = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
  jt = function () {
    return null;
  },
  Cr = function (t, r, i, l) {
    var s = i === null ? r.css : r.css(i);
    typeof s == 'string' && t.registered[s] !== void 0 && (s = t.registered[s]);
    var p = r[xr],
      g = [s],
      u = '';
    typeof r.className == 'string'
      ? (u = tr(t.registered, g, r.className))
      : r.className != null && (u = r.className + ' ');
    var h = _e(g);
    if (process.env.NODE_ENV !== 'production' && h.name.indexOf('-') === -1) {
      var d = r[wr];
      d && (h = _e([h, 'label:' + d + ';']));
    }
    _r(t, h, typeof p == 'string'), (u += t.key + '-' + h.name);
    var y = {};
    for (var E in r)
      Nt.call(r, E) &&
        E !== 'css' &&
        E !== xr &&
        (process.env.NODE_ENV === 'production' || E !== wr) &&
        (y[E] = r[E]);
    (y.ref = l), (y.className = u);
    var k = /* @__PURE__ */ Le(p, y),
      P = /* @__PURE__ */ Le(jt, null);
    return /* @__PURE__ */ Le(lt, null, P, k);
  },
  It = /* @__PURE__ */ Pt(function (n, t, r) {
    return typeof n.css == 'function'
      ? /* @__PURE__ */ Le(Tt.Consumer, null, function (i) {
          return Cr(t, n, i, r);
        })
      : Cr(t, n, null, r);
  });
process.env.NODE_ENV !== 'production' && (It.displayName = 'EmotionCssPropInternal');
function Lt() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
  return _e(t);
}
var ar = { exports: {} },
  Bt = ar.exports;
Object.defineProperty(Bt, '__esModule', {
  value: !0,
});
ar.exports = {
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
var Mt = ar.exports;
const O = /* @__PURE__ */ ct(Mt);
function Sr(n, t) {
  if (n.inserted[t.name] === void 0) return n.insert('', t, n.sheet, !0);
}
function Fr(n, t, r) {
  var i = [],
    l = tr(n, i, r);
  return i.length < 2 ? r : l + t(i);
}
var $t = function (t) {
    var r = kr(t);
    (r.sheet.speedy = function (g) {
      if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
        throw new Error('speedy must be changed before any rules are inserted');
      this.isSpeedy = g;
    }),
      (r.compat = !0);
    var i = function () {
        for (var u = arguments.length, h = new Array(u), d = 0; d < u; d++) h[d] = arguments[d];
        var y = _e(h, r.registered, void 0);
        return _r(r, y, !1), r.key + '-' + y.name;
      },
      l = function () {
        for (var u = arguments.length, h = new Array(u), d = 0; d < u; d++) h[d] = arguments[d];
        var y = _e(h, r.registered),
          E = 'animation-' + y.name;
        return (
          Sr(r, {
            name: y.name,
            styles: '@keyframes ' + E + '{' + y.styles + '}',
          }),
          E
        );
      },
      s = function () {
        for (var u = arguments.length, h = new Array(u), d = 0; d < u; d++) h[d] = arguments[d];
        var y = _e(h, r.registered);
        Sr(r, y);
      },
      p = function () {
        for (var u = arguments.length, h = new Array(u), d = 0; d < u; d++) h[d] = arguments[d];
        return Fr(r.registered, i, Wt(h));
      };
    return {
      css: i,
      cx: p,
      injectGlobal: s,
      keyframes: l,
      hydrate: function (u) {
        u.forEach(function (h) {
          r.inserted[h] = !0;
        });
      },
      flush: function () {
        (r.registered = {}), (r.inserted = {}), r.sheet.flush();
      },
      // $FlowFixMe
      sheet: r.sheet,
      cache: r,
      getRegisteredStyles: tr.bind(null, r.registered),
      merge: Fr.bind(null, r.registered, i),
    };
  },
  Wt = function n(t) {
    for (var r = '', i = 0; i < t.length; i++) {
      var l = t[i];
      if (l != null) {
        var s = void 0;
        switch (typeof l) {
          case 'boolean':
            break;
          case 'object': {
            if (Array.isArray(l)) s = n(l);
            else {
              s = '';
              for (var p in l) l[p] && p && (s && (s += ' '), (s += p));
            }
            break;
          }
          default:
            s = l;
        }
        s && (r && (r += ' '), (r += s));
      }
    }
    return r;
  },
  Pr = $t(),
  De = Pr.cx,
  me = Pr.css,
  Vt = Object.defineProperty,
  zt = Object.defineProperties,
  Yt = Object.getOwnPropertyDescriptors,
  ze = Object.getOwnPropertySymbols,
  jr = Object.prototype.hasOwnProperty,
  Ir = Object.prototype.propertyIsEnumerable,
  Rr = (n, t, r) =>
    t in n ? Vt(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  ce = (n, t) => {
    for (var r in t || (t = {})) jr.call(t, r) && Rr(n, r, t[r]);
    if (ze) for (var r of ze(t)) Ir.call(t, r) && Rr(n, r, t[r]);
    return n;
  },
  ge = (n, t) => zt(n, Yt(t)),
  $e = (n, t) => {
    var r = {};
    for (var i in n) jr.call(n, i) && t.indexOf(i) < 0 && (r[i] = n[i]);
    if (n != null && ze) for (var i of ze(n)) t.indexOf(i) < 0 && Ir.call(n, i) && (r[i] = n[i]);
    return r;
  };
Lt`
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
var Xt = {
  none: 0,
  spacing2Xs: O.spacing2Xs,
  spacingXs: O.spacingXs,
  spacingS: O.spacingS,
  spacingM: O.spacingM,
  spacingL: O.spacingL,
  spacingXl: O.spacingXl,
  spacing2Xl: O.spacing2Xl,
  spacing3Xl: O.spacing3Xl,
  spacing4Xl: O.spacing4Xl,
};
function ae(n) {
  return Xt[n];
}
function Gt(n) {
  return Object.assign(
    {},
    n.margin ? { margin: ae(n.margin) } : null,
    n.marginLeft ? { marginLeft: ae(n.marginLeft) } : null,
    n.marginRight ? { marginRight: ae(n.marginRight) } : null,
    n.marginTop ? { marginTop: ae(n.marginTop) } : null,
    n.marginBottom ? { marginBottom: ae(n.marginBottom) } : null,
    n.padding ? { padding: ae(n.padding) } : null,
    n.paddingLeft ? { paddingLeft: ae(n.paddingLeft) } : null,
    n.paddingRight ? { paddingRight: ae(n.paddingRight) } : null,
    n.paddingTop ? { paddingTop: ae(n.paddingTop) } : null,
    n.paddingBottom ? { paddingBottom: ae(n.paddingBottom) } : null
  );
}
var Ut = 'div';
function We(n) {
  let t = n,
    {
      display: r,
      className: i,
      margin: l,
      marginBottom: s,
      marginLeft: p,
      marginRight: g,
      marginTop: u,
      padding: h,
      paddingBottom: d,
      paddingLeft: y,
      paddingRight: E,
      paddingTop: k,
      testId: P,
      as: Y = Ut,
    } = t,
    H = $e(t, [
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
    boxProps: ce(
      {
        className: De(
          me({ display: r }),
          me(
            ce(
              {},
              Gt({
                margin: l,
                marginBottom: s,
                marginLeft: p,
                marginRight: g,
                marginTop: u,
                padding: h,
                paddingBottom: d,
                paddingLeft: y,
                paddingRight: E,
                paddingTop: k,
              })
            )
          ),
          i
        ),
        ['data-test-id']: P,
      },
      H
    ),
    Element: Y,
  };
}
function Lr(n, t) {
  let { boxProps: r, Element: i } = We(n);
  return ue.createElement(i, ge(ce({}, r), { ref: t }), n.children);
}
Lr.displayName = 'Box';
ue.forwardRef(Lr);
var Ht = 'div';
function Br(n, t) {
  var r = n,
    {
      isInline: i,
      alignItems: l,
      alignSelf: s,
      alignContent: p,
      flex: g,
      flexBasis: u,
      flexShrink: h,
      flexDirection: d,
      flexGrow: y,
      flexWrap: E,
      fullHeight: k,
      fullWidth: P,
      gap: Y,
      justifyContent: H,
      justifyItems: B,
      justifySelf: I,
      order: Q,
      children: ve,
      as: be,
    } = r,
    Ne = $e(r, [
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
    Ee;
  let { boxProps: ye, Element: xe } = We(ge(ce({}, Ne), { as: be || Ht }));
  return ue.createElement(
    xe,
    ge(ce({}, ye), {
      className: De(
        me({
          display: i ? 'inline-flex' : 'flex',
          width: P ? '100%' : void 0,
          height: k ? '100%' : void 0,
          flex: g,
          flexBasis: u,
          flexShrink: h,
          flexDirection: d,
          gap: (Ee = O[Y]) != null ? Ee : Y,
          justifyContent: H,
          justifyItems: B,
          justifySelf: I,
          alignItems: l,
          alignSelf: s,
          alignContent: p,
          order: Q,
          flexWrap: E,
          flexGrow: y,
        }),
        ye.className
      ),
      ref: t,
    }),
    ve
  );
}
Br.displayName = 'Flex';
var Mr = ue.forwardRef(Br),
  Jt = 'div';
function $r(n, t) {
  var r = n,
    {
      alignContent: i,
      children: l,
      columnGap: s = 'spacingM',
      columns: p = 'auto',
      flow: g,
      isInline: u,
      justifyContent: h,
      rowGap: d = 'none',
      rows: y = 'auto',
      as: E,
    } = r,
    k = $e(r, [
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
    P,
    Y;
  let H = (Q) => (typeof Q == 'number' ? `repeat(${Q}, minmax(0, 1fr))` : Q),
    { boxProps: B, Element: I } = We(ge(ce({}, k), { as: E || Jt }));
  return ue.createElement(
    I,
    ge(ce({}, B), {
      className: De(
        me({
          display: u ? 'inline-grid' : 'grid',
          gridTemplateColumns: H(p),
          gridTemplateRows: H(y),
          flow: g,
          justifyContent: h,
          alignContent: i,
          columnGap: (P = ae(s)) != null ? P : 0,
          rowGap: (Y = ae(d)) != null ? Y : 0,
        }),
        B.className
      ),
      ref: t,
    }),
    l
  );
}
$r.displayName = 'Grid';
var Kt = ue.forwardRef($r);
function Wr(n, t) {
  var r = n,
    { children: i, columnStart: l, columnEnd: s, rowStart: p, rowEnd: g, area: u, order: h } = r,
    d = $e(r, ['children', 'columnStart', 'columnEnd', 'rowStart', 'rowEnd', 'area', 'order']);
  let y = u || [p || 'auto', l || 'auto', g || 'auto', s || 'auto'].join(' / '),
    { boxProps: E, Element: k } = We(d);
  return ue.createElement(
    k,
    ge(ce({}, E), { className: De(me({ gridArea: y, order: h }), E.className), ref: t }),
    i
  );
}
Wr.displayName = 'GridItem';
var Zt = ue.forwardRef(Wr),
  Qt = Kt;
Qt.Item = Zt;
var qt = 'div';
function Vr(n, t) {
  var r = n,
    {
      flexDirection: i = 'row',
      alignItems: l = 'center',
      isInline: s = !1,
      spacing: p = 'spacingM',
      children: g,
      as: u,
    } = r,
    h = $e(r, ['flexDirection', 'alignItems', 'isInline', 'spacing', 'children', 'as']);
  let { boxProps: d, Element: y } = We(ge(ce({}, h), { as: u || qt }));
  return ue.createElement(
    Mr,
    ge(ce({}, d), {
      as: y,
      flexDirection: i,
      alignItems: l,
      isInline: s,
      className: d.className,
      gap: p,
      ref: t,
    }),
    g
  );
}
Vr.displayName = 'Stack';
ue.forwardRef(Vr);
var en = Object.defineProperty,
  rn = Object.defineProperties,
  tn = Object.getOwnPropertyDescriptors,
  Ye = Object.getOwnPropertySymbols,
  zr = Object.prototype.hasOwnProperty,
  Yr = Object.prototype.propertyIsEnumerable,
  Or = (n, t, r) =>
    t in n ? en(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  Ie = (n, t) => {
    for (var r in t || (t = {})) zr.call(t, r) && Or(n, r, t[r]);
    if (Ye) for (var r of Ye(t)) Yr.call(t, r) && Or(n, r, t[r]);
    return n;
  },
  rr = (n, t) => rn(n, tn(t)),
  nn = (n, t) => {
    var r = {};
    for (var i in n) zr.call(n, i) && t.indexOf(i) < 0 && (r[i] = n[i]);
    if (n != null && Ye) for (var i of Ye(n)) t.indexOf(i) < 0 && Yr.call(n, i) && (r[i] = n[i]);
    return r;
  },
  an = (n) => {
    switch (n) {
      case 'primary':
        return { color: O.blue600, '&:hover, &:focus': { color: O.blue700 } };
      case 'secondary':
        return { color: O.gray600, '&:hover, &:focus': { color: O.gray700 } };
      case 'positive':
        return { color: O.green600, '&:hover, &:focus': { color: O.green700 } };
      case 'negative':
        return { color: O.red600, '&:hover, &:focus': { color: O.red700 } };
      case 'muted':
        return { color: O.gray400, '&:hover, &:focus': { color: O.gray500 } };
      case 'white':
        return { color: O.colorWhite, '&:hover, &:focus': { color: O.gray100 } };
      default:
        return { color: O.colorWhite };
    }
  },
  on = ({ variant: n, isDisabled: t }) =>
    me(
      rr(
        Ie(
          {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            border: 0,
            padding: 0,
            margin: 0,
            fontFamily: O.fontStackPrimary,
            fontSize: O.fontSizeM,
            fontWeight: O.fontWeightMedium,
            transition: `color ${O.transitionDurationShort} ${O.transitionEasingDefault}`,
            textDecoration: 'none',
            background: 'none',
            appearance: 'none',
            whiteSpace: 'normal',
            textAlign: 'left',
            cursor: t ? 'not-allowed' : 'pointer',
            opacity: t ? 0.5 : 1,
          },
          an(n)
        ),
        {
          outline: 'none',
          verticalAlign: 'bottom',
          '&:focus, &:focus-visible, &:hover': { textDecoration: t ? 'none' : 'underline' },
          '&:focus': { boxShadow: t ? 'none' : O.glowPrimary, borderRadius: O.borderRadiusSmall },
          '&:focus:not(:focus-visible)': { borderRadius: 0, boxShadow: 'none' },
          '&:focus-visible': {
            borderRadius: O.borderRadiusSmall,
            boxShadow: t ? 'none' : O.glowPrimary,
          },
        }
      )
    ),
  sn = () =>
    me({
      fill: 'currentColor',
      transition: `fill ${O.transitionDurationShort} ${O.transitionEasingDefault}`,
    }),
  ln = ({ alignIcon: n }) => {
    if (n === 'start') return me({ marginLeft: O.spacing2Xs });
    if (n === 'end') return me({ marginRight: O.spacing2Xs });
  },
  Qe = { textLink: on, textLinkIcon: sn, textLinkText: ln },
  cn = 'a';
function Xr(n, t) {
  let r = n,
    {
      children: i,
      className: l,
      testId: s = 'cf-ui-text-link',
      variant: p = 'primary',
      href: g,
      icon: u,
      alignIcon: h = 'start',
      isDisabled: d,
      as: y = cn,
    } = r,
    E = nn(r, [
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
    k = Ie(
      {
        ref: t,
        className: De(Qe.textLink({ variant: p, isDisabled: d }), n.className),
        ['data-test-id']: s,
      },
      E
    ),
    P = u
      ? le.createElement(
          Mr,
          { as: 'span' },
          le.cloneElement(u, { className: De(u.props.className, Qe.textLinkIcon()), size: 'small' })
        )
      : null,
    Y = le.createElement(
      le.Fragment,
      null,
      u && h === 'start' && P,
      i &&
        le.createElement('span', { className: Qe.textLinkText({ alignIcon: u ? h : void 0 }) }, i),
      u && h === 'end' && P
    );
  return y === 'button'
    ? le.createElement('button', rr(Ie({}, k), { disabled: d, type: 'button' }), Y)
    : le.createElement(
        'a',
        Ie(
          rr(Ie({}, k), {
            onClick: d
              ? (H) => {
                  H.preventDefault();
                }
              : k.onClick,
            href: g,
          }),
          d ? { tabIndex: -1 } : {}
        ),
        Y
      );
}
Xr.displayName = 'TextLink';
var un = le.forwardRef(Xr);
const dn = (n) => {
  const {
      body: t,
      substring: r,
      onClick: i = () => {},
      hyperLinkHref: l,
      icon: s,
      alignIcon: p,
    } = n,
    g = (h) =>
      /* @__PURE__ */ dt.jsx(
        un,
        {
          onClick: i,
          href: l,
          target: '_blank',
          rel: 'noopener noreferer',
          icon: s,
          alignIcon: p,
          children: r,
        },
        `textLink-${h}`
      );
  return (() => t.split(r).reduce((d, y, E) => (E ? d.concat(g(E), y) : [y]), []))();
};
export { dn as HyperLink };
