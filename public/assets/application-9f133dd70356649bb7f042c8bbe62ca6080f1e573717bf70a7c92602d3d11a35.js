function nodeListForEach(e, t) {
    if (window.NodeList.prototype.forEach) return e.forEach(t);
    for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e)
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(k, e) {
    function a(e) {
        var t = !!e && "length" in e && e.length,
            n = fe.type(e);
        return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function t(e, n, o) {
        if (fe.isFunction(n)) return fe.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== o
        });
        if (n.nodeType) return fe.grep(e, function(e) {
            return e === n !== o
        });
        if ("string" == typeof n) {
            if (ke.test(n)) return fe.filter(n, e, o);
            n = fe.filter(n, e)
        }
        return fe.grep(e, function(e) {
            return -1 < fe.inArray(e, n) !== o
        })
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        var n = {};
        return fe.each(e.match(Oe) || [], function(e, t) {
            n[t] = !0
        }), n
    }

    function i() {
        oe.addEventListener ? (oe.removeEventListener("DOMContentLoaded", r), k.removeEventListener("load", r)) : (oe.detachEvent("onreadystatechange", r), k.detachEvent("onload", r))
    }

    function r() {
        (oe.addEventListener || "load" === k.event.type || "complete" === oe.readyState) && (i(), fe.ready())
    }

    function l(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var o = "data-" + t.replace(Me, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(o))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? fe.parseJSON(n) : n)
                } catch (i) {}
                fe.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function o(e, t, n, o) {
        if ($e(e)) {
            var i, r, s = fe.expando,
                a = e.nodeType,
                l = a ? fe.cache : e,
                c = a ? e[s] : e[s] && s;
            if (c && l[c] && (o || l[c].data) || n !== undefined || "string" != typeof t) return c || (c = a ? e[s] = ne.pop() || fe.guid++ : s), l[c] || (l[c] = a ? {} : {
                toJSON: fe.noop
            }), "object" != typeof t && "function" != typeof t || (o ? l[c] = fe.extend(l[c], t) : l[c].data = fe.extend(l[c].data, t)), r = l[c], o || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[fe.camelCase(t)] = n), "string" == typeof t ? null == (i = r[t]) && (i = r[fe.camelCase(t)]) : i = r, i
        }
    }

    function s(e, t, n) {
        if ($e(e)) {
            var o, i, r = e.nodeType,
                s = r ? fe.cache : e,
                a = r ? e[fe.expando] : fe.expando;
            if (s[a]) {
                if (t && (o = n ? s[a] : s[a].data)) {
                    i = (t = fe.isArray(t) ? t.concat(fe.map(t, fe.camelCase)) : t in o ? [t] : (t = fe.camelCase(t)) in o ? [t] : t.split(" ")).length;
                    for (; i--;) delete o[t[i]];
                    if (n ? !c(o) : !fe.isEmptyObject(o)) return
                }(n || (delete s[a].data, c(s[a]))) && (r ? fe.cleanData([e], !0) : de.deleteExpando || s != s.window ? delete s[a] : s[a] = undefined)
            }
        }
    }

    function d(e, t, n, o) {
        var i, r = 1,
            s = 20,
            a = o ? function() {
                return o.cur()
            } : function() {
                return fe.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
            u = (fe.cssNumber[t] || "px" !== c && +l) && Ve.exec(fe.css(e, t));
        if (u && u[3] !== c)
            for (c = c || u[3], n = n || [], u = +l || 1; u /= r = r || ".5", fe.style(e, t, u + c), r !== (r = a() / l) && 1 !== r && --s;);
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], o && (o.unit = c, o.start = u, o.end = i)), i
    }

    function g(e) {
        var t = Re.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function v(e, t) {
        var n, o, i = 0,
            r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (o = n[i]); i++) !t || fe.nodeName(o, t) ? r.push(o) : fe.merge(r, v(o, t));
        return t === undefined || t && fe.nodeName(e, t) ? fe.merge([e], r) : r
    }

    function y(e, t) {
        for (var n, o = 0; null != (n = e[o]); o++) fe._data(n, "globalEval", !t || fe._data(t[o], "globalEval"))
    }

    function b(e) {
        Ue.test(e.type) && (e.defaultChecked = e.checked)
    }

    function m(e, t, n, o, i) {
        for (var r, s, a, l, c, u, d, p = e.length, f = g(t), h = [], m = 0; m < p; m++)
            if ((s = e[m]) || 0 === s)
                if ("object" === fe.type(s)) fe.merge(h, s.nodeType ? [s] : s);
                else if (ze.test(s)) {
            for (l = l || f.appendChild(t.createElement("div")), c = (Ke.exec(s) || ["", ""])[1].toLowerCase(), d = Xe[c] || Xe._default, l.innerHTML = d[1] + fe.htmlPrefilter(s) + d[2], r = d[0]; r--;) l = l.lastChild;
            if (!de.leadingWhitespace && We.test(s) && h.push(t.createTextNode(We.exec(s)[0])), !de.tbody)
                for (r = (s = "table" !== c || Ye.test(s) ? "<table>" !== d[1] || Ye.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; r--;) fe.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
            for (fe.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = f.lastChild
        } else h.push(t.createTextNode(s));
        for (l && f.removeChild(l), de.appendChecked || fe.grep(v(h, "input"), b), m = 0; s = h[m++];)
            if (o && -1 < fe.inArray(s, o)) i && i.push(s);
            else if (a = fe.contains(s.ownerDocument, s), l = v(f.appendChild(s), "script"), a && y(l), n)
            for (r = 0; s = l[r++];) qe.test(s.type || "") && n.push(s);
        return l = null, f
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function h() {
        try {
            return oe.activeElement
        } catch (e) {}
    }

    function w(e, t, n, o, i, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (o = o || n, n = undefined), t) w(e, a, n, o, t[a], r);
            return e
        }
        if (null == o && null == i ? (i = n, o = n = undefined) : null == i && ("string" == typeof n ? (i = o, o = undefined) : (i = o, o = n, n = undefined)), !1 === i) i = f;
        else if (!i) return e;
        return 1 === r && (s = i, (i = function(e) {
            return fe().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, i, o, n)
        })
    }

    function E(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
    }

    function T(e) {
        var t = at.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function S(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, o, i, r = fe._data(e),
                s = fe._data(t, r),
                a = r.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (o = 0, i = a[n].length; o < i; o++) fe.event.add(t, n, a[n][o]);
            s.data && (s.data = fe.extend({}, s.data))
        }
    }

    function C(e, t) {
        var n, o, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[fe.expando]) {
                for (o in (i = fe._data(t)).events) fe.removeEvent(t, o, i.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (x(t).text = e.text, T(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ue.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function L(n, o, i, r) {
        o = re.apply([], o);
        var e, t, s, a, l, c, u = 0,
            d = n.length,
            p = d - 1,
            f = o[0],
            h = fe.isFunction(f);
        if (h || 1 < d && "string" == typeof f && !de.checkClone && st.test(f)) return n.each(function(e) {
            var t = n.eq(e);
            h && (o[0] = f.call(this, e, t.html())), L(t, o, i, r)
        });
        if (d && (e = (c = m(o, n[0].ownerDocument, !1, n, r)).firstChild, 1 === c.childNodes.length && (c = e), e || r)) {
            for (s = (a = fe.map(v(c, "script"), x)).length; u < d; u++) t = c, u !== p && (t = fe.clone(t, !0, !0), s && fe.merge(a, v(t, "script"))), i.call(n[u], t, u);
            if (s)
                for (l = a[a.length - 1].ownerDocument, fe.map(a, T), u = 0; u < s; u++) t = a[u], qe.test(t.type || "") && !fe._data(t, "globalEval") && fe.contains(l, t) && (t.src ? fe._evalUrl && fe._evalUrl(t.src) : fe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(lt, "")));
            c = e = null
        }
        return n
    }

    function _(e, t, n) {
        for (var o, i = t ? fe.filter(t, e) : e, r = 0; null != (o = i[r]); r++) n || 1 !== o.nodeType || fe.cleanData(v(o)), o.parentNode && (n && fe.contains(o.ownerDocument, o) && y(v(o, "script")), o.parentNode.removeChild(o));
        return e
    }

    function A(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body),
            o = fe.css(n[0], "display");
        return n.detach(), o
    }

    function O(e) {
        var t = oe,
            n = dt[e];
        return n || ("none" !== (n = A(e, t)) && n || ((t = ((ut = (ut || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ut[0].contentDocument).document).write(), t.close(), n = A(e, t), ut.detach()), dt[e] = n), n
    }

    function j(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function $(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--;)
            if ((e = St[n] + t) in Ct) return e
    }

    function D(e, t) {
        for (var n, o, i, r = [], s = 0, a = e.length; s < a; s++)(o = e[s]).style && (r[s] = fe._data(o, "olddisplay"), n = o.style.display, t ? (r[s] || "none" !== n || (o.style.display = ""), "" === o.style.display && Fe(o) && (r[s] = fe._data(o, "olddisplay", O(o.nodeName)))) : (i = Fe(o), (n && "none" !== n || !i) && fe._data(o, "olddisplay", i ? n : fe.css(o, "display"))));
        for (s = 0; s < a; s++)(o = e[s]).style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function M(e, t, n) {
        var o = xt.exec(t);
        return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
    }

    function N(e, t, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += fe.css(e, n + Pe[r], !0, i)), o ? ("content" === n && (s -= fe.css(e, "padding" + Pe[r], !0, i)), "margin" !== n && (s -= fe.css(e, "border" + Pe[r] + "Width", !0, i))) : (s += fe.css(e, "padding" + Pe[r], !0, i), "padding" !== n && (s += fe.css(e, "border" + Pe[r] + "Width", !0, i)));
        return s
    }

    function G(e, t, n) {
        var o = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = gt(e),
            s = de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r);
        if (i <= 0 || null == i) {
            if (((i = vt(e, t, r)) < 0 || null == i) && (i = e.style[t]), ft.test(i)) return i;
            o = s && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + N(e, t, n || (s ? "border" : "content"), o, r) + "px"
    }

    function H(e, t, n, o, i) {
        return new H.prototype.init(e, t, n, o, i)
    }

    function I() {
        return k.setTimeout(function() {
            Lt = undefined
        }), Lt = fe.now()
    }

    function V(e, t) {
        var n, o = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = Pe[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function P(e, t, n) {
        for (var o, i = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, s = i.length; r < s; r++)
            if (o = i[r].call(n, t, e)) return o
    }

    function F(t, e, n) {
        var o, i, r, s, a, l, c, u = this,
            d = {},
            p = t.style,
            f = t.nodeType && Fe(t),
            h = fe._data(t, "fxshow");
        for (o in n.queue || (null == (a = fe._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, fe.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = fe.css(t, "display")) ? fe._data(t, "olddisplay") || O(t.nodeName) : c) && "none" === fe.css(t, "float") && (de.inlineBlockNeedsLayout && "inline" !== O(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || u.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), e)
            if (i = e[o], Mt.exec(i)) {
                if (delete e[o], r = r || "toggle" === i, i === (f ? "hide" : "show")) {
                    if ("show" !== i || !h || h[o] === undefined) continue;
                    f = !0
                }
                d[o] = h && h[o] || fe.style(t, o)
            } else c = undefined;
        if (fe.isEmptyObject(d)) "inline" === ("none" === c ? O(t.nodeName) : c) && (p.display = c);
        else
            for (o in h ? "hidden" in h && (f = h.hidden) : h = fe._data(t, "fxshow", {}), r && (h.hidden = !f), f ? fe(t).show() : u.done(function() {
                    fe(t).hide()
                }), u.done(function() {
                    var e;
                    for (e in fe._removeData(t, "fxshow"), d) fe.style(t, e, d[e])
                }), d) s = P(f ? h[o] : 0, o, u), o in h || (h[o] = s.start, f && (s.end = s.start, s.start = "width" === o || "height" === o ? 1 : 0))
    }

    function B(e, t) {
        var n, o, i, r, s;
        for (n in e)
            if (i = t[o = fe.camelCase(n)], r = e[n], fe.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (s = fe.cssHooks[o]) && "expand" in s)
                for (n in r = s.expand(r), delete e[o], r) n in e || (e[n] = r[n], t[n] = i);
            else t[o] = i
    }

    function U(r, e, t) {
        var n, s, o = 0,
            i = U.prefilters.length,
            a = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Lt || I(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), o = 0, i = c.tweens.length; o < i; o++) c.tweens[o].run(n);
                return a.notifyWith(r, [c, n, t]), n < 1 && i ? t : (a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: fe.extend({}, e),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Lt || I(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = fe.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this
                }
            }),
            u = c.props;
        for (B(u, c.opts.specialEasing); o < i; o++)
            if (n = U.prefilters[o].call(c, r, u, c.opts)) return fe.isFunction(n.stop) && (fe._queueHooks(c.elem, c.opts.queue).stop = fe.proxy(n.stop, n)), n;
        return fe.map(u, P, c), fe.isFunction(c.opts.start) && c.opts.start.call(r, c), fe.fx.timer(fe.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function K(e) {
        return fe.attr(e, "class") || ""
    }

    function q(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, o = 0,
                i = e.toLowerCase().match(Oe) || [];
            if (fe.isFunction(t))
                for (; n = i[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function W(t, i, r, s) {
        function a(e) {
            var o;
            return l[e] = !0, fe.each(t[e] || [], function(e, t) {
                var n = t(i, r, s);
                return "string" != typeof n || c || l[n] ? c ? !(o = n) : void 0 : (i.dataTypes.unshift(n), a(n), !1)
            }), o
        }
        var l = {},
            c = t === sn;
        return a(i.dataTypes[0]) || !l["*"] && a("*")
    }

    function R(e, t) {
        var n, o, i = fe.ajaxSettings.flatOptions || {};
        for (o in t) t[o] !== undefined && ((i[o] ? e : n || (n = {}))[o] = t[o]);
        return n && fe.extend(!0, e, n), e
    }

    function X(e, t, n) {
        for (var o, i, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    l.unshift(s);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                o || (o = s)
            }
            r = r || o
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function z(e, t, n, o) {
        var i, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r]))
                for (i in c)
                    if ((a = i.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[i] : !0 !== c[i] && (r = a[0], u.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }

    function J(e) {
        if (!fe.contains(e.ownerDocument || oe, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === Y(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Q(n, e, o, i) {
        var t;
        if (fe.isArray(e)) fe.each(e, function(e, t) {
            o || dn.test(n) ? i(n, t) : Q(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
        });
        else if (o || "object" !== fe.type(e)) i(n, e);
        else
            for (t in e) Q(n + "[" + t + "]", e[t], o, i)
    }

    function Z() {
        try {
            return new k.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new k.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        oe = k.document,
        ie = ne.slice,
        re = ne.concat,
        se = ne.push,
        ae = ne.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        de = {},
        pe = "1.12.4",
        fe = function(e, t) {
            return new fe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    fe.fn = fe.prototype = {
        jquery: pe,
        constructor: fe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(n) {
            return this.pushStack(fe.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: ne.sort,
        splice: ne.splice
    }, fe.extend = fe.fn.extend = function(e) {
        var t, n, o, i, r, s, a = e || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || fe.isFunction(a) || (a = {}), l === c && (a = this, l--); l < c; l++)
            if (null != (r = arguments[l]))
                for (i in r) t = a[i], a !== (o = r[i]) && (u && o && (fe.isPlainObject(o) || (n = fe.isArray(o))) ? (n ? (n = !1, s = t && fe.isArray(t) ? t : []) : s = t && fe.isPlainObject(t) ? t : {}, a[i] = fe.extend(u, s, o)) : o !== undefined && (a[i] = o));
        return a
    }, fe.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === fe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !fe.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ue.call(e, t);
            for (t in e);
            return t === undefined || ue.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && fe.trim(e) && (k.execScript || function(e) {
                k.eval.call(k, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, o = 0;
            if (a(e))
                for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var o;
            if (t) {
                if (ae) return ae.call(t, e, n);
                for (o = t.length, n = n ? n < 0 ? Math.max(0, o + n) : n : 0; n < o; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, i = e.length; o < n;) e[i++] = t[o++];
            if (n != n)
                for (; t[o] !== undefined;) e[i++] = t[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var o = [], i = 0, r = e.length, s = !n; i < r; i++) !t(e[i], i) !== s && o.push(e[i]);
            return o
        },
        map: function(e, t, n) {
            var o, i, r = 0,
                s = [];
            if (a(e))
                for (o = e.length; r < o; r++) null != (i = t(e[r], r, n)) && s.push(i);
            else
                for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, o, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), fe.isFunction(e) ? (n = ie.call(arguments, 2), (o = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }).guid = e.guid = e.guid || fe.guid++, o) : undefined
        },
        now: function() {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(n) {
        function w(e, t, n, o) {
            var i, r, s, a, l, c, u, d, p = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!o && ((t ? t.ownerDocument || t : P) !== $ && j(t), t = t || $, M)) {
                if (11 !== f && (c = ve.exec(e)))
                    if (i = c[1]) {
                        if (9 === f) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (p && (s = p.getElementById(i)) && I(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = c[3]) && v.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                    } if (v.qsa && !q[e + " "] && (!N || !N.test(e))) {
                    if (1 !== f) p = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = V), r = (u = S(e)).length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + g(u[r]);
                        d = u.join(","), p = ye.test(e) && m(t.parentNode) || t
                    }
                    if (d) try {
                        return Q.apply(n, p.querySelectorAll(d)), n
                    } catch (h) {} finally {
                        a === V && t.removeAttribute("id")
                    }
                }
            }
            return L(e.replace(ae, "$1"), t, n, o)
        }

        function e() {
            function n(e, t) {
                return o.push(e + " ") > x.cacheLength && delete n[o.shift()], n[e + " "] = t
            }
            var o = [];
            return n
        }

        function l(e) {
            return e[V] = !0, e
        }

        function i(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) x.attrHandle[n[o]] = t
        }

        function c(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || R) - (~e.sourceIndex || R);
            if (o) return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function o(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function r(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function s(s) {
            return l(function(r) {
                return r = +r, l(function(e, t) {
                    for (var n, o = s([], e.length, r), i = o.length; i--;) e[n = o[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function m(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function a() {}

        function g(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
            return o
        }

        function d(a, e, t) {
            var l = e.dir,
                c = t && "parentNode" === l,
                u = B++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || c) return a(e, t, n)
            } : function(e, t, n) {
                var o, i, r, s = [F, u];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || c) {
                            if ((o = (i = (r = e[V] || (e[V] = {}))[e.uniqueID] || (r[e.uniqueID] = {}))[l]) && o[0] === F && o[1] === u) return s[2] = o[2];
                            if ((i[l] = s)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function p(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var o = i.length; o--;)
                    if (!i[o](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function y(e, t, n) {
            for (var o = 0, i = t.length; o < i; o++) w(e, t[o], n);
            return n
        }

        function E(e, t, n, o, i) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, o, i) || (s.push(r), c && t.push(a)));
            return s
        }

        function b(f, h, m, g, v, e) {
            return g && !g[V] && (g = b(g)), v && !v[V] && (v = b(v, e)), l(function(e, t, n, o) {
                var i, r, s, a = [],
                    l = [],
                    c = t.length,
                    u = e || y(h || "*", n.nodeType ? [n] : n, []),
                    d = !f || !e && h ? u : E(u, a, f, n, o),
                    p = m ? v || (e ? f : c || g) ? [] : t : d;
                if (m && m(d, p, n, o), g)
                    for (i = E(p, l), g(i, [], n, o), r = i.length; r--;)(s = i[r]) && (p[l[r]] = !(d[l[r]] = s));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (i = [], r = p.length; r--;)(s = p[r]) && i.push(d[r] = s);
                            v(null, p = [], i, o)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (i = v ? ee(e, s) : a[r]) && (e[i] = !(t[i] = s))
                    }
                } else p = E(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, o) : Q.apply(t, p)
            })
        }

        function f(e) {
            for (var i, t, n, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = d(function(e) {
                    return e === i
                }, s, !0), c = d(function(e) {
                    return -1 < ee(i, e)
                }, s, !0), u = [function(e, t, n) {
                    var o = !r && (n || t !== _) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n));
                    return i = null, o
                }]; a < o; a++)
                if (t = x.relative[e[a].type]) u = [d(p(u), t)];
                else {
                    if ((t = x.filter[e[a].type].apply(null, e[a].matches))[V]) {
                        for (n = ++a; n < o && !x.relative[e[n].type]; n++);
                        return b(1 < a && p(u), 1 < a && g(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), t, a < n && f(e.slice(a, n)), n < o && f(e = e.slice(n)), n < o && g(e))
                    }
                    u.push(t)
                } return p(u)
        }

        function u(g, v) {
            var y = 0 < v.length,
                b = 0 < g.length,
                e = function(e, t, n, o, i) {
                    var r, s, a, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        p = _,
                        f = e || b && x.find.TAG("*", i),
                        h = F += null == p ? 1 : Math.random() || .1,
                        m = f.length;
                    for (i && (_ = t === $ || t || i); c !== m && null != (r = f[c]); c++) {
                        if (b && r) {
                            for (s = 0, t || r.ownerDocument === $ || (j(r), n = !M); a = g[s++];)
                                if (a(r, t || $, n)) {
                                    o.push(r);
                                    break
                                } i && (F = h)
                        }
                        y && ((r = !a && r) && l--, e && u.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = Y.call(o));
                            d = E(d)
                        }
                        Q.apply(o, d), i && !e && 0 < d.length && 1 < l + v.length && w.uniqueSort(o)
                    }
                    return i && (F = h, _ = p), u
                };
            return y ? l(e) : e
        }
        var h, v, x, k, T, S, C, L, _, A, O, j, $, D, M, N, G, H, I, V = "sizzle" + 1 * new Date,
            P = n.document,
            F = 0,
            B = 0,
            U = e(),
            K = e(),
            q = e(),
            W = function(e, t) {
                return e === t && (O = !0), 0
            },
            R = 1 << 31,
            X = {}.hasOwnProperty,
            z = [],
            Y = z.pop,
            J = z.push,
            Q = z.push,
            Z = z.slice,
            ee = function(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            re = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            pe = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Ee = function(e, t, n) {
                var o = "0x" + t - 65536;
                return o != o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            },
            xe = function() {
                j()
            };
        try {
            Q.apply(z = Z.call(P.childNodes), P.childNodes), z[P.childNodes.length].nodeType
        } catch (ke) {
            Q = {
                apply: z.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];);
                    e.length = n - 1
                }
            }
        }
        for (h in v = w.support = {}, T = w.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, j = w.setDocument = function(e) {
                var t, n, o = e ? e.ownerDocument || e : P;
                return o !== $ && 9 === o.nodeType && o.documentElement && (D = ($ = o).documentElement, M = !T($), (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), v.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), v.getElementsByTagName = i(function(e) {
                    return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length
                }), v.getElementsByClassName = ge.test($.getElementsByClassName), v.getById = i(function(e) {
                    return D.appendChild(e).id = V, !$.getElementsByName || !$.getElementsByName(V).length
                }), v.getById ? (x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && M) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(we, Ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var n = e.replace(we, Ee);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), x.find.TAG = v.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, o = [],
                        i = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                    return o
                }, x.find.CLASS = v.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && M) return t.getElementsByClassName(e)
                }, G = [], N = [], (v.qsa = ge.test($.querySelectorAll)) && (i(function(e) {
                    D.appendChild(e).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + V + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + V + "+*").length || N.push(".#.+[+~]")
                }), i(function(e) {
                    var t = $.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                })), (v.matchesSelector = ge.test(H = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function(e) {
                    v.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), G.push("!=", re)
                }), N = N.length && new RegExp(N.join("|")), G = G.length && new RegExp(G.join("|")), t = ge.test(D.compareDocumentPosition), I = t || ge.test(D.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        o = t && t.parentNode;
                    return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t) return O = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === P && I(P, e) ? -1 : t === $ || t.ownerDocument === P && I(P, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return O = !0, 0;
                    var n, o = 0,
                        i = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !r) return e === $ ? -1 : t === $ ? 1 : i ? -1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (i === r) return c(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[o] === a[o];) o++;
                    return o ? c(s[o], a[o]) : s[o] === P ? -1 : a[o] === P ? 1 : 0
                }), $
            }, w.matches = function(e, t) {
                return w(e, null, null, t)
            }, w.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== $ && j(e), t = t.replace(ue, "='$1']"), v.matchesSelector && M && !q[t + " "] && (!G || !G.test(t)) && (!N || !N.test(t))) try {
                    var n = H.call(e, t);
                    if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (ke) {}
                return 0 < w(t, $, null, [e]).length
            }, w.contains = function(e, t) {
                return (e.ownerDocument || e) !== $ && j(e), I(e, t)
            }, w.attr = function(e, t) {
                (e.ownerDocument || e) !== $ && j(e);
                var n = x.attrHandle[t.toLowerCase()],
                    o = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !M) : undefined;
                return o !== undefined ? o : v.attributes || !M ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, w.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, w.uniqueSort = function(e) {
                var t, n = [],
                    o = 0,
                    i = 0;
                if (O = !v.detectDuplicates, A = !v.sortStable && e.slice(0), e.sort(W), O) {
                    for (; t = e[i++];) t === e[i] && (o = n.push(i));
                    for (; o--;) e.splice(n[o], 1)
                }
                return A = null, e
            }, k = w.getText = function(e) {
                var t, n = "",
                    o = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[o++];) n += k(t);
                return n
            }, (x = w.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, Ee), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, Ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, o, i) {
                        return function(e) {
                            var t = w.attr(e, n);
                            return null == t ? "!=" === o : !o || (t += "", "=" === o ? t === i : "!=" === o ? t !== i : "^=" === o ? i && 0 === t.indexOf(i) : "*=" === o ? i && -1 < t.indexOf(i) : "$=" === o ? i && t.slice(-i.length) === i : "~=" === o ? -1 < (" " + t.replace(se, " ") + " ").indexOf(i) : "|=" === o && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, m, g) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var o, i, r, s, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                p = !n && !b,
                                f = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                        l = c = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && p) {
                                    for (f = (a = (o = (i = (r = (s = u)[V] || (s[V] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === F && o[1]) && o[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++f && s === e) {
                                            i[h] = [F, a, f];
                                            break
                                        }
                                } else if (p && (f = a = (o = (i = (r = (s = e)[V] || (s[V] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === F && o[1]), !1 === f)
                                    for (;
                                        (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (p && ((i = (r = s[V] || (s[V] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [F, f]), s !== e)););
                                return (f -= g) === m || f % m == 0 && 0 <= f / m
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                        return s[V] ? s(r) : 1 < s.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(
                            e.toLowerCase()) ? l(function(e, t) {
                            for (var n, o = s(e, r), i = o.length; i--;) e[n = ee(e, o[i])] = !(t[n] = o[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: l(function(e) {
                        var o = [],
                            i = [],
                            a = C(e.replace(ae, "$1"));
                        return a[V] ? l(function(e, t, n, o) {
                            for (var i, r = a(e, null, o, []), s = e.length; s--;)(i = r[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return o[0] = e, a(o, null, n, i), o[0] = null, !i.pop()
                        }
                    }),
                    has: l(function(t) {
                        return function(e) {
                            return 0 < w(t, e).length
                        }
                    }),
                    contains: l(function(t) {
                        return t = t.replace(we, Ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || k(e)).indexOf(t)
                            }
                    }),
                    lang: l(function(n) {
                        return pe.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(we, Ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === D
                    },
                    focus: function(e) {
                        return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var o = n < 0 ? n + t : n; 0 <= --o;) e.push(o);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[h] = o(h);
        for (h in {
                submit: !0,
                reset: !0
            }) x.pseudos[h] = r(h);
        return a.prototype = x.filters = x.pseudos, x.setFilters = new a, S = w.tokenize = function(e, t) {
            var n, o, i, r, s, a, l, c = K[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = x.preFilter; s;) {
                for (r in n && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), a.push(i = [])), n = !1, (o = ce.exec(s)) && (n = o.shift(), i.push({
                        value: n,
                        type: o[0].replace(ae, " ")
                    }), s = s.slice(n.length)), x.filter) !(o = fe[r].exec(s)) || l[r] && !(o = l[r](o)) || (n = o.shift(), i.push({
                    value: n,
                    type: r,
                    matches: o
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? w.error(e) : K(e, a).slice(0)
        }, C = w.compile = function(e, t) {
            var n, o = [],
                i = [],
                r = q[e + " "];
            if (!r) {
                for (t || (t = S(e)), n = t.length; n--;)(r = f(t[n]))[V] ? o.push(r) : i.push(r);
                (r = q(e, u(i, o))).selector = e
            }
            return r
        }, L = w.select = function(e, t, n, o) {
            var i, r, s, a, l, c = "function" == typeof e && e,
                u = !o && S(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && v.getById && 9 === t.nodeType && M && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(we, Ee), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : r.length; i-- && (s = r[i], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (o = l(s.matches[0].replace(we, Ee), ye.test(r[0].type) && m(t.parentNode) || t))) {
                        if (r.splice(i, 1), !(e = o.length && g(r))) return Q.apply(n, o), n;
                        break
                    }
            }
            return (c || C(e, u))(o, t, !M, n, !t || ye.test(e) && m(t.parentNode) || t), n
        }, v.sortStable = V.split("").sort(W).join("") === V, v.detectDuplicates = !!O, j(), v.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), v.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function(e, t, n) {
            var o;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), w
    }(k);
    fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
    var be = function(e, t, n) {
            for (var o = [], i = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && fe(e).is(n)) break;
                    o.push(e)
                } return o
        },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ee = fe.expr.match.needsContext,
        xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ke = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? fe.find.matchesSelector(o, e) ? [o] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function(e) {
            var t, n = [],
                o = this,
                i = o.length;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (fe.contains(o[t], this)) return !0
            }));
            for (t = 0; t < i; t++) fe.find(e, o[t], n);
            return (n = this.pushStack(1 < i ? fe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && Ee.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var Te, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (fe.fn.init = function(e, t, n) {
        var o, i;
        if (!e) return this;
        if (n = n || Te, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this));
        if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Se.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (o[1]) {
            if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), xe.test(o[1]) && fe.isPlainObject(t))
                for (o in t) fe.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this
        }
        if ((i = oe.getElementById(o[2])) && i.parentNode) {
            if (i.id !== o[2]) return Te.find(e);
            this.length = 1, this[0] = i
        }
        return this.context = oe, this.selector = e, this
    }).prototype = fe.fn, Te = fe(oe);
    var Ce = /^(?:parents|prev(?:Until|All))/,
        Le = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function(e) {
            var t, n = fe(e, this),
                o = n.length;
            return this.filter(function() {
                for (t = 0; t < o; t++)
                    if (fe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, o = 0, i = this.length, r = [], s = Ee.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; o < i; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(1 < r.length ? fe.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function(o, i) {
        fe.fn[o] = function(e, t) {
            var n = fe.map(this, i, e);
            return "Until" !== o.slice(-5) && (t = e), t && "string" == typeof t && (n = fe.filter(t, n)), 1 < this.length && (Le[o] || (n = fe.uniqueSort(n)), Ce.test(o) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var _e, Ae, Oe = /\S+/g;
    for (Ae in fe.Callbacks = function(o) {
            o = "string" == typeof o ? u(o) : fe.extend({}, o);
            var i, e, t, n, r = [],
                s = [],
                a = -1,
                l = function() {
                    for (n = o.once, t = i = !0; s.length; a = -1)
                        for (e = s.shift(); ++a < r.length;) !1 === r[a].apply(e[0], e[1]) && o.stopOnFalse && (a = r.length, e = !1);
                    o.memory || (e = !1), i = !1, n && (r = e ? [] : "")
                },
                c = {
                    add: function() {
                        return r && (e && !i && (a = r.length - 1, s.push(e)), function n(e) {
                            fe.each(e, function(e, t) {
                                fe.isFunction(t) ? o.unique && c.has(t) || r.push(t) : t && t.length && "string" !== fe.type(t) && n(t)
                            })
                        }(arguments), e && !i && l()), this
                    },
                    remove: function() {
                        return fe.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = fe.inArray(t, r, n));) r.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < fe.inArray(e, r) : 0 < r.length
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return n = s = [], r = e = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return n = !0, e || c.disable(), this
                    },
                    locked: function() {
                        return !!n
                    },
                    fireWith: function(e, t) {
                        return n || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), i || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return c
        }, fe.extend({
            Deferred: function(e) {
                var r = [
                        ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", fe.Callbacks("memory")]
                    ],
                    i = "pending",
                    s = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var i = arguments;
                            return fe.Deferred(function(o) {
                                fe.each(r, function(e, t) {
                                    var n = fe.isFunction(i[e]) && i[e];
                                    a[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && fe.isFunction(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[t[0] + "With"](this === s ? o.promise() : this, n ? [e] : arguments)
                                    })
                                }), i = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? fe.extend(e, s) : s
                        }
                    },
                    a = {};
                return s.pipe = s.then, fe.each(r, function(e, t) {
                    var n = t[2],
                        o = t[3];
                    s[t[1]] = n.add, o && n.add(function() {
                        i = o
                    }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? s : this, arguments), this
                    }, a[t[0] + "With"] = n.fireWith
                }), s.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var i, t, n, o = 0,
                    r = ie.call(arguments),
                    s = r.length,
                    a = 1 !== s || e && fe.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : fe.Deferred(),
                    c = function(t, n, o) {
                        return function(e) {
                            n[t] = this, o[t] = 1 < arguments.length ? ie.call(arguments) : e, o === i ? l.notifyWith(n, o) : --a || l.resolveWith(n, o)
                        }
                    };
                if (1 < s)
                    for (i = new Array(s), t = new Array(s), n = new Array(s); o < s; o++) r[o] && fe.isFunction(r[o].promise) ? r[o].promise().progress(c(o, t, i)).done(c(o, n, r)).fail(l.reject) : --a;
                return a || l.resolveWith(n, r), l.promise()
            }
        }), fe.fn.ready = function(e) {
            return fe.ready.promise().done(e), this
        }, fe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? fe.readyWait++ : fe.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0) !== e && 0 < --fe.readyWait || (_e.resolveWith(oe, [fe]), fe.fn.triggerHandler && (fe(oe).triggerHandler("ready"), fe(oe).off("ready")))
            }
        }), fe.ready.promise = function(e) {
            if (!_e)
                if (_e = fe.Deferred(), "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll) k.setTimeout(fe.ready);
                else if (oe.addEventListener) oe.addEventListener("DOMContentLoaded", r), k.addEventListener("load", r);
            else {
                oe.attachEvent("onreadystatechange", r), k.attachEvent("onload", r);
                var t = !1;
                try {
                    t = null == k.frameElement && oe.documentElement
                } catch (n) {}
                t && t.doScroll && function o() {
                    if (!fe.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (n) {
                            return k.setTimeout(o, 50)
                        }
                        i(), fe.ready()
                    }
                }()
            }
            return _e.promise(e)
        }, fe.ready.promise(), fe(de)) break;
    de.ownFirst = "0" === Ae, de.inlineBlockNeedsLayout = !1, fe(function() {
            var e, t, n, o;
            (n = oe.getElementsByTagName("body")[0]) && n.style && (t = oe.createElement("div"), (o = oe.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(o))
        }),
        function() {
            var e = oe.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var je, $e = function(e) {
            var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /([A-Z])/g;
    fe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando]) && !c(e)
        },
        data: function(e, t, n) {
            return o(e, t, n)
        },
        removeData: function(e, t) {
            return s(e, t)
        },
        _data: function(e, t, n) {
            return o(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return s(e, t, !0)
        }
    }), fe.fn.extend({
        data: function(e, t) {
            var n, o, i, r = this[0],
                s = r && r.attributes;
            if (e !== undefined) return "object" == typeof e ? this.each(function() {
                fe.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                fe.data(this, e, t)
            }) : r ? l(r, e, fe.data(r, e)) : undefined;
            if (this.length && (i = fe.data(r), 1 === r.nodeType && !fe._data(r, "parsedAttrs"))) {
                for (n = s.length; n--;) s[n] && 0 === (o = s[n].name).indexOf("data-") && l(r, o = fe.camelCase(o.slice(5)), i[o]);
                fe._data(r, "parsedAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                fe.removeData(this, e)
            })
        }
    }), fe.extend({
        queue: function(e, t, n) {
            var o;
            if (e) return t = (t || "fx") + "queue", o = fe._data(e, t), n && (!o || fe.isArray(n) ? o = fe._data(e, t, fe.makeArray(n)) : o.push(n)), o || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = fe._queueHooks(e, t),
                s = function() {
                    fe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, s, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return fe._data(e, n) || fe._data(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    fe._removeData(e, t + "queue"), fe._removeData(e, n)
                })
            })
        }
    }), fe.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? fe.queue(this[0], t) : n === undefined ? this : this.each(function() {
                var e = fe.queue(this, t, n);
                fe._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && fe.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, o = 1,
                i = fe.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = fe._data(r[s], e + "queueHooks")) && n.empty && (o++, n.empty.add(a));
            return a(), i.promise(t)
        }
    }), de.shrinkWrapBlocks = function() {
        return null != je ? je : (je = !1, (t = oe.getElementsByTagName("body")[0]) && t.style ? (e = oe.createElement("div"), (n = oe.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(oe.createElement("div")).style.width = "5px", je = 3 !== e.offsetWidth), t.removeChild(n), je) : void 0);
        var e, t, n
    };
    var Ne, Ge, He, Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ve = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
        Pe = ["Top", "Right", "Bottom", "Left"],
        Fe = function(e, t) {
            return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
        },
        Be = function(e, t, n, o, i, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === fe.type(n))
                for (a in i = !0, n) Be(e, t, a, n[a], !0, r, s);
            else if (o !== undefined && (i = !0, fe.isFunction(o) || (s = !0), c && (s ? (t.call(e, o), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(fe(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? o : o.call(e[a], a, t(e[a], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Ue = /^(?:checkbox|radio)$/i,
        Ke = /<([\w:-]+)/,
        qe = /^$|\/(?:java|ecma)script/i,
        We = /^\s+/,
        Re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Ne = oe.createElement("div"), Ge = oe.createDocumentFragment(), He = oe.createElement("input"), Ne.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === Ne.firstChild.nodeType, de.tbody = !Ne.getElementsByTagName("tbody").length, de.htmlSerialize = !!Ne.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== oe.createElement("nav").cloneNode(!0).outerHTML, He.type = "checkbox", He.checked = !0, Ge.appendChild(He), de.appendChecked = He.checked, Ne.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!Ne.cloneNode(!0).lastChild.defaultValue, Ge.appendChild(Ne), (He = oe.createElement("input")).setAttribute("type", "radio"), He.setAttribute("checked", "checked"), He.setAttribute("name", "t"), Ne.appendChild(He), de.checkClone = Ne.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!Ne.addEventListener, Ne[fe.expando] = 1, de.attributes = !Ne.getAttribute(fe.expando);
    var Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var ze = /<|&#?\w+;/,
        Ye = /<tbody/i;
    ! function() {
        var e, t, n = oe.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (de[e] = t in k) || (n.setAttribute(t, "t"), de[e] = !1 === n.attributes[t].expando);
        n = null
    }();
    var Je = /^(?:input|select|textarea)$/i,
        Qe = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^(?:focusinfocus|focusoutblur)$/,
        tt = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, o, i) {
            var r, s, a, l, c, u, d, p, f, h, m, g = fe._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, i = l.selector), n.guid || (n.guid = fe.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || ((u = g.handle = function(e) {
                        return void 0 === fe || e && fe.event.triggered === e.type ? undefined : fe.event.dispatch.apply(u.elem, arguments)
                    }).elem = e), a = (t = (t || "").match(Oe) || [""]).length; a--;) f = m = (r = tt.exec(t[a]) || [])[1], h = (r[2] || "").split(".").sort(), f && (c = fe.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = fe.event.special[f] || {}, d = fe.extend({
                    type: f,
                    origType: m,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && fe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (p = s[f]) || ((p = s[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, o, h, u) || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, o, i) {
            var r, s, a, l, c, u, d, p, f, h, m, g = fe.hasData(e) && fe._data(e);
            if (g && (u = g.events)) {
                for (c = (t = (t || "").match(Oe) || [""]).length; c--;)
                    if (f = m = (a = tt.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = fe.event.special[f] || {}, p = u[f = (o ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !i && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || o && o !== s.selector && ("**" !== o || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(e, s));
                        l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || fe.removeEvent(e, f, g.handle), delete u[f])
                    } else
                        for (f in u) fe.event.remove(e, f + t[c], n, o, !0);
                fe.isEmptyObject(u) && (delete g.handle, fe._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, o) {
            var i, r, s, a, l, c, u, d = [n || oe],
                p = ue.call(e, "type") ? e.type : e,
                f = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = n = n || oe, 3 !== n.nodeType && 8 !== n.nodeType && !et.test(p + fe.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, (e = e[fe.expando] ? e : new fe.Event(p, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : fe.makeArray(t, [e]), l = fe.event.special[p] || {}, o || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!o && !l.noBubble && !fe.isWindow(n)) {
                    for (a = l.delegateType || p, et.test(a + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                    c === (n.ownerDocument || oe) && d.push(c.defaultView || c.parentWindow || k)
                }
                for (u = 0;
                    (s = d[u++]) && !e.isPropagationStopped();) e.type = 1 < u ? a : l.bindType || p, (i = (fe._data(s, "events") || {})[e.type] && fe._data(s, "handle")) && i.apply(s, t), (i = r && s[r]) && i.apply && $e(s) && (e.result = i.apply(s, t), !1 === e.result && e.preventDefault());
                if (e.type = p, !o && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && $e(n) && r && n[p] && !fe.isWindow(n)) {
                    (c = n[r]) && (n[r] = null), fe.event.triggered = p;
                    try {
                        n[p]()
                    } catch (h) {}
                    fe.event.triggered = undefined, c && (n[r] = c)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = fe.event.fix(e);
            var t, n, o, i, r, s = [],
                a = ie.call(arguments),
                l = (fe._data(this, "events") || {})[e.type] || [],
                c = fe.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = fe.event.handlers.call(this, e, l), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, (o = ((fe.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, a)) !== undefined && !1 === (e.result = o) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, o, i, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (o = [], n = 0; n < a; n++) o[i = (r = t[n]).selector + " "] === undefined && (o[i] = r.needsContext ? -1 < fe(i, this).index(l) : fe.find(i, this, null, [l]).length), o[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[fe.expando]) return e;
            var t, n, o, i = e.type,
                r = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ze.test(i) ? this.mouseHooks : Qe.test(i) ? this.keyHooks : {}), o = s.props ? this.props.concat(s.props) : this.props, e = new fe.Event(r), t = o.length; t--;) e[n = o[t]] = r[n];
            return e.target || (e.target = r.srcElement || oe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, o, i, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (o = e.target.ownerDocument || oe).documentElement, n = o.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || r === undefined || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === h() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var o = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(o, null, t), o.isDefaultPrevented() && n.preventDefault()
        }
    }, fe.removeEvent = oe.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var o = "on" + t;
        e.detachEvent && ("undefined" == typeof e[o] && (e[o] = null), e.detachEvent(o, n))
    }, fe.Event = function(e, t) {
        if (!(this instanceof fe.Event)) return new fe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? p : f) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        fe.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === n || fe.contains(n, o)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), de.submit || (fe.event.special.submit = {
        setup: function() {
            if (fe.nodeName(this, "form")) return !1;
            fe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : undefined;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), fe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (fe.nodeName(this, "form")) return !1;
            fe.event.remove(this, "._submit")
        }
    }), de.change || (fe.event.special.change = {
        setup: function() {
            if (Je.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), fe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
            })), !1;
            fe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Je.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }), fe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return fe.event.remove(this, "._change"), !Je.test(this.nodeName)
        }
    }), de.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, o) {
        var i = function(e) {
            fe.event.simulate(o, e.target, fe.event.fix(e))
        };
        fe.event.special[o] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = fe._data(e, o);
                t || e.addEventListener(n, i, !0), fe._data(e, o, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = fe._data(e, o) - 1;
                t ? fe._data(e, o, t) : (e.removeEventListener(n, i, !0), fe._removeData(e, o))
            }
        }
    }), fe.fn.extend({
        on: function(e, t, n, o) {
            return w(this, e, t, n, o)
        },
        one: function(e, t, n, o) {
            return w(this, e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, fe(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = f), this.each(function() {
                fe.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return fe.event.trigger(e, t, n, !0)
        }
    });
    var nt = / jQuery\d+="(?:null|\d+)"/g,
        ot = new RegExp("<(?:" + Re + ")[\\s/>]", "i"),
        it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        rt = /<script|<style|<link/i,
        st = /checked\s*(?:[^=]|=\s*.checked.)/i,
        at = /^true\/(.*)/,
        lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ct = g(oe).appendChild(oe.createElement("div"));
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(it, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var o, i, r, s, a, l = fe.contains(e.ownerDocument, e);
            if (de.html5Clone || fe.isXMLDoc(e) || !ot.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML, ct.removeChild(r = ct.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (o = v(r), a = v(e), s = 0; null != (i = a[s]); ++s) o[s] && C(i, o[s]);
            if (t)
                if (n)
                    for (a = a || v(e), o = o || v(r), s = 0; null != (i = a[s]); s++) S(i, o[s]);
                else S(e, r);
            return 0 < (o = v(r, "script")).length && y(o, !l && v(e, "script")), o = a = i = null, r
        },
        cleanData: function(e, t) {
            for (var n, o, i, r, s = 0, a = fe.expando, l = fe.cache, c = de.attributes, u = fe.event.special; null != (n = e[s]); s++)
                if ((t || $e(n)) && (r = (i = n[a]) && l[i])) {
                    if (r.events)
                        for (o in r.events) u[o] ? fe.event.remove(n, o) : fe.removeEvent(n, o, r.handle);
                    l[i] && (delete l[i], c || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a), ne.push(i))
                }
        }
    }), fe.fn.extend({
        domManip: L,
        detach: function(e) {
            return _(this, e, !0)
        },
        remove: function(e) {
            return _(this, e)
        },
        text: function(e) {
            return Be(this, function(e) {
                return e === undefined ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return L(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Be(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
                if ("string" == typeof e && !rt.test(e) && (de.htmlSerialize || !ot.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Xe[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (fe.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return L(this, arguments, function(e) {
                var t = this.parentNode;
                fe.inArray(this, n) < 0 && (fe.cleanData(v(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        fe.fn[e] = function(e) {
            for (var t, n = 0, o = [], i = fe(e), r = i.length - 1; n <= r; n++) t = n === r ? this : this.clone(!0), fe(i[n])[s](t), se.apply(o, t.get());
            return this.pushStack(o)
        }
    });
    var ut, dt = {
            HTML: "block",
            BODY: "block"
        },
        pt = /^margin/,
        ft = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
        ht = function(e, t, n, o) {
            var i, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in i = n.apply(e, o || []), t) e.style[r] = s[r];
            return i
        },
        mt = oe.documentElement;
    ! function() {
        function e() {
            var e, t, n = oe.documentElement;
            n.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o = r = l = !1, i = a = !0, k.getComputedStyle && (t = k.getComputedStyle(u), o = "1%" !== (t || {}).top, l = "2px" === (t || {}).marginLeft, r = "4px" === (t || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (t || {
                marginRight: "4px"
            }).marginRight, (e = u.appendChild(oe.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", a = !parseFloat((k.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", (s = 0 === u.getClientRects().length) && (
                u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (e = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", s = 0 === e[0].offsetHeight)), n.removeChild(c)
        }
        var o, i, r, s, a, l, c = oe.createElement("div"),
            u = oe.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, (c = oe.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, fe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == o && e(), s
            },
            boxSizingReliable: function() {
                return null == o && e(), r
            },
            pixelMarginRight: function() {
                return null == o && e(), i
            },
            pixelPosition: function() {
                return null == o && e(), o
            },
            reliableMarginRight: function() {
                return null == o && e(), a
            },
            reliableMarginLeft: function() {
                return null == o && e(), l
            }
        }))
    }();
    var gt, vt, yt = /^(top|right|bottom|left)$/;
    k.getComputedStyle ? (gt = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = k), t.getComputedStyle(e)
    }, vt = function(e, t, n) {
        var o, i, r, s, a = e.style;
        return "" !== (s = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && s !== undefined || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), n && !de.pixelMarginRight() && ft.test(s) && pt.test(t) && (o = a.width, i = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = o, a.minWidth = i, a.maxWidth = r), s === undefined ? s : s + ""
    }) : mt.currentStyle && (gt = function(e) {
        return e.currentStyle
    }, vt = function(e, t, n) {
        var o, i, r, s, a = e.style;
        return null == (s = (n = n || gt(e)) ? n[t] : undefined) && a && a[t] && (s = a[t]), ft.test(s) && !yt.test(t) && (o = a.left, (r = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = o, r && (i.left = r)), s === undefined ? s : s + "" || "auto"
    });
    var bt = /alpha\([^)]*\)/i,
        wt = /opacity\s*=\s*([^)]*)/i,
        Et = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + Ie + ")(.*)$", "i"),
        kt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        St = ["Webkit", "O", "Moz", "ms"],
        Ct = oe.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = vt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, s, a = fe.camelCase(t),
                    l = e.style;
                if (t = fe.cssProps[a] || (fe.cssProps[a] = $(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], n === undefined) return s && "get" in s && (i = s.get(e, !1, o)) !== undefined ? i : l[t];
                if ("string" === (r = typeof n) && (i = Ve.exec(n)) && i[1] && (n = d(e, t, i), r = "number"), null != n && n == n && ("number" === r && (n += i && i[3] || (fe.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && (n = s.set(e, n, o)) === undefined))) try {
                    l[t] = n
                } catch (c) {}
            }
        },
        css: function(e, t, n, o) {
            var i, r, s, a = fe.camelCase(t);
            return t = fe.cssProps[a] || (fe.cssProps[a] = $(a) || a), (s = fe.cssHooks[t] || fe.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), r === undefined && (r = vt(e, t, o)), "normal" === r && t in Tt && (r = Tt[t]), "" === n || n ? (i = parseFloat(r), !0 === n || isFinite(i) ? i || 0 : r) : r
        }
    }), fe.each(["height", "width"], function(e, i) {
        fe.cssHooks[i] = {
            get: function(e, t, n) {
                if (t) return Et.test(fe.css(e, "display")) && 0 === e.offsetWidth ? ht(e, kt, function() {
                    return G(e, i, n)
                }) : G(e, i, n)
            },
            set: function(e, t, n) {
                var o = n && gt(e);
                return M(e, t, n ? N(e, i, n, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), de.opacity || (fe.cssHooks.opacity = {
        get: function(e, t) {
            return wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                o = e.currentStyle,
                i = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = o && o.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === fe.trim(r.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || o && !o.filter) || (n.filter = bt.test(r) ? r.replace(bt, i) : r + " " + i)
        }
    }), fe.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
        if (t) return ht(e, {
            display: "inline-block"
        }, vt, [e, "marginRight"])
    }), fe.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(vt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, r) {
        fe.cssHooks[i + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Pe[t] + r] = o[t] || o[t - 2] || o[0];
                return n
            }
        }, pt.test(i) || (fe.cssHooks[i + r].set = M)
    }), fe.fn.extend({
        css: function(e, t) {
            return Be(this, function(e, t, n) {
                var o, i, r = {},
                    s = 0;
                if (fe.isArray(t)) {
                    for (o = gt(e), i = t.length; s < i; s++) r[t[s]] = fe.css(e, t[s], !1, o);
                    return r
                }
                return n !== undefined ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }), (fe.Tween = H).prototype = {
        constructor: H,
        init: function(e, t, n, o, i, r) {
            this.elem = e, this.prop = n, this.easing = i || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, fe.fx = H.prototype.init, fe.fx.step = {};
    var Lt, _t, At, Ot, jt, $t, Dt, Mt = /^(?:toggle|show|hide)$/,
        Nt = /queueHooks$/;
    fe.Animation = fe.extend(U, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, Ve.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
            for (var n, o = 0, i = e.length; o < i; o++) n = e[o], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
        },
        prefilters: [F],
        prefilter: function(e, t) {
            t ? U.prefilters.unshift(e) : U.prefilters.push(e)
        }
    }), fe.speed = function(e, t, n) {
        var o = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return o.duration = fe.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in fe.fx.speeds ? fe.fx.speeds[o.duration] : fe.fx.speeds._default, null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
            fe.isFunction(o.old) && o.old.call(this), o.queue && fe.dequeue(this, o.queue)
        }, o
    }, fe.fn.extend({
        fadeTo: function(e, t, n, o) {
            return this.filter(Fe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, o)
        },
        animate: function(t, e, n, o) {
            var i = fe.isEmptyObject(t),
                r = fe.speed(e, n, o),
                s = function() {
                    var e = U(this, fe.extend({}, t), r);
                    (i || fe._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, i || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(i, e, r) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof i && (r = e, e = i, i = undefined), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = fe.timers,
                    o = fe._data(this);
                if (t) o[t] && o[t].stop && s(o[t]);
                else
                    for (t in o) o[t] && o[t].stop && Nt.test(t) && s(o[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || fe.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = fe._data(this),
                    n = t[s + "queue"],
                    o = t[s + "queueHooks"],
                    i = fe.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, fe.queue(this, s, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), fe.each(["toggle", "show", "hide"], function(e, o) {
        var i = fe.fn[o];
        fe.fn[o] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(V(o, !0), e, t, n)
        }
    }), fe.each({
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, o) {
        fe.fn[e] = function(e, t, n) {
            return this.animate(o, e, t, n)
        }
    }), fe.timers = [], fe.fx.tick = function() {
        var e, t = fe.timers,
            n = 0;
        for (Lt = fe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || fe.fx.stop(), Lt = undefined
    }, fe.fx.timer = function(e) {
        fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
    }, fe.fx.interval = 13, fe.fx.start = function() {
        _t || (_t = k.setInterval(fe.fx.tick, fe.fx.interval))
    }, fe.fx.stop = function() {
        k.clearInterval(_t), _t = null
    }, fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fe.fn.delay = function(o, e) {
        return o = fe.fx && fe.fx.speeds[o] || o, e = e || "fx", this.queue(e, function(e, t) {
            var n = k.setTimeout(e, o);
            t.stop = function() {
                k.clearTimeout(n)
            }
        })
    }, Ot = oe.createElement("input"), jt = oe.createElement("div"), $t = oe.createElement("select"), Dt = $t.appendChild(oe.createElement("option")), (jt = oe.createElement("div")).setAttribute("className", "t"), jt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", At = jt.getElementsByTagName("a")[0], Ot.setAttribute("type", "checkbox"), jt.appendChild(Ot), (At = jt.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== jt.className, de.style = /top/.test(At.getAttribute("style")), de.hrefNormalized = "/a" === At.getAttribute("href"), de.checkOn = !!Ot.value, de.optSelected = Dt.selected, de.enctype = !!oe.createElement("form").enctype, $t.disabled = !0, de.optDisabled = !Dt.disabled, (Ot = oe.createElement("input")).setAttribute("value", ""), de.input = "" === Ot.getAttribute("value"), Ot.value = "t", Ot.setAttribute("type", "radio"), de.radioValue = "t" === Ot.value;
    var Gt = /\r/g,
        Ht = /[\x20\t\r\n\f]+/g;
    fe.fn.extend({
        val: function(n) {
            var o, e, i, t = this[0];
            return arguments.length ? (i = fe.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, fe(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : fe.isArray(t) && (t = fe.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (o = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in o && o.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (o = fe.valHooks[t.type] || fe.valHooks[t.nodeName.toLowerCase()]) && "get" in o && (e = o.get(t, "value")) !== undefined ? e : "string" == typeof(e = t.value) ? e.replace(Gt, "") : null == e ? "" : e : void 0
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e)).replace(Ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || i < 0, s = r ? null : [], a = r ? i + 1 : o.length, l = i < 0 ? a : r ? i : 0; l < a; l++)
                        if (((n = o[l]).selected || l === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = fe(n).val(), r) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, o, i = e.options, r = fe.makeArray(t), s = i.length; s--;)
                        if (o = i[s], -1 < fe.inArray(fe.valHooks.option.get(o), r)) try {
                            o.selected = n = !0
                        } catch (a) {
                            o.scrollHeight
                        } else o.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                if (fe.isArray(t)) return e.checked = -1 < fe.inArray(fe(e).val(), t)
            }
        }, de.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var It, Vt, Pt = fe.expr.attrHandle,
        Ft = /^(?:checked|selected)$/i,
        Bt = de.getSetAttribute,
        Ut = de.input;
    fe.fn.extend({
        attr: function(e, t) {
            return Be(this, fe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === r && fe.isXMLDoc(e) || (t = t.toLowerCase(), i = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Vt : It)), n !== undefined ? null === n ? void fe.removeAttr(e, t) : i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = fe.find.attr(e, t)) ? undefined : o)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, o, i = 0,
                r = t && t.match(Oe);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) o = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Ut && Bt || !Ft.test(n) ? e[o] = !1 : e[fe.camelCase("default-" + n)] = e[o] = !1 : fe.attr(e, n, ""), e.removeAttribute(Bt ? n : o)
        }
    }), Vt = {
        set: function(e, t, n) {
            return !1 === t ? fe.removeAttr(e, n) : Ut && Bt || !Ft.test(n) ? e.setAttribute(!Bt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = Pt[t] || fe.find.attr;
        Ut && Bt || !Ft.test(t) ? Pt[t] = function(e, t, n) {
            var o, i;
            return n || (i = Pt[t], Pt[t] = o, o = null != r(e, t, n) ? t.toLowerCase() : null, Pt[t] = i), o
        } : Pt[t] = function(e, t, n) {
            if (!n) return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ut && Bt || (fe.attrHooks.value = {
        set: function(e, t, n) {
            if (!fe.nodeName(e, "input")) return It && It.set(e, t, n);
            e.defaultValue = t
        }
    }), Bt || (It = {
        set: function(e, t, n) {
            var o = e.getAttributeNode(n);
            if (o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)), o.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Pt.id = Pt.name = Pt.coords = function(e, t, n) {
        var o;
        if (!n) return (o = e.getAttributeNode(t)) && "" !== o.value ? o.value : null
    }, fe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: It.set
    }, fe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            It.set(e, "" !== t && t, n)
        }
    }, fe.each(["width", "height"], function(e, n) {
        fe.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), de.style || (fe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Kt = /^(?:input|select|textarea|button|object)$/i,
        qt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return Be(this, fe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = fe.propFix[t] || t, this.each(function() {
                try {
                    this[t] = undefined, delete this[t]
                } catch (e) {}
            })
        }
    }), fe.extend({
        prop: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, i = fe.propHooks[t]), n !== undefined ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Kt.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
        fe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }), de.enctype || (fe.propFix.enctype = "encoding");
    var Wt = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(t) {
            var e, n, o, i, r, s, a, l = 0;
            if (fe.isFunction(t)) return this.each(function(e) {
                fe(this).addClass(t.call(this, e, K(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Oe) || []; n = this[l++];)
                    if (i = K(n), o = 1 === n.nodeType && (" " + i + " ").replace(Wt, " ")) {
                        for (s = 0; r = e[s++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        i !== (a = fe.trim(o)) && fe.attr(n, "class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, o, i, r, s, a, l = 0;
            if (fe.isFunction(t)) return this.each(function(e) {
                fe(this).removeClass(t.call(this, e, K(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Oe) || []; n = this[l++];)
                    if (i = K(n), o = 1 === n.nodeType && (" " + i + " ").replace(Wt, " ")) {
                        for (s = 0; r = e[s++];)
                            for (; - 1 < o.indexOf(" " + r + " ");) o = o.replace(" " + r + " ", " ");
                        i !== (a = fe.trim(o)) && fe.attr(n, "class", a)
                    } return this
        },
        toggleClass: function(i, t) {
            var r = typeof i;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(i) : this.removeClass(i) : fe.isFunction(i) ? this.each(function(e) {
                fe(this).toggleClass(i.call(this, e, K(this), t), t)
            }) : this.each(function() {
                var e, t, n, o;
                if ("string" === r)
                    for (t = 0, n = fe(this), o = i.match(Oe) || []; e = o[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else i !== undefined && "boolean" !== r || ((e = K(this)) && fe._data(this, "__className__", e), fe.attr(this, "class", e || !1 === i ? "" : fe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, o = 0;
            for (t = " " + e + " "; n = this[o++];)
                if (1 === n.nodeType && -1 < (" " + K(n) + " ").replace(Wt, " ").indexOf(t)) return !0;
            return !1
        }
    }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        fe.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Rt = k.location,
        Xt = fe.now(),
        zt = /\?/,
        Yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function(e) {
        if (k.JSON && k.JSON.parse) return k.JSON.parse(e + "");
        var i, r = null,
            t = fe.trim(e + "");
        return t && !fe.trim(t.replace(Yt, function(e, t, n, o) {
            return i && t && (r = 0), 0 === r ? e : (i = n || t, r += !o - !n, "")
        })) ? Function("return " + t)() : fe.error("Invalid JSON: " + e)
    }, fe.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            k.DOMParser ? t = (new k.DOMParser).parseFromString(e, "text/xml") : ((t = new k.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (n) {
            t = undefined
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + e), t
    };
    var Jt = /#.*$/,
        Qt = /([?&])_=[^&]*/,
        Zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        tn = /^(?:GET|HEAD)$/,
        nn = /^\/\//,
        on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        rn = {},
        sn = {},
        an = "*/".concat("*"),
        ln = Rt.href,
        cn = on.exec(ln.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ln,
            type: "GET",
            isLocal: en.test(cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": an,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, fe.ajaxSettings), t) : R(fe.ajaxSettings, e)
        },
        ajaxPrefilter: q(rn),
        ajaxTransport: q(sn),
        ajax: function(e, t) {
            function n(e, t, n, o) {
                var i, r, s, a, l, c = t;
                2 !== E && (E = 2, p && k.clearTimeout(p), h = undefined, d = o || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = X(m, x, n)), a = z(m, a, x, i), i ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (fe.lastModified[u] = l), (l = x.getResponseHeader("etag")) && (fe.etag[u] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, i = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", i ? y.resolveWith(g, [r, c, x]) : y.rejectWith(g, [x, c, s]), x.statusCode(w), w = undefined, f && v.trigger(i ? "ajaxSuccess" : "ajaxError", [x, m, i ? r : s]), b.fireWith(g, [x, c]), f && (v.trigger("ajaxComplete", [x, m]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var o, i, u, d, p, f, h, r, m = fe.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? fe(g) : fe.event,
                y = fe.Deferred(),
                b = fe.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                E = 0,
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === E) {
                            if (!r)
                                for (r = {}; t = Zt.exec(d);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === E ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return E || (e = a[n] = a[n] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return E || (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (E < 2)
                                for (t in e) w[t] = [w[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return h && h.abort(t), n(0, t), this
                    }
                };
            if (y.promise(x).complete = b.add, x.success = x.done, x.error = x.fail, m.url = ((e || m.url || ln) + "").replace(Jt, "").replace(nn, cn[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = fe.trim(m.dataType || "*").toLowerCase().match(Oe) || [""], null == m.crossDomain && (o = on.exec(m.url.toLowerCase()), m.crossDomain = !(!o || o[1] === cn[1] && o[2] === cn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (cn[3] || ("http:" === cn[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fe.param(m.data, m.traditional)), W(rn, m, t, x), 2 === E) return x;
            for (i in (f = fe.event && m.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !tn.test(m.type), u = m.url, m.hasContent || (m.data && (u = m.url += (zt.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Qt.test(u) ? u.replace(Qt, "$1_=" + Xt++) : u + (zt.test(u) ? "&" : "?") + "_=" + Xt++)), m.ifModified && (fe.lastModified[u] && x.setRequestHeader("If-Modified-Since", fe.lastModified[u]), fe.etag[u] && x.setRequestHeader("If-None-Match", fe.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + an + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || 2 === E)) return x.abort();
            for (i in l = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](m[i]);
            if (h = W(sn, m, t, x)) {
                if (x.readyState = 1, f && v.trigger("ajaxSend", [x, m]), 2 === E) return x;
                m.async && 0 < m.timeout && (p = k.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    E = 1, h.send(s, n)
                } catch (c) {
                    if (!(E < 2)) throw c;
                    n(-1, c)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, undefined, t, "script")
        }
    }), fe.each(["get", "post"], function(e, i) {
        fe[i] = function(e, t, n, o) {
            return fe.isFunction(t) && (o = o || n, n = t, t = undefined), fe.ajax(fe.extend({
                url: e,
                type: i,
                dataType: o,
                data: t,
                success: n
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, fe.fn.extend({
        wrapAll: function(t) {
            if (fe.isFunction(t)) return this.each(function(e) {
                fe(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = fe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return fe.isFunction(n) ? this.each(function(e) {
                fe(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = fe(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = fe.isFunction(t);
            return this.each(function(e) {
                fe(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }, fe.expr.filters.visible = function(e) {
        return !fe.expr.filters.hidden(e)
    };
    var un = /%20/g,
        dn = /\[\]$/,
        pn = /\r?\n/g,
        fn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, o = [],
            i = function(e, t) {
                t = fe.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Q(n, e[n], t, i);
        return o.join("&").replace(un, "+")
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && hn.test(this.nodeName) && !fn.test(e) && (this.checked || !Ue.test(e))
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(pn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(pn, "\r\n")
                }
            }).get()
        }
    }), fe.ajaxSettings.xhr = k.ActiveXObject !== undefined ? function() {
        return this.isLocal ? ee() : 8 < oe.documentMode ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var mn = 0,
        gn = {},
        vn = fe.ajaxSettings.xhr();
    k.attachEvent && k.attachEvent("onunload", function() {
        for (var e in gn) gn[e](undefined, !0)
    }), de.cors = !!vn && "withCredentials" in vn, (vn = de.ajax = !!vn) && fe.ajaxTransport(function(c) {
        var u;
        if (!c.crossDomain || de.cors) return {
            send: function(e, s) {
                var t, a = c.xhr(),
                    l = ++mn;
                if (a.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
                    for (t in c.xhrFields) a[t] = c.xhrFields[t];
                for (t in c.mimeType && a.overrideMimeType && a.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) e[t] !== undefined && a.setRequestHeader(t, e[t] + "");
                a.send(c.hasContent && c.data || null), u = function(e, t) {
                    var n, o, i;
                    if (u && (t || 4 === a.readyState))
                        if (delete gn[l], u = undefined, a.onreadystatechange = fe.noop, t) 4 !== a.readyState && a.abort();
                        else {
                            i = {}, n = a.status, "string" == typeof a.responseText && (i.text = a.responseText);
                            try {
                                o = a.statusText
                            } catch (r) {
                                o = ""
                            }
                            n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                        } i && s(n, o, i, a.getAllResponseHeaders())
                }, c.async ? 4 === a.readyState ? k.setTimeout(u) : a.onreadystatechange = gn[l] = u : u()
            },
            abort: function() {
                u && u(undefined, !0)
            }
        }
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var o, i = oe.head || fe("head")[0] || oe.documentElement;
            return {
                send: function(e, n) {
                    (o = oe.createElement("script")).async = !0, t.scriptCharset && (o.charset = t.scriptCharset), o.src = t.url, o.onload = o.onreadystatechange = function(e, t) {
                        (t || !o.readyState || /loaded|complete/.test(o.readyState)) && (o.onload = o.onreadystatechange = null, o.parentNode && o.parentNode.removeChild(o), o = null, t || n(200, "success"))
                    }, i.insertBefore(o, i.firstChild)
                },
                abort: function() {
                    o && o.onload(undefined, !0)
                }
            }
        }
    });
    var yn = [],
        bn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = yn.pop() || fe.expando + "_" + Xt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function(e, t, n) {
        var o, i, r, s = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = fe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(bn, "$1" + o) : !1 !== e.jsonp && (e.url += (zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || fe.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", i = k[o], k[o] = function() {
            r = arguments
        }, n.always(function() {
            i === undefined ? fe(k).removeProp(o) : k[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, yn.push(o)), r && fe.isFunction(i) && i(r[0]), r = i = undefined
        }), "script"
    }), fe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || oe;
        var o = xe.exec(e),
            i = !n && [];
        return o ? [t.createElement(o[1])] : (o = m([e], t, i), i && i.length && fe(i).remove(), fe.merge([], o.childNodes))
    };
    var wn = fe.fn.load;
    fe.fn.load = function(e, t, n) {
        if ("string" != typeof e && wn) return wn.apply(this, arguments);
        var o, i, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (o = fe.trim(e.slice(a, e.length)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), 0 < s.length && fe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(o ? fe("<div>").append(fe.parseHTML(e)).find(o) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), fe.expr.filters.animated = function(t) {
        return fe.grep(fe.timers, function(e) {
            return t === e.elem
        }).length
    }, fe.offset = {
        setOffset: function(e, t, n) {
            var o, i, r, s, a, l, c = fe.css(e, "position"),
                u = fe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = fe.css(e, "top"), l = fe.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < fe.inArray("auto", [r, l]) ? (s = (o = u.position()).top, i = o.left) : (s = parseFloat(r) || 0, i = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, fe.fn.extend({
        offset: function(t) {
            if (arguments.length) return t === undefined ? this : this.each(function(e) {
                fe.offset.setOffset(this, t, e)
            });
            var e, n, o = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                r = i && i.ownerDocument;
            return r ? (e = r.documentElement, fe.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (o = i.getBoundingClientRect()), n = te(r), {
                top: o.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: o.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    o = this[0];
                return "fixed" === fe.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - fe.css(o, "marginTop", !0),
                    left: t.left - n.left - fe.css(o, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
                return e || mt
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var r = /Y/.test(i);
        fe.fn[t] = function(e) {
            return Be(this, function(e, t, n) {
                var o = te(e);
                if (n === undefined) return o ? i in o ? o[i] : o.document.documentElement[t] : e[t];
                o ? o.scrollTo(r ? fe(o).scrollLeft() : n, r ? n : fe(o).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), fe.each(["top", "left"], function(e, n) {
        fe.cssHooks[n] = j(de.pixelPosition, function(e, t) {
            if (t) return t = vt(e, n), ft.test(t) ? fe(e).position()[n] + "px" : t
        })
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(r, s) {
        fe.each({
            padding: "inner" + r,
            content: s,
            "": "outer" + r
        }, function(o, e) {
            fe.fn[e] = function(e, t) {
                var n = arguments.length && (o || "boolean" != typeof e),
                    i = o || (!0 === e || !0 === t ? "margin" : "border");
                return Be(this, function(e, t, n) {
                    var o;
                    return fe.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + r], o["scroll" + r], e.body["offset" + r], o["offset" + r], o["client" + r])) : n === undefined ? fe.css(e, t, i) : fe.style(e, t, n, i)
                }, s, n ? e : undefined, n, null)
            }
        })
    }), fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.fn.size = function() {
        return this.length
    }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var En = k.jQuery,
        xn = k.$;
    return fe.noConflict = function(e) {
        return k.$ === fe && (k.$ = xn), e && k.jQuery === fe && (k.jQuery = En), fe
    }, e || (k.jQuery = k.$ = fe), fe
}),
function(e) {
    "use strict";
    var f = e.jQuery,
        h = e.GOVUK || {};
    h.Modules = h.Modules || {}, h.modules = {
        find: function(e) {
            var t, n = "[data-module]";
            return t = (e = e || f(document)).find(n), e.is(n) && (t = t.add(e)), t
        },
        start: function(e) {
            function t(e) {
                return o(n(e))
            }

            function n(e) {
                return e.replace(/-([a-z])/g, function(e) {
                    return e.charAt(1).toUpperCase()
                })
            }

            function o(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            for (var i = this.find(e), r = 0, s = i.length; r < s; r++)
                for (var a = f(i[r]), l = a.data("module").split(" "), c = 0, u = l.length; c < u; c++) {
                    var d = t(l[c]),
                        p = a.data(l[c] + "-module-started");
                    "function" != typeof h.Modules[d] || h.Modules[d].prototype.init || p || ((new h.Modules[d]).start(a), a.data(l[c] + "-module-started", !0)), "function" == typeof h.Modules[d] && h.Modules[d].prototype.init && !p && (new h.Modules[d](a[0]).init(), a.data(l[c] + "-module-started", !0))
                }
        }
    }, e.GOVUK = h
}(window), $(document).ready(function() {
        "use strict";
        window.GOVUK.modules.start()
    }),
    function() {
        "use strict";
        window.GOVUK = window.GOVUK || {};
        var i = {
                essential: !0,
                settings: !1,
                usage: !1,
                campaigns: !1
            },
            r = {
                cookies_policy: "essential",
                seen_cookie_message: "essential",
                cookie_preferences_set: "essential",
                cookies_preferences_set: "essential",
                "_email-alert-frontend_session": "essential",
                licensing_session: "essential",
                govuk_contact_referrer: "essential",
                multivariatetest_cohort_coronavirus_extremely_vulnerable_rate_limit: "essential",
                dgu_beta_banner_dismissed: "settings",
                global_bar_seen: "settings",
                govuk_browser_upgrade_dismisssed: "settings",
                govuk_not_first_visit: "settings",
                analytics_next_page_call: "usage",
                user_nation: "settings",
                _ga: "usage",
                _gid: "usage",
                _gat: "usage",
                "JS-Detection": "usage",
                TLSversion: "usage"
            };
        window.GOVUK.cookie = function(e, t, n) {
            return void 0 !== t ? !1 === t || null === t ? window.GOVUK.setCookie(e, "", {
                days: -1
            }) : (void 0 === n && (n = {
                days: 30
            }), window.GOVUK.setCookie(e, t, n)) : window.GOVUK.getCookie(e)
        }, window.GOVUK.setDefaultConsentCookie = function() {
            window.GOVUK.setConsentCookie(i)
        }, window.GOVUK.approveAllCookieTypes = function() {
            var e = {
                essential: !0,
                settings: !0,
                usage: !0,
                campaigns: !0
            };
            window.GOVUK.setCookie("cookies_policy", JSON.stringify(e), {
                days: 365
            })
        }, window.GOVUK.getConsentCookie = function() {
            var e, t = window.GOVUK.cookie("cookies_policy");
            if (!t) return null;
            try {
                e = JSON.parse(t)
            } catch (n) {
                return null
            }
            return "object" != typeof e && null !== e && (e = JSON.parse(e)), e
        }, window.GOVUK.setConsentCookie = function(e) {
            var t = window.GOVUK.getConsentCookie();
            for (var n in t || (t = JSON.parse(JSON.stringify(i))), e)
                if (t[n] = e[n], !e[n])
                    for (var o in r) r[o] === n && window.GOVUK.deleteCookie(o);
            window.GOVUK.setCookie("cookies_policy", JSON.stringify(t), {
                days: 365
            })
        }, window.GOVUK.checkConsentCookieCategory = function(e, t) {
            var n = window.GOVUK.getConsentCookie();
            if (!n && r[e]) return !0;
            n = window.GOVUK.getConsentCookie();
            try {
                return n[t]
            } catch (o) {
                return console.error(o), !1
            }
        }, window.GOVUK.checkConsentCookie = function(e, t) {
            if ("cookies_policy" === e || null === t || !1 === t) return !0;
            if (e.match("^govuk_surveySeen") || e.match("^govuk_taken")) return window.GOVUK.checkConsentCookieCategory(e, "settings");
            if (r[e]) {
                var n = r[e];
                return window.GOVUK.checkConsentCookieCategory(e, n)
            }
            return !1
        }, window.GOVUK.setCookie = function(e, t, n) {
            if (window.GOVUK.checkConsentCookie(e, t)) {
                void 0 === n && (n = {});
                var o = e + "=" + t + "; path=/";
                if (n.days) {
                    var i = new Date;
                    i.setTime(i.getTime() + 24 * n.days * 60 * 60 * 1e3), o = o + "; expires=" + i.toGMTString()
                }
                "https:" === document.location.protocol && (o += "; Secure"), document.cookie = o
            }
        }, window.GOVUK.getCookie = function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), o = 0, i = n.length; o < i; o++) {
                for (var r = n[o];
                    " " === r.charAt(0);) r = r.substring(1, r.length);
                if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length))
            }
            return null
        }, window.GOVUK.getCookieCategory = function(e) {
            return r[e]
        }, window.GOVUK.deleteCookie = function(e) {
            window.GOVUK.cookie(e, null), window.GOVUK.cookie(e) && (document.cookie = e + "=;expires=" + new Date + ";", document.cookie = e + "=;expires=" + new Date + ";domain=" + window.location.hostname + ";path=/")
        }, window.GOVUK.deleteUnconsentedCookies = function() {
            var e = window.GOVUK.getConsentCookie();
            for (var t in e)
                if (!e[t])
                    for (var n in r) r[n] === t && window.GOVUK.deleteCookie(n)
        }
    }(window),
    function(e) {
        "use strict";
        window.GOVUK = window.GOVUK || {}, window.GOVUK.getCurrentLocation = function() {
            return e.location
        }
    }(window),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : t()
    }(0, function() {
        "use strict";
        (function() {
            var a, l, c, u;
            "defineProperty" in Object && function() {
                try {
                    var e = {};
                    return Object.defineProperty(e, "test", {
                        value: 42
                    }), !0
                } catch (t) {
                    return !1
                }
            }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                var o = String(t),
                    i = "value" in n || "writable" in n,
                    r = "get" in n && typeof n.get,
                    s = "set" in n && typeof n.set;
                if (r) {
                    if ("function" !== r) throw new TypeError("Getter must be a function");
                    if (!l) throw new TypeError(c);
                    if (i) throw new TypeError(u);
                    Object.__defineGetter__.call(e, o, n.get)
                } else e[o] = n.value;
                if (s) {
                    if ("function" !== s) throw new TypeError("Setter must be a function");
                    if (!l) throw new TypeError(c);
                    if (i) throw new TypeError(u);
                    Object.__defineSetter__.call(e, o, n.set)
                }
                return "value" in n && (e[o] = n.value), e
            })
        }).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(p) {
                var e, t, n;
                "DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList" in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
                    var i = !0,
                        n = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === i || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        n({}, "support")
                    } catch (e) {
                        i = !1
                    }
                    return function(i, r) {
                        var s = this,
                            a = [],
                            l = {},
                            c = 0,
                            e = 0,
                            t = function(e) {
                                n(s, e, function() {
                                    return d(), a[e]
                                }, !1)
                            },
                            u = function() {
                                if (e <= c)
                                    for (; e < c; ++e) t(e)
                            },
                            d = function() {
                                var e, t, n = arguments,
                                    o = /\s+/;
                                if (n.length)
                                    for (t = 0; t < n.length; ++t)
                                        if (o.test(n[t])) throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5, e.name = "InvalidCharacterError", e;
                                for ("" === (a = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (a = []), l = {}, t = 0; t < a.length; ++t) l[a[t]] = !0;
                                c = a.length, u()
                            };
                        return d(), n(s, "length", function() {
                            return d(), c
                        }), s.toLocaleString = s.toString = function() {
                            return d(), a.join(" ")
                        }, s.item = function(e) {
                            return d(), a[e]
                        }, s.contains = function(e) {
                            return d(), !!l[e]
                        }, s.add = function() {
                            d.apply(s, e = arguments);
                            for (var e, t, n = 0, o = e.length; n < o; ++n) t = e[n], l[t] || (a.push(t), l[t] = !0);
                            c !== a.length && (c = a.length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u())
                        }, s.remove = function() {
                            d.apply(s, e = arguments);
                            for (var e, t = {}, n = 0, o = []; n < e.length; ++n) t[e[n]] = !0, delete l[e[n]];
                            for (n = 0; n < a.length; ++n) t[a[n]] || o.push(a[n]);
                            c = (a = o).length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u()
                        }, s.toggle = function(e, t) {
                            return d.apply(s, [e]), p !== t ? t ? (s.add(e), !0) : (s.remove(e), !1) : l[e] ? (s.remove(e), !1) : (s.add(e), !0)
                        }, s
                    }
                }()), "classList" in (n = document.createElement("span")) && (n.classList.toggle("x", !1), n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
                    var n = t;
                    if (n !== p) return this[(n = !!n) ? "add" : "remove"](e), n;
                    var o = !this.contains(e);
                    return this[o ? "add" : "remove"](e), o
                })), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a", "b"), !e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.add;
                        e.classList.constructor.prototype.add = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }(), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a"), e.classList.add("b"), e.classList.remove("a", "b"), e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.remove;
                        e.classList.constructor.prototype.remove = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }())
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var e;
                "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"), e.classList.contains("b")) || function(e) {
                    var u = !0,
                        d = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === u || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        d({}, "support")
                    } catch (t) {
                        u = !1
                    }
                    var p = function(e, l, c) {
                        d(e.prototype, l, function() {
                            var e, t = this,
                                n = "__defineGetter__DEFINE_PROPERTY" + l;
                            if (t[n]) return e;
                            if (!(t[n] = !0) === u) {
                                for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, s = r.length, a = 0; a < s; ++a)
                                    if (r[a]._R === t) {
                                        o = r[a];
                                        break
                                    } o || (o = i.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, t, c)
                            } else e = new DOMTokenList(t, c);
                            return d(t, l, function() {
                                return e
                            }), delete t[n], e
                        }, !0)
                    };
                    p(e.Element, "classList", "className"), p(e.HTMLElement, "classList", "className"), p(e.HTMLLinkElement, "relList", "rel"), p(e.HTMLAnchorElement, "relList", "rel"), p(e.HTMLAreaElement, "relList", "rel")
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {})
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t() {}
        t.prototype.start = function(e, t) {
            for (var n in this.$module = e[0], this.options = {
                    outOf: 65,
                    applyOnInit: !0,
                    autoOutdent: !1,
                    outdentAll: !1,
                    chartVisibleText: "Change to table and accessible view",
                    tableVisibleText: "Change to chart view",
                    chartAlertText: "Chart visible",
                    tableAlertText: "Table visible",
                    toggleAfter: !1,
                    returnReference: !1
                }, t) this.options[n] = t[n];
            this.detectIEVersion(), this.ENABLED = !(this.ie && this.ie < 8), this.$table = e, this.$graphContainer = document.createElement("div"), this.$graphContainer.className = "mc-chart-container", this.$graph = document.createElement("div"), this.$graph.setAttribute("aria-hidden", "true"), this.$graph.setAttribute("class", this.$table.className), this.$graph.classList.add("mc-chart"), this.chartId = this.getChartId(e), this.options.stacked = this.$table.classList.contains("mc-stacked"), this.options.negative = this.$table.classList.contains("mc-negative");
            var o = 2 < this.$table.querySelectorAll("tbody tr")[0].querySelectorAll("th, td").length;
            if (this.options.multiple = !this.options.stacked && (this.$table.classList.contains("mc-multiple") || o), this.options.autoOutdent = this.options.autoOutdent || this.$table.classList.contains("mc-auto-outdent"), this.options.outdentAll = this.options.outdentAll || this.$table.classList.contains("mc-outdented"), this.options.multiple && this.$graph.classList.add("mc-multiple"), this.options.hasCaption = !!this.$table.querySelectorAll("caption").length, this.ENABLED && (this.apply(), this.options.applyOnInit || this.toggleLink.click()), this.options.returnReference) return this
        }, t.prototype.detectIEVersion = function() {
            this.ie = function() {
                for (var e, t = 3, n = document.createElement("div"), o = n.getElementsByTagName("i"); n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", t < 10 && o[0];);
                return 4 < t ? t : e
            }()
        }, t.prototype.apply = function() {
            this.ENABLED && (this.constructChart(), this.addClassesToHeader(), this.applyWidths(), this.insert(), this.$table.classList.add("mc-hidden"), this.applyOutdent())
        }, t.prototype.construct = {}, t.prototype.construct.thead = function() {
            var e = document.createElement("div");
            e.classList.add("mc-thead");
            var t = document.createElement("div");
            t.classList.add("mc-tr");
            for (var n = "", o = this.$table.querySelectorAll("thead th"), i = 0; i < o.length; i++) n += '<div class="mc-th">', n += o[i].innerHTML, n += "</div>";
            return t.innerHTML = n, e.appendChild(t), e
        }, t.prototype.construct.tbody = function() {
            var e = document.createElement("div");
            e.classList.add("mc-tbody");
            for (var t = this.$table.querySelectorAll("tbody tr"), n = 0; n < t.length; n++) {
                var o = document.createElement("div");
                o.classList.add("mc-tr");
                for (var i = "", r = t[n].querySelectorAll("th, td"), s = 0; s < r.length; s++) i += '<div class="mc-td">', i += r[s].innerHTML, i += "</div>";
                o.innerHTML = i, e.appendChild(o)
            }
            return e
        }, t.prototype.construct.caption = function() {
            return this.$table.querySelector("caption").cloneNode(!0)
        }, t.prototype.construct.toggleLink = function(e) {
            var t = document.createElement("button"),
                n = document.createElement("span"),
                o = document.createElement("span");
            return n.classList.add("mc-toggle-text"), n.innerHTML = e, o.classList.add("govuk-visually-hidden", "mc-toggle-status"), o.setAttribute("role", "alert"), t.classList.add("govuk-body-s", "mc-toggle-button"), t.appendChild(n), t.appendChild(o), t
        }, t.prototype.addToggleClick = function(o, i, r, s) {
            var a = this;
            this.toggleLink.addEventListener("click", function(e) {
                e.preventDefault();
                var t = a.toggleLink.querySelector(".mc-toggle-text"),
                    n = a.toggleLink.querySelector(".mc-toggle-status");
                a.$graphContainer.classList.toggle("mc-hidden"), a.$table.classList.toggle("mc-hidden"), t.innerHTML = t.innerHTML === i ? o : i, n.innerHTML = n.innerHTML === s ? r : s
            })
        }, t.prototype.constructChart = function() {
            var e = this.construct.thead.call(this),
                t = this.construct.tbody.call(this);
            if (this.toggleLink = this.construct.toggleLink(this.options.chartVisibleText), this.addToggleClick(this.options.chartVisibleText, this.options.tableVisibleText, this.options.chartAlertText, this.options.tableAlertText), this.options.hasCaption) {
                var n = this.construct.caption.call(this);
                this.$graph.appendChild(n)
            }
            this.options.toggleAfter ? this.$table.insertAdjacentElement("afterend", this.toggleLink) : this.$table.insertAdjacentElement("beforebegin", this.toggleLink), this.$graph.appendChild(e), this.$graph.appendChild(t)
        }, t.prototype.utils = {
            isFloat: function(e) {
                return !isNaN(parseFloat(e))
            },
            stripValue: function(e) {
                return e.replace(/,|\xa3|%|[a-z]/gi, "")
            },
            returnMax: function(e) {
                for (var t = 0, n = 0; n < e.length; n++) e[n] > t && (t = e[n]);
                return t
            },
            isNegative: function(e) {
                return e < 0
            }
        }, t.prototype.addClassesToHeader = function() {
            var e = this.$graph.querySelectorAll(".mc-th"),
                t = e.length;
            this.options.stacked && (e[t - 1].classList.add("mc-stacked-header", "mc-header-total"), t -= 1);
            for (var n = 1; n < t; n++) e[n].classList.add("mc-key-header"), e[n].classList.contains("mc-stacked-header") || e[n].classList.add("mc-key-" + n)
        }, t.prototype.calculateMaxWidth = function() {
            for (var e = [], t = 0, n = this.$graph.querySelectorAll(".mc-tr"), o = 0; o < n.length; o++) {
                for (var i = n[o], r = i.querySelectorAll(".mc-td"), s = [], a = 1; a < r.length; a++) s.push(r[a]);
                var l = s.length;
                if (l) {
                    this.options.stacked && (s[l - 1].classList.add("mc-stacked-total"), l -= 1);
                    var c = i.querySelector(".mc-td");
                    c && c.classList.add("mc-key-cell");
                    for (var u = 0, d = 0; d < l; d++) {
                        var p = s[d];
                        p.classList.add("mc-bar-cell"), p.classList.add("mc-bar-" + (d + 1));
                        var f = this.utils.stripValue(p.innerText);
                        if (this.utils.isFloat(f)) {
                            var h = parseFloat(f, 10),
                                m = Math.abs(h);
                            0 === h && p.classList.add("mc-bar-zero"), this.options.negative && (this.utils.isNegative(h) ? (p.classList.add("mc-bar-negative"), t < m && (t = m)) : p.classList.add("mc-bar-positive")), h = m, this.options.stacked ? u += h : (u = h, e.push(h))
                        }
                    }
                }
                this.options.stacked && e.push(u)
            }
            var g = {};
            return g.max = parseFloat(this.utils.returnMax(e), 10), g.single = parseFloat(this.options.outOf / g.max, 10), this.options.negative && (g.marginLeft = parseFloat(t, 10) * g.single, g.maxNegative = parseFloat(t, 10)), g
        }, t.prototype.applyWidths = function() {
            this.dimensions = this.calculateMaxWidth();
            for (var e = this.$graph.querySelectorAll(".mc-tr"), t = 0; t < e.length; t++)
                for (var n = e[t].querySelectorAll(".mc-bar-cell"), o = 0; o < n.length; o++) {
                    var i = n[o],
                        r = parseFloat(this.utils.stripValue(i.innerText), 10),
                        s = r * this.dimensions.single,
                        a = Math.abs(r),
                        l = Math.abs(s);
                    if (this.options.negative)
                        if (i.classList.contains("mc-bar-positive")) i.style.marginLeft = this.dimensions.marginLeft + "%";
                        else if (a < this.dimensions.maxNegative) {
                        var c = (this.dimensions.maxNegative - a) * this.dimensions.single;
                        i.style.marginLeft = c + "%"
                    }
                    i.innerHTML = "<span>" + i.innerHTML + "</span>", i.style.width = l + "%"
                }
        }, t.prototype.insert = function() {
            var e = document.createElement("span"),
                t = "mc-chart-not-accessible-" + this.chartId;
            e.innerHTML = "This content is not accessible - switch to table", e.className = "mc-hidden", e.id = t, this.$graphContainer.setAttribute("aria-labelledby", t), this.$graphContainer.appendChild(this.$graph), this.$graphContainer.appendChild(e), this.$table.insertAdjacentElement("afterend", this.$graphContainer)
        }, t.prototype.applyOutdent = function() {
            for (var e = this.$graph.querySelectorAll(".mc-bar-cell"), t = 0; t < e.length; t++) {
                var n = e[t],
                    o = parseFloat(this.utils.stripValue(n.innerText), 10),
                    i = n.querySelector("span"),
                    r = n.querySelector("span").offsetWidth + 5,
                    s = n.offsetWidth;
                this.options.stacked ? (s < r && 0 < o || o < 1) && n.classList.add("mc-value-overflow") : (0 === o && n.classList.add("mc-bar-outdented"), this.options.autoOutdent && s <= r || this.options.outdentAll ? (n.classList.add("mc-bar-outdented"), i.style.marginLeft = "100%", i.style.display = "inline-block") : n.classList.add("mc-bar-indented"))
            }
        }, t.prototype.getChartId = function(e) {
            for (var t = document.querySelectorAll("table.js-barchart-table"), n = null, o = 0; o < t.length; o++) t[o] === e && (n = o);
            return n
        }, e.MagnaCharta = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {},
    function(s) {
        "use strict";
        var e = function(e) {
            this.$element = e
        };
        e.prototype.init = function() {
            for (var e = this.$element.querySelectorAll(".js-barchart-table"), t = [], n = 0; n < e.length; n++) {
                var o = e[n].className; - 1 === o.indexOf("mc-chart") && -1 === o.indexOf("js-barchart-table-init") && t.push(e[n])
            }
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                (new s.Modules.MagnaCharta).start(r, {
                    toggleText: "Change between chart and table"
                }), r.className = r.className + " js-barchart-table-init"
            }
        }, s.GovspeakBarchartEnhancement = e
    }(window.GOVUK, window.jQuery),
    function() {
        "use strict";
        window.GOVUK = window.GOVUK || {};
        var e = window.GOVUK || {},
            l = function(e) {
                this.$element = e
            };
        l.prototype.init = function() {
            if (this.campaignCookiesAllowed()) {
                var e = this.$element.querySelectorAll('a[href*="youtube.com"], a[href*="youtu.be"]');
                0 < e.length && l.insertApiScript();
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t],
                        o = n.getAttribute("href"),
                        i = n.hasAttribute("data-youtube-player-analytics"),
                        r = {
                            link: n
                        };
                    if (i && (r.tracking = {
                            hasTracking: i,
                            category: n.getAttribute("data-youtube-player-analytics-category")
                        }), 0 <= o.indexOf("/live_stream")) {
                        var s = l.parseLivestream(o);
                        !this.hasDisabledEmbed(n) && s && (r.channel = s, this.setupVideo(r))
                    } else {
                        var a = l.parseVideoId(o);
                        !this.hasDisabledEmbed(n) && a && (r.videoId = a, this.setupVideo(r))
                    }
                }
            }
        }, l.prototype.hasDisabledEmbed = function(e) {
            return "off" === e.getAttribute("data-youtube-player")
        }, l.prototype.setupVideo = function(e) {
            var t = l.nextId(),
                n = e.link,
                o = e.videoId ? e.videoId : e.channel,
                i = n.parentNode,
                r = i.parentNode,
                s = document.createElement("div");
            s.className += "gem-c-govspeak__youtube-video", s.innerHTML = '<span id="' + t + '" data-video-id="' + o + '"></span>', e.title = n.textContent, r.replaceChild(s, i), this.insertVideo(t, e)
        }, l.prototype.insertVideo = function(e, r) {
            var t = "",
                n = "";
            r.channel ? (t = r.channel, n = "live_stream") : n = r.videoId;
            var o = function() {
                new window.YT.Player(e, {
                    videoId: n,
                    host: "https://www.youtube-nocookie.com",
                    playerVars: {
                        enablejsapi: 1,
                        origin: window.location.origin,
                        rel: 0,
                        disablekb: 1,
                        modestbranding: 1,
                        channel: t
                    },
                    events: {
                        onReady: function(e) {
                            var t = r.title;
                            e.target.getIframe().title = t + " (video)"
                        },
                        onStateChange: function(e) {
                            var t = e.data,
                                n = e.target,
                                o = {
                                    "-1": "VideoUnstarted",
                                    0: "VideoEnded",
                                    1: "VideoPlaying",
                                    2: "VideoPaused",
                                    3: "VideoBuffering",
                                    5: "VideoCued"
                                };
                            if (o[t] && r.tracking && r.tracking.hasTracking && window.GOVUK.analytics && window.GOVUK.analytics.trackEvent) {
                                var i = {
                                    category: r.tracking.category,
                                    action: o[t],
                                    label: {
                                        transport: "beacon",
                                        label: n.getVideoData && n.getVideoData().title
                                    }
                                };
                                window.GOVUK.analytics.trackEvent(i.category, i.action, i.label)
                            }
                        }
                    }
                })
            };
            o = o.bind(this), l.playerApiReady ? o.call() : l.queuedInserts.push(o)
        }, l.prototype.campaignCookiesAllowed = function() {
            var e = window.GOVUK.getConsentCookie();
            return null === e || e.campaigns
        }, l.nextId = function() {
            return this.embedCount = this.embedCount || 0, this.embedCount += 1, "youtube-" + this.embedCount
        }, l.insertApiScript = function() {
            if (!this.apiScriptInserted) {
                var e = document.createElement("script");
                e.src = "https://www.youtube.com/player_api";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t), this.apiScriptInserted = !0
            }
        }, l.parseLivestream = function(e) {
            var t = e.match(/channel=([^&]*)/);
            if (t) return t[1]
        }, l.parseVideoId = function(e) {
            var t;
            if (-1 < e.indexOf("youtube.com")) {
                var n = {};
                if (1 === (t = e.split("?")).length) return;
                t = t[1].split("&");
                for (var o = 0; o < t.length; o++) {
                    var i = t[o].split("=");
                    n[i[0]] = i[1]
                }
                return n.v
            }
            if (-1 < e.indexOf("youtu.be")) return (t = e.split("/")).pop()
        }, l.apiScriptInserted = !1, l.playerApiReady = !1, l.queuedInserts = [], window.onYouTubePlayerAPIReady = function() {
            l.playerApiReady = !0;
            for (var e = 0; e < l.queuedInserts.length; e++) l.queuedInserts[e].call()
        }, e.GovspeakYoutubeLinkEnhancement = l
    }(),
    function() {
        "use strict";
        if (document.querySelectorAll && document.addEventListener) {
            var e, t, n = document.querySelectorAll(".js-header-toggle");
            for (e = 0, t = n.length; e < t; e++) n[e].addEventListener("click", function(e) {
                e.preventDefault();
                var t = this.getAttribute("href") ? document.getElementById(this.getAttribute("href").substr(1)) : document.getElementById(this.getAttribute("data-search-toggle-for")),
                    n = t.getAttribute("class") || "",
                    o = this.getAttribute("class") || "",
                    i = o.match("search-toggle"),
                    r = this.getAttribute("data-show-text") || "Show search",
                    s = this.getAttribute("data-hide-text") || "Hide search"; - 1 !== n.indexOf("js-visible") ? (t.setAttribute("class", n.replace(/(^|\s)js-visible(\s|$)/, "")), window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && window.GOVUK.analytics.trackEvent("headerClicked", "menuClosed", {
                    label: "none"
                })) : (t.setAttribute("class", n + " js-visible"), window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && window.GOVUK.analytics.trackEvent("headerClicked", "menuOpened", {
                    label: "none"
                })), -1 !== o.indexOf("js-visible") ? (this.setAttribute("class", o.replace(/(^|\s)js-visible(\s|$)/, "")), i && (this.innerText = r)) : (this.setAttribute("class", o + " js-visible"), i && (this.innerText = s)), this.setAttribute("aria-expanded", "true" !== this.getAttribute("aria-expanded")), t.setAttribute("aria-hidden", "false" === t.getAttribute("aria-hidden"))
            })
        }
    }.call(this),
    function() {
        for (var e = document.querySelectorAll(".govuk-js-header-toggle"), t = 0; t < e.length; t++) {
            e[t].addEventListener("click", function(e) {
                var t = e.target.getAttribute("aria-expanded");
                window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && ("true" === t ? window.GOVUK.analytics.trackEvent("headerClicked", "menuClosed", {
                    label: "none"
                }) : window.GOVUK.analytics.trackEvent("headerClicked", "menuOpened", {
                    label: "none"
                }))
            })
        }
    }(), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t() {}
        t.prototype.start = function(e) {
            this.$module = e[0], this.$module.focus()
        }, e.InitialFocus = t
    }(window.GOVUK.Modules),
    function(e) {
        "use strict";
        var o = e.jQuery,
            i = e.GOVUK || {},
            t = function(e, t) {
                this.$el = o(e), this.$extraLinks = this.$el.find("li:not(" + t + ")"), 1 < this.$extraLinks.length && (this.addToggleLink(), this.hideExtraLinks())
            };
        t.prototype = {
            toggleText: function() {
                return 1 < this.$extraLinks.length ? "+" + this.$extraLinks.length + " others" : "+" + this.$extraLinks.length + " other"
            },
            addToggleLink: function() {
                this.$toggleLink = o('<a href="#">' + this.toggleText() + "</a>"), this.$toggleLink.click(o.proxy(this.toggleLinks, this)), this.$toggleLink.insertAfter(this.$el)
            },
            toggleLinks: function(e) {
                e.preventDefault(), this.$toggleLink.remove(), this.showExtraLinks()
            },
            hideExtraLinks: function() {
                this.$extraLinks.addClass("visuallyhidden"), o(window).trigger("govuk.pageSizeChanged")
            },
            showExtraLinks: function() {
                this.$extraLinks.removeClass("visuallyhidden"), o(window).trigger("govuk.pageSizeChanged")
            }
        }, i.PrimaryList = t, i.primaryLinks = {
            init: function(n) {
                o(n).parent().each(function(e, t) {
                    new i.PrimaryList(t, n)
                })
            }
        }, e.GOVUK = i
    }(window), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t() {}
        t.prototype.start = function(e) {
            this.$module = e[0], this.$module.trackChange = this.trackChange.bind(this), this.$module.fireTrackingChange = this.fireTrackingChange.bind(this), this.$module.addEventListener("change", this.trackChange)
        }, t.prototype.trackChange = function() {
            var e = this.options[this.selectedIndex];
            e.hasAttribute("data-track-category") && e.hasAttribute("data-track-action") && this.fireTrackingChange(e)
        }, t.prototype.fireTrackingChange = function(e) {
            var t = {
                    transport: "beacon"
                },
                n = e.getAttribute("data-track-category"),
                o = e.getAttribute("data-track-action"),
                i = e.getAttribute("data-track-label"),
                r = e.getAttribute("data-track-value"),
                s = e.getAttribute("data-track-dimension"),
                a = e.getAttribute("data-track-dimension-index"),
                l = e.getAttribute("data-track-options");
            if (i && (t.label = i), r && (t.value = r), s && a && (t["dimension" + a] = s), l)
                for (var c in l = JSON.parse(l)) t[c] = l[c];
            window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && window.GOVUK.analytics.trackEvent(n, o, t)
        }, e.TrackSelectChange = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t() {}
        t.prototype.start = function(e) {
            this.$module = e[0], this.toggleTarget = this.$module.querySelector(".js-class-toggle"), this.$module.addFocusClass = this.addFocusClass.bind(this), this.$module.removeFocusClassFromEmptyInput = this.removeFocusClassFromEmptyInput.bind(this), this.inputIsEmpty() || this.addFocusClass(), this.toggleTarget.addEventListener("focus", this.$module.addFocusClass), this.toggleTarget.addEventListener("blur", this.$module.removeFocusClassFromEmptyInput)
        }, t.prototype.inputIsEmpty = function() {
            return "" === this.toggleTarget.value
        }, t.prototype.addFocusClass = function() {
            this.toggleTarget.classList.add("focus")
        }, t.prototype.removeFocusClassFromEmptyInput = function() {
            this.inputIsEmpty() && this.toggleTarget.classList.remove("focus")
        }, e.GemToggleInputClassOnFocus = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t() {}
        t.prototype.start = function(e) {
            this.$module = e[0], this.$module.toggleTrigger = this.$module.querySelector("[data-controls][data-expanded]"), this.$module.toggleTrigger && (this.$module.toggleClass = this.$module.getAttribute("data-toggle-class") || "js-hidden", this.$module.isTrackable = this.$module.toggleTrigger.hasAttribute("data-track-category") && this.$module.toggleTrigger.hasAttribute("data-track-action"), this.$module.isTrackable && (this.$module.trackCategory = this.$module.toggleTrigger.getAttribute("data-track-category"), this.$module.trackAction = this.$module.toggleTrigger.getAttribute("data-track-action")), this.addAriaAttrs(), this.toggleOnClick())
        }, t.prototype.addAriaAttrs = function() {
            this.$module.toggleTrigger.setAttribute("role", "button"), this.$module.toggleTrigger.setAttribute("aria-controls", this.$module.toggleTrigger.getAttribute("data-controls")), this.$module.toggleTrigger.setAttribute("aria-expanded", this.$module.toggleTrigger.getAttribute("data-expanded")), this.$module.targets = this.getTargetElements();
            for (var e = 0; e < this.$module.targets.length; e++) this.$module.targets[e].setAttribute("aria-live", "polite"), this.$module.targets[e].setAttribute("role", "region")
        }, t.prototype.getTargetElements = function() {
            var e = "#" + this.$module.toggleTrigger.getAttribute("aria-controls").split(" ").join(", #");
            return this.$module.querySelectorAll(e)
        }, t.prototype.toggleOnClick = function() {
            var i = this;
            this.$module.toggleTrigger.addEventListener("click", function(e) {
                if (e.preventDefault(), "true" === this.getAttribute("aria-expanded")) {
                    this.setAttribute("aria-expanded", !1);
                    for (var t = 0; t < i.$module.targets.length; t++) i.$module.targets[t].classList.add(i.$module.toggleClass)
                } else {
                    this.setAttribute("aria-expanded", !0);
                    for (var n = 0; n < i.$module.targets.length; n++) i.$module.targets[n].classList.remove(i.$module.toggleClass)
                }
                var o = this.getAttribute("data-toggled-text");
                "string" == typeof o && (this.setAttribute("data-toggled-text", this.innerText), this.innerText = o), window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && i.$module.isTrackable && i.track()
            })
        }, t.prototype.track = function() {
            var e = {
                label: this.$module.toggleTrigger.getAttribute("data-toggled-text") || this.$module.toggleTrigger.innerText
            };
            window.GOVUK.analytics.trackEvent(this.$module.trackCategory, this.$module.trackAction, e)
        }, e.GemToggle = t
    }(window.GOVUK.Modules), this.Element && function(e) {
        e.matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.msMatchesSelector || function(e) {
            for (var t = this, n = (t.parentNode || t.document).querySelectorAll(e), o = -1; n[++o] && n[o] != t;);
            return !!n[o]
        }
    }(Element.prototype), this.Element && function(e) {
        e.closest = e.closest || function(e) {
            for (var t = this; t.matches && !t.matches(e);) t = t.parentNode;
            return t.matches ? t : null
        }
    }(Element.prototype), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t() {}
        t.prototype.start = function(e) {
            this.$module = e[0], this.$module.handleClick = this.handleClick.bind(this);
            var t = this;
            this.$module.addEventListener("click", function(e) {
                t.$module.handleClick(e.target)
            })
        }, t.prototype.handleClick = function(e) {
            var t = {
                transport: "beacon"
            };
            if (e.hasAttribute("data-track-category") || e.hasAttribute("data-track-action") || (e = e.closest("[data-track-category][data-track-action]")), e) {
                var n = e.getAttribute("data-track-category"),
                    o = e.getAttribute("data-track-action"),
                    i = e.getAttribute("data-track-label"),
                    r = e.getAttribute("data-track-value"),
                    s = e.getAttribute("data-track-dimension"),
                    a = e.getAttribute("data-track-dimension-index"),
                    l = e.getAttribute("data-track-options");
                if (i && (t.label = i), r && (t.value = r), s && a && (t["dimension" + a] = s), l)
                    for (var c in l = JSON.parse(l)) t[c] = l[c];
                window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && window.GOVUK.analytics.trackEvent(n, o, t)
            }
        }, e.GemTrackClick = t
    }(window.GOVUK.Modules),
    function() {
        "use strict";
        window.GOVUK = window.GOVUK || {}, window.GOVUK.triggerEvent = function(e, t, n) {
            var o, i = n || {},
                r = i.keyCode;
            Object.prototype.hasOwnProperty.call(i, "bubbles") || (i.bubbles = !0), Object.prototype.hasOwnProperty.call(i, "cancelable") || (i.cancelable = !0), "function" == typeof window.CustomEvent ? o = new window.CustomEvent(t, i) : (o = document.createEvent("CustomEvent")).initCustomEvent(t, i.bubbles, i.cancelable, i.detail), r && (o.keyCode = r), e.dispatchEvent(o)
        }
    }(window), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        for (var n = t || 0, o = this.length; n < o; n++)
            if (this[n] === e) return n;
        return -1
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.sectionClass = "gem-c-accordion__section", this.moduleId = this.$module.getAttribute("id"), this.sections = this.$module.querySelectorAll("." + this.sectionClass), this.openAllButton = "", this.controlsClass = "gem-c-accordion__controls", this.openAllClass = "gem-c-accordion__open-all", this.openAllTextClass = "gem-c-accordion__open-all-text", this.sectionHeaderClass = "gem-c-accordion__section-header", this.sectionHeadingClass = "gem-c-accordion__section-heading", this.sectionSummaryClass = "gem-c-accordion__section-summary", this.sectionButtonClass = "gem-c-accordion__section-button", this.sectionExpandedClass = "gem-c-accordion__section--expanded", this.sectionInnerContent = "gem-c-accordion__section-content", this.toggleLinkClass = "js-toggle-link",
                this.sectionShowHideIconClass = "gem-c-accordion__toggle-link", this.sectionShowHideTextClass = "gem-c-accordion__toggle-text", this.upChevonIconClass = "gem-c-accordion-nav__chevron", this.downChevonIconClass = "gem-c-accordion-nav__chevron--down", this.$module.actions = {}, this.$module.actions.locale = this.$module.getAttribute("data-locale"), this.$module.actions.showText = this.$module.getAttribute("data-show-text"), this.$module.actions.hideText = this.$module.getAttribute("data-hide-text"), this.$module.actions.showAllText = this.$module.getAttribute("data-show-all-text"), this.$module.actions.hideAllText = this.$module.getAttribute("data-hide-all-text"), this.$module.actions.thisSectionVisuallyHidden = this.$module.getAttribute("data-this-section-visually-hidden")
        }
        t.prototype.init = function() {
            this.browserSupportsSessionStorage = n.checkForSessionStorage(), this.$module.classList.add("gem-c-accordion--active"), this.initControls(), this.initSectionHeaders(), "true" === this.$module.getAttribute("data-anchor-navigation") && (this.openByAnchorOnLoad(), this.addEventListenersForAnchors());
            var e = this.checkIfAllSectionsOpen();
            this.updateOpenAllButton(e)
        }, t.prototype.initControls = function() {
            this.openAllButton = document.createElement("button"), this.openAllButton.setAttribute("class", this.openAllClass), this.openAllButton.setAttribute("aria-expanded", "false");
            var e = document.createElement("span");
            e.classList.add(this.upChevonIconClass), this.openAllButton.appendChild(e);
            var t = document.createElement("div");
            t.setAttribute("class", this.controlsClass), t.appendChild(this.openAllButton), this.$module.insertBefore(t, this.$module.firstChild);
            var n = document.createElement("span");
            n.classList.add(this.openAllTextClass), this.openAllButton.insertBefore(n, this.openAllButton.childNodes[0] || null), this.openAllButton.addEventListener("click", this.onOpenOrCloseAllToggle.bind(this))
        }, t.prototype.initSectionHeaders = function() {
            nodeListForEach(this.sections, function(e, t) {
                var n = e.querySelector("." + this.sectionHeaderClass);
                this.initHeaderAttributes(n, t), this.setExpanded(this.isExpanded(e), e), n.addEventListener("click", this.onSectionToggle.bind(this, e)), this.setInitialState(e)
            }.bind(this))
        }, t.prototype.initHeaderAttributes = function(e, t) {
            var n = e.querySelector("." + this.sectionButtonClass),
                o = e.querySelector("." + this.sectionHeadingClass),
                i = e.querySelector("." + this.sectionSummaryClass),
                r = document.createElement("button");
            r.setAttribute("id", this.moduleId + "-heading-" + (t + 1)), r.setAttribute("aria-controls", this.moduleId + "-content-" + (t + 1));
            var s = document.createElement("span");
            s.classList.add(this.sectionShowHideIconClass, this.toggleLinkClass);
            var a = document.createElement("span");
            a.classList.add("govuk-visually-hidden"), a.innerHTML = ", ";
            var l = document.createElement("span");
            l.classList.add("govuk-visually-hidden"), l.innerHTML = this.$module.actions.thisSectionVisuallyHidden, this.$module.actions.locale && (l.lang = this.filterLocale("this_section_visually_hidden"));
            var c = document.createElement("span"),
                u = document.createElement("span");
            u.classList.add(this.upChevonIconClass), s.appendChild(u), c.classList.add(this.sectionShowHideTextClass), s.insertBefore(c, s.childNodes[0] || null);
            for (var d = 0; d < n.attributes.length; d++) {
                var p = n.attributes.item(d);
                r.setAttribute(p.nodeName, p.nodeValue)
            }
            r.innerHTML = n.innerHTML, o.removeChild(n), o.appendChild(r), r.appendChild(a), null != i && (r.setAttribute("aria-describedby", this.moduleId + "-summary-" + (t + 1)), r.appendChild(i)), r.appendChild(s), r.appendChild(l)
        }, t.prototype.onSectionToggle = function(e) {
            var t = this.isExpanded(e);
            this.setExpanded(!t, e), this.storeState(e)
        }, t.prototype.onOpenOrCloseAllToggle = function() {
            var t = this,
                e = this.sections,
                n = !this.checkIfAllSectionsOpen();
            nodeListForEach(e, function(e) {
                t.setExpanded(n, e), t.storeState(e)
            }), t.updateOpenAllButton(n)
        }, t.prototype.setExpanded = function(e, t) {
            var n = t.querySelector("." + this.upChevonIconClass),
                o = t.querySelector("." + this.sectionShowHideTextClass),
                i = t.querySelector("." + this.sectionButtonClass),
                r = e ? this.$module.actions.hideText : this.$module.actions.showText;
            o.innerHTML = r, i.setAttribute("aria-expanded", e), i.classList.add(this.toggleLinkClass), this.$module.actions.locale && (o.lang = this.filterLocale(e ? "hide_text" : "show_text")), e ? (t.classList.add(this.sectionExpandedClass), n.classList.remove(this.downChevonIconClass)) : (t.classList.remove(this.sectionExpandedClass), n.classList.add(this.downChevonIconClass));
            var s = this.checkIfAllSectionsOpen();
            this.updateOpenAllButton(s)
        }, t.prototype.isExpanded = function(e) {
            return e.classList.contains(this.sectionExpandedClass)
        }, t.prototype.checkIfAllSectionsOpen = function() {
            return this.sections.length === this.$module.querySelectorAll("." + this.sectionExpandedClass).length
        }, t.prototype.updateOpenAllButton = function(e) {
            var t = this.openAllButton.querySelector("." + this.upChevonIconClass),
                n = this.openAllButton.querySelector("." + this.openAllTextClass),
                o = e ? this.$module.actions.hideAllText : this.$module.actions.showAllText;
            this.openAllButton.setAttribute("aria-expanded", e), n.innerHTML = o, this.$module.actions.locale && (n.lang = this.filterLocale(e ? "hide_all_text" : "show_all_text")), e ? t.classList.remove(this.downChevonIconClass) : t.classList.add(this.downChevonIconClass)
        };
        var n = {
            checkForSessionStorage: function() {
                var e, t = "this is the test string";
                try {
                    return window.sessionStorage.setItem(t, t), e = window.sessionStorage.getItem(t) === t.toString(), window.sessionStorage.removeItem(t), e
                } catch (n) {
                    "undefined" != typeof console && "undefined" != typeof console.log || console.log("Notice: sessionStorage not available.")
                }
            }
        };
        t.prototype.storeState = function(e) {
            if (this.browserSupportsSessionStorage) {
                var t = e.querySelector("." + this.sectionButtonClass);
                if (t) {
                    var n = t.getAttribute("aria-controls"),
                        o = t.getAttribute("aria-expanded");
                    void 0 !== n || "undefined" != typeof console && "undefined" != typeof console.log || console.error(new Error("No aria controls present in accordion section heading.")), void 0 !== o || "undefined" != typeof console && "undefined" != typeof console.log || console.error(new Error("No aria expanded present in accordion section heading.")), n && o && window.sessionStorage.setItem(n, o)
                }
            }
        }, t.prototype.setInitialState = function(e) {
            if (this.browserSupportsSessionStorage) {
                var t = e.querySelector("." + this.sectionButtonClass);
                if (t) {
                    var n = t.getAttribute("aria-controls"),
                        o = n ? window.sessionStorage.getItem(n) : null;
                    null !== o && this.setExpanded("true" === o, e)
                }
            }
        }, t.prototype.openByAnchorOnLoad = function() {
            var e = window.location.hash.split("#")[1];
            window.location.hash && document.getElementById(e) && this.openForAnchor(e)
        }, t.prototype.addEventListenersForAnchors = function() {
            nodeListForEach(this.$module.querySelectorAll("." + this.sectionInnerContent + ' a[href*="#"]'), function(e) {
                e.pathname === window.location.pathname && e.addEventListener("click", this.openForAnchor.bind(this, e.hash.split("#")[1]))
            }.bind(this))
        }, t.prototype.openForAnchor = function(e) {
            var t = document.getElementById(e),
                n = this.getContainingSection(t);
            this.setExpanded(!0, n)
        }, t.prototype.getContainingSection = function(e) {
            for (; !e.classList.contains(this.sectionClass);) e = e.parentElement;
            return e
        }, t.prototype.filterLocale = function(e) {
            return this.$module.actions.locale && -1 !== this.$module.actions.locale.indexOf("{") ? JSON.parse(this.$module.actions.locale)[e] : this.$module.actions.locale ? this.$module.actions.locale : void 0
        }, e.GemAccordion = t
    }(window.GOVUK.Modules),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function e(e) {
            this.$module = e, this.debounceFormSubmitTimer = null
        }(function() {
            "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
            }(this)
        }).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var a, l, c, u;
                "defineProperty" in Object && function() {
                    try {
                        var e = {};
                        return Object.defineProperty(e, "test", {
                            value: 42
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                    if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                    if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                    if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                    var o = String(t),
                        i = "value" in n || "writable" in n,
                        r = "get" in n && typeof n.get,
                        s = "set" in n && typeof n.set;
                    if (r) {
                        if ("function" !== r) throw new TypeError("Getter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineGetter__.call(e, o, n.get)
                    } else e[o] = n.value;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Setter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineSetter__.call(e, o, n.set)
                    }
                    return "value" in n && (e[o] = n.value), e
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {});
        var n = 32,
            t = 1;
        return e.prototype.handleKeyDown = function(e) {
            var t = e.target;
            "button" === t.getAttribute("role") && e.keyCode === n && (e.preventDefault(), t.click())
        }, e.prototype.debounce = function(e) {
            if ("true" === e.target.getAttribute("data-prevent-double-click")) return this.debounceFormSubmitTimer ? (e.preventDefault(), !1) : void(this.debounceFormSubmitTimer = setTimeout(function() {
                this.debounceFormSubmitTimer = null
            }.bind(this), 1e3 * t))
        }, e.prototype.init = function() {
            this.$module.addEventListener("keydown", this.handleKeyDown), this.$module.addEventListener("click", this.debounce)
        }, e
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukButton = window.GOVUKFrontend,
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function e(e) {
            this.$module = e, this.$textarea = e.querySelector(".govuk-js-character-count"), this.$textarea && (this.$countMessage = e.querySelector('[id="' + this.$textarea.id + '-info"]'))
        }
        return function() {
                var a, l, c, u;
                "defineProperty" in Object && function() {
                    try {
                        var e = {};
                        return Object.defineProperty(e, "test", {
                            value: 42
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                    if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                    if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                    if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                    var o = String(t),
                        i = "value" in n || "writable" in n,
                        r = "get" in n && typeof n.get,
                        s = "set" in n && typeof n.set;
                    if (r) {
                        if ("function" !== r) throw new TypeError("Getter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineGetter__.call(e, o, n.get)
                    } else e[o] = n.value;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Setter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineSetter__.call(e, o, n.set)
                    }
                    return "value" in n && (e[o] = n.value), e
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                    e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(p) {
                var e, t, n;
                "DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList" in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
                    var i = !0,
                        n = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === i || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        n({}, "support")
                    } catch (e) {
                        i = !1
                    }
                    return function(i, r) {
                        var s = this,
                            a = [],
                            l = {},
                            c = 0,
                            e = 0,
                            t = function(e) {
                                n(s, e, function() {
                                    return d(), a[e]
                                }, !1)
                            },
                            u = function() {
                                if (e <= c)
                                    for (; e < c; ++e) t(e)
                            },
                            d = function() {
                                var e, t, n = arguments,
                                    o = /\s+/;
                                if (n.length)
                                    for (t = 0; t < n.length; ++t)
                                        if (o.test(n[t])) throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5, e.name = "InvalidCharacterError", e;
                                for ("" === (a = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (a = []), l = {}, t = 0; t < a.length; ++t) l[a[t]] = !0;
                                c = a.length, u()
                            };
                        return d(), n(s, "length", function() {
                            return d(), c
                        }), s.toLocaleString = s.toString = function() {
                            return d(), a.join(" ")
                        }, s.item = function(e) {
                            return d(), a[e]
                        }, s.contains = function(e) {
                            return d(), !!l[e]
                        }, s.add = function() {
                            d.apply(s, e = arguments);
                            for (var e, t, n = 0, o = e.length; n < o; ++n) t = e[n], l[t] || (a.push(t), l[t] = !0);
                            c !== a.length && (c = a.length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u())
                        }, s.remove = function() {
                            d.apply(s, e = arguments);
                            for (var e, t = {}, n = 0, o = []; n < e.length; ++n) t[e[n]] = !0, delete l[e[n]];
                            for (n = 0; n < a.length; ++n) t[a[n]] || o.push(a[n]);
                            c = (a = o).length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u()
                        }, s.toggle = function(e, t) {
                            return d.apply(s, [e]), p !== t ? t ? (s.add(e), !0) : (s.remove(e), !1) : l[e] ? (s.remove(e), !1) : (s.add(e), !0)
                        }, s
                    }
                }()), "classList" in (n = document.createElement("span")) && (n.classList.toggle("x", !1), n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
                    var n = t;
                    if (n !== p) return this[(n = !!n) ? "add" : "remove"](e), n;
                    var o = !this.contains(e);
                    return this[o ? "add" : "remove"](e), o
                })), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a", "b"), !e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.add;
                        e.classList.constructor.prototype.add = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }(), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a"), e.classList.add("b"), e.classList.remove("a", "b"), e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.remove;
                        e.classList.constructor.prototype.remove = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }())
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var e;
                "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"), e.classList.contains("b")) || function(e) {
                    var u = !0,
                        d = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === u || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        d({}, "support")
                    } catch (t) {
                        u = !1
                    }
                    var p = function(e, l, c) {
                        d(e.prototype, l, function() {
                            var e, t = this,
                                n = "__defineGetter__DEFINE_PROPERTY" + l;
                            if (t[n]) return e;
                            if (!(t[n] = !0) === u) {
                                for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, s = r.length, a = 0; a < s; ++a)
                                    if (r[a]._R === t) {
                                        o = r[a];
                                        break
                                    } o || (o = i.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, t, c)
                            } else e = new DOMTokenList(t, c);
                            return d(t, l, function() {
                                return e
                            }), delete t[n], e
                        }, !0)
                    };
                    p(e.Element, "classList", "className"), p(e.HTMLElement, "classList", "className"), p(e.HTMLLinkElement, "relList", "rel"), p(e.HTMLAnchorElement, "relList", "rel"), p(e.HTMLAreaElement, "relList", "rel")
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}), e.prototype.defaults = {
                characterCountAttribute: "data-maxlength",
                wordCountAttribute: "data-maxwords"
            }, e.prototype.init = function() {
                var e = this.$module,
                    t = this.$textarea,
                    n = this.$countMessage;
                if (t && n) {
                    t.insertAdjacentElement("afterend", n), this.options = this.getDataset(e);
                    var o = this.defaults.characterCountAttribute;
                    this.options.maxwords && (o = this.defaults.wordCountAttribute), this.maxLength = e.getAttribute(o), this.maxLength && (e.removeAttribute("maxlength"), "onpageshow" in window ? window.addEventListener("pageshow", this.sync.bind(this)) : window.addEventListener("DOMContentLoaded", this.sync.bind(this)), this.sync())
                }
            }, e.prototype.sync = function() {
                this.bindChangeEvents(), this.updateCountMessage()
            }, e.prototype.getDataset = function(e) {
                var t = {},
                    n = e.attributes;
                if (n)
                    for (var o = 0; o < n.length; o++) {
                        var i = n[o],
                            r = i.name.match(/^data-(.+)/);
                        r && (t[r[1]] = i.value)
                    }
                return t
            }, e.prototype.count = function(e) {
                var t;
                this.options.maxwords ? t = (e.match(/\S+/g) || []).length : t = e.length;
                return t
            }, e.prototype.bindChangeEvents = function() {
                var e = this.$textarea;
                e.addEventListener("keyup", this.checkIfValueChanged.bind(this)), e.addEventListener("focus", this.handleFocus.bind(this)), e.addEventListener("blur", this.handleBlur.bind(this))
            }, e.prototype.checkIfValueChanged = function() {
                this.$textarea.oldValue || (this.$textarea.oldValue = ""), this.$textarea.value !== this.$textarea.oldValue && (this.$textarea.oldValue = this.$textarea.value, this.updateCountMessage())
            }, e.prototype.updateCountMessage = function() {
                var e = this.$textarea,
                    t = this.options,
                    n = this.$countMessage,
                    o = this.count(e.value),
                    i = this.maxLength,
                    r = i - o;
                o < i * (t.threshold ? t.threshold : 0) / 100 ? (n.classList.add("govuk-character-count__message--disabled"), n.setAttribute("aria-hidden", !0)) : (n.classList.remove("govuk-character-count__message--disabled"), n.removeAttribute("aria-hidden")), r < 0 ? (e.classList.add("govuk-textarea--error"), n.classList.remove("govuk-hint"), n.classList.add("govuk-error-message")) : (e.classList.remove("govuk-textarea--error"), n.classList.remove("govuk-error-message"), n.classList.add("govuk-hint"));
                var s = "remaining",
                    a = "character",
                    l = r;
                t.maxwords && (a = "word"), a += -1 === r || 1 === r ? "" : "s", s = r < 0 ? "too many" : "remaining", l = Math.abs(r), n.innerHTML = "You have " + l + " " + a + " " + s
            }, e.prototype.handleFocus = function() {
                this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1e3)
            }, e.prototype.handleBlur = function() {
                clearInterval(this.valueChecker)
            }, e
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukCharacterCount = window.GOVUKFrontend,
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : t()
    }(0, function() {
        "use strict";
        (function() {
            "document" in this && "matches" in document.documentElement || (Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function i(e) {
                for (var t = this, n = (t.document || t.ownerDocument).querySelectorAll(e), o = 0; n[o] && n[o] !== t;) ++o;
                return !!n[o]
            })
        }).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "document" in this && "closest" in document.documentElement || (Element.prototype.closest = function n(e) {
                    for (var t = this; t;) {
                        if (t.matches(e)) return t;
                        t = "SVGElement" in window && t instanceof SVGElement ? t.parentNode : t.parentElement
                    }
                    return null
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {})
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function e(e, t) {
            if (window.NodeList.prototype.forEach) return e.forEach(t);
            for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e)
        }

        function t(e) {
            this.$module = e, this.$inputs = e.querySelectorAll('input[type="checkbox"]')
        }
        return function() {
                var a, l, c, u;
                "defineProperty" in Object && function() {
                    try {
                        var e = {};
                        return Object.defineProperty(e, "test", {
                            value: 42
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                    if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                    if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                    if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                    var o = String(t),
                        i = "value" in n || "writable" in n,
                        r = "get" in n && typeof n.get,
                        s = "set" in n && typeof n.set;
                    if (r) {
                        if ("function" !== r) throw new TypeError("Getter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineGetter__.call(e, o, n.get)
                    } else e[o] = n.value;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Setter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineSetter__.call(e, o, n.set)
                    }
                    return "value" in n && (e[o] = n.value), e
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                    e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(p) {
                var e, t, n;
                "DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList" in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
                    var i = !0,
                        n = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === i || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        n({}, "support")
                    } catch (e) {
                        i = !1
                    }
                    return function(i, r) {
                        var s = this,
                            a = [],
                            l = {},
                            c = 0,
                            e = 0,
                            t = function(e) {
                                n(s, e, function() {
                                    return d(), a[e]
                                }, !1)
                            },
                            u = function() {
                                if (e <= c)
                                    for (; e < c; ++e) t(e)
                            },
                            d = function() {
                                var e, t, n = arguments,
                                    o = /\s+/;
                                if (n.length)
                                    for (t = 0; t < n.length; ++t)
                                        if (o.test(n[t])) throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5, e.name = "InvalidCharacterError", e;
                                for ("" === (a = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (a = []), l = {}, t = 0; t < a.length; ++t) l[a[t]] = !0;
                                c = a.length, u()
                            };
                        return d(), n(s, "length", function() {
                            return d(), c
                        }), s.toLocaleString = s.toString = function() {
                            return d(), a.join(" ")
                        }, s.item = function(e) {
                            return d(), a[e]
                        }, s.contains = function(e) {
                            return d(), !!l[e]
                        }, s.add = function() {
                            d.apply(s, e = arguments);
                            for (var e, t, n = 0, o = e.length; n < o; ++n) t = e[n], l[t] || (a.push(t), l[t] = !0);
                            c !== a.length && (c = a.length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u())
                        }, s.remove = function() {
                            d.apply(s, e = arguments);
                            for (var e, t = {}, n = 0, o = []; n < e.length; ++n) t[e[n]] = !0, delete l[e[n]];
                            for (n = 0; n < a.length; ++n) t[a[n]] || o.push(a[n]);
                            c = (a = o).length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u()
                        }, s.toggle = function(e, t) {
                            return d.apply(s, [e]), p !== t ? t ? (s.add(e), !0) : (s.remove(e), !1) : l[e] ? (s.remove(e), !1) : (s.add(e), !0)
                        }, s
                    }
                }()), "classList" in (n = document.createElement("span")) && (n.classList.toggle("x", !1), n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
                    var n = t;
                    if (n !== p) return this[(n = !!n) ? "add" : "remove"](e), n;
                    var o = !this.contains(e);
                    return this[o ? "add" : "remove"](e), o
                })), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a", "b"), !e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.add;
                        e.classList.constructor.prototype.add = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }(), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a"), e.classList.add("b"), e.classList.remove("a", "b"), e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.remove;
                        e.classList.constructor.prototype.remove = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }())
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var e;
                "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"), e.classList.contains("b")) || function(e) {
                    var u = !0,
                        d = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === u || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        d({}, "support")
                    } catch (t) {
                        u = !1
                    }
                    var p = function(e, l, c) {
                        d(e.prototype, l, function() {
                            var e, t = this,
                                n = "__defineGetter__DEFINE_PROPERTY" + l;
                            if (t[n]) return e;
                            if (!(t[n] = !0) === u) {
                                for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, s = r.length, a = 0; a < s; ++a)
                                    if (r[a]._R === t) {
                                        o = r[a];
                                        break
                                    } o || (o = i.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, t, c)
                            } else e = new DOMTokenList(t, c);
                            return d(t, l, function() {
                                return e
                            }), delete t[n], e
                        }, !0)
                    };
                    p(e.Element, "classList", "className"), p(e.HTMLElement, "classList", "className"), p(e.HTMLLinkElement, "relList", "rel"), p(e.HTMLAnchorElement, "relList", "rel"), p(e.HTMLAreaElement, "relList", "rel")
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}), t.prototype.init = function() {
                var n = this.$module;
                e(this.$inputs, function(e) {
                    var t = e.getAttribute("data-aria-controls");
                    t && n.querySelector("#" + t) && (e.setAttribute("aria-controls", t), e.removeAttribute("data-aria-controls"))
                }), "onpageshow" in window ? window.addEventListener("pageshow", this.syncAllConditionalReveals.bind(this)) : window.addEventListener("DOMContentLoaded", this.syncAllConditionalReveals.bind(this)), this.syncAllConditionalReveals(), n.addEventListener("click", this.handleClick.bind(this))
            }, t.prototype.syncAllConditionalReveals = function() {
                e(this.$inputs, this.syncConditionalRevealWithInputState.bind(this))
            }, t.prototype.syncConditionalRevealWithInputState = function(e) {
                var t = this.$module.querySelector("#" + e.getAttribute("aria-controls"));
                if (t && t.classList.contains("govuk-checkboxes__conditional")) {
                    var n = e.checked;
                    e.setAttribute("aria-expanded", n), t.classList.toggle("govuk-checkboxes__conditional--hidden", !n)
                }
            }, t.prototype.handleClick = function(e) {
                var t = e.target,
                    n = "checkbox" === t.getAttribute("type"),
                    o = t.getAttribute("aria-controls");
                n && o && this.syncConditionalRevealWithInputState(t)
            }, t
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukCheckboxes = window.GOVUKFrontend,
    function(e) {
        function t(e) {
            this.$module = e, this.$checkboxes = this.$module.querySelectorAll("input[type=checkbox]"), this.$nestedCheckboxes = this.$module.querySelectorAll("[data-nested=true] input[type=checkbox]"), this.$exclusiveCheckboxes = this.$module.querySelectorAll("[data-exclusive=true] input[type=checkbox]")
        }
        t.prototype.init = function() {
            this.applyAriaControlsAttributes(this.$module);
            for (var e = 0; e < this.$checkboxes.length; e++) this.$checkboxes[e].addEventListener("change", this.handleCheckboxChange);
            for (e = 0; e < this.$nestedCheckboxes.length; e++) this.$nestedCheckboxes[e].addEventListener("change", this.handleNestedCheckboxChange.bind(this));
            for (e = 0; e < this.$exclusiveCheckboxes.length; e++) this.$exclusiveCheckboxes[e].addEventListener("change", this.handleExclusiveCheckboxChange)
        }, t.prototype.handleCheckboxChange = function(e) {
            if (window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && !0 !== ((e || {}).detail || {}).suppressAnalytics) {
                var t = e.target,
                    n = t.getAttribute("data-track-category");
                if (n) {
                    var o = t.getAttribute("data-uncheck-track-category");
                    !t.checked && o && (n = o);
                    var i = t.getAttribute("data-track-action"),
                        r = t.getAttribute("data-track-options");
                    (r = r ? JSON.parse(r) : {}).value = t.getAttribute("data-track-value"), r.label = t.getAttribute("data-track-label"), window.GOVUK.analytics.trackEvent(n, i, r)
                }
            }
        }, t.prototype.handleNestedCheckboxChange = function(e) {
            var t = e.target,
                n = t.closest(".govuk-checkboxes--nested"),
                o = this.$module.querySelector(".govuk-checkboxes--nested[data-parent=" + t.id + "]");
            o ? this.toggleNestedCheckboxes(o, t) : n && this.toggleParentCheckbox(n, t)
        }, t.prototype.toggleNestedCheckboxes = function(e, t) {
            var n = e.querySelectorAll("input[type=checkbox]");
            if (t.checked)
                for (var o = 0; o < n.length; o++) n[o].checked = !0;
            else
                for (o = 0; o < n.length; o++) n[o].checked = !1
        }, t.prototype.toggleParentCheckbox = function(e, t) {
            var n = e.querySelectorAll("input"),
                o = e.querySelectorAll("input:checked"),
                i = e.getAttribute("data-parent"),
                r = document.getElementById(i);
            t.checked && n.length === o.length ? r.checked = !0 : r.checked = !1
        }, t.prototype.handleExclusiveCheckboxChange = function(e) {
            var t = e.target,
                n = t.closest(".govuk-checkboxes"),
                o = n.querySelector("input[type=checkbox][data-exclusive]"),
                i = n.querySelectorAll("input[type=checkbox]:not([data-exclusive])");
            if ("true" === t.getAttribute("data-exclusive") && !0 === t.checked)
                for (var r = 0; r < i.length; r++) i[r].checked = !1;
            else "true" !== t.getAttribute("data-exclusive") && !0 === t.checked && o && (o.checked = !1)
        }, t.prototype.applyAriaControlsAttributes = function(e) {
            for (var t = e.querySelectorAll("[data-controls]"), n = 0; n < t.length; n++) t[n].setAttribute("aria-controls", t[n].getAttribute("data-controls"))
        }, e.GemCheckboxes = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.$guidance = this.$module.querySelector(".gem-c-contextual-guidance__wrapper"), this.$inputId = this.$guidance.getAttribute("for"), this.$input = this.$module.querySelector("#" + this.$inputId)
        }
        t.prototype.init = function() {
            this.$input && this.$input.addEventListener("focus", this.handleFocus.bind(this))
        }, t.prototype.handleFocus = function() {
            this.hideAllGuidance(), this.$guidance.style.display = "block"
        }, t.prototype.hideAllGuidance = function() {
            for (var e = document.querySelectorAll(".gem-c-contextual-guidance__wrapper"), t = 0; t < e.length; t++) e[t].style.display = "none"
        }, e.ContextualGuidance = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.$module.cookieBanner = document.querySelector(".gem-c-cookie-banner"), this.$module.cookieBannerConfirmationMessage = this.$module.querySelector(".gem-c-cookie-banner__confirmation"), this.$module.cookieBannerConfirmationMessageText = this.$module.querySelector(".gem-c-cookie-banner__confirmation-message")
        }
        t.prototype.init = function() {
            this.$module.hideCookieMessage = this.hideCookieMessage.bind(this), this.$module.showConfirmationMessage = this.showConfirmationMessage.bind(this), this.$module.setCookieConsent = this.setCookieConsent.bind(this), this.$module.rejectCookieConsent = this.rejectCookieConsent.bind(this), this.setupCookieMessage()
        }, t.prototype.setupCookieMessage = function() {
            if (this.$hideLinks = this.$module.querySelectorAll("button[data-hide-cookie-banner]"), this.$hideLinks && this.$hideLinks.length)
                for (var e = 0; e < this.$hideLinks.length; e++) this.$hideLinks[e].addEventListener("click", this.$module.hideCookieMessage);
            this.$acceptCookiesButton = this.$module.querySelector("button[data-accept-cookies]"), this.$acceptCookiesButton && (this.$acceptCookiesButton.style.display = "block", this.$acceptCookiesButton.addEventListener("click", this.$module.setCookieConsent)), this.$rejectCookiesButton = this.$module.querySelector("button[data-reject-cookies]"), this.$rejectCookiesButton && (this.$rejectCookiesButton.style.display = "block", this.$rejectCookiesButton.addEventListener("click", this.$module.rejectCookieConsent)), this.showCookieMessage()
        }, t.prototype.showCookieMessage = function() {
            this.isInCookiesPage() || this.isInIframe() ? this.$module.style.display = "none" : this.$module && "true" !== window.GOVUK.cookie("cookies_preferences_set") ? (this.$module.style.display = "block", window.GOVUK.cookie("cookies_policy") || window.GOVUK.setDefaultConsentCookie(), window.GOVUK.deleteUnconsentedCookies()) : this.$module.style.display = "none"
        }, t.prototype.hideCookieMessage = function(e) {
            this.$module && (this.$module.hidden = !0, this.$module.style.display = "none", window.GOVUK.cookie("cookies_preferences_set", "true", {
                days: 365
            })), e.target && e.preventDefault()
        }, t.prototype.setCookieConsent = function() {
            "all" === this.$acceptCookiesButton.getAttribute("data-cookie-types") && this.$module.cookieBannerConfirmationMessageText.insertAdjacentHTML("afterbegin", "You have accepted additional cookies. "), window.GOVUK.approveAllCookieTypes(), this.$module.showConfirmationMessage(), this.$module.cookieBannerConfirmationMessage.focus(), window.GOVUK.cookie("cookies_preferences_set", "true", {
                days: 365
            }), window.GOVUK.analyticsInit && window.GOVUK.analyticsInit(), window.GOVUK.globalBarInit && window.GOVUK.globalBarInit.init(), window.GOVUK.triggerEvent(window, "cookie-consent")
        }, t.prototype.rejectCookieConsent = function() {
            this.$module.cookieBannerConfirmationMessageText.insertAdjacentHTML("afterbegin", "You have rejected additional cookies. "), this.$module.showConfirmationMessage(), this.$module.cookieBannerConfirmationMessage.focus(), window.GOVUK.cookie("cookies_preferences_set", "true", {
                days: 365
            })
        }, t.prototype.showConfirmationMessage = function() {
            this.$cookieBannerMainContent = document.querySelector(".js-banner-wrapper"), this.$cookieBannerMainContent.hidden = !0, this.$module.cookieBannerConfirmationMessage.style.display = "block", this.$module.cookieBannerConfirmationMessage.hidden = !1
        }, t.prototype.isInCookiesPage = function() {
            return "/help/cookies" === window.location.pathname
        }, t.prototype.isInIframe = function() {
            return window.parent && window.location !== window.parent.location
        }, e.CookieBanner = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.$input = this.$module.querySelector(".gem-c-input"), this.$copyButton = this.$module.querySelector(".gem-c-button")
        }
        t.prototype.init = function() {
            this.$input && this.$copyButton && (this.$input.addEventListener("click", function() {
                this.$input.select()
            }.bind(this)), this.$copyButton.addEventListener("click", function(e) {
                e.preventDefault(), this.$input.select(), document.execCommand("copy")
            }.bind(this)))
        }, e.CopyToClipboard = t
    }(window.GOVUK.Modules),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function o() {
            var n = (new Date).getTime();
            return "undefined" != typeof window.performance && "function" == typeof window.performance.now && (n += window.performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = (n + 16 * Math.random()) % 16 | 0;
                return n = Math.floor(n / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }

        function e(e) {
            this.$module = e
        }(function() {
            var a, l, c, u;
            "defineProperty" in Object && function() {
                try {
                    var e = {};
                    return Object.defineProperty(e, "test", {
                        value: 42
                    }), !0
                } catch (t) {
                    return !1
                }
            }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                var o = String(t),
                    i = "value" in n || "writable" in n,
                    r = "get" in n && typeof n.get,
                    s = "set" in n && typeof n.set;
                if (r) {
                    if ("function" !== r) throw new TypeError("Getter must be a function");
                    if (!l) throw new TypeError(c);
                    if (i) throw new TypeError(u);
                    Object.__defineGetter__.call(e, o, n.get)
                } else e[o] = n.value;
                if (s) {
                    if ("function" !== s) throw new TypeError("Setter must be a function");
                    if (!l) throw new TypeError(c);
                    if (i) throw new TypeError(u);
                    Object.__defineSetter__.call(e, o, n.set)
                }
                return "value" in n && (e[o] = n.value), e
            })
        }).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                    e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {});
        var i = 13,
            r = 32;
        return e.prototype.init = function() {
            this.$module && ("boolean" == typeof this.$module.open || this.polyfillDetails())
        }, e.prototype.polyfillDetails = function() {
            var e = this.$module,
                t = this.$summary = e.getElementsByTagName("summary").item(0),
                n = this.$content = e.getElementsByTagName("div").item(0);
            t && n && (n.id || (n.id = "details-content-" + o()), e.setAttribute("role", "group"), t.setAttribute("role", "button"), t.setAttribute("aria-controls", n.id), !(t.tabIndex = 0) === (null !== e.getAttribute("open")) ? (t.setAttribute("aria-expanded", "true"), n.setAttribute("aria-hidden", "false")) : (t.setAttribute("aria-expanded", "false"), n.setAttribute("aria-hidden", "true"), n.style.display = "none"), this.polyfillHandleInputs(t, this.polyfillSetAttributes.bind(this)))
        }, e.prototype.polyfillSetAttributes = function() {
            var e = this.$module,
                t = this.$summary,
                n = this.$content,
                o = "true" === t.getAttribute("aria-expanded"),
                i = "true" === n.getAttribute("aria-hidden");
            return t.setAttribute("aria-expanded", o ? "false" : "true"), n.setAttribute("aria-hidden", i ? "false" : "true"), n.style.display = o ? "none" : "", null !== e.getAttribute("open") ? e.removeAttribute("open") : e.setAttribute("open", "open"), !0
        }, e.prototype.polyfillHandleInputs = function(e, n) {
            e.addEventListener("keypress", function(e) {
                var t = e.target;
                e.keyCode !== i && e.keyCode !== r || "summary" === t.nodeName.toLowerCase() && (e.preventDefault(), t.click ? t.click() : n(e))
            }), e.addEventListener("keyup", function(e) {
                var t = e.target;
                e.keyCode === r && "summary" === t.nodeName.toLowerCase() && e.preventDefault()
            }), e.addEventListener("click", n)
        }, e
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukDetails = window.GOVUKFrontend,
    function(e) {
        function t(e) {
            this.$module = e, this.$summary = this.$module.querySelector(".govuk-details__summary"), this.customTrackLabel = this.$summary.getAttribute("data-track-label"), this.detailsClick = this.$module.querySelector("[data-details-track-click]")
        }
        t.prototype.init = function() {
            this.customTrackLabel ? (new window.GOVUK.Modules.GemTrackClick).start($(this.$summary)) : this.detailsClick && this.detailsClick.addEventListener("click", function() {
                this.trackDefault(this.$summary)
            }.bind(this))
        }, t.prototype.trackDefault = function(e) {
            if (window.GOVUK.analytics && window.GOVUK.analytics.trackEvent) {
                var t = null == this.$module.getAttribute("open") ? "open" : "closed",
                    n = e.getAttribute("data-track-category"),
                    o = e.getAttribute("data-track-action"),
                    i = e.getAttribute("data-track-options");
                i && (i = JSON.parse(i)), "object" == typeof i && null !== i || (i = {}), i.label = t, o && n && window.GOVUK.analytics.trackEvent(n, o, i)
            }
        }, e.GemDetails = t
    }(window.GOVUK.Modules),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function e(e) {
            this.$module = e
        }
        return function() {
                var a, l, c, u;
                "defineProperty" in Object && function() {
                    try {
                        var e = {};
                        return Object.defineProperty(e, "test", {
                            value: 42
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                    if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                    if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                    if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                    var o = String(t),
                        i = "value" in n || "writable" in n,
                        r = "get" in n && typeof n.get,
                        s = "set" in n && typeof n.set;
                    if (r) {
                        if ("function" !== r) throw new TypeError("Getter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineGetter__.call(e, o, n.get)
                    } else e[o] = n.value;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Setter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineSetter__.call(e, o, n.set)
                    }
                    return "value" in n && (e[o] = n.value), e
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                    e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "document" in this && "matches" in document.documentElement || (Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function i(e) {
                    for (var t = this, n = (t.document || t.ownerDocument).querySelectorAll(e), o = 0; n[o] && n[o] !== t;) ++o;
                    return !!n[o]
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "document" in this && "closest" in document.documentElement || (Element.prototype.closest = function n(e) {
                    for (var t = this; t;) {
                        if (t.matches(e)) return t;
                        t = "SVGElement" in window && t instanceof SVGElement ? t.parentNode : t.parentElement
                    }
                    return null
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}), e.prototype.init = function() {
                var e = this.$module;
                e && (e.focus(), e.addEventListener("click", this.handleClick.bind(this)))
            }, e.prototype.handleClick = function(e) {
                var t = e.target;
                this.focusTarget(t) && e.preventDefault()
            }, e.prototype.focusTarget = function(e) {
                if ("A" !== e.tagName || !1 === e.href) return !1;
                var t = this.getFragmentFromUrl(e.href),
                    n = document.getElementById(t);
                if (!n) return !1;
                var o = this.getAssociatedLegendOrLabel(n);
                return !!o && (o.scrollIntoView(), n.focus({
                    preventScroll: !0
                }), !0)
            }, e.prototype.getFragmentFromUrl = function(e) {
                return -1 !== e.indexOf("#") && e.split("#").pop()
            }, e.prototype.getAssociatedLegendOrLabel = function(e) {
                var t = e.closest("fieldset");
                if (t) {
                    var n = t.getElementsByTagName("legend");
                    if (n.length) {
                        var o = n[0];
                        if ("checkbox" === e.type || "radio" === e.type) return o;
                        var i = o.getBoundingClientRect().top,
                            r = e.getBoundingClientRect();
                        if (r.height && window.innerHeight)
                            if (r.top + r.height - i < window.innerHeight / 2) return o
                    }
                }
                return document.querySelector("label[for='" + e.getAttribute("id") + "']") || e.closest("label")
            }, e
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukErrorSummary = window.GOVUKFrontend, window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.somethingIsWrongForm = this.$module.querySelector("#something-is-wrong"), this.surveyForm = this.$module.querySelector("#page-is-not-useful"), this.prompt = this.$module.querySelector(".js-prompt"), this.forms = this.$module.querySelectorAll(".js-feedback-form"), this.toggleForms = this.$module.querySelectorAll(".js-toggle-form"), this.closeForms = this.$module.querySelectorAll(".js-close-form"), this.activeForm = !1, this.pageIsUsefulButton = this.$module.querySelector(".js-page-is-useful"), this.pageIsNotUsefulButton = this.$module.querySelector(".js-page-is-not-useful"), this.somethingIsWrongButton = this.$module.querySelector(".js-something-is-wrong"), this.promptQuestions = this.$module.querySelectorAll(".js-prompt-questions"), this.promptSuccessMessage = this.$module.querySelector(".js-prompt-success"), this.surveyWrapper = this.$module.querySelector("#survey-wrapper"), this.jshiddenClass = "js-hidden"
        }
        t.prototype.init = function() {
            this.setInitialAriaAttributes(), this.setHiddenValues();
            for (var e = 0; e < this.toggleForms.length; e++) this.toggleForms[e].addEventListener("click", function(e) {
                e.preventDefault();
                var t = e.target;
                this.toggleForm(t.getAttribute("aria-controls")), this.trackEvent(this.getTrackEventParams(t)), this.updateAriaAttributes(t)
            }.bind(this));
            for (var t = 0; t < this.closeForms.length; t++) this.closeForms[t].addEventListener("click", function(e) {
                e.preventDefault();
                var t = e.target,
                    n = t.getAttribute("aria-controls");
                this.toggleForm(n), this.trackEvent(this.getTrackEventParams(t)), this.setInitialAriaAttributes(), this.revealInitialPrompt();
                var o = ".js-" + n;
                this.$module.querySelector(o).focus()
            }.bind(this));
            if (this.pageIsUsefulButton.addEventListener("click", function(e) {
                    e.preventDefault(), this.trackEvent(this.getTrackEventParams(this.pageIsUsefulButton)), this.showFormSuccess(), this.revealInitialPrompt()
                }.bind(this)), this.pageIsNotUsefulButton.addEventListener("click", function() {
                    var e, t = "111111111.1111111111";
                    e = null === window.GOVUK.cookie("_ga") || "" === window.GOVUK.cookie("_ga") ? t : window.GOVUK.cookie("_ga").split(".").slice(-2).join("."), this.setHiddenValuesNotUsefulForm(e)
                }.bind(this)), "function" == typeof window.URLSearchParams)
                for (var n = 0; n < this.forms.length; n++) this.forms[n].addEventListener("submit", function(e) {
                    e.preventDefault();
                    var t = e.target,
                        n = new XMLHttpRequest,
                        o = t.getAttribute("action"),
                        i = new FormData(t);
                    i = new URLSearchParams(i).toString(), n.open("POST", o, !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
                        4 === n.readyState && 200 === n.status ? (this.trackEvent(this.getTrackEventParams(t)), this.showFormSuccess(n.message), this.revealInitialPrompt(), this.setInitialAriaAttributes(), this.activeForm.classList.toggle(this.jshiddenClass)) : (this.showError(n), this.enableSubmitFormButton(t))
                    }.bind(this), this.disableSubmitFormButton(t), n.send(i)
                }.bind(this))
        }, t.prototype.disableSubmitFormButton = function(e) {
            e.querySelector('[type="submit"]').setAttribute("disabled", !0)
        }, t.prototype.enableSubmitFormButton = function(e) {
            e.querySelector('[type="submit"]').removeAttribute("disabled")
        }, t.prototype.setInitialAriaAttributes = function() {
            for (var e = 0; e < this.forms.length; e++) this.forms[e].setAttribute("aria-hidden", !0);
            this.pageIsNotUsefulButton.setAttribute("aria-expanded", !1), this.somethingIsWrongButton.setAttribute("aria-expanded", !1)
        }, t.prototype.setHiddenValues = function() {
            var e = document.createElement("input");
            e.setAttribute("type", "hidden"), e.setAttribute("name", "javascript_enabled"), e.setAttribute("value", !0), this.somethingIsWrongForm.appendChild(e);
            var t = document.createElement("input");
            t.setAttribute("type", "hidden"), t.setAttribute("name", "referrer"), t.setAttribute("value", document.referrer || "unknown"), this.somethingIsWrongForm.appendChild(t), this.somethingIsWrongForm.invalidInfoError = ["<h2>Sorry, we\u2019re unable to send your message as you haven\u2019t given us any information.</h2>", " <p>Please tell us what you were doing or what went wrong</p>"].join("")
        }, t.prototype.setHiddenValuesNotUsefulForm = function(e) {
            var t = window.location.pathname.replace(/[^\s=?&]+(?:@|%40)[^\s=?&]+/, "[email]"),
                n = encodeURI(t);
            if (this.surveyForm.invalidInfoError = ["<h2>Sorry, we\u2019re unable to send your message as you haven\u2019t given us a valid email address.</h2>", " <p>Enter an email address in the correct format, like name@example.com</p>"].join(""), 0 === document.querySelectorAll('[name="email_survey_signup[ga_client_id]"]').length) {
                var o = document.createElement("input");
                o.setAttribute("type", "hidden"), o.setAttribute("name", "email_survey_signup[ga_client_id]"), o.setAttribute("value", e || "0"), this.surveyForm.appendChild(o)
            }
            if (0 === document.querySelectorAll(".gem-c-feedback__email-link#take-survey").length) {
                var i = document.createElement("a");
                i.setAttribute("href", "https://www.smartsurvey.co.uk/s/gov-uk-banner/?c=" + n + "&amp;gcl=" + e), i.setAttribute("class", "gem-c-feedback__email-link govuk-link"), i.setAttribute("id", "take-survey"), i.setAttribute("target", "_blank"), i.setAttribute("rel", "noopener noreferrer"), i.innerHTML = "Don\u2019t have an email address?", this.surveyWrapper.appendChild(i)
            }
        }, t.prototype.updateAriaAttributes = function(e) {
            e.setAttribute("aria-expanded", !0);
            var t = e.getAttribute("aria-controls");
            document.querySelector("#" + t).setAttribute("aria-hidden", !1)
        }, t.prototype.toggleForm = function(e) {
            this.activeForm = this.$module.querySelector("#" + e), this.activeForm.classList.toggle(this.jshiddenClass), this.prompt.classList.toggle(this.jshiddenClass), !this.activeForm.classList.contains(this.jshiddenClass) ? this.activeForm.querySelector(".gem-c-input").focus() : this.activeForm = !1
        }, t.prototype.getTrackEventParams = function(e) {
            return {
                category: e.getAttribute("data-track-category"),
                action: e.getAttribute("data-track-action")
            }
        }, t.prototype.trackEvent = function(e) {
            window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && window.GOVUK.analytics.trackEvent(e.category, e.action)
        }, t.prototype.showError = function(e) {
            var t = ["<h2>Sorry, we\u2019re unable to receive your message right now.</h2>", " <p>If the problem persists, we have other ways for you to provide", ' feedback on the <a href="/contact/govuk">contact page</a>.</p>'].join("");
            e = "response" in e ? "object" == typeof e.response && null !== e.response ? "email survey sign up failure" === e.response.message ? t : e.response.message : t : 422 === e.status && this.activeForm.invalidInfoError || t;
            var n = this.activeForm.querySelector(".js-errors");
            n.innerHTML = e, n.classList.remove(this.jshiddenClass), n.focus()
        }, t.prototype.showFormSuccess = function() {
            for (var e = 0; e < this.promptQuestions.length; e++) this.promptQuestions[e].classList.add(this.jshiddenClass);
            this.promptSuccessMessage.classList.remove(this.jshiddenClass), this.promptSuccessMessage.focus()
        }, t.prototype.revealInitialPrompt = function() {
            this.prompt.classList.remove(this.jshiddenClass), this.prompt.focus()
        }, e.Feedback = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e
        }
        t.prototype.init = function() {
            -1 === this.$module.className.indexOf("disable-youtube") && this.embedYoutube(), this.createBarcharts()
        }, t.prototype.embedYoutube = function() {
            new window.GOVUK.GovspeakYoutubeLinkEnhancement(this.$module).init()
        }, t.prototype.createBarcharts = function() {
            new window.GOVUK.GovspeakBarchartEnhancement(this.$module).init()
        }, e.Govspeak = t
    }(window.GOVUK.Modules),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function e(e) {
            this.$module = e, this.$menuButton = e && e.querySelector(".govuk-js-header-toggle"), this.$menu = this.$menuButton && e.querySelector("#" + this.$menuButton.getAttribute("aria-controls"))
        }
        return function() {
                "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                    e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var a, l, c, u;
                "defineProperty" in Object && function() {
                    try {
                        var e = {};
                        return Object.defineProperty(e, "test", {
                            value: 42
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                    if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                    if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                    if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                    var o = String(t),
                        i = "value" in n || "writable" in n,
                        r = "get" in n && typeof n.get,
                        s = "set" in n && typeof n.set;
                    if (r) {
                        if ("function" !== r) throw new TypeError("Getter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineGetter__.call(e, o, n.get)
                    } else e[o] = n.value;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Setter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineSetter__.call(e, o, n.set)
                    }
                    return "value" in n && (e[o] = n.value), e
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(p) {
                var e, t, n;
                "DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList" in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
                    var i = !0,
                        n = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === i || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        n({}, "support")
                    } catch (e) {
                        i = !1
                    }
                    return function(i, r) {
                        var s = this,
                            a = [],
                            l = {},
                            c = 0,
                            e = 0,
                            t = function(e) {
                                n(s, e, function() {
                                    return d(), a[e]
                                }, !1)
                            },
                            u = function() {
                                if (e <= c)
                                    for (; e < c; ++e) t(e)
                            },
                            d = function() {
                                var e, t, n = arguments,
                                    o = /\s+/;
                                if (n.length)
                                    for (t = 0; t < n.length; ++t)
                                        if (o.test(n[t])) throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5, e.name = "InvalidCharacterError", e;
                                for ("" === (a = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (a = []), l = {}, t = 0; t < a.length; ++t) l[a[t]] = !0;
                                c = a.length, u()
                            };
                        return d(), n(s, "length", function() {
                            return d(), c
                        }), s.toLocaleString = s.toString = function() {
                            return d(), a.join(" ")
                        }, s.item = function(e) {
                            return d(), a[e]
                        }, s.contains = function(e) {
                            return d(), !!l[e]
                        }, s.add = function() {
                            d.apply(s, e = arguments);
                            for (var e, t, n = 0, o = e.length; n < o; ++n) t = e[n], l[t] || (a.push(t), l[t] = !0);
                            c !== a.length && (c = a.length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u())
                        }, s.remove = function() {
                            d.apply(s, e = arguments);
                            for (var e, t = {}, n = 0, o = []; n < e.length; ++n) t[e[n]] = !0, delete l[e[n]];
                            for (n = 0; n < a.length; ++n) t[a[n]] || o.push(a[n]);
                            c = (a = o).length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u()
                        }, s.toggle = function(e, t) {
                            return d.apply(s, [e]), p !== t ? t ? (s.add(e), !0) : (s.remove(e), !1) : l[e] ? (s.remove(e), !1) : (s.add(e), !0)
                        }, s
                    }
                }()), "classList" in (n = document.createElement("span")) && (n.classList.toggle("x", !1), n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
                    var n = t;
                    if (n !== p) return this[(n = !!n) ? "add" : "remove"](e), n;
                    var o = !this.contains(e);
                    return this[o ? "add" : "remove"](e), o
                })), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a", "b"), !e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.add;
                        e.classList.constructor.prototype.add = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }(), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a"), e.classList.add("b"), e.classList.remove("a", "b"), e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.remove;
                        e.classList.constructor.prototype.remove = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }())
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var e;
                "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"), e.classList.contains("b")) || function(e) {
                    var u = !0,
                        d = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === u || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        d({}, "support")
                    } catch (t) {
                        u = !1
                    }
                    var p = function(e, l, c) {
                        d(e.prototype, l, function() {
                            var e, t = this,
                                n = "__defineGetter__DEFINE_PROPERTY" + l;
                            if (t[n]) return e;
                            if (!(t[n] = !0) === u) {
                                for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, s = r.length, a = 0; a < s; ++a)
                                    if (r[a]._R === t) {
                                        o = r[a];
                                        break
                                    } o || (o = i.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, t, c)
                            } else e = new DOMTokenList(t, c);
                            return d(t, l, function() {
                                return e
                            }), delete t[n], e
                        }, !0)
                    };
                    p(e.Element, "classList", "className"), p(e.HTMLElement, "classList", "className"), p(e.HTMLLinkElement, "relList", "rel"), p(e.HTMLAnchorElement, "relList", "rel"), p(e.HTMLAreaElement, "relList", "rel")
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}), e.prototype.init = function() {
                this.$module && this.$menuButton && this.$menu && (this.syncState(this.$menu.classList.contains("govuk-header__navigation--open")), this.$menuButton.addEventListener("click", this.handleMenuButtonClick.bind(this)))
            }, e.prototype.syncState = function(e) {
                this.$menuButton.classList.toggle("govuk-header__menu-button--open", e), this.$menuButton.setAttribute("aria-expanded", e)
            }, e.prototype.handleMenuButtonClick = function() {
                var e = this.$menu.classList.toggle("govuk-header__navigation--open");
                this.syncState(e)
            }, e
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukHeader = window.GOVUKFrontend, window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.showMenuText = e.getAttribute("data-text-for-show-menu"), this.hideMenuText = e.getAttribute("data-text-for-hide-menu"), this.buttonText = e.getAttribute("data-text-for-button"), this.$button = this.setupButton(e), this.$menu = document.getElementById(this.$button.getAttribute("aria-controls")), this.syncStatus()
        }
        t.prototype.setupButton = function(e) {
            var t = e.getAttribute("aria-labelledby"),
                n = e.querySelector("#" + t),
                o = document.createTextNode(this.buttonText),
                i = document.createElement("button");
            return i.type = "button", i.className = "govuk-header__menu-button gem-c-layout-super-navigation-header__menu-button", i.setAttribute("aria-controls", "super-navigation-menu"), i.setAttribute("aria-label", this.showMenuText), i.setAttribute("aria-expanded", !1), i.appendChild(o), n.insertAdjacentElement("beforebegin", i), i
        }, t.prototype.syncStatus = function() {
            this.status = "true" === this.$button.getAttribute("aria-expanded") ? "open" : "closed"
        }, t.prototype.closeMenu = function() {
            this.$menu.classList.remove("gem-c-layout-super-navigation-header__items--open"), this.$button.classList.remove("govuk-header__menu-button--open"), this.$button.setAttribute("aria-expanded", !1), this.$button.setAttribute("aria-label", this.showMenuText)
        }, t.prototype.openMenu = function() {
            this.$menu.classList.add("gem-c-layout-super-navigation-header__items--open"), this.$button.classList.add("govuk-header__menu-button--open"), this.$button.setAttribute("aria-expanded", !0), this.$button.setAttribute("aria-label", this.hideMenuText)
        }, t.prototype.handleToggle = function() {
            "open" === this.status && this.closeMenu(), "closed" === this.status && this.openMenu(), this.syncStatus()
        }, t.prototype.init = function() {
            this.$button.addEventListener("click", this.handleToggle.bind(this))
        }, e.SuperNavigationToggle = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.$dialogBox = this.$module.querySelector(".gem-c-modal-dialogue__box"),
                this.$closeButton = this.$module.querySelector(".gem-c-modal-dialogue__close-button"), this.$html = document.querySelector("html"), this.$body = document.querySelector("body")
        }
        t.prototype.init = function() {
            if (this.$dialogBox && this.$closeButton) {
                this.$module.resize = this.handleResize.bind(this), this.$module.open = this.handleOpen.bind(this), this.$module.close = this.handleClose.bind(this), this.$module.focusDialog = this.handleFocusDialog.bind(this), this.$module.boundKeyDown = this.handleKeyDown.bind(this);
                var e = document.querySelector('[data-toggle="modal"][data-target="' + this.$module.id + '"]');
                e && e.addEventListener("click", this.$module.open), this.$closeButton && this.$closeButton.addEventListener("click", this.$module.close)
            }
        }, t.prototype.handleResize = function(e) {
            "narrow" === e && this.$dialogBox.classList.remove("gem-c-modal-dialogue__box--wide"), "wide" === e && this.$dialogBox.classList.add("gem-c-modal-dialogue__box--wide")
        }, t.prototype.handleOpen = function(e) {
            e && e.preventDefault(), this.$html.classList.add("gem-o-template--modal"), this.$body.classList.add("gem-o-template__body--modal"), this.$body.classList.add("gem-o-template__body--blur"), this.$focusedElementBeforeOpen = document.activeElement, this.$module.style.display = "block", this.$dialogBox.focus(), document.addEventListener("keydown", this.$module.boundKeyDown, !0)
        }, t.prototype.handleClose = function(e) {
            e && e.preventDefault(), this.$html.classList.remove("gem-o-template--modal"), this.$body.classList.remove("gem-o-template__body--modal"), this.$body.classList.remove("gem-o-template__body--blur"), this.$module.style.display = "none", this.$focusedElementBeforeOpen.focus(), document.removeEventListener("keydown", this.$module.boundKeyDown, !0)
        }, t.prototype.handleFocusDialog = function() {
            this.$dialogBox.focus()
        }, t.prototype.handleKeyDown = function(e) {
            var t = 9,
                n = 27;
            switch (e.keyCode) {
                case t:
                    e.shiftKey ? document.activeElement === this.$dialogBox && (e.preventDefault(), this.$closeButton.focus()) : document.activeElement === this.$closeButton && (e.preventDefault(), this.$dialogBox.focus());
                    break;
                case n:
                    this.$module.close()
            }
        }, e.ModalDialogue = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e
        }
        t.prototype.init = function() {
            this.$module.addEventListener("click", function() {
                window.print()
            })
        }, e.PrintLink = t
    }(window.GOVUK.Modules),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function t(e, t) {
            if (window.NodeList.prototype.forEach) return e.forEach(t);
            for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e)
        }

        function e(e) {
            this.$module = e, this.$inputs = e.querySelectorAll('input[type="radio"]')
        }
        return function() {
                var a, l, c, u;
                "defineProperty" in Object && function() {
                    try {
                        var e = {};
                        return Object.defineProperty(e, "test", {
                            value: 42
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                    if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                    if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                    if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                    var o = String(t),
                        i = "value" in n || "writable" in n,
                        r = "get" in n && typeof n.get,
                        s = "set" in n && typeof n.set;
                    if (r) {
                        if ("function" !== r) throw new TypeError("Getter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineGetter__.call(e, o, n.get)
                    } else e[o] = n.value;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Setter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineSetter__.call(e, o, n.set)
                    }
                    return "value" in n && (e[o] = n.value), e
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                    e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(p) {
                var e, t, n;
                "DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList" in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
                    var i = !0,
                        n = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === i || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        n({}, "support")
                    } catch (e) {
                        i = !1
                    }
                    return function(i, r) {
                        var s = this,
                            a = [],
                            l = {},
                            c = 0,
                            e = 0,
                            t = function(e) {
                                n(s, e, function() {
                                    return d(), a[e]
                                }, !1)
                            },
                            u = function() {
                                if (e <= c)
                                    for (; e < c; ++e) t(e)
                            },
                            d = function() {
                                var e, t, n = arguments,
                                    o = /\s+/;
                                if (n.length)
                                    for (t = 0; t < n.length; ++t)
                                        if (o.test(n[t])) throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5, e.name = "InvalidCharacterError", e;
                                for ("" === (a = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (a = []), l = {}, t = 0; t < a.length; ++t) l[a[t]] = !0;
                                c = a.length, u()
                            };
                        return d(), n(s, "length", function() {
                            return d(), c
                        }), s.toLocaleString = s.toString = function() {
                            return d(), a.join(" ")
                        }, s.item = function(e) {
                            return d(), a[e]
                        }, s.contains = function(e) {
                            return d(), !!l[e]
                        }, s.add = function() {
                            d.apply(s, e = arguments);
                            for (var e, t, n = 0, o = e.length; n < o; ++n) t = e[n], l[t] || (a.push(t), l[t] = !0);
                            c !== a.length && (c = a.length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u())
                        }, s.remove = function() {
                            d.apply(s, e = arguments);
                            for (var e, t = {}, n = 0, o = []; n < e.length; ++n) t[e[n]] = !0, delete l[e[n]];
                            for (n = 0; n < a.length; ++n) t[a[n]] || o.push(a[n]);
                            c = (a = o).length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u()
                        }, s.toggle = function(e, t) {
                            return d.apply(s, [e]), p !== t ? t ? (s.add(e), !0) : (s.remove(e), !1) : l[e] ? (s.remove(e), !1) : (s.add(e), !0)
                        }, s
                    }
                }()), "classList" in (n = document.createElement("span")) && (n.classList.toggle("x", !1), n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
                    var n = t;
                    if (n !== p) return this[(n = !!n) ? "add" : "remove"](e), n;
                    var o = !this.contains(e);
                    return this[o ? "add" : "remove"](e), o
                })), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a", "b"), !e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.add;
                        e.classList.constructor.prototype.add = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }(), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a"), e.classList.add("b"), e.classList.remove("a", "b"), e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.remove;
                        e.classList.constructor.prototype.remove = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }())
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var e;
                "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"), e.classList.contains("b")) || function(e) {
                    var u = !0,
                        d = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === u || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        d({}, "support")
                    } catch (t) {
                        u = !1
                    }
                    var p = function(e, l, c) {
                        d(e.prototype, l, function() {
                            var e, t = this,
                                n = "__defineGetter__DEFINE_PROPERTY" + l;
                            if (t[n]) return e;
                            if (!(t[n] = !0) === u) {
                                for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, s = r.length, a = 0; a < s; ++a)
                                    if (r[a]._R === t) {
                                        o = r[a];
                                        break
                                    } o || (o = i.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, t, c)
                            } else e = new DOMTokenList(t, c);
                            return d(t, l, function() {
                                return e
                            }), delete t[n], e
                        }, !0)
                    };
                    p(e.Element, "classList", "className"), p(e.HTMLElement, "classList", "className"), p(e.HTMLLinkElement, "relList", "rel"), p(e.HTMLAnchorElement, "relList", "rel"), p(e.HTMLAreaElement, "relList", "rel")
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}), e.prototype.init = function() {
                var n = this.$module;
                t(this.$inputs, function(e) {
                    var t = e.getAttribute("data-aria-controls");
                    t && n.querySelector("#" + t) && (e.setAttribute("aria-controls", t), e.removeAttribute("data-aria-controls"))
                }), "onpageshow" in window ? window.addEventListener("pageshow", this.syncAllConditionalReveals.bind(this)) : window.addEventListener("DOMContentLoaded", this.syncAllConditionalReveals.bind(this)), this.syncAllConditionalReveals(), n.addEventListener("click", this.handleClick.bind(this))
            }, e.prototype.syncAllConditionalReveals = function() {
                t(this.$inputs, this.syncConditionalRevealWithInputState.bind(this))
            }, e.prototype.syncConditionalRevealWithInputState = function(e) {
                var t = document.querySelector("#" + e.getAttribute("aria-controls"));
                if (t && t.classList.contains("govuk-radios__conditional")) {
                    var n = e.checked;
                    e.setAttribute("aria-expanded", n), t.classList.toggle("govuk-radios__conditional--hidden", !n)
                }
            }, e.prototype.handleClick = function(e) {
                var n = e.target;
                "radio" === n.type && t(document.querySelectorAll('input[type="radio"][aria-controls]'), function(e) {
                    var t = e.form === n.form;
                    e.name === n.name && t && this.syncConditionalRevealWithInputState(e)
                }.bind(this))
            }, e
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukRadios = window.GOVUKFrontend,
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sortable = t()
    }(this, function() {
        "use strict";

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function $(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), o.forEach(function(e) {
                    i(t, e, n[e])
                })
            }
            return t
        }

        function s(e, t) {
            if (null == e) return {};
            var n, o, i = {},
                r = Object.keys(e);
            for (o = 0; o < r.length; o++) n = r[o], 0 <= t.indexOf(n) || (i[n] = e[n]);
            return i
        }

        function c(e, t) {
            if (null == e) return {};
            var n, o, i = s(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (o = 0; o < r.length; o++) n = r[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function S(e) {
            return t(e) || n(e) || r()
        }

        function t(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }

        function n(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function r() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function e(e) {
            if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(e)
        }

        function C(e, t, n) {
            e.addEventListener(t, n, !Ie && Ke)
        }

        function L(e, t, n) {
            e.removeEventListener(t, n, !Ie && Ke)
        }

        function a(e, t) {
            if (t) {
                if (">" === t[0] && (t = t.substring(1)), e) try {
                    if (e.matches) return e.matches(t);
                    if (e.msMatchesSelector) return e.msMatchesSelector(t);
                    if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
                } catch (n) {
                    return !1
                }
                return !1
            }
        }

        function l(e) {
            return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
        }

        function D(e, t, n, o) {
            if (e) {
                n = n || document;
                do {
                    if (null != t && (">" === t[0] ? e.parentNode === n && a(e, t) : a(e, t)) || o && e === n) return e;
                    if (e === n) break
                } while (e = l(e))
            }
            return null
        }

        function M(e, t, n) {
            if (e && t)
                if (e.classList) e.classList[n ? "add" : "remove"](t);
                else {
                    var o = (" " + e.className + " ").replace(qe, " ").replace(" " + t + " ", " ");
                    e.className = (o + (n ? " " + t : "")).replace(qe, " ")
                }
        }

        function N(e, t, n) {
            var o = e && e.style;
            if (o) {
                if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
                t in o || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t), o[t] = n + ("string" == typeof n ? "" : "px")
            }
        }

        function _(e, t) {
            var n = "";
            if ("string" == typeof e) n = e;
            else
                do {
                    var o = N(e, "transform");
                    o && "none" !== o && (n = o + " " + n)
                } while (!t && (e = e.parentNode));
            var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
            return i && new i(n)
        }

        function u(e, t, n) {
            if (e) {
                var o = e.getElementsByTagName(t),
                    i = 0,
                    r = o.length;
                if (n)
                    for (; i < r; i++) n(o[i], i);
                return o
            }
            return []
        }

        function j() {
            var e = document.scrollingElement;
            return e || document.documentElement
        }

        function G(e, t, n, o, i) {
            if (e.getBoundingClientRect || e === window) {
                var r, s, a, l, c, u, d;
                if (e !== window && e.parentNode && e !== j() ? (s = (r = e.getBoundingClientRect()).top, a = r.left, l = r.bottom, c = r.right, u = r.height, d = r.width) : (a = s = 0, l = window.innerHeight, c = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (i = i || e.parentNode, !Ie))
                    do {
                        if (i && i.getBoundingClientRect && ("none" !== N(i, "transform") || n && "static" !== N(i, "position"))) {
                            var p = i.getBoundingClientRect();
                            s -= p.top + parseInt(N(i, "border-top-width")), a -= p.left + parseInt(N(i, "border-left-width")), l = s + r.height, c = a + r.width;
                            break
                        }
                    } while (i = i.parentNode);
                if (o && e !== window) {
                    var f = _(i || e),
                        h = f && f.a,
                        m = f && f.d;
                    f && (l = (s /= m) + (u /= m), c = (a /= h) + (d /= h))
                }
                return {
                    top: s,
                    left: a,
                    bottom: l,
                    right: c,
                    width: d,
                    height: u
                }
            }
        }

        function H(e, t, n) {
            for (var o = P(e, !0), i = G(e)[t]; o;) {
                var r = G(o)[n];
                if (!("top" === n || "left" === n ? r <= i : i <= r)) return o;
                if (o === j()) break;
                o = P(o, !1)
            }
            return !1
        }

        function d(e, t, n) {
            for (var o = 0, i = 0, r = e.children; i < r.length;) {
                if ("none" !== r[i].style.display && r[i] !== q.ghost && r[i] !== q.dragged && D(r[i], n.draggable, e, !1)) {
                    if (o === t) return r[i];
                    o++
                }
                i++
            }
            return null
        }

        function I(e, t) {
            for (var n = e.lastElementChild; n && (n === q.ghost || "none" === N(n, "display") || t && !a(n, t));) n = n.previousElementSibling;
            return n || null
        }

        function V(e, t) {
            var n = 0;
            if (!e || !e.parentNode) return -1;
            for (; e = e.previousElementSibling;) "TEMPLATE" === e.nodeName.toUpperCase() || e === q.clone || t && !a(e, t) || n++;
            return n
        }

        function p(e) {
            var t = 0,
                n = 0,
                o = j();
            if (e)
                do {
                    var i = _(e),
                        r = i.a,
                        s = i.d;
                    t += e.scrollLeft * r, n += e.scrollTop * s
                } while (e !== o && (e = e.parentNode));
            return [t, n]
        }

        function f(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n))
                    for (var o in t)
                        if (t.hasOwnProperty(o) && t[o] === e[n][o]) return Number(n);
            return -1
        }

        function P(e, t) {
            if (!e || !e.getBoundingClientRect) return j();
            var n = e,
                o = !1;
            do {
                if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                    var i = N(n);
                    if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                        if (!n.getBoundingClientRect || n === document.body) return j();
                        if (o || t) return n;
                        o = !0
                    }
                }
            } while (n = n.parentNode);
            return j()
        }

        function h(e, t) {
            if (e && t)
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function m(e, t) {
            return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width)
        }

        function g(n, o) {
            return function() {
                if (!de) {
                    var e = arguments,
                        t = this;
                    1 === e.length ? n.call(t, e[0]) : n.apply(t, e), de = setTimeout(function() {
                        de = void 0
                    }, o)
                }
            }
        }

        function v() {
            clearTimeout(de), de = void 0
        }

        function F(e, t, n) {
            e.scrollLeft += t, e.scrollTop += n
        }

        function A(e) {
            var t = window.Polymer,
                n = window.jQuery || window.Zepto;
            return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
        }

        function O(e, t) {
            N(e, "position", "absolute"), N(e, "top", t.top), N(e, "left", t.left), N(e, "width", t.width), N(e, "height", t.height)
        }

        function B(e) {
            N(e, "position", ""), N(e, "top", ""), N(e, "left", ""), N(e, "width", ""), N(e, "height", "")
        }

        function y() {
            var t, o = [];
            return {
                captureAnimationState: function e() {
                    (o = [], this.options.animation) && [].slice.call(this.el.children).forEach(function(e) {
                        if ("none" !== N(e, "display") && e !== q.ghost) {
                            o.push({
                                target: e,
                                rect: G(e)
                            });
                            var t = $({}, o[o.length - 1].rect);
                            if (e.thisAnimationDuration) {
                                var n = _(e, !0);
                                n && (t.top -= n.f, t.left -= n.e)
                            }
                            e.fromRect = t
                        }
                    })
                },
                addAnimationState: function n(e) {
                    o.push(e)
                },
                removeAnimationState: function i(e) {
                    o.splice(f(o, {
                        target: e
                    }), 1)
                },
                animateAll: function r(e) {
                    var c = this;
                    if (!this.options.animation) return clearTimeout(t), void("function" == typeof e && e());
                    var u = !1,
                        d = 0;
                    o.forEach(function(e) {
                        var t = 0,
                            n = e.target,
                            o = n.fromRect,
                            i = G(n),
                            r = n.prevFromRect,
                            s = n.prevToRect,
                            a = e.rect,
                            l = _(n, !0);
                        l && (i.top -= l.f, i.left -= l.e), n.toRect = i, n.thisAnimationDuration && m(r, i) && !m(o, i) && (a.top - i.top) / (a.left - i.left) == (o.top - i.top) / (o.left - i.left) && (t = w(a, r, s, c.options)), m(i, o) || (n.prevFromRect = o, n.prevToRect = i, t || (t = c.options.animation), c.animate(n, a, i, t)), t && (u = !0, d = Math.max(d, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function() {
                            n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                        }, t), n.thisAnimationDuration = t)
                    }), clearTimeout(t), u ? t = setTimeout(function() {
                        "function" == typeof e && e()
                    }, d) : "function" == typeof e && e(), o = []
                },
                animate: function c(e, t, n, o) {
                    if (o) {
                        N(e, "transition", ""), N(e, "transform", "");
                        var i = _(this.el),
                            r = i && i.a,
                            s = i && i.d,
                            a = (t.left - n.left) / (r || 1),
                            l = (t.top - n.top) / (s || 1);
                        e.animatingX = !!a, e.animatingY = !!l, N(e, "transform", "translate3d(" + a + "px," + l + "px,0)"), this.forRepaintDummy = b(e), N(e, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), N(e, "transform", "translate3d(0,0,0)"), "number" == typeof e.animated && clearTimeout(e.animated), e.animated = setTimeout(function() {
                            N(e, "transition", ""), N(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1
                        }, o)
                    }
                }
            }
        }

        function b(e) {
            return e.offsetWidth
        }

        function w(e, t, n, o) {
            return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * o.animation
        }

        function U(e) {
            var t = e.sortable,
                n = e.rootEl,
                o = e.name,
                i = e.targetEl,
                r = e.cloneEl,
                s = e.toEl,
                a = e.fromEl,
                l = e.oldIndex,
                c = e.newIndex,
                u = e.oldDraggableIndex,
                d = e.newDraggableIndex,
                p = e.originalEvent,
                f = e.putSortable,
                h = e.extraEventProperties;
            if (t = t || n && n[We]) {
                var m, g = t.options,
                    v = "on" + o.charAt(0).toUpperCase() + o.substr(1);
                !window.CustomEvent || Ie || Ve ? (m = document.createEvent("Event")).initEvent(o, !0, !0) : m = new CustomEvent(o, {
                    bubbles: !0,
                    cancelable: !0
                }), m.to = s || n, m.from = a || n, m.item = i || n, m.clone = r, m.oldIndex = l, m.newIndex = c, m.oldDraggableIndex = u, m.newDraggableIndex = d, m.originalEvent = p, m.pullMode = f ? f.lastPutMode : undefined;
                var y = $({}, h, ze.getEventProperties(o, t));
                for (var b in y) m[b] = y[b];
                n && n.dispatchEvent(m), g[v] && g[v].call(t, m)
            }
        }

        function K(e) {
            U($({
                putSortable: Se,
                cloneEl: ye,
                targetEl: pe,
                rootEl: me,
                oldIndex: we,
                oldDraggableIndex: xe,
                newIndex: Ee,
                newDraggableIndex: ke
            }, e))
        }

        function q(e, t) {
            if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
            this.el = e, this.options = t = T({}, t), e[We] = this;
            var n = {
                group: null,
                sort: !0,
                disabled: !1,
                store: null,
                handle: null,
                draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
                swapThreshold: 1,
                invertSwap: !1,
                invertedSwapThreshold: null,
                removeCloneOnHide: !0,
                direction: function r() {
                    return ut(e, this.options)
                },
                ghostClass: "sortable-ghost",
                chosenClass: "sortable-chosen",
                dragClass: "sortable-drag",
                ignore: "a, img",
                filter: null,
                preventOnFilter: !0,
                animation: 0,
                easing: null,
                setData: function s(e, t) {
                    e.setData("Text", t.textContent)
                },
                dropBubble: !1,
                dragoverBubble: !1,
                dataIdAttr: "data-id",
                delay: 0,
                delayOnTouchOnly: !1,
                touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
                forceFallback: !1,
                fallbackClass: "sortable-fallback",
                fallbackOnBody: !1,
                fallbackTolerance: 0,
                fallbackOffset: {
                    x: 0,
                    y: 0
                },
                supportPointer: !1 !== q.supportPointer && "PointerEvent" in window && !Fe,
                emptyInsertThreshold: 5
            };
            for (var o in ze.initializePlugins(this, e, n), n) !(o in t) && (t[o] = n[o]);
            for (var i in ft(t), this) "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
            this.nativeDraggable = !t.forceFallback && lt, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? C(e, "pointerdown", this._onTapStart) : (C(e, "mousedown", this._onTapStart), C(e, "touchstart", this._onTapStart)), this.nativeDraggable && (C(e, "dragover", this), C(e, "dragenter", this)), Ze.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), T(this, y())
        }

        function E(e) {
            e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault()
        }

        function W(e, t, n, o, i, r, s, a) {
            var l, c, u = e[We],
                d = u.options.onMove;
            return !window.CustomEvent || Ie || Ve ? (l = document.createEvent("Event")).initEvent("move", !0, !0) : l = new CustomEvent("move", {
                bubbles: !0,
                cancelable: !0
            }), l.to = t, l.from = e, l.dragged = n, l.draggedRect = o, l.related = i || t, l.relatedRect = r || G(t), l.willInsertAfter = a, l.originalEvent = s, e.dispatchEvent(l), d && (c = d.call(u, l, s)), c
        }

        function x(e) {
            e.draggable = !1
        }

        function R() {
            ot = !1
        }

        function X(e, t, n) {
            var o = G(I(n.el, n.options.draggable)),
                i = 10;
            return t ? e.clientX > o.right + i || e.clientX <= o.right && e.clientY > o.bottom && e.clientX >= o.left : e.clientX > o.right && e.clientY > o.top || e.clientX <= o.right && e.clientY > o.bottom + i
        }

        function z(e, t, n, o, i, r, s, a) {
            var l = o ? e.clientY : e.clientX,
                c = o ? n.height : n.width,
                u = o ? n.top : n.left,
                d = o ? n.bottom : n.right,
                p = !1;
            if (!s)
                if (a && Ne < c * i) {
                    if (!et && (1 === Me ? u + c * r / 2 < l : l < d - c * r / 2) && (et = !0), et) p = !0;
                    else if (1 === Me ? l < u + Ne : d - Ne < l) return -Me
                } else if (u + c * (1 - i) / 2 < l && l < d - c * (1 - i) / 2) return k(t);
            return (p = p || s) && (l < u + c * r / 2 || d - c * r / 2 < l) ? u + c / 2 < l ? 1 : -1 : 0
        }

        function k(e) {
            return V(pe) < V(e) ? 1 : -1
        }

        function Y(e) {
            for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--;) o += t.charCodeAt(n);
            return o.toString(36)
        }

        function J(e) {
            it.length = 0;
            for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
                var o = t[n];
                o.checked && it.push(o)
            }
        }

        function Q(e) {
            return setTimeout(e, 0)
        }

        function Z(e) {
            return clearTimeout(e)
        }

        function ee() {
            function e() {
                for (var e in this.defaults = {
                        scroll: !0,
                        scrollSensitivity: 30,
                        scrollSpeed: 10,
                        bubbleScroll: !0
                    }, this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this))
            }
            return e.prototype = {
                dragStarted: function n(e) {
                    var t = e.originalEvent;
                    this.sortable.nativeDraggable ? C(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? C(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? C(document, "touchmove", this._handleFallbackAutoScroll) : C(document, "mousemove", this._handleFallbackAutoScroll)
                },
                dragOverCompleted: function o(e) {
                    var t = e.originalEvent;
                    this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
                },
                drop: function t() {
                    this.sortable.nativeDraggable ? L(document, "dragover", this._handleAutoScroll) : (L(document, "pointermove", this._handleFallbackAutoScroll), L(document, "touchmove", this._handleFallbackAutoScroll), L(document, "mousemove", this._handleFallbackAutoScroll)), ne(), te(), v()
                },
                nulling: function i() {
                    xt = bt = yt = Ct = kt = wt = Et = null, St.length = 0
                },
                _handleFallbackAutoScroll: function r(e) {
                    this._handleAutoScroll(e, !0)
                },
                _handleAutoScroll: function a(t, n) {
                    var o = this,
                        i = (t.touches ? t.touches[0] : t).clientX,
                        r = (t.touches ? t.touches[0] : t).clientY,
                        e = document.elementFromPoint(i, r);
                    if (xt = t, n || Ve || Ie || Fe) {
                        Lt(t, this.options, e, n);
                        var s = P(e, !0);
                        !Ct || kt && i === wt && r === Et || (kt && ne(), kt = setInterval(function() {
                            var e = P(document.elementFromPoint(i, r), !0);
                            e !== s && (s = e, te()), Lt(t, o.options, e, n)
                        }, 10), wt = i, Et = r)
                    } else {
                        if (!this.options.bubbleScroll || P(e, !0) === j()) return void te();
                        Lt(t, this.options, P(e, !1), !1)
                    }
                }
            }, T(e, {
                pluginName: "scroll",
                initializeByDefault: !0
            })
        }

        function te() {
            St.forEach(function(e) {
                clearInterval(e.pid)
            }), St = []
        }

        function ne() {
            clearInterval(kt)
        }

        function oe() {}

        function ie() {}

        function re() {
            function e() {
                this.defaults = {
                    swapClass: "sortable-swap-highlight"
                }
            }
            return e.prototype = {
                dragStart: function n(e) {
                    var t = e.dragEl;
                    Tt = t
                },
                dragOverValid: function u(e) {
                    var t = e.completed,
                        n = e.target,
                        o = e.onMove,
                        i = e.activeSortable,
                        r = e.changed,
                        s = e.cancel;
                    if (i.options.swap) {
                        var a = this.sortable.el,
                            l = this.options;
                        if (n && n !== a) {
                            var c = Tt;
                            !1 !== o(n) ? (M(n, l.swapClass, !0), Tt = n) : Tt = null, c && c !== Tt && M(c, l.swapClass, !1)
                        }
                        r(), t(!0), s()
                    }
                },
                drop: function s(e) {
                    var t = e.activeSortable,
                        n = e.putSortable,
                        o = e.dragEl,
                        i = n || this.sortable,
                        r = this.options;
                    Tt && M(Tt, r.swapClass, !1), Tt && (r.swap || n && n.options.swap) && o !== Tt && (i.captureAnimationState(), i !== t && t.captureAnimationState(), se(o, Tt), i.animateAll(), i !== t && t.animateAll())
                },
                nulling: function t() {
                    Tt = null
                }
            }, T(e, {
                pluginName: "swap",
                eventProperties: function o() {
                    return {
                        swapItem: Tt
                    }
                }
            })
        }

        function se(e, t) {
            var n, o, i = e.parentNode,
                r = t.parentNode;
            i && r && !i.isEqualNode(t) && !r.isEqualNode(e) && (n = V(e), o = V(t), i.isEqualNode(r) && n < o && o++, i.insertBefore(t, i.children[n]), r.insertBefore(e, r.children[o]))
        }

        function ae() {
            function e(o) {
                for (var e in this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this));
                o.options.supportPointer ? C(document, "pointerup", this._deselectMultiDrag) : (C(document, "mouseup", this._deselectMultiDrag), C(document, "touchend", this._deselectMultiDrag)), C(document, "keydown", this._checkKeyDown), C(document, "keyup", this._checkKeyUp), this.defaults = {
                    selectedClass: "sortable-selected",
                    multiDragKey: null,
                    setData: function i(e, t) {
                        var n = "";
                        Mt.length && Ot === o ? Mt.forEach(function(e, t) {
                            n += (t ? ", " : "") + e.textContent
                        }) : n = t.textContent, e.setData("Text", n)
                    }
                }
            }
            return e.prototype = {
                multiDragKeyDown: !1,
                isMultiDrag: !1,
                delayStartGlobal: function n(e) {
                    var t = e.dragEl;
                    jt = t
                },
                delayEnded: function t() {
                    this.isMultiDrag = ~Mt.indexOf(jt)
                },
                setupClone: function i(e) {
                    var t = e.sortable,
                        n = e.cancel;
                    if (this.isMultiDrag) {
                        for (var o = 0; o < Mt.length; o++) Nt.push(A(Mt[o])), Nt[o].sortableIndex = Mt[o].sortableIndex, Nt[o].draggable = !1, Nt[o].style["will-change"] = "", M(Nt[o], this.options.selectedClass, !1), Mt[o] === jt && M(Nt[o], this.options.chosenClass, !1);
                        t._hideClone(), n()
                    }
                },
                clone: function r(e) {
                    var t = e.sortable,
                        n = e.rootEl,
                        o = e.dispatchSortableEvent,
                        i = e.cancel;
                    this.isMultiDrag && (this.options.removeCloneOnHide || Mt.length && Ot === t && (ce(!0, n), o("clone"), i()))
                },
                showClone: function s(e) {
                    var t = e.cloneNowShown,
                        n = e.rootEl,
                        o = e.cancel;
                    this.isMultiDrag && (ce(!1, n), Nt.forEach(function(e) {
                        N(e, "display", "")
                    }), t(), Dt = !1, o())
                },
                hideClone: function a(e) {
                    var t = this,
                        n = (e.sortable, e.cloneNowHidden),
                        o = e.cancel;
                    this.isMultiDrag && (Nt.forEach(
                        function(e) {
                            N(e, "display", "none"), t.options.removeCloneOnHide && e.parentNode && e.parentNode.removeChild(e)
                        }), n(), Dt = !0, o())
                },
                dragStartGlobal: function o(e) {
                    e.sortable;
                    !this.isMultiDrag && Ot && Ot.multiDrag._deselectMultiDrag(), Mt.forEach(function(e) {
                        e.sortableIndex = V(e)
                    }), Mt = Mt.sort(function(e, t) {
                        return e.sortableIndex - t.sortableIndex
                    }), It = !0
                },
                dragStarted: function l(e) {
                    var t = this,
                        n = e.sortable;
                    if (this.isMultiDrag) {
                        if (this.options.sort && (n.captureAnimationState(), this.options.animation)) {
                            Mt.forEach(function(e) {
                                e !== jt && N(e, "position", "absolute")
                            });
                            var o = G(jt, !1, !0, !0);
                            Mt.forEach(function(e) {
                                e !== jt && O(e, o)
                            }), Gt = Ht = !0
                        }
                        n.animateAll(function() {
                            Gt = Ht = !1, t.options.animation && Mt.forEach(function(e) {
                                B(e)
                            }), t.options.sort && ue()
                        })
                    }
                },
                dragOver: function c(e) {
                    var t = e.target,
                        n = e.completed,
                        o = e.cancel;
                    Ht && ~Mt.indexOf(t) && (n(!1), o())
                },
                revert: function u(e) {
                    var t = e.fromSortable,
                        n = e.rootEl,
                        o = e.sortable,
                        i = e.dragRect;
                    1 < Mt.length && (Mt.forEach(function(e) {
                        o.addAnimationState({
                            target: e,
                            rect: Ht ? G(e) : i
                        }), B(e), e.fromRect = i, t.removeAnimationState(e)
                    }), Ht = !1, le(!this.options.removeCloneOnHide, n))
                },
                dragOverCompleted: function d(e) {
                    var t = e.sortable,
                        n = e.isOwner,
                        o = e.insertion,
                        i = e.activeSortable,
                        r = e.parentEl,
                        s = e.putSortable,
                        a = this.options;
                    if (o) {
                        if (n && i._hideClone(), Gt = !1, a.animation && 1 < Mt.length && (Ht || !n && !i.options.sort && !s)) {
                            var l = G(jt, !1, !0, !0);
                            Mt.forEach(function(e) {
                                e !== jt && (O(e, l), r.appendChild(e))
                            }), Ht = !0
                        }
                        if (!n)
                            if (Ht || ue(), 1 < Mt.length) {
                                var c = Dt;
                                i._showClone(t), i.options.animation && !Dt && c && Nt.forEach(function(e) {
                                    i.addAnimationState({
                                        target: e,
                                        rect: $t
                                    }), e.fromRect = $t, e.thisAnimationDuration = null
                                })
                            } else i._showClone(t)
                    }
                },
                dragOverAnimationCapture: function p(e) {
                    var t = e.dragRect,
                        n = e.isOwner,
                        o = e.activeSortable;
                    if (Mt.forEach(function(e) {
                            e.thisAnimationDuration = null
                        }), o.options.animation && !n && o.multiDrag.isMultiDrag) {
                        $t = T({}, t);
                        var i = _(jt, !0);
                        $t.top -= i.f, $t.left -= i.e
                    }
                },
                dragOverAnimationComplete: function f() {
                    Ht && (Ht = !1, ue())
                },
                drop: function y(e) {
                    var t = e.originalEvent,
                        n = e.rootEl,
                        o = e.parentEl,
                        i = e.sortable,
                        r = e.dispatchSortableEvent,
                        s = e.oldIndex,
                        a = e.putSortable,
                        l = a || this.sortable;
                    if (t) {
                        var c = this.options,
                            u = o.children;
                        if (!It)
                            if (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), M(jt, c.selectedClass, !~Mt.indexOf(jt)), ~Mt.indexOf(jt)) Mt.splice(Mt.indexOf(jt), 1), At = null, U({
                                sortable: i,
                                rootEl: n,
                                name: "deselect",
                                targetEl: jt,
                                originalEvt: t
                            });
                            else {
                                if (Mt.push(jt), U({
                                        sortable: i,
                                        rootEl: n,
                                        name: "select",
                                        targetEl: jt,
                                        originalEvt: t
                                    }), t.shiftKey && At && i.el.contains(At)) {
                                    var d, p, f = V(At),
                                        h = V(jt);
                                    if (~f && ~h && f !== h)
                                        for (f < h ? (p = f, d = h) : (p = h, d = f + 1); p < d; p++) ~Mt.indexOf(u[p]) || (M(u[p], c.selectedClass, !0), Mt.push(u[p]), U({
                                            sortable: i,
                                            rootEl: n,
                                            name: "select",
                                            targetEl: u[p],
                                            originalEvt: t
                                        }))
                                } else At = jt;
                                Ot = l
                            } if (It && this.isMultiDrag) {
                            if ((o[We].options.sort || o !== n) && 1 < Mt.length) {
                                var m = G(jt),
                                    g = V(jt, ":not(." + this.options.selectedClass + ")");
                                if (!Gt && c.animation && (jt.thisAnimationDuration = null), l.captureAnimationState(), !Gt && (c.animation && (jt.fromRect = m, Mt.forEach(function(e) {
                                        if (e.thisAnimationDuration = null, e !== jt) {
                                            var t = Ht ? G(e) : m;
                                            e.fromRect = t, l.addAnimationState({
                                                target: e,
                                                rect: t
                                            })
                                        }
                                    })), ue(), Mt.forEach(function(e) {
                                        u[g] ? o.insertBefore(e, u[g]) : o.appendChild(e), g++
                                    }), s === V(jt))) {
                                    var v = !1;
                                    Mt.forEach(function(e) {
                                        e.sortableIndex === V(e) || (v = !0)
                                    }), v && r("update")
                                }
                                Mt.forEach(function(e) {
                                    B(e)
                                }), l.animateAll()
                            }
                            Ot = l
                        }(n === o || a && "clone" !== a.lastPutMode) && Nt.forEach(function(e) {
                            e.parentNode && e.parentNode.removeChild(e)
                        })
                    }
                },
                nullingGlobal: function h() {
                    this.isMultiDrag = It = !1, Nt.length = 0
                },
                destroyGlobal: function m() {
                    this._deselectMultiDrag(), L(document, "pointerup", this._deselectMultiDrag), L(document, "mouseup", this._deselectMultiDrag), L(document, "touchend", this._deselectMultiDrag), L(document, "keydown", this._checkKeyDown), L(document, "keyup", this._checkKeyUp)
                },
                _deselectMultiDrag: function g(e) {
                    if (!(void 0 !== It && It || Ot !== this.sortable || e && D(e.target, this.options.draggable, this.sortable.el, !1) || e && 0 !== e.button))
                        for (; Mt.length;) {
                            var t = Mt[0];
                            M(t, this.options.selectedClass, !1), Mt.shift(), U({
                                sortable: this.sortable,
                                rootEl: this.sortable.el,
                                name: "deselect",
                                targetEl: t,
                                originalEvt: e
                            })
                        }
                },
                _checkKeyDown: function v(e) {
                    e.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
                },
                _checkKeyUp: function b(e) {
                    e.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
                }
            }, T(e, {
                pluginName: "multiDrag",
                utils: {
                    select: function w(e) {
                        var t = e.parentNode[We];
                        t && t.options.multiDrag && !~Mt.indexOf(e) && (Ot && Ot !== t && (Ot.multiDrag._deselectMultiDrag(), Ot = t), M(e, t.options.selectedClass, !0), Mt.push(e))
                    },
                    deselect: function E(e) {
                        var t = e.parentNode[We],
                            n = Mt.indexOf(e);
                        t && t.options.multiDrag && ~n && (M(e, t.options.selectedClass, !1), Mt.splice(n, 1))
                    }
                },
                eventProperties: function x() {
                    var n = this,
                        o = [],
                        i = [];
                    return Mt.forEach(function(e) {
                        var t;
                        o.push({
                            multiDragElement: e,
                            index: e.sortableIndex
                        }), t = Ht && e !== jt ? -1 : Ht ? V(e, ":not(." + n.options.selectedClass + ")") : V(e), i.push({
                            multiDragElement: e,
                            index: t
                        })
                    }), {
                        items: S(Mt),
                        clones: [].concat(Nt),
                        oldIndicies: o,
                        newIndicies: i
                    }
                },
                optionListeners: {
                    multiDragKey: function k(e) {
                        return "ctrl" === (e = e.toLowerCase()) ? e = "Control" : 1 < e.length && (e = e.charAt(0).toUpperCase() + e.substr(1)), e
                    }
                }
            })
        }

        function le(o, i) {
            Mt.forEach(function(e, t) {
                var n = i.children[e.sortableIndex + (o ? Number(t) : 0)];
                n ? i.insertBefore(e, n) : i.appendChild(e)
            })
        }

        function ce(o, i) {
            Nt.forEach(function(e, t) {
                var n = i.children[e.sortableIndex + (o ? Number(t) : 0)];
                n ? i.insertBefore(e, n) : i.appendChild(e)
            })
        }

        function ue() {
            Mt.forEach(function(e) {
                e !== jt && e.parentNode && e.parentNode.removeChild(e)
            })
        }
        var de, pe, fe, he, me, ge, ve, ye, be, we, Ee, xe, ke, Te, Se, Ce, Le, _e, Ae, Oe, je, $e, De, Me, Ne, Ge, He = "1.13.0",
            Ie = e(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
            Ve = e(/Edge/i),
            Pe = e(/firefox/i),
            Fe = e(/safari/i) && !e(/chrome/i) && !e(/android/i),
            Be = e(/iP(ad|od|hone)/i),
            Ue = e(/chrome/i) && e(/android/i),
            Ke = {
                capture: !1,
                passive: !1
            },
            qe = /\s+/g,
            We = "Sortable" + (new Date).getTime(),
            Re = [],
            Xe = {
                initializeByDefault: !0
            },
            ze = {
                mount: function Vt(t) {
                    for (var e in Xe) !Xe.hasOwnProperty(e) || e in t || (t[e] = Xe[e]);
                    Re.forEach(function(e) {
                        if (e.pluginName === t.pluginName) throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once")
                    }), Re.push(t)
                },
                pluginEvent: function Ye(t, n, o) {
                    var e = this;
                    this.eventCanceled = !1, o.cancel = function() {
                        e.eventCanceled = !0
                    };
                    var i = t + "Global";
                    Re.forEach(function(e) {
                        n[e.pluginName] && (n[e.pluginName][i] && n[e.pluginName][i]($({
                            sortable: n
                        }, o)), n.options[e.pluginName] && n[e.pluginName][t] && n[e.pluginName][t]($({
                            sortable: n
                        }, o)))
                    })
                },
                initializePlugins: function Pt(o, i, r) {
                    for (var e in Re.forEach(function(e) {
                            var t = e.pluginName;
                            if (o.options[t] || e.initializeByDefault) {
                                var n = new e(o, i, o.options);
                                n.sortable = o, n.options = o.options, o[t] = n, T(r, n.defaults)
                            }
                        }), o.options)
                        if (o.options.hasOwnProperty(e)) {
                            var t = this.modifyOption(o, e, o.options[e]);
                            void 0 !== t && (o.options[e] = t)
                        }
                },
                getEventProperties: function Ft(t, n) {
                    var o = {};
                    return Re.forEach(function(e) {
                        "function" == typeof e.eventProperties && T(o, e.eventProperties.call(n[e.pluginName], t))
                    }), o
                },
                modifyOption: function Bt(t, n, o) {
                    var i;
                    return Re.forEach(function(e) {
                        t[e.pluginName] && e.optionListeners && "function" == typeof e.optionListeners[n] && (i = e.optionListeners[n].call(t[e.pluginName], o))
                    }), i
                }
            },
            Ye = function Ye(e, t, n) {
                var o = 2 < arguments.length && n !== undefined ? arguments[2] : {},
                    i = o.evt,
                    r = c(o, ["evt"]);
                ze.pluginEvent.bind(q)(e, t, $({
                    dragEl: pe,
                    parentEl: fe,
                    ghostEl: he,
                    rootEl: me,
                    nextEl: ge,
                    lastDownEl: ve,
                    cloneEl: ye,
                    cloneHidden: be,
                    dragStarted: $e,
                    putSortable: Se,
                    activeSortable: q.active,
                    originalEvent: i,
                    oldIndex: we,
                    oldDraggableIndex: xe,
                    newIndex: Ee,
                    newDraggableIndex: ke,
                    hideGhostForTarget: ht,
                    unhideGhostForTarget: mt,
                    cloneNowHidden: function s() {
                        be = !0
                    },
                    cloneNowShown: function a() {
                        be = !1
                    },
                    dispatchSortableEvent: function l(e) {
                        K({
                            sortable: t,
                            name: e,
                            originalEvent: i
                        })
                    }
                }, r))
            },
            Je = !1,
            Qe = !1,
            Ze = [],
            et = !1,
            tt = !1,
            nt = [],
            ot = !1,
            it = [],
            rt = "undefined" != typeof document,
            st = Be,
            at = Ve || Ie ? "cssFloat" : "float",
            lt = rt && !Ue && !Be && "draggable" in document.createElement("div"),
            ct = function() {
                if (rt) {
                    if (Ie) return !1;
                    var e = document.createElement("x");
                    return e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents
                }
            }(),
            ut = function ut(e, t) {
                var n = N(e),
                    o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                    i = d(e, 0, t),
                    r = d(e, 1, t),
                    s = i && N(i),
                    a = r && N(r),
                    l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + G(i).width,
                    c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + G(r).width;
                if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
                if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
                if (i && s["float"] && "none" !== s["float"]) {
                    var u = "left" === s["float"] ? "left" : "right";
                    return !r || "both" !== a.clear && a.clear !== u ? "horizontal" : "vertical"
                }
                return i && ("block" === s.display || "flex" === s.display || "table" === s.display || "grid" === s.display || o <= l && "none" === n[at] || r && "none" === n[at] && o < l + c) ? "vertical" : "horizontal"
            },
            dt = function dt(e, t, n) {
                var o = n ? e.left : e.top,
                    i = n ? e.right : e.bottom,
                    r = n ? e.width : e.height,
                    s = n ? t.left : t.top,
                    a = n ? t.right : t.bottom,
                    l = n ? t.width : t.height;
                return o === s || i === a || o + r / 2 === s + l / 2
            },
            pt = function pt(r, s) {
                var a;
                return Ze.some(function(e) {
                    if (!I(e)) {
                        var t = G(e),
                            n = e[We].options.emptyInsertThreshold,
                            o = r >= t.left - n && r <= t.right + n,
                            i = s >= t.top - n && s <= t.bottom + n;
                        return n && o && i ? a = e : void 0
                    }
                }), a
            },
            ft = function ft(e) {
                function l(s, a) {
                    return function(e, t, n, o) {
                        var i = e.options.group.name && t.options.group.name && e.options.group.name === t.options.group.name;
                        if (null == s && (a || i)) return !0;
                        if (null == s || !1 === s) return !1;
                        if (a && "clone" === s) return s;
                        if ("function" == typeof s) return l(s(e, t, n, o), a)(e, t, n, o);
                        var r = (a ? e : t).options.group.name;
                        return !0 === s || "string" == typeof s && s === r || s.join && -1 < s.indexOf(r)
                    }
                }
                var t = {},
                    n = e.group;
                n && "object" == o(n) || (n = {
                    name: n
                }), t.name = n.name, t.checkPull = l(n.pull, !0), t.checkPut = l(n.put), t.revertClone = n.revertClone, e.group = t
            },
            ht = function ht() {
                !ct && he && N(he, "display", "none")
            },
            mt = function mt() {
                !ct && he && N(he, "display", "")
            };
        rt && document.addEventListener("click", function(e) {
            if (Qe) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Qe = !1
        }, !0);
        var gt = function gt(e) {
                if (pe) {
                    e = e.touches ? e.touches[0] : e;
                    var t = pt(e.clientX, e.clientY);
                    if (t) {
                        var n = {};
                        for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o]);
                        n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[We]._onDragOver(n)
                    }
                }
            },
            vt = function vt(e) {
                pe && pe.parentNode[We]._isOutsideThisEl(e.target)
            };
        q.prototype = {
            constructor: q,
            _isOutsideThisEl: function Ut(e) {
                this.el.contains(e) || e === this.el || (De = null)
            },
            _getDirection: function Kt(e, t) {
                return "function" == typeof this.options.direction ? this.options.direction.call(this, e, t, pe) : this.options.direction
            },
            _onTapStart: function qt(t) {
                if (t.cancelable) {
                    var n = this,
                        o = this.el,
                        e = this.options,
                        i = e.preventOnFilter,
                        r = t.type,
                        s = t.touches && t.touches[0] || t.pointerType && "touch" === t.pointerType && t,
                        a = (s || t).target,
                        l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || a,
                        c = e.filter;
                    if (J(o), !pe && !(/mousedown|pointerdown/.test(r) && 0 !== t.button || e.disabled) && !l.isContentEditable && (this.nativeDraggable || !Fe || !a || "SELECT" !== a.tagName.toUpperCase()) && !((a = D(a, e.draggable, o, !1)) && a.animated || ve === a)) {
                        if (we = V(a), xe = V(a, e.draggable), "function" == typeof c) {
                            if (c.call(this, t, a, this)) return K({
                                sortable: n,
                                rootEl: l,
                                name: "filter",
                                targetEl: a,
                                toEl: o,
                                fromEl: o
                            }), Ye("filter", n, {
                                evt: t
                            }), void(i && t.cancelable && t.preventDefault())
                        } else if (c && (c = c.split(",").some(function(e) {
                                if (e = D(l, e.trim(), o, !1)) return K({
                                    sortable: n,
                                    rootEl: e,
                                    name: "filter",
                                    targetEl: a,
                                    fromEl: o,
                                    toEl: o
                                }), Ye("filter", n, {
                                    evt: t
                                }), !0
                            }))) return void(i && t.cancelable && t.preventDefault());
                        e.handle && !D(l, e.handle, o, !1) || this._prepareDragStart(t, s, a)
                    }
                }
            },
            _prepareDragStart: function Wt(e, t, n) {
                var o, i = this,
                    r = i.el,
                    s = i.options,
                    a = r.ownerDocument;
                if (n && !pe && n.parentNode === r) {
                    var l = G(n);
                    if (me = r, fe = (pe = n).parentNode, ge = pe.nextSibling, ve = n, Te = s.group, q.dragged = pe, Ce = {
                            target: pe,
                            clientX: (t || e).clientX,
                            clientY: (t || e).clientY
                        }, Oe = Ce.clientX - l.left, je = Ce.clientY - l.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, pe.style["will-change"] = "all", o = function o() {
                            Ye("delayEnded", i, {
                                evt: e
                            }), q.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(), !Pe && i.nativeDraggable && (pe.draggable = !0), i._triggerDragStart(e, t), K({
                                sortable: i,
                                name: "choose",
                                originalEvent: e
                            }), M(pe, s.chosenClass, !0))
                        }, s.ignore.split(",").forEach(function(e) {
                            u(pe, e.trim(), x)
                        }), C(a, "dragover", gt), C(a, "mousemove", gt), C(a, "touchmove", gt), C(a, "mouseup", i._onDrop), C(a, "touchend", i._onDrop), C(a, "touchcancel", i._onDrop), Pe && this.nativeDraggable && (this.options.touchStartThreshold = 4, pe.draggable = !0), Ye("delayStart", this, {
                            evt: e
                        }), !s.delay || s.delayOnTouchOnly && !t || this.nativeDraggable && (Ve || Ie)) o();
                    else {
                        if (q.eventCanceled) return void this._onDrop();
                        C(a, "mouseup", i._disableDelayedDrag), C(a, "touchend", i._disableDelayedDrag), C(a, "touchcancel", i._disableDelayedDrag), C(a, "mousemove", i._delayedDragTouchMoveHandler), C(a, "touchmove", i._delayedDragTouchMoveHandler), s.supportPointer && C(a, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, s.delay)
                    }
                }
            },
            _delayedDragTouchMoveHandler: function Rt(e) {
                var t = e.touches ? e.touches[0] : e;
                Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
            },
            _disableDelayedDrag: function Xt() {
                pe && x(pe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
            },
            _disableDelayedDragEvents: function zt() {
                var e = this.el.ownerDocument;
                L(e, "mouseup", this._disableDelayedDrag), L(e, "touchend", this._disableDelayedDrag), L(e, "touchcancel", this._disableDelayedDrag), L(e, "mousemove", this._delayedDragTouchMoveHandler), L(e, "touchmove", this._delayedDragTouchMoveHandler), L(e, "pointermove", this._delayedDragTouchMoveHandler)
            },
            _triggerDragStart: function Yt(e, t) {
                t = t || "touch" == e.pointerType && e, !this.nativeDraggable || t ? this.options.supportPointer ? C(document, "pointermove", this._onTouchMove) : C(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (C(pe, "dragend", this), C(me, "dragstart", this._onDragStart));
                try {
                    document.selection ? Q(function() {
                        document.selection.empty()
                    }) : window.getSelection().removeAllRanges()
                } catch (n) {}
            },
            _dragStarted: function Jt(e, t) {
                if (Je = !1, me && pe) {
                    Ye("dragStarted", this, {
                        evt: t
                    }), this.nativeDraggable && C(document, "dragover", vt);
                    var n = this.options;
                    !e && M(pe, n.dragClass, !1), M(pe, n.ghostClass, !0), q.active = this, e && this._appendGhost(), K({
                        sortable: this,
                        name: "start",
                        originalEvent: t
                    })
                } else this._nulling()
            },
            _emulateDragOver: function Qt() {
                if (Le) {
                    this._lastX = Le.clientX, this._lastY = Le.clientY, ht();
                    for (var e = document.elementFromPoint(Le.clientX, Le.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Le.clientX, Le.clientY)) !== t;) t = e;
                    if (pe.parentNode[We]._isOutsideThisEl(e), t)
                        do {
                            if (t[We]) {
                                if (t[We]._onDragOver({
                                        clientX: Le.clientX,
                                        clientY: Le.clientY,
                                        target: e,
                                        rootEl: t
                                    }) && !this.options.dragoverBubble) break
                            }
                            e = t
                        } while (t = t.parentNode);
                    mt()
                }
            },
            _onTouchMove: function Zt(e) {
                if (Ce) {
                    var t = this.options,
                        n = t.fallbackTolerance,
                        o = t.fallbackOffset,
                        i = e.touches ? e.touches[0] : e,
                        r = he && _(he, !0),
                        s = he && r && r.a,
                        a = he && r && r.d,
                        l = st && Ge && p(Ge),
                        c = (i.clientX - Ce.clientX + o.x) / (s || 1) + (l ? l[0] - nt[0] : 0) / (s || 1),
                        u = (i.clientY - Ce.clientY + o.y) / (a || 1) + (l ? l[1] - nt[1] : 0) / (a || 1);
                    if (!q.active && !Je) {
                        if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
                        this._onDragStart(e, !0)
                    }
                    if (he) {
                        r ? (r.e += c - (_e || 0), r.f += u - (Ae || 0)) : r = {
                            a: 1,
                            b: 0,
                            c: 0,
                            d: 1,
                            e: c,
                            f: u
                        };
                        var d = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")");
                        N(he, "webkitTransform", d), N(he, "mozTransform", d), N(he, "msTransform", d), N(he, "transform", d), _e = c, Ae = u, Le = i
                    }
                    e.cancelable && e.preventDefault()
                }
            },
            _appendGhost: function en() {
                if (!he) {
                    var e = this.options.fallbackOnBody ? document.body : me,
                        t = G(pe, !0, st, !0, e),
                        n = this.options;
                    if (st) {
                        for (Ge = e;
                            "static" === N(Ge, "position") && "none" === N(Ge, "transform") && Ge !== document;) Ge = Ge.parentNode;
                        Ge !== document.body && Ge !== document.documentElement ? (Ge === document && (Ge = j()), t.top += Ge.scrollTop, t.left += Ge.scrollLeft) : Ge = j(), nt = p(Ge)
                    }
                    M(he = pe.cloneNode(!0), n.ghostClass, !1), M(he, n.fallbackClass, !0), M(he, n.dragClass, !0), N(he, "transition", ""), N(he, "transform", ""), N(he, "box-sizing", "border-box"), N(he, "margin", 0), N(he, "top", t.top), N(he, "left", t.left), N(he, "width", t.width), N(he, "height", t.height), N(he, "opacity", "0.8"), N(he, "position", st ? "absolute" : "fixed"), N(he, "zIndex", "100000"), N(he, "pointerEvents", "none"), q.ghost = he, e.appendChild(he), N(he, "transform-origin", Oe / parseInt(he.style.width) * 100 + "% " + je / parseInt(he.style.height) * 100 + "%")
                }
            },
            _onDragStart: function tn(e, t) {
                var n = this,
                    o = e.dataTransfer,
                    i = n.options;
                Ye("dragStart", this, {
                    evt: e
                }), q.eventCanceled ? this._onDrop() : (Ye("setupClone", this), q.eventCanceled || ((ye = A(pe)).draggable = !1, ye.style["will-change"] = "", this._hideClone(), M(ye, this.options.chosenClass, !1), q.clone = ye), n.cloneId = Q(function() {
                    Ye("clone", n), q.eventCanceled || (n.options.removeCloneOnHide || me.insertBefore(ye, pe), n._hideClone(), K({
                        sortable: n,
                        name: "clone"
                    }))
                }), !t && M(pe, i.dragClass, !0), t ? (Qe = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (L(document, "mouseup", n._onDrop), L(document, "touchend", n._onDrop), L(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(n, o, pe)), C(document, "drop", n), N(pe, "transform", "translateZ(0)")), Je = !0, n._dragStartId = Q(n._dragStarted.bind(n, t, e)), C(document, "selectstart", n), $e = !0, Fe && N(document.body, "user-select", "none"))
            },
            _onDragOver: function nn(o) {
                function t(e, t) {
                    Ye(e, v, $({
                        evt: o,
                        isOwner: h,
                        axis: c ? "vertical" : "horizontal",
                        revert: l,
                        dragRect: s,
                        targetRect: a,
                        canSort: m,
                        fromSortable: g,
                        target: d,
                        completed: i,
                        onMove: function n(e, t) {
                            return W(me, u, pe, s, e, G(e), o, t)
                        },
                        changed: r
                    }, t))
                }

                function e() {
                    t("dragOverAnimationCapture"), v.captureAnimationState(), v !== g && g.captureAnimationState()
                }

                function i(e) {
                    return t("dragOverCompleted", {
                        insertion: e
                    }), e && (h ? f._hideClone() : f._showClone(v), v !== g && (M(pe, Se ? Se.options.ghostClass : f.options.ghostClass, !1), M(pe, n.ghostClass, !0)), Se !== v && v !== q.active ? Se = v : v === q.active && Se && (Se = null), g === v && (v._ignoreWhileAnimating = d), v.animateAll(function() {
                        t("dragOverAnimationComplete"), v._ignoreWhileAnimating = null
                    }), v !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (d === pe && !pe.animated || d === u && !d.animated) && (De = null), n.dragoverBubble || o.rootEl || d === document || (pe.parentNode[We]._isOutsideThisEl(o.target), !e && gt(o)), !n.dragoverBubble && o.stopPropagation && o.stopPropagation(), y = !0
                }

                function r() {
                    Ee = V(pe), ke = V(pe, n.draggable), K({
                        sortable: v,
                        name: "change",
                        toEl: u,
                        newIndex: Ee,
                        newDraggableIndex: ke,
                        originalEvent: o
                    })
                }
                var s, a, l, c, u = this.el,
                    d = o.target,
                    n = this.options,
                    p = n.group,
                    f = q.active,
                    h = Te === p,
                    m = n.sort,
                    g = Se || f,
                    v = this,
                    y = !1;
                if (!ot) {
                    if (void 0 !== o.preventDefault && o.cancelable && o.preventDefault(), d = D(d, n.draggable, u, !0), t("dragOver"), q.eventCanceled) return y;
                    if (pe.contains(o.target) || d.animated && d.animatingX && d.animatingY || v._ignoreWhileAnimating === d) return i(!1);
                    if (Qe = !1, f && !n.disabled && (h ? m || (l = !me.contains(pe)) : Se === this || (this.lastPutMode = Te.checkPull(this, f, pe, o)) && p.checkPut(this, f, pe, o))) {
                        if (c = "vertical" === this._getDirection(o, d), s = G(pe), t("dragOverValid"), q.eventCanceled) return y;
                        if (l) return fe = me, e(), this._hideClone(), t("revert"), q.eventCanceled || (ge ? me.insertBefore(pe, ge) : me.appendChild(pe)), i(!0);
                        var b = I(u, n.draggable);
                        if (!b || X(o, c, this) && !b.animated) {
                            if (b === pe) return i(!1);
                            if (b && u === o.target && (d = b), d && (a = G(d)), !1 !== W(me, u, pe, s, d, a, o, !!d)) return e(), u.appendChild(pe), fe = u, r(), i(!0)
                        } else if (d.parentNode === u) {
                            a = G(d);
                            var w, E, x = 0,
                                k = pe.parentNode !== u,
                                T = !dt(pe.animated && pe.toRect || s, d.animated && d.toRect || a, c),
                                S = c ? "top" : "left",
                                C = H(d, "top", "top") || H(pe, "top", "top"),
                                L = C ? C.scrollTop : void 0;
                            if (De !== d && (w = a[S], et = !1, tt = !T && n.invertSwap || k), 0 !== (x = z(o, d, a, c, T ? 1 : n.swapThreshold, null == n.invertedSwapThreshold ? n.swapThreshold : n.invertedSwapThreshold, tt, De === d)))
                                for (var _ = V(pe); _ -= x, (E = fe.children[_]) && ("none" === N(E, "display") || E === he););
                            if (0 === x || E === d) return i(!1);
                            Me = x;
                            var A = (De = d).nextElementSibling,
                                O = !1,
                                j = W(me, u, pe, s, d, a, o, O = 1 === x);
                            if (!1 !== j) return 1 !== j && -1 !== j || (O = 1 === j), ot = !0, setTimeout(R, 30), e(), O && !A ? u.appendChild(pe) : d.parentNode.insertBefore(pe, O ? A : d), C && F(C, 0, L - C.scrollTop), fe = pe.parentNode, w === undefined || tt || (Ne = Math.abs(w - G(d)[S])), r(), i(!0)
                        }
                        if (u.contains(pe)) return i(!1)
                    }
                    return !1
                }
            },
            _ignoreWhileAnimating: null,
            _offMoveEvents: function on() {
                L(document, "mousemove", this._onTouchMove), L(document, "touchmove", this._onTouchMove), L(document, "pointermove", this._onTouchMove), L(document, "dragover", gt), L(document, "mousemove", gt), L(document, "touchmove", gt)
            },
            _offUpEvents: function rn() {
                var e = this.el.ownerDocument;
                L(e, "mouseup", this._onDrop), L(e, "touchend", this._onDrop), L(e, "pointerup", this._onDrop), L(e, "touchcancel", this._onDrop), L(document, "selectstart", this)
            },
            _onDrop: function sn(e) {
                var t = this.el,
                    n = this.options;
                Ee = V(pe), ke = V(pe, n.draggable), Ye("drop", this, {
                    evt: e
                }), fe = pe && pe.parentNode, Ee = V(pe), ke = V(pe, n.draggable), q.eventCanceled || (et = tt = Je = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Z(this.cloneId), Z(this._dragStartId), this.nativeDraggable && (L(document, "drop", this), L(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Fe && N(document.body, "user-select", ""), N(pe, "transform", ""), e && ($e && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), he && he.parentNode && he.parentNode.removeChild(he), (me === fe || Se && "clone" !== Se.lastPutMode) && ye && ye.parentNode && ye.parentNode.removeChild(ye), pe && (this.nativeDraggable && L(pe, "dragend", this), x(pe), pe.style["will-change"] = "", $e && !Je && M(pe, Se ? Se.options.ghostClass : this.options.ghostClass, !1), M(pe, this.options.chosenClass, !1), K({
                    sortable: this,
                    name: "unchoose",
                    toEl: fe,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: e
                }), me !== fe ? (0 <= Ee && (K({
                    rootEl: fe,
                    name: "add",
                    toEl: fe,
                    fromEl: me,
                    originalEvent: e
                }), K({
                    sortable: this,
                    name: "remove",
                    toEl: fe,
                    originalEvent: e
                }), K({
                    rootEl: fe,
                    name: "sort",
                    toEl: fe,
                    fromEl: me,
                    originalEvent: e
                }), K({
                    sortable: this,
                    name: "sort",
                    toEl: fe,
                    originalEvent: e
                })), Se && Se.save()) : Ee !== we && 0 <= Ee && (K({
                    sortable: this,
                    name: "update",
                    toEl: fe,
                    originalEvent: e
                }), K({
                    sortable: this,
                    name: "sort",
                    toEl: fe,
                    originalEvent: e
                })), q.active && (null != Ee && -1 !== Ee || (Ee = we, ke = xe), K({
                    sortable: this,
                    name: "end",
                    toEl: fe,
                    originalEvent: e
                }), this.save())))), this._nulling()
            },
            _nulling: function an() {
                Ye("nulling", this), me = pe = fe = he = ge = ye = ve = be = Ce = Le = $e = Ee = ke = we = xe = De = Me = Se = Te = q.dragged = q.ghost = q.clone = q.active = null, it.forEach(function(e) {
                    e.checked = !0
                }), it.length = _e = Ae = 0
            },
            handleEvent: function ln(e) {
                switch (e.type) {
                    case "drop":
                    case "dragend":
                        this._onDrop(e);
                        break;
                    case "dragenter":
                    case "dragover":
                        pe && (this._onDragOver(e), E(e));
                        break;
                    case "selectstart":
                        e.preventDefault()
                }
            },
            toArray: function cn() {
                for (var e, t = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++) D(e = n[o], r.draggable, this.el, !1) && t.push(e.getAttribute(r.dataIdAttr) || Y(e));
                return t
            },
            sort: function un(e, t) {
                var o = {},
                    i = this.el;
                this.toArray().forEach(function(e, t) {
                    var n = i.children[t];
                    D(n, this.options.draggable, i, !1) && (o[e] = n)
                }, this), t && this.captureAnimationState(), e.forEach(function(e) {
                    o[e] && (i.removeChild(o[e]), i.appendChild(o[e]))
                }), t && this.animateAll()
            },
            save: function dn() {
                var e = this.options.store;
                e && e.set && e.set(this)
            },
            closest: function pn(e, t) {
                return D(e, t || this.options.draggable, this.el, !1)
            },
            option: function fn(e, t) {
                var n = this.options;
                if (void 0 === t) return n[e];
                var o = ze.modifyOption(this, e, t);
                n[e] = void 0 !== o ? o : t, "group" === e && ft(n)
            },
            destroy: function hn() {
                Ye("destroy", this);
                var e = this.el;
                e[We] = null, L(e, "mousedown", this._onTapStart), L(e, "touchstart", this._onTapStart), L(e, "pointerdown", this._onTapStart), this.nativeDraggable && (L(e, "dragover", this), L(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
                    e.removeAttribute("draggable")
                }), this._onDrop(), this._disableDelayedDragEvents(), Ze.splice(Ze.indexOf(this.el), 1), this.el = e = null
            },
            _hideClone: function mn() {
                if (!be) {
                    if (Ye("hideClone", this), q.eventCanceled) return;
                    N(ye, "display", "none"), this.options.removeCloneOnHide && ye.parentNode && ye.parentNode.removeChild(ye), be = !0
                }
            },
            _showClone: function gn(e) {
                if ("clone" === e.lastPutMode) {
                    if (be) {
                        if (Ye("showClone", this), q.eventCanceled) return;
                        pe.parentNode != me || this.options.group.revertClone ? ge ? me.insertBefore(ye, ge) : me.appendChild(ye) : me.insertBefore(ye, pe), this.options.group.revertClone && this.animate(pe, ye), N(ye, "display", ""), be = !1
                    }
                } else this._hideClone()
            }
        }, rt && C(document, "touchmove", function(e) {
            (q.active || Je) && e.cancelable && e.preventDefault()
        }), q.utils = {
            on: C,
            off: L,
            css: N,
            find: u,
            is: function vn(e, t) {
                return !!D(e, t, e, !1)
            },
            extend: h,
            throttle: g,
            closest: D,
            toggleClass: M,
            clone: A,
            index: V,
            nextTick: Q,
            cancelNextTick: Z,
            detectDirection: ut,
            getChild: d
        }, q.get = function(e) {
            return e[We]
        }, q.mount = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t[0].constructor === Array && (t = t[0]), t.forEach(function(e) {
                if (!e.prototype || !e.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));
                e.utils && (q.utils = $({}, q.utils, e.utils)), ze.mount(e)
            })
        }, q.create = function(e, t) {
            return new q(e, t)
        }, q.version = He;
        var yt, bt, wt, Et, xt, kt, Tt, St = [],
            Ct = !1,
            Lt = g(function(n, e, t, o) {
                if (e.scroll) {
                    var i, r = (n.touches ? n.touches[0] : n).clientX,
                        s = (n.touches ? n.touches[0] : n).clientY,
                        a = e.scrollSensitivity,
                        l = e.scrollSpeed,
                        c = j(),
                        u = !1;
                    bt !== t && (bt = t, te(), yt = e.scroll, i = e.scrollFn, !0 === yt && (yt = P(t, !0)));
                    var d = 0,
                        p = yt;
                    do {
                        var f = p,
                            h = G(f),
                            m = h.top,
                            g = h.bottom,
                            v = h.left,
                            y = h.right,
                            b = h.width,
                            w = h.height,
                            E = void 0,
                            x = void 0,
                            k = f.scrollWidth,
                            T = f.scrollHeight,
                            S = N(f),
                            C = f.scrollLeft,
                            L = f.scrollTop;
                        f === c ? (E = b < k && ("auto" === S.overflowX || "scroll" === S.overflowX || "visible" === S.overflowX), x = w < T && ("auto" === S.overflowY || "scroll" === S.overflowY || "visible" === S.overflowY)) : (E = b < k && ("auto" === S.overflowX || "scroll" === S.overflowX), x = w < T && ("auto" === S.overflowY || "scroll" === S.overflowY));
                        var _ = E && (Math.abs(y - r) <= a && C + b < k) - (Math.abs(v - r) <= a && !!C),
                            A = x && (Math.abs(g - s) <= a && L + w < T) - (Math.abs(m - s) <= a && !!L);
                        if (!St[d])
                            for (var O = 0; O <= d; O++) St[O] || (St[O] = {});
                        St[d].vx == _ && St[d].vy == A && St[d].el === f || (St[d].el = f, St[d].vx = _, St[d].vy = A, clearInterval(St[d].pid), 0 == _ && 0 == A || (u = !0, St[d].pid = setInterval(function() {
                            o && 0 === this.layer && q.active._onTouchMove(xt);
                            var e = St[this.layer].vy ? St[this.layer].vy * l : 0,
                                t = St[this.layer].vx ? St[this.layer].vx * l : 0;
                            "function" == typeof i && "continue" !== i.call(q.dragged.parentNode[We], t, e, n, xt, St[this.layer].el) || F(St[this.layer].el, t, e)
                        }.bind({
                            layer: d
                        }), 24))), d++
                    } while (e.bubbleScroll && p !== c && (p = P(p, !1)));
                    Ct = u
                }
            }, 30),
            _t = function _t(e) {
                var t = e.originalEvent,
                    n = e.putSortable,
                    o = e.dragEl,
                    i = e.activeSortable,
                    r = e.dispatchSortableEvent,
                    s = e.hideGhostForTarget,
                    a = e.unhideGhostForTarget;
                if (t) {
                    var l = n || i;
                    s();
                    var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
                        u = document.elementFromPoint(c.clientX, c.clientY);
                    a(), l && !l.el.contains(u) && (r("spill"), this.onSpill({
                        dragEl: o,
                        putSortable: n
                    }))
                }
            };
        oe.prototype = {
            startIndex: null,
            dragStart: function yn(e) {
                var t = e.oldDraggableIndex;
                this.startIndex = t
            },
            onSpill: function bn(e) {
                var t = e.dragEl,
                    n = e.putSortable;
                this.sortable.captureAnimationState(), n && n.captureAnimationState();
                var o = d(this.sortable.el, this.startIndex, this.options);
                o ? this.sortable.el.insertBefore(t, o) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll()
            },
            drop: _t
        }, T(oe, {
            pluginName: "revertOnSpill"
        }), ie.prototype = {
            onSpill: function bn(e) {
                var t = e.dragEl,
                    n = e.putSortable || this.sortable;
                n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll()
            },
            drop: _t
        }, T(ie, {
            pluginName: "removeOnSpill"
        });
        var At, Ot, jt, $t, Dt, Mt = [],
            Nt = [],
            Gt = !1,
            Ht = !1,
            It = !1;
        return q.mount(new ee), q.mount(ie, oe), q.mount(new re), q.mount(new ae), q
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.$upButtons = this.$module.querySelectorAll(".js-reorderable-list-up"), this.$downButtons = this.$module.querySelectorAll(".js-reorderable-list-down")
        }
        t.prototype.init = function() {
            this.sortable = window.Sortable.create(this.$module, {
                chosenClass: "gem-c-reorderable-list__item--chosen",
                dragClass: "gem-c-reorderable-list__item--drag",
                onSort: function() {
                    this.updateOrderIndexes(), this.triggerEvent(this.$module, "reorder-drag")
                }.bind(this)
            }), "function" == typeof window.matchMedia ? this.setupResponsiveChecks() : this.sortable.option("disabled", !0);
            for (var e = this.onClickUpButton.bind(this), t = 0; t < this.$upButtons.length; t++) this.$upButtons[t].addEventListener("click", e);
            for (var n = this.onClickDownButton.bind(this), o = 0; o < this.$downButtons.length; o++) this.$downButtons[o].addEventListener("click", n)
        }, t.prototype.setupResponsiveChecks = function() {
            var e = "40.0625em";
            this.mediaQueryList = window.matchMedia("(min-width: " + e + ")"), this.mediaQueryList.addListener(this.checkMode.bind(this)), this.checkMode()
        }, t.prototype.checkMode = function() {
            this.sortable.option("disabled", !this.mediaQueryList.matches)
        }, t.prototype.onClickUpButton = function(e) {
            var t = e.target.closest(".gem-c-reorderable-list__item"),
                n = t.previousElementSibling;
            t && n && (t.parentNode.insertBefore(t, n), this.updateOrderIndexes()), 0 === e.detail && (t !== t.parentNode.firstElementChild ? e.target.focus() : e.target.nextElementSibling.focus()), this.triggerEvent(e.target, "reorder-move-up")
        }, t.prototype.onClickDownButton = function(e) {
            var t = e.target.closest(".gem-c-reorderable-list__item"),
                n = t.nextElementSibling;
            t && n && (t.parentNode.insertBefore(t, n.nextElementSibling), this.updateOrderIndexes()), 0 === e.detail && (t !== t.parentNode.lastElementChild ? e.target.focus() : e.target.previousElementSibling.focus()), this.triggerEvent(e.target, "reorder-move-down")
        }, t.prototype.updateOrderIndexes = function() {
            for (var e = this.$module.querySelectorAll(".gem-c-reorderable-list__actions input"), t = 0; t < e.length; t++) e[t].setAttribute("value", t + 1)
        }, t.prototype.triggerEvent = function(e, t) {
            var n, o = {
                bubbles: !0,
                cancelable: !0
            };
            "function" == typeof window.CustomEvent ? n = new window.CustomEvent(t, o) : (n = document.createEvent("CustomEvent")).initCustomEvent(t, o.bubbles, o.cancelable, null), e.dispatchEvent(n)
        }, e.ReorderableList = t
    }(window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.input = this.$module.querySelector(".gem-c-input")
        }
        t.prototype.init = function() {
            this.$module.togglePassword = this.togglePassword.bind(this), this.$module.revertToPasswordOnFormSubmit = this.revertToPasswordOnFormSubmit.bind(this), this.input.classList.add("gem-c-input--with-password"), this.showPasswordText = this.$module.getAttribute("data-show-text"), this.hidePasswordText = this.$module.getAttribute("data-hide-text"), this.showPasswordFullText = this.$module.getAttribute("data-show-full-text"), this.hidePasswordFullText = this.$module.getAttribute("data-hide-full-text"), this.shownPassword = this.$module.getAttribute("data-announce-show"), this.hiddenPassword = this.$module.getAttribute("data-announce-hide"), this.wrapper = document.createElement("div"), this.wrapper.classList.add("gem-c-show-password__input-wrapper"), this.input.parentNode.insertBefore(this.wrapper, this.input), this.wrapper.appendChild(this.input), this.showHide = document.createElement("button"), this.showHide.className = "gem-c-show-password__toggle", this.showHide.setAttribute("aria-controls", this.input.getAttribute("id")), this.showHide.setAttribute("type", "button"), this.showHide.setAttribute("aria-label", this.showPasswordFullText), this.showHide.innerHTML = this.showPasswordText, this.wrapper.insertBefore(this.showHide, this.input.nextSibling), this.statusText = document.createElement("span"), this.statusText.classList.add("govuk-visually-hidden"), this.statusText.innerHTML = this.hiddenPassword, this.statusText.setAttribute("aria-live", "polite"), this.wrapper.insertBefore(this.statusText, this.showHide.nextSibling), this.showHide.addEventListener("click", this.$module.togglePassword), this.moveDataAttributesToButton(), this.parentForm = this.input.form;
            var e = this.$module.getAttribute("data-disable-form-submit-check");
            this.parentForm && !e && this.parentForm.addEventListener("submit", this.$module.revertToPasswordOnFormSubmit)
        }, t.prototype.togglePassword = function(e) {
            e.preventDefault(), this.showHide.innerHTML = this.showHide.innerHTML === this.showPasswordText ? this.hidePasswordText : this.showPasswordText, this.showHide.setAttribute("aria-label", this.showHide.getAttribute("aria-label") === this.showPasswordFullText ? this.hidePasswordFullText : this.showPasswordFullText), this.statusText.innerHTML = this.statusText.innerHTML === this.shownPassword ? this.hiddenPassword : this.shownPassword, this.input.setAttribute("type", "text" === this.input.getAttribute("type") ? "password" : "text")
        }, t.prototype.revertToPasswordOnFormSubmit = function() {
            this.showHide.innerHTML = this.showPasswordText, this.showHide.setAttribute("aria-label", this.showPasswordFullText), this.statusText.innerHTML = this.hiddenPassword, this.input.setAttribute("type", "password")
        }, t.prototype.moveDataAttributesToButton = function() {
            for (var e = this.input.attributes, t = e.length; 0 <= t; t--) {
                var n = e[t];
                n && /^data-button/.test(n.name) && (this.showHide.setAttribute(n.name.replace("-button", ""), n.value), this.input.removeAttribute(n.name))
            }
        }, e.ShowPassword = t
    }(
        window.GOVUK.Modules), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {},
    function(e) {
        function t(e) {
            this.$module = e, this.$module.actions = {}, this.$module.rememberShownStep = !1, this.$module.stepNavSize = !1, this.$module.sessionStoreLink = "govuk-step-nav-active-link", this.$module.activeLinkClass = "gem-c-step-nav__list-item--active", this.$module.activeStepClass = "gem-c-step-nav__step--active", this.$module.activeLinkHref = "#content", this.$module.uniqueId = !1
        }
        t.prototype.init = function() {
            this.$module.classList.add("gem-c-step-nav--active"), this.$module.classList.remove("js-hidden"), this.$module.stepNavSize = this.$module.classList.contains("gem-c-step-nav--large") ? "Big" : "Small", this.$module.rememberShownStep = !!this.$module.hasAttribute("data-remember") && "Big" === this.$module.stepNavSize, this.$module.steps = this.$module.querySelectorAll(".js-step"), this.$module.stepHeaders = this.$module.querySelectorAll(".js-toggle-panel"), this.$module.totalSteps = this.$module.querySelectorAll(".js-panel").length, this.$module.totalLinks = this.$module.querySelectorAll(".gem-c-step-nav__link").length, this.$module.showOrHideAllButton = !1, this.$module.uniqueId = this.$module.getAttribute("data-id") || !1, this.$module.uniqueId && (this.$module.sessionStoreLink = this.$module.sessionStoreLink + "_" + this.$module.uniqueId), this.$module.upChevronSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="gem-c-step-nav__chevron-stroke" d="M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.499997 15.2467 0.499998 10C0.499999 4.7533 4.7533 0.500001 10 0.500002C15.2467 0.500003 19.5 4.7533 19.5 10Z" stroke="#1D70B8"/><path class="gem-c-step-nav__chevron-stroke" d="M6.32617 12.3262L10 8.65234L13.6738 12.3262" stroke="#1D70B8" stroke-width="2"/></svg>', this.$module.downChevronSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="gem-c-step-nav__chevron-stroke" d="M0.499997 10C0.499998 4.75329 4.75329 0.499999 10 0.499999C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.499997 15.2467 0.499997 10Z" stroke="#1D70B8"/><path class="gem-c-step-nav__chevron-stroke" d="M13.6738 8.67383L10 12.3477L6.32617 8.67383" stroke="#1D70B8" stroke-width="2"/></svg>';
            var e = new this.StepNavTracker(this.$module.uniqueId, this.$module.totalSteps, this.$module.totalLinks);
            this.getTextForInsertedElements(), this.addButtonstoSteps(), this.addShowHideAllButton(), this.addShowHideToggle(), this.addAriaControlsAttrForShowHideAllButton(), this.ensureOnlyOneActiveLink(), this.showPreviouslyOpenedSteps(), this.bindToggleForSteps(e), this.bindToggleShowHideAllButton(e), this.bindComponentLinkClicks(e)
        }, t.prototype.getTextForInsertedElements = function() {
            this.$module.actions.showText = this.$module.getAttribute("data-show-text"), this.$module.actions.hideText = this.$module.getAttribute("data-hide-text"), this.$module.actions.showAllText = this.$module.getAttribute("data-show-all-text"), this.$module.actions.hideAllText = this.$module.getAttribute("data-hide-all-text")
        }, t.prototype.addShowHideAllButton = function() {
            var e = document.createElement("div");
            e.className = "gem-c-step-nav__controls govuk-!-display-none-print", e.innerHTML = '<button aria-expanded="false" class="gem-c-step-nav__button gem-c-step-nav__button--controls js-step-controls-button"><span class="gem-c-step-nav__button-text gem-c-step-nav__button-text--all js-step-controls-button-text">' + this.$module.actions.showAllText + '</span><span class="gem-c-step-nav__chevron js-step-controls-button-icon">' + this.$module.downChevronSvg + "</span></button>";
            var t = this.$module.querySelectorAll(".gem-c-step-nav__steps")[0];
            this.$module.insertBefore(e, t), this.$module.showOrHideAllButton = this.$module.querySelectorAll(".js-step-controls-button")[0]
        }, t.prototype.addShowHideToggle = function() {
            for (var e = 0; e < this.$module.stepHeaders.length; e++) {
                var t = this.$module.stepHeaders[e];
                if (!t.querySelectorAll(".js-toggle-link").length) {
                    var n = document.createElement("span"),
                        o = document.createElement("span"),
                        i = document.createElement("span"),
                        r = document.createElement("span"),
                        s = document.createElement("span"),
                        a = document.createElement("span");
                    o.className = "gem-c-step-nav__toggle-link js-toggle-link govuk-!-display-none-print", i.className = "gem-c-step-nav__button-text js-toggle-link-text", r.className = "gem-c-step-nav__chevron js-toggle-link-icon", s.className = "govuk-visually-hidden", a.className = "govuk-visually-hidden", o.appendChild(i), o.appendChild(r), s.innerHTML = ", ", a.innerHTML = " this section", n.appendChild(s), n.appendChild(o), n.appendChild(a), t.querySelectorAll(".js-step-title-button")[0].appendChild(n)
                }
            }
        }, t.prototype.headerIsOpen = function(e) {
            return void 0 !== e.parentNode.getAttribute("show")
        }, t.prototype.addAriaControlsAttrForShowHideAllButton = function() {
            var e = this.$module.querySelectorAll(".js-panel")[0].getAttribute("id");
            this.$module.showOrHideAllButton.setAttribute("aria-controls", e)
        }, t.prototype.setAllStepsShownState = function(e) {
            for (var t = [], n = 0; n < this.$module.steps.length; n++) {
                new this.StepView(this.$module.steps[n], this.$module).setIsShown(e), e && t.push(this.$module.steps[n].getAttribute("id"))
            }
            e ? this.saveToSessionStorage(this.$module.uniqueId, JSON.stringify(t)) : this.removeFromSessionStorage(this.$module.uniqueId)
        }, t.prototype.showPreviouslyOpenedSteps = function() {
            for (var e = this.loadFromSessionStorage(this.$module.uniqueId) || [], t = 0; t < this.$module.steps.length; t++) {
                var n = this.$module.steps[t],
                    o = n.getAttribute("id"),
                    i = new this.StepView(n, this.$module),
                    r = n.hasAttribute("data-show");
                this.$module.rememberShownStep && -1 < e.indexOf(o) || r && "undefined" !== r ? i.setIsShown(!0) : i.setIsShown(!1)
            }
            0 < e.length && (this.$module.showOrHideAllButton.setAttribute("aria-expanded", !0), this.setShowHideAllText())
        }, t.prototype.addButtonstoSteps = function() {
            for (var e = 0; e < this.$module.steps.length; e++) {
                var t = this.$module.steps[e],
                    n = t.querySelectorAll(".js-step-title")[0],
                    o = t.querySelectorAll(".js-panel")[0].getAttribute("id"),
                    i = n.textContent || n.innerText;
                n.outerHTML = '<span class="js-step-title"><button class="gem-c-step-nav__button gem-c-step-nav__button--title js-step-title-button" aria-expanded="false" aria-controls="' + o + '"><span class="gem-c-step-nav__title-text js-step-title-text">' + i + "</span></button></span>"
            }
        }, t.prototype.bindToggleForSteps = function(o) {
            for (var i = this, e = this.$module.querySelectorAll(".js-toggle-panel"), t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {
                var t = new i.StepView(this.parentNode, i.$module);
                t.toggle();
                var n = this.parentNode.hasAttribute("data-optional");
                new i.StepToggleClick(e, t, o, n, i.$module.stepNavSize).trackClick(), i.setShowHideAllText(), i.rememberStepState(this.parentNode)
            })
        }, t.prototype.rememberStepState = function(e) {
            if (this.$module.rememberShownStep) {
                var t = JSON.parse(this.loadFromSessionStorage(this.$module.uniqueId)) || [],
                    n = e.getAttribute("id");
                if (e.classList.contains("step-is-shown")) t.push(n);
                else {
                    var o = t.indexOf(n); - 1 < o && t.splice(o, 1)
                }
                this.saveToSessionStorage(this.$module.uniqueId, JSON.stringify(t))
            }
        }, t.prototype.bindComponentLinkClicks = function(n) {
            for (var e = this.$module.querySelectorAll(".js-link"), o = this, t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {
                var t = this.getAttribute("data-position");
                new o.ComponentLinkClick(e, n, t, o.$module.stepNavSize).trackClick(), "external" !== this.getAttribute("rel") && o.saveToSessionStorage(o.$module.sessionStoreLink, t), this.getAttribute("href") === o.$module.activeLinkHref && (o.setOnlyThisLinkActive(this), o.setActiveStepClass())
            })
        }, t.prototype.saveToSessionStorage = function(e, t) {
            window.sessionStorage.setItem(e, t)
        }, t.prototype.loadFromSessionStorage = function(e) {
            return window.sessionStorage.getItem(e)
        }, t.prototype.removeFromSessionStorage = function(e) {
            window.sessionStorage.removeItem(e)
        }, t.prototype.setOnlyThisLinkActive = function(e) {
            for (var t = this.$module.querySelectorAll("." + this.$module.activeLinkClass), n = 0; n < t.length; n++) t[n].classList.remove(this.$module.activeLinkClass);
            e.parentNode.classList.add(this.$module.activeLinkClass)
        }, t.prototype.ensureOnlyOneActiveLink = function() {
            var e = this.$module.querySelectorAll(".js-list-item." + this.$module.activeLinkClass);
            if (!(e.length <= 1)) {
                var t = this.loadFromSessionStorage(this.$module.sessionStoreLink),
                    n = this.$module.querySelectorAll("." + this.$module.activeLinkClass)[0].firstChild.getAttribute("data-position"),
                    o = t || n,
                    i = this.$module.querySelectorAll('[data-position="' + o + '"]')[0];
                i ? i.parentNode.classList.contains(this.$module.activeLinkClass) || (o = i) : o = n, this.removeActiveStateFromAllButCurrent(e, o), this.setActiveStepClass()
            }
        }, t.prototype.removeActiveStateFromAllButCurrent = function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                if (o.querySelectorAll(".js-link")[0].getAttribute("data-position").toString() !== t.toString()) {
                    o.classList.remove(this.$module.activeLinkClass);
                    var i = o.querySelectorAll(".visuallyhidden");
                    i.length && i[0].parentNode.removeChild(i[0])
                }
            }
        }, t.prototype.setActiveStepClass = function() {
            for (var e = this.$module.querySelectorAll("." + this.$module.activeStepClass), t = 0; t < e.length; t++) e[t].classList.remove(this.$module.activeStepClass), e[t].removeAttribute("data-show");
            var n = this.$module.querySelectorAll("." + this.$module.activeLinkClass)[0];
            if (n) {
                var o = n.closest(".gem-c-step-nav__step");
                o.classList.add(this.$module.activeStepClass), o.setAttribute("data-show", "")
            }
        }, t.prototype.bindToggleShowHideAllButton = function(t) {
            var n = this;
            this.$module.showOrHideAllButton.addEventListener("click", function() {
                var e = (this.textContent || this.innerText) === n.$module.actions.showAllText;
                return t.trackClick("pageElementInteraction", e ? "stepNavAllShown" : "stepNavAllHidden", {
                    label: (e ? n.$module.actions.showAllText : n.$module.actions.hideAllText) + ": " + n.$module.stepNavSize
                }), n.setAllStepsShownState(e), n.$module.showOrHideAllButton.setAttribute("aria-expanded", e), n.setShowHideAllText(), !1
            })
        }, t.prototype.setShowHideAllText = function() {
            var e = this.$module.querySelectorAll(".step-is-shown").length === this.$module.totalSteps;
            this.$module.showOrHideAllButton.querySelector(".js-step-controls-button-text").innerHTML = e ? this.$module.actions.hideAllText : this.$module.actions.showAllText, this.$module.showOrHideAllButton.querySelector(".js-step-controls-button-icon").innerHTML = e ? this.$module.upChevronSvg : this.$module.downChevronSvg
        }, t.prototype.StepView = function(e, t) {
            this.stepElement = e, this.stepContent = this.stepElement.querySelectorAll(".js-panel")[0], this.titleButton = this.stepElement.querySelectorAll(".js-step-title-button")[0];
            var n = this.stepElement.querySelectorAll(".js-step-title-text")[0];
            this.title = n.textContent || n.innerText, this.title = this.title.replace(/^\s+|\s+$/g, ""), this.showText = t.actions.showText, this.hideText = t.actions.hideText, this.upChevronSvg = t.upChevronSvg, this.downChevronSvg = t.downChevronSvg, this.show = function() {
                this.setIsShown(!0)
            }, this.hide = function() {
                this.setIsShown(!1)
            }, this.toggle = function() {
                this.setIsShown(this.isHidden())
            }, this.setIsShown = function(e) {
                e ? (this.stepElement.classList.add("step-is-shown"), this.stepContent.classList.remove("js-hidden")) : (this.stepElement.classList.remove("step-is-shown"), this.stepContent.classList.add("js-hidden")), this.titleButton.setAttribute("aria-expanded", e);
                var t = this.stepElement.querySelectorAll(".js-toggle-link")[0];
                t.querySelector(".js-toggle-link-text").innerHTML = e ? this.hideText : this.showText, t.querySelector(".js-toggle-link-icon").innerHTML = e ? this.upChevronSvg : this.downChevronSvg
            }, this.isShown = function() {
                return this.stepElement.classList.contains("step-is-shown")
            }, this.isHidden = function() {
                return !this.isShown()
            }, this.numberOfContentItems = function() {
                return this.stepContent.querySelectorAll(".js-link").length
            }
        }, t.prototype.StepToggleClick = function(e, t, n, o, i) {
            this.target = e.target, this.stepIsOptional = o, this.stepNavSize = i, this.trackClick = function() {
                var e = {
                    label: this.trackingLabel(),
                    dimension28: t.numberOfContentItems().toString()
                };
                n.trackClick("pageElementInteraction", this.trackingAction(), e)
            }, this.trackingLabel = function() {
                return this.target.closest(".js-step").querySelectorAll(".js-toggle-panel")[0].getAttribute("data-position") + " - " + t.title + " - " + this.locateClickElement() + ": " + this.stepNavSize + this.isOptional()
            }, this.stepIndex = function() {
                return this.$module.steps.index(t.element) + 1
            }, this.trackingAction = function() {
                return t.isHidden() ? "stepNavHidden" : "stepNavShown"
            }, this.locateClickElement = function() {
                return this.clickedOnIcon() ? this.iconType() + " click" : this.clickedOnHeading() ? "Heading click" : "Elsewhere click"
            }, this.clickedOnIcon = function() {
                return this.target.classList.contains("js-toggle-link")
            }, this.clickedOnHeading = function() {
                return this.target.classList.contains("js-step-title-text")
            }, this.iconType = function() {
                return t.isHidden() ? "Minus" : "Plus"
            }, this.isOptional = function() {
                return this.stepIsOptional ? " ; optional" : ""
            }
        }, t.prototype.ComponentLinkClick = function(e, n, o, t) {
            this.size = t, this.target = e.target, this.trackClick = function() {
                var e = {
                        label: this.target.getAttribute("href") + " : " + this.size
                    },
                    t = this.target.closest(".gem-c-step-nav__list").getAttribute("data-length");
                t && (e.dimension28 = t), n.trackClick("stepNavLinkClicked", o, e)
            }
        }, t.prototype.StepNavTracker = function(e, t, n) {
            this.totalSteps = t, this.totalLinks = n, this.uniqueId = e, this.trackClick = function(e, t, n) {
                window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && ((n = n || {}).dimension26 = n.dimension26 || this.totalSteps.toString(), n.dimension27 = n.dimension27 || this.totalLinks.toString(), n.dimension96 = n.dimension96 || this.uniqueId, window.GOVUK.analytics.trackEvent(e, t, n))
            }
        }, e.Gemstepnav = t
    }(window.GOVUK.Modules),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
    }(this, function() {
        "use strict";

        function r(e, t) {
            if (window.NodeList.prototype.forEach) return e.forEach(t);
            for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e)
        }

        function e(e) {
            this.$module = e, this.$tabs = e.querySelectorAll(".govuk-tabs__tab"), this.keys = {
                left: 37,
                right: 39,
                up: 38,
                down: 40
            }, this.jsHiddenClass = "govuk-tabs__panel--hidden"
        }
        return function() {
                var a, l, c, u;
                "defineProperty" in Object && function() {
                    try {
                        var e = {};
                        return Object.defineProperty(e, "test", {
                            value: 42
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }() || (a = Object.defineProperty, l = Object.prototype.hasOwnProperty("__defineGetter__"), c = "Getters & setters cannot be defined on this javascript engine", u = "A property cannot both have accessors and be writable or have a value", Object.defineProperty = function d(e, t, n) {
                    if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                    if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                    if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                    var o = String(t),
                        i = "value" in n || "writable" in n,
                        r = "get" in n && typeof n.get,
                        s = "set" in n && typeof n.set;
                    if (r) {
                        if ("function" !== r) throw new TypeError("Getter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineGetter__.call(e, o, n.get)
                    } else e[o] = n.value;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Setter must be a function");
                        if (!l) throw new TypeError(c);
                        if (i) throw new TypeError(u);
                        Object.__defineSetter__.call(e, o, n.set)
                    }
                    return "value" in n && (e[o] = n.value), e
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                    value: function T(t) {
                        var n, e = Array,
                            o = Object,
                            i = o.prototype,
                            r = e.prototype,
                            s = function s() {},
                            a = i.toString,
                            l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            c = Function.prototype.toString,
                            u = function u(e) {
                                try {
                                    return c.call(e), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            d = "[object Function]",
                            p = "[object GeneratorFunction]";
                        n = function n(e) {
                            if ("function" != typeof e) return !1;
                            if (l) return u(e);
                            var t = a.call(e);
                            return t === d || t === p
                        };
                        var f = r.slice,
                            h = r.concat,
                            m = r.push,
                            g = Math.max,
                            v = this;
                        if (!n(v)) throw new TypeError("Function.prototype.bind called on incompatible " + v);
                        for (var y, b = f.call(arguments, 1), w = function() {
                                if (this instanceof y) {
                                    var e = v.apply(this, h.call(b, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return v.apply(t, h.call(b, f.call(arguments)))
                            }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++) m.call(x, "$" + k);
                        return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w), v.prototype && (s.prototype = v.prototype, y.prototype = new s, s.prototype = null), y
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(p) {
                var e, t, n;
                "DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList" in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
                    var i = !0,
                        n = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === i || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        n({}, "support")
                    } catch (e) {
                        i = !1
                    }
                    return function(i, r) {
                        var s = this,
                            a = [],
                            l = {},
                            c = 0,
                            e = 0,
                            t = function(e) {
                                n(s, e, function() {
                                    return d(), a[e]
                                }, !1)
                            },
                            u = function() {
                                if (e <= c)
                                    for (; e < c; ++e) t(e)
                            },
                            d = function() {
                                var e, t, n = arguments,
                                    o = /\s+/;
                                if (n.length)
                                    for (t = 0; t < n.length; ++t)
                                        if (o.test(n[t])) throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5, e.name = "InvalidCharacterError", e;
                                for ("" === (a = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (a = []), l = {}, t = 0; t < a.length; ++t) l[a[t]] = !0;
                                c = a.length, u()
                            };
                        return d(), n(s, "length", function() {
                            return d(), c
                        }), s.toLocaleString = s.toString = function() {
                            return d(), a.join(" ")
                        }, s.item = function(e) {
                            return d(), a[e]
                        }, s.contains = function(e) {
                            return d(), !!l[e]
                        }, s.add = function() {
                            d.apply(s, e = arguments);
                            for (var e, t, n = 0, o = e.length; n < o; ++n) t = e[n], l[t] || (a.push(t), l[t] = !0);
                            c !== a.length && (c = a.length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u())
                        }, s.remove = function() {
                            d.apply(s, e = arguments);
                            for (var e, t = {}, n = 0, o = []; n < e.length; ++n) t[e[n]] = !0, delete l[e[n]];
                            for (n = 0; n < a.length; ++n) t[a[n]] || o.push(a[n]);
                            c = (a = o).length >>> 0, "object" == typeof i[r] ? i[r].baseVal = a.join(" ") : i[r] = a.join(" "), u()
                        }, s.toggle = function(e, t) {
                            return d.apply(s, [e]), p !== t ? t ? (s.add(e), !0) : (s.remove(e), !1) : l[e] ? (s.remove(e), !1) : (s.add(e), !0)
                        }, s
                    }
                }()), "classList" in (n = document.createElement("span")) && (n.classList.toggle("x", !1), n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
                    var n = t;
                    if (n !== p) return this[(n = !!n) ? "add" : "remove"](e), n;
                    var o = !this.contains(e);
                    return this[o ? "add" : "remove"](e), o
                })), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a", "b"), !e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.add;
                        e.classList.constructor.prototype.add = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }(), function() {
                    var e = document.createElement("span");
                    if ("classList" in e && (e.classList.add("a"), e.classList.add("b"), e.classList.remove("a", "b"), e.classList.contains("b"))) {
                        var o = e.classList.constructor.prototype.remove;
                        e.classList.constructor.prototype.remove = function() {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) o.call(this, e[n])
                        }
                    }
                }())
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Document" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document))
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Element" in this && "HTMLElement" in this || function() {
                    function e() {
                        return r-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
                    }
                    if (!window.Element || window.HTMLElement) {
                        window.Element = window.HTMLElement = new Function("return function Element() {}")();
                        var t, n = document.appendChild(document.createElement("body")),
                            o = n.appendChild(document.createElement("iframe")).contentWindow.document,
                            a = Element.prototype = o.appendChild(o.createElement("*")),
                            l = {},
                            c = function(e, t) {
                                var n, o, i, r = e.childNodes || [],
                                    s = -1;
                                if (1 === e.nodeType && e.constructor !== Element)
                                    for (n in e.constructor = Element, l) o = l[n], e[n] = o;
                                for (; i = t && r[++s];) c(i, t);
                                return e
                            },
                            u = document.getElementsByTagName("*"),
                            i = document.createElement,
                            r = 100;
                        a.attachEvent("onpropertychange", function(e) {
                            for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = a[n], r = l[n], s = -1; t = u[++s];) 1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                            l[n] = i
                        }), a.constructor = Element, a.hasAttribute || (a.hasAttribute = function s(e) {
                            return null !== this.getAttribute(e)
                        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function d(e) {
                            var t = i(String(e).toLowerCase());
                            return c(t)
                        }, document.removeChild(n)
                    } else window.HTMLElement = window.Element
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                var e;
                "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"), e.classList.contains("b")) || function(e) {
                    var u = !0,
                        d = function(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, {
                                configurable: !1 === u || !!o,
                                get: n
                            }) : e.__defineGetter__(t, n)
                        };
                    try {
                        d({}, "support")
                    } catch (t) {
                        u = !1
                    }
                    var p = function(e, l, c) {
                        d(e.prototype, l, function() {
                            var e, t = this,
                                n = "__defineGetter__DEFINE_PROPERTY" + l;
                            if (t[n]) return e;
                            if (!(t[n] = !0) === u) {
                                for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, s = r.length, a = 0; a < s; ++a)
                                    if (r[a]._R === t) {
                                        o = r[a];
                                        break
                                    } o || (o = i.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, t, c)
                            } else e = new DOMTokenList(t, c);
                            return d(t, l, function() {
                                return e
                            }), delete t[n], e
                        }, !0)
                    };
                    p(e.Element, "classList", "className"), p(e.HTMLElement, "classList", "className"), p(e.HTMLLinkElement, "relList", "rel"), p(e.HTMLAnchorElement, "relList", "rel"), p(e.HTMLAreaElement, "relList", "rel")
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "document" in this && "nextElementSibling" in document.documentElement || Object.defineProperty(Element.prototype, "nextElementSibling", {
                    get: function() {
                        for (var e = this.nextSibling; e && 1 !== e.nodeType;) e = e.nextSibling;
                        return e
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "document" in this && "previousElementSibling" in document.documentElement || Object.defineProperty(Element.prototype, "previousElementSibling", {
                    get: function() {
                        for (var e = this.previousSibling; e && 1 !== e.nodeType;) e = e.previousSibling;
                        return e
                    }
                })
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function() {
                "Window" in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
                    e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
                }(this)
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
            function(c) {
                (function(e) {
                    if (!("Event" in e)) return !1;
                    if ("function" == typeof e.Event) return !0;
                    try {
                        return new Event("click"), !0
                    } catch (t) {
                        return !1
                    }
                })(this) || function() {
                    function u(e, t) {
                        for (var n = -1, o = e.length; ++n < o;)
                            if (n in e && e[n] === t) return n;
                        return -1
                    }
                    var i = {
                        click: 1,
                        dblclick: 1,
                        keyup: 1,
                        keypress: 1,
                        keydown: 1,
                        mousedown: 1,
                        mouseup: 1,
                        mousemove: 1,
                        mouseover: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                        mouseout: 1,
                        storage: 1,
                        storagecommit: 1,
                        textinput: 1
                    };
                    if ("undefined" != typeof document && "undefined" != typeof window) {
                        var e = window.Event && window.Event.prototype || null;
                        window.Event = Window.prototype.Event = function r(e, t) {
                            if (!e) throw new Error("Not enough arguments");
                            var n;
                            if ("createEvent" in document) {
                                n = document.createEvent("Event");
                                var o = !(!t || t.bubbles === c) && t.bubbles,
                                    i = !(!t || t.cancelable === c) && t.cancelable;
                                return n.initEvent(e, o, i), n
                            }
                            return (n = document.createEventObject()).type = e, n.bubbles = !(!t || t.bubbles === c) && t.bubbles, n.cancelable = !(!t || t.cancelable === c) && t.cancelable, n
                        }, e && Object.defineProperty(window.Event, "prototype", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: e
                        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function s(e, t) {
                            var c = this,
                                n = e,
                                o = t;
                            if (c === window && n in i) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            c._events || (c._events = {}), c._events[n] || (c._events[n] = function(e) {
                                var t, n = c._events[e.type].list,
                                    o = n.slice(),
                                    i = -1,
                                    r = o.length;
                                for (e.preventDefault = function s() {
                                        !1 !== e.cancelable && (e.returnValue = !1)
                                    }, e.stopPropagation = function a() {
                                        e.cancelBubble = !0
                                    }, e.stopImmediatePropagation = function l() {
                                        e.cancelBubble = !0, e.cancelImmediate = !0
                                    }, e.currentTarget = c, e.relatedTarget = e.fromElement || null, e.target = e.target || e.srcElement || c, e.timeStamp = (new Date).getTime(), e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate;) i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                            }, c._events[n].list = [], c.attachEvent && c.attachEvent("on" + n, c._events[n])), c._events[n].list.push(o)
                        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function a(e, t) {
                            var n, o = this,
                                i = e,
                                r = t;
                            o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1), o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]), delete o._events[i]))
                        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                            var t = this,
                                n = e.type;
                            try {
                                if (!e.bubbles) {
                                    e.cancelBubble = !0;
                                    var o = function(e) {
                                        e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                                    };
                                    this.attachEvent("on" + n, o)
                                }
                                this.fireEvent("on" + n, e)
                            } catch (i) {
                                for (e.target = t;
                                    "_events" in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble;);
                            }
                            return !0
                        }, document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                                bubbles: !0
                            }))
                        }))
                    }
                }()
            }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}), e.prototype.init = function() {
                "function" == typeof window.matchMedia ? this.setupResponsiveChecks() : this.setup()
            }, e.prototype.setupResponsiveChecks = function() {
                this.mql = window.matchMedia("(min-width: 40.0625em)"), this.mql.addListener(this.checkMode.bind(this)), this.checkMode()
            }, e.prototype.checkMode = function() {
                this.mql.matches ? this.setup() : this.teardown()
            }, e.prototype.setup = function() {
                var e = this.$module,
                    t = this.$tabs,
                    n = e.querySelector(".govuk-tabs__list"),
                    o = e.querySelectorAll(".govuk-tabs__list-item");
                if (t && n && o) {
                    n.setAttribute("role", "tablist"), r(o, function(e) {
                        e.setAttribute("role", "presentation")
                    }), r(t, function(e) {
                        this.setAttributes(e), e.boundTabClick = this.onTabClick.bind(this), e.boundTabKeydown = this.onTabKeydown.bind(this), e.addEventListener("click", e.boundTabClick, !0), e.addEventListener("keydown", e.boundTabKeydown, !0), this.hideTab(e)
                    }.bind(this));
                    var i = this.getTab(window.location.hash) || this.$tabs[0];
                    this.showTab(i), e.boundOnHashChange = this.onHashChange.bind(this), window.addEventListener("hashchange", e.boundOnHashChange, !0)
                }
            }, e.prototype.teardown = function() {
                var e = this.$module,
                    t = this.$tabs,
                    n = e.querySelector(".govuk-tabs__list"),
                    o = e.querySelectorAll(".govuk-tabs__list-item");
                t && n && o && (n.removeAttribute("role"), r(o, function(e) {
                    e.removeAttribute("role", "presentation")
                }), r(t, function(e) {
                    e.removeEventListener("click", e.boundTabClick, !0), e.removeEventListener("keydown", e.boundTabKeydown, !0), this.unsetAttributes(e)
                }.bind(this)), window.removeEventListener("hashchange", e.boundOnHashChange, !0))
            }, e.prototype.onHashChange = function() {
                var e = window.location.hash,
                    t = this.getTab(e);
                if (t)
                    if (this.changingHash) this.changingHash = !1;
                    else {
                        var n = this.getCurrentTab();
                        this.hideTab(n), this.showTab(t), t.focus()
                    }
            }, e.prototype.hideTab = function(e) {
                this.unhighlightTab(e), this.hidePanel(e)
            }, e.prototype.showTab = function(e) {
                this.highlightTab(e), this.showPanel(e)
            }, e.prototype.getTab = function(e) {
                return this.$module.querySelector('.govuk-tabs__tab[href="' + e + '"]')
            }, e.prototype.setAttributes = function(e) {
                var t = this.getHref(e).slice(1);
                e.setAttribute("id", "tab_" + t), e.setAttribute("role", "tab"), e.setAttribute("aria-controls", t), e.setAttribute("aria-selected", "false"), e.setAttribute("tabindex", "-1");
                var n = this.getPanel(e);
                n.setAttribute("role", "tabpanel"), n.setAttribute("aria-labelledby", e.id), n.classList.add(this.jsHiddenClass)
            }, e.prototype.unsetAttributes = function(e) {
                e.removeAttribute("id"), e.removeAttribute("role"), e.removeAttribute("aria-controls"), e.removeAttribute("aria-selected"), e.removeAttribute("tabindex");
                var t = this.getPanel(e);
                t.removeAttribute("role"), t.removeAttribute("aria-labelledby"), t.classList.remove(this.jsHiddenClass)
            }, e.prototype.onTabClick = function(e) {
                if (!e.target.classList.contains("govuk-tabs__tab")) return !1;
                e.preventDefault();
                var t = e.target,
                    n = this.getCurrentTab();
                this.hideTab(n), this.showTab(t), this.createHistoryEntry(t)
            }, e.prototype.createHistoryEntry = function(e) {
                var t = this.getPanel(e),
                    n = t.id;
                t.id = "", this.changingHash = !0, window.location.hash = this.getHref(e).slice(1), t.id = n
            }, e.prototype.onTabKeydown = function(e) {
                switch (e.keyCode) {
                    case this.keys.left:
                    case this.keys.up:
                        this.activatePreviousTab(), e.preventDefault();
                        break;
                    case this.keys.right:
                    case this.keys.down:
                        this.activateNextTab(), e.preventDefault()
                }
            }, e.prototype.activateNextTab = function() {
                var e = this.getCurrentTab(),
                    t = e.parentNode.nextElementSibling;
                if (t) var n = t.querySelector(".govuk-tabs__tab");
                n && (this.hideTab(e), this.showTab(n), n.focus(), this.createHistoryEntry(n))
            }, e.prototype.activatePreviousTab = function() {
                var e = this.getCurrentTab(),
                    t = e.parentNode.previousElementSibling;
                if (t) var n = t.querySelector(".govuk-tabs__tab");
                n && (this.hideTab(e), this.showTab(n), n.focus(), this.createHistoryEntry(n))
            }, e.prototype.getPanel = function(e) {
                return this.$module.querySelector(this.getHref(e))
            }, e.prototype.showPanel = function(e) {
                this.getPanel(e).classList.remove(this.jsHiddenClass)
            }, e.prototype.hidePanel = function(e) {
                this.getPanel(e).classList.add(this.jsHiddenClass)
            }, e.prototype.unhighlightTab = function(e) {
                e.setAttribute("aria-selected", "false"), e.parentNode.classList.remove("govuk-tabs__list-item--selected"), e.setAttribute("tabindex", "-1")
            }, e.prototype.highlightTab = function(e) {
                e.setAttribute("aria-selected", "true"), e.parentNode.classList.add("govuk-tabs__list-item--selected"), e.setAttribute("tabindex", "0")
            }, e.prototype.getCurrentTab = function() {
                return this.$module.querySelector(".govuk-tabs__list-item--selected .govuk-tabs__tab")
            }, e.prototype.getHref = function(e) {
                var t = e.getAttribute("href");
                return t.slice(t.indexOf("#"), t.length)
            }, e
    }), window.GOVUK = window.GOVUK || {}, window.GOVUK.Modules = window.GOVUK.Modules || {}, window.GOVUK.Modules.GovukTabs = window.GOVUKFrontend, window.GOVUKFrontend.initAll = function() {}, $(document).ready(function() {});