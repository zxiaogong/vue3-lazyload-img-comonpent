import "./style.css";
import { defineComponent as S, ref as _, watch as w, openBlock as i, createElementBlock as p, pushScopeId as E, popScopeId as $, createElementVNode as m, unref as u, createBlock as v, normalizeClass as b, normalizeStyle as k, onMounted as N } from "vue";
let d = {
  retryLoad: 5
};
const V = (t) => {
  d = {
    ...d,
    ...t
  };
}, O = (t) => (E("data-v-a17e0516"), t = t(), $(), t), D = { class: "err-root" }, M = ["width", "height"], j = /* @__PURE__ */ O(() => /* @__PURE__ */ m("path", { d: "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" }, null, -1)), A = /* @__PURE__ */ O(() => /* @__PURE__ */ m("path", { d: "M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" }, null, -1)), T = [
  j,
  A
], B = /* @__PURE__ */ S({
  __name: "loadDeafultErrImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(t) {
    const e = t, o = (a) => a * 0.45, s = _(o(e.boxSize));
    return w(
      () => e.boxSize,
      (a, l) => {
        s.value = o(a);
      }
    ), (a, l) => (i(), p("div", D, [
      (i(), p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: s.value,
        height: s.value,
        fill: "currentColor",
        class: "bi bi-file-earmark-image-fill errColor",
        viewBox: "0 0 16 16"
      }, T, 8, M))
    ]));
  }
});
const x = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, a] of e)
    o[s] = a;
  return o;
}, q = /* @__PURE__ */ x(B, [["__scopeId", "data-v-a17e0516"]]), U = ["src"], W = /* @__PURE__ */ S({
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
  setup(t) {
    const e = t, o = e.specialErrSrc || d.errImg;
    return (s, a) => typeof u(o) == "string" ? (i(), p("img", {
      key: 0,
      src: u(o),
      class: "defalut-img"
    }, null, 8, U)) : u(o) ? (i(), v(u(o), { key: 2 })) : (i(), v(q, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const F = /* @__PURE__ */ x(W, [["__scopeId", "data-v-833401eb"]]);
const G = (t) => (E("data-v-eacdd0f4"), t = t(), $(), t), J = { class: "pre-root" }, K = /* @__PURE__ */ G(() => /* @__PURE__ */ m("span", { class: "visually-hidden" }, "Loading...", -1)), Q = [
  K
], X = /* @__PURE__ */ S({
  __name: "loadDeafultPreImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(t) {
    const e = t, o = (a) => {
      const l = a * 0.7, g = a * 0.12;
      return {
        width: l + "px",
        height: l + "px",
        "font-size": g + "px"
      };
    }, s = _(o(e.boxSize));
    return w(
      () => e.boxSize,
      (a, l) => {
        s.value = o(e.boxSize);
      }
    ), (a, l) => (i(), p("div", J, [
      m("div", {
        class: b(["spinner-grow", "loadColor"]),
        style: k(s.value),
        role: "status"
      }, null, 4),
      m("div", {
        class: b(["spinner-border", "loadColor"]),
        style: k(s.value),
        role: "status"
      }, Q, 4)
    ]));
  }
});
const Y = /* @__PURE__ */ x(X, [["__scopeId", "data-v-eacdd0f4"]]), Z = ["src"], R = /* @__PURE__ */ S({
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
  setup(t) {
    const e = t, o = e.specialPreSrc || d.preImg;
    return (s, a) => typeof u(o) == "string" ? (i(), p("img", {
      key: 0,
      src: u(o),
      class: "defalut-img"
    }, null, 8, Z)) : u(o) ? (i(), v(u(o), { key: 2 })) : (i(), v(Y, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const ee = /* @__PURE__ */ x(R, [["__scopeId", "data-v-cc626453"]]), te = ["title"], oe = { class: "defalut-img-box" }, se = ["src"], ae = /* @__PURE__ */ S({
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
  setup(t) {
    const e = t, o = _("img-equal"), s = _(null), a = _(0), l = _(2), g = _("");
    let h = 0, y = 0, f = d.retryLoad && d.retryLoad > 0 ? d.retryLoad : 1, z = !1;
    const C = (c, r) => {
      c > r ? o.value = "img-max-width" : c < r || h > y ? o.value = "img-max-height" : h < y && (o.value = "img-max-width");
    }, I = () => new Promise((c, r) => {
      try {
        const n = new Image();
        n.src = e.src, n.setAttribute("crossOrigin", "Anonymous"), n.onload = (H) => {
          C(n.width, n.height), l.value = 0, f = 0, g.value = e.src, c(e.src);
        }, n.onerror = (H) => {
          if (f -= 1, f) {
            let P = setTimeout(async () => {
              await I(), clearTimeout(P), P = null;
            }, 1e3);
          } else
            l.value = 1, r(`${e.src} Invalid picture URL`);
        };
      } catch (n) {
        l.value = 1, f = 0, r(n);
      }
    }), L = () => {
      const c = new IntersectionObserver(
        (r) => {
          l.value === 2 && r[0].isIntersecting && (I(), c.unobserve(s.value), z = !1);
        },
        {
          threshold: 0
        }
      );
      c.observe(s.value), z = !0;
    };
    return N(() => {
      var n;
      const c = document.body.scrollHeight, r = document.documentElement.clientHeight;
      c <= r && ((n = s == null ? void 0 : s.value) == null ? void 0 : n.offsetTop) <= r + 300 ? I() : L(), y = parseInt(
        getComputedStyle(s == null ? void 0 : s.value).getPropertyValue("height")
      ), h = parseInt(
        getComputedStyle(s == null ? void 0 : s.value).getPropertyValue("width")
      ), h > y ? a.value = y : a.value = h;
    }), w(
      () => e.src,
      (c) => {
        const r = new Image();
        r.src = c, console.log(r.complete), r.complete ? (C(r.width, r.height), g.value = c, l.value = 0) : (l.value = 2, f = d.retryLoad && d.retryLoad > 0 ? d.retryLoad : 1, console.log(z), z || L());
      }
    ), (c, r) => (i(), p("div", {
      class: b([e.class || "defalut-img-root"]),
      ref_key: "imgBoxRef",
      ref: s,
      title: e.title
    }, [
      m("div", oe, [
        l.value === 2 ? (i(), v(ee, {
          key: 0,
          "box-size": a.value,
          specialPreSrc: e.preSrc
        }, null, 8, ["box-size", "specialPreSrc"])) : l.value === 1 ? (i(), v(F, {
          key: 1,
          "box-size": a.value,
          specialErrSrc: e.errSrc
        }, null, 8, ["box-size", "specialErrSrc"])) : (i(), p("img", {
          key: 2,
          class: b([e.class ? o.value : "lazyload-img"]),
          src: g.value
        }, null, 10, se))
      ])
    ], 10, te));
  }
});
const re = /* @__PURE__ */ x(ae, [["__scopeId", "data-v-ab51cd47"]]), ce = {
  install: (t, e) => {
    V(e), t.component("lazyload-img", re);
  }
};
export {
  re as LazyloadImg,
  ce as default
};
