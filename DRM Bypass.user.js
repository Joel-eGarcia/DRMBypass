// ==UserScript==
// @name         DRM Bypass
// @namespace    https://github.com/jim-othy/DRMBypass
// @version      2.4
// @description  Simulates a fault(Fake) page cast to bypass Google's Digital Rights Management Block, allowing you to Record or Screenshot a website no matters its Security Policy/DRM.
// @author       Jimothy
// @match        https://www.netflix.com/*
// @match        https://www.hulu.com/*
// @match        https://www.crunchyroll.com/*
// @match        https://www.youtube.com/*
// @match        https://www.hbomax.com/*
// @match        https://www.showtime.com/*
// @match        https://www.vudu.com/*
// @icon         https://i.pinimg.com/originals/9e/d8/61/9ed86194c90b60ad5ce0e14fdb1b97d5.png
// @grant        window.focus
// ==/UserScript==

// Press ALT+C To Start Screen Cap
// Select Window & Click the one with your Movie/Show/Video
// Hide the notification at the bottom
// Use a recorder (OBS Recommended) or screenshot software with no BlackScreen

function _0x4d6d(_0x17139f, _0x1931f5) {
    const _0x36293c = _0x3629();
    return _0x4d6d = function(_0x4d6d3d, _0x4bf428) {
        _0x4d6d3d = _0x4d6d3d - 250;
        let _0xfca58c = _0x36293c[_0x4d6d3d];
        return _0xfca58c;
    }, _0x4d6d(_0x17139f, _0x1931f5);
}

function _0x3629() {
    const _0x47c5fd = ["15688semxeB", "mediaDevices", "3HlCUnF", "3733092XNzxPp", "video", "srcObject", "altKey", "stop", "catch", "firstTime", "\nThis script will fake a capture to fool Chromium into thinking that we are casting.\nPress Alt+C after this alert, select your browser in the Window tab, and you should be able to screen record and screenshot Netflix.\nEnjoy :)", "then", "252fRyIvn", "11WPclLq", "onkeydown", "forEach", "keyCode", "5190TrbAUl", "31370WpfVXD", "getTracks", "276pDuIJD", "getItem", "847WwuATU", "true", "228124ScbtRP", "389312XcimJZ", "148392cikzVs", "createElement", "setItem"];
    _0x3629 = function() {
        return _0x47c5fd;
    };
    return _0x3629();
}
(function(_0x13250d, _0x3f952b) {
    const _0x490f46 = _0x4d6d,
        _0x498504 = _0x13250d();
    while (true) {
        try {
            const _0x419dd9 = parseInt(_0x490f46(269)) / 1 * (parseInt(_0x490f46(262)) / 2) + -parseInt(_0x490f46(264)) / 3 + parseInt(_0x490f46(263)) / 4 + -parseInt(_0x490f46(255)) / 5 * (-parseInt(_0x490f46(258)) / 6) + parseInt(_0x490f46(260)) / 7 * (parseInt(_0x490f46(267)) / 8) + -parseInt(_0x490f46(250)) / 9 * (parseInt(_0x490f46(256)) / 10) + -parseInt(_0x490f46(251)) / 11 * (parseInt(_0x490f46(270)) / 12);
            if (_0x419dd9 === _0x3f952b) break;
            else _0x498504.push(_0x498504.shift());
        } catch (_0x57af85) {
            _0x498504.push(_0x498504.shift());
        }
    }
}(_0x3629, 276152), function() {
    "use strict";
    const _0xad166e = _0x4d6d;
    if (!localStorage[_0xad166e(259)](_0xad166e(276))) localStorage[_0xad166e(266)](_0xad166e(276), _0xad166e(261));
    localStorage.getItem("firstTime") == "true" && (alert(_0xad166e(277)), localStorage[_0xad166e(266)](_0xad166e(276), "false"));
    const _0x3bc878 = document[_0xad166e(265)](_0xad166e(271));
    let _0x448c2a = false;
    document[_0xad166e(252)] = _0x1d6daa;

    function _0x1d6daa(_0x931c39 = event) {
        const _0x32627e = _0xad166e;
        if (_0x931c39[_0x32627e(273)] && _0x931c39[_0x32627e(254)] == 67 && _0x448c2a) {
            _0x448c2a = false, _0x3bc878[_0x32627e(272)][_0x32627e(257)]()[_0x32627e(253)](_0x5153fd => _0x5153fd[_0x32627e(274)]());
            return;
        }
        if (_0x931c39[_0x32627e(273)] && _0x931c39[_0x32627e(254)] == 67) {
            _0x127489(_0x574872 => {
                _0x448c2a = true, console.log(_0x448c2a), _0x3bc878.srcObject = _0x574872;
            });
            return;
        }
    }

    function _0x127489(_0xda593a, _0x59c26b) {
        const _0x332ff3 = _0xad166e;
        if (navigator[_0x332ff3(268)].getDisplayMedia) navigator.mediaDevices.getDisplayMedia()[_0x332ff3(278)](_0xda593a)[_0x332ff3(275)](_0x59c26b);
        else navigator.getDisplayMedia()[_0x332ff3(278)](_0xda593a)[_0x332ff3(275)](_0x59c26b);
    }
}());