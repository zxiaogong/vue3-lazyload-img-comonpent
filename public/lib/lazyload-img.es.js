import "./style.css"
import { defineComponent as g, ref as _, watch as C, openBlock as c, createElementBlock as p, pushScopeId as P, popScopeId as k, createElementVNode as v, unref as i, createBlock as m, normalizeClass as S, normalizeStyle as w, onMounted as L } from "vue";
let u = {
  retryLoad: 5
};
const O = (o) => {
  u = {
    ...u,
    ...o
  };
}, E = (o) => (P("data-v-a17e0516"), o = o(), k(), o), H = { class: "err-root" }, N = ["width", "height"], V = /* @__PURE__ */ E(() => /* @__PURE__ */ v("path", { d: "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" }, null, -1)), D = /* @__PURE__ */ E(() => /* @__PURE__ */ v("path", { d: "M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" }, null, -1)), j = [
  V,
  D
], A = /* @__PURE__ */ g({
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
    ), (r, a) => (c(), p("div", H, [
      (c(), p("svg", {
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
const h = (o, e) => {
  const s = o.__vccOpts || o;
  for (const [t, r] of e)
    s[t] = r;
  return s;
}, M = /* @__PURE__ */ h(A, [["__scopeId", "data-v-a17e0516"]]), B = ["src"], T = /* @__PURE__ */ g({
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
    const e = o, s = e.specialErrSrc || u.errImg;
    return (t, r) => typeof i(s) == "string" ? (c(), p("img", {
      key: 0,
      src: i(s),
      class: "defalut-img"
    }, null, 8, B)) : i(s) ? (c(), m(i(s), { key: 2 })) : (c(), m(M, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const q = /* @__PURE__ */ h(T, [["__scopeId", "data-v-833401eb"]]);
const U = (o) => (P("data-v-eacdd0f4"), o = o(), k(), o), W = { class: "pre-root" }, F = /* @__PURE__ */ U(() => /* @__PURE__ */ v("span", { class: "visually-hidden" }, "Loading...", -1)), G = [
  F
], J = /* @__PURE__ */ g({
  __name: "loadDeafultPreImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(o) {
    const e = o, s = (r) => {
      const a = r * 0.7, y = r * 0.12;
      return {
        width: a + "px",
        height: a + "px",
        "font-size": y + "px"
      };
    }, t = _(s(e.boxSize));
    return C(
      () => e.boxSize,
      (r, a) => {
        t.value = s(e.boxSize);
      }
    ), (r, a) => (c(), p("div", W, [
      v("div", {
        class: S(["spinner-grow", "loadColor"]),
        style: w(t.value),
        role: "status"
      }, null, 4),
      v("div", {
        class: S(["spinner-border", "loadColor"]),
        style: w(t.value),
        role: "status"
      }, G, 4)
    ]));
  }
});
const K = /* @__PURE__ */ h(J, [["__scopeId", "data-v-eacdd0f4"]]), Q = ["src"], X = /* @__PURE__ */ g({
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
    const e = o, s = e.specialPreSrc || u.preImg;
    return (t, r) => typeof i(s) == "string" ? (c(), p("img", {
      key: 0,
      src: i(s),
      class: "defalut-img"
    }, null, 8, Q)) : i(s) ? (c(), m(i(s), { key: 2 })) : (c(), m(K, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const Y = /* @__PURE__ */ h(X, [["__scopeId", "data-v-cc626453"]]), Z = ["title"], R = { class: "defalut-img-box" }, ee = ["src"], te = /* @__PURE__ */ g({
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
    const e = o, s = _("img-equal"), t = _(null), r = _(0), a = _(2), y = _("");
    let f = u.retryLoad && u.retryLoad > 0 ? u.retryLoad : 1;
    const x = () => new Promise((d, n) => {
      try {
        const l = new Image();
        l.src = e.src, l.setAttribute("crossOrigin", "Anonymous"), l.onload = (b) => {
          l.width > l.height ? s.value = "img-max-height" : l.width < l.height && (s.value = "img-max-width"), a.value = 0, f = 0, y.value = e.src, d(e.src);
        }, l.onerror = (b) => {
          f -= 1, f ? setTimeout(async () => {
            await x();
          }, 1e3) : (a.value = 1, n(`${e.src} Invalid picture URL`));
        };
      } catch (l) {
        a.value = 1, f = 0, n(l);
      }
    }), $ = () => {
      const d = new IntersectionObserver(
        (n) => {
          a.value === 2 && n[0].isIntersecting && (x(), d.unobserve(t.value));
        },
        {
          threshold: 0
        }
      );
      d.observe(t.value);
    };
    return L(() => {
      var I;
      const d = document.body.scrollHeight, n = document.documentElement.clientHeight;
      new IntersectionObserver((se) => {
      }).observe(t.value), d <= n && ((I = t == null ? void 0 : t.value) == null ? void 0 : I.offsetTop) <= n + 300 ? x() : $();
      const b = parseInt(
        getComputedStyle(t == null ? void 0 : t.value).getPropertyValue("height")
      ), z = parseInt(
        getComputedStyle(t == null ? void 0 : t.value).getPropertyValue("width")
      );
      z > b ? r.value = b : r.value = z;
    }), (d, n) => (c(), p("div", {
      class: S([e.class || "defalut-img-root"]),
      ref_key: "imgBoxRef",
      ref: t,
      title: e.title
    }, [
      v("div", R, [
        a.value === 2 ? (c(), m(Y, {
          key: 0,
          "box-size": r.value,
          specialPreSrc: e.preSrc
        }, null, 8, ["box-size", "specialPreSrc"])) : a.value === 1 ? (c(), m(q, {
          key: 1,
          "box-size": r.value,
          specialErrSrc: e.errSrc
        }, null, 8, ["box-size", "specialErrSrc"])) : (c(), p("img", {
          key: 2,
          class: S([e.class ? s.value : "lazyload-img"]),
          src: y.value
        }, null, 10, ee))
      ])
    ], 10, Z));
  }
});
const oe = /* @__PURE__ */ h(te, [["__scopeId", "data-v-3b90a101"]]), ae = {
  install: (o, e) => {
    O(e), o.component("lazyload-img", oe);
  }
};
export {
  oe as LazyloadImg,
  ae as default
};
