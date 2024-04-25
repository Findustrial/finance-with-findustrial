let q = X;
const E = 1, y = 2, M = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var u = null;
let K = null, L = null, g = null, c = null, m = null, N = 0;
function Z(e, t) {
  const n = g, l = u, s = e.length === 0, A = t === void 0 ? l : t, o = s ? M : {
    owned: null,
    cleanups: null,
    context: A ? A.context : null,
    owner: A
  }, i = s ? e : () => e(() => D(() => v(o)));
  u = o, g = null;
  try {
    return Q(i, !0);
  } finally {
    g = n, u = l;
  }
}
function b(e, t, n) {
  const l = $(e, t, !1, E);
  R(l);
}
function D(e) {
  if (g === null)
    return e();
  const t = g;
  g = null;
  try {
    return e();
  } finally {
    g = t;
  }
}
function z(e, t, n) {
  let l = e.value;
  return (!e.comparator || !e.comparator(l, t)) && (e.value = t, e.observers && e.observers.length && Q(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      const A = e.observers[s], o = K && K.running;
      o && K.disposed.has(A), (o ? !A.tState : !A.state) && (A.pure ? c.push(A) : m.push(A), A.observers && Y(A)), o || (A.state = E);
    }
    if (c.length > 1e6)
      throw c = [], new Error();
  }, !1)), t;
}
function R(e) {
  if (!e.fn)
    return;
  v(e);
  const t = N;
  _(
    e,
    e.value,
    t
  );
}
function _(e, t, n) {
  let l;
  const s = u, A = g;
  g = u = e;
  try {
    l = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = E, e.owned && e.owned.forEach(v), e.owned = null), e.updatedAt = n + 1, J(o);
  } finally {
    g = A, u = s;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? z(e, l) : e.value = l, e.updatedAt = n);
}
function $(e, t, n, l = E, s) {
  const A = {
    fn: e,
    state: l,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: u,
    context: u ? u.context : null,
    pure: n
  };
  return u === null || u !== M && (u.owned ? u.owned.push(A) : u.owned = [A]), A;
}
function P(e) {
  if (e.state === 0)
    return;
  if (e.state === y)
    return k(e);
  if (e.suspense && D(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < N); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === E)
      R(e);
    else if (e.state === y) {
      const l = c;
      c = null, Q(() => k(e, t[0]), !1), c = l;
    }
}
function Q(e, t) {
  if (c)
    return e();
  let n = !1;
  t || (c = []), m ? n = !0 : m = [], N++;
  try {
    const l = e();
    return ee(n), l;
  } catch (l) {
    n || (m = null), c = null, J(l);
  }
}
function ee(e) {
  if (c && (X(c), c = null), e)
    return;
  const t = m;
  m = null, t.length && Q(() => q(t), !1);
}
function X(e) {
  for (let t = 0; t < e.length; t++)
    P(e[t]);
}
function k(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const l = e.sources[n];
    if (l.sources) {
      const s = l.state;
      s === E ? l !== t && (!l.updatedAt || l.updatedAt < N) && P(l) : s === y && k(l, t);
    }
  }
}
function Y(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = y, n.pure ? c.push(n) : m.push(n), n.observers && Y(n));
  }
}
function v(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), l = e.sourceSlots.pop(), s = n.observers;
      if (s && s.length) {
        const A = s.pop(), o = n.observerSlots.pop();
        l < s.length && (A.sourceSlots[o] = l, s[l] = A, n.observerSlots[l] = o);
      }
    }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--)
      v(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--)
      e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function te(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function J(e, t = u) {
  throw te(e);
}
function ne(e, t) {
  return D(() => e(t || {}));
}
function le(e, t, n) {
  let l = n.length, s = t.length, A = l, o = 0, i = 0, f = t[s - 1].nextSibling, a = null;
  for (; o < s || i < A; ) {
    if (t[o] === n[i]) {
      o++, i++;
      continue;
    }
    for (; t[s - 1] === n[A - 1]; )
      s--, A--;
    if (s === o) {
      const r = A < l ? i ? n[i - 1].nextSibling : n[A - i] : f;
      for (; i < A; )
        e.insertBefore(n[i++], r);
    } else if (A === i)
      for (; o < s; )
        (!a || !a.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === n[A - 1] && n[i] === t[s - 1]) {
      const r = t[--s].nextSibling;
      e.insertBefore(n[i++], t[o++].nextSibling), e.insertBefore(n[--A], r), t[s] = n[A];
    } else {
      if (!a) {
        a = /* @__PURE__ */ new Map();
        let d = i;
        for (; d < A; )
          a.set(n[d], d++);
      }
      const r = a.get(t[o]);
      if (r != null)
        if (i < r && r < A) {
          let d = o, p = 1, x;
          for (; ++d < s && d < A && !((x = a.get(t[d])) == null || x !== r + p); )
            p++;
          if (p > r - i) {
            const C = t[o];
            for (; i < r; )
              e.insertBefore(n[i++], C);
          } else
            e.replaceChild(n[i++], t[o++]);
        } else
          o++;
      else
        t[o++].remove();
    }
  }
}
function ie(e, t, n, l = {}) {
  let s;
  return Z((A) => {
    s = A, t === document ? e() : O(t, e(), t.firstChild ? null : void 0, n);
  }, l.owner), () => {
    s(), t.textContent = "";
  };
}
function se(e, t, n) {
  let l;
  const s = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, n ? o.content.firstChild.firstChild : o.content.firstChild;
  }, A = t ? () => D(() => document.importNode(l || (l = s()), !0)) : () => (l || (l = s())).cloneNode(!0);
  return A.cloneNode = A, A;
}
function I(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function B(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function O(e, t, n, l) {
  if (n !== void 0 && !l && (l = []), typeof t != "function")
    return S(e, t, l, n);
  b((s) => S(e, t(), s, n), l);
}
function S(e, t, n, l, s) {
  for (; typeof n == "function"; )
    n = n();
  if (t === n)
    return n;
  const A = typeof t, o = l !== void 0;
  if (e = o && n[0] && n[0].parentNode || e, A === "string" || A === "number")
    if (A === "number" && (t = t.toString()), o) {
      let i = n[0];
      i && i.nodeType === 3 ? i.data !== t && (i.data = t) : i = document.createTextNode(t), n = w(e, n, l, i);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  else if (t == null || A === "boolean")
    n = w(e, n, l);
  else {
    if (A === "function")
      return b(() => {
        let i = t();
        for (; typeof i == "function"; )
          i = i();
        n = S(e, i, n, l);
      }), () => n;
    if (Array.isArray(t)) {
      const i = [], f = n && Array.isArray(n);
      if (G(i, t, n, s))
        return b(() => n = S(e, i, n, l, !0)), () => n;
      if (i.length === 0) {
        if (n = w(e, n, l), o)
          return n;
      } else
        f ? n.length === 0 ? H(e, i, l) : le(e, n, i) : (n && w(e), H(e, i));
      n = i;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (o)
          return n = w(e, n, l, t);
        w(e, n, null, t);
      } else
        n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function G(e, t, n, l) {
  let s = !1;
  for (let A = 0, o = t.length; A < o; A++) {
    let i = t[A], f = n && n[e.length], a;
    if (!(i == null || i === !0 || i === !1))
      if ((a = typeof i) == "object" && i.nodeType)
        e.push(i);
      else if (Array.isArray(i))
        s = G(e, i, f) || s;
      else if (a === "function")
        if (l) {
          for (; typeof i == "function"; )
            i = i();
          s = G(
            e,
            Array.isArray(i) ? i : [i],
            Array.isArray(f) ? f : [f]
          ) || s;
        } else
          e.push(i), s = !0;
      else {
        const r = String(i);
        f && f.nodeType === 3 && f.data === r ? e.push(f) : e.push(document.createTextNode(r));
      }
  }
  return s;
}
function H(e, t, n = null) {
  for (let l = 0, s = t.length; l < s; l++)
    e.insertBefore(t[l], n);
}
function w(e, t, n, l) {
  if (n === void 0)
    return e.textContent = "";
  const s = l || document.createTextNode("");
  if (t.length) {
    let A = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = t[o];
      if (s !== i) {
        const f = i.parentNode === e;
        !A && !o ? f ? e.replaceChild(s, i) : e.insertBefore(s, n) : f && i.remove();
      } else
        A = !0;
    }
  } else
    e.insertBefore(s, n);
  return [s];
}
const Ae = "data:image/png;base64,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", oe = "data:image/png;base64,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";
var fe = /* @__PURE__ */ se("<a target=_blank><p></p><span>powered by <img>");
function re({
  style: e,
  url: t,
  lang: n
}) {
  const l = "medium", s = e || "default", A = n || "de", o = t || "https://findustrial.io/de/photovoltaik-finanzierung", i = {
    de: "Jetzt flexibel finanzieren statt kaufen!",
    en: "Flex-Finance Now, Instead of Buying!"
  }, f = {
    default: {
      small: "inline-block rounded-[4px] pt-2 pb-2 px-3 text-sm bg-[#003993] text-white text-center",
      medium: "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base bg-[#003993] text-white text-center"
    },
    dark: {
      medium: "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base bg-[#323232] text-white text-center"
    },
    light: {
      medium: "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base border border-1 border-[#003992] bg-white text-center"
    }
  }, a = {
    default: {
      small: "text-sm",
      medium: "font-medium text-lg"
    },
    dark: {
      medium: "font-medium text-lg text-white"
    },
    light: {
      medium: "font-medium text-lg text-[#003992]"
    }
  }, r = {
    default: {
      small: "flex items-center justify-center text-xs tracking-wide",
      medium: "flex items-center justify-center font-normal text-xs tracking-wide"
    },
    dark: {
      medium: "flex items-center justify-center font-normal text-xs tracking-wide"
    },
    light: {
      medium: "flex items-center justify-center font-normal text-xs tracking-wide"
    }
  }, d = {
    default: {
      small: "h-[15px] ml-1",
      medium: "h-[21px] ml-1"
    },
    dark: {
      medium: "h-[21px] ml-1"
    },
    light: {
      medium: "h-[21px] ml-1"
    }
  };
  return (() => {
    var p = fe(), x = p.firstChild, C = x.nextSibling, V = C.firstChild, T = V.nextSibling;
    return I(p, "href", o), O(x, () => i[A]), I(T, "src", s === "light" ? oe : Ae), b((h) => {
      var W = f[s][l], j = a[s][l], F = r[s][l], U = d[s][l];
      return W !== h.e && B(p, h.e = W), j !== h.t && B(x, h.t = j), F !== h.a && B(C, h.a = F), U !== h.o && B(T, h.o = U), h;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), p;
  })();
}
document.querySelectorAll(".finance-with-findustrial").forEach((e) => {
  const t = e.getAttribute("data-style") || "default", n = e.getAttribute("data-lang") || "de";
  ie(() => ne(re, {
    style: t,
    lang: n
  }), e);
});
