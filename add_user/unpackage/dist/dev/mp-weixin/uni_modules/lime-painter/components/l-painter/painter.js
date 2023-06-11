"use strict";
const common_vendor = require("../../../../common/vendor.js");
var t = function() {
  return (t = Object.assign || function(t2) {
    for (var e2, i2 = 1, n2 = arguments.length; i2 < n2; i2++)
      for (var r2 in e2 = arguments[i2])
        Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
    return t2;
  }).apply(this, arguments);
};
function e(t2, e2, i2, n2) {
  return new (i2 || (i2 = Promise))(function(r2, o2) {
    function s2(t3) {
      try {
        h2(n2.next(t3));
      } catch (t4) {
        o2(t4);
      }
    }
    function a2(t3) {
      try {
        h2(n2.throw(t3));
      } catch (t4) {
        o2(t4);
      }
    }
    function h2(t3) {
      var e3;
      t3.done ? r2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function(t4) {
        t4(e3);
      })).then(s2, a2);
    }
    h2((n2 = n2.apply(t2, e2 || [])).next());
  });
}
function i(t2, e2) {
  var i2, n2, r2, o2, s2 = { label: 0, sent: function() {
    if (1 & r2[0])
      throw r2[1];
    return r2[1];
  }, trys: [], ops: [] };
  return o2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
    return this;
  }), o2;
  function a2(o3) {
    return function(a3) {
      return function(o4) {
        if (i2)
          throw new TypeError("Generator is already executing.");
        for (; s2; )
          try {
            if (i2 = 1, n2 && (r2 = 2 & o4[0] ? n2.return : o4[0] ? n2.throw || ((r2 = n2.return) && r2.call(n2), 0) : n2.next) && !(r2 = r2.call(n2, o4[1])).done)
              return r2;
            switch (n2 = 0, r2 && (o4 = [2 & o4[0], r2.value]), o4[0]) {
              case 0:
              case 1:
                r2 = o4;
                break;
              case 4:
                return s2.label++, { value: o4[1], done: false };
              case 5:
                s2.label++, n2 = o4[1], o4 = [0];
                continue;
              case 7:
                o4 = s2.ops.pop(), s2.trys.pop();
                continue;
              default:
                if (!(r2 = s2.trys, (r2 = r2.length > 0 && r2[r2.length - 1]) || 6 !== o4[0] && 2 !== o4[0])) {
                  s2 = 0;
                  continue;
                }
                if (3 === o4[0] && (!r2 || o4[1] > r2[0] && o4[1] < r2[3])) {
                  s2.label = o4[1];
                  break;
                }
                if (6 === o4[0] && s2.label < r2[1]) {
                  s2.label = r2[1], r2 = o4;
                  break;
                }
                if (r2 && s2.label < r2[2]) {
                  s2.label = r2[2], s2.ops.push(o4);
                  break;
                }
                r2[2] && s2.ops.pop(), s2.trys.pop();
                continue;
            }
            o4 = e2.call(t2, s2);
          } catch (t3) {
            o4 = [6, t3], n2 = 0;
          } finally {
            i2 = r2 = 0;
          }
        if (5 & o4[0])
          throw o4[1];
        return { value: o4[0] ? o4[1] : void 0, done: true };
      }([o3, a3]);
    };
  }
}
var n = { MP_WEIXIN: "mp-weixin", MP_QQ: "mp-qq", MP_ALIPAY: "mp-alipay", MP_BAIDU: "mp-baidu", MP_TOUTIAO: "mp-toutiao", MP_DINGDING: "mp-dingding", H5: "h5", WEB: "web", PLUS: "plus" }, r = ["contentSize", "clientSize", "borderSize", "offsetSize"], o = "row", s = "column", a = "top", h = "middle", d = "bottom", c = "left", l = "center", f = "right", u = "view", p = "text", g = "image", v = "qrcode", x = "block", y = "inline-block", b = "none", m = "flex", w = "absolute", S = "fixed", z = { display: x, color: "#000000", lineHeight: "1.4em", fontSize: 14, fontWeight: 400, fontFamily: "sans-serif", lineCap: "butt", flexDirection: o, flexWrap: "nowrap", textAlign: "left", alignItems: "flex-start", justifyContent: "flex-start", position: "static", transformOrigin: "center center" }, M = { upx2px: function(t2) {
  return window.innerWidth / 750 * t2;
}, getSystemInfoSync: function() {
  return { screenWidth: window.innerWidth, screenHeight: window.innerHeight };
}, getImageInfo: function(t2) {
  var e2 = t2.src, i2 = t2.success, n2 = t2.fail, r2 = new Image();
  r2.onload = function() {
    i2({ width: r2.naturalWidth, height: r2.naturalHeight, path: r2.src, src: e2 });
  }, r2.onerror = n2, r2.src = e2;
} }, I = "object" == typeof window ? "undefined" == typeof common_vendor.index || "undefined" != typeof common_vendor.index && !common_vendor.index.addInterceptor ? n.WEB : n.H5 : "object" == typeof swan ? n.MP_BAIDU : "object" == typeof tt ? n.MP_TOUTIAO : "object" == typeof plus ? n.PLUS : "object" == typeof common_vendor.wx$1 ? n.MP_WEIXIN : void 0, W = I == n.MP_WEIXIN ? common_vendor.wx$1 : "undefined" != typeof common_vendor.index ? common_vendor.index.getImageInfo ? { upx2px: function(t2) {
  return common_vendor.index.upx2px(t2);
}, getSystemInfoSync: function() {
  return common_vendor.index.getSystemInfoSync();
}, getImageInfo: function(t2) {
  return common_vendor.index.getImageInfo(t2);
}, downloadFile: function(t2) {
  return common_vendor.index.downloadFile(t2);
} } : Object.assign(common_vendor.index, M) : "undefined" != typeof window ? M : common_vendor.index;
if (!W.upx2px) {
  var k = ((W.getSystemInfoSync && W.getSystemInfoSync()).screenWidth || 375) / 750;
  W.upx2px = function(t2) {
    return k * t2;
  };
}
function B(t2) {
  return /^-?\d+(\.\d+)?$/.test(t2);
}
function P(t2, e2, i2) {
  if (B(t2))
    return 1 * t2;
  if ("string" == typeof t2) {
    var n2 = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|vw|vh|px|%)$/g.exec(t2);
    if (!t2 || !n2)
      return 0;
    var r2 = n2[3];
    t2 = parseFloat(t2);
    var o2 = 0;
    if ("rpx" === r2)
      o2 = W.upx2px(t2);
    else if ("px" === r2)
      o2 = 1 * t2;
    else if ("%" === r2 && e2)
      o2 = t2 * P(e2) / 100;
    else if ("em" === r2 && e2)
      o2 = t2 * P(e2 || 14);
    else if (["vw", "vh"].includes(r2)) {
      var s2 = W.getSystemInfoSync(), a2 = s2.screenWidth, h2 = s2.screenHeight;
      o2 = t2 * ("vw" == r2 ? a2 : h2) / 100;
    }
    return 1 * o2.toFixed(2);
  }
  return 0;
}
function R(t2) {
  return /%$/.test(t2);
}
var L = function(t2) {
  return !(!t2 || !t2.startsWith("linear") && !t2.startsWith("radial"));
}, T = function(t2, e2, i2, n2, r2, o2) {
  t2.startsWith("linear") ? function(t3, e3, i3, n3, r3, o3) {
    for (var s2 = function(t4, e4, i4, n4, r4) {
      void 0 === n4 && (n4 = 0);
      void 0 === r4 && (r4 = 0);
      var o4 = t4.match(/([-]?\d{1,3})deg/), s3 = o4 && o4[1] ? parseFloat(o4[1]) : 0;
      s3 >= 360 && (s3 -= 360);
      s3 < 0 && (s3 += 360);
      if (0 === (s3 = Math.round(s3)))
        return { x0: Math.round(e4 / 2) + n4, y0: i4 + r4, x1: Math.round(e4 / 2) + n4, y1: r4 };
      if (180 === s3)
        return { x0: Math.round(e4 / 2) + n4, y0: r4, x1: Math.round(e4 / 2) + n4, y1: i4 + r4 };
      if (90 === s3)
        return { x0: n4, y0: Math.round(i4 / 2) + r4, x1: e4 + n4, y1: Math.round(i4 / 2) + r4 };
      if (270 === s3)
        return { x0: e4 + n4, y0: Math.round(i4 / 2) + r4, x1: n4, y1: Math.round(i4 / 2) + r4 };
      var a3 = Math.round(180 * Math.asin(e4 / Math.sqrt(Math.pow(e4, 2) + Math.pow(i4, 2))) / Math.PI);
      if (s3 === a3)
        return { x0: n4, y0: i4 + r4, x1: e4 + n4, y1: r4 };
      if (s3 === 180 - a3)
        return { x0: n4, y0: r4, x1: e4 + n4, y1: i4 + r4 };
      if (s3 === 180 + a3)
        return { x0: e4 + n4, y0: r4, x1: n4, y1: i4 + r4 };
      if (s3 === 360 - a3)
        return { x0: e4 + n4, y0: i4 + r4, x1: n4, y1: r4 };
      var h3 = 0, d3 = 0, c3 = 0, l3 = 0;
      if (s3 < a3 || s3 > 180 - a3 && s3 < 180 || s3 > 180 && s3 < 180 + a3 || s3 > 360 - a3) {
        var f3 = s3 * Math.PI / 180, u3 = s3 < a3 || s3 > 360 - a3 ? i4 / 2 : -i4 / 2, p3 = Math.tan(f3) * u3, g2 = s3 < a3 || s3 > 180 - a3 && s3 < 180 ? e4 / 2 - p3 : -e4 / 2 - p3;
        h3 = -(c3 = p3 + (v2 = Math.pow(Math.sin(f3), 2) * g2)), d3 = -(l3 = u3 + v2 / Math.tan(f3));
      }
      if (s3 > a3 && s3 < 90 || s3 > 90 && s3 < 90 + a3 || s3 > 180 + a3 && s3 < 270 || s3 > 270 && s3 < 360 - a3) {
        var v2;
        f3 = (90 - s3) * Math.PI / 180, p3 = s3 > a3 && s3 < 90 || s3 > 90 && s3 < 90 + a3 ? e4 / 2 : -e4 / 2, u3 = Math.tan(f3) * p3, g2 = s3 > a3 && s3 < 90 || s3 > 270 && s3 < 360 - a3 ? i4 / 2 - u3 : -i4 / 2 - u3;
        h3 = -(c3 = p3 + (v2 = Math.pow(Math.sin(f3), 2) * g2) / Math.tan(f3)), d3 = -(l3 = u3 + v2);
      }
      return h3 = Math.round(h3 + e4 / 2) + n4, d3 = Math.round(i4 / 2 - d3) + r4, c3 = Math.round(c3 + e4 / 2) + n4, l3 = Math.round(i4 / 2 - l3) + r4, { x0: h3, y0: d3, x1: c3, y1: l3 };
    }(r3, t3, e3, i3, n3), a2 = s2.x0, h2 = s2.y0, d2 = s2.x1, c2 = s2.y1, l2 = o3.createLinearGradient(a2, h2, d2, c2), f2 = r3.match(/linear-gradient\((.+)\)/)[1], u2 = O(f2.substring(f2.indexOf(",") + 1)), p2 = 0; p2 < u2.colors.length; p2++)
      l2.addColorStop(u2.percents[p2], u2.colors[p2]);
    o3.setFillStyle(l2);
  }(e2, i2, n2, r2, t2, o2) : t2.startsWith("radial") && function(t3, e3, i3, n3, r3, o3) {
    for (var s2 = O(r3.match(/radial-gradient\((.+)\)/)[1]), a2 = Math.round(t3 / 2) + i3, h2 = Math.round(e3 / 2) + n3, d2 = o3.createRadialGradient(a2, h2, 0, a2, h2, Math.max(t3, e3) / 2), c2 = 0; c2 < s2.colors.length; c2++)
      d2.addColorStop(s2.percents[c2], s2.colors[c2]);
    o3.setFillStyle(d2);
  }(e2, i2, n2, r2, t2, o2);
};
function O(t2) {
  for (var e2 = [], i2 = [], n2 = 0, r2 = t2.substring(0, t2.length - 1).split("%,"); n2 < r2.length; n2++) {
    var o2 = r2[n2];
    e2.push(o2.substring(0, o2.lastIndexOf(" ")).trim()), i2.push(o2.substring(o2.lastIndexOf(" "), o2.length) / 100);
  }
  return { colors: e2, percents: i2 };
}
function F(t2, e2, i2) {
  return e2 in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
}
function A() {
  return (A = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var i2 = arguments[e2];
      for (var n2 in i2)
        Object.prototype.hasOwnProperty.call(i2, n2) && (t2[n2] = i2[n2]);
    }
    return t2;
  }).apply(this, arguments);
}
function C(t2, e2) {
  return (C = Object.setPrototypeOf || function(t3, e3) {
    return t3.__proto__ = e3, t3;
  })(t2, e2);
}
function j(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var i2 = 0, n2 = new Array(e2); i2 < e2; i2++)
    n2[i2] = t2[i2];
  return n2;
}
function E(t2, e2) {
  var i2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
  if (i2)
    return (i2 = i2.call(t2)).next.bind(i2);
  if (Array.isArray(t2) || (i2 = function(t3, e3) {
    if (t3) {
      if ("string" == typeof t3)
        return j(t3, e3);
      var i3 = Object.prototype.toString.call(t3).slice(8, -1);
      return "Object" === i3 && t3.constructor && (i3 = t3.constructor.name), "Map" === i3 || "Set" === i3 ? Array.from(t3) : "Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3) ? j(t3, e3) : void 0;
    }
  }(t2)) || e2 && t2 && "number" == typeof t2.length) {
    i2 && (t2 = i2);
    var n2 = 0;
    return function() {
      return n2 >= t2.length ? { done: true } : { done: false, value: t2[n2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function H(t2) {
  return "number" == typeof t2;
}
function Y(t2) {
  return "auto" === t2 || null === t2;
}
function $(t2) {
  return /%$/.test(t2);
}
var D = g, U = p, X = u, N = v, _ = y, q = w, V = S;
function G(t2) {
  t2 = t2.trim();
  for (var e2 = new Array(), i2 = "+", n2 = "", r2 = t2.length, o2 = 0; o2 < r2; ++o2) {
    if ("." === t2[o2] || !isNaN(Number(t2[o2])) && " " !== t2[o2])
      n2 += t2[o2];
    else if ("(" === t2[o2]) {
      for (var s2 = 1, a2 = o2; s2 > 0; )
        "(" === t2[a2 += 1] && (s2 += 1), ")" === t2[a2] && (s2 -= 1);
      n2 = "" + G(t2.slice(o2 + 1, a2)), o2 = a2;
    }
    if (isNaN(Number(t2[o2])) && "." !== t2[o2] || o2 === r2 - 1) {
      var h2 = parseFloat(n2);
      switch (i2) {
        case "+":
          e2.push(h2);
          break;
        case "-":
          e2.push(-h2);
          break;
        case "*":
          e2.push(e2.pop() * h2);
          break;
        case "/":
          e2.push(e2.pop() / h2);
      }
      i2 = t2[o2], n2 = "";
    }
  }
  for (var d2 = 0; e2.length; )
    d2 += e2.pop();
  return d2;
}
var J, Q = 0, Z = function() {
  function t2() {
    F(this, "elements", []), F(this, "afterElements", []), F(this, "beforeElements", []), F(this, "ids", []), F(this, "width", 0), F(this, "height", 0), F(this, "top", 0), F(this, "left", 0), F(this, "pre", null), F(this, "offsetX", 0), F(this, "offsetY", 0), Q++, this.id = Q;
  }
  var e2 = t2.prototype;
  return e2.fixedBind = function(t3, e3) {
    void 0 === e3 && (e3 = 0), this.container = e3 ? t3.parent : t3.root, this.container.fixedLine = this, this.fixedAdd(t3);
  }, e2.fixedAdd = function(t3) {
    if (!this.ids.includes(t3.id)) {
      this.ids.push(t3.id), this.elements.push(t3);
      var e3 = t3.computedStyle.zIndex;
      (void 0 === e3 ? 0 : e3) >= 0 ? this.afterElements.push(t3) : this.beforeElements.push(t3), this.refreshLayout();
    }
  }, e2.bind = function(t3) {
    this.container = t3.parent, this.container.line = null, this.container.lines ? (this.container.lines.push(this), this.pre = this.getPreLine(), this.top = this.pre.top + this.pre.height, this.left = this.container.contentSize.left) : (this.top = this.container.contentSize.top, this.left = this.container.contentSize.left, this.container.lines = [this]), this.isInline = t3.isInline(), this.container.line = this, this.outerWidth = t3.parent && t3.parent.contentSize.width ? t3.parent.contentSize.width : 1 / 0, this.add(t3);
  }, e2.getPreLine = function() {
    return this.container.lines[this.container.lines.length - 2];
  }, e2.canIEnter = function(t3) {
    return this.outerWidth || t3.parent && t3.parent.contentSize.width, !((100 * t3.offsetSize.width + 100 * this.width) / 100 > this.outerWidth) || (this.closeLine(), false);
  }, e2.closeLine = function() {
    delete this.container.line;
  }, e2.add = function(t3) {
    this.ids.includes(t3.id) || (this.ids.push(t3.id), this.elements.push(t3), this.refreshWidthHeight(t3));
  }, e2.refreshWidthHeight = function(t3) {
    t3.offsetSize.height > this.height && (this.height = t3.offsetSize.height), this.width += t3.offsetSize.width || 0, (this.container.lineMaxWidth || 0) < this.width && (this.container.lineMaxWidth = this.width);
  }, e2.refreshXAlign = function() {
    if (this.isInline) {
      var t3 = this.container.contentSize.width - this.width, e3 = this.container.style.textAlign;
      "center" === e3 ? t3 /= 2 : "left" === e3 && (t3 = 0), this.offsetX = t3;
    }
  }, e2.getOffsetY = function(t3) {
    if (!t3 || !t3.style)
      return 0;
    var e3 = (t3.style || {}).verticalAlign;
    return "bottom" === e3 ? this.height - t3.contentSize.height : "middle" === e3 ? (this.height - t3.contentSize.height) / 2 : 0;
  }, e2.setIndent = function(t3) {
    var e3 = t3.style.textIndent;
    if (e3 && /^calc/.test(e3)) {
      var i2 = /^calc\((.+)\)$/.exec(e3);
      if (i2 && i2[1]) {
        var n2 = G(i2[1].replace(/([^\s\(\+\-\*\/]+)\.(left|right|bottom|top|width|height)/g, function(e4) {
          var i3 = e4.split("."), n3 = i3[0], r2 = i3[1], o2 = t3.parent.querySelector(n3);
          if (o2 && o2.offsetSize) {
            var s2 = { right: o2.offsetSize.left + o2.offsetSize.width, bottom: o2.offsetSize.top + o2.offsetSize.height };
            return o2.offsetSize[r2] || s2[r2] || 0;
          }
        }).replace(new RegExp(/-?[0-9]+(\.[0-9]+)?(rpx|px|%)/, "g"), P));
        t3.style.textIndent = n2;
      }
    }
  }, e2.layout = function(t3, e3) {
    var i2 = this;
    this.refreshXAlign(), this.pre ? (this.top = this.pre.top + this.pre.height + this.offsetY, this.left = e3 + this.offsetX) : (this.top = Math.max(this.top, this.container.contentSize.top, t3) + this.offsetY, this.left = Math.max(this.left, this.container.contentSize.left, e3) + this.offsetX), this.elements.forEach(function(t4, e4) {
      i2.setIndent(t4);
      var n2 = i2.elements[e4 - 1], r2 = i2.getOffsetY(t4);
      t4.style.top = i2.top + r2, t4.style.left = n2 ? n2.offsetSize.left + n2.offsetSize.width : i2.left, t4.getBoxPosition();
    });
  }, e2.refreshLayout = function() {
    this.afterElements = this.afterElements.sort(function(t3, e3) {
      return t3.computedStyle.zIndex - e3.computedStyle.zIndex;
    }), this.beforeElements = this.beforeElements.sort(function(t3, e3) {
      return t3.computedStyle.zIndex - e3.computedStyle.zIndex;
    });
  }, t2;
}(), K = ((J = {})[o] = { width: "width", contentWidth: "width", lineMaxWidth: "lineMaxWidth", left: "left", top: "top", height: "height", lineMaxHeight: "lineMaxHeight", marginLeft: "marginLeft" }, J[s] = { width: "height", contentWidth: "height", lineMaxWidth: "lineMaxHeight", left: "top", top: "left", height: "width", lineMaxHeight: "lineMaxWidth", marginLeft: "marginTop" }, J), et = function(t2) {
  var e2, i2;
  function n2() {
    var e3;
    return F(function(t3) {
      if (void 0 === t3)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t3;
    }(e3 = t2.call(this) || this), "outerWidth", 0), e3.exactValue = 0, e3.flexTotal = 0, e3.width = 0, e3.key = null, e3.flexDirection = "row", e3;
  }
  i2 = t2, (e2 = n2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, C(e2, i2);
  var r2 = n2.prototype;
  return r2.bind = function(t3) {
    this.container = t3.parent, this.container.line = this, this.container.lines ? (this.container.lines.push(this), this.pre = this.getPreLine(), this.top = this.pre.top + this.pre.height, this.left = this.container.contentSize.left) : (this.top = this.container.contentSize.top, this.left = this.container.contentSize.left, this.container.lines = [this]), t3.parent && (this.flexDirection = t3.parent.style.flexDirection, this.key = K[this.flexDirection]), this.initHeight(t3), this.outerWidth = t3.parent && t3.parent.contentSize[this.key.contentWidth] ? t3.parent.contentSize[this.key.contentWidth] : 1 / 0, this.add(t3);
  }, r2.add = function(t3) {
    this.ids.push(t3.id);
    var e3 = t3.style.flex;
    H(e3) ? this.flexTotal += e3 : H(this.getWidth(t3.style)) && (this.exactValue += this.getWidth(t3.offsetSize)), this.elements.push(t3), this.refreshWidthHeight(t3), t3.next || this.closeLine();
  }, r2.closeLine = function() {
    this.calcFlex();
  }, r2.initHeight = function(t3) {
    this[this.key.height] = 0;
  }, r2.getWidth = function(t3) {
    return t3[this.key.width] || 0;
  }, r2.getHeight = function(t3) {
    return t3[this.key.height] || 0;
  }, r2.setWidth = function(t3, e3) {
    t3[this.key.width] = e3;
  }, r2.setHeight = function(t3, e3) {
    t3[this.key.height] = e3;
  }, r2.calcFlex = function() {
    var t3 = this, e3 = this.container.contentSize[this.key.contentWidth], i3 = 0;
    this.elements.forEach(function(n3) {
      var r3 = n3.style, o2 = n3.contentSize, s2 = t3.getWidth(r3) || t3.getWidth(o2);
      H(r3.flex) && (s2 = r3.flex / t3.flexTotal * (e3 - t3.exactValue)), t3.setWidth(n3.computedStyle, s2), n3.isFlexCalc = true, delete n3.line, delete n3.lines, delete n3.lineMaxWidth, n3.getBoxWidthHeight(), i3 = Math.max(i3, t3.getHeight(n3.offsetSize));
    }), this.setHeight(this, i3);
  }, r2.refreshWidthHeight = function(t3) {
    var e3 = this.container.style.alignItems;
    e3 && !t3.style.alignSelf && (t3.style.alignSelf = e3);
    var i3 = this.getHeight(t3.offsetSize);
    i3 > this[this.key.height] && (this.container[this.key.lineMaxHeight] = this[this.key.height] = i3), this[this.key.width] += this.getWidth(t3.offsetSize);
    var n3 = Math.min(this.getWidth(this), !this.getWidth(this.container.contentSize) && 1 / 0);
    (this.container[this.key.lineMaxWidth] || 0) < n3 && (this.container[this.key.lineMaxWidth] = n3);
  }, r2.refreshXAlign = function() {
    var t3 = this, e3 = this.elements.reduce(function(e4, i4) {
      return e4 + t3.getWidth(i4.offsetSize);
    }, 0), i3 = (this.outerWidth == 1 / 0 ? 0 : this.outerWidth - e3) || 0, n3 = this.container.style.justifyContent;
    "center" === n3 ? i3 /= 2 : "flex-start" === n3 ? i3 = 0 : ["space-between", "space-around"].includes(n3) && (!function(e4, i4) {
      void 0 === i4 && (i4 = 0), i4 /= t3.elements.length + (e4 ? -1 : 1), t3.elements.forEach(function(n4, r3) {
        var o2;
        e4 && !r3 || (n4.style.margin ? n4.style.margin[t3.key.marginLeft] += i4 : n4.style.margin = ((o2 = {})[t3.key.marginLeft] = i4, o2), n4.getBoxPosition());
      }), i4 = 0;
    }("space-between" == n3, i3), i3 = 0), this.offsetX = i3 || 0, this.refreshYAlign();
  }, r2.refreshYAlign = function() {
    var t3 = this;
    if (1 == this.container.lines.length)
      return 0;
    var e3 = this.container.lines.reduce(function(e4, i4) {
      return e4 + t3.getHeight(i4);
    }, 0), i3 = this.container.style.alignItems, n3 = this.getHeight(this.container.contentSize);
    if ("center" === i3) {
      var r3 = (n3 - e3) / (this.container.lines.length + 1);
      this.container.lines.forEach(function(t4) {
        t4.offsetY = r3;
      });
    }
    if ("flex-end" === i3) {
      var o2 = n3 - e3;
      this.container.lines[0].offsetY = o2;
    }
  }, r2.getOffsetY = function(t3) {
    if (this.container.lines.length > 1)
      return 0;
    var e3 = t3.style.alignSelf, i3 = this.getHeight(this.container.contentSize), n3 = i3 - this.getHeight(t3.offsetSize);
    return "flex-end" === e3 ? n3 : "center" === e3 ? n3 / 2 : "stretch" === e3 ? (n3 && "view" == t3.name && (t3.style[this.key.width] = this.getWidth(t3.offsetSize), t3.style[this.key.height] = i3, delete t3.line, delete t3.lines, t3.getBoxWidthHeight()), 0) : 0;
  }, r2.layout = function(t3, e3) {
    var i3 = this;
    this.refreshXAlign(), this.pre ? (this.top = this.pre.top + this.pre.height + this.offsetY, this.left = e3 + this.offsetX) : (this.top = Math.max(this.top, this.container.contentSize.top, t3) + this.offsetY, this.left = Math.max(this.left, this.container.contentSize.left, e3) + this.offsetX), this.elements.forEach(function(t4, e4) {
      i3.setIndent(t4);
      var n3 = i3.elements[e4 - 1], r3 = i3.getOffsetY(t4);
      t4.style[i3.key.top] = i3[i3.key.top] + r3, t4.style[i3.key.left] = n3 ? n3.offsetSize[i3.key.left] + i3.getWidth(n3.offsetSize) : i3[i3.key.left], t4.getBoxPosition();
    });
  }, n2;
}(Z), it = g, nt = p, rt = u, ot = x, st = y, at = m, ht = w, dt = S, ct = 0, lt = { left: null, top: null, width: null, height: null }, ft = function() {
  function e2(e3, i3, n2, r2) {
    var o2 = this;
    F(this, "id", ct++), F(this, "style", { left: null, top: null, width: null, height: null }), F(this, "computedStyle", {}), F(this, "originStyle", {}), F(this, "children", {}), F(this, "layoutBox", A({}, lt)), F(this, "contentSize", A({}, lt)), F(this, "clientSize", A({}, lt)), F(this, "borderSize", A({}, lt)), F(this, "offsetSize", A({}, lt)), this.ctx = r2, this.root = n2, i3 && (this.parent = i3), this.name = e3.name || e3.type, this.attributes = this.getAttributes(e3);
    var s2 = function(e4, i4) {
      var n3 = ["color", "fontSize", "lineHeight", "verticalAlign", "fontWeight", "textAlign"], r3 = e4.css, o3 = void 0 === r3 ? {} : r3, s3 = e4.type, a3 = void 0 === s3 ? X : s3, h2 = (i4 || {}).computedStyle, d2 = t({}, z);
      if ([U, D, N].includes(a3) && !o3.display && (d2.display = _), h2)
        for (var c2 = 0; c2 < n3.length; c2++) {
          var l2 = n3[c2];
          (o3[l2] || h2[l2]) && (o3[l2] = o3[l2] || h2[l2]);
        }
      for (var f2 = function(t2) {
        var e5, i5, n4, r4, s4 = o3[t2];
        if (/-/.test(t2) && (t2 = t2.replace(/-([a-z])/g, function(t3, e6) {
          return e6.toUpperCase();
        }), d2.key = s4), /^(box|text)?shadow$/i.test(t2)) {
          var h3 = [];
          return s4.replace(/((-?\d+(rpx|px|vw|vh)?\s+?){3})(.+)/, function() {
            for (var t3 = [], e6 = 0; e6 < arguments.length; e6++)
              t3[e6] = arguments[e6];
            h3 = t3[1].match(/-?\d+(rpx|px|vh|vw)?/g).map(function(t4) {
              return P(t4);
            }).concat(t3[4]);
          }), /^text/.test(t2) ? d2.textShadow = h3 : d2.boxShadow = h3, "continue";
        }
        if (/^border/i.test(t2) && !/radius$/i.test(t2)) {
          var c3 = t2.match(/^border([BTRLa-z]+)?/)[0], l3 = t2.match(/[W|S|C][a-z]+/), f3 = s4.replace(/([\(,])\s+|\s+([\),])/g, "$1$2").split(" ").map(function(t3) {
            return /^\d/.test(t3) ? P(t3, "") : t3;
          });
          return d2[c3] || (d2[c3] = {}), 1 == f3.length && l3 ? d2[c3][c3 + l3[0]] = f3[0] : d2[c3] = ((e5 = {})[c3 + "Width"] = B(f3[0]) ? f3[0] : 0, e5[c3 + "Style"] = f3[1] || "solid", e5[c3 + "Color"] = f3[2] || "black", e5), "continue";
        }
        if (/^background(color)?$/i.test(t2))
          return d2.backgroundColor = s4, "continue";
        if (/^objectPosition$/i.test(t2))
          return d2[t2] = s4.split(" "), "continue";
        if (/padding|margin|radius/i.test(t2)) {
          var u3 = /radius$/i.test(t2), p3 = u3 ? "borderRadius" : t2.match(/[a-z]+/)[0], g2 = [0, 0, 0, 0].map(function(t3, e6) {
            return u3 ? ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"][e6] : [p3 + "Top", p3 + "Right", p3 + "Bottom", p3 + "Left"][e6];
          }), v2 = "margin";
          if ("padding" === t2 || t2 === v2 || /^(border)?radius$/i.test(t2)) {
            f3 = ("" + s4).split(" ").map(function(e6) {
              return /^-?\d+(rpx|px|vh|vw)?$/.test(e6) ? P(e6) : t2 != v2 && /auto/.test(e6) ? 0 : e6;
            }, []) || [0];
            var x2 = u3 ? "borderRadius" : t2, y2 = f3[0], b2 = f3[1], m2 = f3[2], w2 = f3[3];
            d2[x2] = ((i5 = {})[g2[0]] = Y(y2) ? 0 : y2, i5[g2[1]] = B(b2) || Y(b2) ? b2 : y2, i5[g2[2]] = Y(B(m2) ? m2 : y2) ? 0 : B(m2) ? m2 : y2, i5[g2[3]] = B(w2) ? w2 : b2 || y2, i5);
          } else
            "object" == typeof d2[p3] || (d2[p3] = ((n4 = {})[g2[0]] = d2[p3] || 0, n4[g2[1]] = d2[p3] || 0, n4[g2[2]] = d2[p3] || 0, n4[g2[3]] = d2[p3] || 0, n4)), d2[p3][t2] = p3 == v2 && Y(s4) || $(s4) ? s4 : P(s4);
          return "continue";
        }
        if (/^transform$/i.test(t2))
          return d2[t2] = {}, s4.replace(/([a-zA-Z]+)\(([0-9,-\.%rpxdeg\s]+)\)/g, function(e6, i6, n5) {
            var r5 = n5.split(",").map(function(t3) {
              return t3.replace(/(^\s*)|(\s*$)/g, "");
            }), s5 = function(t3, e7) {
              return t3.includes("deg") ? 1 * t3 : e7 && !$(e7) ? P(t3, e7) : t3;
            };
            i6.includes("matrix") ? d2[t2][i6] = r5.map(function(t3) {
              return 1 * t3;
            }) : i6.includes("rotate") ? d2[t2][i6] = 1 * n5.match(/^-?\d+(\.\d+)?/)[0] : /[X, Y]/.test(i6) ? d2[t2][i6] = /[X]/.test(i6) ? s5(r5[0], o3.width) : s5(r5[0], o3.height) : (d2[t2][i6 + "X"] = s5(r5[0], o3.width), d2[t2][i6 + "Y"] = s5(r5[1] || r5[0], o3.height));
          }), "continue";
        if (/^font$/i.test(t2) && console.warn("font 不支持简写"), /^textindent/i.test(t2) && (d2[t2] = /^calc/.test(s4) ? s4 : P(s4)), /^textstroke/i.test(t2)) {
          var S2 = t2.match(/color|width|type$/i), z2 = (c3 = "textStroke", s4.split(" ").map(function(t3) {
            return /^\d+(rpx|px|vh|vw)?$/.test(t3) ? P(t3) : t3;
          }));
          return S2 ? d2[c3] ? d2[c3][S2[0]] = z2[0] : d2[c3] = ((r4 = {})[S2[0]] = z2[0], r4) : d2[c3] = { width: z2[0], color: z2[1], type: z2[2] }, "continue";
        }
        /^left|top$/i.test(t2) && ![q, V].includes(o3.position) ? d2[t2] = 0 : d2[t2] = /^-?[\d\.]+(px|rpx|vw|vh)?$/.test(s4) ? P(s4) : /em$/.test(s4) && a3 == U ? P(s4, o3.fontSize) : s4;
      }, u2 = 0, p2 = Object.keys(o3); u2 < p2.length; u2++)
        f2(p2[u2]);
      return d2;
    }(e3, i3);
    this.isAbsolute = s2.position == ht, this.isFixed = s2.position == dt, this.originStyle = s2, Object.keys(s2).forEach(function(t2) {
      Object.defineProperty(o2.style, t2, { configurable: true, enumerable: true, get: function() {
        return s2[t2];
      }, set: function(e4) {
        s2[t2] = e4;
      } });
    });
    var a2 = { contentSize: A({}, this.contentSize), clientSize: A({}, this.clientSize), borderSize: A({}, this.borderSize), offsetSize: A({}, this.offsetSize) };
    Object.keys(a2).forEach(function(t2) {
      Object.keys(o2[t2]).forEach(function(e4) {
        Object.defineProperty(o2[t2], e4, { configurable: true, enumerable: true, get: function() {
          return a2[t2][e4];
        }, set: function(i4) {
          a2[t2][e4] = i4;
        } });
      });
    }), this.computedStyle = this.style;
  }
  var i2 = e2.prototype;
  return i2.add = function(t2) {
    t2.parent = this, this.children[t2.id] = t2;
  }, i2.getChildren = function() {
    var t2 = this;
    return Object.keys(this.children).map(function(e3) {
      return t2.children[e3];
    });
  }, i2.prev = function(t2) {
    void 0 === t2 && (t2 = this);
    var e3 = t2.parent.getChildren();
    return e3[e3.findIndex(function(e4) {
      return e4.id == t2.id;
    }) - 1];
  }, i2.querySelector = function(t2) {
    var e3 = this.getChildren();
    if ("string" != typeof t2)
      return null;
    var i3 = e3.find(function(e4) {
      var i4 = e4.id, n2 = e4.attributes;
      return i4 == t2 || n2 && n2.uid == t2;
    });
    return i3 || (this.parent.querySelector && this.parent.querySelector(t2) || null);
  }, i2.getLineRect = function(t2, e3) {
    var i3 = { width: 0, height: 0 }, n2 = e3 ? e3.lines : this.parent && this.parent.lines;
    return n2 && n2.find(function(e4) {
      return e4.ids.includes(t2);
    }) || i3;
  }, i2.setPosition = function(t2, e3) {
    var i3 = { left: "width", top: "height", right: "width", bottom: "height" };
    Object.keys(i3).forEach(function(n2) {
      var r2 = "right" == n2 ? "left" : "top";
      ["right", "bottom"].includes(n2) && void 0 !== t2.style[n2] && "number" != typeof t2.originStyle[r2] ? t2.style[r2] = e3[i3[n2]] - t2.offsetSize[i3[n2]] - P(t2.style[n2], e3[i3[n2]]) : t2.style[n2] = P(t2.style[n2], e3[i3[n2]]);
    });
  }, i2.getAttributes = function(t2) {
    var e3 = t2.attributes, i3 = void 0 === e3 ? {} : e3, n2 = t2.uid, r2 = t2.url, o2 = t2.src, s2 = t2.replace, a2 = t2.text;
    return n2 && (i3.uid = n2), (r2 || o2) && (i3.src = i3.src || r2 || o2), s2 && (i3.replace = s2), a2 && (i3.text = a2), i3;
  }, i2.getOffsetSize = function(t2, e3, i3) {
    void 0 === i3 && (i3 = r[3]);
    var n2 = e3 || {}, o2 = n2.margin, s2 = (o2 = void 0 === o2 ? {} : o2).marginLeft, a2 = void 0 === s2 ? 0 : s2, h2 = o2.marginTop, d2 = void 0 === h2 ? 0 : h2, c2 = o2.marginRight, l2 = void 0 === c2 ? 0 : c2, f2 = o2.marginBottom, u2 = void 0 === f2 ? 0 : f2, p2 = n2.padding, g2 = (p2 = void 0 === p2 ? {} : p2).paddingLeft, v2 = void 0 === g2 ? 0 : g2, x2 = p2.paddingTop, y2 = void 0 === x2 ? 0 : x2, b2 = p2.paddingRight, m2 = void 0 === b2 ? 0 : b2, w2 = p2.paddingBottom, S2 = void 0 === w2 ? 0 : w2, z2 = n2.border, M2 = (z2 = void 0 === z2 ? {} : z2).borderWidth, I2 = void 0 === M2 ? 0 : M2, W2 = n2.borderTop, k = (W2 = void 0 === W2 ? {} : W2).borderTopWidth, B2 = void 0 === k ? I2 : k, P2 = n2.borderBottom, R2 = (P2 = void 0 === P2 ? {} : P2).borderBottomWidth, L2 = void 0 === R2 ? I2 : R2, T2 = n2.borderRight, O2 = (T2 = void 0 === T2 ? {} : T2).borderRightWidth, F2 = void 0 === O2 ? I2 : O2, A2 = n2.borderLeft, C2 = (A2 = void 0 === A2 ? {} : A2).borderLeftWidth, j2 = void 0 === C2 ? I2 : C2, E2 = a2 < 0 && l2 < 0 ? Math.abs(a2 + l2) : 0, H2 = d2 < 0 && u2 < 0 ? Math.abs(d2 + u2) : 0, Y2 = a2 >= 0 && l2 < 0, $2 = d2 >= 0 && u2 < 0;
    return i3 == r[0] && (this[i3].left = t2.left + a2 + v2 + j2 + (Y2 ? 2 * -l2 : 0), this[i3].top = t2.top + d2 + y2 + B2 + ($2 ? 2 * -u2 : 0), this[i3].width = t2.width + (this[i3].widthAdd ? 0 : E2), this[i3].height = t2.height + (this[i3].heightAdd ? 0 : H2), this[i3].widthAdd = E2, this[i3].heightAdd = H2), i3 == r[1] && (this[i3].left = t2.left + a2 + j2 + (Y2 < 0 ? -l2 : 0), this[i3].top = t2.top + d2 + B2 + ($2 ? -u2 : 0), this[i3].width = t2.width + v2 + m2, this[i3].height = t2.height + y2 + S2), i3 == r[2] && (this[i3].left = t2.left + a2 + j2 / 2 + (Y2 < 0 ? -l2 : 0), this[i3].top = t2.top + d2 + B2 / 2 + ($2 ? -u2 : 0), this[i3].width = t2.width + v2 + m2 + j2 / 2 + F2 / 2, this[i3].height = t2.height + y2 + S2 + L2 / 2 + B2 / 2), i3 == r[3] && (this[i3].left = t2.left + (Y2 < 0 ? -l2 : 0), this[i3].top = t2.top + ($2 ? -u2 : 0), this[i3].width = t2.width + v2 + m2 + j2 + F2 + a2 + l2, this[i3].height = t2.height + y2 + S2 + L2 + B2 + u2 + d2), this[i3];
  }, i2.layoutBoxUpdate = function(t2, e3, i3, n2) {
    var o2 = this;
    if (void 0 === i3 && (i3 = -1), "border-box" == e3.boxSizing) {
      var s2 = e3 || {}, a2 = s2.border, h2 = (a2 = void 0 === a2 ? {} : a2).borderWidth, d2 = void 0 === h2 ? 0 : h2, c2 = s2.borderTop, l2 = (c2 = void 0 === c2 ? {} : c2).borderTopWidth, f2 = void 0 === l2 ? d2 : l2, u2 = s2.borderBottom, p2 = (u2 = void 0 === u2 ? {} : u2).borderBottomWidth, g2 = void 0 === p2 ? d2 : p2, v2 = s2.borderRight, x2 = (v2 = void 0 === v2 ? {} : v2).borderRightWidth, y2 = void 0 === x2 ? d2 : x2, b2 = s2.borderLeft, m2 = (b2 = void 0 === b2 ? {} : b2).borderLeftWidth, w2 = void 0 === m2 ? d2 : m2, S2 = s2.padding, z2 = (S2 = void 0 === S2 ? {} : S2).paddingTop, M2 = void 0 === z2 ? 0 : z2, I2 = S2.paddingRight, W2 = void 0 === I2 ? 0 : I2, k = S2.paddingBottom, B2 = void 0 === k ? 0 : k, P2 = S2.paddingLeft, R2 = void 0 === P2 ? 0 : P2;
      i3 || (t2.width -= R2 + W2 + y2 + w2), 1 !== i3 || n2 || (t2.height -= M2 + B2 + f2 + g2);
    }
    this.layoutBox && (r.forEach(function(i4) {
      return o2.layoutBox[i4] = o2.getOffsetSize(t2, e3, i4);
    }), this.layoutBox = Object.assign({}, this.layoutBox, this.layoutBox.borderSize));
  }, i2.getBoxPosition = function() {
    var t2 = this.computedStyle, e3 = this.fixedLine, i3 = this.lines, n2 = t2.left, r2 = void 0 === n2 ? 0 : n2, o2 = t2.top, s2 = void 0 === o2 ? 0 : o2, a2 = t2.padding || {}, h2 = a2.paddingBottom, d2 = void 0 === h2 ? 0 : h2, c2 = a2.paddingRight, l2 = void 0 === c2 ? 0 : c2, f2 = A({}, this.contentSize, { left: r2, top: s2 }), u2 = this.contentSize.top - this.offsetSize.top, p2 = this.contentSize.left - this.offsetSize.left;
    if (this.root.fixedLine && !this.root.isDone) {
      this.root.isDone = true;
      for (var g2, v2 = E(this.root.fixedLine.elements); !(g2 = v2()).done; ) {
        var x2 = g2.value;
        x2.setPosition(x2, this.root.offsetSize), x2.getBoxPosition();
      }
    }
    if (e3)
      for (var y2, b2 = E(e3.elements); !(y2 = b2()).done; ) {
        var m2 = y2.value;
        m2.setPosition(m2, f2), m2.style.left += r2 + p2 + l2, m2.style.top += s2 + u2 + d2, m2.getBoxPosition();
      }
    if (i3)
      for (var w2, S2 = E(i3); !(w2 = S2()).done; ) {
        w2.value.layout(f2.top + u2, f2.left + p2);
      }
    return this.layoutBoxUpdate(f2, t2), this.layoutBox;
  }, i2.getBoxState = function(t2, e3) {
    return this.isBlock(t2) || this.isBlock(e3);
  }, i2.isBlock = function(t2) {
    return void 0 === t2 && (t2 = this), t2 && t2.style.display == ot;
  }, i2.isFlex = function(t2) {
    return void 0 === t2 && (t2 = this), t2 && t2.style.display == at;
  }, i2.isInFlow = function() {
    return !(this.isAbsolute || this.isFixed);
  }, i2.inFlexBox = function(t2) {
    return void 0 === t2 && (t2 = this), !!t2.isInFlow() && (!!t2.parent && (!(!t2.parent || t2.parent.style.display !== at) || void 0));
  }, i2.isInline = function(t2) {
    return void 0 === t2 && (t2 = this), t2 && t2.style.display == st;
  }, i2.contrastSize = function(t2, e3, i3) {
    var n2 = t2;
    return i3 && (n2 = Math.min(n2, i3)), e3 && (n2 = Math.max(n2, e3)), n2;
  }, i2.measureText = function(t2, e3) {
    var i3 = this.ctx.measureText(t2), n2 = i3.width, r2 = i3.actualBoundingBoxAscent, o2 = i3.actualBoundingBoxDescent;
    return { ascent: r2, descent: o2, width: n2, fontHeight: r2 + o2 || 0.7 * e3 + 1 };
  }, i2.getBoxWidthHeight = function() {
    var t2 = this, e3 = this.name, i3 = this.computedStyle, n2 = this.attributes, r2 = this.parent, o2 = void 0 === r2 ? {} : r2, s2 = this.ctx, a2 = this.getChildren(), h2 = i3.left, d2 = void 0 === h2 ? 0 : h2, c2 = i3.top, l2 = void 0 === c2 ? 0 : c2, f2 = i3.bottom, u2 = i3.right, p2 = i3.width, g2 = void 0 === p2 ? 0 : p2, v2 = i3.minWidth, x2 = i3.maxWidth, y2 = i3.minHeight, b2 = i3.maxHeight, m2 = i3.height, w2 = void 0 === m2 ? 0 : m2, S2 = i3.fontSize, z2 = void 0 === S2 ? 14 : S2, M2 = i3.fontWeight, I2 = i3.fontFamily, W2 = i3.fontStyle, k = i3.position, B2 = i3.lineClamp, R2 = i3.lineHeight, L2 = i3.padding, T2 = void 0 === L2 ? {} : L2, O2 = i3.margin, F2 = void 0 === O2 ? {} : O2, A2 = i3.border, C2 = (A2 = void 0 === A2 ? {} : A2).borderWidth, j2 = void 0 === C2 ? 0 : C2, E2 = i3.borderRight, H2 = (E2 = void 0 === E2 ? {} : E2).borderRightWidth, Y2 = void 0 === H2 ? j2 : H2, D2 = i3.borderLeft, U2 = (D2 = void 0 === D2 ? {} : D2).borderLeftWidth, X2 = void 0 === U2 ? j2 : U2, N2 = o2.contentSize && o2.contentSize.width, _2 = o2.contentSize && o2.contentSize.height;
    if ($(g2) && N2 && (g2 = P(g2, N2)), $(g2) && !N2 && (g2 = null), $(w2) && _2 && (w2 = P(w2, _2)), $(w2) && !_2 && (w2 = null), $(v2) && N2 && (v2 = P(v2, N2)), $(x2) && N2 && (x2 = P(x2, N2)), $(y2) && _2 && (y2 = P(y2, _2)), $(b2) && _2 && (b2 = P(b2, _2)), i3.padding && N2)
      for (var q2 in i3.padding)
        Object.hasOwnProperty.call(i3.padding, q2) && (i3.padding[q2] = P(i3.padding[q2], N2));
    var V2 = T2.paddingRight, G2 = void 0 === V2 ? 0 : V2, J2 = T2.paddingLeft, Q2 = void 0 === J2 ? 0 : J2;
    if (i3.margin && [i3.margin.marginLeft, i3.margin.marginRight].includes("auto"))
      if (g2) {
        var K2 = N2 && N2 - g2 - G2 - Q2 - X2 - Y2 || 0;
        i3.margin.marginLeft == i3.margin.marginRight ? i3.margin.marginLeft = i3.margin.marginRight = K2 / 2 : "auto" == i3.margin.marginLeft ? i3.margin.marginLeft = K2 : i3.margin.marginRight = K2;
      } else
        i3.margin.marginLeft = i3.margin.marginRight = 0;
    var tt2 = F2.marginRight, ot2 = void 0 === tt2 ? 0 : tt2, st2 = F2.marginLeft, at2 = { width: g2, height: w2, left: 0, top: 0 }, dt2 = Q2 + G2 + X2 + Y2 + (void 0 === st2 ? 0 : st2) + ot2;
    if (this.offsetWidth = dt2, e3 == nt && !this.attributes.widths) {
      var ct2 = n2.text || "";
      s2.save(), s2.setFonts({ fontFamily: I2, fontSize: z2, fontWeight: M2, fontStyle: W2 });
      var lt2 = /* @__PURE__ */ new Map();
      ct2.split("\n").map(function(e4) {
        var i4 = e4.split("").map(function(e5) {
          var i5 = /^[\u4e00-\u9fa5]+$/.test(e5) ? "cn" : e5, n4 = lt2.get(i5);
          if (n4)
            return { width: n4, text: e5 };
          var r4 = t2.measureText(e5, z2).width;
          return lt2.set(i5, r4), { width: r4, text: e5 };
        }), n3 = t2.measureText(e4, z2), r3 = n3.fontHeight, o3 = n3.ascent, s3 = n3.descent;
        t2.attributes.fontHeight = r3, t2.attributes.ascent = o3, t2.attributes.descent = s3, t2.attributes.widths || (t2.attributes.widths = []), t2.attributes.widths.push({ widths: i4, total: i4.reduce(function(t3, e5) {
          return t3 + e5.width;
        }, 0) });
      }), s2.restore();
    }
    if (e3 == it && null == g2) {
      var ft2 = n2.width, ut2 = n2.height;
      at2.width = this.contrastSize(Math.round(ft2 * w2 / ut2) || 0, v2, x2), this.layoutBoxUpdate(at2, i3, 0);
    }
    if (e3 == nt && null == g2) {
      var pt2 = this.attributes.widths, gt2 = Math.max.apply(Math, pt2.map(function(t3) {
        return t3.total;
      }));
      if (o2 && N2 > 0 && (gt2 > N2 || this.isBlock(this)) && !this.isAbsolute && !this.isFixed)
        gt2 = N2;
      at2.width = this.contrastSize(gt2, v2, x2), this.layoutBoxUpdate(at2, i3, 0);
    }
    if (e3 == nt && (o2.style.flex || !this.attributes.lines)) {
      var vt2 = this.attributes.widths.length;
      this.attributes.widths.forEach(function(t3) {
        return t3.widths.reduce(function(t4, e4, i4) {
          return t4 + e4.width > at2.width ? (vt2++, e4.width) : t4 + e4.width;
        }, 0);
      }), vt2 = B2 && vt2 > B2 ? B2 : vt2, this.attributes.lines = vt2;
    }
    if (e3 == it && null == w2) {
      var xt2 = n2.width, yt2 = n2.height;
      at2.height = this.contrastSize(P(at2.width * yt2 / xt2) || 0, y2, b2), this.layoutBoxUpdate(at2, i3, 1);
    }
    e3 == nt && null == w2 && (R2 = P(R2, z2), at2.height = this.contrastSize(P(this.attributes.lines * R2), y2, b2), this.layoutBoxUpdate(at2, i3, 1, true)), !g2 && o2 && o2.children && N2 && (!this.isFlex(o2) || o2.isFlexCalc) && ([rt, nt].includes(e3) && this.isFlex() || e3 == rt && this.isBlock(this) && this.isInFlow()) && (at2.width = this.contrastSize(N2 - (o2.isFlexCalc ? 0 : dt2), v2, x2), this.layoutBoxUpdate(at2, i3)), g2 && !$(g2) && (at2.width = this.contrastSize(g2, v2, x2), this.layoutBoxUpdate(at2, i3, 0)), w2 && !$(w2) && (at2.height = this.contrastSize(at2.height, y2, b2), this.layoutBoxUpdate(at2, i3, 1));
    var bt2 = 0;
    if (a2.length) {
      var mt2 = null;
      a2.forEach(function(e4, n3) {
        e4.getBoxWidthHeight();
        var r3 = a2[n3 + 1];
        if (r3 && r3.isInFlow() && (e4.next = r3), e4.isInFlow() && !e4.inFlexBox()) {
          var o3 = t2.getBoxState(mt2, e4);
          t2.line && t2.line.canIEnter(e4) && !o3 ? t2.line.add(e4) : new Z().bind(e4), mt2 = e4;
        } else
          e4.inFlexBox() ? t2.line && (t2.line.canIEnter(e4) || "nowrap" == i3.flexWrap) ? t2.line.add(e4) : new et().bind(e4) : e4.isFixed ? t2.root.fixedLine ? t2.root.fixedLine.fixedAdd(e4) : new Z().fixedBind(e4) : t2.fixedLine ? t2.fixedLine.fixedAdd(e4) : new Z().fixedBind(e4, 1);
      }), this.lines && (bt2 = this.lines.reduce(function(t3, e4) {
        return t3 + e4.height;
      }, 0));
    }
    var wt2 = 0, St2 = 0;
    if (!g2 && (this.isAbsolute || this.isFixed) && N2) {
      var zt2 = k == ht ? N2 : this.root.width, Mt2 = zt2 - ($(d2) ? P(d2, zt2) : d2) - ($(u2) ? P(u2, zt2) : u2);
      wt2 = i3.left ? Mt2 : this.lineMaxWidth;
    }
    if (!w2 && (null != l2 ? l2 : this.isAbsolute || this.isFixed && _2)) {
      var It = k == ht ? _2 : this.root.height, Wt = It - ($(l2) ? P(l2, It) : l2) - ($(f2) ? P(f2, It) : f2);
      St2 = i3.top ? Wt : 0;
    }
    if (g2 && !$(g2) || at2.width || (at2.width = wt2 || this.contrastSize((this.isBlock(this) && !this.isInFlow() ? N2 || o2.lineMaxWidth : this.lineMaxWidth) || this.lineMaxWidth, v2, x2), this.layoutBoxUpdate(at2, i3, 0)), w2 || !bt2 && !St2 || (at2.height = St2 || this.contrastSize(bt2, y2, b2), this.layoutBoxUpdate(at2, i3)), i3.borderRadius && this.borderSize && this.borderSize.width)
      for (var kt in i3.borderRadius)
        Object.hasOwnProperty.call(i3.borderRadius, kt) && (i3.borderRadius[kt] = P(i3.borderRadius[kt], this.borderSize.width));
    return this.layoutBox;
  }, i2.layout = function() {
    return this.getBoxWidthHeight(), this.root.offsetSize = this.offsetSize, this.getBoxPosition(), this.offsetSize;
  }, e2;
}(), ut = function() {
  var t2, e2, i2, n2, r2, o2, s2 = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28], a2 = [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177], h2 = [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107], d2 = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30], c2 = [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175], l2 = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0], f2 = [], u2 = [], p2 = [], g2 = [], v2 = [], x2 = 2;
  function y2(t3, e3) {
    var i3;
    t3 > e3 && (i3 = t3, t3 = e3, e3 = i3), i3 = e3, i3 *= e3, i3 += e3, i3 >>= 1, g2[i3 += t3] = 1;
  }
  function b2(t3, i3) {
    var n3;
    for (p2[t3 + e2 * i3] = 1, n3 = -2; n3 < 2; n3++)
      p2[t3 + n3 + e2 * (i3 - 2)] = 1, p2[t3 - 2 + e2 * (i3 + n3 + 1)] = 1, p2[t3 + 2 + e2 * (i3 + n3)] = 1, p2[t3 + n3 + 1 + e2 * (i3 + 2)] = 1;
    for (n3 = 0; n3 < 2; n3++)
      y2(t3 - 1, i3 + n3), y2(t3 + 1, i3 - n3), y2(t3 - n3, i3 - 1), y2(t3 + n3, i3 + 1);
  }
  function m2(t3) {
    for (; t3 >= 255; )
      t3 = ((t3 -= 255) >> 8) + (255 & t3);
    return t3;
  }
  var w2 = [];
  function S2(t3, e3, i3, n3) {
    var r3, o3, s3;
    for (r3 = 0; r3 < n3; r3++)
      f2[i3 + r3] = 0;
    for (r3 = 0; r3 < e3; r3++) {
      if (255 != (s3 = c2[f2[t3 + r3] ^ f2[i3]]))
        for (o3 = 1; o3 < n3; o3++)
          f2[i3 + o3 - 1] = f2[i3 + o3] ^ l2[m2(s3 + w2[n3 - o3])];
      else
        for (o3 = i3; o3 < i3 + n3; o3++)
          f2[o3] = f2[o3 + 1];
      f2[i3 + n3 - 1] = 255 == s3 ? 0 : l2[m2(s3 + w2[0])];
    }
  }
  function z2(t3, e3) {
    var i3;
    return t3 > e3 && (i3 = t3, t3 = e3, e3 = i3), i3 = e3, i3 += e3 * e3, i3 >>= 1, g2[i3 += t3];
  }
  function M2(t3) {
    var i3, n3, r3, o3;
    switch (t3) {
      case 0:
        for (n3 = 0; n3 < e2; n3++)
          for (i3 = 0; i3 < e2; i3++)
            i3 + n3 & 1 || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
        break;
      case 1:
        for (n3 = 0; n3 < e2; n3++)
          for (i3 = 0; i3 < e2; i3++)
            1 & n3 || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
        break;
      case 2:
        for (n3 = 0; n3 < e2; n3++)
          for (r3 = 0, i3 = 0; i3 < e2; i3++, r3++)
            3 == r3 && (r3 = 0), r3 || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
        break;
      case 3:
        for (o3 = 0, n3 = 0; n3 < e2; n3++, o3++)
          for (3 == o3 && (o3 = 0), r3 = o3, i3 = 0; i3 < e2; i3++, r3++)
            3 == r3 && (r3 = 0), r3 || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
        break;
      case 4:
        for (n3 = 0; n3 < e2; n3++)
          for (r3 = 0, o3 = n3 >> 1 & 1, i3 = 0; i3 < e2; i3++, r3++)
            3 == r3 && (r3 = 0, o3 = !o3), o3 || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
        break;
      case 5:
        for (o3 = 0, n3 = 0; n3 < e2; n3++, o3++)
          for (3 == o3 && (o3 = 0), r3 = 0, i3 = 0; i3 < e2; i3++, r3++)
            3 == r3 && (r3 = 0), (i3 & n3 & 1) + !(!r3 | !o3) || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
        break;
      case 6:
        for (o3 = 0, n3 = 0; n3 < e2; n3++, o3++)
          for (3 == o3 && (o3 = 0), r3 = 0, i3 = 0; i3 < e2; i3++, r3++)
            3 == r3 && (r3 = 0), (i3 & n3 & 1) + (r3 && r3 == o3) & 1 || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
        break;
      case 7:
        for (o3 = 0, n3 = 0; n3 < e2; n3++, o3++)
          for (3 == o3 && (o3 = 0), r3 = 0, i3 = 0; i3 < e2; i3++, r3++)
            3 == r3 && (r3 = 0), (r3 && r3 == o3) + (i3 + n3 & 1) & 1 || z2(i3, n3) || (p2[i3 + n3 * e2] ^= 1);
    }
  }
  function I2(t3) {
    var e3, i3 = 0;
    for (e3 = 0; e3 <= t3; e3++)
      v2[e3] >= 5 && (i3 += 3 + v2[e3] - 5);
    for (e3 = 3; e3 < t3 - 1; e3 += 2)
      v2[e3 - 2] == v2[e3 + 2] && v2[e3 + 2] == v2[e3 - 1] && v2[e3 - 1] == v2[e3 + 1] && 3 * v2[e3 - 1] == v2[e3] && (0 == v2[e3 - 3] || e3 + 3 > t3 || 3 * v2[e3 - 3] >= 4 * v2[e3] || 3 * v2[e3 + 3] >= 4 * v2[e3]) && (i3 += 40);
    return i3;
  }
  function W2() {
    var t3, i3, n3, r3, o3, s3 = 0, a3 = 0;
    for (i3 = 0; i3 < e2 - 1; i3++)
      for (t3 = 0; t3 < e2 - 1; t3++)
        (p2[t3 + e2 * i3] && p2[t3 + 1 + e2 * i3] && p2[t3 + e2 * (i3 + 1)] && p2[t3 + 1 + e2 * (i3 + 1)] || !(p2[t3 + e2 * i3] || p2[t3 + 1 + e2 * i3] || p2[t3 + e2 * (i3 + 1)] || p2[t3 + 1 + e2 * (i3 + 1)])) && (s3 += 3);
    for (i3 = 0; i3 < e2; i3++) {
      for (v2[0] = 0, n3 = r3 = t3 = 0; t3 < e2; t3++)
        (o3 = p2[t3 + e2 * i3]) == r3 ? v2[n3]++ : v2[++n3] = 1, a3 += (r3 = o3) ? 1 : -1;
      s3 += I2(n3);
    }
    a3 < 0 && (a3 = -a3);
    var h3 = a3, d3 = 0;
    for (h3 += h3 << 2, h3 <<= 1; h3 > e2 * e2; )
      h3 -= e2 * e2, d3++;
    for (s3 += 10 * d3, t3 = 0; t3 < e2; t3++) {
      for (v2[0] = 0, n3 = r3 = i3 = 0; i3 < e2; i3++)
        (o3 = p2[t3 + e2 * i3]) == r3 ? v2[n3]++ : v2[++n3] = 1, r3 = o3;
      s3 += I2(n3);
    }
    return s3;
  }
  var k = null;
  return { api: { get ecclevel() {
    return x2;
  }, set ecclevel(t3) {
    x2 = t3;
  }, get size() {
    return _size;
  }, set size(t3) {
    _size = t3;
  }, get canvas() {
    return k;
  }, set canvas(t3) {
    k = t3;
  }, getFrame: function(v3) {
    return function(v4) {
      var I3, k2, B2, P2, R2, L2, T2, O2;
      P2 = v4.length, t2 = 0;
      do {
        if (t2++, B2 = 4 * (x2 - 1) + 16 * (t2 - 1), i2 = d2[B2++], n2 = d2[B2++], r2 = d2[B2++], o2 = d2[B2], P2 <= (B2 = r2 * (i2 + n2) + n2 - 3 + (t2 <= 9)))
          break;
      } while (t2 < 40);
      for (e2 = 17 + 4 * t2, R2 = r2 + (r2 + o2) * (i2 + n2) + n2, P2 = 0; P2 < R2; P2++)
        u2[P2] = 0;
      for (f2 = v4.slice(0), P2 = 0; P2 < e2 * e2; P2++)
        p2[P2] = 0;
      for (P2 = 0; P2 < (e2 * (e2 + 1) + 1) / 2; P2++)
        g2[P2] = 0;
      for (P2 = 0; P2 < 3; P2++) {
        for (B2 = 0, k2 = 0, 1 == P2 && (B2 = e2 - 7), 2 == P2 && (k2 = e2 - 7), p2[k2 + 3 + e2 * (B2 + 3)] = 1, I3 = 0; I3 < 6; I3++)
          p2[k2 + I3 + e2 * B2] = 1, p2[k2 + e2 * (B2 + I3 + 1)] = 1, p2[k2 + 6 + e2 * (B2 + I3)] = 1, p2[k2 + I3 + 1 + e2 * (B2 + 6)] = 1;
        for (I3 = 1; I3 < 5; I3++)
          y2(k2 + I3, B2 + 1), y2(k2 + 1, B2 + I3 + 1), y2(k2 + 5, B2 + I3), y2(k2 + I3 + 1, B2 + 5);
        for (I3 = 2; I3 < 4; I3++)
          p2[k2 + I3 + e2 * (B2 + 2)] = 1, p2[k2 + 2 + e2 * (B2 + I3 + 1)] = 1, p2[k2 + 4 + e2 * (B2 + I3)] = 1, p2[k2 + I3 + 1 + e2 * (B2 + 4)] = 1;
      }
      if (t2 > 1)
        for (P2 = s2[t2], k2 = e2 - 7; ; ) {
          for (I3 = e2 - 7; I3 > P2 - 3 && (b2(I3, k2), !(I3 < P2)); )
            I3 -= P2;
          if (k2 <= P2 + 9)
            break;
          b2(6, k2 -= P2), b2(k2, 6);
        }
      for (p2[8 + e2 * (e2 - 8)] = 1, k2 = 0; k2 < 7; k2++)
        y2(7, k2), y2(e2 - 8, k2), y2(7, k2 + e2 - 7);
      for (I3 = 0; I3 < 8; I3++)
        y2(I3, 7), y2(I3 + e2 - 8, 7), y2(I3, e2 - 8);
      for (I3 = 0; I3 < 9; I3++)
        y2(I3, 8);
      for (I3 = 0; I3 < 8; I3++)
        y2(I3 + e2 - 8, 8), y2(8, I3);
      for (k2 = 0; k2 < 7; k2++)
        y2(8, k2 + e2 - 7);
      for (I3 = 0; I3 < e2 - 14; I3++)
        1 & I3 ? (y2(8 + I3, 6), y2(6, 8 + I3)) : (p2[8 + I3 + 6 * e2] = 1, p2[6 + e2 * (8 + I3)] = 1);
      if (t2 > 6)
        for (P2 = a2[t2 - 7], B2 = 17, I3 = 0; I3 < 6; I3++)
          for (k2 = 0; k2 < 3; k2++, B2--)
            1 & (B2 > 11 ? t2 >> B2 - 12 : P2 >> B2) ? (p2[5 - I3 + e2 * (2 - k2 + e2 - 11)] = 1, p2[2 - k2 + e2 - 11 + e2 * (5 - I3)] = 1) : (y2(5 - I3, 2 - k2 + e2 - 11), y2(2 - k2 + e2 - 11, 5 - I3));
      for (k2 = 0; k2 < e2; k2++)
        for (I3 = 0; I3 <= k2; I3++)
          p2[I3 + e2 * k2] && y2(I3, k2);
      for (R2 = f2.length, L2 = 0; L2 < R2; L2++)
        u2[L2] = f2.charCodeAt(L2);
      if (f2 = u2.slice(0), R2 >= (I3 = r2 * (i2 + n2) + n2) - 2 && (R2 = I3 - 2, t2 > 9 && R2--), L2 = R2, t2 > 9) {
        for (f2[L2 + 2] = 0, f2[L2 + 3] = 0; L2--; )
          P2 = f2[L2], f2[L2 + 3] |= 255 & P2 << 4, f2[L2 + 2] = P2 >> 4;
        f2[2] |= 255 & R2 << 4, f2[1] = R2 >> 4, f2[0] = 64 | R2 >> 12;
      } else {
        for (f2[L2 + 1] = 0, f2[L2 + 2] = 0; L2--; )
          P2 = f2[L2], f2[L2 + 2] |= 255 & P2 << 4, f2[L2 + 1] = P2 >> 4;
        f2[1] |= 255 & R2 << 4, f2[0] = 64 | R2 >> 4;
      }
      for (L2 = R2 + 3 - (t2 < 10); L2 < I3; )
        f2[L2++] = 236, f2[L2++] = 17;
      for (w2[0] = 1, L2 = 0; L2 < o2; L2++) {
        for (w2[L2 + 1] = 1, T2 = L2; T2 > 0; T2--)
          w2[T2] = w2[T2] ? w2[T2 - 1] ^ l2[m2(c2[w2[T2]] + L2)] : w2[T2 - 1];
        w2[0] = l2[m2(c2[w2[0]] + L2)];
      }
      for (L2 = 0; L2 <= o2; L2++)
        w2[L2] = c2[w2[L2]];
      for (B2 = I3, k2 = 0, L2 = 0; L2 < i2; L2++)
        S2(k2, r2, B2, o2), k2 += r2, B2 += o2;
      for (L2 = 0; L2 < n2; L2++)
        S2(k2, r2 + 1, B2, o2), k2 += r2 + 1, B2 += o2;
      for (k2 = 0, L2 = 0; L2 < r2; L2++) {
        for (T2 = 0; T2 < i2; T2++)
          u2[k2++] = f2[L2 + T2 * r2];
        for (T2 = 0; T2 < n2; T2++)
          u2[k2++] = f2[i2 * r2 + L2 + T2 * (r2 + 1)];
      }
      for (T2 = 0; T2 < n2; T2++)
        u2[k2++] = f2[i2 * r2 + L2 + T2 * (r2 + 1)];
      for (L2 = 0; L2 < o2; L2++)
        for (T2 = 0; T2 < i2 + n2; T2++)
          u2[k2++] = f2[I3 + L2 + T2 * o2];
      for (f2 = u2, I3 = k2 = e2 - 1, B2 = R2 = 1, O2 = (r2 + o2) * (i2 + n2) + n2, L2 = 0; L2 < O2; L2++)
        for (P2 = f2[L2], T2 = 0; T2 < 8; T2++, P2 <<= 1) {
          128 & P2 && (p2[I3 + e2 * k2] = 1);
          do {
            R2 ? I3-- : (I3++, B2 ? 0 != k2 ? k2-- : (B2 = !B2, 6 == (I3 -= 2) && (I3--, k2 = 9)) : k2 != e2 - 1 ? k2++ : (B2 = !B2, 6 == (I3 -= 2) && (I3--, k2 -= 8))), R2 = !R2;
          } while (z2(I3, k2));
        }
      for (f2 = p2.slice(0), P2 = 0, k2 = 3e4, B2 = 0; B2 < 8 && (M2(B2), (I3 = W2()) < k2 && (k2 = I3, P2 = B2), 7 != P2); B2++)
        p2 = f2.slice(0);
      for (P2 != B2 && M2(P2), k2 = h2[P2 + (x2 - 1 << 3)], B2 = 0; B2 < 8; B2++, k2 >>= 1)
        1 & k2 && (p2[e2 - 1 - B2 + 8 * e2] = 1, B2 < 6 ? p2[8 + e2 * B2] = 1 : p2[8 + e2 * (B2 + 1)] = 1);
      for (B2 = 0; B2 < 7; B2++, k2 >>= 1)
        1 & k2 && (p2[8 + e2 * (e2 - 7 + B2)] = 1, B2 ? p2[6 - B2 + 8 * e2] = 1 : p2[7 + 8 * e2] = 1);
      return p2;
    }(v3);
  }, utf16to8: function(t3) {
    var e3, i3, n3, r3;
    for (e3 = "", n3 = t3.length, i3 = 0; i3 < n3; i3++)
      (r3 = t3.charCodeAt(i3)) >= 1 && r3 <= 127 ? e3 += t3.charAt(i3) : r3 > 2047 ? (e3 += String.fromCharCode(224 | r3 >> 12 & 15), e3 += String.fromCharCode(128 | r3 >> 6 & 63), e3 += String.fromCharCode(128 | r3 >> 0 & 63)) : (e3 += String.fromCharCode(192 | r3 >> 6 & 31), e3 += String.fromCharCode(128 | r3 >> 0 & 63));
    return e3;
  }, draw: function(t3, i3, n3, r3, o3) {
    i3.drawView(n3, r3);
    var s3 = i3.ctx, a3 = n3.contentSize, h3 = a3.width, d3 = a3.height, c3 = a3.left, l3 = a3.top;
    r3.borderRadius, r3.backgroundColor;
    var f3 = r3.color, u3 = void 0 === f3 ? "#000000" : f3;
    r3.border, n3.contentSize.left, n3.borderSize.left, n3.contentSize.top, n3.borderSize.top;
    if (x2 = o3 || x2, s3) {
      s3.save(), i3.setOpacity(r3), i3.setTransform(n3, r3);
      var p3 = Math.min(h3, d3);
      t3 = this.utf16to8(t3);
      var g3 = this.getFrame(t3), v3 = p3 / e2;
      s3.setFillStyle(u3);
      for (var y3 = 0; y3 < e2; y3++)
        for (var b3 = 0; b3 < e2; b3++)
          g3[b3 * e2 + y3] && s3.fillRect(c3 + v3 * y3, l3 + v3 * b3, v3, v3);
      s3.restore(), i3.setBorder(n3, r3);
    } else
      console.warn("No canvas provided to draw QR code in!");
  } } };
}(), pt = g, gt = p, vt = v, xt = u, yt = a, bt = h, mt = d, wt = c, St = l, zt = f, Mt = function() {
  function r2(t2) {
    var e2, i2 = this;
    this.v = "1.9.5.1", this.id = null, this.pixelRatio = 1, this.width = 0, this.height = 0, this.sleep = 1e3 / 30, this.count = 0, this.isRate = false, this.isDraw = true, this.isCache = true, this.fixed = "", this.useCORS = false, this.performance = false, this.imageBus = [], this.createImage = function(t3, e3) {
      return new Promise(function(n2, r4) {
        var o2 = null;
        window || i2.canvas.createImage ? (o2 = i2.canvas && i2.canvas.createImage ? i2.canvas.createImage() : new Image(), e3 && o2.setAttribute("crossOrigin", "Anonymous"), o2.src = t3, o2.onload = function() {
          n2({ width: o2.naturalWidth || o2.width, height: o2.naturalHeight || o2.height, path: o2, src: this.src });
        }, o2.onerror = function(t4) {
          r4(t4);
        }) : r4({ fail: "getImageInfo fail", src: t3 });
      });
    }, this.options = t2, Object.assign(this, t2), this.ctx = ((e2 = t2.context).setFonts = function(t3) {
      var i3 = t3.fontFamily, r4 = void 0 === i3 ? "sans-serif" : i3, o2 = t3.fontSize, s2 = void 0 === o2 ? 14 : o2, a2 = t3.fontWeight, h2 = void 0 === a2 ? "normal" : a2, d2 = t3.fontStyle, c2 = void 0 === d2 ? "normal" : d2;
      I == n.MP_TOUTIAO && (h2 = "bold" == h2 ? "bold" : "", c2 = "italic" == c2 ? "italic" : ""), e2.font = c2 + " " + h2 + " " + Math.round(s2) + "px " + r4;
    }, e2.draw && e2.setFillStyle ? e2 : Object.assign(e2, { setStrokeStyle: function(t3) {
      e2.strokeStyle = t3;
    }, setLineWidth: function(t3) {
      e2.lineWidth = t3;
    }, setLineCap: function(t3) {
      e2.lineCap = t3;
    }, setFillStyle: function(t3) {
      e2.fillStyle = t3;
    }, setFontSize: function(t3) {
      e2.font = String(t3) + "px sans-serif";
    }, setGlobalAlpha: function(t3) {
      e2.globalAlpha = t3;
    }, setLineJoin: function(t3) {
      e2.lineJoin = t3;
    }, setTextAlign: function(t3) {
      e2.textAlign = t3;
    }, setMiterLimit: function(t3) {
      e2.miterLimit = t3;
    }, setShadow: function(t3, i3, n2, r4) {
      e2.shadowOffsetX = t3, e2.shadowOffsetY = i3, e2.shadowBlur = n2, e2.shadowColor = r4;
    }, setTextBaseline: function(t3) {
      e2.textBaseline = t3;
    }, createCircularGradient: function() {
    }, draw: function() {
    } })), this.progress = 0, this.root = { width: t2.width, height: t2.height, fontSizeRate: 1, fixedLine: null }, this.size = this.root;
    var r3 = 0;
    Object.defineProperty(this, "progress", { configurable: true, set: function(t3) {
      r3 = t3, i2.lifecycle("onProgress", t3 / i2.count);
    }, get: function() {
      return r3 || 0;
    } });
  }
  return r2.prototype.lifecycle = function(t2, e2) {
    this.options.listen && this.options.listen[t2] && this.options.listen[t2](e2);
  }, r2.prototype.setContext = function(t2) {
    t2 && (this.ctx = t2);
  }, r2.prototype.init = function() {
    if (this.canvas.height || n.WEB == I) {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      var t2 = this.size.height * this.pixelRatio, e2 = this.size.width * this.pixelRatio;
      this.canvas.height = t2, this.canvas.width = e2, this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }
  }, r2.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);
  }, r2.prototype.clipPath = function(t2, e2, i2, n2, r3, o2, s2) {
    void 0 === o2 && (o2 = false), void 0 === s2 && (s2 = false);
    var a2 = this.ctx;
    if (/polygon/.test(r3)) {
      var h2 = r3.match(/-?\d+(rpx|px|%)?\s+-?\d+(rpx|px|%)?/g) || [];
      a2.beginPath(), h2.map(function(r4) {
        var o3 = r4.split(" "), s3 = o3[0], a3 = o3[1];
        return [P(s3, i2) + t2, P(a3, n2) + e2];
      }).forEach(function(t3, e3) {
        0 == e3 ? a2.moveTo(t3[0], t3[1]) : a2.lineTo(t3[0], t3[1]);
      }), a2.closePath(), s2 && a2.stroke(), o2 && a2.fill();
    }
  }, r2.prototype.roundRect = function(t2, e2, i2, n2, r3, o2, s2) {
    if (void 0 === o2 && (o2 = false), void 0 === s2 && (s2 = false), !(r3 < 0)) {
      var a2 = this.ctx;
      if (a2.beginPath(), r3) {
        var h2 = r3 || {}, d2 = h2.borderTopLeftRadius, c2 = void 0 === d2 ? r3 || 0 : d2, l2 = h2.borderTopRightRadius, f2 = void 0 === l2 ? r3 || 0 : l2, u2 = h2.borderBottomRightRadius, p2 = void 0 === u2 ? r3 || 0 : u2, g2 = h2.borderBottomLeftRadius, v2 = void 0 === g2 ? r3 || 0 : g2;
        a2.arc(t2 + i2 - p2, e2 + n2 - p2, p2, 0, 0.5 * Math.PI), a2.lineTo(t2 + v2, e2 + n2), a2.arc(t2 + v2, e2 + n2 - v2, v2, 0.5 * Math.PI, Math.PI), a2.lineTo(t2, e2 + c2), a2.arc(t2 + c2, e2 + c2, c2, Math.PI, 1.5 * Math.PI), a2.lineTo(t2 + i2 - f2, e2), a2.arc(t2 + i2 - f2, e2 + f2, f2, 1.5 * Math.PI, 2 * Math.PI), a2.lineTo(t2 + i2, e2 + n2 - p2);
      } else
        a2.rect(t2, e2, i2, n2);
      a2.closePath(), s2 && a2.stroke(), o2 && a2.fill();
    }
  }, r2.prototype.setTransform = function(t2, e2) {
    var i2 = e2.transform, n2 = e2.transformOrigin, r3 = this.ctx, o2 = i2 || {}, s2 = o2.scaleX, a2 = void 0 === s2 ? 1 : s2, h2 = o2.scaleY, d2 = void 0 === h2 ? 1 : h2, c2 = o2.translateX, l2 = void 0 === c2 ? 0 : c2, f2 = o2.translateY, u2 = void 0 === f2 ? 0 : f2, p2 = o2.rotate, g2 = void 0 === p2 ? 0 : p2, v2 = o2.skewX, x2 = void 0 === v2 ? 0 : v2, y2 = o2.skewY, b2 = void 0 === y2 ? 0 : y2, m2 = t2.left, w2 = t2.top, S2 = t2.width, z2 = t2.height;
    l2 = P(l2, S2) || 0, u2 = P(u2, z2) || 0;
    var M2 = { top: P("0%", 1), center: P("50%", 1), bottom: P("100%", 1) }, I2 = { left: P("0%", 1), center: P("50%", 1), right: P("100%", 1) };
    if (n2 = n2.split(" ").filter(function(t3, e3) {
      return e3 < 2;
    }).reduce(function(t3, e3) {
      if (/\d+/.test(e3)) {
        var i3 = P(e3, 1) / (/px|rpx$/.test(e3) ? B(t3.x) ? z2 : S2 : 1);
        return B(t3.x) ? Object.assign(t3, { y: i3 }) : Object.assign(t3, { x: i3 });
      }
      return B(I2[e3]) && !B(t3.x) ? Object.assign(t3, { x: I2[e3] }) : Object.assign(t3, { y: M2[e3] || 0.5 });
    }, {}), (l2 || u2) && r3.translate(l2, u2), (a2 || d2) && r3.scale(a2, d2), g2) {
      var W2 = m2 + S2 * n2.x, k = w2 + z2 * n2.y;
      r3.translate(W2, k), r3.rotate(g2 * Math.PI / 180), r3.translate(-W2, -k);
    }
    (x2 || b2) && r3.transform(1, Math.tan(b2 * Math.PI / 180), Math.tan(x2 * Math.PI / 180), 1, 0, 0);
  }, r2.prototype.setBackground = function(t2, e2, i2, r3, o2) {
    var s2 = this.ctx;
    t2 && "transparent" != t2 ? L(t2) ? T(t2, e2, i2, r3, o2, s2) : s2.setFillStyle(t2) : [n.MP_TOUTIAO, n.MP_BAIDU].includes(I) ? s2.setFillStyle("rgba(0,0,0,0)") : s2.setFillStyle("transparent");
  }, r2.prototype.setShadow = function(t2) {
    var e2 = t2.boxShadow, i2 = void 0 === e2 ? [] : e2, n2 = this.ctx;
    if (i2.length) {
      var r3 = i2[0], o2 = i2[1], s2 = i2[2], a2 = i2[3];
      n2.setShadow(r3, o2, s2, a2);
    }
  }, r2.prototype.setBorder = function(t2, e2) {
    var i2 = this.ctx, n2 = t2.width, r3 = t2.height, o2 = t2.left, s2 = t2.top, a2 = e2.border, h2 = e2.borderBottom, d2 = e2.borderTop, c2 = e2.borderRight, l2 = e2.borderLeft, f2 = e2.borderRadius, u2 = e2.lineCap, p2 = a2 || {}, g2 = p2.borderWidth, v2 = void 0 === g2 ? 0 : g2, x2 = p2.borderStyle, y2 = p2.borderColor, b2 = h2 || {}, m2 = b2.borderBottomWidth, w2 = void 0 === m2 ? v2 : m2, S2 = b2.borderBottomStyle, z2 = void 0 === S2 ? x2 : S2, M2 = b2.borderBottomColor, W2 = void 0 === M2 ? y2 : M2, k = d2 || {}, B2 = k.borderTopWidth, P2 = void 0 === B2 ? v2 : B2, R2 = k.borderTopStyle, L2 = void 0 === R2 ? x2 : R2, T2 = k.borderTopColor, O2 = void 0 === T2 ? y2 : T2, F2 = c2 || {}, A2 = F2.borderRightWidth, C2 = void 0 === A2 ? v2 : A2, j2 = F2.borderRightStyle, E2 = void 0 === j2 ? x2 : j2, H2 = F2.borderRightColor, Y2 = void 0 === H2 ? y2 : H2, $2 = l2 || {}, D2 = $2.borderLeftWidth, U2 = void 0 === D2 ? v2 : D2, X2 = $2.borderLeftStyle, N2 = void 0 === X2 ? x2 : X2, _2 = $2.borderLeftColor, q2 = void 0 === _2 ? y2 : _2, V2 = f2 || {}, G2 = V2.borderTopLeftRadius, J2 = void 0 === G2 ? f2 || 0 : G2, Q2 = V2.borderTopRightRadius, Z2 = void 0 === Q2 ? f2 || 0 : Q2, K2 = V2.borderBottomRightRadius, tt2 = void 0 === K2 ? f2 || 0 : K2, et2 = V2.borderBottomLeftRadius, it2 = void 0 === et2 ? f2 || 0 : et2;
    if (h2 || l2 || d2 || c2 || a2) {
      var nt2 = function(t3, e3, n3) {
        "dashed" == e3 ? /mp/.test(I) ? i2.setLineDash([Math.ceil(4 * t3 / 3), Math.ceil(4 * t3 / 3)]) : i2.setLineDash([Math.ceil(6 * t3), Math.ceil(6 * t3)]) : "dotted" == e3 && i2.setLineDash([t3, t3]), i2.setStrokeStyle(n3);
      }, rt2 = function(t3, e3, n3, r4, o3, s3, a3, h3, d3, c3, l3, f3, p3, g3, v3) {
        i2.save(), i2.setLineCap(v3 ? "square" : u2), i2.setLineWidth(f3), nt2(f3, p3, g3), i2.beginPath(), i2.arc(t3, e3, a3, Math.PI * d3, Math.PI * c3), i2.lineTo(n3, r4), i2.arc(o3, s3, h3, Math.PI * c3, Math.PI * l3), i2.stroke(), i2.restore();
      };
      if (i2.save(), a2 && !h2 && !l2 && !d2 && !c2)
        return i2.setLineWidth(v2), nt2(v2, x2, y2), this.roundRect(o2, s2, n2, r3, f2, false, !!y2), void i2.restore();
      w2 && rt2(o2 + n2 - tt2, s2 + r3 - tt2, o2 + it2, s2 + r3, o2 + it2, s2 + r3 - it2, tt2, it2, 0.25, 0.5, 0.75, w2, z2, W2, U2 && C2), U2 && rt2(o2 + it2, s2 + r3 - it2, o2, s2 + J2, o2 + J2, s2 + J2, it2, J2, 0.75, 1, 1.25, U2, N2, q2, P2 && w2), P2 && rt2(o2 + J2, s2 + J2, o2 + n2 - Z2, s2, o2 + n2 - Z2, s2 + Z2, J2, Z2, 1.25, 1.5, 1.75, P2, L2, O2, U2 && C2), C2 && rt2(o2 + n2 - Z2, s2 + Z2, o2 + n2, s2 + r3 - tt2, o2 + n2 - tt2, s2 + r3 - tt2, Z2, tt2, 1.75, 2, 0.25, C2, E2, Y2, P2 && w2);
    }
  }, r2.prototype.setOpacity = function(t2) {
    var e2 = t2.opacity, i2 = void 0 === e2 ? 1 : e2;
    this.ctx.setGlobalAlpha(i2);
  }, r2.prototype.drawPattern = function(t2, n2, r3) {
    return e(this, void 0, void 0, function() {
      var e2 = this;
      return i(this, function(i2) {
        return [2, new Promise(function(i3, o2) {
          e2.drawView(n2, r3, true, false, true);
          var s2 = e2, a2 = s2.ctx;
          s2.canvas;
          var h2 = n2.width, d2 = n2.height, c2 = n2.left, l2 = n2.top, f2 = r3 || {}, u2 = f2.borderRadius, p2 = void 0 === u2 ? 0 : u2, g2 = f2.backgroundImage, v2 = f2.backgroundRepeat, x2 = void 0 === v2 ? "repeat" : v2;
          g2 && function(t3) {
            var o3 = a2.createPattern(t3.src, x2);
            a2.setFillStyle(o3), e2.roundRect(c2, l2, h2, d2, p2, true, false), e2.setBorder(n2, r3), i3();
          }(t2);
        })];
      });
    });
  }, r2.prototype.drawView = function(t2, e2, i2, n2, r3) {
    void 0 === i2 && (i2 = true), void 0 === n2 && (n2 = true), void 0 === r3 && (r3 = true);
    var o2 = this.ctx, s2 = t2.width, a2 = t2.height, h2 = t2.left, d2 = t2.top, c2 = e2 || {}, l2 = c2.borderRadius, f2 = void 0 === l2 ? 0 : l2, u2 = c2.backgroundColor, p2 = void 0 === u2 ? "transparent" : u2, g2 = c2.overflow;
    e2.opacity && this.setOpacity(e2), this.setTransform(t2, e2), r3 && (o2.save(), this.setShadow(e2)), i2 && this.setBackground(p2, s2, a2, h2, d2), e2.clipPath ? this.clipPath(h2, d2, s2, a2, e2.clipPath, i2, false) : this.roundRect(h2, d2, s2, a2, f2, i2, false), r3 && o2.restore(), n2 && this.setBorder(t2, e2), "hidden" == g2 && o2.clip();
  }, r2.prototype.drawImage = function(t2, r3, o2, s2) {
    return void 0 === r3 && (r3 = {}), void 0 === o2 && (o2 = {}), void 0 === s2 && (s2 = true), e(this, void 0, void 0, function() {
      var a2 = this;
      return i(this, function(h2) {
        switch (h2.label) {
          case 0:
            return [4, new Promise(function(h3, d2) {
              return e(a2, void 0, void 0, function() {
                var e2, a3, d3, c2, l2, f2, u2, p2, g2, v2, x2, y2, b2, m2, w2, S2, z2, M2, W2, k, B2 = this;
                return i(this, function(i2) {
                  return e2 = this.ctx, a3 = o2.borderRadius, d3 = void 0 === a3 ? 0 : a3, c2 = o2.backgroundColor, l2 = void 0 === c2 ? "transparent" : c2, f2 = o2.objectFit, u2 = void 0 === f2 ? "fill" : f2, p2 = o2.backgroundSize, g2 = void 0 === p2 ? "fill" : p2, v2 = o2.objectPosition, x2 = o2.backgroundPosition, y2 = o2.boxShadow, o2.backgroundImage && (u2 = g2, v2 = x2), y2 && this.drawView(r3, Object.assign(o2, { backgroundColor: l2 || y2 && (l2 || "#ffffff") }), true, false, true), b2 = r3.width, m2 = r3.height, w2 = r3.left, S2 = r3.top, e2.save(), z2 = r3.contentSize.left - r3.borderSize.left, M2 = r3.contentSize.top - r3.borderSize.top, s2 || (this.setOpacity(o2), this.setTransform(r3, o2), this.setBackground(l2, b2, m2, w2, S2), this.roundRect(w2, S2, b2, m2, d3, !!(d3 || !y2 && l2), false)), w2 += z2, S2 += M2, e2.clip(), W2 = function(t3) {
                    if ("fill" !== u2) {
                      var i3 = function(t4, e3, i4) {
                        var n2 = t4.objectFit, r4 = t4.objectPosition, o4 = e3.width / e3.height, s4 = i4.width / i4.height, a5 = 1;
                        "contain" == n2 && o4 >= s4 || "cover" == n2 && o4 < s4 ? a5 = e3.height / i4.height : ("contain" == n2 && o4 < s4 || "cover" == n2 && o4 >= s4) && (a5 = e3.width / i4.width);
                        var h5 = i4.width * a5, d5 = i4.height * a5, c4 = r4 || [], l4 = c4[0], f4 = c4[1], u3 = function(t5) {
                          return /^\d+px|rpx$/.test(t5);
                        }, p3 = u3(l4) ? P(l4, e3.width) : (e3.width - h5) * (R(l4) ? P(l4, 1) : { left: 0, center: 0.5, right: 1 }[l4 || "center"]), g3 = u3(f4) ? P(f4, e3.height) : (e3.height - d5) * (R(f4) ? P(f4, 1) : { top: 0, center: 0.5, bottom: 1 }[f4 || "center"]), v3 = function(t5, e4) {
                          return [(t5 - p3) / a5, (e4 - g3) / a5];
                        }, x3 = v3(0, 0), y3 = x3[0], b3 = x3[1], m3 = v3(e3.width, e3.height), w3 = m3[0], S3 = m3[1];
                        return { sx: Math.max(y3, 0), sy: Math.max(b3, 0), sw: Math.min(w3 - y3, i4.width), sh: Math.min(S3 - b3, i4.height), dx: Math.max(p3, 0), dy: Math.max(g3, 0), dw: Math.min(h5, e3.width), dh: Math.min(d5, e3.height) };
                      }({ objectFit: u2, objectPosition: v2 }, r3.contentSize, t3), o3 = i3.sx, s3 = i3.sy, a4 = i3.sh, h4 = i3.sw, d4 = i3.dx, c3 = i3.dy, l3 = i3.dh, f3 = i3.dw;
                      I == n.MP_BAIDU ? e2.drawImage(t3.src, d4 + w2, c3 + S2, f3, l3, o3, s3, h4, a4) : e2.drawImage(t3.src, o3, s3, h4, a4, d4 + w2, c3 + S2, f3, l3);
                    } else
                      e2.drawImage(t3.src, w2, S2, b2, m2);
                  }, k = function() {
                    e2.restore(), B2.drawView(r3, o2, false, true, false), h3(1);
                  }, function(t3) {
                    W2(t3), k();
                  }(t2), [2];
                });
              });
            })];
          case 1:
            return h2.sent(), [2];
        }
      });
    });
  }, r2.prototype.drawText = function(t2, e2, i2, n2) {
    var r3 = this, o2 = this.ctx, s2 = e2.borderSize, a2 = e2.contentSize, h2 = e2.left, d2 = e2.top, c2 = a2.width, l2 = a2.height, f2 = a2.left - s2.left, u2 = a2.top - s2.top, p2 = i2.color, g2 = void 0 === p2 ? "#000000" : p2, v2 = i2.lineHeight, x2 = void 0 === v2 ? "1.4em" : v2, y2 = i2.fontSize, b2 = void 0 === y2 ? 14 : y2, m2 = i2.fontWeight, w2 = i2.fontFamily, S2 = i2.fontStyle, z2 = i2.textIndent, M2 = void 0 === z2 ? 0 : z2, I2 = i2.textAlign, W2 = void 0 === I2 ? "left" : I2, k = i2.textStroke, R2 = i2.verticalAlign, L2 = void 0 === R2 ? bt : R2, T2 = i2.backgroundColor, O2 = i2.lineClamp, F2 = i2.backgroundClip, A2 = i2.textShadow, C2 = i2.textDecoration;
    if (M2 = B(M2) ? M2 : 0, this.drawView(e2, i2, F2 != gt), x2 = P(x2, b2), t2) {
      o2.save(), h2 += f2, d2 += u2;
      var j2 = n2.fontHeight, E2 = n2.descent + n2.ascent;
      switch (o2.setFonts({ fontFamily: w2, fontSize: b2, fontWeight: m2, fontStyle: S2 }), o2.setTextBaseline(bt), o2.setTextAlign(W2), F2 ? this.setBackground(T2, c2, l2, h2, d2) : o2.setFillStyle(g2), W2) {
        case wt:
          break;
        case St:
          h2 += 0.5 * c2;
          break;
        case zt:
          h2 += c2;
      }
      var H2 = n2.lines * x2, Y2 = Math.ceil((l2 - H2) / 2);
      switch (Y2 < 0 && (Y2 = 0), L2) {
        case yt:
          break;
        case bt:
          d2 += Y2;
          break;
        case mt:
          d2 += 2 * Y2;
      }
      var $2 = (x2 - j2) / 2, D2 = x2 / 2, U2 = function(t3) {
        var e3 = o2.measureText(t3), i3 = e3.actualBoundingBoxDescent, n3 = void 0 === i3 ? 0 : i3, r4 = e3.actualBoundingBoxAscent;
        return L2 == yt ? { fix: E2 ? void 0 === r4 ? 0 : r4 : D2 - $2 / 2, lineY: E2 ? 0 : $2 - $2 / 2 } : L2 == bt ? { fix: E2 ? D2 + n3 / 4 : D2, lineY: E2 ? 0 : $2 } : L2 == mt ? { fix: E2 ? x2 - n3 : D2 + $2 / 2, lineY: E2 ? 2 * $2 : $2 + $2 / 2 } : { fix: 0, height: 0, lineY: 0 };
      }, X2 = function(t3, e3, i3) {
        var r4 = t3;
        switch (W2) {
          case wt:
            t3 = t3, r4 += i3;
            break;
          case St:
            r4 = (t3 -= i3 / 2) + i3;
            break;
          case zt:
            r4 = t3, t3 -= i3;
        }
        if (C2) {
          o2.setLineWidth(b2 / 13), o2.beginPath();
          var s3 = 0.1 * n2.fontHeight;
          /\bunderline\b/.test(C2) && (o2.moveTo(t3, e3 + n2.fontHeight + s3), o2.lineTo(r4, e3 + n2.fontHeight + s3)), /\boverline\b/.test(C2) && (o2.moveTo(t3, e3 - s3), o2.lineTo(r4, e3 - s3)), /\bline-through\b/.test(C2) && (o2.moveTo(t3, e3 + 0.5 * n2.fontHeight), o2.lineTo(r4, e3 + 0.5 * n2.fontHeight)), o2.closePath(), o2.setStrokeStyle(g2), o2.stroke();
        }
      }, N2 = function(t3, e3, i3) {
        var n3 = function() {
          o2.setLineWidth(k.width), o2.setStrokeStyle(k.color), o2.strokeText(t3, e3, i3);
        }, s3 = "outset";
        k && k.type !== s3 ? (o2.save(), r3.setShadow({ boxShadow: A2 }), o2.fillText(t3, e3, i3), o2.restore(), n3()) : k && k.type == s3 ? (o2.save(), r3.setShadow({ boxShadow: A2 }), n3(), o2.restore(), o2.save(), o2.fillText(t3, e3, i3), o2.restore()) : (r3.setShadow({ boxShadow: A2 }), o2.fillText(t3, e3, i3));
      };
      if (!n2.widths || 1 == n2.widths.length && n2.widths[0].total + M2 <= a2.width) {
        var _2 = U2(t2), q2 = _2.fix, V2 = _2.lineY;
        return N2(t2, h2 + M2, d2 + q2), X2(h2 + M2, d2 + V2, n2 && n2.widths && n2.widths[0].total || n2.text), d2 += x2, o2.restore(), void this.setBorder(e2, i2);
      }
      for (var G2 = d2, J2 = h2, Q2 = "", Z2 = 0, K2 = o2.measureText("...").width, tt2 = n2.widths, et2 = 0; et2 < tt2.length; et2++) {
        var it2 = tt2[et2].widths, nt2 = 0;
        Q2 = "", d2 += 1 == (Z2 += 1) ? 0 : x2, 1 == Z2 && M2 && (nt2 = M2, J2 = h2 + M2);
        for (var rt2 = 0; rt2 < it2.length; rt2++) {
          1 !== Z2 && M2 && (J2 = h2);
          var ot2 = it2[rt2], st2 = ot2.width, at2 = ot2.text, ht2 = (it2[rt2 + 1] || {}).width;
          if (Q2 += at2, (nt2 += st2) + (void 0 === ht2 ? 0 : ht2) + (0 == Z2 ? M2 : 0) + (Z2 == O2 ? K2 : 0) > a2.width) {
            Z2 >= O2 && (Q2 += "…"), Z2++, nt2 = 0;
            var dt2 = U2(Q2);
            q2 = dt2.fix, V2 = dt2.lineY;
            N2(Q2, J2, d2 + q2), X2(J2, d2 + V2, nt2), d2 += x2, Q2 = "";
          } else if (rt2 == it2.length - 1) {
            et2 != tt2.length - 1 && Z2 == O2 && K2 + nt2 < a2.width && (Q2 += "…");
            var ct2 = U2(Q2);
            q2 = ct2.fix, V2 = ct2.lineY;
            N2(Q2, J2, d2 + q2), X2(J2, d2 + V2, nt2);
          }
          if (d2 > G2 + l2 || Z2 > O2)
            break;
        }
      }
      o2.restore();
    }
  }, r2.prototype.source = function(t2) {
    return e(this, void 0, void 0, function() {
      var e2, n2, r3, o2, s2 = this;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            if (this.node = null, e2 = +new Date(), "{}" == JSON.stringify(t2))
              return [2];
            if (!t2.type)
              for (n2 in t2.type = xt, t2.css = t2.css || {}, t2)
                ["views", "children", "type", "css"].includes(n2) || (t2.css[n2] = t2[n2], delete t2[n2]);
            return t2.css.boxSizing || (t2.css.boxSizing = "border-box"), [4, this.create(t2)];
          case 1:
            return (r3 = i2.sent()) ? (o2 = r3.layout() || {}, this.size = o2, this.node = r3, this.onEffectFinished().then(function(t3) {
              return s2.lifecycle("onEffectSuccess", t3);
            }).catch(function(t3) {
              return s2.lifecycle("onEffectFail", t3);
            }), this.performance && console.log("布局用时：" + (+new Date() - e2) + "ms"), [2, this.size]) : [2, console.warn("no node")];
        }
      });
    });
  }, r2.prototype.getImageInfo = function(t2) {
    return this.imageBus[t2] || (this.imageBus[t2] = this.createImage(t2, this.useCORS)), this.imageBus[t2];
  }, r2.prototype.create = function(n2, r3) {
    return e(this, void 0, void 0, function() {
      var e2, o2, s2, a2, h2, d2, c2, l2, f2, u2, p2, g2, v2, x2, y2, m2, w2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            if (e2 = n2.type == pt, o2 = [gt, vt].includes(n2.type), s2 = n2.css || {}, a2 = s2.backgroundImage, h2 = s2.display, e2 && !n2.src && !n2.url || o2 && !n2.text)
              return [2];
            if (h2 == b)
              return [2];
            if (o2 && (n2.text = String(n2.text)), !(e2 || n2.type == xt && a2))
              return [3, 4];
            d2 = e2 ? n2.src : "", c2 = /url\((.+)\)/.exec(a2), a2 && c2 && c2[1] && (d2 = c2[1] || ""), i2.label = 1;
          case 1:
            return i2.trys.push([1, 3, , 4]), [4, this.getImageInfo(d2)];
          case 2:
            return l2 = i2.sent(), f2 = l2.width, u2 = l2.height, !(p2 = l2.path) && e2 ? [2] : (p2 && (n2.attributes = Object.assign(n2.attributes || {}, { width: f2, height: u2, path: p2, src: p2, naturalSrc: d2 })), [3, 4]);
          case 3:
            return g2 = i2.sent(), n2.type != xt ? [2] : (this.lifecycle("onEffectFail", t(t({}, g2), { src: d2 })), [3, 4]);
          case 4:
            if (this.count += 1, v2 = new ft(n2, r3, this.root, this.ctx), !(x2 = n2.views || n2.children))
              return [3, 8];
            y2 = 0, i2.label = 5;
          case 5:
            return y2 < x2.length ? (m2 = x2[y2], [4, this.create(m2, v2)]) : [3, 8];
          case 6:
            (w2 = i2.sent()) && v2.add(w2), i2.label = 7;
          case 7:
            return y2++, [3, 5];
          case 8:
            return [2, v2];
        }
      });
    });
  }, r2.prototype.drawNode = function(t2, n2) {
    return void 0 === n2 && (n2 = false), e(this, void 0, void 0, function() {
      var e2, r3, o2, s2, a2, h2, d2, c2, l2, f2, u2, p2, g2, v2, x2, y2, b2, m2, w2, S2, z2, M2, I2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            return e2 = t2.layoutBox, r3 = t2.computedStyle, o2 = t2.attributes, s2 = t2.name, a2 = t2.children, h2 = t2.fixedLine, d2 = t2.attributes, c2 = d2.src, l2 = d2.text, f2 = r3.position, u2 = r3.backgroundImage, p2 = r3.backgroundRepeat, ["fixed"].includes(f2) && !n2 ? [2] : (this.ctx.save(), s2 !== xt ? [3, 7] : c2 && u2 ? p2 ? [4, this.drawPattern(o2, e2, r3)] : [3, 2] : [3, 5]);
          case 1:
            return i2.sent(), [3, 4];
          case 2:
            return [4, this.drawImage(o2, e2, r3, false)];
          case 3:
            i2.sent(), i2.label = 4;
          case 4:
            return [3, 6];
          case 5:
            this.drawView(e2, r3), i2.label = 6;
          case 6:
            return [3, 10];
          case 7:
            return s2 === pt && c2 ? [4, this.drawImage(o2, e2, r3, false)] : [3, 9];
          case 8:
            return i2.sent(), [3, 10];
          case 9:
            s2 === gt ? this.drawText(l2, e2, r3, o2) : s2 === vt && ut.api && ut.api.draw(l2, this, e2, r3), i2.label = 10;
          case 10:
            if (this.progress += 1, v2 = (g2 = h2 || {}).beforeElements, x2 = g2.afterElements, !v2)
              return [3, 14];
            y2 = 0, b2 = v2, i2.label = 11;
          case 11:
            return y2 < b2.length ? (I2 = b2[y2], [4, this.drawNode(I2)]) : [3, 14];
          case 12:
            i2.sent(), i2.label = 13;
          case 13:
            return y2++, [3, 11];
          case 14:
            if (!a2)
              return [3, 18];
            m2 = Object.values ? Object.values(a2) : Object.keys(a2).map(function(t3) {
              return a2[t3];
            }), w2 = 0, S2 = m2, i2.label = 15;
          case 15:
            return w2 < S2.length ? "absolute" === (I2 = S2[w2]).computedStyle.position ? [3, 17] : [4, this.drawNode(I2)] : [3, 18];
          case 16:
            i2.sent(), i2.label = 17;
          case 17:
            return w2++, [3, 15];
          case 18:
            if (!x2)
              return [3, 22];
            z2 = 0, M2 = x2, i2.label = 19;
          case 19:
            return z2 < M2.length ? (I2 = M2[z2], [4, this.drawNode(I2)]) : [3, 22];
          case 20:
            i2.sent(), i2.label = 21;
          case 21:
            return z2++, [3, 19];
          case 22:
            return this.ctx.restore(), [2];
        }
      });
    });
  }, r2.prototype.render = function(t2) {
    var n2 = this;
    return void 0 === t2 && (t2 = 30), new Promise(function(r3, o2) {
      return e(n2, void 0, void 0, function() {
        var e2, n3, s2, a2, h2, d2, c2, l2, f2, u2;
        return i(this, function(i2) {
          switch (i2.label) {
            case 0:
              return e2 = +new Date(), this.init(), [4, (p2 = t2, void 0 === p2 && (p2 = 0), new Promise(function(t3) {
                return setTimeout(t3, p2);
              }))];
            case 1:
              i2.sent(), i2.label = 2;
            case 2:
              if (i2.trys.push([2, 14, , 15]), !this.node)
                return [3, 12];
              if (n3 = this.root.fixedLine || {}, s2 = n3.beforeElements, a2 = n3.afterElements, !s2)
                return [3, 6];
              h2 = 0, d2 = s2, i2.label = 3;
            case 3:
              return h2 < d2.length ? (f2 = d2[h2], [4, this.drawNode(f2, true)]) : [3, 6];
            case 4:
              i2.sent(), i2.label = 5;
            case 5:
              return h2++, [3, 3];
            case 6:
              return [4, this.drawNode(this.node)];
            case 7:
              if (i2.sent(), !a2)
                return [3, 11];
              c2 = 0, l2 = a2, i2.label = 8;
            case 8:
              return c2 < l2.length ? (f2 = l2[c2], [4, this.drawNode(f2, true)]) : [3, 11];
            case 9:
              i2.sent(), i2.label = 10;
            case 10:
              return c2++, [3, 8];
            case 11:
              return r3(this.node), [3, 13];
            case 12:
              this.lifecycle("onEffectFail", "node is empty"), i2.label = 13;
            case 13:
              return [3, 15];
            case 14:
              return u2 = i2.sent(), this.lifecycle("onEffectFail", u2), o2(u2), [3, 15];
            case 15:
              return this.performance && console.log("渲染用时：" + (+new Date() - e2 - 30) + "ms"), [2];
          }
          var p2;
        });
      });
    });
  }, r2.prototype.onEffectFinished = function() {
    var t2 = this, e2 = Object.keys(this.imageBus).map(function(e3) {
      return t2.imageBus[e3];
    });
    return Promise.all(e2);
  }, r2.prototype.destroy = function() {
    this.node = [];
  }, r2.prototype.save = function(t2) {
    try {
      var e2 = t2 || {}, i2 = e2.fileType, n2 = void 0 === i2 ? "png" : i2, r3 = e2.quality, o2 = void 0 === r3 ? 1 : r3;
      return this.canvas.toDataURL("image/" + n2, o2);
    } catch (t3) {
      return this.lifecycle("onEffectFail", "image cross domain"), t3;
    }
  }, r2;
}();
n.WEB == I && (window.Painter = Mt);
exports.Mt = Mt;
