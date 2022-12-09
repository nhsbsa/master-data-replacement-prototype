! function(i, f, d) {
    function p(e, t) {
        return typeof e === t
    }

    function e() {
        var e, t, n, r, o, i;
        for (var a in x)
            if (x.hasOwnProperty(a)) {
                if (e = [], (t = x[a]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (r = p(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (i = e[o].split(".")).length ? S[i[0]] = r : (!S[i[0]] || S[i[0]] instanceof Boolean || (S[i[0]] = new Boolean(S[i[0]])), S[i[0]][i[1]] = r), C.push((r ? "" : "no-") + i.join("-"))
            }
    }

    function t(e) {
        var t = b.className,
            n = S._config.classPrefix || "";
        if (w && (t = t.baseVal), S._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        S._config.enableClasses && (t += " " + n + e.join(" " + n), w ? b.className.baseVal = t : b.className = t)
    }

    function m(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function h(e) {
        return "function" != typeof f.createElement ? f.createElement(e) : w ? f.createElementNS.call(f, "http://www.w3.org/2000/svg", e) : f.createElement.apply(f, arguments)
    }

    function v() {
        var e = f.body;
        return e || ((e = h(w ? "svg" : "body")).fake = !0), e
    }

    function o(e, t, n, r) {
        var o, i, a, s, l = "modernizr",
            c = h("div"),
            u = v();
        if (parseInt(n, 10))
            for (; n--;)(a = h("div")).id = r ? r[n] : l + (n + 1), c.appendChild(a);
        return (o = h("style")).type = "text/css", o.id = "s" + l, (u.fake ? u : c).appendChild(o), u.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(f.createTextNode(e)), c.id = l, u.fake && (u.style.background = "", u.style.overflow = "hidden", s = b.style.overflow, b.style.overflow = "hidden", b.appendChild(u)), i = t(c, e), u.fake ? (u.parentNode.removeChild(u), b.style.overflow = s, b.offsetHeight) : c.parentNode.removeChild(c), !!i
    }

    function a(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function s(e, t, n) {
        var r;
        if ("getComputedStyle" in i) {
            r = getComputedStyle.call(i, e, t);
            var o = i.console;
            if (null !== r) n && (r = r.getPropertyValue(n));
            else if (o) {
                o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else r = !t && e.currentStyle && e.currentStyle[n];
        return r
    }

    function g(e, t) {
        var n = e.length;
        if ("CSS" in i && "supports" in i.CSS) {
            for (; n--;)
                if (i.CSS.supports(a(e[n]), t)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in i) {
            for (var r = []; n--;) r.push("(" + a(e[n]) + ":" + t + ")");
            return o("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == s(e, null, "position")
            })
        }
        return d
    }

    function y(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function l(e, t, n, r) {
        function o() {
            a && (delete j.style, delete j.modElem)
        }
        if (r = !p(r, "undefined") && r, !p(n, "undefined")) {
            var i = g(e, n);
            if (!p(i, "undefined")) return i
        }
        for (var a, s, l, c, u, f = ["modernizr", "tspan", "samp"]; !j.style && f.length;) a = !0, j.modElem = h(f.shift()), j.style = j.modElem.style;
        for (l = e.length, s = 0; s < l; s++)
            if (c = e[s], u = j.style[c], m(c, "-") && (c = y(c)), j.style[c] !== d) {
                if (r || p(n, "undefined")) return o(), "pfx" != t || c;
                try {
                    j.style[c] = n
                } catch (E) {}
                if (j.style[c] != u) return o(), "pfx" != t || c
            } return o(), !1
    }

    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function u(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t) return !1 === n ? e[o] : p(r = t[e[o]], "function") ? c(r, n || t) : r;
        return !1
    }

    function r(e, t, n, r, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + N.join(i + " ") + i).split(" ");
        return p(t, "string") || p(t, "undefined") ? l(a, t, r, o) : u(a = (e + " " + P.join(i + " ") + i).split(" "), t, n)
    }

    function E(e, t, n) {
        return r(e, d, d, t, n)
    }
    var x = [],
        n = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                x.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                x.push({
                    name: null,
                    fn: e
                })
            }
        },
        S = function() {};
    S.prototype = n, S = new S;
    var C = [],
        b = f.documentElement,
        w = "svg" === b.nodeName.toLowerCase();
    w || function(e, a) {
        function f(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function s() {
            var e = w.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function t(e, t) {
            var n = w.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), w.elements = n + " " + e, i(t)
        }

        function d(e) {
            var t = b[e[S]];
            return t || (t = {}, C++, e[S] = C, b[C] = t), t
        }

        function r(e, t, n) {
            return t || (t = a), u ? t.createElement(e) : (n || (n = d(t)), !(r = n.cache[e] ? n.cache[e].cloneNode() : x.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e)).canHaveChildren || E.test(e) || r.tagUrn ? r : n.frag.appendChild(r));
            var r
        }

        function n(e, t) {
            if (e || (e = a), u) return e.createDocumentFragment();
            for (var n = (t = t || d(e)).frag.cloneNode(), r = 0, o = s(), i = o.length; r < i; r++) n.createElement(o[r]);
            return n
        }

        function o(t, n) {
            n.cache || (n.cache = {}, n.createElem = t.createElement, n.createFrag = t.createDocumentFragment, n.frag = n.createFrag()), t.createElement = function(e) {
                return w.shivMethods ? r(e, t, n) : n.createElem(e)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/[\w\-:]+/g, function(e) {
                return n.createElem(e), n.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(w, n.frag)
        }

        function i(e) {
            e || (e = a);
            var t = d(e);
            return !w.shivCSS || c || t.hasCSS || (t.hasCSS = !!f(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || o(e, t), e
        }

        function p(e) {
            for (var t, n = e.getElementsByTagName("*"), r = n.length, o = RegExp("^(?:" + s().join("|") + ")$", "i"), i = []; r--;) t = n[r], o.test(t.nodeName) && i.push(t.applyElement(l(t)));
            return i
        }

        function l(e) {
            for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(_ + ":" + e.nodeName); r--;)(t = n[r]).specified && o.setAttribute(t.nodeName, t.nodeValue);
            return o.style.cssText = e.style.cssText, o
        }

        function m(e) {
            for (var t, n = e.split("{"), r = n.length, o = RegExp("(^|[\\s,>+~])(" + s().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), i = "$1" + _ + "\\:$2"; r--;)(t = n[r] = n[r].split("}"))[t.length - 1] = t[t.length - 1].replace(o, i), n[r] = t.join("}");
            return n.join("{")
        }

        function h(e) {
            for (var t = e.length; t--;) e[t].removeNode()
        }

        function v(s) {
            function l() {
                clearTimeout(e._removeSheetTimer), c && c.removeNode(!0), c = null
            }
            var c, u, e = d(s),
                t = s.namespaces,
                n = s.parentWindow;
            return !j || s.printShived || ("undefined" == typeof t[_] && t.add(_), n.attachEvent("onbeforeprint", function() {
                l();
                for (var e, t, n, r = s.styleSheets, o = [], i = r.length, a = Array(i); i--;) a[i] = r[i];
                for (; n = a.pop();)
                    if (!n.disabled && N.test(n.media)) {
                        try {
                            t = (e = n.imports).length
                        } catch (v) {
                            t = 0
                        }
                        for (i = 0; i < t; i++) a.push(e[i]);
                        try {
                            o.push(n.cssText)
                        } catch (v) {}
                    } o = m(o.reverse().join("")), u = p(s), c = f(s, o)
            }), n.attachEvent("onafterprint", function() {
                h(u), clearTimeout(e._removeSheetTimer), e._removeSheetTimer = setTimeout(l, 500)
            }), s.printShived = !0), s
        }
        var c, u, g = "3.7.3",
            y = e.html5 || {},
            E = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            x = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            S = "_html5shiv",
            C = 0,
            b = {};
        ! function() {
            try {
                var e = a.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    a.createElement("a");
                    var e = a.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (f) {
                u = c = !0
            }
        }();
        var w = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: g,
            shivCSS: !1 !== y.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== y.shivMethods,
            type: "default",
            shivDocument: i,
            createElement: r,
            createDocumentFragment: n,
            addElements: t
        };
        e.html5 = w, i(a);
        var T, N = /^$|\b(?:all|print)\b/,
            _ = "html5shiv",
            j = !(u || (T = a.documentElement, "undefined" == typeof a.namespaces || "undefined" == typeof a.parentWindow || "undefined" == typeof T.applyElement || "undefined" == typeof T.removeNode || "undefined" == typeof e.attachEvent));
        w.type += " print", (w.shivPrint = v)(a), "object" == typeof module && module.exports && (module.exports = w)
    }(void 0 !== i ? i : this, f), S.addTest("history", function() {
        var e = navigator.userAgent;
        return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (i.history && "pushState" in i.history)
    });
    var T = "Moz O ms Webkit",
        N = n._config.usePrefixes ? T.split(" ") : [];
    n._cssomPrefixes = N;
    var _ = {
        elem: h("modernizr")
    };
    S._q.push(function() {
        delete _.elem
    });
    var j = {
        style: _.elem.style
    };
    S._q.unshift(function() {
        delete j.style
    });
    var P = n._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    n._domPrefixes = P, n.testAllProps = r, n.testAllProps = E, S.addTest("flexbox", E("flexBasis", "1px", !0)), S.addTest("flexboxtweener", E("flexAlign", "end", !0)), e(), t(C), delete n.addTest, delete n.addAsyncTest;
    for (var A = 0; A < S._q.length; A++) S._q[A]();
    i.Modernizr = S
}(window, document);