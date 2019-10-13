! function (e) {
    function t(t) {
        for (var r, o, c = t[0], i = t[1], u = t[2], l = 0, p = []; l < c.length; l++) o = c[l], a[o] && p.push(a[o][0]), a[o] = 0;
        for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
        for (d && d(t); p.length;) p.shift()();
        return s.push.apply(s, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], o = !0, c = 1; c < n.length; c++) {
                var i = n[c];
                0 !== a[i] && (o = !1)
            }
            o && (s.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }

    function r(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    var o = {},
        a = {
            1: 0
        },
        s = [];
    r.m = e, r.c = o, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "";
    var c = window.webpackJsonp = window.webpackJsonp || [],
        i = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var u = 0; u < c.length; u++) t(c[u]);
    var d = i;
    s.push([90, 0]), n()
}({
    30: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        const r = {
            addMetadata: {
                enabled: !0,
                addCoverArt: !0
            },
            alwaysDownloadMp3: !0,
            cleanTrackTitle: {
                enabled: !0,
                pattern: "[-―_|/*!\\s]*[{(【\\[\\s]*((click|hit|press)?\\s*['\"]?buy['\"]?(link|is|to|for|a|4|=|-|\\s)*)?((free[\\s_]?(download|dl))|((free|full)?[\\s_]?(download|dl)[\\s_]?link)).*$"
            },
            overwriteExistingFiles: !1
        }
    },
    31: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(9);
        class o extends r.a {
            constructor(e, ...t) {
                super(o.TYPE, {
                    message: e,
                    optionalParams: t
                }), this.message = e, this.optionalParams = t
            }
        }
        o.TYPE = "LogToConsole"
    },
    34: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var r = n(33),
            o = n(71);
        class a {
            onMessage$(e, t = !1) {
                const n = new r.a;
                if (t) {
                    const t = new r.a;
                    chrome.runtime.onMessage.addListener((r, a, s) => {
                        if (r.type === e) return n.next({
                            message: r,
                            sender: a,
                            response$: t
                        }), t.pipe(Object(o.a)()).subscribe(s), !0
                    })
                } else chrome.runtime.onMessage.addListener((t, r) => {
                    t.type === e && n.next({
                        message: t,
                        sender: r
                    })
                });
                return n.asObservable()
            }
        }
    },
    35: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(9);
        class o extends r.a {
            constructor() {
                super(o.TYPE)
            }
        }
        o.TYPE = "ReloadContentPage"
    },
    36: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(9);
        class o extends r.a {
            constructor() {
                super(o.TYPE)
            }
        }
        o.TYPE = "RequestContentPageReload"
    },
    37: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(9);
        class o extends r.a {
            constructor(e) {
                super(o.TYPE, e), this.resourceInfoUrl = e
            }
        }
        o.TYPE = "RequestDownload"
    },
    4: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r
        }), n.d(t, "d", function () {
            return o
        }), n.d(t, "a", function () {
            return a
        }), n.d(t, "b", function () {
            return s
        }), n.d(t, "e", function () {
            return c
        }), n.d(t, "f", function () {
            return i
        }), n.d(t, "g", function () {
            return u
        }), n.d(t, "h", function () {
            return d
        }), n.d(t, "i", function () {
            return l
        });
        const r = "https://api.soundcloud.com",
            o = "https://api.soundcloud.com/i1",
            a = "a3e059563d7fd3372b49b37f00a00bcf",
            s = "PBilYl3cVAK9m3Vqg4TEPlhWAO4okIJ0",
            c = "soundcloud.com",
            i = "zc-button-download",
            u = "zc-button-download-icon",
            d = "zc-button-download-medium",
            l = "zc-button-download-small"
    },
    7: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        const r = new class {
            constructor() {
                this.MSG_PREFIX = "ZC"
            }
            debug(e, ...t) {}
            log(e, ...t) {
                console.log(this.affixMessage(e), ...t)
            }
            error(e, t) {
                t ? console.error(this.affixMessage(e), t) : console.error(this.affixMessage(e))
            }
            affixMessage(e) {
                return `[${(new Date).toLocaleTimeString()}] ${this.MSG_PREFIX}: ${e}`
            }
        }
    },
    78: function (e, t) {},
    80: function (e, t) {},
    9: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        class r {
            constructor(e, t) {
                this.type = e, this.content = t
            }
        }
    },
    90: function (e, t, n) {
        "use strict";

        function r(e, t) {
            const n = new P.a,
                r = new XMLHttpRequest;
            return r.open("GET", t, !0), r.responseType = e, r.onload = (() => {
                200 === r.status ? (n.next(r.response), n.complete()) : n.error(new Error(`Unable to get from ${t}, response is ${r.statusText} (${r.status})`))
            }), r.onerror = (() => {
                n.error(new Error(`Unable to get from ${t}, network error`))
            }), r.send(), n
        }

        function o([e, t]) {
            if (!t.addMetadata.addCoverArt) return Object(x.a)(Object.assign({}, e, {
                cover_url: ""
            }));
            const n = e.cover_url;
            if (!n) return Object(x.a)(e);
            const r = function (e, t) {
                return e.replace(/^(.*)-large(\..*)$/, `$1-t${t}x${t}$2`)
            }(n, 500);
            return F.ping$(r).pipe(Object(S.a)(1e4), Object(h.a)(e => 200 === e ? r : n), Object(h.a)(t => Object.assign({}, e, {
                cover_url: t
            })), Object(A.a)(() => Object(x.a)(e)))
        }

        function a(e) {
            return `${e.download_url}?client_id=${$.a}`
        }

        function s(e) {
            return `${e.stream_url}?client_id=${$.a}`
        }

        function c(e, t, n) {
            return {
                conflictAction: n.overwriteExistingFiles ? "overwrite" : "uniquify",
                filename: e,
                saveAs: !1,
                url: t
            }
        }

        function i(e) {
            return J.getOptions$().pipe(Object(C.a)(t => t.addMetadata.enabled ? H.addMetadata$(e) : Object(x.a)(e)))
        }

        function u(e, t) {
            chrome.downloads.download(t.downloadOptions, n => {
                void 0 !== n ? (e.next({
                    downloadId: n,
                    downloadInfo: t
                }), e.complete()) : e.error(new Error(chrome.runtime.lastError.message)), URL.revokeObjectURL(t.downloadOptions.url)
            })
        }

        function d(e, t, n) {
            const r = new K(n, `Cannot download track: ${t.title}`);
            D.a.error(r), e.error(r)
        }

        function l(e) {
            const t = `${$.c}/resolve.json?url=${e}&client_id=${$.a}`;
            return F.getJSON$(t)
        }

        function p(e, t, n) {
            switch (n.kind) {
                case E.Track: {
                    const t = Z.download(n);
                    e.next(t), e.complete();
                    break
                }
                case E.Playlist: {
                    const t = Q.download(n);
                    e.next(t), e.complete();
                    break
                }
                case E.User:
                    te.download$(n).subscribe(e);
                    break;
                default: {
                    const r = new Error(`Cannot download, unsupported resource type '${n.kind}' gotten from ${t}`);
                    e.error(r)
                }
            }
        }

        function b(e, t, n) {
            const r = new K(n, `Cannot download, unable to get resource info from ${t}`);
            e.error(r)
        }
        n.r(t);
        var f = n(95),
            m = n(100),
            g = n(97),
            O = n(103),
            w = n(96),
            h = n(18),
            $ = n(4),
            j = n(93),
            v = n(67),
            _ = n(94);
        const y = Object(f.a)(e => chrome.webNavigation.onDOMContentLoaded.addListener(t => e(t.tabId), {
                url: [{
                    hostEquals: $.e
                }]
            })),
            k = Object(f.a)(e => chrome.webNavigation.onHistoryStateUpdated.addListener(t => e(t.tabId), {
                url: [{
                    hostEquals: $.e
                }]
            })).pipe(Object(w.a)(20)),
            M = e => Object(g.a)(chrome.tabs.get)(e).pipe(Object(h.a)(e => !chrome.runtime.lastError && void 0 !== e)),
            T = {
                goToSoundCloudPage$: () => Object(O.a)(y, k).pipe(function (e) {
                    return Object(j.a)(t => e(t).pipe(Object(v.a)(Boolean), Object(_.a)(t)))
                }(M))
            };
        var E, P = n(59),
            S = n(102);
        ! function (e) {
            e.Track = "track", e.Playlist = "playlist", e.User = "user"
        }(E || (E = {}));
        var x = n(104),
            I = n(68),
            C = n(41),
            U = n(99),
            A = n(98);
        const L = n(72),
            R = {
                addTag: e => (e.addTag(), e),
                createWriter: e => new L(e),
                getURL: e => e.getURL(),
                setFrame: (e, t, n) => (null != n && e.setFrame(t, n), e)
            };
        var D = n(7);
        const F = {
                ping$: e => (function (e) {
                    const t = new P.a,
                        n = new XMLHttpRequest;
                    return n.open("HEAD", e, !0), n.onreadystatechange = (() => {
                        n.readyState === n.HEADERS_RECEIVED && (t.next(n.status), t.complete(), n.abort())
                    }), n.onerror = (() => {
                        t.next(n.status), t.complete()
                    }), n.send(), t
                })(e),
                getArrayBuffer$: e => r("arraybuffer", e),
                getJSON$: e => r("json", e)
            },
            Y = {
                addID3V2Metadata$: (e, t) => F.getArrayBuffer$(t.downloadOptions.url).pipe(Object(S.a)(18e5), Object(C.a)(function (e, t) {
                    return Object(x.a)(R.createWriter(t)).pipe(Object(h.a)(function (e, t) {
                        return R.setFrame(t, "TIT2", e.title), R.setFrame(t, "TPE1", [e.albumArtist]), R.setFrame(t, "TPE2", e.albumArtist), R.setFrame(t, "TCON", e.genres), R.setFrame(t, "TLEN", e.duration), R.setFrame(t, "TYER", e.release_year), R.setFrame(t, "TBPM", e.bpm), R.setFrame(t, "WOAR", e.artist_url), R.setFrame(t, "WOAS", e.audio_source_url), R.setFrame(t, "COMM", {
                            description: "Soundcloud description",
                            text: e.description || ""
                        }), t
                    }.bind(null, e)), Object(C.a)(function (e, t) {
                        const n = e.cover_url;
                        return n ? F.getArrayBuffer$(n).pipe(Object(S.a)(6e4), Object(h.a)(e => R.setFrame(t, "APIC", {
                            data: e,
                            description: `Soundcloud artwork. Source: ${n}`,
                            type: 3,
                            useUnicodeEncoding: !1
                        })), Object(A.a)(n => (D.a.error(`Unable to fetch cover art for track ${e.title}`, n), Object(x.a)(t)))) : Object(x.a)(t)
                    }.bind(null, e)), Object(h.a)(R.addTag))
                }.bind(null, e)), Object(h.a)(R.getURL), Object(h.a)(e => Object.assign({}, t, {
                    downloadOptions: Object.assign({}, t.downloadOptions, {
                        url: e
                    })
                })), Object(A.a)(e => (D.a.error(`Unable to fetch metadata for track ${t.trackInfo.title}`, e), Object(x.a)(t))))
            },
            N = {
                create(e) {
                    const t = e.title.split(" - ");
                    return {
                        albumArtist: t.length > 1 ? t[0] : e.user.username,
                        artist_url: e.user.permalink_url,
                        audio_source_url: e.permalink_url,
                        bpm: e.bpm,
                        cover_url: e.artwork_url,
                        description: e.description,
                        duration: e.duration,
                        genres: [e.genre],
                        release_day: e.release_day,
                        release_month: e.release_month,
                        release_year: e.release_year,
                        title: t.length > 1 ? t.slice(1).join(" - ") : e.title
                    }
                }
            };
        var q = n(30);
        const B = e => chrome.storage.sync.get(q.a, e),
            J = {
                getOptions$: () => Object(g.a)(B)()
            },
            H = {
                addMetadata$(e) {
                    const t = e.downloadOptions.filename.split(".").pop(),
                        n = Object(U.a)(Object(x.a)(N.create(e.trackInfo)), J.getOptions$()).pipe(Object(C.a)(o));
                    switch (t) {
                        case "mp3":
                            return n.pipe(Object(C.a)(t => Y.addID3V2Metadata$(t, e)), Object(I.a)(e => D.a.debug("Added mp3 metadata", e)));
                        default:
                            return Object(x.a)(e)
                    }
                }
            };
        var V, W = n(69);
        ! function (e) {
            e[e.DownloadUrlMethod = 0] = "DownloadUrlMethod", e[e.StreamUrlMethod = 1] = "StreamUrlMethod", e[e.I1ApiMethod = 2] = "I1ApiMethod"
        }(V || (V = {}));
        const z = {
                getDownloadMethodInfo$: e => Object(U.a)(function (e) {
                    return e.downloadable ? F.ping$(a(e)).pipe(Object(h.a)(e => 200 === e)) : Object(x.a)(!1)
                }(e), function (e) {
                    return e.stream_url ? F.ping$(s(e)).pipe(Object(h.a)(e => 200 === e)) : Object(x.a)(!1)
                }(e), J.getOptions$()).pipe(Object(C.a)(([t, n, r]) => t && function (e, t) {
                    return !t.alwaysDownloadMp3 || "mp3" === e.original_format
                }(e, r) ? function (e) {
                    return Object(x.a)({
                        downloadMethod: V.DownloadUrlMethod,
                        format: e.original_format,
                        url: a(e)
                    })
                }(e) : n ? function (e) {
                    return Object(x.a)({
                        downloadMethod: V.StreamUrlMethod,
                        format: "mp3",
                        url: s(e)
                    })
                }(e) : function (e) {
                    const t = `${$.d}/tracks/${e.id}/streams?client_id=${$.b}`;
                    return F.getJSON$(t).pipe(Object(h.a)(e => {
                        if (e.http_mp3_128_url) return {
                            downloadMethod: V.I1ApiMethod,
                            format: "mp3",
                            url: e.http_mp3_128_url
                        };
                        throw new Error(`No download URL found in i1 api endpoint response: ${t}`)
                    }))
                }(e)))
            },
            X = {
                removeSpecialCharacters: e => e.replace(/[<>:"|?*\/\\]/g, "_").replace(/~/g, "-")
            },
            G = {
                create$: (e, t) => Object(U.a)(z.getDownloadMethodInfo$(e), J.getOptions$()).pipe(Object(h.a)(([n, r]) => (function (e, t, n, r) {
                    const o = function (e, t, n) {
                        const r = `${X.removeSpecialCharacters(e)}`,
                            o = `${X.removeSpecialCharacters(t)}.${n}`;
                        return W.join(r, o)
                    }(n, e.title, t.format);
                    return {
                        downloadMethod: t.downloadMethod,
                        downloadOptions: c(o, t.url, r),
                        originalUrl: t.url,
                        trackInfo: e
                    }
                })(e = function (e, t) {
                    if (!t.cleanTrackTitle.enabled) return e;
                    const n = new RegExp(t.cleanTrackTitle.pattern, "i"),
                        r = e.title.replace(n, "").trim();
                    return Object.assign({}, e, {
                        title: "" === r ? e.title : r
                    })
                }(e, r), n, t, r)))
            };
        var K = n(53);
        const Z = {
                download(e, t = "") {
                    const n = new P.a;
                    return G.create$(e, t).pipe(Object(I.a)(e => D.a.debug("Downloading track", e)), Object(C.a)(i), Object(S.a)(18e5)).subscribe({
                        next: u.bind(null, n),
                        error: d.bind(null, n, e),
                        complete: () => D.a.debug("Track download info stream completed", e)
                    }), {
                        kind: E.Track,
                        metadata$: n.asObservable(),
                        trackInfo: e
                    }
                }
            },
            Q = {
                download(e) {
                    const t = function (e) {
                        const t = `${e.user.username} - ${e.title}`;
                        return X.removeSpecialCharacters(t)
                    }(e);
                    D.a.debug(`Downloading playlist to '${t}'`, e);
                    const n = e.tracks.map(e => Z.download(e, t));
                    return {
                        kind: E.Playlist,
                        playlistInfo: e,
                        tracks: n
                    }
                }
            },
            ee = {
                getResourceInfo$: e => l(e),
                getTrackInfoList$: e => l(e)
            },
            te = {
                download$(e) {
                    const t = new P.a,
                        n = function (e) {
                            return X.removeSpecialCharacters(e.username)
                        }(e),
                        r = `${e.permalink_url}/tracks`;
                    return ee.getTrackInfoList$(r).pipe(Object(S.a)(6e4), Object(h.a)(e => e.map(e => Z.download(e, n))), Object(h.a)(t => ({
                        kind: E.User,
                        tracks: t,
                        userInfo: e
                    }))).subscribe(t), t.asObservable()
                }
            },
            ne = {
                download$(e) {
                    const t = new P.a;
                    return ee.getResourceInfo$(e).pipe(Object(S.a)(3e4)).subscribe({
                        next: p.bind(null, t, e),
                        error: b.bind(null, t, e)
                    }), t.asObservable()
                }
            };
        var re = n(33),
            oe = n(52),
            ae = n(34);
        const se = new class extends ae.a {
            sendToContentPage$(e, t, n = !1) {
                let r;
                if (n) {
                    const n = new re.a;
                    r = n.asObservable(), chrome.tabs.sendMessage(e, t, e => {
                        void 0 !== e ? (n.next(e), n.complete()) : n.error(chrome.runtime.lastError.message)
                    })
                } else r = oe.a, chrome.tabs.sendMessage(e, t);
                return r
            }
        };
        var ce = n(35),
            ie = n(31),
            ue = n(36),
            de = n(37);
        (new class {
            constructor() {
                this.onSuspend$ = Object(f.a)(e => chrome.runtime.onSuspend.addListener(e))
            }
            run() {
                T.goToSoundCloudPage$().pipe(Object(m.a)(this.onSuspend$)).subscribe(e => {
                    chrome.tabs.insertCSS(e, {
                        file: "../css/styles.css"
                    }), chrome.tabs.executeScript(e, {
                        file: "vendor.js"
                    }), chrome.tabs.executeScript(e, {
                        file: "content.js"
                    }), chrome.pageAction.show(e)
                }), se.onMessage$(ue.a.TYPE).pipe(Object(m.a)(this.onSuspend$)).subscribe(e => {
                    se.sendToContentPage$(e.sender.tab.id, new ce.a)
                }), se.onMessage$(de.a.TYPE).pipe(Object(m.a)(this.onSuspend$)).subscribe(e => {
                    D.a.log("Downloading resource:", e.message.resourceInfoUrl), ne.download$(e.message.resourceInfoUrl)
                }), se.onMessage$(ie.a.TYPE).pipe(Object(m.a)(this.onSuspend$)).subscribe(e => D.a.log(`${e.message.message} (tabId: ${e.sender.tab.id})`, ...e.message.optionalParams)), chrome.pageAction.onClicked.addListener(() => chrome.runtime.openOptionsPage()), D.a.log("Loaded background script")
            }
        }).run()
    }
}), window.addEventListener("DOMNodeRemoved", function () {
    if (null == document.getElementById("darkstyle_css")) {
        var e = document.getElementsByTagName("head")[0],
            t = document.createElement("link");
        t.id = "darkstyle_css", t.rel = "stylesheet", t.type = "text/css", t.href = chrome.extension.getURL("css_dark.css"), t.media = "all", e.appendChild(t)
    }
});