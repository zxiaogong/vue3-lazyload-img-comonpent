import './style.css'
import { defineComponent as z, ref as p, watch as L, openBlock as n, createElementBlock as m, pushScopeId as D, popScopeId as H, createElementVNode as g, unref as _, createBlock as h, normalizeClass as I, normalizeStyle as O, onMounted as M } from "vue";
let d = {
  retryLoad: 5
};
const A = (t) => {
  d = {
    ...d,
    ...t
  };
}, N = (t) => (D("data-v-3b103b22"), t = t(), H(), t), B = { class: "err-root" }, T = ["width", "height"], U = /* @__PURE__ */ N(() => /* @__PURE__ */ g("path", { d: "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" }, null, -1)), q = /* @__PURE__ */ N(() => /* @__PURE__ */ g("path", { d: "M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" }, null, -1)), W = [
  U,
  q
], F = /* @__PURE__ */ z({
  __name: "loadDeafultErrImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(t) {
    const e = t, o = (l) => l * 0.45, s = p(o(e.boxSize));
    return L(
      () => e.boxSize,
      (l, c) => {
        s.value = o(l);
      }
    ), (l, c) => (n(), m("div", B, [
      (n(), m("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: s.value,
        height: s.value,
        fill: "currentColor",
        class: "bi bi-file-earmark-image-fill errColor",
        viewBox: "0 0 16 16"
      }, W, 8, T))
    ]));
  }
});
const x = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, l] of e)
    o[s] = l;
  return o;
}, G = /* @__PURE__ */ x(F, [["__scopeId", "data-v-3b103b22"]]), J = ["src"], K = /* @__PURE__ */ z({
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
    return (s, l) => typeof _(o) == "string" ? (n(), m("img", {
      key: 0,
      src: _(o),
      class: "defalut-img"
    }, null, 8, J)) : _(o) ? (n(), h(_(o), { key: 2 })) : (n(), h(G, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const Q = /* @__PURE__ */ x(K, [["__scopeId", "data-v-17e80d3a"]]);
const X = (t) => (D("data-v-547a5702"), t = t(), H(), t), Y = { class: "pre-root" }, Z = /* @__PURE__ */ X(() => /* @__PURE__ */ g("span", { class: "visually-hidden" }, "Loading...", -1)), R = [
  Z
], ee = /* @__PURE__ */ z({
  __name: "loadDeafultPreImg",
  props: {
    boxSize: {
      type: Number,
      default: 30
    }
  },
  setup(t) {
    const e = t, o = (l) => {
      const c = l * 0.7, y = l * 0.12;
      return {
        width: c + "px",
        height: c + "px",
        "font-size": y + "px"
      };
    }, s = p(o(e.boxSize));
    return L(
      () => e.boxSize,
      (l, c) => {
        s.value = o(e.boxSize);
      }
    ), (l, c) => (n(), m("div", Y, [
      g("div", {
        class: I(["spinner-grow", "loadColor"]),
        style: O(s.value),
        role: "status"
      }, null, 4),
      g("div", {
        class: I(["spinner-border", "loadColor"]),
        style: O(s.value),
        role: "status"
      }, R, 4)
    ]));
  }
});
const te = /* @__PURE__ */ x(ee, [["__scopeId", "data-v-547a5702"]]), oe = ["src"], se = /* @__PURE__ */ z({
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
    return (s, l) => typeof _(o) == "string" ? (n(), m("img", {
      key: 0,
      src: _(o),
      class: "defalut-img"
    }, null, 8, oe)) : _(o) ? (n(), h(_(o), { key: 2 })) : (n(), h(te, {
      key: 1,
      "box-size": e.boxSize
    }, null, 8, ["box-size"]));
  }
});
const ae = /* @__PURE__ */ x(se, [["__scopeId", "data-v-d9cadf8a"]]), re = ["title"], le = { class: "defalut-img-box" }, ce = ["src"], ne = /* @__PURE__ */ z({
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
    const e = t, o = p("img-equal"), s = p(null), l = p(0), c = p(2), y = p("");
    let f = 0, b = 0, S = d.retryLoad && d.retryLoad > 0 ? d.retryLoad : 1, w = !1;
    const P = (a, r) => {
      a > r ? o.value = "img-max-width" : a < r || f > b ? o.value = "img-max-height" : f < b && (o.value = "img-max-width");
    }, E = (a) => new Promise((r, i) => {
      P(a.width, a.height), S = 0;
      const v = document.createElement("canvas");
      v.width = a.width, v.height = a.height;
      const u = v.getContext("2d");
      u == null || u.drawImage(a, 0, 0, a.width, a.height);
      const V = a.src.substring(a.src.lastIndexOf(".") + 1).toLowerCase(), j = v.toDataURL("image/" + V, 1);
      r(j);
    }), C = () => new Promise((a, r) => {
      try {
        const i = $(e.src);
        i.onload = (v) => {
          E(i).then((u) => {
            c.value = 0, y.value = u, a(u);
          });
        }, i.onerror = (v) => {
          if (S -= 1, S) {
            let u = setTimeout(async () => {
              await C(), clearTimeout(u), u = null;
            }, 1e3);
          } else
            c.value = 1, r(`${e.src} Invalid picture URL`);
        };
      } catch (i) {
        c.value = 1, S = 0, r(i);
      }
    }), k = () => {
      const a = new IntersectionObserver(
        (r) => {
          c.value === 2 && r[0].isIntersecting && (C(), a.unobserve(s.value), w = !1);
        },
        {
          threshold: 0
        }
      );
      a.observe(s.value), w = !0;
    }, $ = (a) => {
      const r = new Image();
      return r.src = a, r.setAttribute("crossOrigin", "Anonymous"), r;
    };
    return M(() => {
      var i;
      const a = document.body.scrollHeight, r = document.documentElement.clientHeight;
      a <= r && ((i = s == null ? void 0 : s.value) == null ? void 0 : i.offsetTop) <= r + 300 ? C() : k(), b = parseInt(
        getComputedStyle(s == null ? void 0 : s.value).getPropertyValue("height")
      ), f = parseInt(
        getComputedStyle(s == null ? void 0 : s.value).getPropertyValue("width")
      ), f > b ? l.value = b : l.value = f;
    }), L(
      () => e.src,
      (a) => {
        const r = $(a);
        r.complete ? (P(r.width, r.height), E(r).then((i) => {
          y.value = i, c.value = 0;
        })) : (c.value = 2, S = d.retryLoad && d.retryLoad > 0 ? d.retryLoad : 1, w || k());
      }
    ), (a, r) => (n(), m("div", {
      class: I([e.class || "defalut-img-root"]),
      ref_key: "imgBoxRef",
      ref: s,
      title: e.title
    }, [
      g("div", le, [
        c.value === 2 ? (n(), h(ae, {
          key: 0,
          "box-size": l.value,
          specialPreSrc: e.preSrc
        }, null, 8, ["box-size", "specialPreSrc"])) : c.value === 1 ? (n(), h(Q, {
          key: 1,
          "box-size": l.value,
          specialErrSrc: e.errSrc
        }, null, 8, ["box-size", "specialErrSrc"])) : (n(), m("img", {
          key: 2,
          class: I([e.class ? o.value : "lazyload-img"]),
          src: y.value
        }, null, 10, ce))
      ])
    ], 10, re));
  }
});
const ie = /* @__PURE__ */ x(ne, [["__scopeId", "data-v-2b1f40a6"]]), ue = {
  install: (t, e) => {
    A(e), t.component("lazyload-img", ie);
  }
};
export {
  ie as LazyloadImg,
  ue as default
};
