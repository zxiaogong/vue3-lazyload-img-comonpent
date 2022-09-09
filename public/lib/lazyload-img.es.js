import "./style.css";
import { defineComponent as f, ref as _, watch as C, openBlock as l, createElementBlock as p, pushScopeId as k, popScopeId as E, createElementVNode as v, unref as d, createBlock as m, normalizeClass as z, normalizeStyle as P, onMounted as O } from "vue";
let i = {
  retryLoad: 5
};
const H = (o) => {
  i = {
    ...i,
    ...o
  };
}, $ = (o) => (k("data-v-a17e0516"), o = o(), E(), o), N = { class: "err-root" }, V = ["width", "height"], D = /* @__PURE__ */ $(() => /* @__PURE__ */ v("path", { d: "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" }, null, -1)), j = /* @__PURE__ */ $(() => /* @__PURE__ */ v("path", { d: "M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" }, null, -1)), A = [
  D,
  j
], M = /* @__PURE__ */ f({
  __name: "loadDeafultErrImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(o) {
    const e = o, s = (r) => r * 0.45, t = _(s(e.boxSize));
    return C(
      () => e.boxSize,
      (r, a) => {
        t.value = s(r);
      }
    ), (r, a) => (l(), p("div", N, [
      (l(), p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t.value,
        height: t.value,
        fill: "currentColor",
        class: "bi bi-file-earmark-image-fill errColor",
        viewBox: "0 0 16 16"
      }, A, 8, V))
    ]));
  }
});
const S = (o, e) => {
  const s = o.__vccOpts || o;
  for (const [t, r] of e)
    s[t] = r;
  return s;
}, T = /* @__PURE__ */ S(M, [["__scopeId", "data-v-a17e0516"]]), B = ["src"], q = /* @__PURE__ */ f({
  __name: "loadErr",
  props: {
    boxSize: {
      type: Number,
      default: 0
    },
    specialErrSrc: {
      type: Object || void 0,
      default: void 0
    }
  },
  setup(o) {
    const e = o, s = e.specialErrSrc || i.errImg;
    return (t, r) => typeof d(s) == "string" ? (l(), p("img", {
      key: 0,
      src: d(s),
      class: "defalut-img"
    }, null, 8, B)) : d(s) ? (l(), m(d(s), { key: 2 })) : (l(), m(T, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const U = /* @__PURE__ */ S(q, [["__scopeId", "data-v-833401eb"]]);
const W = (o) => (k("data-v-eacdd0f4"), o = o(), E(), o), F = { class: "pre-root" }, G = /* @__PURE__ */ W(() => /* @__PURE__ */ v("span", { class: "visually-hidden" }, "Loading...", -1)), J = [
  G
], K = /* @__PURE__ */ f({
  __name: "loadDeafultPreImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(o) {
    const e = o, s = (r) => {
      const a = r * 0.7, b = r * 0.12;
      return {
        width: a + "px",
        height: a + "px",
        "font-size": b + "px"
      };
    }, t = _(s(e.boxSize));
    return C(
      () => e.boxSize,
      (r, a) => {
        t.value = s(e.boxSize);
      }
    ), (r, a) => (l(), p("div", F, [
      v("div", {
        class: z(["spinner-grow", "loadColor"]),
        style: P(t.value),
        role: "status"
      }, null, 4),
      v("div", {
        class: z(["spinner-border", "loadColor"]),
        style: P(t.value),
        role: "status"
      }, J, 4)
    ]));
  }
});
const Q = /* @__PURE__ */ S(K, [["__scopeId", "data-v-eacdd0f4"]]), X = ["src"], Y = /* @__PURE__ */ f({
  __name: "loadPre",
  props: {
    boxSize: {
      type: Number,
      default: 0
    },
    specialPreSrc: {
      type: Object || void 0,
      default: void 0
    }
  },
  setup(o) {
    const e = o, s = e.specialPreSrc || i.preImg;
    return (t, r) => typeof d(s) == "string" ? (l(), p("img", {
      key: 0,
      src: d(s),
      class: "defalut-img"
    }, null, 8, X)) : d(s) ? (l(), m(d(s), { key: 2 })) : (l(), m(Q, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const Z = /* @__PURE__ */ S(Y, [["__scopeId", "data-v-cc626453"]]), R = ["title"], ee = { class: "defalut-img-box" }, te = ["src"], oe = /* @__PURE__ */ f({
  __name: "index",
  props: {
    src: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    preSrc: {
      type: Object || void 0,
      default: void 0
    },
    errSrc: {
      type: Object || void 0,
      default: void 0
    }
  },
  setup(o) {
    const e = o, s = _("img-equal"), t = _(null), r = _(0), a = _(2), b = _("");
    let g = 0, h = 0, y = i.retryLoad && i.retryLoad > 0 ? i.retryLoad : 1;
    const I = () => new Promise((u, n) => {
      try {
        const c = new Image();
        c.src = e.src, c.setAttribute("crossOrigin", "Anonymous"), c.onload = (x) => {
          c.width > c.height ? s.value = "img-max-width" : c.width < c.height || g > h ? s.value = "img-max-height" : g < h && (s.value = "img-max-width"), a.value = 0, y = 0, b.value = e.src, u(e.src);
        }, c.onerror = (x) => {
          if (y -= 1, y) {
            let w = setTimeout(async () => {
              await I(), clearTimeout(w), w = null;
            }, 1e3);
          } else
            a.value = 1, n(`${e.src} Invalid picture URL`);
        };
      } catch (c) {
        a.value = 1, y = 0, n(c);
      }
    }), L = () => {
      const u = new IntersectionObserver(
        (n) => {
          a.value === 2 && n[0].isIntersecting && (I(), u.unobserve(t.value));
        },
        {
          threshold: 0
        }
      );
      u.observe(t.value);
    };
    return O(() => {
      var x;
      const u = document.body.scrollHeight, n = document.documentElement.clientHeight;
      new IntersectionObserver((w) => {
      }).observe(t.value), u <= n && ((x = t == null ? void 0 : t.value) == null ? void 0 : x.offsetTop) <= n + 300 ? I() : L(), h = parseInt(
        getComputedStyle(t == null ? void 0 : t.value).getPropertyValue("height")
      ), g = parseInt(
        getComputedStyle(t == null ? void 0 : t.value).getPropertyValue("width")
      ), g > h ? r.value = h : r.value = g;
    }), C(
      () => e.src,
      () => {
        a.value = 2, y = i.retryLoad && i.retryLoad > 0 ? i.retryLoad : 1, L();
      }
    ), (u, n) => (l(), p("div", {
      class: z([e.class || "defalut-img-root"]),
      ref_key: "imgBoxRef",
      ref: t,
      title: e.title
    }, [
      v("div", ee, [
        a.value === 2 ? (l(), m(Z, {
          key: 0,
          "box-size": r.value,
          specialPreSrc: e.preSrc
        }, null, 8, ["box-size", "specialPreSrc"])) : a.value === 1 ? (l(), m(U, {
          key: 1,
          "box-size": r.value,
          specialErrSrc: e.errSrc
        }, null, 8, ["box-size", "specialErrSrc"])) : (l(), p("img", {
          key: 2,
          class: z([e.class ? s.value : "lazyload-img"]),
          src: b.value
        }, null, 10, te))
      ])
    ], 10, R));
  }
});
const se = /* @__PURE__ */ S(oe, [["__scopeId", "data-v-25214e15"]]), ae = {
  install: (o, e) => {
    H(e), o.component("lazyload-img", se);
  }
};
export {
  se as LazyloadImg,
  ae as default
};
