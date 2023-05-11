(function (Ae, l) {
  typeof exports == 'object' && typeof module < 'u'
    ? l(exports, require('react'), require('react-dom'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'react', 'react-dom'], l)
    : ((Ae = typeof globalThis < 'u' ? globalThis : Ae || self),
      l((Ae['integration-component-library'] = {}), Ae.r__default, Ae.q$6));
})(this, function (Ae, l, $t) {
  var is, tn;
  ('use strict');
  var z4 = Object.defineProperty;
  var O4 = (Ae, l, $t) =>
    l in Ae
      ? z4(Ae, l, { enumerable: !0, configurable: !0, writable: !0, value: $t })
      : (Ae[l] = $t);
  var Z = (Ae, l, $t) => (O4(Ae, typeof l != 'symbol' ? l + '' : l, $t), $t);
  function Ta(t) {
    const e = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (t) {
      for (const n in t)
        if (n !== 'default') {
          const i = Object.getOwnPropertyDescriptor(t, n);
          Object.defineProperty(e, n, i.get ? i : { enumerable: !0, get: () => t[n] });
        }
    }
    return (e.default = t), Object.freeze(e);
  }
  const G = Ta(l),
    Ad = Ta($t);
  function rs(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
  }
  var ss = { exports: {} },
    Yn = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Pa;
  function Td() {
    if (Pa) return Yn;
    Pa = 1;
    var t = l,
      e = Symbol.for('react.element'),
      n = Symbol.for('react.fragment'),
      i = Object.prototype.hasOwnProperty,
      r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      s = { key: !0, ref: !0, __self: !0, __source: !0 };
    function a(o, c, h) {
      var d,
        u = {},
        p = null,
        m = null;
      h !== void 0 && (p = '' + h),
        c.key !== void 0 && (p = '' + c.key),
        c.ref !== void 0 && (m = c.ref);
      for (d in c) i.call(c, d) && !s.hasOwnProperty(d) && (u[d] = c[d]);
      if (o && o.defaultProps)
        for (d in ((c = o.defaultProps), c)) u[d] === void 0 && (u[d] = c[d]);
      return { $$typeof: e, type: o, key: p, ref: m, props: u, _owner: r.current };
    }
    return (Yn.Fragment = n), (Yn.jsx = a), (Yn.jsxs = a), Yn;
  }
  var Un = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ha;
  function Pd() {
    return (
      Ha ||
        ((Ha = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var t = l,
              e = Symbol.for('react.element'),
              n = Symbol.for('react.portal'),
              i = Symbol.for('react.fragment'),
              r = Symbol.for('react.strict_mode'),
              s = Symbol.for('react.profiler'),
              a = Symbol.for('react.provider'),
              o = Symbol.for('react.context'),
              c = Symbol.for('react.forward_ref'),
              h = Symbol.for('react.suspense'),
              d = Symbol.for('react.suspense_list'),
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
                for (var A = arguments.length, H = new Array(A > 1 ? A - 1 : 0), K = 1; K < A; K++)
                  H[K - 1] = arguments[K];
                k('error', x, H);
              }
            }
            function k(x, A, H) {
              {
                var K = y.ReactDebugCurrentFrame,
                  ce = K.getStackAddendum();
                ce !== '' && ((A += '%s'), (H = H.concat([ce])));
                var ge = H.map(function (ie) {
                  return String(ie);
                });
                ge.unshift('Warning: ' + A), Function.prototype.apply.call(console[x], console, ge);
              }
            }
            var S = !1,
              M = !1,
              O = !1,
              C = !1,
              L = !1,
              T;
            T = Symbol.for('react.module.reference');
            function I(x) {
              return !!(
                typeof x == 'string' ||
                typeof x == 'function' ||
                x === i ||
                x === s ||
                L ||
                x === r ||
                x === h ||
                x === d ||
                C ||
                x === m ||
                S ||
                M ||
                O ||
                (typeof x == 'object' &&
                  x !== null &&
                  (x.$$typeof === p ||
                    x.$$typeof === u ||
                    x.$$typeof === a ||
                    x.$$typeof === o ||
                    x.$$typeof === c ||
                    x.$$typeof === T ||
                    x.getModuleId !== void 0))
              );
            }
            function P(x, A, H) {
              var K = x.displayName;
              if (K) return K;
              var ce = A.displayName || A.name || '';
              return ce !== '' ? H + '(' + ce + ')' : H;
            }
            function B(x) {
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
                case s:
                  return 'Profiler';
                case r:
                  return 'StrictMode';
                case h:
                  return 'Suspense';
                case d:
                  return 'SuspenseList';
              }
              if (typeof x == 'object')
                switch (x.$$typeof) {
                  case o:
                    var A = x;
                    return B(A) + '.Consumer';
                  case a:
                    var H = x;
                    return B(H._context) + '.Provider';
                  case c:
                    return P(x, x.render, 'ForwardRef');
                  case u:
                    var K = x.displayName || null;
                    return K !== null ? K : j(x.type) || 'Memo';
                  case p: {
                    var ce = x,
                      ge = ce._payload,
                      ie = ce._init;
                    try {
                      return j(ie(ge));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var q = Object.assign,
              N = 0,
              U,
              X,
              he,
              Me,
              ue,
              Ie,
              V;
            function F() {}
            F.__reactDisabledLog = !0;
            function $() {
              {
                if (N === 0) {
                  (U = console.log),
                    (X = console.info),
                    (he = console.warn),
                    (Me = console.error),
                    (ue = console.group),
                    (Ie = console.groupCollapsed),
                    (V = console.groupEnd);
                  var x = { configurable: !0, enumerable: !0, value: F, writable: !0 };
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
                N++;
              }
            }
            function W() {
              {
                if ((N--, N === 0)) {
                  var x = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: q({}, x, { value: U }),
                    info: q({}, x, { value: X }),
                    warn: q({}, x, { value: he }),
                    error: q({}, x, { value: Me }),
                    group: q({}, x, { value: ue }),
                    groupCollapsed: q({}, x, { value: Ie }),
                    groupEnd: q({}, x, { value: V }),
                  });
                }
                N < 0 &&
                  w('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var z = y.ReactCurrentDispatcher,
              ee;
            function D(x, A, H) {
              {
                if (ee === void 0)
                  try {
                    throw Error();
                  } catch (ce) {
                    var K = ce.stack.trim().match(/\n( *(at )?)/);
                    ee = (K && K[1]) || '';
                  }
                return (
                  `
` +
                  ee +
                  x
                );
              }
            }
            var Se = !1,
              se;
            {
              var ye = typeof WeakMap == 'function' ? WeakMap : Map;
              se = new ye();
            }
            function J(x, A) {
              if (!x || Se) return '';
              {
                var H = se.get(x);
                if (H !== void 0) return H;
              }
              var K;
              Se = !0;
              var ce = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var ge;
              (ge = z.current), (z.current = null), $();
              try {
                if (A) {
                  var ie = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(ie.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(ie, []);
                    } catch (Nt) {
                      K = Nt;
                    }
                    Reflect.construct(x, [], ie);
                  } else {
                    try {
                      ie.call();
                    } catch (Nt) {
                      K = Nt;
                    }
                    x.call(ie.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Nt) {
                    K = Nt;
                  }
                  x();
                }
              } catch (Nt) {
                if (Nt && K && typeof Nt.stack == 'string') {
                  for (
                    var ne = Nt.stack.split(`
`),
                      Ye = K.stack.split(`
`),
                      Le = ne.length - 1,
                      De = Ye.length - 1;
                    Le >= 1 && De >= 0 && ne[Le] !== Ye[De];

                  )
                    De--;
                  for (; Le >= 1 && De >= 0; Le--, De--)
                    if (ne[Le] !== Ye[De]) {
                      if (Le !== 1 || De !== 1)
                        do
                          if ((Le--, De--, De < 0 || ne[Le] !== Ye[De])) {
                            var vt =
                              `
` + ne[Le].replace(' at new ', ' at ');
                            return (
                              x.displayName &&
                                vt.includes('<anonymous>') &&
                                (vt = vt.replace('<anonymous>', x.displayName)),
                              typeof x == 'function' && se.set(x, vt),
                              vt
                            );
                          }
                        while (Le >= 1 && De >= 0);
                      break;
                    }
                }
              } finally {
                (Se = !1), (z.current = ge), W(), (Error.prepareStackTrace = ce);
              }
              var Xn = x ? x.displayName || x.name : '',
                Dd = Xn ? D(Xn) : '';
              return typeof x == 'function' && se.set(x, Dd), Dd;
            }
            function Be(x, A, H) {
              return J(x, !1);
            }
            function Mt(x) {
              var A = x.prototype;
              return !!(A && A.isReactComponent);
            }
            function _(x, A, H) {
              if (x == null) return '';
              if (typeof x == 'function') return J(x, Mt(x));
              if (typeof x == 'string') return D(x);
              switch (x) {
                case h:
                  return D('Suspense');
                case d:
                  return D('SuspenseList');
              }
              if (typeof x == 'object')
                switch (x.$$typeof) {
                  case c:
                    return Be(x.render);
                  case u:
                    return _(x.type, A, H);
                  case p: {
                    var K = x,
                      ce = K._payload,
                      ge = K._init;
                    try {
                      return _(ge(ce), A, H);
                    } catch {}
                  }
                }
              return '';
            }
            var we = Object.prototype.hasOwnProperty,
              te = {},
              ze = y.ReactDebugCurrentFrame;
            function pt(x) {
              if (x) {
                var A = x._owner,
                  H = _(x.type, x._source, A ? A.type : null);
                ze.setExtraStackFrame(H);
              } else ze.setExtraStackFrame(null);
            }
            function pe(x, A, H, K, ce) {
              {
                var ge = Function.call.bind(we);
                for (var ie in x)
                  if (ge(x, ie)) {
                    var ne = void 0;
                    try {
                      if (typeof x[ie] != 'function') {
                        var Ye = Error(
                          (K || 'React class') +
                            ': ' +
                            H +
                            ' type `' +
                            ie +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof x[ie] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        throw ((Ye.name = 'Invariant Violation'), Ye);
                      }
                      ne = x[ie](A, ie, K, H, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (Le) {
                      ne = Le;
                    }
                    ne &&
                      !(ne instanceof Error) &&
                      (pt(ce),
                      w(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        K || 'React class',
                        H,
                        ie,
                        typeof ne
                      ),
                      pt(null)),
                      ne instanceof Error &&
                        !(ne.message in te) &&
                        ((te[ne.message] = !0),
                        pt(ce),
                        w('Failed %s type: %s', H, ne.message),
                        pt(null));
                  }
              }
            }
            var St = Array.isArray;
            function mt(x) {
              return St(x);
            }
            function $e(x) {
              {
                var A = typeof Symbol == 'function' && Symbol.toStringTag,
                  H = (A && x[Symbol.toStringTag]) || x.constructor.name || 'Object';
                return H;
              }
            }
            function Y(x) {
              try {
                return me(x), !1;
              } catch {
                return !0;
              }
            }
            function me(x) {
              return '' + x;
            }
            function Bt(x) {
              if (Y(x))
                return (
                  w(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    $e(x)
                  ),
                  me(x)
                );
            }
            var gt = y.ReactCurrentOwner,
              rt = { key: !0, ref: !0, __self: !0, __source: !0 },
              Md,
              Sd,
              Ra;
            Ra = {};
            function u4(x) {
              if (we.call(x, 'ref')) {
                var A = Object.getOwnPropertyDescriptor(x, 'ref').get;
                if (A && A.isReactWarning) return !1;
              }
              return x.ref !== void 0;
            }
            function f4(x) {
              if (we.call(x, 'key')) {
                var A = Object.getOwnPropertyDescriptor(x, 'key').get;
                if (A && A.isReactWarning) return !1;
              }
              return x.key !== void 0;
            }
            function p4(x, A) {
              if (typeof x.ref == 'string' && gt.current && A && gt.current.stateNode !== A) {
                var H = j(gt.current.type);
                Ra[H] ||
                  (w(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    j(gt.current.type),
                    x.ref
                  ),
                  (Ra[H] = !0));
              }
            }
            function m4(x, A) {
              {
                var H = function () {
                  Md ||
                    ((Md = !0),
                    w(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      A
                    ));
                };
                (H.isReactWarning = !0),
                  Object.defineProperty(x, 'key', { get: H, configurable: !0 });
              }
            }
            function g4(x, A) {
              {
                var H = function () {
                  Sd ||
                    ((Sd = !0),
                    w(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      A
                    ));
                };
                (H.isReactWarning = !0),
                  Object.defineProperty(x, 'ref', { get: H, configurable: !0 });
              }
            }
            var v4 = function (x, A, H, K, ce, ge, ie) {
              var ne = { $$typeof: e, type: x, key: A, ref: H, props: ie, _owner: ge };
              return (
                (ne._store = {}),
                Object.defineProperty(ne._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(ne, '_self', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: K,
                }),
                Object.defineProperty(ne, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: ce,
                }),
                Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)),
                ne
              );
            };
            function b4(x, A, H, K, ce) {
              {
                var ge,
                  ie = {},
                  ne = null,
                  Ye = null;
                H !== void 0 && (Bt(H), (ne = '' + H)),
                  f4(A) && (Bt(A.key), (ne = '' + A.key)),
                  u4(A) && ((Ye = A.ref), p4(A, ce));
                for (ge in A) we.call(A, ge) && !rt.hasOwnProperty(ge) && (ie[ge] = A[ge]);
                if (x && x.defaultProps) {
                  var Le = x.defaultProps;
                  for (ge in Le) ie[ge] === void 0 && (ie[ge] = Le[ge]);
                }
                if (ne || Ye) {
                  var De = typeof x == 'function' ? x.displayName || x.name || 'Unknown' : x;
                  ne && m4(ie, De), Ye && g4(ie, De);
                }
                return v4(x, ne, Ye, ce, K, gt.current, ie);
              }
            }
            var Ia = y.ReactCurrentOwner,
              kd = y.ReactDebugCurrentFrame;
            function Wn(x) {
              if (x) {
                var A = x._owner,
                  H = _(x.type, x._source, A ? A.type : null);
                kd.setExtraStackFrame(H);
              } else kd.setExtraStackFrame(null);
            }
            var Da;
            Da = !1;
            function Aa(x) {
              return typeof x == 'object' && x !== null && x.$$typeof === e;
            }
            function zd() {
              {
                if (Ia.current) {
                  var x = j(Ia.current.type);
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
            function y4(x) {
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
            var Od = {};
            function x4(x) {
              {
                var A = zd();
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
            function Ld(x, A) {
              {
                if (!x._store || x._store.validated || x.key != null) return;
                x._store.validated = !0;
                var H = x4(A);
                if (Od[H]) return;
                Od[H] = !0;
                var K = '';
                x &&
                  x._owner &&
                  x._owner !== Ia.current &&
                  (K = ' It was passed a child from ' + j(x._owner.type) + '.'),
                  Wn(x),
                  w(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    H,
                    K
                  ),
                  Wn(null);
              }
            }
            function Rd(x, A) {
              {
                if (typeof x != 'object') return;
                if (mt(x))
                  for (var H = 0; H < x.length; H++) {
                    var K = x[H];
                    Aa(K) && Ld(K, A);
                  }
                else if (Aa(x)) x._store && (x._store.validated = !0);
                else if (x) {
                  var ce = v(x);
                  if (typeof ce == 'function' && ce !== x.entries)
                    for (var ge = ce.call(x), ie; !(ie = ge.next()).done; )
                      Aa(ie.value) && Ld(ie.value, A);
                }
              }
            }
            function w4(x) {
              {
                var A = x.type;
                if (A == null || typeof A == 'string') return;
                var H;
                if (typeof A == 'function') H = A.propTypes;
                else if (typeof A == 'object' && (A.$$typeof === c || A.$$typeof === u))
                  H = A.propTypes;
                else return;
                if (H) {
                  var K = j(A);
                  pe(H, x.props, 'prop', K, x);
                } else if (A.PropTypes !== void 0 && !Da) {
                  Da = !0;
                  var ce = j(A);
                  w(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    ce || 'Unknown'
                  );
                }
                typeof A.getDefaultProps == 'function' &&
                  !A.getDefaultProps.isReactClassApproved &&
                  w(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  );
              }
            }
            function E4(x) {
              {
                for (var A = Object.keys(x.props), H = 0; H < A.length; H++) {
                  var K = A[H];
                  if (K !== 'children' && K !== 'key') {
                    Wn(x),
                      w(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        K
                      ),
                      Wn(null);
                    break;
                  }
                }
                x.ref !== null &&
                  (Wn(x), w('Invalid attribute `ref` supplied to `React.Fragment`.'), Wn(null));
              }
            }
            function Id(x, A, H, K, ce, ge) {
              {
                var ie = I(x);
                if (!ie) {
                  var ne = '';
                  (x === void 0 ||
                    (typeof x == 'object' && x !== null && Object.keys(x).length === 0)) &&
                    (ne +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var Ye = y4(ce);
                  Ye ? (ne += Ye) : (ne += zd());
                  var Le;
                  x === null
                    ? (Le = 'null')
                    : mt(x)
                    ? (Le = 'array')
                    : x !== void 0 && x.$$typeof === e
                    ? ((Le = '<' + (j(x.type) || 'Unknown') + ' />'),
                      (ne = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (Le = typeof x),
                    w(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      Le,
                      ne
                    );
                }
                var De = b4(x, A, H, ce, ge);
                if (De == null) return De;
                if (ie) {
                  var vt = A.children;
                  if (vt !== void 0)
                    if (K)
                      if (mt(vt)) {
                        for (var Xn = 0; Xn < vt.length; Xn++) Rd(vt[Xn], x);
                        Object.freeze && Object.freeze(vt);
                      } else
                        w(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                        );
                    else Rd(vt, x);
                }
                return x === i ? E4(De) : w4(De), De;
              }
            }
            function C4(x, A, H) {
              return Id(x, A, H, !0);
            }
            function M4(x, A, H) {
              return Id(x, A, H, !1);
            }
            var S4 = M4,
              k4 = C4;
            (Un.Fragment = i), (Un.jsx = S4), (Un.jsxs = k4);
          })()),
      Un
    );
  }
  process.env.NODE_ENV === 'production' ? (ss.exports = Td()) : (ss.exports = Pd());
  var ve = ss.exports;
  function Hd(t) {
    if (t.sheet) return t.sheet;
    for (var e = 0; e < document.styleSheets.length; e++)
      if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e];
  }
  function Fd(t) {
    var e = document.createElement('style');
    return (
      e.setAttribute('data-emotion', t.key),
      t.nonce !== void 0 && e.setAttribute('nonce', t.nonce),
      e.appendChild(document.createTextNode('')),
      e
    );
  }
  var Vd = (function () {
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
          var r = Fd(this),
            s;
          this.tags.length === 0
            ? (s = this.before)
            : (s = this.tags[this.tags.length - 1].nextSibling),
            this.container.insertBefore(r, s),
            this.tags.push(r);
        }
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Hd(a);
          try {
            var c = i.charCodeAt(1) === 105 && i.charCodeAt(0) === 64;
            o.insertRule(i, c ? 0 : o.cssRules.length);
          } catch (h) {
            process.env.NODE_ENV !== 'production' &&
              console.warn('There was a problem inserting the following rule: "' + i + '"', h);
          }
        } else a.appendChild(document.createTextNode(i));
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
  function Bd(t) {
    function e(V, F, $, W, z) {
      for (
        var ee = 0,
          D = 0,
          Se = 0,
          se = 0,
          ye,
          J,
          Be = 0,
          Mt = 0,
          _,
          we = (_ = ye = 0),
          te = 0,
          ze = 0,
          pt = 0,
          pe = 0,
          St = $.length,
          mt = St - 1,
          $e,
          Y = '',
          me = '',
          Bt = '',
          gt = '',
          rt;
        te < St;

      ) {
        if (
          ((J = $.charCodeAt(te)),
          te === mt &&
            D + se + Se + ee !== 0 &&
            (D !== 0 && (J = D === 47 ? 10 : 47), (se = Se = ee = 0), St++, mt++),
          D + se + Se + ee === 0)
        ) {
          if (te === mt && (0 < ze && (Y = Y.replace(p, '')), 0 < Y.trim().length)) {
            switch (J) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                Y += $.charAt(te);
            }
            J = 59;
          }
          switch (J) {
            case 123:
              for (Y = Y.trim(), ye = Y.charCodeAt(0), _ = 1, pe = ++te; te < St; ) {
                switch ((J = $.charCodeAt(te))) {
                  case 123:
                    _++;
                    break;
                  case 125:
                    _--;
                    break;
                  case 47:
                    switch ((J = $.charCodeAt(te + 1))) {
                      case 42:
                      case 47:
                        e: {
                          for (we = te + 1; we < mt; ++we)
                            switch ($.charCodeAt(we)) {
                              case 47:
                                if (J === 42 && $.charCodeAt(we - 1) === 42 && te + 2 !== we) {
                                  te = we + 1;
                                  break e;
                                }
                                break;
                              case 10:
                                if (J === 47) {
                                  te = we + 1;
                                  break e;
                                }
                            }
                          te = we;
                        }
                    }
                    break;
                  case 91:
                    J++;
                  case 40:
                    J++;
                  case 34:
                  case 39:
                    for (; te++ < mt && $.charCodeAt(te) !== J; );
                }
                if (_ === 0) break;
                te++;
              }
              switch (
                ((_ = $.substring(pe, te)),
                ye === 0 && (ye = (Y = Y.replace(u, '').trim()).charCodeAt(0)),
                ye)
              ) {
                case 64:
                  switch ((0 < ze && (Y = Y.replace(p, '')), (J = Y.charCodeAt(1)), J)) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      ze = F;
                      break;
                    default:
                      ze = U;
                  }
                  if (
                    ((_ = e(F, ze, _, J, z + 1)),
                    (pe = _.length),
                    0 < he &&
                      ((ze = n(U, Y, pt)),
                      (rt = o(3, _, ze, F, j, B, pe, J, z, W)),
                      (Y = ze.join('')),
                      rt !== void 0 && (pe = (_ = rt.trim()).length) === 0 && ((J = 0), (_ = ''))),
                    0 < pe)
                  )
                    switch (J) {
                      case 115:
                        Y = Y.replace(O, a);
                      case 100:
                      case 109:
                      case 45:
                        _ = Y + '{' + _ + '}';
                        break;
                      case 107:
                        (Y = Y.replace(w, '$1 $2')),
                          (_ = Y + '{' + _ + '}'),
                          (_ =
                            N === 1 || (N === 2 && s('@' + _, 3))
                              ? '@-webkit-' + _ + '@' + _
                              : '@' + _);
                        break;
                      default:
                        (_ = Y + _), W === 112 && (_ = ((me += _), ''));
                    }
                  else _ = '';
                  break;
                default:
                  _ = e(F, n(F, Y, pt), _, W, z + 1);
              }
              (Bt += _), (_ = pt = ze = we = ye = 0), (Y = ''), (J = $.charCodeAt(++te));
              break;
            case 125:
            case 59:
              if (((Y = (0 < ze ? Y.replace(p, '') : Y).trim()), 1 < (pe = Y.length)))
                switch (
                  (we === 0 &&
                    ((ye = Y.charCodeAt(0)), ye === 45 || (96 < ye && 123 > ye)) &&
                    (pe = (Y = Y.replace(' ', ':')).length),
                  0 < he &&
                    (rt = o(1, Y, F, V, j, B, me.length, W, z, W)) !== void 0 &&
                    (pe = (Y = rt.trim()).length) === 0 &&
                    (Y = '\0\0'),
                  (ye = Y.charCodeAt(0)),
                  (J = Y.charCodeAt(1)),
                  ye)
                ) {
                  case 0:
                    break;
                  case 64:
                    if (J === 105 || J === 99) {
                      gt += Y + $.charAt(te);
                      break;
                    }
                  default:
                    Y.charCodeAt(pe - 1) !== 58 && (me += r(Y, ye, J, Y.charCodeAt(2)));
                }
              (pt = ze = we = ye = 0), (Y = ''), (J = $.charCodeAt(++te));
          }
        }
        switch (J) {
          case 13:
          case 10:
            D === 47
              ? (D = 0)
              : 1 + ye === 0 && W !== 107 && 0 < Y.length && ((ze = 1), (Y += '\0')),
              0 < he * ue && o(0, Y, F, V, j, B, me.length, W, z, W),
              (B = 1),
              j++;
            break;
          case 59:
          case 125:
            if (D + se + Se + ee === 0) {
              B++;
              break;
            }
          default:
            switch ((B++, ($e = $.charAt(te)), J)) {
              case 9:
              case 32:
                if (se + ee + D === 0)
                  switch (Be) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      $e = '';
                      break;
                    default:
                      J !== 32 && ($e = ' ');
                  }
                break;
              case 0:
                $e = '\\0';
                break;
              case 12:
                $e = '\\f';
                break;
              case 11:
                $e = '\\v';
                break;
              case 38:
                se + D + ee === 0 && ((ze = pt = 1), ($e = '\f' + $e));
                break;
              case 108:
                if (se + D + ee + q === 0 && 0 < we)
                  switch (te - we) {
                    case 2:
                      Be === 112 && $.charCodeAt(te - 3) === 58 && (q = Be);
                    case 8:
                      Mt === 111 && (q = Mt);
                  }
                break;
              case 58:
                se + D + ee === 0 && (we = te);
                break;
              case 44:
                D + Se + se + ee === 0 && ((ze = 1), ($e += '\r'));
                break;
              case 34:
              case 39:
                D === 0 && (se = se === J ? 0 : se === 0 ? J : se);
                break;
              case 91:
                se + D + Se === 0 && ee++;
                break;
              case 93:
                se + D + Se === 0 && ee--;
                break;
              case 41:
                se + D + ee === 0 && Se--;
                break;
              case 40:
                if (se + D + ee === 0) {
                  if (ye === 0)
                    switch (2 * Be + 3 * Mt) {
                      case 533:
                        break;
                      default:
                        ye = 1;
                    }
                  Se++;
                }
                break;
              case 64:
                D + Se + se + ee + we + _ === 0 && (_ = 1);
                break;
              case 42:
              case 47:
                if (!(0 < se + ee + Se))
                  switch (D) {
                    case 0:
                      switch (2 * J + 3 * $.charCodeAt(te + 1)) {
                        case 235:
                          D = 47;
                          break;
                        case 220:
                          (pe = te), (D = 42);
                      }
                      break;
                    case 42:
                      J === 47 &&
                        Be === 42 &&
                        pe + 2 !== te &&
                        ($.charCodeAt(pe + 2) === 33 && (me += $.substring(pe, te + 1)),
                        ($e = ''),
                        (D = 0));
                  }
            }
            D === 0 && (Y += $e);
        }
        (Mt = Be), (Be = J), te++;
      }
      if (((pe = me.length), 0 < pe)) {
        if (
          ((ze = F),
          0 < he &&
            ((rt = o(2, me, ze, V, j, B, pe, W, z, W)), rt !== void 0 && (me = rt).length === 0))
        )
          return gt + me + Bt;
        if (((me = ze.join(',') + '{' + me + '}'), N * q !== 0)) {
          switch ((N !== 2 || s(me, 2) || (q = 0), q)) {
            case 111:
              me = me.replace(S, ':-moz-$1') + me;
              break;
            case 112:
              me =
                me.replace(k, '::-webkit-input-$1') +
                me.replace(k, '::-moz-$1') +
                me.replace(k, ':-ms-input-$1') +
                me;
          }
          q = 0;
        }
      }
      return gt + me + Bt;
    }
    function n(V, F, $) {
      var W = F.trim().split(v);
      F = W;
      var z = W.length,
        ee = V.length;
      switch (ee) {
        case 0:
        case 1:
          var D = 0;
          for (V = ee === 0 ? '' : V[0] + ' '; D < z; ++D) F[D] = i(V, F[D], $).trim();
          break;
        default:
          var Se = (D = 0);
          for (F = []; D < z; ++D)
            for (var se = 0; se < ee; ++se) F[Se++] = i(V[se] + ' ', W[D], $).trim();
      }
      return F;
    }
    function i(V, F, $) {
      var W = F.charCodeAt(0);
      switch ((33 > W && (W = (F = F.trim()).charCodeAt(0)), W)) {
        case 38:
          return F.replace(y, '$1' + V.trim());
        case 58:
          return V.trim() + F.replace(y, '$1' + V.trim());
        default:
          if (0 < 1 * $ && 0 < F.indexOf('\f'))
            return F.replace(y, (V.charCodeAt(0) === 58 ? '' : '$1') + V.trim());
      }
      return V + F;
    }
    function r(V, F, $, W) {
      var z = V + ';',
        ee = 2 * F + 3 * $ + 4 * W;
      if (ee === 944) {
        V = z.indexOf(':', 9) + 1;
        var D = z.substring(V, z.length - 1).trim();
        return (
          (D = z.substring(0, V).trim() + D + ';'),
          N === 1 || (N === 2 && s(D, 1)) ? '-webkit-' + D + D : D
        );
      }
      if (N === 0 || (N === 2 && !s(z, 1))) return z;
      switch (ee) {
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
            (F = D.indexOf('-') + 1),
            D.charCodeAt(0) + D.charCodeAt(F))
          ) {
            case 226:
              D = z.replace(M, 'tb');
              break;
            case 232:
              D = z.replace(M, 'tb-rl');
              break;
            case 220:
              D = z.replace(M, 'lr');
              break;
            default:
              return z;
          }
          return '-webkit-' + z + '-ms-' + D + z;
        case 1017:
          if (z.indexOf('sticky', 9) === -1) break;
        case 975:
          switch (
            ((F = (z = V).length - 10),
            (D = (z.charCodeAt(F) === 33 ? z.substring(0, F) : z)
              .substring(V.indexOf(':', 7) + 1)
              .trim()),
            (ee = D.charCodeAt(0) + (D.charCodeAt(7) | 0)))
          ) {
            case 203:
              if (111 > D.charCodeAt(8)) break;
            case 115:
              z = z.replace(D, '-webkit-' + D) + ';' + z;
              break;
            case 207:
            case 102:
              z =
                z.replace(D, '-webkit-' + (102 < ee ? 'inline-' : '') + 'box') +
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
          if (I.test(V) === !0)
            return (D = V.substring(V.indexOf(':') + 1)).charCodeAt(0) === 115
              ? r(V.replace('stretch', 'fill-available'), F, $, W).replace(
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
    function s(V, F) {
      var $ = V.indexOf(F === 1 ? ':' : '{'),
        W = V.substring(0, F !== 3 ? $ : 10);
      return ($ = V.substring($ + 1, V.length - 1)), Me(F !== 2 ? W : W.replace(T, '$1'), $, F);
    }
    function a(V, F) {
      var $ = r(F, F.charCodeAt(0), F.charCodeAt(1), F.charCodeAt(2));
      return $ !== F + ';' ? $.replace(C, ' or ($1)').substring(4) : '(' + F + ')';
    }
    function o(V, F, $, W, z, ee, D, Se, se, ye) {
      for (var J = 0, Be = F, Mt; J < he; ++J)
        switch ((Mt = X[J].call(d, V, Be, $, W, z, ee, D, Se, se, ye))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break;
          default:
            Be = Mt;
        }
      if (Be !== F) return Be;
    }
    function c(V) {
      switch (V) {
        case void 0:
        case null:
          he = X.length = 0;
          break;
        default:
          if (typeof V == 'function') X[he++] = V;
          else if (typeof V == 'object') for (var F = 0, $ = V.length; F < $; ++F) c(V[F]);
          else ue = !!V | 0;
      }
      return c;
    }
    function h(V) {
      return (
        (V = V.prefix),
        V !== void 0 &&
          ((Me = null), V ? (typeof V != 'function' ? (N = 1) : ((N = 2), (Me = V))) : (N = 0)),
        h
      );
    }
    function d(V, F) {
      var $ = V;
      if ((33 > $.charCodeAt(0) && ($ = $.trim()), (Ie = $), ($ = [Ie]), 0 < he)) {
        var W = o(-1, F, $, $, j, B, 0, 0, 0, 0);
        W !== void 0 && typeof W == 'string' && (F = W);
      }
      var z = e(U, $, F, 0, 0);
      return (
        0 < he && ((W = o(-2, z, $, $, j, B, z.length, 0, 0, 0)), W !== void 0 && (z = W)),
        (Ie = ''),
        (q = 0),
        (B = j = 1),
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
      k = /::(place)/g,
      S = /:(read-only)/g,
      M = /[svh]\w+-[tblr]{2}/,
      O = /\(\s*(.*)\s*\)/g,
      C = /([\s\S]*?);/g,
      L = /-self|flex-/g,
      T = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      I = /stretch|:\s*\w+\-(?:conte|avail)/,
      P = /([^-])(image-set\()/,
      B = 1,
      j = 1,
      q = 0,
      N = 1,
      U = [],
      X = [],
      he = 0,
      Me = null,
      ue = 0,
      Ie = '';
    return (d.use = c), (d.set = h), t !== void 0 && h(t), d;
  }
  var as = '/*|*/',
    Nd = as + '}';
  function $d(t) {
    t && qn.current.insert(t + '}');
  }
  var qn = { current: null },
    jd = function (e, n, i, r, s, a, o, c, h, d) {
      switch (e) {
        case 1: {
          switch (n.charCodeAt(0)) {
            case 64:
              return qn.current.insert(n + ';'), '';
            case 108:
              if (n.charCodeAt(2) === 98) return '';
          }
          break;
        }
        case 2: {
          if (c === 0) return n + as;
          break;
        }
        case 3:
          switch (c) {
            case 102:
            case 112:
              return qn.current.insert(i[0] + n), '';
            default:
              return n + (d === 0 ? as : '');
          }
        case -2:
          n.split(Nd).forEach($d);
      }
    },
    Fa = function (e) {
      e === void 0 && (e = {});
      var n = e.key || 'css',
        i;
      e.prefix !== void 0 && (i = { prefix: e.prefix });
      var r = new Bd(i);
      if (process.env.NODE_ENV !== 'production' && /[^a-z-]/.test(n))
        throw new Error(
          'Emotion key must only contain lower case alphabetical characters and - but "' +
            n +
            '" was passed'
        );
      var s = {},
        a;
      {
        a = e.container || document.head;
        var o = document.querySelectorAll('style[data-emotion-' + n + ']');
        Array.prototype.forEach.call(o, function (p) {
          var m = p.getAttribute('data-emotion-' + n);
          m.split(' ').forEach(function (g) {
            s[g] = !0;
          }),
            p.parentNode !== a && a.appendChild(p);
        });
      }
      var c;
      if (
        (r.use(e.stylisPlugins)(jd),
        (c = function (m, g, b, v) {
          var y = g.name;
          if (((qn.current = b), process.env.NODE_ENV !== 'production' && g.map !== void 0)) {
            var w = g.map;
            qn.current = {
              insert: function (S) {
                b.insert(S + w);
              },
            };
          }
          r(m, g.styles), v && (u.inserted[y] = !0);
        }),
        process.env.NODE_ENV !== 'production')
      ) {
        var h = /\/\*/g,
          d = /\*\//g;
        r.use(function (p, m) {
          switch (p) {
            case -1: {
              for (; h.test(m); ) {
                if (((d.lastIndex = h.lastIndex), d.test(m))) {
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
                      k = w.test(m);
                    y &&
                      !k &&
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
        sheet: new Vd({ key: n, container: a, nonce: e.nonce, speedy: e.speedy }),
        nonce: e.nonce,
        inserted: s,
        registered: {},
        insert: c,
      };
      return u;
    },
    Wd = !0;
  function os(t, e, n) {
    var i = '';
    return (
      n.split(' ').forEach(function (r) {
        t[r] !== void 0 ? e.push(t[r]) : (i += r + ' ');
      }),
      i
    );
  }
  var Va = function (e, n, i) {
    var r = e.key + '-' + n.name;
    if (
      ((i === !1 || Wd === !1) && e.registered[r] === void 0 && (e.registered[r] = n.styles),
      e.inserted[n.name] === void 0)
    ) {
      var s = n;
      do e.insert('.' + r, s, e.sheet, !0), (s = s.next);
      while (s !== void 0);
    }
  };
  function Xd(t) {
    for (var e = 0, n, i = 0, r = t.length; r >= 4; ++i, r -= 4)
      (n =
        (t.charCodeAt(i) & 255) |
        ((t.charCodeAt(++i) & 255) << 8) |
        ((t.charCodeAt(++i) & 255) << 16) |
        ((t.charCodeAt(++i) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (e =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
    switch (r) {
      case 3:
        e ^= (t.charCodeAt(i + 2) & 255) << 16;
      case 2:
        e ^= (t.charCodeAt(i + 1) & 255) << 8;
      case 1:
        (e ^= t.charCodeAt(i) & 255), (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
    }
    return (
      (e ^= e >>> 13),
      (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
      ((e ^ (e >>> 15)) >>> 0).toString(36)
    );
  }
  var Yd = {
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
  function Ud(t) {
    var e = {};
    return function (n) {
      return e[n] === void 0 && (e[n] = t(n)), e[n];
    };
  }
  var Ba = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
    qd =
      "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
    Gd = /[A-Z]|^ms/g,
    Na = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    ls = function (e) {
      return e.charCodeAt(1) === 45;
    },
    $a = function (e) {
      return e != null && typeof e != 'boolean';
    },
    cs = Ud(function (t) {
      return ls(t) ? t : t.replace(Gd, '-$&').toLowerCase();
    }),
    Vi = function (e, n) {
      switch (e) {
        case 'animation':
        case 'animationName':
          if (typeof n == 'string')
            return n.replace(Na, function (i, r, s) {
              return (bt = { name: r, styles: s, next: bt }), r;
            });
      }
      return Yd[e] !== 1 && !ls(e) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
    };
  if (process.env.NODE_ENV !== 'production') {
    var Kd = /(attr|calc|counters?|url)\(/,
      Zd = [
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
      Qd = Vi,
      Jd = /^-ms-/,
      _d = /-(.)/g,
      ja = {};
    Vi = function (e, n) {
      e === 'content' &&
        (typeof n != 'string' ||
          (Zd.indexOf(n) === -1 &&
            !Kd.test(n) &&
            (n.charAt(0) !== n.charAt(n.length - 1) ||
              (n.charAt(0) !== '"' && n.charAt(0) !== "'")))) &&
        console.error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            n +
            '"\'`'
        );
      var i = Qd(e, n);
      return (
        i !== '' &&
          !ls(e) &&
          e.indexOf('-') !== -1 &&
          ja[e] === void 0 &&
          ((ja[e] = !0),
          console.error(
            'Using kebab-case for css properties in objects is not supported. Did you mean ' +
              e.replace(Jd, 'ms-').replace(_d, function (r, s) {
                return s.toUpperCase();
              }) +
              '?'
          )),
        i
      );
    };
  }
  var Wa = !0;
  function Gn(t, e, n, i) {
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
        if (n.anim === 1) return (bt = { name: n.name, styles: n.styles, next: bt }), n.name;
        if (n.styles !== void 0) {
          var r = n.next;
          if (r !== void 0)
            for (; r !== void 0; )
              (bt = { name: r.name, styles: r.styles, next: bt }), (r = r.next);
          var s = n.styles + ';';
          return process.env.NODE_ENV !== 'production' && n.map !== void 0 && (s += n.map), s;
        }
        return eu(t, e, n);
      }
      case 'function': {
        if (t !== void 0) {
          var a = bt,
            o = n(t);
          return (bt = a), Gn(t, e, o, i);
        } else process.env.NODE_ENV !== 'production' && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        break;
      }
      case 'string':
        if (process.env.NODE_ENV !== 'production') {
          var c = [],
            h = n.replace(Na, function (u, p, m) {
              var g = 'animation' + c.length;
              return (
                c.push(
                  'const ' + g + ' = keyframes`' + m.replace(/^@keyframes animation-\w+/, '') + '`'
                ),
                '${' + g + '}'
              );
            });
          c.length &&
            console.error(
              '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
                [].concat(c, ['`' + h + '`']).join(`
`) +
                `

You should wrap it with \`css\` like this:

` +
                ('css`' + h + '`')
            );
        }
        break;
    }
    if (e == null) return n;
    var d = e[n];
    return (
      process.env.NODE_ENV !== 'production' &&
        i &&
        Wa &&
        d !== void 0 &&
        (console.error(
          'Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion'
        ),
        (Wa = !1)),
      d !== void 0 && !i ? d : n
    );
  }
  function eu(t, e, n) {
    var i = '';
    if (Array.isArray(n)) for (var r = 0; r < n.length; r++) i += Gn(t, e, n[r], !1);
    else
      for (var s in n) {
        var a = n[s];
        if (typeof a != 'object')
          e != null && e[a] !== void 0
            ? (i += s + '{' + e[a] + '}')
            : $a(a) && (i += cs(s) + ':' + Vi(s, a) + ';');
        else {
          if (s === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
            throw new Error(
              'Component selectors can only be used in conjunction with babel-plugin-emotion.'
            );
          if (Array.isArray(a) && typeof a[0] == 'string' && (e == null || e[a[0]] === void 0))
            for (var o = 0; o < a.length; o++) $a(a[o]) && (i += cs(s) + ':' + Vi(s, a[o]) + ';');
          else {
            var c = Gn(t, e, a, !1);
            switch (s) {
              case 'animation':
              case 'animationName': {
                i += cs(s) + ':' + c + ';';
                break;
              }
              default:
                process.env.NODE_ENV !== 'production' && s === 'undefined' && console.error(qd),
                  (i += s + '{' + c + '}');
            }
          }
        }
      }
    return i;
  }
  var Xa = /label:\s*([^\s;\n{]+)\s*;/g,
    Ya;
  process.env.NODE_ENV !== 'production' &&
    (Ya = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
  var bt,
    Mn = function (e, n, i) {
      if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
        return e[0];
      var r = !0,
        s = '';
      bt = void 0;
      var a = e[0];
      a == null || a.raw === void 0
        ? ((r = !1), (s += Gn(i, n, a, !1)))
        : (process.env.NODE_ENV !== 'production' && a[0] === void 0 && console.error(Ba),
          (s += a[0]));
      for (var o = 1; o < e.length; o++)
        (s += Gn(i, n, e[o], s.charCodeAt(s.length - 1) === 46)),
          r &&
            (process.env.NODE_ENV !== 'production' && a[o] === void 0 && console.error(Ba),
            (s += a[o]));
      var c;
      process.env.NODE_ENV !== 'production' &&
        (s = s.replace(Ya, function (p) {
          return (c = p), '';
        })),
        (Xa.lastIndex = 0);
      for (var h = '', d; (d = Xa.exec(s)) !== null; ) h += '-' + d[1];
      var u = Xd(s) + h;
      return process.env.NODE_ENV !== 'production'
        ? {
            name: u,
            styles: s,
            map: c,
            next: bt,
            toString: function () {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            },
          }
        : { name: u, styles: s, next: bt };
    },
    tu = Object.prototype.hasOwnProperty,
    Ua = l.createContext(typeof HTMLElement < 'u' ? Fa() : null),
    nu = l.createContext({});
  Ua.Provider;
  var iu = function (e) {
      var n = function (r, s) {
        return l.createElement(Ua.Consumer, null, function (a) {
          return e(r, a, s);
        });
      };
      return l.forwardRef(n);
    },
    qa = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
    Ga = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
    ru = function () {
      return null;
    },
    Ka = function (e, n, i, r) {
      var s = i === null ? n.css : n.css(i);
      typeof s == 'string' && e.registered[s] !== void 0 && (s = e.registered[s]);
      var a = n[qa],
        o = [s],
        c = '';
      typeof n.className == 'string'
        ? (c = os(e.registered, o, n.className))
        : n.className != null && (c = n.className + ' ');
      var h = Mn(o);
      if (process.env.NODE_ENV !== 'production' && h.name.indexOf('-') === -1) {
        var d = n[Ga];
        d && (h = Mn([h, 'label:' + d + ';']));
      }
      Va(e, h, typeof a == 'string'), (c += e.key + '-' + h.name);
      var u = {};
      for (var p in n)
        tu.call(n, p) &&
          p !== 'css' &&
          p !== qa &&
          (process.env.NODE_ENV === 'production' || p !== Ga) &&
          (u[p] = n[p]);
      (u.ref = r), (u.className = c);
      var m = l.createElement(a, u),
        g = l.createElement(ru, null);
      return l.createElement(l.Fragment, null, g, m);
    },
    su = iu(function (t, e, n) {
      return typeof t.css == 'function'
        ? l.createElement(nu.Consumer, null, function (i) {
            return Ka(e, t, i, n);
          })
        : Ka(e, t, null, n);
    });
  process.env.NODE_ENV !== 'production' && (su.displayName = 'EmotionCssPropInternal');
  function au() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return Mn(e);
  }
  var hs = { exports: {} },
    ou = hs.exports;
  Object.defineProperty(ou, '__esModule', { value: !0 }),
    (hs.exports = {
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
  var lu = hs.exports;
  const f = rs(lu);
  function Za(t, e) {
    if (t.inserted[e.name] === void 0) return t.insert('', e, t.sheet, !0);
  }
  function Qa(t, e, n) {
    var i = [],
      r = os(t, i, n);
    return i.length < 2 ? n : r + e(i);
  }
  var cu = function (e) {
      var n = Fa(e);
      (n.sheet.speedy = function (o) {
        if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
          throw new Error('speedy must be changed before any rules are inserted');
        this.isSpeedy = o;
      }),
        (n.compat = !0);
      var i = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          var u = Mn(h, n.registered, void 0);
          return Va(n, u, !1), n.key + '-' + u.name;
        },
        r = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          var u = Mn(h, n.registered),
            p = 'animation-' + u.name;
          return Za(n, { name: u.name, styles: '@keyframes ' + p + '{' + u.styles + '}' }), p;
        },
        s = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          var u = Mn(h, n.registered);
          Za(n, u);
        },
        a = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          return Qa(n.registered, i, hu(h));
        };
      return {
        css: i,
        cx: a,
        injectGlobal: s,
        keyframes: r,
        hydrate: function (c) {
          c.forEach(function (h) {
            n.inserted[h] = !0;
          });
        },
        flush: function () {
          (n.registered = {}), (n.inserted = {}), n.sheet.flush();
        },
        sheet: n.sheet,
        cache: n,
        getRegisteredStyles: os.bind(null, n.registered),
        merge: Qa.bind(null, n.registered, i),
      };
    },
    hu = function t(e) {
      for (var n = '', i = 0; i < e.length; i++) {
        var r = e[i];
        if (r != null) {
          var s = void 0;
          switch (typeof r) {
            case 'boolean':
              break;
            case 'object': {
              if (Array.isArray(r)) s = t(r);
              else {
                s = '';
                for (var a in r) r[a] && a && (s && (s += ' '), (s += a));
              }
              break;
            }
            default:
              s = r;
          }
          s && (n && (n += ' '), (n += s));
        }
      }
      return n;
    },
    ds = cu(),
    Q = ds.cx,
    Sn = ds.keyframes,
    R = ds.css,
    du = Object.defineProperty,
    uu = Object.defineProperties,
    fu = Object.getOwnPropertyDescriptors,
    Bi = Object.getOwnPropertySymbols,
    Ja = Object.prototype.hasOwnProperty,
    _a = Object.prototype.propertyIsEnumerable,
    eo = (t, e, n) =>
      e in t ? du(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    kt = (t, e) => {
      for (var n in e || (e = {})) Ja.call(e, n) && eo(t, n, e[n]);
      if (Bi) for (var n of Bi(e)) _a.call(e, n) && eo(t, n, e[n]);
      return t;
    },
    jt = (t, e) => uu(t, fu(e)),
    Kn = (t, e) => {
      var n = {};
      for (var i in t) Ja.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && Bi) for (var i of Bi(t)) e.indexOf(i) < 0 && _a.call(t, i) && (n[i] = t[i]);
      return n;
    };
  au`
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
  var pu = {
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
  function st(t) {
    return pu[t];
  }
  function mu(t) {
    return Object.assign(
      {},
      t.margin ? { margin: st(t.margin) } : null,
      t.marginLeft ? { marginLeft: st(t.marginLeft) } : null,
      t.marginRight ? { marginRight: st(t.marginRight) } : null,
      t.marginTop ? { marginTop: st(t.marginTop) } : null,
      t.marginBottom ? { marginBottom: st(t.marginBottom) } : null,
      t.padding ? { padding: st(t.padding) } : null,
      t.paddingLeft ? { paddingLeft: st(t.paddingLeft) } : null,
      t.paddingRight ? { paddingRight: st(t.paddingRight) } : null,
      t.paddingTop ? { paddingTop: st(t.paddingTop) } : null,
      t.paddingBottom ? { paddingBottom: st(t.paddingBottom) } : null
    );
  }
  var gu = 'div';
  function Zn(t) {
    let e = t,
      {
        display: n,
        className: i,
        margin: r,
        marginBottom: s,
        marginLeft: a,
        marginRight: o,
        marginTop: c,
        padding: h,
        paddingBottom: d,
        paddingLeft: u,
        paddingRight: p,
        paddingTop: m,
        testId: g,
        as: b = gu,
      } = e,
      v = Kn(e, [
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
      boxProps: kt(
        {
          className: Q(
            R({ display: n }),
            R(
              kt(
                {},
                mu({
                  margin: r,
                  marginBottom: s,
                  marginLeft: a,
                  marginRight: o,
                  marginTop: c,
                  padding: h,
                  paddingBottom: d,
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
  function to(t, e) {
    let { boxProps: n, Element: i } = Zn(t);
    return G.createElement(i, jt(kt({}, n), { ref: e }), t.children);
  }
  to.displayName = 'Box';
  var He = G.forwardRef(to),
    vu = 'div';
  function no(t, e) {
    var n = t,
      {
        isInline: i,
        alignItems: r,
        alignSelf: s,
        alignContent: a,
        flex: o,
        flexBasis: c,
        flexShrink: h,
        flexDirection: d,
        flexGrow: u,
        flexWrap: p,
        fullHeight: m,
        fullWidth: g,
        gap: b,
        justifyContent: v,
        justifyItems: y,
        justifySelf: w,
        order: k,
        children: S,
        as: M,
      } = n,
      O = Kn(n, [
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
    let { boxProps: L, Element: T } = Zn(jt(kt({}, O), { as: M || vu }));
    return G.createElement(
      T,
      jt(kt({}, L), {
        className: Q(
          R({
            display: i ? 'inline-flex' : 'flex',
            width: g ? '100%' : void 0,
            height: m ? '100%' : void 0,
            flex: o,
            flexBasis: c,
            flexShrink: h,
            flexDirection: d,
            gap: (C = f[b]) != null ? C : b,
            justifyContent: v,
            justifyItems: y,
            justifySelf: w,
            alignItems: r,
            alignSelf: s,
            alignContent: a,
            order: k,
            flexWrap: p,
            flexGrow: u,
          }),
          L.className
        ),
        ref: e,
      }),
      S
    );
  }
  no.displayName = 'Flex';
  var Ee = G.forwardRef(no),
    bu = 'div';
  function io(t, e) {
    var n = t,
      {
        alignContent: i,
        children: r,
        columnGap: s = 'spacingM',
        columns: a = 'auto',
        flow: o,
        isInline: c,
        justifyContent: h,
        rowGap: d = 'none',
        rows: u = 'auto',
        as: p,
      } = n,
      m = Kn(n, [
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
    let v = (k) => (typeof k == 'number' ? `repeat(${k}, minmax(0, 1fr))` : k),
      { boxProps: y, Element: w } = Zn(jt(kt({}, m), { as: p || bu }));
    return G.createElement(
      w,
      jt(kt({}, y), {
        className: Q(
          R({
            display: c ? 'inline-grid' : 'grid',
            gridTemplateColumns: v(a),
            gridTemplateRows: v(u),
            flow: o,
            justifyContent: h,
            alignContent: i,
            columnGap: (g = st(s)) != null ? g : 0,
            rowGap: (b = st(d)) != null ? b : 0,
          }),
          y.className
        ),
        ref: e,
      }),
      r
    );
  }
  io.displayName = 'Grid';
  var yu = G.forwardRef(io);
  function ro(t, e) {
    var n = t,
      { children: i, columnStart: r, columnEnd: s, rowStart: a, rowEnd: o, area: c, order: h } = n,
      d = Kn(n, ['children', 'columnStart', 'columnEnd', 'rowStart', 'rowEnd', 'area', 'order']);
    let u = c || [a || 'auto', r || 'auto', o || 'auto', s || 'auto'].join(' / '),
      { boxProps: p, Element: m } = Zn(d);
    return G.createElement(
      m,
      jt(kt({}, p), { className: Q(R({ gridArea: u, order: h }), p.className), ref: e }),
      i
    );
  }
  ro.displayName = 'GridItem';
  var xu = G.forwardRef(ro),
    so = yu;
  so.Item = xu;
  var wu = 'div';
  function ao(t, e) {
    var n = t,
      {
        flexDirection: i = 'row',
        alignItems: r = 'center',
        isInline: s = !1,
        spacing: a = 'spacingM',
        children: o,
        as: c,
      } = n,
      h = Kn(n, ['flexDirection', 'alignItems', 'isInline', 'spacing', 'children', 'as']);
    let { boxProps: d, Element: u } = Zn(jt(kt({}, h), { as: c || wu }));
    return G.createElement(
      Ee,
      jt(kt({}, d), {
        as: u,
        flexDirection: i,
        alignItems: r,
        isInline: s,
        className: d.className,
        gap: a,
        ref: e,
      }),
      o
    );
  }
  ao.displayName = 'Stack';
  var us = G.forwardRef(ao);
  function Dt(t, e) {
    return l.useMemo(() => t || [e || 'id', Math.round(Math.random() * 1e4)].join('_'), []);
  }
  function Eu({ isOpen: t, defaultIsOpen: e, onOpen: n, onClose: i }) {
    let [r, s] = l.useState(e || !1),
      a = t !== void 0,
      o = a ? t : r,
      c = l.useCallback(() => {
        a || s(!1), i == null || i();
      }, [a, i]),
      h = l.useCallback(() => {
        a || s(!0), n == null || n();
      }, [a, n]);
    return { isOpen: o, isControlled: a, handleClose: c, handleOpen: h };
  }
  function kn(...t) {
    return (e) => {
      t.forEach((n) => {
        typeof n == 'function' ? n(e) : n != null && (n.current = e);
      });
    };
  }
  var Cu = Object.defineProperty,
    Mu = Object.defineProperties,
    Su = Object.getOwnPropertyDescriptors,
    Ni = Object.getOwnPropertySymbols,
    oo = Object.prototype.hasOwnProperty,
    lo = Object.prototype.propertyIsEnumerable,
    co = (t, e, n) =>
      e in t ? Cu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    nn = (t, e) => {
      for (var n in e || (e = {})) oo.call(e, n) && co(t, n, e[n]);
      if (Ni) for (var n of Ni(e)) lo.call(e, n) && co(t, n, e[n]);
      return t;
    },
    rn = (t, e) => Mu(t, Su(e)),
    sn = (t, e) => {
      var n = {};
      for (var i in t) oo.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && Ni) for (var i of Ni(t)) e.indexOf(i) < 0 && lo.call(t, i) && (n[i] = t[i]);
      return n;
    },
    ku = 'span';
  function zu() {
    return R({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
    });
  }
  function Ou() {
    return R({ wordBreak: 'break-word' });
  }
  function ho(t, e) {
    var n = t,
      {
        fontSize: i = 'fontSizeM',
        fontStack: r = 'fontStackPrimary',
        fontWeight: s = 'fontWeightNormal',
        fontColor: a = 'gray800',
        lineHeight: o = 'lineHeightM',
        children: c,
        isTruncated: h,
        isWordBreak: d,
        as: u,
        className: p,
        margin: m = 'none',
      } = n,
      g = sn(n, [
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
    let b = u || ku;
    return l.createElement(
      He,
      rn(nn({}, g), {
        as: b,
        className: Q(
          R({
            padding: 0,
            fontFamily: f[r],
            fontWeight: f[s],
            color: f[a],
            fontSize: f[i],
            lineHeight: f[o],
          }),
          h ? zu() : null,
          d ? Ou() : null,
          p
        ),
        margin: m,
        ref: e,
      }),
      c
    );
  }
  ho.displayName = 'Text';
  var je = l.forwardRef(ho),
    Lu = 'span';
  function uo(t, e) {
    var n = t,
      { children: i, fontWeight: r = 'fontWeightNormal', testId: s = 'cf-ui-caption' } = n,
      a = sn(n, ['children', 'fontWeight', 'testId']);
    return l.createElement(
      je,
      rn(
        nn(
          {
            as: Lu,
            testId: s,
            fontSize: 'fontSizeS',
            lineHeight: 'lineHeightS',
            fontColor: 'gray900',
            fontWeight: r,
          },
          a
        ),
        { ref: e }
      ),
      i
    );
  }
  uo.displayName = 'Caption';
  var fo = l.forwardRef(uo),
    Ru = 'h1';
  function po(t, e) {
    var n = t,
      { children: i, testId: r = 'cf-ui-heading' } = n,
      s = sn(n, ['children', 'testId']);
    return l.createElement(
      je,
      rn(
        nn(
          {
            as: Ru,
            testId: r,
            marginBottom: 'spacingM',
            fontWeight: 'fontWeightDemiBold',
            fontColor: 'gray900',
            fontSize: 'fontSizeXl',
            lineHeight: 'lineHeightXl',
          },
          s
        ),
        { ref: e }
      ),
      i
    );
  }
  po.displayName = 'Heading';
  var mo = l.forwardRef(po),
    Iu = 'h3';
  function go(t, e) {
    var n = t,
      { children: i, testId: r = 'cf-ui-subheading' } = n,
      s = sn(n, ['children', 'testId']);
    return l.createElement(
      je,
      rn(
        nn(
          {
            as: Iu,
            testId: r,
            marginBottom: 'spacingM',
            fontSize: 'fontSizeL',
            lineHeight: 'lineHeightL',
            fontWeight: 'fontWeightDemiBold',
            fontColor: 'gray900',
          },
          s
        ),
        { ref: e }
      ),
      i
    );
  }
  go.displayName = 'Subheading';
  var Du = l.forwardRef(go),
    Au = 'h2';
  function vo(t, e) {
    var n = t,
      { children: i, size: r = 'default', testId: s = 'cf-ui-display-text' } = n,
      a = sn(n, ['children', 'size', 'testId']);
    let o = 'fontSize2Xl',
      c = 'lineHeight2Xl';
    return (
      r === 'large' && ((o = 'fontSize3Xl'), (c = 'lineHeight3Xl')),
      l.createElement(
        je,
        rn(
          nn(
            {
              as: Au,
              testId: s,
              marginBottom: r === 'default' ? 'spacingL' : 'spacingXl',
              fontSize: o,
              lineHeight: c,
              fontColor: 'gray900',
              fontWeight: 'fontWeightDemiBold',
            },
            a
          ),
          { ref: e }
        ),
        i
      )
    );
  }
  (vo.displayName = 'DisplayText'), l.forwardRef(vo);
  var Tu = 'h2';
  function bo(t, e) {
    var n = t,
      { children: i, className: r, testId: s = 'cf-ui-section-heading' } = n,
      a = sn(n, ['children', 'className', 'testId']);
    return l.createElement(
      je,
      rn(
        nn(
          {
            as: Tu,
            testId: s,
            marginBottom: 'spacingL',
            fontWeight: 'fontWeightDemiBold',
            fontColor: 'gray900',
            fontSize: 'fontSizeS',
            lineHeight: 'lineHeightS',
            className: Q(R({ letterSpacing: f.letterSpacingWide, textTransform: 'uppercase' }), r),
          },
          a
        ),
        { ref: e }
      ),
      i
    );
  }
  (bo.displayName = 'SectionHeading'), l.forwardRef(bo);
  var fs = l.forwardRef((t, e) => {
    var n = t,
      { children: i, testId: r = 'cf-ui-paragraph' } = n,
      s = sn(n, ['children', 'testId']);
    return l.createElement(
      je,
      rn(nn({ as: 'p', testId: r, marginBottom: 'spacingM', lineHeight: 'lineHeightM' }, s), {
        ref: e,
      }),
      i
    );
  });
  fs.displayName = 'Paragraph';
  var Pu = Object.defineProperty,
    Hu = Object.defineProperties,
    Fu = Object.getOwnPropertyDescriptors,
    $i = Object.getOwnPropertySymbols,
    yo = Object.prototype.hasOwnProperty,
    xo = Object.prototype.propertyIsEnumerable,
    wo = (t, e, n) =>
      e in t ? Pu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    Wt = (t, e) => {
      for (var n in e || (e = {})) yo.call(e, n) && wo(t, n, e[n]);
      if ($i) for (var n of $i(e)) xo.call(e, n) && wo(t, n, e[n]);
      return t;
    },
    ps = (t, e) => Hu(t, Fu(e)),
    Vu = (t, e) => {
      var n = {};
      for (var i in t) yo.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && $i) for (var i of $i(t)) e.indexOf(i) < 0 && xo.call(t, i) && (n[i] = t[i]);
      return n;
    },
    Bu = 'svg',
    Eo = {
      xlarge: { height: '48px', width: '48px' },
      large: { height: '32px', width: '32px' },
      medium: { height: '24px', width: '24px' },
      small: { height: '18px', width: '18px' },
      tiny: { height: '16px', width: '16px' },
    },
    Nu = {
      muted: f.gray600,
      negative: f.colorNegative,
      positive: f.colorPositive,
      primary: f.blue600,
      secondary: f.gray900,
      warning: f.colorWarning,
      white: f.colorWhite,
    },
    $u = (t) => {
      let e = t['aria-label'],
        n = t['aria-labelledby'];
      return e || n ? {} : { 'aria-hidden': !0 };
    };
  function ju(t, e) {
    var n = t,
      {
        as: i,
        children: r,
        className: s,
        variant: a = 'primary',
        size: o = 'small',
        testId: c = 'cf-ui-icon',
        trimmed: h,
        viewBox: d = '0 0 24 24',
      } = n,
      u = Vu(n, ['as', 'children', 'className', 'variant', 'size', 'testId', 'trimmed', 'viewBox']);
    let p = {
        className: Q(R({ fill: Nu[a], height: Eo[o].height, width: h ? 'auto' : Eo[o].width }), s),
        ref: e,
        testId: c,
      },
      m = $u(u);
    return i
      ? l.createElement(He, ps(Wt(Wt(Wt({ display: 'inline-block' }, m), u), p), { as: i }))
      : l.createElement(
          He,
          Wt(ps(Wt(Wt({ viewBox: d, display: 'inline-block' }, m), u), { as: Bu }), p),
          r
        );
  }
  var Co = l.forwardRef(ju);
  function E({ name: t, path: e, props: n, trimmed: i, viewBox: r }) {
    let s = function (a) {
      return l.createElement(Co, ps(Wt(Wt({ viewBox: r }, n), a), { trimmed: i }), e);
    };
    return t && (s.displayName = t), s;
  }
  E({
    name: 'Archive',
    viewBox: '0 0 24 24',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M6 1H5v6h1v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1h2v-1H8v-1h1v-1H8v-1h1v-1H8v-1h1v-1H8v-1h1v-1H8V9h1V8H8V7h1V1H8v5H6V5h1V4H6V1z',
      })
    ),
  }),
    E({
      name: 'ArrowBackward',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'm12 20 1.41-1.41L7.83 13H20v-2H7.83l5.58-5.59L12 4l-8 8 8 8Z',
        })
      ),
    }),
    E({
      name: 'ArrowDown',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M7 10l5 5 5-5z' }),
        ',',
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'ArrowDownTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 10l5 5 5-5H0z' }),
        l.createElement('path', { d: 'M0 0h10v24H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 10 24',
    }),
    E({
      name: 'ArrowForward',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', { d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' })
      ),
    }),
    E({
      name: 'ArrowForwardTrimmed',
      viewBox: '0 0 24 24',
      trimmed: !0,
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', { d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' })
      ),
    }),
    E({
      name: 'ArrowUp',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M7 14l5-5 5 5z' }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'ArrowUpTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 14l5-5 5 5H0z' }),
        l.createElement('path', { d: 'M0 0h10v24H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 10 24',
    }),
    E({
      name: 'ArrowUpward',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M21.65 40.55V16.45L10.8 27.35L7.45 24L24 7.45L40.55 24L37.25 27.35L26.35 16.45V40.55Z',
        })
      ),
      viewBox: '0 0 48 48',
    }),
    E({
      name: 'ArrowDownward',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M13.3333 8.00008L12.3933 7.06008L8.66667 10.7801V2.66675H7.33333L7.33333 10.7801L3.60667 7.06008L2.66667 8.00008L8 13.3334L13.3333 8.00008Z',
        })
      ),
      viewBox: '0 0 16 16',
    }),
    E({
      name: 'Asset',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
        l.createElement(
          'g',
          null,
          l.createElement('path', {
            d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
          }),
          l.createElement('path', { d: 'M14.14 11.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z' })
        )
      ),
    }),
    E({
      name: 'AssetTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h18v24H0V0z', fill: 'none' }),
        l.createElement(
          'g',
          null,
          l.createElement('path', {
            d: 'M16 5v14H2V5h14m0-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
          }),
          l.createElement('path', { d: 'M11.1 11.9l-3 3.9L6 13.1 3 17h12l-3.9-5.1z' })
        )
      ),
      trimmed: !0,
      viewBox: '0 0 18 24',
    }),
    E({
      name: 'Audio',
      viewBox: '0 0 24 24',
      path: l.createElement(
        'g',
        null,
        l.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        l.createElement('path', {
          d: 'M10.4413 9.03807C10.6282 9.11547 10.75 9.29778 10.75 9.50001V19.0833C10.75 19.2856 10.6282 19.4679 10.4413 19.5453C10.2545 19.6227 10.0394 19.5799 9.89645 19.4369L6.68873 16.2292H5.21875C4.54586 16.2292 4 15.6833 4 15.0104V13.5729C4 13.2497 4.1284 12.9397 4.35696 12.7111C4.58552 12.4826 4.89552 12.3542 5.21875 12.3542H6.68873L9.89645 9.14646C10.0394 9.00346 10.2545 8.96068 10.4413 9.03807ZM9.75 10.7071L7.24939 13.2077C7.15562 13.3015 7.02844 13.3542 6.89583 13.3542H5.21875C5.16073 13.3542 5.10509 13.3772 5.06407 13.4183C5.02305 13.4593 5 13.5149 5 13.5729V15.0104C5 15.131 5.09814 15.2292 5.21875 15.2292H6.89583C7.02844 15.2292 7.15562 15.2819 7.24939 15.3756L9.75 17.8762V10.7071ZM13.2185 11.0985C13.3942 10.8855 13.7093 10.8553 13.9223 11.031C14.8125 11.7653 15.5417 12.9972 15.5417 14.2917C15.5417 15.5848 14.8092 16.8181 13.923 17.5518C13.7103 17.7279 13.3951 17.6982 13.219 17.4855C13.0429 17.2728 13.0726 16.9576 13.2853 16.7815C13.9919 16.1966 14.5417 15.2277 14.5417 14.2917C14.5417 13.3533 13.9943 12.3867 13.286 11.8024C13.073 11.6267 13.0427 11.3115 13.2185 11.0985ZM11.2832 12.3204C11.4457 12.0971 11.7584 12.0478 11.9817 12.2103C12.5976 12.6585 13.1458 13.359 13.1458 14.2917C13.1458 15.2243 12.5976 15.9248 11.9817 16.373C11.7584 16.5355 11.4457 16.4863 11.2832 16.263C11.1207 16.0397 11.17 15.727 11.3933 15.5645C11.8546 15.2288 12.1458 14.7946 12.1458 14.2917C12.1458 13.7888 11.8546 13.3546 11.3933 13.0189C11.17 12.8564 11.1207 12.5437 11.2832 12.3204Z',
        })
      ),
    }),
    E({
      name: 'Calendar',
      path: l.createElement('path', {
        d: 'M8 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h2.778A3.222 3.222 0 0123 5.222v15.556A3.222 3.222 0 0119.778 24H4.222A3.222 3.222 0 011 20.778V5.222A3.222 3.222 0 014.222 2H7V1a1 1 0 011-1zM7 4H4.222C3.547 4 3 4.547 3 5.222V9h18V5.222C21 4.547 20.453 4 19.778 4H17v1a1 1 0 11-2 0V4H9v1a1 1 0 01-2 0V4zm14 7H3v9.778C3 21.453 3.547 22 4.222 22h15.556c.675 0 1.222-.547 1.222-1.222V11z',
      }),
    }),
    E({
      name: 'ChatBubble',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'ChatBubbleTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M13.5 1.5h-12C.7 1.5 0 2.2 0 3v13.5l3-3h10.5c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5z',
        }),
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    });
  var Wu = E({
    name: 'CheckCircle',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      })
    ),
  });
  E({
    name: 'CheckCircleTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zM6 12.8L2.2 9l1.1-1.1L6 10.6l5.7-5.7L12.8 6 6 12.8z',
      })
    ),
    trimmed: !0,
    viewBox: '0 0 15 18',
  });
  var Xu = E({
    name: 'ChevronDown',
    path: l.createElement('path', {
      d: 'M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z',
    }),
  });
  E({
    name: 'ChevronDownTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M1.1 5.9l3.4 3.4 3.4-3.4 1.1 1-4.5 4.5L0 6.9l1.1-1z' }),
      l.createElement('path', { d: 'M0 0h9v18H0V0z', fill: 'none' })
    ),
    trimmed: !0,
    viewBox: '0 0 9 18',
  }),
    E({
      name: 'ChevronLeft',
      path: l.createElement('path', {
        d: 'M15.3738 5.29289C15.7643 5.68342 15.7643 6.31658 15.3738 6.70711L10.0809 12L15.3738 17.2929C15.7643 17.6834 15.7643 18.3166 15.3738 18.7071C14.9833 19.0976 14.3501 19.0976 13.9596 18.7071L7.95956 12.7071C7.56904 12.3166 7.56904 11.6834 7.95956 11.2929L13.9596 5.29289C14.3501 4.90237 14.9833 4.90237 15.3738 5.29289Z',
      }),
    }),
    E({
      name: 'ChevronLeftTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M5.6 5.6L4.5 4.5 0 9l4.5 4.5 1.1-1.1L2.1 9l3.5-3.4z' }),
        l.createElement('path', { d: 'M0 0h5.6v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 5.6 18',
    });
  var Yu = E({
    name: 'ChevronRight',
    path: l.createElement('path', {
      d: 'M8.62623 18.7071C8.2357 18.3166 8.2357 17.6834 8.62623 17.2929L13.9191 12L8.62623 6.70711C8.2357 6.31658 8.2357 5.68342 8.62623 5.29289C9.01675 4.90237 9.64992 4.90237 10.0404 5.29289L16.0404 11.2929C16.431 11.6834 16.431 12.3166 16.0404 12.7071L10.0404 18.7071C9.64992 19.0976 9.01675 19.0976 8.62623 18.7071Z',
    }),
  });
  E({
    name: 'ChevronRightTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M1.1 4.5L0 5.6 3.4 9 0 12.4l1.1 1.1L5.6 9 1.1 4.5z' }),
      l.createElement('path', { d: 'M0 0h5.6v18H0V0z', fill: 'none' })
    ),
    trimmed: !0,
    viewBox: '0 0 5.6 18',
  }),
    E({
      name: 'ChevronUp',
      path: l.createElement('path', {
        d: 'M18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31659 16.0976 5.68342 16.0976 5.2929 15.7071C4.90237 15.3166 4.90237 14.6834 5.2929 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071Z',
      }),
    }),
    E({
      name: 'ChevronUpTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M1.1 11.6l3.4-3.4 3.4 3.4L9 10.5 4.5 6 0 10.5l1.1 1.1z' }),
        l.createElement('path', { d: 'M0 0h9v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 9 18',
    }),
    E({
      name: 'Clock',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', { d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' })
      ),
    }),
    E({
      name: 'ClockTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        }),
        l.createElement('path', { d: 'M10.5 5H9v6l5.25 3.15.75-1.23-4.5-2.67V5z' })
      ),
      trimmed: !0,
      viewBox: '0 0 20 24',
    });
  var Mo = E({
    name: 'Close',
    path: l.createElement('path', {
      d: 'M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z',
    }),
  });
  E({
    name: 'CloseTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M14 6.4L12.6 5 7 10.6 1.4 5 0 6.4 5.6 12 0 17.6 1.4 19 7 13.4l5.6 5.6 1.4-1.4L8.4 12 14 6.4z',
      }),
      l.createElement('path', { d: 'M0 0h14v24H0V0z', fill: 'none' })
    ),
    trimmed: !0,
    viewBox: '0 0 14 24',
  }),
    E({
      name: 'CloudUpload',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 24 24',
    }),
    E({
      name: 'Code',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
        l.createElement('path', {
          d: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
        })
      ),
    }),
    E({
      name: 'CodeIllustration',
      viewBox: '0 0 24 24',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        l.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M13.1133 8.91158C13.3622 9.31598 13.5 9.85137 13.5 10.5408C13.5 11.7245 13.7365 12.3844 13.9341 12.7302C14.0332 12.9037 14.1256 13.0037 14.1816 13.055C14.2099 13.081 14.2298 13.0953 14.2378 13.1007C14.2386 13.1012 14.2392 13.1017 14.2398 13.1021C14.3998 13.1895 14.5 13.3575 14.5 13.5408C14.5 13.7241 14.3998 13.8921 14.2399 13.9795C14.2393 13.9799 14.2386 13.9804 14.2378 13.9809C14.2298 13.9864 14.2099 14.0007 14.1816 14.0266C14.1256 14.0779 14.0332 14.178 13.9341 14.3514C13.7365 14.6972 13.5 15.3571 13.5 16.5408C13.5 17.2294 13.3625 17.7622 13.1098 18.1609C12.8523 18.5671 12.5011 18.7928 12.1556 18.906C11.8197 19.016 11.4962 19.0181 11.2681 18.9977C11.1519 18.9874 11.0543 18.9706 10.984 18.956C10.9487 18.9487 10.9199 18.9418 10.8985 18.9363C10.8878 18.9336 10.879 18.9312 10.8721 18.9293L10.8633 18.9268L10.86 18.9258L10.8586 18.9254C10.8583 18.9253 10.8574 18.9251 11 18.4458C11.1426 17.9666 11.1423 17.9665 11.1421 17.9664L11.1408 17.966L11.1396 17.9657L11.1464 17.9675C11.1543 17.9695 11.1685 17.973 11.1879 17.977C11.2269 17.9851 11.2856 17.9953 11.3569 18.0017C11.5038 18.0148 11.6803 18.0094 11.8444 17.9556C11.9989 17.905 12.1477 17.8108 12.2652 17.6255C12.3875 17.4326 12.5 17.1023 12.5 16.5408C12.5 15.2245 12.7635 14.3844 13.0659 13.8552C13.1354 13.7336 13.2064 13.6295 13.2755 13.5408C13.2064 13.4522 13.1354 13.3481 13.0659 13.2264C12.7635 12.6972 12.5 11.8571 12.5 10.5408C12.5 9.98026 12.3878 9.64065 12.2617 9.43568C12.1393 9.23685 11.9835 9.13114 11.8244 9.07148C11.6571 9.00872 11.4791 8.99525 11.3333 9.00132C11.2623 9.00428 11.2039 9.01167 11.1653 9.01788C11.1461 9.02097 11.1322 9.02369 11.1244 9.0253L11.1177 9.02676C11.1175 9.02682 11.1172 9.02689 11.1177 9.02676L11.1194 9.02636L11.1207 9.02602C11.121 9.02596 11.1213 9.02589 11 8.54082C10.8787 8.05575 10.879 8.05568 10.8793 8.0556L10.8813 8.0551L10.8847 8.05428L10.8937 8.05217C10.9007 8.05056 10.9097 8.04857 10.9205 8.04632C10.942 8.04183 10.9711 8.03626 11.0066 8.03055C11.0773 8.01919 11.1752 8.00704 11.2917 8.00219C11.5209 7.99264 11.8429 8.01041 12.1756 8.13515C12.5165 8.26299 12.8607 8.50103 13.1133 8.91158ZM8.64201 8.08247C8.6423 8.08256 8.64257 8.08264 8.5 8.56188C8.35743 9.04112 8.35769 9.0412 8.35794 9.04128L8.35923 9.04166L8.36036 9.04199L8.35362 9.04021C8.34567 9.03818 8.33154 9.03474 8.31214 9.0307C8.27305 9.02256 8.21435 9.01236 8.14309 9.006C7.99625 8.99291 7.81971 8.99831 7.65562 9.05205C7.50106 9.10267 7.3523 9.19689 7.2348 9.38225C7.11253 9.57513 7 9.90544 7 10.4669C7 11.7832 6.73652 12.6233 6.43412 13.1525C6.36459 13.2741 6.29363 13.3782 6.22447 13.4669C6.29363 13.5555 6.36459 13.6596 6.43412 13.7813C6.73652 14.3105 7 15.1506 7 16.4669C7 17.0274 7.11219 17.367 7.23833 17.572C7.36068 17.7708 7.51646 17.8766 7.67556 17.9362C7.84292 17.999 8.02088 18.0125 8.16668 18.0064C8.2377 18.0034 8.29606 17.996 8.33472 17.9898C8.35391 17.9867 8.36783 17.984 8.37556 17.9824L8.38182 17.981L8.38062 17.9813L8.37927 17.9817C8.379 17.9817 8.37873 17.9818 8.5 18.4669C8.62127 18.952 8.62098 18.952 8.62069 18.9521L8.61866 18.9526L8.61528 18.9534L8.60626 18.9555C8.59927 18.9571 8.59031 18.9591 8.57952 18.9614C8.55795 18.9659 8.5289 18.9714 8.4934 18.9771C8.42269 18.9885 8.3248 19.0007 8.20832 19.0055C7.97912 19.0151 7.65708 18.9973 7.32444 18.8726C6.98354 18.7447 6.63932 18.5067 6.38667 18.0961C6.13781 17.6917 6 17.1563 6 16.4669C6 15.2832 5.76348 14.6233 5.56588 14.2775C5.46679 14.104 5.37439 14.004 5.31839 13.9527C5.29012 13.9267 5.27024 13.9124 5.26222 13.907C5.2614 13.9064 5.2607 13.906 5.26012 13.9056C5.10018 13.8182 5 13.6501 5 13.4669C5 13.2837 5.10017 13.1156 5.26012 13.0282C5.26069 13.0278 5.26139 13.0273 5.26222 13.0268C5.27024 13.0213 5.29011 13.007 5.31839 12.9811C5.37438 12.9298 5.46679 12.8297 5.56588 12.6563C5.76348 12.3105 6 11.6506 6 10.4669C6 9.77834 6.13747 9.24552 6.3902 8.84684C6.6477 8.44064 6.99894 8.21485 7.34438 8.10172C7.68029 7.99171 8.00375 7.98961 8.23191 8.00995C8.34815 8.02032 8.4457 8.03706 8.51598 8.0517C8.55127 8.05904 8.58011 8.06595 8.60146 8.07141C8.61215 8.07415 8.621 8.07653 8.62789 8.07844L8.63674 8.08094L8.64004 8.08189L8.64201 8.08247ZM8.38182 17.981C8.38211 17.981 8.38241 17.9809 8.38182 17.981V17.981Z',
        })
      ),
    }),
    E({
      name: 'CodeTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M5.5 12.5L2.1 9l3.4-3.4-1-1.1L0 9l4.5 4.5 1-1zm3.9 0L12.9 9 9.4 5.6l1.1-1.1L15 9l-4.5 4.5s-1-1-1.1-1z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'Copy',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
        })
      ),
    }),
    E({
      name: 'CopyTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h14.2v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M10.5.8h-9C.7.8 0 1.4 0 2.2v10.5h1.5V2.2h9V.8zm2.3 3H4.5c-.8 0-1.5.6-1.5 1.4v10.5c0 .8.7 1.5 1.5 1.5h8.2c.8 0 1.5-.7 1.5-1.5V5.2c0-.8-.6-1.4-1.4-1.4zm0 12H4.5V5.2h8.2v10.6z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 14.2 18',
    }),
    E({
      name: 'Cycle',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'CycleTrimmed',
      path: l.createElement('path', {
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
    }),
    E({
      name: 'Delete',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'DeleteTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M1 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H1v12zM14 4h-3.5l-1-1h-5l-1 1H0v2h14V4z',
        }),
        l.createElement('path', { fill: 'none', d: 'M-5 0h24v24H-5V0z' })
      ),
      trimmed: !0,
      viewBox: '0 0 14 24',
    });
  var So = E({
    name: 'Done',
    path: l.createElement('path', {
      d: 'M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.51957 17.8946 9.26522 18 9 18C8.73478 18 8.48043 17.8946 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z',
    }),
  });
  E({
    name: 'DoubleArrow',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M 7 14 L 12 20 L 17 14 Z' }),
      l.createElement('path', { d: 'M 6.989 9.951 L 11.989 4 L 16.989 9.951 Z' }),
      l.createElement('path', { d: 'M 0 0 L 24 0 L 24 24 L 0 24 Z', fill: 'none' })
    ),
  }),
    E({
      name: 'Download',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'DownloadTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M10.5 6.8h-3V2.2H3v4.5H0L5.2 12l5.3-5.2zM0 13.5V15h10.5v-1.5H0z',
        }),
        l.createElement('path', { d: 'M0 0h10.5v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 10.5 18',
    });
  var ko = E({
    name: 'Drag',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
      l.createElement('path', {
        d: 'M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      })
    ),
  });
  E({
    name: 'DragTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h10v24H0V0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M4 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 4 0 4.9 0 6s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      })
    ),
    trimmed: !0,
    viewBox: '0 0 10 24',
  }),
    E({
      name: 'Edit',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'EditTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M0 12.9v2.8h2.8l8.3-8.3-2.8-2.8L0 12.9zm13.3-7.6c.3-.3.3-.8 0-1.1l-1.8-1.8c-.3-.3-.8-.3-1.1 0L9.1 3.8l2.8 2.8c0 .1 1.4-1.3 1.4-1.3z',
        }),
        l.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 13.5 18',
    }),
    E({
      name: 'EmbeddedEntryBlock',
      path: l.createElement('path', {
        d: 'M21 15H3c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h18c.5 0 1 .4 1 1v4c0 .6-.5 1-1 1zM19.5 7h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM19.5 19h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM17.6 23H6.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM17.6 3H6.4c-.2 0-.4-.2-.4-.4V1.4c0-.2.2-.4.4-.4h11.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
      }),
    }),
    E({
      name: 'EmbeddedEntryBlockTrimmed',
      path: l.createElement('path', {
        d: 'M19 15H1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h18c.5 0 1 .4 1 1v4c0 .6-.5 1-1 1zM17.5 7h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM17.5 19h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM15.6 23H4.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM15.6 3H4.4c-.2 0-.4-.2-.4-.4V1.4c0-.2.2-.4.4-.4h11.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
      }),
      trimmed: !0,
      viewBox: '0 0 20 24',
    }),
    E({
      name: 'EmbeddedEntryInline',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M13.4 17H6.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h6.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6zM22.5 11h-21c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h20.9c.4 0 .6.2.6.5v.9c0 .4-.2.6-.5.6zM4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM12.6 21H1.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM15.6 6H1.4c-.2 0-.4-.2-.4-.4V4.4c0-.2.2-.4.4-.4h14.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
        }),
        l.createElement('path', {
          d: 'M4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM19.5 16h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z',
        })
      ),
    }),
    E({
      name: 'EmbeddedEntryInlineTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M12.4 17H5.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h6.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6zM21.5 11H.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h20.9c.4 0 .6.2.6.5v.9c0 .4-.2.6-.5.6zM3.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM11.6 21H.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM14.6 6H.4C.2 6 0 5.8 0 5.6V4.4c0-.2.2-.4.4-.4h14.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z',
        }),
        l.createElement('path', {
          d: 'M3.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM18.5 16h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 22 24',
    }),
    E({
      name: 'Entry',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M3 13.5V11C3 10.4477 3.44772 10 4 10H6.5C7.05228 10 7.5 10.4477 7.5 11V13.5C7.5 14.0523 7.05228 14.5 6.5 14.5H4C3.44772 14.5 3 14.0523 3 13.5Z',
        }),
        l.createElement('path', {
          d: 'M11 13.5V11C11 10.4477 11.4477 10 12 10H14.5C15.0523 10 15.5 10.4477 15.5 11V13.5C15.5 14.0523 15.0523 14.5 14.5 14.5H12C11.4477 14.5 11 14.0523 11 13.5Z',
        }),
        l.createElement('path', {
          d: 'M7 6.5V4C7 3.44772 7.44772 3 8 3H10.5C11.0523 3 11.5 3.44772 11.5 4V6.5C11.5 7.05228 11.0523 7.5 10.5 7.5H8C7.44772 7.5 7 7.05228 7 6.5Z',
        })
      ),
      viewBox: '0 0 18 18',
    }),
    E({
      name: 'EntryTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M3 13.5V11C3 10.4477 3.44772 10 4 10H6.5C7.05228 10 7.5 10.4477 7.5 11V13.5C7.5 14.0523 7.05228 14.5 6.5 14.5H4C3.44772 14.5 3 14.0523 3 13.5Z',
        }),
        l.createElement('path', {
          d: 'M11 13.5V11C11 10.4477 11.4477 10 12 10H14.5C15.0523 10 15.5 10.4477 15.5 11V13.5C15.5 14.0523 15.0523 14.5 14.5 14.5H12C11.4477 14.5 11 14.0523 11 13.5Z',
        }),
        l.createElement('path', {
          d: 'M7 6.5V4C7 3.44772 7.44772 3 8 3H10.5C11.0523 3 11.5 3.44772 11.5 4V6.5C11.5 7.05228 11.0523 7.5 10.5 7.5H8C7.44772 7.5 7 7.05228 7 6.5Z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 18 18',
    }),
    E({
      name: 'Environment',
      path: l.createElement('path', {
        d: 'M10.5 3.75a.75.75 0 0 1 .75-.75h2.992c.419 0 .758.34.758.757V6.75a.75.75 0 0 1-1.5 0V5.56L9.97 9.092a2.25 2.25 0 0 1-1.591.659H3.75a.75.75 0 0 1 0-1.5h4.629a.75.75 0 0 0 .53-.22l3.53-3.53H11.25a.75.75 0 0 1-.75-.75Zm.22 8.03a.75.75 0 1 1 1.06-1.06l1.72 1.72v-1.19a.75.75 0 0 1 1.5 0v2.992c0 .419-.34.758-.758.758H11.25a.75.75 0 0 1 0-1.5h1.19l-1.72-1.72Z',
      }),
      viewBox: '0 0 18 18',
    }),
    E({
      name: 'EnvironmentAlias',
      path: l.createElement('path', {
        d: 'M12.75 3C12.3358 3 12 3.33579 12 3.75C12 4.16421 12.3358 4.5 12.75 4.5H13.9393L10.409 8.03033C10.2684 8.17098 10.0776 8.25 9.87868 8.25H6.75C6.33579 8.25 6 8.58579 6 9C6 9.41421 6.33579 9.75 6.75 9.75H9.87868C10.4754 9.75 11.0477 9.51295 11.4697 9.09099L15 5.56066V6.75C15 7.16421 15.3358 7.5 15.75 7.5C16.1642 7.5 16.5 7.16421 16.5 6.75V3.7575C16.5 3.33914 16.1609 3 15.7425 3H12.75ZM12.2197 10.7197C11.9268 11.0126 11.9268 11.4874 12.2197 11.7803L13.9393 13.5H12.75C12.3358 13.5 12 13.8358 12 14.25C12 14.6642 12.3358 15 12.75 15H15.7425C16.1609 15 16.5 14.6609 16.5 14.2425V11.25C16.5 10.8358 16.1642 10.5 15.75 10.5C15.3358 10.5 15 10.8358 15 11.25V12.4393L13.2803 10.7197C12.9874 10.4268 12.5126 10.4268 12.2197 10.7197ZM3 9C3 6.95749 4.73373 5.25 6.9375 5.25C7.83237 5.25 8.65324 5.53347 9.31134 6.00801C9.64731 6.25027 10.1161 6.17431 10.3583 5.83833C10.6006 5.50236 10.5246 5.0336 10.1887 4.79133C9.27989 4.13603 8.15314 3.75 6.9375 3.75C3.9636 3.75 1.5 6.07194 1.5 9C1.5 11.9281 3.9636 14.25 6.9375 14.25C8.15314 14.25 9.27989 13.864 10.1887 13.2087C10.5246 12.9664 10.6006 12.4976 10.3583 12.1617C10.1161 11.8257 9.64731 11.7497 9.31134 11.992C8.65324 12.4665 7.83237 12.75 6.9375 12.75C4.73373 12.75 3 11.0425 3 9Z',
      }),
      viewBox: '0 0 18 18',
    });
  var Uu = E({
      name: 'ErrorCircle',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
        })
      ),
    }),
    qu = E({
      name: 'ErrorCircleOutline',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        })
      ),
    });
  E({
    name: 'ErrorCircleTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8v-1.5h1.5v1.5zm0-3H6.8V5.2h1.5v4.6z',
      })
    ),
    trimmed: !0,
    viewBox: '0 0 15 18',
  }),
    E({
      name: 'ExternalLink',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'ExternalLinkTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M12 14.2H1.5V3.8h5.2V2.2H1.5C.7 2.2 0 2.9 0 3.8v10.5c0 .8.7 1.5 1.5 1.5H12c.8 0 1.5-.7 1.5-1.5V9H12v5.2zm-3.8-12v1.5h2.7l-7.4 7.4 1.1 1.1L12 4.8v2.7h1.5V2.2H8.2z',
        }),
        l.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 13.5 18',
    }),
    E({
      name: 'FaceHappy',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'FaceHappyTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm0 13.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm.7-7.5l.8.7.8-.8.8.8.8-.8-1.6-1.5-1.6 1.6zm-3 0l.8.7.8-.8-1.6-1.5-1.6 1.6.8.8.8-.8zm2.3 5.6c1.7 0 3.2-1.1 3.8-2.6H3.7c.6 1.5 2.1 2.6 3.8 2.6z',
        }),
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'Filter',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'FilterTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M5.2 13.5h3V12h-3v1.5zM0 4.5V6h13.5V4.5H0zm2.2 5.3h9V8.2h-9v1.6z',
        }),
        l.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 13.5 18',
    }),
    E({
      name: 'Folder',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'FolderCreate',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z',
        })
      ),
    }),
    E({
      name: 'FolderCreateTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm-.7 6h-2.2v2.2H9v-2.2H6.8V9H9V6.8h1.5V9h2.2v1.5z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'FolderOpen',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z',
        })
      ),
    }),
    E({
      name: 'FolderOpenTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm0 9h-12V6h12v7.5z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'FolderTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5h-6L6 3z',
        }),
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'FormatBold',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'FormatBoldTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M8.6 10.8c1-.7 1.6-1.8 1.6-2.8 0-2.3-1.8-4-4-4H0v14h7c2.1 0 3.7-1.7 3.7-3.8.1-1.5-.8-2.8-2.1-3.4zM3 6.5h3c.8 0 1.5.7 1.5 1.5S6.8 9.5 6 9.5H3v-3zm3.5 9H3v-3h3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z',
        }),
        l.createElement('path', { d: 'M0 0h10.8v24H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 10.8 24',
    }),
    E({
      name: 'FormatItalic',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', { d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z' })
      ),
    }),
    E({
      name: 'FormatItalicTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h12v24H0V0z', fill: 'none' }),
        l.createElement('path', { d: 'M4 4v3h2.2l-3.4 8H0v3h8v-3H5.8l3.4-8H12V4H4z' })
      ),
      trimmed: !0,
      viewBox: '0 0 12 24',
    }),
    E({
      name: 'FormatUnderlined',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
        })
      ),
    }),
    E({
      name: 'FormatUnderlinedTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h14v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M7 17c3.3 0 6-2.7 6-6V3h-2.5v8c0 1.9-1.6 3.5-3.5 3.5S3.5 12.9 3.5 11V3H1v8c0 3.3 2.7 6 6 6zm-7 2v2h14v-2H0z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 14 24',
    }),
    E({
      name: 'Gift',
      viewBox: '0 0 18 18',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement(
          'g',
          { clipPath: 'url(#prefix__clip0)', fillRule: 'evenodd', clipRule: 'evenodd' },
          l.createElement('path', {
            d: 'M3 9.25a.75.75 0 01.75.75v6.75h10.5V10a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V10A.75.75 0 013 9.25z',
          }),
          l.createElement('path', {
            d: 'M.75 6.25a.75.75 0 01.75-.75h15a.75.75 0 01.75.75V10a.75.75 0 01-.75.75h-15A.75.75 0 01.75 10V6.25zm1.5.75v2.25h13.5V7H2.25z',
          }),
          l.createElement('path', {
            d: 'M9 5.5a.75.75 0 01.75.75V17.5a.75.75 0 01-1.5 0V6.25A.75.75 0 019 5.5z',
          }),
          l.createElement('path', {
            d: 'M5.625 3.25a1.125 1.125 0 000 2.25h2.366a6.15 6.15 0 00-.351-.764C7.168 3.88 6.52 3.25 5.625 3.25zM9 6.25l.735-.148v-.006l-.003-.012-.01-.04a7.962 7.962 0 00-.166-.607 8.02 8.02 0 00-.602-1.423c-.56-1.018-1.6-2.264-3.329-2.264a2.625 2.625 0 000 5.25H9a.75.75 0 00.735-.897L9 6.25z',
          }),
          l.createElement('path', {
            d: 'M9.046 4.014c.56-1.018 1.6-2.264 3.329-2.264a2.625 2.625 0 010 5.25H9a.75.75 0 01-.735-.897L9 6.25a101.52 101.52 0 01-.735-.148v-.006l.003-.012.01-.04a7.977 7.977 0 01.166-.607c.12-.382.314-.899.602-1.423zm.963 1.486h2.366a1.125 1.125 0 000-2.25c-.895 0-1.543.629-2.015 1.486a6.15 6.15 0 00-.35.764zm-.274.898z',
          })
        ),
        l.createElement(
          'defs',
          null,
          l.createElement(
            'clipPath',
            { id: 'prefix__clip0' },
            l.createElement('path', { fill: '#fff', d: 'M0 0h18v18H0z' })
          )
        )
      ),
    }),
    E({
      name: 'Heading',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', { d: 'M14.8 5v5.5H9.2V5H6.4v14h2.8v-6.1h5.6V19h2.8V5z' })
      ),
    }),
    E({
      name: 'HeadingOne',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M11.7 5v5.5H6.1V5H3.3v14h2.8v-6.1h5.6V19h2.8V5zM18.6 19v-6.3L17.1 14l-1-1.4 2.8-2.1h1.8V19h-2.1z',
        })
      ),
    }),
    E({
      name: 'HeadingOneTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h13v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8zM11.5 14.2V9.5l-1.1 1-.8-1 2.1-1.6H13v6.4h-1.5z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 13 18',
    }),
    E({
      name: 'HeadingTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h8.4v18H0V0z', fill: 'none' }),
        l.createElement('path', { d: 'M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8z' })
      ),
      trimmed: !0,
      viewBox: '0 0 8.4 18',
    }),
    E({
      name: 'HeadingTwo',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M10.8 5v5.5H5.3V5H2.4v14h2.9v-6.1h5.5V19h2.9V5zM15.4 19v-1.7l3.3-3c.2-.2.4-.4.5-.6.1-.2.2-.4.2-.7 0-.3-.1-.6-.3-.7-.2-.2-.4-.3-.8-.3-.3 0-.6.1-.8.4-.2.2-.3.5-.4.9l-1.9-.3c0-.4.2-.8.4-1.2.2-.3.4-.6.7-.9.3-.2.6-.4 1-.5s.8-.2 1.2-.2c.4 0 .8.1 1.1.2.4.1.7.3 1 .5.3.2.5.5.7.8.2.3.3.7.3 1.2 0 .3 0 .6-.1.8-.1.2-.2.5-.3.7-.1.2-.3.4-.5.6-.2.2-.4.4-.6.5l-2 1.8h3.5V19h-6.2z',
        })
      ),
    }),
    E({
      name: 'HeadingTwoTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h14.4v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M6.3 3.8v4.1H2.2V3.8H0V14.2h2.2V9.7h4.1v4.5h2.2V3.8zM9.8 14.2V13l2.5-2.2c.2-.1.3-.3.4-.4.1-.2.2-.3.2-.5s-.1-.4-.2-.5c-.3-.3-.5-.4-.8-.4-.2 0-.5.1-.6.3-.1.1-.2.4-.3.7l-1.4-.2c0-.3.2-.6.3-.9.1-.2.3-.5.5-.7.2-.1.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.8.1.3.1.5.2.8.4.2.2.4.4.5.6s.2.5.2.9c0 .2 0 .5-.1.6-.1.1-.2.4-.2.5-.1.2-.2.3-.4.5-.2.1-.3.3-.4.4L11.8 13h2.6v1.3H9.8z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 14.4 18',
    }),
    E({
      name: 'HelpCircle',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
        })
      ),
    }),
    E({
      name: 'HelpCircleInverted',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z',
          stroke: 'white',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          fill: 'none',
        }),
        l.createElement('path', {
          d: 'M11.545 12.4267L11.545 12.4267L11.5452 12.424C11.5617 12.1009 11.6251 11.8675 11.7824 11.6526C11.9426 11.4337 12.2066 11.225 12.6445 10.967L12.6451 10.9667C13.5697 10.4133 14.1293 9.65976 14.1293 8.55664C14.1293 7.77191 13.8071 7.1048 13.2522 6.63544C12.6986 6.16714 11.919 5.9 11.0078 5.9C9.61504 5.9 8.53153 6.48625 8.09344 7.47641C7.96552 7.75376 7.9 8.00709 7.9 8.31738C7.9 8.54471 7.96551 8.73994 8.10111 8.87863C8.23704 9.01765 8.43116 9.0873 8.66309 9.0873C8.84907 9.0873 9.01208 9.0461 9.14782 8.9371C9.28176 8.82955 9.37718 8.66547 9.44869 8.44379L9.44872 8.4438L9.44947 8.44125C9.55376 8.08601 9.73402 7.81728 9.9808 7.63674C10.2278 7.45603 10.5494 7.35781 10.9463 7.35781C11.3808 7.35781 11.7386 7.48996 11.9864 7.71024C12.2333 7.92968 12.3775 8.24212 12.3775 8.61816C12.3775 8.93652 12.3083 9.18522 12.1457 9.41384C11.9806 9.64593 11.7141 9.8647 11.3048 10.1116C10.8536 10.3824 10.5122 10.67 10.2841 11.0077C10.0546 11.3474 9.94395 11.7314 9.94395 12.1865V12.3438C9.94395 12.5858 10.0081 12.8107 10.1466 12.9769C10.2871 13.1456 10.496 13.2436 10.7617 13.2436C11.0072 13.2436 11.1991 13.1631 11.3325 13.0113C11.463 12.8626 11.527 12.6575 11.545 12.4267ZM10.7617 16.1488C11.3276 16.1488 11.7641 15.7232 11.7641 15.167C11.7641 14.6107 11.3276 14.1852 10.7617 14.1852C10.2095 14.1852 9.76621 14.6107 9.76621 15.167C9.76621 15.7232 10.2095 16.1488 10.7617 16.1488Z',
          fill: 'white',
          stroke: 'white',
          strokeWidth: '0.2',
        })
      ),
      viewBox: '0 0 22 22',
    }),
    E({
      name: 'HelpCircleTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 12.7H6.8v-1.5h1.5v1.5zm1.6-5.8l-.7.7c-.5.5-.9 1-.9 2.1H6.8v-.4c0-.8.3-1.6.9-2.1l.9-.9c.2-.3.4-.6.4-1 0-.8-.7-1.5-1.5-1.5S6 5.9 6 6.8H4.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 .6-.3 1.2-.7 1.6z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'HorizontalRule',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', { d: 'M3.6 11.2h16.8v1.7H3.6z' })
      ),
    }),
    E({
      name: 'HorizontalRuleTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h12.6v18H0V0z', fill: 'none' }),
        l.createElement('path', { d: 'M0 8.4h12.6v1.3H0z' })
      ),
      trimmed: !0,
      viewBox: '0 0 12.6 18',
    }),
    E({
      name: 'Image',
      viewBox: '0 0 24 24',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        l.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M12.053 10.503a.5.5 0 01.427.356l2.5 8.5a.5.5 0 01-.48.641h-10a.5.5 0 01-.447-.724l2.5-5a.5.5 0 01.8-.13l1.528 1.528 2.68-4.913a.5.5 0 01.492-.258zm-.192 1.796l-2.422 4.44a.5.5 0 01-.793.114l-1.509-1.509L5.309 19h8.523l-1.971-6.7zM6 8a1 1 0 100 2 1 1 0 000-2zM4 9a2 2 0 114 0 2 2 0 01-4 0z',
        })
      ),
    });
  var zo = E({
    name: 'InfoCircle',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
      })
    ),
  });
  E({
    name: 'InfoCircleTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8V8.2h1.5v4.6zm0-6H6.8V5.2h1.5v1.6z',
      })
    ),
    trimmed: !0,
    viewBox: '0 0 15 18',
  }),
    E({
      name: 'Language',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
        })
      ),
    }),
    E({
      name: 'Link',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
        })
      ),
    }),
    E({
      name: 'LinkAlternate',
      path: l.createElement('path', {
        d: 'm10.4744 13.5256c.4436.4219.4436 1.1144 0 1.5363-.4219.422-1.11438.422-1.53634 0-2.10982-2.1098-2.10982-5.53958 0-7.6494l3.83014-3.83014c2.1098-2.10981 5.5396-2.10981 7.6494 0 2.1099 2.10982 2.1099 5.53963 0 7.64944l-1.6121 1.6121c.0108-.8872-.1298-1.7744-.4328-2.6183l.5086-.51935c1.2767-1.26589 1.2767-3.32161 0-4.58751-1.2659-1.27671-3.3217-1.27671-4.5875 0l-3.8194 3.81932c-1.27667 1.26584-1.27667 3.32164 0 4.58754zm3.0512-4.58754c.4219-.42197 1.1144-.42197 1.5363 0 2.1099 2.10984 2.1099 5.53964 0 7.64944l-3.8301 3.8301c-2.10981 2.1099-5.53962 2.1099-7.64944 0-2.10981-2.1098-2.10981-5.5396 0-7.6494l1.61212-1.6121c-.01082.8872.12984 1.7744.43279 2.6291l-.50853.5086c-1.27671 1.2658-1.27671 3.3216 0 4.5875 1.2659 1.2767 3.32162 1.2767 4.58751 0l3.81935-3.8194c1.2767-1.2658 1.2767-3.3216 0-4.5875-.4436-.4219-.4436-1.11438 0-1.53634z',
      }),
    }),
    E({
      name: 'LinkTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M1.4 9c0-1.3 1-2.3 2.3-2.3h3V5.2h-3C1.7 5.2 0 6.9 0 9s1.7 3.8 3.8 3.8h3v-1.4h-3c-1.3-.1-2.4-1.1-2.4-2.4zm3.1.8h6V8.2h-6v1.6zm6.7-4.6h-3v1.4h3c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3h-3v1.4h3c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.6-3.8-3.6z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'ListBulleted',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
        }),
        l.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' })
      ),
    }),
    E({
      name: 'ListBulletedTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M1.1 7.9C.5 7.9 0 8.4 0 9s.5 1.1 1.1 1.1S2.2 9.6 2.2 9s-.5-1.1-1.1-1.1zm0-4.5C.5 3.4 0 3.9 0 4.5s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm0 9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm2.3 1.8h10.5v-1.5H3.4v1.5zm0-4.4h10.5V8.2H3.4v1.6zm0-6v1.5h10.5V3.8H3.4z',
        }),
        l.createElement('path', { d: 'M0 0h13.9v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 13.9 18',
    }),
    E({
      name: 'ListNumbered',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'ListNumberedTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M0 12.8h1.5v.4H.8v.8h.8v.4H0v.6h2.2v-3H0v.8zM.8 6h.8V3H0v.8h.8V6zM0 8.2h1.3L0 9.8v.7h2.2v-.7H.9l1.3-1.6v-.7H0v.7zm3.8-4.4v1.5h10.5V3.8H3.8zm0 10.4h10.5v-1.5H3.8v1.5zm0-4.4h10.5V8.2H3.8v1.6z',
        }),
        l.createElement('path', { d: 'M0 0h14.2v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 14.2 18',
    }),
    E({
      name: 'Lock',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
        })
      ),
    }),
    E({
      name: 'LockTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h12v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M10.5 6h-.7V4.5C9.8 2.4 8.1.7 6 .7S2.2 2.4 2.2 4.5V6h-.7C.7 6 0 6.7 0 7.5V15c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5V7.5c0-.8-.7-1.5-1.5-1.5zM6 12.8c-.8 0-1.5-.7-1.5-1.5S5.2 9.8 6 9.8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM8.3 6H3.7V4.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3V6z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 12 18',
    }),
    E({
      name: 'Logout',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          clipRule: 'evenodd',
          d: 'M5 4a1 1 0 00-1 1v14a1 1 0 001 1h4a1 1 0 110 2H5a3 3 0 01-3-3V5a3 3 0 013-3h4a1 1 0 010 2H5zM15.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L19.586 12l-4.293-4.293a1 1 0 010-1.414z',
        }),
        l.createElement('path', {
          clipRule: 'evenodd',
          d: 'M8 12a1 1 0 011-1h12a1 1 0 110 2H9a1 1 0 01-1-1z',
        })
      ),
    }),
    E({
      name: 'LooksOne',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z',
        })
      ),
    }),
    E({
      name: 'LooksOneTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h18v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H9V9H7V7h4v10z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 18 24',
    }),
    E({
      name: 'LooksTwo',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 01-2 2h-2v2h4v2H9v-4a2 2 0 012-2h2V9H9V7h4a2 2 0 012 2v2z',
        })
      ),
    }),
    E({
      name: 'LooksTwoTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h18v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.1-.9 2-2 2H8v2h4v2H6v-4c0-1.1.9-2 2-2h2V9H6V7h4c1.1 0 2 .9 2 2v2z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 18 24',
    }),
    E({
      name: 'Markup',
      viewBox: '0 0 24 24',
      path: G.createElement(
        G.Fragment,
        null,
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M7.854 10.139a.5.5 0 010 .707l-3.647 3.646 3.647 3.646a.5.5 0 11-.708.708l-4-4a.5.5 0 010-.707l4-4a.5.5 0 01.708 0zM12 18.846a.5.5 0 010-.707l3.646-3.647L12 10.846a.5.5 0 11.707-.707l4 4a.5.5 0 010 .707l-4 4a.5.5 0 01-.707 0z',
        })
      ),
    }),
    E({
      name: 'Menu',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
      ),
    }),
    E({
      name: 'MenuTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M0 13.5h13.5V12H0v1.5zm0-3.7h13.5V8.2H0v1.6zm0-5.3V6h13.5V4.5H0z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 13.5 18',
    });
  var Gu = E({
      name: 'Minus',
      path: l.createElement('rect', { x: '4', y: '11', width: '16', height: '2', rx: '1' }),
    }),
    Ku = E({
      name: 'MoreHorizontal',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        })
      ),
    });
  E({
    name: 'MoreHorizontalTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h12v18H0V0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M1.5 7.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm9 0C9.7 7.5 9 8.2 9 9s.7 1.5 1.5 1.5S12 9.8 12 9s-.7-1.5-1.5-1.5zM6 7.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S7.5 9.8 7.5 9 6.8 7.5 6 7.5z',
      })
    ),
    trimmed: !0,
    viewBox: '0 0 12 18',
  }),
    E({
      name: 'MoreVertical',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        })
      ),
    }),
    E({
      name: 'MoreVerticalTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h3v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M1.5 6C2.3 6 3 5.3 3 4.5S2.3 3 1.5 3 0 3.7 0 4.5.7 6 1.5 6zm0 1.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm0 4.5c-.8 0-1.5.7-1.5 1.5S.7 15 1.5 15 3 14.3 3 13.5 2.3 12 1.5 12z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 3 18',
    }),
    E({
      name: 'Page',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
        l.createElement('path', { d: 'M8 16h8v2H8zM8 12h8v2H8z' }),
        l.createElement('path', {
          d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z',
        })
      ),
    }),
    E({
      name: 'PageTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h16v24H0V0z', fill: 'none' }),
        l.createElement('path', { d: 'M4 16h8v2H4zM4 12h8v2H4z' }),
        l.createElement('path', {
          d: 'M10 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H2V4h7v5h5v11z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 16 24',
    }),
    E({
      name: 'Pdf',
      viewBox: '0 0 24 24',
      path: G.createElement(
        G.Fragment,
        null,
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M0 .5A.5.5 0 01.5 0h13a.5.5 0 01.354.146l6 6A.5.5 0 0120 6.5v17a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5V.5zM1 1v22h18V7h-5.5a.5.5 0 01-.5-.5V1H1zm13 .707L18.293 6H14V1.707zM4 14.5a.5.5 0 01.5-.5h1.25a1.75 1.75 0 010 3.5H5v1.999a.5.5 0 01-1 0V14.5zm1.75 2a.75.75 0 100-1.5H5v1.5h.75zm2.75-2A.5.5 0 019 14h1c1.527 0 2.5 1.403 2.5 3s-.973 3-2.5 3H9a.5.5 0 01-.5-.5v-5zM10 19c.777 0 1.5-.733 1.5-2s-.723-2-1.5-2h-.5v4h.5zm4.013-5h2.5s.5 0 .5.5-.5.5-.5.5h-2v1h1s.5.013.5.5-.5.5-.5.5h-1v2.5s0 .5-.5.5-.5-.5-.5-.5-.026-4.473-.013-4.987c.013-.513.513-.513.513-.513z',
        })
      ),
    }),
    E({
      name: 'Person',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
        })
      ),
    }),
    E({
      name: 'Plaintext',
      viewBox: '0 0 24 24',
      path: G.createElement(
        G.Fragment,
        null,
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M4 7.5a.5.5 0 01.5-.5H9a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM13.5 13h-4s-.5 0-.5.5v1c0 .5.5.5.5.5s.5 0 .5-.5V14h1v5h-1c-.5 0-.5.5-.5.5s0 .5.5.5h3c.5 0 .5-.5.5-.5s0-.5-.5-.5h-1v-5h1v.5c0 .5.5.5.5.5s.5 0 .5-.5v-1c0-.5-.5-.5-.5-.5z',
        })
      ),
    }),
    E({
      name: 'Plus',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'PlusCircle',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
        })
      ),
    }),
    E({
      name: 'PlusCircleTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm3.7 8.3h-3v3H6.8v-3h-3V8.2h3v-3h1.5v3h3v1.6z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'PlusTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M10.5 9.8H6v4.5H4.5V9.8H0V8.2h4.5V3.8H6v4.5h4.5v1.5z' }),
        l.createElement('path', { d: 'M0 0h10.5v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 10.5 18',
    }),
    E({
      name: 'Presentation',
      viewBox: '0 0 24 24',
      path: G.createElement(
        G.Fragment,
        null,
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M0 .5A.5.5 0 01.5 0h22a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-3zM1 1v2h21V1H1zM.021 17.5a.5.5 0 01.5-.5h21.958a.5.5 0 010 1H.521a.5.5 0 01-.5-.5z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M2 3.5a.5.5 0 01.5-.5h18a.5.5 0 01.5.5v14a.5.5 0 01-.5.5H12v2.5h-1V18H2.5a.5.5 0 01-.5-.5v-14zM3 4v13h17V4H3z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M11.5 21a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zM10.268 7.785a.5.5 0 01.517.032l3.272 2.272a.5.5 0 010 .822l-3.272 2.272a.5.5 0 01-.785-.411V8.228a.5.5 0 01.268-.443zM11 9.184v2.632l1.895-1.316L11 9.184z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M11.5 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM6 10.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z',
        })
      ),
    }),
    E({
      name: 'Preview',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        })
      ),
    }),
    E({
      name: 'PreviewOff',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z',
          fill: 'none',
        }),
        l.createElement('path', {
          d: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
        })
      ),
    }),
    E({
      name: 'Puzzle',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M9.793.005a3.493 3.493 0 013.487 3.28l.006.212v.704h3.326a2.972 2.972 0 011.803.614l.15.123.143.134c.51.51.816 1.186.865 1.901l.008.196-.002 3.323h.703c.784 0 1.54.264 2.152.742l.163.135.155.147a3.494 3.494 0 01-2.258 5.957l-.212.007h-.704v3.325a2.974 2.974 0 01-.613 1.802l-.124.15-.134.144a2.974 2.974 0 01-1.9.865l-.196.007h-4.857V21.34a1.962 1.962 0 00-3.911-.176l-.012.166v2.443H2.975A2.974 2.974 0 01.012 21l-.007-.196v-4.856h2.433a1.962 1.962 0 00.176-3.91l-.166-.014H.018V7.17a2.965 2.965 0 012.76-2.961l.196-.007H6.3V3.5c0-.785.264-1.542.741-2.152l.136-.163.147-.155A3.493 3.493 0 019.793.005zm0 1.74c-.908 0-1.665.693-1.745 1.597l-.008.154V5.94H2.974c-.628 0-1.149.484-1.21 1.103l-.007.125-.001 3.115h.692c.913 0 1.791.336 2.468.941l.152.144a3.704 3.704 0 01-2.41 6.315l-.209.005h-.702v3.116c0 .634.492 1.163 1.11 1.222l.118.005H6.09v-.703c0-.912.338-1.789.941-2.465l.145-.152a3.704 3.704 0 016.314 2.408l.006.21v.702h3.114c.631 0 1.157-.487 1.22-1.103l.007-.124v-5.065h2.445a1.752 1.752 0 00.153-3.499l-.153-.005h-2.446V7.168c0-.634-.49-1.163-1.108-1.223l-.118-.006h-5.067V3.496a1.75 1.75 0 00-1.75-1.751z',
        })
      ),
    }),
    E({
      name: 'Quote',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'QuoteTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M.8 12.8H3l1.5-3V5.2H0v4.5h2.2L.8 12.8zm6 0H9l1.5-3V5.2H6v4.5h2.2l-1.4 3.1z',
        }),
        l.createElement('path', { d: 'M0 0h10.5v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 10.5 18',
    }),
    E({
      name: 'Receipt',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'ReceiptTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M11.2 12.8h-9v-1.5h9v1.5zm0-3h-9V8.2h9v1.6zm0-3h-9V5.2h9v1.6zM0 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1L9 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1v-15l-1.1 1.1-1.1-1.1-1.1 1.1L9 1.5 7.9 2.6 6.8 1.5 5.6 2.6 4.5 1.5 3.4 2.6 2.2 1.5 1.1 2.6 0 1.5v15z',
        }),
        l.createElement('path', { d: 'M0 0h13.5v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 13.5 18',
    }),
    E({
      name: 'References',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
        l.createElement('path', {
          d: 'M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z',
        })
      ),
    }),
    E({
      name: 'Release',
      path: l.createElement('path', {
        d: 'M3.426 1.5C3.865.569 4.68 0 5.689 0h12.622c.995 0 1.95.666 2.294 1.57v.003s2.262 5.71 2.329 6.069C23 8 23 8 23 8.455v13.09C23 22.857 21.902 24 20.571 24H3.43C2.097 24 1 22.856 1 21.546V8.455C1 8 1 8 1.066 7.642c.067-.358 2.33-6.074 2.33-6.074a.997.997 0 01.03-.068zM3.838 6H11V2H5.69c-.152 0-.302.046-.441.324L3.839 6zM13 2v4h7.162l-1.426-3.715-.002-.006C18.688 2.156 18.48 2 18.311 2H13zM3.429 8C3.236 8 3 8.214 3 8.455v13.09c0 .241.236.455.429.455H20.57c.193 0 .429-.214.429-.454V8.455c0-.241-.236-.455-.429-.455H3.43zM13 19a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z',
      }),
    }),
    E({
      name: 'ReleaseTrimmed',
      path: l.createElement('path', {
        d: 'M2.426 1.5C2.865.569 3.68 0 4.689 0h12.622c.995 0 1.95.666 2.294 1.57v.003s2.262 5.71 2.329 6.069C22 8 22 8 22 8.455v13.09C22 22.857 20.902 24 19.571 24H2.43C1.097 24 0 22.856 0 21.546V8.455C0 8 0 8 .066 7.642c.067-.358 2.33-6.074 2.33-6.074a.997.997 0 01.03-.068zM2.838 6H10V2H4.69c-.152 0-.302.046-.441.324L2.839 6zM12 2v4h7.162l-1.426-3.715-.002-.006C17.688 2.156 17.48 2 17.311 2H12zM2.429 8C2.236 8 2 8.214 2 8.455v13.09c0 .241.236.455.429.455H19.57c.193 0 .429-.214.429-.454V8.455c0-.241-.236-.455-.429-.455H2.43zM12 19a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z',
      }),
      trimmed: !0,
      viewBox: '0 0 22 24',
    }),
    E({
      name: 'Richtext',
      viewBox: '0 0 24 24',
      path: G.createElement(
        G.Fragment,
        null,
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M4.5 7a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 3a.5.5 0 000 1h2a.5.5 0 000-1h-2zm8.946 2.237a.5.5 0 00-.802-.065L10 18.212V14h5v3.744l-1.554-2.507zM16 19.5v-6a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.498.498 0 00.5-.5zm-1.398-.5l-1.649-2.66L10.64 19h3.962zM4.5 16a.5.5 0 000 1h2a.5.5 0 000-1h-2zm0 3a.5.5 0 000 1h2a.5.5 0 000-1h-2z',
        })
      ),
    }),
    E({
      name: 'Search',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'SearchTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M9.4 10.5h-.6l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S0 4.4 0 7.1 2.2 12 4.9 12c1.2 0 2.3-.4 3.2-1.2l.1.2v.6l3.8 3.7 1.1-1.1-3.7-3.7zm-4.5 0C3 10.5 1.5 9 1.5 7.1S3 3.8 4.9 3.8s3.4 1.5 3.4 3.4-1.6 3.3-3.4 3.3z',
        }),
        l.createElement('path', { d: 'M0 0h13.1v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 13.1 18',
    }),
    E({
      name: 'Settings',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z',
        })
      ),
    }),
    E({
      name: 'SettingsTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h14.6v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12.9 9.7c0-.2.1-.5.1-.7s0-.5-.1-.7L14.5 7c.1-.1.2-.3.1-.5L13 4c-.1-.2-.3-.2-.5-.2l-1.9.8c-.3-.4-.7-.6-1.2-.8l-.3-2c0-.2-.2-.3-.4-.3h-3c-.2 0-.3.1-.4.3l-.3 2c-.3.2-.7.4-1.1.7L2 3.8c-.2-.1-.4 0-.4.2L.1 6.5c-.1.2-.1.4 0 .5l1.6 1.2c0 .2-.1.5-.1.7s0 .5.1.7L.1 11c-.1.1-.1.3 0 .5L1.6 14c.1.2.3.2.5.2l1.9-.8c.4.3.8.5 1.3.7l.3 2c0 .2.2.3.4.3h3c.2 0 .3-.1.4-.3l.3-2c.5-.2.9-.4 1.3-.7l1.9.8c.2.1.4 0 .5-.2l1.5-2.6c.1-.2.1-.4-.1-.5l-1.9-1.2zm-5.6 1.9c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6S9.9 7.6 9.9 9s-1.2 2.6-2.6 2.6z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 14.6 18',
    }),
    E({
      name: 'ShoppingCart',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    });
  var Zu = E({
      name: 'Sort',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M16.5 14.25h-9a.75.75 0 0 0-.53 1.28l4.5 4.5a.747.747 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-.53-1.28ZM6.764 8.854a.75.75 0 0 0 .736.896h9a.75.75 0 0 0 .53-1.28l-4.5-4.5a.751.751 0 0 0-1.061 0l-4.5 4.5a.75.75 0 0 0-.205.384Z',
        })
      ),
    }),
    Qu = E({
      name: 'SortAscending',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          fillOpacity: 0.2,
          d: 'M16.5 14.25h-9a.75.75 0 0 0-.53 1.28l4.5 4.5a.747.747 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-.53-1.28Z',
        }),
        l.createElement('path', {
          d: 'M6.764 8.854a.75.75 0 0 0 .736.896h9a.75.75 0 0 0 .53-1.28l-4.5-4.5a.751.751 0 0 0-1.061 0l-4.5 4.5a.75.75 0 0 0-.205.384Z',
        })
      ),
    }),
    Ju = E({
      name: 'SortDescending',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M16.5 14.25h-9a.75.75 0 0 0-.53 1.28l4.5 4.5a.747.747 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-.53-1.28Z',
        }),
        l.createElement('path', {
          fillOpacity: 0.2,
          d: 'M6.764 8.854a.75.75 0 0 0 .736.896h9a.75.75 0 0 0 .53-1.28l-4.5-4.5a.751.751 0 0 0-1.061 0l-4.5 4.5a.75.75 0 0 0-.205.384Z',
        })
      ),
    });
  E({
    name: 'ShoppingCartTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4.5 13.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S6 15.8 6 15s-.7-1.5-1.5-1.5zM0 1.5V3h1.5l2.7 5.7-1 1.8c-.1.2-.2.5-.2.7 0 .8.7 1.5 1.5 1.5h9v-1.5H4.8c-.1 0-.2-.1-.2-.2v-.1l.7-1.2h5.6c.6 0 1.1-.3 1.3-.8L14.9 4c.1 0 .1-.1.1-.2 0-.5-.3-.8-.8-.8h-11l-.7-1.5H0zm12 12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z',
      }),
      l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
    ),
    trimmed: !0,
    viewBox: '0 0 15 18',
  }),
    E({
      name: 'Spreadsheet',
      viewBox: '0 0 24 24',
      path: G.createElement(
        G.Fragment,
        null,
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M4 8.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-12zM5 12h3v2H5v-2zm0 3h3v2H5v-2zm0 3h3v2H5v-2zm4 2h6v-2H9v2zm0-3h6v-2H9v2zm0-3h6v-2H9v2zm0-3h6V9H9v2zM8 9H5v2h3V9z',
        })
      ),
    }),
    E({
      name: 'Star',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
        }),
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      ),
    }),
    E({
      name: 'StarTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M7.5 13l4.6 2.8-1.2-5.3L15 6.9l-5.4-.4-2.1-5-2.1 5-5.4.4 4.1 3.5-1.2 5.3L7.5 13z',
        }),
        l.createElement('path', { d: 'M0 0h15v18H0V0z', fill: 'none' })
      ),
      trimmed: !0,
      viewBox: '0 0 15 18',
    }),
    E({
      name: 'Subscript',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('rect', { fill: 'none', height: '24', width: '24' }),
        l.createElement('path', {
          d: 'M22,18h-2v1h3v1h-4v-2c0-0.55,0.45-1,1-1h2v-1h-3v-1h3c0.55,0,1,0.45,1,1v1C23,17.55,22.55,18,22,18z M5.88,18h2.66 l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,4h-2.68l-3.07,4.99h-0.12L8.85,4H6.19l4.32,6.73L5.88,18z',
        })
      ),
      viewBox: '0 0 13 18',
    }),
    E({
      name: 'SubscriptTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('rect', { fill: 'none', height: '24', width: '24' }),
        l.createElement('path', {
          d: 'M22,18h-2v1h3v1h-4v-2c0-0.55,0.45-1,1-1h2v-1h-3v-1h3c0.55,0,1,0.45,1,1v1C23,17.55,22.55,18,22,18z M5.88,18h2.66 l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,4h-2.68l-3.07,4.99h-0.12L8.85,4H6.19l4.32,6.73L5.88,18z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 13 18',
    }),
    E({
      name: 'Superscript',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('rect', { fill: 'none', height: '24', width: '24', x: '0', y: '0' }),
        l.createElement('path', {
          d: 'M22,7h-2v1h3v1h-4V7c0-0.55,0.45-1,1-1h2V5h-3V4h3c0.55,0,1,0.45,1,1v1C23,6.55,22.55,7,22,7z M5.88,20h2.66l3.4-5.42h0.12 l3.4,5.42h2.66l-4.65-7.27L17.81,6h-2.68l-3.07,4.99h-0.12L8.85,6H6.19l4.32,6.73L5.88,20z',
        })
      ),
    }),
    E({
      name: 'SuperscriptTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('rect', { fill: 'none', height: '24', width: '24', x: '0', y: '0' }),
        l.createElement('path', {
          d: 'M22,7h-2v1h3v1h-4V7c0-0.55,0.45-1,1-1h2V5h-3V4h3c0.55,0,1,0.45,1,1v1C23,6.55,22.55,7,22,7z M5.88,20h2.66l3.4-5.42h0.12 l3.4,5.42h2.66l-4.65-7.27L17.81,6h-2.68l-3.07,4.99h-0.12L8.85,6H6.19l4.32,6.73L5.88,20z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 13 18',
    }),
    E({
      name: 'Tab',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z',
        })
      ),
    }),
    E({
      name: 'Table',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z',
        })
      ),
      viewBox: '0 0 24 24',
    }),
    E({
      name: 'Tags',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z',
        }),
        l.createElement('circle', { cx: 6.5, cy: 6.5, r: 1.5 })
      ),
    }),
    E({
      name: 'Text',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement(
          'defs',
          null,
          l.createElement('path', { d: 'M24 24H0V0h24v24z', id: 'Text_svg__a' })
        ),
        l.createElement(
          'clipPath',
          { id: 'Text_svg__b' },
          l.createElement('use', { overflow: 'visible', xlinkHref: '#Text_svg__a' })
        ),
        l.createElement('path', {
          clipPath: 'url(#Text_svg__b)',
          d: 'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z',
        })
      ),
    }),
    E({
      name: 'TextTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement(
          'defs',
          null,
          l.createElement('path', { id: 'TextTrimmed_svg__a', d: 'M0 0h14.2v18H0z' })
        ),
        l.createElement(
          'clipPath',
          { id: 'TextTrimmed_svg__b' },
          l.createElement('use', { xlinkHref: '#TextTrimmed_svg__a', overflow: 'visible' })
        ),
        l.createElement('path', {
          d: 'M0 3v2.2h3.8v9H6v-9h3.8V3H0zm14.2 3.8H7.5V9h2.2v5.2H12V9h2.2V6.8z',
          clipPath: 'url(#TextTrimmed_svg__b)',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 14.2 18',
    }),
    E({
      name: 'ThumbDown',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z',
        })
      ),
    }),
    E({
      name: 'ThumbDownTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M10.5 2.2H3.8c-.6 0-1.2.4-1.4.9L.1 8.5c-.1.1-.1.3-.1.5v1.5c0 .8.7 1.5 1.5 1.5h4.7l-.7 3.4v.2c0 .3.1.6.3.8l.8.8 4.9-4.9c.3-.3.4-.6.4-1.1V3.8c.1-.9-.6-1.6-1.4-1.6zm3 0v9h3v-9h-3z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 16.5 18',
    }),
    E({
      name: 'ThumbUp',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z',
        })
      ),
    }),
    E({
      name: 'ThumbUpTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M0 15.8h3v-9H0v9zm16.5-8.3c0-.8-.7-1.5-1.5-1.5h-4.7l.7-3.4v-.2c0-.3-.1-.6-.3-.8L9.9.8l-5 4.9c-.2.3-.4.6-.4 1.1v7.5c0 .8.7 1.5 1.5 1.5h6.8c.6 0 1.2-.4 1.4-.9l2.3-5.3c.1-.2.1-.4.1-.5V7.5h-.1z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 16.5 18',
    }),
    E({
      name: 'Toggle',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          d: 'M15.31 4.19 16.5 3 21 7.5 16.5 12l-1.19-1.19 2.458-2.466H4.125V6.656h13.643L15.31 4.19ZM8.69 19.81 7.5 21 3 16.5 7.5 12l1.19 1.19-2.458 2.466h13.643v1.688H6.232L8.69 19.81Z',
        })
      ),
    }),
    E({
      name: 'TriangleOutline',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'm12 4 9 15.546H3L12 4ZM5.838 17.91 12 7.265l6.162 10.643H5.838Z',
        })
      ),
    }),
    E({
      name: 'Users',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
        })
      ),
    }),
    E({
      name: 'UsersTrimmed',
      path: l.createElement(
        l.Fragment,
        null,
        l.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
        l.createElement('path', {
          d: 'M11.2 8.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S9 4.8 9 6s1 2.2 2.2 2.2zm-6 0c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S3 4.8 3 6s1 2.2 2.2 2.2zm0 1.6c-1.7 0-5.2.8-5.2 2.6v1.9h10.5v-1.9c0-1.8-3.5-2.6-5.3-2.6zm6 0h-.7c.9.6 1.5 1.5 1.5 2.6v1.9h4.5v-1.9c0-1.8-3.5-2.6-5.3-2.6z',
        })
      ),
      trimmed: !0,
      viewBox: '0 0 16.5 18',
    }),
    E({
      name: 'Video',
      viewBox: '0 0 24 24',
      path: G.createElement(
        G.Fragment,
        null,
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z',
        }),
        G.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M6.258 8.063a.5.5 0 01.507.013l8 5a.5.5 0 010 .848l-8 5A.5.5 0 016 18.5v-10a.5.5 0 01.258-.437zM7 9.403v8.195l6.557-4.098L7 9.402z',
        })
      ),
    });
  var _u = E({
    name: 'Warning',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      l.createElement('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' })
    ),
  });
  E({
    name: 'WarningTrimmed',
    path: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M0 0h16.5v18H0V0z', fill: 'none' }),
      l.createElement('path', {
        d: 'M0 15.8h16.5L8.2 1.5 0 15.8zm9-2.3H7.5V12H9v1.5zm0-3H7.5v-3H9v3z',
      })
    ),
    trimmed: !0,
    viewBox: '0 0 16.5 18',
  }),
    E({
      name: 'Workflows',
      path: l.createElement('path', {
        d: 'M18.6 4l-4.4 4.533h3.3v7.934c0 1.246-.99 2.266-2.2 2.266s-2.2-1.02-2.2-2.266V8.533C13.1 6.03 11.131 4 8.7 4S4.3 6.029 4.3 8.533v7.934H1L5.4 21l4.4-4.533H6.5V8.533c0-1.246.99-2.266 2.2-2.266s2.2 1.02 2.2 2.266v7.934C10.9 18.97 12.869 21 15.3 21s4.4-2.029 4.4-4.533V8.533H23z',
      }),
    });
  var e0 = Object.defineProperty,
    t0 = Object.defineProperties,
    n0 = Object.getOwnPropertyDescriptors,
    ji = Object.getOwnPropertySymbols,
    Oo = Object.prototype.hasOwnProperty,
    Lo = Object.prototype.propertyIsEnumerable,
    Ro = (t, e, n) =>
      e in t ? e0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    i0 = (t, e) => {
      for (var n in e || (e = {})) Oo.call(e, n) && Ro(t, n, e[n]);
      if (ji) for (var n of ji(e)) Lo.call(e, n) && Ro(t, n, e[n]);
      return t;
    },
    r0 = (t, e) => t0(t, n0(e)),
    s0 = (t, e) => {
      var n = {};
      for (var i in t) Oo.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && ji) for (var i of ji(t)) e.indexOf(i) < 0 && Lo.call(t, i) && (n[i] = t[i]);
      return n;
    },
    a0 = { large: '36px', medium: '20px', small: '14px' },
    o0 = () => {
      let t = {
        scale1: Sn`
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
        scale2: Sn`
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
        scale3: Sn`
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
        translate1: Sn`
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
        translate2: Sn`
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
        translate3: Sn`
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
          R({
            height: e.customSize ? `${e.customSize}px` : void 0,
            verticalAlign: 'middle',
            width: e.customSize ? `${e.customSize}px` : a0[e.size],
          }),
        circle1Scale: R({ animation: `${t.scale1} 1s linear infinite normal forwards;` }),
        circle2Scale: R({ animation: `${t.scale2} 1s linear infinite normal forwards;` }),
        circle3Scale: R({ animation: `${t.scale3} 1s linear infinite normal forwards;` }),
        circle1Translate: R({ animation: `${t.translate1} 1s linear infinite normal forwards;` }),
        circle2Translate: R({ animation: `${t.translate2} 1s linear infinite normal forwards;` }),
        circle3Translate: R({ animation: `${t.translate3} 1s linear infinite normal forwards;` }),
      };
    },
    l0 = 'div',
    c0 = { default: f.gray700, primary: f.colorPrimary, white: f.colorWhite },
    Io = l.forwardRef((t, e) => {
      var n = t,
        {
          className: i,
          customSize: r,
          size: s = 'medium',
          variant: a = 'default',
          testId: o = 'cf-ui-spinner',
        } = n,
        c = s0(n, ['className', 'customSize', 'size', 'variant', 'testId']);
      let h = o0();
      return l.createElement(
        He,
        r0(i0({ as: l0, display: 'inline-block' }, c), {
          className: Q(h.root({ size: s, customSize: r }), i),
          ref: e,
          testId: o,
        }),
        l.createElement(
          'svg',
          {
            className: R({ display: 'block', fill: c0[a] }),
            viewBox: '0 0 60 51',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          l.createElement('title', null, 'Loading…'),
          l.createElement(
            'g',
            { className: h.circle1Translate, transform: 'translate(10,33.528168)' },
            l.createElement(
              'g',
              { className: h.circle1Scale },
              l.createElement('circle', { r: '6', transform: 'translate(0,10.471832)' })
            )
          ),
          l.createElement(
            'g',
            { className: h.circle2Translate, transform: 'translate(30,33.528168)' },
            l.createElement(
              'g',
              { className: h.circle2Scale },
              l.createElement('circle', { r: '6', transform: 'translate(0,10.471832)' })
            )
          ),
          l.createElement(
            'g',
            { className: h.circle3Translate, transform: 'translate(50,33.528168)' },
            l.createElement(
              'g',
              { className: h.circle3Scale },
              l.createElement('circle', { r: '6', transform: 'translate(0,10.471832)' })
            )
          )
        )
      );
    });
  Io.displayName = 'Spinner';
  var h0 = Object.defineProperty,
    d0 = Object.defineProperties,
    u0 = Object.getOwnPropertyDescriptors,
    Wi = Object.getOwnPropertySymbols,
    Do = Object.prototype.hasOwnProperty,
    Ao = Object.prototype.propertyIsEnumerable,
    To = (t, e, n) =>
      e in t ? h0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    at = (t, e) => {
      for (var n in e || (e = {})) Do.call(e, n) && To(t, n, e[n]);
      if (Wi) for (var n of Wi(e)) Ao.call(e, n) && To(t, n, e[n]);
      return t;
    },
    ms = (t, e) => d0(t, u0(e)),
    gs = (t, e) => {
      var n = {};
      for (var i in t) Do.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && Wi) for (var i of Wi(t)) e.indexOf(i) < 0 && Ao.call(t, i) && (n[i] = t[i]);
      return n;
    },
    f0 = ({ withDivider: t }) => {
      let e = p0(t);
      return at(
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
    p0 = (t) =>
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
    m0 = ({ withDivider: t }) => ({
      buttonGroup: R({ display: 'inline-flex', position: 'relative' }),
      groupContent: R(f0({ withDivider: t })),
    });
  function Po(t, e) {
    let {
        variant: n = 'merged',
        withDivider: i,
        testId: r = 'cf-ui-button-group',
        children: s,
        className: a,
        spacing: o,
      } = t,
      c = m0({ withDivider: i });
    return n === 'spaced'
      ? l.createElement(
          us,
          { className: a, isInline: !0, flexDirection: 'row', testId: r, ref: e, spacing: o },
          s
        )
      : l.createElement(
          He,
          { testId: r, ref: e, className: Q(c.buttonGroup, a) },
          l.Children.map(s, (h, d) =>
            h
              ? l.cloneElement(h, { key: d, className: Q(c.groupContent, h.props.className) })
              : null
          )
        );
  }
  (Po.displayName = 'ButtonGroup'), l.forwardRef(Po);
  var zn = (t) => {
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
    g0 = (t) => {
      switch (t) {
        case 'primary':
          return {
            color: f.colorWhite,
            backgroundColor: f.blue500,
            borderColor: f.blue500,
            '&:hover': { backgroundColor: f.blue600, borderColor: f.blue600, color: f.colorWhite },
            '&:active': zn(t),
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
            '&:active': zn(t),
            '&:focus': { boxShadow: f.glowPrimary },
            '&:focus:not(:focus-visible)': { boxShadow: 'unset' },
            '&:focus-visible': { boxShadow: f.glowPrimary },
          };
        case 'positive':
          return {
            color: f.colorWhite,
            backgroundColor: f.colorPositive,
            borderColor: f.colorPositive,
            '&:hover': {
              backgroundColor: f.green600,
              borderColor: f.green600,
              color: f.colorWhite,
            },
            '&:active': zn(t),
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
            '&:active': zn(t),
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
            '&:active': zn(t),
            '&:focus': { backgroundColor: 'transparent', boxShadow: f.glowPrimary },
            '&:focus:not(:focus-visible)': { boxShadow: 'unset' },
            '&:focus-visible': { boxShadow: f.glowPrimary },
          };
        default:
          return {};
      }
    },
    v0 = (t) => {
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
    b0 = ({ hasChildren: t, variant: e }) => {
      let n = {
        '&:first-child': { marginRight: f.spacing2Xs },
        '&:last-child': { marginLeft: f.spacing2Xs },
      };
      return R([t ? n : {}, e !== 'transparent' && t && { '& svg': { fill: 'currentColor' } }]);
    },
    y0 = () => ({
      button: ({ variant: t, size: e, isActive: n, isDisabled: i, isFullWidth: r }) =>
        R(
          at(
            at(
              at(
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
                g0(t)
              ),
              v0(e)
            ),
            n ? { transition: 'none', '&, &:hover': zn(t) } : {}
          )
        ),
      buttonIcon: b0,
      buttonContent: R({ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }),
    }),
    x0 = 'button';
  function Ho(t, e) {
    let n = y0(),
      i = t,
      {
        as: r = x0,
        children: s,
        className: a,
        testId: o = 'cf-ui-button',
        variant: c = 'secondary',
        size: h = 'medium',
        startIcon: d,
        endIcon: u,
        isActive: p,
        isDisabled: m,
        isLoading: g,
        isFullWidth: b,
        style: v,
      } = i,
      y = gs(i, [
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
      w = Q(n.button({ variant: c, size: h, isActive: p, isDisabled: m, isFullWidth: b }), a),
      k = (O) => {
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
          l.createElement(
            Ee,
            { as: 'span', className: n.buttonIcon({ hasChildren: !!s, variant: c }) },
            l.cloneElement(O, {
              size: (C = O.props.size) != null ? C : `${h === 'large' ? 'medium' : 'small'}`,
              variant: (c === 'transparent' && O.props.variant) || L[c],
            })
          )
        );
      },
      S = l.createElement(
        l.Fragment,
        null,
        d && k(d),
        s && l.createElement(He, { as: 'span', display: 'block', className: n.buttonContent }, s),
        u && k(u),
        g &&
          l.createElement(
            He,
            { as: 'span', marginLeft: s || !g ? 'spacingXs' : 'none' },
            l.createElement(Io, {
              customSize: 18,
              variant: c === 'secondary' ? 'default' : 'white',
            })
          )
      ),
      M = { ['data-test-id']: o, className: w, ref: e, style: v };
    return r === 'a'
      ? l.createElement('a', ms(at(at({}, y), M), { disabled: m }), S)
      : l.createElement('button', ms(at(at({ type: 'button' }, y), M), { disabled: m }), S);
  }
  Ho.displayName = 'Button';
  var Qn = l.forwardRef(Ho),
    w0 = ({ isActive: t, isDisabled: e }) => {
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
      return t ? at(at({}, i), n) : i;
    },
    E0 = ({ isActive: t, isDisabled: e }) => ({
      toggleButton: R(w0({ isActive: t, isDisabled: e })),
    });
  function Fo(t, e) {
    let n = t,
      {
        testId: i = 'cf-ui-toggle-button',
        children: r,
        className: s,
        isDisabled: a = !1,
        isActive: o = !1,
        icon: c,
        onToggle: h,
        size: d = 'medium',
      } = n,
      u = gs(n, [
        'testId',
        'children',
        'className',
        'isDisabled',
        'isActive',
        'icon',
        'onToggle',
        'size',
      ]),
      p = E0({ isActive: o, isDisabled: a });
    return l.createElement(
      Qn,
      at(
        {
          testId: i,
          type: 'button',
          ref: e,
          size: d,
          onClick: () => {
            !a && h && h();
          },
          className: Q(p.toggleButton, s),
          startIcon: c,
          isDisabled: a,
          'aria-pressed': o,
          'data-state': o ? 'on' : 'off',
        },
        u
      ),
      r
    );
  }
  (Fo.displayName = 'ToggleButton'), l.forwardRef(Fo);
  function Vo(t, e) {
    let n = t,
      { testId: i = 'cf-ui-icon-button', variant: r = 'transparent', icon: s } = n,
      a = gs(n, ['testId', 'variant', 'icon']);
    return l.createElement(Qn, ms(at({ testId: i, ref: e, variant: r }, a), { startIcon: s }));
  }
  Vo.displayName = 'IconButton';
  var C0 = l.forwardRef(Vo),
    M0 = Object.defineProperty,
    S0 = Object.defineProperties,
    k0 = Object.getOwnPropertyDescriptors,
    Xi = Object.getOwnPropertySymbols,
    Bo = Object.prototype.hasOwnProperty,
    No = Object.prototype.propertyIsEnumerable,
    $o = (t, e, n) =>
      e in t ? M0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    re = (t, e) => {
      for (var n in e || (e = {})) Bo.call(e, n) && $o(t, n, e[n]);
      if (Xi) for (var n of Xi(e)) No.call(e, n) && $o(t, n, e[n]);
      return t;
    },
    Te = (t, e) => S0(t, k0(e)),
    xe = (t, e) => {
      var n = {};
      for (var i in t) Bo.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && Xi) for (var i of Xi(t)) e.indexOf(i) < 0 && No.call(t, i) && (n[i] = t[i]);
      return n;
    },
    jo = () => {},
    Wo = l.createContext(void 0),
    z0 = () => l.useContext(Wo),
    yt = (t) => {
      var e, n, i, r, s;
      let a = z0();
      return a
        ? {
            isDisabled: (e = t.isDisabled) != null ? e : a.isDisabled,
            isInvalid: (n = t.isInvalid) != null ? n : a.isInvalid,
            isReadOnly: (i = t.isReadOnly) != null ? i : a.isReadOnly,
            isRequired: (r = t.isRequired) != null ? r : a.isRequired,
            id: (s = t.id) != null ? s : a.id,
            maxLength: a.maxLength,
            inputValue: a.inputValue,
            setMaxLength: a.setMaxLength || jo,
            setInputValue: a.setInputValue || jo,
          }
        : t;
    },
    vs = l.forwardRef((t, e) => {
      var n = t,
        { testId: i = 'cf-ui-help-text' } = n,
        r = xe(n, ['testId']);
      let { id: s } = yt({});
      return l.createElement(
        je,
        Te(
          re(
            {
              as: 'p',
              fontColor: 'gray500',
              fontSize: 'fontSizeM',
              testId: i,
              id: `${s}-helptext`,
              marginTop: 'spacingXs',
            },
            r
          ),
          { ref: e }
        )
      );
    });
  vs.displayName = 'HelpText';
  var Xo = l.forwardRef((t, e) => {
    var n = t,
      { children: i, testId: r = 'cf-ui-validation-message' } = n,
      s = xe(n, ['children', 'testId']);
    let { id: a } = yt({});
    return l.createElement(
      Ee,
      Te(re({ marginTop: 'spacingXs' }, s), {
        ref: e,
        testId: r,
        alignItems: 'center',
        id: a ? `${a}-validation` : void 0,
        'aria-live': 'assertive',
      }),
      l.createElement(
        Ee,
        { marginRight: 'spacing2Xs' },
        l.createElement(qu, { size: 'small', variant: 'negative', 'aria-hidden': 'true' })
      ),
      l.createElement(je, { as: 'p', fontColor: 'colorNegative' }, i)
    );
  });
  Xo.displayName = 'ValidationMessage';
  var bs = ({ isDisabled: t }) => ({
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
    O0 = ({ isDisabled: t }) => {
      let e = Te(re({}, bs({ isDisabled: t })), {
        backgroundColor: t ? f.gray300 : f.colorWhite,
        borderRadius: f.borderRadiusSmall,
        '& svg': { fill: t ? f.gray300 : f.colorWhite },
        'input:indeterminate + &, input:checked + &': {
          backgroundColor: t ? f.gray300 : f.blue600,
          borderColor: t ? f.gray300 : f.blue600,
          '& svg': { fill: t ? f.gray600 : f.colorWhite },
        },
      });
      return R(e);
    },
    L0 = ({ isDisabled: t }) => {
      let e = {
          content: '""',
          borderRadius: '50%',
          backgroundColor: t ? f.gray300 : f.colorWhite,
          width: f.borderRadiusMedium,
          height: f.borderRadiusMedium,
        },
        n = Te(re({}, bs({ isDisabled: t })), {
          backgroundColor: t ? f.gray300 : f.colorWhite,
          borderRadius: '50%',
          '&:before': re({}, e),
          'input:checked + &': {
            backgroundColor: t ? f.gray300 : f.blue600,
            borderColor: t ? f.gray300 : f.blue600,
            '&:before': { backgroundColor: t ? f.gray600 : f.colorWhite },
          },
        });
      return R(n);
    },
    R0 = ({ isDisabled: t, size: e }) => {
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
        i = Te(re({}, bs({ isDisabled: t })), {
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
      return R([i, n, t && r]);
    },
    I0 = (t) => {
      let { isDisabled: e, size: n } = t;
      return {
        radio: L0({ isDisabled: e }),
        checkbox: O0({ isDisabled: e }),
        switch: R0({ isDisabled: e, size: n }),
      };
    },
    D0 = I0,
    A0 = (t) => {
      let { type: e, isIndeterminate: n, isDisabled: i, size: r = 'medium' } = t,
        s = D0({ isDisabled: i, size: r });
      return e === 'switch'
        ? l.createElement(
            'span',
            { className: s.switch },
            l.createElement(So, { size: 'tiny', variant: 'white' }),
            l.createElement(Mo, { size: 'tiny', variant: 'white' })
          )
        : l.createElement(
            'span',
            { className: s[e] },
            e === 'checkbox' &&
              (n
                ? l.createElement(Gu, { size: 'tiny', variant: 'white' })
                : l.createElement(So, { size: 'tiny', variant: 'white' }))
          );
    },
    Yo = (t) =>
      t === 'small'
        ? { height: f.spacingM, width: f.spacingXl }
        : { height: '20px', width: '40px' },
    T0 = ({ size: t, type: e }) => {
      let n = f.spacingM;
      return (
        e === 'switch' && (n = Yo(t).width),
        { marginLeft: `calc(${n} + ${f.spacingXs})`, marginTop: 0 }
      );
    },
    P0 = ({ isDisabled: t, type: e, size: n }) => ({
      wrapper: R({
        alignItems: 'center',
        display: 'inline-flex',
        position: 'relative',
        margin: '0',
      }),
      input: R([
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
        e === 'switch' && Yo(n),
      ]),
      helpText: R(T0({ size: n, type: e })),
    }),
    H0 = P0;
  function Uo(t, e) {
    let n = t,
      {
        isChecked: i = void 0,
        onChange: r,
        onFocus: s,
        onBlur: a,
        onKeyDown: o,
        type: c = 'checkbox',
        value: h,
        isDisabled: d,
        isIndeterminate: u,
        isInvalid: p,
        isRequired: m = !1,
        id: g,
        willBlurOnEsc: b = !0,
        testId: v = 'cf-ui-base-checkbox',
        className: y = '',
        defaultChecked: w = void 0,
        name: k,
        inputProps: S = {},
        children: M,
        'aria-label': O,
        size: C = 'medium',
        helpText: L,
      } = n,
      T = xe(n, [
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
      I = l.useRef(null),
      P = e || I,
      { id: B } = yt({});
    l.useEffect(() => {
      P.current && (P.current.indeterminate = u);
    }, [u, P]);
    let j = H0({ isDisabled: d, type: c, size: C }),
      q = l.useCallback(
        (ue) => {
          ue.persist(), s && s(ue);
        },
        [s]
      ),
      N = l.useCallback(
        (ue) => {
          ue.persist(), a && a(ue);
        },
        [a]
      ),
      U = l.useCallback(
        (ue) => {
          var Ie;
          ue.persist(),
            b &&
              ue.key === 'Escape' &&
              ((Ie = P == null ? void 0 : P.current) == null || Ie.blur()),
            o && o(ue);
        },
        [b, o, P]
      ),
      X = typeof i !== void 0 ? i : w,
      he = g ? `${g}-helptext` : void 0,
      Me = p ? `${B}-validation` : L ? he : void 0;
    return l.createElement(
      Ee,
      { alignItems: 'flex-start', flexDirection: 'column', className: y },
      l.createElement(
        je,
        re(
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
        l.createElement(
          'input',
          Te(re({}, S), {
            'aria-label': O,
            checked: i,
            defaultChecked: w,
            className: j.input,
            type: c === 'switch' ? 'checkbox' : c,
            onChange: r,
            onFocus: q,
            onBlur: N,
            onKeyDown: U,
            value: h,
            disabled: d,
            role: c,
            'aria-checked': u ? 'mixed' : X,
            ref: P,
            required: m,
            'aria-required': m ? 'true' : void 0,
            'aria-invalid': p ? 'true' : void 0,
            'aria-describedby': Me,
            id: g,
            name: k,
          })
        ),
        l.createElement(A0, { type: c, isDisabled: d, isIndeterminate: u, size: C }),
        M
      ),
      L && l.createElement(vs, { id: he, className: j.helpText }, L)
    );
  }
  Uo.displayName = 'BaseCheckbox';
  var ys = l.forwardRef(Uo),
    qo = l.createContext(void 0),
    F0 = () => l.useContext(qo),
    Go = (t) => {
      var e, n, i;
      let r = F0();
      if (!r) return t;
      let s, a;
      return (
        r.type === 'checkbox' &&
          ((s = r.value === void 0 || (e = r.value) == null ? void 0 : e.includes(t.value)),
          (a = s !== void 0 || (n = r.defaultValue) == null ? void 0 : n.includes(t.value))),
        r.type === 'radio' &&
          ((s = r.value === void 0 ? void 0 : r.value === t.value),
          (a = s !== void 0 ? void 0 : r.defaultValue === t.value)),
        {
          defaultChecked: a,
          isChecked: s,
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
    V0 = (t, e) => {
      let n = t,
        {
          testId: i = 'cf-ui-checkbox',
          id: r,
          isDisabled: s,
          isRequired: a,
          isInvalid: o,
          children: c,
          onBlur: h,
          onChange: d,
          defaultChecked: u,
          isChecked: p,
          value: m,
          name: g,
        } = n,
        b = xe(n, [
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
        v = Dt(r, 'checkbox'),
        y = Go({ onBlur: h, onChange: d, value: m, defaultChecked: u, isChecked: p, name: g }),
        w = yt({ id: v, isDisabled: s, isInvalid: o, isRequired: a }),
        k = xe(w, ['inputValue', 'setInputValue', 'maxLength', 'setMaxLength', 'isReadOnly']);
      return l.createElement(
        ys,
        Te(re(re(re({}, k), y), b), { type: 'checkbox', testId: i, ref: e }),
        c
      );
    },
    B0 = l.forwardRef(V0),
    N0 = (t, e) => {
      let n = t,
        { children: i, className: r, testId: s = 'cf-ui-base-checkbox-group' } = n,
        a = xe(n, ['children', 'className', 'testId']);
      return l.createElement(
        qo.Provider,
        { value: a },
        l.createElement(
          us,
          {
            ref: e,
            testId: s,
            className: r,
            flexDirection: 'column',
            alignItems: 'flex-start',
            spacing: 'spacingXs',
          },
          i
        )
      );
    },
    Ko = l.forwardRef(N0),
    $0 = (t, e) => {
      let n = t,
        { children: i, testId: r = 'cf-ui-checkbox-group' } = n,
        s = xe(n, ['children', 'testId']);
      return l.createElement(Ko, re({ ref: e, testId: r, type: 'checkbox' }, s), i);
    },
    j0 = l.forwardRef($0),
    W0 = B0;
  W0.Group = j0;
  var X0 = 'div';
  function Zo(t, e) {
    var n = t,
      {
        as: i,
        isInvalid: r,
        isRequired: s,
        isDisabled: a,
        isReadOnly: o,
        children: c,
        marginBottom: h = 'spacingL',
        id: d,
        testId: u = 'cf-ui-form-control',
      } = n,
      p = xe(n, [
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
    let m = Dt(d, 'field-'),
      [g, b] = l.useState(''),
      [v, y] = l.useState(0),
      w = i === 'fieldset' ? void 0 : 'group',
      k = i || X0,
      S = {
        id: m,
        isRequired: s,
        isDisabled: a,
        isInvalid: r,
        isReadOnly: o,
        inputValue: g,
        setInputValue: b,
        maxLength: v,
        setMaxLength: y,
      };
    return l.createElement(
      Wo.Provider,
      { value: S },
      l.createElement(He, re({ as: k, ref: e, role: w, testId: u, marginBottom: h }, p), c)
    );
  }
  Zo.displayName = 'FormControl';
  var Y0 = l.forwardRef(Zo);
  function U0() {
    return {
      root: R({ display: 'inline-block', fontWeight: f.fontWeightMedium }),
      indicator: R({ color: f.gray500, fontWeight: f.fontWeightNormal, marginLeft: f.spacing2Xs }),
    };
  }
  var q0 = 'label';
  function Qo(t, e) {
    var n = t,
      {
        as: i,
        children: r,
        className: s,
        isRequired: a,
        requiredText: o = 'required',
        testId: c = 'cf-ui-form-label',
      } = n,
      h = xe(n, ['as', 'children', 'className', 'isRequired', 'requiredText', 'testId']);
    let d = U0(),
      u = yt({ isRequired: a }),
      p = u.id ? u.id + '-label' : void 0,
      m = i !== 'legend' ? { htmlFor: h.htmlFor || u.id } : {};
    return l.createElement(
      je,
      Te(
        re(
          Te(re({ as: i || q0, marginBottom: 'spacingXs' }, h), { fontColor: 'gray900', id: p }),
          m
        ),
        { className: Q(d.root, s), ref: e, testId: c }
      ),
      r,
      u.isRequired && l.createElement('span', { className: d.indicator }, '(', o, ')')
    );
  }
  Qo.displayName = 'FormLabel';
  var G0 = l.forwardRef(Qo);
  function K0() {
    return { root: R({ flexShrink: 0, paddingLeft: f.spacingM, textAlign: 'right' }) };
  }
  var Jo = l.forwardRef((t, e) => {
    var n = t,
      { testId: i = 'cf-ui-counter', className: r } = n,
      s = xe(n, ['testId', 'className']);
    let { maxLength: a, inputValue: o } = yt({}),
      c = K0();
    return (
      !!a &&
      l.createElement(
        je,
        Te(
          re(
            {
              as: 'p',
              fontColor: 'gray700',
              fontSize: 'fontSizeM',
              testId: i,
              marginTop: 'spacingXs',
            },
            s
          ),
          { className: Q(c.root, r), ref: e }
        ),
        o.length,
        ' / ',
        a
      )
    );
  });
  Jo.displayName = 'Counter';
  var Yi = Y0;
  (Yi.Label = G0), (Yi.ValidationMessage = Xo), (Yi.HelpText = vs), (Yi.Counter = Jo);
  var Z0 = (t, e) => {
      let n = t,
        {
          testId: i = 'cf-ui-radio-button',
          id: r,
          isDisabled: s,
          isInvalid: a,
          isRequired: o,
          children: c,
          onBlur: h,
          onChange: d,
          defaultChecked: u,
          isChecked: p,
          value: m,
          name: g,
        } = n,
        b = xe(n, [
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
        v = Dt(r, 'radio'),
        y = Go({ onBlur: h, onChange: d, value: m, defaultChecked: u, isChecked: p, name: g }),
        w = yt({ id: v, isDisabled: s, isInvalid: a, isRequired: o }),
        k = xe(w, ['inputValue', 'setInputValue', 'maxLength', 'setMaxLength', 'isReadOnly']);
      return l.createElement(
        ys,
        Te(re(re(re({}, k), b), y), { type: 'radio', testId: i, ref: e }),
        c
      );
    },
    Q0 = l.forwardRef(Z0),
    J0 = (t, e) => {
      let n = t,
        { children: i, testId: r = 'cf-ui-radio-group' } = n,
        s = xe(n, ['children', 'testId']);
      return l.createElement(Ko, re({ ref: e, testId: r, type: 'radio' }, s), i);
    },
    _0 = l.forwardRef(J0),
    ef = Q0;
  ef.Group = _0;
  var tf = ({ size: t }) =>
      t === 'small'
        ? { padding: `${f.spacing2Xs} ${f.spacingXs}`, height: '32px', maxHeight: '32px' }
        : { height: '40px', maxHeight: '40px' },
    _o = ({ isDisabled: t, isInvalid: e, zIndexBase: n = f.zIndexDefault }) => (t || e ? n + 1 : n),
    nf = ({ as: t, isDisabled: e, isInvalid: n, size: i, resize: r }) => ({
      rootComponentWithIcon: R({
        position: 'relative',
        display: 'flex',
        width: '100%',
        zIndex: _o({ isDisabled: e, isInvalid: n }),
      }),
      input: R(
        Te(
          re(
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
              zIndex: _o({ isDisabled: e, isInvalid: n }),
            },
            t === 'textarea' ? { resize: r } : tf({ size: i })
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
      inputWithIcon: R({ paddingLeft: i === 'small' ? f.spacingXl : '38px' }),
      iconPlaceholder: R({
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
    rf = nf,
    sf = 'input';
  function el(t, e) {
    let n = t,
      {
        as: i = sf,
        className: r,
        isDisabled: s,
        isReadOnly: a,
        isRequired: o,
        isInvalid: c,
        id: h,
        name: d,
        onBlur: u,
        onChange: p,
        onFocus: m,
        onKeyDown: g,
        testId: b = 'cf-ui-base-input',
        type: v = 'text',
        value: y = void 0,
        placeholder: w,
        willBlurOnEsc: k = !0,
        style: S,
        icon: M,
        defaultValue: O,
        size: C = 'medium',
        resize: L = 'vertical',
      } = n,
      T = xe(n, [
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
      I = rf({ as: i, isDisabled: s, isInvalid: c, size: C, resize: L }),
      P = l.useCallback(
        (X) => {
          X.persist(), m && m(X);
        },
        [m]
      ),
      B = l.useCallback(
        (X) => {
          X.persist(), !(s || a) && p && p(X);
        },
        [p, s, a]
      ),
      j = l.useCallback(
        (X) => {
          X.persist(), g && g(X), X.nativeEvent.code === 'Escape' && k && X.currentTarget.blur();
        },
        [k, g]
      ),
      q =
        M &&
        l.createElement(
          He,
          { as: 'span', className: I.iconPlaceholder },
          l.cloneElement(M, {
            size: C === 'small' ? 'tiny' : 'small',
            variant: 'muted',
            'aria-hidden': !0,
          })
        ),
      N = i,
      U = (X) =>
        l.createElement(
          N,
          Te(re({}, T), {
            value: y,
            defaultValue: O,
            'data-test-id': b,
            style: S,
            placeholder: w,
            className: Q(I.input, X, r),
            name: d,
            type: v,
            ref: e,
            id: h,
            readOnly: a,
            'aria-readonly': a ? 'true' : void 0,
            'aria-required': o ? 'true' : void 0,
            'aria-invalid': c ? 'true' : void 0,
            'aria-describedby': h ? `${h}-${c ? 'validation' : 'helptext'}` : void 0,
            disabled: s,
            required: o,
            onChange: B,
            onBlur: u,
            onKeyDown: j,
            onFocus: P,
            size: C,
          })
        );
    return M
      ? l.createElement(
          He,
          { as: 'div', className: I.rootComponentWithIcon },
          U(I.inputWithIcon),
          q
        )
      : U();
  }
  el.displayName = 'BaseInput';
  var tl = l.forwardRef(el),
    af = (t, e) => {
      var n = t,
        {
          className: i,
          testId: r = 'cf-ui-text-input',
          id: s,
          value: a,
          defaultValue: o,
          onChange: c,
          onFocus: h,
          isInvalid: d,
          isDisabled: u,
          isRequired: p,
          isReadOnly: m,
          size: g = 'medium',
          maxLength: b,
        } = n,
        v = xe(n, [
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
      let y = yt({ id: s, isInvalid: d, isDisabled: u, isRequired: p, isReadOnly: m }),
        { setMaxLength: w, maxLength: k, setInputValue: S, inputValue: M } = y,
        O = xe(y, ['setMaxLength', 'maxLength', 'setInputValue', 'inputValue']);
      l.useEffect(() => {
        var I;
        b !== void 0 && typeof w == 'function' && (w(b), S((I = a ?? o) != null ? I : ''));
      }, [b, w, S, o, a]);
      let C = (I) => {
          typeof S == 'function' && S(I.target.value), c == null || c(I);
        },
        L = l.useRef(null),
        T = e || L;
      return l.createElement(
        tl,
        Te(re(re({ type: 'text' }, v), O), {
          testId: r,
          ref: T,
          onChange: b ? C : c,
          onFocus: h,
          as: 'input',
          className: i,
          value: a,
          defaultValue: o,
          size: g,
          maxLength: b,
        })
      );
    },
    of = l.forwardRef(af),
    lf = ({ spacing: t }) => {
      if (t === 'none')
        return R({
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
    cf = ({ spacing: t }) => ({ inputGroup: lf({ spacing: t }) }),
    hf = (t, e) => {
      let n = t,
        { children: i, className: r, spacing: s = 'none' } = n,
        a = xe(n, ['children', 'className', 'spacing']),
        o = cf({ spacing: s });
      return l.createElement(
        us,
        Te(re({}, a), { spacing: s, ref: e, fullWidth: !0, className: Q(o.inputGroup, r) }),
        i
      );
    },
    df = l.forwardRef(hf),
    nl = of;
  nl.Group = df;
  var uf = (t, e) => {
    let n = t,
      {
        testId: i = 'cf-ui-switch',
        id: r,
        isDisabled: s,
        isInvalid: a,
        isRequired: o,
        children: c,
      } = n,
      h = xe(n, ['testId', 'id', 'isDisabled', 'isInvalid', 'isRequired', 'children']),
      d = yt({ id: r, isDisabled: s, isInvalid: a, isRequired: o }),
      u = xe(d, ['inputValue', 'setInputValue', 'maxLength', 'setMaxLength', 'isReadOnly']);
    return l.createElement(ys, Te(re(re({}, u), h), { testId: i, type: 'switch', ref: e }), c);
  };
  l.forwardRef(uf);
  var ff = () => ({
      error: R({ '&:focus': { borderColor: f.colorNegative, boxShadow: f.glowNegative } }),
      disabled: R({ '&:focus': { borderColor: f.gray300, boxShadow: 'none' } }),
    }),
    pf = (t, e) => {
      var n = t,
        {
          className: i,
          isDisabled: r,
          isInvalid: s,
          isRequired: a,
          isReadOnly: o,
          onChange: c,
          testId: h = 'cf-ui-textarea',
          id: d,
          resize: u = 'vertical',
          maxLength: p,
          value: m,
          defaultValue: g,
        } = n,
        b = xe(n, [
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
      let v = ff(),
        y = yt({ id: d, isInvalid: s, isDisabled: r, isRequired: a, isReadOnly: o }),
        { setMaxLength: w, maxLength: k, setInputValue: S, inputValue: M } = y,
        O = xe(y, ['setMaxLength', 'maxLength', 'setInputValue', 'inputValue']);
      l.useEffect(() => {
        var L;
        p !== void 0 && typeof w == 'function' && (w(p), S((L = m ?? g) != null ? L : ''));
      }, [g, p, S, w, m]);
      let C = (L) => {
        typeof S == 'function' && S(L.target.value), c == null || c(L);
      };
      return l.createElement(
        tl,
        Te(re(re({}, b), O), {
          defaultValue: g,
          value: m,
          testId: h,
          as: 'textarea',
          ref: e,
          className: Q(i, { [v.disabled]: r, [v.error]: s }),
          maxLength: p,
          resize: u,
          onChange: p ? C : c,
        })
      );
    };
  l.forwardRef(pf);
  var mf = (t) => {
    var e = t,
      { testId: n = 'cf-ui-select-option', isDisabled: i } = e,
      r = xe(e, ['testId', 'isDisabled']);
    return l.createElement('option', Te(re({ 'data-test-id': n }, r), { disabled: i }));
  };
  function gf({ isInvalid: t, isDisabled: e, size: n }) {
    let i =
        n === 'small'
          ? { padding: `${f.spacing2Xs} ${f.spacingXs}`, height: '32px' }
          : { padding: `10px ${f.spacingL} 10px ${f.spacingS}`, height: '40px' },
      r = R({
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
      s = R({
        backgroundColor: f.gray100,
        cursor: 'not-allowed',
        color: f.gray600,
        '&:focus, &:active': { borderColor: f.gray300 },
      }),
      a = R({
        borderColor: e ? f.red300 : f.red600,
        '&:focus': { borderColor: f.red600, boxShadow: f.glowNegative },
      });
    return {
      wrapper: R({ position: 'relative', display: 'block', width: 'auto' }),
      select: R([r, i, e && s, t && a]),
      icon: R({
        position: 'absolute',
        right: f.spacingXs,
        top: '50%',
        marginTop: '-8px',
        pointerEvents: 'none',
      }),
    };
  }
  var vf = (t, e) => {
      var n = t,
        {
          id: i,
          children: r,
          className: s,
          isInvalid: a,
          isDisabled: o,
          isRequired: c,
          testId: h = 'cf-ui-select',
          willBlurOnEsc: d = !0,
          onKeyDown: u,
          size: p = 'medium',
          value: m = void 0,
          defaultValue: g = void 0,
        } = n,
        b = xe(n, [
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
      let v = yt({ isDisabled: o, isInvalid: a, isRequired: c, id: i }),
        y = gf({ isDisabled: v.isDisabled, isInvalid: v.isInvalid, size: p }),
        w = l.useCallback(
          (k) => {
            k.nativeEvent.code === 'Escape' && d && k.currentTarget.blur(), u && u(k);
          },
          [u, d]
        );
      return l.createElement(
        'div',
        { className: Q(y.wrapper, s) },
        l.createElement(
          'select',
          Te(re({}, b), {
            id: v.id,
            'data-test-id': h,
            className: y.select,
            onKeyDown: w,
            required: v.isRequired,
            'aria-required': v.isRequired ? 'true' : void 0,
            'aria-invalid': v.isInvalid ? !0 : void 0,
            'aria-describedby': v.id
              ? `${v.id}-${v.isInvalid ? 'validation' : 'helptext'}`
              : void 0,
            disabled: v.isDisabled,
            defaultValue: g,
            value: m,
            ref: e,
          }),
          r
        ),
        l.createElement(Xu, { className: y.icon, variant: 'muted' })
      );
    },
    bf = l.forwardRef(vf),
    yf = bf;
  yf.Option = mf;
  function il(t, e) {
    var n = t,
      { children: i, onSubmit: r, testId: s = 'cf-ui-form-label' } = n,
      a = xe(n, ['children', 'onSubmit', 'testId']);
    let o = l.useCallback(
      (c) => {
        c.preventDefault(), r && r(c);
      },
      [r]
    );
    return l.createElement('form', re({ ref: e, 'data-test-id': s, onSubmit: o }, a), i);
  }
  il.displayName = 'Form';
  var xf = l.forwardRef(il),
    wf = Object.defineProperty,
    Ef = Object.defineProperties,
    Cf = Object.getOwnPropertyDescriptors,
    Ui = Object.getOwnPropertySymbols,
    rl = Object.prototype.hasOwnProperty,
    sl = Object.prototype.propertyIsEnumerable,
    al = (t, e, n) =>
      e in t ? wf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    Xt = (t, e) => {
      for (var n in e || (e = {})) rl.call(e, n) && al(t, n, e[n]);
      if (Ui) for (var n of Ui(e)) sl.call(e, n) && al(t, n, e[n]);
      return t;
    },
    an = (t, e) => Ef(t, Cf(e)),
    Jn = (t, e) => {
      var n = {};
      for (var i in t) rl.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && Ui) for (var i of Ui(t)) e.indexOf(i) < 0 && sl.call(t, i) && (n[i] = t[i]);
      return n;
    },
    Mf = () => ({
      inline: R({
        borderRadius: f.borderRadiusMedium,
        boxShadow: `0 0 0 1px ${f.gray200}`,
        'th:first-child': { borderTopLeftRadius: f.borderRadiusMedium },
        'th:last-child': { borderTopRightRadius: f.borderRadiusMedium },
        'tr:last-child td:first-child': { borderBottomLeftRadius: f.borderRadiusMedium },
        'tr:last-child td:last-child': { borderBottomRightRadius: f.borderRadiusMedium },
      }),
      embedded: R({ borderBottom: `1px solid ${f.gray200}` }),
      root: R({ width: '100%' }),
    }),
    ol = l.createContext({}),
    Sf = () => l.useContext(ol),
    kf = ol.Provider,
    ll = l.forwardRef((t, e) => {
      var n = t,
        {
          children: i,
          className: r,
          layout: s = 'inline',
          testId: a = 'cf-ui-table',
          verticalAlign: o = 'top',
        } = n,
        c = Jn(n, ['children', 'className', 'layout', 'testId', 'verticalAlign']);
      let h = Mf();
      return l.createElement(
        He,
        an(Xt({ cellPadding: '0', cellSpacing: '0' }, c), {
          as: 'table',
          display: 'table',
          ref: e,
          className: Q(h.root, h[s], r),
          testId: a,
        }),
        l.createElement(kf, { value: { verticalAlign: o } }, i)
      );
    });
  ll.displayName = 'Table';
  function cl(t, e) {
    var n = t,
      { className: i, children: r, testId: s = 'cf-ui-table-body' } = n,
      a = Jn(n, ['className', 'children', 'testId']);
    return l.createElement(He, an(Xt({}, a), { as: 'tbody', className: i, ref: e, testId: s }), r);
  }
  cl.displayName = 'TableBody';
  var zf = l.forwardRef(cl),
    hl = {
      body: { name: 'body', as: 'td', offsetTop: 0 },
      head: { name: 'head', as: 'th', offsetTop: 0 },
    },
    dl = l.createContext(hl.body),
    Of = () => l.useContext(dl),
    Lf = dl.Provider,
    Rf = ({ align: t, isSortable: e, isTableHead: n, sortDirection: i, verticalAlign: r }) => ({
      button: R({
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
      container: R({
        backgroundColor: f.colorWhite,
        borderBottom: `1px solid ${f.gray200}`,
        padding: e ? 0 : f.spacingS,
        textAlign: t,
        color: f.gray700,
        fontWeight: n ? f.fontWeightMedium : f.fontWeightNormal,
        verticalAlign: r,
      }),
      sortIcon: (s) =>
        R({
          fill: f.gray400,
          opacity: s ? 1 : 0,
          transition: `opacity ${f.transitionEasingCubicBezier} ${f.transitionDurationDefault}`,
        }),
    });
  function If(t) {
    return l.isValidElement(t) && !!t.props.children;
  }
  function ul(t) {
    let e = '';
    return (
      l.Children.toArray(t).map((n) => {
        l.isValidElement(n) && If(n)
          ? (e += ul(n.props.children))
          : (typeof n == 'string' || typeof n == 'number') && (e = `${e}${n}`);
      }),
      e
    );
  }
  var Df = ((t) => ((t.Ascending = 'ascending'), (t.Descending = 'descending'), t))(Df || {}),
    Af = { ascending: Qu, descending: Ju };
  function fl(t, e) {
    var n = t,
      {
        align: i = 'left',
        children: r,
        className: s,
        isSortable: a,
        sortDirection: o,
        testId: c = 'cf-ui-table-cell',
      } = n,
      h = Jn(n, ['align', 'children', 'className', 'isSortable', 'sortDirection', 'testId']);
    let [d, u] = l.useState(!1),
      { as: p, name: m, offsetTop: g } = Of(),
      { verticalAlign: b } = Sf(),
      v = Af[o],
      y = m === 'head',
      w = Rf({
        isSortable: y ? a : void 0,
        sortDirection: o,
        isTableHead: y,
        align: i,
        verticalAlign: b,
      }),
      k = y ? fo : je,
      S = a
        ? {
            'aria-sort': o ?? 'none',
            onBlur: () => u(!1),
            onFocus: () => u(!0),
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
          }
        : {},
      M = l.useMemo(() => ul(r), [r]),
      O = r;
    return (
      a &&
        (O = l.createElement(
          'button',
          {
            'aria-label': `Sort ${o === 'ascending' ? 'descending' : 'ascending'} by ${M}`,
            className: w.button,
            type: 'button',
          },
          r,
          o
            ? l.createElement(v, { size: 'tiny', variant: 'secondary' })
            : l.createElement(Zu, {
                'aria-hidden': !d,
                className: w.sortIcon(d),
                size: 'tiny',
                variant: 'secondary',
              })
        )),
      l.createElement(
        k,
        an(Xt(Xt({}, h), S), {
          as: p,
          className: Q(w.container, s),
          ref: e,
          style: an(Xt({}, h.style), { top: g || void 0 }),
          testId: c,
        }),
        O
      )
    );
  }
  fl.displayName = 'TableCell';
  var pl = l.forwardRef(fl),
    Tf = () => ({ sticky: R({ th: { position: 'sticky', top: 0, zIndex: f.zIndexDefault } }) }),
    ml = l.forwardRef((t, e) => {
      var n = t,
        {
          children: i,
          className: r,
          isSticky: s = !1,
          offsetTop: a,
          testId: o = 'cf-ui-table-head',
        } = n,
        c = Jn(n, ['children', 'className', 'isSticky', 'offsetTop', 'testId']);
      let h = Tf(),
        d = Q(s && h.sticky, r);
      return l.createElement(
        Lf,
        { value: an(Xt({}, hl.head), { offsetTop: a || 0 }) },
        l.createElement(He, an(Xt({}, c), { as: 'thead', className: d, ref: e, testId: o }), i)
      );
    });
  ml.displayName = 'TableHead';
  var Pf = () => ({
      root: R({
        '&:last-child td': { borderBottom: 'none' },
        '&:hover td': { backgroundColor: f.gray100 },
      }),
      selected: R({
        'td, th': { backgroundColor: f.blue100 },
        'td:last-child': { boxShadow: `inset -2px 0 0 ${f.blue500}` },
      }),
    }),
    xs = l.forwardRef((t, e) => {
      var n = t,
        { className: i, children: r, isSelected: s = !1, testId: a = 'cf-ui-table-row' } = n,
        o = Jn(n, ['className', 'children', 'isSelected', 'testId']);
      let c = Pf();
      return l.createElement(
        He,
        an(Xt({}, o), {
          as: 'tr',
          className: Q(c.root, { [c.selected]: s }, i),
          ref: e,
          testId: a,
        }),
        r
      );
    });
  xs.displayName = 'TableRow';
  var qi = ll;
  (qi.Row = xs), (qi.Head = ml), (qi.Cell = pl), (qi.Body = zf);
  var Hf = Object.defineProperty,
    Gi = Object.getOwnPropertySymbols,
    gl = Object.prototype.hasOwnProperty,
    vl = Object.prototype.propertyIsEnumerable,
    bl = (t, e, n) =>
      e in t ? Hf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    Ki = (t, e) => {
      for (var n in e || (e = {})) gl.call(e, n) && bl(t, n, e[n]);
      if (Gi) for (var n of Gi(e)) vl.call(e, n) && bl(t, n, e[n]);
      return t;
    },
    Zi = (t, e) => {
      var n = {};
      for (var i in t) gl.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && Gi) for (var i of Gi(t)) e.indexOf(i) < 0 && vl.call(t, i) && (n[i] = t[i]);
      return n;
    },
    Ff = (t) => {
      var e = t,
        {
          lineHeight: n = 16,
          marginBottom: i = 8,
          numberOfLines: r = 2,
          offsetLeft: s = 0,
          offsetTop: a = 0,
        } = e,
        o = Zi(e, ['lineHeight', 'marginBottom', 'numberOfLines', 'offsetLeft', 'offsetTop']);
      return l.createElement(
        Je.Text,
        Ki(
          {
            lineHeight: n,
            marginBottom: i,
            numberOfLines: r > 0 ? r : 1,
            offsetLeft: s,
            offsetTop: a,
          },
          o
        )
      );
    },
    yl = (t) => {
      var e = t,
        {
          children: n,
          testId: i = 'cf-ui-skeleton-form',
          ariaLabel: r = 'Loading component...',
          width: s = '100%',
          height: a = '100%',
          preserveAspectRatio: o,
          backgroundColor: c = '#e5ebed',
          backgroundOpacity: h = 1,
          isAnimated: d = !0,
          speed: u = 2,
          foregroundColor: p = '#f7f9fa',
          foregroundOpacity: m = 1,
          svgWidth: g = '100%',
          svgHeight: b = '100%',
          clipId: v,
          gradientId: y,
          animateId: w,
        } = e,
        k = Zi(e, [
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
      let S = Dt(v, 'cf-ui-skeleton-clip'),
        M = Dt(y, 'cf-ui-skeleton-clip-gradient'),
        O = Dt(void 0, 'animation'),
        C = w || O;
      return l.createElement(
        He,
        Ki(
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
          k
        ),
        r ? l.createElement('title', null, r) : null,
        l.createElement('rect', {
          x: '0',
          y: '0',
          width: s,
          height: a,
          clipPath: `url(#${S})`,
          style: { fill: `url(#${M})` },
        }),
        l.createElement(
          'defs',
          null,
          l.createElement('clipPath', { id: S }, n),
          l.createElement(
            'linearGradient',
            { id: M },
            l.createElement(
              'stop',
              { offset: '0%', stopColor: c, stopOpacity: h },
              d &&
                l.createElement('animate', {
                  id: C,
                  attributeName: 'stop-color',
                  values: `${c}; ${p}; ${c}`,
                  dur: `${u}s`,
                  repeatCount: 'indefinite',
                })
            ),
            l.createElement(
              'stop',
              { offset: '50%', stopColor: p, stopOpacity: m },
              d &&
                l.createElement('animate', {
                  attributeName: 'stop-color',
                  values: `${c}; ${p}; ${c}`,
                  begin: `${C}.begin+0.25s`,
                  dur: `${u}s`,
                  repeatCount: 'indefinite',
                })
            ),
            l.createElement(
              'stop',
              { offset: '100%', stopColor: c, stopOpacity: h },
              d &&
                l.createElement('animate', {
                  attributeName: 'stop-color',
                  begin: `${C}.begin+0.5s`,
                  values: `${c}; ${p}; ${c}`,
                  dur: `${u}s`,
                  repeatCount: 'indefinite',
                })
            )
          )
        )
      );
    };
  yl.displayName = 'SkeletonContainer';
  var xl = (t) => {
    var e = t,
      {
        lineHeight: n = 21,
        marginBottom: i = 20,
        numberOfLines: r = 1,
        offsetLeft: s = 0,
        offsetTop: a = 0,
        width: o = 100,
      } = e,
      c = Zi(e, [
        'lineHeight',
        'marginBottom',
        'numberOfLines',
        'offsetLeft',
        'offsetTop',
        'width',
      ]);
    return l.createElement(
      Je.Text,
      Ki(
        { lineHeight: n, marginBottom: i, numberOfLines: r, offsetLeft: s, offsetTop: a, width: o },
        c
      )
    );
  };
  xl.displayName = 'SkeletonDisplayText';
  var wl = (t) => {
    var e = t,
      {
        testId: n = 'cf-ui-skeleton-image',
        offsetLeft: i,
        offsetTop: r,
        width: s = 70,
        height: a = 70,
        radiusX: o = f.borderRadiusSmall,
        radiusY: c = f.borderRadiusSmall,
      } = e,
      h = Zi(e, ['testId', 'offsetLeft', 'offsetTop', 'width', 'height', 'radiusX', 'radiusY']);
    return l.createElement(
      'rect',
      Ki({ x: i, y: r, rx: o, ry: c, width: s, height: a, 'data-test-id': n }, h)
    );
  };
  wl.displayName = 'SkeletonImage';
  var Vf = () =>
      l.createElement(
        pl,
        null,
        l.createElement(
          Je.Container,
          { svgHeight: 16 },
          l.createElement(Je.BodyText, { numberOfLines: 1 })
        )
      ),
    Bf = ({ columnCount: t = 5, rowCount: e = 1 }) =>
      l.createElement(
        l.Fragment,
        null,
        Array.from(Array(e)).map((n, i) =>
          l.createElement(
            xs,
            { key: i },
            Array.from(Array(t)).map((r, s) => l.createElement(Vf, { key: s }))
          )
        )
      ),
    El = ({
      numberOfLines: t = 1,
      offsetLeft: e = 0,
      offsetTop: n = 0,
      lineHeight: i = 21,
      marginBottom: r = 20,
      radiusX: s = f.borderRadiusSmall,
      radiusY: a = f.borderRadiusSmall,
      width: o,
    }) => {
      let c = l.useCallback((h) => o || (h ? '80%' : '100%'), [o]);
      return l.createElement(
        l.Fragment,
        null,
        Array.from(Array(t)).map((h, d) =>
          l.createElement('rect', {
            key: `skeleton-display-text-${d}`,
            x: e,
            y: d * (+i + +r) + +n,
            rx: s,
            ry: a,
            width: c(t > 1 && t - d === 1),
            height: i,
          })
        )
      );
    };
  El.displayName = 'SkeletonText';
  var Je = {};
  (Je.BodyText = Ff),
    (Je.Container = yl),
    (Je.DisplayText = xl),
    (Je.Image = wl),
    (Je.Row = Bf),
    (Je.Text = El);
  var Cl = function (e) {
      return e.reduce(function (n, i) {
        var r = i[0],
          s = i[1];
        return (n[r] = s), n;
      }, {});
    },
    Ml =
      typeof window < 'u' && window.document && window.document.createElement
        ? G.useLayoutEffect
        : G.useEffect,
    Ue = 'top',
    ot = 'bottom',
    lt = 'right',
    qe = 'left',
    Qi = 'auto',
    _n = [Ue, ot, lt, qe],
    On = 'start',
    ei = 'end',
    Nf = 'clippingParents',
    Sl = 'viewport',
    ti = 'popper',
    $f = 'reference',
    kl = _n.reduce(function (t, e) {
      return t.concat([e + '-' + On, e + '-' + ei]);
    }, []),
    zl = [].concat(_n, [Qi]).reduce(function (t, e) {
      return t.concat([e, e + '-' + On, e + '-' + ei]);
    }, []),
    jf = 'beforeRead',
    Wf = 'read',
    Xf = 'afterRead',
    Yf = 'beforeMain',
    Uf = 'main',
    qf = 'afterMain',
    Gf = 'beforeWrite',
    Kf = 'write',
    Zf = 'afterWrite',
    ws = [jf, Wf, Xf, Yf, Uf, qf, Gf, Kf, Zf];
  function zt(t) {
    return t ? (t.nodeName || '').toLowerCase() : null;
  }
  function _e(t) {
    if (t == null) return window;
    if (t.toString() !== '[object Window]') {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function on(t) {
    var e = _e(t).Element;
    return t instanceof e || t instanceof Element;
  }
  function et(t) {
    var e = _e(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
  }
  function Es(t) {
    if (typeof ShadowRoot > 'u') return !1;
    var e = _e(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
  }
  function Qf(t) {
    var e = t.state;
    Object.keys(e.elements).forEach(function (n) {
      var i = e.styles[n] || {},
        r = e.attributes[n] || {},
        s = e.elements[n];
      !et(s) ||
        !zt(s) ||
        (Object.assign(s.style, i),
        Object.keys(r).forEach(function (a) {
          var o = r[a];
          o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? '' : o);
        }));
    });
  }
  function Jf(t) {
    var e = t.state,
      n = {
        popper: { position: e.options.strategy, left: '0', top: '0', margin: '0' },
        arrow: { position: 'absolute' },
        reference: {},
      };
    return (
      Object.assign(e.elements.popper.style, n.popper),
      (e.styles = n),
      e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
      function () {
        Object.keys(e.elements).forEach(function (i) {
          var r = e.elements[i],
            s = e.attributes[i] || {},
            a = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]),
            o = a.reduce(function (c, h) {
              return (c[h] = ''), c;
            }, {});
          !et(r) ||
            !zt(r) ||
            (Object.assign(r.style, o),
            Object.keys(s).forEach(function (c) {
              r.removeAttribute(c);
            }));
        });
      }
    );
  }
  const _f = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: Qf,
    effect: Jf,
    requires: ['computeStyles'],
  };
  function xt(t) {
    return t.split('-')[0];
  }
  var ln = Math.max,
    Ji = Math.min,
    Ln = Math.round;
  function Cs() {
    var t = navigator.userAgentData;
    return t != null && t.brands && Array.isArray(t.brands)
      ? t.brands
          .map(function (e) {
            return e.brand + '/' + e.version;
          })
          .join(' ')
      : navigator.userAgent;
  }
  function Ol() {
    return !/^((?!chrome|android).)*safari/i.test(Cs());
  }
  function Rn(t, e, n) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    var i = t.getBoundingClientRect(),
      r = 1,
      s = 1;
    e &&
      et(t) &&
      ((r = (t.offsetWidth > 0 && Ln(i.width) / t.offsetWidth) || 1),
      (s = (t.offsetHeight > 0 && Ln(i.height) / t.offsetHeight) || 1));
    var a = on(t) ? _e(t) : window,
      o = a.visualViewport,
      c = !Ol() && n,
      h = (i.left + (c && o ? o.offsetLeft : 0)) / r,
      d = (i.top + (c && o ? o.offsetTop : 0)) / s,
      u = i.width / r,
      p = i.height / s;
    return { width: u, height: p, top: d, right: h + u, bottom: d + p, left: h, x: h, y: d };
  }
  function Ms(t) {
    var e = Rn(t),
      n = t.offsetWidth,
      i = t.offsetHeight;
    return (
      Math.abs(e.width - n) <= 1 && (n = e.width),
      Math.abs(e.height - i) <= 1 && (i = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
    );
  }
  function Ll(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && Es(n)) {
      var i = e;
      do {
        if (i && t.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function wt(t) {
    return _e(t).getComputedStyle(t);
  }
  function ep(t) {
    return ['table', 'td', 'th'].indexOf(zt(t)) >= 0;
  }
  function Yt(t) {
    return ((on(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function _i(t) {
    return zt(t) === 'html'
      ? t
      : t.assignedSlot || t.parentNode || (Es(t) ? t.host : null) || Yt(t);
  }
  function Rl(t) {
    return !et(t) || wt(t).position === 'fixed' ? null : t.offsetParent;
  }
  function tp(t) {
    var e = /firefox/i.test(Cs()),
      n = /Trident/i.test(Cs());
    if (n && et(t)) {
      var i = wt(t);
      if (i.position === 'fixed') return null;
    }
    var r = _i(t);
    for (Es(r) && (r = r.host); et(r) && ['html', 'body'].indexOf(zt(r)) < 0; ) {
      var s = wt(r);
      if (
        s.transform !== 'none' ||
        s.perspective !== 'none' ||
        s.contain === 'paint' ||
        ['transform', 'perspective'].indexOf(s.willChange) !== -1 ||
        (e && s.willChange === 'filter') ||
        (e && s.filter && s.filter !== 'none')
      )
        return r;
      r = r.parentNode;
    }
    return null;
  }
  function ni(t) {
    for (var e = _e(t), n = Rl(t); n && ep(n) && wt(n).position === 'static'; ) n = Rl(n);
    return n && (zt(n) === 'html' || (zt(n) === 'body' && wt(n).position === 'static'))
      ? e
      : n || tp(t) || e;
  }
  function Ss(t) {
    return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
  }
  function ii(t, e, n) {
    return ln(t, Ji(e, n));
  }
  function np(t, e, n) {
    var i = ii(t, e, n);
    return i > n ? n : i;
  }
  function Il() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function Dl(t) {
    return Object.assign({}, Il(), t);
  }
  function Al(t, e) {
    return e.reduce(function (n, i) {
      return (n[i] = t), n;
    }, {});
  }
  var ip = function (e, n) {
    return (
      (e = typeof e == 'function' ? e(Object.assign({}, n.rects, { placement: n.placement })) : e),
      Dl(typeof e != 'number' ? e : Al(e, _n))
    );
  };
  function rp(t) {
    var e,
      n = t.state,
      i = t.name,
      r = t.options,
      s = n.elements.arrow,
      a = n.modifiersData.popperOffsets,
      o = xt(n.placement),
      c = Ss(o),
      h = [qe, lt].indexOf(o) >= 0,
      d = h ? 'height' : 'width';
    if (!(!s || !a)) {
      var u = ip(r.padding, n),
        p = Ms(s),
        m = c === 'y' ? Ue : qe,
        g = c === 'y' ? ot : lt,
        b = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d],
        v = a[c] - n.rects.reference[c],
        y = ni(s),
        w = y ? (c === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
        k = b / 2 - v / 2,
        S = u[m],
        M = w - p[d] - u[g],
        O = w / 2 - p[d] / 2 + k,
        C = ii(S, O, M),
        L = c;
      n.modifiersData[i] = ((e = {}), (e[L] = C), (e.centerOffset = C - O), e);
    }
  }
  function sp(t) {
    var e = t.state,
      n = t.options,
      i = n.element,
      r = i === void 0 ? '[data-popper-arrow]' : i;
    if (r != null && !(typeof r == 'string' && ((r = e.elements.popper.querySelector(r)), !r))) {
      if (
        (process.env.NODE_ENV !== 'production' &&
          (et(r) ||
            console.error(
              [
                'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
                'the arrow.',
              ].join(' ')
            )),
        !Ll(e.elements.popper, r))
      ) {
        process.env.NODE_ENV !== 'production' &&
          console.error(
            [
              'Popper: "arrow" modifier\'s `element` must be a child of the popper',
              'element.',
            ].join(' ')
          );
        return;
      }
      e.elements.arrow = r;
    }
  }
  const ap = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: rp,
    effect: sp,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  };
  function In(t) {
    return t.split('-')[1];
  }
  var op = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
  function lp(t, e) {
    var n = t.x,
      i = t.y,
      r = e.devicePixelRatio || 1;
    return { x: Ln(n * r) / r || 0, y: Ln(i * r) / r || 0 };
  }
  function Tl(t) {
    var e,
      n = t.popper,
      i = t.popperRect,
      r = t.placement,
      s = t.variation,
      a = t.offsets,
      o = t.position,
      c = t.gpuAcceleration,
      h = t.adaptive,
      d = t.roundOffsets,
      u = t.isFixed,
      p = a.x,
      m = p === void 0 ? 0 : p,
      g = a.y,
      b = g === void 0 ? 0 : g,
      v = typeof d == 'function' ? d({ x: m, y: b }) : { x: m, y: b };
    (m = v.x), (b = v.y);
    var y = a.hasOwnProperty('x'),
      w = a.hasOwnProperty('y'),
      k = qe,
      S = Ue,
      M = window;
    if (h) {
      var O = ni(n),
        C = 'clientHeight',
        L = 'clientWidth';
      if (
        (O === _e(n) &&
          ((O = Yt(n)),
          wt(O).position !== 'static' &&
            o === 'absolute' &&
            ((C = 'scrollHeight'), (L = 'scrollWidth'))),
        (O = O),
        r === Ue || ((r === qe || r === lt) && s === ei))
      ) {
        S = ot;
        var T = u && O === M && M.visualViewport ? M.visualViewport.height : O[C];
        (b -= T - i.height), (b *= c ? 1 : -1);
      }
      if (r === qe || ((r === Ue || r === ot) && s === ei)) {
        k = lt;
        var I = u && O === M && M.visualViewport ? M.visualViewport.width : O[L];
        (m -= I - i.width), (m *= c ? 1 : -1);
      }
    }
    var P = Object.assign({ position: o }, h && op),
      B = d === !0 ? lp({ x: m, y: b }, _e(n)) : { x: m, y: b };
    if (((m = B.x), (b = B.y), c)) {
      var j;
      return Object.assign(
        {},
        P,
        ((j = {}),
        (j[S] = w ? '0' : ''),
        (j[k] = y ? '0' : ''),
        (j.transform =
          (M.devicePixelRatio || 1) <= 1
            ? 'translate(' + m + 'px, ' + b + 'px)'
            : 'translate3d(' + m + 'px, ' + b + 'px, 0)'),
        j)
      );
    }
    return Object.assign(
      {},
      P,
      ((e = {}), (e[S] = w ? b + 'px' : ''), (e[k] = y ? m + 'px' : ''), (e.transform = ''), e)
    );
  }
  function cp(t) {
    var e = t.state,
      n = t.options,
      i = n.gpuAcceleration,
      r = i === void 0 ? !0 : i,
      s = n.adaptive,
      a = s === void 0 ? !0 : s,
      o = n.roundOffsets,
      c = o === void 0 ? !0 : o;
    if (process.env.NODE_ENV !== 'production') {
      var h = wt(e.elements.popper).transitionProperty || '';
      a &&
        ['transform', 'top', 'right', 'bottom', 'left'].some(function (u) {
          return h.indexOf(u) >= 0;
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
    var d = {
      placement: xt(e.placement),
      variation: In(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: r,
      isFixed: e.options.strategy === 'fixed',
    };
    e.modifiersData.popperOffsets != null &&
      (e.styles.popper = Object.assign(
        {},
        e.styles.popper,
        Tl(
          Object.assign({}, d, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: a,
            roundOffsets: c,
          })
        )
      )),
      e.modifiersData.arrow != null &&
        (e.styles.arrow = Object.assign(
          {},
          e.styles.arrow,
          Tl(
            Object.assign({}, d, {
              offsets: e.modifiersData.arrow,
              position: 'absolute',
              adaptive: !1,
              roundOffsets: c,
            })
          )
        )),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, {
        'data-popper-placement': e.placement,
      }));
  }
  const hp = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: cp, data: {} };
  var er = { passive: !0 };
  function dp(t) {
    var e = t.state,
      n = t.instance,
      i = t.options,
      r = i.scroll,
      s = r === void 0 ? !0 : r,
      a = i.resize,
      o = a === void 0 ? !0 : a,
      c = _e(e.elements.popper),
      h = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
      s &&
        h.forEach(function (d) {
          d.addEventListener('scroll', n.update, er);
        }),
      o && c.addEventListener('resize', n.update, er),
      function () {
        s &&
          h.forEach(function (d) {
            d.removeEventListener('scroll', n.update, er);
          }),
          o && c.removeEventListener('resize', n.update, er);
      }
    );
  }
  const up = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: dp,
    data: {},
  };
  var fp = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  function tr(t) {
    return t.replace(/left|right|bottom|top/g, function (e) {
      return fp[e];
    });
  }
  var pp = { start: 'end', end: 'start' };
  function Pl(t) {
    return t.replace(/start|end/g, function (e) {
      return pp[e];
    });
  }
  function ks(t) {
    var e = _e(t),
      n = e.pageXOffset,
      i = e.pageYOffset;
    return { scrollLeft: n, scrollTop: i };
  }
  function zs(t) {
    return Rn(Yt(t)).left + ks(t).scrollLeft;
  }
  function mp(t, e) {
    var n = _e(t),
      i = Yt(t),
      r = n.visualViewport,
      s = i.clientWidth,
      a = i.clientHeight,
      o = 0,
      c = 0;
    if (r) {
      (s = r.width), (a = r.height);
      var h = Ol();
      (h || (!h && e === 'fixed')) && ((o = r.offsetLeft), (c = r.offsetTop));
    }
    return { width: s, height: a, x: o + zs(t), y: c };
  }
  function gp(t) {
    var e,
      n = Yt(t),
      i = ks(t),
      r = (e = t.ownerDocument) == null ? void 0 : e.body,
      s = ln(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
      a = ln(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
      o = -i.scrollLeft + zs(t),
      c = -i.scrollTop;
    return (
      wt(r || n).direction === 'rtl' && (o += ln(n.clientWidth, r ? r.clientWidth : 0) - s),
      { width: s, height: a, x: o, y: c }
    );
  }
  function Os(t) {
    var e = wt(t),
      n = e.overflow,
      i = e.overflowX,
      r = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + i);
  }
  function Hl(t) {
    return ['html', 'body', '#document'].indexOf(zt(t)) >= 0
      ? t.ownerDocument.body
      : et(t) && Os(t)
      ? t
      : Hl(_i(t));
  }
  function ri(t, e) {
    var n;
    e === void 0 && (e = []);
    var i = Hl(t),
      r = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
      s = _e(i),
      a = r ? [s].concat(s.visualViewport || [], Os(i) ? i : []) : i,
      o = e.concat(a);
    return r ? o : o.concat(ri(_i(a)));
  }
  function Ls(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function vp(t, e) {
    var n = Rn(t, !1, e === 'fixed');
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
  function Fl(t, e, n) {
    return e === Sl ? Ls(mp(t, n)) : on(e) ? vp(e, n) : Ls(gp(Yt(t)));
  }
  function bp(t) {
    var e = ri(_i(t)),
      n = ['absolute', 'fixed'].indexOf(wt(t).position) >= 0,
      i = n && et(t) ? ni(t) : t;
    return on(i)
      ? e.filter(function (r) {
          return on(r) && Ll(r, i) && zt(r) !== 'body';
        })
      : [];
  }
  function yp(t, e, n, i) {
    var r = e === 'clippingParents' ? bp(t) : [].concat(e),
      s = [].concat(r, [n]),
      a = s[0],
      o = s.reduce(function (c, h) {
        var d = Fl(t, h, i);
        return (
          (c.top = ln(d.top, c.top)),
          (c.right = Ji(d.right, c.right)),
          (c.bottom = Ji(d.bottom, c.bottom)),
          (c.left = ln(d.left, c.left)),
          c
        );
      }, Fl(t, a, i));
    return (
      (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o
    );
  }
  function Vl(t) {
    var e = t.reference,
      n = t.element,
      i = t.placement,
      r = i ? xt(i) : null,
      s = i ? In(i) : null,
      a = e.x + e.width / 2 - n.width / 2,
      o = e.y + e.height / 2 - n.height / 2,
      c;
    switch (r) {
      case Ue:
        c = { x: a, y: e.y - n.height };
        break;
      case ot:
        c = { x: a, y: e.y + e.height };
        break;
      case lt:
        c = { x: e.x + e.width, y: o };
        break;
      case qe:
        c = { x: e.x - n.width, y: o };
        break;
      default:
        c = { x: e.x, y: e.y };
    }
    var h = r ? Ss(r) : null;
    if (h != null) {
      var d = h === 'y' ? 'height' : 'width';
      switch (s) {
        case On:
          c[h] = c[h] - (e[d] / 2 - n[d] / 2);
          break;
        case ei:
          c[h] = c[h] + (e[d] / 2 - n[d] / 2);
          break;
      }
    }
    return c;
  }
  function si(t, e) {
    e === void 0 && (e = {});
    var n = e,
      i = n.placement,
      r = i === void 0 ? t.placement : i,
      s = n.strategy,
      a = s === void 0 ? t.strategy : s,
      o = n.boundary,
      c = o === void 0 ? Nf : o,
      h = n.rootBoundary,
      d = h === void 0 ? Sl : h,
      u = n.elementContext,
      p = u === void 0 ? ti : u,
      m = n.altBoundary,
      g = m === void 0 ? !1 : m,
      b = n.padding,
      v = b === void 0 ? 0 : b,
      y = Dl(typeof v != 'number' ? v : Al(v, _n)),
      w = p === ti ? $f : ti,
      k = t.rects.popper,
      S = t.elements[g ? w : p],
      M = yp(on(S) ? S : S.contextElement || Yt(t.elements.popper), c, d, a),
      O = Rn(t.elements.reference),
      C = Vl({ reference: O, element: k, strategy: 'absolute', placement: r }),
      L = Ls(Object.assign({}, k, C)),
      T = p === ti ? L : O,
      I = {
        top: M.top - T.top + y.top,
        bottom: T.bottom - M.bottom + y.bottom,
        left: M.left - T.left + y.left,
        right: T.right - M.right + y.right,
      },
      P = t.modifiersData.offset;
    if (p === ti && P) {
      var B = P[r];
      Object.keys(I).forEach(function (j) {
        var q = [lt, ot].indexOf(j) >= 0 ? 1 : -1,
          N = [Ue, ot].indexOf(j) >= 0 ? 'y' : 'x';
        I[j] += B[N] * q;
      });
    }
    return I;
  }
  function xp(t, e) {
    e === void 0 && (e = {});
    var n = e,
      i = n.placement,
      r = n.boundary,
      s = n.rootBoundary,
      a = n.padding,
      o = n.flipVariations,
      c = n.allowedAutoPlacements,
      h = c === void 0 ? zl : c,
      d = In(i),
      u = d
        ? o
          ? kl
          : kl.filter(function (g) {
              return In(g) === d;
            })
        : _n,
      p = u.filter(function (g) {
        return h.indexOf(g) >= 0;
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
      return (g[b] = si(t, { placement: b, boundary: r, rootBoundary: s, padding: a })[xt(b)]), g;
    }, {});
    return Object.keys(m).sort(function (g, b) {
      return m[g] - m[b];
    });
  }
  function wp(t) {
    if (xt(t) === Qi) return [];
    var e = tr(t);
    return [Pl(t), e, Pl(e)];
  }
  function Ep(t) {
    var e = t.state,
      n = t.options,
      i = t.name;
    if (!e.modifiersData[i]._skip) {
      for (
        var r = n.mainAxis,
          s = r === void 0 ? !0 : r,
          a = n.altAxis,
          o = a === void 0 ? !0 : a,
          c = n.fallbackPlacements,
          h = n.padding,
          d = n.boundary,
          u = n.rootBoundary,
          p = n.altBoundary,
          m = n.flipVariations,
          g = m === void 0 ? !0 : m,
          b = n.allowedAutoPlacements,
          v = e.options.placement,
          y = xt(v),
          w = y === v,
          k = c || (w || !g ? [tr(v)] : wp(v)),
          S = [v].concat(k).reduce(function ($, W) {
            return $.concat(
              xt(W) === Qi
                ? xp(e, {
                    placement: W,
                    boundary: d,
                    rootBoundary: u,
                    padding: h,
                    flipVariations: g,
                    allowedAutoPlacements: b,
                  })
                : W
            );
          }, []),
          M = e.rects.reference,
          O = e.rects.popper,
          C = new Map(),
          L = !0,
          T = S[0],
          I = 0;
        I < S.length;
        I++
      ) {
        var P = S[I],
          B = xt(P),
          j = In(P) === On,
          q = [Ue, ot].indexOf(B) >= 0,
          N = q ? 'width' : 'height',
          U = si(e, { placement: P, boundary: d, rootBoundary: u, altBoundary: p, padding: h }),
          X = q ? (j ? lt : qe) : j ? ot : Ue;
        M[N] > O[N] && (X = tr(X));
        var he = tr(X),
          Me = [];
        if (
          (s && Me.push(U[B] <= 0),
          o && Me.push(U[X] <= 0, U[he] <= 0),
          Me.every(function ($) {
            return $;
          }))
        ) {
          (T = P), (L = !1);
          break;
        }
        C.set(P, Me);
      }
      if (L)
        for (
          var ue = g ? 3 : 1,
            Ie = function (W) {
              var z = S.find(function (ee) {
                var D = C.get(ee);
                if (D)
                  return D.slice(0, W).every(function (Se) {
                    return Se;
                  });
              });
              if (z) return (T = z), 'break';
            },
            V = ue;
          V > 0;
          V--
        ) {
          var F = Ie(V);
          if (F === 'break') break;
        }
      e.placement !== T && ((e.modifiersData[i]._skip = !0), (e.placement = T), (e.reset = !0));
    }
  }
  const Cp = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: Ep,
    requiresIfExists: ['offset'],
    data: { _skip: !1 },
  };
  function Bl(t, e, n) {
    return (
      n === void 0 && (n = { x: 0, y: 0 }),
      {
        top: t.top - e.height - n.y,
        right: t.right - e.width + n.x,
        bottom: t.bottom - e.height + n.y,
        left: t.left - e.width - n.x,
      }
    );
  }
  function Nl(t) {
    return [Ue, lt, ot, qe].some(function (e) {
      return t[e] >= 0;
    });
  }
  function Mp(t) {
    var e = t.state,
      n = t.name,
      i = e.rects.reference,
      r = e.rects.popper,
      s = e.modifiersData.preventOverflow,
      a = si(e, { elementContext: 'reference' }),
      o = si(e, { altBoundary: !0 }),
      c = Bl(a, i),
      h = Bl(o, r, s),
      d = Nl(c),
      u = Nl(h);
    (e.modifiersData[n] = {
      referenceClippingOffsets: c,
      popperEscapeOffsets: h,
      isReferenceHidden: d,
      hasPopperEscaped: u,
    }),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, {
        'data-popper-reference-hidden': d,
        'data-popper-escaped': u,
      }));
  }
  const Sp = {
    name: 'hide',
    enabled: !0,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: Mp,
  };
  function kp(t, e, n) {
    var i = xt(t),
      r = [qe, Ue].indexOf(i) >= 0 ? -1 : 1,
      s = typeof n == 'function' ? n(Object.assign({}, e, { placement: t })) : n,
      a = s[0],
      o = s[1];
    return (
      (a = a || 0), (o = (o || 0) * r), [qe, lt].indexOf(i) >= 0 ? { x: o, y: a } : { x: a, y: o }
    );
  }
  function zp(t) {
    var e = t.state,
      n = t.options,
      i = t.name,
      r = n.offset,
      s = r === void 0 ? [0, 0] : r,
      a = zl.reduce(function (d, u) {
        return (d[u] = kp(u, e.rects, s)), d;
      }, {}),
      o = a[e.placement],
      c = o.x,
      h = o.y;
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += c), (e.modifiersData.popperOffsets.y += h)),
      (e.modifiersData[i] = a);
  }
  const Op = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: zp };
  function Lp(t) {
    var e = t.state,
      n = t.name;
    e.modifiersData[n] = Vl({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: 'absolute',
      placement: e.placement,
    });
  }
  const Rp = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Lp, data: {} };
  function Ip(t) {
    return t === 'x' ? 'y' : 'x';
  }
  function Dp(t) {
    var e = t.state,
      n = t.options,
      i = t.name,
      r = n.mainAxis,
      s = r === void 0 ? !0 : r,
      a = n.altAxis,
      o = a === void 0 ? !1 : a,
      c = n.boundary,
      h = n.rootBoundary,
      d = n.altBoundary,
      u = n.padding,
      p = n.tether,
      m = p === void 0 ? !0 : p,
      g = n.tetherOffset,
      b = g === void 0 ? 0 : g,
      v = si(e, { boundary: c, rootBoundary: h, padding: u, altBoundary: d }),
      y = xt(e.placement),
      w = In(e.placement),
      k = !w,
      S = Ss(y),
      M = Ip(S),
      O = e.modifiersData.popperOffsets,
      C = e.rects.reference,
      L = e.rects.popper,
      T = typeof b == 'function' ? b(Object.assign({}, e.rects, { placement: e.placement })) : b,
      I =
        typeof T == 'number'
          ? { mainAxis: T, altAxis: T }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
      P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      B = { x: 0, y: 0 };
    if (O) {
      if (s) {
        var j,
          q = S === 'y' ? Ue : qe,
          N = S === 'y' ? ot : lt,
          U = S === 'y' ? 'height' : 'width',
          X = O[S],
          he = X + v[q],
          Me = X - v[N],
          ue = m ? -L[U] / 2 : 0,
          Ie = w === On ? C[U] : L[U],
          V = w === On ? -L[U] : -C[U],
          F = e.elements.arrow,
          $ = m && F ? Ms(F) : { width: 0, height: 0 },
          W = e.modifiersData['arrow#persistent']
            ? e.modifiersData['arrow#persistent'].padding
            : Il(),
          z = W[q],
          ee = W[N],
          D = ii(0, C[U], $[U]),
          Se = k ? C[U] / 2 - ue - D - z - I.mainAxis : Ie - D - z - I.mainAxis,
          se = k ? -C[U] / 2 + ue + D + ee + I.mainAxis : V + D + ee + I.mainAxis,
          ye = e.elements.arrow && ni(e.elements.arrow),
          J = ye ? (S === 'y' ? ye.clientTop || 0 : ye.clientLeft || 0) : 0,
          Be = (j = P == null ? void 0 : P[S]) != null ? j : 0,
          Mt = X + Se - Be - J,
          _ = X + se - Be,
          we = ii(m ? Ji(he, Mt) : he, X, m ? ln(Me, _) : Me);
        (O[S] = we), (B[S] = we - X);
      }
      if (o) {
        var te,
          ze = S === 'x' ? Ue : qe,
          pt = S === 'x' ? ot : lt,
          pe = O[M],
          St = M === 'y' ? 'height' : 'width',
          mt = pe + v[ze],
          $e = pe - v[pt],
          Y = [Ue, qe].indexOf(y) !== -1,
          me = (te = P == null ? void 0 : P[M]) != null ? te : 0,
          Bt = Y ? mt : pe - C[St] - L[St] - me + I.altAxis,
          gt = Y ? pe + C[St] + L[St] - me - I.altAxis : $e,
          rt = m && Y ? np(Bt, pe, gt) : ii(m ? Bt : mt, pe, m ? gt : $e);
        (O[M] = rt), (B[M] = rt - pe);
      }
      e.modifiersData[i] = B;
    }
  }
  const Ap = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: Dp,
    requiresIfExists: ['offset'],
  };
  function Tp(t) {
    return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
  }
  function Pp(t) {
    return t === _e(t) || !et(t) ? ks(t) : Tp(t);
  }
  function Hp(t) {
    var e = t.getBoundingClientRect(),
      n = Ln(e.width) / t.offsetWidth || 1,
      i = Ln(e.height) / t.offsetHeight || 1;
    return n !== 1 || i !== 1;
  }
  function Fp(t, e, n) {
    n === void 0 && (n = !1);
    var i = et(e),
      r = et(e) && Hp(e),
      s = Yt(e),
      a = Rn(t, r, n),
      o = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (i || (!i && !n)) &&
        ((zt(e) !== 'body' || Os(s)) && (o = Pp(e)),
        et(e)
          ? ((c = Rn(e, !0)), (c.x += e.clientLeft), (c.y += e.clientTop))
          : s && (c.x = zs(s))),
      {
        x: a.left + o.scrollLeft - c.x,
        y: a.top + o.scrollTop - c.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function Vp(t) {
    var e = new Map(),
      n = new Set(),
      i = [];
    t.forEach(function (s) {
      e.set(s.name, s);
    });
    function r(s) {
      n.add(s.name);
      var a = [].concat(s.requires || [], s.requiresIfExists || []);
      a.forEach(function (o) {
        if (!n.has(o)) {
          var c = e.get(o);
          c && r(c);
        }
      }),
        i.push(s);
    }
    return (
      t.forEach(function (s) {
        n.has(s.name) || r(s);
      }),
      i
    );
  }
  function Bp(t) {
    var e = Vp(t);
    return ws.reduce(function (n, i) {
      return n.concat(
        e.filter(function (r) {
          return r.phase === i;
        })
      );
    }, []);
  }
  function Np(t) {
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
  function Ut(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
      n[i - 1] = arguments[i];
    return [].concat(n).reduce(function (r, s) {
      return r.replace(/%s/, s);
    }, t);
  }
  var cn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
    $p = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
    $l = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
  function jp(t) {
    t.forEach(function (e) {
      []
        .concat(Object.keys(e), $l)
        .filter(function (n, i, r) {
          return r.indexOf(n) === i;
        })
        .forEach(function (n) {
          switch (n) {
            case 'name':
              typeof e.name != 'string' &&
                console.error(
                  Ut(cn, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"')
                );
              break;
            case 'enabled':
              typeof e.enabled != 'boolean' &&
                console.error(
                  Ut(cn, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"')
                );
              break;
            case 'phase':
              ws.indexOf(e.phase) < 0 &&
                console.error(
                  Ut(cn, e.name, '"phase"', 'either ' + ws.join(', '), '"' + String(e.phase) + '"')
                );
              break;
            case 'fn':
              typeof e.fn != 'function' &&
                console.error(Ut(cn, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
              break;
            case 'effect':
              e.effect != null &&
                typeof e.effect != 'function' &&
                console.error(Ut(cn, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
              break;
            case 'requires':
              e.requires != null &&
                !Array.isArray(e.requires) &&
                console.error(
                  Ut(cn, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"')
                );
              break;
            case 'requiresIfExists':
              Array.isArray(e.requiresIfExists) ||
                console.error(
                  Ut(
                    cn,
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
                  $l
                    .map(function (i) {
                      return '"' + i + '"';
                    })
                    .join(', ') +
                  '; but "' +
                  n +
                  '" was provided.'
              );
          }
          e.requires &&
            e.requires.forEach(function (i) {
              t.find(function (r) {
                return r.name === i;
              }) == null && console.error(Ut($p, String(e.name), i, i));
            });
        });
    });
  }
  function Wp(t, e) {
    var n = new Set();
    return t.filter(function (i) {
      var r = e(i);
      if (!n.has(r)) return n.add(r), !0;
    });
  }
  function Xp(t) {
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
  var jl =
      'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
    Yp =
      'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
    Wl = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
  function Xl() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return !e.some(function (i) {
      return !(i && typeof i.getBoundingClientRect == 'function');
    });
  }
  function Up(t) {
    t === void 0 && (t = {});
    var e = t,
      n = e.defaultModifiers,
      i = n === void 0 ? [] : n,
      r = e.defaultOptions,
      s = r === void 0 ? Wl : r;
    return function (o, c, h) {
      h === void 0 && (h = s);
      var d = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Wl, s),
          modifiersData: {},
          elements: { reference: o, popper: c },
          attributes: {},
          styles: {},
        },
        u = [],
        p = !1,
        m = {
          state: d,
          setOptions: function (y) {
            var w = typeof y == 'function' ? y(d.options) : y;
            b(),
              (d.options = Object.assign({}, s, d.options, w)),
              (d.scrollParents = {
                reference: on(o) ? ri(o) : o.contextElement ? ri(o.contextElement) : [],
                popper: ri(c),
              });
            var k = Bp(Xp([].concat(i, d.options.modifiers)));
            if (
              ((d.orderedModifiers = k.filter(function (P) {
                return P.enabled;
              })),
              process.env.NODE_ENV !== 'production')
            ) {
              var S = Wp([].concat(k, d.options.modifiers), function (P) {
                var B = P.name;
                return B;
              });
              if ((jp(S), xt(d.options.placement) === Qi)) {
                var M = d.orderedModifiers.find(function (P) {
                  var B = P.name;
                  return B === 'flip';
                });
                M ||
                  console.error(
                    [
                      'Popper: "auto" placements require the "flip" modifier be',
                      'present and enabled to work.',
                    ].join(' ')
                  );
              }
              var O = wt(c),
                C = O.marginTop,
                L = O.marginRight,
                T = O.marginBottom,
                I = O.marginLeft;
              [C, L, T, I].some(function (P) {
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
          forceUpdate: function () {
            if (!p) {
              var y = d.elements,
                w = y.reference,
                k = y.popper;
              if (!Xl(w, k)) {
                process.env.NODE_ENV !== 'production' && console.error(jl);
                return;
              }
              (d.rects = {
                reference: Fp(w, ni(k), d.options.strategy === 'fixed'),
                popper: Ms(k),
              }),
                (d.reset = !1),
                (d.placement = d.options.placement),
                d.orderedModifiers.forEach(function (P) {
                  return (d.modifiersData[P.name] = Object.assign({}, P.data));
                });
              for (var S = 0, M = 0; M < d.orderedModifiers.length; M++) {
                if (process.env.NODE_ENV !== 'production' && ((S += 1), S > 100)) {
                  console.error(Yp);
                  break;
                }
                if (d.reset === !0) {
                  (d.reset = !1), (M = -1);
                  continue;
                }
                var O = d.orderedModifiers[M],
                  C = O.fn,
                  L = O.options,
                  T = L === void 0 ? {} : L,
                  I = O.name;
                typeof C == 'function' &&
                  (d = C({ state: d, options: T, name: I, instance: m }) || d);
              }
            }
          },
          update: Np(function () {
            return new Promise(function (v) {
              m.forceUpdate(), v(d);
            });
          }),
          destroy: function () {
            b(), (p = !0);
          },
        };
      if (!Xl(o, c)) return process.env.NODE_ENV !== 'production' && console.error(jl), m;
      m.setOptions(h).then(function (v) {
        !p && h.onFirstUpdate && h.onFirstUpdate(v);
      });
      function g() {
        d.orderedModifiers.forEach(function (v) {
          var y = v.name,
            w = v.options,
            k = w === void 0 ? {} : w,
            S = v.effect;
          if (typeof S == 'function') {
            var M = S({ state: d, name: y, instance: m, options: k }),
              O = function () {};
            u.push(M || O);
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
  var qp = [up, Rp, hp, _f, Op, Cp, Ap, ap, Sp],
    Gp = Up({ defaultModifiers: qp }),
    Kp = typeof Element < 'u',
    Zp = typeof Map == 'function',
    Qp = typeof Set == 'function',
    Jp = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
  function nr(t, e) {
    if (t === e) return !0;
    if (t && e && typeof t == 'object' && typeof e == 'object') {
      if (t.constructor !== e.constructor) return !1;
      var n, i, r;
      if (Array.isArray(t)) {
        if (((n = t.length), n != e.length)) return !1;
        for (i = n; i-- !== 0; ) if (!nr(t[i], e[i])) return !1;
        return !0;
      }
      var s;
      if (Zp && t instanceof Map && e instanceof Map) {
        if (t.size !== e.size) return !1;
        for (s = t.entries(); !(i = s.next()).done; ) if (!e.has(i.value[0])) return !1;
        for (s = t.entries(); !(i = s.next()).done; )
          if (!nr(i.value[1], e.get(i.value[0]))) return !1;
        return !0;
      }
      if (Qp && t instanceof Set && e instanceof Set) {
        if (t.size !== e.size) return !1;
        for (s = t.entries(); !(i = s.next()).done; ) if (!e.has(i.value[0])) return !1;
        return !0;
      }
      if (Jp && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
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
      if (Kp && t instanceof Element) return !1;
      for (i = n; i-- !== 0; )
        if (
          !((r[i] === '_owner' || r[i] === '__v' || r[i] === '__o') && t.$$typeof) &&
          !nr(t[r[i]], e[r[i]])
        )
          return !1;
      return !0;
    }
    return t !== t && e !== e;
  }
  var _p = function (e, n) {
    try {
      return nr(e, n);
    } catch (i) {
      if ((i.message || '').match(/stack|recursion/i))
        return console.warn('react-fast-compare cannot handle circular refs'), !1;
      throw i;
    }
  };
  const em = rs(_p);
  var tm = [],
    nm = function (e, n, i) {
      i === void 0 && (i = {});
      var r = G.useRef(null),
        s = {
          onFirstUpdate: i.onFirstUpdate,
          placement: i.placement || 'bottom',
          strategy: i.strategy || 'absolute',
          modifiers: i.modifiers || tm,
        },
        a = G.useState({
          styles: {
            popper: { position: s.strategy, left: '0', top: '0' },
            arrow: { position: 'absolute' },
          },
          attributes: {},
        }),
        o = a[0],
        c = a[1],
        h = G.useMemo(function () {
          return {
            name: 'updateState',
            enabled: !0,
            phase: 'write',
            fn: function (m) {
              var g = m.state,
                b = Object.keys(g.elements);
              Ad.flushSync(function () {
                c({
                  styles: Cl(
                    b.map(function (v) {
                      return [v, g.styles[v] || {}];
                    })
                  ),
                  attributes: Cl(
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
        d = G.useMemo(
          function () {
            var p = {
              onFirstUpdate: s.onFirstUpdate,
              placement: s.placement,
              strategy: s.strategy,
              modifiers: [].concat(s.modifiers, [h, { name: 'applyStyles', enabled: !1 }]),
            };
            return em(r.current, p) ? r.current || p : ((r.current = p), p);
          },
          [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, h]
        ),
        u = G.useRef();
      return (
        Ml(
          function () {
            u.current && u.current.setOptions(d);
          },
          [d]
        ),
        Ml(
          function () {
            if (!(e == null || n == null)) {
              var p = i.createPopper || Gp,
                m = p(e, n, d);
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
  function im({ children: t, container: e }) {
    let n = l.useRef(e),
      i = l.useRef(document.createElement('div'));
    return (
      l.useEffect(() => {
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
      i.current ? $t.createPortal(t, i.current) : null
    );
  }
  var rm = Object.defineProperty,
    sm = Object.defineProperties,
    am = Object.getOwnPropertyDescriptors,
    ir = Object.getOwnPropertySymbols,
    Yl = Object.prototype.hasOwnProperty,
    Ul = Object.prototype.propertyIsEnumerable,
    ql = (t, e, n) =>
      e in t ? rm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    hn = (t, e) => {
      for (var n in e || (e = {})) Yl.call(e, n) && ql(t, n, e[n]);
      if (ir) for (var n of ir(e)) Ul.call(e, n) && ql(t, n, e[n]);
      return t;
    },
    rr = (t, e) => sm(t, am(e)),
    om = (t, e) => {
      var n = {};
      for (var i in t) Yl.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && ir) for (var i of ir(t)) e.indexOf(i) < 0 && Ul.call(t, i) && (n[i] = t[i]);
      return n;
    },
    lm = (t, e, n) =>
      new Promise((i, r) => {
        var s = (c) => {
            try {
              o(n.next(c));
            } catch (h) {
              r(h);
            }
          },
          a = (c) => {
            try {
              o(n.throw(c));
            } catch (h) {
              r(h);
            }
          },
          o = (c) => (c.done ? i(c.value) : Promise.resolve(c.value).then(s, a));
        o((n = n.apply(t, e)).next());
      }),
    Gl = l.createContext(void 0),
    Kl = () => {
      let t = l.useContext(Gl);
      if (t === void 0)
        throw new Error('usePopoverContext must be used within a PopoverContextProvider');
      return t;
    },
    cm = Gl.Provider;
  function hm(t) {
    let {
        children: e,
        isOpen: n,
        placement: i = 'bottom-start',
        isFullWidth: r = !1,
        isAutoalignmentEnabled: s = !0,
        usePortal: a = !0,
        closeOnBlur: o = !0,
        closeOnEsc: c = !0,
        onClose: h,
        autoFocus: d = !0,
        id: u,
        offset: p = [1, 4],
        renderOnlyWhenOpen: m = !0,
      } = t,
      [g, b] = l.useState(null),
      [v, y] = l.useState(null),
      {
        attributes: w,
        update: k,
        styles: S,
      } = nm(g, v, {
        placement: i,
        modifiers: [
          { name: 'offset', options: { offset: p } },
          rr(hn({}, dm), { enabled: r }),
          { name: 'preventOverflow', enabled: s, options: { mainAxis: !0 } },
          { name: 'flip', enabled: s },
        ],
      });
    l.useEffect(() => {
      n && d && v && v.focus({ preventScroll: !0 });
    }, [n, v]),
      l.useEffect(() => {
        lm(this, null, function* () {
          n && k && (yield k());
        });
      }, [n, k]);
    let M = Dt(void 0, 'popover-content'),
      O = u || M,
      C = l.useCallback(() => {
        h == null || h(),
          setTimeout(() => (g == null ? void 0 : g.focus({ preventScroll: !0 })), 0);
      }, [h, g]),
      L = l.useRef(!1),
      T = l.useMemo(
        () => ({
          isOpen: !!n,
          usePortal: a,
          renderOnlyWhenOpen: m,
          getTriggerProps: (I = {}, P = null) => ({
            onMouseDown: (B) => {
              var j;
              (L.current = !0), (j = I.onMouseDown) == null || j.call(I, B);
            },
            onMouseUp: (B) => {
              var j;
              (L.current = !1), (j = I.onMouseUp) == null || j.call(I, B);
            },
            ref: kn(b, P),
            ['aria-expanded']: !!n,
            ['aria-controls']: O,
          }),
          getPopoverProps: (I = {}, P = null) =>
            rr(hn({}, w.popper), {
              style: hn(hn({}, I.style || {}), S.popper),
              ref: kn(y, P),
              id: O,
              onBlur: (B) => {
                if ((I.onBlur && I.onBlur(B), !o)) return;
                let j = document.activeElement,
                  q = B.relatedTarget || j,
                  N = v === q || (v == null ? void 0 : v.contains(q)),
                  U = g === q || (g == null ? void 0 : g.contains(q)) || L.current;
                N || U || h == null || h();
              },
              onKeyDown: (B) => {
                I.onKeyDown && I.onKeyDown(B), c && B.key === 'Escape' && C();
              },
            }),
        }),
        [n, m, w, S, a, O, c, o, v, g, C, h]
      );
    return l.createElement(cm, { value: T }, e);
  }
  var dm = {
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
    um = (t) => ({
      container: R({
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
    fm = (t, e) => {
      let n = t,
        { children: i, className: r, testId: s = 'cf-ui-popover-content', role: a = 'dialog' } = n,
        o = om(n, ['children', 'className', 'testId', 'role']),
        { isOpen: c, renderOnlyWhenOpen: h, getPopoverProps: d, usePortal: u } = Kl(),
        p = um(c),
        m = l.createElement(
          'div',
          rr(hn(hn({}, o), d(o, e)), {
            className: Q(p.container, r),
            'data-test-id': s,
            tabIndex: -1,
            role: a,
            'data-position-absolute': !0,
          }),
          i
        );
      return h && !c ? null : u ? l.createElement(im, null, m) : m;
    },
    pm = l.forwardRef(fm),
    mm = (t) => {
      var e;
      let n = l.Children.only(t.children),
        { getTriggerProps: i } = Kl();
      return l.cloneElement(
        n,
        rr(hn({}, i(n.props, n.ref)), {
          'aria-haspopup': (e = n.props['aria-haspopup']) != null ? e : 'dialog',
        })
      );
    },
    ai = hm;
  (ai.Content = pm), (ai.Trigger = mm);
  var gm = Object.defineProperty,
    vm = Object.defineProperties,
    bm = Object.getOwnPropertyDescriptors,
    sr = Object.getOwnPropertySymbols,
    Zl = Object.prototype.hasOwnProperty,
    Ql = Object.prototype.propertyIsEnumerable,
    Jl = (t, e, n) =>
      e in t ? gm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    ar = (t, e) => {
      for (var n in e || (e = {})) Zl.call(e, n) && Jl(t, n, e[n]);
      if (sr) for (var n of sr(e)) Ql.call(e, n) && Jl(t, n, e[n]);
      return t;
    },
    _l = (t, e) => vm(t, bm(e)),
    ec = (t, e) => {
      var n = {};
      for (var i in t) Zl.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && sr) for (var i of sr(t)) e.indexOf(i) < 0 && Ql.call(t, i) && (n[i] = t[i]);
      return n;
    },
    ym = ({ variant: t }) => {
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
    xm = ({ size: t }) => {
      switch (t) {
        case 'small':
          return {
            padding: `0 ${f.spacing2Xs}`,
            lineHeight: f.lineHeightS,
            maxHeight: f.lineHeightS,
          };
        default:
          return {
            padding: `0 ${f.spacingXs}`,
            lineHeight: f.lineHeightM,
            maxHeight: f.lineHeightM,
          };
      }
    },
    wm = () => ({
      badge: ({ variant: t, size: e }) =>
        R(
          ar(
            ar(
              {
                columnGap: f.spacing2Xs,
                alignItems: 'center',
                borderRadius: f.borderRadiusSmall,
                overflow: 'hidden',
                verticalAlign: 'middle',
              },
              ym({ variant: t })
            ),
            xm({ size: e })
          )
        ),
      badgeIcon: R({ flexShrink: 0 }),
      badgeText: R({
        color: 'currentcolor',
        lineHeight: 'inherit',
        textTransform: 'lowercase',
        '::first-letter': { textTransform: 'uppercase' },
      }),
    }),
    Em = Object.defineProperty,
    Cm = Object.defineProperties,
    Mm = Object.getOwnPropertyDescriptors,
    or = Object.getOwnPropertySymbols,
    tc = Object.prototype.hasOwnProperty,
    nc = Object.prototype.propertyIsEnumerable,
    ic = (t, e, n) =>
      e in t ? Em(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    dn = (t, e) => {
      for (var n in e || (e = {})) tc.call(e, n) && ic(t, n, e[n]);
      if (or) for (var n of or(e)) nc.call(e, n) && ic(t, n, e[n]);
      return t;
    },
    un = (t, e) => Cm(t, Mm(e)),
    fn = (t, e) => {
      var n = {};
      for (var i in t) tc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && or) for (var i of or(t)) e.indexOf(i) < 0 && nc.call(t, i) && (n[i] = t[i]);
      return n;
    },
    Sm = 'span';
  function km() {
    return R({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
    });
  }
  function zm() {
    return R({ wordBreak: 'break-word' });
  }
  function rc(t, e) {
    var n = t,
      {
        fontSize: i = 'fontSizeM',
        fontStack: r = 'fontStackPrimary',
        fontWeight: s = 'fontWeightNormal',
        fontColor: a = 'gray800',
        lineHeight: o = 'lineHeightM',
        children: c,
        isTruncated: h,
        isWordBreak: d,
        as: u,
        className: p,
        margin: m = 'none',
      } = n,
      g = fn(n, [
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
    let b = u || Sm;
    return l.createElement(
      He,
      un(dn({}, g), {
        as: b,
        className: Q(
          R({
            padding: 0,
            fontFamily: f[r],
            fontWeight: f[s],
            color: f[a],
            fontSize: f[i],
            lineHeight: f[o],
          }),
          h ? km() : null,
          d ? zm() : null,
          p
        ),
        margin: m,
        ref: e,
      }),
      c
    );
  }
  rc.displayName = 'Text';
  var Dn = l.forwardRef(rc),
    Om = 'span';
  function sc(t, e) {
    var n = t,
      { children: i, fontWeight: r = 'fontWeightNormal', testId: s = 'cf-ui-caption' } = n,
      a = fn(n, ['children', 'fontWeight', 'testId']);
    return l.createElement(
      Dn,
      un(
        dn(
          {
            as: Om,
            testId: s,
            fontSize: 'fontSizeS',
            lineHeight: 'lineHeightS',
            fontColor: 'gray900',
            fontWeight: r,
          },
          a
        ),
        { ref: e }
      ),
      i
    );
  }
  sc.displayName = 'Caption';
  var Lm = l.forwardRef(sc),
    Rm = 'h1';
  function ac(t, e) {
    var n = t,
      { children: i, testId: r = 'cf-ui-heading' } = n,
      s = fn(n, ['children', 'testId']);
    return l.createElement(
      Dn,
      un(
        dn(
          {
            as: Rm,
            testId: r,
            marginBottom: 'spacingM',
            fontWeight: 'fontWeightDemiBold',
            fontColor: 'gray900',
            fontSize: 'fontSizeXl',
            lineHeight: 'lineHeightXl',
          },
          s
        ),
        { ref: e }
      ),
      i
    );
  }
  (ac.displayName = 'Heading'), l.forwardRef(ac);
  var Im = 'h3';
  function oc(t, e) {
    var n = t,
      { children: i, testId: r = 'cf-ui-subheading' } = n,
      s = fn(n, ['children', 'testId']);
    return l.createElement(
      Dn,
      un(
        dn(
          {
            as: Im,
            testId: r,
            marginBottom: 'spacingM',
            fontSize: 'fontSizeL',
            lineHeight: 'lineHeightL',
            fontWeight: 'fontWeightDemiBold',
            fontColor: 'gray900',
          },
          s
        ),
        { ref: e }
      ),
      i
    );
  }
  (oc.displayName = 'Subheading'), l.forwardRef(oc);
  var Dm = 'h2';
  function lc(t, e) {
    var n = t,
      { children: i, size: r = 'default', testId: s = 'cf-ui-display-text' } = n,
      a = fn(n, ['children', 'size', 'testId']);
    let o = 'fontSize2Xl',
      c = 'lineHeight2Xl';
    return (
      r === 'large' && ((o = 'fontSize3Xl'), (c = 'lineHeight3Xl')),
      l.createElement(
        Dn,
        un(
          dn(
            {
              as: Dm,
              testId: s,
              marginBottom: r === 'default' ? 'spacingL' : 'spacingXl',
              fontSize: o,
              lineHeight: c,
              fontColor: 'gray900',
              fontWeight: 'fontWeightDemiBold',
            },
            a
          ),
          { ref: e }
        ),
        i
      )
    );
  }
  (lc.displayName = 'DisplayText'), l.forwardRef(lc);
  var Am = 'h2';
  function cc(t, e) {
    var n = t,
      { children: i, className: r, testId: s = 'cf-ui-section-heading' } = n,
      a = fn(n, ['children', 'className', 'testId']);
    return l.createElement(
      Dn,
      un(
        dn(
          {
            as: Am,
            testId: s,
            marginBottom: 'spacingL',
            fontWeight: 'fontWeightDemiBold',
            fontColor: 'gray900',
            fontSize: 'fontSizeS',
            lineHeight: 'lineHeightS',
            className: Q(R({ letterSpacing: f.letterSpacingWide, textTransform: 'uppercase' }), r),
          },
          a
        ),
        { ref: e }
      ),
      i
    );
  }
  (cc.displayName = 'SectionHeading'), l.forwardRef(cc);
  var Tm = l.forwardRef((t, e) => {
    var n = t,
      { children: i, testId: r = 'cf-ui-paragraph' } = n,
      s = fn(n, ['children', 'testId']);
    return l.createElement(
      Dn,
      un(dn({ as: 'p', testId: r, marginBottom: 'spacingM', lineHeight: 'lineHeightM' }, s), {
        ref: e,
      }),
      i
    );
  });
  Tm.displayName = 'Paragraph';
  var hc = l.forwardRef((t, e) => {
    let n = wm(),
      i = t,
      {
        children: r,
        variant: s = 'primary',
        size: a = 'default',
        testId: o = 'cf-ui-badge',
        startIcon: c,
        endIcon: h,
        className: d,
      } = i,
      u = ec(i, ['children', 'variant', 'size', 'testId', 'startIcon', 'endIcon', 'className']),
      p = (m) =>
        l.cloneElement(m, {
          size: 'tiny',
          className: Q(n.badgeIcon, m.props.className),
          variant: s === 'primary-filled' ? 'white' : s,
        });
    return l.createElement(
      He,
      _l(
        ar(
          {
            as: 'div',
            testId: o,
            display: 'inline-flex',
            className: Q(n.badge({ variant: s, size: a }), d),
          },
          u
        ),
        { ref: e }
      ),
      c && a === 'default' && p(c),
      l.createElement(
        Lm,
        { fontWeight: 'fontWeightMedium', isTruncated: !0, className: n.badgeText },
        r
      ),
      h && a === 'default' && p(h)
    );
  });
  hc.displayName = 'Badge';
  var Pm = {
    published: 'positive',
    draft: 'warning',
    archived: 'secondary',
    changed: 'primary',
    deleted: 'negative',
    new: 'primary-filled',
  };
  function dc(t, e) {
    let n = t,
      { entityStatus: i, size: r = 'default' } = n,
      s = ec(n, ['entityStatus', 'size']),
      a = Pm[i];
    return l.createElement(hc, _l(ar({}, s), { size: r, variant: a, ref: e }), i);
  }
  dc.displayName = 'EntityStatusBadge';
  var Hm = l.forwardRef(dc),
    Fm = Object.defineProperty,
    Vm = Object.defineProperties,
    Bm = Object.getOwnPropertyDescriptors,
    lr = Object.getOwnPropertySymbols,
    uc = Object.prototype.hasOwnProperty,
    fc = Object.prototype.propertyIsEnumerable,
    pc = (t, e, n) =>
      e in t ? Fm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    cr = (t, e) => {
      for (var n in e || (e = {})) uc.call(e, n) && pc(t, n, e[n]);
      if (lr) for (var n of lr(e)) fc.call(e, n) && pc(t, n, e[n]);
      return t;
    },
    mc = (t, e) => Vm(t, Bm(e)),
    Nm = (t, e) => {
      var n = {};
      for (var i in t) uc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && lr) for (var i of lr(t)) e.indexOf(i) < 0 && fc.call(t, i) && (n[i] = t[i]);
      return n;
    },
    $m = () => ({
      label: R({
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
          R({
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
          (t || e || n) && R({ backgroundColor: f.gray200, cursor: t ? 'grabbing' : 'grab' })
        ),
    }),
    jm = 'div';
  function Wm(t, e) {
    let n = $m(),
      i = t,
      {
        as: r = jm,
        className: s,
        isActive: a,
        isFocused: o,
        isHovered: c,
        label: h,
        onBlur: d,
        onFocus: u,
        onMouseEnter: p,
        onMouseLeave: m,
        testId: g = 'cf-ui-drag-handle',
        style: b,
      } = i,
      v = Nm(i, [
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
      [y, w] = l.useState(o),
      [k, S] = l.useState(c),
      M = l.useCallback(
        (I) => {
          w(!0), u && u(I);
        },
        [u]
      ),
      O = l.useCallback(
        (I) => {
          w(!1), d && d(I);
        },
        [d]
      ),
      C = l.useCallback(
        (I) => {
          S(!0), p && p(I);
        },
        [p]
      ),
      L = l.useCallback(
        (I) => {
          S(!1), m && m(I);
        },
        [m]
      ),
      T = {
        className: Q(n.root({ isActive: a, isFocused: y, isHovered: k }), s),
        'data-test-id': g,
        onBlur: O,
        onFocus: M,
        onMouseEnter: C,
        onMouseLeave: L,
        ref: e,
        style: b,
      };
    return r === 'div'
      ? l.createElement(
          'div',
          mc(cr(cr({}, v), T), { role: 'button', tabIndex: 0 }),
          l.createElement(ko, { variant: 'muted' }),
          l.createElement('span', { className: n.label }, h)
        )
      : l.createElement(
          'button',
          mc(cr(cr({}, v), T), { type: 'button' }),
          l.createElement(ko, { variant: 'muted' }),
          l.createElement('span', { className: n.label }, h)
        );
  }
  var Xm = l.forwardRef(Wm),
    Ym = Object.defineProperty,
    Um = Object.defineProperties,
    qm = Object.getOwnPropertyDescriptors,
    hr = Object.getOwnPropertySymbols,
    gc = Object.prototype.hasOwnProperty,
    vc = Object.prototype.propertyIsEnumerable,
    bc = (t, e, n) =>
      e in t ? Ym(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    We = (t, e) => {
      for (var n in e || (e = {})) gc.call(e, n) && bc(t, n, e[n]);
      if (hr) for (var n of hr(e)) vc.call(e, n) && bc(t, n, e[n]);
      return t;
    },
    An = (t, e) => Um(t, qm(e)),
    qt = (t, e) => {
      var n = {};
      for (var i in t) gc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && hr) for (var i of hr(t)) e.indexOf(i) < 0 && vc.call(t, i) && (n[i] = t[i]);
      return n;
    },
    yc = {
      vertical: { prev: 'ArrowUp', next: 'ArrowDown' },
      horizontal: { prev: 'ArrowLeft', next: 'ArrowRight' },
    },
    Gm = ({ itemsContainerRef: t, itemsSelector: e, keyType: n = 'vertical' }) => {
      let [i, r] = l.useState(0),
        s = l.useCallback(
          (a) => {
            let o = t.current;
            if (!o) return;
            let c = o.querySelectorAll(e);
            if (c.length === 0) return;
            let h = c.length - 1,
              d = () => r(0),
              u = () => r(h),
              p = () => {
                i === h ? d() : r(i + 1);
              },
              m = () => {
                i === 0 ? u() : r(i - 1);
              },
              g = { [yc[n].next]: p, [yc[n].prev]: m }[a.key];
            g && (a.preventDefault(), g());
          },
          [i, e, t, n]
        );
      return { focusedIndex: i, handleArrowsKeyDown: s, setFocusedIndex: r };
    },
    xc = l.createContext(void 0),
    dr = () => {
      let t = l.useContext(xc);
      if (t === void 0) throw new Error('useMenuContext must be used within a MenuContextProvider');
      return t;
    },
    Km = xc.Provider,
    Rs = '[role="menuitem"]:not(:disabled)';
  function wc(t) {
    let e = t,
      {
        closeOnSelect: n = !0,
        closeOnBlur: i = !0,
        closeOnEsc: r = !0,
        children: s,
        onOpen: a,
      } = e,
      o = qt(e, ['closeOnSelect', 'closeOnBlur', 'closeOnEsc', 'children', 'onOpen']),
      {
        isOpen: c,
        handleOpen: h,
        handleClose: d,
        isControlled: u,
      } = Eu({ isOpen: t.isOpen, defaultIsOpen: t.defaultIsOpen, onOpen: a, onClose: t.onClose }),
      p = l.useRef(null),
      m = l.useRef(null),
      g = Dt(null, 'menu'),
      {
        focusedIndex: b,
        handleArrowsKeyDown: v,
        setFocusedIndex: y,
      } = Gm({ itemsContainerRef: m, itemsSelector: Rs });
    l.useEffect(() => {
      if (c && m.current) {
        let C = m.current.querySelectorAll(Rs);
        C.length > 0 &&
          b < C.length &&
          setTimeout(() => {
            C[b].focus({ preventScroll: !1 });
          }, 0);
      }
    }, [c, b]);
    let w = l.useCallback(
        (C) => {
          let L = [...m.current.querySelectorAll(Rs)].findIndex((T) => C === T);
          L !== -1 && y(L);
        },
        [y]
      ),
      k = l.useCallback(() => {
        var C;
        d(), (C = p.current) == null || C.focus({ preventScroll: !0 });
      }, [d]),
      S = l.useCallback(
        (C) => {
          if (C.key === 'Tab') {
            C.preventDefault(), k();
            return;
          }
          if ((C.stopPropagation(), C.key === 'ArrowLeft')) {
            C.preventDefault(), k();
            return;
          }
          v(C);
        },
        [k, v]
      ),
      M = l.useRef(!1),
      O = l.useMemo(
        () => ({
          isOpen: c,
          menuId: g,
          focusMenuItem: w,
          getTriggerProps: (C = {}, L = null) => ({
            onMouseDown: (T) => {
              var I;
              (M.current = !0), (I = C.onMouseDown) == null || I.call(C, T);
            },
            onMouseUp: (T) => {
              var I;
              (M.current = !1), (I = C.onMouseUp) == null || I.call(C, T);
            },
            onClick: (T) => {
              var I;
              (u && !a) || (c ? d() : h()), (I = C.onClick) == null || I.call(C, T);
            },
            ref: kn(p, L),
          }),
          getMenuListProps: (C = {}, L = null) => ({
            ref: kn(m, L),
            onKeyDown: (T) => {
              var I;
              S(T), (I = C.onKeyDown) == null || I.call(C, T);
            },
            onBlur: (T) => {
              var I, P, B, j;
              if (((I = C.onBlur) == null || I.call(C, T), !i)) return;
              let q = document.activeElement,
                N = T.relatedTarget || q,
                U = m.current === N || ((P = m.current) == null ? void 0 : P.contains(N)),
                X =
                  p.current === N ||
                  ((B = p.current) == null ? void 0 : B.contains(N)) ||
                  M.current,
                he =
                  ((j = N == null ? void 0 : N.parentElement) == null
                    ? void 0
                    : j.dataset.parentMenu) === g;
              if (U || X || he) {
                T.stopPropagation();
                return;
              }
              d();
            },
          }),
          getMenuItemProps: (C = {}) => ({
            onClick: (L) => {
              var T;
              (T = C.onClick) == null || T.call(C, L);
              let I = !!L.target.getAttribute('aria-haspopup');
              n && !I && k();
            },
          }),
          propsToPropagateToSubmenus: { closeOnSelect: n, closeOnBlur: i, closeOnEsc: r },
        }),
        [g, c, S, n, d, h, w, i, r, k, u, a]
      );
    return l.createElement(
      Km,
      { value: O },
      l.createElement(
        ai,
        An(We({}, o), {
          isOpen: c,
          onClose: d,
          id: g,
          closeOnEsc: r,
          autoFocus: !1,
          closeOnBlur: !1,
        }),
        s
      )
    );
  }
  var Ec = l.createContext(void 0),
    Cc = () => l.useContext(Ec),
    Zm = Ec.Provider,
    Qm = () =>
      R({
        position: 'sticky',
        top: 0,
        left: 0,
        backgroundColor: f.colorWhite,
        borderBottom: `1px solid ${f.gray300}`,
        marginBottom: f.spacing2Xs,
        padding: `${f.spacing2Xs} 0`,
        zIndex: 1001,
      }),
    Jm = () =>
      R({
        position: 'sticky',
        bottom: 0,
        left: 0,
        backgroundColor: f.colorWhite,
        borderTop: `1px solid ${f.gray300}`,
        marginTop: f.spacing2Xs,
        padding: `${f.spacing2Xs} 0`,
        zIndex: 1001,
      }),
    _m = (t) => ({
      container: R({
        borderRadius: '8px',
        overflowY: 'auto',
        position: 'relative',
        padding: 0,
        paddingTop: t.hasStickyHeader ? 0 : f.spacing2Xs,
        paddingBottom: t.hasStickyFooter ? 0 : f.spacing2Xs,
      }),
    }),
    Is = (t) => {
      let e = t,
        { children: n, testId: i = 'cf-ui-menu-list-header', className: r } = e,
        s = qt(e, ['children', 'testId', 'className']),
        a = Qm();
      return l.createElement('div', We({ 'data-test-id': i, className: Q(a, r) }, s), n);
    };
  Is.displayName = 'MenuListHeader';
  var Ds = (t) => {
    let e = t,
      { children: n, testId: i = 'cf-ui-menu-list-footer', className: r } = e,
      s = qt(e, ['children', 'testId', 'className']),
      a = Jm();
    return l.createElement('div', We({ 'data-test-id': i, className: Q(a, r) }, s), n);
  };
  Ds.displayName = 'MenuListFooter';
  function eg(t) {
    var e;
    return !!((e = t == null ? void 0 : t.type) != null && e.displayName);
  }
  var tg = (t, e) => {
      let n = t,
        { children: i, testId: r = 'cf-ui-menu-list', className: s } = n,
        a = qt(n, ['children', 'testId', 'className']),
        { getMenuListProps: o } = dr(),
        c = Cc(),
        h = null,
        d = null,
        u = [];
      l.Children.forEach(i, (g) => {
        let b = !0;
        eg(g) &&
          (g.type.displayName === Is.displayName
            ? ((h = g), (b = !1))
            : g.type.displayName === Ds.displayName && ((d = g), (b = !1))),
          b && u.push(g);
      });
      let p = _m({ hasStickyHeader: !!h, hasStickyFooter: !!d }),
        m = c ? c.getSubmenuListProps(a) : a;
      return l.createElement(
        ai.Content,
        An(We(We({ role: 'menu' }, m), o(m, e)), { className: Q(p.container, s), testId: r }),
        h,
        u,
        d
      );
    },
    ng = l.forwardRef(tg),
    ig = {
      backgroundColor: f.gray200,
      fontWeight: f.fontWeightMedium,
      '&:hover': { backgroundColor: f.gray200 },
    },
    Mc = { opacity: 0.5, cursor: 'auto', '&:hover': { backgroundColor: 'unset' } },
    rg = ({ isActive: t, isDisabled: e }) => ({
      root: R(
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
            '&:disabled': Mc,
          },
        ],
        t && ig,
        e && Mc
      ),
    }),
    sg = 'button';
  function Sc(t, e) {
    let n = t,
      {
        testId: i,
        className: r,
        as: s,
        isActive: a = !1,
        isDisabled: o = !1,
        isInitiallyFocused: c,
        icon: h,
      } = n,
      d = qt(n, [
        'testId',
        'className',
        'as',
        'isActive',
        'isDisabled',
        'isInitiallyFocused',
        'icon',
      ]),
      u = Dt(void 0, 'menu-item'),
      p = i || `cf-ui-${u}`,
      m = rg({ isActive: a, isDisabled: o }),
      { getMenuItemProps: g, focusMenuItem: b } = dr(),
      v = l.useRef(null);
    l.useEffect(() => {
      c && v.current && b(v.current);
    }, [c, b]);
    let y = s ?? sg;
    return l.createElement(
      y,
      An(We(We({ role: 'menuitem' }, d), g(d)), {
        className: Q(m.root, r),
        'data-test-id': p,
        ref: kn(v, e),
        tabIndex: -1,
      }),
      h,
      t.children
    );
  }
  Sc.displayName = 'MenuItem';
  var kc = l.forwardRef(Sc),
    zc = (t) => {
      let e = l.Children.only(t.children),
        { getTriggerProps: n } = dr();
      return l.createElement(
        ai.Trigger,
        null,
        l.cloneElement(e, An(We({}, n(e.props, e.ref)), { ['aria-haspopup']: 'menu' }))
      );
    },
    ag = () =>
      R({
        border: 'none',
        width: '100%',
        height: '1px',
        backgroundColor: f.gray200,
        margin: `${f.spacing2Xs} 0`,
      }),
    og = (t) => {
      let e = t,
        { children: n, testId: i = 'cf-ui-menu-divider', className: r } = e,
        s = qt(e, ['children', 'testId', 'className']),
        a = ag();
      return l.createElement(
        'hr',
        We({ 'aria-orientation': 'horizontal', 'data-test-id': i, className: Q(a, r) }, s)
      );
    },
    lg = () =>
      R({
        color: f.gray500,
        textAlign: 'left',
        padding: `${f.spacingXs} ${f.spacingS} ${f.spacing2Xs}`,
        lineHeight: f.lineHeightM,
      }),
    cg = (t) => {
      let e = t,
        { children: n, testId: i = 'cf-ui-menu-section-title', className: r } = e,
        s = qt(e, ['children', 'testId', 'className']),
        a = lg();
      return l.createElement(
        fo,
        We(
          { 'aria-hidden': 'true', as: 'div', testId: i, className: Q(a, r), marginBottom: 'none' },
          s
        ),
        n
      );
    },
    hg = [-8, 2],
    dg = (t) => {
      let e = t,
        { onClose: n, onOpen: i } = e,
        r = qt(e, ['onClose', 'onOpen']),
        { isOpen: s, menuId: a, propsToPropagateToSubmenus: o } = dr(),
        c = l.useRef(null),
        h = l.useRef(null),
        [d, u] = l.useState(!1),
        p = l.useCallback(() => {
          u(!0), window.clearTimeout(h.current), i == null || i();
        }, [i]),
        m = l.useCallback(() => {
          u(!1), window.clearTimeout(h.current), n == null || n();
        }, [n]),
        g = l.useCallback(() => {
          var v;
          m(), (v = c.current) == null || v.focus({ preventScroll: !0 });
        }, [m]);
      l.useEffect(() => {
        s === !1 && u(!1);
      }, [s]);
      let b = l.useMemo(
        () => ({
          isOpen: d,
          getSubmenuListProps: (v) => ({
            'data-parent-menu': a,
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
            ref: kn(c, y),
            onKeyDown: (w) => {
              var k;
              w.key === 'ArrowRight' && (w.preventDefault(), p()),
                (k = v.onKeyDown) == null || k.call(v, w);
            },
            onMouseOver: (w) => {
              var k;
              p(), (k = v.onMouseOver) == null || k.call(v, w);
            },
            onMouseLeave: (w) => {
              var k;
              (h.current = window.setTimeout(g, 300)), (k = v.onMouseLeave) == null || k.call(v, w);
            },
          }),
        }),
        [d, a, p, g]
      );
      return l.createElement(
        Zm,
        { value: b },
        l.createElement(
          wc,
          An(We(We({}, o), r), {
            isOpen: d,
            onClose: m,
            onOpen: p,
            placement: 'right-start',
            offset: hg,
            isAutoalignmentEnabled: !1,
          })
        )
      );
    },
    ug = () => ({
      root: ({ isActive: t }) =>
        R(
          We(
            { display: 'flex', alignItems: 'center', paddingRight: f.spacingXs },
            t ? { backgroundColor: f.gray100 } : {}
          )
        ),
      content: R({ marginRight: f.spacingM }),
      icon: R({ marginLeft: 'auto', fill: 'currentColor' }),
    }),
    fg = (t, e) => {
      let { className: n, children: i } = t,
        { getSubmenuTriggerProps: r, isOpen: s } = Cc(),
        a = ug();
      return l.createElement(
        zc,
        null,
        l.createElement(
          kc,
          An(We(We({}, t), r(t, e)), { className: Q(a.root({ isActive: s }), n) }),
          l.createElement('span', { className: a.content }, i),
          l.createElement(Yu, { className: a.icon })
        )
      );
    },
    pg = l.forwardRef(fg),
    ct = wc;
  (ct.List = ng),
    (ct.ListHeader = Is),
    (ct.ListFooter = Ds),
    (ct.Item = kc),
    (ct.Trigger = zc),
    (ct.Divider = og),
    (ct.SectionTitle = cg),
    (ct.Submenu = dg),
    (ct.SubmenuTrigger = pg);
  var Oc = { exports: {} };
  (function (t) {
    (function (e, n) {
      var i = '…',
        r =
          /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]{1,300}@(.{1,300}\.)[a-zA-Z]{2,3})/g;
      function s(o, c, h) {
        return h.length === o.length || !c.ellipsis || (h += c.ellipsis), h;
      }
      function a(o, c, h) {
        var d = '',
          u = !0,
          p = c,
          m,
          g;
        if (
          ((h = h || {}),
          (h.ellipsis = typeof h.ellipsis > 'u' ? i : h.ellipsis),
          !o || o.length === 0)
        )
          return '';
        for (u = !0; u; ) {
          if (
            ((r.lastIndex = d.length),
            (u = r.exec(o)),
            !u || u.index - d.length >= p || r.lastIndex >= c + 3e3)
          )
            return (d += o.substring(d.length, c)), s(o, h, d);
          if (
            ((m = u[0]),
            (g = u.index),
            (d += o.substring(d.length, g + m.length)),
            (p -= g + m.length),
            p <= 0)
          )
            break;
        }
        return s(o, h, d);
      }
      t.exports ? (t.exports = a) : (e.truncate = a);
    })(String);
  })(Oc);
  var mg = Oc.exports;
  const Lc = rs(mg);
  var gg = Object.defineProperty,
    vg = Object.defineProperties,
    bg = Object.getOwnPropertyDescriptors,
    ur = Object.getOwnPropertySymbols,
    Rc = Object.prototype.hasOwnProperty,
    Ic = Object.prototype.propertyIsEnumerable,
    Dc = (t, e, n) =>
      e in t ? gg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    oi = (t, e) => {
      for (var n in e || (e = {})) Rc.call(e, n) && Dc(t, n, e[n]);
      if (ur) for (var n of ur(e)) Ic.call(e, n) && Dc(t, n, e[n]);
      return t;
    },
    fr = (t, e) => vg(t, bg(e)),
    As = (t, e) => {
      var n = {};
      for (var i in t) Rc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && ur) for (var i of ur(t)) e.indexOf(i) < 0 && Ic.call(t, i) && (n[i] = t[i]);
      return n;
    },
    yg = () => ({
      contentBody: R({ gridColumn: 'content', gridRow: 'content', whiteSpace: 'initial' }),
      wrapper: R({
        flex: '1 1 0',
        display: 'grid',
        gridTemplateRows: '[header] auto [content] minmax(0, 1fr)',
        gridTemplateColumns: 'auto [content] minmax(0, 1fr)',
      }),
      dragHandle: R({
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
          '&:focus': R({
            borderColor: n ? f.blue100 : f.colorPrimary,
            boxShadow: f.glowPrimary,
            outline: 'none',
          }),
          '&:focus:not(:focus-visible)': R({
            borderColor: n ? f.colorPrimary : f.gray300,
            boxShadow: 'unset',
          }),
          '&:focus-visible': R({ borderColor: f.colorPrimary, boxShadow: f.glowPrimary }),
        };
        return (
          t || (i.paddingTop = f.spacingM),
          e && ((i.borderColor = f.colorPrimary), (i.cursor = 'pointer')),
          n && ((i.backgroundColor = f.blue100), (i.borderColor = f.colorPrimary)),
          R(i)
        );
      },
      skeleton: R({
        border: `1px solid ${f.gray300}`,
        borderRadius: f.borderRadiusMedium,
        padding: f.spacingM,
      }),
    }),
    xg = () => ({ root: R({ minHeight: 'auto', padding: f.spacing2Xs, marginLeft: f.spacingXs }) }),
    Ac = ({ buttonProps: t, children: e }) => {
      let n = xg();
      return l.createElement(
        ct,
        null,
        l.createElement(
          ct.Trigger,
          null,
          l.createElement(
            C0,
            fr(oi({ 'aria-label': 'Actions', icon: l.createElement(Ku, null) }, t), {
              className: Q(n.root, t == null ? void 0 : t.className),
              size: 'small',
              variant: 'transparent',
              testId: 'cf-ui-card-actions',
            })
          )
        ),
        l.createElement(ct.List, null, e)
      );
    },
    wg = () => ({
      header: R({
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
      headerWithActions: R({ paddingBottom: 0, paddingRight: f.spacingXs, paddingTop: 0 }),
    }),
    Tc = (t) => {
      t.preventDefault(), t.stopPropagation();
    },
    Pc = (t) => {
      let { icon: e, type: n, actions: i, actionsButtonProps: r, badge: s } = t,
        a = wg();
      return l.createElement(
        Ee,
        { className: Q(a.header, i && a.headerWithActions) },
        l.createElement(
          Ee,
          { flexGrow: 1 },
          n && l.createElement(je, { fontColor: 'gray600', isWordBreak: !0 }, n)
        ),
        e && l.createElement(Ee, { alignItems: 'center', marginLeft: 'spacingXs' }, e),
        s && l.createElement(Ee, { alignItems: 'center', marginLeft: 'spacingXs' }, s),
        i &&
          i.length > 0 &&
          l.createElement(
            Ee,
            { onClick: Tc, alignItems: 'center' },
            l.createElement(Ac, { buttonProps: r }, i)
          )
      );
    };
  Pc.displayName = 'DefaultCardHeader';
  var Eg = 'article';
  function Hc(t, e) {
    var n = t,
      {
        actions: i,
        actionsButtonProps: r,
        ariaLabel: s,
        badge: a,
        children: o,
        className: c,
        contentBodyProps: h,
        header: d,
        href: u,
        icon: p,
        isDragging: m = !1,
        isHovered: g,
        isSelected: b = !1,
        onBlur: v,
        onClick: y,
        onFocus: w,
        onKeyDown: k,
        onMouseEnter: S,
        onMouseLeave: M,
        target: O,
        rel: C,
        testId: L = 'cf-ui-base-card',
        title: T,
        type: I,
        withDragHandle: P,
        dragHandleRender: B,
        isLoading: j,
      } = n,
      q = As(n, [
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
    let N = yg(),
      [U, X] = l.useState(g ?? !1),
      he = !!(y || u || P),
      Me = !!d,
      ue =
        I || p || a || i
          ? l.createElement(Pc, { type: I, icon: p, badge: a, actions: i, actionsButtonProps: r })
          : null,
      Ie = l.useCallback(
        (D) => {
          w && w(D);
        },
        [w]
      ),
      V = l.useCallback(
        (D) => {
          v && v(D);
        },
        [v]
      ),
      F = l.useCallback(
        (D) => {
          X(!0), S && S(D);
        },
        [S]
      ),
      $ = l.useCallback(
        (D) => {
          X(!1), M && M(D);
        },
        [M]
      ),
      W = y
        ? (D) => {
            y(D);
          }
        : void 0,
      z = l.useCallback(
        (D) => {
          k && k(D);
        },
        [k]
      );
    if (j)
      return l.createElement(
        Je.Container,
        { className: N.skeleton, svgHeight: '5.6rem' },
        l.createElement(Je.DisplayText, { numberOfLines: 1 }),
        l.createElement(Je.BodyText, { numberOfLines: 1, offsetTop: 35 })
      );
    let ee = l.createElement(Xm, {
      className: N.dragHandle,
      isActive: m,
      label: 'Reorder entry',
      onClick: Tc,
    });
    return l.createElement(
      He,
      fr(
        oi(
          {
            'aria-label': T || s,
            'aria-pressed': q.as === 'button' ? (b ? 'true' : 'false') : void 0,
            as: Eg,
            className: Q(N.root({ hasHeader: Me, isHovered: U, isSelected: b }), c),
            href: u,
            onBlur: V,
            onClick: W,
            onFocus: Ie,
            onMouseEnter: typeof g > 'u' && he ? F : void 0,
            onMouseLeave: typeof g > 'u' && he ? $ : void 0,
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
      P ? (B ? B({ drag: ee, isDragging: m }) : ee) : null,
      l.createElement(
        'div',
        { className: N.wrapper, 'data-card-part': 'wrapper' },
        d ?? ue,
        l.createElement('div', { className: N.contentBody, 'data-card-part': 'content' }, o)
      )
    );
  }
  Hc.displayName = 'BaseCard';
  var Fc = l.forwardRef(Hc),
    Cg = (t) => {
      switch (t) {
        case 'large':
          return f.spacingL;
        case 'none':
          return 0;
        default:
          return f.spacingM;
      }
    },
    Mg = ({ padding: t }) => ({
      header: R({ gridColumn: 'content', gridRow: 'header', marginBottom: f.spacingM }),
      root: R({ padding: Cg(t) }),
    });
  function Vc(t, e) {
    var n = t,
      {
        actions: i,
        badge: r,
        icon: s,
        padding: a = 'default',
        title: o,
        className: c,
        testId: h = 'cf-ui-card',
      } = n,
      d = As(n, ['actions', 'badge', 'icon', 'padding', 'title', 'className', 'testId']);
    let u = Mg({ padding: a }),
      p = !!(o || s || r || i);
    return l.createElement(
      Fc,
      fr(oi({ className: Q(u.root, c) }, d), {
        testId: h,
        header:
          p &&
          l.createElement(
            Ee,
            { alignItems: 'center', className: Q(u.header) },
            o &&
              l.createElement(
                Ee,
                { as: 'header', flexGrow: 1 },
                l.createElement(mo, { marginBottom: 'none' }, o)
              ),
            s && l.createElement(Ee, { alignItems: 'center', marginLeft: 'spacingXs' }, s),
            r && l.createElement(Ee, { alignItems: 'center', marginLeft: 'spacingXs' }, r),
            i && l.createElement(Ac, null, i)
          ),
        ref: e,
      })
    );
  }
  (Vc.displayName = 'Card'), l.forwardRef(Vc);
  var Sg = () => ({
      actionsButton: R({
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: f.borderRadiusMedium,
      }),
      content: (t) =>
        R({
          gridColumn: 'content',
          marginTop: t === 'small' ? f.spacingXs : f.spacingS,
          marginBottom: t === 'small' ? `calc(-1 * ${f.spacingXs})` : 0,
        }),
      root: R({
        padding: 0,
        '[data-card-part="content"]': {
          paddingBottom: f.spacingM,
          paddingLeft: f.spacingM,
          paddingRight: f.spacingM,
        },
      }),
      header: R({
        borderBottomWidth: 1,
        borderBottomColor: f.gray200,
        borderBottomStyle: 'solid',
        minHeight: 'auto',
        paddingBottom: f.spacingXs,
        paddingLeft: f.spacingM,
        paddingRight: f.spacingXs,
      }),
      thumbnail: (t) =>
        R(
          oi(
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
    kg = 'article';
  function Bc({ title: t, titleTag: e }) {
    if (!t) return null;
    let n = Lc(t, 255, {});
    return l.createElement(
      Du,
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
  Bc.displayName = 'EntryCardTitle';
  function Nc({ description: t, size: e }) {
    if (!t || e === 'small') return null;
    let n = Lc(t, 95, {});
    return l.createElement(fs, { marginBottom: 'none', isWordBreak: !0 }, n);
  }
  Nc.displayName = 'EntryCardDescription';
  function $c(t, e) {
    var n = t,
      {
        actions: i,
        children: r,
        className: s,
        src: a,
        status: o,
        thumbnailElement: c,
        description: h,
        withDragHandle: d = !1,
        title: u,
        titleTag: p = 'h2',
        size: m,
        testId: g = 'cf-ui-entry-card',
        contentType: b,
      } = n,
      v = As(n, [
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
    let y = Sg(),
      w = o ? l.createElement(Hm, { entityStatus: o }) : null;
    return l.createElement(
      Fc,
      fr(oi({ as: kg }, v), {
        actions: i,
        badge: w,
        className: Q(y.root, s),
        withDragHandle: d,
        ref: e,
        type: b,
        testId: g,
      }),
      l.createElement(
        Ee,
        { alignItems: 'center', className: y.content(m), flexDirection: 'row' },
        l.createElement(
          Ee,
          { flexDirection: 'column', flexGrow: 1, gap: 'spacingS' },
          l.createElement(Bc, { title: u, titleTag: p }),
          l.createElement(Nc, { size: m, description: h }),
          r
        ),
        c && m !== 'small' && l.createElement('figure', { className: y.thumbnail(m) }, c)
      )
    );
  }
  $c.displayName = 'EntryCard';
  var jc = l.forwardRef($c),
    zg = Object.defineProperty,
    Og = Object.defineProperties,
    Lg = Object.getOwnPropertyDescriptors,
    pr = Object.getOwnPropertySymbols,
    Wc = Object.prototype.hasOwnProperty,
    Xc = Object.prototype.propertyIsEnumerable,
    Yc = (t, e, n) =>
      e in t ? zg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    Uc = (t, e) => {
      for (var n in e || (e = {})) Wc.call(e, n) && Yc(t, n, e[n]);
      if (pr) for (var n of pr(e)) Xc.call(e, n) && Yc(t, n, e[n]);
      return t;
    },
    Rg = (t, e) => Og(t, Lg(e)),
    Ig = (t, e) => {
      var n = {};
      for (var i in t) Wc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && pr) for (var i of pr(t)) e.indexOf(i) < 0 && Xc.call(t, i) && (n[i] = t[i]);
      return n;
    },
    Dg = (t) => {
      switch (t) {
        case 'primary':
          return { backgroundColor: f.blue100, borderColor: f.blue300, a: { color: f.blue700 } };
        case 'positive':
          return { backgroundColor: f.green100, borderColor: f.green300, a: { color: f.blue700 } };
        case 'negative':
          return { backgroundColor: f.red100, borderColor: f.red300, a: { color: f.blue700 } };
        case 'warning':
          return {
            backgroundColor: f.orange100,
            borderColor: f.orange300,
            a: { color: f.blue700 },
          };
        case 'neutral':
          return { backgroundColor: f.gray100, borderColor: f.gray300, a: { color: f.blue700 } };
        default:
          return {};
      }
    },
    Ag = () => ({
      container: ({ variant: t }) =>
        R(
          Uc(
            { position: 'relative', borderRadius: f.borderRadiusMedium, border: '1px solid' },
            Dg(t)
          )
        ),
      title: R({ color: f.gray800, fontSize: f.fontSizeL, lineHeight: f.lineHeightL }),
      description: R({ color: f.gray700 }),
      close: R({
        position: 'absolute',
        top: f.spacingXs,
        right: f.spacingXs,
        padding: f.spacingXs,
        '&:hover, &:active': { backgroundColor: 'transparent' },
      }),
      closeIcon: R({ fill: f.gray600 }),
    }),
    Tg = { primary: zo, positive: Wu, negative: Uu, warning: _u, neutral: zo },
    Ts = l.forwardRef((t, e) => {
      let n = t,
        {
          children: i,
          className: r,
          withCloseButton: s = !1,
          variant: a = 'primary',
          onClose: o,
          testId: c = 'cf-ui-note',
          title: h,
        } = n,
        d = Ig(n, [
          'children',
          'className',
          'withCloseButton',
          'variant',
          'onClose',
          'testId',
          'title',
        ]),
        u = Ag();
      return l.createElement(
        so,
        Rg(Uc({}, d), {
          columns: s ? 'auto 1fr 24px' : 'auto 1fr',
          as: 'article',
          className: Q(u.container({ variant: a }), r),
          testId: c,
          ref: e,
          padding: 'spacingM',
        }),
        l.createElement(Co, {
          as: Tg[a],
          variant: a === 'neutral' ? 'muted' : a,
          size: h ? 'medium' : 'small',
        }),
        l.createElement(
          Ee,
          { flexDirection: 'column' },
          h &&
            l.createElement(
              mo,
              { as: 'h2', className: u.title, marginBottom: i ? 'spacingS' : 'none' },
              h
            ),
          i &&
            l.createElement(
              je,
              { as: 'div', lineHeight: 'lineHeightM', className: u.description },
              typeof i == 'string' ? l.createElement(fs, { marginBottom: 'none' }, i) : i
            )
        ),
        s &&
          l.createElement(Qn, {
            variant: 'transparent',
            startIcon: l.createElement(Mo, { className: u.closeIcon }),
            onClick: o,
            testId: `${c}-close`,
            'aria-label': 'Dismiss',
            className: u.close,
          })
      );
    });
  Ts.displayName = 'Note';
  var Pg = Object.defineProperty,
    Hg = Object.defineProperties,
    Fg = Object.getOwnPropertyDescriptors,
    mr = Object.getOwnPropertySymbols,
    qc = Object.prototype.hasOwnProperty,
    Gc = Object.prototype.propertyIsEnumerable,
    Kc = (t, e, n) =>
      e in t ? Pg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    li = (t, e) => {
      for (var n in e || (e = {})) qc.call(e, n) && Kc(t, n, e[n]);
      if (mr) for (var n of mr(e)) Gc.call(e, n) && Kc(t, n, e[n]);
      return t;
    },
    Ps = (t, e) => Hg(t, Fg(e)),
    Vg = (t, e) => {
      var n = {};
      for (var i in t) qc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && mr) for (var i of mr(t)) e.indexOf(i) < 0 && Gc.call(t, i) && (n[i] = t[i]);
      return n;
    },
    Bg = (t) => {
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
    Ng = ({ variant: t, isDisabled: e }) =>
      R(
        Ps(
          li(
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
            Bg(t)
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
    $g = () =>
      R({
        fill: 'currentColor',
        transition: `fill ${f.transitionDurationShort} ${f.transitionEasingDefault}`,
      }),
    jg = ({ alignIcon: t }) => {
      if (t === 'start') return R({ marginLeft: f.spacing2Xs });
      if (t === 'end') return R({ marginRight: f.spacing2Xs });
    },
    Hs = { textLink: Ng, textLinkIcon: $g, textLinkText: jg },
    Wg = 'a';
  function Zc(t, e) {
    let n = t,
      {
        children: i,
        className: r,
        testId: s = 'cf-ui-text-link',
        variant: a = 'primary',
        href: o,
        icon: c,
        alignIcon: h = 'start',
        isDisabled: d,
        as: u = Wg,
      } = n,
      p = Vg(n, [
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
      m = li(
        {
          ref: e,
          className: Q(Hs.textLink({ variant: a, isDisabled: d }), t.className),
          ['data-test-id']: s,
        },
        p
      ),
      g = c
        ? l.createElement(
            Ee,
            { as: 'span' },
            l.cloneElement(c, { className: Q(c.props.className, Hs.textLinkIcon()), size: 'small' })
          )
        : null,
      b = l.createElement(
        l.Fragment,
        null,
        c && h === 'start' && g,
        i &&
          l.createElement('span', { className: Hs.textLinkText({ alignIcon: c ? h : void 0 }) }, i),
        c && h === 'end' && g
      );
    return u === 'button'
      ? l.createElement('button', Ps(li({}, m), { disabled: d, type: 'button' }), b)
      : l.createElement(
          'a',
          li(
            Ps(li({}, m), {
              onClick: d
                ? (v) => {
                    v.preventDefault();
                  }
                : m.onClick,
              href: o,
            }),
            d ? { tabIndex: -1 } : {}
          ),
          b
        );
  }
  Zc.displayName = 'TextLink';
  var Fs = l.forwardRef(Zc);
  const Xg = (t) => {
    const {
        body: e,
        substring: n,
        onClick: i = () => {},
        hyperLinkHref: r,
        icon: s,
        alignIcon: a,
      } = t,
      o = (h) =>
        ve.jsx(
          Fs,
          {
            onClick: i,
            href: r,
            target: '_blank',
            rel: 'noopener noreferer',
            icon: s,
            alignIcon: a,
            children: n,
          },
          `textLink-${h}`
        );
    return (() => e.split(n).reduce((d, u, p) => (p ? d.concat(o(p), u) : [u]), []))();
  };
  /*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   */ function ci(t) {
    return (t + 0.5) | 0;
  }
  const Gt = (t, e, n) => Math.max(Math.min(t, n), e);
  function hi(t) {
    return Gt(ci(t * 2.55), 0, 255);
  }
  function Kt(t) {
    return Gt(ci(t * 255), 0, 255);
  }
  function At(t) {
    return Gt(ci(t / 2.55) / 100, 0, 1);
  }
  function Qc(t) {
    return Gt(ci(t * 100), 0, 100);
  }
  const ht = {
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
    Vs = [...'0123456789ABCDEF'],
    Yg = (t) => Vs[t & 15],
    Ug = (t) => Vs[(t & 240) >> 4] + Vs[t & 15],
    gr = (t) => (t & 240) >> 4 === (t & 15),
    qg = (t) => gr(t.r) && gr(t.g) && gr(t.b) && gr(t.a);
  function Gg(t) {
    var e = t.length,
      n;
    return (
      t[0] === '#' &&
        (e === 4 || e === 5
          ? (n = {
              r: 255 & (ht[t[1]] * 17),
              g: 255 & (ht[t[2]] * 17),
              b: 255 & (ht[t[3]] * 17),
              a: e === 5 ? ht[t[4]] * 17 : 255,
            })
          : (e === 7 || e === 9) &&
            (n = {
              r: (ht[t[1]] << 4) | ht[t[2]],
              g: (ht[t[3]] << 4) | ht[t[4]],
              b: (ht[t[5]] << 4) | ht[t[6]],
              a: e === 9 ? (ht[t[7]] << 4) | ht[t[8]] : 255,
            })),
      n
    );
  }
  const Kg = (t, e) => (t < 255 ? e(t) : '');
  function Zg(t) {
    var e = qg(t) ? Yg : Ug;
    return t ? '#' + e(t.r) + e(t.g) + e(t.b) + Kg(t.a, e) : void 0;
  }
  const Qg =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function Jc(t, e, n) {
    const i = e * Math.min(n, 1 - n),
      r = (s, a = (s + t / 30) % 12) => n - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return [r(0), r(8), r(4)];
  }
  function Jg(t, e, n) {
    const i = (r, s = (r + t / 60) % 6) => n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
    return [i(5), i(3), i(1)];
  }
  function _g(t, e, n) {
    const i = Jc(t, 1, 0.5);
    let r;
    for (e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0; r < 3; r++)
      (i[r] *= 1 - e - n), (i[r] += e);
    return i;
  }
  function e2(t, e, n, i, r) {
    return t === r ? (e - n) / i + (e < n ? 6 : 0) : e === r ? (n - t) / i + 2 : (t - e) / i + 4;
  }
  function Bs(t) {
    const n = t.r / 255,
      i = t.g / 255,
      r = t.b / 255,
      s = Math.max(n, i, r),
      a = Math.min(n, i, r),
      o = (s + a) / 2;
    let c, h, d;
    return (
      s !== a &&
        ((d = s - a),
        (h = o > 0.5 ? d / (2 - s - a) : d / (s + a)),
        (c = e2(n, i, r, d, s)),
        (c = c * 60 + 0.5)),
      [c | 0, h || 0, o]
    );
  }
  function Ns(t, e, n, i) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(Kt);
  }
  function $s(t, e, n) {
    return Ns(Jc, t, e, n);
  }
  function t2(t, e, n) {
    return Ns(_g, t, e, n);
  }
  function n2(t, e, n) {
    return Ns(Jg, t, e, n);
  }
  function _c(t) {
    return ((t % 360) + 360) % 360;
  }
  function i2(t) {
    const e = Qg.exec(t);
    let n = 255,
      i;
    if (!e) return;
    e[5] !== i && (n = e[6] ? hi(+e[5]) : Kt(+e[5]));
    const r = _c(+e[2]),
      s = +e[3] / 100,
      a = +e[4] / 100;
    return (
      e[1] === 'hwb' ? (i = t2(r, s, a)) : e[1] === 'hsv' ? (i = n2(r, s, a)) : (i = $s(r, s, a)),
      { r: i[0], g: i[1], b: i[2], a: n }
    );
  }
  function r2(t, e) {
    var n = Bs(t);
    (n[0] = _c(n[0] + e)), (n = $s(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
  }
  function s2(t) {
    if (!t) return;
    const e = Bs(t),
      n = e[0],
      i = Qc(e[1]),
      r = Qc(e[2]);
    return t.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${At(t.a)})` : `hsl(${n}, ${i}%, ${r}%)`;
  }
  const eh = {
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
    th = {
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
  function a2() {
    const t = {},
      e = Object.keys(th),
      n = Object.keys(eh);
    let i, r, s, a, o;
    for (i = 0; i < e.length; i++) {
      for (a = o = e[i], r = 0; r < n.length; r++) (s = n[r]), (o = o.replace(s, eh[s]));
      (s = parseInt(th[a], 16)), (t[o] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
    }
    return t;
  }
  let vr;
  function o2(t) {
    vr || ((vr = a2()), (vr.transparent = [0, 0, 0, 0]));
    const e = vr[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
  }
  const l2 =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function c2(t) {
    const e = l2.exec(t);
    let n = 255,
      i,
      r,
      s;
    if (e) {
      if (e[7] !== i) {
        const a = +e[7];
        n = e[8] ? hi(a) : Gt(a * 255, 0, 255);
      }
      return (
        (i = +e[1]),
        (r = +e[3]),
        (s = +e[5]),
        (i = 255 & (e[2] ? hi(i) : Gt(i, 0, 255))),
        (r = 255 & (e[4] ? hi(r) : Gt(r, 0, 255))),
        (s = 255 & (e[6] ? hi(s) : Gt(s, 0, 255))),
        { r: i, g: r, b: s, a: n }
      );
    }
  }
  function h2(t) {
    return (
      t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${At(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`)
    );
  }
  const js = (t) => (t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055),
    Tn = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
  function d2(t, e, n) {
    const i = Tn(At(t.r)),
      r = Tn(At(t.g)),
      s = Tn(At(t.b));
    return {
      r: Kt(js(i + n * (Tn(At(e.r)) - i))),
      g: Kt(js(r + n * (Tn(At(e.g)) - r))),
      b: Kt(js(s + n * (Tn(At(e.b)) - s))),
      a: t.a + n * (e.a - t.a),
    };
  }
  function br(t, e, n) {
    if (t) {
      let i = Bs(t);
      (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
        (i = $s(i)),
        (t.r = i[0]),
        (t.g = i[1]),
        (t.b = i[2]);
    }
  }
  function nh(t, e) {
    return t && Object.assign(e || {}, t);
  }
  function ih(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(t)
        ? t.length >= 3 &&
          ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = Kt(t[3])))
        : ((e = nh(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Kt(e.a))),
      e
    );
  }
  function u2(t) {
    return t.charAt(0) === 'r' ? c2(t) : i2(t);
  }
  class di {
    constructor(e) {
      if (e instanceof di) return e;
      const n = typeof e;
      let i;
      n === 'object' ? (i = ih(e)) : n === 'string' && (i = Gg(e) || o2(e) || u2(e)),
        (this._rgb = i),
        (this._valid = !!i);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var e = nh(this._rgb);
      return e && (e.a = At(e.a)), e;
    }
    set rgb(e) {
      this._rgb = ih(e);
    }
    rgbString() {
      return this._valid ? h2(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? Zg(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? s2(this._rgb) : void 0;
    }
    mix(e, n) {
      if (e) {
        const i = this.rgb,
          r = e.rgb;
        let s;
        const a = n === s ? 0.5 : n,
          o = 2 * a - 1,
          c = i.a - r.a,
          h = ((o * c === -1 ? o : (o + c) / (1 + o * c)) + 1) / 2;
        (s = 1 - h),
          (i.r = 255 & (h * i.r + s * r.r + 0.5)),
          (i.g = 255 & (h * i.g + s * r.g + 0.5)),
          (i.b = 255 & (h * i.b + s * r.b + 0.5)),
          (i.a = a * i.a + (1 - a) * r.a),
          (this.rgb = i);
      }
      return this;
    }
    interpolate(e, n) {
      return e && (this._rgb = d2(this._rgb, e._rgb, n)), this;
    }
    clone() {
      return new di(this.rgb);
    }
    alpha(e) {
      return (this._rgb.a = Kt(e)), this;
    }
    clearer(e) {
      const n = this._rgb;
      return (n.a *= 1 - e), this;
    }
    greyscale() {
      const e = this._rgb,
        n = ci(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
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
      return br(this._rgb, 2, e), this;
    }
    darken(e) {
      return br(this._rgb, 2, -e), this;
    }
    saturate(e) {
      return br(this._rgb, 1, e), this;
    }
    desaturate(e) {
      return br(this._rgb, 1, -e), this;
    }
    rotate(e) {
      return r2(this._rgb, e), this;
    }
  }
  /*!
   * Chart.js v4.3.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ function Tt() {}
  const f2 = (() => {
    let t = 0;
    return () => t++;
  })();
  function be(t) {
    return t === null || typeof t > 'u';
  }
  function Ce(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return e.slice(0, 7) === '[object' && e.slice(-6) === 'Array]';
  }
  function ae(t) {
    return t !== null && Object.prototype.toString.call(t) === '[object Object]';
  }
  function Fe(t) {
    return (typeof t == 'number' || t instanceof Number) && isFinite(+t);
  }
  function tt(t, e) {
    return Fe(t) ? t : e;
  }
  function fe(t, e) {
    return typeof t > 'u' ? e : t;
  }
  const p2 = (t, e) => (typeof t == 'string' && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t);
  function ke(t, e, n) {
    if (t && typeof t.call == 'function') return t.apply(n, e);
  }
  function de(t, e, n, i) {
    let r, s, a;
    if (Ce(t))
      if (((s = t.length), i)) for (r = s - 1; r >= 0; r--) e.call(n, t[r], r);
      else for (r = 0; r < s; r++) e.call(n, t[r], r);
    else if (ae(t))
      for (a = Object.keys(t), s = a.length, r = 0; r < s; r++) e.call(n, t[a[r]], a[r]);
  }
  function yr(t, e) {
    let n, i, r, s;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, i = t.length; n < i; ++n)
      if (((r = t[n]), (s = e[n]), r.datasetIndex !== s.datasetIndex || r.index !== s.index))
        return !1;
    return !0;
  }
  function xr(t) {
    if (Ce(t)) return t.map(xr);
    if (ae(t)) {
      const e = Object.create(null),
        n = Object.keys(t),
        i = n.length;
      let r = 0;
      for (; r < i; ++r) e[n[r]] = xr(t[n[r]]);
      return e;
    }
    return t;
  }
  function rh(t) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(t) === -1;
  }
  function m2(t, e, n, i) {
    if (!rh(t)) return;
    const r = e[t],
      s = n[t];
    ae(r) && ae(s) ? ui(r, s, i) : (e[t] = xr(s));
  }
  function ui(t, e, n) {
    const i = Ce(e) ? e : [e],
      r = i.length;
    if (!ae(t)) return t;
    n = n || {};
    const s = n.merger || m2;
    let a;
    for (let o = 0; o < r; ++o) {
      if (((a = i[o]), !ae(a))) continue;
      const c = Object.keys(a);
      for (let h = 0, d = c.length; h < d; ++h) s(c[h], t, a, n);
    }
    return t;
  }
  function fi(t, e) {
    return ui(t, e, { merger: g2 });
  }
  function g2(t, e, n) {
    if (!rh(t)) return;
    const i = e[t],
      r = n[t];
    ae(i) && ae(r) ? fi(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = xr(r));
  }
  const sh = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
  function v2(t) {
    const e = t.split('.'),
      n = [];
    let i = '';
    for (const r of e)
      (i += r), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (n.push(i), (i = ''));
    return n;
  }
  function b2(t) {
    const e = v2(t);
    return (n) => {
      for (const i of e) {
        if (i === '') break;
        n = n && n[i];
      }
      return n;
    };
  }
  function wr(t, e) {
    return (sh[e] || (sh[e] = b2(e)))(t);
  }
  function Ws(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const Er = (t) => typeof t < 'u',
    Zt = (t) => typeof t == 'function',
    ah = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const n of t) if (!e.has(n)) return !1;
      return !0;
    };
  function y2(t) {
    return t.type === 'mouseup' || t.type === 'click' || t.type === 'contextmenu';
  }
  const Pe = Math.PI,
    dt = 2 * Pe,
    x2 = dt + Pe,
    Cr = Number.POSITIVE_INFINITY,
    w2 = Pe / 180,
    Ge = Pe / 2,
    pn = Pe / 4,
    oh = (Pe * 2) / 3,
    Qt = Math.log10,
    Pn = Math.sign;
  function pi(t, e, n) {
    return Math.abs(t - e) < n;
  }
  function lh(t) {
    const e = Math.round(t);
    t = pi(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(Qt(t))),
      i = t / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
  }
  function E2(t) {
    const e = [],
      n = Math.sqrt(t);
    let i;
    for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
    return n === (n | 0) && e.push(n), e.sort((r, s) => r - s).pop(), e;
  }
  function mi(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function C2(t, e) {
    const n = Math.round(t);
    return n - e <= t && n + e >= t;
  }
  function ch(t, e, n) {
    let i, r, s;
    for (i = 0, r = t.length; i < r; i++)
      (s = t[i][n]), isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
  }
  function Jt(t) {
    return t * (Pe / 180);
  }
  function Xs(t) {
    return t * (180 / Pe);
  }
  function hh(t) {
    if (!Fe(t)) return;
    let e = 1,
      n = 0;
    for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
    return n;
  }
  function M2(t, e) {
    const n = e.x - t.x,
      i = e.y - t.y,
      r = Math.sqrt(n * n + i * i);
    let s = Math.atan2(i, n);
    return s < -0.5 * Pe && (s += dt), { angle: s, distance: r };
  }
  function Ys(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function S2(t, e) {
    return ((t - e + x2) % dt) - Pe;
  }
  function Et(t) {
    return ((t % dt) + dt) % dt;
  }
  function dh(t, e, n, i) {
    const r = Et(t),
      s = Et(e),
      a = Et(n),
      o = Et(s - r),
      c = Et(a - r),
      h = Et(r - s),
      d = Et(r - a);
    return r === s || r === a || (i && s === a) || (o > c && h < d);
  }
  function ut(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function k2(t) {
    return ut(t, -32768, 32767);
  }
  function z2(t, e, n, i = 1e-6) {
    return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
  }
  function Us(t, e, n) {
    n = n || ((a) => t[a] < e);
    let i = t.length - 1,
      r = 0,
      s;
    for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
    return { lo: r, hi: i };
  }
  const mn = (t, e, n, i) =>
      Us(
        t,
        n,
        i
          ? (r) => {
              const s = t[r][e];
              return s < n || (s === n && t[r + 1][e] === n);
            }
          : (r) => t[r][e] < n
      ),
    O2 = (t, e, n) => Us(t, n, (i) => t[i][e] >= n);
  function L2(t, e, n) {
    let i = 0,
      r = t.length;
    for (; i < r && t[i] < e; ) i++;
    for (; r > i && t[r - 1] > n; ) r--;
    return i > 0 || r < t.length ? t.slice(i, r) : t;
  }
  const uh = ['push', 'pop', 'shift', 'splice', 'unshift'];
  function R2(t, e) {
    if (t._chartjs) {
      t._chartjs.listeners.push(e);
      return;
    }
    Object.defineProperty(t, '_chartjs', {
      configurable: !0,
      enumerable: !1,
      value: { listeners: [e] },
    }),
      uh.forEach((n) => {
        const i = '_onData' + Ws(n),
          r = t[n];
        Object.defineProperty(t, n, {
          configurable: !0,
          enumerable: !1,
          value(...s) {
            const a = r.apply(this, s);
            return (
              t._chartjs.listeners.forEach((o) => {
                typeof o[i] == 'function' && o[i](...s);
              }),
              a
            );
          },
        });
      });
  }
  function fh(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const i = n.listeners,
      r = i.indexOf(e);
    r !== -1 && i.splice(r, 1),
      !(i.length > 0) &&
        (uh.forEach((s) => {
          delete t[s];
        }),
        delete t._chartjs);
  }
  function I2(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  const ph = (function () {
    return typeof window > 'u'
      ? function (t) {
          return t();
        }
      : window.requestAnimationFrame;
  })();
  function mh(t, e) {
    let n = [],
      i = !1;
    return function (...r) {
      (n = r),
        i ||
          ((i = !0),
          ph.call(window, () => {
            (i = !1), t.apply(e, n);
          }));
    };
  }
  function D2(t, e) {
    let n;
    return function (...i) {
      return e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e;
    };
  }
  const gh = (t) => (t === 'start' ? 'left' : t === 'end' ? 'right' : 'center'),
    gi = (t, e, n) => (t === 'start' ? e : t === 'end' ? n : (e + n) / 2);
  function A2(t, e, n) {
    const i = e.length;
    let r = 0,
      s = i;
    if (t._sorted) {
      const { iScale: a, _parsed: o } = t,
        c = a.axis,
        { min: h, max: d, minDefined: u, maxDefined: p } = a.getUserBounds();
      u &&
        (r = ut(
          Math.min(mn(o, a.axis, h).lo, n ? i : mn(e, c, a.getPixelForValue(h)).lo),
          0,
          i - 1
        )),
        p
          ? (s =
              ut(
                Math.max(
                  mn(o, a.axis, d, !0).hi + 1,
                  n ? 0 : mn(e, c, a.getPixelForValue(d), !0).hi + 1
                ),
                r,
                i
              ) - r)
          : (s = i - r);
    }
    return { start: r, count: s };
  }
  function T2(t) {
    const { xScale: e, yScale: n, _scaleRanges: i } = t,
      r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
    if (!i) return (t._scaleRanges = r), !0;
    const s = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max;
    return Object.assign(i, r), s;
  }
  const Mr = (t) => t === 0 || t === 1,
    vh = (t, e, n) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * dt) / n)),
    bh = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * dt) / n) + 1,
    vi = {
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
      easeInSine: (t) => -Math.cos(t * Ge) + 1,
      easeOutSine: (t) => Math.sin(t * Ge),
      easeInOutSine: (t) => -0.5 * (Math.cos(Pe * t) - 1),
      easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
      easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
      easeInOutExpo: (t) =>
        Mr(t)
          ? t
          : t < 0.5
          ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
      easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
      easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: (t) =>
        (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: (t) => (Mr(t) ? t : vh(t, 0.075, 0.3)),
      easeOutElastic: (t) => (Mr(t) ? t : bh(t, 0.075, 0.3)),
      easeInOutElastic(t) {
        return Mr(t)
          ? t
          : t < 0.5
          ? 0.5 * vh(t * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * bh(t * 2 - 1, 0.1125, 0.45);
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
      easeInBounce: (t) => 1 - vi.easeOutBounce(1 - t),
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
        t < 0.5 ? vi.easeInBounce(t * 2) * 0.5 : vi.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
    };
  function qs(t) {
    if (t && typeof t == 'object') {
      const e = t.toString();
      return e === '[object CanvasPattern]' || e === '[object CanvasGradient]';
    }
    return !1;
  }
  function yh(t) {
    return qs(t) ? t : new di(t);
  }
  function Gs(t) {
    return qs(t) ? t : new di(t).saturate(0.5).darken(0.1).hexString();
  }
  const P2 = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    H2 = ['color', 'borderColor', 'backgroundColor'];
  function F2(t) {
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
        colors: { type: 'color', properties: H2 },
        numbers: { type: 'number', properties: P2 },
      }),
      t.describe('animations', { _fallback: 'animation' }),
      t.set('transitions', {
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
            visible: { type: 'boolean', easing: 'linear', fn: (e) => e | 0 },
          },
        },
      });
  }
  function V2(t) {
    t.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
  }
  const xh = new Map();
  function B2(t, e) {
    e = e || {};
    const n = t + JSON.stringify(e);
    let i = xh.get(n);
    return i || ((i = new Intl.NumberFormat(t, e)), xh.set(n, i)), i;
  }
  function Ks(t, e, n) {
    return B2(e, n).format(t);
  }
  const wh = {
    values(t) {
      return Ce(t) ? t : '' + t;
    },
    numeric(t, e, n) {
      if (t === 0) return '0';
      const i = this.chart.options.locale;
      let r,
        s = t;
      if (n.length > 1) {
        const h = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
        (h < 1e-4 || h > 1e15) && (r = 'scientific'), (s = N2(t, n));
      }
      const a = Qt(Math.abs(s)),
        o = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
        c = { notation: r, minimumFractionDigits: o, maximumFractionDigits: o };
      return Object.assign(c, this.options.ticks.format), Ks(t, i, c);
    },
    logarithmic(t, e, n) {
      if (t === 0) return '0';
      const i = n[e].significand || t / Math.pow(10, Math.floor(Qt(t)));
      return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
        ? wh.numeric.call(this, t, e, n)
        : '';
    },
  };
  function N2(t, e) {
    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
    return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
  }
  var Sr = { formatters: wh };
  function $2(t) {
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
        callback: Sr.formatters.values,
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
      t.describe('scales', { _fallback: 'scale' }),
      t.describe('scale.ticks', {
        _scriptable: (e) => e !== 'backdropPadding' && e !== 'callback',
        _indexable: (e) => e !== 'backdropPadding',
      });
  }
  const gn = Object.create(null),
    Zs = Object.create(null);
  function bi(t, e) {
    if (!e) return t;
    const n = e.split('.');
    for (let i = 0, r = n.length; i < r; ++i) {
      const s = n[i];
      t = t[s] || (t[s] = Object.create(null));
    }
    return t;
  }
  function Qs(t, e, n) {
    return typeof e == 'string' ? ui(bi(t, e), n) : ui(bi(t, ''), e);
  }
  class j2 {
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
        (this.hoverBackgroundColor = (i, r) => Gs(r.backgroundColor)),
        (this.hoverBorderColor = (i, r) => Gs(r.borderColor)),
        (this.hoverColor = (i, r) => Gs(r.color)),
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
        this.describe(e),
        this.apply(n);
    }
    set(e, n) {
      return Qs(this, e, n);
    }
    get(e) {
      return bi(this, e);
    }
    describe(e, n) {
      return Qs(Zs, e, n);
    }
    override(e, n) {
      return Qs(gn, e, n);
    }
    route(e, n, i, r) {
      const s = bi(this, e),
        a = bi(this, i),
        o = '_' + n;
      Object.defineProperties(s, {
        [o]: { value: s[n], writable: !0 },
        [n]: {
          enumerable: !0,
          get() {
            const c = this[o],
              h = a[r];
            return ae(c) ? Object.assign({}, h, c) : fe(c, h);
          },
          set(c) {
            this[o] = c;
          },
        },
      });
    }
    apply(e) {
      e.forEach((n) => n(this));
    }
  }
  var Oe = new j2(
    {
      _scriptable: (t) => !t.startsWith('on'),
      _indexable: (t) => t !== 'events',
      hover: { _fallback: 'interaction' },
      interaction: { _scriptable: !1, _indexable: !1 },
    },
    [F2, V2, $2]
  );
  function W2(t) {
    return !t || be(t.size) || be(t.family)
      ? null
      : (t.style ? t.style + ' ' : '') +
          (t.weight ? t.weight + ' ' : '') +
          t.size +
          'px ' +
          t.family;
  }
  function kr(t, e, n, i, r) {
    let s = e[r];
    return s || ((s = e[r] = t.measureText(r).width), n.push(r)), s > i && (i = s), i;
  }
  function X2(t, e, n, i) {
    i = i || {};
    let r = (i.data = i.data || {}),
      s = (i.garbageCollect = i.garbageCollect || []);
    i.font !== e && ((r = i.data = {}), (s = i.garbageCollect = []), (i.font = e)),
      t.save(),
      (t.font = e);
    let a = 0;
    const o = n.length;
    let c, h, d, u, p;
    for (c = 0; c < o; c++)
      if (((u = n[c]), u != null && !Ce(u))) a = kr(t, r, s, a, u);
      else if (Ce(u))
        for (h = 0, d = u.length; h < d; h++)
          (p = u[h]), p != null && !Ce(p) && (a = kr(t, r, s, a, p));
    t.restore();
    const m = s.length / 2;
    if (m > n.length) {
      for (c = 0; c < m; c++) delete r[s[c]];
      s.splice(0, m);
    }
    return a;
  }
  function vn(t, e, n) {
    const i = t.currentDevicePixelRatio,
      r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
    return Math.round((e - r) * i) / i + r;
  }
  function Eh(t, e) {
    (e = e || t.getContext('2d')),
      e.save(),
      e.resetTransform(),
      e.clearRect(0, 0, t.width, t.height),
      e.restore();
  }
  function Js(t, e, n, i) {
    Y2(t, e, n, i, null);
  }
  function Y2(t, e, n, i, r) {
    let s, a, o, c, h, d, u, p;
    const m = e.pointStyle,
      g = e.rotation,
      b = e.radius;
    let v = (g || 0) * w2;
    if (
      m &&
      typeof m == 'object' &&
      ((s = m.toString()), s === '[object HTMLImageElement]' || s === '[object HTMLCanvasElement]')
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
          r ? t.ellipse(n, i, r / 2, b, 0, 0, dt) : t.arc(n, i, b, 0, dt), t.closePath();
          break;
        case 'triangle':
          (d = r ? r / 2 : b),
            t.moveTo(n + Math.sin(v) * d, i - Math.cos(v) * b),
            (v += oh),
            t.lineTo(n + Math.sin(v) * d, i - Math.cos(v) * b),
            (v += oh),
            t.lineTo(n + Math.sin(v) * d, i - Math.cos(v) * b),
            t.closePath();
          break;
        case 'rectRounded':
          (h = b * 0.516),
            (c = b - h),
            (a = Math.cos(v + pn) * c),
            (u = Math.cos(v + pn) * (r ? r / 2 - h : c)),
            (o = Math.sin(v + pn) * c),
            (p = Math.sin(v + pn) * (r ? r / 2 - h : c)),
            t.arc(n - u, i - o, h, v - Pe, v - Ge),
            t.arc(n + p, i - a, h, v - Ge, v),
            t.arc(n + u, i + o, h, v, v + Ge),
            t.arc(n - p, i + a, h, v + Ge, v + Pe),
            t.closePath();
          break;
        case 'rect':
          if (!g) {
            (c = Math.SQRT1_2 * b), (d = r ? r / 2 : c), t.rect(n - d, i - c, 2 * d, 2 * c);
            break;
          }
          v += pn;
        case 'rectRot':
          (u = Math.cos(v) * (r ? r / 2 : b)),
            (a = Math.cos(v) * b),
            (o = Math.sin(v) * b),
            (p = Math.sin(v) * (r ? r / 2 : b)),
            t.moveTo(n - u, i - o),
            t.lineTo(n + p, i - a),
            t.lineTo(n + u, i + o),
            t.lineTo(n - p, i + a),
            t.closePath();
          break;
        case 'crossRot':
          v += pn;
        case 'cross':
          (u = Math.cos(v) * (r ? r / 2 : b)),
            (a = Math.cos(v) * b),
            (o = Math.sin(v) * b),
            (p = Math.sin(v) * (r ? r / 2 : b)),
            t.moveTo(n - u, i - o),
            t.lineTo(n + u, i + o),
            t.moveTo(n + p, i - a),
            t.lineTo(n - p, i + a);
          break;
        case 'star':
          (u = Math.cos(v) * (r ? r / 2 : b)),
            (a = Math.cos(v) * b),
            (o = Math.sin(v) * b),
            (p = Math.sin(v) * (r ? r / 2 : b)),
            t.moveTo(n - u, i - o),
            t.lineTo(n + u, i + o),
            t.moveTo(n + p, i - a),
            t.lineTo(n - p, i + a),
            (v += pn),
            (u = Math.cos(v) * (r ? r / 2 : b)),
            (a = Math.cos(v) * b),
            (o = Math.sin(v) * b),
            (p = Math.sin(v) * (r ? r / 2 : b)),
            t.moveTo(n - u, i - o),
            t.lineTo(n + u, i + o),
            t.moveTo(n + p, i - a),
            t.lineTo(n - p, i + a);
          break;
        case 'line':
          (a = r ? r / 2 : Math.cos(v) * b),
            (o = Math.sin(v) * b),
            t.moveTo(n - a, i - o),
            t.lineTo(n + a, i + o);
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
  function Pt(t, e, n) {
    return (
      (n = n || 0.5),
      !e || (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n)
    );
  }
  function Ch(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
  }
  function Mh(t) {
    t.restore();
  }
  function U2(t, e, n, i, r) {
    if (!e) return t.lineTo(n.x, n.y);
    if (r === 'middle') {
      const s = (e.x + n.x) / 2;
      t.lineTo(s, e.y), t.lineTo(s, n.y);
    } else (r === 'after') != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
    t.lineTo(n.x, n.y);
  }
  function q2(t, e, n, i) {
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
  function G2(t, e) {
    e.translation && t.translate(e.translation[0], e.translation[1]),
      be(e.rotation) || t.rotate(e.rotation),
      e.color && (t.fillStyle = e.color),
      e.textAlign && (t.textAlign = e.textAlign),
      e.textBaseline && (t.textBaseline = e.textBaseline);
  }
  function K2(t, e, n, i, r) {
    if (r.strikethrough || r.underline) {
      const s = t.measureText(i),
        a = e - s.actualBoundingBoxLeft,
        o = e + s.actualBoundingBoxRight,
        c = n - s.actualBoundingBoxAscent,
        h = n + s.actualBoundingBoxDescent,
        d = r.strikethrough ? (c + h) / 2 : h;
      (t.strokeStyle = t.fillStyle),
        t.beginPath(),
        (t.lineWidth = r.decorationWidth || 2),
        t.moveTo(a, d),
        t.lineTo(o, d),
        t.stroke();
    }
  }
  function Z2(t, e) {
    const n = t.fillStyle;
    (t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = n);
  }
  function yi(t, e, n, i, r, s = {}) {
    const a = Ce(e) ? e : [e],
      o = s.strokeWidth > 0 && s.strokeColor !== '';
    let c, h;
    for (t.save(), t.font = r.string, G2(t, s), c = 0; c < a.length; ++c)
      (h = a[c]),
        s.backdrop && Z2(t, s.backdrop),
        o &&
          (s.strokeColor && (t.strokeStyle = s.strokeColor),
          be(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
          t.strokeText(h, n, i, s.maxWidth)),
        t.fillText(h, n, i, s.maxWidth),
        K2(t, n, i, h, s),
        (i += Number(r.lineHeight));
    t.restore();
  }
  function _s(t, e) {
    const { x: n, y: i, w: r, h: s, radius: a } = e;
    t.arc(n + a.topLeft, i + a.topLeft, a.topLeft, -Ge, Pe, !0),
      t.lineTo(n, i + s - a.bottomLeft),
      t.arc(n + a.bottomLeft, i + s - a.bottomLeft, a.bottomLeft, Pe, Ge, !0),
      t.lineTo(n + r - a.bottomRight, i + s),
      t.arc(n + r - a.bottomRight, i + s - a.bottomRight, a.bottomRight, Ge, 0, !0),
      t.lineTo(n + r, i + a.topRight),
      t.arc(n + r - a.topRight, i + a.topRight, a.topRight, 0, -Ge, !0),
      t.lineTo(n + a.topLeft, i);
  }
  const Q2 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    J2 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function _2(t, e) {
    const n = ('' + t).match(Q2);
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
  const e5 = (t) => +t || 0;
  function Sh(t, e) {
    const n = {},
      i = ae(e),
      r = i ? Object.keys(e) : e,
      s = ae(t) ? (i ? (a) => fe(t[a], t[e[a]]) : (a) => t[a]) : () => t;
    for (const a of r) n[a] = e5(s(a));
    return n;
  }
  function t5(t) {
    return Sh(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
  }
  function xi(t) {
    return Sh(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
  function nt(t) {
    const e = t5(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
  }
  function Xe(t, e) {
    (t = t || {}), (e = e || Oe.font);
    let n = fe(t.size, e.size);
    typeof n == 'string' && (n = parseInt(n, 10));
    let i = fe(t.style, e.style);
    i &&
      !('' + i).match(J2) &&
      (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
    const r = {
      family: fe(t.family, e.family),
      lineHeight: _2(fe(t.lineHeight, e.lineHeight), n),
      size: n,
      style: i,
      weight: fe(t.weight, e.weight),
      string: '',
    };
    return (r.string = W2(r)), r;
  }
  function zr(t, e, n, i) {
    let r = !0,
      s,
      a,
      o;
    for (s = 0, a = t.length; s < a; ++s)
      if (
        ((o = t[s]),
        o !== void 0 &&
          (e !== void 0 && typeof o == 'function' && ((o = o(e)), (r = !1)),
          n !== void 0 && Ce(o) && ((o = o[n % o.length]), (r = !1)),
          o !== void 0))
      )
        return i && !r && (i.cacheable = !1), o;
  }
  function n5(t, e, n) {
    const { min: i, max: r } = t,
      s = p2(e, (r - i) / 2),
      a = (o, c) => (n && o === 0 ? 0 : o + c);
    return { min: a(i, -Math.abs(s)), max: a(r, s) };
  }
  function _t(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function ea(t, e = [''], n, i, r = () => t[0]) {
    const s = n || t;
    typeof i > 'u' && (i = Rh('_fallback', t));
    const a = {
      [Symbol.toStringTag]: 'Object',
      _cacheable: !0,
      _scopes: t,
      _rootScopes: s,
      _fallback: i,
      _getTarget: r,
      override: (o) => ea([o, ...t], e, s, i),
    };
    return new Proxy(a, {
      deleteProperty(o, c) {
        return delete o[c], delete o._keys, delete t[0][c], !0;
      },
      get(o, c) {
        return zh(o, c, () => h5(c, e, t, o));
      },
      getOwnPropertyDescriptor(o, c) {
        return Reflect.getOwnPropertyDescriptor(o._scopes[0], c);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(t[0]);
      },
      has(o, c) {
        return Ih(o).includes(c);
      },
      ownKeys(o) {
        return Ih(o);
      },
      set(o, c, h) {
        const d = o._storage || (o._storage = r());
        return (o[c] = d[c] = h), delete o._keys, !0;
      },
    });
  }
  function Hn(t, e, n, i) {
    const r = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: n,
      _stack: new Set(),
      _descriptors: kh(t, i),
      setContext: (s) => Hn(t, s, n, i),
      override: (s) => Hn(t.override(s), e, n, i),
    };
    return new Proxy(r, {
      deleteProperty(s, a) {
        return delete s[a], delete t[a], !0;
      },
      get(s, a, o) {
        return zh(s, a, () => r5(s, a, o));
      },
      getOwnPropertyDescriptor(s, a) {
        return s._descriptors.allKeys
          ? Reflect.has(t, a)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(t, a);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(t);
      },
      has(s, a) {
        return Reflect.has(t, a);
      },
      ownKeys() {
        return Reflect.ownKeys(t);
      },
      set(s, a, o) {
        return (t[a] = o), delete s[a], !0;
      },
    });
  }
  function kh(t, e = { scriptable: !0, indexable: !0 }) {
    const {
      _scriptable: n = e.scriptable,
      _indexable: i = e.indexable,
      _allKeys: r = e.allKeys,
    } = t;
    return {
      allKeys: r,
      scriptable: n,
      indexable: i,
      isScriptable: Zt(n) ? n : () => n,
      isIndexable: Zt(i) ? i : () => i,
    };
  }
  const i5 = (t, e) => (t ? t + Ws(e) : e),
    ta = (t, e) =>
      ae(e) && t !== 'adapters' && (Object.getPrototypeOf(e) === null || e.constructor === Object);
  function zh(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    const i = n();
    return (t[e] = i), i;
  }
  function r5(t, e, n) {
    const { _proxy: i, _context: r, _subProxy: s, _descriptors: a } = t;
    let o = i[e];
    return (
      Zt(o) && a.isScriptable(e) && (o = s5(e, o, t, n)),
      Ce(o) && o.length && (o = a5(e, o, t, a.isIndexable)),
      ta(e, o) && (o = Hn(o, r, s && s[e], a)),
      o
    );
  }
  function s5(t, e, n, i) {
    const { _proxy: r, _context: s, _subProxy: a, _stack: o } = n;
    if (o.has(t)) throw new Error('Recursion detected: ' + Array.from(o).join('->') + '->' + t);
    o.add(t);
    let c = e(s, a || i);
    return o.delete(t), ta(t, c) && (c = na(r._scopes, r, t, c)), c;
  }
  function a5(t, e, n, i) {
    const { _proxy: r, _context: s, _subProxy: a, _descriptors: o } = n;
    if (typeof s.index < 'u' && i(t)) return e[s.index % e.length];
    if (ae(e[0])) {
      const c = e,
        h = r._scopes.filter((d) => d !== c);
      e = [];
      for (const d of c) {
        const u = na(h, r, t, d);
        e.push(Hn(u, s, a && a[t], o));
      }
    }
    return e;
  }
  function Oh(t, e, n) {
    return Zt(t) ? t(e, n) : t;
  }
  const o5 = (t, e) => (t === !0 ? e : typeof t == 'string' ? wr(e, t) : void 0);
  function l5(t, e, n, i, r) {
    for (const s of e) {
      const a = o5(n, s);
      if (a) {
        t.add(a);
        const o = Oh(a._fallback, n, r);
        if (typeof o < 'u' && o !== n && o !== i) return o;
      } else if (a === !1 && typeof i < 'u' && n !== i) return null;
    }
    return !1;
  }
  function na(t, e, n, i) {
    const r = e._rootScopes,
      s = Oh(e._fallback, n, i),
      a = [...t, ...r],
      o = new Set();
    o.add(i);
    let c = Lh(o, a, n, s || n, i);
    return c === null || (typeof s < 'u' && s !== n && ((c = Lh(o, a, s, c, i)), c === null))
      ? !1
      : ea(Array.from(o), [''], r, s, () => c5(e, n, i));
  }
  function Lh(t, e, n, i, r) {
    for (; n; ) n = l5(t, e, n, i, r);
    return n;
  }
  function c5(t, e, n) {
    const i = t._getTarget();
    e in i || (i[e] = {});
    const r = i[e];
    return Ce(r) && ae(n) ? n : r || {};
  }
  function h5(t, e, n, i) {
    let r;
    for (const s of e)
      if (((r = Rh(i5(s, t), n)), typeof r < 'u')) return ta(t, r) ? na(n, i, t, r) : r;
  }
  function Rh(t, e) {
    for (const n of e) {
      if (!n) continue;
      const i = n[t];
      if (typeof i < 'u') return i;
    }
  }
  function Ih(t) {
    let e = t._keys;
    return e || (e = t._keys = d5(t._scopes)), e;
  }
  function d5(t) {
    const e = new Set();
    for (const n of t) for (const i of Object.keys(n).filter((r) => !r.startsWith('_'))) e.add(i);
    return Array.from(e);
  }
  const u5 = Number.EPSILON || 1e-14,
    Fn = (t, e) => e < t.length && !t[e].skip && t[e],
    Dh = (t) => (t === 'x' ? 'y' : 'x');
  function f5(t, e, n, i) {
    const r = t.skip ? e : t,
      s = e,
      a = n.skip ? e : n,
      o = Ys(s, r),
      c = Ys(a, s);
    let h = o / (o + c),
      d = c / (o + c);
    (h = isNaN(h) ? 0 : h), (d = isNaN(d) ? 0 : d);
    const u = i * h,
      p = i * d;
    return {
      previous: { x: s.x - u * (a.x - r.x), y: s.y - u * (a.y - r.y) },
      next: { x: s.x + p * (a.x - r.x), y: s.y + p * (a.y - r.y) },
    };
  }
  function p5(t, e, n) {
    const i = t.length;
    let r,
      s,
      a,
      o,
      c,
      h = Fn(t, 0);
    for (let d = 0; d < i - 1; ++d)
      if (((c = h), (h = Fn(t, d + 1)), !(!c || !h))) {
        if (pi(e[d], 0, u5)) {
          n[d] = n[d + 1] = 0;
          continue;
        }
        (r = n[d] / e[d]),
          (s = n[d + 1] / e[d]),
          (o = Math.pow(r, 2) + Math.pow(s, 2)),
          !(o <= 9) && ((a = 3 / Math.sqrt(o)), (n[d] = r * a * e[d]), (n[d + 1] = s * a * e[d]));
      }
  }
  function m5(t, e, n = 'x') {
    const i = Dh(n),
      r = t.length;
    let s,
      a,
      o,
      c = Fn(t, 0);
    for (let h = 0; h < r; ++h) {
      if (((a = o), (o = c), (c = Fn(t, h + 1)), !o)) continue;
      const d = o[n],
        u = o[i];
      a && ((s = (d - a[n]) / 3), (o[`cp1${n}`] = d - s), (o[`cp1${i}`] = u - s * e[h])),
        c && ((s = (c[n] - d) / 3), (o[`cp2${n}`] = d + s), (o[`cp2${i}`] = u + s * e[h]));
    }
  }
  function g5(t, e = 'x') {
    const n = Dh(e),
      i = t.length,
      r = Array(i).fill(0),
      s = Array(i);
    let a,
      o,
      c,
      h = Fn(t, 0);
    for (a = 0; a < i; ++a)
      if (((o = c), (c = h), (h = Fn(t, a + 1)), !!c)) {
        if (h) {
          const d = h[e] - c[e];
          r[a] = d !== 0 ? (h[n] - c[n]) / d : 0;
        }
        s[a] = o ? (h ? (Pn(r[a - 1]) !== Pn(r[a]) ? 0 : (r[a - 1] + r[a]) / 2) : r[a - 1]) : r[a];
      }
    p5(t, r, s), m5(t, s, e);
  }
  function Or(t, e, n) {
    return Math.max(Math.min(t, n), e);
  }
  function v5(t, e) {
    let n,
      i,
      r,
      s,
      a,
      o = Pt(t[0], e);
    for (n = 0, i = t.length; n < i; ++n)
      (a = s),
        (s = o),
        (o = n < i - 1 && Pt(t[n + 1], e)),
        s &&
          ((r = t[n]),
          a && ((r.cp1x = Or(r.cp1x, e.left, e.right)), (r.cp1y = Or(r.cp1y, e.top, e.bottom))),
          o && ((r.cp2x = Or(r.cp2x, e.left, e.right)), (r.cp2y = Or(r.cp2y, e.top, e.bottom))));
  }
  function b5(t, e, n, i, r) {
    let s, a, o, c;
    if ((e.spanGaps && (t = t.filter((h) => !h.skip)), e.cubicInterpolationMode === 'monotone'))
      g5(t, r);
    else {
      let h = i ? t[t.length - 1] : t[0];
      for (s = 0, a = t.length; s < a; ++s)
        (o = t[s]),
          (c = f5(h, o, t[Math.min(s + 1, a - (i ? 0 : 1)) % a], e.tension)),
          (o.cp1x = c.previous.x),
          (o.cp1y = c.previous.y),
          (o.cp2x = c.next.x),
          (o.cp2y = c.next.y),
          (h = o);
    }
    e.capBezierPoints && v5(t, n);
  }
  function Ah() {
    return typeof window < 'u' && typeof document < 'u';
  }
  function ia(t) {
    let e = t.parentNode;
    return e && e.toString() === '[object ShadowRoot]' && (e = e.host), e;
  }
  function Lr(t, e, n) {
    let i;
    return (
      typeof t == 'string'
        ? ((i = parseInt(t, 10)), t.indexOf('%') !== -1 && (i = (i / 100) * e.parentNode[n]))
        : (i = t),
      i
    );
  }
  const Rr = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
  function y5(t, e) {
    return Rr(t).getPropertyValue(e);
  }
  const x5 = ['top', 'right', 'bottom', 'left'];
  function bn(t, e, n) {
    const i = {};
    n = n ? '-' + n : '';
    for (let r = 0; r < 4; r++) {
      const s = x5[r];
      i[s] = parseFloat(t[e + '-' + s + n]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
  }
  const w5 = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
  function E5(t, e) {
    const n = t.touches,
      i = n && n.length ? n[0] : t,
      { offsetX: r, offsetY: s } = i;
    let a = !1,
      o,
      c;
    if (w5(r, s, t.target)) (o = r), (c = s);
    else {
      const h = e.getBoundingClientRect();
      (o = i.clientX - h.left), (c = i.clientY - h.top), (a = !0);
    }
    return { x: o, y: c, box: a };
  }
  function yn(t, e) {
    if ('native' in t) return t;
    const { canvas: n, currentDevicePixelRatio: i } = e,
      r = Rr(n),
      s = r.boxSizing === 'border-box',
      a = bn(r, 'padding'),
      o = bn(r, 'border', 'width'),
      { x: c, y: h, box: d } = E5(t, n),
      u = a.left + (d && o.left),
      p = a.top + (d && o.top);
    let { width: m, height: g } = e;
    return (
      s && ((m -= a.width + o.width), (g -= a.height + o.height)),
      {
        x: Math.round((((c - u) / m) * n.width) / i),
        y: Math.round((((h - p) / g) * n.height) / i),
      }
    );
  }
  function C5(t, e, n) {
    let i, r;
    if (e === void 0 || n === void 0) {
      const s = ia(t);
      if (!s) (e = t.clientWidth), (n = t.clientHeight);
      else {
        const a = s.getBoundingClientRect(),
          o = Rr(s),
          c = bn(o, 'border', 'width'),
          h = bn(o, 'padding');
        (e = a.width - h.width - c.width),
          (n = a.height - h.height - c.height),
          (i = Lr(o.maxWidth, s, 'clientWidth')),
          (r = Lr(o.maxHeight, s, 'clientHeight'));
      }
    }
    return { width: e, height: n, maxWidth: i || Cr, maxHeight: r || Cr };
  }
  const Ir = (t) => Math.round(t * 10) / 10;
  function M5(t, e, n, i) {
    const r = Rr(t),
      s = bn(r, 'margin'),
      a = Lr(r.maxWidth, t, 'clientWidth') || Cr,
      o = Lr(r.maxHeight, t, 'clientHeight') || Cr,
      c = C5(t, e, n);
    let { width: h, height: d } = c;
    if (r.boxSizing === 'content-box') {
      const p = bn(r, 'border', 'width'),
        m = bn(r, 'padding');
      (h -= m.width + p.width), (d -= m.height + p.height);
    }
    return (
      (h = Math.max(0, h - s.width)),
      (d = Math.max(0, i ? h / i : d - s.height)),
      (h = Ir(Math.min(h, a, c.maxWidth))),
      (d = Ir(Math.min(d, o, c.maxHeight))),
      h && !d && (d = Ir(h / 2)),
      (e !== void 0 || n !== void 0) &&
        i &&
        c.height &&
        d > c.height &&
        ((d = c.height), (h = Ir(Math.floor(d * i)))),
      { width: h, height: d }
    );
  }
  function Th(t, e, n) {
    const i = e || 1,
      r = Math.floor(t.height * i),
      s = Math.floor(t.width * i);
    (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
    const a = t.canvas;
    return (
      a.style &&
        (n || (!a.style.height && !a.style.width)) &&
        ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
      t.currentDevicePixelRatio !== i || a.height !== r || a.width !== s
        ? ((t.currentDevicePixelRatio = i),
          (a.height = r),
          (a.width = s),
          t.ctx.setTransform(i, 0, 0, i, 0, 0),
          !0)
        : !1
    );
  }
  const S5 = (function () {
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
  function Ph(t, e) {
    const n = y5(t, e),
      i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
  }
  function xn(t, e, n, i) {
    return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
  }
  function k5(t, e, n, i) {
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
  function z5(t, e, n, i) {
    const r = { x: t.cp2x, y: t.cp2y },
      s = { x: e.cp1x, y: e.cp1y },
      a = xn(t, r, n),
      o = xn(r, s, n),
      c = xn(s, e, n),
      h = xn(a, o, n),
      d = xn(o, c, n);
    return xn(h, d, n);
  }
  const O5 = function (t, e) {
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
    L5 = function () {
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
  function ra(t, e, n) {
    return t ? O5(e, n) : L5();
  }
  function R5(t, e) {
    let n, i;
    (e === 'ltr' || e === 'rtl') &&
      ((n = t.canvas.style),
      (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
      n.setProperty('direction', e, 'important'),
      (t.prevTextDirection = i));
  }
  function I5(t, e) {
    e !== void 0 &&
      (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]));
  }
  function Hh(t) {
    return t === 'angle'
      ? { between: dh, compare: S2, normalize: Et }
      : { between: z2, compare: (e, n) => e - n, normalize: (e) => e };
  }
  function Fh({ start: t, end: e, count: n, loop: i, style: r }) {
    return { start: t % n, end: e % n, loop: i && (e - t + 1) % n === 0, style: r };
  }
  function D5(t, e, n) {
    const { property: i, start: r, end: s } = n,
      { between: a, normalize: o } = Hh(i),
      c = e.length;
    let { start: h, end: d, loop: u } = t,
      p,
      m;
    if (u) {
      for (h += c, d += c, p = 0, m = c; p < m && a(o(e[h % c][i]), r, s); ++p) h--, d--;
      (h %= c), (d %= c);
    }
    return d < h && (d += c), { start: h, end: d, loop: u, style: t.style };
  }
  function A5(t, e, n) {
    if (!n) return [t];
    const { property: i, start: r, end: s } = n,
      a = e.length,
      { compare: o, between: c, normalize: h } = Hh(i),
      { start: d, end: u, loop: p, style: m } = D5(t, e, n),
      g = [];
    let b = !1,
      v = null,
      y,
      w,
      k;
    const S = () => c(r, k, y) && o(r, k) !== 0,
      M = () => o(s, y) === 0 || c(s, k, y),
      O = () => b || S(),
      C = () => !b || M();
    for (let L = d, T = d; L <= u; ++L)
      (w = e[L % a]),
        !w.skip &&
          ((y = h(w[i])),
          y !== k &&
            ((b = c(y, r, s)),
            v === null && O() && (v = o(y, r) === 0 ? L : T),
            v !== null &&
              C() &&
              (g.push(Fh({ start: v, end: L, loop: p, count: a, style: m })), (v = null)),
            (T = L),
            (k = y)));
    return v !== null && g.push(Fh({ start: v, end: u, loop: p, count: a, style: m })), g;
  }
  function T5(t, e) {
    const n = [],
      i = t.segments;
    for (let r = 0; r < i.length; r++) {
      const s = A5(i[r], t.points, e);
      s.length && n.push(...s);
    }
    return n;
  }
  function P5(t, e, n, i) {
    let r = 0,
      s = e - 1;
    if (n && !i) for (; r < e && !t[r].skip; ) r++;
    for (; r < e && t[r].skip; ) r++;
    for (r %= e, n && (s += r); s > r && t[s % e].skip; ) s--;
    return (s %= e), { start: r, end: s };
  }
  function H5(t, e, n, i) {
    const r = t.length,
      s = [];
    let a = e,
      o = t[e],
      c;
    for (c = e + 1; c <= n; ++c) {
      const h = t[c % r];
      h.skip || h.stop
        ? o.skip ||
          ((i = !1),
          s.push({ start: e % r, end: (c - 1) % r, loop: i }),
          (e = a = h.stop ? c : null))
        : ((a = c), o.skip && (e = c)),
        (o = h);
    }
    return a !== null && s.push({ start: e % r, end: a % r, loop: i }), s;
  }
  function F5(t, e) {
    const n = t.points,
      i = t.options.spanGaps,
      r = n.length;
    if (!r) return [];
    const s = !!t._loop,
      { start: a, end: o } = P5(n, r, s, i);
    if (i === !0) return Vh(t, [{ start: a, end: o, loop: s }], n, e);
    const c = o < a ? o + r : o,
      h = !!t._fullLoop && a === 0 && o === r - 1;
    return Vh(t, H5(n, a, c, h), n, e);
  }
  function Vh(t, e, n, i) {
    return !i || !i.setContext || !n ? e : V5(t, e, n, i);
  }
  function V5(t, e, n, i) {
    const r = t._chart.getContext(),
      s = Bh(t.options),
      {
        _datasetIndex: a,
        options: { spanGaps: o },
      } = t,
      c = n.length,
      h = [];
    let d = s,
      u = e[0].start,
      p = u;
    function m(g, b, v, y) {
      const w = o ? -1 : 1;
      if (g !== b) {
        for (g += c; n[g % c].skip; ) g -= w;
        for (; n[b % c].skip; ) b += w;
        g % c !== b % c &&
          (h.push({ start: g % c, end: b % c, loop: v, style: y }), (d = y), (u = b % c));
      }
    }
    for (const g of e) {
      u = o ? u : g.start;
      let b = n[u % c],
        v;
      for (p = u + 1; p <= g.end; p++) {
        const y = n[p % c];
        (v = Bh(
          i.setContext(
            _t(r, {
              type: 'segment',
              p0: b,
              p1: y,
              p0DataIndex: (p - 1) % c,
              p1DataIndex: p % c,
              datasetIndex: a,
            })
          )
        )),
          B5(v, d) && m(u, p - 1, g.loop, d),
          (b = y),
          (d = v);
      }
      u < p - 1 && m(u, p - 1, g.loop, d);
    }
    return h;
  }
  function Bh(t) {
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
  function B5(t, e) {
    if (!e) return !1;
    const n = [],
      i = function (r, s) {
        return qs(s) ? (n.includes(s) || n.push(s), n.indexOf(s)) : s;
      };
    return JSON.stringify(t, i) !== JSON.stringify(e, i);
  }
  /*!
   * Chart.js v4.3.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ class N5 {
    constructor() {
      (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    _notify(e, n, i, r) {
      const s = n.listeners[r],
        a = n.duration;
      s.forEach((o) =>
        o({ chart: e, initial: n.initial, numSteps: a, currentStep: Math.min(i - n.start, a) })
      );
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = ph.call(window, () => {
          this._update(), (this._request = null), this._running && this._refresh();
        })));
    }
    _update(e = Date.now()) {
      let n = 0;
      this._charts.forEach((i, r) => {
        if (!i.running || !i.items.length) return;
        const s = i.items;
        let a = s.length - 1,
          o = !1,
          c;
        for (; a >= 0; --a)
          (c = s[a]),
            c._active
              ? (c._total > i.duration && (i.duration = c._total), c.tick(e), (o = !0))
              : ((s[a] = s[s.length - 1]), s.pop());
        o && (r.draw(), this._notify(r, i, e, 'progress')),
          s.length || ((i.running = !1), this._notify(r, i, e, 'complete'), (i.initial = !1)),
          (n += s.length);
      }),
        (this._lastDate = e),
        n === 0 && (this._running = !1);
    }
    _getAnims(e) {
      const n = this._charts;
      let i = n.get(e);
      return (
        i ||
          ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
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
  var Ht = new N5();
  const Nh = 'transparent',
    $5 = {
      boolean(t, e, n) {
        return n > 0.5 ? e : t;
      },
      color(t, e, n) {
        const i = yh(t || Nh),
          r = i.valid && yh(e || Nh);
        return r && r.valid ? r.mix(i, n).hexString() : e;
      },
      number(t, e, n) {
        return t + (e - t) * n;
      },
    };
  class j5 {
    constructor(e, n, i, r) {
      const s = n[i];
      r = zr([e.to, r, s, e.from]);
      const a = zr([e.from, s, r]);
      (this._active = !0),
        (this._fn = e.fn || $5[e.type || typeof a]),
        (this._easing = vi[e.easing] || vi.linear),
        (this._start = Math.floor(Date.now() + (e.delay || 0))),
        (this._duration = this._total = Math.floor(e.duration)),
        (this._loop = !!e.loop),
        (this._target = n),
        (this._prop = i),
        (this._from = a),
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
          s = i - this._start,
          a = this._duration - s;
        (this._start = i),
          (this._duration = Math.floor(Math.max(a, e.duration))),
          (this._total += s),
          (this._loop = !!e.loop),
          (this._to = zr([e.to, n, r, e.from])),
          (this._from = zr([e.from, r, n]));
      }
    }
    cancel() {
      this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(e) {
      const n = e - this._start,
        i = this._duration,
        r = this._prop,
        s = this._from,
        a = this._loop,
        o = this._to;
      let c;
      if (((this._active = s !== o && (a || n < i)), !this._active)) {
        (this._target[r] = o), this._notify(!0);
        return;
      }
      if (n < 0) {
        this._target[r] = s;
        return;
      }
      (c = (n / i) % 2),
        (c = a && c > 1 ? 2 - c : c),
        (c = this._easing(Math.min(1, Math.max(0, c)))),
        (this._target[r] = this._fn(s, o, c));
    }
    wait() {
      const e = this._promises || (this._promises = []);
      return new Promise((n, i) => {
        e.push({ res: n, rej: i });
      });
    }
    _notify(e) {
      const n = e ? 'res' : 'rej',
        i = this._promises || [];
      for (let r = 0; r < i.length; r++) i[r][n]();
    }
  }
  class $h {
    constructor(e, n) {
      (this._chart = e), (this._properties = new Map()), this.configure(n);
    }
    configure(e) {
      if (!ae(e)) return;
      const n = Object.keys(Oe.animation),
        i = this._properties;
      Object.getOwnPropertyNames(e).forEach((r) => {
        const s = e[r];
        if (!ae(s)) return;
        const a = {};
        for (const o of n) a[o] = s[o];
        ((Ce(s.properties) && s.properties) || [r]).forEach((o) => {
          (o === r || !i.has(o)) && i.set(o, a);
        });
      });
    }
    _animateOptions(e, n) {
      const i = n.options,
        r = X5(e, i);
      if (!r) return [];
      const s = this._createAnimations(r, i);
      return (
        i.$shared &&
          W5(e.options.$animations, i).then(
            () => {
              e.options = i;
            },
            () => {}
          ),
        s
      );
    }
    _createAnimations(e, n) {
      const i = this._properties,
        r = [],
        s = e.$animations || (e.$animations = {}),
        a = Object.keys(n),
        o = Date.now();
      let c;
      for (c = a.length - 1; c >= 0; --c) {
        const h = a[c];
        if (h.charAt(0) === '$') continue;
        if (h === 'options') {
          r.push(...this._animateOptions(e, n));
          continue;
        }
        const d = n[h];
        let u = s[h];
        const p = i.get(h);
        if (u)
          if (p && u.active()) {
            u.update(p, d, o);
            continue;
          } else u.cancel();
        if (!p || !p.duration) {
          e[h] = d;
          continue;
        }
        (s[h] = u = new j5(p, e, h, d)), r.push(u);
      }
      return r;
    }
    update(e, n) {
      if (this._properties.size === 0) {
        Object.assign(e, n);
        return;
      }
      const i = this._createAnimations(e, n);
      if (i.length) return Ht.add(this._chart, i), !0;
    }
  }
  function W5(t, e) {
    const n = [],
      i = Object.keys(e);
    for (let r = 0; r < i.length; r++) {
      const s = t[i[r]];
      s && s.active() && n.push(s.wait());
    }
    return Promise.all(n);
  }
  function X5(t, e) {
    if (!e) return;
    let n = t.options;
    if (!n) {
      t.options = e;
      return;
    }
    return n.$shared && (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n;
  }
  function jh(t, e) {
    const n = (t && t.options) || {},
      i = n.reverse,
      r = n.min === void 0 ? e : 0,
      s = n.max === void 0 ? e : 0;
    return { start: i ? s : r, end: i ? r : s };
  }
  function Y5(t, e, n) {
    if (n === !1) return !1;
    const i = jh(t, n),
      r = jh(e, n);
    return { top: r.end, right: i.end, bottom: r.start, left: i.start };
  }
  function U5(t) {
    let e, n, i, r;
    return (
      ae(t) ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left)) : (e = n = i = r = t),
      { top: e, right: n, bottom: i, left: r, disabled: t === !1 }
    );
  }
  function Wh(t, e) {
    const n = [],
      i = t._getSortedDatasetMetas(e);
    let r, s;
    for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
    return n;
  }
  function Xh(t, e, n, i = {}) {
    const r = t.keys,
      s = i.mode === 'single';
    let a, o, c, h;
    if (e !== null) {
      for (a = 0, o = r.length; a < o; ++a) {
        if (((c = +r[a]), c === n)) {
          if (i.all) continue;
          break;
        }
        (h = t.values[c]), Fe(h) && (s || e === 0 || Pn(e) === Pn(h)) && (e += h);
      }
      return e;
    }
  }
  function q5(t) {
    const e = Object.keys(t),
      n = new Array(e.length);
    let i, r, s;
    for (i = 0, r = e.length; i < r; ++i) (s = e[i]), (n[i] = { x: s, y: t[s] });
    return n;
  }
  function Yh(t, e) {
    const n = t && t.options.stacked;
    return n || (n === void 0 && e.stack !== void 0);
  }
  function G5(t, e, n) {
    return `${t.id}.${e.id}.${n.stack || n.type}`;
  }
  function K5(t) {
    const { min: e, max: n, minDefined: i, maxDefined: r } = t.getUserBounds();
    return { min: i ? e : Number.NEGATIVE_INFINITY, max: r ? n : Number.POSITIVE_INFINITY };
  }
  function Z5(t, e, n) {
    const i = t[e] || (t[e] = {});
    return i[n] || (i[n] = {});
  }
  function Uh(t, e, n, i) {
    for (const r of e.getMatchingVisibleMetas(i).reverse()) {
      const s = t[r.index];
      if ((n && s > 0) || (!n && s < 0)) return r.index;
    }
    return null;
  }
  function qh(t, e) {
    const { chart: n, _cachedMeta: i } = t,
      r = n._stacks || (n._stacks = {}),
      { iScale: s, vScale: a, index: o } = i,
      c = s.axis,
      h = a.axis,
      d = G5(s, a, i),
      u = e.length;
    let p;
    for (let m = 0; m < u; ++m) {
      const g = e[m],
        { [c]: b, [h]: v } = g,
        y = g._stacks || (g._stacks = {});
      (p = y[h] = Z5(r, d, b)),
        (p[o] = v),
        (p._top = Uh(p, a, !0, i.type)),
        (p._bottom = Uh(p, a, !1, i.type));
      const w = p._visualValues || (p._visualValues = {});
      w[o] = v;
    }
  }
  function sa(t, e) {
    const n = t.scales;
    return Object.keys(n)
      .filter((i) => n[i].axis === e)
      .shift();
  }
  function Q5(t, e) {
    return _t(t, {
      active: !1,
      dataset: void 0,
      datasetIndex: e,
      index: e,
      mode: 'default',
      type: 'dataset',
    });
  }
  function J5(t, e, n) {
    return _t(t, {
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
  function wi(t, e) {
    const n = t.controller.index,
      i = t.vScale && t.vScale.axis;
    if (i) {
      e = e || t._parsed;
      for (const r of e) {
        const s = r._stacks;
        if (!s || s[i] === void 0 || s[i][n] === void 0) return;
        delete s[i][n],
          s[i]._visualValues !== void 0 &&
            s[i]._visualValues[n] !== void 0 &&
            delete s[i]._visualValues[n];
      }
    }
  }
  const aa = (t) => t === 'reset' || t === 'none',
    Gh = (t, e) => (e ? t : Object.assign({}, t)),
    _5 = (t, e, n) => t && !e.hidden && e._stacked && { keys: Wh(n, !0), values: null };
  class Ei {
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
        (e._stacked = Yh(e.vScale, e)),
        this.addElements(),
        this.options.fill &&
          !this.chart.isPluginEnabled('filler') &&
          console.warn(
            "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
          );
    }
    updateIndex(e) {
      this.index !== e && wi(this._cachedMeta), (this.index = e);
    }
    linkScales() {
      const e = this.chart,
        n = this._cachedMeta,
        i = this.getDataset(),
        r = (u, p, m, g) => (u === 'x' ? p : u === 'r' ? g : m),
        s = (n.xAxisID = fe(i.xAxisID, sa(e, 'x'))),
        a = (n.yAxisID = fe(i.yAxisID, sa(e, 'y'))),
        o = (n.rAxisID = fe(i.rAxisID, sa(e, 'r'))),
        c = n.indexAxis,
        h = (n.iAxisID = r(c, s, a, o)),
        d = (n.vAxisID = r(c, a, s, o));
      (n.xScale = this.getScaleForId(s)),
        (n.yScale = this.getScaleForId(a)),
        (n.rScale = this.getScaleForId(o)),
        (n.iScale = this.getScaleForId(h)),
        (n.vScale = this.getScaleForId(d));
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
      this._data && fh(this._data, this), e._stacked && wi(e);
    }
    _dataCheck() {
      const e = this.getDataset(),
        n = e.data || (e.data = []),
        i = this._data;
      if (ae(n)) this._data = q5(n);
      else if (i !== n) {
        if (i) {
          fh(i, this);
          const r = this._cachedMeta;
          wi(r), (r._parsed = []);
        }
        n && Object.isExtensible(n) && R2(n, this), (this._syncList = []), (this._data = n);
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
      const s = n._stacked;
      (n._stacked = Yh(n.vScale, n)),
        n.stack !== i.stack && ((r = !0), wi(n), (n.stack = i.stack)),
        this._resyncElements(e),
        (r || s !== n._stacked) && qh(this, n._parsed);
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
        { iScale: s, _stacked: a } = i,
        o = s.axis;
      let c = e === 0 && n === r.length ? !0 : i._sorted,
        h = e > 0 && i._parsed[e - 1],
        d,
        u,
        p;
      if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (p = r);
      else {
        Ce(r[e])
          ? (p = this.parseArrayData(i, r, e, n))
          : ae(r[e])
          ? (p = this.parseObjectData(i, r, e, n))
          : (p = this.parsePrimitiveData(i, r, e, n));
        const m = () => u[o] === null || (h && u[o] < h[o]);
        for (d = 0; d < n; ++d) (i._parsed[d + e] = u = p[d]), c && (m() && (c = !1), (h = u));
        i._sorted = c;
      }
      a && qh(this, p);
    }
    parsePrimitiveData(e, n, i, r) {
      const { iScale: s, vScale: a } = e,
        o = s.axis,
        c = a.axis,
        h = s.getLabels(),
        d = s === a,
        u = new Array(r);
      let p, m, g;
      for (p = 0, m = r; p < m; ++p)
        (g = p + i), (u[p] = { [o]: d || s.parse(h[g], g), [c]: a.parse(n[g], g) });
      return u;
    }
    parseArrayData(e, n, i, r) {
      const { xScale: s, yScale: a } = e,
        o = new Array(r);
      let c, h, d, u;
      for (c = 0, h = r; c < h; ++c)
        (d = c + i), (u = n[d]), (o[c] = { x: s.parse(u[0], d), y: a.parse(u[1], d) });
      return o;
    }
    parseObjectData(e, n, i, r) {
      const { xScale: s, yScale: a } = e,
        { xAxisKey: o = 'x', yAxisKey: c = 'y' } = this._parsing,
        h = new Array(r);
      let d, u, p, m;
      for (d = 0, u = r; d < u; ++d)
        (p = d + i), (m = n[p]), (h[d] = { x: s.parse(wr(m, o), p), y: a.parse(wr(m, c), p) });
      return h;
    }
    getParsed(e) {
      return this._cachedMeta._parsed[e];
    }
    getDataElement(e) {
      return this._cachedMeta.data[e];
    }
    applyStack(e, n, i) {
      const r = this.chart,
        s = this._cachedMeta,
        a = n[e.axis],
        o = { keys: Wh(r, !0), values: n._stacks[e.axis]._visualValues };
      return Xh(o, a, s.index, { mode: i });
    }
    updateRangeFromParsed(e, n, i, r) {
      const s = i[n.axis];
      let a = s === null ? NaN : s;
      const o = r && i._stacks[n.axis];
      r && o && ((r.values = o), (a = Xh(r, s, this._cachedMeta.index))),
        (e.min = Math.min(e.min, a)),
        (e.max = Math.max(e.max, a));
    }
    getMinMax(e, n) {
      const i = this._cachedMeta,
        r = i._parsed,
        s = i._sorted && e === i.iScale,
        a = r.length,
        o = this._getOtherScale(e),
        c = _5(n, i, this.chart),
        h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: d, max: u } = K5(o);
      let p, m;
      function g() {
        m = r[p];
        const b = m[o.axis];
        return !Fe(m[e.axis]) || d > b || u < b;
      }
      for (p = 0; p < a && !(!g() && (this.updateRangeFromParsed(h, e, m, c), s)); ++p);
      if (s) {
        for (p = a - 1; p >= 0; --p)
          if (!g()) {
            this.updateRangeFromParsed(h, e, m, c);
            break;
          }
      }
      return h;
    }
    getAllParsedValues(e) {
      const n = this._cachedMeta._parsed,
        i = [];
      let r, s, a;
      for (r = 0, s = n.length; r < s; ++r) (a = n[r][e.axis]), Fe(a) && i.push(a);
      return i;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(e) {
      const n = this._cachedMeta,
        i = n.iScale,
        r = n.vScale,
        s = this.getParsed(e);
      return {
        label: i ? '' + i.getLabelForValue(s[i.axis]) : '',
        value: r ? '' + r.getLabelForValue(s[r.axis]) : '',
      };
    }
    _update(e) {
      const n = this._cachedMeta;
      this.update(e || 'default'),
        (n._clip = U5(fe(this.options.clip, Y5(n.xScale, n.yScale, this.getMaxOverflow()))));
    }
    update(e) {}
    draw() {
      const e = this._ctx,
        n = this.chart,
        i = this._cachedMeta,
        r = i.data || [],
        s = n.chartArea,
        a = [],
        o = this._drawStart || 0,
        c = this._drawCount || r.length - o,
        h = this.options.drawActiveElementsOnTop;
      let d;
      for (i.dataset && i.dataset.draw(e, s, o, c), d = o; d < o + c; ++d) {
        const u = r[d];
        u.hidden || (u.active && h ? a.push(u) : u.draw(e, s));
      }
      for (d = 0; d < a.length; ++d) a[d].draw(e, s);
    }
    getStyle(e, n) {
      const i = n ? 'active' : 'default';
      return e === void 0 && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(i)
        : this.resolveDataElementOptions(e || 0, i);
    }
    getContext(e, n, i) {
      const r = this.getDataset();
      let s;
      if (e >= 0 && e < this._cachedMeta.data.length) {
        const a = this._cachedMeta.data[e];
        (s = a.$context || (a.$context = J5(this.getContext(), e, a))),
          (s.parsed = this.getParsed(e)),
          (s.raw = r.data[e]),
          (s.index = s.dataIndex = e);
      } else (s = this.$context || (this.$context = Q5(this.chart.getContext(), this.index))), (s.dataset = r), (s.index = s.datasetIndex = this.index);
      return (s.active = !!n), (s.mode = i), s;
    }
    resolveDatasetElementOptions(e) {
      return this._resolveElementOptions(this.datasetElementType.id, e);
    }
    resolveDataElementOptions(e, n) {
      return this._resolveElementOptions(this.dataElementType.id, n, e);
    }
    _resolveElementOptions(e, n = 'default', i) {
      const r = n === 'active',
        s = this._cachedDataOpts,
        a = e + '-' + n,
        o = s[a],
        c = this.enableOptionSharing && Er(i);
      if (o) return Gh(o, c);
      const h = this.chart.config,
        d = h.datasetElementScopeKeys(this._type, e),
        u = r ? [`${e}Hover`, 'hover', e, ''] : [e, ''],
        p = h.getOptionScopes(this.getDataset(), d),
        m = Object.keys(Oe.elements[e]),
        g = () => this.getContext(i, r, n),
        b = h.resolveNamedOptions(p, m, g, u);
      return b.$shared && ((b.$shared = c), (s[a] = Object.freeze(Gh(b, c)))), b;
    }
    _resolveAnimations(e, n, i) {
      const r = this.chart,
        s = this._cachedDataOpts,
        a = `animation-${n}`,
        o = s[a];
      if (o) return o;
      let c;
      if (r.options.animation !== !1) {
        const d = this.chart.config,
          u = d.datasetAnimationScopeKeys(this._type, n),
          p = d.getOptionScopes(this.getDataset(), u);
        c = d.createResolver(p, this.getContext(e, i, n));
      }
      const h = new $h(r, c && c.animations);
      return c && c._cacheable && (s[a] = Object.freeze(h)), h;
    }
    getSharedOptions(e) {
      if (e.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
    }
    includeOptions(e, n) {
      return !n || aa(e) || this.chart._animationsDisabled;
    }
    _getSharedOptions(e, n) {
      const i = this.resolveDataElementOptions(e, n),
        r = this._sharedOptions,
        s = this.getSharedOptions(i),
        a = this.includeOptions(n, s) || s !== r;
      return this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: a };
    }
    updateElement(e, n, i, r) {
      aa(r) ? Object.assign(e, i) : this._resolveAnimations(n, r).update(e, i);
    }
    updateSharedOptions(e, n, i) {
      e && !aa(n) && this._resolveAnimations(void 0, n).update(e, i);
    }
    _setStyle(e, n, i, r) {
      e.active = r;
      const s = this.getStyle(n, r);
      this._resolveAnimations(n, i, r).update(e, {
        options: (!r && this.getSharedOptions(s)) || s,
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
      for (const [o, c, h] of this._syncList) this[o](c, h);
      this._syncList = [];
      const r = i.length,
        s = n.length,
        a = Math.min(s, r);
      a && this.parse(0, a),
        s > r ? this._insertElements(r, s - r, e) : s < r && this._removeElements(s, r - s);
    }
    _insertElements(e, n, i = !0) {
      const r = this._cachedMeta,
        s = r.data,
        a = e + n;
      let o;
      const c = (h) => {
        for (h.length += n, o = h.length - 1; o >= a; o--) h[o] = h[o - n];
      };
      for (c(s), o = e; o < a; ++o) s[o] = new this.dataElementType();
      this._parsing && c(r._parsed), this.parse(e, n), i && this.updateElements(s, e, n, 'reset');
    }
    updateElements(e, n, i, r) {}
    _removeElements(e, n) {
      const i = this._cachedMeta;
      if (this._parsing) {
        const r = i._parsed.splice(e, n);
        i._stacked && wi(i, r);
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
  Z(Ei, 'defaults', {}), Z(Ei, 'datasetElementType', null), Z(Ei, 'dataElementType', null);
  class Dr extends Ei {
    initialize() {
      (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
    }
    update(e) {
      const n = this._cachedMeta,
        { dataset: i, data: r = [], _dataset: s } = n,
        a = this.chart._animationsDisabled;
      let { start: o, count: c } = A2(n, r, a);
      (this._drawStart = o),
        (this._drawCount = c),
        T2(n) && ((o = 0), (c = r.length)),
        (i._chart = this.chart),
        (i._datasetIndex = this.index),
        (i._decimated = !!s._decimated),
        (i.points = r);
      const h = this.resolveDatasetElementOptions(e);
      this.options.showLine || (h.borderWidth = 0),
        (h.segment = this.options.segment),
        this.updateElement(i, void 0, { animated: !a, options: h }, e),
        this.updateElements(r, o, c, e);
    }
    updateElements(e, n, i, r) {
      const s = r === 'reset',
        { iScale: a, vScale: o, _stacked: c, _dataset: h } = this._cachedMeta,
        { sharedOptions: d, includeOptions: u } = this._getSharedOptions(n, r),
        p = a.axis,
        m = o.axis,
        { spanGaps: g, segment: b } = this.options,
        v = mi(g) ? g : Number.POSITIVE_INFINITY,
        y = this.chart._animationsDisabled || s || r === 'none',
        w = n + i,
        k = e.length;
      let S = n > 0 && this.getParsed(n - 1);
      for (let M = 0; M < k; ++M) {
        const O = e[M],
          C = y ? O : {};
        if (M < n || M >= w) {
          C.skip = !0;
          continue;
        }
        const L = this.getParsed(M),
          T = be(L[m]),
          I = (C[p] = a.getPixelForValue(L[p], M)),
          P = (C[m] =
            s || T ? o.getBasePixel() : o.getPixelForValue(c ? this.applyStack(o, L, c) : L[m], M));
        (C.skip = isNaN(I) || isNaN(P) || T),
          (C.stop = M > 0 && Math.abs(L[p] - S[p]) > v),
          b && ((C.parsed = L), (C.raw = h.data[M])),
          u && (C.options = d || this.resolveDataElementOptions(M, O.active ? 'active' : r)),
          y || this.updateElement(O, M, C, r),
          (S = L);
      }
    }
    getMaxOverflow() {
      const e = this._cachedMeta,
        n = e.dataset,
        i = (n.options && n.options.borderWidth) || 0,
        r = e.data || [];
      if (!r.length) return i;
      const s = r[0].size(this.resolveDataElementOptions(0)),
        a = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
      return Math.max(i, s, a) / 2;
    }
    draw() {
      const e = this._cachedMeta;
      e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis), super.draw();
    }
  }
  Z(Dr, 'id', 'line'),
    Z(Dr, 'defaults', {
      datasetElementType: 'line',
      dataElementType: 'point',
      showLine: !0,
      spanGaps: !1,
    }),
    Z(Dr, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } });
  function wn() {
    throw new Error(
      'This method is not implemented: Check that a complete date adapter is provided.'
    );
  }
  class oa {
    constructor(e) {
      Z(this, 'options');
      this.options = e || {};
    }
    static override(e) {
      Object.assign(oa.prototype, e);
    }
    init() {}
    formats() {
      return wn();
    }
    parse() {
      return wn();
    }
    format() {
      return wn();
    }
    add() {
      return wn();
    }
    diff() {
      return wn();
    }
    startOf() {
      return wn();
    }
    endOf() {
      return wn();
    }
  }
  var ev = { _date: oa };
  function tv(t, e, n, i) {
    const { controller: r, data: s, _sorted: a } = t,
      o = r._cachedMeta.iScale;
    if (o && e === o.axis && e !== 'r' && a && s.length) {
      const c = o._reversePixels ? O2 : mn;
      if (i) {
        if (r._sharedOptions) {
          const h = s[0],
            d = typeof h.getRange == 'function' && h.getRange(e);
          if (d) {
            const u = c(s, e, n - d),
              p = c(s, e, n + d);
            return { lo: u.lo, hi: p.hi };
          }
        }
      } else return c(s, e, n);
    }
    return { lo: 0, hi: s.length - 1 };
  }
  function Ci(t, e, n, i, r) {
    const s = t.getSortedVisibleDatasetMetas(),
      a = n[e];
    for (let o = 0, c = s.length; o < c; ++o) {
      const { index: h, data: d } = s[o],
        { lo: u, hi: p } = tv(s[o], e, a, r);
      for (let m = u; m <= p; ++m) {
        const g = d[m];
        g.skip || i(g, h, m);
      }
    }
  }
  function nv(t) {
    const e = t.indexOf('x') !== -1,
      n = t.indexOf('y') !== -1;
    return function (i, r) {
      const s = e ? Math.abs(i.x - r.x) : 0,
        a = n ? Math.abs(i.y - r.y) : 0;
      return Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
    };
  }
  function la(t, e, n, i, r) {
    const s = [];
    return (
      (!r && !t.isPointInArea(e)) ||
        Ci(
          t,
          n,
          e,
          function (o, c, h) {
            (!r && !Pt(o, t.chartArea, 0)) ||
              (o.inRange(e.x, e.y, i) && s.push({ element: o, datasetIndex: c, index: h }));
          },
          !0
        ),
      s
    );
  }
  function iv(t, e, n, i) {
    let r = [];
    function s(a, o, c) {
      const { startAngle: h, endAngle: d } = a.getProps(['startAngle', 'endAngle'], i),
        { angle: u } = M2(a, { x: e.x, y: e.y });
      dh(u, h, d) && r.push({ element: a, datasetIndex: o, index: c });
    }
    return Ci(t, n, e, s), r;
  }
  function rv(t, e, n, i, r, s) {
    let a = [];
    const o = nv(n);
    let c = Number.POSITIVE_INFINITY;
    function h(d, u, p) {
      const m = d.inRange(e.x, e.y, r);
      if (i && !m) return;
      const g = d.getCenterPoint(r);
      if (!(!!s || t.isPointInArea(g)) && !m) return;
      const v = o(e, g);
      v < c
        ? ((a = [{ element: d, datasetIndex: u, index: p }]), (c = v))
        : v === c && a.push({ element: d, datasetIndex: u, index: p });
    }
    return Ci(t, n, e, h), a;
  }
  function ca(t, e, n, i, r, s) {
    return !s && !t.isPointInArea(e) ? [] : n === 'r' && !i ? iv(t, e, n, r) : rv(t, e, n, i, r, s);
  }
  function Kh(t, e, n, i, r) {
    const s = [],
      a = n === 'x' ? 'inXRange' : 'inYRange';
    let o = !1;
    return (
      Ci(t, n, e, (c, h, d) => {
        c[a](e[n], r) &&
          (s.push({ element: c, datasetIndex: h, index: d }), (o = o || c.inRange(e.x, e.y, r)));
      }),
      i && !o ? [] : s
    );
  }
  var sv = {
    evaluateInteractionItems: Ci,
    modes: {
      index(t, e, n, i) {
        const r = yn(e, t),
          s = n.axis || 'x',
          a = n.includeInvisible || !1,
          o = n.intersect ? la(t, r, s, i, a) : ca(t, r, s, !1, i, a),
          c = [];
        return o.length
          ? (t.getSortedVisibleDatasetMetas().forEach((h) => {
              const d = o[0].index,
                u = h.data[d];
              u && !u.skip && c.push({ element: u, datasetIndex: h.index, index: d });
            }),
            c)
          : [];
      },
      dataset(t, e, n, i) {
        const r = yn(e, t),
          s = n.axis || 'xy',
          a = n.includeInvisible || !1;
        let o = n.intersect ? la(t, r, s, i, a) : ca(t, r, s, !1, i, a);
        if (o.length > 0) {
          const c = o[0].datasetIndex,
            h = t.getDatasetMeta(c).data;
          o = [];
          for (let d = 0; d < h.length; ++d) o.push({ element: h[d], datasetIndex: c, index: d });
        }
        return o;
      },
      point(t, e, n, i) {
        const r = yn(e, t),
          s = n.axis || 'xy',
          a = n.includeInvisible || !1;
        return la(t, r, s, i, a);
      },
      nearest(t, e, n, i) {
        const r = yn(e, t),
          s = n.axis || 'xy',
          a = n.includeInvisible || !1;
        return ca(t, r, s, n.intersect, i, a);
      },
      x(t, e, n, i) {
        const r = yn(e, t);
        return Kh(t, r, 'x', n.intersect, i);
      },
      y(t, e, n, i) {
        const r = yn(e, t);
        return Kh(t, r, 'y', n.intersect, i);
      },
    },
  };
  const Zh = ['left', 'top', 'right', 'bottom'];
  function Mi(t, e) {
    return t.filter((n) => n.pos === e);
  }
  function Qh(t, e) {
    return t.filter((n) => Zh.indexOf(n.pos) === -1 && n.box.axis === e);
  }
  function Si(t, e) {
    return t.sort((n, i) => {
      const r = e ? i : n,
        s = e ? n : i;
      return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
    });
  }
  function av(t) {
    const e = [];
    let n, i, r, s, a, o;
    for (n = 0, i = (t || []).length; n < i; ++n)
      (r = t[n]),
        ({
          position: s,
          options: { stack: a, stackWeight: o = 1 },
        } = r),
        e.push({
          index: n,
          box: r,
          pos: s,
          horizontal: r.isHorizontal(),
          weight: r.weight,
          stack: a && s + a,
          stackWeight: o,
        });
    return e;
  }
  function ov(t) {
    const e = {};
    for (const n of t) {
      const { stack: i, pos: r, stackWeight: s } = n;
      if (!i || !Zh.includes(r)) continue;
      const a = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
      a.count++, (a.weight += s);
    }
    return e;
  }
  function lv(t, e) {
    const n = ov(t),
      { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
    let s, a, o;
    for (s = 0, a = t.length; s < a; ++s) {
      o = t[s];
      const { fullSize: c } = o.box,
        h = n[o.stack],
        d = h && o.stackWeight / h.weight;
      o.horizontal
        ? ((o.width = d ? d * i : c && e.availableWidth), (o.height = r))
        : ((o.width = i), (o.height = d ? d * r : c && e.availableHeight));
    }
    return n;
  }
  function cv(t) {
    const e = av(t),
      n = Si(
        e.filter((h) => h.box.fullSize),
        !0
      ),
      i = Si(Mi(e, 'left'), !0),
      r = Si(Mi(e, 'right')),
      s = Si(Mi(e, 'top'), !0),
      a = Si(Mi(e, 'bottom')),
      o = Qh(e, 'x'),
      c = Qh(e, 'y');
    return {
      fullSize: n,
      leftAndTop: i.concat(s),
      rightAndBottom: r.concat(c).concat(a).concat(o),
      chartArea: Mi(e, 'chartArea'),
      vertical: i.concat(r).concat(c),
      horizontal: s.concat(a).concat(o),
    };
  }
  function Jh(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
  }
  function _h(t, e) {
    (t.top = Math.max(t.top, e.top)),
      (t.left = Math.max(t.left, e.left)),
      (t.bottom = Math.max(t.bottom, e.bottom)),
      (t.right = Math.max(t.right, e.right));
  }
  function hv(t, e, n, i) {
    const { pos: r, box: s } = n,
      a = t.maxPadding;
    if (!ae(r)) {
      n.size && (t[r] -= n.size);
      const u = i[n.stack] || { size: 0, count: 1 };
      (u.size = Math.max(u.size, n.horizontal ? s.height : s.width)),
        (n.size = u.size / u.count),
        (t[r] += n.size);
    }
    s.getPadding && _h(a, s.getPadding());
    const o = Math.max(0, e.outerWidth - Jh(a, t, 'left', 'right')),
      c = Math.max(0, e.outerHeight - Jh(a, t, 'top', 'bottom')),
      h = o !== t.w,
      d = c !== t.h;
    return (t.w = o), (t.h = c), n.horizontal ? { same: h, other: d } : { same: d, other: h };
  }
  function dv(t) {
    const e = t.maxPadding;
    function n(i) {
      const r = Math.max(e[i] - t[i], 0);
      return (t[i] += r), r;
    }
    (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
  }
  function uv(t, e) {
    const n = e.maxPadding;
    function i(r) {
      const s = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        r.forEach((a) => {
          s[a] = Math.max(e[a], n[a]);
        }),
        s
      );
    }
    return i(t ? ['left', 'right'] : ['top', 'bottom']);
  }
  function ki(t, e, n, i) {
    const r = [];
    let s, a, o, c, h, d;
    for (s = 0, a = t.length, h = 0; s < a; ++s) {
      (o = t[s]), (c = o.box), c.update(o.width || e.w, o.height || e.h, uv(o.horizontal, e));
      const { same: u, other: p } = hv(e, n, o, i);
      (h |= u && r.length), (d = d || p), c.fullSize || r.push(o);
    }
    return (h && ki(r, e, n, i)) || d;
  }
  function Ar(t, e, n, i, r) {
    (t.top = n), (t.left = e), (t.right = e + i), (t.bottom = n + r), (t.width = i), (t.height = r);
  }
  function e1(t, e, n, i) {
    const r = n.padding;
    let { x: s, y: a } = e;
    for (const o of t) {
      const c = o.box,
        h = i[o.stack] || { count: 1, placed: 0, weight: 1 },
        d = o.stackWeight / h.weight || 1;
      if (o.horizontal) {
        const u = e.w * d,
          p = h.size || c.height;
        Er(h.start) && (a = h.start),
          c.fullSize
            ? Ar(c, r.left, a, n.outerWidth - r.right - r.left, p)
            : Ar(c, e.left + h.placed, a, u, p),
          (h.start = a),
          (h.placed += u),
          (a = c.bottom);
      } else {
        const u = e.h * d,
          p = h.size || c.width;
        Er(h.start) && (s = h.start),
          c.fullSize
            ? Ar(c, s, r.top, p, n.outerHeight - r.bottom - r.top)
            : Ar(c, s, e.top + h.placed, p, u),
          (h.start = s),
          (h.placed += u),
          (s = c.right);
      }
    }
    (e.x = s), (e.y = a);
  }
  var en = {
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
      const r = nt(t.options.layout.padding),
        s = Math.max(e - r.width, 0),
        a = Math.max(n - r.height, 0),
        o = cv(t.boxes),
        c = o.vertical,
        h = o.horizontal;
      de(t.boxes, (b) => {
        typeof b.beforeLayout == 'function' && b.beforeLayout();
      });
      const d =
          c.reduce((b, v) => (v.box.options && v.box.options.display === !1 ? b : b + 1), 0) || 1,
        u = Object.freeze({
          outerWidth: e,
          outerHeight: n,
          padding: r,
          availableWidth: s,
          availableHeight: a,
          vBoxMaxWidth: s / 2 / d,
          hBoxMaxHeight: a / 2,
        }),
        p = Object.assign({}, r);
      _h(p, nt(i));
      const m = Object.assign({ maxPadding: p, w: s, h: a, x: r.left, y: r.top }, r),
        g = lv(c.concat(h), u);
      ki(o.fullSize, m, u, g),
        ki(c, m, u, g),
        ki(h, m, u, g) && ki(c, m, u, g),
        dv(m),
        e1(o.leftAndTop, m, u, g),
        (m.x += m.w),
        (m.y += m.h),
        e1(o.rightAndBottom, m, u, g),
        (t.chartArea = {
          left: m.left,
          top: m.top,
          right: m.left + m.w,
          bottom: m.top + m.h,
          height: m.h,
          width: m.w,
        }),
        de(o.chartArea, (b) => {
          const v = b.box;
          Object.assign(v, t.chartArea),
            v.update(m.w, m.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class t1 {
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
        { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
      );
    }
    isAttached(e) {
      return !0;
    }
    updateConfig(e) {}
  }
  class fv extends t1 {
    acquireContext(e) {
      return (e && e.getContext && e.getContext('2d')) || null;
    }
    updateConfig(e) {
      e.options.animation = !1;
    }
  }
  const Tr = '$chartjs',
    pv = {
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
    n1 = (t) => t === null || t === '';
  function mv(t, e) {
    const n = t.style,
      i = t.getAttribute('height'),
      r = t.getAttribute('width');
    if (
      ((t[Tr] = {
        initial: {
          height: i,
          width: r,
          style: { display: n.display, height: n.height, width: n.width },
        },
      }),
      (n.display = n.display || 'block'),
      (n.boxSizing = n.boxSizing || 'border-box'),
      n1(r))
    ) {
      const s = Ph(t, 'width');
      s !== void 0 && (t.width = s);
    }
    if (n1(i))
      if (t.style.height === '') t.height = t.width / (e || 2);
      else {
        const s = Ph(t, 'height');
        s !== void 0 && (t.height = s);
      }
    return t;
  }
  const i1 = S5 ? { passive: !0 } : !1;
  function gv(t, e, n) {
    t.addEventListener(e, n, i1);
  }
  function vv(t, e, n) {
    t.canvas.removeEventListener(e, n, i1);
  }
  function bv(t, e) {
    const n = pv[t.type] || t.type,
      { x: i, y: r } = yn(t, e);
    return { type: n, chart: e, native: t, x: i !== void 0 ? i : null, y: r !== void 0 ? r : null };
  }
  function Pr(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
  }
  function yv(t, e, n) {
    const i = t.canvas,
      r = new MutationObserver((s) => {
        let a = !1;
        for (const o of s) (a = a || Pr(o.addedNodes, i)), (a = a && !Pr(o.removedNodes, i));
        a && n();
      });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
  }
  function xv(t, e, n) {
    const i = t.canvas,
      r = new MutationObserver((s) => {
        let a = !1;
        for (const o of s) (a = a || Pr(o.removedNodes, i)), (a = a && !Pr(o.addedNodes, i));
        a && n();
      });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
  }
  const zi = new Map();
  let r1 = 0;
  function s1() {
    const t = window.devicePixelRatio;
    t !== r1 &&
      ((r1 = t),
      zi.forEach((e, n) => {
        n.currentDevicePixelRatio !== t && e();
      }));
  }
  function wv(t, e) {
    zi.size || window.addEventListener('resize', s1), zi.set(t, e);
  }
  function Ev(t) {
    zi.delete(t), zi.size || window.removeEventListener('resize', s1);
  }
  function Cv(t, e, n) {
    const i = t.canvas,
      r = i && ia(i);
    if (!r) return;
    const s = mh((o, c) => {
        const h = r.clientWidth;
        n(o, c), h < r.clientWidth && n();
      }, window),
      a = new ResizeObserver((o) => {
        const c = o[0],
          h = c.contentRect.width,
          d = c.contentRect.height;
        (h === 0 && d === 0) || s(h, d);
      });
    return a.observe(r), wv(t, s), a;
  }
  function ha(t, e, n) {
    n && n.disconnect(), e === 'resize' && Ev(t);
  }
  function Mv(t, e, n) {
    const i = t.canvas,
      r = mh((s) => {
        t.ctx !== null && n(bv(s, t));
      }, t);
    return gv(i, e, r), r;
  }
  class Sv extends t1 {
    acquireContext(e, n) {
      const i = e && e.getContext && e.getContext('2d');
      return i && i.canvas === e ? (mv(e, n), i) : null;
    }
    releaseContext(e) {
      const n = e.canvas;
      if (!n[Tr]) return !1;
      const i = n[Tr].initial;
      ['height', 'width'].forEach((s) => {
        const a = i[s];
        be(a) ? n.removeAttribute(s) : n.setAttribute(s, a);
      });
      const r = i.style || {};
      return (
        Object.keys(r).forEach((s) => {
          n.style[s] = r[s];
        }),
        (n.width = n.width),
        delete n[Tr],
        !0
      );
    }
    addEventListener(e, n, i) {
      this.removeEventListener(e, n);
      const r = e.$proxies || (e.$proxies = {}),
        a = { attach: yv, detach: xv, resize: Cv }[n] || Mv;
      r[n] = a(e, n, i);
    }
    removeEventListener(e, n) {
      const i = e.$proxies || (e.$proxies = {}),
        r = i[n];
      if (!r) return;
      (({ attach: ha, detach: ha, resize: ha })[n] || vv)(e, n, r), (i[n] = void 0);
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(e, n, i, r) {
      return M5(e, n, i, r);
    }
    isAttached(e) {
      const n = ia(e);
      return !!(n && n.isConnected);
    }
  }
  function kv(t) {
    return !Ah() || (typeof OffscreenCanvas < 'u' && t instanceof OffscreenCanvas) ? fv : Sv;
  }
  let Vn =
    ((is = class {
      constructor() {
        Z(this, 'x');
        Z(this, 'y');
        Z(this, 'active', !1);
        Z(this, 'options');
        Z(this, '$animations');
      }
      tooltipPosition(e) {
        const { x: n, y: i } = this.getProps(['x', 'y'], e);
        return { x: n, y: i };
      }
      hasValue() {
        return mi(this.x) && mi(this.y);
      }
      getProps(e, n) {
        const i = this.$animations;
        if (!n || !i) return this;
        const r = {};
        return (
          e.forEach((s) => {
            r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
          }),
          r
        );
      }
    }),
    Z(is, 'defaults', {}),
    Z(is, 'defaultRoutes'),
    is);
  function zv(t, e) {
    const n = t.options.ticks,
      i = Ov(t),
      r = Math.min(n.maxTicksLimit || i, i),
      s = n.major.enabled ? Rv(e) : [],
      a = s.length,
      o = s[0],
      c = s[a - 1],
      h = [];
    if (a > r) return Iv(e, h, s, a / r), h;
    const d = Lv(s, e, r);
    if (a > 0) {
      let u, p;
      const m = a > 1 ? Math.round((c - o) / (a - 1)) : null;
      for (Hr(e, h, d, be(m) ? 0 : o - m, o), u = 0, p = a - 1; u < p; u++)
        Hr(e, h, d, s[u], s[u + 1]);
      return Hr(e, h, d, c, be(m) ? e.length : c + m), h;
    }
    return Hr(e, h, d), h;
  }
  function Ov(t) {
    const e = t.options.offset,
      n = t._tickSize(),
      i = t._length / n + (e ? 0 : 1),
      r = t._maxLength / n;
    return Math.floor(Math.min(i, r));
  }
  function Lv(t, e, n) {
    const i = Dv(t),
      r = e.length / n;
    if (!i) return Math.max(r, 1);
    const s = E2(i);
    for (let a = 0, o = s.length - 1; a < o; a++) {
      const c = s[a];
      if (c > r) return c;
    }
    return Math.max(r, 1);
  }
  function Rv(t) {
    const e = [];
    let n, i;
    for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
    return e;
  }
  function Iv(t, e, n, i) {
    let r = 0,
      s = n[0],
      a;
    for (i = Math.ceil(i), a = 0; a < t.length; a++) a === s && (e.push(t[a]), r++, (s = n[r * i]));
  }
  function Hr(t, e, n, i, r) {
    const s = fe(i, 0),
      a = Math.min(fe(r, t.length), t.length);
    let o = 0,
      c,
      h,
      d;
    for (n = Math.ceil(n), r && ((c = r - i), (n = c / Math.floor(c / n))), d = s; d < 0; )
      o++, (d = Math.round(s + o * n));
    for (h = Math.max(s, 0); h < a; h++)
      h === d && (e.push(t[h]), o++, (d = Math.round(s + o * n)));
  }
  function Dv(t) {
    const e = t.length;
    let n, i;
    if (e < 2) return !1;
    for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
    return i;
  }
  const Av = (t) => (t === 'left' ? 'right' : t === 'right' ? 'left' : t),
    a1 = (t, e, n) => (e === 'top' || e === 'left' ? t[e] + n : t[e] - n),
    o1 = (t, e) => Math.min(e || t, t);
  function l1(t, e) {
    const n = [],
      i = t.length / e,
      r = t.length;
    let s = 0;
    for (; s < r; s += i) n.push(t[Math.floor(s)]);
    return n;
  }
  function Tv(t, e, n) {
    const i = t.ticks.length,
      r = Math.min(e, i - 1),
      s = t._startPixel,
      a = t._endPixel,
      o = 1e-6;
    let c = t.getPixelForTick(r),
      h;
    if (
      !(
        n &&
        (i === 1
          ? (h = Math.max(c - s, a - c))
          : e === 0
          ? (h = (t.getPixelForTick(1) - c) / 2)
          : (h = (c - t.getPixelForTick(r - 1)) / 2),
        (c += r < e ? h : -h),
        c < s - o || c > a + o)
      )
    )
      return c;
  }
  function Pv(t, e) {
    de(t, (n) => {
      const i = n.gc,
        r = i.length / 2;
      let s;
      if (r > e) {
        for (s = 0; s < r; ++s) delete n.data[i[s]];
        i.splice(0, r);
      }
    });
  }
  function Oi(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function c1(t, e) {
    if (!t.display) return 0;
    const n = Xe(t.font, e),
      i = nt(t.padding);
    return (Ce(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
  }
  function Hv(t, e) {
    return _t(t, { scale: e, type: 'scale' });
  }
  function Fv(t, e, n) {
    return _t(t, { tick: n, index: e, type: 'tick' });
  }
  function Vv(t, e, n) {
    let i = gh(t);
    return ((n && e !== 'right') || (!n && e === 'right')) && (i = Av(i)), i;
  }
  function Bv(t, e, n, i) {
    const { top: r, left: s, bottom: a, right: o, chart: c } = t,
      { chartArea: h, scales: d } = c;
    let u = 0,
      p,
      m,
      g;
    const b = a - r,
      v = o - s;
    if (t.isHorizontal()) {
      if (((m = gi(i, s, o)), ae(n))) {
        const y = Object.keys(n)[0],
          w = n[y];
        g = d[y].getPixelForValue(w) + b - e;
      } else n === 'center' ? (g = (h.bottom + h.top) / 2 + b - e) : (g = a1(t, n, e));
      p = o - s;
    } else {
      if (ae(n)) {
        const y = Object.keys(n)[0],
          w = n[y];
        m = d[y].getPixelForValue(w) - v + e;
      } else n === 'center' ? (m = (h.left + h.right) / 2 - v + e) : (m = a1(t, n, e));
      (g = gi(i, a, r)), (u = n === 'left' ? -Ge : Ge);
    }
    return { titleX: m, titleY: g, maxWidth: p, rotation: u };
  }
  class En extends Vn {
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
        (e = tt(e, Number.POSITIVE_INFINITY)),
        (n = tt(n, Number.NEGATIVE_INFINITY)),
        (i = tt(i, Number.POSITIVE_INFINITY)),
        (r = tt(r, Number.NEGATIVE_INFINITY)),
        { min: tt(e, i), max: tt(n, r), minDefined: Fe(e), maxDefined: Fe(n) }
      );
    }
    getMinMax(e) {
      let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
        a;
      if (r && s) return { min: n, max: i };
      const o = this.getMatchingVisibleMetas();
      for (let c = 0, h = o.length; c < h; ++c)
        (a = o[c].controller.getMinMax(this, e)),
          r || (n = Math.min(n, a.min)),
          s || (i = Math.max(i, a.max));
      return (
        (n = s && n > i ? i : n),
        (i = r && n > i ? n : i),
        { min: tt(n, tt(i, n)), max: tt(i, tt(n, i)) }
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
      ke(this.options.beforeUpdate, [this]);
    }
    update(e, n, i) {
      const { beginAtZero: r, grace: s, ticks: a } = this.options,
        o = a.sampleSize;
      this.beforeUpdate(),
        (this.maxWidth = e),
        (this.maxHeight = n),
        (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
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
          (this._range = n5(this, s, r)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks();
      const c = o < this.ticks.length;
      this._convertTicksToLabels(c ? l1(this.ticks, o) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        a.display &&
          (a.autoSkip || a.source === 'auto') &&
          ((this.ticks = zv(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
        c && this._convertTicksToLabels(this.ticks),
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
      ke(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      ke(this.options.beforeSetDimensions, [this]);
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
      ke(this.options.afterSetDimensions, [this]);
    }
    _callHooks(e) {
      this.chart.notifyPlugins(e, this.getContext()), ke(this.options[e], [this]);
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
      ke(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(e) {
      const n = this.options.ticks;
      let i, r, s;
      for (i = 0, r = e.length; i < r; i++)
        (s = e[i]), (s.label = ke(n.callback, [s.value, i, e], this));
    }
    afterTickToLabelConversion() {
      ke(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      ke(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const e = this.options,
        n = e.ticks,
        i = o1(this.ticks.length, e.ticks.maxTicksLimit),
        r = n.minRotation || 0,
        s = n.maxRotation;
      let a = r,
        o,
        c,
        h;
      if (!this._isVisible() || !n.display || r >= s || i <= 1 || !this.isHorizontal()) {
        this.labelRotation = r;
        return;
      }
      const d = this._getLabelSizes(),
        u = d.widest.width,
        p = d.highest.height,
        m = ut(this.chart.width - u, 0, this.maxWidth);
      (o = e.offset ? this.maxWidth / i : m / (i - 1)),
        u + 6 > o &&
          ((o = m / (i - (e.offset ? 0.5 : 1))),
          (c = this.maxHeight - Oi(e.grid) - n.padding - c1(e.title, this.chart.options.font)),
          (h = Math.sqrt(u * u + p * p)),
          (a = Xs(
            Math.min(
              Math.asin(ut((d.highest.height + 6) / o, -1, 1)),
              Math.asin(ut(c / h, -1, 1)) - Math.asin(ut(p / h, -1, 1))
            )
          )),
          (a = Math.max(r, Math.min(s, a)))),
        (this.labelRotation = a);
    }
    afterCalculateLabelRotation() {
      ke(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      ke(this.options.beforeFit, [this]);
    }
    fit() {
      const e = { width: 0, height: 0 },
        {
          chart: n,
          options: { ticks: i, title: r, grid: s },
        } = this,
        a = this._isVisible(),
        o = this.isHorizontal();
      if (a) {
        const c = c1(r, n.options.font);
        if (
          (o
            ? ((e.width = this.maxWidth), (e.height = Oi(s) + c))
            : ((e.height = this.maxHeight), (e.width = Oi(s) + c)),
          i.display && this.ticks.length)
        ) {
          const { first: h, last: d, widest: u, highest: p } = this._getLabelSizes(),
            m = i.padding * 2,
            g = Jt(this.labelRotation),
            b = Math.cos(g),
            v = Math.sin(g);
          if (o) {
            const y = i.mirror ? 0 : v * u.width + b * p.height;
            e.height = Math.min(this.maxHeight, e.height + y + m);
          } else {
            const y = i.mirror ? 0 : b * u.width + v * p.height;
            e.width = Math.min(this.maxWidth, e.width + y + m);
          }
          this._calculatePadding(h, d, v, b);
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
          ticks: { align: s, padding: a },
          position: o,
        } = this.options,
        c = this.labelRotation !== 0,
        h = o !== 'top' && this.axis === 'x';
      if (this.isHorizontal()) {
        const d = this.getPixelForTick(0) - this.left,
          u = this.right - this.getPixelForTick(this.ticks.length - 1);
        let p = 0,
          m = 0;
        c
          ? h
            ? ((p = r * e.width), (m = i * n.height))
            : ((p = i * e.height), (m = r * n.width))
          : s === 'start'
          ? (m = n.width)
          : s === 'end'
          ? (p = e.width)
          : s !== 'inner' && ((p = e.width / 2), (m = n.width / 2)),
          (this.paddingLeft = Math.max(((p - d + a) * this.width) / (this.width - d), 0)),
          (this.paddingRight = Math.max(((m - u + a) * this.width) / (this.width - u), 0));
      } else {
        let d = n.height / 2,
          u = e.height / 2;
        s === 'start' ? ((d = 0), (u = e.height)) : s === 'end' && ((d = n.height), (u = 0)),
          (this.paddingTop = d + a),
          (this.paddingBottom = u + a);
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
      ke(this.options.afterFit, [this]);
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
      for (n = 0, i = e.length; n < i; n++) be(e[n].label) && (e.splice(n, 1), i--, n--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let e = this._labelSizes;
      if (!e) {
        const n = this.options.ticks.sampleSize;
        let i = this.ticks;
        n < i.length && (i = l1(i, n)),
          (this._labelSizes = e =
            this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
      }
      return e;
    }
    _computeLabelSizes(e, n, i) {
      const { ctx: r, _longestTextCache: s } = this,
        a = [],
        o = [],
        c = Math.floor(n / o1(n, i));
      let h = 0,
        d = 0,
        u,
        p,
        m,
        g,
        b,
        v,
        y,
        w,
        k,
        S,
        M;
      for (u = 0; u < n; u += c) {
        if (
          ((g = e[u].label),
          (b = this._resolveTickFontOptions(u)),
          (r.font = v = b.string),
          (y = s[v] = s[v] || { data: {}, gc: [] }),
          (w = b.lineHeight),
          (k = S = 0),
          !be(g) && !Ce(g))
        )
          (k = kr(r, y.data, y.gc, k, g)), (S = w);
        else if (Ce(g))
          for (p = 0, m = g.length; p < m; ++p)
            (M = g[p]), !be(M) && !Ce(M) && ((k = kr(r, y.data, y.gc, k, M)), (S += w));
        a.push(k), o.push(S), (h = Math.max(k, h)), (d = Math.max(S, d));
      }
      Pv(s, n);
      const O = a.indexOf(h),
        C = o.indexOf(d),
        L = (T) => ({ width: a[T] || 0, height: o[T] || 0 });
      return { first: L(0), last: L(n - 1), widest: L(O), highest: L(C), widths: a, heights: o };
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
      return k2(this._alignToPixels ? vn(this.chart, n, 0) : n);
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
        return i.$context || (i.$context = Fv(this.getContext(), e, i));
      }
      return this.$context || (this.$context = Hv(this.chart.getContext(), this));
    }
    _tickSize() {
      const e = this.options.ticks,
        n = Jt(this.labelRotation),
        i = Math.abs(Math.cos(n)),
        r = Math.abs(Math.sin(n)),
        s = this._getLabelSizes(),
        a = e.autoSkipPadding || 0,
        o = s ? s.widest.width + a : 0,
        c = s ? s.highest.height + a : 0;
      return this.isHorizontal() ? (c * i > o * r ? o / i : c / r) : c * r < o * i ? c / i : o / r;
    }
    _isVisible() {
      const e = this.options.display;
      return e !== 'auto' ? !!e : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(e) {
      const n = this.axis,
        i = this.chart,
        r = this.options,
        { grid: s, position: a, border: o } = r,
        c = s.offset,
        h = this.isHorizontal(),
        u = this.ticks.length + (c ? 1 : 0),
        p = Oi(s),
        m = [],
        g = o.setContext(this.getContext()),
        b = g.display ? g.width : 0,
        v = b / 2,
        y = function (U) {
          return vn(i, U, b);
        };
      let w, k, S, M, O, C, L, T, I, P, B, j;
      if (a === 'top')
        (w = y(this.bottom)),
          (C = this.bottom - p),
          (T = w - v),
          (P = y(e.top) + v),
          (j = e.bottom);
      else if (a === 'bottom')
        (w = y(this.top)), (P = e.top), (j = y(e.bottom) - v), (C = w + v), (T = this.top + p);
      else if (a === 'left')
        (w = y(this.right)), (O = this.right - p), (L = w - v), (I = y(e.left) + v), (B = e.right);
      else if (a === 'right')
        (w = y(this.left)), (I = e.left), (B = y(e.right) - v), (O = w + v), (L = this.left + p);
      else if (n === 'x') {
        if (a === 'center') w = y((e.top + e.bottom) / 2 + 0.5);
        else if (ae(a)) {
          const U = Object.keys(a)[0],
            X = a[U];
          w = y(this.chart.scales[U].getPixelForValue(X));
        }
        (P = e.top), (j = e.bottom), (C = w + v), (T = C + p);
      } else if (n === 'y') {
        if (a === 'center') w = y((e.left + e.right) / 2);
        else if (ae(a)) {
          const U = Object.keys(a)[0],
            X = a[U];
          w = y(this.chart.scales[U].getPixelForValue(X));
        }
        (O = w - v), (L = O - p), (I = e.left), (B = e.right);
      }
      const q = fe(r.ticks.maxTicksLimit, u),
        N = Math.max(1, Math.ceil(u / q));
      for (k = 0; k < u; k += N) {
        const U = this.getContext(k),
          X = s.setContext(U),
          he = o.setContext(U),
          Me = X.lineWidth,
          ue = X.color,
          Ie = he.dash || [],
          V = he.dashOffset,
          F = X.tickWidth,
          $ = X.tickColor,
          W = X.tickBorderDash || [],
          z = X.tickBorderDashOffset;
        (S = Tv(this, k, c)),
          S !== void 0 &&
            ((M = vn(i, S, Me)),
            h ? (O = L = I = B = M) : (C = T = P = j = M),
            m.push({
              tx1: O,
              ty1: C,
              tx2: L,
              ty2: T,
              x1: I,
              y1: P,
              x2: B,
              y2: j,
              width: Me,
              color: ue,
              borderDash: Ie,
              borderDashOffset: V,
              tickWidth: F,
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
        { position: r, ticks: s } = i,
        a = this.isHorizontal(),
        o = this.ticks,
        { align: c, crossAlign: h, padding: d, mirror: u } = s,
        p = Oi(i.grid),
        m = p + d,
        g = u ? -d : m,
        b = -Jt(this.labelRotation),
        v = [];
      let y,
        w,
        k,
        S,
        M,
        O,
        C,
        L,
        T,
        I,
        P,
        B,
        j = 'middle';
      if (r === 'top') (O = this.bottom - g), (C = this._getXAxisLabelAlignment());
      else if (r === 'bottom') (O = this.top + g), (C = this._getXAxisLabelAlignment());
      else if (r === 'left') {
        const N = this._getYAxisLabelAlignment(p);
        (C = N.textAlign), (M = N.x);
      } else if (r === 'right') {
        const N = this._getYAxisLabelAlignment(p);
        (C = N.textAlign), (M = N.x);
      } else if (n === 'x') {
        if (r === 'center') O = (e.top + e.bottom) / 2 + m;
        else if (ae(r)) {
          const N = Object.keys(r)[0],
            U = r[N];
          O = this.chart.scales[N].getPixelForValue(U) + m;
        }
        C = this._getXAxisLabelAlignment();
      } else if (n === 'y') {
        if (r === 'center') M = (e.left + e.right) / 2 - m;
        else if (ae(r)) {
          const N = Object.keys(r)[0],
            U = r[N];
          M = this.chart.scales[N].getPixelForValue(U);
        }
        C = this._getYAxisLabelAlignment(p).textAlign;
      }
      n === 'y' && (c === 'start' ? (j = 'top') : c === 'end' && (j = 'bottom'));
      const q = this._getLabelSizes();
      for (y = 0, w = o.length; y < w; ++y) {
        (k = o[y]), (S = k.label);
        const N = s.setContext(this.getContext(y));
        (L = this.getPixelForTick(y) + s.labelOffset),
          (T = this._resolveTickFontOptions(y)),
          (I = T.lineHeight),
          (P = Ce(S) ? S.length : 1);
        const U = P / 2,
          X = N.color,
          he = N.textStrokeColor,
          Me = N.textStrokeWidth;
        let ue = C;
        a
          ? ((M = L),
            C === 'inner' &&
              (y === w - 1
                ? (ue = this.options.reverse ? 'left' : 'right')
                : y === 0
                ? (ue = this.options.reverse ? 'right' : 'left')
                : (ue = 'center')),
            r === 'top'
              ? h === 'near' || b !== 0
                ? (B = -P * I + I / 2)
                : h === 'center'
                ? (B = -q.highest.height / 2 - U * I + I)
                : (B = -q.highest.height + I / 2)
              : h === 'near' || b !== 0
              ? (B = I / 2)
              : h === 'center'
              ? (B = q.highest.height / 2 - U * I)
              : (B = q.highest.height - P * I),
            u && (B *= -1),
            b !== 0 && !N.showLabelBackdrop && (M += (I / 2) * Math.sin(b)))
          : ((O = L), (B = ((1 - P) * I) / 2));
        let Ie;
        if (N.showLabelBackdrop) {
          const V = nt(N.backdropPadding),
            F = q.heights[y],
            $ = q.widths[y];
          let W = B - V.top,
            z = 0 - V.left;
          switch (j) {
            case 'middle':
              W -= F / 2;
              break;
            case 'bottom':
              W -= F;
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
          Ie = {
            left: z,
            top: W,
            width: $ + V.width,
            height: F + V.height,
            color: N.backdropColor,
          };
        }
        v.push({
          label: S,
          font: T,
          textOffset: B,
          options: {
            rotation: b,
            color: X,
            strokeColor: he,
            strokeWidth: Me,
            textAlign: ue,
            textBaseline: j,
            translation: [M, O],
            backdrop: Ie,
          },
        });
      }
      return v;
    }
    _getXAxisLabelAlignment() {
      const { position: e, ticks: n } = this.options;
      if (-Jt(this.labelRotation)) return e === 'top' ? 'left' : 'right';
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
          ticks: { crossAlign: i, mirror: r, padding: s },
        } = this.options,
        a = this._getLabelSizes(),
        o = e + s,
        c = a.widest.width;
      let h, d;
      return (
        n === 'left'
          ? r
            ? ((d = this.right + s),
              i === 'near'
                ? (h = 'left')
                : i === 'center'
                ? ((h = 'center'), (d += c / 2))
                : ((h = 'right'), (d += c)))
            : ((d = this.right - o),
              i === 'near'
                ? (h = 'right')
                : i === 'center'
                ? ((h = 'center'), (d -= c / 2))
                : ((h = 'left'), (d = this.left)))
          : n === 'right'
          ? r
            ? ((d = this.left + s),
              i === 'near'
                ? (h = 'right')
                : i === 'center'
                ? ((h = 'center'), (d -= c / 2))
                : ((h = 'left'), (d -= c)))
            : ((d = this.left + o),
              i === 'near'
                ? (h = 'left')
                : i === 'center'
                ? ((h = 'center'), (d += c / 2))
                : ((h = 'right'), (d = this.right)))
          : (h = 'right'),
        { textAlign: h, x: d }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const e = this.chart,
        n = this.options.position;
      if (n === 'left' || n === 'right')
        return { top: 0, left: this.left, bottom: e.height, right: this.right };
      if (n === 'top' || n === 'bottom')
        return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
    }
    drawBackground() {
      const {
        ctx: e,
        options: { backgroundColor: n },
        left: i,
        top: r,
        width: s,
        height: a,
      } = this;
      n && (e.save(), (e.fillStyle = n), e.fillRect(i, r, s, a), e.restore());
    }
    getLineWidthForValue(e) {
      const n = this.options.grid;
      if (!this._isVisible() || !n.display) return 0;
      const r = this.ticks.findIndex((s) => s.value === e);
      return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
    }
    drawGrid(e) {
      const n = this.options.grid,
        i = this.ctx,
        r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
      let s, a;
      const o = (c, h, d) => {
        !d.width ||
          !d.color ||
          (i.save(),
          (i.lineWidth = d.width),
          (i.strokeStyle = d.color),
          i.setLineDash(d.borderDash || []),
          (i.lineDashOffset = d.borderDashOffset),
          i.beginPath(),
          i.moveTo(c.x, c.y),
          i.lineTo(h.x, h.y),
          i.stroke(),
          i.restore());
      };
      if (n.display)
        for (s = 0, a = r.length; s < a; ++s) {
          const c = r[s];
          n.drawOnChartArea && o({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
            n.drawTicks &&
              o(
                { x: c.tx1, y: c.ty1 },
                { x: c.tx2, y: c.ty2 },
                {
                  color: c.tickColor,
                  width: c.tickWidth,
                  borderDash: c.tickBorderDash,
                  borderDashOffset: c.tickBorderDashOffset,
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
        s = i.setContext(this.getContext()),
        a = i.display ? s.width : 0;
      if (!a) return;
      const o = r.setContext(this.getContext(0)).lineWidth,
        c = this._borderValue;
      let h, d, u, p;
      this.isHorizontal()
        ? ((h = vn(e, this.left, a) - a / 2), (d = vn(e, this.right, o) + o / 2), (u = p = c))
        : ((u = vn(e, this.top, a) - a / 2), (p = vn(e, this.bottom, o) + o / 2), (h = d = c)),
        n.save(),
        (n.lineWidth = s.width),
        (n.strokeStyle = s.color),
        n.beginPath(),
        n.moveTo(h, u),
        n.lineTo(d, p),
        n.stroke(),
        n.restore();
    }
    drawLabels(e) {
      if (!this.options.ticks.display) return;
      const i = this.ctx,
        r = this._computeLabelArea();
      r && Ch(i, r);
      const s = this.getLabelItems(e);
      for (const a of s) {
        const o = a.options,
          c = a.font,
          h = a.label,
          d = a.textOffset;
        yi(i, h, 0, d, c, o);
      }
      r && Mh(i);
    }
    drawTitle() {
      const {
        ctx: e,
        options: { position: n, title: i, reverse: r },
      } = this;
      if (!i.display) return;
      const s = Xe(i.font),
        a = nt(i.padding),
        o = i.align;
      let c = s.lineHeight / 2;
      n === 'bottom' || n === 'center' || ae(n)
        ? ((c += a.bottom), Ce(i.text) && (c += s.lineHeight * (i.text.length - 1)))
        : (c += a.top);
      const { titleX: h, titleY: d, maxWidth: u, rotation: p } = Bv(this, c, n, o);
      yi(e, i.text, 0, 0, s, {
        color: i.color,
        maxWidth: u,
        rotation: p,
        textAlign: Vv(o, n, r),
        textBaseline: 'middle',
        translation: [h, d],
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
        i = fe(e.grid && e.grid.z, -1),
        r = fe(e.border && e.border.z, 0);
      return !this._isVisible() || this.draw !== En.prototype.draw
        ? [
            {
              z: n,
              draw: (s) => {
                this.draw(s);
              },
            },
          ]
        : [
            {
              z: i,
              draw: (s) => {
                this.drawBackground(), this.drawGrid(s), this.drawTitle();
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
              draw: (s) => {
                this.drawLabels(s);
              },
            },
          ];
    }
    getMatchingVisibleMetas(e) {
      const n = this.chart.getSortedVisibleDatasetMetas(),
        i = this.axis + 'AxisID',
        r = [];
      let s, a;
      for (s = 0, a = n.length; s < a; ++s) {
        const o = n[s];
        o[i] === this.id && (!e || o.type === e) && r.push(o);
      }
      return r;
    }
    _resolveTickFontOptions(e) {
      const n = this.options.ticks.setContext(this.getContext(e));
      return Xe(n.font);
    }
    _maxDigits() {
      const e = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / e;
    }
  }
  class Fr {
    constructor(e, n, i) {
      (this.type = e), (this.scope = n), (this.override = i), (this.items = Object.create(null));
    }
    isForType(e) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
    }
    register(e) {
      const n = Object.getPrototypeOf(e);
      let i;
      jv(n) && (i = this.register(n));
      const r = this.items,
        s = e.id,
        a = this.scope + '.' + s;
      if (!s) throw new Error('class does not have id: ' + e);
      return (
        s in r || ((r[s] = e), Nv(e, a, i), this.override && Oe.override(e.id, e.overrides)), a
      );
    }
    get(e) {
      return this.items[e];
    }
    unregister(e) {
      const n = this.items,
        i = e.id,
        r = this.scope;
      i in n && delete n[i], r && i in Oe[r] && (delete Oe[r][i], this.override && delete gn[i]);
    }
  }
  function Nv(t, e, n) {
    const i = ui(Object.create(null), [n ? Oe.get(n) : {}, Oe.get(e), t.defaults]);
    Oe.set(e, i),
      t.defaultRoutes && $v(e, t.defaultRoutes),
      t.descriptors && Oe.describe(e, t.descriptors);
  }
  function $v(t, e) {
    Object.keys(e).forEach((n) => {
      const i = n.split('.'),
        r = i.pop(),
        s = [t].concat(i).join('.'),
        a = e[n].split('.'),
        o = a.pop(),
        c = a.join('.');
      Oe.route(s, r, c, o);
    });
  }
  function jv(t) {
    return 'id' in t && 'defaults' in t;
  }
  class Wv {
    constructor() {
      (this.controllers = new Fr(Ei, 'datasets', !0)),
        (this.elements = new Fr(Vn, 'elements')),
        (this.plugins = new Fr(Object, 'plugins')),
        (this.scales = new Fr(En, 'scales')),
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
        const s = i || this._getRegistryForType(r);
        i || s.isForType(r) || (s === this.plugins && r.id)
          ? this._exec(e, s, r)
          : de(r, (a) => {
              const o = i || this._getRegistryForType(a);
              this._exec(e, o, a);
            });
      });
    }
    _exec(e, n, i) {
      const r = Ws(e);
      ke(i['before' + r], [], i), n[e](i), ke(i['after' + r], [], i);
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
  var Ot = new Wv();
  class Xv {
    constructor() {
      this._init = [];
    }
    notify(e, n, i, r) {
      n === 'beforeInit' &&
        ((this._init = this._createDescriptors(e, !0)), this._notify(this._init, e, 'install'));
      const s = r ? this._descriptors(e).filter(r) : this._descriptors(e),
        a = this._notify(s, e, n, i);
      return (
        n === 'afterDestroy' &&
          (this._notify(s, e, 'stop'), this._notify(this._init, e, 'uninstall')),
        a
      );
    }
    _notify(e, n, i, r) {
      r = r || {};
      for (const s of e) {
        const a = s.plugin,
          o = a[i],
          c = [n, r, s.options];
        if (ke(o, c, a) === !1 && r.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      be(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(e) {
      if (this._cache) return this._cache;
      const n = (this._cache = this._createDescriptors(e));
      return this._notifyStateChanges(e), n;
    }
    _createDescriptors(e, n) {
      const i = e && e.config,
        r = fe(i.options && i.options.plugins, {}),
        s = Yv(i);
      return r === !1 && !n ? [] : qv(e, s, r, n);
    }
    _notifyStateChanges(e) {
      const n = this._oldCache || [],
        i = this._cache,
        r = (s, a) => s.filter((o) => !a.some((c) => o.plugin.id === c.plugin.id));
      this._notify(r(n, i), e, 'stop'), this._notify(r(i, n), e, 'start');
    }
  }
  function Yv(t) {
    const e = {},
      n = [],
      i = Object.keys(Ot.plugins.items);
    for (let s = 0; s < i.length; s++) n.push(Ot.getPlugin(i[s]));
    const r = t.plugins || [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      n.indexOf(a) === -1 && (n.push(a), (e[a.id] = !0));
    }
    return { plugins: n, localIds: e };
  }
  function Uv(t, e) {
    return !e && t === !1 ? null : t === !0 ? {} : t;
  }
  function qv(t, { plugins: e, localIds: n }, i, r) {
    const s = [],
      a = t.getContext();
    for (const o of e) {
      const c = o.id,
        h = Uv(i[c], r);
      h !== null && s.push({ plugin: o, options: Gv(t.config, { plugin: o, local: n[c] }, h, a) });
    }
    return s;
  }
  function Gv(t, { plugin: e, local: n }, i, r) {
    const s = t.pluginScopeKeys(e),
      a = t.getOptionScopes(i, s);
    return (
      n && e.defaults && a.push(e.defaults),
      t.createResolver(a, r, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
  }
  function da(t, e) {
    const n = Oe.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || 'x';
  }
  function Kv(t, e) {
    let n = t;
    return t === '_index_' ? (n = e) : t === '_value_' && (n = e === 'x' ? 'y' : 'x'), n;
  }
  function Zv(t, e) {
    return t === e ? '_index_' : '_value_';
  }
  function h1(t) {
    if (t === 'x' || t === 'y' || t === 'r') return t;
  }
  function Qv(t) {
    if (t === 'top' || t === 'bottom') return 'x';
    if (t === 'left' || t === 'right') return 'y';
  }
  function ua(t, ...e) {
    if (h1(t)) return t;
    for (const n of e) {
      const i = n.axis || Qv(n.position) || (t.length > 1 && h1(t[0].toLowerCase()));
      if (i) return i;
    }
    throw new Error(
      `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
    );
  }
  function d1(t, e, n) {
    if (n[e + 'AxisID'] === t) return { axis: e };
  }
  function Jv(t, e) {
    if (e.data && e.data.datasets) {
      const n = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
      if (n.length) return d1(t, 'x', n[0]) || d1(t, 'y', n[0]);
    }
    return {};
  }
  function _v(t, e) {
    const n = gn[t.type] || { scales: {} },
      i = e.scales || {},
      r = da(t.type, e),
      s = Object.create(null);
    return (
      Object.keys(i).forEach((a) => {
        const o = i[a];
        if (!ae(o)) return console.error(`Invalid scale configuration for scale: ${a}`);
        if (o._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
        const c = ua(a, o, Jv(a, t), Oe.scales[o.type]),
          h = Zv(c, r),
          d = n.scales || {};
        s[a] = fi(Object.create(null), [{ axis: c }, o, d[c], d[h]]);
      }),
      t.data.datasets.forEach((a) => {
        const o = a.type || t.type,
          c = a.indexAxis || da(o, e),
          d = (gn[o] || {}).scales || {};
        Object.keys(d).forEach((u) => {
          const p = Kv(u, c),
            m = a[p + 'AxisID'] || p;
          (s[m] = s[m] || Object.create(null)), fi(s[m], [{ axis: p }, i[m], d[u]]);
        });
      }),
      Object.keys(s).forEach((a) => {
        const o = s[a];
        fi(o, [Oe.scales[o.type], Oe.scale]);
      }),
      s
    );
  }
  function u1(t) {
    const e = t.options || (t.options = {});
    (e.plugins = fe(e.plugins, {})), (e.scales = _v(t, e));
  }
  function f1(t) {
    return (t = t || {}), (t.datasets = t.datasets || []), (t.labels = t.labels || []), t;
  }
  function eb(t) {
    return (t = t || {}), (t.data = f1(t.data)), u1(t), t;
  }
  const p1 = new Map(),
    m1 = new Set();
  function Vr(t, e) {
    let n = p1.get(t);
    return n || ((n = e()), p1.set(t, n), m1.add(n)), n;
  }
  const Li = (t, e, n) => {
    const i = wr(e, n);
    i !== void 0 && t.add(i);
  };
  class tb {
    constructor(e) {
      (this._config = eb(e)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
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
      this._config.data = f1(e);
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
      this.clearCache(), u1(e);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(e) {
      return Vr(e, () => [[`datasets.${e}`, '']]);
    }
    datasetAnimationScopeKeys(e, n) {
      return Vr(`${e}.transition.${n}`, () => [
        [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
        [`datasets.${e}`, ''],
      ]);
    }
    datasetElementScopeKeys(e, n) {
      return Vr(`${e}-${n}`, () => [
        [`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ''],
      ]);
    }
    pluginScopeKeys(e) {
      const n = e.id,
        i = this.type;
      return Vr(`${i}-plugin-${n}`, () => [[`plugins.${n}`, ...(e.additionalOptionScopes || [])]]);
    }
    _cachedScopes(e, n) {
      const i = this._scopeCache;
      let r = i.get(e);
      return (!r || n) && ((r = new Map()), i.set(e, r)), r;
    }
    getOptionScopes(e, n, i) {
      const { options: r, type: s } = this,
        a = this._cachedScopes(e, i),
        o = a.get(n);
      if (o) return o;
      const c = new Set();
      n.forEach((d) => {
        e && (c.add(e), d.forEach((u) => Li(c, e, u))),
          d.forEach((u) => Li(c, r, u)),
          d.forEach((u) => Li(c, gn[s] || {}, u)),
          d.forEach((u) => Li(c, Oe, u)),
          d.forEach((u) => Li(c, Zs, u));
      });
      const h = Array.from(c);
      return h.length === 0 && h.push(Object.create(null)), m1.has(n) && a.set(n, h), h;
    }
    chartOptionScopes() {
      const { options: e, type: n } = this;
      return [e, gn[n] || {}, Oe.datasets[n] || {}, { type: n }, Oe, Zs];
    }
    resolveNamedOptions(e, n, i, r = ['']) {
      const s = { $shared: !0 },
        { resolver: a, subPrefixes: o } = g1(this._resolverCache, e, r);
      let c = a;
      if (ib(a, n)) {
        (s.$shared = !1), (i = Zt(i) ? i() : i);
        const h = this.createResolver(e, i, o);
        c = Hn(a, i, h);
      }
      for (const h of n) s[h] = c[h];
      return s;
    }
    createResolver(e, n, i = [''], r) {
      const { resolver: s } = g1(this._resolverCache, e, i);
      return ae(n) ? Hn(s, n, void 0, r) : s;
    }
  }
  function g1(t, e, n) {
    let i = t.get(e);
    i || ((i = new Map()), t.set(e, i));
    const r = n.join();
    let s = i.get(r);
    return (
      s ||
        ((s = {
          resolver: ea(e, n),
          subPrefixes: n.filter((o) => !o.toLowerCase().includes('hover')),
        }),
        i.set(r, s)),
      s
    );
  }
  const nb = (t) => ae(t) && Object.getOwnPropertyNames(t).reduce((e, n) => e || Zt(t[n]), !1);
  function ib(t, e) {
    const { isScriptable: n, isIndexable: i } = kh(t);
    for (const r of e) {
      const s = n(r),
        a = i(r),
        o = (a || s) && t[r];
      if ((s && (Zt(o) || nb(o))) || (a && Ce(o))) return !0;
    }
    return !1;
  }
  var rb = '4.3.0';
  const sb = ['top', 'bottom', 'left', 'right', 'chartArea'];
  function v1(t, e) {
    return t === 'top' || t === 'bottom' || (sb.indexOf(t) === -1 && e === 'x');
  }
  function b1(t, e) {
    return function (n, i) {
      return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
  }
  function y1(t) {
    const e = t.chart,
      n = e.options.animation;
    e.notifyPlugins('afterRender'), ke(n && n.onComplete, [t], e);
  }
  function ab(t) {
    const e = t.chart,
      n = e.options.animation;
    ke(n && n.onProgress, [t], e);
  }
  function x1(t) {
    return (
      Ah() && typeof t == 'string' ? (t = document.getElementById(t)) : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t
    );
  }
  const Br = {},
    w1 = (t) => {
      const e = x1(t);
      return Object.values(Br)
        .filter((n) => n.canvas === e)
        .pop();
    };
  function ob(t, e, n) {
    const i = Object.keys(t);
    for (const r of i) {
      const s = +r;
      if (s >= e) {
        const a = t[r];
        delete t[r], (n > 0 || s > e) && (t[s + n] = a);
      }
    }
  }
  function lb(t, e, n, i) {
    return !n || t.type === 'mouseout' ? null : i ? e : t;
  }
  function cb(t) {
    const { xScale: e, yScale: n } = t;
    if (e && n) return { left: e.left, right: e.right, top: n.top, bottom: n.bottom };
  }
  let Ft =
    ((tn = class {
      static register(...e) {
        Ot.add(...e), E1();
      }
      static unregister(...e) {
        Ot.remove(...e), E1();
      }
      constructor(e, n) {
        const i = (this.config = new tb(n)),
          r = x1(e),
          s = w1(r);
        if (s)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              s.id +
              "' must be destroyed before the canvas with ID '" +
              s.canvas.id +
              "' can be reused."
          );
        const a = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform || kv(r))()), this.platform.updateConfig(i);
        const o = this.platform.acquireContext(r, a.aspectRatio),
          c = o && o.canvas,
          h = c && c.height,
          d = c && c.width;
        if (
          ((this.id = f2()),
          (this.ctx = o),
          (this.canvas = c),
          (this.width = d),
          (this.height = h),
          (this._options = a),
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
          (this._plugins = new Xv()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = D2((u) => this.update(u), a.resizeDelay || 0)),
          (this._dataChanges = []),
          (Br[this.id] = this),
          !o || !c)
        ) {
          console.error("Failed to create chart: can't acquire context from the given item");
          return;
        }
        Ht.listen(this, 'complete', y1),
          Ht.listen(this, 'progress', ab),
          this._initialize(),
          this.attached && this.update();
      }
      get aspectRatio() {
        const {
          options: { aspectRatio: e, maintainAspectRatio: n },
          width: i,
          height: r,
          _aspectRatio: s,
        } = this;
        return be(e) ? (n && s ? s : r ? i / r : null) : e;
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
        return Ot;
      }
      _initialize() {
        return (
          this.notifyPlugins('beforeInit'),
          this.options.responsive ? this.resize() : Th(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins('afterInit'),
          this
        );
      }
      clear() {
        return Eh(this.canvas, this.ctx), this;
      }
      stop() {
        return Ht.stop(this), this;
      }
      resize(e, n) {
        Ht.running(this) ? (this._resizeBeforeDraw = { width: e, height: n }) : this._resize(e, n);
      }
      _resize(e, n) {
        const i = this.options,
          r = this.canvas,
          s = i.maintainAspectRatio && this.aspectRatio,
          a = this.platform.getMaximumSize(r, e, n, s),
          o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
          c = this.width ? 'resize' : 'attach';
        (this.width = a.width),
          (this.height = a.height),
          (this._aspectRatio = this.aspectRatio),
          Th(this, o, !0) &&
            (this.notifyPlugins('resize', { size: a }),
            ke(i.onResize, [this, a], this),
            this.attached && this._doResize(c) && this.render());
      }
      ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        de(n, (i, r) => {
          i.id = r;
        });
      }
      buildOrUpdateScales() {
        const e = this.options,
          n = e.scales,
          i = this.scales,
          r = Object.keys(i).reduce((a, o) => ((a[o] = !1), a), {});
        let s = [];
        n &&
          (s = s.concat(
            Object.keys(n).map((a) => {
              const o = n[a],
                c = ua(a, o),
                h = c === 'r',
                d = c === 'x';
              return {
                options: o,
                dposition: h ? 'chartArea' : d ? 'bottom' : 'left',
                dtype: h ? 'radialLinear' : d ? 'category' : 'linear',
              };
            })
          )),
          de(s, (a) => {
            const o = a.options,
              c = o.id,
              h = ua(c, o),
              d = fe(o.type, a.dtype);
            (o.position === void 0 || v1(o.position, h) !== v1(a.dposition)) &&
              (o.position = a.dposition),
              (r[c] = !0);
            let u = null;
            if (c in i && i[c].type === d) u = i[c];
            else {
              const p = Ot.getScale(d);
              (u = new p({ id: c, type: d, ctx: this.ctx, chart: this })), (i[u.id] = u);
            }
            u.init(o, e);
          }),
          de(r, (a, o) => {
            a || delete i[o];
          }),
          de(i, (a) => {
            en.configure(this, a, a.options), en.addBox(this, a);
          });
      }
      _updateMetasets() {
        const e = this._metasets,
          n = this.data.datasets.length,
          i = e.length;
        if ((e.sort((r, s) => r.index - s.index), i > n)) {
          for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
          e.splice(n, i - n);
        }
        this._sortedMetasets = e.slice(0).sort(b1('order', 'index'));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: e,
          data: { datasets: n },
        } = this;
        e.length > n.length && delete this._stacks,
          e.forEach((i, r) => {
            n.filter((s) => s === i._dataset).length === 0 && this._destroyDatasetMeta(r);
          });
      }
      buildOrUpdateControllers() {
        const e = [],
          n = this.data.datasets;
        let i, r;
        for (this._removeUnreferencedMetasets(), i = 0, r = n.length; i < r; i++) {
          const s = n[i];
          let a = this.getDatasetMeta(i);
          const o = s.type || this.config.type;
          if (
            (a.type && a.type !== o && (this._destroyDatasetMeta(i), (a = this.getDatasetMeta(i))),
            (a.type = o),
            (a.indexAxis = s.indexAxis || da(o, this.options)),
            (a.order = s.order || 0),
            (a.index = i),
            (a.label = '' + s.label),
            (a.visible = this.isDatasetVisible(i)),
            a.controller)
          )
            a.controller.updateIndex(i), a.controller.linkScales();
          else {
            const c = Ot.getController(o),
              { datasetElementType: h, dataElementType: d } = Oe.datasets[o];
            Object.assign(c, {
              dataElementType: Ot.getElement(d),
              datasetElementType: h && Ot.getElement(h),
            }),
              (a.controller = new c(this, i)),
              e.push(a.controller);
          }
        }
        return this._updateMetasets(), e;
      }
      _resetElements() {
        de(
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
          this.notifyPlugins('beforeUpdate', { mode: e, cancelable: !0 }) === !1)
        )
          return;
        const s = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let a = 0;
        for (let h = 0, d = this.data.datasets.length; h < d; h++) {
          const { controller: u } = this.getDatasetMeta(h),
            p = !r && s.indexOf(u) === -1;
          u.buildOrUpdateElements(p), (a = Math.max(+u.getMaxOverflow(), a));
        }
        (a = this._minPadding = i.layout.autoPadding ? a : 0),
          this._updateLayout(a),
          r ||
            de(s, (h) => {
              h.reset();
            }),
          this._updateDatasets(e),
          this.notifyPlugins('afterUpdate', { mode: e }),
          this._layers.sort(b1('z', '_idx'));
        const { _active: o, _lastEvent: c } = this;
        c ? this._eventHandler(c, !0) : o.length && this._updateHoverStyles(o, o, !0),
          this.render();
      }
      _updateScales() {
        de(this.scales, (e) => {
          en.removeBox(this, e);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const e = this.options,
          n = new Set(Object.keys(this._listeners)),
          i = new Set(e.events);
        (!ah(n, i) || !!this._responsiveListeners !== e.responsive) &&
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: e } = this,
          n = this._getUniformDataChanges() || [];
        for (const { method: i, start: r, count: s } of n) {
          const a = i === '_removeElements' ? -s : s;
          ob(e, r, a);
        }
      }
      _getUniformDataChanges() {
        const e = this._dataChanges;
        if (!e || !e.length) return;
        this._dataChanges = [];
        const n = this.data.datasets.length,
          i = (s) =>
            new Set(e.filter((a) => a[0] === s).map((a, o) => o + ',' + a.splice(1).join(','))),
          r = i(0);
        for (let s = 1; s < n; s++) if (!ah(r, i(s))) return;
        return Array.from(r)
          .map((s) => s.split(','))
          .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
      }
      _updateLayout(e) {
        if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
        en.update(this, this.width, this.height, e);
        const n = this.chartArea,
          i = n.width <= 0 || n.height <= 0;
        (this._layers = []),
          de(
            this.boxes,
            (r) => {
              (i && r.position === 'chartArea') ||
                (r.configure && r.configure(), this._layers.push(...r._layers()));
            },
            this
          ),
          this._layers.forEach((r, s) => {
            r._idx = s;
          }),
          this.notifyPlugins('afterLayout');
      }
      _updateDatasets(e) {
        if (this.notifyPlugins('beforeDatasetsUpdate', { mode: e, cancelable: !0 }) !== !1) {
          for (let n = 0, i = this.data.datasets.length; n < i; ++n)
            this.getDatasetMeta(n).controller.configure();
          for (let n = 0, i = this.data.datasets.length; n < i; ++n)
            this._updateDataset(n, Zt(e) ? e({ datasetIndex: n }) : e);
          this.notifyPlugins('afterDatasetsUpdate', { mode: e });
        }
      }
      _updateDataset(e, n) {
        const i = this.getDatasetMeta(e),
          r = { meta: i, index: e, mode: n, cancelable: !0 };
        this.notifyPlugins('beforeDatasetUpdate', r) !== !1 &&
          (i.controller._update(n),
          (r.cancelable = !1),
          this.notifyPlugins('afterDatasetUpdate', r));
      }
      render() {
        this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
          (Ht.has(this)
            ? this.attached && !Ht.running(this) && Ht.start(this)
            : (this.draw(), y1({ chart: this })));
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
            this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
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
        let r, s;
        for (r = 0, s = n.length; r < s; ++r) {
          const a = n[r];
          (!e || a.visible) && i.push(a);
        }
        return i;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
        const e = this.getSortedVisibleDatasetMetas();
        for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
        this.notifyPlugins('afterDatasetsDraw');
      }
      _drawDataset(e) {
        const n = this.ctx,
          i = e._clip,
          r = !i.disabled,
          s = cb(e) || this.chartArea,
          a = { meta: e, index: e.index, cancelable: !0 };
        this.notifyPlugins('beforeDatasetDraw', a) !== !1 &&
          (r &&
            Ch(n, {
              left: i.left === !1 ? 0 : s.left - i.left,
              right: i.right === !1 ? this.width : s.right + i.right,
              top: i.top === !1 ? 0 : s.top - i.top,
              bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
            }),
          e.controller.draw(),
          r && Mh(n),
          (a.cancelable = !1),
          this.notifyPlugins('afterDatasetDraw', a));
      }
      isPointInArea(e) {
        return Pt(e, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(e, n, i, r) {
        const s = sv.modes[n];
        return typeof s == 'function' ? s(this, e, i, r) : [];
      }
      getDatasetMeta(e) {
        const n = this.data.datasets[e],
          i = this._metasets;
        let r = i.filter((s) => s && s._dataset === n).pop();
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
        return this.$context || (this.$context = _t(null, { chart: this, type: 'chart' }));
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
          s = this.getDatasetMeta(e),
          a = s.controller._resolveAnimations(void 0, r);
        Er(n)
          ? ((s.data[n].hidden = !i), this.update())
          : (this.setDatasetVisibility(e, i),
            a.update(s, { visible: i }),
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
        for (this.stop(), Ht.remove(this), e = 0, n = this.data.datasets.length; e < n; ++e)
          this._destroyDatasetMeta(e);
      }
      destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: e, ctx: n } = this;
        this._stop(),
          this.config.clearCache(),
          e &&
            (this.unbindEvents(),
            Eh(e, n),
            this.platform.releaseContext(n),
            (this.canvas = null),
            (this.ctx = null)),
          delete Br[this.id],
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
          i = (s, a) => {
            n.addEventListener(this, s, a), (e[s] = a);
          },
          r = (s, a, o) => {
            (s.offsetX = a), (s.offsetY = o), this._eventHandler(s);
          };
        de(this.options.events, (s) => i(s, r));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const e = this._responsiveListeners,
          n = this.platform,
          i = (c, h) => {
            n.addEventListener(this, c, h), (e[c] = h);
          },
          r = (c, h) => {
            e[c] && (n.removeEventListener(this, c, h), delete e[c]);
          },
          s = (c, h) => {
            this.canvas && this.resize(c, h);
          };
        let a;
        const o = () => {
          r('attach', o), (this.attached = !0), this.resize(), i('resize', s), i('detach', a);
        };
        (a = () => {
          (this.attached = !1), r('resize', s), this._stop(), this._resize(0, 0), i('attach', o);
        }),
          n.isAttached(this.canvas) ? o() : a();
      }
      unbindEvents() {
        de(this._listeners, (e, n) => {
          this.platform.removeEventListener(this, n, e);
        }),
          (this._listeners = {}),
          de(this._responsiveListeners, (e, n) => {
            this.platform.removeEventListener(this, n, e);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(e, n, i) {
        const r = i ? 'set' : 'remove';
        let s, a, o, c;
        for (
          n === 'dataset' &&
            ((s = this.getDatasetMeta(e[0].datasetIndex)),
            s.controller['_' + r + 'DatasetHoverStyle']()),
            o = 0,
            c = e.length;
          o < c;
          ++o
        ) {
          a = e[o];
          const h = a && this.getDatasetMeta(a.datasetIndex).controller;
          h && h[r + 'HoverStyle'](a.element, a.datasetIndex, a.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(e) {
        const n = this._active || [],
          i = e.map(({ datasetIndex: s, index: a }) => {
            const o = this.getDatasetMeta(s);
            if (!o) throw new Error('No dataset found at index ' + s);
            return { datasetIndex: s, element: o.data[a], index: a };
          });
        !yr(i, n) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, n));
      }
      notifyPlugins(e, n, i) {
        return this._plugins.notify(this, e, n, i);
      }
      isPluginEnabled(e) {
        return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
      }
      _updateHoverStyles(e, n, i) {
        const r = this.options.hover,
          s = (c, h) =>
            c.filter(
              (d) => !h.some((u) => d.datasetIndex === u.datasetIndex && d.index === u.index)
            ),
          a = s(n, e),
          o = i ? e : s(e, n);
        a.length && this.updateHoverStyle(a, r.mode, !1),
          o.length && r.mode && this.updateHoverStyle(o, r.mode, !0);
      }
      _eventHandler(e, n) {
        const i = { event: e, replay: n, cancelable: !0, inChartArea: this.isPointInArea(e) },
          r = (a) => (a.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', i, r) === !1) return;
        const s = this._handleEvent(e, n, i.inChartArea);
        return (
          (i.cancelable = !1),
          this.notifyPlugins('afterEvent', i, r),
          (s || i.changed) && this.render(),
          this
        );
      }
      _handleEvent(e, n, i) {
        const { _active: r = [], options: s } = this,
          a = n,
          o = this._getActiveElements(e, r, i, a),
          c = y2(e),
          h = lb(e, this._lastEvent, i, c);
        i &&
          ((this._lastEvent = null),
          ke(s.onHover, [e, o, this], this),
          c && ke(s.onClick, [e, o, this], this));
        const d = !yr(o, r);
        return (
          (d || n) && ((this._active = o), this._updateHoverStyles(o, r, n)),
          (this._lastEvent = h),
          d
        );
      }
      _getActiveElements(e, n, i, r) {
        if (e.type === 'mouseout') return [];
        if (!i) return n;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(e, s.mode, s, r);
      }
    }),
    Z(tn, 'defaults', Oe),
    Z(tn, 'instances', Br),
    Z(tn, 'overrides', gn),
    Z(tn, 'registry', Ot),
    Z(tn, 'version', rb),
    Z(tn, 'getChart', w1),
    tn);
  function E1() {
    return de(Ft.instances, (t) => t._plugins.invalidate());
  }
  function C1(t, e, n = e) {
    (t.lineCap = fe(n.borderCapStyle, e.borderCapStyle)),
      t.setLineDash(fe(n.borderDash, e.borderDash)),
      (t.lineDashOffset = fe(n.borderDashOffset, e.borderDashOffset)),
      (t.lineJoin = fe(n.borderJoinStyle, e.borderJoinStyle)),
      (t.lineWidth = fe(n.borderWidth, e.borderWidth)),
      (t.strokeStyle = fe(n.borderColor, e.borderColor));
  }
  function hb(t, e, n) {
    t.lineTo(n.x, n.y);
  }
  function db(t) {
    return t.stepped ? U2 : t.tension || t.cubicInterpolationMode === 'monotone' ? q2 : hb;
  }
  function M1(t, e, n = {}) {
    const i = t.length,
      { start: r = 0, end: s = i - 1 } = n,
      { start: a, end: o } = e,
      c = Math.max(r, a),
      h = Math.min(s, o),
      d = (r < a && s < a) || (r > o && s > o);
    return { count: i, start: c, loop: e.loop, ilen: h < c && !d ? i + h - c : h - c };
  }
  function ub(t, e, n, i) {
    const { points: r, options: s } = e,
      { count: a, start: o, loop: c, ilen: h } = M1(r, n, i),
      d = db(s);
    let { move: u = !0, reverse: p } = i || {},
      m,
      g,
      b;
    for (m = 0; m <= h; ++m)
      (g = r[(o + (p ? h - m : m)) % a]),
        !g.skip && (u ? (t.moveTo(g.x, g.y), (u = !1)) : d(t, b, g, p, s.stepped), (b = g));
    return c && ((g = r[(o + (p ? h : 0)) % a]), d(t, b, g, p, s.stepped)), !!c;
  }
  function fb(t, e, n, i) {
    const r = e.points,
      { count: s, start: a, ilen: o } = M1(r, n, i),
      { move: c = !0, reverse: h } = i || {};
    let d = 0,
      u = 0,
      p,
      m,
      g,
      b,
      v,
      y;
    const w = (S) => (a + (h ? o - S : S)) % s,
      k = () => {
        b !== v && (t.lineTo(d, v), t.lineTo(d, b), t.lineTo(d, y));
      };
    for (c && ((m = r[w(0)]), t.moveTo(m.x, m.y)), p = 0; p <= o; ++p) {
      if (((m = r[w(p)]), m.skip)) continue;
      const S = m.x,
        M = m.y,
        O = S | 0;
      O === g
        ? (M < b ? (b = M) : M > v && (v = M), (d = (u * d + S) / ++u))
        : (k(), t.lineTo(S, M), (g = O), (u = 0), (b = v = M)),
        (y = M);
    }
    k();
  }
  function fa(t) {
    const e = t.options,
      n = e.borderDash && e.borderDash.length;
    return !t._decimated &&
      !t._loop &&
      !e.tension &&
      e.cubicInterpolationMode !== 'monotone' &&
      !e.stepped &&
      !n
      ? fb
      : ub;
  }
  function pb(t) {
    return t.stepped ? k5 : t.tension || t.cubicInterpolationMode === 'monotone' ? z5 : xn;
  }
  function mb(t, e, n, i) {
    let r = e._path;
    r || ((r = e._path = new Path2D()), e.path(r, n, i) && r.closePath()),
      C1(t, e.options),
      t.stroke(r);
  }
  function gb(t, e, n, i) {
    const { segments: r, options: s } = e,
      a = fa(e);
    for (const o of r)
      C1(t, s, o.style),
        t.beginPath(),
        a(t, e, o, { start: n, end: n + i - 1 }) && t.closePath(),
        t.stroke();
  }
  const vb = typeof Path2D == 'function';
  function bb(t, e, n, i) {
    vb && !e.options.segment ? mb(t, e, n, i) : gb(t, e, n, i);
  }
  class Ri extends Vn {
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
        b5(this._points, i, e, r, n), (this._pointsUpdated = !0);
      }
    }
    set points(e) {
      (this._points = e), delete this._segments, delete this._path, (this._pointsUpdated = !1);
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = F5(this, this.options.segment));
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
        s = this.points,
        a = T5(this, { property: n, start: r, end: r });
      if (!a.length) return;
      const o = [],
        c = pb(i);
      let h, d;
      for (h = 0, d = a.length; h < d; ++h) {
        const { start: u, end: p } = a[h],
          m = s[u],
          g = s[p];
        if (m === g) {
          o.push(m);
          continue;
        }
        const b = Math.abs((r - m[n]) / (g[n] - m[n])),
          v = c(m, g, b, i.stepped);
        (v[n] = e[n]), o.push(v);
      }
      return o.length === 1 ? o[0] : o;
    }
    pathSegment(e, n, i) {
      return fa(this)(e, this, n, i);
    }
    path(e, n, i) {
      const r = this.segments,
        s = fa(this);
      let a = this._loop;
      (n = n || 0), (i = i || this.points.length - n);
      for (const o of r) a &= s(e, this, o, { start: n, end: n + i - 1 });
      return !!a;
    }
    draw(e, n, i, r) {
      const s = this.options || {};
      (this.points || []).length && s.borderWidth && (e.save(), bb(e, this, i, r), e.restore()),
        this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
  }
  Z(Ri, 'id', 'line'),
    Z(Ri, 'defaults', {
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
    Z(Ri, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
    Z(Ri, 'descriptors', {
      _scriptable: !0,
      _indexable: (e) => e !== 'borderDash' && e !== 'fill',
    });
  function S1(t, e, n, i) {
    const r = t.options,
      { [n]: s } = t.getProps([n], i);
    return Math.abs(e - s) < r.radius + r.hitRadius;
  }
  class Nr extends Vn {
    constructor(n) {
      super();
      Z(this, 'parsed');
      Z(this, 'skip');
      Z(this, 'stop');
      (this.options = void 0),
        (this.parsed = void 0),
        (this.skip = void 0),
        (this.stop = void 0),
        n && Object.assign(this, n);
    }
    inRange(n, i, r) {
      const s = this.options,
        { x: a, y: o } = this.getProps(['x', 'y'], r);
      return Math.pow(n - a, 2) + Math.pow(i - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
    }
    inXRange(n, i) {
      return S1(this, n, 'x', i);
    }
    inYRange(n, i) {
      return S1(this, n, 'y', i);
    }
    getCenterPoint(n) {
      const { x: i, y: r } = this.getProps(['x', 'y'], n);
      return { x: i, y: r };
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
        !Pt(this, i, this.size(r) / 2) ||
        ((n.strokeStyle = r.borderColor),
        (n.lineWidth = r.borderWidth),
        (n.fillStyle = r.backgroundColor),
        Js(n, r, this.x, this.y));
    }
    getRange() {
      const n = this.options || {};
      return n.radius + n.hitRadius;
    }
  }
  Z(Nr, 'id', 'point'),
    Z(Nr, 'defaults', {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: 'circle',
      radius: 3,
      rotation: 0,
    }),
    Z(Nr, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
  class k1 extends Vn {
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
      const r = Ce(i.text) ? i.text.length : 1;
      this._padding = nt(i.padding);
      const s = r * Xe(i.font).lineHeight + this._padding.height;
      this.isHorizontal() ? (this.height = s) : (this.width = s);
    }
    isHorizontal() {
      const e = this.options.position;
      return e === 'top' || e === 'bottom';
    }
    _drawArgs(e) {
      const { top: n, left: i, bottom: r, right: s, options: a } = this,
        o = a.align;
      let c = 0,
        h,
        d,
        u;
      return (
        this.isHorizontal()
          ? ((d = gi(o, i, s)), (u = n + e), (h = s - i))
          : (a.position === 'left'
              ? ((d = i + e), (u = gi(o, r, n)), (c = Pe * -0.5))
              : ((d = s - e), (u = gi(o, n, r)), (c = Pe * 0.5)),
            (h = r - n)),
        { titleX: d, titleY: u, maxWidth: h, rotation: c }
      );
    }
    draw() {
      const e = this.ctx,
        n = this.options;
      if (!n.display) return;
      const i = Xe(n.font),
        s = i.lineHeight / 2 + this._padding.top,
        { titleX: a, titleY: o, maxWidth: c, rotation: h } = this._drawArgs(s);
      yi(e, n.text, 0, 0, i, {
        color: n.color,
        maxWidth: c,
        rotation: h,
        textAlign: gh(n.align),
        textBaseline: 'middle',
        translation: [a, o],
      });
    }
  }
  function yb(t, e) {
    const n = new k1({ ctx: t.ctx, options: e, chart: t });
    en.configure(t, n, e), en.addBox(t, n), (t.titleBlock = n);
  }
  var xb = {
    id: 'title',
    _element: k1,
    start(t, e, n) {
      yb(t, n);
    },
    stop(t) {
      const e = t.titleBlock;
      en.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, n) {
      const i = t.titleBlock;
      en.configure(t, i, n), (i.options = n);
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
  const Ii = {
    average(t) {
      if (!t.length) return !1;
      let e,
        n,
        i = 0,
        r = 0,
        s = 0;
      for (e = 0, n = t.length; e < n; ++e) {
        const a = t[e].element;
        if (a && a.hasValue()) {
          const o = a.tooltipPosition();
          (i += o.x), (r += o.y), ++s;
        }
      }
      return { x: i / s, y: r / s };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let n = e.x,
        i = e.y,
        r = Number.POSITIVE_INFINITY,
        s,
        a,
        o;
      for (s = 0, a = t.length; s < a; ++s) {
        const c = t[s].element;
        if (c && c.hasValue()) {
          const h = c.getCenterPoint(),
            d = Ys(e, h);
          d < r && ((r = d), (o = c));
        }
      }
      if (o) {
        const c = o.tooltipPosition();
        (n = c.x), (i = c.y);
      }
      return { x: n, y: i };
    },
  };
  function Lt(t, e) {
    return e && (Ce(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function Vt(t) {
    return (typeof t == 'string' || t instanceof String) &&
      t.indexOf(`
`) > -1
      ? t.split(`
`)
      : t;
  }
  function wb(t, e) {
    const { element: n, datasetIndex: i, index: r } = e,
      s = t.getDatasetMeta(i).controller,
      { label: a, value: o } = s.getLabelAndValue(r);
    return {
      chart: t,
      label: a,
      parsed: s.getParsed(r),
      raw: t.data.datasets[i].data[r],
      formattedValue: o,
      dataset: s.getDataset(),
      dataIndex: r,
      datasetIndex: i,
      element: n,
    };
  }
  function z1(t, e) {
    const n = t.chart.ctx,
      { body: i, footer: r, title: s } = t,
      { boxWidth: a, boxHeight: o } = e,
      c = Xe(e.bodyFont),
      h = Xe(e.titleFont),
      d = Xe(e.footerFont),
      u = s.length,
      p = r.length,
      m = i.length,
      g = nt(e.padding);
    let b = g.height,
      v = 0,
      y = i.reduce((S, M) => S + M.before.length + M.lines.length + M.after.length, 0);
    if (
      ((y += t.beforeBody.length + t.afterBody.length),
      u && (b += u * h.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom),
      y)
    ) {
      const S = e.displayColors ? Math.max(o, c.lineHeight) : c.lineHeight;
      b += m * S + (y - m) * c.lineHeight + (y - 1) * e.bodySpacing;
    }
    p && (b += e.footerMarginTop + p * d.lineHeight + (p - 1) * e.footerSpacing);
    let w = 0;
    const k = function (S) {
      v = Math.max(v, n.measureText(S).width + w);
    };
    return (
      n.save(),
      (n.font = h.string),
      de(t.title, k),
      (n.font = c.string),
      de(t.beforeBody.concat(t.afterBody), k),
      (w = e.displayColors ? a + 2 + e.boxPadding : 0),
      de(i, (S) => {
        de(S.before, k), de(S.lines, k), de(S.after, k);
      }),
      (w = 0),
      (n.font = d.string),
      de(t.footer, k),
      n.restore(),
      (v += g.width),
      { width: v, height: b }
    );
  }
  function Eb(t, e) {
    const { y: n, height: i } = e;
    return n < i / 2 ? 'top' : n > t.height - i / 2 ? 'bottom' : 'center';
  }
  function Cb(t, e, n, i) {
    const { x: r, width: s } = i,
      a = n.caretSize + n.caretPadding;
    if ((t === 'left' && r + s + a > e.width) || (t === 'right' && r - s - a < 0)) return !0;
  }
  function Mb(t, e, n, i) {
    const { x: r, width: s } = n,
      {
        width: a,
        chartArea: { left: o, right: c },
      } = t;
    let h = 'center';
    return (
      i === 'center'
        ? (h = r <= (o + c) / 2 ? 'left' : 'right')
        : r <= s / 2
        ? (h = 'left')
        : r >= a - s / 2 && (h = 'right'),
      Cb(h, t, e, n) && (h = 'center'),
      h
    );
  }
  function O1(t, e, n) {
    const i = n.yAlign || e.yAlign || Eb(t, n);
    return { xAlign: n.xAlign || e.xAlign || Mb(t, e, n, i), yAlign: i };
  }
  function Sb(t, e) {
    let { x: n, width: i } = t;
    return e === 'right' ? (n -= i) : e === 'center' && (n -= i / 2), n;
  }
  function kb(t, e, n) {
    let { y: i, height: r } = t;
    return e === 'top' ? (i += n) : e === 'bottom' ? (i -= r + n) : (i -= r / 2), i;
  }
  function L1(t, e, n, i) {
    const { caretSize: r, caretPadding: s, cornerRadius: a } = t,
      { xAlign: o, yAlign: c } = n,
      h = r + s,
      { topLeft: d, topRight: u, bottomLeft: p, bottomRight: m } = xi(a);
    let g = Sb(e, o);
    const b = kb(e, c, h);
    return (
      c === 'center'
        ? o === 'left'
          ? (g += h)
          : o === 'right' && (g -= h)
        : o === 'left'
        ? (g -= Math.max(d, p) + r)
        : o === 'right' && (g += Math.max(u, m) + r),
      { x: ut(g, 0, i.width - e.width), y: ut(b, 0, i.height - e.height) }
    );
  }
  function $r(t, e, n) {
    const i = nt(n.padding);
    return e === 'center'
      ? t.x + t.width / 2
      : e === 'right'
      ? t.x + t.width - i.right
      : t.x + i.left;
  }
  function R1(t) {
    return Lt([], Vt(t));
  }
  function zb(t, e, n) {
    return _t(t, { tooltip: e, tooltipItems: n, type: 'tooltip' });
  }
  function I1(t, e) {
    const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
  }
  const D1 = {
    beforeTitle: Tt,
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
    afterTitle: Tt,
    beforeBody: Tt,
    beforeLabel: Tt,
    label(t) {
      if (this && this.options && this.options.mode === 'dataset')
        return t.label + ': ' + t.formattedValue || t.formattedValue;
      let e = t.dataset.label || '';
      e && (e += ': ');
      const n = t.formattedValue;
      return be(n) || (e += n), e;
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
      return { pointStyle: n.pointStyle, rotation: n.rotation };
    },
    afterLabel: Tt,
    afterBody: Tt,
    beforeFooter: Tt,
    footer: Tt,
    afterFooter: Tt,
  };
  function Ke(t, e, n, i) {
    const r = t[e].call(n, i);
    return typeof r > 'u' ? D1[e].call(n, i) : r;
  }
  class pa extends Vn {
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
        s = new $h(this.chart, r);
      return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
      return (
        this.$context || (this.$context = zb(this.chart.getContext(), this, this._tooltipItems))
      );
    }
    getTitle(e, n) {
      const { callbacks: i } = n,
        r = Ke(i, 'beforeTitle', this, e),
        s = Ke(i, 'title', this, e),
        a = Ke(i, 'afterTitle', this, e);
      let o = [];
      return (o = Lt(o, Vt(r))), (o = Lt(o, Vt(s))), (o = Lt(o, Vt(a))), o;
    }
    getBeforeBody(e, n) {
      return R1(Ke(n.callbacks, 'beforeBody', this, e));
    }
    getBody(e, n) {
      const { callbacks: i } = n,
        r = [];
      return (
        de(e, (s) => {
          const a = { before: [], lines: [], after: [] },
            o = I1(i, s);
          Lt(a.before, Vt(Ke(o, 'beforeLabel', this, s))),
            Lt(a.lines, Ke(o, 'label', this, s)),
            Lt(a.after, Vt(Ke(o, 'afterLabel', this, s))),
            r.push(a);
        }),
        r
      );
    }
    getAfterBody(e, n) {
      return R1(Ke(n.callbacks, 'afterBody', this, e));
    }
    getFooter(e, n) {
      const { callbacks: i } = n,
        r = Ke(i, 'beforeFooter', this, e),
        s = Ke(i, 'footer', this, e),
        a = Ke(i, 'afterFooter', this, e);
      let o = [];
      return (o = Lt(o, Vt(r))), (o = Lt(o, Vt(s))), (o = Lt(o, Vt(a))), o;
    }
    _createItems(e) {
      const n = this._active,
        i = this.chart.data,
        r = [],
        s = [],
        a = [];
      let o = [],
        c,
        h;
      for (c = 0, h = n.length; c < h; ++c) o.push(wb(this.chart, n[c]));
      return (
        e.filter && (o = o.filter((d, u, p) => e.filter(d, u, p, i))),
        e.itemSort && (o = o.sort((d, u) => e.itemSort(d, u, i))),
        de(o, (d) => {
          const u = I1(e.callbacks, d);
          r.push(Ke(u, 'labelColor', this, d)),
            s.push(Ke(u, 'labelPointStyle', this, d)),
            a.push(Ke(u, 'labelTextColor', this, d));
        }),
        (this.labelColors = r),
        (this.labelPointStyles = s),
        (this.labelTextColors = a),
        (this.dataPoints = o),
        o
      );
    }
    update(e, n) {
      const i = this.options.setContext(this.getContext()),
        r = this._active;
      let s,
        a = [];
      if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
      else {
        const o = Ii[i.position].call(this, r, this._eventPosition);
        (a = this._createItems(i)),
          (this.title = this.getTitle(a, i)),
          (this.beforeBody = this.getBeforeBody(a, i)),
          (this.body = this.getBody(a, i)),
          (this.afterBody = this.getAfterBody(a, i)),
          (this.footer = this.getFooter(a, i));
        const c = (this._size = z1(this, i)),
          h = Object.assign({}, o, c),
          d = O1(this.chart, i, h),
          u = L1(i, h, d, this.chart);
        (this.xAlign = d.xAlign),
          (this.yAlign = d.yAlign),
          (s = {
            opacity: 1,
            x: u.x,
            y: u.y,
            width: c.width,
            height: c.height,
            caretX: o.x,
            caretY: o.y,
          });
      }
      (this._tooltipItems = a),
        (this.$context = void 0),
        s && this._resolveAnimations().update(this, s),
        e && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
    }
    drawCaret(e, n, i, r) {
      const s = this.getCaretPosition(e, i, r);
      n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(e, n, i) {
      const { xAlign: r, yAlign: s } = this,
        { caretSize: a, cornerRadius: o } = i,
        { topLeft: c, topRight: h, bottomLeft: d, bottomRight: u } = xi(o),
        { x: p, y: m } = e,
        { width: g, height: b } = n;
      let v, y, w, k, S, M;
      return (
        s === 'center'
          ? ((S = m + b / 2),
            r === 'left'
              ? ((v = p), (y = v - a), (k = S + a), (M = S - a))
              : ((v = p + g), (y = v + a), (k = S - a), (M = S + a)),
            (w = v))
          : (r === 'left'
              ? (y = p + Math.max(c, d) + a)
              : r === 'right'
              ? (y = p + g - Math.max(h, u) - a)
              : (y = this.caretX),
            s === 'top'
              ? ((k = m), (S = k - a), (v = y - a), (w = y + a))
              : ((k = m + b), (S = k + a), (v = y + a), (w = y - a)),
            (M = k)),
        { x1: v, x2: y, x3: w, y1: k, y2: S, y3: M }
      );
    }
    drawTitle(e, n, i) {
      const r = this.title,
        s = r.length;
      let a, o, c;
      if (s) {
        const h = ra(i.rtl, this.x, this.width);
        for (
          e.x = $r(this, i.titleAlign, i),
            n.textAlign = h.textAlign(i.titleAlign),
            n.textBaseline = 'middle',
            a = Xe(i.titleFont),
            o = i.titleSpacing,
            n.fillStyle = i.titleColor,
            n.font = a.string,
            c = 0;
          c < s;
          ++c
        )
          n.fillText(r[c], h.x(e.x), e.y + a.lineHeight / 2),
            (e.y += a.lineHeight + o),
            c + 1 === s && (e.y += i.titleMarginBottom - o);
      }
    }
    _drawColorBox(e, n, i, r, s) {
      const a = this.labelColors[i],
        o = this.labelPointStyles[i],
        { boxHeight: c, boxWidth: h } = s,
        d = Xe(s.bodyFont),
        u = $r(this, 'left', s),
        p = r.x(u),
        m = c < d.lineHeight ? (d.lineHeight - c) / 2 : 0,
        g = n.y + m;
      if (s.usePointStyle) {
        const b = {
            radius: Math.min(h, c) / 2,
            pointStyle: o.pointStyle,
            rotation: o.rotation,
            borderWidth: 1,
          },
          v = r.leftForLtr(p, h) + h / 2,
          y = g + c / 2;
        (e.strokeStyle = s.multiKeyBackground),
          (e.fillStyle = s.multiKeyBackground),
          Js(e, b, v, y),
          (e.strokeStyle = a.borderColor),
          (e.fillStyle = a.backgroundColor),
          Js(e, b, v, y);
      } else {
        (e.lineWidth = ae(a.borderWidth)
          ? Math.max(...Object.values(a.borderWidth))
          : a.borderWidth || 1),
          (e.strokeStyle = a.borderColor),
          e.setLineDash(a.borderDash || []),
          (e.lineDashOffset = a.borderDashOffset || 0);
        const b = r.leftForLtr(p, h),
          v = r.leftForLtr(r.xPlus(p, 1), h - 2),
          y = xi(a.borderRadius);
        Object.values(y).some((w) => w !== 0)
          ? (e.beginPath(),
            (e.fillStyle = s.multiKeyBackground),
            _s(e, { x: b, y: g, w: h, h: c, radius: y }),
            e.fill(),
            e.stroke(),
            (e.fillStyle = a.backgroundColor),
            e.beginPath(),
            _s(e, { x: v, y: g + 1, w: h - 2, h: c - 2, radius: y }),
            e.fill())
          : ((e.fillStyle = s.multiKeyBackground),
            e.fillRect(b, g, h, c),
            e.strokeRect(b, g, h, c),
            (e.fillStyle = a.backgroundColor),
            e.fillRect(v, g + 1, h - 2, c - 2));
      }
      e.fillStyle = this.labelTextColors[i];
    }
    drawBody(e, n, i) {
      const { body: r } = this,
        {
          bodySpacing: s,
          bodyAlign: a,
          displayColors: o,
          boxHeight: c,
          boxWidth: h,
          boxPadding: d,
        } = i,
        u = Xe(i.bodyFont);
      let p = u.lineHeight,
        m = 0;
      const g = ra(i.rtl, this.x, this.width),
        b = function (L) {
          n.fillText(L, g.x(e.x + m), e.y + p / 2), (e.y += p + s);
        },
        v = g.textAlign(a);
      let y, w, k, S, M, O, C;
      for (
        n.textAlign = a,
          n.textBaseline = 'middle',
          n.font = u.string,
          e.x = $r(this, v, i),
          n.fillStyle = i.bodyColor,
          de(this.beforeBody, b),
          m = o && v !== 'right' ? (a === 'center' ? h / 2 + d : h + 2 + d) : 0,
          S = 0,
          O = r.length;
        S < O;
        ++S
      ) {
        for (
          y = r[S],
            w = this.labelTextColors[S],
            n.fillStyle = w,
            de(y.before, b),
            k = y.lines,
            o && k.length && (this._drawColorBox(n, e, S, g, i), (p = Math.max(u.lineHeight, c))),
            M = 0,
            C = k.length;
          M < C;
          ++M
        )
          b(k[M]), (p = u.lineHeight);
        de(y.after, b);
      }
      (m = 0), (p = u.lineHeight), de(this.afterBody, b), (e.y -= s);
    }
    drawFooter(e, n, i) {
      const r = this.footer,
        s = r.length;
      let a, o;
      if (s) {
        const c = ra(i.rtl, this.x, this.width);
        for (
          e.x = $r(this, i.footerAlign, i),
            e.y += i.footerMarginTop,
            n.textAlign = c.textAlign(i.footerAlign),
            n.textBaseline = 'middle',
            a = Xe(i.footerFont),
            n.fillStyle = i.footerColor,
            n.font = a.string,
            o = 0;
          o < s;
          ++o
        )
          n.fillText(r[o], c.x(e.x), e.y + a.lineHeight / 2),
            (e.y += a.lineHeight + i.footerSpacing);
      }
    }
    drawBackground(e, n, i, r) {
      const { xAlign: s, yAlign: a } = this,
        { x: o, y: c } = e,
        { width: h, height: d } = i,
        { topLeft: u, topRight: p, bottomLeft: m, bottomRight: g } = xi(r.cornerRadius);
      (n.fillStyle = r.backgroundColor),
        (n.strokeStyle = r.borderColor),
        (n.lineWidth = r.borderWidth),
        n.beginPath(),
        n.moveTo(o + u, c),
        a === 'top' && this.drawCaret(e, n, i, r),
        n.lineTo(o + h - p, c),
        n.quadraticCurveTo(o + h, c, o + h, c + p),
        a === 'center' && s === 'right' && this.drawCaret(e, n, i, r),
        n.lineTo(o + h, c + d - g),
        n.quadraticCurveTo(o + h, c + d, o + h - g, c + d),
        a === 'bottom' && this.drawCaret(e, n, i, r),
        n.lineTo(o + m, c + d),
        n.quadraticCurveTo(o, c + d, o, c + d - m),
        a === 'center' && s === 'left' && this.drawCaret(e, n, i, r),
        n.lineTo(o, c + u),
        n.quadraticCurveTo(o, c, o + u, c),
        n.closePath(),
        n.fill(),
        r.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(e) {
      const n = this.chart,
        i = this.$animations,
        r = i && i.x,
        s = i && i.y;
      if (r || s) {
        const a = Ii[e.position].call(this, this._active, this._eventPosition);
        if (!a) return;
        const o = (this._size = z1(this, e)),
          c = Object.assign({}, a, this._size),
          h = O1(n, e, c),
          d = L1(e, c, h, n);
        (r._to !== d.x || s._to !== d.y) &&
          ((this.xAlign = h.xAlign),
          (this.yAlign = h.yAlign),
          (this.width = o.width),
          (this.height = o.height),
          (this.caretX = a.x),
          (this.caretY = a.y),
          this._resolveAnimations().update(this, d));
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
      const r = { width: this.width, height: this.height },
        s = { x: this.x, y: this.y };
      i = Math.abs(i) < 0.001 ? 0 : i;
      const a = nt(n.padding),
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
        this.drawBackground(s, e, r, n),
        R5(e, n.textDirection),
        (s.y += a.top),
        this.drawTitle(s, e, n),
        this.drawBody(s, e, n),
        this.drawFooter(s, e, n),
        I5(e, n.textDirection),
        e.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e, n) {
      const i = this._active,
        r = e.map(({ datasetIndex: o, index: c }) => {
          const h = this.chart.getDatasetMeta(o);
          if (!h) throw new Error('Cannot find a dataset at index ' + o);
          return { datasetIndex: o, element: h.data[c], index: c };
        }),
        s = !yr(i, r),
        a = this._positionChanged(r, n);
      (s || a) &&
        ((this._active = r),
        (this._eventPosition = n),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(e, n, i = !0) {
      if (n && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const r = this.options,
        s = this._active || [],
        a = this._getActiveElements(e, s, n, i),
        o = this._positionChanged(a, e),
        c = n || !yr(a, s) || o;
      return (
        c &&
          ((this._active = a),
          (r.enabled || r.external) &&
            ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
        c
      );
    }
    _getActiveElements(e, n, i, r) {
      const s = this.options;
      if (e.type === 'mouseout') return [];
      if (!r) return n;
      const a = this.chart.getElementsAtEventForMode(e, s.mode, s, i);
      return s.reverse && a.reverse(), a;
    }
    _positionChanged(e, n) {
      const { caretX: i, caretY: r, options: s } = this,
        a = Ii[s.position].call(this, e, n);
      return a !== !1 && (i !== a.x || r !== a.y);
    }
  }
  Z(pa, 'positioners', Ii);
  var Ob = {
    id: 'tooltip',
    _element: pa,
    positioners: Ii,
    afterInit(t, e, n) {
      n && (t.tooltip = new pa({ chart: t, options: n }));
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
        const n = { tooltip: e };
        if (t.notifyPlugins('beforeTooltipDraw', { ...n, cancelable: !0 }) === !1) return;
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
      boxHeight: (t, e) => e.bodyFont.size,
      boxWidth: (t, e) => e.bodyFont.size,
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
      callbacks: D1,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (t) => t !== 'filter' && t !== 'itemSort' && t !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  };
  const Lb = (t, e, n, i) => (
    typeof e == 'string'
      ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
      : isNaN(e) && (n = null),
    n
  );
  function Rb(t, e, n, i) {
    const r = t.indexOf(e);
    if (r === -1) return Lb(t, e, n, i);
    const s = t.lastIndexOf(e);
    return r !== s ? n : r;
  }
  const Ib = (t, e) => (t === null ? null : ut(Math.round(t), 0, e));
  function A1(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  class ma extends En {
    constructor(e) {
      super(e), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
    }
    init(e) {
      const n = this._addedLabels;
      if (n.length) {
        const i = this.getLabels();
        for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
        this._addedLabels = [];
      }
      super.init(e);
    }
    parse(e, n) {
      if (be(e)) return null;
      const i = this.getLabels();
      return (
        (n = isFinite(n) && i[n] === e ? n : Rb(i, e, fe(n, e), this._addedLabels)),
        Ib(n, i.length - 1)
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
      let s = this.getLabels();
      (s = e === 0 && n === s.length - 1 ? s : s.slice(e, n + 1)),
        (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
        (this._startValue = this.min - (i ? 0.5 : 0));
      for (let a = e; a <= n; a++) r.push({ value: a });
      return r;
    }
    getLabelForValue(e) {
      return A1.call(this, e);
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
  Z(ma, 'id', 'category'), Z(ma, 'defaults', { ticks: { callback: A1 } });
  function Db(t, e) {
    const n = [],
      {
        bounds: r,
        step: s,
        min: a,
        max: o,
        precision: c,
        count: h,
        maxTicks: d,
        maxDigits: u,
        includeBounds: p,
      } = t,
      m = s || 1,
      g = d - 1,
      { min: b, max: v } = e,
      y = !be(a),
      w = !be(o),
      k = !be(h),
      S = (v - b) / (u + 1);
    let M = lh((v - b) / g / m) * m,
      O,
      C,
      L,
      T;
    if (M < 1e-14 && !y && !w) return [{ value: b }, { value: v }];
    (T = Math.ceil(v / M) - Math.floor(b / M)),
      T > g && (M = lh((T * M) / g / m) * m),
      be(c) || ((O = Math.pow(10, c)), (M = Math.ceil(M * O) / O)),
      r === 'ticks'
        ? ((C = Math.floor(b / M) * M), (L = Math.ceil(v / M) * M))
        : ((C = b), (L = v)),
      y && w && s && C2((o - a) / s, M / 1e3)
        ? ((T = Math.round(Math.min((o - a) / M, d))), (M = (o - a) / T), (C = a), (L = o))
        : k
        ? ((C = y ? a : C), (L = w ? o : L), (T = h - 1), (M = (L - C) / T))
        : ((T = (L - C) / M),
          pi(T, Math.round(T), M / 1e3) ? (T = Math.round(T)) : (T = Math.ceil(T)));
    const I = Math.max(hh(M), hh(C));
    (O = Math.pow(10, be(c) ? I : c)), (C = Math.round(C * O) / O), (L = Math.round(L * O) / O);
    let P = 0;
    for (
      y &&
      (p && C !== a
        ? (n.push({ value: a }),
          C < a && P++,
          pi(Math.round((C + P * M) * O) / O, a, T1(a, S, t)) && P++)
        : C < a && P++);
      P < T;
      ++P
    ) {
      const B = Math.round((C + P * M) * O) / O;
      if (w && B > o) break;
      n.push({ value: B });
    }
    return (
      w && p && L !== o
        ? n.length && pi(n[n.length - 1].value, o, T1(o, S, t))
          ? (n[n.length - 1].value = o)
          : n.push({ value: o })
        : (!w || L === o) && n.push({ value: L }),
      n
    );
  }
  function T1(t, e, { horizontal: n, minRotation: i }) {
    const r = Jt(i),
      s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
      a = 0.75 * e * ('' + t).length;
    return Math.min(e / s, a);
  }
  class jr extends En {
    constructor(e) {
      super(e),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(e, n) {
      return be(e) || ((typeof e == 'number' || e instanceof Number) && !isFinite(+e)) ? null : +e;
    }
    handleTickRangeOptions() {
      const { beginAtZero: e } = this.options,
        { minDefined: n, maxDefined: i } = this.getUserBounds();
      let { min: r, max: s } = this;
      const a = (c) => (r = n ? r : c),
        o = (c) => (s = i ? s : c);
      if (e) {
        const c = Pn(r),
          h = Pn(s);
        c < 0 && h < 0 ? o(0) : c > 0 && h > 0 && a(0);
      }
      if (r === s) {
        let c = s === 0 ? 1 : Math.abs(s * 0.05);
        o(s + c), e || a(r - c);
      }
      (this.min = r), (this.max = s);
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
        s = this._range || this,
        a = Db(r, s);
      return (
        e.bounds === 'ticks' && ch(a, this, 'value'),
        e.reverse
          ? (a.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        a
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
      return Ks(e, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class ga extends jr {
    determineDataLimits() {
      const { min: e, max: n } = this.getMinMax(!0);
      (this.min = Fe(e) ? e : 0), (this.max = Fe(n) ? n : 1), this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const e = this.isHorizontal(),
        n = e ? this.width : this.height,
        i = Jt(this.options.ticks.minRotation),
        r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
        s = this._resolveTickFontOptions(0);
      return Math.ceil(n / Math.min(40, s.lineHeight / r));
    }
    getPixelForValue(e) {
      return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
    }
    getValueForPixel(e) {
      return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
    }
  }
  Z(ga, 'id', 'linear'), Z(ga, 'defaults', { ticks: { callback: Sr.formatters.numeric } });
  const Di = (t) => Math.floor(Qt(t)),
    Cn = (t, e) => Math.pow(10, Di(t) + e);
  function P1(t) {
    return t / Math.pow(10, Di(t)) === 1;
  }
  function H1(t, e, n) {
    const i = Math.pow(10, n),
      r = Math.floor(t / i);
    return Math.ceil(e / i) - r;
  }
  function Ab(t, e) {
    const n = e - t;
    let i = Di(n);
    for (; H1(t, e, i) > 10; ) i++;
    for (; H1(t, e, i) < 10; ) i--;
    return Math.min(i, Di(t));
  }
  function Tb(t, { min: e, max: n }) {
    e = tt(t.min, e);
    const i = [],
      r = Di(e);
    let s = Ab(e, n),
      a = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const o = Math.pow(10, s),
      c = r > s ? Math.pow(10, r) : 0,
      h = Math.round((e - c) * a) / a,
      d = Math.floor((e - c) / o / 10) * o * 10;
    let u = Math.floor((h - d) / Math.pow(10, s)),
      p = tt(t.min, Math.round((c + d + u * Math.pow(10, s)) * a) / a);
    for (; p < n; )
      i.push({ value: p, major: P1(p), significand: u }),
        u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
        u >= 20 && (s++, (u = 2), (a = s >= 0 ? 1 : a)),
        (p = Math.round((c + d + u * Math.pow(10, s)) * a) / a);
    const m = tt(t.max, p);
    return i.push({ value: m, major: P1(m), significand: u }), i;
  }
  class F1 extends En {
    constructor(e) {
      super(e),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0);
    }
    parse(e, n) {
      const i = jr.prototype.parse.apply(this, [e, n]);
      if (i === 0) {
        this._zero = !0;
        return;
      }
      return Fe(i) && i > 0 ? i : null;
    }
    determineDataLimits() {
      const { min: e, max: n } = this.getMinMax(!0);
      (this.min = Fe(e) ? Math.max(0, e) : null),
        (this.max = Fe(n) ? Math.max(0, n) : null),
        this.options.beginAtZero && (this._zero = !0),
        this._zero &&
          this.min !== this._suggestedMin &&
          !Fe(this._userMin) &&
          (this.min = e === Cn(this.min, 0) ? Cn(this.min, -1) : Cn(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: e, maxDefined: n } = this.getUserBounds();
      let i = this.min,
        r = this.max;
      const s = (o) => (i = e ? i : o),
        a = (o) => (r = n ? r : o);
      i === r && (i <= 0 ? (s(1), a(10)) : (s(Cn(i, -1)), a(Cn(r, 1)))),
        i <= 0 && s(Cn(r, -1)),
        r <= 0 && a(Cn(i, 1)),
        (this.min = i),
        (this.max = r);
    }
    buildTicks() {
      const e = this.options,
        n = { min: this._userMin, max: this._userMax },
        i = Tb(n, this);
      return (
        e.bounds === 'ticks' && ch(i, this, 'value'),
        e.reverse
          ? (i.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        i
      );
    }
    getLabelForValue(e) {
      return e === void 0 ? '0' : Ks(e, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const e = this.min;
      super.configure(), (this._startValue = Qt(e)), (this._valueRange = Qt(this.max) - Qt(e));
    }
    getPixelForValue(e) {
      return (
        (e === void 0 || e === 0) && (e = this.min),
        e === null || isNaN(e)
          ? NaN
          : this.getPixelForDecimal(
              e === this.min ? 0 : (Qt(e) - this._startValue) / this._valueRange
            )
      );
    }
    getValueForPixel(e) {
      const n = this.getDecimalForPixel(e);
      return Math.pow(10, this._startValue + n * this._valueRange);
    }
  }
  Z(F1, 'id', 'logarithmic'),
    Z(F1, 'defaults', { ticks: { callback: Sr.formatters.logarithmic, major: { enabled: !0 } } });
  function va(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const n = nt(e.backdropPadding);
      return fe(e.font && e.font.size, Oe.font.size) + n.height;
    }
    return 0;
  }
  function Pb(t, e, n) {
    return (n = Ce(n) ? n : [n]), { w: X2(t, e.string, n), h: n.length * e.lineHeight };
  }
  function V1(t, e, n, i, r) {
    return t === i || t === r
      ? { start: e - n / 2, end: e + n / 2 }
      : t < i || t > r
      ? { start: e - n, end: e }
      : { start: e, end: e + n };
  }
  function Hb(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom,
      },
      n = Object.assign({}, e),
      i = [],
      r = [],
      s = t._pointLabels.length,
      a = t.options.pointLabels,
      o = a.centerPointLabels ? Pe / s : 0;
    for (let c = 0; c < s; c++) {
      const h = a.setContext(t.getPointLabelContext(c));
      r[c] = h.padding;
      const d = t.getPointPosition(c, t.drawingArea + r[c], o),
        u = Xe(h.font),
        p = Pb(t.ctx, u, t._pointLabels[c]);
      i[c] = p;
      const m = Et(t.getIndexAngle(c) + o),
        g = Math.round(Xs(m)),
        b = V1(g, d.x, p.w, 0, 180),
        v = V1(g, d.y, p.h, 90, 270);
      Fb(n, e, m, b, v);
    }
    t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
      (t._pointLabelItems = Nb(t, i, r));
  }
  function Fb(t, e, n, i, r) {
    const s = Math.abs(Math.sin(n)),
      a = Math.abs(Math.cos(n));
    let o = 0,
      c = 0;
    i.start < e.l
      ? ((o = (e.l - i.start) / s), (t.l = Math.min(t.l, e.l - o)))
      : i.end > e.r && ((o = (i.end - e.r) / s), (t.r = Math.max(t.r, e.r + o))),
      r.start < e.t
        ? ((c = (e.t - r.start) / a), (t.t = Math.min(t.t, e.t - c)))
        : r.end > e.b && ((c = (r.end - e.b) / a), (t.b = Math.max(t.b, e.b + c)));
  }
  function Vb(t, e, n) {
    const i = t.drawingArea,
      { extra: r, additionalAngle: s, padding: a, size: o } = n,
      c = t.getPointPosition(e, i + r + a, s),
      h = Math.round(Xs(Et(c.angle + Ge))),
      d = Wb(c.y, o.h, h),
      u = $b(h),
      p = jb(c.x, o.w, u);
    return {
      visible: !0,
      x: c.x,
      y: d,
      textAlign: u,
      left: p,
      top: d,
      right: p + o.w,
      bottom: d + o.h,
    };
  }
  function Bb(t, e) {
    if (!e) return !0;
    const { left: n, top: i, right: r, bottom: s } = t;
    return !(
      Pt({ x: n, y: i }, e) ||
      Pt({ x: n, y: s }, e) ||
      Pt({ x: r, y: i }, e) ||
      Pt({ x: r, y: s }, e)
    );
  }
  function Nb(t, e, n) {
    const i = [],
      r = t._pointLabels.length,
      s = t.options,
      { centerPointLabels: a, display: o } = s.pointLabels,
      c = { extra: va(s) / 2, additionalAngle: a ? Pe / r : 0 };
    let h;
    for (let d = 0; d < r; d++) {
      (c.padding = n[d]), (c.size = e[d]);
      const u = Vb(t, d, c);
      i.push(u), o === 'auto' && ((u.visible = Bb(u, h)), u.visible && (h = u));
    }
    return i;
  }
  function $b(t) {
    return t === 0 || t === 180 ? 'center' : t < 180 ? 'left' : 'right';
  }
  function jb(t, e, n) {
    return n === 'right' ? (t -= e) : n === 'center' && (t -= e / 2), t;
  }
  function Wb(t, e, n) {
    return n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t;
  }
  function Xb(t, e, n) {
    const { left: i, top: r, right: s, bottom: a } = n,
      { backdropColor: o } = e;
    if (!be(o)) {
      const c = xi(e.borderRadius),
        h = nt(e.backdropPadding);
      t.fillStyle = o;
      const d = i - h.left,
        u = r - h.top,
        p = s - i + h.width,
        m = a - r + h.height;
      Object.values(c).some((g) => g !== 0)
        ? (t.beginPath(), _s(t, { x: d, y: u, w: p, h: m, radius: c }), t.fill())
        : t.fillRect(d, u, p, m);
    }
  }
  function Yb(t, e) {
    const {
      ctx: n,
      options: { pointLabels: i },
    } = t;
    for (let r = e - 1; r >= 0; r--) {
      const s = t._pointLabelItems[r];
      if (!s.visible) continue;
      const a = i.setContext(t.getPointLabelContext(r));
      Xb(n, a, s);
      const o = Xe(a.font),
        { x: c, y: h, textAlign: d } = s;
      yi(n, t._pointLabels[r], c, h + o.lineHeight / 2, o, {
        color: a.color,
        textAlign: d,
        textBaseline: 'middle',
      });
    }
  }
  function B1(t, e, n, i) {
    const { ctx: r } = t;
    if (n) r.arc(t.xCenter, t.yCenter, e, 0, dt);
    else {
      let s = t.getPointPosition(0, e);
      r.moveTo(s.x, s.y);
      for (let a = 1; a < i; a++) (s = t.getPointPosition(a, e)), r.lineTo(s.x, s.y);
    }
  }
  function Ub(t, e, n, i, r) {
    const s = t.ctx,
      a = e.circular,
      { color: o, lineWidth: c } = e;
    (!a && !i) ||
      !o ||
      !c ||
      n < 0 ||
      (s.save(),
      (s.strokeStyle = o),
      (s.lineWidth = c),
      s.setLineDash(r.dash),
      (s.lineDashOffset = r.dashOffset),
      s.beginPath(),
      B1(t, n, a, i),
      s.closePath(),
      s.stroke(),
      s.restore());
  }
  function qb(t, e, n) {
    return _t(t, { label: n, index: e, type: 'pointLabel' });
  }
  class Wr extends jr {
    constructor(e) {
      super(e),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const e = (this._padding = nt(va(this.options) / 2)),
        n = (this.width = this.maxWidth - e.width),
        i = (this.height = this.maxHeight - e.height);
      (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
        (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
        (this.drawingArea = Math.floor(Math.min(n, i) / 2));
    }
    determineDataLimits() {
      const { min: e, max: n } = this.getMinMax(!1);
      (this.min = Fe(e) && !isNaN(e) ? e : 0),
        (this.max = Fe(n) && !isNaN(n) ? n : 0),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / va(this.options));
    }
    generateTickLabels(e) {
      jr.prototype.generateTickLabels.call(this, e),
        (this._pointLabels = this.getLabels()
          .map((n, i) => {
            const r = ke(this.options.pointLabels.callback, [n, i], this);
            return r || r === 0 ? r : '';
          })
          .filter((n, i) => this.chart.getDataVisibility(i)));
    }
    fit() {
      const e = this.options;
      e.display && e.pointLabels.display ? Hb(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(e, n, i, r) {
      (this.xCenter += Math.floor((e - n) / 2)),
        (this.yCenter += Math.floor((i - r) / 2)),
        (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, n, i, r)));
    }
    getIndexAngle(e) {
      const n = dt / (this._pointLabels.length || 1),
        i = this.options.startAngle || 0;
      return Et(e * n + Jt(i));
    }
    getDistanceFromCenterForValue(e) {
      if (be(e)) return NaN;
      const n = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
    }
    getValueForDistanceFromCenter(e) {
      if (be(e)) return NaN;
      const n = e / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - n : this.min + n;
    }
    getPointLabelContext(e) {
      const n = this._pointLabels || [];
      if (e >= 0 && e < n.length) {
        const i = n[e];
        return qb(this.getContext(), e, i);
      }
    }
    getPointPosition(e, n, i = 0) {
      const r = this.getIndexAngle(e) - Ge + i;
      return { x: Math.cos(r) * n + this.xCenter, y: Math.sin(r) * n + this.yCenter, angle: r };
    }
    getPointPositionForValue(e, n) {
      return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
    }
    getBasePosition(e) {
      return this.getPointPositionForValue(e || 0, this.getBaseValue());
    }
    getPointLabelPosition(e) {
      const { left: n, top: i, right: r, bottom: s } = this._pointLabelItems[e];
      return { left: n, top: i, right: r, bottom: s };
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
          B1(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
          i.closePath(),
          (i.fillStyle = e),
          i.fill(),
          i.restore();
      }
    }
    drawGrid() {
      const e = this.ctx,
        n = this.options,
        { angleLines: i, grid: r, border: s } = n,
        a = this._pointLabels.length;
      let o, c, h;
      if (
        (n.pointLabels.display && Yb(this, a),
        r.display &&
          this.ticks.forEach((d, u) => {
            if (u !== 0) {
              c = this.getDistanceFromCenterForValue(d.value);
              const p = this.getContext(u),
                m = r.setContext(p),
                g = s.setContext(p);
              Ub(this, m, c, a, g);
            }
          }),
        i.display)
      ) {
        for (e.save(), o = a - 1; o >= 0; o--) {
          const d = i.setContext(this.getPointLabelContext(o)),
            { color: u, lineWidth: p } = d;
          !p ||
            !u ||
            ((e.lineWidth = p),
            (e.strokeStyle = u),
            e.setLineDash(d.borderDash),
            (e.lineDashOffset = d.borderDashOffset),
            (c = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max)),
            (h = this.getPointPosition(o, c)),
            e.beginPath(),
            e.moveTo(this.xCenter, this.yCenter),
            e.lineTo(h.x, h.y),
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
      let s, a;
      e.save(),
        e.translate(this.xCenter, this.yCenter),
        e.rotate(r),
        (e.textAlign = 'center'),
        (e.textBaseline = 'middle'),
        this.ticks.forEach((o, c) => {
          if (c === 0 && !n.reverse) return;
          const h = i.setContext(this.getContext(c)),
            d = Xe(h.font);
          if (
            ((s = this.getDistanceFromCenterForValue(this.ticks[c].value)), h.showLabelBackdrop)
          ) {
            (e.font = d.string),
              (a = e.measureText(o.label).width),
              (e.fillStyle = h.backdropColor);
            const u = nt(h.backdropPadding);
            e.fillRect(-a / 2 - u.left, -s - d.size / 2 - u.top, a + u.width, d.size + u.height);
          }
          yi(e, o.label, 0, -s, d, { color: h.color });
        }),
        e.restore();
    }
    drawTitle() {}
  }
  Z(Wr, 'id', 'radialLinear'),
    Z(Wr, 'defaults', {
      display: !0,
      animate: !0,
      position: 'chartArea',
      angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: Sr.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(e) {
          return e;
        },
        padding: 5,
        centerPointLabels: !1,
      },
    }),
    Z(Wr, 'defaultRoutes', {
      'angleLines.color': 'borderColor',
      'pointLabels.color': 'color',
      'ticks.color': 'color',
    }),
    Z(Wr, 'descriptors', { angleLines: { _fallback: 'grid' } });
  const Xr = {
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
    Ze = Object.keys(Xr);
  function Gb(t, e) {
    return t - e;
  }
  function N1(t, e) {
    if (be(e)) return null;
    const n = t._adapter,
      { parser: i, round: r, isoWeekday: s } = t._parseOpts;
    let a = e;
    return (
      typeof i == 'function' && (a = i(a)),
      Fe(a) || (a = typeof i == 'string' ? n.parse(a, i) : n.parse(a)),
      a === null
        ? null
        : (r &&
            (a =
              r === 'week' && (mi(s) || s === !0) ? n.startOf(a, 'isoWeek', s) : n.startOf(a, r)),
          +a)
    );
  }
  function $1(t, e, n, i) {
    const r = Ze.length;
    for (let s = Ze.indexOf(t); s < r - 1; ++s) {
      const a = Xr[Ze[s]],
        o = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
      if (a.common && Math.ceil((n - e) / (o * a.size)) <= i) return Ze[s];
    }
    return Ze[r - 1];
  }
  function Kb(t, e, n, i, r) {
    for (let s = Ze.length - 1; s >= Ze.indexOf(n); s--) {
      const a = Ze[s];
      if (Xr[a].common && t._adapter.diff(r, i, a) >= e - 1) return a;
    }
    return Ze[n ? Ze.indexOf(n) : 0];
  }
  function Zb(t) {
    for (let e = Ze.indexOf(t) + 1, n = Ze.length; e < n; ++e) if (Xr[Ze[e]].common) return Ze[e];
  }
  function j1(t, e, n) {
    if (!n) t[e] = !0;
    else if (n.length) {
      const { lo: i, hi: r } = Us(n, e),
        s = n[i] >= e ? n[i] : n[r];
      t[s] = !0;
    }
  }
  function Qb(t, e, n, i) {
    const r = t._adapter,
      s = +r.startOf(e[0].value, i),
      a = e[e.length - 1].value;
    let o, c;
    for (o = s; o <= a; o = +r.add(o, 1, i)) (c = n[o]), c >= 0 && (e[c].major = !0);
    return e;
  }
  function W1(t, e, n) {
    const i = [],
      r = {},
      s = e.length;
    let a, o;
    for (a = 0; a < s; ++a) (o = e[a]), (r[o] = a), i.push({ value: o, major: !1 });
    return s === 0 || !n ? i : Qb(t, i, r, n);
  }
  class Yr extends En {
    constructor(e) {
      super(e),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = 'day'),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(e, n = {}) {
      const i = e.time || (e.time = {}),
        r = (this._adapter = new ev._date(e.adapters.date));
      r.init(n),
        fi(i.displayFormats, r.formats()),
        (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
        super.init(e),
        (this._normalized = n.normalized);
    }
    parse(e, n) {
      return e === void 0 ? null : N1(this, e);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
      const e = this.options,
        n = this._adapter,
        i = e.time.unit || 'day';
      let { min: r, max: s, minDefined: a, maxDefined: o } = this.getUserBounds();
      function c(h) {
        !a && !isNaN(h.min) && (r = Math.min(r, h.min)),
          !o && !isNaN(h.max) && (s = Math.max(s, h.max));
      }
      (!a || !o) &&
        (c(this._getLabelBounds()),
        (e.bounds !== 'ticks' || e.ticks.source !== 'labels') && c(this.getMinMax(!1))),
        (r = Fe(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
        (s = Fe(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
        (this.min = Math.min(r, s - 1)),
        (this.max = Math.max(r + 1, s));
    }
    _getLabelBounds() {
      const e = this.getLabelTimestamps();
      let n = Number.POSITIVE_INFINITY,
        i = Number.NEGATIVE_INFINITY;
      return e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i };
    }
    buildTicks() {
      const e = this.options,
        n = e.time,
        i = e.ticks,
        r = i.source === 'labels' ? this.getLabelTimestamps() : this._generate();
      e.bounds === 'ticks' &&
        r.length &&
        ((this.min = this._userMin || r[0]), (this.max = this._userMax || r[r.length - 1]));
      const s = this.min,
        a = this.max,
        o = L2(r, s, a);
      return (
        (this._unit =
          n.unit ||
          (i.autoSkip
            ? $1(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
            : Kb(this, o.length, n.minUnit, this.min, this.max))),
        (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : Zb(this._unit)),
        this.initOffsets(r),
        e.reverse && o.reverse(),
        W1(this, o, this._majorUnit)
      );
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
    }
    initOffsets(e = []) {
      let n = 0,
        i = 0,
        r,
        s;
      this.options.offset &&
        e.length &&
        ((r = this.getDecimalForValue(e[0])),
        e.length === 1 ? (n = 1 - r) : (n = (this.getDecimalForValue(e[1]) - r) / 2),
        (s = this.getDecimalForValue(e[e.length - 1])),
        e.length === 1 ? (i = s) : (i = (s - this.getDecimalForValue(e[e.length - 2])) / 2));
      const a = e.length < 3 ? 0.5 : 0.25;
      (n = ut(n, 0, a)),
        (i = ut(i, 0, a)),
        (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
    }
    _generate() {
      const e = this._adapter,
        n = this.min,
        i = this.max,
        r = this.options,
        s = r.time,
        a = s.unit || $1(s.minUnit, n, i, this._getLabelCapacity(n)),
        o = fe(r.ticks.stepSize, 1),
        c = a === 'week' ? s.isoWeekday : !1,
        h = mi(c) || c === !0,
        d = {};
      let u = n,
        p,
        m;
      if (
        (h && (u = +e.startOf(u, 'isoWeek', c)),
        (u = +e.startOf(u, h ? 'day' : a)),
        e.diff(i, n, a) > 1e5 * o)
      )
        throw new Error(n + ' and ' + i + ' are too far apart with stepSize of ' + o + ' ' + a);
      const g = r.ticks.source === 'data' && this.getDataTimestamps();
      for (p = u, m = 0; p < i; p = +e.add(p, o, a), m++) j1(d, p, g);
      return (
        (p === i || r.bounds === 'ticks' || m === 1) && j1(d, p, g),
        Object.keys(d)
          .sort((b, v) => b - v)
          .map((b) => +b)
      );
    }
    getLabelForValue(e) {
      const n = this._adapter,
        i = this.options.time;
      return i.tooltipFormat
        ? n.format(e, i.tooltipFormat)
        : n.format(e, i.displayFormats.datetime);
    }
    format(e, n) {
      const r = this.options.time.displayFormats,
        s = this._unit,
        a = n || r[s];
      return this._adapter.format(e, a);
    }
    _tickFormatFunction(e, n, i, r) {
      const s = this.options,
        a = s.ticks.callback;
      if (a) return ke(a, [e, n, i], this);
      const o = s.time.displayFormats,
        c = this._unit,
        h = this._majorUnit,
        d = c && o[c],
        u = h && o[h],
        p = i[n],
        m = h && u && p && p.major;
      return this._adapter.format(e, r || (m ? u : d));
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
        r = Jt(this.isHorizontal() ? n.maxRotation : n.minRotation),
        s = Math.cos(r),
        a = Math.sin(r),
        o = this._resolveTickFontOptions(0).size;
      return { w: i * s + o * a, h: i * a + o * s };
    }
    _getLabelCapacity(e) {
      const n = this.options.time,
        i = n.displayFormats,
        r = i[n.unit] || i.millisecond,
        s = this._tickFormatFunction(e, 0, W1(this, [e], this._majorUnit), r),
        a = this._getLabelSize(s),
        o = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
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
      for (n = 0, i = r.length; n < i; ++n) e.push(N1(this, r[n]));
      return (this._cache.labels = this._normalized ? e : this.normalize(e));
    }
    normalize(e) {
      return I2(e.sort(Gb));
    }
  }
  Z(Yr, 'id', 'time'),
    Z(Yr, 'defaults', {
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
  function Ur(t, e, n) {
    let i = 0,
      r = t.length - 1,
      s,
      a,
      o,
      c;
    n
      ? (e >= t[i].pos && e <= t[r].pos && ({ lo: i, hi: r } = mn(t, 'pos', e)),
        ({ pos: s, time: o } = t[i]),
        ({ pos: a, time: c } = t[r]))
      : (e >= t[i].time && e <= t[r].time && ({ lo: i, hi: r } = mn(t, 'time', e)),
        ({ time: s, pos: o } = t[i]),
        ({ time: a, pos: c } = t[r]));
    const h = a - s;
    return h ? o + ((c - o) * (e - s)) / h : o;
  }
  class X1 extends Yr {
    constructor(e) {
      super(e), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
      const e = this._getTimestampsForTable(),
        n = (this._table = this.buildLookupTable(e));
      (this._minPos = Ur(n, this.min)),
        (this._tableRange = Ur(n, this.max) - this._minPos),
        super.initOffsets(e);
    }
    buildLookupTable(e) {
      const { min: n, max: i } = this,
        r = [],
        s = [];
      let a, o, c, h, d;
      for (a = 0, o = e.length; a < o; ++a) (h = e[a]), h >= n && h <= i && r.push(h);
      if (r.length < 2)
        return [
          { time: n, pos: 0 },
          { time: i, pos: 1 },
        ];
      for (a = 0, o = r.length; a < o; ++a)
        (d = r[a + 1]),
          (c = r[a - 1]),
          (h = r[a]),
          Math.round((d + c) / 2) !== h && s.push({ time: h, pos: a / (o - 1) });
      return s;
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
      return (Ur(this._table, e) - this._minPos) / this._tableRange;
    }
    getValueForPixel(e) {
      const n = this._offsets,
        i = this.getDecimalForPixel(e) / n.factor - n.end;
      return Ur(this._table, i * this._tableRange + this._minPos, !0);
    }
  }
  Z(X1, 'id', 'timeseries'), Z(X1, 'defaults', Yr.defaults);
  const Y1 = 'label';
  function U1(t, e) {
    typeof t == 'function' ? t(e) : t && (t.current = e);
  }
  function Jb(t, e) {
    const n = t.options;
    n && e && Object.assign(n, e);
  }
  function q1(t, e) {
    t.labels = e;
  }
  function G1(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Y1;
    const i = [];
    t.datasets = e.map((r) => {
      const s = t.datasets.find((a) => a[n] === r[n]);
      return !s || !r.data || i.includes(s) ? { ...r } : (i.push(s), Object.assign(s, r), s);
    });
  }
  function _b(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Y1;
    const n = { labels: [], datasets: [] };
    return q1(n, t.labels), G1(n, t.datasets, e), n;
  }
  function e3(t, e) {
    const {
        height: n = 150,
        width: i = 300,
        redraw: r = !1,
        datasetIdKey: s,
        type: a,
        data: o,
        options: c,
        plugins: h = [],
        fallbackContent: d,
        updateMode: u,
        ...p
      } = t,
      m = l.useRef(null),
      g = l.useRef(),
      b = () => {
        m.current &&
          ((g.current = new Ft(m.current, {
            type: a,
            data: _b(o, s),
            options: c && { ...c },
            plugins: h,
          })),
          U1(e, g.current));
      },
      v = () => {
        U1(e, null), g.current && (g.current.destroy(), (g.current = null));
      };
    return (
      l.useEffect(() => {
        !r && g.current && c && Jb(g.current, c);
      }, [r, c]),
      l.useEffect(() => {
        !r && g.current && q1(g.current.config.data, o.labels);
      }, [r, o.labels]),
      l.useEffect(() => {
        !r && g.current && o.datasets && G1(g.current.config.data, o.datasets, s);
      }, [r, o.datasets]),
      l.useEffect(() => {
        g.current && (r ? (v(), setTimeout(b)) : g.current.update(u));
      }, [r, c, o.labels, o.datasets, u]),
      l.useEffect(() => {
        g.current && (v(), setTimeout(b));
      }, [a]),
      l.useEffect(() => (b(), () => v()), []),
      l.createElement('canvas', Object.assign({ ref: m, role: 'img', height: n, width: i }, p), d)
    );
  }
  const t3 = l.forwardRef(e3);
  function n3(t, e) {
    return (
      Ft.register(e),
      l.forwardRef((n, i) => l.createElement(t3, Object.assign({}, n, { ref: i, type: t })))
    );
  }
  const i3 = n3('line', Dr),
    r3 = (t) => 16 * t,
    ba = ((t) => (e) => {
      const n = e.split(`${t}`)[0],
        i = Number(n);
      return t === 'rem' ? r3(i) : i;
    })('rem');
  function s3(t) {
    if (t.sheet) return t.sheet;
    for (var e = 0; e < document.styleSheets.length; e++)
      if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e];
  }
  function a3(t) {
    var e = document.createElement('style');
    return (
      e.setAttribute('data-emotion', t.key),
      t.nonce !== void 0 && e.setAttribute('nonce', t.nonce),
      e.appendChild(document.createTextNode('')),
      e.setAttribute('data-s', ''),
      e
    );
  }
  var o3 = (function () {
      function t(n) {
        var i = this;
        (this._insertTag = function (r) {
          var s;
          i.tags.length === 0
            ? i.insertionPoint
              ? (s = i.insertionPoint.nextSibling)
              : i.prepend
              ? (s = i.container.firstChild)
              : (s = i.before)
            : (s = i.tags[i.tags.length - 1].nextSibling),
            i.container.insertBefore(r, s),
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
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(a3(this));
          var r = this.tags[this.tags.length - 1];
          if (process.env.NODE_ENV !== 'production') {
            var s = i.charCodeAt(0) === 64 && i.charCodeAt(1) === 105;
            s &&
              this._alreadyInsertedOrderInsensitiveRule &&
              console.error(
                `You're attempting to insert the following rule:
` +
                  i +
                  '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
              ),
              (this._alreadyInsertedOrderInsensitiveRule =
                this._alreadyInsertedOrderInsensitiveRule || !s);
          }
          if (this.isSpeedy) {
            var a = s3(r);
            try {
              a.insertRule(i, a.cssRules.length);
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
            process.env.NODE_ENV !== 'production' &&
              (this._alreadyInsertedOrderInsensitiveRule = !1);
        }),
        t
      );
    })(),
    Ne = '-ms-',
    qr = '-moz-',
    oe = '-webkit-',
    ya = 'comm',
    xa = 'rule',
    wa = 'decl',
    l3 = '@import',
    K1 = '@keyframes',
    c3 = '@layer',
    h3 = Math.abs,
    Gr = String.fromCharCode,
    d3 = Object.assign;
  function u3(t, e) {
    return Ve(t, 0) ^ 45
      ? (((((((e << 2) ^ Ve(t, 0)) << 2) ^ Ve(t, 1)) << 2) ^ Ve(t, 2)) << 2) ^ Ve(t, 3)
      : 0;
  }
  function Z1(t) {
    return t.trim();
  }
  function f3(t, e) {
    return (t = e.exec(t)) ? t[0] : t;
  }
  function le(t, e, n) {
    return t.replace(e, n);
  }
  function Ea(t, e) {
    return t.indexOf(e);
  }
  function Ve(t, e) {
    return t.charCodeAt(e) | 0;
  }
  function Ai(t, e, n) {
    return t.slice(e, n);
  }
  function Rt(t) {
    return t.length;
  }
  function Ca(t) {
    return t.length;
  }
  function Kr(t, e) {
    return e.push(t), t;
  }
  function p3(t, e) {
    return t.map(e).join('');
  }
  var Zr = 1,
    Bn = 1,
    Q1 = 0,
    Qe = 0,
    Re = 0,
    Nn = '';
  function Qr(t, e, n, i, r, s, a) {
    return {
      value: t,
      root: e,
      parent: n,
      type: i,
      props: r,
      children: s,
      line: Zr,
      column: Bn,
      length: a,
      return: '',
    };
  }
  function Ti(t, e) {
    return d3(Qr('', null, null, '', null, null, 0), t, { length: -t.length }, e);
  }
  function m3() {
    return Re;
  }
  function g3() {
    return (Re = Qe > 0 ? Ve(Nn, --Qe) : 0), Bn--, Re === 10 && ((Bn = 1), Zr--), Re;
  }
  function it() {
    return (Re = Qe < Q1 ? Ve(Nn, Qe++) : 0), Bn++, Re === 10 && ((Bn = 1), Zr++), Re;
  }
  function It() {
    return Ve(Nn, Qe);
  }
  function Jr() {
    return Qe;
  }
  function Pi(t, e) {
    return Ai(Nn, t, e);
  }
  function Hi(t) {
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
  function J1(t) {
    return (Zr = Bn = 1), (Q1 = Rt((Nn = t))), (Qe = 0), [];
  }
  function _1(t) {
    return (Nn = ''), t;
  }
  function _r(t) {
    return Z1(Pi(Qe - 1, Ma(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
  }
  function v3(t) {
    for (; (Re = It()) && Re < 33; ) it();
    return Hi(t) > 2 || Hi(Re) > 3 ? '' : ' ';
  }
  function b3(t, e) {
    for (; --e && it() && !(Re < 48 || Re > 102 || (Re > 57 && Re < 65) || (Re > 70 && Re < 97)); );
    return Pi(t, Jr() + (e < 6 && It() == 32 && it() == 32));
  }
  function Ma(t) {
    for (; it(); )
      switch (Re) {
        case t:
          return Qe;
        case 34:
        case 39:
          t !== 34 && t !== 39 && Ma(Re);
          break;
        case 40:
          t === 41 && Ma(t);
          break;
        case 92:
          it();
          break;
      }
    return Qe;
  }
  function y3(t, e) {
    for (; it() && t + Re !== 47 + 10; ) if (t + Re === 42 + 42 && It() === 47) break;
    return '/*' + Pi(e, Qe - 1) + '*' + Gr(t === 47 ? t : it());
  }
  function x3(t) {
    for (; !Hi(It()); ) it();
    return Pi(t, Qe);
  }
  function w3(t) {
    return _1(es('', null, null, null, [''], (t = J1(t)), 0, [0], t));
  }
  function es(t, e, n, i, r, s, a, o, c) {
    for (
      var h = 0,
        d = 0,
        u = a,
        p = 0,
        m = 0,
        g = 0,
        b = 1,
        v = 1,
        y = 1,
        w = 0,
        k = '',
        S = r,
        M = s,
        O = i,
        C = k;
      v;

    )
      switch (((g = w), (w = it()))) {
        case 40:
          if (g != 108 && Ve(C, u - 1) == 58) {
            Ea((C += le(_r(w), '&', '&\f')), '&\f') != -1 && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          C += _r(w);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          C += v3(g);
          break;
        case 92:
          C += b3(Jr() - 1, 7);
          continue;
        case 47:
          switch (It()) {
            case 42:
            case 47:
              Kr(E3(y3(it(), Jr()), e, n), c);
              break;
            default:
              C += '/';
          }
          break;
        case 123 * b:
          o[h++] = Rt(C) * y;
        case 125 * b:
        case 59:
        case 0:
          switch (w) {
            case 0:
            case 125:
              v = 0;
            case 59 + d:
              y == -1 && (C = le(C, /\f/g, '')),
                m > 0 &&
                  Rt(C) - u &&
                  Kr(m > 32 ? td(C + ';', i, n, u - 1) : td(le(C, ' ', '') + ';', i, n, u - 2), c);
              break;
            case 59:
              C += ';';
            default:
              if ((Kr((O = ed(C, e, n, h, d, r, o, k, (S = []), (M = []), u)), s), w === 123))
                if (d === 0) es(C, e, O, O, S, s, u, o, M);
                else
                  switch (p === 99 && Ve(C, 3) === 110 ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      es(
                        t,
                        O,
                        O,
                        i && Kr(ed(t, O, O, 0, 0, r, o, k, r, (S = []), u), M),
                        r,
                        M,
                        u,
                        o,
                        i ? S : M
                      );
                      break;
                    default:
                      es(C, O, O, O, [''], M, 0, o, M);
                  }
          }
          (h = d = m = 0), (b = y = 1), (k = C = ''), (u = a);
          break;
        case 58:
          (u = 1 + Rt(C)), (m = g);
        default:
          if (b < 1) {
            if (w == 123) --b;
            else if (w == 125 && b++ == 0 && g3() == 125) continue;
          }
          switch (((C += Gr(w)), w * b)) {
            case 38:
              y = d > 0 ? 1 : ((C += '\f'), -1);
              break;
            case 44:
              (o[h++] = (Rt(C) - 1) * y), (y = 1);
              break;
            case 64:
              It() === 45 && (C += _r(it())), (p = It()), (d = u = Rt((k = C += x3(Jr())))), w++;
              break;
            case 45:
              g === 45 && Rt(C) == 2 && (b = 0);
          }
      }
    return s;
  }
  function ed(t, e, n, i, r, s, a, o, c, h, d) {
    for (var u = r - 1, p = r === 0 ? s : [''], m = Ca(p), g = 0, b = 0, v = 0; g < i; ++g)
      for (var y = 0, w = Ai(t, u + 1, (u = h3((b = a[g])))), k = t; y < m; ++y)
        (k = Z1(b > 0 ? p[y] + ' ' + w : le(w, /&\f/g, p[y]))) && (c[v++] = k);
    return Qr(t, e, n, r === 0 ? xa : o, c, h, d);
  }
  function E3(t, e, n) {
    return Qr(t, e, n, ya, Gr(m3()), Ai(t, 2, -2), 0);
  }
  function td(t, e, n, i) {
    return Qr(t, e, n, wa, Ai(t, 0, i), Ai(t, i + 1, -1), i);
  }
  function $n(t, e) {
    for (var n = '', i = Ca(t), r = 0; r < i; r++) n += e(t[r], r, t, e) || '';
    return n;
  }
  function C3(t, e, n, i) {
    switch (t.type) {
      case c3:
        if (t.children.length) break;
      case l3:
      case wa:
        return (t.return = t.return || t.value);
      case ya:
        return '';
      case K1:
        return (t.return = t.value + '{' + $n(t.children, i) + '}');
      case xa:
        t.value = t.props.join(',');
    }
    return Rt((n = $n(t.children, i))) ? (t.return = t.value + '{' + n + '}') : '';
  }
  function M3(t) {
    var e = Ca(t);
    return function (n, i, r, s) {
      for (var a = '', o = 0; o < e; o++) a += t[o](n, i, r, s) || '';
      return a;
    };
  }
  function S3(t) {
    return function (e) {
      e.root || ((e = e.return) && t(e));
    };
  }
  function k3(t) {
    var e = Object.create(null);
    return function (n) {
      return e[n] === void 0 && (e[n] = t(n)), e[n];
    };
  }
  var z3 = function (e, n, i) {
      for (var r = 0, s = 0; (r = s), (s = It()), r === 38 && s === 12 && (n[i] = 1), !Hi(s); )
        it();
      return Pi(e, Qe);
    },
    O3 = function (e, n) {
      var i = -1,
        r = 44;
      do
        switch (Hi(r)) {
          case 0:
            r === 38 && It() === 12 && (n[i] = 1), (e[i] += z3(Qe - 1, n, i));
            break;
          case 2:
            e[i] += _r(r);
            break;
          case 4:
            if (r === 44) {
              (e[++i] = It() === 58 ? '&\f' : ''), (n[i] = e[i].length);
              break;
            }
          default:
            e[i] += Gr(r);
        }
      while ((r = it()));
      return e;
    },
    L3 = function (e, n) {
      return _1(O3(J1(e), n));
    },
    nd = new WeakMap(),
    R3 = function (e) {
      if (!(e.type !== 'rule' || !e.parent || e.length < 1)) {
        for (
          var n = e.value, i = e.parent, r = e.column === i.column && e.line === i.line;
          i.type !== 'rule';

        )
          if (((i = i.parent), !i)) return;
        if (!(e.props.length === 1 && n.charCodeAt(0) !== 58 && !nd.get(i)) && !r) {
          nd.set(e, !0);
          for (var s = [], a = L3(n, s), o = i.props, c = 0, h = 0; c < a.length; c++)
            for (var d = 0; d < o.length; d++, h++)
              e.props[h] = s[c] ? a[c].replace(/&\f/g, o[d]) : o[d] + ' ' + a[c];
        }
      }
    },
    I3 = function (e) {
      if (e.type === 'decl') {
        var n = e.value;
        n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((e.return = ''), (e.value = ''));
      }
    },
    D3 =
      'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
    A3 = function (e) {
      return e.type === 'comm' && e.children.indexOf(D3) > -1;
    },
    T3 = function (e) {
      return function (n, i, r) {
        if (!(n.type !== 'rule' || e.compat)) {
          var s = n.value.match(/(:first|:nth|:nth-last)-child/g);
          if (s) {
            for (var a = !!n.parent, o = a ? n.parent.children : r, c = o.length - 1; c >= 0; c--) {
              var h = o[c];
              if (h.line < n.line) break;
              if (h.column < n.column) {
                if (A3(h)) return;
                break;
              }
            }
            s.forEach(function (d) {
              console.error(
                'The pseudo class "' +
                  d +
                  '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                  d.split('-child')[0] +
                  '-of-type".'
              );
            });
          }
        }
      };
    },
    id = function (e) {
      return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
    },
    P3 = function (e, n) {
      for (var i = e - 1; i >= 0; i--) if (!id(n[i])) return !0;
      return !1;
    },
    rd = function (e) {
      (e.type = ''), (e.value = ''), (e.return = ''), (e.children = ''), (e.props = '');
    },
    H3 = function (e, n, i) {
      id(e) &&
        (e.parent
          ? (console.error(
              "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
            ),
            rd(e))
          : P3(n, i) &&
            (console.error(
              "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
            ),
            rd(e)));
    };
  function sd(t, e) {
    switch (u3(t, e)) {
      case 5103:
        return oe + 'print-' + t + t;
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
        return oe + t + t;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return oe + t + qr + t + Ne + t + t;
      case 6828:
      case 4268:
        return oe + t + Ne + t + t;
      case 6165:
        return oe + t + Ne + 'flex-' + t + t;
      case 5187:
        return oe + t + le(t, /(\w+).+(:[^]+)/, oe + 'box-$1$2' + Ne + 'flex-$1$2') + t;
      case 5443:
        return oe + t + Ne + 'flex-item-' + le(t, /flex-|-self/, '') + t;
      case 4675:
        return oe + t + Ne + 'flex-line-pack' + le(t, /align-content|flex-|-self/, '') + t;
      case 5548:
        return oe + t + Ne + le(t, 'shrink', 'negative') + t;
      case 5292:
        return oe + t + Ne + le(t, 'basis', 'preferred-size') + t;
      case 6060:
        return oe + 'box-' + le(t, '-grow', '') + oe + t + Ne + le(t, 'grow', 'positive') + t;
      case 4554:
        return oe + le(t, /([^-])(transform)/g, '$1' + oe + '$2') + t;
      case 6187:
        return le(le(le(t, /(zoom-|grab)/, oe + '$1'), /(image-set)/, oe + '$1'), t, '') + t;
      case 5495:
      case 3959:
        return le(t, /(image-set\([^]*)/, oe + '$1$`$1');
      case 4968:
        return (
          le(
            le(t, /(.+:)(flex-)?(.*)/, oe + 'box-pack:$3' + Ne + 'flex-pack:$3'),
            /s.+-b[^;]+/,
            'justify'
          ) +
          oe +
          t +
          t
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return le(t, /(.+)-inline(.+)/, oe + '$1$2') + t;
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
        if (Rt(t) - 1 - e > 6)
          switch (Ve(t, e + 1)) {
            case 109:
              if (Ve(t, e + 4) !== 45) break;
            case 102:
              return (
                le(
                  t,
                  /(.+:)(.+)-([^]+)/,
                  '$1' + oe + '$2-$3$1' + qr + (Ve(t, e + 3) == 108 ? '$3' : '$2-$3')
                ) + t
              );
            case 115:
              return ~Ea(t, 'stretch') ? sd(le(t, 'stretch', 'fill-available'), e) + t : t;
          }
        break;
      case 4949:
        if (Ve(t, e + 1) !== 115) break;
      case 6444:
        switch (Ve(t, Rt(t) - 3 - (~Ea(t, '!important') && 10))) {
          case 107:
            return le(t, ':', ':' + oe) + t;
          case 101:
            return (
              le(
                t,
                /(.+:)([^;!]+)(;|!.+)?/,
                '$1' +
                  oe +
                  (Ve(t, 14) === 45 ? 'inline-' : '') +
                  'box$3$1' +
                  oe +
                  '$2$3$1' +
                  Ne +
                  '$2box$3'
              ) + t
            );
        }
        break;
      case 5936:
        switch (Ve(t, e + 11)) {
          case 114:
            return oe + t + Ne + le(t, /[svh]\w+-[tblr]{2}/, 'tb') + t;
          case 108:
            return oe + t + Ne + le(t, /[svh]\w+-[tblr]{2}/, 'tb-rl') + t;
          case 45:
            return oe + t + Ne + le(t, /[svh]\w+-[tblr]{2}/, 'lr') + t;
        }
        return oe + t + Ne + t + t;
    }
    return t;
  }
  var F3 = function (e, n, i, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case wa:
            e.return = sd(e.value, e.length);
            break;
          case K1:
            return $n([Ti(e, { value: le(e.value, '@', '@' + oe) })], r);
          case xa:
            if (e.length)
              return p3(e.props, function (s) {
                switch (f3(s, /(::plac\w+|:read-\w+)/)) {
                  case ':read-only':
                  case ':read-write':
                    return $n([Ti(e, { props: [le(s, /:(read-\w+)/, ':' + qr + '$1')] })], r);
                  case '::placeholder':
                    return $n(
                      [
                        Ti(e, { props: [le(s, /:(plac\w+)/, ':' + oe + 'input-$1')] }),
                        Ti(e, { props: [le(s, /:(plac\w+)/, ':' + qr + '$1')] }),
                        Ti(e, { props: [le(s, /:(plac\w+)/, Ne + 'input-$1')] }),
                      ],
                      r
                    );
                }
                return '';
              });
        }
    },
    V3 = [F3],
    B3 = function (e) {
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
      var r = e.stylisPlugins || V3;
      if (process.env.NODE_ENV !== 'production' && /[^a-z-]/.test(n))
        throw new Error(
          'Emotion key must only contain lower case alphabetical characters and - but "' +
            n +
            '" was passed'
        );
      var s = {},
        a,
        o = [];
      (a = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
          function (b) {
            for (var v = b.getAttribute('data-emotion').split(' '), y = 1; y < v.length; y++)
              s[v[y]] = !0;
            o.push(b);
          }
        );
      var c,
        h = [R3, I3];
      process.env.NODE_ENV !== 'production' &&
        h.push(
          T3({
            get compat() {
              return g.compat;
            },
          }),
          H3
        );
      {
        var d,
          u = [
            C3,
            process.env.NODE_ENV !== 'production'
              ? function (b) {
                  b.root ||
                    (b.return
                      ? d.insert(b.return)
                      : b.value && b.type !== ya && d.insert(b.value + '{}'));
                }
              : S3(function (b) {
                  d.insert(b);
                }),
          ],
          p = M3(h.concat(r, u)),
          m = function (v) {
            return $n(w3(v), p);
          };
        c = function (v, y, w, k) {
          (d = w),
            process.env.NODE_ENV !== 'production' &&
              y.map !== void 0 &&
              (d = {
                insert: function (M) {
                  w.insert(M + y.map);
                },
              }),
            m(v ? v + '{' + y.styles + '}' : y.styles),
            k && (g.inserted[y.name] = !0);
        };
      }
      var g = {
        key: n,
        sheet: new o3({
          key: n,
          container: a,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: s,
        registered: {},
        insert: c,
      };
      return g.sheet.hydrate(o), g;
    };
  function N3(t) {
    for (var e = 0, n, i = 0, r = t.length; r >= 4; ++i, r -= 4)
      (n =
        (t.charCodeAt(i) & 255) |
        ((t.charCodeAt(++i) & 255) << 8) |
        ((t.charCodeAt(++i) & 255) << 16) |
        ((t.charCodeAt(++i) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (e =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
    switch (r) {
      case 3:
        e ^= (t.charCodeAt(i + 2) & 255) << 16;
      case 2:
        e ^= (t.charCodeAt(i + 1) & 255) << 8;
      case 1:
        (e ^= t.charCodeAt(i) & 255), (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
    }
    return (
      (e ^= e >>> 13),
      (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
      ((e ^ (e >>> 15)) >>> 0).toString(36)
    );
  }
  var $3 = {
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
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    ad = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
    j3 =
      "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
    W3 = /[A-Z]|^ms/g,
    od = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Sa = function (e) {
      return e.charCodeAt(1) === 45;
    },
    ld = function (e) {
      return e != null && typeof e != 'boolean';
    },
    ka = k3(function (t) {
      return Sa(t) ? t : t.replace(W3, '-$&').toLowerCase();
    }),
    ts = function (e, n) {
      switch (e) {
        case 'animation':
        case 'animationName':
          if (typeof n == 'string')
            return n.replace(od, function (i, r, s) {
              return (Ct = { name: r, styles: s, next: Ct }), r;
            });
      }
      return $3[e] !== 1 && !Sa(e) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
    };
  if (process.env.NODE_ENV !== 'production') {
    var X3 =
        /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,
      Y3 = ['normal', 'none', 'initial', 'inherit', 'unset'],
      U3 = ts,
      q3 = /^-ms-/,
      G3 = /-(.)/g,
      cd = {};
    ts = function (e, n) {
      if (
        e === 'content' &&
        (typeof n != 'string' ||
          (Y3.indexOf(n) === -1 &&
            !X3.test(n) &&
            (n.charAt(0) !== n.charAt(n.length - 1) ||
              (n.charAt(0) !== '"' && n.charAt(0) !== "'"))))
      )
        throw new Error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            n +
            '"\'`'
        );
      var i = U3(e, n);
      return (
        i !== '' &&
          !Sa(e) &&
          e.indexOf('-') !== -1 &&
          cd[e] === void 0 &&
          ((cd[e] = !0),
          console.error(
            'Using kebab-case for css properties in objects is not supported. Did you mean ' +
              e.replace(q3, 'ms-').replace(G3, function (r, s) {
                return s.toUpperCase();
              }) +
              '?'
          )),
        i
      );
    };
  }
  var hd =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
  function Fi(t, e, n) {
    if (n == null) return '';
    if (n.__emotion_styles !== void 0) {
      if (process.env.NODE_ENV !== 'production' && n.toString() === 'NO_COMPONENT_SELECTOR')
        throw new Error(hd);
      return n;
    }
    switch (typeof n) {
      case 'boolean':
        return '';
      case 'object': {
        if (n.anim === 1) return (Ct = { name: n.name, styles: n.styles, next: Ct }), n.name;
        if (n.styles !== void 0) {
          var i = n.next;
          if (i !== void 0)
            for (; i !== void 0; )
              (Ct = { name: i.name, styles: i.styles, next: Ct }), (i = i.next);
          var r = n.styles + ';';
          return process.env.NODE_ENV !== 'production' && n.map !== void 0 && (r += n.map), r;
        }
        return K3(t, e, n);
      }
      case 'function': {
        if (t !== void 0) {
          var s = Ct,
            a = n(t);
          return (Ct = s), Fi(t, e, a);
        } else process.env.NODE_ENV !== 'production' && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        break;
      }
      case 'string':
        if (process.env.NODE_ENV !== 'production') {
          var o = [],
            c = n.replace(od, function (d, u, p) {
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
                [].concat(o, ['`' + c + '`']).join(`
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
    return h !== void 0 ? h : n;
  }
  function K3(t, e, n) {
    var i = '';
    if (Array.isArray(n)) for (var r = 0; r < n.length; r++) i += Fi(t, e, n[r]) + ';';
    else
      for (var s in n) {
        var a = n[s];
        if (typeof a != 'object')
          e != null && e[a] !== void 0
            ? (i += s + '{' + e[a] + '}')
            : ld(a) && (i += ka(s) + ':' + ts(s, a) + ';');
        else {
          if (s === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production')
            throw new Error(hd);
          if (Array.isArray(a) && typeof a[0] == 'string' && (e == null || e[a[0]] === void 0))
            for (var o = 0; o < a.length; o++) ld(a[o]) && (i += ka(s) + ':' + ts(s, a[o]) + ';');
          else {
            var c = Fi(t, e, a);
            switch (s) {
              case 'animation':
              case 'animationName': {
                i += ka(s) + ':' + c + ';';
                break;
              }
              default:
                process.env.NODE_ENV !== 'production' && s === 'undefined' && console.error(j3),
                  (i += s + '{' + c + '}');
            }
          }
        }
      }
    return i;
  }
  var dd = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    ud;
  process.env.NODE_ENV !== 'production' &&
    (ud = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
  var Ct,
    za = function (e, n, i) {
      if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
        return e[0];
      var r = !0,
        s = '';
      Ct = void 0;
      var a = e[0];
      a == null || a.raw === void 0
        ? ((r = !1), (s += Fi(i, n, a)))
        : (process.env.NODE_ENV !== 'production' && a[0] === void 0 && console.error(ad),
          (s += a[0]));
      for (var o = 1; o < e.length; o++)
        (s += Fi(i, n, e[o])),
          r &&
            (process.env.NODE_ENV !== 'production' && a[o] === void 0 && console.error(ad),
            (s += a[o]));
      var c;
      process.env.NODE_ENV !== 'production' &&
        (s = s.replace(ud, function (p) {
          return (c = p), '';
        })),
        (dd.lastIndex = 0);
      for (var h = '', d; (d = dd.exec(s)) !== null; ) h += '-' + d[1];
      var u = N3(s) + h;
      return process.env.NODE_ENV !== 'production'
        ? {
            name: u,
            styles: s,
            map: c,
            next: Ct,
            toString: function () {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            },
          }
        : { name: u, styles: s, next: Ct };
    },
    Z3 = !0;
  function fd(t, e, n) {
    var i = '';
    return (
      n.split(' ').forEach(function (r) {
        t[r] !== void 0 ? e.push(t[r] + ';') : (i += r + ' ');
      }),
      i
    );
  }
  var Q3 = function (e, n, i) {
      var r = e.key + '-' + n.name;
      (i === !1 || Z3 === !1) && e.registered[r] === void 0 && (e.registered[r] = n.styles);
    },
    J3 = function (e, n, i) {
      Q3(e, n, i);
      var r = e.key + '-' + n.name;
      if (e.inserted[n.name] === void 0) {
        var s = n;
        do e.insert(n === s ? '.' + r : '', s, e.sheet, !0), (s = s.next);
        while (s !== void 0);
      }
    };
  function pd(t, e) {
    if (t.inserted[e.name] === void 0) return t.insert('', e, t.sheet, !0);
  }
  function md(t, e, n) {
    var i = [],
      r = fd(t, i, n);
    return i.length < 2 ? n : r + e(i);
  }
  var _3 = function (e) {
      var n = B3(e);
      (n.sheet.speedy = function (o) {
        if (process.env.NODE_ENV !== 'production' && this.ctr !== 0)
          throw new Error('speedy must be changed before any rules are inserted');
        this.isSpeedy = o;
      }),
        (n.compat = !0);
      var i = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          var u = za(h, n.registered, void 0);
          return J3(n, u, !1), n.key + '-' + u.name;
        },
        r = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          var u = za(h, n.registered),
            p = 'animation-' + u.name;
          return pd(n, { name: u.name, styles: '@keyframes ' + p + '{' + u.styles + '}' }), p;
        },
        s = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          var u = za(h, n.registered);
          pd(n, u);
        },
        a = function () {
          for (var c = arguments.length, h = new Array(c), d = 0; d < c; d++) h[d] = arguments[d];
          return md(n.registered, i, e4(h));
        };
      return {
        css: i,
        cx: a,
        injectGlobal: s,
        keyframes: r,
        hydrate: function (c) {
          c.forEach(function (h) {
            n.inserted[h] = !0;
          });
        },
        flush: function () {
          (n.registered = {}), (n.inserted = {}), n.sheet.flush();
        },
        sheet: n.sheet,
        cache: n,
        getRegisteredStyles: fd.bind(null, n.registered),
        merge: md.bind(null, n.registered, i),
      };
    },
    e4 = function t(e) {
      for (var n = '', i = 0; i < e.length; i++) {
        var r = e[i];
        if (r != null) {
          var s = void 0;
          switch (typeof r) {
            case 'boolean':
              break;
            case 'object': {
              if (Array.isArray(r)) s = t(r);
              else {
                s = '';
                for (var a in r) r[a] && a && (s && (s += ' '), (s += a));
              }
              break;
            }
            default:
              s = r;
          }
          s && (n && (n += ' '), (n += s));
        }
      }
      return n;
    },
    t4 = _3({ key: 'css' }),
    ft = t4.css;
  const n4 = { root: ft({ position: 'relative' }) },
    i4 = 'Analytics line chart';
  Ft.register(ma, ga, Nr, Ri, xb, Ob);
  const Oa = ba(f.fontSizeS);
  (Ft.defaults.font.size = Oa),
    (Ft.defaults.font.family = f.fontStackPrimary),
    (Ft.defaults.font.weight = f.fontWeightMedium.toString()),
    (Ft.defaults.borderColor = f.gray200),
    (Ft.defaults.datasets.line.borderColor = f.colorPrimary);
  const r4 = 1.2,
    gd = (t) => {
      const { dataValues: e, xAxisLabels: n, tooltipMetricLabel: i, accessibilityLabel: r } = t,
        s = { labels: n, datasets: [{ data: e }] },
        a = {
          responsive: !0,
          scales: {
            y: { beginAtZero: !0, suggestedMax: Math.max(...e) * r4, ticks: { precision: 0 } },
          },
          plugins: {
            tooltip: {
              backgroundColor: f.gray900,
              bodyColor: f.colorWhite,
              padding: ba(f.spacingXs),
              titleMarginBottom: ba(f.spacing2Xs),
              titleFont: { size: Oa },
              bodyFont: { size: Oa, weight: '700' },
              displayColors: !1,
              callbacks: { beforeBody: () => i },
            },
          },
        },
        o = { 'aria-label': r };
      return ve.jsx('div', {
        className: n4.root,
        children: ve.jsx(i3, { data: s, options: a, fallbackContent: r, ...o }),
      });
    };
  (gd.defaultProps = { accessibilityLabel: i4 }), globalThis && globalThis.__awaiter;
  function s4(t, e) {
    const [n, i] = l.useState(t);
    return (
      l.useEffect(() => {
        const r = setTimeout(() => i(t), e || 500);
        return () => {
          clearTimeout(r);
        };
      }, [t, e]),
      n
    );
  }
  globalThis && globalThis.__awaiter;
  var vd = ((t) => (
    (t[(t.SET_SEARCH = 0)] = 'SET_SEARCH'),
    (t[(t.SET_GROUP_FILTER = 1)] = 'SET_GROUP_FILTER'),
    (t[(t.SET_FILTER_FACETS = 2)] = 'SET_FILTER_FACETS'),
    t
  ))(vd || {});
  const { SET_SEARCH: bd, SET_FILTER_FACETS: La, SET_GROUP_FILTER: yd } = vd,
    a4 = (t, e) => {
      switch (e.type) {
        case bd:
          return { ...t, searchValue: e.payload };
        case La:
          return { ...t, selectedFilterFacets: e.payload };
        case yd:
          return { ...t, selectedGroupFilter: e.payload };
        default:
          return t;
      }
    },
    o4 = (t) => {
      const [e, n] = l.useReducer(a4, t),
        i = l.useCallback(
          (a) => {
            n({ type: bd, payload: a.target.value });
          },
          [n]
        ),
        r = l.useCallback(
          (a) => {
            const o = { label: a.target.name, value: a.target.value },
              { selectedFilterFacets: c } = e,
              h = c.findIndex((d) => d.label === o.label);
            if (h > -1) {
              const d = [...c];
              d.splice(h, 1), n({ type: La, payload: d });
            } else n({ type: La, payload: [...c, o] });
          },
          [n]
        ),
        s = l.useCallback(
          (a) => {
            n({ type: yd, payload: a.target.value });
          },
          [n]
        );
      return { searchState: e, onSearchInput: i, onFilterChange: r, onGroupFilterChange: s };
    },
    xd = (t) => {
      const { groupFilters: e, filterFacets: n, onSearch: i, searchTitle: r, placeholder: s } = t,
        a = {
          selectedGroupFilter: e != null && e.length ? e[0].value : '',
          searchValue: '',
          selectedFilterFacets: [],
        },
        { searchState: o, onSearchInput: c } = o4(a),
        h = s4(o, 300),
        d = () => {
          i(o);
        };
      return (
        l.useEffect(d, [h]),
        ve.jsx(nl, {
          id: 'search-input',
          type: 'text',
          value: o.searchValue,
          placeholder: s || 'Search',
          title: r || 'Search',
          'aria-label': r || 'Search',
          onChange: c,
        })
      );
    },
    l4 = { root: ft({ position: 'relative' }), missingBadge: ft({ marginBottom: f.spacingXs }) },
    c4 =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADJCAYAAABfY8xgAAAACXBIWXMAAAsSAAALEgHS3X78AAAKZklEQVR4nO3dT2wV1xXH8WtCwp+CDQKhpJIJVEpZ1FUg0CzsBQ6b1JFI6KZyN8Wr0EUjvKpUFQkv2k0rNZZSqWk2mF2UbEyDwqrEWSTZtBWo7oZEwsWJgqzQ4CglsiLlVb8xj4Lr9zzvec7MPXe+HwklEc574+f53bn3zJ3jnkajEQAUawOfJ1A8ggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWIABggUYIFiAAYIFGCBYgAGCBRggWICBjUW/ZM+Lnw2HEN7hh4UqNV7b3VPl+3PFAgwQLMAAwQIMECzAAMECDBAswADBAgwQLMAAwQIMFL7zAojBW9fDcN7DOL4/zBR9yAQLqepkW13h25+YCgIGCBZggGABBggWYIDixRp2bFoMB/fMhh2bl/+5mrnFvWFusT/cXuoLVxYG4v1mUBqCtYLCc+KJt8Nw/3vZv/dt+qLj13h3fjAL2Mz8UJi5MZQFDvVCsO6Gafzwn7JAdROklY72v5/9OX34texvLnw0EqY/fC5MzY4We+CIVk+j0Sj02Dw9mj828HoYP/xqeHLPP0t5v8Wl3jD5t1NhavYn2dQRdv78y925X/v4fu5jFUKBmjv1VDg38lJpoRJdDc8O/i5cf/GpMDXyUrZ+Q5pqFSytm66cHM4C9XjvfKXHcvJuuDUFRXpqESxdGSaP/Sq8M3qi1CvUWnQFe/nYmSzsrSqO8Cn5YOmEnRl94V4hIUYKu45RU1SkIelg6UTVCRvTVaoVXb00RdXaC/4lGyyFSidqEeXzMmntpakhhQ3fkgyWRv1zjkf+5tSQcPmVXLAmhn6bjfreES7fkgqWpn+6T5QKhWv6Rz9N5vupk2SCpXtUnqd/rWhrFAUNf5IIlqZLKY/smtpSivcliWApVN6qf53SDe59fdXuFkF+7oOlLUGaLqVOA8fUyM+T/z5T4TpYmgKqClgXGkCYEvrgOliTx84kPwVcSVNCSvDxcxssrTdSuF/VKQ0k40fYER87t8GaGKzPFHAlrSu5asXNZbDqerVq0lWLtVbcXAZLj9PXHdPBuLkM1oknLkVwFNXSE9DabYI4uQuWOilV/Vh9LJgOxstdsBil/0eDDOLk8IrFNLBJRQx6ZcTJVbBUDWQa+CCu4HFyFayDe/5R+nve+WZH9idWw3sJVoycBavcaY8C9fsbM+HNhclS37cTTAXj5Kp3e9nTHgXq46Unsz9bNtwOP94zXur758HUOE78fqwW3liYDB8snrz3l5c/Px0+WByL7CiXcdWKj6tglfXclQKkIK10/ua5cO1O7l/GXhr2DcaHK9YK80sHswC18sdPprOvAdohWPdRYFSsaOerb/rC+U+noqoU8sh+fAjWXQqKAqPgrEXFjLUCWKZ9fTeiORYsI1h3KSgKTF762vM3p6o/cESJYGVFiamOQtWkquHFzyasDis3/Z5jxKX2wfrL5+MPlNU7dfHW2WjL8KiOq2BdXfheoa+nQLy58PK6X0f3vKgU4n6ugnV7ae3CQl4KwhsFbVVSwUNrtFtf7yvs+DpxZWGgkvdFa66CVdQJpAAoCHkqgHnptXSPq+wyvH4Tf5EDDorhKlhzi3vX/Ro68RWAIkPVpALIq59MF/667XC1ipOrYM3Mr7/6pXtV3VQA87p252ipZXiCFSd3U0FNfbqlE/7qly+YH6eqjGVVCosYbFA8d+X2bk8knejrKat3SvsNr3x5wvx9uIcVJ3fBmv7wuY7/H53g7TbWWtG007IMf+GjEQoXkXIYrJGOvj7brf5pNVuPrCuF3QwyRdrVtzEMDnyr0mOIlbtgaYTWSJ2HZQUwr39//XhW2rcIV6eDTJEeebgnPHNoW/j+d7YQrlW43NI0+ddTa35Ns1+FTuyqqQpZdN+M87OjlU4Dnx/qC7t6lzs7KFwH+jdXdiwxchksFTD+9UV/269p9quIhQonRe30kIn3f1HZd/bMoe33QtU0fGhb+Pbuhys7ptj4/TU+77U+sVb2q4hFUX0z3p0fDHOL7QcWK0cObA3f7d+06qs/+4PebN0Fx8Gamh1d9arVql9FLFSdXG+lcPzybyr5bjTdO3xga8u/b6679M+6c/3YyNjbrzzw32v1q4iF1n7dhktrqyp2W+StAGqKqPVX3bkOltZazQphnn4Vsei2b4Z2nYxf/nXp38X2rQ+F5wf7cl+JFC6tw+rM/YOOumrd/Ko/d7+KWHTTN2Ps0iulVwIVpmef3t7x9E7rsCNtpo2pcx8snWhnrl2NqgKYVyd9M3RlruKG8A+f7v2/CmBeWo/VtQzvPliacmzcvDOCI+mOqpdqD9COnpxeuZ4sgz7bx3atr4SudVkdK4Wug6Ubk61Kv56oPUCrMrzWVWOX/lD6FFBXmiI+W00htT7TOq1O3AZLP/iUttKs1jdDoRp+/ULpVcB9jz6S3fAtSrfrNM9cBivFzZ8r+2ZUFSp9thYVPa3TtF6rC3fBak4tUhz9mrvhVeWsIlTWn63Wa3Upw7sKVvaDH0ozVE2qFJ6++vdqQlXCZ6t1Wx0qha6CtdrmzxTt3Lm79JF9aGBbaZ+t1m9ax6XMTbB0oqX+w7hfmSO71qtlV1ezQTLhMryLYBVV+vWmjJFdn61uW5Qt5bVy8BAsPeNTZOnXG8uRXa9b5Web8po56mDpB69nfOps+R5Qb+Ennz5bXTGqpnWd1nepiTZYVieUR9u3bCh0ZI/tuSlN81O7LxllsJpTBJ1QWFbkyH5/v4pYpNY3I8ozt8zSrydFjOwx37JIqW9GdMFq11MB6xvZPWxaTqVvRlTBWqunApZpZO/05POyaTmVvhnRBKvq0q83qujlDZe3Tcsp9M2IIlixlH49yTuyd9qvIhbe+2ZUHixaZnVvrUcxvD8H5blvRuXBWk9PBbR/FCOFTcte+2ZUGqwieipgeWRfud8vpU3LHvtmVBasVPpVxEInX3NkT23Tsse+GZUEK7V+FbHQZ6oBK8Xqqrf1YunB4peV2dFJl/Jn66lvRqnBSv0ZHNjz0jejtGDVoV8FyuGhb0ZpwapLvwqUI/a+GaUEq279KlCOmPtmmAerrv0qYC/mNXtPo9EwfYOfXQwTrf7usd4wvG1TOGp6AAm79Z9839tDG0LYUX6/mNL0bgnh0XXUM47vD4Un0zxY7bx1PQvd2coOADAKFs++AwYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGKt15AaSKKxZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZggGABBggWYIBgAQYIFmCAYAEGCBZQtBDCfwG958nSihESTQAAAABJRU5ErkJggg==',
    h4 = (t) => !t,
    wd = (t) => {
      const { title: e, loading: n, entityType: i, thumbnail: r, className: s } = t,
        a = h4(e)
          ? ve.jsx(jc, {
              status: 'deleted',
              title: `${i} Missing`,
              description: `This ${i} is missing. It may have been deleted or moved.`,
              isLoading: n,
              role: 'article',
              'data-test-id': 'missing',
            })
          : ve.jsx(jc, {
              ...t,
              isLoading: n,
              thumbnailElement: ve.jsx('img', { alt: 'Thumbnail', src: r || c4 }),
              role: 'article',
            });
      return ve.jsx('div', {
        className: `${l4.root} ${s}`,
        'data-test-id': 'entity-card-single',
        children: a,
      });
    },
    Ed = {
      root: ft({ position: 'relative' }),
      missingBadge: ft({ marginBottom: f.spacingXs }),
      entityCard: ft({ '&&': { marginTop: f.spacingXs, marginBottom: f.spacingXs } }),
    };
  var ns = ((t) => ((t.MULTIPLE = 'multiple'), (t.SINGLE = 'single'), t))(ns || {});
  const Cd = (t) => {
      const {
          entityType: e,
          list: n,
          loading: i,
          error: r,
          selected: s,
          selectType: a,
          onSelect: o,
        } = t,
        c = (d) => s.findIndex((u) => u.title === d.title) > -1,
        h = () => (a === ns.SINGLE ? !s[0].title : a === ns.MULTIPLE);
      return ve.jsxs('div', {
        className: Ed.root,
        id: 'EntityCardList',
        children: [
          r &&
            ve.jsxs(Ts, {
              variant: 'negative',
              'date-test-id': 'cards-error',
              children: ["We're sorry, but no ", e.toLowerCase(), 's could be loaded.'],
            }),
          n.length === 0 &&
            ve.jsxs(Ts, {
              variant: 'negative',
              'data-test-id': 'no-cards',
              children: ['There are no ', e.toLowerCase(), 's to show.'],
            }),
          !r &&
            n.length > 0 &&
            n.map((d, u) =>
              ve.jsx(
                wd,
                {
                  className: `${Ed.entityCard} entity-card-${u}`,
                  'data-test-id': 'entity-card',
                  onClick: () => (h() ? o && o(d) : null),
                  isSelected: c(d),
                  loading: i,
                  ...d,
                },
                u
              )
            ),
        ],
      });
    },
    jn = {
      root: ft({ position: 'relative' }),
      heading: ft({
        '&&': { fontSize: f.fontSizeM, fontWeight: f.fontWeightMedium, marginBottom: f.spacingS },
      }),
      searchBox: ft({ marginBottom: f.spacingM }),
      controls: ft({ marginBottom: f.spacingM }),
      searchResults: ft({
        overflowY: 'scroll',
        padding: `0 ${f.spacingXs}`,
        boxSizing: 'border-box',
      }),
      actions: ft({ marginTop: f.spacingM, 'button:first-child': { marginRight: f.spacingM } }),
    },
    d4 = (t) => {
      const { entityType: e, selectType: n, list: i, onCancel: r, onSubmit: s } = t,
        [a, o] = l.useState(i),
        [c, h] = l.useState({}),
        [d, u] = l.useState([]),
        [p, m] = l.useState(!1),
        g = (S) => {
          const M = S.searchValue
            ? a.filter((O) => O.title.toLowerCase().includes(S.searchValue.toLowerCase()))
            : i;
          o(M);
        },
        b = () => n === ns.MULTIPLE,
        v = () => (b() ? d.length === 0 : !c.title),
        y = (S) => {
          if (!b()) {
            c.title === S.title ? h({}) : h(S);
            return;
          }
          if (d.length !== 0) {
            if (d.findIndex((O) => O.title === S.title) > -1) {
              const O = d.filter((C) => C.title !== S.title);
              u(O);
            } else u([...d, S]);
            return;
          }
          u([S]);
        },
        w = () => {
          b() ? u([]) : h({});
        },
        k = p ? (b() ? d : [c]) : a;
      return ve.jsx('div', {
        className: jn.root,
        id: 'EntityForm',
        children: ve.jsxs(xf, {
          onSubmit: () => s && s(b() ? d : c),
          children: [
            ve.jsx(Ee, {
              className: jn.heading,
              alignItems: 'center',
              justifyContent: 'space-between',
              children: ve.jsxs(je, {
                id: 'search-input-helptext',
                children: ['Search for a ', e, ': '],
              }),
            }),
            ve.jsx(Ee, {
              className: jn.searchBox,
              'data-test-id': 'search-bar',
              children: ve.jsx(xd, {
                onSearch: g,
                placeholder: `Type to search for ${e}s`,
                searchTitle: `Search for ${e}s`,
              }),
            }),
            ve.jsxs(Ee, {
              className: jn.controls,
              alignItems: 'center',
              justifyContent: 'space-between',
              children: [
                ve.jsx(Fs, {
                  onClick: () => m(!p),
                  children: p ? 'Show all' : `Show Selected ${b() ? '(' + d.length + ')' : ''}`,
                }),
                ve.jsx(Fs, { onClick: w, children: 'Clear Selected' }),
              ],
            }),
            ve.jsx(Ee, {
              className: jn.searchResults,
              children: ve.jsx(Cd, {
                entityType: e,
                list: k,
                selected: b() ? d : [c],
                onSelect: y,
                selectType: n,
              }),
            }),
            ve.jsxs(Ee, {
              className: jn.actions,
              alignItems: 'center',
              justifyContent: 'flex-end',
              children: [
                r && ve.jsx(Qn, { onClick: r, children: 'Cancel' }),
                s &&
                  ve.jsxs(Qn, {
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
  (Ae.EntityCard = wd),
    (Ae.EntityCardList = Cd),
    (Ae.EntityForm = d4),
    (Ae.HyperLink = Xg),
    (Ae.LineChart = gd),
    (Ae.SearchBar = xd),
    Object.defineProperty(Ae, Symbol.toStringTag, { value: 'Module' });
});
