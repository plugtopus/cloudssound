! function (e) {
    function t(t) {
        for (var n, c, i = t[0], l = t[1], d = t[2], p = 0, u = []; p < i.length; p++) c = i[p], a[c] && u.push(a[c][0]), a[c] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        for (s && s(t); u.length;) u.shift()();
        return o.push.apply(o, d || []), r()
    }

    function r() {
        for (var e, t = 0; t < o.length; t++) {
            for (var r = o[t], n = !0, i = 1; i < r.length; i++) {
                var l = r[i];
                0 !== a[l] && (n = !1)
            }
            n && (o.splice(t--, 1), e = c(c.s = r[0]))
        }
        return e
    }
    var n = {},
        a = {
            3: 0
        },
        o = [];

    function c(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, c), r.l = !0, r.exports
    }
    c.m = e, c.c = n, c.d = function (e, t, r) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, c.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (c.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) c.d(r, n, function (t) {
                return e[t]
            }.bind(null, n));
        return r
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "";
    var i = window.webpackJsonp = window.webpackJsonp || [],
        l = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var d = 0; d < i.length; d++) t(i[d]);
    var s = l;
    o.push([92, 0]), r()
}({
    30: function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n
        });
        const n = {
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
    7: function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n
        });
        const n = new class {
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
    92: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(2),
            a = r(30),
            o = r(7);

        function c() {
            p();
            const e = function () {
                return {
                    addMetadata: {
                        enabled: n("#add-metadata-option").prop("checked"),
                        addCoverArt: n("#add-cover-art").prop("checked")
                    },
                    alwaysDownloadMp3: n("#always-mp3-option").prop("checked"),
                    cleanTrackTitle: {
                        enabled: n("#clean-title-option").prop("checked"),
                        pattern: n("#clean-title-pattern").val().toString()
                    },
                    overwriteExistingFiles: n("#overwrite-option").prop("checked")
                }
            }();
            (function (e) {
                let t = !0;
                if (e.cleanTrackTitle.enabled) try {
                    new RegExp(e.cleanTrackTitle.pattern)
                } catch (e) {
                    t = !1, o.a.error("Invalid clean track title regex pattern entered", e), n("#clean-title-pattern").css("border-color", "red"), n("#clean-title-pattern-err-msg").text("Not a valid regular expression.").show()
                }
                return t
            })(e) && (chrome.storage.sync.set(e), n("#confirm-msg").text("Options saved.").show().delay(1e3).fadeOut())
        }

        function i() {
            p(), l(a.a)
        }

        function l(e) {
            n("#add-metadata-option").prop("checked", e.addMetadata.enabled), n("#add-cover-art").prop("checked", e.addMetadata.addCoverArt), d(e.addMetadata.enabled), n("#always-mp3-option").prop("checked", e.alwaysDownloadMp3), n("#clean-title-option").prop("checked", e.cleanTrackTitle.enabled), n("#clean-title-pattern").val(e.cleanTrackTitle.pattern), s(e.cleanTrackTitle.enabled), n("#overwrite-option").prop("checked", e.overwriteExistingFiles)
        }

        function d(e) {
            n("#add-cover-art").prop("disabled", !e)
        }

        function s(e) {
            n("#clean-title-pattern").prop("disabled", !e)
        }

        function p() {
            n("textarea").css("border-color", ""), n(".error").hide()
        }(new class {
            run() {
                ! function () {
                    chrome.storage.sync.get(a.a, l.bind(this))
                }(), n("#save-btn").on("click", c), n("#defaults-btn").on("click", i), n("#add-metadata-option").on("click", e => d(e.target.checked)), n("#clean-title-option").on("click", e => s(e.target.checked))
            }
        }).run()
    }
});