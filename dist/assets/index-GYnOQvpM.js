(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Yf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ss(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jc = { exports: {} },
  xs = {},
  Fc = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xr = Symbol.for("react.element"),
  Xf = Symbol.for("react.portal"),
  bf = Symbol.for("react.fragment"),
  Gf = Symbol.for("react.strict_mode"),
  Zf = Symbol.for("react.profiler"),
  Kf = Symbol.for("react.provider"),
  qf = Symbol.for("react.context"),
  Jf = Symbol.for("react.forward_ref"),
  ep = Symbol.for("react.suspense"),
  tp = Symbol.for("react.memo"),
  np = Symbol.for("react.lazy"),
  ba = Symbol.iterator;
function rp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ba && e[ba]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $c = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bc = Object.assign,
  Wc = {};
function Bn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wc),
    (this.updater = n || $c);
}
Bn.prototype.isReactComponent = {};
Bn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hc() {}
Hc.prototype = Bn.prototype;
function Dl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wc),
    (this.updater = n || $c);
}
var jl = (Dl.prototype = new Hc());
jl.constructor = Dl;
Bc(jl, Bn.prototype);
jl.isPureReactComponent = !0;
var Ga = Array.isArray,
  Uc = Object.prototype.hasOwnProperty,
  Fl = { current: null },
  Vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qc(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Uc.call(t, r) && !Vc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var c = Array(a), d = 0; d < a; d++) c[d] = arguments[d + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Xr,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Fl.current,
  };
}
function ip(e, t) {
  return {
    $$typeof: Xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xr;
}
function sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Za = /\/+/g;
function bs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sp("" + e.key)
    : t.toString(36);
}
function Ci(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xr:
          case Xf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + bs(o, 0) : r),
      Ga(i)
        ? ((n = ""),
          e != null && (n = e.replace(Za, "$&/") + "/"),
          Ci(i, t, n, "", function (d) {
            return d;
          }))
        : i != null &&
          ($l(i) &&
            (i = ip(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Za, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ga(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var c = r + bs(s, a);
      o += Ci(s, t, n, c, i);
    }
  else if (((c = rp(e)), typeof c == "function"))
    for (e = c.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (c = r + bs(s, a++)), (o += Ci(s, t, n, c, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ii(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ci(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function op(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null },
  Ii = { transition: null },
  lp = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: Ii,
    ReactCurrentOwner: Fl,
  };
F.Children = {
  map: ii,
  forEach: function (e, t, n) {
    ii(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ii(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ii(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$l(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = Bn;
F.Fragment = bf;
F.Profiler = Zf;
F.PureComponent = Dl;
F.StrictMode = Gf;
F.Suspense = ep;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Bc({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Fl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (c in t)
      Uc.call(t, c) &&
        !Vc.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    a = Array(c);
    for (var d = 0; d < c; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: Xr, type: e.type, key: i, ref: s, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: qf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kf, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Qc;
F.createFactory = function (e) {
  var t = Qc.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Jf, render: e };
};
F.isValidElement = $l;
F.lazy = function (e) {
  return { $$typeof: np, _payload: { _status: -1, _result: e }, _init: op };
};
F.memo = function (e, t) {
  return { $$typeof: tp, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Ii.transition;
  Ii.transition = {};
  try {
    e();
  } finally {
    Ii.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ge.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
F.useId = function () {
  return ge.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ge.current.useRef(e);
};
F.useState = function (e) {
  return ge.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ge.current.useTransition();
};
F.version = "18.2.0";
Fc.exports = F;
var O = Fc.exports;
const Ee = Ss(O);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap = O,
  up = Symbol.for("react.element"),
  cp = Symbol.for("react.fragment"),
  dp = Object.prototype.hasOwnProperty,
  hp = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) dp.call(t, r) && !fp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: up,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: hp.current,
  };
}
xs.Fragment = cp;
xs.jsx = Yc;
xs.jsxs = Yc;
jc.exports = xs;
var E = jc.exports,
  To = {},
  Xc = { exports: {} },
  Te = {},
  bc = { exports: {} },
  Gc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, A) {
    var D = M.length;
    M.push(A);
    e: for (; 0 < D; ) {
      var K = (D - 1) >>> 1,
        ne = M[K];
      if (0 < i(ne, A)) (M[K] = A), (M[D] = ne), (D = K);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var A = M[0],
      D = M.pop();
    if (D !== A) {
      M[0] = D;
      e: for (var K = 0, ne = M.length, ni = ne >>> 1; K < ni; ) {
        var Ht = 2 * (K + 1) - 1,
          Xs = M[Ht],
          Ut = Ht + 1,
          ri = M[Ut];
        if (0 > i(Xs, D))
          Ut < ne && 0 > i(ri, Xs)
            ? ((M[K] = ri), (M[Ut] = D), (K = Ut))
            : ((M[K] = Xs), (M[Ht] = D), (K = Ht));
        else if (Ut < ne && 0 > i(ri, D)) (M[K] = ri), (M[Ut] = D), (K = Ut);
        else break e;
      }
    }
    return A;
  }
  function i(M, A) {
    var D = M.sortIndex - A.sortIndex;
    return D !== 0 ? D : M.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var c = [],
    d = [],
    v = 1,
    g = null,
    y = 3,
    w = !1,
    P = !1,
    _ = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var A = n(d); A !== null; ) {
      if (A.callback === null) r(d);
      else if (A.startTime <= M)
        r(d), (A.sortIndex = A.expirationTime), t(c, A);
      else break;
      A = n(d);
    }
  }
  function l(M) {
    if (((_ = !1), h(M), !P))
      if (n(c) !== null) (P = !0), Qs(u);
      else {
        var A = n(d);
        A !== null && Ys(l, A.startTime - M);
      }
  }
  function u(M, A) {
    (P = !1), _ && ((_ = !1), m(x), (x = -1)), (w = !0);
    var D = y;
    try {
      for (
        h(A), g = n(c);
        g !== null && (!(g.expirationTime > A) || (M && !N()));

      ) {
        var K = g.callback;
        if (typeof K == "function") {
          (g.callback = null), (y = g.priorityLevel);
          var ne = K(g.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ne == "function" ? (g.callback = ne) : g === n(c) && r(c),
            h(A);
        } else r(c);
        g = n(c);
      }
      if (g !== null) var ni = !0;
      else {
        var Ht = n(d);
        Ht !== null && Ys(l, Ht.startTime - A), (ni = !1);
      }
      return ni;
    } finally {
      (g = null), (y = D), (w = !1);
    }
  }
  var f = !1,
    S = null,
    x = -1,
    k = 5,
    I = -1;
  function N() {
    return !(e.unstable_now() - I < k);
  }
  function j() {
    if (S !== null) {
      var M = e.unstable_now();
      I = M;
      var A = !0;
      try {
        A = S(!0, M);
      } finally {
        A ? B() : ((f = !1), (S = null));
      }
    } else f = !1;
  }
  var B;
  if (typeof p == "function")
    B = function () {
      p(j);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      Wt = se.port2;
    (se.port1.onmessage = j),
      (B = function () {
        Wt.postMessage(null);
      });
  } else
    B = function () {
      T(j, 0);
    };
  function Qs(M) {
    (S = M), f || ((f = !0), B());
  }
  function Ys(M, A) {
    x = T(function () {
      M(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      P || w || ((P = !0), Qs(u));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (k = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (M) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = y;
      }
      var D = y;
      y = A;
      try {
        return M();
      } finally {
        y = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, A) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var D = y;
      y = M;
      try {
        return A();
      } finally {
        y = D;
      }
    }),
    (e.unstable_scheduleCallback = function (M, A, D) {
      var K = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? K + D : K))
          : (D = K),
        M)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = D + ne),
        (M = {
          id: v++,
          callback: A,
          priorityLevel: M,
          startTime: D,
          expirationTime: ne,
          sortIndex: -1,
        }),
        D > K
          ? ((M.sortIndex = D),
            t(d, M),
            n(c) === null &&
              M === n(d) &&
              (_ ? (m(x), (x = -1)) : (_ = !0), Ys(l, D - K)))
          : ((M.sortIndex = ne), t(c, M), P || w || ((P = !0), Qs(u))),
        M
      );
    }),
    (e.unstable_shouldYield = N),
    (e.unstable_wrapCallback = function (M) {
      var A = y;
      return function () {
        var D = y;
        y = A;
        try {
          return M.apply(this, arguments);
        } finally {
          y = D;
        }
      };
    });
})(Gc);
bc.exports = Gc;
var pp = bc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zc = O,
  Ie = pp;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Kc = new Set(),
  Sr = {};
function on(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (Sr[e] = t, e = 0; e < t.length; e++) Kc.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ro = Object.prototype.hasOwnProperty,
  gp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ka = {},
  qa = {};
function mp(e) {
  return Ro.call(qa, e)
    ? !0
    : Ro.call(Ka, e)
    ? !1
    : gp.test(e)
    ? (qa[e] = !0)
    : ((Ka[e] = !0), !1);
}
function vp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function yp(e, t, n, r) {
  if (t === null || typeof t > "u" || vp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function me(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bl = /[\-:]([a-z])/g;
function Wl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bl, Wl);
    ae[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bl, Wl);
    ae[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bl, Wl);
  ae[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hl(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (yp(t, n, i, r) && (n = null),
    r || i === null
      ? mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  si = Symbol.for("react.element"),
  dn = Symbol.for("react.portal"),
  hn = Symbol.for("react.fragment"),
  Ul = Symbol.for("react.strict_mode"),
  Oo = Symbol.for("react.profiler"),
  qc = Symbol.for("react.provider"),
  Jc = Symbol.for("react.context"),
  Vl = Symbol.for("react.forward_ref"),
  No = Symbol.for("react.suspense"),
  Lo = Symbol.for("react.suspense_list"),
  Ql = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  ed = Symbol.for("react.offscreen"),
  Ja = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ja && e[Ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  Gs;
function er(e) {
  if (Gs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gs = (t && t[1]) || "";
    }
  return (
    `
` +
    Gs +
    e
  );
}
var Zs = !1;
function Ks(e, t) {
  if (!e || Zs) return "";
  Zs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var i = d.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var c =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Zs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? er(e) : "";
}
function wp(e) {
  switch (e.tag) {
    case 5:
      return er(e.type);
    case 16:
      return er("Lazy");
    case 13:
      return er("Suspense");
    case 19:
      return er("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ks(e.type, !1)), e;
    case 11:
      return (e = Ks(e.type.render, !1)), e;
    case 1:
      return (e = Ks(e.type, !0)), e;
    default:
      return "";
  }
}
function Mo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hn:
      return "Fragment";
    case dn:
      return "Portal";
    case Oo:
      return "Profiler";
    case Ul:
      return "StrictMode";
    case No:
      return "Suspense";
    case Lo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jc:
        return (e.displayName || "Context") + ".Consumer";
      case qc:
        return (e._context.displayName || "Context") + ".Provider";
      case Vl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ql:
        return (
          (t = e.displayName || null), t !== null ? t : Mo(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return Mo(e(t));
        } catch {}
    }
  return null;
}
function Sp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mo(t);
    case 8:
      return t === Ul ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function td(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xp(e) {
  var t = td(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function oi(e) {
  e._valueTracker || (e._valueTracker = xp(e));
}
function nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = td(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zo(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function eu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rd(e, t) {
  (t = t.checked), t != null && Hl(e, "checked", t, !1);
}
function Ao(e, t) {
  rd(e, t);
  var n = Dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Do(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Do(e, t.type, Dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Do(e, t, n) {
  (t !== "number" || Wi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var tr = Array.isArray;
function En(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function jo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (tr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Dt(n) };
}
function id(e, t) {
  var n = Dt(t.value),
    r = Dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var li,
  od = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        li = li || document.createElement("div"),
          li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function (e) {
  Pp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (or[t] = or[e]);
  });
});
function ld(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (or.hasOwnProperty(e) && or[e])
    ? ("" + t).trim()
    : t + "px";
}
function ad(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ld(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var _p = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function $o(e, t) {
  if (t) {
    if (_p[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Bo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wo = null;
function Yl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ho = null,
  kn = null,
  Cn = null;
function iu(e) {
  if ((e = Zr(e))) {
    if (typeof Ho != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Cs(t)), Ho(e.stateNode, e.type, t));
  }
}
function ud(e) {
  kn ? (Cn ? Cn.push(e) : (Cn = [e])) : (kn = e);
}
function cd() {
  if (kn) {
    var e = kn,
      t = Cn;
    if (((Cn = kn = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
  }
}
function dd(e, t) {
  return e(t);
}
function hd() {}
var qs = !1;
function fd(e, t, n) {
  if (qs) return e(t, n);
  qs = !0;
  try {
    return dd(e, t, n);
  } finally {
    (qs = !1), (kn !== null || Cn !== null) && (hd(), cd());
  }
}
function Pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Uo = !1;
if (ut)
  try {
    var Vn = {};
    Object.defineProperty(Vn, "passive", {
      get: function () {
        Uo = !0;
      },
    }),
      window.addEventListener("test", Vn, Vn),
      window.removeEventListener("test", Vn, Vn);
  } catch {
    Uo = !1;
  }
function Ep(e, t, n, r, i, s, o, a, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var lr = !1,
  Hi = null,
  Ui = !1,
  Vo = null,
  kp = {
    onError: function (e) {
      (lr = !0), (Hi = e);
    },
  };
function Cp(e, t, n, r, i, s, o, a, c) {
  (lr = !1), (Hi = null), Ep.apply(kp, arguments);
}
function Ip(e, t, n, r, i, s, o, a, c) {
  if ((Cp.apply(this, arguments), lr)) {
    if (lr) {
      var d = Hi;
      (lr = !1), (Hi = null);
    } else throw Error(C(198));
    Ui || ((Ui = !0), (Vo = d));
  }
}
function ln(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function su(e) {
  if (ln(e) !== e) throw Error(C(188));
}
function Tp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ln(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return su(i), e;
        if (s === r) return su(i), t;
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function gd(e) {
  return (e = Tp(e)), e !== null ? md(e) : null;
}
function md(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = md(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vd = Ie.unstable_scheduleCallback,
  ou = Ie.unstable_cancelCallback,
  Rp = Ie.unstable_shouldYield,
  Op = Ie.unstable_requestPaint,
  q = Ie.unstable_now,
  Np = Ie.unstable_getCurrentPriorityLevel,
  Xl = Ie.unstable_ImmediatePriority,
  yd = Ie.unstable_UserBlockingPriority,
  Vi = Ie.unstable_NormalPriority,
  Lp = Ie.unstable_LowPriority,
  wd = Ie.unstable_IdlePriority,
  Ps = null,
  et = null;
function Mp(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Dp,
  zp = Math.log,
  Ap = Math.LN2;
function Dp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zp(e) / Ap) | 0)) | 0;
}
var ai = 64,
  ui = 4194304;
function nr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = nr(a)) : ((s &= o), s !== 0 && (r = nr(s)));
  } else (o = n & ~i), o !== 0 ? (r = nr(o)) : s !== 0 && (r = nr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function jp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Qe(s),
      a = 1 << o,
      c = i[o];
    c === -1
      ? (!(a & n) || a & r) && (i[o] = jp(a, t))
      : c <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function Qo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sd() {
  var e = ai;
  return (ai <<= 1), !(ai & 4194240) && (ai = 64), e;
}
function Js(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function br(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function $p(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Qe(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function bl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var W = 0;
function xd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pd,
  Gl,
  _d,
  Ed,
  kd,
  Yo = !1,
  ci = [],
  Ct = null,
  It = null,
  Tt = null,
  _r = new Map(),
  Er = new Map(),
  St = [],
  Bp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Er.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Zr(t)), t !== null && Gl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Wp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ct = Qn(Ct, e, t, n, r, i)), !0;
    case "dragenter":
      return (It = Qn(It, e, t, n, r, i)), !0;
    case "mouseover":
      return (Tt = Qn(Tt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return _r.set(s, Qn(_r.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Er.set(s, Qn(Er.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Cd(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pd(n)), t !== null)) {
          (e.blockedOn = t),
            kd(e.priority, function () {
              _d(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ti(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wo = r), n.target.dispatchEvent(r), (Wo = null);
    } else return (t = Zr(n)), t !== null && Gl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function au(e, t, n) {
  Ti(e) && n.delete(t);
}
function Hp() {
  (Yo = !1),
    Ct !== null && Ti(Ct) && (Ct = null),
    It !== null && Ti(It) && (It = null),
    Tt !== null && Ti(Tt) && (Tt = null),
    _r.forEach(au),
    Er.forEach(au);
}
function Yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yo ||
      ((Yo = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Hp)));
}
function kr(e) {
  function t(i) {
    return Yn(i, e);
  }
  if (0 < ci.length) {
    Yn(ci[0], e);
    for (var n = 1; n < ci.length; n++) {
      var r = ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ct !== null && Yn(Ct, e),
      It !== null && Yn(It, e),
      Tt !== null && Yn(Tt, e),
      _r.forEach(t),
      Er.forEach(t),
      n = 0;
    n < St.length;
    n++
  )
    (r = St[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
    Cd(n), n.blockedOn === null && St.shift();
}
var In = pt.ReactCurrentBatchConfig,
  Yi = !0;
function Up(e, t, n, r) {
  var i = W,
    s = In.transition;
  In.transition = null;
  try {
    (W = 1), Zl(e, t, n, r);
  } finally {
    (W = i), (In.transition = s);
  }
}
function Vp(e, t, n, r) {
  var i = W,
    s = In.transition;
  In.transition = null;
  try {
    (W = 4), Zl(e, t, n, r);
  } finally {
    (W = i), (In.transition = s);
  }
}
function Zl(e, t, n, r) {
  if (Yi) {
    var i = Xo(e, t, n, r);
    if (i === null) uo(e, t, r, Xi, n), lu(e, r);
    else if (Wp(i, e, t, n, r)) r.stopPropagation();
    else if ((lu(e, r), t & 4 && -1 < Bp.indexOf(e))) {
      for (; i !== null; ) {
        var s = Zr(i);
        if (
          (s !== null && Pd(s),
          (s = Xo(e, t, n, r)),
          s === null && uo(e, t, r, Xi, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else uo(e, t, r, null, n);
  }
}
var Xi = null;
function Xo(e, t, n, r) {
  if (((Xi = null), (e = Yl(r)), (e = Xt(e)), e !== null))
    if (((t = ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xi = e), null;
}
function Id(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Np()) {
        case Xl:
          return 1;
        case yd:
          return 4;
        case Vi:
        case Lp:
          return 16;
        case wd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null,
  Kl = null,
  Ri = null;
function Td() {
  if (Ri) return Ri;
  var e,
    t = Kl,
    n = t.length,
    r,
    i = "value" in Pt ? Pt.value : Pt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ri = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Oi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function di() {
  return !0;
}
function uu() {
  return !1;
}
function Re(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? di
        : uu),
      (this.isPropagationStopped = uu),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = di));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = di));
      },
      persist: function () {},
      isPersistent: di,
    }),
    t
  );
}
var Wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ql = Re(Wn),
  Gr = G({}, Wn, { view: 0, detail: 0 }),
  Qp = Re(Gr),
  eo,
  to,
  Xn,
  _s = G({}, Gr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xn &&
            (Xn && e.type === "mousemove"
              ? ((eo = e.screenX - Xn.screenX), (to = e.screenY - Xn.screenY))
              : (to = eo = 0),
            (Xn = e)),
          eo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : to;
    },
  }),
  cu = Re(_s),
  Yp = G({}, _s, { dataTransfer: 0 }),
  Xp = Re(Yp),
  bp = G({}, Gr, { relatedTarget: 0 }),
  no = Re(bp),
  Gp = G({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zp = Re(Gp),
  Kp = G({}, Wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qp = Re(Kp),
  Jp = G({}, Wn, { data: 0 }),
  du = Re(Jp),
  eg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  tg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ng = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function rg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ng[e]) ? !!t[e] : !1;
}
function Jl() {
  return rg;
}
var ig = G({}, Gr, {
    key: function (e) {
      if (e.key) {
        var t = eg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? tg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jl,
    charCode: function (e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Oi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sg = Re(ig),
  og = G({}, _s, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hu = Re(og),
  lg = G({}, Gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl,
  }),
  ag = Re(lg),
  ug = G({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cg = Re(ug),
  dg = G({}, _s, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hg = Re(dg),
  fg = [9, 13, 27, 32],
  ea = ut && "CompositionEvent" in window,
  ar = null;
ut && "documentMode" in document && (ar = document.documentMode);
var pg = ut && "TextEvent" in window && !ar,
  Rd = ut && (!ea || (ar && 8 < ar && 11 >= ar)),
  fu = " ",
  pu = !1;
function Od(e, t) {
  switch (e) {
    case "keyup":
      return fg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function gg(e, t) {
  switch (e) {
    case "compositionend":
      return Nd(t);
    case "keypress":
      return t.which !== 32 ? null : ((pu = !0), fu);
    case "textInput":
      return (e = t.data), e === fu && pu ? null : e;
    default:
      return null;
  }
}
function mg(e, t) {
  if (fn)
    return e === "compositionend" || (!ea && Od(e, t))
      ? ((e = Td()), (Ri = Kl = Pt = null), (fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vg[e.type] : t === "textarea";
}
function Ld(e, t, n, r) {
  ud(r),
    (t = bi(t, "onChange")),
    0 < t.length &&
      ((n = new ql("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ur = null,
  Cr = null;
function yg(e) {
  Ud(e, 0);
}
function Es(e) {
  var t = mn(e);
  if (nd(t)) return e;
}
function wg(e, t) {
  if (e === "change") return t;
}
var Md = !1;
if (ut) {
  var ro;
  if (ut) {
    var io = "oninput" in document;
    if (!io) {
      var mu = document.createElement("div");
      mu.setAttribute("oninput", "return;"),
        (io = typeof mu.oninput == "function");
    }
    ro = io;
  } else ro = !1;
  Md = ro && (!document.documentMode || 9 < document.documentMode);
}
function vu() {
  ur && (ur.detachEvent("onpropertychange", zd), (Cr = ur = null));
}
function zd(e) {
  if (e.propertyName === "value" && Es(Cr)) {
    var t = [];
    Ld(t, Cr, e, Yl(e)), fd(yg, t);
  }
}
function Sg(e, t, n) {
  e === "focusin"
    ? (vu(), (ur = t), (Cr = n), ur.attachEvent("onpropertychange", zd))
    : e === "focusout" && vu();
}
function xg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Es(Cr);
}
function Pg(e, t) {
  if (e === "click") return Es(t);
}
function _g(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function Eg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : Eg;
function Ir(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ro.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wu(e, t) {
  var n = yu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = yu(n);
  }
}
function Ad(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ad(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Dd() {
  for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wi(e.document);
  }
  return t;
}
function ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function kg(e) {
  var t = Dd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ad(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ta(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = wu(n, s));
        var o = wu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Cg = ut && "documentMode" in document && 11 >= document.documentMode,
  pn = null,
  bo = null,
  cr = null,
  Go = !1;
function Su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Go ||
    pn == null ||
    pn !== Wi(r) ||
    ((r = pn),
    "selectionStart" in r && ta(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (cr && Ir(cr, r)) ||
      ((cr = r),
      (r = bi(bo, "onSelect")),
      0 < r.length &&
        ((t = new ql("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pn))));
}
function hi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gn = {
    animationend: hi("Animation", "AnimationEnd"),
    animationiteration: hi("Animation", "AnimationIteration"),
    animationstart: hi("Animation", "AnimationStart"),
    transitionend: hi("Transition", "TransitionEnd"),
  },
  so = {},
  jd = {};
ut &&
  ((jd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gn.animationend.animation,
    delete gn.animationiteration.animation,
    delete gn.animationstart.animation),
  "TransitionEvent" in window || delete gn.transitionend.transition);
function ks(e) {
  if (so[e]) return so[e];
  if (!gn[e]) return e;
  var t = gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jd) return (so[e] = t[n]);
  return e;
}
var Fd = ks("animationend"),
  $d = ks("animationiteration"),
  Bd = ks("animationstart"),
  Wd = ks("transitionend"),
  Hd = new Map(),
  xu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ft(e, t) {
  Hd.set(e, t), on(t, [e]);
}
for (var oo = 0; oo < xu.length; oo++) {
  var lo = xu[oo],
    Ig = lo.toLowerCase(),
    Tg = lo[0].toUpperCase() + lo.slice(1);
  Ft(Ig, "on" + Tg);
}
Ft(Fd, "onAnimationEnd");
Ft($d, "onAnimationIteration");
Ft(Bd, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Wd, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
on(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
on(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
on(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
on(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var rr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Rg = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));
function Pu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ip(r, t, void 0, e), (e.currentTarget = null);
}
function Ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            c = a.instance,
            d = a.currentTarget;
          if (((a = a.listener), c !== s && i.isPropagationStopped())) break e;
          Pu(i, a, d), (s = c);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (c = a.instance),
            (d = a.currentTarget),
            (a = a.listener),
            c !== s && i.isPropagationStopped())
          )
            break e;
          Pu(i, a, d), (s = c);
        }
    }
  }
  if (Ui) throw ((e = Vo), (Ui = !1), (Vo = null), e);
}
function U(e, t) {
  var n = t[el];
  n === void 0 && (n = t[el] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vd(t, e, 2, !1), n.add(r));
}
function ao(e, t, n) {
  var r = 0;
  t && (r |= 4), Vd(n, e, r, t);
}
var fi = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[fi]) {
    (e[fi] = !0),
      Kc.forEach(function (n) {
        n !== "selectionchange" && (Rg.has(n) || ao(n, !1, e), ao(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fi] || ((t[fi] = !0), ao("selectionchange", !1, t));
  }
}
function Vd(e, t, n, r) {
  switch (Id(t)) {
    case 1:
      var i = Up;
      break;
    case 4:
      i = Vp;
      break;
    default:
      i = Zl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Uo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function uo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var c = o.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = o.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Xt(a)), o === null)) return;
          if (((c = o.tag), c === 5 || c === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  fd(function () {
    var d = s,
      v = Yl(n),
      g = [];
    e: {
      var y = Hd.get(e);
      if (y !== void 0) {
        var w = ql,
          P = e;
        switch (e) {
          case "keypress":
            if (Oi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = sg;
            break;
          case "focusin":
            (P = "focus"), (w = no);
            break;
          case "focusout":
            (P = "blur"), (w = no);
            break;
          case "beforeblur":
          case "afterblur":
            w = no;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Xp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = ag;
            break;
          case Fd:
          case $d:
          case Bd:
            w = Zp;
            break;
          case Wd:
            w = cg;
            break;
          case "scroll":
            w = Qp;
            break;
          case "wheel":
            w = hg;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = hu;
        }
        var _ = (t & 4) !== 0,
          T = !_ && e === "scroll",
          m = _ ? (y !== null ? y + "Capture" : null) : y;
        _ = [];
        for (var p = d, h; p !== null; ) {
          h = p;
          var l = h.stateNode;
          if (
            (h.tag === 5 &&
              l !== null &&
              ((h = l),
              m !== null && ((l = Pr(p, m)), l != null && _.push(Rr(p, l, h)))),
            T)
          )
            break;
          p = p.return;
        }
        0 < _.length &&
          ((y = new w(y, P, null, n, v)), g.push({ event: y, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Wo &&
            (P = n.relatedTarget || n.fromElement) &&
            (Xt(P) || P[ct]))
        )
          break e;
        if (
          (w || y) &&
          ((y =
            v.window === v
              ? v
              : (y = v.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          w
            ? ((P = n.relatedTarget || n.toElement),
              (w = d),
              (P = P ? Xt(P) : null),
              P !== null &&
                ((T = ln(P)), P !== T || (P.tag !== 5 && P.tag !== 6)) &&
                (P = null))
            : ((w = null), (P = d)),
          w !== P)
        ) {
          if (
            ((_ = cu),
            (l = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = hu),
              (l = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (T = w == null ? y : mn(w)),
            (h = P == null ? y : mn(P)),
            (y = new _(l, p + "leave", w, n, v)),
            (y.target = T),
            (y.relatedTarget = h),
            (l = null),
            Xt(v) === d &&
              ((_ = new _(m, p + "enter", P, n, v)),
              (_.target = h),
              (_.relatedTarget = T),
              (l = _)),
            (T = l),
            w && P)
          )
            t: {
              for (_ = w, m = P, p = 0, h = _; h; h = an(h)) p++;
              for (h = 0, l = m; l; l = an(l)) h++;
              for (; 0 < p - h; ) (_ = an(_)), p--;
              for (; 0 < h - p; ) (m = an(m)), h--;
              for (; p--; ) {
                if (_ === m || (m !== null && _ === m.alternate)) break t;
                (_ = an(_)), (m = an(m));
              }
              _ = null;
            }
          else _ = null;
          w !== null && _u(g, y, w, _, !1),
            P !== null && T !== null && _u(g, T, P, _, !0);
        }
      }
      e: {
        if (
          ((y = d ? mn(d) : window),
          (w = y.nodeName && y.nodeName.toLowerCase()),
          w === "select" || (w === "input" && y.type === "file"))
        )
          var u = wg;
        else if (gu(y))
          if (Md) u = _g;
          else {
            u = xg;
            var f = Sg;
          }
        else
          (w = y.nodeName) &&
            w.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (u = Pg);
        if (u && (u = u(e, d))) {
          Ld(g, u, n, v);
          break e;
        }
        f && f(e, y, d),
          e === "focusout" &&
            (f = y._wrapperState) &&
            f.controlled &&
            y.type === "number" &&
            Do(y, "number", y.value);
      }
      switch (((f = d ? mn(d) : window), e)) {
        case "focusin":
          (gu(f) || f.contentEditable === "true") &&
            ((pn = f), (bo = d), (cr = null));
          break;
        case "focusout":
          cr = bo = pn = null;
          break;
        case "mousedown":
          Go = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Go = !1), Su(g, n, v);
          break;
        case "selectionchange":
          if (Cg) break;
        case "keydown":
        case "keyup":
          Su(g, n, v);
      }
      var S;
      if (ea)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        fn
          ? Od(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (Rd &&
          n.locale !== "ko" &&
          (fn || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && fn && (S = Td())
            : ((Pt = v),
              (Kl = "value" in Pt ? Pt.value : Pt.textContent),
              (fn = !0))),
        (f = bi(d, x)),
        0 < f.length &&
          ((x = new du(x, e, null, n, v)),
          g.push({ event: x, listeners: f }),
          S ? (x.data = S) : ((S = Nd(n)), S !== null && (x.data = S)))),
        (S = pg ? gg(e, n) : mg(e, n)) &&
          ((d = bi(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new du("onBeforeInput", "beforeinput", null, n, v)),
            g.push({ event: v, listeners: d }),
            (v.data = S)));
    }
    Ud(g, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Pr(e, n)),
      s != null && r.unshift(Rr(e, s, i)),
      (s = Pr(e, t)),
      s != null && r.push(Rr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function an(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _u(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      c = a.alternate,
      d = a.stateNode;
    if (c !== null && c === r) break;
    a.tag === 5 &&
      d !== null &&
      ((a = d),
      i
        ? ((c = Pr(n, s)), c != null && o.unshift(Rr(n, c, a)))
        : i || ((c = Pr(n, s)), c != null && o.push(Rr(n, c, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Og = /\r\n?/g,
  Ng = /\u0000|\uFFFD/g;
function Eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Og,
      `
`
    )
    .replace(Ng, "");
}
function pi(e, t, n) {
  if (((t = Eu(t)), Eu(e) !== t && n)) throw Error(C(425));
}
function Gi() {}
var Zo = null,
  Ko = null;
function qo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Jo = typeof setTimeout == "function" ? setTimeout : void 0,
  Lg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ku = typeof Promise == "function" ? Promise : void 0,
  Mg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ku < "u"
      ? function (e) {
          return ku.resolve(null).then(e).catch(zg);
        }
      : Jo;
function zg(e) {
  setTimeout(function () {
    throw e;
  });
}
function co(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), kr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  kr(t);
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Cu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hn = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Hn,
  Or = "__reactProps$" + Hn,
  ct = "__reactContainer$" + Hn,
  el = "__reactEvents$" + Hn,
  Ag = "__reactListeners$" + Hn,
  Dg = "__reactHandles$" + Hn;
function Xt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ct] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Cu(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = Cu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[Je] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Cs(e) {
  return e[Or] || null;
}
var tl = [],
  vn = -1;
function $t(e) {
  return { current: e };
}
function V(e) {
  0 > vn || ((e.current = tl[vn]), (tl[vn] = null), vn--);
}
function H(e, t) {
  vn++, (tl[vn] = e.current), (e.current = t);
}
var jt = {},
  he = $t(jt),
  Se = $t(!1),
  Jt = jt;
function Mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Zi() {
  V(Se), V(he);
}
function Iu(e, t, n) {
  if (he.current !== jt) throw Error(C(168));
  H(he, t), H(Se, n);
}
function Qd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Sp(e) || "Unknown", i));
  return G({}, n, r);
}
function Ki(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (Jt = he.current),
    H(he, e),
    H(Se, Se.current),
    !0
  );
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Qd(e, t, Jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(Se),
      V(he),
      H(he, e))
    : V(Se),
    H(Se, n);
}
var st = null,
  Is = !1,
  ho = !1;
function Yd(e) {
  st === null ? (st = [e]) : st.push(e);
}
function jg(e) {
  (Is = !0), Yd(e);
}
function Bt() {
  if (!ho && st !== null) {
    ho = !0;
    var e = 0,
      t = W;
    try {
      var n = st;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Is = !1);
    } catch (i) {
      throw (st !== null && (st = st.slice(e + 1)), vd(Xl, Bt), i);
    } finally {
      (W = t), (ho = !1);
    }
  }
  return null;
}
var yn = [],
  wn = 0,
  qi = null,
  Ji = 0,
  Oe = [],
  Ne = 0,
  en = null,
  ot = 1,
  lt = "";
function Vt(e, t) {
  (yn[wn++] = Ji), (yn[wn++] = qi), (qi = e), (Ji = t);
}
function Xd(e, t, n) {
  (Oe[Ne++] = ot), (Oe[Ne++] = lt), (Oe[Ne++] = en), (en = e);
  var r = ot;
  e = lt;
  var i = 32 - Qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Qe(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ot = (1 << (32 - Qe(t) + i)) | (n << i) | r),
      (lt = s + e);
  } else (ot = (1 << s) | (n << i) | r), (lt = e);
}
function na(e) {
  e.return !== null && (Vt(e, 1), Xd(e, 1, 0));
}
function ra(e) {
  for (; e === qi; )
    (qi = yn[--wn]), (yn[wn] = null), (Ji = yn[--wn]), (yn[wn] = null);
  for (; e === en; )
    (en = Oe[--Ne]),
      (Oe[Ne] = null),
      (lt = Oe[--Ne]),
      (Oe[Ne] = null),
      (ot = Oe[--Ne]),
      (Oe[Ne] = null);
}
var Ce = null,
  ke = null,
  Q = !1,
  He = null;
function bd(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ru(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (ke = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = en !== null ? { id: ot, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rl(e) {
  if (Q) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Ru(e, t)) {
        if (nl(e)) throw Error(C(418));
        t = Rt(n.nextSibling);
        var r = Ce;
        t && Ru(e, t)
          ? bd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ce = e));
      }
    } else {
      if (nl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Ce = e);
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function gi(e) {
  if (e !== Ce) return !1;
  if (!Q) return Ou(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qo(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (nl(e)) throw (Gd(), Error(C(418)));
    for (; t; ) bd(e, t), (t = Rt(t.nextSibling));
  }
  if ((Ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Ce ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Gd() {
  for (var e = ke; e; ) e = Rt(e.nextSibling);
}
function zn() {
  (ke = Ce = null), (Q = !1);
}
function ia(e) {
  He === null ? (He = [e]) : He.push(e);
}
var Fg = pt.ReactCurrentBatchConfig;
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var es = $t(null),
  ts = null,
  Sn = null,
  sa = null;
function oa() {
  sa = Sn = ts = null;
}
function la(e) {
  var t = es.current;
  V(es), (e._currentValue = t);
}
function il(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Tn(e, t) {
  (ts = e),
    (sa = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function je(e) {
  var t = e._currentValue;
  if (sa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (ts === null) throw Error(C(308));
      (Sn = e), (ts.dependencies = { lanes: 0, firstContext: e });
    } else Sn = Sn.next = e;
  return t;
}
var bt = null;
function aa(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
function Zd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), aa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function at(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), aa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function Ni(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ns(e, t, n, r) {
  var i = e.updateQueue;
  yt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var c = a,
      d = c.next;
    (c.next = null), o === null ? (s = d) : (o.next = d), (o = c);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (a = v.lastBaseUpdate),
      a !== o &&
        (a === null ? (v.firstBaseUpdate = d) : (a.next = d),
        (v.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var g = i.baseState;
    (o = 0), (v = d = c = null), (a = s);
    do {
      var y = a.lane,
        w = a.eventTime;
      if ((r & y) === y) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var P = e,
            _ = a;
          switch (((y = t), (w = n), _.tag)) {
            case 1:
              if (((P = _.payload), typeof P == "function")) {
                g = P.call(w, g, y);
                break e;
              }
              g = P;
              break e;
            case 3:
              P.flags = (P.flags & -65537) | 128;
            case 0:
              if (
                ((P = _.payload),
                (y = typeof P == "function" ? P.call(w, g, y) : P),
                y == null)
              )
                break e;
              g = G({}, g, y);
              break e;
            case 2:
              yt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (y = i.effects),
          y === null ? (i.effects = [a]) : y.push(a));
      } else
        (w = {
          eventTime: w,
          lane: y,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          v === null ? ((d = v = w), (c = g)) : (v = v.next = w),
          (o |= y);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (y = a),
          (a = y.next),
          (y.next = null),
          (i.lastBaseUpdate = y),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (c = g),
      (i.baseState = c),
      (i.firstBaseUpdate = d),
      (i.lastBaseUpdate = v),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (nn |= o), (e.lanes = o), (e.memoizedState = g);
  }
}
function Lu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var qd = new Zc.Component().refs;
function sl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ts = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      i = Lt(e),
      s = at(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Ot(e, s, i)),
      t !== null && (Ye(t, e, i, r), Ni(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      i = Lt(e),
      s = at(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ot(e, s, i)),
      t !== null && (Ye(t, e, i, r), Ni(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pe(),
      r = Lt(e),
      i = at(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ot(e, i, r)),
      t !== null && (Ye(t, e, r, n), Ni(t, e, r));
  },
};
function Mu(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ir(n, r) || !Ir(i, s)
      : !0
  );
}
function Jd(e, t, n) {
  var r = !1,
    i = jt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = je(s))
      : ((i = xe(t) ? Jt : he.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Mn(e, i) : jt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ts),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function zu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ts.enqueueReplaceState(t, t.state, null);
}
function ol(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = qd), ua(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = je(s))
    : ((s = xe(t) ? Jt : he.current), (i.context = Mn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (sl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ts.enqueueReplaceState(i, i.state, null),
      ns(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function bn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            a === qd && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function mi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function eh(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Mt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, h, l) {
    return p === null || p.tag !== 6
      ? ((p = wo(h, m.mode, l)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function c(m, p, h, l) {
    var u = h.type;
    return u === hn
      ? v(m, p, h.props.children, l, h.key)
      : p !== null &&
        (p.elementType === u ||
          (typeof u == "object" &&
            u !== null &&
            u.$$typeof === vt &&
            Au(u) === p.type))
      ? ((l = i(p, h.props)), (l.ref = bn(m, p, h)), (l.return = m), l)
      : ((l = ji(h.type, h.key, h.props, null, m.mode, l)),
        (l.ref = bn(m, p, h)),
        (l.return = m),
        l);
  }
  function d(m, p, h, l) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = So(h, m.mode, l)), (p.return = m), p)
      : ((p = i(p, h.children || [])), (p.return = m), p);
  }
  function v(m, p, h, l, u) {
    return p === null || p.tag !== 7
      ? ((p = qt(h, m.mode, l, u)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function g(m, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = wo("" + p, m.mode, h)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case si:
          return (
            (h = ji(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = bn(m, null, p)),
            (h.return = m),
            h
          );
        case dn:
          return (p = So(p, m.mode, h)), (p.return = m), p;
        case vt:
          var l = p._init;
          return g(m, l(p._payload), h);
      }
      if (tr(p) || Un(p))
        return (p = qt(p, m.mode, h, null)), (p.return = m), p;
      mi(m, p);
    }
    return null;
  }
  function y(m, p, h, l) {
    var u = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return u !== null ? null : a(m, p, "" + h, l);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case si:
          return h.key === u ? c(m, p, h, l) : null;
        case dn:
          return h.key === u ? d(m, p, h, l) : null;
        case vt:
          return (u = h._init), y(m, p, u(h._payload), l);
      }
      if (tr(h) || Un(h)) return u !== null ? null : v(m, p, h, l, null);
      mi(m, h);
    }
    return null;
  }
  function w(m, p, h, l, u) {
    if ((typeof l == "string" && l !== "") || typeof l == "number")
      return (m = m.get(h) || null), a(p, m, "" + l, u);
    if (typeof l == "object" && l !== null) {
      switch (l.$$typeof) {
        case si:
          return (m = m.get(l.key === null ? h : l.key) || null), c(p, m, l, u);
        case dn:
          return (m = m.get(l.key === null ? h : l.key) || null), d(p, m, l, u);
        case vt:
          var f = l._init;
          return w(m, p, h, f(l._payload), u);
      }
      if (tr(l) || Un(l)) return (m = m.get(h) || null), v(p, m, l, u, null);
      mi(p, l);
    }
    return null;
  }
  function P(m, p, h, l) {
    for (
      var u = null, f = null, S = p, x = (p = 0), k = null;
      S !== null && x < h.length;
      x++
    ) {
      S.index > x ? ((k = S), (S = null)) : (k = S.sibling);
      var I = y(m, S, h[x], l);
      if (I === null) {
        S === null && (S = k);
        break;
      }
      e && S && I.alternate === null && t(m, S),
        (p = s(I, p, x)),
        f === null ? (u = I) : (f.sibling = I),
        (f = I),
        (S = k);
    }
    if (x === h.length) return n(m, S), Q && Vt(m, x), u;
    if (S === null) {
      for (; x < h.length; x++)
        (S = g(m, h[x], l)),
          S !== null &&
            ((p = s(S, p, x)), f === null ? (u = S) : (f.sibling = S), (f = S));
      return Q && Vt(m, x), u;
    }
    for (S = r(m, S); x < h.length; x++)
      (k = w(S, m, x, h[x], l)),
        k !== null &&
          (e && k.alternate !== null && S.delete(k.key === null ? x : k.key),
          (p = s(k, p, x)),
          f === null ? (u = k) : (f.sibling = k),
          (f = k));
    return (
      e &&
        S.forEach(function (N) {
          return t(m, N);
        }),
      Q && Vt(m, x),
      u
    );
  }
  function _(m, p, h, l) {
    var u = Un(h);
    if (typeof u != "function") throw Error(C(150));
    if (((h = u.call(h)), h == null)) throw Error(C(151));
    for (
      var f = (u = null), S = p, x = (p = 0), k = null, I = h.next();
      S !== null && !I.done;
      x++, I = h.next()
    ) {
      S.index > x ? ((k = S), (S = null)) : (k = S.sibling);
      var N = y(m, S, I.value, l);
      if (N === null) {
        S === null && (S = k);
        break;
      }
      e && S && N.alternate === null && t(m, S),
        (p = s(N, p, x)),
        f === null ? (u = N) : (f.sibling = N),
        (f = N),
        (S = k);
    }
    if (I.done) return n(m, S), Q && Vt(m, x), u;
    if (S === null) {
      for (; !I.done; x++, I = h.next())
        (I = g(m, I.value, l)),
          I !== null &&
            ((p = s(I, p, x)), f === null ? (u = I) : (f.sibling = I), (f = I));
      return Q && Vt(m, x), u;
    }
    for (S = r(m, S); !I.done; x++, I = h.next())
      (I = w(S, m, x, I.value, l)),
        I !== null &&
          (e && I.alternate !== null && S.delete(I.key === null ? x : I.key),
          (p = s(I, p, x)),
          f === null ? (u = I) : (f.sibling = I),
          (f = I));
    return (
      e &&
        S.forEach(function (j) {
          return t(m, j);
        }),
      Q && Vt(m, x),
      u
    );
  }
  function T(m, p, h, l) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === hn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case si:
          e: {
            for (var u = h.key, f = p; f !== null; ) {
              if (f.key === u) {
                if (((u = h.type), u === hn)) {
                  if (f.tag === 7) {
                    n(m, f.sibling),
                      (p = i(f, h.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  f.elementType === u ||
                  (typeof u == "object" &&
                    u !== null &&
                    u.$$typeof === vt &&
                    Au(u) === f.type)
                ) {
                  n(m, f.sibling),
                    (p = i(f, h.props)),
                    (p.ref = bn(m, f, h)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, f);
                break;
              } else t(m, f);
              f = f.sibling;
            }
            h.type === hn
              ? ((p = qt(h.props.children, m.mode, l, h.key)),
                (p.return = m),
                (m = p))
              : ((l = ji(h.type, h.key, h.props, null, m.mode, l)),
                (l.ref = bn(m, p, h)),
                (l.return = m),
                (m = l));
          }
          return o(m);
        case dn:
          e: {
            for (f = h.key; p !== null; ) {
              if (p.key === f)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = So(h, m.mode, l)), (p.return = m), (m = p);
          }
          return o(m);
        case vt:
          return (f = h._init), T(m, p, f(h._payload), l);
      }
      if (tr(h)) return P(m, p, h, l);
      if (Un(h)) return _(m, p, h, l);
      mi(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = wo(h, m.mode, l)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return T;
}
var An = eh(!0),
  th = eh(!1),
  Kr = {},
  tt = $t(Kr),
  Nr = $t(Kr),
  Lr = $t(Kr);
function Gt(e) {
  if (e === Kr) throw Error(C(174));
  return e;
}
function ca(e, t) {
  switch ((H(Lr, t), H(Nr, e), H(tt, Kr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fo(t, e));
  }
  V(tt), H(tt, t);
}
function Dn() {
  V(tt), V(Nr), V(Lr);
}
function nh(e) {
  Gt(Lr.current);
  var t = Gt(tt.current),
    n = Fo(t, e.type);
  t !== n && (H(Nr, e), H(tt, n));
}
function da(e) {
  Nr.current === e && (V(tt), V(Nr));
}
var Y = $t(0);
function rs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fo = [];
function ha() {
  for (var e = 0; e < fo.length; e++)
    fo[e]._workInProgressVersionPrimary = null;
  fo.length = 0;
}
var Li = pt.ReactCurrentDispatcher,
  po = pt.ReactCurrentBatchConfig,
  tn = 0,
  b = null,
  ee = null,
  re = null,
  is = !1,
  dr = !1,
  Mr = 0,
  $g = 0;
function ue() {
  throw Error(C(321));
}
function fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function pa(e, t, n, r, i, s) {
  if (
    ((tn = s),
    (b = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Li.current = e === null || e.memoizedState === null ? Ug : Vg),
    (e = n(r, i)),
    dr)
  ) {
    s = 0;
    do {
      if (((dr = !1), (Mr = 0), 25 <= s)) throw Error(C(301));
      (s += 1),
        (re = ee = null),
        (t.updateQueue = null),
        (Li.current = Qg),
        (e = n(r, i));
    } while (dr);
  }
  if (
    ((Li.current = ss),
    (t = ee !== null && ee.next !== null),
    (tn = 0),
    (re = ee = b = null),
    (is = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function ga() {
  var e = Mr !== 0;
  return (Mr = 0), e;
}
function Ke() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (b.memoizedState = re = e) : (re = re.next = e), re;
}
function Fe() {
  if (ee === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? b.memoizedState : re.next;
  if (t !== null) (re = t), (ee = e);
  else {
    if (e === null) throw Error(C(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      re === null ? (b.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function go(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ee,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      c = null,
      d = s;
    do {
      var v = d.lane;
      if ((tn & v) === v)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var g = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((a = c = g), (o = r)) : (c = c.next = g),
          (b.lanes |= v),
          (nn |= v);
      }
      d = d.next;
    } while (d !== null && d !== s);
    c === null ? (o = r) : (c.next = a),
      Xe(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (b.lanes |= s), (nn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mo(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Xe(s, t.memoizedState) || (we = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function rh() {}
function ih(e, t) {
  var n = b,
    r = Fe(),
    i = t(),
    s = !Xe(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (we = !0)),
    (r = r.queue),
    ma(lh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ar(9, oh.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(C(349));
    tn & 30 || sh(n, t, i);
  }
  return i;
}
function sh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function oh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ah(t) && uh(e);
}
function lh(e, t, n) {
  return n(function () {
    ah(t) && uh(e);
  });
}
function ah(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function uh(e) {
  var t = dt(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function Du(e) {
  var t = Ke();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hg.bind(null, b, e)),
    [t.memoizedState, e]
  );
}
function Ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ch() {
  return Fe().memoizedState;
}
function Mi(e, t, n, r) {
  var i = Ke();
  (b.flags |= e),
    (i.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rs(e, t, n, r) {
  var i = Fe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ee !== null) {
    var o = ee.memoizedState;
    if (((s = o.destroy), r !== null && fa(r, o.deps))) {
      i.memoizedState = Ar(t, n, s, r);
      return;
    }
  }
  (b.flags |= e), (i.memoizedState = Ar(1 | t, n, s, r));
}
function ju(e, t) {
  return Mi(8390656, 8, e, t);
}
function ma(e, t) {
  return Rs(2048, 8, e, t);
}
function dh(e, t) {
  return Rs(4, 2, e, t);
}
function hh(e, t) {
  return Rs(4, 4, e, t);
}
function fh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ph(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Rs(4, 4, fh.bind(null, t, e), n)
  );
}
function va() {}
function gh(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mh(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vh(e, t, n) {
  return tn & 21
    ? (Xe(n, t) || ((n = Sd()), (b.lanes |= n), (nn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function Bg(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = po.transition;
  po.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (po.transition = r);
  }
}
function yh() {
  return Fe().memoizedState;
}
function Wg(e, t, n) {
  var r = Lt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    wh(e))
  )
    Sh(t, n);
  else if (((n = Zd(e, t, n, r)), n !== null)) {
    var i = pe();
    Ye(n, e, r, i), xh(n, t, r);
  }
}
function Hg(e, t, n) {
  var r = Lt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wh(e)) Sh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Xe(a, o))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), aa(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zd(e, t, i, r)),
      n !== null && ((i = pe()), Ye(n, e, r, i), xh(n, t, r));
  }
}
function wh(e) {
  var t = e.alternate;
  return e === b || (t !== null && t === b);
}
function Sh(e, t) {
  dr = is = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function xh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
  }
}
var ss = {
    readContext: je,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  Ug = {
    readContext: je,
    useCallback: function (e, t) {
      return (Ke().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: je,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mi(4194308, 4, fh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ke();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ke();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Wg.bind(null, b, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ke();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Du,
    useDebugValue: va,
    useDeferredValue: function (e) {
      return (Ke().memoizedState = e);
    },
    useTransition: function () {
      var e = Du(!1),
        t = e[0];
      return (e = Bg.bind(null, e[1])), (Ke().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = b,
        i = Ke();
      if (Q) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(C(349));
        tn & 30 || sh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        ju(lh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ar(9, oh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ke(),
        t = ie.identifierPrefix;
      if (Q) {
        var n = lt,
          r = ot;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Mr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $g++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vg = {
    readContext: je,
    useCallback: gh,
    useContext: je,
    useEffect: ma,
    useImperativeHandle: ph,
    useInsertionEffect: dh,
    useLayoutEffect: hh,
    useMemo: mh,
    useReducer: go,
    useRef: ch,
    useState: function () {
      return go(zr);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = Fe();
      return vh(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = go(zr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: rh,
    useSyncExternalStore: ih,
    useId: yh,
    unstable_isNewReconciler: !1,
  },
  Qg = {
    readContext: je,
    useCallback: gh,
    useContext: je,
    useEffect: ma,
    useImperativeHandle: ph,
    useInsertionEffect: dh,
    useLayoutEffect: hh,
    useMemo: mh,
    useReducer: mo,
    useRef: ch,
    useState: function () {
      return mo(zr);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = Fe();
      return ee === null ? (t.memoizedState = e) : vh(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = mo(zr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: rh,
    useSyncExternalStore: ih,
    useId: yh,
    unstable_isNewReconciler: !1,
  };
function jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function vo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ll(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yg = typeof WeakMap == "function" ? WeakMap : Map;
function Ph(e, t, n) {
  (n = at(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ls || ((ls = !0), (vl = r)), ll(e, t);
    }),
    n
  );
}
function _h(e, t, n) {
  (n = at(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ll(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ll(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Fu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = om.bind(null, e, t, n)), t.then(e, e));
}
function $u(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = at(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xg = pt.ReactCurrentOwner,
  we = !1;
function fe(e, t, n, r) {
  t.child = e === null ? th(t, null, n, r) : An(t, e.child, n, r);
}
function Wu(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Tn(t, i),
    (r = pa(e, t, n, r, s, i)),
    (n = ga()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : (Q && n && na(t), (t.flags |= 1), fe(e, t, r, i), t.child)
  );
}
function Hu(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ka(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Eh(e, t, s, r, i))
      : ((e = ji(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ir), n(o, r) && e.ref === t.ref)
    )
      return ht(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Mt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Eh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ir(s, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), ht(e, t, i);
  }
  return al(e, t, n, r, i);
}
function kh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(Pn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(Pn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        H(Pn, _e),
        (_e |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(Pn, _e),
      (_e |= r);
  return fe(e, t, i, n), t.child;
}
function Ch(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function al(e, t, n, r, i) {
  var s = xe(n) ? Jt : he.current;
  return (
    (s = Mn(t, s)),
    Tn(t, i),
    (n = pa(e, t, n, r, s, i)),
    (r = ga()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : (Q && r && na(t), (t.flags |= 1), fe(e, t, n, i), t.child)
  );
}
function Uu(e, t, n, r, i) {
  if (xe(n)) {
    var s = !0;
    Ki(t);
  } else s = !1;
  if ((Tn(t, i), t.stateNode === null))
    zi(e, t), Jd(t, n, r), ol(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var c = o.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = je(d))
      : ((d = xe(n) ? Jt : he.current), (d = Mn(t, d)));
    var v = n.getDerivedStateFromProps,
      g =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || c !== d) && zu(t, o, r, d)),
      (yt = !1);
    var y = t.memoizedState;
    (o.state = y),
      ns(t, r, o, i),
      (c = t.memoizedState),
      a !== r || y !== c || Se.current || yt
        ? (typeof v == "function" && (sl(t, n, v, r), (c = t.memoizedState)),
          (a = yt || Mu(t, n, a, r, y, c, d))
            ? (g ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (o.props = r),
          (o.state = c),
          (o.context = d),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Kd(e, t),
      (a = t.memoizedProps),
      (d = t.type === t.elementType ? a : Be(t.type, a)),
      (o.props = d),
      (g = t.pendingProps),
      (y = o.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = je(c))
        : ((c = xe(n) ? Jt : he.current), (c = Mn(t, c)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== g || y !== c) && zu(t, o, r, c)),
      (yt = !1),
      (y = t.memoizedState),
      (o.state = y),
      ns(t, r, o, i);
    var P = t.memoizedState;
    a !== g || y !== P || Se.current || yt
      ? (typeof w == "function" && (sl(t, n, w, r), (P = t.memoizedState)),
        (d = yt || Mu(t, n, d, r, y, P, c) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, P, c),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, P, c)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = P)),
        (o.props = r),
        (o.state = P),
        (o.context = c),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ul(e, t, n, r, s, i);
}
function ul(e, t, n, r, i, s) {
  Ch(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Tu(t, n, !1), ht(e, t, s);
  (r = t.stateNode), (Xg.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = An(t, e.child, null, s)), (t.child = An(t, null, a, s)))
      : fe(e, t, a, s),
    (t.memoizedState = r.state),
    i && Tu(t, n, !0),
    t.child
  );
}
function Ih(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Iu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Iu(e, t.context, !1),
    ca(e, t.containerInfo);
}
function Vu(e, t, n, r, i) {
  return zn(), ia(i), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var cl = { dehydrated: null, treeContext: null, retryLane: 0 };
function dl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Th(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    H(Y, i & 1),
    e === null)
  )
    return (
      rl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ls(o, r, 0, null)),
              (e = qt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = dl(n)),
              (t.memoizedState = cl),
              e)
            : ya(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return bg(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Mt(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Mt(a, s)) : ((s = qt(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? dl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = cl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Mt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ya(e, t) {
  return (
    (t = Ls({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vi(e, t, n, r) {
  return (
    r !== null && ia(r),
    An(t, e.child, null, n),
    (e = ya(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bg(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vo(Error(C(422)))), vi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Ls({ mode: "visible", children: r.children }, i, 0, null)),
        (s = qt(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && An(t, e.child, null, o),
        (t.child.memoizedState = dl(o)),
        (t.memoizedState = cl),
        s);
  if (!(t.mode & 1)) return vi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(C(419))), (r = vo(s, r, void 0)), vi(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), we || a)) {
    if (((r = ie), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), dt(e, i), Ye(r, e, i, -1));
    }
    return Ea(), (r = vo(Error(C(421)))), vi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = lm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ke = Rt(i.nextSibling)),
      (Ce = t),
      (Q = !0),
      (He = null),
      e !== null &&
        ((Oe[Ne++] = ot),
        (Oe[Ne++] = lt),
        (Oe[Ne++] = en),
        (ot = e.id),
        (lt = e.overflow),
        (en = t)),
      (t = ya(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), il(e.return, t, n);
}
function yo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Rh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((fe(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
        else if (e.tag === 19) Qu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && rs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          yo(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && rs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        yo(t, !0, n, null, s);
        break;
      case "together":
        yo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (nn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Gg(e, t, n) {
  switch (t.tag) {
    case 3:
      Ih(t), zn();
      break;
    case 5:
      nh(t);
      break;
    case 1:
      xe(t.type) && Ki(t);
      break;
    case 4:
      ca(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      H(es, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Th(e, t, n)
          : (H(Y, Y.current & 1),
            (e = ht(e, t, n)),
            e !== null ? e.sibling : null);
      H(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        H(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kh(e, t, n);
  }
  return ht(e, t, n);
}
var Oh, hl, Nh, Lh;
Oh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hl = function () {};
Nh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Gt(tt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = zo(e, i)), (r = zo(e, r)), (s = []);
        break;
      case "select":
        (i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = jo(e, i)), (r = jo(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gi);
    }
    $o(n, r);
    var o;
    n = null;
    for (d in i)
      if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var a = i[d];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Sr.hasOwnProperty(d)
              ? s || (s = [])
              : (s = s || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (
        ((a = i != null ? i[d] : void 0),
        r.hasOwnProperty(d) && c !== a && (c != null || a != null))
      )
        if (d === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (c && c.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in c)
              c.hasOwnProperty(o) &&
                a[o] !== c[o] &&
                (n || (n = {}), (n[o] = c[o]));
          } else n || (s || (s = []), s.push(d, n)), (n = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (a = a ? a.__html : void 0),
              c != null && a !== c && (s = s || []).push(d, c))
            : d === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (s = s || []).push(d, "" + c)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Sr.hasOwnProperty(d)
                ? (c != null && d === "onScroll" && U("scroll", e),
                  s || a === c || (s = []))
                : (s = s || []).push(d, c));
    }
    n && (s = s || []).push("style", n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Lh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gn(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Zg(e, t, n) {
  var r = t.pendingProps;
  switch ((ra(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ce(t), null;
    case 1:
      return xe(t.type) && Zi(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dn(),
        V(Se),
        V(he),
        ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), He !== null && (Sl(He), (He = null)))),
        hl(e, t),
        ce(t),
        null
      );
    case 5:
      da(t);
      var i = Gt(Lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Nh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ce(t), null;
        }
        if (((e = Gt(tt.current)), gi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Je] = t), (r[Or] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < rr.length; i++) U(rr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              eu(r, s), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              nu(r, s), U("invalid", r);
          }
          $o(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Sr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              oi(r), tu(r, s, !0);
              break;
            case "textarea":
              oi(r), ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Gi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Je] = t),
            (e[Or] = r),
            Oh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Bo(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < rr.length; i++) U(rr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                eu(e, r), (i = zo(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                nu(e, r), (i = jo(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            $o(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var c = a[s];
                s === "style"
                  ? ad(e, c)
                  : s === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && od(e, c))
                  : s === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && xr(e, c)
                    : typeof c == "number" && xr(e, "" + c)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Sr.hasOwnProperty(s)
                      ? c != null && s === "onScroll" && U("scroll", e)
                      : c != null && Hl(e, s, c, o));
              }
            switch (n) {
              case "input":
                oi(e), tu(e, r, !1);
                break;
              case "textarea":
                oi(e), ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? En(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      En(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Gi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Lh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Gt(Lr.current)), Gt(tt.current), gi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (s = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                pi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (V(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && ke !== null && t.mode & 1 && !(t.flags & 128))
          Gd(), zn(), (t.flags |= 98560), (s = !1);
        else if (((s = gi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[Je] = t;
          } else
            zn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (s = !1);
        } else He !== null && (Sl(He), (He = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? te === 0 && (te = 3) : Ea())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        Dn(), hl(e, t), e === null && Tr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return la(t.type._context), ce(t), null;
    case 17:
      return xe(t.type) && Zi(), ce(t), null;
    case 19:
      if ((V(Y), (s = t.memoizedState), s === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Gn(s, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = rs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Gn(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            q() > Fn &&
            ((t.flags |= 128), (r = !0), Gn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Gn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Q)
            )
              return ce(t), null;
          } else
            2 * q() - s.renderingStartTime > Fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Gn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = q()),
          (t.sibling = null),
          (n = Y.current),
          H(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        _a(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Kg(e, t) {
  switch ((ra(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && Zi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dn(),
        V(Se),
        V(he),
        ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return da(t), null;
    case 13:
      if ((V(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        zn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(Y), null;
    case 4:
      return Dn(), null;
    case 10:
      return la(t.type._context), null;
    case 22:
    case 23:
      return _a(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yi = !1,
  de = !1,
  qg = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function fl(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Yu = !1;
function Jg(e, t) {
  if (((Zo = Yi), (e = Dd()), ta(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            c = -1,
            d = 0,
            v = 0,
            g = e,
            y = null;
          t: for (;;) {
            for (
              var w;
              g !== n || (i !== 0 && g.nodeType !== 3) || (a = o + i),
                g !== s || (r !== 0 && g.nodeType !== 3) || (c = o + r),
                g.nodeType === 3 && (o += g.nodeValue.length),
                (w = g.firstChild) !== null;

            )
              (y = g), (g = w);
            for (;;) {
              if (g === e) break t;
              if (
                (y === n && ++d === i && (a = o),
                y === s && ++v === r && (c = o),
                (w = g.nextSibling) !== null)
              )
                break;
              (g = y), (y = g.parentNode);
            }
            g = w;
          }
          n = a === -1 || c === -1 ? null : { start: a, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ko = { focusedElem: e, selectionRange: n }, Yi = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var P = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (P !== null) {
                  var _ = P.memoizedProps,
                    T = P.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Be(t.type, _),
                      T
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (l) {
          Z(t, t.return, l);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (P = Yu), (Yu = !1), P;
}
function hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && fl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Os(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Mh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Mh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[Or], delete t[el], delete t[Ag], delete t[Dg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gl(e, t, n), e = e.sibling; e !== null; ) gl(e, t, n), (e = e.sibling);
}
function ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ml(e, t, n), e = e.sibling; e !== null; ) ml(e, t, n), (e = e.sibling);
}
var oe = null,
  We = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) Ah(e, t, n), (n = n.sibling);
}
function Ah(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Ps, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || xn(n, t);
    case 6:
      var r = oe,
        i = We;
      (oe = null),
        gt(e, t, n),
        (oe = r),
        (We = i),
        oe !== null &&
          (We
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (We
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? co(e.parentNode, n)
              : e.nodeType === 1 && co(e, n),
            kr(e))
          : co(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (i = We),
        (oe = n.stateNode.containerInfo),
        (We = !0),
        gt(e, t, n),
        (oe = r),
        (We = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && fl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Z(n, t, a);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), gt(e, t, n), (de = r))
        : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qg()),
      t.forEach(function (r) {
        var i = am.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (oe = a.stateNode), (We = !1);
              break e;
            case 3:
              (oe = a.stateNode.containerInfo), (We = !0);
              break e;
            case 4:
              (oe = a.stateNode.containerInfo), (We = !0);
              break e;
          }
          a = a.return;
        }
        if (oe === null) throw Error(C(160));
        Ah(s, o, i), (oe = null), (We = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (d) {
        Z(i, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Dh(t, e), (t = t.sibling);
}
function Dh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), Ze(e), r & 4)) {
        try {
          hr(3, e, e.return), Os(3, e);
        } catch (_) {
          Z(e, e.return, _);
        }
        try {
          hr(5, e, e.return);
        } catch (_) {
          Z(e, e.return, _);
        }
      }
      break;
    case 1:
      $e(t, e), Ze(e), r & 512 && n !== null && xn(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        Ze(e),
        r & 512 && n !== null && xn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          xr(i, "");
        } catch (_) {
          Z(e, e.return, _);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && rd(i, s),
              Bo(a, o);
            var d = Bo(a, s);
            for (o = 0; o < c.length; o += 2) {
              var v = c[o],
                g = c[o + 1];
              v === "style"
                ? ad(i, g)
                : v === "dangerouslySetInnerHTML"
                ? od(i, g)
                : v === "children"
                ? xr(i, g)
                : Hl(i, v, g, d);
            }
            switch (a) {
              case "input":
                Ao(i, s);
                break;
              case "textarea":
                id(i, s);
                break;
              case "select":
                var y = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var w = s.value;
                w != null
                  ? En(i, !!s.multiple, w, !1)
                  : y !== !!s.multiple &&
                    (s.defaultValue != null
                      ? En(i, !!s.multiple, s.defaultValue, !0)
                      : En(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Or] = s;
          } catch (_) {
            Z(e, e.return, _);
          }
      }
      break;
    case 6:
      if (($e(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (_) {
          Z(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          kr(t.containerInfo);
        } catch (_) {
          Z(e, e.return, _);
        }
      break;
    case 4:
      $e(t, e), Ze(e);
      break;
    case 13:
      $e(t, e),
        Ze(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xa = q())),
        r & 4 && bu(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (d = de) || v), $e(t, e), (de = d)) : $e(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (L = e, v = e.child; v !== null; ) {
            for (g = L = v; L !== null; ) {
              switch (((y = L), (w = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, y, y.return);
                  break;
                case 1:
                  xn(y, y.return);
                  var P = y.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (P.props = t.memoizedProps),
                        (P.state = t.memoizedState),
                        P.componentWillUnmount();
                    } catch (_) {
                      Z(r, n, _);
                    }
                  }
                  break;
                case 5:
                  xn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Zu(g);
                    continue;
                  }
              }
              w !== null ? ((w.return = y), (L = w)) : Zu(g);
            }
            v = v.sibling;
          }
        e: for (v = null, g = e; ; ) {
          if (g.tag === 5) {
            if (v === null) {
              v = g;
              try {
                (i = g.stateNode),
                  d
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = g.stateNode),
                      (c = g.memoizedProps.style),
                      (o =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (a.style.display = ld("display", o)));
              } catch (_) {
                Z(e, e.return, _);
              }
            }
          } else if (g.tag === 6) {
            if (v === null)
              try {
                g.stateNode.nodeValue = d ? "" : g.memoizedProps;
              } catch (_) {
                Z(e, e.return, _);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            v === g && (v = null), (g = g.return);
          }
          v === g && (v = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), Ze(e), r & 4 && bu(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (xr(i, ""), (r.flags &= -33));
          var s = Xu(e);
          ml(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Xu(e);
          gl(e, a, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (c) {
      Z(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function em(e, t, n) {
  (L = e), jh(e);
}
function jh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || yi;
      if (!o) {
        var a = i.alternate,
          c = (a !== null && a.memoizedState !== null) || de;
        a = yi;
        var d = de;
        if (((yi = o), (de = c) && !d))
          for (L = i; L !== null; )
            (o = L),
              (c = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ku(i)
                : c !== null
                ? ((c.return = o), (L = c))
                : Ku(i);
        for (; s !== null; ) (L = s), jh(s), (s = s.sibling);
        (L = i), (yi = a), (de = d);
      }
      Gu(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (L = s)) : Gu(e);
  }
}
function Gu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || Os(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Lu(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lu(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var g = v.dehydrated;
                    g !== null && kr(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        de || (t.flags & 512 && pl(t));
      } catch (y) {
        Z(t, t.return, y);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Zu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Ku(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Os(4, t);
          } catch (c) {
            Z(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Z(t, i, c);
            }
          }
          var s = t.return;
          try {
            pl(t);
          } catch (c) {
            Z(t, s, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            pl(t);
          } catch (c) {
            Z(t, o, c);
          }
      }
    } catch (c) {
      Z(t, t.return, c);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var tm = Math.ceil,
  os = pt.ReactCurrentDispatcher,
  wa = pt.ReactCurrentOwner,
  De = pt.ReactCurrentBatchConfig,
  $ = 0,
  ie = null,
  J = null,
  le = 0,
  _e = 0,
  Pn = $t(0),
  te = 0,
  Dr = null,
  nn = 0,
  Ns = 0,
  Sa = 0,
  fr = null,
  ye = null,
  xa = 0,
  Fn = 1 / 0,
  rt = null,
  ls = !1,
  vl = null,
  Nt = null,
  wi = !1,
  _t = null,
  as = 0,
  pr = 0,
  yl = null,
  Ai = -1,
  Di = 0;
function pe() {
  return $ & 6 ? q() : Ai !== -1 ? Ai : (Ai = q());
}
function Lt(e) {
  return e.mode & 1
    ? $ & 2 && le !== 0
      ? le & -le
      : Fg.transition !== null
      ? (Di === 0 && (Di = Sd()), Di)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Id(e.type))),
        e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < pr) throw ((pr = 0), (yl = null), Error(C(185)));
  br(e, n, r),
    (!($ & 2) || e !== ie) &&
      (e === ie && (!($ & 2) && (Ns |= n), te === 4 && xt(e, le)),
      Pe(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Fn = q() + 500), Is && Bt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Fp(e, t);
  var r = Qi(e, e === ie ? le : 0);
  if (r === 0)
    n !== null && ou(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ou(n), t === 1))
      e.tag === 0 ? jg(qu.bind(null, e)) : Yd(qu.bind(null, e)),
        Mg(function () {
          !($ & 6) && Bt();
        }),
        (n = null);
    else {
      switch (xd(r)) {
        case 1:
          n = Xl;
          break;
        case 4:
          n = yd;
          break;
        case 16:
          n = Vi;
          break;
        case 536870912:
          n = wd;
          break;
        default:
          n = Vi;
      }
      n = Qh(n, Fh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fh(e, t) {
  if (((Ai = -1), (Di = 0), $ & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Rn() && e.callbackNode !== n) return null;
  var r = Qi(e, e === ie ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = us(e, r);
  else {
    t = r;
    var i = $;
    $ |= 2;
    var s = Bh();
    (ie !== e || le !== t) && ((rt = null), (Fn = q() + 500), Kt(e, t));
    do
      try {
        im();
        break;
      } catch (a) {
        $h(e, a);
      }
    while (!0);
    oa(),
      (os.current = s),
      ($ = i),
      J !== null ? (t = 0) : ((ie = null), (le = 0), (t = te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Qo(e)), i !== 0 && ((r = i), (t = wl(e, i)))), t === 1)
    )
      throw ((n = Dr), Kt(e, 0), xt(e, r), Pe(e, q()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !nm(i) &&
          ((t = us(e, r)),
          t === 2 && ((s = Qo(e)), s !== 0 && ((r = s), (t = wl(e, s)))),
          t === 1))
      )
        throw ((n = Dr), Kt(e, 0), xt(e, r), Pe(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Qt(e, ye, rt);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = xa + 500 - q()), 10 < t))
          ) {
            if (Qi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Jo(Qt.bind(null, e, ye, rt), t);
            break;
          }
          Qt(e, ye, rt);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Qe(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * tm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Jo(Qt.bind(null, e, ye, rt), r);
            break;
          }
          Qt(e, ye, rt);
          break;
        case 5:
          Qt(e, ye, rt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Pe(e, q()), e.callbackNode === n ? Fh.bind(null, e) : null;
}
function wl(e, t) {
  var n = fr;
  return (
    e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
    (e = us(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && Sl(t)),
    e
  );
}
function Sl(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function nm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Xe(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xt(e, t) {
  for (
    t &= ~Sa,
      t &= ~Ns,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qu(e) {
  if ($ & 6) throw Error(C(327));
  Rn();
  var t = Qi(e, 0);
  if (!(t & 1)) return Pe(e, q()), null;
  var n = us(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qo(e);
    r !== 0 && ((t = r), (n = wl(e, r)));
  }
  if (n === 1) throw ((n = Dr), Kt(e, 0), xt(e, t), Pe(e, q()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, ye, rt),
    Pe(e, q()),
    null
  );
}
function Pa(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((Fn = q() + 500), Is && Bt());
  }
}
function rn(e) {
  _t !== null && _t.tag === 0 && !($ & 6) && Rn();
  var t = $;
  $ |= 1;
  var n = De.transition,
    r = W;
  try {
    if (((De.transition = null), (W = 1), e)) return e();
  } finally {
    (W = r), (De.transition = n), ($ = t), !($ & 6) && Bt();
  }
}
function _a() {
  (_e = Pn.current), V(Pn);
}
function Kt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Lg(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((ra(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zi();
          break;
        case 3:
          Dn(), V(Se), V(he), ha();
          break;
        case 5:
          da(r);
          break;
        case 4:
          Dn();
          break;
        case 13:
          V(Y);
          break;
        case 19:
          V(Y);
          break;
        case 10:
          la(r.type._context);
          break;
        case 22:
        case 23:
          _a();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (J = e = Mt(e.current, null)),
    (le = _e = t),
    (te = 0),
    (Dr = null),
    (Sa = Ns = nn = 0),
    (ye = fr = null),
    bt !== null)
  ) {
    for (t = 0; t < bt.length; t++)
      if (((n = bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    bt = null;
  }
  return e;
}
function $h(e, t) {
  do {
    var n = J;
    try {
      if ((oa(), (Li.current = ss), is)) {
        for (var r = b.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        is = !1;
      }
      if (
        ((tn = 0),
        (re = ee = b = null),
        (dr = !1),
        (Mr = 0),
        (wa.current = null),
        n === null || n.return === null)
      ) {
        (te = 1), (Dr = t), (J = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          c = t;
        if (
          ((t = le),
          (a.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            v = a,
            g = v.tag;
          if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var y = v.alternate;
            y
              ? ((v.updateQueue = y.updateQueue),
                (v.memoizedState = y.memoizedState),
                (v.lanes = y.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = $u(o);
          if (w !== null) {
            (w.flags &= -257),
              Bu(w, o, a, s, t),
              w.mode & 1 && Fu(s, d, t),
              (t = w),
              (c = d);
            var P = t.updateQueue;
            if (P === null) {
              var _ = new Set();
              _.add(c), (t.updateQueue = _);
            } else P.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Fu(s, d, t), Ea();
              break e;
            }
            c = Error(C(426));
          }
        } else if (Q && a.mode & 1) {
          var T = $u(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Bu(T, o, a, s, t),
              ia(jn(c, a));
            break e;
          }
        }
        (s = c = jn(c, a)),
          te !== 4 && (te = 2),
          fr === null ? (fr = [s]) : fr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = Ph(s, c, t);
              Nu(s, m);
              break e;
            case 1:
              a = c;
              var p = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var l = _h(s, a, t);
                Nu(s, l);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Hh(n);
    } catch (u) {
      (t = u), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bh() {
  var e = os.current;
  return (os.current = ss), e === null ? ss : e;
}
function Ea() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    ie === null || (!(nn & 268435455) && !(Ns & 268435455)) || xt(ie, le);
}
function us(e, t) {
  var n = $;
  $ |= 2;
  var r = Bh();
  (ie !== e || le !== t) && ((rt = null), Kt(e, t));
  do
    try {
      rm();
      break;
    } catch (i) {
      $h(e, i);
    }
  while (!0);
  if ((oa(), ($ = n), (os.current = r), J !== null)) throw Error(C(261));
  return (ie = null), (le = 0), te;
}
function rm() {
  for (; J !== null; ) Wh(J);
}
function im() {
  for (; J !== null && !Rp(); ) Wh(J);
}
function Wh(e) {
  var t = Vh(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hh(e) : (J = t),
    (wa.current = null);
}
function Hh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Kg(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (J = null);
        return;
      }
    } else if (((n = Zg(n, t, _e)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Qt(e, t, n) {
  var r = W,
    i = De.transition;
  try {
    (De.transition = null), (W = 1), sm(e, t, n, r);
  } finally {
    (De.transition = i), (W = r);
  }
  return null;
}
function sm(e, t, n, r) {
  do Rn();
  while (_t !== null);
  if ($ & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    ($p(e, s),
    e === ie && ((J = ie = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wi ||
      ((wi = !0),
      Qh(Vi, function () {
        return Rn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = De.transition), (De.transition = null);
    var o = W;
    W = 1;
    var a = $;
    ($ |= 4),
      (wa.current = null),
      Jg(e, n),
      Dh(n, e),
      kg(Ko),
      (Yi = !!Zo),
      (Ko = Zo = null),
      (e.current = n),
      em(n),
      Op(),
      ($ = a),
      (W = o),
      (De.transition = s);
  } else e.current = n;
  if (
    (wi && ((wi = !1), (_t = e), (as = i)),
    (s = e.pendingLanes),
    s === 0 && (Nt = null),
    Mp(n.stateNode),
    Pe(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ls) throw ((ls = !1), (e = vl), (vl = null), e);
  return (
    as & 1 && e.tag !== 0 && Rn(),
    (s = e.pendingLanes),
    s & 1 ? (e === yl ? pr++ : ((pr = 0), (yl = e))) : (pr = 0),
    Bt(),
    null
  );
}
function Rn() {
  if (_t !== null) {
    var e = xd(as),
      t = De.transition,
      n = W;
    try {
      if (((De.transition = null), (W = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (as = 0), $ & 6)) throw Error(C(331));
        var i = $;
        for ($ |= 4, L = e.current; L !== null; ) {
          var s = L,
            o = s.child;
          if (L.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var d = a[c];
                for (L = d; L !== null; ) {
                  var v = L;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, v, s);
                  }
                  var g = v.child;
                  if (g !== null) (g.return = v), (L = g);
                  else
                    for (; L !== null; ) {
                      v = L;
                      var y = v.sibling,
                        w = v.return;
                      if ((Mh(v), v === d)) {
                        L = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = w), (L = y);
                        break;
                      }
                      L = w;
                    }
                }
              }
              var P = s.alternate;
              if (P !== null) {
                var _ = P.child;
                if (_ !== null) {
                  P.child = null;
                  do {
                    var T = _.sibling;
                    (_.sibling = null), (_ = T);
                  } while (_ !== null);
                }
              }
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (L = o);
          else
            e: for (; L !== null; ) {
              if (((s = L), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (L = m);
                break e;
              }
              L = s.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          o = L;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (L = h);
          else
            e: for (o = p; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Os(9, a);
                  }
                } catch (u) {
                  Z(a, a.return, u);
                }
              if (a === o) {
                L = null;
                break e;
              }
              var l = a.sibling;
              if (l !== null) {
                (l.return = a.return), (L = l);
                break e;
              }
              L = a.return;
            }
        }
        if (
          (($ = i), Bt(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Ps, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = n), (De.transition = t);
    }
  }
  return !1;
}
function Ju(e, t, n) {
  (t = jn(n, t)),
    (t = Ph(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = pe()),
    e !== null && (br(e, 1, t), Pe(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Ju(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ju(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = jn(n, e)),
            (e = _h(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = pe()),
            t !== null && (br(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function om(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (le & n) === n &&
      (te === 4 || (te === 3 && (le & 130023424) === le && 500 > q() - xa)
        ? Kt(e, 0)
        : (Sa |= n)),
    Pe(e, t);
}
function Uh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ui), (ui <<= 1), !(ui & 130023424) && (ui = 4194304))
      : (t = 1));
  var n = pe();
  (e = dt(e, t)), e !== null && (br(e, t, n), Pe(e, n));
}
function lm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Uh(e, n);
}
function am(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Uh(e, n);
}
var Vh;
Vh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), Gg(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), Q && t.flags & 1048576 && Xd(t, Ji, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zi(e, t), (e = t.pendingProps);
      var i = Mn(t, he.current);
      Tn(t, n), (i = pa(null, t, r, e, i, n));
      var s = ga();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((s = !0), Ki(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ua(t),
            (i.updater = Ts),
            (t.stateNode = i),
            (i._reactInternals = t),
            ol(t, r, e, n),
            (t = ul(null, t, r, !0, s, n)))
          : ((t.tag = 0), Q && s && na(t), fe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = cm(r)),
          (e = Be(r, e)),
          i)
        ) {
          case 0:
            t = al(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = Hu(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        al(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        Uu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ih(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Kd(e, t),
          ns(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = jn(Error(C(423)), t)), (t = Vu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = jn(Error(C(424)), t)), (t = Vu(e, t, r, n, i));
            break e;
          } else
            for (
              ke = Rt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                Q = !0,
                He = null,
                n = th(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((zn(), r === i)) {
            t = ht(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nh(t),
        e === null && rl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        qo(r, i) ? (o = null) : s !== null && qo(r, s) && (t.flags |= 32),
        Ch(e, t),
        fe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && rl(t), null;
    case 13:
      return Th(e, t, n);
    case 4:
      return (
        ca(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = An(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        Wu(e, t, r, i, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          H(es, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Xe(s.value, o)) {
            if (s.children === i.children && !Se.current) {
              t = ht(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var c = a.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      (c = at(-1, n & -n)), (c.tag = 2);
                      var d = s.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (c.next = c)
                          : ((c.next = v.next), (v.next = c)),
                          (d.pending = c);
                      }
                    }
                    (s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      il(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  il(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        fe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Tn(t, n),
        (i = je(i)),
        (r = r(i)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Be(r, t.pendingProps)),
        (i = Be(r.type, i)),
        Hu(e, t, r, i, n)
      );
    case 15:
      return Eh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        zi(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), Ki(t)) : (e = !1),
        Tn(t, n),
        Jd(t, r, i),
        ol(t, r, i, n),
        ul(null, t, r, !0, e, n)
      );
    case 19:
      return Rh(e, t, n);
    case 22:
      return kh(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Qh(e, t) {
  return vd(e, t);
}
function um(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new um(e, t, n, r);
}
function ka(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cm(e) {
  if (typeof e == "function") return ka(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vl)) return 11;
    if (e === Ql) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ji(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ka(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case hn:
        return qt(n.children, i, s, t);
      case Ul:
        (o = 8), (i |= 8);
        break;
      case Oo:
        return (
          (e = ze(12, n, t, i | 2)), (e.elementType = Oo), (e.lanes = s), e
        );
      case No:
        return (e = ze(13, n, t, i)), (e.elementType = No), (e.lanes = s), e;
      case Lo:
        return (e = ze(19, n, t, i)), (e.elementType = Lo), (e.lanes = s), e;
      case ed:
        return Ls(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qc:
              o = 10;
              break e;
            case Jc:
              o = 9;
              break e;
            case Vl:
              o = 11;
              break e;
            case Ql:
              o = 14;
              break e;
            case vt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function qt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Ls(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = ed),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wo(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function So(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dm(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Js(0)),
    (this.expirationTimes = Js(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Js(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ca(e, t, n, r, i, s, o, a, c) {
  return (
    (e = new dm(e, t, n, a, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ze(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ua(s),
    e
  );
}
function hm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Yh(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (ln(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return Qd(e, n, t);
  }
  return t;
}
function Xh(e, t, n, r, i, s, o, a, c) {
  return (
    (e = Ca(n, r, !0, e, i, s, o, a, c)),
    (e.context = Yh(null)),
    (n = e.current),
    (r = pe()),
    (i = Lt(n)),
    (s = at(r, i)),
    (s.callback = t ?? null),
    Ot(n, s, i),
    (e.current.lanes = i),
    br(e, i, r),
    Pe(e, r),
    e
  );
}
function Ms(e, t, n, r) {
  var i = t.current,
    s = pe(),
    o = Lt(i);
  return (
    (n = Yh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = at(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(i, t, o)),
    e !== null && (Ye(e, i, o, s), Ni(e, i, o)),
    o
  );
}
function cs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ec(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ia(e, t) {
  ec(e, t), (e = e.alternate) && ec(e, t);
}
function fm() {
  return null;
}
var bh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ta(e) {
  this._internalRoot = e;
}
zs.prototype.render = Ta.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ms(e, t, null, null);
};
zs.prototype.unmount = Ta.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rn(function () {
      Ms(null, e, null, null);
    }),
      (t[ct] = null);
  }
};
function zs(e) {
  this._internalRoot = e;
}
zs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ed();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
    St.splice(n, 0, e), n === 0 && Cd(e);
  }
};
function Ra(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function As(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function tc() {}
function pm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var d = cs(o);
        s.call(d);
      };
    }
    var o = Xh(t, r, e, 0, null, !1, !1, "", tc);
    return (
      (e._reactRootContainer = o),
      (e[ct] = o.current),
      Tr(e.nodeType === 8 ? e.parentNode : e),
      rn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var d = cs(c);
      a.call(d);
    };
  }
  var c = Ca(e, 0, !1, null, null, !1, !1, "", tc);
  return (
    (e._reactRootContainer = c),
    (e[ct] = c.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    rn(function () {
      Ms(t, c, n, r);
    }),
    c
  );
}
function Ds(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var c = cs(o);
        a.call(c);
      };
    }
    Ms(t, o, e, i);
  } else o = pm(n, t, e, i, r);
  return cs(o);
}
Pd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = nr(t.pendingLanes);
        n !== 0 &&
          (bl(t, n | 1), Pe(t, q()), !($ & 6) && ((Fn = q() + 500), Bt()));
      }
      break;
    case 13:
      rn(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var i = pe();
          Ye(r, e, 1, i);
        }
      }),
        Ia(e, 1);
  }
};
Gl = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = pe();
      Ye(t, e, 134217728, n);
    }
    Ia(e, 134217728);
  }
};
_d = function (e) {
  if (e.tag === 13) {
    var t = Lt(e),
      n = dt(e, t);
    if (n !== null) {
      var r = pe();
      Ye(n, e, t, r);
    }
    Ia(e, t);
  }
};
Ed = function () {
  return W;
};
kd = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
Ho = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ao(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Cs(r);
            if (!i) throw Error(C(90));
            nd(r), Ao(r, i);
          }
        }
      }
      break;
    case "textarea":
      id(e, n);
      break;
    case "select":
      (t = n.value), t != null && En(e, !!n.multiple, t, !1);
  }
};
dd = Pa;
hd = rn;
var gm = { usingClientEntryPoint: !1, Events: [Zr, mn, Cs, ud, cd, Pa] },
  Zn = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  mm = {
    bundleType: Zn.bundleType,
    version: Zn.version,
    rendererPackageName: Zn.rendererPackageName,
    rendererConfig: Zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = gd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zn.findFiberByHostInstance || fm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (Ps = Si.inject(mm)), (et = Si);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ra(t)) throw Error(C(200));
  return hm(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!Ra(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = bh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ca(e, 1, !1, null, null, n, !1, r, i)),
    (e[ct] = t.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    new Ta(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = gd(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return rn(e);
};
Te.hydrate = function (e, t, n) {
  if (!As(t)) throw Error(C(200));
  return Ds(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!Ra(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = bh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Xh(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[ct] = t.current),
    Tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new zs(t);
};
Te.render = function (e, t, n) {
  if (!As(t)) throw Error(C(200));
  return Ds(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!As(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (rn(function () {
        Ds(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ct] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = Pa;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!As(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ds(e, t, n, !1, r);
};
Te.version = "18.2.0-next-9e3b772b8-20220608";
function Gh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh);
    } catch (e) {
      console.error(e);
    }
}
Gh(), (Xc.exports = Te);
var Zh = Xc.exports,
  nc = Zh;
(To.createRoot = nc.createRoot), (To.hydrateRoot = nc.hydrateRoot);
var Kh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        if (s) {
          var o = typeof s;
          if (o === "string" || o === "number") r.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var a = n.apply(null, s);
              a && r.push(a);
            }
          } else if (o === "object") {
            if (
              s.toString !== Object.prototype.toString &&
              !s.toString.toString().includes("[native code]")
            ) {
              r.push(s.toString());
              continue;
            }
            for (var c in s) t.call(s, c) && s[c] && r.push(c);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Kh);
var vm = Kh.exports;
const js = Ss(vm),
  ym = ["xxl", "xl", "lg", "md", "sm", "xs"],
  wm = "xs",
  Oa = O.createContext({ prefixes: {}, breakpoints: ym, minBreakpoint: wm });
function Na(e, t) {
  const { prefixes: n } = O.useContext(Oa);
  return e || n[t] || t;
}
function qh() {
  const { breakpoints: e } = O.useContext(Oa);
  return e;
}
function Jh() {
  const { minBreakpoint: e } = O.useContext(Oa);
  return e;
}
const ef = O.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...i }, s) => {
    const o = Na(e, "container"),
      a = typeof t == "string" ? `-${t}` : "-fluid";
    return E.jsx(n, { ref: s, ...i, className: js(r, t ? `${o}${a}` : o) });
  }
);
ef.displayName = "Container";
const nt = ef;
var Sm = Object.defineProperty,
  xm = (e, t) => {
    for (var n in t) Sm(e, n, { get: t[n], enumerable: !0 });
  },
  be = {};
xm(be, {
  assign: () => Em,
  colors: () => zt,
  createStringInterpolator: () => Fa,
  skipAnimation: () => af,
  to: () => lf,
  willAdvance: () => $a,
});
var La = Jr(),
  z = (e) => qr(e, La),
  Ma = Jr();
z.write = (e) => qr(e, Ma);
var Fs = Jr();
z.onStart = (e) => qr(e, Fs);
var za = Jr();
z.onFrame = (e) => qr(e, za);
var Aa = Jr();
z.onFinish = (e) => qr(e, Aa);
var On = [];
z.setTimeout = (e, t) => {
  const n = z.now() + t,
    r = () => {
      const s = On.findIndex((o) => o.cancel == r);
      ~s && On.splice(s, 1), (kt -= ~s ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return On.splice(tf(n), 0, i), (kt += 1), nf(), i;
};
var tf = (e) => ~(~On.findIndex((t) => t.time > e) || ~On.length);
z.cancel = (e) => {
  Fs.delete(e), za.delete(e), Aa.delete(e), La.delete(e), Ma.delete(e);
};
z.sync = (e) => {
  (xl = !0), z.batchedUpdates(e), (xl = !1);
};
z.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), z.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      Fs.delete(n), (t = null);
    }),
    r
  );
};
var Da = typeof window < "u" ? window.requestAnimationFrame : () => {};
z.use = (e) => (Da = e);
z.now = typeof performance < "u" ? () => performance.now() : Date.now;
z.batchedUpdates = (e) => e();
z.catch = console.error;
z.frameLoop = "always";
z.advance = () => {
  z.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : sf();
};
var Et = -1,
  kt = 0,
  xl = !1;
function qr(e, t) {
  xl ? (t.delete(e), e(0)) : (t.add(e), nf());
}
function nf() {
  Et < 0 && ((Et = 0), z.frameLoop !== "demand" && Da(rf));
}
function Pm() {
  Et = -1;
}
function rf() {
  ~Et && (Da(rf), z.batchedUpdates(sf));
}
function sf() {
  const e = Et;
  Et = z.now();
  const t = tf(Et);
  if ((t && (of(On.splice(0, t), (n) => n.handler()), (kt -= t)), !kt)) {
    Pm();
    return;
  }
  Fs.flush(),
    La.flush(e ? Math.min(64, Et - e) : 16.667),
    za.flush(),
    Ma.flush(),
    Aa.flush();
}
function Jr() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (kt += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (kt -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (kt -= t.size),
        of(t, (r) => r(n) && e.add(r)),
        (kt += e.size),
        (t = e));
    },
  };
}
function of(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      z.catch(r);
    }
  });
}
function Pl() {}
var _m = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  R = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function it(e, t) {
  if (R.arr(e)) {
    if (!R.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var X = (e, t) => e.forEach(t);
function ft(e, t, n) {
  if (R.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Ae = (e) => (R.und(e) ? [] : R.arr(e) ? e : [e]);
function gr(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), X(n, t);
  }
}
var ir = (e, ...t) => gr(e, (n) => n(...t)),
  ja = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Fa,
  lf,
  zt = null,
  af = !1,
  $a = Pl,
  Em = (e) => {
    e.to && (lf = e.to),
      e.now && (z.now = e.now),
      e.colors !== void 0 && (zt = e.colors),
      e.skipAnimation != null && (af = e.skipAnimation),
      e.createStringInterpolator && (Fa = e.createStringInterpolator),
      e.requestAnimationFrame && z.use(e.requestAnimationFrame),
      e.batchedUpdates && (z.batchedUpdates = e.batchedUpdates),
      e.willAdvance && ($a = e.willAdvance),
      e.frameLoop && (z.frameLoop = e.frameLoop);
  },
  mr = new Set(),
  Me = [],
  xo = [],
  ds = 0,
  $s = {
    get idle() {
      return !mr.size && !Me.length;
    },
    start(e) {
      ds > e.priority ? (mr.add(e), z.onStart(km)) : (uf(e), z(_l));
    },
    advance: _l,
    sort(e) {
      if (ds) z.onFrame(() => $s.sort(e));
      else {
        const t = Me.indexOf(e);
        ~t && (Me.splice(t, 1), cf(e));
      }
    },
    clear() {
      (Me = []), mr.clear();
    },
  };
function km() {
  mr.forEach(uf), mr.clear(), z(_l);
}
function uf(e) {
  Me.includes(e) || cf(e);
}
function cf(e) {
  Me.splice(
    Cm(Me, (t) => t.priority > e.priority),
    0,
    e
  );
}
function _l(e) {
  const t = xo;
  for (let n = 0; n < Me.length; n++) {
    const r = Me[n];
    (ds = r.priority), r.idle || ($a(r), r.advance(e), r.idle || t.push(r));
  }
  return (ds = 0), (xo = Me), (xo.length = 0), (Me = t), Me.length > 0;
}
function Cm(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var Im = (e, t, n) => Math.min(Math.max(n, e), t),
  Tm = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Ve = "[-+]?\\d*\\.?\\d+",
  hs = Ve + "%";
function Bs(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Rm = new RegExp("rgb" + Bs(Ve, Ve, Ve)),
  Om = new RegExp("rgba" + Bs(Ve, Ve, Ve, Ve)),
  Nm = new RegExp("hsl" + Bs(Ve, hs, hs)),
  Lm = new RegExp("hsla" + Bs(Ve, hs, hs, Ve)),
  Mm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  zm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Am = /^#([0-9a-fA-F]{6})$/,
  Dm = /^#([0-9a-fA-F]{8})$/;
function jm(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = Am.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : zt && zt[e] !== void 0
    ? zt[e]
    : (t = Rm.exec(e))
    ? ((un(t[1]) << 24) | (un(t[2]) << 16) | (un(t[3]) << 8) | 255) >>> 0
    : (t = Om.exec(e))
    ? ((un(t[1]) << 24) | (un(t[2]) << 16) | (un(t[3]) << 8) | sc(t[4])) >>> 0
    : (t = Mm.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = Dm.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = zm.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = Nm.exec(e))
    ? (rc(ic(t[1]), xi(t[2]), xi(t[3])) | 255) >>> 0
    : (t = Lm.exec(e))
    ? (rc(ic(t[1]), xi(t[2]), xi(t[3])) | sc(t[4])) >>> 0
    : null;
}
function Po(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function rc(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    s = Po(i, r, e + 1 / 3),
    o = Po(i, r, e),
    a = Po(i, r, e - 1 / 3);
  return (
    (Math.round(s * 255) << 24) |
    (Math.round(o * 255) << 16) |
    (Math.round(a * 255) << 8)
  );
}
function un(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function ic(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function sc(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function xi(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function oc(e) {
  let t = jm(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    s = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${s})`;
}
var jr = (e, t, n) => {
  if (R.fun(e)) return e;
  if (R.arr(e)) return jr({ range: e, output: t, extrapolate: n });
  if (R.str(e.output[0])) return Fa(e);
  const r = e,
    i = r.output,
    s = r.range || [0, 1],
    o = r.extrapolateLeft || r.extrapolate || "extend",
    a = r.extrapolateRight || r.extrapolate || "extend",
    c = r.easing || ((d) => d);
  return (d) => {
    const v = $m(d, s);
    return Fm(d, s[v], s[v + 1], i[v], i[v + 1], c, o, a, r.map);
  };
};
function Fm(e, t, n, r, i, s, o, a, c) {
  let d = c ? c(e) : e;
  if (d < t) {
    if (o === "identity") return d;
    o === "clamp" && (d = t);
  }
  if (d > n) {
    if (a === "identity") return d;
    a === "clamp" && (d = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (d = -d)
        : n === 1 / 0
        ? (d = d - t)
        : (d = (d - t) / (n - t)),
      (d = s(d)),
      r === -1 / 0
        ? (d = -d)
        : i === 1 / 0
        ? (d = d + r)
        : (d = d * (i - r) + r),
      d);
}
function $m(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var Bm =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        i = t === "end" ? Math.floor(r) : Math.ceil(r);
      return Im(0, 1, i / e);
    },
  fs = 1.70158,
  Pi = fs * 1.525,
  lc = fs + 1,
  ac = (2 * Math.PI) / 3,
  uc = (2 * Math.PI) / 4.5,
  _i = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  Wm = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => lc * e * e * e - fs * e * e,
    easeOutBack: (e) => 1 + lc * Math.pow(e - 1, 3) + fs * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((Pi + 1) * 2 * e - Pi)) / 2
        : (Math.pow(2 * e - 2, 2) * ((Pi + 1) * (e * 2 - 2) + Pi) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * ac),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * ac) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * uc)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * uc)) / 2 +
          1,
    easeInBounce: (e) => 1 - _i(1 - e),
    easeOutBounce: _i,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - _i(1 - 2 * e)) / 2 : (1 + _i(2 * e - 1)) / 2,
    steps: Bm,
  },
  Fr = Symbol.for("FluidValue.get"),
  $n = Symbol.for("FluidValue.observers"),
  Le = (e) => !!(e && e[Fr]),
  ve = (e) => (e && e[Fr] ? e[Fr]() : e),
  cc = (e) => e[$n] || null;
function Hm(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function $r(e, t) {
  const n = e[$n];
  n &&
    n.forEach((r) => {
      Hm(r, t);
    });
}
var df = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      Um(this, e);
    }
  },
  Um = (e, t) => hf(e, Fr, t);
function ei(e, t) {
  if (e[Fr]) {
    let n = e[$n];
    n || hf(e, $n, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Br(e, t) {
  const n = e[$n];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[$n] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var hf = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Fi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  Vm =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  dc = new RegExp(`(${Fi.source})(%|[a-z]+)`, "i"),
  Qm = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Ws = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  ff = (e) => {
    const [t, n] = Ym(e);
    if (!t || ja()) return e;
    const r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith("--")) {
      const i = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(n);
      return i || e;
    } else {
      if (n && Ws.test(n)) return ff(n);
      if (n) return n;
    }
    return e;
  },
  Ym = (e) => {
    const t = Ws.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  _o,
  Xm = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  pf = (e) => {
    _o ||
      (_o = zt
        ? new RegExp(`(${Object.keys(zt).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const t = e.output.map((s) =>
        ve(s).replace(Ws, ff).replace(Vm, oc).replace(_o, oc)
      ),
      n = t.map((s) => s.match(Fi).map(Number)),
      i = n[0]
        .map((s, o) =>
          n.map((a) => {
            if (!(o in a))
              throw Error('The arity of each "output" value must be equal');
            return a[o];
          })
        )
        .map((s) => jr({ ...e, output: s }));
    return (s) => {
      var c;
      const o =
        !dc.test(t[0]) &&
        ((c = t.find((d) => dc.test(d))) == null ? void 0 : c.replace(Fi, ""));
      let a = 0;
      return t[0].replace(Fi, () => `${i[a++](s)}${o || ""}`).replace(Qm, Xm);
    };
  },
  gf = "react-spring: ",
  mf = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != "function")
      throw new TypeError(`${gf}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  bm = mf(console.warn);
function Gm() {
  bm(`${gf}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
mf(console.warn);
function Hs(e) {
  return (
    R.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!ja() && Ws.test(e)) || e in (zt || {}))
  );
}
var vf = ja() ? O.useEffect : O.useLayoutEffect,
  Zm = () => {
    const e = O.useRef(!1);
    return (
      vf(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function Km() {
  const e = O.useState()[1],
    t = Zm();
  return () => {
    t.current && e(Math.random());
  };
}
function ps(e, t) {
  const [n] = O.useState(() => ({ inputs: t, result: e() })),
    r = O.useRef(),
    i = r.current;
  let s = i;
  return (
    s
      ? (t && s.inputs && qm(t, s.inputs)) || (s = { inputs: t, result: e() })
      : (s = n),
    O.useEffect(() => {
      (r.current = s), i == n && (n.inputs = n.result = void 0);
    }, [s]),
    s.result
  );
}
function qm(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var gs = (e) => O.useEffect(e, Jm),
  Jm = [],
  Wr = Symbol.for("Animated:node"),
  e0 = (e) => !!e && e[Wr] === e,
  qe = (e) => e && e[Wr],
  Ba = (e, t) => _m(e, Wr, t),
  Us = (e) => e && e[Wr] && e[Wr].getPayload(),
  yf = class {
    constructor() {
      Ba(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  ti = class extends yf {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        R.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new ti(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        R.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        R.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  Hr = class extends ti {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = jr({ output: [e, e] }));
    }
    static create(e) {
      return new Hr(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (R.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = jr({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  ms = { dependencies: null },
  Vs = class extends yf {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        ft(this.source, (n, r) => {
          e0(n)
            ? (t[r] = n.getValue(e))
            : Le(n)
            ? (t[r] = ve(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && X(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return ft(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      ms.dependencies && Le(e) && ms.dependencies.add(e);
      const t = Us(e);
      t && X(t, (n) => this.add(n));
    }
  },
  wf = class extends Vs {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new wf(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(t0)), !0);
    }
  };
function t0(e) {
  return (Hs(e) ? Hr : ti).create(e);
}
function El(e) {
  const t = qe(e);
  return t ? t.constructor : R.arr(e) ? wf : Hs(e) ? Hr : ti;
}
var hc = (e, t) => {
    const n = !R.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return O.forwardRef((r, i) => {
      const s = O.useRef(null),
        o =
          n &&
          O.useCallback(
            (P) => {
              s.current = i0(i, P);
            },
            [i]
          ),
        [a, c] = r0(r, t),
        d = Km(),
        v = () => {
          const P = s.current;
          if (n && !P) return;
          (P ? t.applyAnimatedValues(P, a.getValue(!0)) : !1) === !1 && d();
        },
        g = new n0(v, c),
        y = O.useRef();
      vf(
        () => (
          (y.current = g),
          X(c, (P) => ei(P, g)),
          () => {
            y.current &&
              (X(y.current.deps, (P) => Br(P, y.current)),
              z.cancel(y.current.update));
          }
        )
      ),
        O.useEffect(v, []),
        gs(() => () => {
          const P = y.current;
          X(P.deps, (_) => Br(_, P));
        });
      const w = t.getComponentProps(a.getValue());
      return O.createElement(e, { ...w, ref: o });
    });
  },
  n0 = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && z.write(this.update);
    }
  };
function r0(e, t) {
  const n = new Set();
  return (
    (ms.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new Vs(e)),
    (ms.dependencies = null),
    [e, n]
  );
}
function i0(e, t) {
  return e && (R.fun(e) ? e(t) : (e.current = t)), t;
}
var fc = Symbol.for("AnimatedComponent"),
  s0 = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new Vs(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      s = (o) => {
        const a = pc(o) || "Anonymous";
        return (
          R.str(o)
            ? (o = s[o] || (s[o] = hc(o, i)))
            : (o = o[fc] || (o[fc] = hc(o, i))),
          (o.displayName = `Animated(${a})`),
          o
        );
      };
    return (
      ft(e, (o, a) => {
        R.arr(e) && (a = pc(o)), (s[a] = s(o));
      }),
      { animated: s }
    );
  },
  pc = (e) =>
    R.str(e)
      ? e
      : e && R.str(e.displayName)
      ? e.displayName
      : (R.fun(e) && e.name) || null;
function Yt(e, ...t) {
  return R.fun(e) ? e(...t) : e;
}
var vr = (e, t) =>
    e === !0 || !!(t && e && (R.fun(e) ? e(t) : Ae(e).includes(t))),
  Sf = (e, t) => (R.obj(e) ? t && e[t] : e),
  xf = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  o0 = (e) => e,
  Pf = (e, t = o0) => {
    let n = l0;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const i of n) {
      const s = t(e[i], i);
      R.und(s) || (r[i] = s);
    }
    return r;
  },
  l0 = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  a0 = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function u0(e) {
  const t = {};
  let n = 0;
  if (
    (ft(e, (r, i) => {
      a0[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function _f(e) {
  const t = u0(e);
  if (t) {
    const n = { to: t };
    return ft(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function Ur(e) {
  return (
    (e = ve(e)),
    R.arr(e)
      ? e.map(Ur)
      : Hs(e)
      ? be.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function kl(e) {
  return R.fun(e) || (R.arr(e) && R.obj(e[0]));
}
var Ef = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  Cl = { ...Ef.default, mass: 1, damping: 1, easing: Wm.linear, clamp: !1 },
  c0 = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, Cl);
    }
  };
function d0(e, t, n) {
  n && ((n = { ...n }), gc(n, t), (t = { ...n, ...t })),
    gc(e, t),
    Object.assign(e, t);
  for (const o in Cl) e[o] == null && (e[o] = Cl[o]);
  let { frequency: r, damping: i } = e;
  const { mass: s } = e;
  return (
    R.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * s),
      (e.friction = (4 * Math.PI * i * s) / r)),
    e
  );
}
function gc(e, t) {
  if (!R.und(t.decay)) e.duration = void 0;
  else {
    const n = !R.und(t.tension) || !R.und(t.friction);
    (n || !R.und(t.frequency) || !R.und(t.damping) || !R.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var mc = [],
  h0 = class {
    constructor() {
      (this.changed = !1),
        (this.values = mc),
        (this.toValues = null),
        (this.fromValues = mc),
        (this.config = new c0()),
        (this.immediate = !1);
    }
  };
function kf(e, { key: t, props: n, defaultProps: r, state: i, actions: s }) {
  return new Promise((o, a) => {
    let c,
      d,
      v = vr(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (v) w();
    else {
      R.und(n.pause) || (i.paused = vr(n.pause, t));
      let P = r == null ? void 0 : r.pause;
      P !== !0 && (P = i.paused || vr(P, t)),
        (c = Yt(n.delay || 0, t)),
        P ? (i.resumeQueue.add(y), s.pause()) : (s.resume(), y());
    }
    function g() {
      i.resumeQueue.add(y),
        i.timeouts.delete(d),
        d.cancel(),
        (c = d.time - z.now());
    }
    function y() {
      c > 0 && !be.skipAnimation
        ? ((i.delayed = !0),
          (d = z.setTimeout(w, c)),
          i.pauseQueue.add(g),
          i.timeouts.add(d))
        : w();
    }
    function w() {
      i.delayed && (i.delayed = !1),
        i.pauseQueue.delete(g),
        i.timeouts.delete(d),
        e <= (i.cancelId || 0) && (v = !0);
      try {
        s.start({ ...n, callId: e, cancel: v }, o);
      } catch (P) {
        a(P);
      }
    }
  });
}
var Wa = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Nn(e.get())
      : t.every((n) => n.noop)
      ? Cf(e.get())
      : Ue(
          e.get(),
          t.every((n) => n.finished)
        ),
  Cf = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  Ue = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Nn = (e) => ({ value: e, cancelled: !0, finished: !1 });
function If(e, t, n, r) {
  const { callId: i, parentId: s, onRest: o } = t,
    { asyncTo: a, promise: c } = n;
  return !s && e === a && !t.reset
    ? c
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        const d = Pf(t, (T, m) => (m === "onRest" ? void 0 : T));
        let v, g;
        const y = new Promise((T, m) => ((v = T), (g = m))),
          w = (T) => {
            const m =
              (i <= (n.cancelId || 0) && Nn(r)) ||
              (i !== n.asyncId && Ue(r, !1));
            if (m) throw ((T.result = m), g(T), T);
          },
          P = (T, m) => {
            const p = new vc(),
              h = new yc();
            return (async () => {
              if (be.skipAnimation)
                throw (Vr(n), (h.result = Ue(r, !1)), g(h), h);
              w(p);
              const l = R.obj(T) ? { ...T } : { ...m, to: T };
              (l.parentId = i),
                ft(d, (f, S) => {
                  R.und(l[S]) && (l[S] = f);
                });
              const u = await r.start(l);
              return (
                w(p),
                n.paused &&
                  (await new Promise((f) => {
                    n.resumeQueue.add(f);
                  })),
                u
              );
            })();
          };
        let _;
        if (be.skipAnimation) return Vr(n), Ue(r, !1);
        try {
          let T;
          R.arr(e)
            ? (T = (async (m) => {
                for (const p of m) await P(p);
              })(e))
            : (T = Promise.resolve(e(P, r.stop.bind(r)))),
            await Promise.all([T.then(v), y]),
            (_ = Ue(r.get(), !0, !1));
        } catch (T) {
          if (T instanceof vc) _ = T.result;
          else if (T instanceof yc) _ = T.result;
          else throw T;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = s),
            (n.asyncTo = s ? a : void 0),
            (n.promise = s ? c : void 0));
        }
        return (
          R.fun(o) &&
            z.batchedUpdates(() => {
              o(_, r, r.item);
            }),
          _
        );
      })());
}
function Vr(e, t) {
  gr(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var vc = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  yc = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  Il = (e) => e instanceof Ha,
  f0 = 1,
  Ha = class extends df {
    constructor() {
      super(...arguments), (this.id = f0++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = qe(this);
      return e && e.getValue();
    }
    to(...e) {
      return be.to(this, e);
    }
    interpolate(...e) {
      return Gm(), be.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      $r(this, { type: "change", parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || $s.sort(this),
        $r(this, { type: "priority", parent: this, priority: e });
    }
  },
  sn = Symbol.for("SpringPhase"),
  Tf = 1,
  Tl = 2,
  Rl = 4,
  Eo = (e) => (e[sn] & Tf) > 0,
  mt = (e) => (e[sn] & Tl) > 0,
  Kn = (e) => (e[sn] & Rl) > 0,
  wc = (e, t) => (t ? (e[sn] |= Tl | Tf) : (e[sn] &= ~Tl)),
  Sc = (e, t) => (t ? (e[sn] |= Rl) : (e[sn] &= ~Rl)),
  p0 = class extends Ha {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new h0()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !R.und(e) || !R.und(t))
      ) {
        const n = R.obj(e) ? { ...e } : { ...t, from: e };
        R.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(mt(this) || this._state.asyncTo) || Kn(this);
    }
    get goal() {
      return ve(this.animation.to);
    }
    get velocity() {
      const e = qe(this);
      return e instanceof ti
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return Eo(this);
    }
    get isAnimating() {
      return mt(this);
    }
    get isPaused() {
      return Kn(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: i } = r;
      const { config: s } = r,
        o = Us(r.to);
      !o && Le(r.to) && (i = Ae(ve(r.to))),
        r.values.forEach((d, v) => {
          if (d.done) return;
          const g = d.constructor == Hr ? 1 : o ? o[v].lastPosition : i[v];
          let y = r.immediate,
            w = g;
          if (!y) {
            if (((w = d.lastPosition), s.tension <= 0)) {
              d.done = !0;
              return;
            }
            let P = (d.elapsedTime += e);
            const _ = r.fromValues[v],
              T =
                d.v0 != null
                  ? d.v0
                  : (d.v0 = R.arr(s.velocity) ? s.velocity[v] : s.velocity);
            let m;
            const p =
              s.precision ||
              (_ == g ? 0.005 : Math.min(1, Math.abs(g - _) * 0.001));
            if (R.und(s.duration))
              if (s.decay) {
                const h = s.decay === !0 ? 0.998 : s.decay,
                  l = Math.exp(-(1 - h) * P);
                (w = _ + (T / (1 - h)) * (1 - l)),
                  (y = Math.abs(d.lastPosition - w) <= p),
                  (m = T * l);
              } else {
                m = d.lastVelocity == null ? T : d.lastVelocity;
                const h = s.restVelocity || p / 10,
                  l = s.clamp ? 0 : s.bounce,
                  u = !R.und(l),
                  f = _ == g ? d.v0 > 0 : _ < g;
                let S,
                  x = !1;
                const k = 1,
                  I = Math.ceil(e / k);
                for (
                  let N = 0;
                  N < I &&
                  ((S = Math.abs(m) > h),
                  !(!S && ((y = Math.abs(g - w) <= p), y)));
                  ++N
                ) {
                  u &&
                    ((x = w == g || w > g == f), x && ((m = -m * l), (w = g)));
                  const j = -s.tension * 1e-6 * (w - g),
                    B = -s.friction * 0.001 * m,
                    se = (j + B) / s.mass;
                  (m = m + se * k), (w = w + m * k);
                }
              }
            else {
              let h = 1;
              s.duration > 0 &&
                (this._memoizedDuration !== s.duration &&
                  ((this._memoizedDuration = s.duration),
                  d.durationProgress > 0 &&
                    ((d.elapsedTime = s.duration * d.durationProgress),
                    (P = d.elapsedTime += e))),
                (h = (s.progress || 0) + P / this._memoizedDuration),
                (h = h > 1 ? 1 : h < 0 ? 0 : h),
                (d.durationProgress = h)),
                (w = _ + s.easing(h) * (g - _)),
                (m = (w - d.lastPosition) / e),
                (y = h == 1);
            }
            (d.lastVelocity = m),
              Number.isNaN(w) &&
                (console.warn("Got NaN while animating:", this), (y = !0));
          }
          o && !o[v].done && (y = !1),
            y ? (d.done = !0) : (t = !1),
            d.setValue(w, s.round) && (n = !0);
        });
      const a = qe(this),
        c = a.getValue();
      if (t) {
        const d = ve(r.to);
        (c !== d || n) && !s.decay
          ? (a.setValue(d), this._onChange(d))
          : n && s.decay && this._onChange(c),
          this._stop();
      } else n && this._onChange(c);
    }
    set(e) {
      return (
        z.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (mt(this)) {
        const { to: e, config: t } = this.animation;
        z.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        R.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [R.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => Wa(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        Vr(this._state, e && this._lastCallId),
        z.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || "";
      let { to: n, from: r } = e;
      (n = R.obj(n) ? n[t] : n),
        (n == null || kl(n)) && (n = void 0),
        (r = R.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const i = { to: n, from: r };
      return (
        Eo(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = ve(r)),
          R.und(r) ? qe(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          Pf(e, (o, a) => (/^on/.test(a) ? Sf(o, n) : o))
        ),
        Pc(this, e, "onProps"),
        Jn(this, "onProps", e, this);
      const i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const s = this._state;
      return kf(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: s,
        actions: {
          pause: () => {
            Kn(this) ||
              (Sc(this, !0),
              ir(s.pauseQueue),
              Jn(this, "onPause", Ue(this, qn(this, this.animation.to)), this));
          },
          resume: () => {
            Kn(this) &&
              (Sc(this, !1),
              mt(this) && this._resume(),
              ir(s.resumeQueue),
              Jn(
                this,
                "onResume",
                Ue(this, qn(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((o) => {
        if (e.loop && o.finished && !(t && o.noop)) {
          const a = Rf(e);
          if (a) return this._update(a, !0);
        }
        return o;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Nn(this));
      const r = !R.und(e.to),
        i = !R.und(e.from);
      if (r || i)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Nn(this));
      const { key: s, defaultProps: o, animation: a } = this,
        { to: c, from: d } = a;
      let { to: v = c, from: g = d } = e;
      i && !r && (!t.default || R.und(v)) && (v = g),
        t.reverse && ([v, g] = [g, v]);
      const y = !it(g, d);
      y && (a.from = g), (g = ve(g));
      const w = !it(v, c);
      w && this._focus(v);
      const P = kl(t.to),
        { config: _ } = a,
        { decay: T, velocity: m } = _;
      (r || i) && (_.velocity = 0),
        t.config &&
          !P &&
          d0(
            _,
            Yt(t.config, s),
            t.config !== o.config ? Yt(o.config, s) : void 0
          );
      let p = qe(this);
      if (!p || R.und(v)) return n(Ue(this, !0));
      const h = R.und(t.reset) ? i && !t.default : !R.und(g) && vr(t.reset, s),
        l = h ? g : this.get(),
        u = Ur(v),
        f = R.num(u) || R.arr(u) || Hs(u),
        S = !P && (!f || vr(o.immediate || t.immediate, s));
      if (w) {
        const N = El(v);
        if (N !== p.constructor)
          if (S) p = this._set(u);
          else
            throw Error(
              `Cannot animate between ${p.constructor.name} and ${N.name}, as the "to" prop suggests`
            );
      }
      const x = p.constructor;
      let k = Le(v),
        I = !1;
      if (!k) {
        const N = h || (!Eo(this) && y);
        (w || N) && ((I = it(Ur(l), u)), (k = !I)),
          ((!it(a.immediate, S) && !S) ||
            !it(_.decay, T) ||
            !it(_.velocity, m)) &&
            (k = !0);
      }
      if (
        (I && mt(this) && (a.changed && !h ? (k = !0) : k || this._stop(c)),
        !P &&
          ((k || Le(c)) &&
            ((a.values = p.getPayload()),
            (a.toValues = Le(v) ? null : x == Hr ? [1] : Ae(u))),
          a.immediate != S && ((a.immediate = S), !S && !h && this._set(c)),
          k))
      ) {
        const { onRest: N } = a;
        X(g0, (B) => Pc(this, t, B));
        const j = Ue(this, qn(this, c));
        ir(this._pendingCalls, j),
          this._pendingCalls.add(n),
          a.changed &&
            z.batchedUpdates(() => {
              var B;
              (a.changed = !h),
                N == null || N(j, this),
                h
                  ? Yt(o.onRest, j)
                  : (B = a.onStart) == null || B.call(a, j, this);
            });
      }
      h && this._set(l),
        P
          ? n(If(t.to, t, this._state, this))
          : k
          ? this._start()
          : mt(this) && !w
          ? this._pendingCalls.add(n)
          : n(Cf(l));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (cc(this) && this._detach(), (t.to = e), cc(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      Le(t) && (ei(t, this), Il(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      Le(e) && Br(e, this);
    }
    _set(e, t = !0) {
      const n = ve(e);
      if (!R.und(n)) {
        const r = qe(this);
        if (!r || !it(n, r.getValue())) {
          const i = El(n);
          !r || r.constructor != i ? Ba(this, i.create(n)) : r.setValue(n),
            r &&
              z.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return qe(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), Jn(this, "onStart", Ue(this, qn(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), Yt(this.animation.onChange, e, this)),
        Yt(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      qe(this).reset(ve(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        mt(this) || (wc(this, !0), Kn(this) || this._resume());
    }
    _resume() {
      be.skipAnimation ? this.finish() : $s.start(this);
    }
    _stop(e, t) {
      if (mt(this)) {
        wc(this, !1);
        const n = this.animation;
        X(n.values, (i) => {
          i.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          $r(this, { type: "idle", parent: this });
        const r = t ? Nn(this.get()) : Ue(this.get(), qn(this, e ?? n.to));
        ir(this._pendingCalls, r),
          n.changed && ((n.changed = !1), Jn(this, "onRest", r, this));
      }
    }
  };
function qn(e, t) {
  const n = Ur(t),
    r = Ur(e.get());
  return it(r, n);
}
function Rf(e, t = e.loop, n = e.to) {
  const r = Yt(t);
  if (r) {
    const i = r !== !0 && _f(r),
      s = (i || e).reverse,
      o = !i || i.reset;
    return Ol({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !s || kl(n) ? n : void 0,
      from: o ? e.from : void 0,
      reset: o,
      ...i,
    });
  }
}
function Ol(e) {
  const { to: t, from: n } = (e = _f(e)),
    r = new Set();
  return (
    R.obj(t) && xc(t, r),
    R.obj(n) && xc(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function xc(e, t) {
  ft(e, (n, r) => n != null && t.add(r));
}
var g0 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Pc(e, t, n) {
  e.animation[n] = t[n] !== xf(t, n) ? Sf(t[n], e.key) : void 0;
}
function Jn(e, t, ...n) {
  var r, i, s, o;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (o = (s = e.defaultProps)[t]) == null || o.call(s, ...n);
}
var m0 = ["onStart", "onChange", "onRest"],
  v0 = 1,
  Of = class {
    constructor(e, t) {
      (this.id = v0++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        R.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(Ol(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = Ae(e).map(Ol)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (Lf(this, t), y0(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        X(Ae(t), (r) => n[r].stop(!!e));
      } else Vr(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (R.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        X(Ae(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (R.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        X(Ae(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      ft(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        gr(e, ([a, c]) => {
          (c.value = this.get()), a(c, this, this._item);
        }));
      const s = !r && this._started,
        o = i || (s && n.size) ? this.get() : null;
      i &&
        t.size &&
        gr(t, ([a, c]) => {
          (c.value = o), a(c, this, this._item);
        }),
        s &&
          ((this._started = !1),
          gr(n, ([a, c]) => {
            (c.value = o), a(c, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      z.onFrame(this._onFrame);
    }
  };
function y0(e, t) {
  return Promise.all(t.map((n) => Nf(e, n))).then((n) => Wa(e, n));
}
async function Nf(e, t, n) {
  const { keys: r, to: i, from: s, loop: o, onRest: a, onResolve: c } = t,
    d = R.obj(t.default) && t.default;
  o && (t.loop = !1), i === !1 && (t.to = null), s === !1 && (t.from = null);
  const v = R.arr(i) || R.fun(i) ? i : void 0;
  v
    ? ((t.to = void 0), (t.onRest = void 0), d && (d.onRest = void 0))
    : X(m0, (_) => {
        const T = t[_];
        if (R.fun(T)) {
          const m = e._events[_];
          (t[_] = ({ finished: p, cancelled: h }) => {
            const l = m.get(T);
            l
              ? (p || (l.finished = !1), h && (l.cancelled = !0))
              : m.set(T, {
                  value: null,
                  finished: p || !1,
                  cancelled: h || !1,
                });
          }),
            d && (d[_] = t[_]);
        }
      });
  const g = e._state;
  t.pause === !g.paused
    ? ((g.paused = t.pause), ir(t.pause ? g.pauseQueue : g.resumeQueue))
    : g.paused && (t.pause = !0);
  const y = (r || Object.keys(e.springs)).map((_) => e.springs[_].start(t)),
    w = t.cancel === !0 || xf(t, "cancel") === !0;
  (v || (w && g.asyncId)) &&
    y.push(
      kf(++e._lastAsyncId, {
        props: t,
        state: g,
        actions: {
          pause: Pl,
          resume: Pl,
          start(_, T) {
            w
              ? (Vr(g, e._lastAsyncId), T(Nn(e)))
              : ((_.onRest = a), T(If(v, _, g, e)));
          },
        },
      })
    ),
    g.paused &&
      (await new Promise((_) => {
        g.resumeQueue.add(_);
      }));
  const P = Wa(e, await Promise.all(y));
  if (o && P.finished && !(n && P.noop)) {
    const _ = Rf(t, o, i);
    if (_) return Lf(e, [_]), Nf(e, _, !0);
  }
  return c && z.batchedUpdates(() => c(P, e, e.item)), P;
}
function w0(e, t) {
  const n = new p0();
  return (n.key = e), t && ei(n, t), n;
}
function S0(e, t, n) {
  t.keys &&
    X(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function Lf(e, t) {
  X(t, (n) => {
    S0(e.springs, n, (r) => w0(r, e));
  });
}
var Ua = ({ children: e, ...t }) => {
    const n = O.useContext(vs),
      r = t.pause || !!n.pause,
      i = t.immediate || !!n.immediate;
    t = ps(() => ({ pause: r, immediate: i }), [r, i]);
    const { Provider: s } = vs;
    return O.createElement(s, { value: t }, e);
  },
  vs = x0(Ua, {});
Ua.Provider = vs.Provider;
Ua.Consumer = vs.Consumer;
function x0(e, t) {
  return (
    Object.assign(e, O.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var P0 = class extends Ha {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = jr(...t));
    const n = this._get(),
      r = El(n);
    Ba(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    it(t, n) || (qe(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && _c(this._active) && ko(this);
  }
  _get() {
    const e = R.arr(this.source) ? this.source.map(ve) : Ae(ve(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !_c(this._active) &&
      ((this.idle = !1),
      X(Us(this), (e) => {
        e.done = !1;
      }),
      be.skipAnimation
        ? (z.batchedUpdates(() => this.advance()), ko(this))
        : $s.start(this));
  }
  _attach() {
    let e = 1;
    X(Ae(this.source), (t) => {
      Le(t) && ei(t, this),
        Il(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    X(Ae(this.source), (e) => {
      Le(e) && Br(e, this);
    }),
      this._active.clear(),
      ko(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = Ae(this.source).reduce(
          (t, n) => Math.max(t, (Il(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function _0(e) {
  return e.idle !== !1;
}
function _c(e) {
  return !e.size || Array.from(e).every(_0);
}
function ko(e) {
  e.idle ||
    ((e.idle = !0),
    X(Us(e), (t) => {
      t.done = !0;
    }),
    $r(e, { type: "idle", parent: e }));
}
be.assign({ createStringInterpolator: pf, to: (e, t) => new P0(e, t) });
var Mf = /^--/;
function E0(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !Mf.test(e) &&
      !(yr.hasOwnProperty(e) && yr[e])
    ? t + "px"
    : ("" + t).trim();
}
var Ec = {};
function k0(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: r,
      children: i,
      scrollTop: s,
      scrollLeft: o,
      viewBox: a,
      ...c
    } = t,
    d = Object.values(c),
    v = Object.keys(c).map((g) =>
      n || e.hasAttribute(g)
        ? g
        : Ec[g] || (Ec[g] = g.replace(/([A-Z])/g, (y) => "-" + y.toLowerCase()))
    );
  i !== void 0 && (e.textContent = i);
  for (const g in r)
    if (r.hasOwnProperty(g)) {
      const y = E0(g, r[g]);
      Mf.test(g) ? e.style.setProperty(g, y) : (e.style[g] = y);
    }
  v.forEach((g, y) => {
    e.setAttribute(g, d[y]);
  }),
    s !== void 0 && (e.scrollTop = s),
    o !== void 0 && (e.scrollLeft = o),
    a !== void 0 && e.setAttribute("viewBox", a);
}
var yr = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  C0 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  I0 = ["Webkit", "Ms", "Moz", "O"];
yr = Object.keys(yr).reduce(
  (e, t) => (I0.forEach((n) => (e[C0(n, t)] = e[t])), e),
  yr
);
var T0 = /^(matrix|translate|scale|rotate|skew)/,
  R0 = /^(translate)/,
  O0 = /^(rotate|skew)/,
  Co = (e, t) => (R.num(e) && e !== 0 ? e + t : e),
  $i = (e, t) =>
    R.arr(e)
      ? e.every((n) => $i(n, t))
      : R.num(e)
      ? e === t
      : parseFloat(e) === t,
  N0 = class extends Vs {
    constructor({ x: e, y: t, z: n, ...r }) {
      const i = [],
        s = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        s.push((o) => [
          `translate3d(${o.map((a) => Co(a, "px")).join(",")})`,
          $i(o, 0),
        ])),
        ft(r, (o, a) => {
          if (a === "transform")
            i.push([o || ""]), s.push((c) => [c, c === ""]);
          else if (T0.test(a)) {
            if ((delete r[a], R.und(o))) return;
            const c = R0.test(a) ? "px" : O0.test(a) ? "deg" : "";
            i.push(Ae(o)),
              s.push(
                a === "rotate3d"
                  ? ([d, v, g, y]) => [
                      `rotate3d(${d},${v},${g},${Co(y, c)})`,
                      $i(y, 0),
                    ]
                  : (d) => [
                      `${a}(${d.map((v) => Co(v, c)).join(",")})`,
                      $i(d, a.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new L0(i, s)),
        super(r);
    }
  },
  L0 = class extends df {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        t = !0;
      return (
        X(this.inputs, (n, r) => {
          const i = ve(n[0]),
            [s, o] = this.transforms[r](R.arr(i) ? i : n.map(ve));
          (e += " " + s), (t = t && o);
        }),
        t ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && X(this.inputs, (t) => X(t, (n) => Le(n) && ei(n, this)));
    }
    observerRemoved(e) {
      e == 0 && X(this.inputs, (t) => X(t, (n) => Le(n) && Br(n, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), $r(this, e);
    }
  },
  M0 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
be.assign({
  batchedUpdates: Zh.unstable_batchedUpdates,
  createStringInterpolator: pf,
  colors: Tm,
});
var z0 = s0(M0, {
    applyAnimatedValues: k0,
    createAnimatedStyle: (e) => new N0(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  Nl = z0.animated,
  Ll = O.createContext(null);
function Io(e) {
  return e ? "scrollLeft" : "scrollTop";
}
function Ml(e, t) {
  const n = (r) => (r.type ? r.type === O.Fragment : r === O.Fragment);
  return O.Children.map(e, (r) => (n(r) ? Ml(r.props.children, t) : t(r)));
}
var kc = "translate3d(0px,0px,0px)",
  Ei = "translate(0px,0px)";
O.memo(
  O.forwardRef(
    (
      {
        horizontal: e,
        factor: t = 1,
        offset: n = 0,
        speed: r = 0,
        sticky: i,
        ...s
      },
      o
    ) => {
      const a = O.useContext(Ll),
        c = ps(() => {
          let w;
          if (i) w = (i.start || 0) * a.space;
          else {
            const P = Math.floor(n) * a.space,
              _ = a.space * n + P * r;
            w = -(a.current * r) + _;
          }
          return new Of({ space: i ? a.space : a.space * t, translate: w });
        }, []),
        d = ps(
          () => ({
            horizontal: e === void 0 || i ? a.horizontal : e,
            sticky: void 0,
            isSticky: !1,
            setPosition(w, P, _ = !1) {
              if (i) g(w, P);
              else {
                const T = Math.floor(n) * w,
                  m = w * n + T * r;
                c.start({
                  translate: -(P * r) + m,
                  config: a.config,
                  immediate: _,
                });
              }
            },
            setHeight(w, P = !1) {
              c.start({ space: i ? w : w * t, config: a.config, immediate: P });
            },
          }),
          []
        );
      gs(() => {
        if (i) {
          const w = i.start || 0,
            P = i.end || w + 1;
          d.sticky = { start: w, end: P };
        }
      }),
        O.useImperativeHandle(o, () => d);
      const v = O.useRef(),
        g = (w, P) => {
          const _ = d.sticky.start * w,
            T = d.sticky.end * w,
            m = P >= _ && P <= T;
          if (m === d.isSticky) return;
          d.isSticky = m;
          const p = v.current;
          (p.style.position = m ? "sticky" : "absolute"),
            c.set({ translate: m ? 0 : P < _ ? _ : T });
        };
      gs(() => {
        if (a)
          return (
            a.layers.add(d),
            a.update(),
            () => {
              a.layers.delete(d), a.update();
            }
          );
      });
      const y = c.springs.translate.to(
        d.horizontal
          ? (w) => `translate3d(${w}px,0,0)`
          : (w) => `translate3d(0,${w}px,0)`
      );
      return O.createElement(Nl.div, {
        ...s,
        ref: v,
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
          [d.horizontal ? "height" : "width"]: "100%",
          [d.horizontal ? "width" : "height"]: c.springs.space,
          WebkitTransform: y,
          msTransform: y,
          transform: y,
          ...s.style,
        },
      });
    }
  )
);
O.memo(
  O.forwardRef((e, t) => {
    const [n, r] = O.useState(!1),
      {
        pages: i,
        innerStyle: s,
        config: o = Ef.slow,
        enabled: a = !0,
        horizontal: c = !1,
        children: d,
        ...v
      } = e,
      g = O.useRef(),
      y = O.useRef(),
      w = ps(
        () => ({
          config: o,
          horizontal: c,
          busy: !1,
          space: 0,
          current: 0,
          offset: 0,
          controller: new Of({ scroll: 0 }),
          layers: new Set(),
          container: g,
          content: y,
          update: () => P(),
          scrollTo: (p) => _(p),
          stop: () => w.controller.stop(),
        }),
        []
      );
    O.useEffect(() => {
      w.config = o;
    }, [o]),
      O.useImperativeHandle(t, () => w);
    const P = () => {
        const p = g.current;
        if (!p) return;
        const h = c ? "clientWidth" : "clientHeight";
        w.space = p[h];
        const l = Io(c);
        a ? (w.current = p[l]) : (p[l] = w.current = w.offset * w.space);
        const u = y.current;
        if (u) {
          const f = c ? "width" : "height";
          u.style[f] = `${w.space * i}px`;
        }
        w.layers.forEach((f) => {
          f.setHeight(w.space, !0), f.setPosition(w.space, w.current, !0);
        });
      },
      _ = (p) => {
        const h = g.current,
          l = Io(c);
        (w.offset = p),
          w.controller.set({ scroll: w.current }),
          w.controller.stop().start({
            scroll: p * w.space,
            config: o,
            onChange({ value: { scroll: u } }) {
              h[l] = u;
            },
          });
      },
      T = (p) => {
        w.busy ||
          ((w.busy = !0),
          (w.current = p.target[Io(c)]),
          z.onStart(() => {
            w.layers.forEach((h) => h.setPosition(w.space, w.current)),
              (w.busy = !1);
          }));
      };
    O.useEffect(() => w.update()),
      gs(() => {
        r(!0);
        const p = () => {
          const h = () => w.update();
          z.onFrame(h), setTimeout(h, 150);
        };
        return (
          window.addEventListener("resize", p, !1),
          () => window.removeEventListener("resize", p, !1)
        );
      });
    const m = a
      ? {
          overflowY: c ? "hidden" : "scroll",
          overflowX: c ? "scroll" : "hidden",
        }
      : { overflowY: "hidden", overflowX: "hidden" };
    return O.createElement(
      Nl.div,
      {
        ...v,
        ref: g,
        onScroll: T,
        onWheel: a ? w.stop : void 0,
        onTouchStart: a ? w.stop : void 0,
        style: {
          position: "absolute",
          width: "100%",
          height: "100%",
          ...m,
          WebkitOverflowScrolling: "touch",
          WebkitTransform: Ei,
          msTransform: Ei,
          transform: kc,
          ...v.style,
        },
      },
      n &&
        O.createElement(
          O.Fragment,
          null,
          O.createElement(
            Nl.div,
            {
              ref: y,
              style: {
                overflow: "hidden",
                position: "absolute",
                [c ? "height" : "width"]: "100%",
                [c ? "width" : "height"]: w.space * i,
                WebkitTransform: Ei,
                msTransform: Ei,
                transform: kc,
                ...e.innerStyle,
              },
            },
            O.createElement(
              Ll.Provider,
              { value: w },
              Ml(d, (p) => !p.props.sticky && p)
            )
          ),
          O.createElement(
            Ll.Provider,
            { value: w },
            Ml(d, (p) => p.props.sticky && p)
          )
        )
    );
  })
);
var A0 = 4,
  D0 = 0.001,
  j0 = 1e-7,
  F0 = 10,
  sr = 11,
  ki = 1 / (sr - 1),
  $0 = typeof Float32Array == "function";
function zf(e, t) {
  return 1 - 3 * t + 3 * e;
}
function Af(e, t) {
  return 3 * t - 6 * e;
}
function Df(e) {
  return 3 * e;
}
function ys(e, t, n) {
  return ((zf(t, n) * e + Af(t, n)) * e + Df(t)) * e;
}
function jf(e, t, n) {
  return 3 * zf(t, n) * e * e + 2 * Af(t, n) * e + Df(t);
}
function B0(e, t, n, r, i) {
  var s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = ys(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > j0 && ++a < F0);
  return o;
}
function W0(e, t, n, r) {
  for (var i = 0; i < A0; ++i) {
    var s = jf(t, n, r);
    if (s === 0) return t;
    var o = ys(t, n, r) - e;
    t -= o / s;
  }
  return t;
}
function H0(e) {
  return e;
}
var U0 = function (t, n, r, i) {
  if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (t === n && r === i) return H0;
  for (var s = $0 ? new Float32Array(sr) : new Array(sr), o = 0; o < sr; ++o)
    s[o] = ys(o * ki, t, r);
  function a(c) {
    for (var d = 0, v = 1, g = sr - 1; v !== g && s[v] <= c; ++v) d += ki;
    --v;
    var y = (c - s[v]) / (s[v + 1] - s[v]),
      w = d + y * ki,
      P = jf(w, t, r);
    return P >= D0 ? W0(c, w, t, r) : P === 0 ? w : B0(c, d, d + ki, t, r);
  }
  return function (d) {
    return d === 0 ? 0 : d === 1 ? 1 : ys(a(d), n, i);
  };
};
const Cc = Ss(U0);
var Va = function (t) {
  (this.startX = t.startX),
    (this.startY = t.startY),
    (this.endX = t.endX),
    (this.endY = t.endY),
    (this.totalX = this.endX - this.startX),
    (this.totalY = this.endY - this.startY),
    (this.startMultiplierX = t.startMultiplierX || 1),
    (this.endMultiplierX = t.endMultiplierX || 1),
    (this.startMultiplierY = t.startMultiplierY || 1),
    (this.endMultiplierY = t.endMultiplierY || 1);
};
function At() {
  return (
    (At =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    At.apply(this, arguments)
  );
}
var ws;
(function (e) {
  (e.speed = "speed"),
    (e.translateX = "translateX"),
    (e.translateY = "translateY"),
    (e.rotate = "rotate"),
    (e.rotateX = "rotateX"),
    (e.rotateY = "rotateY"),
    (e.rotateZ = "rotateZ"),
    (e.scale = "scale"),
    (e.scaleX = "scaleX"),
    (e.scaleY = "scaleY"),
    (e.scaleZ = "scaleZ"),
    (e.opacity = "opacity");
})(ws || (ws = {}));
var Zt;
(function (e) {
  (e.px = "px"), (e["%"] = "%"), (e.vh = "vh"), (e.vw = "vw");
})(Zt || (Zt = {}));
var wr;
(function (e) {
  (e.deg = "deg"), (e.turn = "turn"), (e.rad = "rad");
})(wr || (wr = {}));
var zl;
(function (e) {
  e[""] = "";
})(zl || (zl = {}));
var Ge;
(function (e) {
  (e.vertical = "vertical"), (e.horizontal = "horizontal");
})(Ge || (Ge = {}));
var Ic;
(function (e) {
  (e.ease = "ease"),
    (e.easeIn = "easeIn"),
    (e.easeOut = "easeOut"),
    (e.easeInOut = "easeInOut"),
    (e.easeInQuad = "easeInQuad"),
    (e.easeInCubic = "easeInCubic"),
    (e.easeInQuart = "easeInQuart"),
    (e.easeInQuint = "easeInQuint"),
    (e.easeInSine = "easeInSine"),
    (e.easeInExpo = "easeInExpo"),
    (e.easeInCirc = "easeInCirc"),
    (e.easeOutQuad = "easeOutQuad"),
    (e.easeOutCubic = "easeOutCubic"),
    (e.easeOutQuart = "easeOutQuart"),
    (e.easeOutQuint = "easeOutQuint"),
    (e.easeOutSine = "easeOutSine"),
    (e.easeOutExpo = "easeOutExpo"),
    (e.easeOutCirc = "easeOutCirc"),
    (e.easeInOutQuad = "easeInOutQuad"),
    (e.easeInOutCubic = "easeInOutCubic"),
    (e.easeInOutQuart = "easeInOutQuart"),
    (e.easeInOutQuint = "easeInOutQuint"),
    (e.easeInOutSine = "easeInOutSine"),
    (e.easeInOutExpo = "easeInOutExpo"),
    (e.easeInOutCirc = "easeInOutCirc"),
    (e.easeInBack = "easeInBack"),
    (e.easeOutBack = "easeOutBack"),
    (e.easeInOutBack = "easeInOutBack");
})(Ic || (Ic = {}));
var Tc = 0;
function V0() {
  return ++Tc, Tc;
}
var Q0 = (function () {
    function e(n) {
      var r = n.el.getBoundingClientRect();
      if (n.view.scrollContainer) {
        var i = n.view.scrollContainer.getBoundingClientRect();
        r = At({}, r, {
          top: r.top - i.top,
          right: r.right - i.left,
          bottom: r.bottom - i.top,
          left: r.left - i.left,
        });
      }
      (this.height = n.el.offsetHeight),
        (this.width = n.el.offsetWidth),
        (this.left = r.left),
        (this.right = r.right),
        (this.top = r.top),
        (this.bottom = r.bottom),
        n.rootMargin && this._setRectWithRootMargin(n.rootMargin);
    }
    var t = e.prototype;
    return (
      (t._setRectWithRootMargin = function (r) {
        var i = r.top + r.bottom,
          s = r.left + r.right;
        (this.top -= r.top),
          (this.right += r.right),
          (this.bottom += r.bottom),
          (this.left -= r.left),
          (this.height += i),
          (this.width += s);
      }),
      e
    );
  })(),
  Y0 = [zl[""], Zt.px, Zt["%"], Zt.vh, Zt.vw, wr.deg, wr.turn, wr.rad];
function _n(e, t) {
  t === void 0 && (t = Zt["%"]);
  var n = { value: 0, unit: t };
  if (typeof e > "u") return n;
  var r = typeof e == "number" || typeof e == "string";
  if (!r)
    throw new Error(
      "Invalid value provided. Must provide a value as a string or number"
    );
  (e = String(e)),
    (n.value = parseFloat(e)),
    (n.unit = e.match(/[\d.\-+]*\s*(.*)/)[1] || t);
  var i = Y0.includes(n.unit);
  if (!i) throw new Error("Invalid unit provided.");
  return n;
}
var Rc = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInOutExpo: [1, 0, 0, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};
function Ff(e) {
  if (Array.isArray(e)) return Cc(e[0], e[1], e[2], e[3]);
  if (typeof e == "string" && typeof Rc[e] < "u") {
    var t = Rc[e];
    return Cc(t[0], t[1], t[2], t[3]);
  }
}
var X0 = Object.values(ws),
  b0 = {
    speed: "px",
    translateX: "%",
    translateY: "%",
    rotate: "deg",
    rotateX: "deg",
    rotateY: "deg",
    rotateZ: "deg",
    scale: "",
    scaleX: "",
    scaleY: "",
    scaleZ: "",
    opacity: "",
  };
function Oc(e, t) {
  var n = {};
  return (
    X0.forEach(function (r) {
      var i = b0[r];
      if (typeof (e == null ? void 0 : e[r]) == "number") {
        var s = e == null ? void 0 : e[r],
          o = (s || 0) * 10 + "px",
          a = (s || 0) * -10 + "px",
          c = _n(o),
          d = _n(a),
          v = { start: c.value, end: d.value, unit: c.unit };
        t === Ge.vertical && (n.translateY = v),
          t === Ge.horizontal && (n.translateX = v);
      }
      if (Array.isArray(e == null ? void 0 : e[r])) {
        var g = e == null ? void 0 : e[r];
        if (typeof g[0] < "u" && typeof g[1] < "u") {
          var y = _n(g == null ? void 0 : g[0], i),
            w = _n(g == null ? void 0 : g[1], i),
            P = Ff(g == null ? void 0 : g[2]);
          if (
            ((n[r] = { start: y.value, end: w.value, unit: y.unit, easing: P }),
            y.unit !== w.unit)
          )
            throw new Error(
              "Must provide matching units for the min and max offset values of each axis."
            );
        }
      }
    }),
    n
  );
}
function Nc(e, t, n, r) {
  var i = n - e,
    s = i / t;
  return r && (s = r(s)), s;
}
function G0(e, t, n) {
  var r = n >= e && n <= t;
  return r;
}
function Z0(e, t, n, r, i) {
  return ((n - t) * (e - r)) / (i - r) + t;
}
function $f(e, t) {
  var n = Z0(
    typeof e.easing == "function" ? e.easing(t) : t,
    (e == null ? void 0 : e.start) || 0,
    (e == null ? void 0 : e.end) || 0,
    0,
    1
  );
  return { value: n, unit: e == null ? void 0 : e.unit };
}
var K0 = Object.values(ws).filter(function (e) {
  return e !== "opacity";
});
function q0(e, t) {
  var n = Object.keys(t),
    r = n.includes("opacity"),
    i = "transform" + (r ? ",opacity" : "");
  e.style.willChange = i;
}
function J0(e, t, n) {
  if (n) {
    var r = tv(e, t),
      i = ev(e, t);
    (n.style.transform = r), (n.style.opacity = i);
  }
}
function ev(e, t) {
  var n = e.opacity && $f(e.opacity, t);
  if (typeof n > "u" || typeof n.value > "u" || typeof n.unit > "u") return "";
  var r = "" + n.value;
  return r;
}
function tv(e, t) {
  var n = K0.reduce(function (r, i) {
    var s = e[i] && $f(e[i], t);
    if (typeof s > "u" || typeof s.value > "u" || typeof s.unit > "u") return r;
    var o = i + "(" + s.value + s.unit + ")";
    return r + o;
  }, "");
  return n;
}
function Bi(e) {
  var t = e.el;
  t && ((t.style.transform = ""), (t.style.opacity = ""));
}
function nv(e, t, n, r) {
  var i = e.top - t.height,
    s = e.left - t.width,
    o = e.bottom,
    a = e.right;
  (s += n.x),
    (a += n.x),
    (i += n.y),
    (o += n.y),
    r &&
      (n.y + e.top < t.height && (i = 0),
      n.x + e.left < t.width && (s = 0),
      o > t.scrollHeight - t.height && (o = t.scrollHeight - t.height),
      a > t.scrollWidth - t.width && (a = t.scrollWidth - t.width));
  var c = new Va({ startX: s, startY: i, endX: a, endY: o });
  return c;
}
function cn(e, t, n) {
  var r = t > e,
    i = (Math.abs(e) + Math.abs(t)) * (r ? -1 : 1),
    s = n + i,
    o = Math.max(n / s, 1);
  return o;
}
function Lc(e, t) {
  var n = e.start,
    r = e.end,
    i = e.unit;
  if (i === "%") {
    var s = t / 100;
    (n = n * s), (r = r * s);
  }
  if (i === "vw") {
    var o = n / 100,
      a = r / 100;
    (n = window.innerWidth * o), (r = window.innerWidth * a);
  }
  if (i === "vh") {
    var c = n / 100,
      d = r / 100;
    (n = window.innerHeight * c), (r = window.innerHeight * d);
  }
  return { start: n, end: r };
}
var Mc = { start: 0, end: 0, unit: "" };
function rv(e, t, n, r, i, s) {
  var o = n.translateX || Mc,
    a = n.translateY || Mc,
    c = Lc(o, e.width),
    d = c.start,
    v = c.end,
    g = Lc(a, e.height),
    y = g.start,
    w = g.end,
    P = e.top - t.height,
    _ = e.left - t.width,
    T = e.bottom,
    m = e.right,
    p = 1,
    h = 1;
  i === Ge.vertical && ((p = cn(y, w, t.height + e.height)), (h = p));
  var l = 1,
    u = 1;
  if (
    (i === Ge.horizontal && ((l = cn(d, v, t.width + e.width)), (u = l)),
    y < 0 && (P = P + y * p),
    w > 0 && (T = T + w * h),
    d < 0 && (_ = _ + d * l),
    v > 0 && (m = m + v * u),
    (_ += r.x),
    (m += r.x),
    (P += r.y),
    (T += r.y),
    s)
  ) {
    var f = r.y + e.top < t.height,
      S = r.x + e.left < t.width,
      x = r.y + e.bottom > t.scrollHeight - t.height,
      k = r.x + e.right > t.scrollWidth - t.height;
    if (
      (f && x && ((p = 1), (h = 1), (P = 0), (T = t.scrollHeight - t.height)),
      S && k && ((l = 1), (u = 1), (_ = 0), (m = t.scrollWidth - t.width)),
      !f && x)
    ) {
      (P = e.top - t.height + r.y), (T = t.scrollHeight - t.height);
      var I = T - P;
      (p = cn(y, w, I)), (h = 1), y < 0 && (P = P + y * p);
    }
    if (!S && k) {
      (_ = e.left - t.width + r.x), (m = t.scrollWidth - t.width);
      var N = m - _;
      (l = cn(d, v, N)), (u = 1), d < 0 && (_ = _ + d * l);
    }
    if (f && !x) {
      (P = 0), (T = e.bottom + r.y);
      var j = T - P;
      (p = 1), (h = cn(y, w, j)), w > 0 && (T = T + w * h);
    }
    if (S && !k) {
      (_ = 0), (m = e.right + r.x);
      var B = m - _;
      (l = 1), (u = cn(d, v, B)), v > 0 && (m = m + v * u);
    }
  }
  var se = new Va({
    startX: _,
    startY: P,
    endX: m,
    endY: T,
    startMultiplierX: l,
    endMultiplierX: u,
    startMultiplierY: p,
    endMultiplierY: h,
  });
  return se;
}
function iv(e, t) {
  var n = At({}, e);
  return (
    n.translateX &&
      (n.translateX = At({}, e.translateX, {
        start: n.translateX.start * t.startMultiplierX,
        end: n.translateX.end * t.endMultiplierX,
      })),
    n.translateY &&
      (n.translateY = At({}, e.translateY, {
        start: n.translateY.start * t.startMultiplierY,
        end: n.translateY.end * t.endMultiplierY,
      })),
    n
  );
}
function sv(e, t, n) {
  return e.rootMargin || e.targetElement || e.shouldDisableScalingTranslations
    ? !1
    : !!(
        (t.translateX && n === Ge.horizontal) ||
        (t.translateY && n === Ge.vertical)
      );
}
var zc = function (t, n, r) {
    return Math.min(Math.max(t, n), r);
  },
  ov = (function () {
    function e(n) {
      (this.el = n.el),
        (this.props = n.props),
        (this.scrollAxis = n.scrollAxis),
        (this.disabledParallaxController = n.disabledParallaxController || !1),
        (this.id = V0()),
        (this.effects = Oc(this.props, this.scrollAxis)),
        (this.isInView = null),
        (this.progress = 0),
        this._setElementEasing(n.props.easing),
        q0(n.el, this.effects);
    }
    var t = e.prototype;
    return (
      (t.updateProps = function (r) {
        return (
          (this.props = At({}, this.props, r)),
          (this.effects = Oc(r, this.scrollAxis)),
          this._setElementEasing(r.easing),
          this
        );
      }),
      (t.setCachedAttributes = function (r, i) {
        Bi(this),
          (this.rect = new Q0({
            el: this.props.targetElement || this.el,
            rootMargin: this.props.rootMargin,
            view: r,
          }));
        var s = sv(this.props, this.effects, this.scrollAxis);
        return typeof this.props.startScroll == "number" &&
          typeof this.props.endScroll == "number"
          ? ((this.limits = new Va({
              startX: this.props.startScroll,
              startY: this.props.startScroll,
              endX: this.props.endScroll,
              endY: this.props.endScroll,
            })),
            this._setElementStyles(),
            this)
          : (s
              ? ((this.limits = rv(
                  this.rect,
                  r,
                  this.effects,
                  i,
                  this.scrollAxis,
                  this.props.shouldAlwaysCompleteAnimation
                )),
                (this.scaledEffects = iv(this.effects, this.limits)))
              : (this.limits = nv(
                  this.rect,
                  r,
                  i,
                  this.props.shouldAlwaysCompleteAnimation
                )),
            this._setElementStyles(),
            this);
      }),
      (t._updateElementIsInView = function (r) {
        var i = this.isInView === null;
        r !== this.isInView &&
          (r
            ? this.props.onEnter && this.props.onEnter(this)
            : i ||
              (this._setFinalProgress(),
              this._setElementStyles(),
              this.props.onExit && this.props.onExit(this))),
          (this.isInView = r);
      }),
      (t._setFinalProgress = function () {
        var r = zc(Math.round(this.progress), 0, 1);
        this._updateElementProgress(r);
      }),
      (t._setElementStyles = function () {
        if (!(this.props.disabled || this.disabledParallaxController)) {
          var r = this.scaledEffects || this.effects;
          J0(r, this.progress, this.el);
        }
      }),
      (t._updateElementProgress = function (r) {
        (this.progress = r),
          this.props.onProgressChange &&
            this.props.onProgressChange(this.progress),
          this.props.onChange && this.props.onChange(this);
      }),
      (t._setElementEasing = function (r) {
        this.easing = Ff(r);
      }),
      (t.updateElementOptions = function (r) {
        (this.scrollAxis = r.scrollAxis),
          (this.disabledParallaxController =
            r.disabledParallaxController || !1);
      }),
      (t.updatePosition = function (r) {
        if (!this.limits) return this;
        var i = this.scrollAxis === Ge.vertical,
          s = this.isInView === null,
          o = i ? this.limits.startY : this.limits.startX,
          a = i ? this.limits.endY : this.limits.endX,
          c = i ? this.limits.totalY : this.limits.totalX,
          d = i ? r.y : r.x,
          v = G0(o, a, d);
        if ((this._updateElementIsInView(v), v)) {
          var g = Nc(o, c, d, this.easing);
          this._updateElementProgress(g), this._setElementStyles();
        } else
          s &&
            ((this.progress = zc(Math.round(Nc(o, c, d, this.easing)), 0, 1)),
            this._setElementStyles());
        return this;
      }),
      e
    );
  })(),
  Ac = (function () {
    function e(n) {
      (this.scrollContainer = n.scrollContainer),
        (this.width = n.width),
        (this.height = n.height),
        (this.scrollHeight = n.scrollHeight),
        (this.scrollWidth = n.scrollWidth);
    }
    var t = e.prototype;
    return (
      (t.hasChanged = function (r) {
        return (
          r.width !== this.width ||
          r.height !== this.height ||
          r.scrollWidth !== this.scrollWidth ||
          r.scrollHeight !== this.scrollHeight
        );
      }),
      (t.setSize = function (r) {
        return (
          (this.width = r.width),
          (this.height = r.height),
          (this.scrollHeight = r.scrollHeight),
          (this.scrollWidth = r.scrollWidth),
          this
        );
      }),
      e
    );
  })(),
  lv = (function () {
    function e(n, r) {
      (this.x = n), (this.y = r), (this.dx = 0), (this.dy = 0);
    }
    var t = e.prototype;
    return (
      (t.setScroll = function (r, i) {
        return (
          (this.dx = r - this.x),
          (this.dy = i - this.y),
          (this.x = r),
          (this.y = i),
          this
        );
      }),
      e
    );
  })();
function av() {
  var e = !1;
  try {
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        return (e = !0), !0;
      },
    });
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
}
var Bf = (function () {
  function e(n) {
    var r = n.scrollAxis,
      i = r === void 0 ? Ge.vertical : r,
      s = n.scrollContainer,
      o = n.disabled,
      a = o === void 0 ? !1 : o;
    (this.disabled = a),
      (this.scrollAxis = i),
      (this.elements = []),
      (this._hasScrollContainer = !!s),
      (this.viewEl = s ?? window);
    var c = this._getScrollPosition(),
      d = c[0],
      v = c[1];
    (this.scroll = new lv(d, v)),
      (this.view = new Ac({
        width: 0,
        height: 0,
        scrollWidth: 0,
        scrollHeight: 0,
        scrollContainer: this._hasScrollContainer ? s : void 0,
      })),
      (this._ticking = !1),
      (this._supportsPassive = av()),
      this._bindAllMethods(),
      !this.disabled &&
        (this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize());
  }
  e.init = function (r) {
    var i = typeof window < "u";
    if (!i)
      throw new Error(
        "Looks like ParallaxController.init() was called on the server. This method must be called on the client."
      );
    return new e(r);
  };
  var t = e.prototype;
  return (
    (t._bindAllMethods = function () {
      var r = this;
      [
        "_addListeners",
        "_removeListeners",
        "_getScrollPosition",
        "_handleScroll",
        "_handleUpdateCache",
        "_updateAllElements",
        "_updateElementPosition",
        "_setViewSize",
        "_addResizeObserver",
        "_checkIfViewHasChanged",
        "_getViewParams",
        "getElements",
        "createElement",
        "removeElementById",
        "resetElementStyles",
        "updateElementPropsById",
        "update",
        "updateScrollContainer",
        "destroy",
      ].forEach(function (i) {
        r[i] = r[i].bind(r);
      });
    }),
    (t._addListeners = function (r) {
      r.addEventListener(
        "scroll",
        this._handleScroll,
        this._supportsPassive ? { passive: !0 } : !1
      ),
        window.addEventListener("resize", this._handleUpdateCache, !1),
        window.addEventListener("blur", this._handleUpdateCache, !1),
        window.addEventListener("focus", this._handleUpdateCache, !1),
        window.addEventListener("load", this._handleUpdateCache, !1);
    }),
    (t._removeListeners = function (r) {
      var i;
      r.removeEventListener("scroll", this._handleScroll, !1),
        window.removeEventListener("resize", this._handleUpdateCache, !1),
        window.removeEventListener("blur", this._handleUpdateCache, !1),
        window.removeEventListener("focus", this._handleUpdateCache, !1),
        window.removeEventListener("load", this._handleUpdateCache, !1),
        (i = this._resizeObserver) == null || i.disconnect();
    }),
    (t._addResizeObserver = function () {
      var r = this;
      try {
        var i = this._hasScrollContainer
          ? this.viewEl
          : document.documentElement;
        (this._resizeObserver = new ResizeObserver(function () {
          return r.update();
        })),
          this._resizeObserver.observe(i);
      } catch {
        console.warn(
          "Failed to create the resize observer in the ParallaxContoller"
        );
      }
    }),
    (t._getScrollPosition = function () {
      var r = this._hasScrollContainer
          ? this.viewEl.scrollLeft
          : window.pageXOffset,
        i = this._hasScrollContainer
          ? this.viewEl.scrollTop
          : window.pageYOffset;
      return [r, i];
    }),
    (t._handleScroll = function () {
      var r,
        i = this._getScrollPosition(),
        s = i[0],
        o = i[1];
      this.scroll.setScroll(s, o),
        !this._ticking &&
          ((r = this.elements) == null ? void 0 : r.length) > 0 &&
          ((this._ticking = !0),
          window.requestAnimationFrame(this._updateAllElements));
    }),
    (t._handleUpdateCache = function () {
      this._setViewSize(), this._updateAllElements({ updateCache: !0 });
    }),
    (t._updateAllElements = function (r) {
      var i = this,
        s = r === void 0 ? {} : r,
        o = s.updateCache;
      this.elements &&
        this.elements.forEach(function (a) {
          o && a.setCachedAttributes(i.view, i.scroll),
            i._updateElementPosition(a);
        }),
        (this._ticking = !1);
    }),
    (t._updateElementPosition = function (r) {
      r.props.disabled || this.disabled || r.updatePosition(this.scroll);
    }),
    (t._getViewParams = function () {
      if (this._hasScrollContainer) {
        var r = this.viewEl.offsetWidth,
          i = this.viewEl.offsetHeight,
          s = this.viewEl.scrollHeight,
          o = this.viewEl.scrollWidth;
        return this.view.setSize({
          width: r,
          height: i,
          scrollHeight: s,
          scrollWidth: o,
        });
      }
      var a = document.documentElement,
        c = window.innerWidth || a.clientWidth,
        d = window.innerHeight || a.clientHeight,
        v = a.scrollHeight,
        g = a.scrollWidth;
      return { width: c, height: d, scrollHeight: v, scrollWidth: g };
    }),
    (t._setViewSize = function () {
      return this.view.setSize(this._getViewParams());
    }),
    (t._checkIfViewHasChanged = function () {
      return this.view.hasChanged(this._getViewParams());
    }),
    (t.getElements = function () {
      return this.elements;
    }),
    (t.createElement = function (r) {
      var i = new ov(
        At({}, r, {
          scrollAxis: this.scrollAxis,
          disabledParallaxController: this.disabled,
        })
      );
      return (
        i.setCachedAttributes(this.view, this.scroll),
        (this.elements = this.elements ? [].concat(this.elements, [i]) : [i]),
        this._updateElementPosition(i),
        this._checkIfViewHasChanged() && this.update(),
        i
      );
    }),
    (t.removeElementById = function (r) {
      this.elements &&
        (this.elements = this.elements.filter(function (i) {
          return i.id !== r;
        }));
    }),
    (t.updateElementPropsById = function (r, i) {
      this.elements &&
        (this.elements = this.elements.map(function (s) {
          return s.id === r ? s.updateProps(i) : s;
        })),
        this.update();
    }),
    (t.resetElementStyles = function (r) {
      Bi(r);
    }),
    (t.update = function () {
      var r = this._getScrollPosition(),
        i = r[0],
        s = r[1];
      this.scroll.setScroll(i, s),
        this._setViewSize(),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.updateScrollContainer = function (r) {
      this._removeListeners(this.viewEl),
        (this.viewEl = r),
        (this._hasScrollContainer = !!r),
        (this.view = new Ac({
          width: 0,
          height: 0,
          scrollWidth: 0,
          scrollHeight: 0,
          scrollContainer: r,
        })),
        this._setViewSize(),
        this._addListeners(this.viewEl),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.disableParallaxController = function () {
      (this.disabled = !0),
        this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (r) {
            return Bi(r);
          });
    }),
    (t.enableParallaxController = function () {
      var r = this;
      (this.disabled = !1),
        this.elements &&
          this.elements.forEach(function (i) {
            return i.updateElementOptions({
              disabledParallaxController: !1,
              scrollAxis: r.scrollAxis,
            });
          }),
        this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize();
    }),
    (t.disableAllElements = function () {
      console.warn("deprecated: use disableParallaxController() instead"),
        this.elements &&
          (this.elements = this.elements.map(function (r) {
            return r.updateProps({ disabled: !0 });
          })),
        this.update();
    }),
    (t.enableAllElements = function () {
      console.warn("deprecated: use enableParallaxController() instead"),
        this.elements &&
          (this.elements = this.elements.map(function (r) {
            return r.updateProps({ disabled: !1 });
          })),
        this.update();
    }),
    (t.destroy = function () {
      this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (r) {
            return Bi(r);
          }),
        (this.elements = void 0);
    }),
    e
  );
})();
function Qr() {
  return (
    (Qr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Qr.apply(this, arguments)
  );
}
function Qa(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function uv(e) {
  return (
    Object.keys(e).forEach(function (t) {
      return e[t] === void 0 && delete e[t];
    }),
    e
  );
}
var cv = [
  "disabled",
  "easing",
  "endScroll",
  "onChange",
  "onEnter",
  "onExit",
  "onProgressChange",
  "opacity",
  "rootMargin",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "shouldAlwaysCompleteAnimation",
  "shouldDisableScalingTranslations",
  "speed",
  "startScroll",
  "targetElement",
  "translateX",
  "translateY",
];
function Wf(e) {
  var t = e.disabled,
    n = e.easing,
    r = e.endScroll,
    i = e.onChange,
    s = e.onEnter,
    o = e.onExit,
    a = e.onProgressChange,
    c = e.opacity,
    d = e.rootMargin,
    v = e.rotate,
    g = e.rotateX,
    y = e.rotateY,
    w = e.rotateZ,
    P = e.scale,
    _ = e.scaleX,
    T = e.scaleY,
    m = e.scaleZ,
    p = e.shouldAlwaysCompleteAnimation,
    h = e.shouldDisableScalingTranslations,
    l = e.speed,
    u = e.startScroll,
    f = e.targetElement,
    S = e.translateX,
    x = e.translateY,
    k = Qa(e, cv),
    I = uv({
      disabled: t,
      easing: n,
      endScroll: r,
      onChange: i,
      onEnter: s,
      onExit: o,
      onProgressChange: a,
      opacity: c,
      rootMargin: d,
      rotate: v,
      rotateX: g,
      rotateY: y,
      rotateZ: w,
      scale: P,
      scaleX: _,
      scaleY: T,
      scaleZ: m,
      shouldAlwaysCompleteAnimation: p,
      shouldDisableScalingTranslations: h,
      speed: l,
      startScroll: u,
      targetElement: f,
      translateX: S,
      translateY: x,
    });
  return { parallaxProps: I, rest: k };
}
function dv(e) {
  O.useEffect(
    function () {
      var t = typeof window > "u",
        n = e instanceof Bf;
      if (!t && !e && !n)
        throw new Error(
          "Must wrap your application's <Parallax /> components in a <ParallaxProvider />."
        );
    },
    [e]
  );
}
var Hf = Ee.createContext(null);
function hv() {
  var e = O.useContext(Hf),
    t = typeof window > "u";
  if (t) return null;
  if (!e)
    throw new Error(
      "Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>"
    );
  return e;
}
function fv(e) {
  var t = hv(),
    n = O.useRef(null),
    r = Wf(e),
    i = r.parallaxProps;
  dv(t);
  var s = O.useState(),
    o = s[0],
    a = s[1];
  return (
    O.useEffect(function () {
      var c;
      if (n.current instanceof HTMLElement) {
        var d = { el: n.current, props: i };
        (c = t == null ? void 0 : t.createElement(d)), a(c);
      } else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
      return function () {
        c && (t == null || t.removeElementById(c.id));
      };
    }, []),
    O.useEffect(
      function () {
        o &&
          (e.disabled && (t == null || t.resetElementStyles(o)),
          t == null || t.updateElementPropsById(o.id, i));
      },
      [
        e.disabled,
        e.easing,
        e.endScroll,
        e.onChange,
        e.onEnter,
        e.onExit,
        e.onProgressChange,
        e.opacity,
        e.rootMargin,
        e.rotate,
        e.rotateX,
        e.rotateY,
        e.rotateZ,
        e.scale,
        e.scaleX,
        e.scaleY,
        e.scaleZ,
        e.shouldAlwaysCompleteAnimation,
        e.shouldDisableScalingTranslations,
        e.speed,
        e.startScroll,
        e.targetElement,
        e.translateX,
        e.translateY,
      ]
    ),
    { ref: n, controller: t, element: o }
  );
}
var pv = { height: 0 };
function gv(e) {
  if (Array.isArray(e.translateY)) {
    var t = _n(e.translateY[0]),
      n = _n(e.translateY[1]);
    if (t.unit === "px" && n.unit === "px")
      return {
        top: Math.abs(n.value) * -1 + "px",
        bottom: Math.abs(t.value) * -1 + "px",
      };
    if (t.unit === "%" && n.unit === "%") {
      var r,
        i,
        s =
          (r =
            (i = e.targetElement) == null
              ? void 0
              : i.getBoundingClientRect()) != null
            ? r
            : pv,
        o = Math.abs(s.height * 0.01 * n.value) * -1,
        a = Math.abs(s.height * 0.01 * t.value) * -1;
      return { top: o + "px", bottom: a + "px" };
    }
  }
  if (e.speed) {
    var c = e.speed || 0,
      d = Math.abs(c) * 10 * -1;
    return { top: d + "px", bottom: d + "px" };
  }
  return {};
}
function mv(e) {
  return e.image
    ? {
        backgroundImage: "url(" + e.image + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : {};
}
var vv = ["children", "disabled", "style", "expanded", "image", "testId"],
  yv = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  wt = function (t) {
    var n = Wf(t),
      r = n.parallaxProps,
      i = n.rest,
      s = i.style,
      o = i.expanded,
      a = o === void 0 ? !0 : o,
      c = i.testId,
      d = Qa(i, vv),
      v = mv(t),
      g = a ? gv(t) : {},
      y = fv(
        Qr(
          {
            targetElement: t.targetElement,
            shouldDisableScalingTranslations: !0,
          },
          r
        )
      );
    return Ee.createElement(
      "div",
      Object.assign(
        { "data-testid": c, ref: y.ref, style: Qr({}, v, yv, g, s) },
        d
      ),
      i.children
    );
  },
  wv = ["disabled", "style", "layers"],
  Sv = { position: "relative", overflow: "hidden", width: "100%" },
  xv = function (t) {
    var n = O.useState(null),
      r = n[0],
      i = n[1],
      s = O.useRef(null);
    O.useEffect(function () {
      i(s.current);
    }, []);
    var o = t.style,
      a = t.layers,
      c = a === void 0 ? [] : a,
      d = Qa(t, wv);
    function v() {
      if (r) {
        var y = c && c.length > 0;
        if (y)
          return c.map(function (w, P) {
            return Ee.createElement(
              wt,
              Object.assign({}, w, {
                targetElement: r,
                key: "layer-" + P,
                testId: "layer-" + P,
              })
            );
          });
      }
      return null;
    }
    function g() {
      return r
        ? Ee.Children.map(t.children, function (y) {
            var w = y;
            if ((w == null ? void 0 : w.type) === wt) {
              var P = Ee.cloneElement(w, { targetElement: r });
              return P;
            }
            return y;
          })
        : null;
    }
    return Ee.createElement(
      "div",
      Object.assign({ ref: s, style: Qr({}, Sv, o) }, d),
      v(),
      g()
    );
  },
  Pv = function (t) {
    var n = typeof window > "u";
    return n ? null : Bf.init(t);
  };
function _v(e) {
  var t = O.useRef(null);
  return (
    t.current ||
      (t.current = Pv({
        scrollAxis: e.scrollAxis || Ge.vertical,
        scrollContainer: e.scrollContainer,
        disabled: e.isDisabled,
      })),
    O.useEffect(
      function () {
        e.scrollContainer &&
          t.current &&
          t.current.updateScrollContainer(e.scrollContainer);
      },
      [e.scrollContainer, t.current]
    ),
    O.useEffect(
      function () {
        e.isDisabled && t.current && t.current.disableParallaxController(),
          !e.isDisabled && t.current && t.current.enableParallaxController();
      },
      [e.isDisabled, t.current]
    ),
    O.useEffect(function () {
      return function () {
        t != null && t.current && (t == null || t.current.destroy());
      };
    }, []),
    Ee.createElement(Hf.Provider, { value: t.current }, e.children)
  );
}
function Ev() {
  return E.jsx(E.Fragment, {
    children: E.jsxs(xv, {
      className: "w-100 full-height section-header",
      children: [
        E.jsx(wt, {
          speed: -30,
          children: E.jsx("div", {
            className: "w-100 full-height header-bg-5",
          }),
        }),
        E.jsx(wt, {
          speed: -20,
          children: E.jsx("div", {
            className: "w-100 full-height header-bg-4",
          }),
        }),
        E.jsx(wt, {
          speed: -10,
          children: E.jsx("div", {
            className: "w-100 full-height header-bg-3",
          }),
        }),
        E.jsx(wt, {
          speed: 0,
          children: E.jsx("div", {
            className: "w-100 full-height header-bg-2",
          }),
        }),
        E.jsx(wt, {
          speed: -35,
          children: E.jsx("img", {
            src: "/assets/img/logo.png",
            className: "header-logo",
          }),
        }),
        E.jsx(wt, {
          speed: 15,
          children: E.jsx("div", {
            className: "w-100 full-height header-bg-1",
          }),
        }),
      ],
    }),
  });
}
const Uf = O.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const s = Na(e, "row"),
      o = qh(),
      a = Jh(),
      c = `${s}-cols`,
      d = [];
    return (
      o.forEach((v) => {
        const g = r[v];
        delete r[v];
        let y;
        g != null && typeof g == "object" ? ({ cols: y } = g) : (y = g);
        const w = v !== a ? `-${v}` : "";
        y != null && d.push(`${c}${w}-${y}`);
      }),
      E.jsx(n, { ref: i, ...r, className: js(t, s, ...d) })
    );
  }
);
Uf.displayName = "Row";
const Ya = Uf;
function kv({ as: e, bsPrefix: t, className: n, ...r }) {
  t = Na(t, "col");
  const i = qh(),
    s = Jh(),
    o = [],
    a = [];
  return (
    i.forEach((c) => {
      const d = r[c];
      delete r[c];
      let v, g, y;
      typeof d == "object" && d != null
        ? ({ span: v, offset: g, order: y } = d)
        : (v = d);
      const w = c !== s ? `-${c}` : "";
      v && o.push(v === !0 ? `${t}${w}` : `${t}${w}-${v}`),
        y != null && a.push(`order${w}-${y}`),
        g != null && a.push(`offset${w}-${g}`);
    }),
    [
      { ...r, className: js(n, ...o, ...a) },
      { as: e, bsPrefix: t, spans: o },
    ]
  );
}
const Vf = O.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: i = "div", bsPrefix: s, spans: o }] =
    kv(e);
  return E.jsx(i, { ...r, ref: t, className: js(n, !o.length && s) });
});
Vf.displayName = "Col";
const Yr = Vf;
function Cv() {
  return E.jsx(E.Fragment, {
    children: E.jsx(nt, {
      fluid: !0,
      className: "section-intro",
      children: E.jsx(nt, {
        className: "py-5",
        children: E.jsxs(Ya, {
          className: "py-5",
          children: [
            E.jsx(Yr, {
              md: 7,
              className: "border intro-text p-4 p-sm-2 p-md-4 p-lg-5",
              children: E.jsxs("div", {
                className: "border",
                children: [
                  E.jsx("h1", { children: "We're getting married!" }),
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada pretium interdum. Nulla rhoncus eleifend est non dapibus. Fusce vitae vulputate enim, ut sagittis lacus. Phasellus efficitur lorem sed lorem lacinia consequat. Curabitur bibendum ut nisl congue malesuada. Ut purus enim, posuere fringilla nunc sit amet, bibendum parturient montes, nascetur ridiculus mus. Phasellus at orci a odio venenatis interdum vitae vitae sem.",
                ],
              }),
            }),
            E.jsx(Yr, {
              md: 5,
              className: "border intro-photo p-4 p-md-0 p-lg-3 p-xl-5",
              children: E.jsx("img", { src: "/assets/img/intro-photo.png" }),
            }),
          ],
        }),
      }),
    }),
  });
}
var Al = { exports: {} };
(function (e, t) {
  (function (n, r) {
    r(t);
  })(Yf, function (n) {
    class r {
      constructor(l, u) {
        (this.state = {
          angle: 0,
          area: [],
          position: { x: 0, y: 0 },
          hardAngle: 0,
          hardDrawingAngle: 0,
        }),
          (this.createdDensity = u),
          (this.nowDrawingDensity = this.createdDensity),
          (this.render = l);
      }
      setDensity(l) {
        (this.createdDensity = l), (this.nowDrawingDensity = l);
      }
      setDrawingDensity(l) {
        this.nowDrawingDensity = l;
      }
      setPosition(l) {
        this.state.position = l;
      }
      setAngle(l) {
        this.state.angle = l;
      }
      setArea(l) {
        this.state.area = l;
      }
      setHardDrawingAngle(l) {
        this.state.hardDrawingAngle = l;
      }
      setHardAngle(l) {
        (this.state.hardAngle = l), (this.state.hardDrawingAngle = l);
      }
      setOrientation(l) {
        this.orientation = l;
      }
      getDrawingDensity() {
        return this.nowDrawingDensity;
      }
      getDensity() {
        return this.createdDensity;
      }
      getHardAngle() {
        return this.state.hardAngle;
      }
    }
    class i extends r {
      constructor(l, u, f) {
        super(l, f),
          (this.image = null),
          (this.isLoad = !1),
          (this.loadingAngle = 0),
          (this.image = new Image()),
          (this.image.src = u);
      }
      draw(l) {
        const u = this.render.getContext(),
          f = this.render.convertToGlobal(this.state.position),
          S = this.render.getRect().pageWidth,
          x = this.render.getRect().height;
        u.save(), u.translate(f.x, f.y), u.beginPath();
        for (let k of this.state.area)
          k !== null &&
            ((k = this.render.convertToGlobal(k)),
            u.lineTo(k.x - f.x, k.y - f.y));
        u.rotate(this.state.angle),
          u.clip(),
          this.isLoad
            ? u.drawImage(this.image, 0, 0, S, x)
            : this.drawLoader(u, { x: 0, y: 0 }, S, x),
          u.restore();
      }
      simpleDraw(l) {
        const u = this.render.getRect(),
          f = this.render.getContext(),
          S = u.pageWidth,
          x = u.height,
          k = l === 1 ? u.left + u.pageWidth : u.left,
          I = u.top;
        this.isLoad
          ? f.drawImage(this.image, k, I, S, x)
          : this.drawLoader(f, { x: k, y: I }, S, x);
      }
      drawLoader(l, u, f, S) {
        l.beginPath(),
          (l.strokeStyle = "rgb(200, 200, 200)"),
          (l.fillStyle = "rgb(255, 255, 255)"),
          (l.lineWidth = 1),
          l.rect(u.x + 1, u.y + 1, f - 1, S - 1),
          l.stroke(),
          l.fill();
        const x = { x: u.x + f / 2, y: u.y + S / 2 };
        l.beginPath(),
          (l.lineWidth = 10),
          l.arc(
            x.x,
            x.y,
            20,
            this.loadingAngle,
            (3 * Math.PI) / 2 + this.loadingAngle
          ),
          l.stroke(),
          l.closePath(),
          (this.loadingAngle += 0.07),
          this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
      }
      load() {
        this.isLoad ||
          (this.image.onload = () => {
            this.isLoad = !0;
          });
      }
      newTemporaryCopy() {
        return this;
      }
      getTemporaryCopy() {
        return this;
      }
      hideTemporaryCopy() {}
    }
    class s {
      constructor(l, u) {
        (this.pages = []),
          (this.currentPageIndex = 0),
          (this.currentSpreadIndex = 0),
          (this.landscapeSpread = []),
          (this.portraitSpread = []),
          (this.render = u),
          (this.app = l),
          (this.currentPageIndex = 0),
          (this.isShowCover = this.app.getSettings().showCover);
      }
      destroy() {
        this.pages = [];
      }
      createSpread() {
        (this.landscapeSpread = []), (this.portraitSpread = []);
        for (let u = 0; u < this.pages.length; u++)
          this.portraitSpread.push([u]);
        let l = 0;
        this.isShowCover &&
          (this.pages[0].setDensity("hard"),
          this.landscapeSpread.push([l]),
          l++);
        for (let u = l; u < this.pages.length; u += 2)
          u < this.pages.length - 1
            ? this.landscapeSpread.push([u, u + 1])
            : (this.landscapeSpread.push([u]),
              this.pages[u].setDensity("hard"));
      }
      getSpread() {
        return this.render.getOrientation() === "landscape"
          ? this.landscapeSpread
          : this.portraitSpread;
      }
      getSpreadIndexByPage(l) {
        const u = this.getSpread();
        for (let f = 0; f < u.length; f++)
          if (l === u[f][0] || l === u[f][1]) return f;
        return null;
      }
      getPageCount() {
        return this.pages.length;
      }
      getPages() {
        return this.pages;
      }
      getPage(l) {
        if (l >= 0 && l < this.pages.length) return this.pages[l];
        throw new Error("Invalid page number");
      }
      nextBy(l) {
        const u = this.pages.indexOf(l);
        return u < this.pages.length - 1 ? this.pages[u + 1] : null;
      }
      prevBy(l) {
        const u = this.pages.indexOf(l);
        return u > 0 ? this.pages[u - 1] : null;
      }
      getFlippingPage(l) {
        const u = this.currentSpreadIndex;
        if (this.render.getOrientation() === "portrait")
          return l === 0 ? this.pages[u].newTemporaryCopy() : this.pages[u - 1];
        {
          const f = l === 0 ? this.getSpread()[u + 1] : this.getSpread()[u - 1];
          return f.length === 1 || l === 0
            ? this.pages[f[0]]
            : this.pages[f[1]];
        }
      }
      getBottomPage(l) {
        const u = this.currentSpreadIndex;
        if (this.render.getOrientation() === "portrait")
          return l === 0 ? this.pages[u + 1] : this.pages[u - 1];
        {
          const f = l === 0 ? this.getSpread()[u + 1] : this.getSpread()[u - 1];
          return f.length === 1
            ? this.pages[f[0]]
            : l === 0
            ? this.pages[f[1]]
            : this.pages[f[0]];
        }
      }
      showNext() {
        this.currentSpreadIndex < this.getSpread().length &&
          (this.currentSpreadIndex++, this.showSpread());
      }
      showPrev() {
        this.currentSpreadIndex > 0 &&
          (this.currentSpreadIndex--, this.showSpread());
      }
      getCurrentPageIndex() {
        return this.currentPageIndex;
      }
      show(l = null) {
        if (
          (l === null && (l = this.currentPageIndex),
          l < 0 || l >= this.pages.length)
        )
          return;
        const u = this.getSpreadIndexByPage(l);
        u !== null && ((this.currentSpreadIndex = u), this.showSpread());
      }
      getCurrentSpreadIndex() {
        return this.currentSpreadIndex;
      }
      setCurrentSpreadIndex(l) {
        if (!(l >= 0 && l < this.getSpread().length))
          throw new Error("Invalid page");
        this.currentSpreadIndex = l;
      }
      showSpread() {
        const l = this.getSpread()[this.currentSpreadIndex];
        l.length === 2
          ? (this.render.setLeftPage(this.pages[l[0]]),
            this.render.setRightPage(this.pages[l[1]]))
          : this.render.getOrientation() === "landscape" &&
            l[0] === this.pages.length - 1
          ? (this.render.setLeftPage(this.pages[l[0]]),
            this.render.setRightPage(null))
          : (this.render.setLeftPage(null),
            this.render.setRightPage(this.pages[l[0]])),
          (this.currentPageIndex = l[0]),
          this.app.updatePageIndex(this.currentPageIndex);
      }
    }
    class o extends s {
      constructor(l, u, f) {
        super(l, u), (this.imagesHref = f);
      }
      load() {
        for (const l of this.imagesHref) {
          const u = new i(this.render, l, "soft");
          u.load(), this.pages.push(u);
        }
        this.createSpread();
      }
    }
    class a {
      static GetDistanceBetweenTwoPoint(l, u) {
        return l === null || u === null
          ? 1 / 0
          : Math.sqrt(Math.pow(u.x - l.x, 2) + Math.pow(u.y - l.y, 2));
      }
      static GetSegmentLength(l) {
        return a.GetDistanceBetweenTwoPoint(l[0], l[1]);
      }
      static GetAngleBetweenTwoLine(l, u) {
        const f = l[0].y - l[1].y,
          S = u[0].y - u[1].y,
          x = l[1].x - l[0].x,
          k = u[1].x - u[0].x;
        return Math.acos(
          (f * S + x * k) /
            (Math.sqrt(f * f + x * x) * Math.sqrt(S * S + k * k))
        );
      }
      static PointInRect(l, u) {
        return u === null
          ? null
          : u.x >= l.left &&
            u.x <= l.width + l.left &&
            u.y >= l.top &&
            u.y <= l.top + l.height
          ? u
          : null;
      }
      static GetRotatedPoint(l, u, f) {
        return {
          x: l.x * Math.cos(f) + l.y * Math.sin(f) + u.x,
          y: l.y * Math.cos(f) - l.x * Math.sin(f) + u.y,
        };
      }
      static LimitPointToCircle(l, u, f) {
        if (a.GetDistanceBetweenTwoPoint(l, f) <= u) return f;
        const S = l.x,
          x = l.y,
          k = f.x,
          I = f.y;
        let N =
          Math.sqrt(
            (Math.pow(u, 2) * Math.pow(S - k, 2)) /
              (Math.pow(S - k, 2) + Math.pow(x - I, 2))
          ) + S;
        f.x < 0 && (N *= -1);
        let j = ((N - S) * (x - I)) / (S - k) + x;
        return S - k + x === 0 && (j = u), { x: N, y: j };
      }
      static GetIntersectBetweenTwoSegment(l, u, f) {
        return a.PointInRect(l, a.GetIntersectBeetwenTwoLine(u, f));
      }
      static GetIntersectBeetwenTwoLine(l, u) {
        const f = l[0].y - l[1].y,
          S = u[0].y - u[1].y,
          x = l[1].x - l[0].x,
          k = u[1].x - u[0].x,
          I = l[0].x * l[1].y - l[1].x * l[0].y,
          N = u[0].x * u[1].y - u[1].x * u[0].y,
          j = f * N - S * I,
          B = x * N - k * I,
          se = -(I * k - N * x) / (f * k - S * x),
          Wt = -(f * N - S * I) / (f * k - S * x);
        if (isFinite(se) && isFinite(Wt)) return { x: se, y: Wt };
        if (Math.abs(j - B) < 0.1) throw new Error("Segment included");
        return null;
      }
      static GetCordsFromTwoPoint(l, u) {
        const f = Math.abs(l.x - u.x),
          S = Math.abs(l.y - u.y),
          x = Math.max(f, S),
          k = [l];
        function I(N, j, B, se, Wt) {
          return j > N ? N + Wt * (B / se) : j < N ? N - Wt * (B / se) : N;
        }
        for (let N = 1; N <= x; N += 1)
          k.push({ x: I(l.x, u.x, f, x, N), y: I(l.y, u.y, S, x, N) });
        return k;
      }
    }
    class c extends r {
      constructor(l, u, f) {
        super(l, f),
          (this.copiedElement = null),
          (this.temporaryCopy = null),
          (this.isLoad = !1),
          (this.element = u),
          this.element.classList.add("stf__item"),
          this.element.classList.add("--" + f);
      }
      newTemporaryCopy() {
        return this.nowDrawingDensity === "hard"
          ? this
          : (this.temporaryCopy === null &&
              ((this.copiedElement = this.element.cloneNode(!0)),
              this.element.parentElement.appendChild(this.copiedElement),
              (this.temporaryCopy = new c(
                this.render,
                this.copiedElement,
                this.nowDrawingDensity
              ))),
            this.getTemporaryCopy());
      }
      getTemporaryCopy() {
        return this.temporaryCopy;
      }
      hideTemporaryCopy() {
        this.temporaryCopy !== null &&
          (this.copiedElement.remove(),
          (this.copiedElement = null),
          (this.temporaryCopy = null));
      }
      draw(l) {
        const u = l || this.nowDrawingDensity,
          f = this.render.convertToGlobal(this.state.position),
          S = this.render.getRect().pageWidth,
          x = this.render.getRect().height;
        this.element.classList.remove("--simple");
        const k = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${S}px;
            height: ${x}px;
        `;
        u === "hard" ? this.drawHard(k) : this.drawSoft(f, k);
      }
      drawHard(l = "") {
        const u = this.render.getRect().left + this.render.getRect().width / 2,
          f = this.state.hardDrawingAngle,
          S =
            l +
            `
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            ` +
            (this.orientation === 0
              ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${f}deg);`
              : `transform-origin: 0 0; 
                   transform: translate3d(${u}px, 0, 0) rotateY(${f}deg);`);
        this.element.style.cssText = S;
      }
      drawSoft(l, u = "") {
        let f = "polygon( ";
        for (const x of this.state.area)
          if (x !== null) {
            let k =
              this.render.getDirection() === 1
                ? {
                    x: -x.x + this.state.position.x,
                    y: x.y - this.state.position.y,
                  }
                : {
                    x: x.x - this.state.position.x,
                    y: x.y - this.state.position.y,
                  };
            (k = a.GetRotatedPoint(k, { x: 0, y: 0 }, this.state.angle)),
              (f += k.x + "px " + k.y + "px, ");
          }
        (f = f.slice(0, -2)), (f += ")");
        const S =
          u +
          `transform-origin: 0 0; clip-path: ${f}; -webkit-clip-path: ${f};` +
          (this.render.isSafari() && this.state.angle === 0
            ? `transform: translate(${l.x}px, ${l.y}px);`
            : `transform: translate3d(${l.x}px, ${l.y}px, 0) rotate(${this.state.angle}rad);`);
        this.element.style.cssText = S;
      }
      simpleDraw(l) {
        const u = this.render.getRect(),
          f = u.pageWidth,
          S = u.height,
          x = l === 1 ? u.left + u.pageWidth : u.left,
          k = u.top;
        this.element.classList.add("--simple"),
          (this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${S}px; 
            left: ${x}px; 
            top: ${k}px; 
            width: ${f}px; 
            z-index: ${this.render.getSettings().startZIndex + 1};`);
      }
      getElement() {
        return this.element;
      }
      load() {
        this.isLoad = !0;
      }
      setOrientation(l) {
        super.setOrientation(l),
          this.element.classList.remove("--left", "--right"),
          this.element.classList.add(l === 1 ? "--right" : "--left");
      }
      setDrawingDensity(l) {
        this.element.classList.remove("--soft", "--hard"),
          this.element.classList.add("--" + l),
          super.setDrawingDensity(l);
      }
    }
    class d extends s {
      constructor(l, u, f, S) {
        super(l, u), (this.element = f), (this.pagesElement = S);
      }
      load() {
        for (const l of this.pagesElement) {
          const u = new c(
            this.render,
            l,
            l.dataset.density === "hard" ? "hard" : "soft"
          );
          u.load(), this.pages.push(u);
        }
        this.createSpread();
      }
    }
    class v {
      constructor(l, u, f, S) {
        (this.direction = l),
          (this.corner = u),
          (this.topIntersectPoint = null),
          (this.sideIntersectPoint = null),
          (this.bottomIntersectPoint = null),
          (this.pageWidth = parseInt(f, 10)),
          (this.pageHeight = parseInt(S, 10));
      }
      calc(l) {
        try {
          return (
            (this.position = this.calcAngleAndPosition(l)),
            this.calculateIntersectPoint(this.position),
            !0
          );
        } catch {
          return !1;
        }
      }
      getFlippingClipArea() {
        const l = [];
        let u = !1;
        return (
          l.push(this.rect.topLeft),
          l.push(this.topIntersectPoint),
          this.sideIntersectPoint === null
            ? (u = !0)
            : (l.push(this.sideIntersectPoint),
              this.bottomIntersectPoint === null && (u = !1)),
          l.push(this.bottomIntersectPoint),
          (u || this.corner === "bottom") && l.push(this.rect.bottomLeft),
          l
        );
      }
      getBottomClipArea() {
        const l = [];
        return (
          l.push(this.topIntersectPoint),
          this.corner === "top"
            ? l.push({ x: this.pageWidth, y: 0 })
            : (this.topIntersectPoint !== null &&
                l.push({ x: this.pageWidth, y: 0 }),
              l.push({ x: this.pageWidth, y: this.pageHeight })),
          this.sideIntersectPoint !== null
            ? a.GetDistanceBetweenTwoPoint(
                this.sideIntersectPoint,
                this.topIntersectPoint
              ) >= 10 && l.push(this.sideIntersectPoint)
            : this.corner === "top" &&
              l.push({ x: this.pageWidth, y: this.pageHeight }),
          l.push(this.bottomIntersectPoint),
          l.push(this.topIntersectPoint),
          l
        );
      }
      getAngle() {
        return this.direction === 0 ? -this.angle : this.angle;
      }
      getRect() {
        return this.rect;
      }
      getPosition() {
        return this.position;
      }
      getActiveCorner() {
        return this.direction === 0 ? this.rect.topLeft : this.rect.topRight;
      }
      getDirection() {
        return this.direction;
      }
      getFlippingProgress() {
        return Math.abs(
          ((this.position.x - this.pageWidth) / (2 * this.pageWidth)) * 100
        );
      }
      getCorner() {
        return this.corner;
      }
      getBottomPagePosition() {
        return this.direction === 1
          ? { x: this.pageWidth, y: 0 }
          : { x: 0, y: 0 };
      }
      getShadowStartPoint() {
        return this.corner === "top"
          ? this.topIntersectPoint
          : this.sideIntersectPoint !== null
          ? this.sideIntersectPoint
          : this.topIntersectPoint;
      }
      getShadowAngle() {
        const l = a.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [
          { x: 0, y: 0 },
          { x: this.pageWidth, y: 0 },
        ]);
        return this.direction === 0 ? l : Math.PI - l;
      }
      calcAngleAndPosition(l) {
        let u = l;
        if (
          (this.updateAngleAndGeometry(u),
          (u =
            this.corner === "top"
              ? this.checkPositionAtCenterLine(
                  u,
                  { x: 0, y: 0 },
                  { x: 0, y: this.pageHeight }
                )
              : this.checkPositionAtCenterLine(
                  u,
                  { x: 0, y: this.pageHeight },
                  { x: 0, y: 0 }
                )),
          Math.abs(u.x - this.pageWidth) < 1 && Math.abs(u.y) < 1)
        )
          throw new Error("Point is too small");
        return u;
      }
      updateAngleAndGeometry(l) {
        (this.angle = this.calculateAngle(l)),
          (this.rect = this.getPageRect(l));
      }
      calculateAngle(l) {
        const u = this.pageWidth - l.x + 1,
          f = this.corner === "bottom" ? this.pageHeight - l.y : l.y;
        let S = 2 * Math.acos(u / Math.sqrt(f * f + u * u));
        f < 0 && (S = -S);
        const x = Math.PI - S;
        if (!isFinite(S) || (x >= 0 && x < 0.003))
          throw new Error("The G point is too small");
        return this.corner === "bottom" && (S = -S), S;
      }
      getPageRect(l) {
        return this.corner === "top"
          ? this.getRectFromBasePoint(
              [
                { x: 0, y: 0 },
                { x: this.pageWidth, y: 0 },
                { x: 0, y: this.pageHeight },
                { x: this.pageWidth, y: this.pageHeight },
              ],
              l
            )
          : this.getRectFromBasePoint(
              [
                { x: 0, y: -this.pageHeight },
                { x: this.pageWidth, y: -this.pageHeight },
                { x: 0, y: 0 },
                { x: this.pageWidth, y: 0 },
              ],
              l
            );
      }
      getRectFromBasePoint(l, u) {
        return {
          topLeft: this.getRotatedPoint(l[0], u),
          topRight: this.getRotatedPoint(l[1], u),
          bottomLeft: this.getRotatedPoint(l[2], u),
          bottomRight: this.getRotatedPoint(l[3], u),
        };
      }
      getRotatedPoint(l, u) {
        return {
          x: l.x * Math.cos(this.angle) + l.y * Math.sin(this.angle) + u.x,
          y: l.y * Math.cos(this.angle) - l.x * Math.sin(this.angle) + u.y,
        };
      }
      calculateIntersectPoint(l) {
        const u = {
          left: -1,
          top: -1,
          width: this.pageWidth + 2,
          height: this.pageHeight + 2,
        };
        this.corner === "top"
          ? ((this.topIntersectPoint = a.GetIntersectBetweenTwoSegment(
              u,
              [l, this.rect.topRight],
              [
                { x: 0, y: 0 },
                { x: this.pageWidth, y: 0 },
              ]
            )),
            (this.sideIntersectPoint = a.GetIntersectBetweenTwoSegment(
              u,
              [l, this.rect.bottomLeft],
              [
                { x: this.pageWidth, y: 0 },
                { x: this.pageWidth, y: this.pageHeight },
              ]
            )),
            (this.bottomIntersectPoint = a.GetIntersectBetweenTwoSegment(
              u,
              [this.rect.bottomLeft, this.rect.bottomRight],
              [
                { x: 0, y: this.pageHeight },
                { x: this.pageWidth, y: this.pageHeight },
              ]
            )))
          : ((this.topIntersectPoint = a.GetIntersectBetweenTwoSegment(
              u,
              [this.rect.topLeft, this.rect.topRight],
              [
                { x: 0, y: 0 },
                { x: this.pageWidth, y: 0 },
              ]
            )),
            (this.sideIntersectPoint = a.GetIntersectBetweenTwoSegment(
              u,
              [l, this.rect.topLeft],
              [
                { x: this.pageWidth, y: 0 },
                { x: this.pageWidth, y: this.pageHeight },
              ]
            )),
            (this.bottomIntersectPoint = a.GetIntersectBetweenTwoSegment(
              u,
              [this.rect.bottomLeft, this.rect.bottomRight],
              [
                { x: 0, y: this.pageHeight },
                { x: this.pageWidth, y: this.pageHeight },
              ]
            )));
      }
      checkPositionAtCenterLine(l, u, f) {
        let S = l;
        const x = a.LimitPointToCircle(u, this.pageWidth, S);
        S !== x && ((S = x), this.updateAngleAndGeometry(S));
        const k = Math.sqrt(
          Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2)
        );
        let I = this.rect.bottomRight,
          N = this.rect.topLeft;
        if (
          (this.corner === "bottom" &&
            ((I = this.rect.topRight), (N = this.rect.bottomLeft)),
          I.x <= 0)
        ) {
          const j = a.LimitPointToCircle(f, k, N);
          j !== S && ((S = j), this.updateAngleAndGeometry(S));
        }
        return S;
      }
      getSegmentToShadowLine() {
        const l = this.getShadowStartPoint();
        return [
          l,
          l !== this.sideIntersectPoint && this.sideIntersectPoint !== null
            ? this.sideIntersectPoint
            : this.bottomIntersectPoint,
        ];
      }
    }
    class g {
      constructor(l, u) {
        (this.flippingPage = null),
          (this.bottomPage = null),
          (this.calc = null),
          (this.state = "read"),
          (this.render = l),
          (this.app = u);
      }
      fold(l) {
        this.setState("user_fold"),
          this.calc === null && this.start(l),
          this.do(this.render.convertToPage(l));
      }
      flip(l) {
        if (
          (this.app.getSettings().disableFlipByClick &&
            !this.isPointOnCorners(l)) ||
          (this.calc !== null && this.render.finishAnimation(), !this.start(l))
        )
          return;
        const u = this.getBoundsRect();
        this.setState("flipping");
        const f = u.height / 10,
          S = this.calc.getCorner() === "bottom" ? u.height - f : f,
          x = this.calc.getCorner() === "bottom" ? u.height : 0;
        this.calc.calc({ x: u.pageWidth - f, y: S }),
          this.animateFlippingTo(
            { x: u.pageWidth - f, y: S },
            { x: -u.pageWidth, y: x },
            !0
          );
      }
      start(l) {
        this.reset();
        const u = this.render.convertToBook(l),
          f = this.getBoundsRect(),
          S = this.getDirectionByPoint(u),
          x = u.y >= f.height / 2 ? "bottom" : "top";
        if (!this.checkDirection(S)) return !1;
        try {
          if (
            ((this.flippingPage = this.app
              .getPageCollection()
              .getFlippingPage(S)),
            (this.bottomPage = this.app.getPageCollection().getBottomPage(S)),
            this.render.getOrientation() === "landscape")
          )
            if (S === 1) {
              const k = this.app.getPageCollection().nextBy(this.flippingPage);
              k !== null &&
                this.flippingPage.getDensity() !== k.getDensity() &&
                (this.flippingPage.setDrawingDensity("hard"),
                k.setDrawingDensity("hard"));
            } else {
              const k = this.app.getPageCollection().prevBy(this.flippingPage);
              k !== null &&
                this.flippingPage.getDensity() !== k.getDensity() &&
                (this.flippingPage.setDrawingDensity("hard"),
                k.setDrawingDensity("hard"));
            }
          return (
            this.render.setDirection(S),
            (this.calc = new v(
              S,
              x,
              f.pageWidth.toString(10),
              f.height.toString(10)
            )),
            !0
          );
        } catch {
          return !1;
        }
      }
      do(l) {
        if (this.calc !== null && this.calc.calc(l)) {
          const u = this.calc.getFlippingProgress();
          this.bottomPage.setArea(this.calc.getBottomClipArea()),
            this.bottomPage.setPosition(this.calc.getBottomPagePosition()),
            this.bottomPage.setAngle(0),
            this.bottomPage.setHardAngle(0),
            this.flippingPage.setArea(this.calc.getFlippingClipArea()),
            this.flippingPage.setPosition(this.calc.getActiveCorner()),
            this.flippingPage.setAngle(this.calc.getAngle()),
            this.calc.getDirection() === 0
              ? this.flippingPage.setHardAngle((90 * (200 - 2 * u)) / 100)
              : this.flippingPage.setHardAngle((-90 * (200 - 2 * u)) / 100),
            this.render.setPageRect(this.calc.getRect()),
            this.render.setBottomPage(this.bottomPage),
            this.render.setFlippingPage(this.flippingPage),
            this.render.setShadowData(
              this.calc.getShadowStartPoint(),
              this.calc.getShadowAngle(),
              u,
              this.calc.getDirection()
            );
        }
      }
      flipToPage(l, u) {
        const f = this.app.getPageCollection().getCurrentSpreadIndex(),
          S = this.app.getPageCollection().getSpreadIndexByPage(l);
        try {
          S > f &&
            (this.app.getPageCollection().setCurrentSpreadIndex(S - 1),
            this.flipNext(u)),
            S < f &&
              (this.app.getPageCollection().setCurrentSpreadIndex(S + 1),
              this.flipPrev(u));
        } catch {}
      }
      flipNext(l) {
        this.flip({
          x:
            this.render.getRect().left +
            2 * this.render.getRect().pageWidth -
            10,
          y: l === "top" ? 1 : this.render.getRect().height - 2,
        });
      }
      flipPrev(l) {
        this.flip({
          x: 10,
          y: l === "top" ? 1 : this.render.getRect().height - 2,
        });
      }
      stopMove() {
        if (this.calc === null) return;
        const l = this.calc.getPosition(),
          u = this.getBoundsRect(),
          f = this.calc.getCorner() === "bottom" ? u.height : 0;
        l.x <= 0
          ? this.animateFlippingTo(l, { x: -u.pageWidth, y: f }, !0)
          : this.animateFlippingTo(l, { x: u.pageWidth, y: f }, !1);
      }
      showCorner(l) {
        if (!this.checkState("read", "fold_corner")) return;
        const u = this.getBoundsRect(),
          f = u.pageWidth;
        if (this.isPointOnCorners(l))
          if (this.calc === null) {
            if (!this.start(l)) return;
            this.setState("fold_corner"), this.calc.calc({ x: f - 1, y: 1 });
            const S = 50,
              x = this.calc.getCorner() === "bottom" ? u.height - 1 : 1,
              k = this.calc.getCorner() === "bottom" ? u.height - S : S;
            this.animateFlippingTo(
              { x: f - 1, y: x },
              { x: f - S, y: k },
              !1,
              !1
            );
          } else this.do(this.render.convertToPage(l));
        else
          this.setState("read"), this.render.finishAnimation(), this.stopMove();
      }
      animateFlippingTo(l, u, f, S = !0) {
        const x = a.GetCordsFromTwoPoint(l, u),
          k = [];
        for (const N of x) k.push(() => this.do(N));
        const I = this.getAnimationDuration(x.length);
        this.render.startAnimation(k, I, () => {
          this.calc &&
            (f &&
              (this.calc.getDirection() === 1
                ? this.app.turnToPrevPage()
                : this.app.turnToNextPage()),
            S &&
              (this.render.setBottomPage(null),
              this.render.setFlippingPage(null),
              this.render.clearShadow(),
              this.setState("read"),
              this.reset()));
        });
      }
      getCalculation() {
        return this.calc;
      }
      getState() {
        return this.state;
      }
      setState(l) {
        this.state !== l && (this.app.updateState(l), (this.state = l));
      }
      getDirectionByPoint(l) {
        const u = this.getBoundsRect();
        if (this.render.getOrientation() === "portrait") {
          if (l.x - u.pageWidth <= u.width / 5) return 1;
        } else if (l.x < u.width / 2) return 1;
        return 0;
      }
      getAnimationDuration(l) {
        const u = this.app.getSettings().flippingTime;
        return l >= 1e3 ? u : (l / 1e3) * u;
      }
      checkDirection(l) {
        return l === 0
          ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1
          : this.app.getCurrentPageIndex() >= 1;
      }
      reset() {
        (this.calc = null),
          (this.flippingPage = null),
          (this.bottomPage = null);
      }
      getBoundsRect() {
        return this.render.getRect();
      }
      checkState(...l) {
        for (const u of l) if (this.state === u) return !0;
        return !1;
      }
      isPointOnCorners(l) {
        const u = this.getBoundsRect(),
          f = u.pageWidth,
          S = Math.sqrt(Math.pow(f, 2) + Math.pow(u.height, 2)) / 5,
          x = this.render.convertToBook(l);
        return (
          x.x > 0 &&
          x.y > 0 &&
          x.x < u.width &&
          x.y < u.height &&
          (x.x < S || x.x > u.width - S) &&
          (x.y < S || x.y > u.height - S)
        );
      }
    }
    class y {
      constructor(l, u) {
        (this.leftPage = null),
          (this.rightPage = null),
          (this.flippingPage = null),
          (this.bottomPage = null),
          (this.direction = null),
          (this.orientation = null),
          (this.shadow = null),
          (this.animation = null),
          (this.pageRect = null),
          (this.boundsRect = null),
          (this.timer = 0),
          (this.safari = !1),
          (this.setting = u),
          (this.app = l);
        const f = new RegExp("Version\\/[\\d\\.]+.*Safari/");
        this.safari = f.exec(window.navigator.userAgent) !== null;
      }
      render(l) {
        if (this.animation !== null) {
          const u = Math.round(
            (l - this.animation.startedAt) / this.animation.durationFrame
          );
          u < this.animation.frames.length
            ? this.animation.frames[u]()
            : (this.animation.onAnimateEnd(), (this.animation = null));
        }
        (this.timer = l), this.drawFrame();
      }
      start() {
        this.update();
        const l = (u) => {
          this.render(u), requestAnimationFrame(l);
        };
        requestAnimationFrame(l);
      }
      startAnimation(l, u, f) {
        this.finishAnimation(),
          (this.animation = {
            frames: l,
            duration: u,
            durationFrame: u / l.length,
            onAnimateEnd: f,
            startedAt: this.timer,
          });
      }
      finishAnimation() {
        this.animation !== null &&
          (this.animation.frames[this.animation.frames.length - 1](),
          this.animation.onAnimateEnd !== null &&
            this.animation.onAnimateEnd()),
          (this.animation = null);
      }
      update() {
        this.boundsRect = null;
        const l = this.calculateBoundsRect();
        this.orientation !== l &&
          ((this.orientation = l), this.app.updateOrientation(l));
      }
      calculateBoundsRect() {
        let l = "landscape";
        const u = this.getBlockWidth(),
          f = u / 2,
          S = this.getBlockHeight() / 2,
          x = this.setting.width / this.setting.height;
        let k = this.setting.width,
          I = this.setting.height,
          N = f - k;
        return (
          this.setting.size === "stretch"
            ? (u < 2 * this.setting.minWidth &&
                this.app.getSettings().usePortrait &&
                (l = "portrait"),
              (k =
                l === "portrait"
                  ? this.getBlockWidth()
                  : this.getBlockWidth() / 2),
              k > this.setting.maxWidth && (k = this.setting.maxWidth),
              (I = k / x),
              I > this.getBlockHeight() &&
                ((I = this.getBlockHeight()), (k = I * x)),
              (N = l === "portrait" ? f - k / 2 - k : f - k))
            : u < 2 * k &&
              this.app.getSettings().usePortrait &&
              ((l = "portrait"), (N = f - k / 2 - k)),
          (this.boundsRect = {
            left: N,
            top: S - I / 2,
            width: 2 * k,
            height: I,
            pageWidth: k,
          }),
          l
        );
      }
      setShadowData(l, u, f, S) {
        if (!this.app.getSettings().drawShadow) return;
        const x = 100 * this.getSettings().maxShadowOpacity;
        this.shadow = {
          pos: l,
          angle: u,
          width: (((3 * this.getRect().pageWidth) / 4) * f) / 100,
          opacity: ((100 - f) * x) / 100 / 100,
          direction: S,
          progress: 2 * f,
        };
      }
      clearShadow() {
        this.shadow = null;
      }
      getBlockWidth() {
        return this.app.getUI().getDistElement().offsetWidth;
      }
      getBlockHeight() {
        return this.app.getUI().getDistElement().offsetHeight;
      }
      getDirection() {
        return this.direction;
      }
      getRect() {
        return (
          this.boundsRect === null && this.calculateBoundsRect(),
          this.boundsRect
        );
      }
      getSettings() {
        return this.app.getSettings();
      }
      getOrientation() {
        return this.orientation;
      }
      setPageRect(l) {
        this.pageRect = l;
      }
      setDirection(l) {
        this.direction = l;
      }
      setRightPage(l) {
        l !== null && l.setOrientation(1), (this.rightPage = l);
      }
      setLeftPage(l) {
        l !== null && l.setOrientation(0), (this.leftPage = l);
      }
      setBottomPage(l) {
        l !== null && l.setOrientation(this.direction === 1 ? 0 : 1),
          (this.bottomPage = l);
      }
      setFlippingPage(l) {
        l !== null &&
          l.setOrientation(
            this.direction === 0 && this.orientation !== "portrait" ? 0 : 1
          ),
          (this.flippingPage = l);
      }
      convertToBook(l) {
        const u = this.getRect();
        return { x: l.x - u.left, y: l.y - u.top };
      }
      isSafari() {
        return this.safari;
      }
      convertToPage(l, u) {
        u || (u = this.direction);
        const f = this.getRect();
        return {
          x: u === 0 ? l.x - f.left - f.width / 2 : f.width / 2 - l.x + f.left,
          y: l.y - f.top,
        };
      }
      convertToGlobal(l, u) {
        if ((u || (u = this.direction), l == null)) return null;
        const f = this.getRect();
        return {
          x: u === 0 ? l.x + f.left + f.width / 2 : f.width / 2 - l.x + f.left,
          y: l.y + f.top,
        };
      }
      convertRectToGlobal(l, u) {
        return (
          u || (u = this.direction),
          {
            topLeft: this.convertToGlobal(l.topLeft, u),
            topRight: this.convertToGlobal(l.topRight, u),
            bottomLeft: this.convertToGlobal(l.bottomLeft, u),
            bottomRight: this.convertToGlobal(l.bottomRight, u),
          }
        );
      }
    }
    class w extends y {
      constructor(l, u, f) {
        super(l, u), (this.canvas = f), (this.ctx = f.getContext("2d"));
      }
      getContext() {
        return this.ctx;
      }
      reload() {}
      drawFrame() {
        this.clear(),
          this.orientation !== "portrait" &&
            this.leftPage != null &&
            this.leftPage.simpleDraw(0),
          this.rightPage != null && this.rightPage.simpleDraw(1),
          this.bottomPage != null && this.bottomPage.draw(),
          this.drawBookShadow(),
          this.flippingPage != null && this.flippingPage.draw(),
          this.shadow != null &&
            (this.drawOuterShadow(), this.drawInnerShadow());
        const l = this.getRect();
        this.orientation === "portrait" &&
          (this.ctx.beginPath(),
          this.ctx.rect(l.left + l.pageWidth, l.top, l.width, l.height),
          this.ctx.clip());
      }
      drawBookShadow() {
        const l = this.getRect();
        this.ctx.save(), this.ctx.beginPath();
        const u = l.width / 20;
        this.ctx.rect(l.left, l.top, l.width, l.height);
        const f = { x: l.left + l.width / 2 - u / 2, y: 0 };
        this.ctx.translate(f.x, f.y);
        const S = this.ctx.createLinearGradient(0, 0, u, 0);
        S.addColorStop(0, "rgba(0, 0, 0, 0)"),
          S.addColorStop(0.4, "rgba(0, 0, 0, 0.2)"),
          S.addColorStop(0.49, "rgba(0, 0, 0, 0.1)"),
          S.addColorStop(0.5, "rgba(0, 0, 0, 0.5)"),
          S.addColorStop(0.51, "rgba(0, 0, 0, 0.4)"),
          S.addColorStop(1, "rgba(0, 0, 0, 0)"),
          this.ctx.clip(),
          (this.ctx.fillStyle = S),
          this.ctx.fillRect(0, 0, u, 2 * l.height),
          this.ctx.restore();
      }
      drawOuterShadow() {
        const l = this.getRect();
        this.ctx.save(),
          this.ctx.beginPath(),
          this.ctx.rect(l.left, l.top, l.width, l.height);
        const u = this.convertToGlobal({
          x: this.shadow.pos.x,
          y: this.shadow.pos.y,
        });
        this.ctx.translate(u.x, u.y),
          this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
        const f = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
        this.shadow.direction === 0
          ? (this.ctx.translate(0, -100),
            f.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
            f.addColorStop(1, "rgba(0, 0, 0, 0)"))
          : (this.ctx.translate(-this.shadow.width, -100),
            f.addColorStop(0, "rgba(0, 0, 0, 0)"),
            f.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")),
          this.ctx.clip(),
          (this.ctx.fillStyle = f),
          this.ctx.fillRect(0, 0, this.shadow.width, 2 * l.height),
          this.ctx.restore();
      }
      drawInnerShadow() {
        const l = this.getRect();
        this.ctx.save(), this.ctx.beginPath();
        const u = this.convertToGlobal({
            x: this.shadow.pos.x,
            y: this.shadow.pos.y,
          }),
          f = this.convertRectToGlobal(this.pageRect);
        this.ctx.moveTo(f.topLeft.x, f.topLeft.y),
          this.ctx.lineTo(f.topRight.x, f.topRight.y),
          this.ctx.lineTo(f.bottomRight.x, f.bottomRight.y),
          this.ctx.lineTo(f.bottomLeft.x, f.bottomLeft.y),
          this.ctx.translate(u.x, u.y),
          this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
        const S = (3 * this.shadow.width) / 4,
          x = this.ctx.createLinearGradient(0, 0, S, 0);
        this.shadow.direction === 0
          ? (this.ctx.translate(-S, -100),
            x.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
            x.addColorStop(0.9, "rgba(0, 0, 0, 0.05)"),
            x.addColorStop(0.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
            x.addColorStop(0, "rgba(0, 0, 0, 0)"))
          : (this.ctx.translate(0, -100),
            x.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
            x.addColorStop(0.1, "rgba(0, 0, 0, 0.05)"),
            x.addColorStop(0.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
            x.addColorStop(1, "rgba(0, 0, 0, 0)")),
          this.ctx.clip(),
          (this.ctx.fillStyle = x),
          this.ctx.fillRect(0, 0, S, 2 * l.height),
          this.ctx.restore();
      }
      clear() {
        (this.ctx.fillStyle = "white"),
          this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
    class P {
      constructor(l, u, f) {
        (this.touchPoint = null),
          (this.swipeTimeout = 250),
          (this.onResize = () => {
            this.update();
          }),
          (this.onMouseDown = (x) => {
            if (this.checkTarget(x.target)) {
              const k = this.getMousePos(x.clientX, x.clientY);
              this.app.startUserTouch(k), x.preventDefault();
            }
          }),
          (this.onTouchStart = (x) => {
            if (this.checkTarget(x.target) && x.changedTouches.length > 0) {
              const k = x.changedTouches[0],
                I = this.getMousePos(k.clientX, k.clientY);
              (this.touchPoint = { point: I, time: Date.now() }),
                setTimeout(() => {
                  this.touchPoint !== null && this.app.startUserTouch(I);
                }, this.swipeTimeout),
                this.app.getSettings().mobileScrollSupport ||
                  x.preventDefault();
            }
          }),
          (this.onMouseUp = (x) => {
            const k = this.getMousePos(x.clientX, x.clientY);
            this.app.userStop(k);
          }),
          (this.onMouseMove = (x) => {
            const k = this.getMousePos(x.clientX, x.clientY);
            this.app.userMove(k, !1);
          }),
          (this.onTouchMove = (x) => {
            if (x.changedTouches.length > 0) {
              const k = x.changedTouches[0],
                I = this.getMousePos(k.clientX, k.clientY);
              this.app.getSettings().mobileScrollSupport
                ? (this.touchPoint !== null &&
                    (Math.abs(this.touchPoint.point.x - I.x) > 10 ||
                      this.app.getState() !== "read") &&
                    x.cancelable &&
                    this.app.userMove(I, !0),
                  this.app.getState() !== "read" && x.preventDefault())
                : this.app.userMove(I, !0);
            }
          }),
          (this.onTouchEnd = (x) => {
            if (x.changedTouches.length > 0) {
              const k = x.changedTouches[0],
                I = this.getMousePos(k.clientX, k.clientY);
              let N = !1;
              if (this.touchPoint !== null) {
                const j = I.x - this.touchPoint.point.x,
                  B = Math.abs(I.y - this.touchPoint.point.y);
                Math.abs(j) > this.swipeDistance &&
                  B < 2 * this.swipeDistance &&
                  Date.now() - this.touchPoint.time < this.swipeTimeout &&
                  (j > 0
                    ? this.app.flipPrev(
                        this.touchPoint.point.y <
                          this.app.getRender().getRect().height / 2
                          ? "top"
                          : "bottom"
                      )
                    : this.app.flipNext(
                        this.touchPoint.point.y <
                          this.app.getRender().getRect().height / 2
                          ? "top"
                          : "bottom"
                      ),
                  (N = !0)),
                  (this.touchPoint = null);
              }
              this.app.userStop(I, N);
            }
          }),
          (this.parentElement = l),
          l.classList.add("stf__parent"),
          l.insertAdjacentHTML(
            "afterbegin",
            '<div class="stf__wrapper"></div>'
          ),
          (this.wrapper = l.querySelector(".stf__wrapper")),
          (this.app = u);
        const S = this.app.getSettings().usePortrait ? 1 : 2;
        (l.style.minWidth = f.minWidth * S + "px"),
          (l.style.minHeight = f.minHeight + "px"),
          f.size === "fixed" &&
            ((l.style.minWidth = f.width * S + "px"),
            (l.style.minHeight = f.height + "px")),
          f.autoSize &&
            ((l.style.width = "100%"),
            (l.style.maxWidth = 2 * f.maxWidth + "px")),
          (l.style.display = "block"),
          window.addEventListener("resize", this.onResize, !1),
          (this.swipeDistance = f.swipeDistance);
      }
      destroy() {
        this.app.getSettings().useMouseEvents && this.removeHandlers(),
          this.distElement.remove(),
          this.wrapper.remove();
      }
      getDistElement() {
        return this.distElement;
      }
      getWrapper() {
        return this.wrapper;
      }
      setOrientationStyle(l) {
        this.wrapper.classList.remove("--portrait", "--landscape"),
          l === "portrait"
            ? (this.app.getSettings().autoSize &&
                (this.wrapper.style.paddingBottom =
                  (this.app.getSettings().height /
                    this.app.getSettings().width) *
                    100 +
                  "%"),
              this.wrapper.classList.add("--portrait"))
            : (this.app.getSettings().autoSize &&
                (this.wrapper.style.paddingBottom =
                  (this.app.getSettings().height /
                    (2 * this.app.getSettings().width)) *
                    100 +
                  "%"),
              this.wrapper.classList.add("--landscape")),
          this.update();
      }
      removeHandlers() {
        window.removeEventListener("resize", this.onResize),
          this.distElement.removeEventListener("mousedown", this.onMouseDown),
          this.distElement.removeEventListener("touchstart", this.onTouchStart),
          window.removeEventListener("mousemove", this.onMouseMove),
          window.removeEventListener("touchmove", this.onTouchMove),
          window.removeEventListener("mouseup", this.onMouseUp),
          window.removeEventListener("touchend", this.onTouchEnd);
      }
      setHandlers() {
        window.addEventListener("resize", this.onResize, !1),
          this.app.getSettings().useMouseEvents &&
            (this.distElement.addEventListener("mousedown", this.onMouseDown),
            this.distElement.addEventListener("touchstart", this.onTouchStart),
            window.addEventListener("mousemove", this.onMouseMove),
            window.addEventListener("touchmove", this.onTouchMove, {
              passive: !this.app.getSettings().mobileScrollSupport,
            }),
            window.addEventListener("mouseup", this.onMouseUp),
            window.addEventListener("touchend", this.onTouchEnd));
      }
      getMousePos(l, u) {
        const f = this.distElement.getBoundingClientRect();
        return { x: l - f.left, y: u - f.top };
      }
      checkTarget(l) {
        return (
          !this.app.getSettings().clickEventForward ||
          !["a", "button"].includes(l.tagName.toLowerCase())
        );
      }
    }
    class _ extends P {
      constructor(l, u, f, S) {
        super(l, u, f),
          this.wrapper.insertAdjacentHTML(
            "afterbegin",
            '<div class="stf__block"></div>'
          ),
          (this.distElement = l.querySelector(".stf__block")),
          (this.items = S);
        for (const x of S) this.distElement.appendChild(x);
        this.setHandlers();
      }
      clear() {
        for (const l of this.items) this.parentElement.appendChild(l);
      }
      updateItems(l) {
        this.removeHandlers(), (this.distElement.innerHTML = "");
        for (const u of l) this.distElement.appendChild(u);
        (this.items = l), this.setHandlers();
      }
      update() {
        this.app.getRender().update();
      }
    }
    class T extends P {
      constructor(l, u, f) {
        super(l, u, f),
          (this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>'),
          (this.canvas = l.querySelectorAll("canvas")[0]),
          (this.distElement = this.canvas),
          this.resizeCanvas(),
          this.setHandlers();
      }
      resizeCanvas() {
        const l = getComputedStyle(this.canvas),
          u = parseInt(l.getPropertyValue("width"), 10),
          f = parseInt(l.getPropertyValue("height"), 10);
        (this.canvas.width = u), (this.canvas.height = f);
      }
      getCanvas() {
        return this.canvas;
      }
      update() {
        this.resizeCanvas(), this.app.getRender().update();
      }
    }
    class m extends y {
      constructor(l, u, f) {
        super(l, u),
          (this.outerShadow = null),
          (this.innerShadow = null),
          (this.hardShadow = null),
          (this.hardInnerShadow = null),
          (this.element = f),
          this.createShadows();
      }
      createShadows() {
        this.element.insertAdjacentHTML(
          "beforeend",
          `<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`
        ),
          (this.outerShadow = this.element.querySelector(".stf__outerShadow")),
          (this.innerShadow = this.element.querySelector(".stf__innerShadow")),
          (this.hardShadow = this.element.querySelector(".stf__hardShadow")),
          (this.hardInnerShadow = this.element.querySelector(
            ".stf__hardInnerShadow"
          ));
      }
      clearShadow() {
        super.clearShadow(),
          (this.outerShadow.style.cssText = "display: none"),
          (this.innerShadow.style.cssText = "display: none"),
          (this.hardShadow.style.cssText = "display: none"),
          (this.hardInnerShadow.style.cssText = "display: none");
      }
      reload() {
        this.element.querySelector(".stf__outerShadow") || this.createShadows();
      }
      drawHardInnerShadow() {
        const l = this.getRect(),
          u =
            this.shadow.progress > 100
              ? 200 - this.shadow.progress
              : this.shadow.progress;
        let f = ((100 - u) * (2.5 * l.pageWidth)) / 100 + 20;
        f > l.pageWidth && (f = l.pageWidth);
        let S = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};
            width: ${f}px;
            height: ${l.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${(this.shadow.opacity * u) / 100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${l.left + l.width / 2}px;
            transform-origin: 0 0;
        `;
        (S +=
          (this.getDirection() === 0 && this.shadow.progress > 100) ||
          (this.getDirection() === 1 && this.shadow.progress <= 100)
            ? "transform: translate3d(0, 0, 0);"
            : "transform: translate3d(0, 0, 0) rotateY(180deg);"),
          (this.hardInnerShadow.style.cssText = S);
      }
      drawHardOuterShadow() {
        const l = this.getRect();
        let u =
          ((100 -
            (this.shadow.progress > 100
              ? 200 - this.shadow.progress
              : this.shadow.progress)) *
            (2.5 * l.pageWidth)) /
            100 +
          20;
        u > l.pageWidth && (u = l.pageWidth);
        let f = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};
            width: ${u}px;
            height: ${l.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${
              this.shadow.opacity
            }) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${l.left + l.width / 2}px;
            transform-origin: 0 0;
        `;
        (f +=
          (this.getDirection() === 0 && this.shadow.progress > 100) ||
          (this.getDirection() === 1 && this.shadow.progress <= 100)
            ? "transform: translate3d(0, 0, 0) rotateY(180deg);"
            : "transform: translate3d(0, 0, 0);"),
          (this.hardShadow.style.cssText = f);
      }
      drawInnerShadow() {
        const l = this.getRect(),
          u = (3 * this.shadow.width) / 4,
          f = this.getDirection() === 0 ? u : 0,
          S = this.getDirection() === 0 ? "to left" : "to right",
          x = this.convertToGlobal(this.shadow.pos),
          k = this.shadow.angle + (3 * Math.PI) / 2,
          I = [
            this.pageRect.topLeft,
            this.pageRect.topRight,
            this.pageRect.bottomRight,
            this.pageRect.bottomLeft,
          ];
        let N = "polygon( ";
        for (const B of I) {
          let se =
            this.getDirection() === 1
              ? { x: -B.x + this.shadow.pos.x, y: B.y - this.shadow.pos.y }
              : { x: B.x - this.shadow.pos.x, y: B.y - this.shadow.pos.y };
          (se = a.GetRotatedPoint(se, { x: f, y: 100 }, k)),
            (N += se.x + "px " + se.y + "px, ");
        }
        (N = N.slice(0, -2)), (N += ")");
        const j = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${u}px;
            height: ${2 * l.height}px;
            background: linear-gradient(${S},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${f}px 100px;
            transform: translate3d(${x.x - f}px, ${
          x.y - 100
        }px, 0) rotate(${k}rad);
            clip-path: ${N};
            -webkit-clip-path: ${N};
        `;
        this.innerShadow.style.cssText = j;
      }
      drawOuterShadow() {
        const l = this.getRect(),
          u = this.convertToGlobal({
            x: this.shadow.pos.x,
            y: this.shadow.pos.y,
          }),
          f = this.shadow.angle + (3 * Math.PI) / 2,
          S = this.getDirection() === 1 ? this.shadow.width : 0,
          x = this.getDirection() === 0 ? "to right" : "to left",
          k = [
            { x: 0, y: 0 },
            { x: l.pageWidth, y: 0 },
            { x: l.pageWidth, y: l.height },
            { x: 0, y: l.height },
          ];
        let I = "polygon( ";
        for (const j of k)
          if (j !== null) {
            let B =
              this.getDirection() === 1
                ? { x: -j.x + this.shadow.pos.x, y: j.y - this.shadow.pos.y }
                : { x: j.x - this.shadow.pos.x, y: j.y - this.shadow.pos.y };
            (B = a.GetRotatedPoint(B, { x: S, y: 100 }, f)),
              (I += B.x + "px " + B.y + "px, ");
          }
        (I = I.slice(0, -2)), (I += ")");
        const N = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * l.height}px;
            background: linear-gradient(${x}, rgba(0, 0, 0, ${
          this.shadow.opacity
        }), rgba(0, 0, 0, 0));
            transform-origin: ${S}px 100px;
            transform: translate3d(${u.x - S}px, ${
          u.y - 100
        }px, 0) rotate(${f}rad);
            clip-path: ${I};
            -webkit-clip-path: ${I};
        `;
        this.outerShadow.style.cssText = N;
      }
      drawLeftPage() {
        this.orientation !== "portrait" &&
          this.leftPage !== null &&
          (this.direction === 1 &&
          this.flippingPage !== null &&
          this.flippingPage.getDrawingDensity() === "hard"
            ? ((this.leftPage.getElement().style.zIndex = (
                this.getSettings().startZIndex + 5
              ).toString(10)),
              this.leftPage.setHardDrawingAngle(
                180 + this.flippingPage.getHardAngle()
              ),
              this.leftPage.draw(this.flippingPage.getDrawingDensity()))
            : this.leftPage.simpleDraw(0));
      }
      drawRightPage() {
        this.rightPage !== null &&
          (this.direction === 0 &&
          this.flippingPage !== null &&
          this.flippingPage.getDrawingDensity() === "hard"
            ? ((this.rightPage.getElement().style.zIndex = (
                this.getSettings().startZIndex + 5
              ).toString(10)),
              this.rightPage.setHardDrawingAngle(
                180 + this.flippingPage.getHardAngle()
              ),
              this.rightPage.draw(this.flippingPage.getDrawingDensity()))
            : this.rightPage.simpleDraw(1));
      }
      drawBottomPage() {
        if (this.bottomPage === null) return;
        const l =
          this.flippingPage != null
            ? this.flippingPage.getDrawingDensity()
            : null;
        (this.orientation === "portrait" && this.direction === 1) ||
          ((this.bottomPage.getElement().style.zIndex = (
            this.getSettings().startZIndex + 3
          ).toString(10)),
          this.bottomPage.draw(l));
      }
      drawFrame() {
        this.clear(),
          this.drawLeftPage(),
          this.drawRightPage(),
          this.drawBottomPage(),
          this.flippingPage != null &&
            ((this.flippingPage.getElement().style.zIndex = (
              this.getSettings().startZIndex + 5
            ).toString(10)),
            this.flippingPage.draw()),
          this.shadow != null &&
            this.flippingPage !== null &&
            (this.flippingPage.getDrawingDensity() === "soft"
              ? (this.drawOuterShadow(), this.drawInnerShadow())
              : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
      }
      clear() {
        for (const l of this.app.getPageCollection().getPages())
          l !== this.leftPage &&
            l !== this.rightPage &&
            l !== this.flippingPage &&
            l !== this.bottomPage &&
            (l.getElement().style.cssText = "display: none"),
            l.getTemporaryCopy() !== this.flippingPage && l.hideTemporaryCopy();
      }
      update() {
        super.update(),
          this.rightPage !== null && this.rightPage.setOrientation(1),
          this.leftPage !== null && this.leftPage.setOrientation(0);
      }
    }
    class p {
      constructor() {
        this._default = {
          startPage: 0,
          size: "fixed",
          width: 0,
          height: 0,
          minWidth: 0,
          maxWidth: 0,
          minHeight: 0,
          maxHeight: 0,
          drawShadow: !0,
          flippingTime: 1e3,
          usePortrait: !0,
          startZIndex: 0,
          autoSize: !0,
          maxShadowOpacity: 1,
          showCover: !1,
          mobileScrollSupport: !0,
          swipeDistance: 30,
          clickEventForward: !0,
          useMouseEvents: !0,
          showPageCorners: !0,
          disableFlipByClick: !1,
        };
      }
      getSettings(l) {
        const u = this._default;
        if ((Object.assign(u, l), u.size !== "stretch" && u.size !== "fixed"))
          throw new Error(
            'Invalid size type. Available only "fixed" and "stretch" value'
          );
        if (u.width <= 0 || u.height <= 0)
          throw new Error("Invalid width or height");
        if (u.flippingTime <= 0) throw new Error("Invalid flipping time");
        return (
          u.size === "stretch"
            ? (u.minWidth <= 0 && (u.minWidth = 100),
              u.maxWidth < u.minWidth && (u.maxWidth = 2e3),
              u.minHeight <= 0 && (u.minHeight = 100),
              u.maxHeight < u.minHeight && (u.maxHeight = 2e3))
            : ((u.minWidth = u.width),
              (u.maxWidth = u.width),
              (u.minHeight = u.height),
              (u.maxHeight = u.height)),
          u
        );
      }
    }
    (function (h, l) {
      l === void 0 && (l = {});
      var u = l.insertAt;
      if (h && typeof document < "u") {
        var f = document.head || document.getElementsByTagName("head")[0],
          S = document.createElement("style");
        (S.type = "text/css"),
          u === "top" && f.firstChild
            ? f.insertBefore(S, f.firstChild)
            : f.appendChild(S),
          S.styleSheet
            ? (S.styleSheet.cssText = h)
            : S.appendChild(document.createTextNode(h));
      }
    })(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`),
      (n.PageFlip = class extends (
        class {
          constructor() {
            this.events = new Map();
          }
          on(h, l) {
            return (
              this.events.has(h)
                ? this.events.get(h).push(l)
                : this.events.set(h, [l]),
              this
            );
          }
          off(h) {
            this.events.delete(h);
          }
          trigger(h, l, u = null) {
            if (this.events.has(h))
              for (const f of this.events.get(h)) f({ data: u, object: l });
          }
        }
      ) {
        constructor(h, l) {
          super(),
            (this.isUserTouch = !1),
            (this.isUserMove = !1),
            (this.setting = null),
            (this.pages = null),
            (this.setting = new p().getSettings(l)),
            (this.block = h);
        }
        destroy() {
          this.ui.destroy(), this.block.remove();
        }
        update() {
          this.render.update(), this.pages.show();
        }
        loadFromImages(h) {
          this.ui = new T(this.block, this, this.setting);
          const l = this.ui.getCanvas();
          (this.render = new w(this, this.setting, l)),
            (this.flipController = new g(this.render, this)),
            (this.pages = new o(this, this.render, h)),
            this.pages.load(),
            this.render.start(),
            this.pages.show(this.setting.startPage),
            setTimeout(() => {
              this.ui.update(),
                this.trigger("init", this, {
                  page: this.setting.startPage,
                  mode: this.render.getOrientation(),
                });
            }, 1);
        }
        loadFromHTML(h) {
          (this.ui = new _(this.block, this, this.setting, h)),
            (this.render = new m(this, this.setting, this.ui.getDistElement())),
            (this.flipController = new g(this.render, this)),
            (this.pages = new d(
              this,
              this.render,
              this.ui.getDistElement(),
              h
            )),
            this.pages.load(),
            this.render.start(),
            this.pages.show(this.setting.startPage),
            setTimeout(() => {
              this.ui.update(),
                this.trigger("init", this, {
                  page: this.setting.startPage,
                  mode: this.render.getOrientation(),
                });
            }, 1);
        }
        updateFromImages(h) {
          const l = this.pages.getCurrentPageIndex();
          this.pages.destroy(),
            (this.pages = new o(this, this.render, h)),
            this.pages.load(),
            this.pages.show(l),
            this.trigger("update", this, {
              page: l,
              mode: this.render.getOrientation(),
            });
        }
        updateFromHtml(h) {
          const l = this.pages.getCurrentPageIndex();
          this.pages.destroy(),
            (this.pages = new d(
              this,
              this.render,
              this.ui.getDistElement(),
              h
            )),
            this.pages.load(),
            this.ui.updateItems(h),
            this.render.reload(),
            this.pages.show(l),
            this.trigger("update", this, {
              page: l,
              mode: this.render.getOrientation(),
            });
        }
        clear() {
          this.pages.destroy(), this.ui.clear();
        }
        turnToPrevPage() {
          this.pages.showPrev();
        }
        turnToNextPage() {
          this.pages.showNext();
        }
        turnToPage(h) {
          this.pages.show(h);
        }
        flipNext(h = "top") {
          this.flipController.flipNext(h);
        }
        flipPrev(h = "top") {
          this.flipController.flipPrev(h);
        }
        flip(h, l = "top") {
          this.flipController.flipToPage(h, l);
        }
        updateState(h) {
          this.trigger("changeState", this, h);
        }
        updatePageIndex(h) {
          this.trigger("flip", this, h);
        }
        updateOrientation(h) {
          this.ui.setOrientationStyle(h),
            this.update(),
            this.trigger("changeOrientation", this, h);
        }
        getPageCount() {
          return this.pages.getPageCount();
        }
        getCurrentPageIndex() {
          return this.pages.getCurrentPageIndex();
        }
        getPage(h) {
          return this.pages.getPage(h);
        }
        getRender() {
          return this.render;
        }
        getFlipController() {
          return this.flipController;
        }
        getOrientation() {
          return this.render.getOrientation();
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        getSettings() {
          return this.setting;
        }
        getUI() {
          return this.ui;
        }
        getState() {
          return this.flipController.getState();
        }
        getPageCollection() {
          return this.pages;
        }
        startUserTouch(h) {
          (this.mousePosition = h),
            (this.isUserTouch = !0),
            (this.isUserMove = !1);
        }
        userMove(h, l) {
          this.isUserTouch || l || !this.setting.showPageCorners
            ? this.isUserTouch &&
              a.GetDistanceBetweenTwoPoint(this.mousePosition, h) > 5 &&
              ((this.isUserMove = !0), this.flipController.fold(h))
            : this.flipController.showCorner(h);
        }
        userStop(h, l = !1) {
          this.isUserTouch &&
            ((this.isUserTouch = !1),
            l ||
              (this.isUserMove
                ? this.flipController.stopMove()
                : this.flipController.flip(h)));
        }
      }),
      Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Al, Al.exports);
var Iv = Al.exports;
const Tv = Ee.forwardRef((e, t) => {
    const n = O.useRef(null),
      r = O.useRef([]),
      i = O.useRef(),
      [s, o] = O.useState([]);
    O.useImperativeHandle(t, () => ({ pageFlip: () => i.current }));
    const a = O.useCallback(() => {
        i.current && i.current.clear();
      }, []),
      c = O.useCallback(() => {
        const d = i.current;
        d &&
          (d.off("flip"),
          d.off("changeOrientation"),
          d.off("changeState"),
          d.off("init"),
          d.off("update"));
      }, []);
    return (
      O.useEffect(() => {
        if (((r.current = []), e.children)) {
          const d = Ee.Children.map(e.children, (v) =>
            Ee.cloneElement(v, {
              ref: (g) => {
                g && r.current.push(g);
              },
            })
          );
          (!e.renderOnlyPageLengthChange || s.length !== d.length) &&
            (d.length < s.length && a(), o(d));
        }
      }, [e.children]),
      O.useEffect(() => {
        const d = () => {
          const v = i.current;
          v &&
            (e.onFlip && v.on("flip", (g) => e.onFlip(g)),
            e.onChangeOrientation &&
              v.on("changeOrientation", (g) => e.onChangeOrientation(g)),
            e.onChangeState && v.on("changeState", (g) => e.onChangeState(g)),
            e.onInit && v.on("init", (g) => e.onInit(g)),
            e.onUpdate && v.on("update", (g) => e.onUpdate(g)));
        };
        s.length > 0 &&
          r.current.length > 0 &&
          (c(),
          n.current &&
            !i.current &&
            (i.current = new Iv.PageFlip(n.current, e)),
          i.current.getFlipController()
            ? i.current.updateFromHtml(r.current)
            : i.current.loadFromHTML(r.current),
          d());
      }, [s]),
      Ee.createElement(
        "div",
        { ref: n, className: e.className, style: e.style },
        s
      )
    );
  }),
  Rv = Ee.memo(Tv);
function Ov(e) {
  return E.jsxs(Rv, {
    className: "book",
    width: 550,
    height: 733,
    size: "stretch",
    minWidth: 315,
    maxWidth: 1e3,
    minHeight: 400,
    maxHeight: 1533,
    maxShadowOpacity: 0.2,
    showCover: !0,
    mobileScrollSupport: !0,
    children: [
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h2", { children: "Our story begins..." }),
            E.jsx("h5", { children: "When we first met:" }),
            E.jsx("p", {
              children:
                "A few sentences about how you met, your time courting or as friends or dating. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h5", { children: "When we fell for each other:" }),
            E.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h2", { children: "Our time together..." }),
            E.jsx("h5", { children: "Our first year anniversary:" }),
            E.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h5", { children: "Our little family:" }),
            E.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h2", { children: "We set out on new adventures." }),
            E.jsx("h5", { children: "Our trips around the world..." }),
            E.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h5", { children: "The adventures continue.." }),
            E.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsx("div", {
          className: "book-page-content",
          children: E.jsx("p", {
            children:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
          }),
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsx("div", {
          className: "book-page-content",
          children: E.jsx("p", {
            children:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
          }),
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h2", { children: "Making a promise." }),
            E.jsx("h5", { children: "The proposal:" }),
            E.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
      E.jsx("div", {
        className: "book-page",
        children: E.jsxs("div", {
          className: "book-page-content",
          children: [
            E.jsx("h2", { children: "Our future together..." }),
            E.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis ac nibh.",
            }),
          ],
        }),
      }),
    ],
  });
}
function Nv() {
  return E.jsx(E.Fragment, {
    children: E.jsxs(nt, {
      fluid: !0,
      className: "section-story",
      children: [
        E.jsx("h1", {
          className: "section-story-title",
          children: "Our Story",
        }),
        E.jsx(nt, {
          fluid: !0,
          className: "book-bg",
          children: E.jsx(nt, { children: E.jsx(Ov, {}) }),
        }),
      ],
    }),
  });
}
var Xa = { exports: {} };
function Qf(e, t = 100, n = {}) {
  if (typeof e != "function")
    throw new TypeError(
      `Expected the first parameter to be a function, got \`${typeof e}\`.`
    );
  if (t < 0) throw new RangeError("`wait` must not be negative.");
  const { immediate: r } = typeof n == "boolean" ? { immediate: n } : n;
  let i, s, o, a, c;
  function d() {
    const g = Date.now() - a;
    if (g < t && g >= 0) o = setTimeout(d, t - g);
    else if (((o = void 0), !r)) {
      const y = i,
        w = s;
      (i = void 0), (s = void 0), (c = e.apply(y, w));
    }
  }
  const v = function (...g) {
    if (i && this !== i)
      throw new Error("Debounced method called with different contexts.");
    (i = this), (s = g), (a = Date.now());
    const y = r && !o;
    if ((o || (o = setTimeout(d, t)), y)) {
      const w = i,
        P = s;
      (i = void 0), (s = void 0), (c = e.apply(w, P));
    }
    return c;
  };
  return (
    (v.clear = () => {
      o && (clearTimeout(o), (o = void 0));
    }),
    (v.flush = () => {
      if (!o) return;
      const g = i,
        y = s;
      (i = void 0),
        (s = void 0),
        (c = e.apply(g, y)),
        clearTimeout(o),
        (o = void 0);
    }),
    v
  );
}
Xa.exports.debounce = Qf;
Xa.exports = Qf;
var Lv = Xa.exports;
const Mv = Ss(Lv),
  zv = "xs",
  Av = "sm",
  Dv = "md",
  jv = "lg",
  Fv = "xl",
  $v = "xxl",
  Dc = (e) => {
    if (e < 576) return zv;
    if (e >= 576 && e < 768) return Av;
    if (e >= 768 && e < 992) return Dv;
    if (e >= 992 && e < 1200) return jv;
    if (e >= 1200 && e < 1440) return Fv;
    if (e >= 1440) return $v;
  },
  Bv = () => {
    const [e, t] = O.useState(() => Dc(window.innerWidth));
    return (
      O.useEffect(() => {
        const n = Mv(function () {
          t(Dc(window.innerWidth));
        }, 200);
        return (
          window.addEventListener("resize", n),
          () => window.removeEventListener("resize", n)
        );
      }, []),
      e
    );
  };
function Wv() {
  const e = Bv(),
    n = { xs: 360, sm: 442, md: 504, lg: 544, xl: 567, xxl: 672 }[e] || 672;
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(nt, {
        fluid: !0,
        className: "section-venue",
        children: E.jsx(nt, {
          className: "py-5",
          children: E.jsxs(Ya, {
            className: "py-5",
            children: [
              E.jsx(Yr, {
                md: 2,
                lg: 4,
                xl: 5,
                className: "venue-photo-container order-md-2",
                children: E.jsxs("div", {
                  children: [
                    E.jsx("img", {
                      src: "/assets/img/venue-images.png",
                      className: "venue-photo",
                    }),
                    E.jsx("img", {
                      src: "/assets/img/venue-images-mobile.png",
                      className: "venue-photo-mobile",
                    }),
                  ],
                }),
              }),
              E.jsxs(Yr, {
                md: 10,
                lg: 8,
                xl: 7,
                className: "venue-text p-5 ",
                children: [
                  E.jsxs("div", {
                    className: "venue-text-upper",
                    children: [
                      E.jsx("h1", {
                        className: "venue-title",
                        children: "Venue",
                      }),
                      E.jsxs("p", {
                        children: [
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada pretium interdum. Nulla rhoncus eleifend est non dapibus. Fusce vitae vulputate enim, ut sagittis lacus. Phasellus efficitur lorem sed lorem lacinia consequat. Curabitur bibendum ut nisl congue malesuada. Ut purus enim, posuere fringilla nunc sit amet, bibendum parturient montes, nascetur ridiculus mus. ",
                          n,
                        ],
                      }),
                      E.jsx("h5", { children: "The Barn at Sadie Belle Farm" }),
                      E.jsxs("p", {
                        children: [
                          E.jsx("span", {
                            className: "venue-address",
                            children: "1636 Bishopville Road,",
                          }),
                          E.jsx("span", {
                            className: "venue-address",
                            children: "Hantsport, NS, B0P 1P0",
                          }),
                          E.jsx("span", {
                            className: "venue-address",
                            children: "(902) 809-2359",
                          }),
                        ],
                      }),
                    ],
                  }),
                  E.jsx("div", {
                    className: "venue-map border",
                    children: E.jsx("iframe", {
                      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d87413.00580062682!2d-64.2905018096398!3d45.043349601202394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b59abf901c468c5%3A0x40e82a0b83889eea!2sThe%20Barn%20at%20Sadie%20Belle%20Farm!5e0!3m2!1sen!2sca!4v1703692195530!5m2!1sen!2sca",
                      width: n,
                      height: "400",
                      style: { border: 0 },
                      allowFullScreen: "",
                      loading: "lazy",
                      referrerPolicy: "no-referrer-when-downgrade",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      E.jsx(nt, { fluid: !0, className: "paper-edge" }),
    ],
  });
}
function Hv() {
  return E.jsx(E.Fragment, {
    children: E.jsxs(nt, {
      className: "section-menu",
      fluid: !0,
      children: [
        E.jsx("img", {
          src: "/assets/img/clip-sm.png",
          className: "clipboard-clip",
        }),
        E.jsx(nt, {
          className: "clipboard-container",
          children: E.jsx(Ya, {
            className: "justify-content-center",
            children: E.jsx(Yr, {
              xs: "10",
              sm: "9",
              md: "8",
              lg: "6",
              className: "clipboard-paper",
              children: E.jsxs("div", {
                className: "clipboard-menu",
                children: [
                  E.jsx("h1", { children: "Menu" }),
                  E.jsxs("ul", {
                    children: [
                      E.jsx("li", {
                        className: "menu-title",
                        children: "Appetizers:",
                      }),
                      E.jsx("li", { children: " Brisket Sliders " }),
                      E.jsx("li", { children: " Chicken Sliders" }),
                      E.jsx("li", {
                        children: " Slow Smoked Jalapeno Poppers",
                      }),
                      E.jsx("li", { children: " Veggie Thai Spring Rolls" }),
                      E.jsx("li", {
                        className: "menu-title",
                        children: " Main: (choice of)",
                      }),
                      E.jsx("li", { children: " Chicken and Ribs" }),
                      E.jsx("li", {
                        children: " Vegan Portobello Mushroom Burger",
                      }),
                      E.jsx("li", {
                        className: "menu-title",
                        children: " Sides:",
                      }),
                      E.jsx("li", { children: " Corn on the Cob" }),
                      E.jsx("li", { children: " Mac and Cheese" }),
                      E.jsx("li", { children: " Roasted Beet Salad" }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function Uv() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsxs(_v, { children: [E.jsx(Ev, {}), E.jsx(Cv, {})] }),
      E.jsx(Nv, {}),
      E.jsx(Wv, {}),
      E.jsx(Hv, {}),
    ],
  });
}
To.createRoot(document.getElementById("root")).render(
  E.jsx(Ee.StrictMode, { children: E.jsx(Uv, {}) })
);
