(function (Q, j) {
  typeof exports == 'object' && typeof module < 'u'
    ? j(
        exports,
        require('react'),
        require('@contentful/f36-components'),
        require('@contentful/f36-tokens'),
        require('@emotion/css')
      )
    : typeof define == 'function' && define.amd
    ? define(
        [
          'exports',
          'react',
          '@contentful/f36-components',
          '@contentful/f36-tokens',
          '@emotion/css',
        ],
        j
      )
    : ((Q = typeof globalThis < 'u' ? globalThis : Q || self),
      j((Q['integration-component-library'] = {}), Q.require$$0, Q.f36Components, Q.tokens, Q.css));
})(this, function (Q, j, zt, mt, ko) {
  var It;
  ('use strict');
  var dh = Object.defineProperty;
  var uh = (Q, j, zt) =>
    j in Q ? dh(Q, j, { enumerable: !0, configurable: !0, writable: !0, value: zt }) : (Q[j] = zt);
  var O = (Q, j, zt) => (uh(Q, typeof j != 'symbol' ? j + '' : j, zt), zt);
  var gi = { exports: {} },
    oe = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var rn;
  function wo() {
    if (rn) return oe;
    rn = 1;
    var i = j,
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
      if (a && a.defaultProps)
        for (h in ((l = a.defaultProps), l)) f[h] === void 0 && (f[h] = l[h]);
      return { $$typeof: t, type: a, key: d, ref: g, props: f, _owner: s.current };
    }
    return (oe.Fragment = e), (oe.jsx = r), (oe.jsxs = r), oe;
  }
  var re = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var an;
  function Mo() {
    return (
      an ||
        ((an = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var i = j,
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
                  E = P.getStackAddendum();
                E !== '' && ((x += '%s'), (k = k.concat([E])));
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
            function V(u) {
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
                    u.$$typeof === l ||
                    u.$$typeof === D ||
                    u.getModuleId !== void 0))
              );
            }
            function H(u, x, k) {
              var P = u.displayName;
              if (P) return P;
              var E = x.displayName || x.name || '';
              return E !== '' ? k + '(' + E + ')' : k;
            }
            function $(u) {
              return u.displayName || 'Context';
            }
            function K(u) {
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
                    return $(x) + '.Consumer';
                  case r:
                    var k = u;
                    return $(k._context) + '.Provider';
                  case l:
                    return H(u, u.render, 'ForwardRef');
                  case f:
                    var P = u.displayName || null;
                    return P !== null ? P : K(u.type) || 'Memo';
                  case d: {
                    var E = u,
                      B = E._payload,
                      A = E._init;
                    try {
                      return K(A(B));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var tt = Object.assign,
              z = 0,
              q,
              it,
              Kt,
              qt,
              wt,
              Gt,
              Mt;
            function Ft() {}
            Ft.__reactDisabledLog = !0;
            function Zt() {
              {
                if (z === 0) {
                  (q = console.log),
                    (it = console.info),
                    (Kt = console.warn),
                    (qt = console.error),
                    (wt = console.group),
                    (Gt = console.groupCollapsed),
                    (Mt = console.groupEnd);
                  var u = { configurable: !0, enumerable: !0, value: Ft, writable: !0 };
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
            function Jt() {
              {
                if ((z--, z === 0)) {
                  var u = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: tt({}, u, { value: q }),
                    info: tt({}, u, { value: it }),
                    warn: tt({}, u, { value: Kt }),
                    error: tt({}, u, { value: qt }),
                    group: tt({}, u, { value: wt }),
                    groupCollapsed: tt({}, u, { value: Gt }),
                    groupEnd: tt({}, u, { value: Mt }),
                  });
                }
                z < 0 &&
                  y('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var St = _.ReactCurrentDispatcher,
              Ji;
            function ci(u, x, k) {
              {
                if (Ji === void 0)
                  try {
                    throw Error();
                  } catch (E) {
                    var P = E.stack.trim().match(/\n( *(at )?)/);
                    Ji = (P && P[1]) || '';
                  }
                return (
                  `
` +
                  Ji +
                  u
                );
              }
            }
            var Qi = !1,
              hi;
            {
              var Hc = typeof WeakMap == 'function' ? WeakMap : Map;
              hi = new Hc();
            }
            function ao(u, x) {
              if (!u || Qi) return '';
              {
                var k = hi.get(u);
                if (k !== void 0) return k;
              }
              var P;
              Qi = !0;
              var E = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var B;
              (B = St.current), (St.current = null), Zt();
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
                    } catch (Ct) {
                      P = Ct;
                    }
                    Reflect.construct(u, [], A);
                  } else {
                    try {
                      A.call();
                    } catch (Ct) {
                      P = Ct;
                    }
                    u.call(A.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Ct) {
                    P = Ct;
                  }
                  u();
                }
              } catch (Ct) {
                if (Ct && P && typeof Ct.stack == 'string') {
                  for (
                    var R = Ct.stack.split(`
`),
                      nt = P.stack.split(`
`),
                      X = R.length - 1,
                      G = nt.length - 1;
                    X >= 1 && G >= 0 && R[X] !== nt[G];

                  )
                    G--;
                  for (; X >= 1 && G >= 0; X--, G--)
                    if (R[X] !== nt[G]) {
                      if (X !== 1 || G !== 1)
                        do
                          if ((X--, G--, G < 0 || R[X] !== nt[G])) {
                            var dt =
                              `
` + R[X].replace(' at new ', ' at ');
                            return (
                              u.displayName &&
                                dt.includes('<anonymous>') &&
                                (dt = dt.replace('<anonymous>', u.displayName)),
                              typeof u == 'function' && hi.set(u, dt),
                              dt
                            );
                          }
                        while (X >= 1 && G >= 0);
                      break;
                    }
                }
              } finally {
                (Qi = !1), (St.current = B), Jt(), (Error.prepareStackTrace = E);
              }
              var se = u ? u.displayName || u.name : '',
                vo = se ? ci(se) : '';
              return typeof u == 'function' && hi.set(u, vo), vo;
            }
            function Yc(u, x, k) {
              return ao(u, !1);
            }
            function $c(u) {
              var x = u.prototype;
              return !!(x && x.isReactComponent);
            }
            function fi(u, x, k) {
              if (u == null) return '';
              if (typeof u == 'function') return ao(u, $c(u));
              if (typeof u == 'string') return ci(u);
              switch (u) {
                case c:
                  return ci('Suspense');
                case h:
                  return ci('SuspenseList');
              }
              if (typeof u == 'object')
                switch (u.$$typeof) {
                  case l:
                    return Yc(u.render);
                  case f:
                    return fi(u.type, x, k);
                  case d: {
                    var P = u,
                      E = P._payload,
                      B = P._init;
                    try {
                      return fi(B(E), x, k);
                    } catch {}
                  }
                }
              return '';
            }
            var di = Object.prototype.hasOwnProperty,
              lo = {},
              co = _.ReactDebugCurrentFrame;
            function ui(u) {
              if (u) {
                var x = u._owner,
                  k = fi(u.type, u._source, x ? x.type : null);
                co.setExtraStackFrame(k);
              } else co.setExtraStackFrame(null);
            }
            function Uc(u, x, k, P, E) {
              {
                var B = Function.call.bind(di);
                for (var A in u)
                  if (B(u, A)) {
                    var R = void 0;
                    try {
                      if (typeof u[A] != 'function') {
                        var nt = Error(
                          (P || 'React class') +
                            ': ' +
                            k +
                            ' type `' +
                            A +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof u[A] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        throw ((nt.name = 'Invariant Violation'), nt);
                      }
                      R = u[A](x, A, P, k, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (X) {
                      R = X;
                    }
                    R &&
                      !(R instanceof Error) &&
                      (ui(E),
                      y(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        P || 'React class',
                        k,
                        A,
                        typeof R
                      ),
                      ui(null)),
                      R instanceof Error &&
                        !(R.message in lo) &&
                        ((lo[R.message] = !0),
                        ui(E),
                        y('Failed %s type: %s', k, R.message),
                        ui(null));
                  }
              }
            }
            var Xc = Array.isArray;
            function tn(u) {
              return Xc(u);
            }
            function Kc(u) {
              {
                var x = typeof Symbol == 'function' && Symbol.toStringTag,
                  k = (x && u[Symbol.toStringTag]) || u.constructor.name || 'Object';
                return k;
              }
            }
            function qc(u) {
              try {
                return ho(u), !1;
              } catch {
                return !0;
              }
            }
            function ho(u) {
              return '' + u;
            }
            function fo(u) {
              if (qc(u))
                return (
                  y(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    Kc(u)
                  ),
                  ho(u)
                );
            }
            var Re = _.ReactCurrentOwner,
              Gc = { key: !0, ref: !0, __self: !0, __source: !0 },
              uo,
              go,
              en;
            en = {};
            function Zc(u) {
              if (di.call(u, 'ref')) {
                var x = Object.getOwnPropertyDescriptor(u, 'ref').get;
                if (x && x.isReactWarning) return !1;
              }
              return u.ref !== void 0;
            }
            function Jc(u) {
              if (di.call(u, 'key')) {
                var x = Object.getOwnPropertyDescriptor(u, 'key').get;
                if (x && x.isReactWarning) return !1;
              }
              return u.key !== void 0;
            }
            function Qc(u, x) {
              if (typeof u.ref == 'string' && Re.current && x && Re.current.stateNode !== x) {
                var k = K(Re.current.type);
                en[k] ||
                  (y(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    K(Re.current.type),
                    u.ref
                  ),
                  (en[k] = !0));
              }
            }
            function th(u, x) {
              {
                var k = function () {
                  uo ||
                    ((uo = !0),
                    y(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      x
                    ));
                };
                (k.isReactWarning = !0),
                  Object.defineProperty(u, 'key', { get: k, configurable: !0 });
              }
            }
            function eh(u, x) {
              {
                var k = function () {
                  go ||
                    ((go = !0),
                    y(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      x
                    ));
                };
                (k.isReactWarning = !0),
                  Object.defineProperty(u, 'ref', { get: k, configurable: !0 });
              }
            }
            var ih = function (u, x, k, P, E, B, A) {
              var R = { $$typeof: t, type: u, key: x, ref: k, props: A, _owner: B };
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
                  value: E,
                }),
                Object.freeze && (Object.freeze(R.props), Object.freeze(R)),
                R
              );
            };
            function nh(u, x, k, P, E) {
              {
                var B,
                  A = {},
                  R = null,
                  nt = null;
                k !== void 0 && (fo(k), (R = '' + k)),
                  Jc(x) && (fo(x.key), (R = '' + x.key)),
                  Zc(x) && ((nt = x.ref), Qc(x, E));
                for (B in x) di.call(x, B) && !Gc.hasOwnProperty(B) && (A[B] = x[B]);
                if (u && u.defaultProps) {
                  var X = u.defaultProps;
                  for (B in X) A[B] === void 0 && (A[B] = X[B]);
                }
                if (R || nt) {
                  var G = typeof u == 'function' ? u.displayName || u.name || 'Unknown' : u;
                  R && th(A, G), nt && eh(A, G);
                }
                return ih(u, R, nt, E, P, Re.current, A);
              }
            }
            var nn = _.ReactCurrentOwner,
              po = _.ReactDebugCurrentFrame;
            function ne(u) {
              if (u) {
                var x = u._owner,
                  k = fi(u.type, u._source, x ? x.type : null);
                po.setExtraStackFrame(k);
              } else po.setExtraStackFrame(null);
            }
            var sn;
            sn = !1;
            function on(u) {
              return typeof u == 'object' && u !== null && u.$$typeof === t;
            }
            function mo() {
              {
                if (nn.current) {
                  var u = K(nn.current.type);
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
            function sh(u) {
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
            var bo = {};
            function oh(u) {
              {
                var x = mo();
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
            function _o(u, x) {
              {
                if (!u._store || u._store.validated || u.key != null) return;
                u._store.validated = !0;
                var k = oh(x);
                if (bo[k]) return;
                bo[k] = !0;
                var P = '';
                u &&
                  u._owner &&
                  u._owner !== nn.current &&
                  (P = ' It was passed a child from ' + K(u._owner.type) + '.'),
                  ne(u),
                  y(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    k,
                    P
                  ),
                  ne(null);
              }
            }
            function xo(u, x) {
              {
                if (typeof u != 'object') return;
                if (tn(u))
                  for (var k = 0; k < u.length; k++) {
                    var P = u[k];
                    on(P) && _o(P, x);
                  }
                else if (on(u)) u._store && (u._store.validated = !0);
                else if (u) {
                  var E = m(u);
                  if (typeof E == 'function' && E !== u.entries)
                    for (var B = E.call(u), A; !(A = B.next()).done; )
                      on(A.value) && _o(A.value, x);
                }
              }
            }
            function rh(u) {
              {
                var x = u.type;
                if (x == null || typeof x == 'string') return;
                var k;
                if (typeof x == 'function') k = x.propTypes;
                else if (typeof x == 'object' && (x.$$typeof === l || x.$$typeof === f))
                  k = x.propTypes;
                else return;
                if (k) {
                  var P = K(x);
                  Uc(k, u.props, 'prop', P, u);
                } else if (x.PropTypes !== void 0 && !sn) {
                  sn = !0;
                  var E = K(x);
                  y(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    E || 'Unknown'
                  );
                }
                typeof x.getDefaultProps == 'function' &&
                  !x.getDefaultProps.isReactClassApproved &&
                  y(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  );
              }
            }
            function ah(u) {
              {
                for (var x = Object.keys(u.props), k = 0; k < x.length; k++) {
                  var P = x[k];
                  if (P !== 'children' && P !== 'key') {
                    ne(u),
                      y(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        P
                      ),
                      ne(null);
                    break;
                  }
                }
                u.ref !== null &&
                  (ne(u), y('Invalid attribute `ref` supplied to `React.Fragment`.'), ne(null));
              }
            }
            function yo(u, x, k, P, E, B) {
              {
                var A = V(u);
                if (!A) {
                  var R = '';
                  (u === void 0 ||
                    (typeof u == 'object' && u !== null && Object.keys(u).length === 0)) &&
                    (R +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var nt = sh(E);
                  nt ? (R += nt) : (R += mo());
                  var X;
                  u === null
                    ? (X = 'null')
                    : tn(u)
                    ? (X = 'array')
                    : u !== void 0 && u.$$typeof === t
                    ? ((X = '<' + (K(u.type) || 'Unknown') + ' />'),
                      (R = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (X = typeof u),
                    y(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      X,
                      R
                    );
                }
                var G = nh(u, x, k, E, B);
                if (G == null) return G;
                if (A) {
                  var dt = x.children;
                  if (dt !== void 0)
                    if (P)
                      if (tn(dt)) {
                        for (var se = 0; se < dt.length; se++) xo(dt[se], u);
                        Object.freeze && Object.freeze(dt);
                      } else
                        y(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                        );
                    else xo(dt, u);
                }
                return u === n ? ah(G) : rh(G), G;
              }
            }
            function lh(u, x, k) {
              return yo(u, x, k, !0);
            }
            function ch(u, x, k) {
              return yo(u, x, k, !1);
            }
            var hh = ch,
              fh = lh;
            (re.Fragment = n), (re.jsx = hh), (re.jsxs = fh);
          })()),
      re
    );
  }
  process.env.NODE_ENV === 'production' ? (gi.exports = wo()) : (gi.exports = Mo());
  var pi = gi.exports;
  const So = (i) => {
    const {
        body: t,
        substring: e,
        onClick: n = () => {},
        hyperLinkHref: s,
        icon: o,
        alignIcon: r,
      } = i,
      a = (c) =>
        pi.jsx(
          zt.TextLink,
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
   */ function ae(i) {
    return (i + 0.5) | 0;
  }
  const Pt = (i, t, e) => Math.max(Math.min(i, e), t);
  function le(i) {
    return Pt(ae(i * 2.55), 0, 255);
  }
  function Ot(i) {
    return Pt(ae(i * 255), 0, 255);
  }
  function bt(i) {
    return Pt(ae(i / 2.55) / 100, 0, 1);
  }
  function ln(i) {
    return Pt(ae(i * 100), 0, 100);
  }
  const ct = {
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
    mi = [...'0123456789ABCDEF'],
    Co = (i) => mi[i & 15],
    Po = (i) => mi[(i & 240) >> 4] + mi[i & 15],
    Ae = (i) => (i & 240) >> 4 === (i & 15),
    Oo = (i) => Ae(i.r) && Ae(i.g) && Ae(i.b) && Ae(i.a);
  function To(i) {
    var t = i.length,
      e;
    return (
      i[0] === '#' &&
        (t === 4 || t === 5
          ? (e = {
              r: 255 & (ct[i[1]] * 17),
              g: 255 & (ct[i[2]] * 17),
              b: 255 & (ct[i[3]] * 17),
              a: t === 5 ? ct[i[4]] * 17 : 255,
            })
          : (t === 7 || t === 9) &&
            (e = {
              r: (ct[i[1]] << 4) | ct[i[2]],
              g: (ct[i[3]] << 4) | ct[i[4]],
              b: (ct[i[5]] << 4) | ct[i[6]],
              a: t === 9 ? (ct[i[7]] << 4) | ct[i[8]] : 255,
            })),
      e
    );
  }
  const Do = (i, t) => (i < 255 ? t(i) : '');
  function Ro(i) {
    var t = Oo(i) ? Co : Po;
    return i ? '#' + t(i.r) + t(i.g) + t(i.b) + Do(i.a, t) : void 0;
  }
  const Ao =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function cn(i, t, e) {
    const n = t * Math.min(e, 1 - e),
      s = (o, r = (o + i / 30) % 12) => e - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
    return [s(0), s(8), s(4)];
  }
  function Lo(i, t, e) {
    const n = (s, o = (s + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
    return [n(5), n(3), n(1)];
  }
  function Eo(i, t, e) {
    const n = cn(i, 1, 0.5);
    let s;
    for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
      (n[s] *= 1 - t - e), (n[s] += t);
    return n;
  }
  function Io(i, t, e, n, s) {
    return i === s ? (t - e) / n + (t < e ? 6 : 0) : t === s ? (e - i) / n + 2 : (i - t) / n + 4;
  }
  function bi(i) {
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
        (l = Io(e, n, s, h, o)),
        (l = l * 60 + 0.5)),
      [l | 0, c || 0, a]
    );
  }
  function _i(i, t, e, n) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(Ot);
  }
  function xi(i, t, e) {
    return _i(cn, i, t, e);
  }
  function Fo(i, t, e) {
    return _i(Eo, i, t, e);
  }
  function zo(i, t, e) {
    return _i(Lo, i, t, e);
  }
  function hn(i) {
    return ((i % 360) + 360) % 360;
  }
  function Bo(i) {
    const t = Ao.exec(i);
    let e = 255,
      n;
    if (!t) return;
    t[5] !== n && (e = t[6] ? le(+t[5]) : Ot(+t[5]));
    const s = hn(+t[2]),
      o = +t[3] / 100,
      r = +t[4] / 100;
    return (
      t[1] === 'hwb' ? (n = Fo(s, o, r)) : t[1] === 'hsv' ? (n = zo(s, o, r)) : (n = xi(s, o, r)),
      { r: n[0], g: n[1], b: n[2], a: e }
    );
  }
  function jo(i, t) {
    var e = bi(i);
    (e[0] = hn(e[0] + t)), (e = xi(e)), (i.r = e[0]), (i.g = e[1]), (i.b = e[2]);
  }
  function No(i) {
    if (!i) return;
    const t = bi(i),
      e = t[0],
      n = ln(t[1]),
      s = ln(t[2]);
    return i.a < 255 ? `hsla(${e}, ${n}%, ${s}%, ${bt(i.a)})` : `hsl(${e}, ${n}%, ${s}%)`;
  }
  const fn = {
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
    dn = {
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
  function Wo() {
    const i = {},
      t = Object.keys(dn),
      e = Object.keys(fn);
    let n, s, o, r, a;
    for (n = 0; n < t.length; n++) {
      for (r = a = t[n], s = 0; s < e.length; s++) (o = e[s]), (a = a.replace(o, fn[o]));
      (o = parseInt(dn[r], 16)), (i[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
    }
    return i;
  }
  let Le;
  function Vo(i) {
    Le || ((Le = Wo()), (Le.transparent = [0, 0, 0, 0]));
    const t = Le[i.toLowerCase()];
    return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
  }
  const Ho =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function Yo(i) {
    const t = Ho.exec(i);
    let e = 255,
      n,
      s,
      o;
    if (t) {
      if (t[7] !== n) {
        const r = +t[7];
        e = t[8] ? le(r) : Pt(r * 255, 0, 255);
      }
      return (
        (n = +t[1]),
        (s = +t[3]),
        (o = +t[5]),
        (n = 255 & (t[2] ? le(n) : Pt(n, 0, 255))),
        (s = 255 & (t[4] ? le(s) : Pt(s, 0, 255))),
        (o = 255 & (t[6] ? le(o) : Pt(o, 0, 255))),
        { r: n, g: s, b: o, a: e }
      );
    }
  }
  function $o(i) {
    return (
      i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${bt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`)
    );
  }
  const yi = (i) => (i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055),
    Qt = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  function Uo(i, t, e) {
    const n = Qt(bt(i.r)),
      s = Qt(bt(i.g)),
      o = Qt(bt(i.b));
    return {
      r: Ot(yi(n + e * (Qt(bt(t.r)) - n))),
      g: Ot(yi(s + e * (Qt(bt(t.g)) - s))),
      b: Ot(yi(o + e * (Qt(bt(t.b)) - o))),
      a: i.a + e * (t.a - i.a),
    };
  }
  function Ee(i, t, e) {
    if (i) {
      let n = bi(i);
      (n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1))),
        (n = xi(n)),
        (i.r = n[0]),
        (i.g = n[1]),
        (i.b = n[2]);
    }
  }
  function un(i, t) {
    return i && Object.assign(t || {}, i);
  }
  function gn(i) {
    var t = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(i)
        ? i.length >= 3 &&
          ((t = { r: i[0], g: i[1], b: i[2], a: 255 }), i.length > 3 && (t.a = Ot(i[3])))
        : ((t = un(i, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Ot(t.a))),
      t
    );
  }
  function Xo(i) {
    return i.charAt(0) === 'r' ? Yo(i) : Bo(i);
  }
  class ce {
    constructor(t) {
      if (t instanceof ce) return t;
      const e = typeof t;
      let n;
      e === 'object' ? (n = gn(t)) : e === 'string' && (n = To(t) || Vo(t) || Xo(t)),
        (this._rgb = n),
        (this._valid = !!n);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = un(this._rgb);
      return t && (t.a = bt(t.a)), t;
    }
    set rgb(t) {
      this._rgb = gn(t);
    }
    rgbString() {
      return this._valid ? $o(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? Ro(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? No(this._rgb) : void 0;
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
      return t && (this._rgb = Uo(this._rgb, t._rgb, e)), this;
    }
    clone() {
      return new ce(this.rgb);
    }
    alpha(t) {
      return (this._rgb.a = Ot(t)), this;
    }
    clearer(t) {
      const e = this._rgb;
      return (e.a *= 1 - t), this;
    }
    greyscale() {
      const t = this._rgb,
        e = ae(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
      return Ee(this._rgb, 2, t), this;
    }
    darken(t) {
      return Ee(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return Ee(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return Ee(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return jo(this._rgb, t), this;
    }
  }
  /*!
   * Chart.js v4.3.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ function _t() {}
  const Ko = (() => {
    let i = 0;
    return () => i++;
  })();
  function N(i) {
    return i === null || typeof i > 'u';
  }
  function W(i) {
    if (Array.isArray && Array.isArray(i)) return !0;
    const t = Object.prototype.toString.call(i);
    return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
  }
  function L(i) {
    return i !== null && Object.prototype.toString.call(i) === '[object Object]';
  }
  function J(i) {
    return (typeof i == 'number' || i instanceof Number) && isFinite(+i);
  }
  function at(i, t) {
    return J(i) ? i : t;
  }
  function F(i, t) {
    return typeof i > 'u' ? t : i;
  }
  const qo = (i, t) => (typeof i == 'string' && i.endsWith('%') ? (parseFloat(i) / 100) * t : +i);
  function Y(i, t, e) {
    if (i && typeof i.call == 'function') return i.apply(e, t);
  }
  function I(i, t, e, n) {
    let s, o, r;
    if (W(i))
      if (((o = i.length), n)) for (s = o - 1; s >= 0; s--) t.call(e, i[s], s);
      else for (s = 0; s < o; s++) t.call(e, i[s], s);
    else if (L(i))
      for (r = Object.keys(i), o = r.length, s = 0; s < o; s++) t.call(e, i[r[s]], r[s]);
  }
  function Ie(i, t) {
    let e, n, s, o;
    if (!i || !t || i.length !== t.length) return !1;
    for (e = 0, n = i.length; e < n; ++e)
      if (((s = i[e]), (o = t[e]), s.datasetIndex !== o.datasetIndex || s.index !== o.index))
        return !1;
    return !0;
  }
  function Fe(i) {
    if (W(i)) return i.map(Fe);
    if (L(i)) {
      const t = Object.create(null),
        e = Object.keys(i),
        n = e.length;
      let s = 0;
      for (; s < n; ++s) t[e[s]] = Fe(i[e[s]]);
      return t;
    }
    return i;
  }
  function pn(i) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(i) === -1;
  }
  function Go(i, t, e, n) {
    if (!pn(i)) return;
    const s = t[i],
      o = e[i];
    L(s) && L(o) ? he(s, o, n) : (t[i] = Fe(o));
  }
  function he(i, t, e) {
    const n = W(t) ? t : [t],
      s = n.length;
    if (!L(i)) return i;
    e = e || {};
    const o = e.merger || Go;
    let r;
    for (let a = 0; a < s; ++a) {
      if (((r = n[a]), !L(r))) continue;
      const l = Object.keys(r);
      for (let c = 0, h = l.length; c < h; ++c) o(l[c], i, r, e);
    }
    return i;
  }
  function fe(i, t) {
    return he(i, t, { merger: Zo });
  }
  function Zo(i, t, e) {
    if (!pn(i)) return;
    const n = t[i],
      s = e[i];
    L(n) && L(s) ? fe(n, s) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Fe(s));
  }
  const mn = { '': (i) => i, x: (i) => i.x, y: (i) => i.y };
  function Jo(i) {
    const t = i.split('.'),
      e = [];
    let n = '';
    for (const s of t)
      (n += s), n.endsWith('\\') ? (n = n.slice(0, -1) + '.') : (e.push(n), (n = ''));
    return e;
  }
  function Qo(i) {
    const t = Jo(i);
    return (e) => {
      for (const n of t) {
        if (n === '') break;
        e = e && e[n];
      }
      return e;
    };
  }
  function ze(i, t) {
    return (mn[t] || (mn[t] = Qo(t)))(i);
  }
  function vi(i) {
    return i.charAt(0).toUpperCase() + i.slice(1);
  }
  const Be = (i) => typeof i < 'u',
    Tt = (i) => typeof i == 'function',
    bn = (i, t) => {
      if (i.size !== t.size) return !1;
      for (const e of i) if (!t.has(e)) return !1;
      return !0;
    };
  function tr(i) {
    return i.type === 'mouseup' || i.type === 'click' || i.type === 'contextmenu';
  }
  const Z = Math.PI,
    ht = 2 * Z,
    er = ht + Z,
    je = Number.POSITIVE_INFINITY,
    ir = Z / 180,
    st = Z / 2,
    Bt = Z / 4,
    _n = (Z * 2) / 3,
    Dt = Math.log10,
    te = Math.sign;
  function de(i, t, e) {
    return Math.abs(i - t) < e;
  }
  function xn(i) {
    const t = Math.round(i);
    i = de(i, t, i / 1e3) ? t : i;
    const e = Math.pow(10, Math.floor(Dt(i))),
      n = i / e;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
  }
  function nr(i) {
    const t = [],
      e = Math.sqrt(i);
    let n;
    for (n = 1; n < e; n++) i % n === 0 && (t.push(n), t.push(i / n));
    return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
  }
  function ue(i) {
    return !isNaN(parseFloat(i)) && isFinite(i);
  }
  function sr(i, t) {
    const e = Math.round(i);
    return e - t <= i && e + t >= i;
  }
  function yn(i, t, e) {
    let n, s, o;
    for (n = 0, s = i.length; n < s; n++)
      (o = i[n][e]), isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
  }
  function Rt(i) {
    return i * (Z / 180);
  }
  function ki(i) {
    return i * (180 / Z);
  }
  function vn(i) {
    if (!J(i)) return;
    let t = 1,
      e = 0;
    for (; Math.round(i * t) / t !== i; ) (t *= 10), e++;
    return e;
  }
  function or(i, t) {
    const e = t.x - i.x,
      n = t.y - i.y,
      s = Math.sqrt(e * e + n * n);
    let o = Math.atan2(n, e);
    return o < -0.5 * Z && (o += ht), { angle: o, distance: s };
  }
  function wi(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
  }
  function rr(i, t) {
    return ((i - t + er) % ht) - Z;
  }
  function ut(i) {
    return ((i % ht) + ht) % ht;
  }
  function kn(i, t, e, n) {
    const s = ut(i),
      o = ut(t),
      r = ut(e),
      a = ut(o - s),
      l = ut(r - s),
      c = ut(s - o),
      h = ut(s - r);
    return s === o || s === r || (n && o === r) || (a > l && c < h);
  }
  function ft(i, t, e) {
    return Math.max(t, Math.min(e, i));
  }
  function ar(i) {
    return ft(i, -32768, 32767);
  }
  function lr(i, t, e, n = 1e-6) {
    return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
  }
  function Mi(i, t, e) {
    e = e || ((r) => i[r] < t);
    let n = i.length - 1,
      s = 0,
      o;
    for (; n - s > 1; ) (o = (s + n) >> 1), e(o) ? (s = o) : (n = o);
    return { lo: s, hi: n };
  }
  const jt = (i, t, e, n) =>
      Mi(
        i,
        e,
        n
          ? (s) => {
              const o = i[s][t];
              return o < e || (o === e && i[s + 1][t] === e);
            }
          : (s) => i[s][t] < e
      ),
    cr = (i, t, e) => Mi(i, e, (n) => i[n][t] >= e);
  function hr(i, t, e) {
    let n = 0,
      s = i.length;
    for (; n < s && i[n] < t; ) n++;
    for (; s > n && i[s - 1] > e; ) s--;
    return n > 0 || s < i.length ? i.slice(n, s) : i;
  }
  const wn = ['push', 'pop', 'shift', 'splice', 'unshift'];
  function fr(i, t) {
    if (i._chartjs) {
      i._chartjs.listeners.push(t);
      return;
    }
    Object.defineProperty(i, '_chartjs', {
      configurable: !0,
      enumerable: !1,
      value: { listeners: [t] },
    }),
      wn.forEach((e) => {
        const n = '_onData' + vi(e),
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
  function Mn(i, t) {
    const e = i._chartjs;
    if (!e) return;
    const n = e.listeners,
      s = n.indexOf(t);
    s !== -1 && n.splice(s, 1),
      !(n.length > 0) &&
        (wn.forEach((o) => {
          delete i[o];
        }),
        delete i._chartjs);
  }
  function dr(i) {
    const t = new Set(i);
    return t.size === i.length ? i : Array.from(t);
  }
  const Sn = (function () {
    return typeof window > 'u'
      ? function (i) {
          return i();
        }
      : window.requestAnimationFrame;
  })();
  function Cn(i, t) {
    let e = [],
      n = !1;
    return function (...s) {
      (e = s),
        n ||
          ((n = !0),
          Sn.call(window, () => {
            (n = !1), i.apply(t, e);
          }));
    };
  }
  function ur(i, t) {
    let e;
    return function (...n) {
      return t ? (clearTimeout(e), (e = setTimeout(i, t, n))) : i.apply(this, n), t;
    };
  }
  const Pn = (i) => (i === 'start' ? 'left' : i === 'end' ? 'right' : 'center'),
    ge = (i, t, e) => (i === 'start' ? t : i === 'end' ? e : (t + e) / 2);
  function gr(i, t, e) {
    const n = t.length;
    let s = 0,
      o = n;
    if (i._sorted) {
      const { iScale: r, _parsed: a } = i,
        l = r.axis,
        { min: c, max: h, minDefined: f, maxDefined: d } = r.getUserBounds();
      f &&
        (s = ft(
          Math.min(jt(a, r.axis, c).lo, e ? n : jt(t, l, r.getPixelForValue(c)).lo),
          0,
          n - 1
        )),
        d
          ? (o =
              ft(
                Math.max(
                  jt(a, r.axis, h, !0).hi + 1,
                  e ? 0 : jt(t, l, r.getPixelForValue(h), !0).hi + 1
                ),
                s,
                n
              ) - s)
          : (o = n - s);
    }
    return { start: s, count: o };
  }
  function pr(i) {
    const { xScale: t, yScale: e, _scaleRanges: n } = i,
      s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
    if (!n) return (i._scaleRanges = s), !0;
    const o = n.xmin !== t.min || n.xmax !== t.max || n.ymin !== e.min || n.ymax !== e.max;
    return Object.assign(n, s), o;
  }
  const Ne = (i) => i === 0 || i === 1,
    On = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * ht) / e)),
    Tn = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * ht) / e) + 1,
    pe = {
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
      easeInOutSine: (i) => -0.5 * (Math.cos(Z * i) - 1),
      easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
      easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
      easeInOutExpo: (i) =>
        Ne(i)
          ? i
          : i < 0.5
          ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
      easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
      easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
      easeInOutCirc: (i) =>
        (i /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - i * i) - 1)
          : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
      easeInElastic: (i) => (Ne(i) ? i : On(i, 0.075, 0.3)),
      easeOutElastic: (i) => (Ne(i) ? i : Tn(i, 0.075, 0.3)),
      easeInOutElastic(i) {
        return Ne(i)
          ? i
          : i < 0.5
          ? 0.5 * On(i * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * Tn(i * 2 - 1, 0.1125, 0.45);
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
      easeInBounce: (i) => 1 - pe.easeOutBounce(1 - i),
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
        i < 0.5 ? pe.easeInBounce(i * 2) * 0.5 : pe.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
    };
  function Si(i) {
    if (i && typeof i == 'object') {
      const t = i.toString();
      return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
    }
    return !1;
  }
  function Dn(i) {
    return Si(i) ? i : new ce(i);
  }
  function Ci(i) {
    return Si(i) ? i : new ce(i).saturate(0.5).darken(0.1).hexString();
  }
  const mr = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    br = ['color', 'borderColor', 'backgroundColor'];
  function _r(i) {
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
        colors: { type: 'color', properties: br },
        numbers: { type: 'number', properties: mr },
      }),
      i.describe('animations', { _fallback: 'animation' }),
      i.set('transitions', {
        active: { animation: { duration: 400 } },
        resize: { animation: { duration: 0 } },
        show: {
          animations: {
            colors: { from: 'transparent' },
            visible: { type: 'boolean', duration: 0 },
          },
        },
        hide: {
          animations: {
            colors: { to: 'transparent' },
            visible: { type: 'boolean', easing: 'linear', fn: (t) => t | 0 },
          },
        },
      });
  }
  function xr(i) {
    i.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
  }
  const Rn = new Map();
  function yr(i, t) {
    t = t || {};
    const e = i + JSON.stringify(t);
    let n = Rn.get(e);
    return n || ((n = new Intl.NumberFormat(i, t)), Rn.set(e, n)), n;
  }
  function Pi(i, t, e) {
    return yr(t, e).format(i);
  }
  const An = {
    values(i) {
      return W(i) ? i : '' + i;
    },
    numeric(i, t, e) {
      if (i === 0) return '0';
      const n = this.chart.options.locale;
      let s,
        o = i;
      if (e.length > 1) {
        const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
        (c < 1e-4 || c > 1e15) && (s = 'scientific'), (o = vr(i, e));
      }
      const r = Dt(Math.abs(o)),
        a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
        l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
      return Object.assign(l, this.options.ticks.format), Pi(i, n, l);
    },
    logarithmic(i, t, e) {
      if (i === 0) return '0';
      const n = e[t].significand || i / Math.pow(10, Math.floor(Dt(i)));
      return [1, 2, 3, 5, 10, 15].includes(n) || t > 0.8 * e.length
        ? An.numeric.call(this, i, t, e)
        : '';
    },
  };
  function vr(i, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
  }
  var We = { formatters: An };
  function kr(i) {
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
      border: { display: !0, dash: [], dashOffset: 0, width: 1 },
      title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
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
        callback: We.formatters.values,
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
      i.describe('scales', { _fallback: 'scale' }),
      i.describe('scale.ticks', {
        _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
        _indexable: (t) => t !== 'backdropPadding',
      });
  }
  const Nt = Object.create(null),
    Oi = Object.create(null);
  function me(i, t) {
    if (!t) return i;
    const e = t.split('.');
    for (let n = 0, s = e.length; n < s; ++n) {
      const o = e[n];
      i = i[o] || (i[o] = Object.create(null));
    }
    return i;
  }
  function Ti(i, t, e) {
    return typeof t == 'string' ? he(me(i, t), e) : he(me(i, ''), t);
  }
  class wr {
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
        (this.hoverBackgroundColor = (n, s) => Ci(s.backgroundColor)),
        (this.hoverBorderColor = (n, s) => Ci(s.borderColor)),
        (this.hoverColor = (n, s) => Ci(s.color)),
        (this.indexAxis = 'x'),
        (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
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
      return Ti(this, t, e);
    }
    get(t) {
      return me(this, t);
    }
    describe(t, e) {
      return Ti(Oi, t, e);
    }
    override(t, e) {
      return Ti(Nt, t, e);
    }
    route(t, e, n, s) {
      const o = me(this, t),
        r = me(this, n),
        a = '_' + e;
      Object.defineProperties(o, {
        [a]: { value: o[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const l = this[a],
              c = r[s];
            return L(l) ? Object.assign({}, c, l) : F(l, c);
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
  var U = new wr(
    {
      _scriptable: (i) => !i.startsWith('on'),
      _indexable: (i) => i !== 'events',
      hover: { _fallback: 'interaction' },
      interaction: { _scriptable: !1, _indexable: !1 },
    },
    [_r, xr, kr]
  );
  function Mr(i) {
    return !i || N(i.size) || N(i.family)
      ? null
      : (i.style ? i.style + ' ' : '') +
          (i.weight ? i.weight + ' ' : '') +
          i.size +
          'px ' +
          i.family;
  }
  function Ve(i, t, e, n, s) {
    let o = t[s];
    return o || ((o = t[s] = i.measureText(s).width), e.push(s)), o > n && (n = o), n;
  }
  function Sr(i, t, e, n) {
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
      if (((f = e[l]), f != null && !W(f))) r = Ve(i, s, o, r, f);
      else if (W(f))
        for (c = 0, h = f.length; c < h; c++)
          (d = f[c]), d != null && !W(d) && (r = Ve(i, s, o, r, d));
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
  function Ln(i, t) {
    (t = t || i.getContext('2d')),
      t.save(),
      t.resetTransform(),
      t.clearRect(0, 0, i.width, i.height),
      t.restore();
  }
  function Di(i, t, e, n) {
    Cr(i, t, e, n, null);
  }
  function Cr(i, t, e, n, s) {
    let o, r, a, l, c, h, f, d;
    const g = t.pointStyle,
      p = t.rotation,
      b = t.radius;
    let m = (p || 0) * ir;
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
            (m += _n),
            i.lineTo(e + Math.sin(m) * h, n - Math.cos(m) * b),
            (m += _n),
            i.lineTo(e + Math.sin(m) * h, n - Math.cos(m) * b),
            i.closePath();
          break;
        case 'rectRounded':
          (c = b * 0.516),
            (l = b - c),
            (r = Math.cos(m + Bt) * l),
            (f = Math.cos(m + Bt) * (s ? s / 2 - c : l)),
            (a = Math.sin(m + Bt) * l),
            (d = Math.sin(m + Bt) * (s ? s / 2 - c : l)),
            i.arc(e - f, n - a, c, m - Z, m - st),
            i.arc(e + d, n - r, c, m - st, m),
            i.arc(e + f, n + a, c, m, m + st),
            i.arc(e - d, n + r, c, m + st, m + Z),
            i.closePath();
          break;
        case 'rect':
          if (!p) {
            (l = Math.SQRT1_2 * b), (h = s ? s / 2 : l), i.rect(e - h, n - l, 2 * h, 2 * l);
            break;
          }
          m += Bt;
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
          m += Bt;
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
            (m += Bt),
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
  function xt(i, t, e) {
    return (
      (e = e || 0.5),
      !t || (i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e)
    );
  }
  function En(i, t) {
    i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
  }
  function In(i) {
    i.restore();
  }
  function Pr(i, t, e, n, s) {
    if (!t) return i.lineTo(e.x, e.y);
    if (s === 'middle') {
      const o = (t.x + e.x) / 2;
      i.lineTo(o, t.y), i.lineTo(o, e.y);
    } else (s === 'after') != !!n ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
    i.lineTo(e.x, e.y);
  }
  function Or(i, t, e, n) {
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
  function Tr(i, t) {
    t.translation && i.translate(t.translation[0], t.translation[1]),
      N(t.rotation) || i.rotate(t.rotation),
      t.color && (i.fillStyle = t.color),
      t.textAlign && (i.textAlign = t.textAlign),
      t.textBaseline && (i.textBaseline = t.textBaseline);
  }
  function Dr(i, t, e, n, s) {
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
  function Rr(i, t) {
    const e = i.fillStyle;
    (i.fillStyle = t.color), i.fillRect(t.left, t.top, t.width, t.height), (i.fillStyle = e);
  }
  function be(i, t, e, n, s, o = {}) {
    const r = W(t) ? t : [t],
      a = o.strokeWidth > 0 && o.strokeColor !== '';
    let l, c;
    for (i.save(), i.font = s.string, Tr(i, o), l = 0; l < r.length; ++l)
      (c = r[l]),
        o.backdrop && Rr(i, o.backdrop),
        a &&
          (o.strokeColor && (i.strokeStyle = o.strokeColor),
          N(o.strokeWidth) || (i.lineWidth = o.strokeWidth),
          i.strokeText(c, e, n, o.maxWidth)),
        i.fillText(c, e, n, o.maxWidth),
        Dr(i, e, n, c, o),
        (n += Number(s.lineHeight));
    i.restore();
  }
  function Ri(i, t) {
    const { x: e, y: n, w: s, h: o, radius: r } = t;
    i.arc(e + r.topLeft, n + r.topLeft, r.topLeft, -st, Z, !0),
      i.lineTo(e, n + o - r.bottomLeft),
      i.arc(e + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, Z, st, !0),
      i.lineTo(e + s - r.bottomRight, n + o),
      i.arc(e + s - r.bottomRight, n + o - r.bottomRight, r.bottomRight, st, 0, !0),
      i.lineTo(e + s, n + r.topRight),
      i.arc(e + s - r.topRight, n + r.topRight, r.topRight, 0, -st, !0),
      i.lineTo(e + r.topLeft, n);
  }
  const Ar = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    Lr = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function Er(i, t) {
    const e = ('' + i).match(Ar);
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
  const Ir = (i) => +i || 0;
  function Fn(i, t) {
    const e = {},
      n = L(t),
      s = n ? Object.keys(t) : t,
      o = L(i) ? (n ? (r) => F(i[r], i[t[r]]) : (r) => i[r]) : () => i;
    for (const r of s) e[r] = Ir(o(r));
    return e;
  }
  function Fr(i) {
    return Fn(i, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
  }
  function _e(i) {
    return Fn(i, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
  function lt(i) {
    const t = Fr(i);
    return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
  }
  function et(i, t) {
    (i = i || {}), (t = t || U.font);
    let e = F(i.size, t.size);
    typeof e == 'string' && (e = parseInt(e, 10));
    let n = F(i.style, t.style);
    n &&
      !('' + n).match(Lr) &&
      (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0));
    const s = {
      family: F(i.family, t.family),
      lineHeight: Er(F(i.lineHeight, t.lineHeight), e),
      size: e,
      style: n,
      weight: F(i.weight, t.weight),
      string: '',
    };
    return (s.string = Mr(s)), s;
  }
  function He(i, t, e, n) {
    let s = !0,
      o,
      r,
      a;
    for (o = 0, r = i.length; o < r; ++o)
      if (
        ((a = i[o]),
        a !== void 0 &&
          (t !== void 0 && typeof a == 'function' && ((a = a(t)), (s = !1)),
          e !== void 0 && W(a) && ((a = a[e % a.length]), (s = !1)),
          a !== void 0))
      )
        return n && !s && (n.cacheable = !1), a;
  }
  function zr(i, t, e) {
    const { min: n, max: s } = i,
      o = qo(t, (s - n) / 2),
      r = (a, l) => (e && a === 0 ? 0 : a + l);
    return { min: r(n, -Math.abs(o)), max: r(s, o) };
  }
  function At(i, t) {
    return Object.assign(Object.create(i), t);
  }
  function Ai(i, t = [''], e, n, s = () => i[0]) {
    const o = e || i;
    typeof n > 'u' && (n = Wn('_fallback', i));
    const r = {
      [Symbol.toStringTag]: 'Object',
      _cacheable: !0,
      _scopes: i,
      _rootScopes: o,
      _fallback: n,
      _getTarget: s,
      override: (a) => Ai([a, ...i], t, o, n),
    };
    return new Proxy(r, {
      deleteProperty(a, l) {
        return delete a[l], delete a._keys, delete i[0][l], !0;
      },
      get(a, l) {
        return Bn(a, l, () => $r(l, t, i, a));
      },
      getOwnPropertyDescriptor(a, l) {
        return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(i[0]);
      },
      has(a, l) {
        return Vn(a).includes(l);
      },
      ownKeys(a) {
        return Vn(a);
      },
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
      _stack: new Set(),
      _descriptors: zn(i, n),
      setContext: (o) => ee(i, o, e, n),
      override: (o) => ee(i.override(o), t, e, n),
    };
    return new Proxy(s, {
      deleteProperty(o, r) {
        return delete o[r], delete i[r], !0;
      },
      get(o, r, a) {
        return Bn(o, r, () => jr(o, r, a));
      },
      getOwnPropertyDescriptor(o, r) {
        return o._descriptors.allKeys
          ? Reflect.has(i, r)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(i, r);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(i);
      },
      has(o, r) {
        return Reflect.has(i, r);
      },
      ownKeys() {
        return Reflect.ownKeys(i);
      },
      set(o, r, a) {
        return (i[r] = a), delete o[r], !0;
      },
    });
  }
  function zn(i, t = { scriptable: !0, indexable: !0 }) {
    const {
      _scriptable: e = t.scriptable,
      _indexable: n = t.indexable,
      _allKeys: s = t.allKeys,
    } = i;
    return {
      allKeys: s,
      scriptable: e,
      indexable: n,
      isScriptable: Tt(e) ? e : () => e,
      isIndexable: Tt(n) ? n : () => n,
    };
  }
  const Br = (i, t) => (i ? i + vi(t) : t),
    Li = (i, t) =>
      L(t) && i !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object);
  function Bn(i, t, e) {
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
    const n = e();
    return (i[t] = n), n;
  }
  function jr(i, t, e) {
    const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = i;
    let a = n[t];
    return (
      Tt(a) && r.isScriptable(t) && (a = Nr(t, a, i, e)),
      W(a) && a.length && (a = Wr(t, a, i, r.isIndexable)),
      Li(t, a) && (a = ee(a, s, o && o[t], r)),
      a
    );
  }
  function Nr(i, t, e, n) {
    const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
    if (a.has(i)) throw new Error('Recursion detected: ' + Array.from(a).join('->') + '->' + i);
    a.add(i);
    let l = t(o, r || n);
    return a.delete(i), Li(i, l) && (l = Ei(s._scopes, s, i, l)), l;
  }
  function Wr(i, t, e, n) {
    const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
    if (typeof o.index < 'u' && n(i)) return t[o.index % t.length];
    if (L(t[0])) {
      const l = t,
        c = s._scopes.filter((h) => h !== l);
      t = [];
      for (const h of l) {
        const f = Ei(c, s, i, h);
        t.push(ee(f, o, r && r[i], a));
      }
    }
    return t;
  }
  function jn(i, t, e) {
    return Tt(i) ? i(t, e) : i;
  }
  const Vr = (i, t) => (i === !0 ? t : typeof i == 'string' ? ze(t, i) : void 0);
  function Hr(i, t, e, n, s) {
    for (const o of t) {
      const r = Vr(e, o);
      if (r) {
        i.add(r);
        const a = jn(r._fallback, e, s);
        if (typeof a < 'u' && a !== e && a !== n) return a;
      } else if (r === !1 && typeof n < 'u' && e !== n) return null;
    }
    return !1;
  }
  function Ei(i, t, e, n) {
    const s = t._rootScopes,
      o = jn(t._fallback, e, n),
      r = [...i, ...s],
      a = new Set();
    a.add(n);
    let l = Nn(a, r, e, o || e, n);
    return l === null || (typeof o < 'u' && o !== e && ((l = Nn(a, r, o, l, n)), l === null))
      ? !1
      : Ai(Array.from(a), [''], s, o, () => Yr(t, e, n));
  }
  function Nn(i, t, e, n, s) {
    for (; e; ) e = Hr(i, t, e, n, s);
    return e;
  }
  function Yr(i, t, e) {
    const n = i._getTarget();
    t in n || (n[t] = {});
    const s = n[t];
    return W(s) && L(e) ? e : s || {};
  }
  function $r(i, t, e, n) {
    let s;
    for (const o of t)
      if (((s = Wn(Br(o, i), e)), typeof s < 'u')) return Li(i, s) ? Ei(e, n, i, s) : s;
  }
  function Wn(i, t) {
    for (const e of t) {
      if (!e) continue;
      const n = e[i];
      if (typeof n < 'u') return n;
    }
  }
  function Vn(i) {
    let t = i._keys;
    return t || (t = i._keys = Ur(i._scopes)), t;
  }
  function Ur(i) {
    const t = new Set();
    for (const e of i) for (const n of Object.keys(e).filter((s) => !s.startsWith('_'))) t.add(n);
    return Array.from(t);
  }
  const Xr = Number.EPSILON || 1e-14,
    ie = (i, t) => t < i.length && !i[t].skip && i[t],
    Hn = (i) => (i === 'x' ? 'y' : 'x');
  function Kr(i, t, e, n) {
    const s = i.skip ? t : i,
      o = t,
      r = e.skip ? t : e,
      a = wi(o, s),
      l = wi(r, o);
    let c = a / (a + l),
      h = l / (a + l);
    (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
    const f = n * c,
      d = n * h;
    return {
      previous: { x: o.x - f * (r.x - s.x), y: o.y - f * (r.y - s.y) },
      next: { x: o.x + d * (r.x - s.x), y: o.y + d * (r.y - s.y) },
    };
  }
  function qr(i, t, e) {
    const n = i.length;
    let s,
      o,
      r,
      a,
      l,
      c = ie(i, 0);
    for (let h = 0; h < n - 1; ++h)
      if (((l = c), (c = ie(i, h + 1)), !(!l || !c))) {
        if (de(t[h], 0, Xr)) {
          e[h] = e[h + 1] = 0;
          continue;
        }
        (s = e[h] / t[h]),
          (o = e[h + 1] / t[h]),
          (a = Math.pow(s, 2) + Math.pow(o, 2)),
          !(a <= 9) && ((r = 3 / Math.sqrt(a)), (e[h] = s * r * t[h]), (e[h + 1] = o * r * t[h]));
      }
  }
  function Gr(i, t, e = 'x') {
    const n = Hn(e),
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
  function Zr(i, t = 'x') {
    const e = Hn(t),
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
    qr(i, s, o), Gr(i, o, t);
  }
  function Ye(i, t, e) {
    return Math.max(Math.min(i, e), t);
  }
  function Jr(i, t) {
    let e,
      n,
      s,
      o,
      r,
      a = xt(i[0], t);
    for (e = 0, n = i.length; e < n; ++e)
      (r = o),
        (o = a),
        (a = e < n - 1 && xt(i[e + 1], t)),
        o &&
          ((s = i[e]),
          r && ((s.cp1x = Ye(s.cp1x, t.left, t.right)), (s.cp1y = Ye(s.cp1y, t.top, t.bottom))),
          a && ((s.cp2x = Ye(s.cp2x, t.left, t.right)), (s.cp2y = Ye(s.cp2y, t.top, t.bottom))));
  }
  function Qr(i, t, e, n, s) {
    let o, r, a, l;
    if ((t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === 'monotone'))
      Zr(i, s);
    else {
      let c = n ? i[i.length - 1] : i[0];
      for (o = 0, r = i.length; o < r; ++o)
        (a = i[o]),
          (l = Kr(c, a, i[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension)),
          (a.cp1x = l.previous.x),
          (a.cp1y = l.previous.y),
          (a.cp2x = l.next.x),
          (a.cp2y = l.next.y),
          (c = a);
    }
    t.capBezierPoints && Jr(i, e);
  }
  function Yn() {
    return typeof window < 'u' && typeof document < 'u';
  }
  function Ii(i) {
    let t = i.parentNode;
    return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
  }
  function $e(i, t, e) {
    let n;
    return (
      typeof i == 'string'
        ? ((n = parseInt(i, 10)), i.indexOf('%') !== -1 && (n = (n / 100) * t.parentNode[e]))
        : (n = i),
      n
    );
  }
  const Ue = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
  function ta(i, t) {
    return Ue(i).getPropertyValue(t);
  }
  const ea = ['top', 'right', 'bottom', 'left'];
  function Vt(i, t, e) {
    const n = {};
    e = e ? '-' + e : '';
    for (let s = 0; s < 4; s++) {
      const o = ea[s];
      n[o] = parseFloat(i[t + '-' + o + e]) || 0;
    }
    return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
  }
  const ia = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
  function na(i, t) {
    const e = i.touches,
      n = e && e.length ? e[0] : i,
      { offsetX: s, offsetY: o } = n;
    let r = !1,
      a,
      l;
    if (ia(s, o, i.target)) (a = s), (l = o);
    else {
      const c = t.getBoundingClientRect();
      (a = n.clientX - c.left), (l = n.clientY - c.top), (r = !0);
    }
    return { x: a, y: l, box: r };
  }
  function Ht(i, t) {
    if ('native' in i) return i;
    const { canvas: e, currentDevicePixelRatio: n } = t,
      s = Ue(e),
      o = s.boxSizing === 'border-box',
      r = Vt(s, 'padding'),
      a = Vt(s, 'border', 'width'),
      { x: l, y: c, box: h } = na(i, e),
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
  function sa(i, t, e) {
    let n, s;
    if (t === void 0 || e === void 0) {
      const o = Ii(i);
      if (!o) (t = i.clientWidth), (e = i.clientHeight);
      else {
        const r = o.getBoundingClientRect(),
          a = Ue(o),
          l = Vt(a, 'border', 'width'),
          c = Vt(a, 'padding');
        (t = r.width - c.width - l.width),
          (e = r.height - c.height - l.height),
          (n = $e(a.maxWidth, o, 'clientWidth')),
          (s = $e(a.maxHeight, o, 'clientHeight'));
      }
    }
    return { width: t, height: e, maxWidth: n || je, maxHeight: s || je };
  }
  const Xe = (i) => Math.round(i * 10) / 10;
  function oa(i, t, e, n) {
    const s = Ue(i),
      o = Vt(s, 'margin'),
      r = $e(s.maxWidth, i, 'clientWidth') || je,
      a = $e(s.maxHeight, i, 'clientHeight') || je,
      l = sa(i, t, e);
    let { width: c, height: h } = l;
    if (s.boxSizing === 'content-box') {
      const d = Vt(s, 'border', 'width'),
        g = Vt(s, 'padding');
      (c -= g.width + d.width), (h -= g.height + d.height);
    }
    return (
      (c = Math.max(0, c - o.width)),
      (h = Math.max(0, n ? c / n : h - o.height)),
      (c = Xe(Math.min(c, r, l.maxWidth))),
      (h = Xe(Math.min(h, a, l.maxHeight))),
      c && !h && (h = Xe(c / 2)),
      (t !== void 0 || e !== void 0) &&
        n &&
        l.height &&
        h > l.height &&
        ((h = l.height), (c = Xe(Math.floor(h * n)))),
      { width: c, height: h }
    );
  }
  function $n(i, t, e) {
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
  const ra = (function () {
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
  function Un(i, t) {
    const e = ta(i, t),
      n = e && e.match(/^(\d+)(\.\d+)?px$/);
    return n ? +n[1] : void 0;
  }
  function Yt(i, t, e, n) {
    return { x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) };
  }
  function aa(i, t, e, n) {
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
  function la(i, t, e, n) {
    const s = { x: i.cp2x, y: i.cp2y },
      o = { x: t.cp1x, y: t.cp1y },
      r = Yt(i, s, e),
      a = Yt(s, o, e),
      l = Yt(o, t, e),
      c = Yt(r, a, e),
      h = Yt(a, l, e);
    return Yt(c, h, e);
  }
  const ca = function (i, t) {
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
    ha = function () {
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
  function Fi(i, t, e) {
    return i ? ca(t, e) : ha();
  }
  function fa(i, t) {
    let e, n;
    (t === 'ltr' || t === 'rtl') &&
      ((e = i.canvas.style),
      (n = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
      e.setProperty('direction', t, 'important'),
      (i.prevTextDirection = n));
  }
  function da(i, t) {
    t !== void 0 &&
      (delete i.prevTextDirection, i.canvas.style.setProperty('direction', t[0], t[1]));
  }
  function Xn(i) {
    return i === 'angle'
      ? { between: kn, compare: rr, normalize: ut }
      : { between: lr, compare: (t, e) => t - e, normalize: (t) => t };
  }
  function Kn({ start: i, end: t, count: e, loop: n, style: s }) {
    return { start: i % e, end: t % e, loop: n && (t - i + 1) % e === 0, style: s };
  }
  function ua(i, t, e) {
    const { property: n, start: s, end: o } = e,
      { between: r, normalize: a } = Xn(n),
      l = t.length;
    let { start: c, end: h, loop: f } = i,
      d,
      g;
    if (f) {
      for (c += l, h += l, d = 0, g = l; d < g && r(a(t[c % l][n]), s, o); ++d) c--, h--;
      (c %= l), (h %= l);
    }
    return h < c && (h += l), { start: c, end: h, loop: f, style: i.style };
  }
  function ga(i, t, e) {
    if (!e) return [i];
    const { property: n, start: s, end: o } = e,
      r = t.length,
      { compare: a, between: l, normalize: c } = Xn(n),
      { start: h, end: f, loop: d, style: g } = ua(i, t, e),
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
              (p.push(Kn({ start: m, end: C, loop: d, count: r, style: g })), (m = null)),
            (D = C),
            (M = _)));
    return m !== null && p.push(Kn({ start: m, end: f, loop: d, count: r, style: g })), p;
  }
  function pa(i, t) {
    const e = [],
      n = i.segments;
    for (let s = 0; s < n.length; s++) {
      const o = ga(n[s], i.points, t);
      o.length && e.push(...o);
    }
    return e;
  }
  function ma(i, t, e, n) {
    let s = 0,
      o = t - 1;
    if (e && !n) for (; s < t && !i[s].skip; ) s++;
    for (; s < t && i[s].skip; ) s++;
    for (s %= t, e && (o += s); o > s && i[o % t].skip; ) o--;
    return (o %= t), { start: s, end: o };
  }
  function ba(i, t, e, n) {
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
          o.push({ start: t % s, end: (l - 1) % s, loop: n }),
          (t = r = c.stop ? l : null))
        : ((r = l), a.skip && (t = l)),
        (a = c);
    }
    return r !== null && o.push({ start: t % s, end: r % s, loop: n }), o;
  }
  function _a(i, t) {
    const e = i.points,
      n = i.options.spanGaps,
      s = e.length;
    if (!s) return [];
    const o = !!i._loop,
      { start: r, end: a } = ma(e, s, o, n);
    if (n === !0) return qn(i, [{ start: r, end: a, loop: o }], e, t);
    const l = a < r ? a + s : a,
      c = !!i._fullLoop && r === 0 && a === s - 1;
    return qn(i, ba(e, r, l, c), e, t);
  }
  function qn(i, t, e, n) {
    return !n || !n.setContext || !e ? t : xa(i, t, e, n);
  }
  function xa(i, t, e, n) {
    const s = i._chart.getContext(),
      o = Gn(i.options),
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
          (c.push({ start: p % l, end: b % l, loop: m, style: _ }), (h = _), (f = b % l));
      }
    }
    for (const p of t) {
      f = a ? f : p.start;
      let b = e[f % l],
        m;
      for (d = f + 1; d <= p.end; d++) {
        const _ = e[d % l];
        (m = Gn(
          n.setContext(
            At(s, {
              type: 'segment',
              p0: b,
              p1: _,
              p0DataIndex: (d - 1) % l,
              p1DataIndex: d % l,
              datasetIndex: r,
            })
          )
        )),
          ya(m, h) && g(f, d - 1, p.loop, h),
          (b = _),
          (h = m);
      }
      f < d - 1 && g(f, d - 1, p.loop, h);
    }
    return c;
  }
  function Gn(i) {
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
  function ya(i, t) {
    if (!t) return !1;
    const e = [],
      n = function (s, o) {
        return Si(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
      };
    return JSON.stringify(i, n) !== JSON.stringify(t, n);
  }
  /*!
   * Chart.js v4.3.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ class va {
    constructor() {
      (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    _notify(t, e, n, s) {
      const o = e.listeners[s],
        r = e.duration;
      o.forEach((a) =>
        a({ chart: t, initial: e.initial, numSteps: r, currentStep: Math.min(n - e.start, r) })
      );
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = Sn.call(window, () => {
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
          ((n = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
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
  var yt = new va();
  const Zn = 'transparent',
    ka = {
      boolean(i, t, e) {
        return e > 0.5 ? t : i;
      },
      color(i, t, e) {
        const n = Dn(i || Zn),
          s = n.valid && Dn(t || Zn);
        return s && s.valid ? s.mix(n, e).hexString() : t;
      },
      number(i, t, e) {
        return i + (t - i) * e;
      },
    };
  class wa {
    constructor(t, e, n, s) {
      const o = e[n];
      s = He([t.to, s, o, t.from]);
      const r = He([t.from, o, s]);
      (this._active = !0),
        (this._fn = t.fn || ka[t.type || typeof r]),
        (this._easing = pe[t.easing] || pe.linear),
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
          (this._to = He([t.to, e, s, t.from])),
          (this._from = He([t.from, s, e]));
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
        t.push({ res: e, rej: n });
      });
    }
    _notify(t) {
      const e = t ? 'res' : 'rej',
        n = this._promises || [];
      for (let s = 0; s < n.length; s++) n[s][e]();
    }
  }
  class Jn {
    constructor(t, e) {
      (this._chart = t), (this._properties = new Map()), this.configure(e);
    }
    configure(t) {
      if (!L(t)) return;
      const e = Object.keys(U.animation),
        n = this._properties;
      Object.getOwnPropertyNames(t).forEach((s) => {
        const o = t[s];
        if (!L(o)) return;
        const r = {};
        for (const a of e) r[a] = o[a];
        ((W(o.properties) && o.properties) || [s]).forEach((a) => {
          (a === s || !n.has(a)) && n.set(a, r);
        });
      });
    }
    _animateOptions(t, e) {
      const n = e.options,
        s = Sa(t, n);
      if (!s) return [];
      const o = this._createAnimations(s, n);
      return (
        n.$shared &&
          Ma(t.options.$animations, n).then(
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
        (o[c] = f = new wa(d, t, c, h)), s.push(f);
      }
      return s;
    }
    update(t, e) {
      if (this._properties.size === 0) {
        Object.assign(t, e);
        return;
      }
      const n = this._createAnimations(t, e);
      if (n.length) return yt.add(this._chart, n), !0;
    }
  }
  function Ma(i, t) {
    const e = [],
      n = Object.keys(t);
    for (let s = 0; s < n.length; s++) {
      const o = i[n[s]];
      o && o.active() && e.push(o.wait());
    }
    return Promise.all(e);
  }
  function Sa(i, t) {
    if (!t) return;
    let e = i.options;
    if (!e) {
      i.options = t;
      return;
    }
    return e.$shared && (i.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })), e;
  }
  function Qn(i, t) {
    const e = (i && i.options) || {},
      n = e.reverse,
      s = e.min === void 0 ? t : 0,
      o = e.max === void 0 ? t : 0;
    return { start: n ? o : s, end: n ? s : o };
  }
  function Ca(i, t, e) {
    if (e === !1) return !1;
    const n = Qn(i, e),
      s = Qn(t, e);
    return { top: s.end, right: n.end, bottom: s.start, left: n.start };
  }
  function Pa(i) {
    let t, e, n, s;
    return (
      L(i) ? ((t = i.top), (e = i.right), (n = i.bottom), (s = i.left)) : (t = e = n = s = i),
      { top: t, right: e, bottom: n, left: s, disabled: i === !1 }
    );
  }
  function ts(i, t) {
    const e = [],
      n = i._getSortedDatasetMetas(t);
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) e.push(n[s].index);
    return e;
  }
  function es(i, t, e, n = {}) {
    const s = i.keys,
      o = n.mode === 'single';
    let r, a, l, c;
    if (t !== null) {
      for (r = 0, a = s.length; r < a; ++r) {
        if (((l = +s[r]), l === e)) {
          if (n.all) continue;
          break;
        }
        (c = i.values[l]), J(c) && (o || t === 0 || te(t) === te(c)) && (t += c);
      }
      return t;
    }
  }
  function Oa(i) {
    const t = Object.keys(i),
      e = new Array(t.length);
    let n, s, o;
    for (n = 0, s = t.length; n < s; ++n) (o = t[n]), (e[n] = { x: o, y: i[o] });
    return e;
  }
  function is(i, t) {
    const e = i && i.options.stacked;
    return e || (e === void 0 && t.stack !== void 0);
  }
  function Ta(i, t, e) {
    return `${i.id}.${t.id}.${e.stack || e.type}`;
  }
  function Da(i) {
    const { min: t, max: e, minDefined: n, maxDefined: s } = i.getUserBounds();
    return { min: n ? t : Number.NEGATIVE_INFINITY, max: s ? e : Number.POSITIVE_INFINITY };
  }
  function Ra(i, t, e) {
    const n = i[t] || (i[t] = {});
    return n[e] || (n[e] = {});
  }
  function ns(i, t, e, n) {
    for (const s of t.getMatchingVisibleMetas(n).reverse()) {
      const o = i[s.index];
      if ((e && o > 0) || (!e && o < 0)) return s.index;
    }
    return null;
  }
  function ss(i, t) {
    const { chart: e, _cachedMeta: n } = i,
      s = e._stacks || (e._stacks = {}),
      { iScale: o, vScale: r, index: a } = n,
      l = o.axis,
      c = r.axis,
      h = Ta(o, r, n),
      f = t.length;
    let d;
    for (let g = 0; g < f; ++g) {
      const p = t[g],
        { [l]: b, [c]: m } = p,
        _ = p._stacks || (p._stacks = {});
      (d = _[c] = Ra(s, h, b)),
        (d[a] = m),
        (d._top = ns(d, r, !0, n.type)),
        (d._bottom = ns(d, r, !1, n.type));
      const y = d._visualValues || (d._visualValues = {});
      y[a] = m;
    }
  }
  function zi(i, t) {
    const e = i.scales;
    return Object.keys(e)
      .filter((n) => e[n].axis === t)
      .shift();
  }
  function Aa(i, t) {
    return At(i, {
      active: !1,
      dataset: void 0,
      datasetIndex: t,
      index: t,
      mode: 'default',
      type: 'dataset',
    });
  }
  function La(i, t, e) {
    return At(i, {
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
  function xe(i, t) {
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
  const Bi = (i) => i === 'reset' || i === 'none',
    os = (i, t) => (t ? i : Object.assign({}, i)),
    Ea = (i, t, e) => i && !t.hidden && t._stacked && { keys: ts(e, !0), values: null };
  class ye {
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
        (t._stacked = is(t.vScale, t)),
        this.addElements(),
        this.options.fill &&
          !this.chart.isPluginEnabled('filler') &&
          console.warn(
            "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
          );
    }
    updateIndex(t) {
      this.index !== t && xe(this._cachedMeta), (this.index = t);
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        n = this.getDataset(),
        s = (f, d, g, p) => (f === 'x' ? d : f === 'r' ? p : g),
        o = (e.xAxisID = F(n.xAxisID, zi(t, 'x'))),
        r = (e.yAxisID = F(n.yAxisID, zi(t, 'y'))),
        a = (e.rAxisID = F(n.rAxisID, zi(t, 'r'))),
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
      this._data && Mn(this._data, this), t._stacked && xe(t);
    }
    _dataCheck() {
      const t = this.getDataset(),
        e = t.data || (t.data = []),
        n = this._data;
      if (L(e)) this._data = Oa(e);
      else if (n !== e) {
        if (n) {
          Mn(n, this);
          const s = this._cachedMeta;
          xe(s), (s._parsed = []);
        }
        e && Object.isExtensible(e) && fr(e, this), (this._syncList = []), (this._data = e);
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
      (e._stacked = is(e.vScale, e)),
        e.stack !== n.stack && ((s = !0), xe(e), (e.stack = n.stack)),
        this._resyncElements(t),
        (s || o !== e._stacked) && ss(this, e._parsed);
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
        W(s[t])
          ? (d = this.parseArrayData(n, s, t, e))
          : L(s[t])
          ? (d = this.parseObjectData(n, s, t, e))
          : (d = this.parsePrimitiveData(n, s, t, e));
        const g = () => f[a] === null || (c && f[a] < c[a]);
        for (h = 0; h < e; ++h) (n._parsed[h + t] = f = d[h]), l && (g() && (l = !1), (c = f));
        n._sorted = l;
      }
      r && ss(this, d);
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
        (p = d + n), (f[d] = { [a]: h || o.parse(c[p], p), [l]: r.parse(e[p], p) });
      return f;
    }
    parseArrayData(t, e, n, s) {
      const { xScale: o, yScale: r } = t,
        a = new Array(s);
      let l, c, h, f;
      for (l = 0, c = s; l < c; ++l)
        (h = l + n), (f = e[h]), (a[l] = { x: o.parse(f[0], h), y: r.parse(f[1], h) });
      return a;
    }
    parseObjectData(t, e, n, s) {
      const { xScale: o, yScale: r } = t,
        { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
        c = new Array(s);
      let h, f, d, g;
      for (h = 0, f = s; h < f; ++h)
        (d = h + n), (g = e[d]), (c[h] = { x: o.parse(ze(g, a), d), y: r.parse(ze(g, l), d) });
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
        a = { keys: ts(s, !0), values: e._stacks[t.axis]._visualValues };
      return es(a, r, o.index, { mode: n });
    }
    updateRangeFromParsed(t, e, n, s) {
      const o = n[e.axis];
      let r = o === null ? NaN : o;
      const a = s && n._stacks[e.axis];
      s && a && ((s.values = a), (r = es(s, o, this._cachedMeta.index))),
        (t.min = Math.min(t.min, r)),
        (t.max = Math.max(t.max, r));
    }
    getMinMax(t, e) {
      const n = this._cachedMeta,
        s = n._parsed,
        o = n._sorted && t === n.iScale,
        r = s.length,
        a = this._getOtherScale(t),
        l = Ea(e, n, this.chart),
        c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: h, max: f } = Da(a);
      let d, g;
      function p() {
        g = s[d];
        const b = g[a.axis];
        return !J(g[t.axis]) || h > b || f < b;
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
      for (s = 0, o = e.length; s < o; ++s) (r = e[s][t.axis]), J(r) && n.push(r);
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
        (e._clip = Pa(F(this.options.clip, Ca(e.xScale, e.yScale, this.getMaxOverflow()))));
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
        (o = r.$context || (r.$context = La(this.getContext(), t, r))),
          (o.parsed = this.getParsed(t)),
          (o.raw = s.data[t]),
          (o.index = o.dataIndex = t);
      } else (o = this.$context || (this.$context = Aa(this.chart.getContext(), this.index))), (o.dataset = s), (o.index = o.datasetIndex = this.index);
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
        l = this.enableOptionSharing && Be(n);
      if (a) return os(a, l);
      const c = this.chart.config,
        h = c.datasetElementScopeKeys(this._type, t),
        f = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
        d = c.getOptionScopes(this.getDataset(), h),
        g = Object.keys(U.elements[t]),
        p = () => this.getContext(n, s, e),
        b = c.resolveNamedOptions(d, g, p, f);
      return b.$shared && ((b.$shared = l), (o[r] = Object.freeze(os(b, l)))), b;
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
      const c = new Jn(s, l && l.animations);
      return l && l._cacheable && (o[r] = Object.freeze(c)), c;
    }
    getSharedOptions(t) {
      if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
    }
    includeOptions(t, e) {
      return !e || Bi(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const n = this.resolveDataElementOptions(t, e),
        s = this._sharedOptions,
        o = this.getSharedOptions(n),
        r = this.includeOptions(e, o) || o !== s;
      return this.updateSharedOptions(o, e, n), { sharedOptions: o, includeOptions: r };
    }
    updateElement(t, e, n, s) {
      Bi(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
    }
    updateSharedOptions(t, e, n) {
      t && !Bi(e) && this._resolveAnimations(void 0, e).update(t, n);
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
        n._stacked && xe(n, s);
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
  O(ye, 'defaults', {}), O(ye, 'datasetElementType', null), O(ye, 'dataElementType', null);
  class Ke extends ye {
    initialize() {
      (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
    }
    update(t) {
      const e = this._cachedMeta,
        { dataset: n, data: s = [], _dataset: o } = e,
        r = this.chart._animationsDisabled;
      let { start: a, count: l } = gr(e, s, r);
      (this._drawStart = a),
        (this._drawCount = l),
        pr(e) && ((a = 0), (l = s.length)),
        (n._chart = this.chart),
        (n._datasetIndex = this.index),
        (n._decimated = !!o._decimated),
        (n.points = s);
      const c = this.resolveDatasetElementOptions(t);
      this.options.showLine || (c.borderWidth = 0),
        (c.segment = this.options.segment),
        this.updateElement(n, void 0, { animated: !r, options: c }, t),
        this.updateElements(s, a, l, t);
    }
    updateElements(t, e, n, s) {
      const o = s === 'reset',
        { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
        { sharedOptions: h, includeOptions: f } = this._getSharedOptions(e, s),
        d = r.axis,
        g = a.axis,
        { spanGaps: p, segment: b } = this.options,
        m = ue(p) ? p : Number.POSITIVE_INFINITY,
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
          D = N(C[g]),
          V = (S[d] = r.getPixelForValue(C[d], v)),
          H = (S[g] =
            o || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, C, l) : C[g], v));
        (S.skip = isNaN(V) || isNaN(H) || D),
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
  O(Ke, 'id', 'line'),
    O(Ke, 'defaults', {
      datasetElementType: 'line',
      dataElementType: 'point',
      showLine: !0,
      spanGaps: !1,
    }),
    O(Ke, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } });
  function $t() {
    throw new Error(
      'This method is not implemented: Check that a complete date adapter is provided.'
    );
  }
  class ji {
    constructor(t) {
      O(this, 'options');
      this.options = t || {};
    }
    static override(t) {
      Object.assign(ji.prototype, t);
    }
    init() {}
    formats() {
      return $t();
    }
    parse() {
      return $t();
    }
    format() {
      return $t();
    }
    add() {
      return $t();
    }
    diff() {
      return $t();
    }
    startOf() {
      return $t();
    }
    endOf() {
      return $t();
    }
  }
  var Ia = { _date: ji };
  function Fa(i, t, e, n) {
    const { controller: s, data: o, _sorted: r } = i,
      a = s._cachedMeta.iScale;
    if (a && t === a.axis && t !== 'r' && r && o.length) {
      const l = a._reversePixels ? cr : jt;
      if (n) {
        if (s._sharedOptions) {
          const c = o[0],
            h = typeof c.getRange == 'function' && c.getRange(t);
          if (h) {
            const f = l(o, t, e - h),
              d = l(o, t, e + h);
            return { lo: f.lo, hi: d.hi };
          }
        }
      } else return l(o, t, e);
    }
    return { lo: 0, hi: o.length - 1 };
  }
  function ve(i, t, e, n, s) {
    const o = i.getSortedVisibleDatasetMetas(),
      r = e[t];
    for (let a = 0, l = o.length; a < l; ++a) {
      const { index: c, data: h } = o[a],
        { lo: f, hi: d } = Fa(o[a], t, r, s);
      for (let g = f; g <= d; ++g) {
        const p = h[g];
        p.skip || n(p, c, g);
      }
    }
  }
  function za(i) {
    const t = i.indexOf('x') !== -1,
      e = i.indexOf('y') !== -1;
    return function (n, s) {
      const o = t ? Math.abs(n.x - s.x) : 0,
        r = e ? Math.abs(n.y - s.y) : 0;
      return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
    };
  }
  function Ni(i, t, e, n, s) {
    const o = [];
    return (
      (!s && !i.isPointInArea(t)) ||
        ve(
          i,
          e,
          t,
          function (a, l, c) {
            (!s && !xt(a, i.chartArea, 0)) ||
              (a.inRange(t.x, t.y, n) && o.push({ element: a, datasetIndex: l, index: c }));
          },
          !0
        ),
      o
    );
  }
  function Ba(i, t, e, n) {
    let s = [];
    function o(r, a, l) {
      const { startAngle: c, endAngle: h } = r.getProps(['startAngle', 'endAngle'], n),
        { angle: f } = or(r, { x: t.x, y: t.y });
      kn(f, c, h) && s.push({ element: r, datasetIndex: a, index: l });
    }
    return ve(i, e, t, o), s;
  }
  function ja(i, t, e, n, s, o) {
    let r = [];
    const a = za(e);
    let l = Number.POSITIVE_INFINITY;
    function c(h, f, d) {
      const g = h.inRange(t.x, t.y, s);
      if (n && !g) return;
      const p = h.getCenterPoint(s);
      if (!(!!o || i.isPointInArea(p)) && !g) return;
      const m = a(t, p);
      m < l
        ? ((r = [{ element: h, datasetIndex: f, index: d }]), (l = m))
        : m === l && r.push({ element: h, datasetIndex: f, index: d });
    }
    return ve(i, e, t, c), r;
  }
  function Wi(i, t, e, n, s, o) {
    return !o && !i.isPointInArea(t) ? [] : e === 'r' && !n ? Ba(i, t, e, s) : ja(i, t, e, n, s, o);
  }
  function rs(i, t, e, n, s) {
    const o = [],
      r = e === 'x' ? 'inXRange' : 'inYRange';
    let a = !1;
    return (
      ve(i, e, t, (l, c, h) => {
        l[r](t[e], s) &&
          (o.push({ element: l, datasetIndex: c, index: h }), (a = a || l.inRange(t.x, t.y, s)));
      }),
      n && !a ? [] : o
    );
  }
  var Na = {
    evaluateInteractionItems: ve,
    modes: {
      index(i, t, e, n) {
        const s = Ht(t, i),
          o = e.axis || 'x',
          r = e.includeInvisible || !1,
          a = e.intersect ? Ni(i, s, o, n, r) : Wi(i, s, o, !1, n, r),
          l = [];
        return a.length
          ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
              const h = a[0].index,
                f = c.data[h];
              f && !f.skip && l.push({ element: f, datasetIndex: c.index, index: h });
            }),
            l)
          : [];
      },
      dataset(i, t, e, n) {
        const s = Ht(t, i),
          o = e.axis || 'xy',
          r = e.includeInvisible || !1;
        let a = e.intersect ? Ni(i, s, o, n, r) : Wi(i, s, o, !1, n, r);
        if (a.length > 0) {
          const l = a[0].datasetIndex,
            c = i.getDatasetMeta(l).data;
          a = [];
          for (let h = 0; h < c.length; ++h) a.push({ element: c[h], datasetIndex: l, index: h });
        }
        return a;
      },
      point(i, t, e, n) {
        const s = Ht(t, i),
          o = e.axis || 'xy',
          r = e.includeInvisible || !1;
        return Ni(i, s, o, n, r);
      },
      nearest(i, t, e, n) {
        const s = Ht(t, i),
          o = e.axis || 'xy',
          r = e.includeInvisible || !1;
        return Wi(i, s, o, e.intersect, n, r);
      },
      x(i, t, e, n) {
        const s = Ht(t, i);
        return rs(i, s, 'x', e.intersect, n);
      },
      y(i, t, e, n) {
        const s = Ht(t, i);
        return rs(i, s, 'y', e.intersect, n);
      },
    },
  };
  const as = ['left', 'top', 'right', 'bottom'];
  function ke(i, t) {
    return i.filter((e) => e.pos === t);
  }
  function ls(i, t) {
    return i.filter((e) => as.indexOf(e.pos) === -1 && e.box.axis === t);
  }
  function we(i, t) {
    return i.sort((e, n) => {
      const s = t ? n : e,
        o = t ? e : n;
      return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
    });
  }
  function Wa(i) {
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
  function Va(i) {
    const t = {};
    for (const e of i) {
      const { stack: n, pos: s, stackWeight: o } = e;
      if (!n || !as.includes(s)) continue;
      const r = t[n] || (t[n] = { count: 0, placed: 0, weight: 0, size: 0 });
      r.count++, (r.weight += o);
    }
    return t;
  }
  function Ha(i, t) {
    const e = Va(i),
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
  function Ya(i) {
    const t = Wa(i),
      e = we(
        t.filter((c) => c.box.fullSize),
        !0
      ),
      n = we(ke(t, 'left'), !0),
      s = we(ke(t, 'right')),
      o = we(ke(t, 'top'), !0),
      r = we(ke(t, 'bottom')),
      a = ls(t, 'x'),
      l = ls(t, 'y');
    return {
      fullSize: e,
      leftAndTop: n.concat(o),
      rightAndBottom: s.concat(l).concat(r).concat(a),
      chartArea: ke(t, 'chartArea'),
      vertical: n.concat(s).concat(l),
      horizontal: o.concat(r).concat(a),
    };
  }
  function cs(i, t, e, n) {
    return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
  }
  function hs(i, t) {
    (i.top = Math.max(i.top, t.top)),
      (i.left = Math.max(i.left, t.left)),
      (i.bottom = Math.max(i.bottom, t.bottom)),
      (i.right = Math.max(i.right, t.right));
  }
  function $a(i, t, e, n) {
    const { pos: s, box: o } = e,
      r = i.maxPadding;
    if (!L(s)) {
      e.size && (i[s] -= e.size);
      const f = n[e.stack] || { size: 0, count: 1 };
      (f.size = Math.max(f.size, e.horizontal ? o.height : o.width)),
        (e.size = f.size / f.count),
        (i[s] += e.size);
    }
    o.getPadding && hs(r, o.getPadding());
    const a = Math.max(0, t.outerWidth - cs(r, i, 'left', 'right')),
      l = Math.max(0, t.outerHeight - cs(r, i, 'top', 'bottom')),
      c = a !== i.w,
      h = l !== i.h;
    return (i.w = a), (i.h = l), e.horizontal ? { same: c, other: h } : { same: h, other: c };
  }
  function Ua(i) {
    const t = i.maxPadding;
    function e(n) {
      const s = Math.max(t[n] - i[n], 0);
      return (i[n] += s), s;
    }
    (i.y += e('top')), (i.x += e('left')), e('right'), e('bottom');
  }
  function Xa(i, t) {
    const e = t.maxPadding;
    function n(s) {
      const o = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        s.forEach((r) => {
          o[r] = Math.max(t[r], e[r]);
        }),
        o
      );
    }
    return n(i ? ['left', 'right'] : ['top', 'bottom']);
  }
  function Me(i, t, e, n) {
    const s = [];
    let o, r, a, l, c, h;
    for (o = 0, r = i.length, c = 0; o < r; ++o) {
      (a = i[o]), (l = a.box), l.update(a.width || t.w, a.height || t.h, Xa(a.horizontal, t));
      const { same: f, other: d } = $a(t, e, a, n);
      (c |= f && s.length), (h = h || d), l.fullSize || s.push(a);
    }
    return (c && Me(s, t, e, n)) || h;
  }
  function qe(i, t, e, n, s) {
    (i.top = e), (i.left = t), (i.right = t + n), (i.bottom = e + s), (i.width = n), (i.height = s);
  }
  function fs(i, t, e, n) {
    const s = e.padding;
    let { x: o, y: r } = t;
    for (const a of i) {
      const l = a.box,
        c = n[a.stack] || { count: 1, placed: 0, weight: 1 },
        h = a.stackWeight / c.weight || 1;
      if (a.horizontal) {
        const f = t.w * h,
          d = c.size || l.height;
        Be(c.start) && (r = c.start),
          l.fullSize
            ? qe(l, s.left, r, e.outerWidth - s.right - s.left, d)
            : qe(l, t.left + c.placed, r, f, d),
          (c.start = r),
          (c.placed += f),
          (r = l.bottom);
      } else {
        const f = t.h * h,
          d = c.size || l.width;
        Be(c.start) && (o = c.start),
          l.fullSize
            ? qe(l, o, s.top, d, e.outerHeight - s.bottom - s.top)
            : qe(l, o, t.top + c.placed, d, f),
          (c.start = o),
          (c.placed += f),
          (o = l.right);
      }
    }
    (t.x = o), (t.y = r);
  }
  var Lt = {
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
      const s = lt(i.options.layout.padding),
        o = Math.max(t - s.width, 0),
        r = Math.max(e - s.height, 0),
        a = Ya(i.boxes),
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
      hs(d, lt(n));
      const g = Object.assign({ maxPadding: d, w: o, h: r, x: s.left, y: s.top }, s),
        p = Ha(l.concat(c), f);
      Me(a.fullSize, g, f, p),
        Me(l, g, f, p),
        Me(c, g, f, p) && Me(l, g, f, p),
        Ua(g),
        fs(a.leftAndTop, g, f, p),
        (g.x += g.w),
        (g.y += g.h),
        fs(a.rightAndBottom, g, f, p),
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
            m.update(g.w, g.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class ds {
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
        { width: e, height: Math.max(0, s ? Math.floor(e / s) : n) }
      );
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class Ka extends ds {
    acquireContext(t) {
      return (t && t.getContext && t.getContext('2d')) || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Ge = '$chartjs',
    qa = {
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
    us = (i) => i === null || i === '';
  function Ga(i, t) {
    const e = i.style,
      n = i.getAttribute('height'),
      s = i.getAttribute('width');
    if (
      ((i[Ge] = {
        initial: {
          height: n,
          width: s,
          style: { display: e.display, height: e.height, width: e.width },
        },
      }),
      (e.display = e.display || 'block'),
      (e.boxSizing = e.boxSizing || 'border-box'),
      us(s))
    ) {
      const o = Un(i, 'width');
      o !== void 0 && (i.width = o);
    }
    if (us(n))
      if (i.style.height === '') i.height = i.width / (t || 2);
      else {
        const o = Un(i, 'height');
        o !== void 0 && (i.height = o);
      }
    return i;
  }
  const gs = ra ? { passive: !0 } : !1;
  function Za(i, t, e) {
    i.addEventListener(t, e, gs);
  }
  function Ja(i, t, e) {
    i.canvas.removeEventListener(t, e, gs);
  }
  function Qa(i, t) {
    const e = qa[i.type] || i.type,
      { x: n, y: s } = Ht(i, t);
    return { type: e, chart: t, native: i, x: n !== void 0 ? n : null, y: s !== void 0 ? s : null };
  }
  function Ze(i, t) {
    for (const e of i) if (e === t || e.contains(t)) return !0;
  }
  function tl(i, t, e) {
    const n = i.canvas,
      s = new MutationObserver((o) => {
        let r = !1;
        for (const a of o) (r = r || Ze(a.addedNodes, n)), (r = r && !Ze(a.removedNodes, n));
        r && e();
      });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
  }
  function el(i, t, e) {
    const n = i.canvas,
      s = new MutationObserver((o) => {
        let r = !1;
        for (const a of o) (r = r || Ze(a.removedNodes, n)), (r = r && !Ze(a.addedNodes, n));
        r && e();
      });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
  }
  const Se = new Map();
  let ps = 0;
  function ms() {
    const i = window.devicePixelRatio;
    i !== ps &&
      ((ps = i),
      Se.forEach((t, e) => {
        e.currentDevicePixelRatio !== i && t();
      }));
  }
  function il(i, t) {
    Se.size || window.addEventListener('resize', ms), Se.set(i, t);
  }
  function nl(i) {
    Se.delete(i), Se.size || window.removeEventListener('resize', ms);
  }
  function sl(i, t, e) {
    const n = i.canvas,
      s = n && Ii(n);
    if (!s) return;
    const o = Cn((a, l) => {
        const c = s.clientWidth;
        e(a, l), c < s.clientWidth && e();
      }, window),
      r = new ResizeObserver((a) => {
        const l = a[0],
          c = l.contentRect.width,
          h = l.contentRect.height;
        (c === 0 && h === 0) || o(c, h);
      });
    return r.observe(s), il(i, o), r;
  }
  function Vi(i, t, e) {
    e && e.disconnect(), t === 'resize' && nl(i);
  }
  function ol(i, t, e) {
    const n = i.canvas,
      s = Cn((o) => {
        i.ctx !== null && e(Qa(o, i));
      }, i);
    return Za(n, t, s), s;
  }
  class rl extends ds {
    acquireContext(t, e) {
      const n = t && t.getContext && t.getContext('2d');
      return n && n.canvas === t ? (Ga(t, e), n) : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e[Ge]) return !1;
      const n = e[Ge].initial;
      ['height', 'width'].forEach((o) => {
        const r = n[o];
        N(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
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
        r = { attach: tl, detach: el, resize: sl }[e] || ol;
      s[e] = r(t, e, n);
    }
    removeEventListener(t, e) {
      const n = t.$proxies || (t.$proxies = {}),
        s = n[e];
      if (!s) return;
      (({ attach: Vi, detach: Vi, resize: Vi })[e] || Ja)(t, e, s), (n[e] = void 0);
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, n, s) {
      return oa(t, e, n, s);
    }
    isAttached(t) {
      const e = Ii(t);
      return !!(e && e.isConnected);
    }
  }
  function al(i) {
    return !Yn() || (typeof OffscreenCanvas < 'u' && i instanceof OffscreenCanvas) ? Ka : rl;
  }
  class Et {
    constructor() {
      O(this, 'x');
      O(this, 'y');
      O(this, 'active', !1);
      O(this, 'options');
      O(this, '$animations');
    }
    tooltipPosition(t) {
      const { x: e, y: n } = this.getProps(['x', 'y'], t);
      return { x: e, y: n };
    }
    hasValue() {
      return ue(this.x) && ue(this.y);
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
  O(Et, 'defaults', {}), O(Et, 'defaultRoutes');
  function ll(i, t) {
    const e = i.options.ticks,
      n = cl(i),
      s = Math.min(e.maxTicksLimit || n, n),
      o = e.major.enabled ? fl(t) : [],
      r = o.length,
      a = o[0],
      l = o[r - 1],
      c = [];
    if (r > s) return dl(t, c, o, r / s), c;
    const h = hl(o, t, s);
    if (r > 0) {
      let f, d;
      const g = r > 1 ? Math.round((l - a) / (r - 1)) : null;
      for (Je(t, c, h, N(g) ? 0 : a - g, a), f = 0, d = r - 1; f < d; f++)
        Je(t, c, h, o[f], o[f + 1]);
      return Je(t, c, h, l, N(g) ? t.length : l + g), c;
    }
    return Je(t, c, h), c;
  }
  function cl(i) {
    const t = i.options.offset,
      e = i._tickSize(),
      n = i._length / e + (t ? 0 : 1),
      s = i._maxLength / e;
    return Math.floor(Math.min(n, s));
  }
  function hl(i, t, e) {
    const n = ul(i),
      s = t.length / e;
    if (!n) return Math.max(s, 1);
    const o = nr(n);
    for (let r = 0, a = o.length - 1; r < a; r++) {
      const l = o[r];
      if (l > s) return l;
    }
    return Math.max(s, 1);
  }
  function fl(i) {
    const t = [];
    let e, n;
    for (e = 0, n = i.length; e < n; e++) i[e].major && t.push(e);
    return t;
  }
  function dl(i, t, e, n) {
    let s = 0,
      o = e[0],
      r;
    for (n = Math.ceil(n), r = 0; r < i.length; r++) r === o && (t.push(i[r]), s++, (o = e[s * n]));
  }
  function Je(i, t, e, n, s) {
    const o = F(n, 0),
      r = Math.min(F(s, i.length), i.length);
    let a = 0,
      l,
      c,
      h;
    for (e = Math.ceil(e), s && ((l = s - n), (e = l / Math.floor(l / e))), h = o; h < 0; )
      a++, (h = Math.round(o + a * e));
    for (c = Math.max(o, 0); c < r; c++)
      c === h && (t.push(i[c]), a++, (h = Math.round(o + a * e)));
  }
  function ul(i) {
    const t = i.length;
    let e, n;
    if (t < 2) return !1;
    for (n = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== n) return !1;
    return n;
  }
  const gl = (i) => (i === 'left' ? 'right' : i === 'right' ? 'left' : i),
    bs = (i, t, e) => (t === 'top' || t === 'left' ? i[t] + e : i[t] - e),
    _s = (i, t) => Math.min(t || i, i);
  function xs(i, t) {
    const e = [],
      n = i.length / t,
      s = i.length;
    let o = 0;
    for (; o < s; o += n) e.push(i[Math.floor(o)]);
    return e;
  }
  function pl(i, t, e) {
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
  function ml(i, t) {
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
  function Ce(i) {
    return i.drawTicks ? i.tickLength : 0;
  }
  function ys(i, t) {
    if (!i.display) return 0;
    const e = et(i.font, t),
      n = lt(i.padding);
    return (W(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
  }
  function bl(i, t) {
    return At(i, { scale: t, type: 'scale' });
  }
  function _l(i, t, e) {
    return At(i, { tick: e, index: t, type: 'tick' });
  }
  function xl(i, t, e) {
    let n = Pn(i);
    return ((e && t !== 'right') || (!e && t === 'right')) && (n = gl(n)), n;
  }
  function yl(i, t, e, n) {
    const { top: s, left: o, bottom: r, right: a, chart: l } = i,
      { chartArea: c, scales: h } = l;
    let f = 0,
      d,
      g,
      p;
    const b = r - s,
      m = a - o;
    if (i.isHorizontal()) {
      if (((g = ge(n, o, a)), L(e))) {
        const _ = Object.keys(e)[0],
          y = e[_];
        p = h[_].getPixelForValue(y) + b - t;
      } else e === 'center' ? (p = (c.bottom + c.top) / 2 + b - t) : (p = bs(i, e, t));
      d = a - o;
    } else {
      if (L(e)) {
        const _ = Object.keys(e)[0],
          y = e[_];
        g = h[_].getPixelForValue(y) - m + t;
      } else e === 'center' ? (g = (c.left + c.right) / 2 - m + t) : (g = bs(i, e, t));
      (p = ge(n, r, s)), (f = e === 'left' ? -st : st);
    }
    return { titleX: g, titleY: p, maxWidth: d, rotation: f };
  }
  class Ut extends Et {
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
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
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
        (t = at(t, Number.POSITIVE_INFINITY)),
        (e = at(e, Number.NEGATIVE_INFINITY)),
        (n = at(n, Number.POSITIVE_INFINITY)),
        (s = at(s, Number.NEGATIVE_INFINITY)),
        { min: at(t, n), max: at(e, s), minDefined: J(t), maxDefined: J(e) }
      );
    }
    getMinMax(t) {
      let { min: e, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(),
        r;
      if (s && o) return { min: e, max: n };
      const a = this.getMatchingVisibleMetas();
      for (let l = 0, c = a.length; l < c; ++l)
        (r = a[l].controller.getMinMax(this, t)),
          s || (e = Math.min(e, r.min)),
          o || (n = Math.max(n, r.max));
      return (
        (e = o && e > n ? n : e),
        (n = s && e > n ? e : n),
        { min: at(e, at(n, e)), max: at(n, at(e, n)) }
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
      Y(this.options.beforeUpdate, [this]);
    }
    update(t, e, n) {
      const { beginAtZero: s, grace: o, ticks: r } = this.options,
        a = r.sampleSize;
      this.beforeUpdate(),
        (this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = n = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
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
          (this._range = zr(this, o, s)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks();
      const l = a < this.ticks.length;
      this._convertTicksToLabels(l ? xs(this.ticks, a) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        r.display &&
          (r.autoSkip || r.source === 'auto') &&
          ((this.ticks = ll(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
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
      Y(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      Y(this.options.beforeSetDimensions, [this]);
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
      Y(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()), Y(this.options[t], [this]);
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
      Y(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let n, s, o;
      for (n = 0, s = t.length; n < s; n++)
        (o = t[n]), (o.label = Y(e.callback, [o.value, n, t], this));
    }
    afterTickToLabelConversion() {
      Y(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      Y(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        n = _s(this.ticks.length, t.ticks.maxTicksLimit),
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
        g = ft(this.chart.width - f, 0, this.maxWidth);
      (a = t.offset ? this.maxWidth / n : g / (n - 1)),
        f + 6 > a &&
          ((a = g / (n - (t.offset ? 0.5 : 1))),
          (l = this.maxHeight - Ce(t.grid) - e.padding - ys(t.title, this.chart.options.font)),
          (c = Math.sqrt(f * f + d * d)),
          (r = ki(
            Math.min(
              Math.asin(ft((h.highest.height + 6) / a, -1, 1)),
              Math.asin(ft(l / c, -1, 1)) - Math.asin(ft(d / c, -1, 1))
            )
          )),
          (r = Math.max(s, Math.min(o, r)))),
        (this.labelRotation = r);
    }
    afterCalculateLabelRotation() {
      Y(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      Y(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        {
          chart: e,
          options: { ticks: n, title: s, grid: o },
        } = this,
        r = this._isVisible(),
        a = this.isHorizontal();
      if (r) {
        const l = ys(s, e.options.font);
        if (
          (a
            ? ((t.width = this.maxWidth), (t.height = Ce(o) + l))
            : ((t.height = this.maxHeight), (t.width = Ce(o) + l)),
          n.display && this.ticks.length)
        ) {
          const { first: c, last: h, widest: f, highest: d } = this._getLabelSizes(),
            g = n.padding * 2,
            p = Rt(this.labelRotation),
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
      Y(this.options.afterFit, [this]);
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
      for (e = 0, n = t.length; e < n; e++) N(t[e].label) && (t.splice(e, 1), n--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let n = this.ticks;
        e < n.length && (n = xs(n, e)),
          (this._labelSizes = t =
            this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit));
      }
      return t;
    }
    _computeLabelSizes(t, e, n) {
      const { ctx: s, _longestTextCache: o } = this,
        r = [],
        a = [],
        l = Math.floor(e / _s(e, n));
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
          (_ = o[m] = o[m] || { data: {}, gc: [] }),
          (y = b.lineHeight),
          (M = w = 0),
          !N(p) && !W(p))
        )
          (M = Ve(s, _.data, _.gc, M, p)), (w = y);
        else if (W(p))
          for (d = 0, g = p.length; d < g; ++d)
            (v = p[d]), !N(v) && !W(v) && ((M = Ve(s, _.data, _.gc, M, v)), (w += y));
        r.push(M), a.push(w), (c = Math.max(M, c)), (h = Math.max(w, h));
      }
      ml(o, e);
      const T = r.indexOf(c),
        S = a.indexOf(h),
        C = (D) => ({ width: r[D] || 0, height: a[D] || 0 });
      return { first: C(0), last: C(e - 1), widest: C(T), highest: C(S), widths: r, heights: a };
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
      return ar(this._alignToPixels ? Wt(this.chart, e, 0) : e);
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
        return n.$context || (n.$context = _l(this.getContext(), t, n));
      }
      return this.$context || (this.$context = bl(this.chart.getContext(), this));
    }
    _tickSize() {
      const t = this.options.ticks,
        e = Rt(this.labelRotation),
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
        d = Ce(o),
        g = [],
        p = a.setContext(this.getContext()),
        b = p.display ? p.width : 0,
        m = b / 2,
        _ = function (q) {
          return Wt(n, q, b);
        };
      let y, M, w, v, T, S, C, D, V, H, $, K;
      if (r === 'top')
        (y = _(this.bottom)),
          (S = this.bottom - d),
          (D = y - m),
          (H = _(t.top) + m),
          (K = t.bottom);
      else if (r === 'bottom')
        (y = _(this.top)), (H = t.top), (K = _(t.bottom) - m), (S = y + m), (D = this.top + d);
      else if (r === 'left')
        (y = _(this.right)), (T = this.right - d), (C = y - m), (V = _(t.left) + m), ($ = t.right);
      else if (r === 'right')
        (y = _(this.left)), (V = t.left), ($ = _(t.right) - m), (T = y + m), (C = this.left + d);
      else if (e === 'x') {
        if (r === 'center') y = _((t.top + t.bottom) / 2 + 0.5);
        else if (L(r)) {
          const q = Object.keys(r)[0],
            it = r[q];
          y = _(this.chart.scales[q].getPixelForValue(it));
        }
        (H = t.top), (K = t.bottom), (S = y + m), (D = S + d);
      } else if (e === 'y') {
        if (r === 'center') y = _((t.left + t.right) / 2);
        else if (L(r)) {
          const q = Object.keys(r)[0],
            it = r[q];
          y = _(this.chart.scales[q].getPixelForValue(it));
        }
        (T = y - m), (C = T - d), (V = t.left), ($ = t.right);
      }
      const tt = F(s.ticks.maxTicksLimit, f),
        z = Math.max(1, Math.ceil(f / tt));
      for (M = 0; M < f; M += z) {
        const q = this.getContext(M),
          it = o.setContext(q),
          Kt = a.setContext(q),
          qt = it.lineWidth,
          wt = it.color,
          Gt = Kt.dash || [],
          Mt = Kt.dashOffset,
          Ft = it.tickWidth,
          Zt = it.tickColor,
          Jt = it.tickBorderDash || [],
          St = it.tickBorderDashOffset;
        (w = pl(this, M, l)),
          w !== void 0 &&
            ((v = Wt(n, w, qt)),
            c ? (T = C = V = $ = v) : (S = D = H = K = v),
            g.push({
              tx1: T,
              ty1: S,
              tx2: C,
              ty2: D,
              x1: V,
              y1: H,
              x2: $,
              y2: K,
              width: qt,
              color: wt,
              borderDash: Gt,
              borderDashOffset: Mt,
              tickWidth: Ft,
              tickColor: Zt,
              tickBorderDash: Jt,
              tickBorderDashOffset: St,
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
        d = Ce(n.grid),
        g = d + h,
        p = f ? -h : g,
        b = -Rt(this.labelRotation),
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
        V,
        H,
        $,
        K = 'middle';
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
        else if (L(s)) {
          const z = Object.keys(s)[0],
            q = s[z];
          T = this.chart.scales[z].getPixelForValue(q) + g;
        }
        S = this._getXAxisLabelAlignment();
      } else if (e === 'y') {
        if (s === 'center') v = (t.left + t.right) / 2 - g;
        else if (L(s)) {
          const z = Object.keys(s)[0],
            q = s[z];
          v = this.chart.scales[z].getPixelForValue(q);
        }
        S = this._getYAxisLabelAlignment(d).textAlign;
      }
      e === 'y' && (l === 'start' ? (K = 'top') : l === 'end' && (K = 'bottom'));
      const tt = this._getLabelSizes();
      for (_ = 0, y = a.length; _ < y; ++_) {
        (M = a[_]), (w = M.label);
        const z = o.setContext(this.getContext(_));
        (C = this.getPixelForTick(_) + o.labelOffset),
          (D = this._resolveTickFontOptions(_)),
          (V = D.lineHeight),
          (H = W(w) ? w.length : 1);
        const q = H / 2,
          it = z.color,
          Kt = z.textStrokeColor,
          qt = z.textStrokeWidth;
        let wt = S;
        r
          ? ((v = C),
            S === 'inner' &&
              (_ === y - 1
                ? (wt = this.options.reverse ? 'left' : 'right')
                : _ === 0
                ? (wt = this.options.reverse ? 'right' : 'left')
                : (wt = 'center')),
            s === 'top'
              ? c === 'near' || b !== 0
                ? ($ = -H * V + V / 2)
                : c === 'center'
                ? ($ = -tt.highest.height / 2 - q * V + V)
                : ($ = -tt.highest.height + V / 2)
              : c === 'near' || b !== 0
              ? ($ = V / 2)
              : c === 'center'
              ? ($ = tt.highest.height / 2 - q * V)
              : ($ = tt.highest.height - H * V),
            f && ($ *= -1),
            b !== 0 && !z.showLabelBackdrop && (v += (V / 2) * Math.sin(b)))
          : ((T = C), ($ = ((1 - H) * V) / 2));
        let Gt;
        if (z.showLabelBackdrop) {
          const Mt = lt(z.backdropPadding),
            Ft = tt.heights[_],
            Zt = tt.widths[_];
          let Jt = $ - Mt.top,
            St = 0 - Mt.left;
          switch (K) {
            case 'middle':
              Jt -= Ft / 2;
              break;
            case 'bottom':
              Jt -= Ft;
              break;
          }
          switch (S) {
            case 'center':
              St -= Zt / 2;
              break;
            case 'right':
              St -= Zt;
              break;
          }
          Gt = {
            left: St,
            top: Jt,
            width: Zt + Mt.width,
            height: Ft + Mt.height,
            color: z.backdropColor,
          };
        }
        m.push({
          label: w,
          font: D,
          textOffset: $,
          options: {
            rotation: b,
            color: it,
            strokeColor: Kt,
            strokeWidth: qt,
            textAlign: wt,
            textBaseline: K,
            translation: [v, T],
            backdrop: Gt,
          },
        });
      }
      return m;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-Rt(this.labelRotation)) return t === 'top' ? 'left' : 'right';
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
        { textAlign: c, x: h }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart,
        e = this.options.position;
      if (e === 'left' || e === 'right')
        return { top: 0, left: this.left, bottom: t.height, right: this.right };
      if (e === 'top' || e === 'bottom')
        return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
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
          e.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
            e.drawTicks &&
              a(
                { x: l.tx1, y: l.ty1 },
                { x: l.tx2, y: l.ty2 },
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
      s && En(n, s);
      const o = this.getLabelItems(t);
      for (const r of o) {
        const a = r.options,
          l = r.font,
          c = r.label,
          h = r.textOffset;
        be(n, c, 0, h, l, a);
      }
      s && In(n);
    }
    drawTitle() {
      const {
        ctx: t,
        options: { position: e, title: n, reverse: s },
      } = this;
      if (!n.display) return;
      const o = et(n.font),
        r = lt(n.padding),
        a = n.align;
      let l = o.lineHeight / 2;
      e === 'bottom' || e === 'center' || L(e)
        ? ((l += r.bottom), W(n.text) && (l += o.lineHeight * (n.text.length - 1)))
        : (l += r.top);
      const { titleX: c, titleY: h, maxWidth: f, rotation: d } = yl(this, l, e, a);
      be(t, n.text, 0, 0, o, {
        color: n.color,
        maxWidth: f,
        rotation: d,
        textAlign: xl(a, e, s),
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
      return !this._isVisible() || this.draw !== Ut.prototype.draw
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
  class Qe {
    constructor(t, e, n) {
      (this.type = t), (this.scope = e), (this.override = n), (this.items = Object.create(null));
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
    }
    register(t) {
      const e = Object.getPrototypeOf(t);
      let n;
      wl(e) && (n = this.register(e));
      const s = this.items,
        o = t.id,
        r = this.scope + '.' + o;
      if (!o) throw new Error('class does not have id: ' + t);
      return o in s || ((s[o] = t), vl(t, r, n), this.override && U.override(t.id, t.overrides)), r;
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items,
        n = t.id,
        s = this.scope;
      n in e && delete e[n], s && n in U[s] && (delete U[s][n], this.override && delete Nt[n]);
    }
  }
  function vl(i, t, e) {
    const n = he(Object.create(null), [e ? U.get(e) : {}, U.get(t), i.defaults]);
    U.set(t, n),
      i.defaultRoutes && kl(t, i.defaultRoutes),
      i.descriptors && U.describe(t, i.descriptors);
  }
  function kl(i, t) {
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
  function wl(i) {
    return 'id' in i && 'defaults' in i;
  }
  class Ml {
    constructor() {
      (this.controllers = new Qe(ye, 'datasets', !0)),
        (this.elements = new Qe(Et, 'elements')),
        (this.plugins = new Qe(Object, 'plugins')),
        (this.scales = new Qe(Ut, 'scales')),
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
      const s = vi(t);
      Y(n['before' + s], [], n), e[t](n), Y(n['after' + s], [], n);
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
  var gt = new Ml();
  class Sl {
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
        if (Y(a, l, r) === !1 && s.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      N(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = (this._cache = this._createDescriptors(t));
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const n = t && t.config,
        s = F(n.options && n.options.plugins, {}),
        o = Cl(n);
      return s === !1 && !e ? [] : Ol(t, o, s, e);
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        n = this._cache,
        s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
      this._notify(s(e, n), t, 'stop'), this._notify(s(n, e), t, 'start');
    }
  }
  function Cl(i) {
    const t = {},
      e = [],
      n = Object.keys(gt.plugins.items);
    for (let o = 0; o < n.length; o++) e.push(gt.getPlugin(n[o]));
    const s = i.plugins || [];
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      e.indexOf(r) === -1 && (e.push(r), (t[r.id] = !0));
    }
    return { plugins: e, localIds: t };
  }
  function Pl(i, t) {
    return !t && i === !1 ? null : i === !0 ? {} : i;
  }
  function Ol(i, { plugins: t, localIds: e }, n, s) {
    const o = [],
      r = i.getContext();
    for (const a of t) {
      const l = a.id,
        c = Pl(n[l], s);
      c !== null && o.push({ plugin: a, options: Tl(i.config, { plugin: a, local: e[l] }, c, r) });
    }
    return o;
  }
  function Tl(i, { plugin: t, local: e }, n, s) {
    const o = i.pluginScopeKeys(t),
      r = i.getOptionScopes(n, o);
    return (
      e && t.defaults && r.push(t.defaults),
      i.createResolver(r, s, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
  }
  function Hi(i, t) {
    const e = U.datasets[i] || {};
    return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x';
  }
  function Dl(i, t) {
    let e = i;
    return i === '_index_' ? (e = t) : i === '_value_' && (e = t === 'x' ? 'y' : 'x'), e;
  }
  function Rl(i, t) {
    return i === t ? '_index_' : '_value_';
  }
  function vs(i) {
    if (i === 'x' || i === 'y' || i === 'r') return i;
  }
  function Al(i) {
    if (i === 'top' || i === 'bottom') return 'x';
    if (i === 'left' || i === 'right') return 'y';
  }
  function Yi(i, ...t) {
    if (vs(i)) return i;
    for (const e of t) {
      const n = e.axis || Al(e.position) || (i.length > 1 && vs(i[0].toLowerCase()));
      if (n) return n;
    }
    throw new Error(
      `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`
    );
  }
  function ks(i, t, e) {
    if (e[t + 'AxisID'] === i) return { axis: t };
  }
  function Ll(i, t) {
    if (t.data && t.data.datasets) {
      const e = t.data.datasets.filter((n) => n.xAxisID === i || n.yAxisID === i);
      if (e.length) return ks(i, 'x', e[0]) || ks(i, 'y', e[0]);
    }
    return {};
  }
  function El(i, t) {
    const e = Nt[i.type] || { scales: {} },
      n = t.scales || {},
      s = Hi(i.type, t),
      o = Object.create(null);
    return (
      Object.keys(n).forEach((r) => {
        const a = n[r];
        if (!L(a)) return console.error(`Invalid scale configuration for scale: ${r}`);
        if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
        const l = Yi(r, a, Ll(r, i), U.scales[a.type]),
          c = Rl(l, s),
          h = e.scales || {};
        o[r] = fe(Object.create(null), [{ axis: l }, a, h[l], h[c]]);
      }),
      i.data.datasets.forEach((r) => {
        const a = r.type || i.type,
          l = r.indexAxis || Hi(a, t),
          h = (Nt[a] || {}).scales || {};
        Object.keys(h).forEach((f) => {
          const d = Dl(f, l),
            g = r[d + 'AxisID'] || d;
          (o[g] = o[g] || Object.create(null)), fe(o[g], [{ axis: d }, n[g], h[f]]);
        });
      }),
      Object.keys(o).forEach((r) => {
        const a = o[r];
        fe(a, [U.scales[a.type], U.scale]);
      }),
      o
    );
  }
  function ws(i) {
    const t = i.options || (i.options = {});
    (t.plugins = F(t.plugins, {})), (t.scales = El(i, t));
  }
  function Ms(i) {
    return (i = i || {}), (i.datasets = i.datasets || []), (i.labels = i.labels || []), i;
  }
  function Il(i) {
    return (i = i || {}), (i.data = Ms(i.data)), ws(i), i;
  }
  const Ss = new Map(),
    Cs = new Set();
  function ti(i, t) {
    let e = Ss.get(i);
    return e || ((e = t()), Ss.set(i, e), Cs.add(e)), e;
  }
  const Pe = (i, t, e) => {
    const n = ze(t, e);
    n !== void 0 && i.add(n);
  };
  class Fl {
    constructor(t) {
      (this._config = Il(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
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
      this._config.data = Ms(t);
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
      this.clearCache(), ws(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return ti(t, () => [[`datasets.${t}`, '']]);
    }
    datasetAnimationScopeKeys(t, e) {
      return ti(`${t}.transition.${e}`, () => [
        [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
        [`datasets.${t}`, ''],
      ]);
    }
    datasetElementScopeKeys(t, e) {
      return ti(`${t}-${e}`, () => [
        [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
      ]);
    }
    pluginScopeKeys(t) {
      const e = t.id,
        n = this.type;
      return ti(`${n}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]]);
    }
    _cachedScopes(t, e) {
      const n = this._scopeCache;
      let s = n.get(t);
      return (!s || e) && ((s = new Map()), n.set(t, s)), s;
    }
    getOptionScopes(t, e, n) {
      const { options: s, type: o } = this,
        r = this._cachedScopes(t, n),
        a = r.get(e);
      if (a) return a;
      const l = new Set();
      e.forEach((h) => {
        t && (l.add(t), h.forEach((f) => Pe(l, t, f))),
          h.forEach((f) => Pe(l, s, f)),
          h.forEach((f) => Pe(l, Nt[o] || {}, f)),
          h.forEach((f) => Pe(l, U, f)),
          h.forEach((f) => Pe(l, Oi, f));
      });
      const c = Array.from(l);
      return c.length === 0 && c.push(Object.create(null)), Cs.has(e) && r.set(e, c), c;
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, Nt[e] || {}, U.datasets[e] || {}, { type: e }, U, Oi];
    }
    resolveNamedOptions(t, e, n, s = ['']) {
      const o = { $shared: !0 },
        { resolver: r, subPrefixes: a } = Ps(this._resolverCache, t, s);
      let l = r;
      if (Bl(r, e)) {
        (o.$shared = !1), (n = Tt(n) ? n() : n);
        const c = this.createResolver(t, n, a);
        l = ee(r, n, c);
      }
      for (const c of e) o[c] = l[c];
      return o;
    }
    createResolver(t, e, n = [''], s) {
      const { resolver: o } = Ps(this._resolverCache, t, n);
      return L(e) ? ee(o, e, void 0, s) : o;
    }
  }
  function Ps(i, t, e) {
    let n = i.get(t);
    n || ((n = new Map()), i.set(t, n));
    const s = e.join();
    let o = n.get(s);
    return (
      o ||
        ((o = {
          resolver: Ai(t, e),
          subPrefixes: e.filter((a) => !a.toLowerCase().includes('hover')),
        }),
        n.set(s, o)),
      o
    );
  }
  const zl = (i) => L(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || Tt(i[e]), !1);
  function Bl(i, t) {
    const { isScriptable: e, isIndexable: n } = zn(i);
    for (const s of t) {
      const o = e(s),
        r = n(s),
        a = (r || o) && i[s];
      if ((o && (Tt(a) || zl(a))) || (r && W(a))) return !0;
    }
    return !1;
  }
  var jl = '4.3.0';
  const Nl = ['top', 'bottom', 'left', 'right', 'chartArea'];
  function Os(i, t) {
    return i === 'top' || i === 'bottom' || (Nl.indexOf(i) === -1 && t === 'x');
  }
  function Ts(i, t) {
    return function (e, n) {
      return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
    };
  }
  function Ds(i) {
    const t = i.chart,
      e = t.options.animation;
    t.notifyPlugins('afterRender'), Y(e && e.onComplete, [i], t);
  }
  function Wl(i) {
    const t = i.chart,
      e = t.options.animation;
    Y(e && e.onProgress, [i], t);
  }
  function Rs(i) {
    return (
      Yn() && typeof i == 'string' ? (i = document.getElementById(i)) : i && i.length && (i = i[0]),
      i && i.canvas && (i = i.canvas),
      i
    );
  }
  const ei = {},
    As = (i) => {
      const t = Rs(i);
      return Object.values(ei)
        .filter((e) => e.canvas === t)
        .pop();
    };
  function Vl(i, t, e) {
    const n = Object.keys(i);
    for (const s of n) {
      const o = +s;
      if (o >= t) {
        const r = i[s];
        delete i[s], (e > 0 || o > t) && (i[o + e] = r);
      }
    }
  }
  function Hl(i, t, e, n) {
    return !e || i.type === 'mouseout' ? null : n ? t : i;
  }
  function Yl(i) {
    const { xScale: t, yScale: e } = i;
    if (t && e) return { left: t.left, right: t.right, top: e.top, bottom: e.bottom };
  }
  let vt =
    ((It = class {
      static register(...t) {
        gt.add(...t), Ls();
      }
      static unregister(...t) {
        gt.remove(...t), Ls();
      }
      constructor(t, e) {
        const n = (this.config = new Fl(e)),
          s = Rs(t),
          o = As(s);
        if (o)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              o.id +
              "' must be destroyed before the canvas with ID '" +
              o.canvas.id +
              "' can be reused."
          );
        const r = n.createResolver(n.chartOptionScopes(), this.getContext());
        (this.platform = new (n.platform || al(s))()), this.platform.updateConfig(n);
        const a = this.platform.acquireContext(s, r.aspectRatio),
          l = a && a.canvas,
          c = l && l.height,
          h = l && l.width;
        if (
          ((this.id = Ko()),
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
          (this._plugins = new Sl()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = ur((f) => this.update(f), r.resizeDelay || 0)),
          (this._dataChanges = []),
          (ei[this.id] = this),
          !a || !l)
        ) {
          console.error("Failed to create chart: can't acquire context from the given item");
          return;
        }
        yt.listen(this, 'complete', Ds),
          yt.listen(this, 'progress', Wl),
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
        return N(t) ? (e && o ? o : s ? n / s : null) : t;
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
        return gt;
      }
      _initialize() {
        return (
          this.notifyPlugins('beforeInit'),
          this.options.responsive ? this.resize() : $n(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins('afterInit'),
          this
        );
      }
      clear() {
        return Ln(this.canvas, this.ctx), this;
      }
      stop() {
        return yt.stop(this), this;
      }
      resize(t, e) {
        yt.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e);
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
          $n(this, a, !0) &&
            (this.notifyPlugins('resize', { size: r }),
            Y(n.onResize, [this, r], this),
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
                l = Yi(r, a),
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
              c = Yi(l, a),
              h = F(a.type, r.dtype);
            (a.position === void 0 || Os(a.position, c) !== Os(r.dposition)) &&
              (a.position = r.dposition),
              (s[l] = !0);
            let f = null;
            if (l in n && n[l].type === h) f = n[l];
            else {
              const d = gt.getScale(h);
              (f = new d({ id: l, type: h, ctx: this.ctx, chart: this })), (n[f.id] = f);
            }
            f.init(a, t);
          }),
          I(s, (r, a) => {
            r || delete n[a];
          }),
          I(n, (r) => {
            Lt.configure(this, r, r.options), Lt.addBox(this, r);
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
        this._sortedMetasets = t.slice(0).sort(Ts('order', 'index'));
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
            (r.indexAxis = o.indexAxis || Hi(a, this.options)),
            (r.order = o.order || 0),
            (r.index = n),
            (r.label = '' + o.label),
            (r.visible = this.isDatasetVisible(n)),
            r.controller)
          )
            r.controller.updateIndex(n), r.controller.linkScales();
          else {
            const l = gt.getController(a),
              { datasetElementType: c, dataElementType: h } = U.datasets[a];
            Object.assign(l, {
              dataElementType: gt.getElement(h),
              datasetElementType: c && gt.getElement(c),
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
          this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
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
          this.notifyPlugins('afterUpdate', { mode: t }),
          this._layers.sort(Ts('z', '_idx'));
        const { _active: a, _lastEvent: l } = this;
        l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0),
          this.render();
      }
      _updateScales() {
        I(this.scales, (t) => {
          Lt.removeBox(this, t);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const t = this.options,
          e = new Set(Object.keys(this._listeners)),
          n = new Set(t.events);
        (!bn(e, n) || !!this._responsiveListeners !== t.responsive) &&
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: t } = this,
          e = this._getUniformDataChanges() || [];
        for (const { method: n, start: s, count: o } of e) {
          const r = n === '_removeElements' ? -o : o;
          Vl(t, s, r);
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
        for (let o = 1; o < e; o++) if (!bn(s, n(o))) return;
        return Array.from(s)
          .map((o) => o.split(','))
          .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
      }
      _updateLayout(t) {
        if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
        Lt.update(this, this.width, this.height, t);
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
        if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
          for (let e = 0, n = this.data.datasets.length; e < n; ++e)
            this.getDatasetMeta(e).controller.configure();
          for (let e = 0, n = this.data.datasets.length; e < n; ++e)
            this._updateDataset(e, Tt(t) ? t({ datasetIndex: e }) : t);
          this.notifyPlugins('afterDatasetsUpdate', { mode: t });
        }
      }
      _updateDataset(t, e) {
        const n = this.getDatasetMeta(t),
          s = { meta: n, index: t, mode: e, cancelable: !0 };
        this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
          (n.controller._update(e),
          (s.cancelable = !1),
          this.notifyPlugins('afterDatasetUpdate', s));
      }
      render() {
        this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
          (yt.has(this)
            ? this.attached && !yt.running(this) && yt.start(this)
            : (this.draw(), Ds({ chart: this })));
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
            this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
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
        if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins('afterDatasetsDraw');
      }
      _drawDataset(t) {
        const e = this.ctx,
          n = t._clip,
          s = !n.disabled,
          o = Yl(t) || this.chartArea,
          r = { meta: t, index: t.index, cancelable: !0 };
        this.notifyPlugins('beforeDatasetDraw', r) !== !1 &&
          (s &&
            En(e, {
              left: n.left === !1 ? 0 : o.left - n.left,
              right: n.right === !1 ? this.width : o.right + n.right,
              top: n.top === !1 ? 0 : o.top - n.top,
              bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom,
            }),
          t.controller.draw(),
          s && In(e),
          (r.cancelable = !1),
          this.notifyPlugins('afterDatasetDraw', r));
      }
      isPointInArea(t) {
        return xt(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, e, n, s) {
        const o = Na.modes[e];
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
        return this.$context || (this.$context = At(null, { chart: this, type: 'chart' }));
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
        Be(e)
          ? ((o.data[e].hidden = !n), this.update())
          : (this.setDatasetVisibility(t, n),
            r.update(o, { visible: n }),
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
        for (this.stop(), yt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: t, ctx: e } = this;
        this._stop(),
          this.config.clearCache(),
          t &&
            (this.unbindEvents(),
            Ln(t, e),
            this.platform.releaseContext(e),
            (this.canvas = null),
            (this.ctx = null)),
          delete ei[this.id],
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
            return { datasetIndex: o, element: a.data[r], index: r };
          });
        !Ie(n, e) && ((this._active = n), (this._lastEvent = null), this._updateHoverStyles(n, e));
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
            l.filter(
              (h) => !c.some((f) => h.datasetIndex === f.datasetIndex && h.index === f.index)
            ),
          r = o(e, t),
          a = n ? t : o(t, e);
        r.length && this.updateHoverStyle(r, s.mode, !1),
          a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
      }
      _eventHandler(t, e) {
        const n = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
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
          l = tr(t),
          c = Hl(t, this._lastEvent, n, l);
        n &&
          ((this._lastEvent = null),
          Y(o.onHover, [t, a, this], this),
          l && Y(o.onClick, [t, a, this], this));
        const h = !Ie(a, s);
        return (
          (h || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
          (this._lastEvent = c),
          h
        );
      }
      _getActiveElements(t, e, n, s) {
        if (t.type === 'mouseout') return [];
        if (!n) return e;
        const o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, s);
      }
    }),
    O(It, 'defaults', U),
    O(It, 'instances', ei),
    O(It, 'overrides', Nt),
    O(It, 'registry', gt),
    O(It, 'version', jl),
    O(It, 'getChart', As),
    It);
  function Ls() {
    return I(vt.instances, (i) => i._plugins.invalidate());
  }
  function Es(i, t, e = t) {
    (i.lineCap = F(e.borderCapStyle, t.borderCapStyle)),
      i.setLineDash(F(e.borderDash, t.borderDash)),
      (i.lineDashOffset = F(e.borderDashOffset, t.borderDashOffset)),
      (i.lineJoin = F(e.borderJoinStyle, t.borderJoinStyle)),
      (i.lineWidth = F(e.borderWidth, t.borderWidth)),
      (i.strokeStyle = F(e.borderColor, t.borderColor));
  }
  function $l(i, t, e) {
    i.lineTo(e.x, e.y);
  }
  function Ul(i) {
    return i.stepped ? Pr : i.tension || i.cubicInterpolationMode === 'monotone' ? Or : $l;
  }
  function Is(i, t, e = {}) {
    const n = i.length,
      { start: s = 0, end: o = n - 1 } = e,
      { start: r, end: a } = t,
      l = Math.max(s, r),
      c = Math.min(o, a),
      h = (s < r && o < r) || (s > a && o > a);
    return { count: n, start: l, loop: t.loop, ilen: c < l && !h ? n + c - l : c - l };
  }
  function Xl(i, t, e, n) {
    const { points: s, options: o } = t,
      { count: r, start: a, loop: l, ilen: c } = Is(s, e, n),
      h = Ul(o);
    let { move: f = !0, reverse: d } = n || {},
      g,
      p,
      b;
    for (g = 0; g <= c; ++g)
      (p = s[(a + (d ? c - g : g)) % r]),
        !p.skip && (f ? (i.moveTo(p.x, p.y), (f = !1)) : h(i, b, p, d, o.stepped), (b = p));
    return l && ((p = s[(a + (d ? c : 0)) % r]), h(i, b, p, d, o.stepped)), !!l;
  }
  function Kl(i, t, e, n) {
    const s = t.points,
      { count: o, start: r, ilen: a } = Is(s, e, n),
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
  function $i(i) {
    const t = i.options,
      e = t.borderDash && t.borderDash.length;
    return !i._decimated &&
      !i._loop &&
      !t.tension &&
      t.cubicInterpolationMode !== 'monotone' &&
      !t.stepped &&
      !e
      ? Kl
      : Xl;
  }
  function ql(i) {
    return i.stepped ? aa : i.tension || i.cubicInterpolationMode === 'monotone' ? la : Yt;
  }
  function Gl(i, t, e, n) {
    let s = t._path;
    s || ((s = t._path = new Path2D()), t.path(s, e, n) && s.closePath()),
      Es(i, t.options),
      i.stroke(s);
  }
  function Zl(i, t, e, n) {
    const { segments: s, options: o } = t,
      r = $i(t);
    for (const a of s)
      Es(i, o, a.style),
        i.beginPath(),
        r(i, t, a, { start: e, end: e + n - 1 }) && i.closePath(),
        i.stroke();
  }
  const Jl = typeof Path2D == 'function';
  function Ql(i, t, e, n) {
    Jl && !t.options.segment ? Gl(i, t, e, n) : Zl(i, t, e, n);
  }
  class Oe extends Et {
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
        Qr(this._points, n, t, s, e), (this._pointsUpdated = !0);
      }
    }
    set points(t) {
      (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = _a(this, this.options.segment));
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
        r = pa(this, { property: e, start: s, end: s });
      if (!r.length) return;
      const a = [],
        l = ql(n);
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
      return $i(this)(t, this, e, n);
    }
    path(t, e, n) {
      const s = this.segments,
        o = $i(this);
      let r = this._loop;
      (e = e || 0), (n = n || this.points.length - e);
      for (const a of s) r &= o(t, this, a, { start: e, end: e + n - 1 });
      return !!r;
    }
    draw(t, e, n, s) {
      const o = this.options || {};
      (this.points || []).length && o.borderWidth && (t.save(), Ql(t, this, n, s), t.restore()),
        this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
  }
  O(Oe, 'id', 'line'),
    O(Oe, 'defaults', {
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
    O(Oe, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
    O(Oe, 'descriptors', {
      _scriptable: !0,
      _indexable: (t) => t !== 'borderDash' && t !== 'fill',
    });
  function Fs(i, t, e, n) {
    const s = i.options,
      { [e]: o } = i.getProps([e], n);
    return Math.abs(t - o) < s.radius + s.hitRadius;
  }
  class ii extends Et {
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
      return Fs(this, e, 'x', n);
    }
    inYRange(e, n) {
      return Fs(this, e, 'y', n);
    }
    getCenterPoint(e) {
      const { x: n, y: s } = this.getProps(['x', 'y'], e);
      return { x: n, y: s };
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
        !xt(this, n, this.size(s) / 2) ||
        ((e.strokeStyle = s.borderColor),
        (e.lineWidth = s.borderWidth),
        (e.fillStyle = s.backgroundColor),
        Di(e, s, this.x, this.y));
    }
    getRange() {
      const e = this.options || {};
      return e.radius + e.hitRadius;
    }
  }
  O(ii, 'id', 'point'),
    O(ii, 'defaults', {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: 'circle',
      radius: 3,
      rotation: 0,
    }),
    O(ii, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
  class zs extends Et {
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
      const s = W(n.text) ? n.text.length : 1;
      this._padding = lt(n.padding);
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
          ? ((h = ge(a, n, o)), (f = e + t), (c = o - n))
          : (r.position === 'left'
              ? ((h = n + t), (f = ge(a, s, e)), (l = Z * -0.5))
              : ((h = o - t), (f = ge(a, e, s)), (l = Z * 0.5)),
            (c = s - e)),
        { titleX: h, titleY: f, maxWidth: c, rotation: l }
      );
    }
    draw() {
      const t = this.ctx,
        e = this.options;
      if (!e.display) return;
      const n = et(e.font),
        o = n.lineHeight / 2 + this._padding.top,
        { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
      be(t, e.text, 0, 0, n, {
        color: e.color,
        maxWidth: l,
        rotation: c,
        textAlign: Pn(e.align),
        textBaseline: 'middle',
        translation: [r, a],
      });
    }
  }
  function tc(i, t) {
    const e = new zs({ ctx: i.ctx, options: t, chart: i });
    Lt.configure(i, e, t), Lt.addBox(i, e), (i.titleBlock = e);
  }
  var ec = {
    id: 'title',
    _element: zs,
    start(i, t, e) {
      tc(i, e);
    },
    stop(i) {
      const t = i.titleBlock;
      Lt.removeBox(i, t), delete i.titleBlock;
    },
    beforeUpdate(i, t, e) {
      const n = i.titleBlock;
      Lt.configure(i, n, e), (n.options = e);
    },
    defaults: {
      align: 'center',
      display: !1,
      font: { weight: 'bold' },
      fullSize: !0,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2e3,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const Te = {
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
      return { x: n / o, y: s / o };
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
            h = wi(t, c);
          h < s && ((s = h), (a = l));
        }
      }
      if (a) {
        const l = a.tooltipPosition();
        (e = l.x), (n = l.y);
      }
      return { x: e, y: n };
    },
  };
  function pt(i, t) {
    return t && (W(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
  }
  function kt(i) {
    return (typeof i == 'string' || i instanceof String) &&
      i.indexOf(`
`) > -1
      ? i.split(`
`)
      : i;
  }
  function ic(i, t) {
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
  function Bs(i, t) {
    const e = i.chart.ctx,
      { body: n, footer: s, title: o } = i,
      { boxWidth: r, boxHeight: a } = t,
      l = et(t.bodyFont),
      c = et(t.titleFont),
      h = et(t.footerFont),
      f = o.length,
      d = s.length,
      g = n.length,
      p = lt(t.padding);
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
      { width: m, height: b }
    );
  }
  function nc(i, t) {
    const { y: e, height: n } = t;
    return e < n / 2 ? 'top' : e > i.height - n / 2 ? 'bottom' : 'center';
  }
  function sc(i, t, e, n) {
    const { x: s, width: o } = n,
      r = e.caretSize + e.caretPadding;
    if ((i === 'left' && s + o + r > t.width) || (i === 'right' && s - o - r < 0)) return !0;
  }
  function oc(i, t, e, n) {
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
      sc(c, i, t, e) && (c = 'center'),
      c
    );
  }
  function js(i, t, e) {
    const n = e.yAlign || t.yAlign || nc(i, e);
    return { xAlign: e.xAlign || t.xAlign || oc(i, t, e, n), yAlign: n };
  }
  function rc(i, t) {
    let { x: e, width: n } = i;
    return t === 'right' ? (e -= n) : t === 'center' && (e -= n / 2), e;
  }
  function ac(i, t, e) {
    let { y: n, height: s } = i;
    return t === 'top' ? (n += e) : t === 'bottom' ? (n -= s + e) : (n -= s / 2), n;
  }
  function Ns(i, t, e, n) {
    const { caretSize: s, caretPadding: o, cornerRadius: r } = i,
      { xAlign: a, yAlign: l } = e,
      c = s + o,
      { topLeft: h, topRight: f, bottomLeft: d, bottomRight: g } = _e(r);
    let p = rc(t, a);
    const b = ac(t, l, c);
    return (
      l === 'center'
        ? a === 'left'
          ? (p += c)
          : a === 'right' && (p -= c)
        : a === 'left'
        ? (p -= Math.max(h, d) + s)
        : a === 'right' && (p += Math.max(f, g) + s),
      { x: ft(p, 0, n.width - t.width), y: ft(b, 0, n.height - t.height) }
    );
  }
  function ni(i, t, e) {
    const n = lt(e.padding);
    return t === 'center'
      ? i.x + i.width / 2
      : t === 'right'
      ? i.x + i.width - n.right
      : i.x + n.left;
  }
  function Ws(i) {
    return pt([], kt(i));
  }
  function lc(i, t, e) {
    return At(i, { tooltip: t, tooltipItems: e, type: 'tooltip' });
  }
  function Vs(i, t) {
    const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? i.override(e) : i;
  }
  const Hs = {
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
      return N(e) || (t += e), t;
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
      return { pointStyle: e.pointStyle, rotation: e.rotation };
    },
    afterLabel: _t,
    afterBody: _t,
    beforeFooter: _t,
    footer: _t,
    afterFooter: _t,
  };
  function ot(i, t, e, n) {
    const s = i[t].call(e, n);
    return typeof s > 'u' ? Hs[t].call(e, n) : s;
  }
  class Ui extends Et {
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
        o = new Jn(this.chart, s);
      return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
    }
    getContext() {
      return (
        this.$context || (this.$context = lc(this.chart.getContext(), this, this._tooltipItems))
      );
    }
    getTitle(t, e) {
      const { callbacks: n } = e,
        s = ot(n, 'beforeTitle', this, t),
        o = ot(n, 'title', this, t),
        r = ot(n, 'afterTitle', this, t);
      let a = [];
      return (a = pt(a, kt(s))), (a = pt(a, kt(o))), (a = pt(a, kt(r))), a;
    }
    getBeforeBody(t, e) {
      return Ws(ot(e.callbacks, 'beforeBody', this, t));
    }
    getBody(t, e) {
      const { callbacks: n } = e,
        s = [];
      return (
        I(t, (o) => {
          const r = { before: [], lines: [], after: [] },
            a = Vs(n, o);
          pt(r.before, kt(ot(a, 'beforeLabel', this, o))),
            pt(r.lines, ot(a, 'label', this, o)),
            pt(r.after, kt(ot(a, 'afterLabel', this, o))),
            s.push(r);
        }),
        s
      );
    }
    getAfterBody(t, e) {
      return Ws(ot(e.callbacks, 'afterBody', this, t));
    }
    getFooter(t, e) {
      const { callbacks: n } = e,
        s = ot(n, 'beforeFooter', this, t),
        o = ot(n, 'footer', this, t),
        r = ot(n, 'afterFooter', this, t);
      let a = [];
      return (a = pt(a, kt(s))), (a = pt(a, kt(o))), (a = pt(a, kt(r))), a;
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
      for (l = 0, c = e.length; l < c; ++l) a.push(ic(this.chart, e[l]));
      return (
        t.filter && (a = a.filter((h, f, d) => t.filter(h, f, d, n))),
        t.itemSort && (a = a.sort((h, f) => t.itemSort(h, f, n))),
        I(a, (h) => {
          const f = Vs(t.callbacks, h);
          s.push(ot(f, 'labelColor', this, h)),
            o.push(ot(f, 'labelPointStyle', this, h)),
            r.push(ot(f, 'labelTextColor', this, h));
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
      if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
      else {
        const a = Te[n.position].call(this, s, this._eventPosition);
        (r = this._createItems(n)),
          (this.title = this.getTitle(r, n)),
          (this.beforeBody = this.getBeforeBody(r, n)),
          (this.body = this.getBody(r, n)),
          (this.afterBody = this.getAfterBody(r, n)),
          (this.footer = this.getFooter(r, n));
        const l = (this._size = Bs(this, n)),
          c = Object.assign({}, a, l),
          h = js(this.chart, n, c),
          f = Ns(n, c, h, this.chart);
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
        t && n.external && n.external.call(this, { chart: this.chart, tooltip: this, replay: e });
    }
    drawCaret(t, e, n, s) {
      const o = this.getCaretPosition(t, n, s);
      e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
    }
    getCaretPosition(t, e, n) {
      const { xAlign: s, yAlign: o } = this,
        { caretSize: r, cornerRadius: a } = n,
        { topLeft: l, topRight: c, bottomLeft: h, bottomRight: f } = _e(a),
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
        { x1: m, x2: _, x3: y, y1: M, y2: w, y3: v }
      );
    }
    drawTitle(t, e, n) {
      const s = this.title,
        o = s.length;
      let r, a, l;
      if (o) {
        const c = Fi(n.rtl, this.x, this.width);
        for (
          t.x = ni(this, n.titleAlign, n),
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
        f = ni(this, 'left', o),
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
          Di(t, b, m, _),
          (t.strokeStyle = r.borderColor),
          (t.fillStyle = r.backgroundColor),
          Di(t, b, m, _);
      } else {
        (t.lineWidth = L(r.borderWidth)
          ? Math.max(...Object.values(r.borderWidth))
          : r.borderWidth || 1),
          (t.strokeStyle = r.borderColor),
          t.setLineDash(r.borderDash || []),
          (t.lineDashOffset = r.borderDashOffset || 0);
        const b = s.leftForLtr(d, c),
          m = s.leftForLtr(s.xPlus(d, 1), c - 2),
          _ = _e(r.borderRadius);
        Object.values(_).some((y) => y !== 0)
          ? (t.beginPath(),
            (t.fillStyle = o.multiKeyBackground),
            Ri(t, { x: b, y: p, w: c, h: l, radius: _ }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = r.backgroundColor),
            t.beginPath(),
            Ri(t, { x: m, y: p + 1, w: c - 2, h: l - 2, radius: _ }),
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
      const p = Fi(n.rtl, this.x, this.width),
        b = function (C) {
          e.fillText(C, p.x(t.x + g), t.y + d / 2), (t.y += d + o);
        },
        m = p.textAlign(r);
      let _, y, M, w, v, T, S;
      for (
        e.textAlign = r,
          e.textBaseline = 'middle',
          e.font = f.string,
          t.x = ni(this, m, n),
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
        const l = Fi(n.rtl, this.x, this.width);
        for (
          t.x = ni(this, n.footerAlign, n),
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
          e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2),
            (t.y += r.lineHeight + n.footerSpacing);
      }
    }
    drawBackground(t, e, n, s) {
      const { xAlign: o, yAlign: r } = this,
        { x: a, y: l } = t,
        { width: c, height: h } = n,
        { topLeft: f, topRight: d, bottomLeft: g, bottomRight: p } = _e(s.cornerRadius);
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
        const r = Te[t.position].call(this, this._active, this._eventPosition);
        if (!r) return;
        const a = (this._size = Bs(this, t)),
          l = Object.assign({}, r, this._size),
          c = js(e, t, l),
          h = Ns(t, l, c, e);
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
      const s = { width: this.width, height: this.height },
        o = { x: this.x, y: this.y };
      n = Math.abs(n) < 0.001 ? 0 : n;
      const r = lt(e.padding),
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
        fa(t, e.textDirection),
        (o.y += r.top),
        this.drawTitle(o, t, e),
        this.drawBody(o, t, e),
        this.drawFooter(o, t, e),
        da(t, e.textDirection),
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
          return { datasetIndex: a, element: c.data[l], index: l };
        }),
        o = !Ie(n, s),
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
        l = e || !Ie(r, o) || a;
      return (
        l &&
          ((this._active = r),
          (s.enabled || s.external) &&
            ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
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
        r = Te[o.position].call(this, t, e);
      return r !== !1 && (n !== r.x || s !== r.y);
    }
  }
  O(Ui, 'positioners', Te);
  var cc = {
    id: 'tooltip',
    _element: Ui,
    positioners: Te,
    afterInit(i, t, e) {
      e && (i.tooltip = new Ui({ chart: i, options: e }));
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
        const e = { tooltip: t };
        if (i.notifyPlugins('beforeTooltipDraw', { ...e, cancelable: !0 }) === !1) return;
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
      titleFont: { weight: 'bold' },
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
      footerFont: { weight: 'bold' },
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
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: Hs,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (i) => i !== 'filter' && i !== 'itemSort' && i !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  };
  const hc = (i, t, e, n) => (
    typeof t == 'string'
      ? ((e = i.push(t) - 1), n.unshift({ index: e, label: t }))
      : isNaN(t) && (e = null),
    e
  );
  function fc(i, t, e, n) {
    const s = i.indexOf(t);
    if (s === -1) return hc(i, t, e, n);
    const o = i.lastIndexOf(t);
    return s !== o ? e : s;
  }
  const dc = (i, t) => (i === null ? null : ft(Math.round(i), 0, t));
  function Ys(i) {
    const t = this.getLabels();
    return i >= 0 && i < t.length ? t[i] : i;
  }
  class Xi extends Ut {
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
      if (N(t)) return null;
      const n = this.getLabels();
      return (
        (e = isFinite(e) && n[e] === t ? e : fc(n, t, F(e, t), this._addedLabels)),
        dc(e, n.length - 1)
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
      for (let r = t; r <= e; r++) s.push({ value: r });
      return s;
    }
    getLabelForValue(t) {
      return Ys.call(this, t);
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
  O(Xi, 'id', 'category'), O(Xi, 'defaults', { ticks: { callback: Ys } });
  function uc(i, t) {
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
      _ = !N(r),
      y = !N(a),
      M = !N(c),
      w = (m - b) / (f + 1);
    let v = xn((m - b) / p / g) * g,
      T,
      S,
      C,
      D;
    if (v < 1e-14 && !_ && !y) return [{ value: b }, { value: m }];
    (D = Math.ceil(m / v) - Math.floor(b / v)),
      D > p && (v = xn((D * v) / p / g) * g),
      N(l) || ((T = Math.pow(10, l)), (v = Math.ceil(v * T) / T)),
      s === 'ticks'
        ? ((S = Math.floor(b / v) * v), (C = Math.ceil(m / v) * v))
        : ((S = b), (C = m)),
      _ && y && o && sr((a - r) / o, v / 1e3)
        ? ((D = Math.round(Math.min((a - r) / v, h))), (v = (a - r) / D), (S = r), (C = a))
        : M
        ? ((S = _ ? r : S), (C = y ? a : C), (D = c - 1), (v = (C - S) / D))
        : ((D = (C - S) / v),
          de(D, Math.round(D), v / 1e3) ? (D = Math.round(D)) : (D = Math.ceil(D)));
    const V = Math.max(vn(v), vn(S));
    (T = Math.pow(10, N(l) ? V : l)), (S = Math.round(S * T) / T), (C = Math.round(C * T) / T);
    let H = 0;
    for (
      _ &&
      (d && S !== r
        ? (e.push({ value: r }),
          S < r && H++,
          de(Math.round((S + H * v) * T) / T, r, $s(r, w, i)) && H++)
        : S < r && H++);
      H < D;
      ++H
    ) {
      const $ = Math.round((S + H * v) * T) / T;
      if (y && $ > a) break;
      e.push({ value: $ });
    }
    return (
      y && d && C !== a
        ? e.length && de(e[e.length - 1].value, a, $s(a, w, i))
          ? (e[e.length - 1].value = a)
          : e.push({ value: a })
        : (!y || C === a) && e.push({ value: C }),
      e
    );
  }
  function $s(i, t, { horizontal: e, minRotation: n }) {
    const s = Rt(n),
      o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
      r = 0.75 * t * ('' + i).length;
    return Math.min(t / o, r);
  }
  class si extends Ut {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      return N(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t;
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
        r = uc(s, o);
      return (
        t.bounds === 'ticks' && yn(r, this, 'value'),
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
      return Pi(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class Ki extends si {
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = J(t) ? t : 0), (this.max = J(e) ? e : 1), this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        n = Rt(this.options.ticks.minRotation),
        s = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
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
  O(Ki, 'id', 'linear'), O(Ki, 'defaults', { ticks: { callback: We.formatters.numeric } });
  const De = (i) => Math.floor(Dt(i)),
    Xt = (i, t) => Math.pow(10, De(i) + t);
  function Us(i) {
    return i / Math.pow(10, De(i)) === 1;
  }
  function Xs(i, t, e) {
    const n = Math.pow(10, e),
      s = Math.floor(i / n);
    return Math.ceil(t / n) - s;
  }
  function gc(i, t) {
    const e = t - i;
    let n = De(e);
    for (; Xs(i, t, n) > 10; ) n++;
    for (; Xs(i, t, n) < 10; ) n--;
    return Math.min(n, De(i));
  }
  function pc(i, { min: t, max: e }) {
    t = at(i.min, t);
    const n = [],
      s = De(t);
    let o = gc(t, e),
      r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    const a = Math.pow(10, o),
      l = s > o ? Math.pow(10, s) : 0,
      c = Math.round((t - l) * r) / r,
      h = Math.floor((t - l) / a / 10) * a * 10;
    let f = Math.floor((c - h) / Math.pow(10, o)),
      d = at(i.min, Math.round((l + h + f * Math.pow(10, o)) * r) / r);
    for (; d < e; )
      n.push({ value: d, major: Us(d), significand: f }),
        f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
        f >= 20 && (o++, (f = 2), (r = o >= 0 ? 1 : r)),
        (d = Math.round((l + h + f * Math.pow(10, o)) * r) / r);
    const g = at(i.max, d);
    return n.push({ value: g, major: Us(g), significand: f }), n;
  }
  class Ks extends Ut {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      const n = si.prototype.parse.apply(this, [t, e]);
      if (n === 0) {
        this._zero = !0;
        return;
      }
      return J(n) && n > 0 ? n : null;
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = J(t) ? Math.max(0, t) : null),
        (this.max = J(e) ? Math.max(0, e) : null),
        this.options.beginAtZero && (this._zero = !0),
        this._zero &&
          this.min !== this._suggestedMin &&
          !J(this._userMin) &&
          (this.min = t === Xt(this.min, 0) ? Xt(this.min, -1) : Xt(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let n = this.min,
        s = this.max;
      const o = (a) => (n = t ? n : a),
        r = (a) => (s = e ? s : a);
      n === s && (n <= 0 ? (o(1), r(10)) : (o(Xt(n, -1)), r(Xt(s, 1)))),
        n <= 0 && o(Xt(s, -1)),
        s <= 0 && r(Xt(n, 1)),
        (this.min = n),
        (this.max = s);
    }
    buildTicks() {
      const t = this.options,
        e = { min: this._userMin, max: this._userMax },
        n = pc(e, this);
      return (
        t.bounds === 'ticks' && yn(n, this, 'value'),
        t.reverse
          ? (n.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        n
      );
    }
    getLabelForValue(t) {
      return t === void 0 ? '0' : Pi(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(), (this._startValue = Dt(t)), (this._valueRange = Dt(this.max) - Dt(t));
    }
    getPixelForValue(t) {
      return (
        (t === void 0 || t === 0) && (t = this.min),
        t === null || isNaN(t)
          ? NaN
          : this.getPixelForDecimal(
              t === this.min ? 0 : (Dt(t) - this._startValue) / this._valueRange
            )
      );
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  O(Ks, 'id', 'logarithmic'),
    O(Ks, 'defaults', { ticks: { callback: We.formatters.logarithmic, major: { enabled: !0 } } });
  function qi(i) {
    const t = i.ticks;
    if (t.display && i.display) {
      const e = lt(t.backdropPadding);
      return F(t.font && t.font.size, U.font.size) + e.height;
    }
    return 0;
  }
  function mc(i, t, e) {
    return (e = W(e) ? e : [e]), { w: Sr(i, t.string, e), h: e.length * t.lineHeight };
  }
  function qs(i, t, e, n, s) {
    return i === n || i === s
      ? { start: t - e / 2, end: t + e / 2 }
      : i < n || i > s
      ? { start: t - e, end: t }
      : { start: t, end: t + e };
  }
  function bc(i) {
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
      a = r.centerPointLabels ? Z / o : 0;
    for (let l = 0; l < o; l++) {
      const c = r.setContext(i.getPointLabelContext(l));
      s[l] = c.padding;
      const h = i.getPointPosition(l, i.drawingArea + s[l], a),
        f = et(c.font),
        d = mc(i.ctx, f, i._pointLabels[l]);
      n[l] = d;
      const g = ut(i.getIndexAngle(l) + a),
        p = Math.round(ki(g)),
        b = qs(p, h.x, d.w, 0, 180),
        m = qs(p, h.y, d.h, 90, 270);
      _c(e, t, g, b, m);
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
      (i._pointLabelItems = vc(i, n, s));
  }
  function _c(i, t, e, n, s) {
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
  function xc(i, t, e) {
    const n = i.drawingArea,
      { extra: s, additionalAngle: o, padding: r, size: a } = e,
      l = i.getPointPosition(t, n + s + r, o),
      c = Math.round(ki(ut(l.angle + st))),
      h = Mc(l.y, a.h, c),
      f = kc(c),
      d = wc(l.x, a.w, f);
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
  function yc(i, t) {
    if (!t) return !0;
    const { left: e, top: n, right: s, bottom: o } = i;
    return !(
      xt({ x: e, y: n }, t) ||
      xt({ x: e, y: o }, t) ||
      xt({ x: s, y: n }, t) ||
      xt({ x: s, y: o }, t)
    );
  }
  function vc(i, t, e) {
    const n = [],
      s = i._pointLabels.length,
      o = i.options,
      { centerPointLabels: r, display: a } = o.pointLabels,
      l = { extra: qi(o) / 2, additionalAngle: r ? Z / s : 0 };
    let c;
    for (let h = 0; h < s; h++) {
      (l.padding = e[h]), (l.size = t[h]);
      const f = xc(i, h, l);
      n.push(f), a === 'auto' && ((f.visible = yc(f, c)), f.visible && (c = f));
    }
    return n;
  }
  function kc(i) {
    return i === 0 || i === 180 ? 'center' : i < 180 ? 'left' : 'right';
  }
  function wc(i, t, e) {
    return e === 'right' ? (i -= t) : e === 'center' && (i -= t / 2), i;
  }
  function Mc(i, t, e) {
    return e === 90 || e === 270 ? (i -= t / 2) : (e > 270 || e < 90) && (i -= t), i;
  }
  function Sc(i, t, e) {
    const { left: n, top: s, right: o, bottom: r } = e,
      { backdropColor: a } = t;
    if (!N(a)) {
      const l = _e(t.borderRadius),
        c = lt(t.backdropPadding);
      i.fillStyle = a;
      const h = n - c.left,
        f = s - c.top,
        d = o - n + c.width,
        g = r - s + c.height;
      Object.values(l).some((p) => p !== 0)
        ? (i.beginPath(), Ri(i, { x: h, y: f, w: d, h: g, radius: l }), i.fill())
        : i.fillRect(h, f, d, g);
    }
  }
  function Cc(i, t) {
    const {
      ctx: e,
      options: { pointLabels: n },
    } = i;
    for (let s = t - 1; s >= 0; s--) {
      const o = i._pointLabelItems[s];
      if (!o.visible) continue;
      const r = n.setContext(i.getPointLabelContext(s));
      Sc(e, r, o);
      const a = et(r.font),
        { x: l, y: c, textAlign: h } = o;
      be(e, i._pointLabels[s], l, c + a.lineHeight / 2, a, {
        color: r.color,
        textAlign: h,
        textBaseline: 'middle',
      });
    }
  }
  function Gs(i, t, e, n) {
    const { ctx: s } = i;
    if (e) s.arc(i.xCenter, i.yCenter, t, 0, ht);
    else {
      let o = i.getPointPosition(0, t);
      s.moveTo(o.x, o.y);
      for (let r = 1; r < n; r++) (o = i.getPointPosition(r, t)), s.lineTo(o.x, o.y);
    }
  }
  function Pc(i, t, e, n, s) {
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
      Gs(i, e, r, n),
      o.closePath(),
      o.stroke(),
      o.restore());
  }
  function Oc(i, t, e) {
    return At(i, { label: e, index: t, type: 'pointLabel' });
  }
  class oi extends si {
    constructor(t) {
      super(t),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const t = (this._padding = lt(qi(this.options) / 2)),
        e = (this.width = this.maxWidth - t.width),
        n = (this.height = this.maxHeight - t.height);
      (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
        (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
        (this.drawingArea = Math.floor(Math.min(e, n) / 2));
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!1);
      (this.min = J(t) && !isNaN(t) ? t : 0),
        (this.max = J(e) && !isNaN(e) ? e : 0),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / qi(this.options));
    }
    generateTickLabels(t) {
      si.prototype.generateTickLabels.call(this, t),
        (this._pointLabels = this.getLabels()
          .map((e, n) => {
            const s = Y(this.options.pointLabels.callback, [e, n], this);
            return s || s === 0 ? s : '';
          })
          .filter((e, n) => this.chart.getDataVisibility(n)));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display ? bc(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, n, s) {
      (this.xCenter += Math.floor((t - e) / 2)),
        (this.yCenter += Math.floor((n - s) / 2)),
        (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, n, s)));
    }
    getIndexAngle(t) {
      const e = ht / (this._pointLabels.length || 1),
        n = this.options.startAngle || 0;
      return ut(t * e + Rt(n));
    }
    getDistanceFromCenterForValue(t) {
      if (N(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (N(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const n = e[t];
        return Oc(this.getContext(), t, n);
      }
    }
    getPointPosition(t, e, n = 0) {
      const s = this.getIndexAngle(t) - st + n;
      return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: n, right: s, bottom: o } = this._pointLabelItems[t];
      return { left: e, top: n, right: s, bottom: o };
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
          Gs(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
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
        (e.pointLabels.display && Cc(this, r),
        s.display &&
          this.ticks.forEach((h, f) => {
            if (f !== 0) {
              l = this.getDistanceFromCenterForValue(h.value);
              const d = this.getContext(f),
                g = s.setContext(d),
                p = o.setContext(d);
              Pc(this, g, l, r, p);
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
          if (
            ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)), c.showLabelBackdrop)
          ) {
            (t.font = h.string),
              (r = t.measureText(a.label).width),
              (t.fillStyle = c.backdropColor);
            const f = lt(c.backdropPadding);
            t.fillRect(-r / 2 - f.left, -o - h.size / 2 - f.top, r + f.width, h.size + f.height);
          }
          be(t, a.label, 0, -o, h, { color: c.color });
        }),
        t.restore();
    }
    drawTitle() {}
  }
  O(oi, 'id', 'radialLinear'),
    O(oi, 'defaults', {
      display: !0,
      animate: !0,
      position: 'chartArea',
      angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: We.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(t) {
          return t;
        },
        padding: 5,
        centerPointLabels: !1,
      },
    }),
    O(oi, 'defaultRoutes', {
      'angleLines.color': 'borderColor',
      'pointLabels.color': 'color',
      'ticks.color': 'color',
    }),
    O(oi, 'descriptors', { angleLines: { _fallback: 'grid' } });
  const ri = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    rt = Object.keys(ri);
  function Tc(i, t) {
    return i - t;
  }
  function Zs(i, t) {
    if (N(t)) return null;
    const e = i._adapter,
      { parser: n, round: s, isoWeekday: o } = i._parseOpts;
    let r = t;
    return (
      typeof n == 'function' && (r = n(r)),
      J(r) || (r = typeof n == 'string' ? e.parse(r, n) : e.parse(r)),
      r === null
        ? null
        : (s &&
            (r =
              s === 'week' && (ue(o) || o === !0) ? e.startOf(r, 'isoWeek', o) : e.startOf(r, s)),
          +r)
    );
  }
  function Js(i, t, e, n) {
    const s = rt.length;
    for (let o = rt.indexOf(i); o < s - 1; ++o) {
      const r = ri[rt[o]],
        a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
      if (r.common && Math.ceil((e - t) / (a * r.size)) <= n) return rt[o];
    }
    return rt[s - 1];
  }
  function Dc(i, t, e, n, s) {
    for (let o = rt.length - 1; o >= rt.indexOf(e); o--) {
      const r = rt[o];
      if (ri[r].common && i._adapter.diff(s, n, r) >= t - 1) return r;
    }
    return rt[e ? rt.indexOf(e) : 0];
  }
  function Rc(i) {
    for (let t = rt.indexOf(i) + 1, e = rt.length; t < e; ++t) if (ri[rt[t]].common) return rt[t];
  }
  function Qs(i, t, e) {
    if (!e) i[t] = !0;
    else if (e.length) {
      const { lo: n, hi: s } = Mi(e, t),
        o = e[n] >= t ? e[n] : e[s];
      i[o] = !0;
    }
  }
  function Ac(i, t, e, n) {
    const s = i._adapter,
      o = +s.startOf(t[0].value, n),
      r = t[t.length - 1].value;
    let a, l;
    for (a = o; a <= r; a = +s.add(a, 1, n)) (l = e[a]), l >= 0 && (t[l].major = !0);
    return t;
  }
  function to(i, t, e) {
    const n = [],
      s = {},
      o = t.length;
    let r, a;
    for (r = 0; r < o; ++r) (a = t[r]), (s[a] = r), n.push({ value: a, major: !1 });
    return o === 0 || !e ? n : Ac(i, n, s, e);
  }
  class ai extends Ut {
    constructor(t) {
      super(t),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = 'day'),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(t, e = {}) {
      const n = t.time || (t.time = {}),
        s = (this._adapter = new Ia._date(t.adapters.date));
      s.init(e),
        fe(n.displayFormats, s.formats()),
        (this._parseOpts = { parser: n.parser, round: n.round, isoWeekday: n.isoWeekday }),
        super.init(t),
        (this._normalized = e.normalized);
    }
    parse(t, e) {
      return t === void 0 ? null : Zs(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
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
        (s = J(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n)),
        (o = J(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
        (this.min = Math.min(s, o - 1)),
        (this.max = Math.max(s + 1, o));
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY,
        n = Number.NEGATIVE_INFINITY;
      return t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n };
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
        a = hr(s, o, r);
      return (
        (this._unit =
          e.unit ||
          (n.autoSkip
            ? Js(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
            : Dc(this, a.length, e.minUnit, this.min, this.max))),
        (this._majorUnit = !n.major.enabled || this._unit === 'year' ? void 0 : Rc(this._unit)),
        this.initOffsets(s),
        t.reverse && a.reverse(),
        to(this, a, this._majorUnit)
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
      (e = ft(e, 0, r)),
        (n = ft(n, 0, r)),
        (this._offsets = { start: e, end: n, factor: 1 / (e + 1 + n) });
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        n = this.max,
        s = this.options,
        o = s.time,
        r = o.unit || Js(o.minUnit, e, n, this._getLabelCapacity(e)),
        a = F(s.ticks.stepSize, 1),
        l = r === 'week' ? o.isoWeekday : !1,
        c = ue(l) || l === !0,
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
      for (d = f, g = 0; d < n; d = +t.add(d, a, r), g++) Qs(h, d, p);
      return (
        (d === n || s.bounds === 'ticks' || g === 1) && Qs(h, d, p),
        Object.keys(h)
          .sort((b, m) => b - m)
          .map((b) => +b)
      );
    }
    getLabelForValue(t) {
      const e = this._adapter,
        n = this.options.time;
      return n.tooltipFormat
        ? e.format(t, n.tooltipFormat)
        : e.format(t, n.displayFormats.datetime);
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
      if (r) return Y(r, [t, e, n], this);
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
        s = Rt(this.isHorizontal() ? e.maxRotation : e.minRotation),
        o = Math.cos(s),
        r = Math.sin(s),
        a = this._resolveTickFontOptions(0).size;
      return { w: n * o + a * r, h: n * r + a * o };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        n = e.displayFormats,
        s = n[e.unit] || n.millisecond,
        o = this._tickFormatFunction(t, 0, to(this, [t], this._majorUnit), s),
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
      for (e = 0, n = s.length; e < n; ++e) t.push(Zs(this, s[e]));
      return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
      return dr(t.sort(Tc));
    }
  }
  O(ai, 'id', 'time'),
    O(ai, 'defaults', {
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
      ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
    });
  function li(i, t, e) {
    let n = 0,
      s = i.length - 1,
      o,
      r,
      a,
      l;
    e
      ? (t >= i[n].pos && t <= i[s].pos && ({ lo: n, hi: s } = jt(i, 'pos', t)),
        ({ pos: o, time: a } = i[n]),
        ({ pos: r, time: l } = i[s]))
      : (t >= i[n].time && t <= i[s].time && ({ lo: n, hi: s } = jt(i, 'time', t)),
        ({ time: o, pos: a } = i[n]),
        ({ time: r, pos: l } = i[s]));
    const c = r - o;
    return c ? a + ((l - a) * (t - o)) / c : a;
  }
  class eo extends ai {
    constructor(t) {
      super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        e = (this._table = this.buildLookupTable(t));
      (this._minPos = li(e, this.min)),
        (this._tableRange = li(e, this.max) - this._minPos),
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
          { time: e, pos: 0 },
          { time: n, pos: 1 },
        ];
      for (r = 0, a = s.length; r < a; ++r)
        (h = s[r + 1]),
          (l = s[r - 1]),
          (c = s[r]),
          Math.round((h + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) });
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
      return (li(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const e = this._offsets,
        n = this.getDecimalForPixel(t) / e.factor - e.end;
      return li(this._table, n * this._tableRange + this._minPos, !0);
    }
  }
  O(eo, 'id', 'timeseries'), O(eo, 'defaults', ai.defaults);
  const io = 'label';
  function no(i, t) {
    typeof i == 'function' ? i(t) : i && (i.current = t);
  }
  function Lc(i, t) {
    const e = i.options;
    e && t && Object.assign(e, t);
  }
  function so(i, t) {
    i.labels = t;
  }
  function oo(i, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : io;
    const n = [];
    i.datasets = t.map((s) => {
      const o = i.datasets.find((r) => r[e] === s[e]);
      return !o || !s.data || n.includes(o) ? { ...s } : (n.push(o), Object.assign(o, s), o);
    });
  }
  function Ec(i) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : io;
    const e = { labels: [], datasets: [] };
    return so(e, i.labels), oo(e, i.datasets, t), e;
  }
  function Ic(i, t) {
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
      g = j.useRef(null),
      p = j.useRef(),
      b = () => {
        g.current &&
          ((p.current = new vt(g.current, {
            type: r,
            data: Ec(a, o),
            options: l && { ...l },
            plugins: c,
          })),
          no(t, p.current));
      },
      m = () => {
        no(t, null), p.current && (p.current.destroy(), (p.current = null));
      };
    return (
      j.useEffect(() => {
        !s && p.current && l && Lc(p.current, l);
      }, [s, l]),
      j.useEffect(() => {
        !s && p.current && so(p.current.config.data, a.labels);
      }, [s, a.labels]),
      j.useEffect(() => {
        !s && p.current && a.datasets && oo(p.current.config.data, a.datasets, o);
      }, [s, a.datasets]),
      j.useEffect(() => {
        p.current && (s ? (m(), setTimeout(b)) : p.current.update(f));
      }, [s, l, a.labels, a.datasets, f]),
      j.useEffect(() => {
        p.current && (m(), setTimeout(b));
      }, [r]),
      j.useEffect(() => (b(), () => m()), []),
      j.createElement('canvas', Object.assign({ ref: g, role: 'img', height: e, width: n }, d), h)
    );
  }
  const Fc = j.forwardRef(Ic);
  function zc(i, t) {
    return (
      vt.register(t),
      j.forwardRef((e, n) => j.createElement(Fc, Object.assign({}, e, { ref: n, type: i })))
    );
  }
  const Bc = zc('line', Ke),
    jc = (i) => 16 * i,
    Gi = ((i) => (t) => {
      const e = t.split(`${i}`)[0],
        n = Number(e);
      return i === 'rem' ? jc(n) : n;
    })('rem'),
    Nc = { root: ko.css({ position: 'relative' }) },
    Wc = 'Analytics line chart';
  vt.register(Xi, Ki, ii, Oe, ec, cc);
  const Zi = Gi(mt.fontSizeS);
  (vt.defaults.font.size = Zi),
    (vt.defaults.font.family = mt.fontStackPrimary),
    (vt.defaults.font.weight = mt.fontWeightMedium.toString()),
    (vt.defaults.borderColor = mt.gray200),
    (vt.defaults.datasets.line.borderColor = mt.colorPrimary);
  const Vc = 1.2,
    ro = (i) => {
      const { dataValues: t, xAxisLabels: e, tooltipMetricLabel: n, accessibilityLabel: s } = i,
        o = { labels: e, datasets: [{ data: t }] },
        r = {
          responsive: !0,
          scales: {
            y: { beginAtZero: !0, suggestedMax: Math.max(...t) * Vc, ticks: { precision: 0 } },
          },
          plugins: {
            tooltip: {
              backgroundColor: mt.gray900,
              bodyColor: mt.colorWhite,
              padding: Gi(mt.spacingXs),
              titleMarginBottom: Gi(mt.spacing2Xs),
              titleFont: { size: Zi },
              bodyFont: { size: Zi, weight: '700' },
              displayColors: !1,
              callbacks: { beforeBody: () => n },
            },
          },
        },
        a = { 'aria-label': s };
      return pi.jsx('div', {
        className: Nc.root,
        children: pi.jsx(Bc, { data: o, options: r, fallbackContent: s, ...a }),
      });
    };
  (ro.defaultProps = { accessibilityLabel: Wc }),
    (Q.HyperLink = So),
    (Q.LineChart = ro),
    Object.defineProperty(Q, Symbol.toStringTag, { value: 'Module' });
});
