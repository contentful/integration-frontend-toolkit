(function (ve, L) {
  typeof exports == 'object' && typeof module < 'u'
    ? L(exports, require('react'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'react'], L)
    : ((ve = typeof globalThis < 'u' ? globalThis : ve || self),
      L((ve['integration-component-library'] = {}), ve.r__default));
})(this, function (ve, L) {
  'use strict';
  function Xr(n) {
    const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (n) {
      for (const r in n)
        if (r !== 'default') {
          const i = Object.getOwnPropertyDescriptor(n, r);
          Object.defineProperty(t, r, i.get ? i : { enumerable: !0, get: () => n[r] });
        }
    }
    return (t.default = n), Object.freeze(t);
  }
  const se = Xr(L);
  function Gr(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
  }
  var Xe = { exports: {} },
    _e = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ir;
  function Ur() {
    if (ir) return _e;
    ir = 1;
    var n = L,
      t = Symbol.for('react.element'),
      r = Symbol.for('react.fragment'),
      i = Object.prototype.hasOwnProperty,
      l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      s = { key: !0, ref: !0, __self: !0, __source: !0 };
    function p(g, u, m) {
      var d,
        y = {},
        E = null,
        A = null;
      m !== void 0 && (E = '' + m),
        u.key !== void 0 && (E = '' + u.key),
        u.ref !== void 0 && (A = u.ref);
      for (d in u) i.call(u, d) && !s.hasOwnProperty(d) && (y[d] = u[d]);
      if (g && g.defaultProps)
        for (d in ((u = g.defaultProps), u)) y[d] === void 0 && (y[d] = u[d]);
      return { $$typeof: t, type: g, key: E, ref: A, props: y, _owner: l.current };
    }
    return (_e.Fragment = r), (_e.jsx = p), (_e.jsxs = p), _e;
  }
  var Pe = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var or;
  function Hr() {
    return (
      or ||
        ((or = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var n = L,
              t = Symbol.for('react.element'),
              r = Symbol.for('react.portal'),
              i = Symbol.for('react.fragment'),
              l = Symbol.for('react.strict_mode'),
              s = Symbol.for('react.profiler'),
              p = Symbol.for('react.provider'),
              g = Symbol.for('react.context'),
              u = Symbol.for('react.forward_ref'),
              m = Symbol.for('react.suspense'),
              d = Symbol.for('react.suspense_list'),
              y = Symbol.for('react.memo'),
              E = Symbol.for('react.lazy'),
              A = Symbol.for('react.offscreen'),
              P = Symbol.iterator,
              X = '@@iterator';
            function J(e) {
              if (e === null || typeof e != 'object') return null;
              var o = (P && e[P]) || e[X];
              return typeof o == 'function' ? o : null;
            }
            var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function I(e) {
              {
                for (var o = arguments.length, f = new Array(o > 1 ? o - 1 : 0), w = 1; w < o; w++)
                  f[w - 1] = arguments[w];
                q('error', e, f);
              }
            }
            function q(e, o, f) {
              {
                var w = M.ReactDebugCurrentFrame,
                  N = w.getStackAddendum();
                N !== '' && ((o += '%s'), (f = f.concat([N])));
                var j = f.map(function (k) {
                  return String(k);
                });
                j.unshift('Warning: ' + o), Function.prototype.apply.call(console[e], console, j);
              }
            }
            var be = !1,
              ye = !1,
              $e = !1,
              Ce = !1,
              Ee = !1,
              Se;
            Se = Symbol.for('react.module.reference');
            function qe(e) {
              return !!(
                typeof e == 'string' ||
                typeof e == 'function' ||
                e === i ||
                e === s ||
                Ee ||
                e === l ||
                e === m ||
                e === d ||
                Ce ||
                e === A ||
                be ||
                ye ||
                $e ||
                (typeof e == 'object' &&
                  e !== null &&
                  (e.$$typeof === E ||
                    e.$$typeof === y ||
                    e.$$typeof === p ||
                    e.$$typeof === g ||
                    e.$$typeof === u ||
                    e.$$typeof === Se ||
                    e.getModuleId !== void 0))
              );
            }
            function er(e, o, f) {
              var w = e.displayName;
              if (w) return w;
              var N = o.displayName || o.name || '';
              return N !== '' ? f + '(' + N + ')' : f;
            }
            function re(e) {
              return e.displayName || 'Context';
            }
            function H(e) {
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
                case m:
                  return 'Suspense';
                case d:
                  return 'SuspenseList';
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case g:
                    var o = e;
                    return re(o) + '.Consumer';
                  case p:
                    var f = e;
                    return re(f._context) + '.Provider';
                  case u:
                    return er(e, e.render, 'ForwardRef');
                  case y:
                    var w = e.displayName || null;
                    return w !== null ? w : H(e.type) || 'Memo';
                  case E: {
                    var N = e,
                      j = N._payload,
                      k = N._init;
                    try {
                      return H(k(j));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var Z = Object.assign,
              K = 0,
              Fe,
              Oe,
              ae,
              Re,
              We,
              ke,
              v;
            function h() {}
            h.__reactDisabledLog = !0;
            function b() {
              {
                if (K === 0) {
                  (Fe = console.log),
                    (Oe = console.info),
                    (ae = console.warn),
                    (Re = console.error),
                    (We = console.group),
                    (ke = console.groupCollapsed),
                    (v = console.groupEnd);
                  var e = { configurable: !0, enumerable: !0, value: h, writable: !0 };
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
                K++;
              }
            }
            function O() {
              {
                if ((K--, K === 0)) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: Z({}, e, { value: Fe }),
                    info: Z({}, e, { value: Oe }),
                    warn: Z({}, e, { value: ae }),
                    error: Z({}, e, { value: Re }),
                    group: Z({}, e, { value: We }),
                    groupCollapsed: Z({}, e, { value: ke }),
                    groupEnd: Z({}, e, { value: v }),
                  });
                }
                K < 0 &&
                  I('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var a = M.ReactCurrentDispatcher,
              T;
            function c(e, o, f) {
              {
                if (T === void 0)
                  try {
                    throw Error();
                  } catch (N) {
                    var w = N.stack.trim().match(/\n( *(at )?)/);
                    T = (w && w[1]) || '';
                  }
                return (
                  `
` +
                  T +
                  e
                );
              }
            }
            var G = !1,
              _;
            {
              var $ = typeof WeakMap == 'function' ? WeakMap : Map;
              _ = new $();
            }
            function C(e, o) {
              if (!e || G) return '';
              {
                var f = _.get(e);
                if (f !== void 0) return f;
              }
              var w;
              G = !0;
              var N = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var j;
              (j = a.current), (a.current = null), b();
              try {
                if (o) {
                  var k = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(k.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(k, []);
                    } catch (he) {
                      w = he;
                    }
                    Reflect.construct(e, [], k);
                  } else {
                    try {
                      k.call();
                    } catch (he) {
                      w = he;
                    }
                    e.call(k.prototype);
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
                      Q = w.stack.split(`
`),
                      V = R.length - 1,
                      Y = Q.length - 1;
                    V >= 1 && Y >= 0 && R[V] !== Q[Y];

                  )
                    Y--;
                  for (; V >= 1 && Y >= 0; V--, Y--)
                    if (R[V] !== Q[Y]) {
                      if (V !== 1 || Y !== 1)
                        do
                          if ((V--, Y--, Y < 0 || R[V] !== Q[Y])) {
                            var ie =
                              `
` + R[V].replace(' at new ', ' at ');
                            return (
                              e.displayName &&
                                ie.includes('<anonymous>') &&
                                (ie = ie.replace('<anonymous>', e.displayName)),
                              typeof e == 'function' && _.set(e, ie),
                              ie
                            );
                          }
                        while (V >= 1 && Y >= 0);
                      break;
                    }
                }
              } finally {
                (G = !1), (a.current = j), O(), (Error.prepareStackTrace = N);
              }
              var Te = e ? e.displayName || e.name : '',
                Yr = Te ? c(Te) : '';
              return typeof e == 'function' && _.set(e, Yr), Yr;
            }
            function ee(e, o, f) {
              return C(e, !1);
            }
            function de(e) {
              var o = e.prototype;
              return !!(o && o.isReactComponent);
            }
            function S(e, o, f) {
              if (e == null) return '';
              if (typeof e == 'function') return C(e, de(e));
              if (typeof e == 'string') return c(e);
              switch (e) {
                case m:
                  return c('Suspense');
                case d:
                  return c('SuspenseList');
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case u:
                    return ee(e.render);
                  case y:
                    return S(e.type, o, f);
                  case E: {
                    var w = e,
                      N = w._payload,
                      j = w._init;
                    try {
                      return S(j(N), o, f);
                    } catch {}
                  }
                }
              return '';
            }
            var W = Object.prototype.hasOwnProperty,
              D = {},
              z = M.ReactDebugCurrentFrame;
            function ce(e) {
              if (e) {
                var o = e._owner,
                  f = S(e.type, e._source, o ? o.type : null);
                z.setExtraStackFrame(f);
              } else z.setExtraStackFrame(null);
            }
            function U(e, o, f, w, N) {
              {
                var j = Function.call.bind(W);
                for (var k in e)
                  if (j(e, k)) {
                    var R = void 0;
                    try {
                      if (typeof e[k] != 'function') {
                        var Q = Error(
                          (w || 'React class') +
                            ': ' +
                            f +
                            ' type `' +
                            k +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[k] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        throw ((Q.name = 'Invariant Violation'), Q);
                      }
                      R = e[k](o, k, w, f, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (V) {
                      R = V;
                    }
                    R &&
                      !(R instanceof Error) &&
                      (ce(N),
                      I(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        w || 'React class',
                        f,
                        k,
                        typeof R
                      ),
                      ce(null)),
                      R instanceof Error &&
                        !(R.message in D) &&
                        ((D[R.message] = !0),
                        ce(N),
                        I('Failed %s type: %s', f, R.message),
                        ce(null));
                  }
              }
            }
            var Ae = Array.isArray;
            function pe(e) {
              return Ae(e);
            }
            function te(e) {
              {
                var o = typeof Symbol == 'function' && Symbol.toStringTag,
                  f = (o && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
                return f;
              }
            }
            function x(e) {
              try {
                return B(e), !1;
              } catch {
                return !0;
              }
            }
            function B(e) {
              return '' + e;
            }
            function De(e) {
              if (x(e))
                return (
                  I(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    te(e)
                  ),
                  B(e)
                );
            }
            var me = M.ReactCurrentOwner,
              ue = { key: !0, ref: !0, __self: !0, __source: !0 },
              Ir,
              Lr,
              rr;
            rr = {};
            function Ht(e) {
              if (W.call(e, 'ref')) {
                var o = Object.getOwnPropertyDescriptor(e, 'ref').get;
                if (o && o.isReactWarning) return !1;
              }
              return e.ref !== void 0;
            }
            function Jt(e) {
              if (W.call(e, 'key')) {
                var o = Object.getOwnPropertyDescriptor(e, 'key').get;
                if (o && o.isReactWarning) return !1;
              }
              return e.key !== void 0;
            }
            function Kt(e, o) {
              if (typeof e.ref == 'string' && me.current && o && me.current.stateNode !== o) {
                var f = H(me.current.type);
                rr[f] ||
                  (I(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    H(me.current.type),
                    e.ref
                  ),
                  (rr[f] = !0));
              }
            }
            function Zt(e, o) {
              {
                var f = function () {
                  Ir ||
                    ((Ir = !0),
                    I(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      o
                    ));
                };
                (f.isReactWarning = !0),
                  Object.defineProperty(e, 'key', { get: f, configurable: !0 });
              }
            }
            function Qt(e, o) {
              {
                var f = function () {
                  Lr ||
                    ((Lr = !0),
                    I(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      o
                    ));
                };
                (f.isReactWarning = !0),
                  Object.defineProperty(e, 'ref', { get: f, configurable: !0 });
              }
            }
            var qt = function (e, o, f, w, N, j, k) {
              var R = { $$typeof: t, type: e, key: o, ref: f, props: k, _owner: j };
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
                  value: N,
                }),
                Object.freeze && (Object.freeze(R.props), Object.freeze(R)),
                R
              );
            };
            function en(e, o, f, w, N) {
              {
                var j,
                  k = {},
                  R = null,
                  Q = null;
                f !== void 0 && (De(f), (R = '' + f)),
                  Jt(o) && (De(o.key), (R = '' + o.key)),
                  Ht(o) && ((Q = o.ref), Kt(o, N));
                for (j in o) W.call(o, j) && !ue.hasOwnProperty(j) && (k[j] = o[j]);
                if (e && e.defaultProps) {
                  var V = e.defaultProps;
                  for (j in V) k[j] === void 0 && (k[j] = V[j]);
                }
                if (R || Q) {
                  var Y = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e;
                  R && Zt(k, Y), Q && Qt(k, Y);
                }
                return qt(e, R, Q, N, w, me.current, k);
              }
            }
            var tr = M.ReactCurrentOwner,
              Br = M.ReactDebugCurrentFrame;
            function Ne(e) {
              if (e) {
                var o = e._owner,
                  f = S(e.type, e._source, o ? o.type : null);
                Br.setExtraStackFrame(f);
              } else Br.setExtraStackFrame(null);
            }
            var nr;
            nr = !1;
            function ar(e) {
              return typeof e == 'object' && e !== null && e.$$typeof === t;
            }
            function Mr() {
              {
                if (tr.current) {
                  var e = H(tr.current.type);
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
            function rn(e) {
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
            var $r = {};
            function tn(e) {
              {
                var o = Mr();
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
            function Wr(e, o) {
              {
                if (!e._store || e._store.validated || e.key != null) return;
                e._store.validated = !0;
                var f = tn(o);
                if ($r[f]) return;
                $r[f] = !0;
                var w = '';
                e &&
                  e._owner &&
                  e._owner !== tr.current &&
                  (w = ' It was passed a child from ' + H(e._owner.type) + '.'),
                  Ne(e),
                  I(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    f,
                    w
                  ),
                  Ne(null);
              }
            }
            function Vr(e, o) {
              {
                if (typeof e != 'object') return;
                if (pe(e))
                  for (var f = 0; f < e.length; f++) {
                    var w = e[f];
                    ar(w) && Wr(w, o);
                  }
                else if (ar(e)) e._store && (e._store.validated = !0);
                else if (e) {
                  var N = J(e);
                  if (typeof N == 'function' && N !== e.entries)
                    for (var j = N.call(e), k; !(k = j.next()).done; )
                      ar(k.value) && Wr(k.value, o);
                }
              }
            }
            function nn(e) {
              {
                var o = e.type;
                if (o == null || typeof o == 'string') return;
                var f;
                if (typeof o == 'function') f = o.propTypes;
                else if (typeof o == 'object' && (o.$$typeof === u || o.$$typeof === y))
                  f = o.propTypes;
                else return;
                if (f) {
                  var w = H(o);
                  U(f, e.props, 'prop', w, e);
                } else if (o.PropTypes !== void 0 && !nr) {
                  nr = !0;
                  var N = H(o);
                  I(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    N || 'Unknown'
                  );
                }
                typeof o.getDefaultProps == 'function' &&
                  !o.getDefaultProps.isReactClassApproved &&
                  I(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  );
              }
            }
            function an(e) {
              {
                for (var o = Object.keys(e.props), f = 0; f < o.length; f++) {
                  var w = o[f];
                  if (w !== 'children' && w !== 'key') {
                    Ne(e),
                      I(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        w
                      ),
                      Ne(null);
                    break;
                  }
                }
                e.ref !== null &&
                  (Ne(e), I('Invalid attribute `ref` supplied to `React.Fragment`.'), Ne(null));
              }
            }
            function zr(e, o, f, w, N, j) {
              {
                var k = qe(e);
                if (!k) {
                  var R = '';
                  (e === void 0 ||
                    (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                    (R +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var Q = rn(N);
                  Q ? (R += Q) : (R += Mr());
                  var V;
                  e === null
                    ? (V = 'null')
                    : pe(e)
                    ? (V = 'array')
                    : e !== void 0 && e.$$typeof === t
                    ? ((V = '<' + (H(e.type) || 'Unknown') + ' />'),
                      (R = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (V = typeof e),
                    I(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      V,
                      R
                    );
                }
                var Y = en(e, o, f, N, j);
                if (Y == null) return Y;
                if (k) {
                  var ie = o.children;
                  if (ie !== void 0)
                    if (w)
                      if (pe(ie)) {
                        for (var Te = 0; Te < ie.length; Te++) Vr(ie[Te], e);
                        Object.freeze && Object.freeze(ie);
                      } else
                        I(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                        );
                    else Vr(ie, e);
                }
                return e === i ? an(Y) : nn(Y), Y;
              }
            }
            function on(e, o, f) {
              return zr(e, o, f, !0);
            }
            function sn(e, o, f) {
              return zr(e, o, f, !1);
            }
            var ln = sn,
              cn = on;
            (Pe.Fragment = i), (Pe.jsx = ln), (Pe.jsxs = cn);
          })()),
      Pe
    );
  }
  process.env.NODE_ENV === 'production' ? (Xe.exports = Ur()) : (Xe.exports = Hr());
  var Jr = Xe.exports;
  function Kr(n) {
    if (n.sheet) return n.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === n) return document.styleSheets[t];
  }
  function Zr(n) {
    var t = document.createElement('style');
    return (
      t.setAttribute('data-emotion', n.key),
      n.nonce !== void 0 && t.setAttribute('nonce', n.nonce),
      t.appendChild(document.createTextNode('')),
      t
    );
  }
  var Qr = (function () {
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
          var l = Zr(this),
            s;
          this.tags.length === 0
            ? (s = this.before)
            : (s = this.tags[this.tags.length - 1].nextSibling),
            this.container.insertBefore(l, s),
            this.tags.push(l);
        }
        var p = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var g = Kr(p);
          try {
            var u = i.charCodeAt(1) === 105 && i.charCodeAt(0) === 64;
            g.insertRule(i, u ? 0 : g.cssRules.length);
          } catch (m) {
            process.env.NODE_ENV !== 'production' &&
              console.warn('There was a problem inserting the following rule: "' + i + '"', m);
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
  function qr(n) {
    function t(v, h, b, O, a) {
      for (
        var T = 0,
          c = 0,
          G = 0,
          _ = 0,
          $,
          C,
          ee = 0,
          de = 0,
          S,
          W = (S = $ = 0),
          D = 0,
          z = 0,
          ce = 0,
          U = 0,
          Ae = b.length,
          pe = Ae - 1,
          te,
          x = '',
          B = '',
          De = '',
          me = '',
          ue;
        D < Ae;

      ) {
        if (
          ((C = b.charCodeAt(D)),
          D === pe &&
            c + _ + G + T !== 0 &&
            (c !== 0 && (C = c === 47 ? 10 : 47), (_ = G = T = 0), Ae++, pe++),
          c + _ + G + T === 0)
        ) {
          if (D === pe && (0 < z && (x = x.replace(E, '')), 0 < x.trim().length)) {
            switch (C) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                x += b.charAt(D);
            }
            C = 59;
          }
          switch (C) {
            case 123:
              for (x = x.trim(), $ = x.charCodeAt(0), S = 1, U = ++D; D < Ae; ) {
                switch ((C = b.charCodeAt(D))) {
                  case 123:
                    S++;
                    break;
                  case 125:
                    S--;
                    break;
                  case 47:
                    switch ((C = b.charCodeAt(D + 1))) {
                      case 42:
                      case 47:
                        e: {
                          for (W = D + 1; W < pe; ++W)
                            switch (b.charCodeAt(W)) {
                              case 47:
                                if (C === 42 && b.charCodeAt(W - 1) === 42 && D + 2 !== W) {
                                  D = W + 1;
                                  break e;
                                }
                                break;
                              case 10:
                                if (C === 47) {
                                  D = W + 1;
                                  break e;
                                }
                            }
                          D = W;
                        }
                    }
                    break;
                  case 91:
                    C++;
                  case 40:
                    C++;
                  case 34:
                  case 39:
                    for (; D++ < pe && b.charCodeAt(D) !== C; );
                }
                if (S === 0) break;
                D++;
              }
              switch (
                ((S = b.substring(U, D)),
                $ === 0 && ($ = (x = x.replace(y, '').trim()).charCodeAt(0)),
                $)
              ) {
                case 64:
                  switch ((0 < z && (x = x.replace(E, '')), (C = x.charCodeAt(1)), C)) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      z = h;
                      break;
                    default:
                      z = Fe;
                  }
                  if (
                    ((S = t(h, z, S, C, a + 1)),
                    (U = S.length),
                    0 < ae &&
                      ((z = r(Fe, x, ce)),
                      (ue = g(3, S, z, h, H, re, U, C, a, O)),
                      (x = z.join('')),
                      ue !== void 0 && (U = (S = ue.trim()).length) === 0 && ((C = 0), (S = ''))),
                    0 < U)
                  )
                    switch (C) {
                      case 115:
                        x = x.replace($e, p);
                      case 100:
                      case 109:
                      case 45:
                        S = x + '{' + S + '}';
                        break;
                      case 107:
                        (x = x.replace(I, '$1 $2')),
                          (S = x + '{' + S + '}'),
                          (S =
                            K === 1 || (K === 2 && s('@' + S, 3))
                              ? '@-webkit-' + S + '@' + S
                              : '@' + S);
                        break;
                      default:
                        (S = x + S), O === 112 && (S = ((B += S), ''));
                    }
                  else S = '';
                  break;
                default:
                  S = t(h, r(h, x, ce), S, O, a + 1);
              }
              (De += S), (S = ce = z = W = $ = 0), (x = ''), (C = b.charCodeAt(++D));
              break;
            case 125:
            case 59:
              if (((x = (0 < z ? x.replace(E, '') : x).trim()), 1 < (U = x.length)))
                switch (
                  (W === 0 &&
                    (($ = x.charCodeAt(0)), $ === 45 || (96 < $ && 123 > $)) &&
                    (U = (x = x.replace(' ', ':')).length),
                  0 < ae &&
                    (ue = g(1, x, h, v, H, re, B.length, O, a, O)) !== void 0 &&
                    (U = (x = ue.trim()).length) === 0 &&
                    (x = '\0\0'),
                  ($ = x.charCodeAt(0)),
                  (C = x.charCodeAt(1)),
                  $)
                ) {
                  case 0:
                    break;
                  case 64:
                    if (C === 105 || C === 99) {
                      me += x + b.charAt(D);
                      break;
                    }
                  default:
                    x.charCodeAt(U - 1) !== 58 && (B += l(x, $, C, x.charCodeAt(2)));
                }
              (ce = z = W = $ = 0), (x = ''), (C = b.charCodeAt(++D));
          }
        }
        switch (C) {
          case 13:
          case 10:
            c === 47 ? (c = 0) : 1 + $ === 0 && O !== 107 && 0 < x.length && ((z = 1), (x += '\0')),
              0 < ae * We && g(0, x, h, v, H, re, B.length, O, a, O),
              (re = 1),
              H++;
            break;
          case 59:
          case 125:
            if (c + _ + G + T === 0) {
              re++;
              break;
            }
          default:
            switch ((re++, (te = b.charAt(D)), C)) {
              case 9:
              case 32:
                if (_ + T + c === 0)
                  switch (ee) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      te = '';
                      break;
                    default:
                      C !== 32 && (te = ' ');
                  }
                break;
              case 0:
                te = '\\0';
                break;
              case 12:
                te = '\\f';
                break;
              case 11:
                te = '\\v';
                break;
              case 38:
                _ + c + T === 0 && ((z = ce = 1), (te = '\f' + te));
                break;
              case 108:
                if (_ + c + T + Z === 0 && 0 < W)
                  switch (D - W) {
                    case 2:
                      ee === 112 && b.charCodeAt(D - 3) === 58 && (Z = ee);
                    case 8:
                      de === 111 && (Z = de);
                  }
                break;
              case 58:
                _ + c + T === 0 && (W = D);
                break;
              case 44:
                c + G + _ + T === 0 && ((z = 1), (te += '\r'));
                break;
              case 34:
              case 39:
                c === 0 && (_ = _ === C ? 0 : _ === 0 ? C : _);
                break;
              case 91:
                _ + c + G === 0 && T++;
                break;
              case 93:
                _ + c + G === 0 && T--;
                break;
              case 41:
                _ + c + T === 0 && G--;
                break;
              case 40:
                if (_ + c + T === 0) {
                  if ($ === 0)
                    switch (2 * ee + 3 * de) {
                      case 533:
                        break;
                      default:
                        $ = 1;
                    }
                  G++;
                }
                break;
              case 64:
                c + G + _ + T + W + S === 0 && (S = 1);
                break;
              case 42:
              case 47:
                if (!(0 < _ + T + G))
                  switch (c) {
                    case 0:
                      switch (2 * C + 3 * b.charCodeAt(D + 1)) {
                        case 235:
                          c = 47;
                          break;
                        case 220:
                          (U = D), (c = 42);
                      }
                      break;
                    case 42:
                      C === 47 &&
                        ee === 42 &&
                        U + 2 !== D &&
                        (b.charCodeAt(U + 2) === 33 && (B += b.substring(U, D + 1)),
                        (te = ''),
                        (c = 0));
                  }
            }
            c === 0 && (x += te);
        }
        (de = ee), (ee = C), D++;
      }
      if (((U = B.length), 0 < U)) {
        if (
          ((z = h),
          0 < ae &&
            ((ue = g(2, B, z, v, H, re, U, O, a, O)), ue !== void 0 && (B = ue).length === 0))
        )
          return me + B + De;
        if (((B = z.join(',') + '{' + B + '}'), K * Z !== 0)) {
          switch ((K !== 2 || s(B, 2) || (Z = 0), Z)) {
            case 111:
              B = B.replace(be, ':-moz-$1') + B;
              break;
            case 112:
              B =
                B.replace(q, '::-webkit-input-$1') +
                B.replace(q, '::-moz-$1') +
                B.replace(q, ':-ms-input-$1') +
                B;
          }
          Z = 0;
        }
      }
      return me + B + De;
    }
    function r(v, h, b) {
      var O = h.trim().split(J);
      h = O;
      var a = O.length,
        T = v.length;
      switch (T) {
        case 0:
        case 1:
          var c = 0;
          for (v = T === 0 ? '' : v[0] + ' '; c < a; ++c) h[c] = i(v, h[c], b).trim();
          break;
        default:
          var G = (c = 0);
          for (h = []; c < a; ++c)
            for (var _ = 0; _ < T; ++_) h[G++] = i(v[_] + ' ', O[c], b).trim();
      }
      return h;
    }
    function i(v, h, b) {
      var O = h.charCodeAt(0);
      switch ((33 > O && (O = (h = h.trim()).charCodeAt(0)), O)) {
        case 38:
          return h.replace(M, '$1' + v.trim());
        case 58:
          return v.trim() + h.replace(M, '$1' + v.trim());
        default:
          if (0 < 1 * b && 0 < h.indexOf('\f'))
            return h.replace(M, (v.charCodeAt(0) === 58 ? '' : '$1') + v.trim());
      }
      return v + h;
    }
    function l(v, h, b, O) {
      var a = v + ';',
        T = 2 * h + 3 * b + 4 * O;
      if (T === 944) {
        v = a.indexOf(':', 9) + 1;
        var c = a.substring(v, a.length - 1).trim();
        return (
          (c = a.substring(0, v).trim() + c + ';'),
          K === 1 || (K === 2 && s(c, 1)) ? '-webkit-' + c + c : c
        );
      }
      if (K === 0 || (K === 2 && !s(a, 1))) return a;
      switch (T) {
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
          if (0 < a.indexOf('image-set(', 11)) return a.replace(er, '$1-webkit-$2') + a;
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
          return P.test(a) ? a.replace(A, ':-webkit-') + a.replace(A, ':-moz-') + a : a;
        case 1e3:
          switch (
            ((c = a.substring(13).trim()),
            (h = c.indexOf('-') + 1),
            c.charCodeAt(0) + c.charCodeAt(h))
          ) {
            case 226:
              c = a.replace(ye, 'tb');
              break;
            case 232:
              c = a.replace(ye, 'tb-rl');
              break;
            case 220:
              c = a.replace(ye, 'lr');
              break;
            default:
              return a;
          }
          return '-webkit-' + a + '-ms-' + c + a;
        case 1017:
          if (a.indexOf('sticky', 9) === -1) break;
        case 975:
          switch (
            ((h = (a = v).length - 10),
            (c = (a.charCodeAt(h) === 33 ? a.substring(0, h) : a)
              .substring(v.indexOf(':', 7) + 1)
              .trim()),
            (T = c.charCodeAt(0) + (c.charCodeAt(7) | 0)))
          ) {
            case 203:
              if (111 > c.charCodeAt(8)) break;
            case 115:
              a = a.replace(c, '-webkit-' + c) + ';' + a;
              break;
            case 207:
            case 102:
              a =
                a.replace(c, '-webkit-' + (102 < T ? 'inline-' : '') + 'box') +
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
                return '-webkit-' + a + '-ms-flex-item-' + a.replace(Ee, '') + a;
              default:
                return (
                  '-webkit-' +
                  a +
                  '-ms-flex-line-pack' +
                  a.replace('align-content', '').replace(Ee, '') +
                  a
                );
            }
          break;
        case 973:
        case 989:
          if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122) break;
        case 931:
        case 953:
          if (qe.test(v) === !0)
            return (c = v.substring(v.indexOf(':') + 1)).charCodeAt(0) === 115
              ? l(v.replace('stretch', 'fill-available'), h, b, O).replace(
                  ':fill-available',
                  ':stretch'
                )
              : a.replace(c, '-webkit-' + c) + a.replace(c, '-moz-' + c.replace('fill-', '')) + a;
          break;
        case 962:
          if (
            ((a = '-webkit-' + a + (a.charCodeAt(5) === 102 ? '-ms-' + a : '') + a),
            b + O === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf('transform', 10))
          )
            return a.substring(0, a.indexOf(';', 27) + 1).replace(X, '$1-webkit-$2') + a;
      }
      return a;
    }
    function s(v, h) {
      var b = v.indexOf(h === 1 ? ':' : '{'),
        O = v.substring(0, h !== 3 ? b : 10);
      return (b = v.substring(b + 1, v.length - 1)), Re(h !== 2 ? O : O.replace(Se, '$1'), b, h);
    }
    function p(v, h) {
      var b = l(h, h.charCodeAt(0), h.charCodeAt(1), h.charCodeAt(2));
      return b !== h + ';' ? b.replace(Ce, ' or ($1)').substring(4) : '(' + h + ')';
    }
    function g(v, h, b, O, a, T, c, G, _, $) {
      for (var C = 0, ee = h, de; C < ae; ++C)
        switch ((de = Oe[C].call(d, v, ee, b, O, a, T, c, G, _, $))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break;
          default:
            ee = de;
        }
      if (ee !== h) return ee;
    }
    function u(v) {
      switch (v) {
        case void 0:
        case null:
          ae = Oe.length = 0;
          break;
        default:
          if (typeof v == 'function') Oe[ae++] = v;
          else if (typeof v == 'object') for (var h = 0, b = v.length; h < b; ++h) u(v[h]);
          else We = !!v | 0;
      }
      return u;
    }
    function m(v) {
      return (
        (v = v.prefix),
        v !== void 0 &&
          ((Re = null), v ? (typeof v != 'function' ? (K = 1) : ((K = 2), (Re = v))) : (K = 0)),
        m
      );
    }
    function d(v, h) {
      var b = v;
      if ((33 > b.charCodeAt(0) && (b = b.trim()), (ke = b), (b = [ke]), 0 < ae)) {
        var O = g(-1, h, b, b, H, re, 0, 0, 0, 0);
        O !== void 0 && typeof O == 'string' && (h = O);
      }
      var a = t(Fe, b, h, 0, 0);
      return (
        0 < ae && ((O = g(-2, a, b, b, H, re, a.length, 0, 0, 0)), O !== void 0 && (a = O)),
        (ke = ''),
        (Z = 0),
        (re = H = 1),
        a
      );
    }
    var y = /^\0+/g,
      E = /[\0\r\f]/g,
      A = /: */g,
      P = /zoo|gra/,
      X = /([,: ])(transform)/g,
      J = /,\r+?/g,
      M = /([\t\r\n ])*\f?&/g,
      I = /@(k\w+)\s*(\S*)\s*/,
      q = /::(place)/g,
      be = /:(read-only)/g,
      ye = /[svh]\w+-[tblr]{2}/,
      $e = /\(\s*(.*)\s*\)/g,
      Ce = /([\s\S]*?);/g,
      Ee = /-self|flex-/g,
      Se = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      qe = /stretch|:\s*\w+\-(?:conte|avail)/,
      er = /([^-])(image-set\()/,
      re = 1,
      H = 1,
      Z = 0,
      K = 1,
      Fe = [],
      Oe = [],
      ae = 0,
      Re = null,
      We = 0,
      ke = '';
    return (d.use = u), (d.set = m), n !== void 0 && m(n), d;
  }
  var Ge = '/*|*/',
    et = Ge + '}';
  function rt(n) {
    n && je.current.insert(n + '}');
  }
  var je = { current: null },
    tt = function (t, r, i, l, s, p, g, u, m, d) {
      switch (t) {
        case 1: {
          switch (r.charCodeAt(0)) {
            case 64:
              return je.current.insert(r + ';'), '';
            case 108:
              if (r.charCodeAt(2) === 98) return '';
          }
          break;
        }
        case 2: {
          if (u === 0) return r + Ge;
          break;
        }
        case 3:
          switch (u) {
            case 102:
            case 112:
              return je.current.insert(i[0] + r), '';
            default:
              return r + (d === 0 ? Ge : '');
          }
        case -2:
          r.split(et).forEach(rt);
      }
    },
    sr = function (t) {
      t === void 0 && (t = {});
      var r = t.key || 'css',
        i;
      t.prefix !== void 0 && (i = { prefix: t.prefix });
      var l = new qr(i);
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
          var A = E.getAttribute('data-emotion-' + r);
          A.split(' ').forEach(function (P) {
            s[P] = !0;
          }),
            E.parentNode !== p && p.appendChild(E);
        });
      }
      var u;
      if (
        (l.use(t.stylisPlugins)(tt),
        (u = function (A, P, X, J) {
          var M = P.name;
          if (((je.current = X), process.env.NODE_ENV !== 'production' && P.map !== void 0)) {
            var I = P.map;
            je.current = {
              insert: function (be) {
                X.insert(be + I);
              },
            };
          }
          l(A, P.styles), J && (y.inserted[M] = !0);
        }),
        process.env.NODE_ENV !== 'production')
      ) {
        var m = /\/\*/g,
          d = /\*\//g;
        l.use(function (E, A) {
          switch (E) {
            case -1: {
              for (; m.test(A); ) {
                if (((d.lastIndex = m.lastIndex), d.test(A))) {
                  m.lastIndex = d.lastIndex;
                  continue;
                }
                throw new Error(
                  'Your styles have an unterminated comment ("/*" without corresponding "*/").'
                );
              }
              m.lastIndex = 0;
              break;
            }
          }
        }),
          l.use(function (E, A, P) {
            switch (E) {
              case -1: {
                var X =
                    'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
                  J = A.match(/(:first|:nth|:nth-last)-child/g);
                J &&
                  y.compat !== !0 &&
                  J.forEach(function (M) {
                    var I = new RegExp(M + '.*\\/\\* ' + X + ' \\*\\/'),
                      q = I.test(A);
                    M &&
                      !q &&
                      console.error(
                        'The pseudo class "' +
                          M +
                          '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                          M.split('-child')[0] +
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
        sheet: new Qr({ key: r, container: p, nonce: t.nonce, speedy: t.speedy }),
        nonce: t.nonce,
        inserted: s,
        registered: {},
        insert: u,
      };
      return y;
    },
    nt = !0;
  function Ue(n, t, r) {
    var i = '';
    return (
      r.split(' ').forEach(function (l) {
        n[l] !== void 0 ? t.push(n[l]) : (i += l + ' ');
      }),
      i
    );
  }
  var lr = function (t, r, i) {
    var l = t.key + '-' + r.name;
    if (
      ((i === !1 || nt === !1) && t.registered[l] === void 0 && (t.registered[l] = r.styles),
      t.inserted[r.name] === void 0)
    ) {
      var s = r;
      do t.insert('.' + l, s, t.sheet, !0), (s = s.next);
      while (s !== void 0);
    }
  };
  function at(n) {
    for (var t = 0, r, i = 0, l = n.length; l >= 4; ++i, l -= 4)
      (r =
        (n.charCodeAt(i) & 255) |
        ((n.charCodeAt(++i) & 255) << 8) |
        ((n.charCodeAt(++i) & 255) << 16) |
        ((n.charCodeAt(++i) & 255) << 24)),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
        (r ^= r >>> 24),
        (t =
          ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (l) {
      case 3:
        t ^= (n.charCodeAt(i + 2) & 255) << 16;
      case 2:
        t ^= (n.charCodeAt(i + 1) & 255) << 8;
      case 1:
        (t ^= n.charCodeAt(i) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var it = {
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
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  };
  function ot(n) {
    var t = {};
    return function (r) {
      return t[r] === void 0 && (t[r] = n(r)), t[r];
    };
  }
  var cr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
    st =
      "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
    lt = /[A-Z]|^ms/g,
    ur = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    He = function (t) {
      return t.charCodeAt(1) === 45;
    },
    fr = function (t) {
      return t != null && typeof t != 'boolean';
    },
    Je = ot(function (n) {
      return He(n) ? n : n.replace(lt, '-$&').toLowerCase();
    }),
    Ve = function (t, r) {
      switch (t) {
        case 'animation':
        case 'animationName':
          if (typeof r == 'string')
            return r.replace(ur, function (i, l, s) {
              return (oe = { name: l, styles: s, next: oe }), l;
            });
      }
      return it[t] !== 1 && !He(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r;
    };
  if (process.env.NODE_ENV !== 'production') {
    var ct = /(attr|calc|counters?|url)\(/,
      ut = [
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
      ft = Ve,
      dt = /^-ms-/,
      pt = /-(.)/g,
      dr = {};
    Ve = function (t, r) {
      t === 'content' &&
        (typeof r != 'string' ||
          (ut.indexOf(r) === -1 &&
            !ct.test(r) &&
            (r.charAt(0) !== r.charAt(r.length - 1) ||
              (r.charAt(0) !== '"' && r.charAt(0) !== "'")))) &&
        console.error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            r +
            '"\'`'
        );
      var i = ft(t, r);
      return (
        i !== '' &&
          !He(t) &&
          t.indexOf('-') !== -1 &&
          dr[t] === void 0 &&
          ((dr[t] = !0),
          console.error(
            'Using kebab-case for css properties in objects is not supported. Did you mean ' +
              t.replace(dt, 'ms-').replace(pt, function (l, s) {
                return s.toUpperCase();
              }) +
              '?'
          )),
        i
      );
    };
  }
  var pr = !0;
  function Ie(n, t, r, i) {
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
        if (r.anim === 1) return (oe = { name: r.name, styles: r.styles, next: oe }), r.name;
        if (r.styles !== void 0) {
          var l = r.next;
          if (l !== void 0)
            for (; l !== void 0; )
              (oe = { name: l.name, styles: l.styles, next: oe }), (l = l.next);
          var s = r.styles + ';';
          return process.env.NODE_ENV !== 'production' && r.map !== void 0 && (s += r.map), s;
        }
        return mt(n, t, r);
      }
      case 'function': {
        if (n !== void 0) {
          var p = oe,
            g = r(n);
          return (oe = p), Ie(n, t, g, i);
        } else process.env.NODE_ENV !== 'production' && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        break;
      }
      case 'string':
        if (process.env.NODE_ENV !== 'production') {
          var u = [],
            m = r.replace(ur, function (y, E, A) {
              var P = 'animation' + u.length;
              return (
                u.push(
                  'const ' + P + ' = keyframes`' + A.replace(/^@keyframes animation-\w+/, '') + '`'
                ),
                '${' + P + '}'
              );
            });
          u.length &&
            console.error(
              '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
                [].concat(u, ['`' + m + '`']).join(`
`) +
                `

You should wrap it with \`css\` like this:

` +
                ('css`' + m + '`')
            );
        }
        break;
    }
    if (t == null) return r;
    var d = t[r];
    return (
      process.env.NODE_ENV !== 'production' &&
        i &&
        pr &&
        d !== void 0 &&
        (console.error(
          'Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion'
        ),
        (pr = !1)),
      d !== void 0 && !i ? d : r
    );
  }
  function mt(n, t, r) {
    var i = '';
    if (Array.isArray(r)) for (var l = 0; l < r.length; l++) i += Ie(n, t, r[l], !1);
    else
      for (var s in r) {
        var p = r[s];
        if (typeof p != 'object')
          t != null && t[p] !== void 0
            ? (i += s + '{' + t[p] + '}')
            : fr(p) && (i += Je(s) + ':' + Ve(s, p) + ';');
        else {
          if (s === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
            throw new Error(
              'Component selectors can only be used in conjunction with babel-plugin-emotion.'
            );
          if (Array.isArray(p) && typeof p[0] == 'string' && (t == null || t[p[0]] === void 0))
            for (var g = 0; g < p.length; g++) fr(p[g]) && (i += Je(s) + ':' + Ve(s, p[g]) + ';');
          else {
            var u = Ie(n, t, p, !1);
            switch (s) {
              case 'animation':
              case 'animationName': {
                i += Je(s) + ':' + u + ';';
                break;
              }
              default:
                process.env.NODE_ENV !== 'production' && s === 'undefined' && console.error(st),
                  (i += s + '{' + u + '}');
            }
          }
        }
      }
    return i;
  }
  var mr = /label:\s*([^\s;\n{]+)\s*;/g,
    hr;
  process.env.NODE_ENV !== 'production' &&
    (hr = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
  var oe,
    xe = function (t, r, i) {
      if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
        return t[0];
      var l = !0,
        s = '';
      oe = void 0;
      var p = t[0];
      p == null || p.raw === void 0
        ? ((l = !1), (s += Ie(i, r, p, !1)))
        : (process.env.NODE_ENV !== 'production' && p[0] === void 0 && console.error(cr),
          (s += p[0]));
      for (var g = 1; g < t.length; g++)
        (s += Ie(i, r, t[g], s.charCodeAt(s.length - 1) === 46)),
          l &&
            (process.env.NODE_ENV !== 'production' && p[g] === void 0 && console.error(cr),
            (s += p[g]));
      var u;
      process.env.NODE_ENV !== 'production' &&
        (s = s.replace(hr, function (E) {
          return (u = E), '';
        })),
        (mr.lastIndex = 0);
      for (var m = '', d; (d = mr.exec(s)) !== null; ) m += '-' + d[1];
      var y = at(s) + m;
      return process.env.NODE_ENV !== 'production'
        ? {
            name: y,
            styles: s,
            map: u,
            next: oe,
            toString: function () {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            },
          }
        : { name: y, styles: s, next: oe };
    },
    ht = Object.prototype.hasOwnProperty,
    gr = L.createContext(typeof HTMLElement < 'u' ? sr() : null),
    gt = L.createContext({});
  gr.Provider;
  var vt = function (t) {
      var r = function (l, s) {
        return L.createElement(gr.Consumer, null, function (p) {
          return t(l, p, s);
        });
      };
      return L.forwardRef(r);
    },
    vr = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
    br = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
    bt = function () {
      return null;
    },
    yr = function (t, r, i, l) {
      var s = i === null ? r.css : r.css(i);
      typeof s == 'string' && t.registered[s] !== void 0 && (s = t.registered[s]);
      var p = r[vr],
        g = [s],
        u = '';
      typeof r.className == 'string'
        ? (u = Ue(t.registered, g, r.className))
        : r.className != null && (u = r.className + ' ');
      var m = xe(g);
      if (process.env.NODE_ENV !== 'production' && m.name.indexOf('-') === -1) {
        var d = r[br];
        d && (m = xe([m, 'label:' + d + ';']));
      }
      lr(t, m, typeof p == 'string'), (u += t.key + '-' + m.name);
      var y = {};
      for (var E in r)
        ht.call(r, E) &&
          E !== 'css' &&
          E !== vr &&
          (process.env.NODE_ENV === 'production' || E !== br) &&
          (y[E] = r[E]);
      (y.ref = l), (y.className = u);
      var A = L.createElement(p, y),
        P = L.createElement(bt, null);
      return L.createElement(L.Fragment, null, P, A);
    },
    yt = vt(function (n, t, r) {
      return typeof n.css == 'function'
        ? L.createElement(gt.Consumer, null, function (i) {
            return yr(t, n, i, r);
          })
        : yr(t, n, null, r);
    });
  process.env.NODE_ENV !== 'production' && (yt.displayName = 'EmotionCssPropInternal');
  function Et() {
    for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
    return xe(t);
  }
  var Ke = { exports: {} },
    xt = Ke.exports;
  Object.defineProperty(xt, '__esModule', { value: !0 }),
    (Ke.exports = {
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
    });
  var wt = Ke.exports;
  const F = Gr(wt);
  function Er(n, t) {
    if (n.inserted[t.name] === void 0) return n.insert('', t, n.sheet, !0);
  }
  function xr(n, t, r) {
    var i = [],
      l = Ue(n, i, r);
    return i.length < 2 ? r : l + t(i);
  }
  var Ct = function (t) {
      var r = sr(t);
      (r.sheet.speedy = function (g) {
        if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
          throw new Error('speedy must be changed before any rules are inserted');
        this.isSpeedy = g;
      }),
        (r.compat = !0);
      var i = function () {
          for (var u = arguments.length, m = new Array(u), d = 0; d < u; d++) m[d] = arguments[d];
          var y = xe(m, r.registered, void 0);
          return lr(r, y, !1), r.key + '-' + y.name;
        },
        l = function () {
          for (var u = arguments.length, m = new Array(u), d = 0; d < u; d++) m[d] = arguments[d];
          var y = xe(m, r.registered),
            E = 'animation-' + y.name;
          return Er(r, { name: y.name, styles: '@keyframes ' + E + '{' + y.styles + '}' }), E;
        },
        s = function () {
          for (var u = arguments.length, m = new Array(u), d = 0; d < u; d++) m[d] = arguments[d];
          var y = xe(m, r.registered);
          Er(r, y);
        },
        p = function () {
          for (var u = arguments.length, m = new Array(u), d = 0; d < u; d++) m[d] = arguments[d];
          return xr(r.registered, i, St(m));
        };
      return {
        css: i,
        cx: p,
        injectGlobal: s,
        keyframes: l,
        hydrate: function (u) {
          u.forEach(function (m) {
            r.inserted[m] = !0;
          });
        },
        flush: function () {
          (r.registered = {}), (r.inserted = {}), r.sheet.flush();
        },
        sheet: r.sheet,
        cache: r,
        getRegisteredStyles: Ue.bind(null, r.registered),
        merge: xr.bind(null, r.registered, i),
      };
    },
    St = function n(t) {
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
    wr = Ct(),
    we = wr.cx,
    fe = wr.css,
    Ft = Object.defineProperty,
    Ot = Object.defineProperties,
    Rt = Object.getOwnPropertyDescriptors,
    ze = Object.getOwnPropertySymbols,
    Cr = Object.prototype.hasOwnProperty,
    Sr = Object.prototype.propertyIsEnumerable,
    Fr = (n, t, r) =>
      t in n ? Ft(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
    le = (n, t) => {
      for (var r in t || (t = {})) Cr.call(t, r) && Fr(n, r, t[r]);
      if (ze) for (var r of ze(t)) Sr.call(t, r) && Fr(n, r, t[r]);
      return n;
    },
    ge = (n, t) => Ot(n, Rt(t)),
    Le = (n, t) => {
      var r = {};
      for (var i in n) Cr.call(n, i) && t.indexOf(i) < 0 && (r[i] = n[i]);
      if (n != null && ze) for (var i of ze(n)) t.indexOf(i) < 0 && Sr.call(n, i) && (r[i] = n[i]);
      return r;
    };
  Et`
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
  var kt = {
    none: 0,
    spacing2Xs: F.spacing2Xs,
    spacingXs: F.spacingXs,
    spacingS: F.spacingS,
    spacingM: F.spacingM,
    spacingL: F.spacingL,
    spacingXl: F.spacingXl,
    spacing2Xl: F.spacing2Xl,
    spacing3Xl: F.spacing3Xl,
    spacing4Xl: F.spacing4Xl,
  };
  function ne(n) {
    return kt[n];
  }
  function At(n) {
    return Object.assign(
      {},
      n.margin ? { margin: ne(n.margin) } : null,
      n.marginLeft ? { marginLeft: ne(n.marginLeft) } : null,
      n.marginRight ? { marginRight: ne(n.marginRight) } : null,
      n.marginTop ? { marginTop: ne(n.marginTop) } : null,
      n.marginBottom ? { marginBottom: ne(n.marginBottom) } : null,
      n.padding ? { padding: ne(n.padding) } : null,
      n.paddingLeft ? { paddingLeft: ne(n.paddingLeft) } : null,
      n.paddingRight ? { paddingRight: ne(n.paddingRight) } : null,
      n.paddingTop ? { paddingTop: ne(n.paddingTop) } : null,
      n.paddingBottom ? { paddingBottom: ne(n.paddingBottom) } : null
    );
  }
  var Dt = 'div';
  function Be(n) {
    let t = n,
      {
        display: r,
        className: i,
        margin: l,
        marginBottom: s,
        marginLeft: p,
        marginRight: g,
        marginTop: u,
        padding: m,
        paddingBottom: d,
        paddingLeft: y,
        paddingRight: E,
        paddingTop: A,
        testId: P,
        as: X = Dt,
      } = t,
      J = Le(t, [
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
      boxProps: le(
        {
          className: we(
            fe({ display: r }),
            fe(
              le(
                {},
                At({
                  margin: l,
                  marginBottom: s,
                  marginLeft: p,
                  marginRight: g,
                  marginTop: u,
                  padding: m,
                  paddingBottom: d,
                  paddingLeft: y,
                  paddingRight: E,
                  paddingTop: A,
                })
              )
            ),
            i
          ),
          ['data-test-id']: P,
        },
        J
      ),
      Element: X,
    };
  }
  function Or(n, t) {
    let { boxProps: r, Element: i } = Be(n);
    return se.createElement(i, ge(le({}, r), { ref: t }), n.children);
  }
  (Or.displayName = 'Box'), se.forwardRef(Or);
  var Nt = 'div';
  function Rr(n, t) {
    var r = n,
      {
        isInline: i,
        alignItems: l,
        alignSelf: s,
        alignContent: p,
        flex: g,
        flexBasis: u,
        flexShrink: m,
        flexDirection: d,
        flexGrow: y,
        flexWrap: E,
        fullHeight: A,
        fullWidth: P,
        gap: X,
        justifyContent: J,
        justifyItems: M,
        justifySelf: I,
        order: q,
        children: be,
        as: ye,
      } = r,
      $e = Le(r, [
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
      Ce;
    let { boxProps: Ee, Element: Se } = Be(ge(le({}, $e), { as: ye || Nt }));
    return se.createElement(
      Se,
      ge(le({}, Ee), {
        className: we(
          fe({
            display: i ? 'inline-flex' : 'flex',
            width: P ? '100%' : void 0,
            height: A ? '100%' : void 0,
            flex: g,
            flexBasis: u,
            flexShrink: m,
            flexDirection: d,
            gap: (Ce = F[X]) != null ? Ce : X,
            justifyContent: J,
            justifyItems: M,
            justifySelf: I,
            alignItems: l,
            alignSelf: s,
            alignContent: p,
            order: q,
            flexWrap: E,
            flexGrow: y,
          }),
          Ee.className
        ),
        ref: t,
      }),
      be
    );
  }
  Rr.displayName = 'Flex';
  var kr = se.forwardRef(Rr),
    Tt = 'div';
  function Ar(n, t) {
    var r = n,
      {
        alignContent: i,
        children: l,
        columnGap: s = 'spacingM',
        columns: p = 'auto',
        flow: g,
        isInline: u,
        justifyContent: m,
        rowGap: d = 'none',
        rows: y = 'auto',
        as: E,
      } = r,
      A = Le(r, [
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
      X;
    let J = (q) => (typeof q == 'number' ? `repeat(${q}, minmax(0, 1fr))` : q),
      { boxProps: M, Element: I } = Be(ge(le({}, A), { as: E || Tt }));
    return se.createElement(
      I,
      ge(le({}, M), {
        className: we(
          fe({
            display: u ? 'inline-grid' : 'grid',
            gridTemplateColumns: J(p),
            gridTemplateRows: J(y),
            flow: g,
            justifyContent: m,
            alignContent: i,
            columnGap: (P = ne(s)) != null ? P : 0,
            rowGap: (X = ne(d)) != null ? X : 0,
          }),
          M.className
        ),
        ref: t,
      }),
      l
    );
  }
  Ar.displayName = 'Grid';
  var _t = se.forwardRef(Ar);
  function Dr(n, t) {
    var r = n,
      { children: i, columnStart: l, columnEnd: s, rowStart: p, rowEnd: g, area: u, order: m } = r,
      d = Le(r, ['children', 'columnStart', 'columnEnd', 'rowStart', 'rowEnd', 'area', 'order']);
    let y = u || [p || 'auto', l || 'auto', g || 'auto', s || 'auto'].join(' / '),
      { boxProps: E, Element: A } = Be(d);
    return se.createElement(
      A,
      ge(le({}, E), { className: we(fe({ gridArea: y, order: m }), E.className), ref: t }),
      i
    );
  }
  Dr.displayName = 'GridItem';
  var Pt = se.forwardRef(Dr),
    jt = _t;
  jt.Item = Pt;
  var It = 'div';
  function Nr(n, t) {
    var r = n,
      {
        flexDirection: i = 'row',
        alignItems: l = 'center',
        isInline: s = !1,
        spacing: p = 'spacingM',
        children: g,
        as: u,
      } = r,
      m = Le(r, ['flexDirection', 'alignItems', 'isInline', 'spacing', 'children', 'as']);
    let { boxProps: d, Element: y } = Be(ge(le({}, m), { as: u || It }));
    return se.createElement(
      kr,
      ge(le({}, d), {
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
  (Nr.displayName = 'Stack'), se.forwardRef(Nr);
  var Lt = Object.defineProperty,
    Bt = Object.defineProperties,
    Mt = Object.getOwnPropertyDescriptors,
    Ye = Object.getOwnPropertySymbols,
    Tr = Object.prototype.hasOwnProperty,
    _r = Object.prototype.propertyIsEnumerable,
    Pr = (n, t, r) =>
      t in n ? Lt(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
    Me = (n, t) => {
      for (var r in t || (t = {})) Tr.call(t, r) && Pr(n, r, t[r]);
      if (Ye) for (var r of Ye(t)) _r.call(t, r) && Pr(n, r, t[r]);
      return n;
    },
    Ze = (n, t) => Bt(n, Mt(t)),
    $t = (n, t) => {
      var r = {};
      for (var i in n) Tr.call(n, i) && t.indexOf(i) < 0 && (r[i] = n[i]);
      if (n != null && Ye) for (var i of Ye(n)) t.indexOf(i) < 0 && _r.call(n, i) && (r[i] = n[i]);
      return r;
    },
    Wt = (n) => {
      switch (n) {
        case 'primary':
          return { color: F.blue600, '&:hover, &:focus': { color: F.blue700 } };
        case 'secondary':
          return { color: F.gray600, '&:hover, &:focus': { color: F.gray700 } };
        case 'positive':
          return { color: F.green600, '&:hover, &:focus': { color: F.green700 } };
        case 'negative':
          return { color: F.red600, '&:hover, &:focus': { color: F.red700 } };
        case 'muted':
          return { color: F.gray400, '&:hover, &:focus': { color: F.gray500 } };
        case 'white':
          return { color: F.colorWhite, '&:hover, &:focus': { color: F.gray100 } };
        default:
          return { color: F.colorWhite };
      }
    },
    Vt = ({ variant: n, isDisabled: t }) =>
      fe(
        Ze(
          Me(
            {
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxSizing: 'border-box',
              border: 0,
              padding: 0,
              margin: 0,
              fontFamily: F.fontStackPrimary,
              fontSize: F.fontSizeM,
              fontWeight: F.fontWeightMedium,
              transition: `color ${F.transitionDurationShort} ${F.transitionEasingDefault}`,
              textDecoration: 'none',
              background: 'none',
              appearance: 'none',
              whiteSpace: 'normal',
              textAlign: 'left',
              cursor: t ? 'not-allowed' : 'pointer',
              opacity: t ? 0.5 : 1,
            },
            Wt(n)
          ),
          {
            outline: 'none',
            verticalAlign: 'bottom',
            '&:focus, &:focus-visible, &:hover': { textDecoration: t ? 'none' : 'underline' },
            '&:focus': { boxShadow: t ? 'none' : F.glowPrimary, borderRadius: F.borderRadiusSmall },
            '&:focus:not(:focus-visible)': { borderRadius: 0, boxShadow: 'none' },
            '&:focus-visible': {
              borderRadius: F.borderRadiusSmall,
              boxShadow: t ? 'none' : F.glowPrimary,
            },
          }
        )
      ),
    zt = () =>
      fe({
        fill: 'currentColor',
        transition: `fill ${F.transitionDurationShort} ${F.transitionEasingDefault}`,
      }),
    Yt = ({ alignIcon: n }) => {
      if (n === 'start') return fe({ marginLeft: F.spacing2Xs });
      if (n === 'end') return fe({ marginRight: F.spacing2Xs });
    },
    Qe = { textLink: Vt, textLinkIcon: zt, textLinkText: Yt },
    Xt = 'a';
  function jr(n, t) {
    let r = n,
      {
        children: i,
        className: l,
        testId: s = 'cf-ui-text-link',
        variant: p = 'primary',
        href: g,
        icon: u,
        alignIcon: m = 'start',
        isDisabled: d,
        as: y = Xt,
      } = r,
      E = $t(r, [
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
      A = Me(
        {
          ref: t,
          className: we(Qe.textLink({ variant: p, isDisabled: d }), n.className),
          ['data-test-id']: s,
        },
        E
      ),
      P = u
        ? L.createElement(
            kr,
            { as: 'span' },
            L.cloneElement(u, {
              className: we(u.props.className, Qe.textLinkIcon()),
              size: 'small',
            })
          )
        : null,
      X = L.createElement(
        L.Fragment,
        null,
        u && m === 'start' && P,
        i &&
          L.createElement('span', { className: Qe.textLinkText({ alignIcon: u ? m : void 0 }) }, i),
        u && m === 'end' && P
      );
    return y === 'button'
      ? L.createElement('button', Ze(Me({}, A), { disabled: d, type: 'button' }), X)
      : L.createElement(
          'a',
          Me(
            Ze(Me({}, A), {
              onClick: d
                ? (J) => {
                    J.preventDefault();
                  }
                : A.onClick,
              href: g,
            }),
            d ? { tabIndex: -1 } : {}
          ),
          X
        );
  }
  jr.displayName = 'TextLink';
  var Gt = L.forwardRef(jr);
  const Ut = (n) => {
    const {
        body: t,
        substring: r,
        onClick: i = () => {},
        hyperLinkHref: l,
        icon: s,
        alignIcon: p,
      } = n,
      g = (m) =>
        Jr.jsx(
          Gt,
          {
            onClick: i,
            href: l,
            target: '_blank',
            rel: 'noopener noreferer',
            icon: s,
            alignIcon: p,
            children: r,
          },
          `textLink-${m}`
        );
    return (() => t.split(r).reduce((d, y, E) => (E ? d.concat(g(E), y) : [y]), []))();
  };
  (ve.HyperLink = Ut), Object.defineProperty(ve, Symbol.toStringTag, { value: 'Module' });
});
