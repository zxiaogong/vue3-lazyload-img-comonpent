import "./style.css";
import { defineComponent as h, ref as u, watch as I, openBlock as l, createElementBlock as p, pushScopeId as k, popScopeId as E, createElementVNode as v, unref as i, createBlock as m, normalizeClass as x, normalizeStyle as P, onMounted as L } from "vue";
let _ = {
  retryLoad: 5
};
const O = (o) => {
  _ = {
    ..._,
    ...o
  };
}, $ = (o) => (k("data-v-a17e0516"), o = o(), E(), o), H = { class: "err-root" }, N = ["width", "height"], V = /* @__PURE__ */ $(() => /* @__PURE__ */ v("path", { d: "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" }, null, -1)), D = /* @__PURE__ */ $(() => /* @__PURE__ */ v("path", { d: "M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" }, null, -1)), j = [
  V,
  D
], A = /* @__PURE__ */ h({
  __name: "loadDeafultErrImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(o) {
    const e = o, s = (r) => r * 0.45, t = u(s(e.boxSize));
    return I(
      () => e.boxSize,
      (r, a) => {
        t.value = s(r);
      }
    ), (r, a) => (l(), p("div", H, [
      (l(), p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t.value,
        height: t.value,
        fill: "currentColor",
        class: "bi bi-file-earmark-image-fill errColor",
        viewBox: "0 0 16 16"
      }, j, 8, N))
    ]));
  }
});
const y = (o, e) => {
  const s = o.__vccOpts || o;
  for (const [t, r] of e)
    s[t] = r;
  return s;
}, M = /* @__PURE__ */ y(A, [["__scopeId", "data-v-a17e0516"]]), T = ["src"], B = /* @__PURE__ */ h({
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
    const e = o, s = e.specialErrSrc || _.errImg;
    return (t, r) => typeof i(s) == "string" ? (l(), p("img", {
      key: 0,
      src: i(s),
      class: "defalut-img"
    }, null, 8, T)) : i(s) ? (l(), m(i(s), { key: 2 })) : (l(), m(M, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const q = /* @__PURE__ */ y(B, [["__scopeId", "data-v-833401eb"]]);
const U = (o) => (k("data-v-eacdd0f4"), o = o(), E(), o), W = { class: "pre-root" }, F = /* @__PURE__ */ U(() => /* @__PURE__ */ v("span", { class: "visually-hidden" }, "Loading...", -1)), G = [
  F
], J = /* @__PURE__ */ h({
  __name: "loadDeafultPreImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(o) {
    const e = o, s = (r) => {
      const a = r * 0.7, f = r * 0.12;
      return {
        width: a + "px",
        height: a + "px",
        "font-size": f + "px"
      };
    }, t = u(s(e.boxSize));
    return I(
      () => e.boxSize,
      (r, a) => {
        t.value = s(e.boxSize);
      }
    ), (r, a) => (l(), p("div", W, [
      v("div", {
        class: x(["spinner-grow", "loadColor"]),
        style: P(t.value),
        role: "status"
      }, null, 4),
      v("div", {
        class: x(["spinner-border", "loadColor"]),
        style: P(t.value),
        role: "status"
      }, G, 4)
    ]));
  }
});
const K = /* @__PURE__ */ y(J, [["__scopeId", "data-v-eacdd0f4"]]), Q = ["src"], X = /* @__PURE__ */ h({
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
    const e = o, s = e.specialPreSrc || _.preImg;
    return (t, r) => typeof i(s) == "string" ? (l(), p("img", {
      key: 0,
      src: i(s),
      class: "defalut-img"
    }, null, 8, Q)) : i(s) ? (l(), m(i(s), { key: 2 })) : (l(), m(K, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const Y = /* @__PURE__ */ y(X, [["__scopeId", "data-v-cc626453"]]), Z = ["title"], R = { class: "defalut-img-box" }, ee = ["src"], te = /* @__PURE__ */ h({
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
    const e = o, s = u("img-equal"), t = u(null), r = u(0), a = u(2), f = u("");
    let b = _.retryLoad && _.retryLoad > 0 ? _.retryLoad : 1;
    const z = () => new Promise((d, n) => {
      try {
        const c = new Image();
        c.src = e.src, c.setAttribute("crossOrigin", "Anonymous"), c.onload = (S) => {
          c.width > c.height ? s.value = "img-max-width" : c.width < c.height && (s.value = "img-max-height"), a.value = 0, b = 0, f.value = e.src, d(e.src);
        }, c.onerror = (S) => {
          if (b -= 1, b) {
            let g = setTimeout(async () => {
              await z(), clearTimeout(g), g = null;
            }, 1e3);
          } else
            a.value = 1, n(`${e.src} Invalid picture URL`);
        };
      } catch (c) {
        a.value = 1, b = 0, n(c);
      }
    }), w = () => {
      const d = new IntersectionObserver(
        (n) => {
          a.value === 2 && n[0].isIntersecting && (z(), d.unobserve(t.value));
        },
        {
          threshold: 0
        }
      );
      d.observe(t.value);
    };
    return L(() => {
      var C;
      const d = document.body.scrollHeight, n = document.documentElement.clientHeight;
      new IntersectionObserver((se) => {
      }).observe(t.value), d <= n && ((C = t == null ? void 0 : t.value) == null ? void 0 : C.offsetTop) <= n + 300 ? z() : w();
      const S = parseInt(
        getComputedStyle(t == null ? void 0 : t.value).getPropertyValue("height")
      ), g = parseInt(
        getComputedStyle(t == null ? void 0 : t.value).getPropertyValue("width")
      );
      g > S ? r.value = S : r.value = g;
    }), I(
      () => e.src,
      () => {
        a.value = 2, w();
      }
    ), (d, n) => (l(), p("div", {
      class: x([e.class || "defalut-img-root"]),
      ref_key: "imgBoxRef",
      ref: t,
      title: e.title
    }, [
      v("div", R, [
        a.value === 2 ? (l(), m(Y, {
          key: 0,
          "box-size": r.value,
          specialPreSrc: e.preSrc
        }, null, 8, ["box-size", "specialPreSrc"])) : a.value === 1 ? (l(), m(q, {
          key: 1,
          "box-size": r.value,
          specialErrSrc: e.errSrc
        }, null, 8, ["box-size", "specialErrSrc"])) : (l(), p("img", {
          key: 2,
          class: x([e.class ? s.value : "lazyload-img"]),
          src: f.value
        }, null, 10, ee))
      ])
    ], 10, Z));
  }
});
const oe = /* @__PURE__ */ y(te, [["__scopeId", "data-v-db7b184d"]]), ae = {
  install: (o, e) => {
    O(e), o.component("lazyload-img", oe);
  }
};
export {
  oe as LazyloadImg,
  ae as default
};
