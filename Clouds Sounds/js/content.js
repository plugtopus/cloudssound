! function (t) {
    function e(e) {
        for (var o, r, a = e[0], u = e[1], i = e[2], l = 0, f = []; l < a.length; l++) r = a[l], s[r] && f.push(s[r][0]), s[r] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
        for (d && d(e); f.length;) f.shift()();
        return c.push.apply(c, i || []), n()
    }

    function n() {
        for (var t, e = 0; e < c.length; e++) {
            for (var n = c[e], r = !0, a = 1; a < n.length; a++) {
                var u = n[a];
                0 !== s[u] && (r = !1)
            }
            r && (c.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }

    function o(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    var r = {},
        s = {
            2: 0
        },
        c = [];
    o.m = t, o.c = r, o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [],
        u = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var i = 0; i < a.length; i++) e(a[i]);
    var d = u;
    c.push([91, 0]), n()
}({
    31: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var o = n(9);
        class r extends o.a {
            constructor(t, ...e) {
                super(r.TYPE, {
                    message: t,
                    optionalParams: e
                }), this.message = t, this.optionalParams = e
            }
        }
        r.TYPE = "LogToConsole"
    },
    34: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var o = n(33),
            r = n(71);
        class s {
            onMessage$(t, e = !1) {
                const n = new o.a;
                if (e) {
                    const e = new o.a;
                    chrome.runtime.onMessage.addListener((o, s, c) => {
                        if (o.type === t) return n.next({
                            message: o,
                            sender: s,
                            response$: e
                        }), e.pipe(Object(r.a)()).subscribe(c), !0
                    })
                } else chrome.runtime.onMessage.addListener((e, o) => {
                    e.type === t && n.next({
                        message: e,
                        sender: o
                    })
                });
                return n.asObservable()
            }
        }
    },
    35: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var o = n(9);
        class r extends o.a {
            constructor() {
                super(r.TYPE)
            }
        }
        r.TYPE = "ReloadContentPage"
    },
    36: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var o = n(9);
        class r extends o.a {
            constructor() {
                super(r.TYPE)
            }
        }
        r.TYPE = "RequestContentPageReload"
    },
    37: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var o = n(9);
        class r extends o.a {
            constructor(t) {
                super(r.TYPE, t), this.resourceInfoUrl = t
            }
        }
        r.TYPE = "RequestDownload"
    },
    4: function (t, e, n) {
        "use strict";
        n.d(e, "c", function () {
            return o
        }), n.d(e, "d", function () {
            return r
        }), n.d(e, "a", function () {
            return s
        }), n.d(e, "b", function () {
            return c
        }), n.d(e, "e", function () {
            return a
        }), n.d(e, "f", function () {
            return u
        }), n.d(e, "g", function () {
            return i
        }), n.d(e, "h", function () {
            return d
        }), n.d(e, "i", function () {
            return l
        });
        const o = "https://api.soundcloud.com",
            r = "https://api.soundcloud.com/i1",
            s = "a3e059563d7fd3372b49b37f00a00bcf",
            c = "PBilYl3cVAK9m3Vqg4TEPlhWAO4okIJ0",
            a = "soundcloud.com",
            u = "zc-button-download",
            i = "zc-button-download-icon",
            d = "zc-button-download-medium",
            l = "zc-button-download-small"
    },
    9: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        class o {
            constructor(t, e) {
                this.type = t, this.content = e
            }
        }
    },
    91: function (t, e, n) {
        "use strict";

        function o(t) {
            let e;
            return Object(g.a)(n => (s(e = new MutationObserver(e => {
                e.forEach(e => {
                    i.makeArray(e.addedNodes).forEach(e => {
                        t(e) && n(e)
                    })
                })
            })), e), () => e.disconnect())
        }

        function r(t) {
            return j.a.create(e => {
                const n = i(t);
                n.each(t => {
                    e.next(n[t])
                }), e.complete()
            })
        }

        function s(t) {
            t.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }

        function c(t, e) {
            if (e.length) {
                const n = e.children("button");
                n.first().hasClass("sc-button-icon") && t.addClass("sc-button-icon");
                const o = n.filter(".sc-button-share");
                if (o.length) t.insertAfter(o);
                else {
                    const o = n.last();
                    o.hasClass("sc-button-more") ? t.insertBefore(o) : e.append(t)
                }
            }
        }

        function a(t) {
            return i(t)
        }

        function u(t) {
            return 0 === t.find(`.${_.f}`).length
        }
        n.r(e);
        var i = n(2),
            d = n(100),
            l = n(70),
            f = n(33),
            b = n(52),
            p = n(34);
        const h = new class extends p.a {
            sendToExtension$(t, e = !1) {
                let n;
                if (e) {
                    const e = new f.a;
                    n = e.asObservable(), chrome.runtime.sendMessage(t, t => {
                        void 0 !== t ? (e.next(t), e.complete()) : e.error(chrome.runtime.lastError.message)
                    })
                } else n = b.a, chrome.runtime.sendMessage(t);
                return n
            }
        };
        var m = n(36),
            g = n(95),
            j = n(1),
            w = n(103);
        const O = "zc-content-page",
            v = {
                bootstrap(t) {
                    if (i(`#${O}`).length > 0) h.sendToExtension$(new m.a);
                    else {
                        const e = i("<div/>", {
                            id: O
                        })[0];
                        o(t => t.isEqualNode(e)).pipe(Object(d.a)(t.onUnload$), Object(l.a)(1)).subscribe(() => t.load()),
                            function (t) {
                                let e;
                                return Object(g.a)(n => (s(e = new MutationObserver(e => {
                                    e.forEach(e => {
                                        i.makeArray(e.removedNodes).some(e => e.contains(t)) && n()
                                    })
                                })), e), () => e.disconnect())
                            }(e).pipe(Object(d.a)(t.onUnload$), Object(l.a)(1)).subscribe(() => t.unload()),
                            function (t) {
                                i("body").append(t)
                            }(e)
                    }
                }
            };
        var y = n(59),
            _ = n(4),
            T = n(101),
            x = n(105),
            E = n(37);
        const P = {
            create(t, e) {
                const n = i("<button/>").addClass(["sc-button", "sc-button-responsive"]).addClass([_.f, _.g]).prop("title", "Download").html("Download");
                return function (t, e, n) {
                    Object(T.a)(t, "click").pipe(Object(d.a)(e), Object(x.a)(3e3)).subscribe(() => h.sendToExtension$(new E.a(n)))
                }(n, t, e), n
            }
        };
        var $ = n(107),
            C = n(18),
            U = n(67),
            k = n(106),
            M = n(35);
        const B = {
                create$: t => Object(w.a)(function (t) {
                    return Object(w.a)(r(t), o(e => i(e).is(t)))
                }(t), function (t) {
                    return Object(w.a)(h.onMessage$(M.a.TYPE).pipe(Object(k.a)(Object($.a)(200).pipe(Object(l.a)(20)))), Object($.a)(1e3)).pipe(Object(k.a)(r(t)))
                }(t)).pipe(Object(C.a)(a), Object(U.a)(u))
            },
            D = {
                injectDownloadButtons(t) {
                    B.create$(".soundList__item, .searchList__item, .trackList__item, .systemPlaylistTrackList__item, .chartTracks__item").pipe(Object(d.a)(t)).subscribe(function (t, e) {
                        const n = e.find(".soundTitle__title, .trackItem__trackTitle, .chartTrack__title > a").first().prop("href"),
                            o = function (t, e) {
                                return P.create(t, e).addClass(["sc-button-small", _.i])
                            }(t, n),
                            r = e.find(".soundActions .sc-button-group");
                        c(o, r)
                    }.bind(null, t))
                }
            },
            Y = {
                getCurrentUrl: () => document.location.href
            },
            L = {
                injectDownloadButtons(t) {
                    B.create$("div.listenEngagement.sc-clearfix").pipe(Object(d.a)(t)).subscribe(function (t, e) {
                        const n = function (t) {
                                const e = Y.getCurrentUrl();
                                return P.create(t, e).addClass(["sc-button-medium", _.h])
                            }(t),
                            o = e.find(".listenEngagement__footer .soundActions .sc-button-group");
                        c(n, o)
                    }.bind(null, t))
                }
            },
            S = /https:\/\/soundcloud.com\/[^\/]+/,
            A = {
                injectDownloadButtons(t) {
                    B.create$(".userInfoBar").pipe(Object(d.a)(t)).subscribe(function (t, e) {
                        const n = function (t) {
                                const e = S.exec(Y.getCurrentUrl())[0];
                                return P.create(t, e).addClass(["sc-button-medium", _.h])
                            }(t),
                            o = e.find(".sc-button-group");
                        c(n, o)
                    }.bind(null, t))
                }
            },
            z = {
                injectDownloadButtons(t) {
                    L.injectDownloadButtons(t), D.injectDownloadButtons(t), A.injectDownloadButtons(t)
                }
            };
        var q = n(31);
        class I {
            constructor() {
                this.onUnloadSubject$ = new y.a
            }
            load() {
                z.injectDownloadButtons(this.onUnload$), window.onbeforeunload = this.unload.bind(this), h.sendToExtension$(new q.a("Loaded content page"))
            }
            unload() {
                this.onUnloadSubject$.next(!0), this.onUnloadSubject$.complete(), h.sendToExtension$(new q.a("Unloaded content page"))
            }
            get onUnload$() {
                return this.onUnloadSubject$.asObservable()
            }
        }(new class {
            run() {
                v.bootstrap(new I)
            }
        }).run()
    }
});