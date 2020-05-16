// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/**\n     * \u5927\u5BB6\u597D\uFF0C\u6211\u662FPaula\n     * \u4ECA\u5929\u6765\u7ED9\u5927\u5BB6\u6F14\u793A\u4E00\u4E0B\u5982\u4F55\u7528css\u753B\u5C0F\u732A\u4F69\u5947\n     * \u9996\u5148\u6211\u4EEC\u51C6\u5907\u4E00\u4E2A\u88C5\u4F69\u5947\u7684\u5BB9\u5668\n     */\n    .pig_container {\n         position: relative;\n         left: 600px;\n         top: -200px;\n         width: 400px;\n         height: 400px;\n    }\n    /**\n     * \u9996\u5148\u6211\u4EEC\u6765\u753B\u4F69\u5947\u7684\u5934\n     */\n    .pig_head {\n        width: 300px;\n        height: 200px;\n        top: 100px;\n        left: 100px;\n        border-radius: 95% 50% 50% 50%/ 87% 80% 68% 50%;\n        border: 6px solid #ef96c2;\n        background-color: #ffb3da;\n        transform: rotate(30deg);\n        z-index: 100;\n        box-sizing: border-box;\n    }\n    .pig_head_white_left_bottom {\n        width: 200px;\n        height: 154px;\n        bottom: -7px;\n        left: -38px;\n        background-color: #fff;\n        box-sizing: border-box;\n    }\n    .pig_head_white_left_top {\n        width: 200px;\n        height: 66px;\n        bottom: 84px;\n        background-color: #ffb3da;\n        box-sizing: border-box;\n        top: 166px;\n        left: 134px;\n        transform: rotate(34deg);\n        z-index: 103;\n    }\n    .left_eye, .right_eye, .face, .mouth {\n        z-index: 104;\n    }\n     /**\n     * \u7136\u540E\u518D\u6765\u753B\u4F69\u5947\u7684\u9F3B\u5B50\n     */\n    .pig_nose {\n        width: 51px;\n        height: 70px;\n        top: 147px;\n        left: 107px;\n        border-radius: 72% 72% 72% 72%/ 72% 72% 72% 72%;\n        border: 6px solid #ef96c2;\n        background-color: #ffb3da;\n        transform: rotate(36deg);\n        z-index: 103;\n        box-sizing: border-box;\n    }\n    .pig_nose_bottom {\n        width: 88px;\n        height: 13px;\n        top: 209px;\n        left: 84px;\n        border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;\n        border: 6px solid #ef96c2;\n        background-color: #ffb3da;\n        transform: rotate(35deg);\n        z-index: 102;\n        box-sizing: border-box;\n        border-top-color: #ffb3da;\n    }\n    .pig_jaw {\n        width: 97px;\n        height: 104px;\n        top: 249px;\n        left: 141px;\n        border-radius: 0% 0% 0% 76%/ 0% 0% 0% 74%;\n        border: 6px solid #ef96c2;\n        background-color: #ffb3da;\n        transform: rotate(22deg);\n        z-index: 100;\n        box-sizing: border-box;\n        border-top-color: #ffb3da;\n        border-right-color: #ffb3da;\n    }\n    .pig_jaw_right {\n        width: 13px;\n        height: 6px;\n        background-color: #ef96c2;\n        top: 373px;\n        left: 186px;\n        transform: rotate(19deg);\n        z-index: 100;\n    }\n     /**\n     * \u63A5\u4E0B\u6765\u753B\u4F69\u5947\u7684\u773C\u775B\n     */\n    .left_eye_bg {\n        width: 29px;\n        height: 29px;\n        top: 177px;\n        left: 170px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        border: 6px solid #fff;\n        background-color: #fff;\n        z-index: 101;\n        box-sizing: border-box;\n    }\n    .left_eye_ball {\n        width: 10px;\n        height: 10px;\n        top: 181px;\n        left: 171px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        border: 6px solid #000;\n        background-color: #000;\n        z-index: 101;\n        box-sizing: border-box;\n    }\n    .left_eye_border {\n        width: 34px;\n        height: 34px;\n        top: 174px;\n        left: 166px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        border: 6px solid #ef96c2;\n        background-color: transparent;\n        z-index: 101;\n        box-sizing: border-box;\n    }\n    \n    .right_eye_bg {\n        width: 28px;\n        height: 28px;\n        top: 194px;\n        left: 205px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        border: 6px solid #fff;\n        background-color: #fff;\n        z-index: 101;\n        box-sizing: border-box;\n    }\n    .right_eye_ball {\n        width: 10px;\n        height: 10px;\n        top: 199px;\n        left: 208px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        border: 6px solid #000;\n        background-color: #000;\n        z-index: 101;\n        box-sizing: border-box;\n    }\n    .right_eye_border {\n        width: 35px;\n        height: 37px;\n        top: 191px;\n        left: 202px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        border: 6px solid #ef96c2;\n        background-color: transparent;\n        z-index: 101;\n        box-sizing: border-box;\n    }\n     /**\n     * \u63A5\u4E0B\u6765\u6765\u753B\u4F69\u5947\u7684\u5634\u5DF4\n     */\n    .mouth_bottom {\n        width: 97px;\n        height: 45px;\n        top: 273px;\n        left: 154px;\n        border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;\n        border: 6px solid #d44b81;\n        background-color: #000;\n        z-index: 101;\n        box-sizing: border-box;\n        transform: rotate(19deg);\n    }\n    .mouth_middle {\n        width: 98px;\n        height: 27px;\n        top: 272px;\n        left: 154px;\n        border-radius: 0% 0% 50% 50%/ 0% 0% 100% 100%;\n        border: 6px solid #d44b81;\n        background-color: #ffb3da;\n        z-index: 101;\n        box-sizing: border-box;\n        transform: rotate(19deg);\n        border-top-color: #ffb3da;\n    }\n    .mouth_top {\n            width: 135px;\n        height: 66px;\n        top: 231px;\n        left: 149px;\n        border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;\n        background-color: #ffb3da;\n        z-index: 101;\n        transform: rotate(13deg);\n    }\n    .face {\n        width: 49px;\n        height: 59px;\n        top: 243px;\n        left: 269px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        background-color: #ff96ce;\n        transform: rotate(26deg);\n    }\n    \n    .nose_kong_left {\n        width: 12px;\n        height: 12px;\n        top: 179px;\n        left: 93px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        background-color: #da6c9b;\n        z-index: 104;\n    }\n    .nose_kong_right {\n        width: 12px;\n        height: 12px;\n        top: 182px;\n        left: 109px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        background-color: #da6c9b;\n        z-index: 104;\n    }\n     /**\n     * \u63A5\u4E0B\u6765\u6765\u753B\u4F69\u5947\u7684\u8033\u6735\n     */\n    .ear_left {\n        width: 24px;\n        height: 52px;\n        top: 126px;\n        left: 226px;\n        border: 6px solid #ef96c2;\n        border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;\n        background-color: #ffb3da;\n        z-index: 99;\n        transform: rotate(18deg);\n    }\n    .ear_right {\n        width: 24px;\n        height: 52px;\n        top: 150px;\n        left: 280px;\n        border: 6px solid #ef96c2;\n        border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;\n        background-color: #ffb3da;\n        z-index: 99;\n        transform: rotate(36deg);\n    }\n     /**\n     * \u63A5\u4E0B\u6765\u6765\u753B\u4F69\u5947\u7684\u8EAB\u4F53\n     */\n    .pig_body_bottom {\n        width: 215px;\n        height: 197px;\n        top: 305px;\n        left: 108px;\n        border: 6px solid #e33b32;\n        border-radius: 50% 50% 50% 50%/ 100% 100% 0% 0%;\n        background-color: #eb5b50;\n        z-index: 99;\n    }\n    \n    .hand_left_middle {\n        width: 78px;\n        height: 12px;\n        top: 432px;\n        left: 63px;\n        border-radius: 100% 100% 100% 17%/ 100% 90% 16% 90%;\n        background-color: #ffbadf;\n        z-index: 99;\n        transform: rotate(-35deg);\n    }\n    .hand_left_top {\n        width: 28px;\n        height: 9px;\n        top: 415px;\n        left: 63px;\n        border-radius: 100% 100% 100% 35%/ 100% 90% 16% 90%;\n        background-color: #ffbadf;\n        z-index: 99;\n    }\n    .hand_left_bottom {\n            width: 20px;\n        height: 9px;\n        top: 420px;\n        left: 93px;\n        border-radius: 60% 59% 65% 90%/ 100% 90% 89% 90%;\n        background-color: #ffbadf;\n        z-index: 99;\n        transform: rotate(98deg);\n    }\n    \n    .hand_right_middle {\n            width: 79px;\n        height: 11px;\n        top: 374px;\n        left: 309px;\n        border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;\n        background-color: #ffbadf;\n        z-index: 99;\n        transform: rotate(28deg);\n    }\n    .hand_right_top {\n        width: 28px;\n        height: 10px;\n        top: 397px;\n        left: 350px;\n        border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;\n        background-color: #ffbadf;\n        z-index: 99;\n        transform: rotate(-7deg);\n    }\n    .hand_right_bottom {\n        width: 28px;\n        height: 11px;\n        top: 395px;\n        left: 356px;\n        border-radius: 100% 100% 62% 17%/ 99% 92% 90% 90%;\n        background-color: #ffbadf;\n        z-index: 99;\n        transform: rotate(69deg);\n    }\n     /**\n     * \u8FD9\u662F\u4F69\u5947\u7684\u5DE6\u811A\n     */\n    .left_foot {\n            width: 11px;\n        height: 52px;\n        top: 507px;\n        left: 175px;\n        border-radius: 100% 100% 100% 100%/ 50% 50% 21% 20%;\n        background-color: #ffbadf;\n        z-index: 99;\n    }\n    .left_shoes {\n            width: 51px;\n        height: 14px;\n        top: 553px;\n        left: 138px;\n        border-radius: 58% 187% 180% 50%/ 130% 123% 113% 100%;\n        background-color: #000;\n        z-index: 99;\n        transform: rotate(0deg);\n    }\n    /**\n     * \u8FD9\u662F\u4F69\u5947\u7684\u53F3\u811A\n     */\n    .right_foot {\n        left: 268px;\n    }\n    .right_shoes {\n        left: 230px;\n    }\n    .pig_shadow {\n        width: 240px;\n        height: 47px;\n        top: 535px;\n        left: 101px;\n        border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;\n        background-color: rgba(171, 171, 171, 0.7);\n        transform: rotate(-1deg);\n    }\n    \n    /**\n     * \u597D\u5566\uFF0C\u8FD9\u53EA\u53EF\u7231\u7684\u4F69\u5947\u9001\u7ED9\u4F60\n     */\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let demo2 = document.querySelector("#html");
// let demo = document.querySelector("#style");
// let n = 0;
// let string2 = "";
//
// function step() {
//   setTimeout(() => {
//     // 如果是回车，就不照搬
//     // 如果不是回车就照搬
//     if (string[n] === "\n") {
//       string2 += "<br>";
//     } else if (string[n] === " ") {
//       string2 += "&nbsp";
//     } else {
//       string2 += string[n];
//     }
//     n += 1;
//     demo2.innerHTML = string2;
//     demo.innerHTML = string.substring(0, n);
//     window.scrollTo(0, 99999);
//     demo2.scrollTo(0, 99999);
//     if (n < string.length) {
//       step();
//     }
//   }, 0);
// }
//
// step();
var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#html'),
    demo2: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63865" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map