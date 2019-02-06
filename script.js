var $jscomp = {
    scope: {},
    findInternal: function(a, c, b) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var g = a[e];
            if (c.call(b, g, e, a)) return {
                i: e,
                v: g
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, b) {
    if (b.get || b.set) throw new TypeError("ES3 does not support getters and setters.");
    a != Array.prototype && a != Object.prototype && (a[c] = b.value)
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, c, b, d) {
    if (c) {
        b = $jscomp.global;
        a = a.split(".");
        for (d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in b || (b[e] = {});
            b = b[e]
        }
        a = a[a.length - 1];
        d = b[a];
        c = c(d);
        c != d && null != c && $jscomp.defineProperty(b, a, {
            configurable: !0,
            writable: !0,
            value: c
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, b) {
        return $jscomp.findInternal(this, a, b).v
    }
}, "es6-impl", "es3");
$(function() {
    var a = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        },
        c, b, d, e = $("body"),
        g = $("html, body, .pure-g, #create-form"),
        m = $(".wrapper"),
        p = m.length ? m : e,
        h = function(a, b, c, d) {
            var f = a.first().clone();
            0 < b - 17 && (b -= 17);
            var e = Math.round(a.length * b * 3 / 4 / 100);
            0 < b - e && (b -= e);
            f.css("height", c + "px");
            f.css("width", b + "px");
            f.html(d);
            f.appendTo(p);
            try {
                textFit(f, {
                    detectMultiLine: !1,
                    minFontSize: 1,
                    maxFontSize: 1E3
                });
                var q = f.find("span").css("font-size");
                a.css("font-size", q);
                a.css("line-height",
                    a.first().height() + "px")
            } catch (v) {
                n()
            }
            f.remove()
        },
        k = function(a) {
            a = $("#" + a + ":visible");
            a.length && h(a, a.width(), a.height(), a.text())
        },
        r = function() {
            var b = $("#name");
            if (b.is(":visible")) {
                var c = String(b.html()).replace(/[&<>"'\/]/g, function(b) {
                    return a[b]
                });
                h(b, b.width(), b.height(), c)
            }
        },
        t = function() {
            var a = $(".unit_value:visible");
            if (a.length) {
                var b = "";
                a.each(function() {
                    b += $(this).text()
                });
                h(a, $(".counter-wrapper").width(), a.first().height(), b)
            }
        },
        u = function() {
            var a = $(".unit_name:visible");
            if (a.length) {
                var b =
                    $(".unit_value:visible").not(".colon .unit_value").not("#id_sign"),
                    c = "",
                    d = Infinity;
                a.each(function() {
                    $(this).text().length > c.length && (c = $(this).text())
                });
                b.each(function() {
                    $(this).width() < d && (d = $(this).width())
                });
                d += 17;
                h(a, d, a.first().height(), c)
            }
        },
        l = function() {
            g.css("overflow", "hidden");
            r();
            t();
            u();
            k("value-wrapper");
            k("clock-time");
            k("clock-date");
            g.css("overflow", "visible")
        },
        n = function() {
            clearTimeout(c);
            clearTimeout(b);
            clearTimeout(d);
            c = setTimeout(function() {
                b = setTimeout(function() {
                    d = setTimeout(function() {
                            l()
                        },
                        500);
                    l()
                }, 100);
                l()
            }, 50)
        };
    window.fit_fonts = n
});

;
$(function() {
    var a = function() {};
    a.prototype.ajax_now_initialized = !1;
    a.prototype.init_client_dt = null;
    a.prototype.init_server_dt = null;
    a.prototype.old_text = "";
    a.prototype.tick_interval = null;
    a.prototype.constructor = a;
    a.prototype.failure_callback = function(a) {};
    a.prototype.init_vars = function() {};
    a.prototype.tick = function() {};
    a.prototype.now = function() {
        return new Date - this.init_client_dt + this.init_server_dt
    };
    a.prototype.is_displayed = function(a) {
        return "none" != a.css("display")
    };
    a.prototype.init_now = function() {
        this.init_client_dt =
            new Date;
        var a = this;
        a.init_server_dt = new Date().getTime();
        a.ajax_now_initialized = !0;
        a.run()
    };
    a.prototype.run = function() {
        clearInterval(this.tick_interval);
        if (this.init_server_dt) {
            this.tick();
            var a = this;
            this.tick_interval = window.setInterval(function() {
                a.tick()
            }, 50)
        } else this.failure_callback();
        window.fit_fonts();
        $(window).resize(window.fit_fonts)
    };
    a.prototype.init = function() {
        this.init_vars();
        this.ajax_now_initialized ?
            this.run() : this.init_now()
    };
    window.Counter = a
});

;
$(function() {
    var a = function() {
        Counter.prototype.constructor.call(this)
    };
    a.prototype = new Counter;
    a.prototype.constructor = a;
    a.prototype.default_title = null;
    a.prototype.is_tab_active = null;
    a.prototype.smallest_value = null;
    a.prototype.UNITS = null;
    a.prototype.$minus_sign = null;
    a.prototype.init_vars = function() {
        this.UNITS = [];
        this.$minus_sign = $("#minus_sign");
        this.default_title = document.title;
        this.is_tab_active = !0;
        this.is_displayed($("#year_wrapper")) && this.UNITS.push({
            element: $("#year"),
            value: 315576E5,
            zfill: !1
        });
        this.is_displayed($("#month_wrapper")) && this.UNITS.push({
            element: $("#month"),
            value: 26298E5,
            zfill: !1
        });
        this.is_displayed($("#week_wrapper")) && this.UNITS.push({
            element: $("#week"),
            value: 6048E5,
            zfill: !1
        });
        this.is_displayed($("#day_wrapper")) && this.UNITS.push({
            element: $("#day"),
            value: 864E5,
            zfill: !1
        });
        this.is_displayed($("#hour_wrapper")) && this.UNITS.push({
            element: $("#hour"),
            value: 36E5,
            zfill: !0
        });
        this.is_displayed($("#minute_wrapper")) && this.UNITS.push({
            element: $("#minute"),
            value: 6E4,
            zfill: !0
        });
        this.is_displayed($("#second_wrapper")) &&
            this.UNITS.push({
                element: $("#second"),
                value: 1E3,
                zfill: !0
            });
        this.smallest_value = this.UNITS[this.UNITS.length - 1].value;
        for (var a = 0; a < this.UNITS.length - 1; ++a) $("#colon_" + this.UNITS[a].element.attr("id")).css("display", "inline-block")
    };
    a.prototype.refresh = function(a, c) {
        for (var d = "", g = [], f = 0; f < this.UNITS.length; ++f) {
            var e = this.UNITS[f],
                b = Math.abs(c(a / e.value));
            a %= e.value;
            e.zfill && (b = 10 > b ? "0" + b : b);
            e.element.html("&#8201;" + b + "&#8201;");
            d += b;
            g.push(b)
        }
        this.is_displayed(this.$minus_sign) && (d += "-&#8201;");
        document.title = !this.is_tab_active && 0 <= a ? "[" + g.join(":") + "] " + this.default_title : this.default_title;
        this.old_text.length !== d.length && window.fit_fonts();
        this.old_text = d
    };
    a.prototype.init = function(a) {
        var c = this;
        this.target = a;
        $(window).focus(function() {
            c.is_tab_active = !0;
            document.title = c.default_title
        });
        $(window).blur(function() {
            c.is_tab_active = !1
        });
        Counter.prototype.init.call(this)
    };
    window.CountX = a
});

;
$(function() {
    var a = function() {
        CountX.prototype.constructor.call(this)
    };
    a.prototype = new CountX;
    a.prototype.constructor = a;
    a.prototype.alarm_played = null;
    a.prototype.$alarm = null;
    a.prototype.init_vars = function() {
        this.alarm_played = !1;
        this.$alarm = $("#alarm");
        CountX.prototype.init_vars.call(this)
    };
    a.prototype.tick = function() {
        var a = this.target - this.now();
        !this.alarm_played && a < this.smallest_value && a > -this.smallest_value && (this.$alarm.attr("src", "/static/alarm.mp3"), this.$alarm.get(0).play(), this.alarm_played = !0);
        0 <= a ? (this.$minus_sign.hide(), this.refresh(a, Math.floor)) : this.stop_on_finish ? this.refresh(0, Math.ceil) : (this.$minus_sign.show().css("display", "inline-block"), this.refresh(a, Math.ceil))
    };
    a.prototype.init = function(a, b) {
        this.stop_on_finish = b;
        CountX.prototype.init.call(this, a)
    };
    a = new a;
    window.countdown = a.init.bind(a)
    countdown(1557201600000, true);
});
