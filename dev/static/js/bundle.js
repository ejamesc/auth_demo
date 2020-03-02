/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mergerino__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var meiosis_setup_mergerino__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);









const merge = mergerino__WEBPACK_IMPORTED_MODULE_4__["default"];
const root = document.body;
const app = {
  patch: Object(_router__WEBPACK_IMPORTED_MODULE_7__["navTo"])([_router__WEBPACK_IMPORTED_MODULE_7__["Route"].Home()]),
  initial: Object.assign({
    "todos": []
  }),
  Actions: function (update) {
    const navigateTo = route => update(Object(_router__WEBPACK_IMPORTED_MODULE_7__["navTo"])(route));

    const getTodo = () => {
      mithril__WEBPACK_IMPORTED_MODULE_2___default.a.request({
        method: "GET",
        url: "/api/v1/todos",
        headers: {//"Content-Type": "application/vnd.api+json"
        }
      }).then(result => {
        console.log(result);
        update({
          todo: result
        });
      }).catch(e => {
        console.log(JSON.stringify(e));
      });
    };

    return {
      navigateTo,
      getTodo
    };
  },
  services: [_services__WEBPACK_IMPORTED_MODULE_8__["routeService"], _services__WEBPACK_IMPORTED_MODULE_8__["todoLoadService"]]
};
const {
  update,
  states,
  actions
} = Object(meiosis_setup_mergerino__WEBPACK_IMPORTED_MODULE_5__["default"])({
  stream: mithril_stream__WEBPACK_IMPORTED_MODULE_3___default.a,
  merge,
  app
});
window.addEventListener("DOMContentLoaded", main);

function main() {
  mithril__WEBPACK_IMPORTED_MODULE_2___default.a.route.prefix = "";
  mithril__WEBPACK_IMPORTED_MODULE_2___default.a.route(root, "/c", _router__WEBPACK_IMPORTED_MODULE_7__["router"].MithrilRoutes({
    states,
    actions,
    App: _app__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
  })); // Necessary for when programmatically navigating to something

  states.map(() => mithril__WEBPACK_IMPORTED_MODULE_2___default.a.redraw());
  states.map(state => _router__WEBPACK_IMPORTED_MODULE_7__["router"].locationBarSync(state.route));
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(4)
var request = __webpack_require__(10)
var mountRedraw = __webpack_require__(17)

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.mount = mountRedraw.mount
m.route = __webpack_require__(25)
m.render = __webpack_require__(18)
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(28)
m.buildQueryString = __webpack_require__(23)
m.parsePathname = __webpack_require__(27)
m.buildPathname = __webpack_require__(22)
m.vnode = __webpack_require__(6)
m.PromisePolyfill = __webpack_require__(13)

module.exports = m


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(5)

hyperscript.trust = __webpack_require__(8)
hyperscript.fragment = __webpack_require__(9)

module.exports = hyperscript


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(6)
var hyperscriptVnode = __webpack_require__(7)

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError("Vnodes must either always have keys or never have keys!")
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(6)

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(6)

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(6)
var hyperscriptVnode = __webpack_require__(7)

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PromisePolyfill = __webpack_require__(11)
var mountRedraw = __webpack_require__(17)

module.exports = __webpack_require__(21)(window, PromisePolyfill, mountRedraw.redraw)


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var PromisePolyfill = __webpack_require__(13)

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = global.Promise
} else {
	module.exports = PromisePolyfill
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14).setImmediate))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(15);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12), __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var render = __webpack_require__(18)

module.exports = __webpack_require__(20)(render, requestAnimationFrame, console)


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(19)(window)


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(6)

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				updateNodes(element, old.children, vnode.children, hooks, null, ns)
			}
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value)
			else vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""

		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		var prevRedraw = currentRedraw
		try {
			currentRedraw = typeof redraw === "function" ? redraw : undefined
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		} finally {
			currentRedraw = prevRedraw
		}
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(6)

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var rendering = false
	var pending = false

	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 0; i < subscriptions.length; i += 2) {
			try { render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		rendering = false
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			render(root, [], redraw)
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildPathname = __webpack_require__(22)

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText)
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = ev.target.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = ev.target.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildQueryString = __webpack_require__(23)
var assign = __webpack_require__(24)

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign || function(target, source) {
	if(source) Object.keys(source).forEach(function(key) { target[key] = source[key] })
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mountRedraw = __webpack_require__(17)

module.exports = __webpack_require__(26)(window, mountRedraw)


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var Vnode = __webpack_require__(6)
var m = __webpack_require__(5)
var Promise = __webpack_require__(11)

var buildPathname = __webpack_require__(22)
var parsePathname = __webpack_require__(27)
var compileTemplate = __webpack_require__(29)
var assign = __webpack_require__(24)

var sentinel = {}

module.exports = function($window, mountRedraw) {
	var fireAsync

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (fireAsync != null) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var SKIP = route.SKIP = {}

	function route(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		// 0 = start
		// 1 = init
		// 2 = ready
		var state = 0

		var compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
		var p = Promise.resolve()
		var scheduled = false
		var onremove

		fireAsync = null

		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}

		function resolveRoute() {
			scheduled = false
			// Consider the pathname holistically. The prefix might even be invalid,
			// but that's not our problem.
			var prefix = $window.location.hash
			if (route.prefix[0] !== "#") {
				prefix = $window.location.search + prefix
				if (route.prefix[0] !== "?") {
					prefix = $window.location.pathname + prefix
					if (prefix[0] !== "/") prefix = "/" + prefix
				}
			}
			// This seemingly useless `.concat()` speeds up the tests quite a bit,
			// since the representation is consistently a relatively poorly
			// optimized cons string.
			var path = prefix.concat()
				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
				.slice(route.prefix.length)
			var data = parsePathname(path)

			assign(data.params, $window.history.state)

			function fail() {
				if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
				setPath(defaultRoute, null, {replace: true})
			}

			loop(0)
			function loop(i) {
				// 0 = init
				// 1 = scheduled
				// 2 = done
				for (; i < compiled.length; i++) {
					if (compiled[i].check(data)) {
						var payload = compiled[i].component
						var matchedRoute = compiled[i].route
						var localComp = payload
						var update = lastUpdate = function(comp) {
							if (update !== lastUpdate) return
							if (comp === SKIP) return loop(i + 1)
							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
							attrs = data.params, currentPath = path, lastUpdate = null
							currentResolver = payload.render ? payload : null
							if (state === 2) mountRedraw.redraw()
							else {
								state = 2
								mountRedraw.redraw.sync()
							}
						}
						// There's no understating how much I *wish* I could
						// use `async`/`await` here...
						if (payload.view || typeof payload === "function") {
							payload = {}
							update(localComp)
						}
						else if (payload.onmatch) {
							p.then(function () {
								return payload.onmatch(data.params, path, matchedRoute)
							}).then(update, fail)
						}
						else update("div")
						return
					}
				}
				fail()
			}
		}

		// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
		// even if neither `pushState` nor `hashchange` are supported. It's
		// cleared if `hashchange` is used, since that makes it automatically
		// async.
		fireAsync = function() {
			if (!scheduled) {
				scheduled = true
				callAsync(resolveRoute)
			}
		}

		if (typeof $window.history.pushState === "function") {
			onremove = function() {
				$window.removeEventListener("popstate", fireAsync, false)
			}
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			fireAsync = null
			onremove = function() {
				$window.removeEventListener("hashchange", resolveRoute, false)
			}
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		return mountRedraw.mount(root, {
			onbeforeupdate: function() {
				state = state ? 2 : 1
				return !(!state || sentinel === currentResolver)
			},
			oncreate: resolveRoute,
			onremove: onremove,
			view: function() {
				if (!state || sentinel === currentResolver) return
				// Wrap in a fragment to preserve existing key semantics
				var vnode = [Vnode(component, attrs.key, attrs)]
				if (currentResolver) vnode = currentResolver.render(vnode[0])
				return vnode
			},
		})
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			var options = vnode.attrs.options
			// Remove these so they don't get overwritten
			var attrs = {}, onclick, href
			assign(attrs, vnode.attrs)
			// The first two are internal, but the rest are magic attributes
			// that need censored to not screw up rendering.
			attrs.selector = attrs.options = attrs.key = attrs.oninit =
			attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate =
			attrs.onbeforeremove = attrs.onremove = null

			// Do this now so we can get the most current `href` and `disabled`.
			// Those attributes may also be specified in the selector, and we
			// should honor that.
			var child = m(vnode.attrs.selector || "a", attrs, vnode.children)

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want to do this on a disabled link, use
				// an `oncreate` hook to add it.
				child.attrs.onclick = null
			} else {
				onclick = child.attrs.onclick
				href = child.attrs.href
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14).setImmediate))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseQueryString = __webpack_require__(28)

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parsePathname = __webpack_require__(27)

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(31)


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
;(function() {
"use strict"
/* eslint-enable */
Stream.SKIP = {}
Stream.lift = lift
Stream.scan = scan
Stream.merge = merge
Stream.combine = combine
Stream.scanMerge = scanMerge
Stream["fantasy-land/of"] = Stream

var warnedHalt = false
Object.defineProperty(Stream, "HALT", {
	get: function() {
		warnedHalt || console.log("HALT is deprecated and has been renamed to SKIP");
		warnedHalt = true
		return Stream.SKIP
	}
})

function Stream(value) {
	var dependentStreams = []
	var dependentFns = []

	function stream(v) {
		if (arguments.length && v !== Stream.SKIP) {
			value = v
			if (open(stream)) {
				stream._changing()
				stream._state = "active"
				dependentStreams.forEach(function(s, i) { s(dependentFns[i](value)) })
			}
		}

		return value
	}

	stream.constructor = Stream
	stream._state = arguments.length && value !== Stream.SKIP ? "active" : "pending"
	stream._parents = []

	stream._changing = function() {
		if (open(stream)) stream._state = "changing"
		dependentStreams.forEach(function(s) {
			s._changing()
		})
	}

	stream._map = function(fn, ignoreInitial) {
		var target = ignoreInitial ? Stream() : Stream(fn(value))
		target._parents.push(stream)
		dependentStreams.push(target)
		dependentFns.push(fn)
		return target
	}

	stream.map = function(fn) {
		return stream._map(fn, stream._state !== "active")
	}

	var end
	function createEnd() {
		end = Stream()
		end.map(function(value) {
			if (value === true) {
				stream._parents.forEach(function (p) {p._unregisterChild(stream)})
				stream._state = "ended"
				stream._parents.length = dependentStreams.length = dependentFns.length = 0
			}
			return value
		})
		return end
	}

	stream.toJSON = function() { return value != null && typeof value.toJSON === "function" ? value.toJSON() : value }

	stream["fantasy-land/map"] = stream.map
	stream["fantasy-land/ap"] = function(x) { return combine(function(s1, s2) { return s1()(s2()) }, [x, stream]) }

	stream._unregisterChild = function(child) {
		var childIndex = dependentStreams.indexOf(child)
		if (childIndex !== -1) {
			dependentStreams.splice(childIndex, 1)
			dependentFns.splice(childIndex, 1)
		}
	}

	Object.defineProperty(stream, "end", {
		get: function() { return end || createEnd() }
	})

	return stream
}

function combine(fn, streams) {
	var ready = streams.every(function(s) {
		if (s.constructor !== Stream)
			throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream")
		return s._state === "active"
	})
	var stream = ready
		? Stream(fn.apply(null, streams.concat([streams])))
		: Stream()

	var changed = []

	var mappers = streams.map(function(s) {
		return s._map(function(value) {
			changed.push(s)
			if (ready || streams.every(function(s) { return s._state !== "pending" })) {
				ready = true
				stream(fn.apply(null, streams.concat([changed])))
				changed = []
			}
			return value
		}, true)
	})

	var endStream = stream.end.map(function(value) {
		if (value === true) {
			mappers.forEach(function(mapper) { mapper.end(true) })
			endStream.end(true)
		}
		return undefined
	})

	return stream
}

function merge(streams) {
	return combine(function() { return streams.map(function(s) { return s() }) }, streams)
}

function scan(fn, acc, origin) {
	var stream = origin.map(function(v) {
		var next = fn(acc, v)
		if (next !== Stream.SKIP) acc = next
		return next
	})
	stream(acc)
	return stream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) { return tuple[0] })

	var stream = combine(function() {
		var changed = arguments[arguments.length - 1]
		streams.forEach(function(stream, i) {
			if (changed.indexOf(stream) > -1)
				seed = tuples[i][1](seed, stream())
		})

		return seed
	}, streams)

	stream(seed)

	return stream
}

function lift() {
	var fn = arguments[0]
	var streams = Array.prototype.slice.call(arguments, 1)
	return merge(streams).map(function(streams) {
		return fn.apply(undefined, streams)
	})
}

function open(s) {
	return s._state === "pending" || s._state === "active" || s._state === "changing"
}

if (true) module["exports"] = Stream
else {}

}());


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const e=Object.assign||((e,t)=>(t&&Object.keys(t).forEach(o=>e[o]=t[o]),e)),t=(e,r,s)=>{const c=typeof s;if(s&&"object"===c)if(Array.isArray(s))for(const o of s)r=t(e,r,o);else for(const c of Object.keys(s)){const f=s[c];"function"==typeof f?r[c]=f(r[c],o):void 0===f?e&&!isNaN(c)?r.splice(c,1):delete r[c]:null===f||"object"!=typeof f||Array.isArray(f)?r[c]=f:"object"==typeof r[c]?r[c]=f===r[c]?f:o(r[c],f):r[c]=t(!1,{},f)}else"function"===c&&(r=s(r,o));return r},o=(o,...r)=>{const s=Array.isArray(o);return t(s,s?o.slice():e({},o),r)};/* harmony default export */ __webpack_exports__["default"] = (o);
//# sourceMappingURL=mergerino.min.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);


/**
 * Helper to setup the Meiosis pattern.
 *
 * @async
 * @function meiosis.mergerino.setup
 *
 * @param {StreamLib} stream - the stream library. This works with `meiosis.simpleStream`, `flyd`,
 * `m.stream`, or anything for which you provide either a function or an object with a `stream`
 * function to create a stream. The function or object must also have a `scan` property.
 * The returned stream must have a `map` method.
 * @param {Function} merge - the Mergerino `merge` function.
 * @param {app} app - the app, with optional properties.
 *
 * @returns {Object} - `{ update, states, actions }`, where `update` and `states` are streams,
 * and `actions` are the created actions.
 */
/* harmony default export */ __webpack_exports__["default"] = (({ stream, merge, app }) =>
  Object(_common__WEBPACK_IMPORTED_MODULE_0__["default"])({
    stream,
    accumulator: merge,
    combine: patches => patches,
    app
  }));


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Application object.
 *
 * @typedef {Object} app
 * @property {Object} [initial={}] - an object that represents the initial state.
 * If not specified, the initial state will be `{}`.
 * @property {any} [patch=false] - a patch that will initially be sent onto the `update` stream.
 * If not specified, the initial patch will be `false`.
 * @property {Function} [Actions=()=>({})] - a function that creates actions, of the form
 * `update => actions`.
 * @property {Array<Function>} [services=[]] - an array of service functions, each of which
 * should be `({ state, previousState, patch }) => ({ state?, patch?, render?, next? })`.
 */

/**
 * Stream library. This works with `meiosis.simpleStream`, `flyd`, `m.stream`, or anything for
 * which you provide either a function or an object with a `stream` function to create a stream. The
 * function or object must also have a `scan` property. The returned stream must have a `map`
 * method.
 *
 * @typedef {Object|Function} StreamLib
 * @param {*} [value] - the stream's initial value.
 * @property {Function} stream - the function to create a stream, if the stream library itself is
 * not a function.
 * @property {Function} scan - the stream library's `scan` function.
 * @return {simpleStream} - the created stream.
 */

/**
 * Base helper to setup the Meiosis pattern. If you are using Mergerino, Function Patches, or Immer,
 * use their respective `setup` function instead.
 *
 * Patch is merged in to the state by default. Services have access to the previous state and can
 * cancel or alter the original patch. State changes by services are available to the next services
 * in the list.
 *
 * @async
 * @function meiosis.common.setup
 *
 * @param {StreamLib} stream - the stream library. This works with `meiosis.simpleStream`, `flyd`,
 * `m.stream`, or anything for which you provide either a function or an object with a `stream`
 * function to create a stream. The function or object must also have a `scan` property. The
 * returned stream must have a `map` method.
 * @param {Function} accumulator - the accumulator function.
 * @param {Function} combine - the function that combines an array of patches into one.
 * @param {app} app - the app, with optional properties.
 *
 * @returns {Object} - `{ update, states, actions }`, where `update` and `states` are streams,
 * and `actions` are the created actions.
 */
/* harmony default export */ __webpack_exports__["default"] = (({ stream, accumulator, combine, app }) => {
  if (!stream) {
    throw new Error("No stream library was specified.");
  }
  if (!accumulator) {
    throw new Error("No accumulator function was specified.");
  }
  if (!combine) {
    throw new Error("No combine function was specified.");
  }

  app = app || {};
  let { initial, Actions, services } = app;
  initial = initial || {};
  services = services || [];

  const singlePatch = patch => (Array.isArray(patch) ? combine(patch) : patch);
  const accumulatorFn = (state, patch) => (patch ? accumulator(state, singlePatch(patch)) : state);

  const createStream = typeof stream === "function" ? stream : stream.stream;
  const scan = stream.scan;

  const update = createStream();
  const actions = (Actions || (() => ({})))(update);
  const states = createStream();

  // context is { state, patch, previousState }
  // should return { state, render, next }
  const updateState = context => {
    let updatedContext = context;

    for (let i = 0; i < services.length; i++) {
      // a service should return { state, patch, render, next } (all optional)
      const serviceUpdate = services[i](updatedContext);

      if (serviceUpdate) {
        // If a service cancelled a patch, abort
        if (serviceUpdate.patch === false) {
          return {
            render: false,
            state: context.previousState,
            next: []
          };
        }
        // If a service changed a patch, abort current and issue the new patch
        if (serviceUpdate.patch) {
          return {
            render: false,
            state: context.previousState,
            next: [({ update }) => update(serviceUpdate.patch)]
          };
        }
        // Append next function
        if (serviceUpdate.next) {
          updatedContext.next.push(serviceUpdate.next);
          delete serviceUpdate.next;
        }
        // Update the context
        updatedContext = Object.assign(updatedContext, serviceUpdate, {
          state: accumulatorFn(updatedContext.state, serviceUpdate.state)
        });
      }
    }
    return updatedContext;
  };

  const contexts = scan(
    (context, patch) =>
      updateState({
        previousState: context.state,
        state: accumulatorFn(context.state, patch),
        patch,
        render: true,
        next: []
      }),
    { state: initial },
    update
  );

  contexts.map(context => {
    if (context.render) {
      states(context.state);
    }
    if (context.next) {
      context.next.forEach(service => {
        service({
          state: context.state,
          patch: context.patch,
          update,
          actions
        });
      });
    }
  });

  // run services on initial state
  update(app.patch || false);

  return { update, contexts, states, actions };
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var meiosis_routing_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var meiosis_routing_state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(meiosis_routing_state__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);


 // Top level app structure for JS

const AppComponent = {
  view: ({
    attrs: {
      state,
      actions
    }
  }) => mithril__WEBPACK_IMPORTED_MODULE_0___default()(Root, {
    state,
    actions
  })
};
const Root = {
  view: ({
    attrs: {
      state,
      actions
    }
  }) => {
    const routing = Object(meiosis_routing_state__WEBPACK_IMPORTED_MODULE_1__["Routing"])(state.route);
    const Component = _router__WEBPACK_IMPORTED_MODULE_2__["componentMap"][routing.localSegment.id];

    const isActive = tab => tab === Component;

    console.log(state);
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("main.w-100", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(".fl.w-100.w-20-ns", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril__WEBPACK_IMPORTED_MODULE_0___default.a.route.Link, {
      href: _router__WEBPACK_IMPORTED_MODULE_2__["router"].toPath([_router__WEBPACK_IMPORTED_MODULE_2__["Route"].Home()]),
      class: "pl3"
    }, "Home"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril__WEBPACK_IMPORTED_MODULE_0___default.a.route.Link, {
      href: _router__WEBPACK_IMPORTED_MODULE_2__["router"].toPath([_router__WEBPACK_IMPORTED_MODULE_2__["Route"].Card()]),
      class: "pl3"
    }, "Card")]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".fl.w-100.w-80-ns", mithril__WEBPACK_IMPORTED_MODULE_0___default()(Component, {
      state,
      actions,
      routing
    }))]);
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * `meiosis-routing/state`
 *
 * The `state` module contains functions for managing routes in the application state.
 *
 * @module state
 */
Object.defineProperty(exports, "__esModule", { value: true });
////////
// fastDeepEqual credit: https://github.com/epoberezkin/fast-deep-equal
// This version does not handle Date and RegExp, because we shouldn't have those types when
// parsing a URL string.
const isArray = Array.isArray;
const keyList = Object.keys;
const hasProp = Object.prototype.hasOwnProperty;
const fastDeepEqual = (a, b) => {
    if (a === b)
        return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
        const arrA = isArray(a), arrB = isArray(b);
        let i, length, key;
        if (arrA && arrB) {
            length = a.length;
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!fastDeepEqual(a[i], b[i]))
                    return false;
            return true;
        }
        if (arrA != arrB)
            return false;
        const keys = keyList(a);
        length = keys.length;
        if (length !== keyList(b).length)
            return false;
        for (i = length; i-- !== 0;)
            if (!hasProp.call(b, keys[i]))
                return false;
        for (i = length; i-- !== 0;) {
            key = keys[i];
            if (!fastDeepEqual(a[key], b[key]))
                return false;
        }
        return true;
    }
    return a !== a && b !== b;
};
const defaultEmpty = (route) => (Array.isArray(route) ? route : []);
/**
 * Creates a `Route` helper with functions to create route segments.
 *
 * @param routeNames the list of route names.
 * @returns a `Route` object with constructor functions.
 *
 * @example
 *
 * ```
 *
 * const Route = createRouteSegments(["Home", "User"]);
 *
 * Route.Home()
 * // { id: "Home", params: {} }
 *
 * Route.User({ name: "duck" })
 * // { id: "User", params: { name: "duck" } }
 * ```
 */
function createRouteSegments(routeNames) {
    return routeNames.reduce((result, id) => {
        result[id] = (params) => ({
            id,
            params: params == null ? {} : params
        });
        return result;
    }, {});
}
exports.createRouteSegments = createRouteSegments;
/**
 * Looks for a route segment, with matching params, in a route.
 *
 * @param route the route to search.
 * @param routeSegmentWithParams the route segment to search for in the route.
 * @returns the matching Route segment, or `undefined` if `route` is empty or the route segment
 * was not found.
 */
function findRouteSegmentWithParams(route, routeSegmentWithParams) {
    return defaultEmpty(route).find((routeSegment) => routeSegment.id === routeSegmentWithParams.id &&
        fastDeepEqual(routeSegment.params, routeSegmentWithParams.params));
}
exports.findRouteSegmentWithParams = findRouteSegmentWithParams;
/**
 * Looks for a Route segment, regardless of the params, in a route.
 *
 * @param route the route to search.
 * @param id the route segment, or just the id of the route segment, to search for in the route.
 * @returns the matching Route segment, or `undefined` if `route` is empty or a route segment with
 * the given id was not found.
 */
function findRouteSegment(route, id) {
    const findId = id.id || id;
    return defaultEmpty(route).find((routeSegment) => routeSegment.id === findId);
}
exports.findRouteSegment = findRouteSegment;
/**
 * Calculates the difference between two routes.
 *
 * @param from
 * @param to
 * @returns the route representing the segments that are in the `from` route but not in the `to`
 * route.
 */
function diffRoute(from, to) {
    const init = {};
    return defaultEmpty(from).reduce((result, fromRouteSegment) => {
        if (findRouteSegmentWithParams(to, fromRouteSegment) === undefined) {
            result[fromRouteSegment.id] = fromRouteSegment;
        }
        return result;
    }, init);
}
exports.diffRoute = diffRoute;
/**
 * Calculates route transitions, providing `leave`, `arrive`, and `params` to indicate the route
 * segments for the route that we are leaving, the route to which we are arriving, and the route
 * for which params have changed, respectively.
 *
 * @param currentRoute the current route, before navigation.
 * @param nextRoute the route to which we are navigating.
 * @returns an object with `leave`, `arrive`, and `params` properties.
 */
function routeTransition(currentRoute, nextRoute) {
    return {
        leave: diffRoute(currentRoute, nextRoute),
        arrive: diffRoute(nextRoute, currentRoute)
    };
}
exports.routeTransition = routeTransition;
/**
 * Calls a function with a value only if the value is not `null` or `undefined`.
 *
 * @param value the value to check.
 * @param fn the function to call if `value` is present.
 * @returns the result of calling `fn(value)`, or `null` if `value` is absent.
 */
function whenPresent(value, fn) {
    return value != null ? fn(value) : null;
}
exports.whenPresent = whenPresent;
/**
 * @constructor [[RoutingObject]]
 *
 * @param route the current route, for example `state.route.current`.
 * @param index the route segment index. This is used internally and you should not specify a value
 * for this parameter.
 *
 * @example
 *
 * ```
 *
 * // in root component
 * const Root = ({ state }) => {
 *   const routing = Routing(state.route.current);
 *   const Component = componentMap[routing.localSegment.id];
 *
 *   return (
 *     <div>
 *       <Component // other props... // routing={routing} />
 *     </div>
 *   );
 * };
 *
 * // in child component
 * const Child = ({ state, routing }) => {
 *   const Component = componentMap[routing.childSegment.id];
 *   const params = routing.localSegment.params;
 *
 *   return (
 *     <div>
 *       <a href={router.toPath(routing.parentRoute())}>...</a>
 *       <a href={router.toPath(routing.childRoute(Route.Child()))}>...</a>
 *       <a href={router.toPath(
 *         routing.siblingRoute([Route.Sibling(), Route.Details()])
 *       )}>...</a>
 *
 *       <Component // other props... // routing={routing.next()} />
 *     </div>
 *   );
 * };
 * ```
 */
function Routing(route = [], index = 0) {
    return {
        route,
        index,
        localSegment: route[index] === undefined ? { id: "", params: {} } : route[index],
        childSegment: route[index + 1] === undefined ? { id: "", params: {} } : route[index + 1],
        next: () => Routing(route, index + 1),
        parentRoute: () => route.slice(0, index),
        childRoute: (child) => route.slice(0, index + 1).concat(child),
        siblingRoute: (sibling) => route.slice(0, index).concat(sibling),
        sameRoute: (params) => route
            .slice(0, index)
            .concat({ id: route[index].id, params })
            .concat(route.slice(index + 1))
    };
}
exports.Routing = Routing;
/**
 * Convenience function which puts the given route into an object of the form
 * `{ route }`.
 */
function navigateTo(route) {
    return { route: Array.isArray(route) ? route : [route] };
}
exports.navigateTo = navigateTo;
/**
 * Convenience function which creates a `navigateTo` action.
 */
function Actions(update) {
    return {
        navigateTo: (route) => update(navigateTo(route))
    };
}
exports.Actions = Actions;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentMap", function() { return componentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navTo", function() { return navTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var meiosis_routing_router_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var meiosis_routing_router_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(meiosis_routing_router_helper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);





const routeConfig = {
  Home: "/c",
  Card: "/card",
  NotFound: "/:404..."
};
const NotFound = {
  view: () => mithril__WEBPACK_IMPORTED_MODULE_2___default()("p", "Not Found")
};
const componentMap = {
  Home: _home__WEBPACK_IMPORTED_MODULE_4__["Home"],
  Card: _card__WEBPACK_IMPORTED_MODULE_3__["Card"],
  NotFound
};
const Route = Object(meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0__["createRouteSegments"])(["Home", "Card", "NotFound"]);
const navTo = route => ({
  route: Array.isArray(route) ? route : [route]
});
const router = Object(meiosis_routing_router_helper__WEBPACK_IMPORTED_MODULE_1__["createMithrilRouter"])({
  m: (mithril__WEBPACK_IMPORTED_MODULE_2___default()),
  routeConfig,
  prefix: ""
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * `meiosis-routing/router-helper`
 *
 * The `router-helper` module contains functions for creating a router by plugging in a router
 * library.
 *
 * @module routerHelper
 */
Object.defineProperty(exports, "__esModule", { value: true });
////////
const getPathWithoutQuery = (path) => path.replace(/\?.*/, "");
const getQuery = (path) => {
    const idx = path.indexOf("?");
    return idx >= 0 ? path.substring(idx + 1) : "";
};
const extractMatches = (matches) => {
    if (matches) {
        return matches.map((param) => param.substring(1));
    }
    else {
        return [];
    }
};
function findPathParams(path) {
    return extractMatches(path.match(/:[^/?]*/g));
}
exports.findPathParams = findPathParams;
function findQueryParams(path) {
    return extractMatches(path.match(/[?&][^?&]*/g));
}
exports.findQueryParams = findQueryParams;
function setParams(path, params) {
    return findPathParams(path).reduce((result, pathParam) => {
        const value = encodeURI(params[pathParam] || "");
        const key = ":" + pathParam;
        const idx = result.indexOf(key);
        return result.substring(0, idx) + value + result.substring(idx + key.length);
    }, getPathWithoutQuery(path));
}
exports.setParams = setParams;
const getConfig = (config) => config == null
    ? ["/", [], {}]
    : typeof config === "string"
        ? [config, [], {}]
        : config.length === 2
            ? Array.isArray(config[1])
                ? [config[0], config[1], {}]
                : [config[0], [], config[1]]
            : config;
const pick = (obj, props) => props.reduce((result, prop) => {
    if (obj[prop] != null) {
        result[prop] = obj[prop];
    }
    return result;
}, {});
function convertToPath(routeConfig, routeOrRoutes, qsStringify) {
    let path = "";
    let lookup = routeConfig;
    let query = {};
    const routes = Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes];
    routes.forEach((route) => {
        const [configPath, _parentParams, children] = getConfig(lookup[route.id]);
        path += setParams(configPath, route.params);
        lookup = children;
        const queryParams = findQueryParams(configPath);
        query = Object.assign(query, pick(route.params, queryParams));
    });
    if (Object.keys(query).length > 0 && typeof qsStringify === "function") {
        path += "?" + qsStringify(query);
    }
    return path;
}
exports.convertToPath = convertToPath;
// Returns { "/path": fn(params) => [route] }
function createRouteMap(routeConfig = {}, path = "", fn = (_none) => [], acc = {}) {
    return Object.entries(routeConfig).reduce((result, [id, config]) => {
        const [configPath, parentParams, children] = getConfig(config);
        const routeParams = findPathParams(configPath)
            .concat(findQueryParams(configPath))
            .concat(parentParams);
        const localPath = path + getPathWithoutQuery(configPath);
        const routeFn = (params) => fn(params).concat({ id, params: pick(params, routeParams) });
        result[localPath] = routeFn;
        createRouteMap(children, localPath, routeFn, result);
        return result;
    }, acc);
}
exports.createRouteMap = createRouteMap;
/**
 * Generic function to create a router from a router library of your choice.
 *
 * To use this function, write a `createXYZRouter` function that in turn calls `createRouter`.
 * All config parameters except for `createParsePath` are normally passed-thru from
 * `createXYZRouter` to `createRouter`, unless you want to define specific implementations of
 * `getPath`, `setPath`, and/or `addLocationChangeListener`.
 *
 * The key parse is `createParsePath`. This is where you define how to plug in to the router
 * library of your choice.
 *
 * `function createParsePath(routeMap, defaultRoute)` receives a `routeMap` which is an object
 * with
 *
 * @param config
 * @returns the created router.
 *
 * @example
 *
 * ```
 *
 * // Example of a createParsePath function with feather-route-matcher
 * const createParsePath = (routeMap, defaultRoute) => {
 *   const routeMatcher = createRouteMatcher(routeMap);
 *
 *   const parsePath = (path, queryParams) => {
 *     const match = routeMatcher(path);
 *
 *     if (match) {
 *       return match.page(Object.assign({}, match.params, queryParams));
 *     } else {
 *       return defaultRoute;
 *     }
 *   };
 *   return parsePath;
 * };
 * ```
 */
function createRouter(config) {
    const { routeConfig, createParsePath, defaultRoute } = config;
    const prefix = config.prefix != null ? config.prefix : "#";
    const getPath = config.getPath === undefined
        ? () => document.location.hash || prefix + "/"
        : config.getPath;
    const setPath = config.setPath === undefined
        ? (path) => window.history.pushState({}, "", path)
        : config.setPath;
    const queryString = config.queryString || {};
    const addLocationChangeListener = config.addLocationChangeListener ||
        ((listener) => {
            window.onpopstate = listener;
        });
    const routeMap = createRouteMap(routeConfig);
    const parsePathFn = createParsePath ? createParsePath(routeMap, defaultRoute) : null;
    const parsePath = parsePathFn
        ? (pathWithPrefix) => {
            const path = pathWithPrefix.substring(prefix.length);
            const query = getQuery(path);
            const queryParams = query.length === 0 || !queryString.parse ? {} : queryString.parse(query);
            return parsePathFn(getPathWithoutQuery(path), queryParams);
        }
        : () => [];
    const toPath = (route) => prefix + convertToPath(routeConfig, route, queryString.stringify);
    // Function to keep the location bar in sync
    const locationBarSync = (route) => {
        const path = toPath(route);
        if (getPath() !== path) {
            setPath(path);
        }
    };
    // Listen to location changes and call navigateTo()
    const start = ({ navigateTo }) => {
        const parsePathAndNavigate = () => navigateTo(parsePath(getPath()));
        addLocationChangeListener(parsePathAndNavigate);
    };
    const initialRoute = parsePath ? parsePath(getPath()) : undefined;
    return { initialRoute, locationBarSync, parsePath, routeMap, start, toPath };
}
exports.createRouter = createRouter;
/**
 * Creates a router using
 * [feather-route-matcher](https://github.com/HenrikJoreteg/feather-route-matcher).
 *
 * @param config
 *
 * @example
 *
 * ```
 *
 * import createRouteMatcher from "feather-route-matcher";
 * import queryString from "query-string"; // only if using query strings
 *
 * const Route = createRouteSegments([...]);
 *
 * const routeConfig = { ... };
 *
 * const router = createFeatherRouter({
 *   createRouteMatcher,
 *   routeConfig,
 *   defaultRoute: [Route.Home()],
 *   queryString // only if using query strings
 * });
 * ```
 */
function createFeatherRouter(config) {
    const createParsePath = (routeMap, defaultRoute) => {
        const routeMatcher = config.createRouteMatcher(routeMap);
        const parsePath = (path, queryParams) => {
            const match = routeMatcher(path);
            if (match) {
                const params = Object.keys(match.params || {}).reduce((result, key) => {
                    result[key] = decodeURI(match.params[key]);
                    return result;
                }, {});
                return match.page(Object.assign({}, params, queryParams));
            }
            else {
                return defaultRoute;
            }
        };
        return parsePath;
    };
    return createRouter(Object.assign({ createParsePath }, config));
}
exports.createFeatherRouter = createFeatherRouter;
/**
 * Creates a router using
 * [url-mapper](https://github.com/cerebral/url-mapper).
 *
 * @param config
 *
 * @example
 *
 * ```
 *
 * import Mapper from "url-mapper";
 * import urlon from "urlon"; // only if using query strings
 *
 * const Route = createRouteSegments([...]);
 *
 * const routeConfig = { ... };
 *
 * const router = createUrlMapperRouter({
 *   Mapper,
 *   routeConfig,
 *   defaultRoute: [Route.Home()],
 *   queryString: urlon // only if using query strings
 * });
 * ```
 */
function createUrlMapperRouter(config) {
    const createParsePath = (routeMap, defaultRoute) => {
        const urlMapper = config.Mapper();
        const parsePath = (path, queryParams) => {
            const matchedRoute = urlMapper.map(path, routeMap);
            if (matchedRoute) {
                return matchedRoute.match(Object.assign({}, matchedRoute.values, queryParams));
            }
            else {
                return defaultRoute;
            }
        };
        return parsePath;
    };
    return createRouter(Object.assign({ createParsePath }, config));
}
exports.createUrlMapperRouter = createUrlMapperRouter;
/**
 * Creates a router using [Mithril Router](https://mithril.js.org/route.html).
 *
 * @param config
 *
 * @example
 *
 * ```
 *
 * import m from "mithril";
 * // Note: query strings are built-in to Mithril
 *
 * const Route = createRouteSegments([...]);
 *
 * const routeConfig = { ... };
 *
 * const router = createMithrilRouter({
 *   m,
 *   routeConfig
 * });
 * ```
 */
function createMithrilRouter(config) {
    const queryString = { stringify: config.m.buildQueryString };
    const router = createRouter(Object.assign({ prefix: "#!", queryString }, config));
    router.MithrilRoutes = ({ states, actions, App }) => Object.entries(router.routeMap).reduce((result, [path, fn]) => {
        result[path] = {
            onmatch: (params) => actions.navigateTo(fn(params)),
            render: () => config.m(App, { state: states(), actions })
        };
        return result;
    }, {});
    return router;
}
exports.createMithrilRouter = createMithrilRouter;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

const Card = {
  view: vnode => {
    var {
      state,
      actions
    } = vnode.attrs;
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".pa4", mithril__WEBPACK_IMPORTED_MODULE_0___default()("p.measure-wide", "This is a card component"));
  }
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

const Home = {
  view: ({
    attrs: {
      state,
      actions
    }
  }) => {
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".pa4", mithril__WEBPACK_IMPORTED_MODULE_0___default()("p.measure-wide", "This is the home component"));
  }
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeService", function() { return routeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoLoadService", function() { return todoLoadService; });
/* harmony import */ var meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);


const routeService = ({
  previousState,
  state
}) => ({
  state: {
    routeTransition: () => Object(meiosis_routing_state__WEBPACK_IMPORTED_MODULE_0__["routeTransition"])(previousState.route, state.route)
  }
});
const todoLoadService = ({
  state
}) => {
  if (state.routeTransition.arrive.Card) {
    return {
      next: ({
        state,
        patch,
        update,
        actions
      }) => {
        actions.getTodo();
      }
    };
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90YWNoeW9ucy9jc3MvdGFjaHlvbnMuY3NzP2Y3NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz85OGQ4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL2h5cGVyc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9oeXBlcnNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL2h5cGVyc2NyaXB0Vm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3RydXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9mcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3Byb21pc2UvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3Byb21pc2UvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9tb3VudC1yZWRyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvYXBpL21vdW50LXJlZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZXF1ZXN0L3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcXVlcnlzdHJpbmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JvdXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL2FwaS9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcXVlcnlzdHJpbmcvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvY29tcGlsZVRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3N0cmVhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9zdHJlYW0vc3RyZWFtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZXJnZXJpbm8vZGlzdC9tZXJnZXJpbm8ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZWlvc2lzLXNldHVwL21lcmdlcmluby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVpb3Npcy1zZXR1cC9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVpb3Npcy1yb3V0aW5nL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21laW9zaXMtcm91dGluZy9yb3V0ZXItaGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJtZXJnZSIsIm1lcmdlcmlubyIsInJvb3QiLCJkb2N1bWVudCIsImJvZHkiLCJhcHAiLCJwYXRjaCIsIm5hdlRvIiwiUm91dGUiLCJIb21lIiwiaW5pdGlhbCIsIk9iamVjdCIsImFzc2lnbiIsIkFjdGlvbnMiLCJ1cGRhdGUiLCJuYXZpZ2F0ZVRvIiwicm91dGUiLCJnZXRUb2RvIiwibSIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b2RvIiwiY2F0Y2giLCJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlcnZpY2VzIiwicm91dGVTZXJ2aWNlIiwidG9kb0xvYWRTZXJ2aWNlIiwic3RhdGVzIiwiYWN0aW9ucyIsIm1laW9zaXNNZXJnZXJpbm8iLCJzdHJlYW0iLCJTdHJlYW0iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsInByZWZpeCIsInJvdXRlciIsIk1pdGhyaWxSb3V0ZXMiLCJBcHAiLCJBcHBDb21wb25lbnQiLCJtYXAiLCJyZWRyYXciLCJzdGF0ZSIsImxvY2F0aW9uQmFyU3luYyIsInZpZXciLCJhdHRycyIsIlJvb3QiLCJyb3V0aW5nIiwiUm91dGluZyIsIkNvbXBvbmVudCIsImNvbXBvbmVudE1hcCIsImxvY2FsU2VnbWVudCIsImlkIiwiaXNBY3RpdmUiLCJ0YWIiLCJMaW5rIiwiaHJlZiIsInRvUGF0aCIsImNsYXNzIiwiQ2FyZCIsInJvdXRlQ29uZmlnIiwiTm90Rm91bmQiLCJjcmVhdGVSb3V0ZVNlZ21lbnRzIiwiQXJyYXkiLCJpc0FycmF5IiwiY3JlYXRlTWl0aHJpbFJvdXRlciIsInZub2RlIiwicHJldmlvdXNTdGF0ZSIsInJvdXRlVHJhbnNpdGlvbiIsImFycml2ZSIsIm5leHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGlEQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLElBQXRCO0FBRUEsTUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLE9BQUssRUFBRUMscURBQUssQ0FBQyxDQUFDQyw2Q0FBSyxDQUFDQyxJQUFOLEVBQUQsQ0FBRCxDQURGO0FBRVZDLFNBQU8sRUFBRUMsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDckIsYUFBUztBQURZLEdBQWQsQ0FGQztBQUtWQyxTQUFPLEVBQUUsVUFBU0MsTUFBVCxFQUFpQjtBQUN4QixVQUFNQyxVQUFVLEdBQUdDLEtBQUssSUFBSUYsTUFBTSxDQUFDUCxxREFBSyxDQUFDUyxLQUFELENBQU4sQ0FBbEM7O0FBQ0EsVUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEJDLG9EQUFDLENBQUNDLE9BQUYsQ0FBVTtBQUNSQyxjQUFNLEVBQUUsS0FEQTtBQUVSQyxXQUFHLEVBQUUsZUFGRztBQUdSQyxlQUFPLEVBQUUsQ0FDUDtBQURPO0FBSEQsT0FBVixFQU9HQyxJQVBILENBT1NDLE1BQUQsSUFBWTtBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQVYsY0FBTSxDQUFDO0FBQUNhLGNBQUksRUFBRUg7QUFBUCxTQUFELENBQU47QUFDRCxPQVZILEVBVUtJLEtBVkwsQ0FVWUMsQ0FBRCxJQUFPO0FBQ2RKLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsQ0FBZixDQUFaO0FBQ0QsT0FaSDtBQWFELEtBZEQ7O0FBZ0JBLFdBQU87QUFDTGQsZ0JBREs7QUFFTEU7QUFGSyxLQUFQO0FBSUQsR0EzQlM7QUE0QlZlLFVBQVEsRUFBRSxDQUFDQyxzREFBRCxFQUFlQyx5REFBZjtBQTVCQSxDQUFaO0FBK0JBLE1BQU07QUFBRXBCLFFBQUY7QUFBVXFCLFFBQVY7QUFBa0JDO0FBQWxCLElBQ0pDLHVFQUFnQixDQUFDO0FBQUVDLFFBQU0sRUFBRUMscURBQVY7QUFBa0J2QyxPQUFsQjtBQUF5Qks7QUFBekIsQ0FBRCxDQURsQjtBQUdBbUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNENDLElBQTVDOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZHhCLGdEQUFDLENBQUNGLEtBQUYsQ0FBUTJCLE1BQVIsR0FBaUIsRUFBakI7QUFDQXpCLGdEQUFDLENBQUNGLEtBQUYsQ0FDRWQsSUFERixFQUVFLElBRkYsRUFHRTBDLDhDQUFNLENBQUNDLGFBQVAsQ0FBcUI7QUFBRVYsVUFBRjtBQUFVQyxXQUFWO0FBQW1CVSxPQUFHLEVBQUVDLGlEQUFZQTtBQUFwQyxHQUFyQixDQUhGLEVBRmMsQ0FRZDs7QUFDQVosUUFBTSxDQUFDYSxHQUFQLENBQVcsTUFBTTlCLDhDQUFDLENBQUMrQixNQUFGLEVBQWpCO0FBQ0FkLFFBQU0sQ0FBQ2EsR0FBUCxDQUFXRSxLQUFLLElBQUlOLDhDQUFNLENBQUNPLGVBQVAsQ0FBdUJELEtBQUssQ0FBQ2xDLEtBQTdCLENBQXBCO0FBQ0QsQzs7Ozs7O0FDN0RELHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7OztBQ0FZOztBQUVaLGtCQUFrQixtQkFBTyxDQUFDLENBQWU7QUFDekMsY0FBYyxtQkFBTyxDQUFDLEVBQVc7QUFDakMsa0JBQWtCLG1CQUFPLENBQUMsRUFBZ0I7O0FBRTFDLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxFQUFTO0FBQzNCLFdBQVcsbUJBQU8sQ0FBQyxFQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLEVBQXFCO0FBQ2xELHFCQUFxQixtQkFBTyxDQUFDLEVBQXFCO0FBQ2xELGtCQUFrQixtQkFBTyxDQUFDLEVBQWtCO0FBQzVDLGtCQUFrQixtQkFBTyxDQUFDLEVBQWtCO0FBQzVDLFVBQVUsbUJBQU8sQ0FBQyxDQUFnQjtBQUNsQyxvQkFBb0IsbUJBQU8sQ0FBQyxFQUFvQjs7QUFFaEQ7Ozs7Ozs7O0FDdkJZOztBQUVaLGtCQUFrQixtQkFBTyxDQUFDLENBQXNCOztBQUVoRCxvQkFBb0IsbUJBQU8sQ0FBQyxDQUFnQjtBQUM1Qyx1QkFBdUIsbUJBQU8sQ0FBQyxDQUFtQjs7QUFFbEQ7Ozs7Ozs7O0FDUFk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLENBQWlCO0FBQ3JDLHVCQUF1QixtQkFBTyxDQUFDLENBQW9COztBQUVuRDtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3BHWTs7QUFFWjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUM5Qlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLENBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNwRFk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLENBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsQ0FBaUI7QUFDckMsdUJBQXVCLG1CQUFPLENBQUMsQ0FBb0I7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWFk7O0FBRVosc0JBQXNCLG1CQUFPLENBQUMsRUFBbUI7QUFDakQsa0JBQWtCLG1CQUFPLENBQUMsRUFBZ0I7O0FBRTFDLGlCQUFpQixtQkFBTyxDQUFDLEVBQW1COzs7Ozs7OztBQ0w1Qyw4Q0FBWTs7QUFFWixzQkFBc0IsbUJBQU8sQ0FBQyxFQUFZOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7QUNuQkEsb0RBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtQ0FBbUMsWUFBWTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLFlBQVk7QUFDdEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwyQ0FBMkM7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZUFBZTtBQUM5RDtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOzs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ3pMRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7OztBQ3ZMMUI7O0FBRVosYUFBYSxtQkFBTyxDQUFDLEVBQVU7O0FBRS9CLGlCQUFpQixtQkFBTyxDQUFDLEVBQW9COzs7Ozs7OztBQ0pqQzs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxFQUFpQjs7Ozs7Ozs7QUNGOUI7O0FBRVosWUFBWSxtQkFBTyxDQUFDLENBQWlCOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCx5REFBeUQ7QUFDekQsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsaUNBQWlDLE9BQU87QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCLFlBQVksZUFBZTtBQUMzQjtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLCtCQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsK0RBQStEO0FBQy9ELDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtQkFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSixtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxlQUFlO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOzs7Ozs7OztBQzU4Qlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLENBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDLFFBQVE7QUFDUixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7Ozs7Ozs7O0FDakRZOztBQUVaLG9CQUFvQixtQkFBTyxDQUFDLEVBQW1COztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7QUNqTVk7O0FBRVosdUJBQXVCLG1CQUFPLENBQUMsRUFBc0I7QUFDckQsYUFBYSxtQkFBTyxDQUFDLEVBQVU7O0FBRS9CO0FBQ0E7QUFDQSx1QkFBdUIsRUFBRTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6Qlk7O0FBRVo7QUFDQSx1REFBdUQsNEJBQTRCO0FBQ25GOzs7Ozs7OztBQ0pZOztBQUVaLGtCQUFrQixtQkFBTyxDQUFDLEVBQWdCOztBQUUxQyxpQkFBaUIsbUJBQU8sQ0FBQyxFQUFjOzs7Ozs7OztBQ0p2QyxvREFBWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsQ0FBaUI7QUFDckMsUUFBUSxtQkFBTyxDQUFDLENBQXVCO0FBQ3ZDLGNBQWMsbUJBQU8sQ0FBQyxFQUFvQjs7QUFFMUMsb0JBQW9CLG1CQUFPLENBQUMsRUFBbUI7QUFDL0Msb0JBQW9CLG1CQUFPLENBQUMsRUFBbUI7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsRUFBNkI7QUFDM0QsYUFBYSxtQkFBTyxDQUFDLEVBQW9COztBQUV6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUJBQXFCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDclFZOztBQUVaLHVCQUF1QixtQkFBTyxDQUFDLEVBQXNCOztBQUVyRCxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxHQUFHOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkJZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0M7QUFDL0MsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ1k7O0FBRVosb0JBQW9CLG1CQUFPLENBQUMsRUFBUzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxFQUFpQjs7Ozs7OztBQ0YxQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNEJBQTRCO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMkJBQTJCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBLDBDQUEwQyxrQ0FBa0Msb0JBQW9COztBQUVoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdDQUFnQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBLHFDQUFxQyxtQkFBbUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGlDQUFpQyxhQUFhLEdBQUc7QUFDN0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsa0JBQWtCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQTZCO0FBQ2pDLEtBQUssRUFDNEI7O0FBRWpDLENBQUM7Ozs7Ozs7O0FDbExEO0FBQUEsd0ZBQXdGLGlCQUFpQixtRUFBbUUsb0NBQW9DLGFBQWEsd01BQXdNLElBQUksK0JBQStCLFNBQVMsY0FBYyx5QkFBeUIsMkJBQTJCLFFBQXVCLGdFQUFDLEVBQUM7QUFDNWlCLHlDOzs7Ozs7O0FDREE7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLElBQUk7QUFDZjtBQUNBLGFBQWEsT0FBTyxLQUFLLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ2UsaUVBQUUscUJBQXFCO0FBQ3RDLEVBQUUsdURBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxFQUFDOzs7Ozs7OztBQ3hCTDtBQUFBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU8sWUFBWTtBQUNqQyxrREFBa0Q7QUFDbEQsY0FBYyxJQUFJO0FBQ2xCO0FBQ0EsY0FBYyxTQUFTLGlCQUFpQjtBQUN4QztBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCLGdCQUFnQiw4QkFBOEIsT0FBTyxpQ0FBaUM7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsV0FBVyxFQUFFO0FBQ2IsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLFlBQVksYUFBYTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxJQUFJO0FBQ2Y7QUFDQSxhQUFhLE9BQU8sS0FBSywwQkFBMEI7QUFDbkQ7QUFDQTtBQUNlLGlFQUFFLG9DQUFvQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLDZCQUE2QjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQSxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QyxrQ0FBa0MsNkJBQTZCO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssaUJBQWlCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUMsRUFBQzs7Ozs7Ozs7QUNySkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBSUE7O0FBQ08sTUFBTStCLFlBQVksR0FBRztBQUMxQkssTUFBSSxFQUFFLENBQUM7QUFBRUMsU0FBSyxFQUFFO0FBQUVILFdBQUY7QUFBU2Q7QUFBVDtBQUFULEdBQUQsS0FDSmxCLDhDQUFDLENBQUNvQyxJQUFELEVBQU87QUFBRUosU0FBRjtBQUFTZDtBQUFULEdBQVA7QUFGdUIsQ0FBckI7QUFLUCxNQUFNa0IsSUFBSSxHQUFHO0FBQ1hGLE1BQUksRUFBRSxDQUFDO0FBQUNDLFNBQUssRUFBRTtBQUFDSCxXQUFEO0FBQVFkO0FBQVI7QUFBUixHQUFELEtBQStCO0FBQ25DLFVBQU1tQixPQUFPLEdBQUdDLHFFQUFPLENBQUNOLEtBQUssQ0FBQ2xDLEtBQVAsQ0FBdkI7QUFDQSxVQUFNeUMsU0FBUyxHQUFHQyxvREFBWSxDQUFDSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUJDLEVBQXRCLENBQTlCOztBQUNBLFVBQU1DLFFBQVEsR0FBR0MsR0FBRyxJQUFJQSxHQUFHLEtBQUtMLFNBQWhDOztBQUNBaEMsV0FBTyxDQUFDQyxHQUFSLENBQVl3QixLQUFaO0FBRUEsV0FBT2hDLDhDQUFDLENBQUMsWUFBRCxFQUNOLENBQ0VBLDhDQUFDLENBQUMsbUJBQUQsRUFBc0IsQ0FDckJBLDhDQUFDLENBQUNBLDhDQUFDLENBQUNGLEtBQUYsQ0FBUStDLElBQVQsRUFBZTtBQUFDQyxVQUFJLEVBQUVwQiw4Q0FBTSxDQUFDcUIsTUFBUCxDQUFjLENBQUN6RCw2Q0FBSyxDQUFDQyxJQUFOLEVBQUQsQ0FBZCxDQUFQO0FBQXNDeUQsV0FBSyxFQUFFO0FBQTdDLEtBQWYsRUFBb0UsTUFBcEUsQ0FEb0IsRUFFckJoRCw4Q0FBQyxDQUFDQSw4Q0FBQyxDQUFDRixLQUFGLENBQVErQyxJQUFULEVBQWU7QUFBQ0MsVUFBSSxFQUFFcEIsOENBQU0sQ0FBQ3FCLE1BQVAsQ0FBYyxDQUFDekQsNkNBQUssQ0FBQzJELElBQU4sRUFBRCxDQUFkLENBQVA7QUFBc0NELFdBQUssRUFBRTtBQUE3QyxLQUFmLEVBQW9FLE1BQXBFLENBRm9CLENBQXRCLENBREgsRUFLRWhELDhDQUFDLENBQUMsbUJBQUQsRUFBc0JBLDhDQUFDLENBQUN1QyxTQUFELEVBQVk7QUFBQ1AsV0FBRDtBQUFRZCxhQUFSO0FBQWlCbUI7QUFBakIsS0FBWixDQUF2QixDQUxILENBRE0sQ0FBUjtBQVFEO0FBZlUsQ0FBYixDOzs7Ozs7O0FDWGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUJBQXVCO0FBQzlCO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLE9BQU8sc0JBQXNCLGVBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLFNBQVM7QUFDVDtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQsa0JBQWtCLGlEQUFpRDtBQUNuRSxrQkFBa0I7QUFDbEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxrREFBa0QsZUFBZTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsbUJBQW1CLEVBQUU7QUFDekUsd0RBQXdELG1CQUFtQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxRQUFRO0FBQ2I7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNYSxXQUFXLEdBQUc7QUFDbEIzRCxNQUFJLEVBQUUsSUFEWTtBQUVsQjBELE1BQUksRUFBRSxPQUZZO0FBR2xCRSxVQUFRLEVBQUU7QUFIUSxDQUFwQjtBQU1BLE1BQU1BLFFBQVEsR0FBRztBQUNmakIsTUFBSSxFQUFFLE1BQU1sQyw4Q0FBQyxDQUFDLEdBQUQsRUFBTSxXQUFOO0FBREUsQ0FBakI7QUFJTyxNQUFNd0MsWUFBWSxHQUFHO0FBQzFCakQsa0RBRDBCO0FBRTFCMEQsa0RBRjBCO0FBRzFCRTtBQUgwQixDQUFyQjtBQU1BLE1BQU03RCxLQUFLLEdBQUc4RCxpRkFBbUIsQ0FBQyxDQUN2QyxNQUR1QyxFQUV2QyxNQUZ1QyxFQUd2QyxVQUh1QyxDQUFELENBQWpDO0FBTUEsTUFBTS9ELEtBQUssR0FBR1MsS0FBSyxLQUFLO0FBQzdCQSxPQUFLLEVBQUV1RCxLQUFLLENBQUNDLE9BQU4sQ0FBY3hELEtBQWQsSUFBdUJBLEtBQXZCLEdBQStCLENBQUNBLEtBQUQ7QUFEVCxDQUFMLENBQW5CO0FBSUEsTUFBTTRCLE1BQU0sR0FBRzZCLHlGQUFtQixDQUFDO0FBQ3hDdkQscURBRHdDO0FBRXhDa0QsYUFGd0M7QUFHeEN6QixRQUFNLEVBQUU7QUFIZ0MsQ0FBRCxDQUFsQyxDOzs7Ozs7O0FDakNNO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osd0NBQXdDLHlDQUF5QztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsd0NBQXdDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkNBQTZDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQixrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLCtDQUErQyw0QkFBNEI7QUFDM0UsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0EseUNBQXlDLDJCQUEyQjtBQUNwRTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7OztBQ2xTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXdCLElBQUksR0FBRztBQUNsQmYsTUFBSSxFQUFHc0IsS0FBRCxJQUFXO0FBQ2YsUUFBSTtBQUFDeEIsV0FBRDtBQUFRZDtBQUFSLFFBQW1Cc0MsS0FBSyxDQUFDckIsS0FBN0I7QUFDQSxXQUFPbkMsOENBQUMsQ0FBQyxNQUFELEVBQ05BLDhDQUFDLENBQUMsZ0JBQUQsRUFBbUIsMEJBQW5CLENBREssQ0FBUjtBQUVEO0FBTGlCLENBQWIsQzs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNVCxJQUFJLEdBQUc7QUFDbEIyQyxNQUFJLEVBQUUsQ0FBQztBQUFDQyxTQUFLLEVBQUU7QUFBQ0gsV0FBRDtBQUFRZDtBQUFSO0FBQVIsR0FBRCxLQUErQjtBQUNuQyxXQUFPbEIsOENBQUMsQ0FBQyxNQUFELEVBQ05BLDhDQUFDLENBQUMsZ0JBQUQsRUFBbUIsNEJBQW5CLENBREssQ0FBUjtBQUVEO0FBSmlCLENBQWIsQzs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNZSxZQUFZLEdBQUcsQ0FBQztBQUFFMEMsZUFBRjtBQUFpQnpCO0FBQWpCLENBQUQsTUFBK0I7QUFDekRBLE9BQUssRUFBRTtBQUNMMEIsbUJBQWUsRUFBRSxNQUNmQSw2RUFBZSxDQUFDRCxhQUFhLENBQUMzRCxLQUFmLEVBQXNCa0MsS0FBSyxDQUFDbEMsS0FBNUI7QUFGWjtBQURrRCxDQUEvQixDQUFyQjtBQU9BLE1BQU1rQixlQUFlLEdBQUcsQ0FBQztBQUFFZ0I7QUFBRixDQUFELEtBQWU7QUFDNUMsTUFBSUEsS0FBSyxDQUFDMEIsZUFBTixDQUFzQkMsTUFBdEIsQ0FBNkJWLElBQWpDLEVBQXVDO0FBQ3JDLFdBQU87QUFDTFcsVUFBSSxFQUFFLENBQUM7QUFBRTVCLGFBQUY7QUFBUzVDLGFBQVQ7QUFBZ0JRLGNBQWhCO0FBQXdCc0I7QUFBeEIsT0FBRCxLQUF1QztBQUMzQ0EsZUFBTyxDQUFDbkIsT0FBUjtBQUNEO0FBSEksS0FBUDtBQUtEO0FBQ0YsQ0FSTSxDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3N0YXRpYy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwidGFjaHlvbnNcIjtcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcbmltcG9ydCBTdHJlYW0gZnJvbSBcIm1pdGhyaWwvc3RyZWFtXCI7XG5pbXBvcnQgbWVyZ2VyaW5vIGZyb20gXCJtZXJnZXJpbm9cIjtcbmltcG9ydCBtZWlvc2lzTWVyZ2VyaW5vIGZyb20gXCJtZWlvc2lzLXNldHVwL21lcmdlcmlub1wiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IFJvdXRlLCBuYXZUbywgcm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XG5pbXBvcnQgeyByb3V0ZVNlcnZpY2UsIHRvZG9Mb2FkU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5cbmNvbnN0IG1lcmdlID0gbWVyZ2VyaW5vO1xuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmJvZHk7XG5cbmNvbnN0IGFwcCA9IHtcbiAgcGF0Y2g6IG5hdlRvKFtSb3V0ZS5Ib21lKCldKSxcbiAgaW5pdGlhbDogT2JqZWN0LmFzc2lnbih7XG4gICAgXCJ0b2Rvc1wiOiBbXSxcbiAgfSksXG4gIEFjdGlvbnM6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIGNvbnN0IG5hdmlnYXRlVG8gPSByb3V0ZSA9PiB1cGRhdGUobmF2VG8ocm91dGUpKTtcbiAgICBjb25zdCBnZXRUb2RvID0gKCkgPT4ge1xuICAgICAgbS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICB1cmw6IFwiL2FwaS92MS90b2Rvc1wiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgLy9cIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3ZuZC5hcGkranNvblwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIHVwZGF0ZSh7dG9kbzogcmVzdWx0fSk7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgICAgICBcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGVUbyxcbiAgICAgIGdldFRvZG8sXG4gICAgfTtcbiAgfSxcbiAgc2VydmljZXM6IFtyb3V0ZVNlcnZpY2UsIHRvZG9Mb2FkU2VydmljZV1cbn07XG5cbmNvbnN0IHsgdXBkYXRlLCBzdGF0ZXMsIGFjdGlvbnMgfSA9IFxuICBtZWlvc2lzTWVyZ2VyaW5vKHsgc3RyZWFtOiBTdHJlYW0sIG1lcmdlLCBhcHAgfSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBtYWluKTtcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgbS5yb3V0ZS5wcmVmaXggPSBcIlwiO1xuICBtLnJvdXRlKFxuICAgIHJvb3QsIFxuICAgIFwiL2NcIixcbiAgICByb3V0ZXIuTWl0aHJpbFJvdXRlcyh7IHN0YXRlcywgYWN0aW9ucywgQXBwOiBBcHBDb21wb25lbnQgfSlcbiAgKTtcblxuICAvLyBOZWNlc3NhcnkgZm9yIHdoZW4gcHJvZ3JhbW1hdGljYWxseSBuYXZpZ2F0aW5nIHRvIHNvbWV0aGluZ1xuICBzdGF0ZXMubWFwKCgpID0+IG0ucmVkcmF3KCkpO1xuICBzdGF0ZXMubWFwKHN0YXRlID0+IHJvdXRlci5sb2NhdGlvbkJhclN5bmMoc3RhdGUucm91dGUpKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBoeXBlcnNjcmlwdCA9IHJlcXVpcmUoXCIuL2h5cGVyc2NyaXB0XCIpXG52YXIgcmVxdWVzdCA9IHJlcXVpcmUoXCIuL3JlcXVlc3RcIilcbnZhciBtb3VudFJlZHJhdyA9IHJlcXVpcmUoXCIuL21vdW50LXJlZHJhd1wiKVxuXG52YXIgbSA9IGZ1bmN0aW9uIG0oKSB7IHJldHVybiBoeXBlcnNjcmlwdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH1cbm0ubSA9IGh5cGVyc2NyaXB0XG5tLnRydXN0ID0gaHlwZXJzY3JpcHQudHJ1c3Rcbm0uZnJhZ21lbnQgPSBoeXBlcnNjcmlwdC5mcmFnbWVudFxubS5tb3VudCA9IG1vdW50UmVkcmF3Lm1vdW50XG5tLnJvdXRlID0gcmVxdWlyZShcIi4vcm91dGVcIilcbm0ucmVuZGVyID0gcmVxdWlyZShcIi4vcmVuZGVyXCIpXG5tLnJlZHJhdyA9IG1vdW50UmVkcmF3LnJlZHJhd1xubS5yZXF1ZXN0ID0gcmVxdWVzdC5yZXF1ZXN0XG5tLmpzb25wID0gcmVxdWVzdC5qc29ucFxubS5wYXJzZVF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4vcXVlcnlzdHJpbmcvcGFyc2VcIilcbm0uYnVpbGRRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nL2J1aWxkXCIpXG5tLnBhcnNlUGF0aG5hbWUgPSByZXF1aXJlKFwiLi9wYXRobmFtZS9wYXJzZVwiKVxubS5idWlsZFBhdGhuYW1lID0gcmVxdWlyZShcIi4vcGF0aG5hbWUvYnVpbGRcIilcbm0udm5vZGUgPSByZXF1aXJlKFwiLi9yZW5kZXIvdm5vZGVcIilcbm0uUHJvbWlzZVBvbHlmaWxsID0gcmVxdWlyZShcIi4vcHJvbWlzZS9wb2x5ZmlsbFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBoeXBlcnNjcmlwdCA9IHJlcXVpcmUoXCIuL3JlbmRlci9oeXBlcnNjcmlwdFwiKVxuXG5oeXBlcnNjcmlwdC50cnVzdCA9IHJlcXVpcmUoXCIuL3JlbmRlci90cnVzdFwiKVxuaHlwZXJzY3JpcHQuZnJhZ21lbnQgPSByZXF1aXJlKFwiLi9yZW5kZXIvZnJhZ21lbnRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBoeXBlcnNjcmlwdFxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxudmFyIGh5cGVyc2NyaXB0Vm5vZGUgPSByZXF1aXJlKFwiLi9oeXBlcnNjcmlwdFZub2RlXCIpXG5cbnZhciBzZWxlY3RvclBhcnNlciA9IC8oPzooXnwjfFxcLikoW14jXFwuXFxbXFxdXSspKXwoXFxbKC4rPykoPzpcXHMqPVxccyooXCJ8J3wpKCg/OlxcXFxbXCInXFxdXXwuKSo/KVxcNSk/XFxdKS9nXG52YXIgc2VsZWN0b3JDYWNoZSA9IHt9XG52YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHlcblxuZnVuY3Rpb24gaXNFbXB0eShvYmplY3QpIHtcblx0Zm9yICh2YXIga2V5IGluIG9iamVjdCkgaWYgKGhhc093bi5jYWxsKG9iamVjdCwga2V5KSkgcmV0dXJuIGZhbHNlXG5cdHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVTZWxlY3RvcihzZWxlY3Rvcikge1xuXHR2YXIgbWF0Y2gsIHRhZyA9IFwiZGl2XCIsIGNsYXNzZXMgPSBbXSwgYXR0cnMgPSB7fVxuXHR3aGlsZSAobWF0Y2ggPSBzZWxlY3RvclBhcnNlci5leGVjKHNlbGVjdG9yKSkge1xuXHRcdHZhciB0eXBlID0gbWF0Y2hbMV0sIHZhbHVlID0gbWF0Y2hbMl1cblx0XHRpZiAodHlwZSA9PT0gXCJcIiAmJiB2YWx1ZSAhPT0gXCJcIikgdGFnID0gdmFsdWVcblx0XHRlbHNlIGlmICh0eXBlID09PSBcIiNcIikgYXR0cnMuaWQgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiLlwiKSBjbGFzc2VzLnB1c2godmFsdWUpXG5cdFx0ZWxzZSBpZiAobWF0Y2hbM11bMF0gPT09IFwiW1wiKSB7XG5cdFx0XHR2YXIgYXR0clZhbHVlID0gbWF0Y2hbNl1cblx0XHRcdGlmIChhdHRyVmFsdWUpIGF0dHJWYWx1ZSA9IGF0dHJWYWx1ZS5yZXBsYWNlKC9cXFxcKFtcIiddKS9nLCBcIiQxXCIpLnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiXFxcXFwiKVxuXHRcdFx0aWYgKG1hdGNoWzRdID09PSBcImNsYXNzXCIpIGNsYXNzZXMucHVzaChhdHRyVmFsdWUpXG5cdFx0XHRlbHNlIGF0dHJzW21hdGNoWzRdXSA9IGF0dHJWYWx1ZSA9PT0gXCJcIiA/IGF0dHJWYWx1ZSA6IGF0dHJWYWx1ZSB8fCB0cnVlXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIGF0dHJzLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIilcblx0cmV0dXJuIHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdID0ge3RhZzogdGFnLCBhdHRyczogYXR0cnN9XG59XG5cbmZ1bmN0aW9uIGV4ZWNTZWxlY3RvcihzdGF0ZSwgdm5vZGUpIHtcblx0dmFyIGF0dHJzID0gdm5vZGUuYXR0cnNcblx0dmFyIGNoaWxkcmVuID0gVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4odm5vZGUuY2hpbGRyZW4pXG5cdHZhciBoYXNDbGFzcyA9IGhhc093bi5jYWxsKGF0dHJzLCBcImNsYXNzXCIpXG5cdHZhciBjbGFzc05hbWUgPSBoYXNDbGFzcyA/IGF0dHJzLmNsYXNzIDogYXR0cnMuY2xhc3NOYW1lXG5cblx0dm5vZGUudGFnID0gc3RhdGUudGFnXG5cdHZub2RlLmF0dHJzID0gbnVsbFxuXHR2bm9kZS5jaGlsZHJlbiA9IHVuZGVmaW5lZFxuXG5cdGlmICghaXNFbXB0eShzdGF0ZS5hdHRycykgJiYgIWlzRW1wdHkoYXR0cnMpKSB7XG5cdFx0dmFyIG5ld0F0dHJzID0ge31cblxuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpKSBuZXdBdHRyc1trZXldID0gYXR0cnNba2V5XVxuXHRcdH1cblxuXHRcdGF0dHJzID0gbmV3QXR0cnNcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiBzdGF0ZS5hdHRycykge1xuXHRcdGlmIChoYXNPd24uY2FsbChzdGF0ZS5hdHRycywga2V5KSAmJiBrZXkgIT09IFwiY2xhc3NOYW1lXCIgJiYgIWhhc093bi5jYWxsKGF0dHJzLCBrZXkpKXtcblx0XHRcdGF0dHJzW2tleV0gPSBzdGF0ZS5hdHRyc1trZXldXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc05hbWUgIT0gbnVsbCB8fCBzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbCkgYXR0cnMuY2xhc3NOYW1lID1cblx0XHRjbGFzc05hbWUgIT0gbnVsbFxuXHRcdFx0PyBzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbFxuXHRcdFx0XHQ/IFN0cmluZyhzdGF0ZS5hdHRycy5jbGFzc05hbWUpICsgXCIgXCIgKyBTdHJpbmcoY2xhc3NOYW1lKVxuXHRcdFx0XHQ6IGNsYXNzTmFtZVxuXHRcdFx0OiBzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbFxuXHRcdFx0XHQ/IHN0YXRlLmF0dHJzLmNsYXNzTmFtZVxuXHRcdFx0XHQ6IG51bGxcblxuXHRpZiAoaGFzQ2xhc3MpIGF0dHJzLmNsYXNzID0gbnVsbFxuXG5cdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdGlmIChoYXNPd24uY2FsbChhdHRycywga2V5KSAmJiBrZXkgIT09IFwia2V5XCIpIHtcblx0XHRcdHZub2RlLmF0dHJzID0gYXR0cnNcblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXSAhPSBudWxsICYmIGNoaWxkcmVuWzBdLnRhZyA9PT0gXCIjXCIpIHtcblx0XHR2bm9kZS50ZXh0ID0gY2hpbGRyZW5bMF0uY2hpbGRyZW5cblx0fSBlbHNlIHtcblx0XHR2bm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuXG5cdH1cblxuXHRyZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gaHlwZXJzY3JpcHQoc2VsZWN0b3IpIHtcblx0aWYgKHNlbGVjdG9yID09IG51bGwgfHwgdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBzZWxlY3Rvci52aWV3ICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR0aHJvdyBFcnJvcihcIlRoZSBzZWxlY3RvciBtdXN0IGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGNvbXBvbmVudC5cIik7XG5cdH1cblxuXHR2YXIgdm5vZGUgPSBoeXBlcnNjcmlwdFZub2RlLmFwcGx5KDEsIGFyZ3VtZW50cylcblxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0dm5vZGUuY2hpbGRyZW4gPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZS5jaGlsZHJlbilcblx0XHRpZiAoc2VsZWN0b3IgIT09IFwiW1wiKSByZXR1cm4gZXhlY1NlbGVjdG9yKHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdIHx8IGNvbXBpbGVTZWxlY3RvcihzZWxlY3RvciksIHZub2RlKVxuXHR9XG5cblx0dm5vZGUudGFnID0gc2VsZWN0b3Jcblx0cmV0dXJuIHZub2RlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwZXJzY3JpcHRcbiIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIFZub2RlKHRhZywga2V5LCBhdHRycywgY2hpbGRyZW4sIHRleHQsIGRvbSkge1xuXHRyZXR1cm4ge3RhZzogdGFnLCBrZXk6IGtleSwgYXR0cnM6IGF0dHJzLCBjaGlsZHJlbjogY2hpbGRyZW4sIHRleHQ6IHRleHQsIGRvbTogZG9tLCBkb21TaXplOiB1bmRlZmluZWQsIHN0YXRlOiB1bmRlZmluZWQsIGV2ZW50czogdW5kZWZpbmVkLCBpbnN0YW5jZTogdW5kZWZpbmVkfVxufVxuVm5vZGUubm9ybWFsaXplID0gZnVuY3Rpb24obm9kZSkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShub2RlKSkgcmV0dXJuIFZub2RlKFwiW1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4obm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRpZiAobm9kZSA9PSBudWxsIHx8IHR5cGVvZiBub2RlID09PSBcImJvb2xlYW5cIikgcmV0dXJuIG51bGxcblx0aWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSByZXR1cm4gbm9kZVxuXHRyZXR1cm4gVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcobm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxuVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4gPSBmdW5jdGlvbihpbnB1dCkge1xuXHR2YXIgY2hpbGRyZW4gPSBbXVxuXHRpZiAoaW5wdXQubGVuZ3RoKSB7XG5cdFx0dmFyIGlzS2V5ZWQgPSBpbnB1dFswXSAhPSBudWxsICYmIGlucHV0WzBdLmtleSAhPSBudWxsXG5cdFx0Ly8gTm90ZTogdGhpcyBpcyBhICp2ZXJ5KiBwZXJmLXNlbnNpdGl2ZSBjaGVjay5cblx0XHQvLyBGdW4gZmFjdDogbWVyZ2luZyB0aGUgbG9vcCBsaWtlIHRoaXMgaXMgc29tZWhvdyBmYXN0ZXIgdGhhbiBzcGxpdHRpbmdcblx0XHQvLyBpdCwgbm90aWNlYWJseSBzby5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKGlucHV0W2ldICE9IG51bGwgJiYgaW5wdXRbaV0ua2V5ICE9IG51bGwpICE9PSBpc0tleWVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJWbm9kZXMgbXVzdCBlaXRoZXIgYWx3YXlzIGhhdmUga2V5cyBvciBuZXZlciBoYXZlIGtleXMhXCIpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoaWxkcmVuW2ldID0gVm5vZGUubm9ybWFsaXplKGlucHV0W2ldKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hpbGRyZW5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWbm9kZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG4vLyBDYWxsIHZpYSBgaHlwZXJzY3JpcHRWbm9kZS5hcHBseShzdGFydE9mZnNldCwgYXJndW1lbnRzKWBcbi8vXG4vLyBUaGUgcmVhc29uIEkgZG8gaXQgdGhpcyB3YXksIGZvcndhcmRpbmcgdGhlIGFyZ3VtZW50cyBhbmQgcGFzc2luZyB0aGUgc3RhcnRcbi8vIG9mZnNldCBpbiBgdGhpc2AsIGlzIHNvIEkgZG9uJ3QgaGF2ZSB0byBjcmVhdGUgYSB0ZW1wb3JhcnkgYXJyYXkgaW4gYVxuLy8gcGVyZm9ybWFuY2UtY3JpdGljYWwgcGF0aC5cbi8vXG4vLyBJbiBuYXRpdmUgRVM2LCBJJ2QgaW5zdGVhZCBhZGQgYSBmaW5hbCBgLi4uYXJnc2AgcGFyYW1ldGVyIHRvIHRoZVxuLy8gYGh5cGVyc2NyaXB0YCBhbmQgYGZyYWdtZW50YCBmYWN0b3JpZXMgYW5kIGRlZmluZSB0aGlzIGFzXG4vLyBgaHlwZXJzY3JpcHRWbm9kZSguLi5hcmdzKWAsIHNpbmNlIG1vZGVybiBlbmdpbmVzIGRvIG9wdGltaXplIHRoYXQgYXdheS4gQnV0XG4vLyBFUzUgKHdoYXQgTWl0aHJpbCByZXF1aXJlcyB0aGFua3MgdG8gSUUgc3VwcG9ydCkgZG9lc24ndCBnaXZlIG1lIHRoYXQgbHV4dXJ5LFxuLy8gYW5kIGVuZ2luZXMgYXJlbid0IG5lYXJseSBpbnRlbGxpZ2VudCBlbm91Z2ggdG8gZG8gZWl0aGVyIG9mIHRoZXNlOlxuLy9cbi8vIDEuIEVsaWRlIHRoZSBhbGxvY2F0aW9uIGZvciBgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpYCB3aGVuIGl0J3MgcGFzc2VkIHRvXG4vLyAgICBhbm90aGVyIGZ1bmN0aW9uIG9ubHkgdG8gYmUgaW5kZXhlZC5cbi8vIDIuIEVsaWRlIGFuIGBhcmd1bWVudHNgIGFsbG9jYXRpb24gd2hlbiBpdCdzIHBhc3NlZCB0byBhbnkgZnVuY3Rpb24gb3RoZXJcbi8vICAgIHRoYW4gYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAgb3IgYFJlZmxlY3QuYXBwbHlgLlxuLy9cbi8vIEluIEVTNiwgaXQnZCBwcm9iYWJseSBsb29rIGNsb3NlciB0byB0aGlzIChJJ2QgbmVlZCB0byBwcm9maWxlIGl0LCB0aG91Z2gpOlxuLy8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhdHRycywgLi4uY2hpbGRyZW4pIHtcbi8vICAgICBpZiAoYXR0cnMgPT0gbnVsbCB8fCB0eXBlb2YgYXR0cnMgPT09IFwib2JqZWN0XCIgJiYgYXR0cnMudGFnID09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkoYXR0cnMpKSB7XG4vLyAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlblswXSkpIGNoaWxkcmVuID0gY2hpbGRyZW5bMF1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzLCAuLi5jaGlsZHJlbl1cbi8vICAgICAgICAgYXR0cnMgPSB1bmRlZmluZWRcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmIChhdHRycyA9PSBudWxsKSBhdHRycyA9IHt9XG4vLyAgICAgcmV0dXJuIFZub2RlKFwiXCIsIGF0dHJzLmtleSwgYXR0cnMsIGNoaWxkcmVuKVxuLy8gfVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGF0dHJzID0gYXJndW1lbnRzW3RoaXNdLCBzdGFydCA9IHRoaXMgKyAxLCBjaGlsZHJlblxuXG5cdGlmIChhdHRycyA9PSBudWxsKSB7XG5cdFx0YXR0cnMgPSB7fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBhdHRycyAhPT0gXCJvYmplY3RcIiB8fCBhdHRycy50YWcgIT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuXHRcdGF0dHJzID0ge31cblx0XHRzdGFydCA9IHRoaXNcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSBzdGFydCArIDEpIHtcblx0XHRjaGlsZHJlbiA9IGFyZ3VtZW50c1tzdGFydF1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cblx0fSBlbHNlIHtcblx0XHRjaGlsZHJlbiA9IFtdXG5cdFx0d2hpbGUgKHN0YXJ0IDwgYXJndW1lbnRzLmxlbmd0aCkgY2hpbGRyZW4ucHVzaChhcmd1bWVudHNbc3RhcnQrK10pXG5cdH1cblxuXHRyZXR1cm4gVm5vZGUoXCJcIiwgYXR0cnMua2V5LCBhdHRycywgY2hpbGRyZW4pXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaHRtbCkge1xuXHRpZiAoaHRtbCA9PSBudWxsKSBodG1sID0gXCJcIlxuXHRyZXR1cm4gVm5vZGUoXCI8XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBodG1sLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcbnZhciBoeXBlcnNjcmlwdFZub2RlID0gcmVxdWlyZShcIi4vaHlwZXJzY3JpcHRWbm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdm5vZGUgPSBoeXBlcnNjcmlwdFZub2RlLmFwcGx5KDAsIGFyZ3VtZW50cylcblxuXHR2bm9kZS50YWcgPSBcIltcIlxuXHR2bm9kZS5jaGlsZHJlbiA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlLmNoaWxkcmVuKVxuXHRyZXR1cm4gdm5vZGVcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBQcm9taXNlUG9seWZpbGwgPSByZXF1aXJlKFwiLi9wcm9taXNlL3Byb21pc2VcIilcbnZhciBtb3VudFJlZHJhdyA9IHJlcXVpcmUoXCIuL21vdW50LXJlZHJhd1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3JlcXVlc3QvcmVxdWVzdFwiKSh3aW5kb3csIFByb21pc2VQb2x5ZmlsbCwgbW91bnRSZWRyYXcucmVkcmF3KVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3BvbHlmaWxsXCIpXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2Ygd2luZG93LlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHR3aW5kb3cuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR9IGVsc2UgaWYgKCF3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuXHRcdHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUHJvbWlzZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRnbG9iYWwuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR9IGVsc2UgaWYgKCFnbG9iYWwuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuXHRcdGdsb2JhbC5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZVxufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlUG9seWZpbGxcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIlwidXNlIHN0cmljdFwiXG4vKiogQGNvbnN0cnVjdG9yICovXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkpIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgbXVzdCBiZSBjYWxsZWQgd2l0aCBgbmV3YFwiKVxuXHRpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcblxuXHR2YXIgc2VsZiA9IHRoaXMsIHJlc29sdmVycyA9IFtdLCByZWplY3RvcnMgPSBbXSwgcmVzb2x2ZUN1cnJlbnQgPSBoYW5kbGVyKHJlc29sdmVycywgdHJ1ZSksIHJlamVjdEN1cnJlbnQgPSBoYW5kbGVyKHJlamVjdG9ycywgZmFsc2UpXG5cdHZhciBpbnN0YW5jZSA9IHNlbGYuX2luc3RhbmNlID0ge3Jlc29sdmVyczogcmVzb2x2ZXJzLCByZWplY3RvcnM6IHJlamVjdG9yc31cblx0dmFyIGNhbGxBc3luYyA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0ZnVuY3Rpb24gaGFuZGxlcihsaXN0LCBzaG91bGRBYnNvcmIpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIHRoZW5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChzaG91bGRBYnNvcmIgJiYgdmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSAmJiB0eXBlb2YgKHRoZW4gPSB2YWx1ZS50aGVuKSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBzZWxmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCB3LyBpdHNlbGZcIilcblx0XHRcdFx0XHRleGVjdXRlT25jZSh0aGVuLmJpbmQodmFsdWUpKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNhbGxBc3luYyhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICghc2hvdWxkQWJzb3JiICYmIGxpc3QubGVuZ3RoID09PSAwKSBjb25zb2xlLmVycm9yKFwiUG9zc2libGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uOlwiLCB2YWx1ZSlcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykgbGlzdFtpXSh2YWx1ZSlcblx0XHRcdFx0XHRcdHJlc29sdmVycy5sZW5ndGggPSAwLCByZWplY3RvcnMubGVuZ3RoID0gMFxuXHRcdFx0XHRcdFx0aW5zdGFuY2Uuc3RhdGUgPSBzaG91bGRBYnNvcmJcblx0XHRcdFx0XHRcdGluc3RhbmNlLnJldHJ5ID0gZnVuY3Rpb24oKSB7ZXhlY3V0ZSh2YWx1ZSl9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0cmVqZWN0Q3VycmVudChlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBleGVjdXRlT25jZSh0aGVuKSB7XG5cdFx0dmFyIHJ1bnMgPSAwXG5cdFx0ZnVuY3Rpb24gcnVuKGZuKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0aWYgKHJ1bnMrKyA+IDApIHJldHVyblxuXHRcdFx0XHRmbih2YWx1ZSlcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIG9uZXJyb3IgPSBydW4ocmVqZWN0Q3VycmVudClcblx0XHR0cnkge3RoZW4ocnVuKHJlc29sdmVDdXJyZW50KSwgb25lcnJvcil9IGNhdGNoIChlKSB7b25lcnJvcihlKX1cblx0fVxuXG5cdGV4ZWN1dGVPbmNlKGV4ZWN1dG9yKVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0aW9uKSB7XG5cdHZhciBzZWxmID0gdGhpcywgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZVxuXHRmdW5jdGlvbiBoYW5kbGUoY2FsbGJhY2ssIGxpc3QsIG5leHQsIHN0YXRlKSB7XG5cdFx0bGlzdC5wdXNoKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIG5leHQodmFsdWUpXG5cdFx0XHRlbHNlIHRyeSB7cmVzb2x2ZU5leHQoY2FsbGJhY2sodmFsdWUpKX0gY2F0Y2ggKGUpIHtpZiAocmVqZWN0TmV4dCkgcmVqZWN0TmV4dChlKX1cblx0XHR9KVxuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2UucmV0cnkgPT09IFwiZnVuY3Rpb25cIiAmJiBzdGF0ZSA9PT0gaW5zdGFuY2Uuc3RhdGUpIGluc3RhbmNlLnJldHJ5KClcblx0fVxuXHR2YXIgcmVzb2x2ZU5leHQsIHJlamVjdE5leHRcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3Jlc29sdmVOZXh0ID0gcmVzb2x2ZSwgcmVqZWN0TmV4dCA9IHJlamVjdH0pXG5cdGhhbmRsZShvbkZ1bGZpbGxlZCwgaW5zdGFuY2UucmVzb2x2ZXJzLCByZXNvbHZlTmV4dCwgdHJ1ZSksIGhhbmRsZShvblJlamVjdGlvbiwgaW5zdGFuY2UucmVqZWN0b3JzLCByZWplY3ROZXh0LCBmYWxzZSlcblx0cmV0dXJuIHByb21pc2Vcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbihvblJlamVjdGlvbikge1xuXHRyZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2VQb2x5ZmlsbC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGZ1bmN0aW9uKHJlYXNvbikge1xuXHRcdFx0cmV0dXJuIFByb21pc2VQb2x5ZmlsbC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlUG9seWZpbGwucmVqZWN0KHJlYXNvbik7XG5cdFx0XHR9KVxuXHRcdH1cblx0KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpIHJldHVybiB2YWx1ZVxuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlKSB7cmVzb2x2ZSh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3JlamVjdCh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLmFsbCA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHRvdGFsID0gbGlzdC5sZW5ndGgsIGNvdW50ID0gMCwgdmFsdWVzID0gW11cblx0XHRpZiAobGlzdC5sZW5ndGggPT09IDApIHJlc29sdmUoW10pXG5cdFx0ZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdChmdW5jdGlvbihpKSB7XG5cdFx0XHRcdGZ1bmN0aW9uIGNvbnN1bWUodmFsdWUpIHtcblx0XHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdFx0dmFsdWVzW2ldID0gdmFsdWVcblx0XHRcdFx0XHRpZiAoY291bnQgPT09IHRvdGFsKSByZXNvbHZlKHZhbHVlcylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGlzdFtpXSAhPSBudWxsICYmICh0eXBlb2YgbGlzdFtpXSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbGlzdFtpXSA9PT0gXCJmdW5jdGlvblwiKSAmJiB0eXBlb2YgbGlzdFtpXS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRsaXN0W2ldLnRoZW4oY29uc3VtZSwgcmVqZWN0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgY29uc3VtZShsaXN0W2ldKVxuXHRcdFx0fSkoaSlcblx0XHR9XG5cdH0pXG59XG5Qcm9taXNlUG9seWZpbGwucmFjZSA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0W2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuXHRcdH1cblx0fSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlUG9seWZpbGxcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciByZW5kZXIgPSByZXF1aXJlKFwiLi9yZW5kZXJcIilcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9hcGkvbW91bnQtcmVkcmF3XCIpKHJlbmRlciwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBjb25zb2xlKVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9yZW5kZXIvcmVuZGVyXCIpKHdpbmRvdylcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkd2luZG93KSB7XG5cdHZhciAkZG9jID0gJHdpbmRvdyAmJiAkd2luZG93LmRvY3VtZW50XG5cdHZhciBjdXJyZW50UmVkcmF3XG5cblx0dmFyIG5hbWVTcGFjZSA9IHtcblx0XHRzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRtYXRoOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIlxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmFtZVNwYWNlKHZub2RlKSB7XG5cdFx0cmV0dXJuIHZub2RlLmF0dHJzICYmIHZub2RlLmF0dHJzLnhtbG5zIHx8IG5hbWVTcGFjZVt2bm9kZS50YWddXG5cdH1cblxuXHQvL3Nhbml0eSBjaGVjayB0byBkaXNjb3VyYWdlIHBlb3BsZSBmcm9tIGRvaW5nIGB2bm9kZS5zdGF0ZSA9IC4uLmBcblx0ZnVuY3Rpb24gY2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpIHtcblx0XHRpZiAodm5vZGUuc3RhdGUgIT09IG9yaWdpbmFsKSB0aHJvdyBuZXcgRXJyb3IoXCJgdm5vZGUuc3RhdGVgIG11c3Qgbm90IGJlIG1vZGlmaWVkXCIpXG5cdH1cblxuXHQvL05vdGU6IHRoZSBob29rIGlzIHBhc3NlZCBhcyB0aGUgYHRoaXNgIGFyZ3VtZW50IHRvIGFsbG93IHByb3h5aW5nIHRoZVxuXHQvL2FyZ3VtZW50cyB3aXRob3V0IHJlcXVpcmluZyBhIGZ1bGwgYXJyYXkgYWxsb2NhdGlvbiB0byBkbyBzby4gSXQgYWxzb1xuXHQvL3Rha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGUgY3VycmVudCBgdm5vZGVgIGlzIHRoZSBmaXJzdCBhcmd1bWVudCBpblxuXHQvL2FsbCBsaWZlY3ljbGUgbWV0aG9kcy5cblx0ZnVuY3Rpb24gY2FsbEhvb2sodm5vZGUpIHtcblx0XHR2YXIgb3JpZ2luYWwgPSB2bm9kZS5zdGF0ZVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hcHBseShvcmlnaW5hbCwgYXJndW1lbnRzKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbClcblx0XHR9XG5cdH1cblxuXHQvLyBJRTExIChhdCBsZWFzdCkgdGhyb3dzIGFuIFVuc3BlY2lmaWVkRXJyb3Igd2hlbiBhY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB3aGVuXG5cdC8vIGluc2lkZSBhbiBpZnJhbWUuIENhdGNoIGFuZCBzd2FsbG93IHRoaXMgZXJyb3IsIGFuZCBoZWF2eS1oYW5kaWRseSByZXR1cm4gbnVsbC5cblx0ZnVuY3Rpb24gYWN0aXZlRWxlbWVudCgpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuICRkb2MuYWN0aXZlRWxlbWVudFxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHR9XG5cdC8vY3JlYXRlXG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRzd2l0Y2ggKHRhZykge1xuXHRcdFx0XHRjYXNlIFwiI1wiOiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0Y2FzZSBcIjxcIjogY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRjYXNlIFwiW1wiOiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0ZGVmYXVsdDogY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGNyZWF0ZUNvbXBvbmVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZVRleHQocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2bm9kZS5kb20gPSAkZG9jLmNyZWF0ZVRleHROb2RlKHZub2RlLmNoaWxkcmVuKVxuXHRcdGluc2VydE5vZGUocGFyZW50LCB2bm9kZS5kb20sIG5leHRTaWJsaW5nKVxuXHR9XG5cdHZhciBwb3NzaWJsZVBhcmVudHMgPSB7Y2FwdGlvbjogXCJ0YWJsZVwiLCB0aGVhZDogXCJ0YWJsZVwiLCB0Ym9keTogXCJ0YWJsZVwiLCB0Zm9vdDogXCJ0YWJsZVwiLCB0cjogXCJ0Ym9keVwiLCB0aDogXCJ0clwiLCB0ZDogXCJ0clwiLCBjb2xncm91cDogXCJ0YWJsZVwiLCBjb2w6IFwiY29sZ3JvdXBcIn1cblx0ZnVuY3Rpb24gY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgbWF0Y2ggPSB2bm9kZS5jaGlsZHJlbi5tYXRjaCgvXlxccyo/PChcXHcrKS9pbSkgfHwgW11cblx0XHQvLyBub3QgdXNpbmcgdGhlIHByb3BlciBwYXJlbnQgbWFrZXMgdGhlIGNoaWxkIGVsZW1lbnQocykgdmFuaXNoLlxuXHRcdC8vICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXHRcdC8vICAgICBkaXYuaW5uZXJIVE1MID0gXCI8dGQ+aTwvdGQ+PHRkPmo8L3RkPlwiXG5cdFx0Ly8gICAgIGNvbnNvbGUubG9nKGRpdi5pbm5lckhUTUwpXG5cdFx0Ly8gLS0+IFwiaWpcIiwgbm8gPHRkPiBpbiBzaWdodC5cblx0XHR2YXIgdGVtcCA9ICRkb2MuY3JlYXRlRWxlbWVudChwb3NzaWJsZVBhcmVudHNbbWF0Y2hbMV1dIHx8IFwiZGl2XCIpXG5cdFx0aWYgKG5zID09PSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpIHtcblx0XHRcdHRlbXAuaW5uZXJIVE1MID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XCIgKyB2bm9kZS5jaGlsZHJlbiArIFwiPC9zdmc+XCJcblx0XHRcdHRlbXAgPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGVtcC5pbm5lckhUTUwgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gdGVtcC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdC8vIENhcHR1cmUgbm9kZXMgdG8gcmVtb3ZlLCBzbyB3ZSBkb24ndCBjb25mdXNlIHRoZW0uXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBbXVxuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0dmFyIGNoaWxkXG5cdFx0d2hpbGUgKGNoaWxkID0gdGVtcC5maXJzdENoaWxkKSB7XG5cdFx0XHR2bm9kZS5pbnN0YW5jZS5wdXNoKGNoaWxkKVxuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG5cdFx0fVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRjcmVhdGVOb2RlcyhmcmFnbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBmcmFnbWVudC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0dmFyIGF0dHJzID0gdm5vZGUuYXR0cnNcblx0XHR2YXIgaXMgPSBhdHRycyAmJiBhdHRycy5pc1xuXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cblx0XHR2YXIgZWxlbWVudCA9IG5zID9cblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZykgOlxuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnKVxuXHRcdHZub2RlLmRvbSA9IGVsZW1lbnRcblxuXHRcdGlmIChhdHRycyAhPSBudWxsKSB7XG5cdFx0XHRzZXRBdHRycyh2bm9kZSwgYXR0cnMsIG5zKVxuXHRcdH1cblxuXHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblxuXHRcdGlmICghbWF5YmVTZXRDb250ZW50RWRpdGFibGUodm5vZGUpKSB7XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS50ZXh0ICE9PSBcIlwiKSBlbGVtZW50LnRleHRDb250ZW50ID0gdm5vZGUudGV4dFxuXHRcdFx0XHRlbHNlIHZub2RlLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdm5vZGUudGV4dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXVxuXHRcdFx0fVxuXHRcdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdFx0Y3JlYXRlTm9kZXMoZWxlbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcInNlbGVjdFwiICYmIGF0dHJzICE9IG51bGwpIHNldExhdGVTZWxlY3RBdHRycyh2bm9kZSwgYXR0cnMpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKSB7XG5cdFx0dmFyIHNlbnRpbmVsXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcudmlldyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IE9iamVjdC5jcmVhdGUodm5vZGUudGFnKVxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS5zdGF0ZS52aWV3XG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuXG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSB2b2lkIDBcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUudGFnXG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuXG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHRcdHZub2RlLnN0YXRlID0gKHZub2RlLnRhZy5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUudGFnLnByb3RvdHlwZS52aWV3ID09PSBcImZ1bmN0aW9uXCIpID8gbmV3IHZub2RlLnRhZyh2bm9kZSkgOiB2bm9kZS50YWcodm5vZGUpXG5cdFx0fVxuXHRcdGluaXRMaWZlY3ljbGUodm5vZGUuc3RhdGUsIHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgaW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUudmlldywgdm5vZGUpKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSBudWxsXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHRpbml0Q29tcG9uZW50KHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLmluc3RhbmNlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0dm5vZGUuZG9tID0gdm5vZGUuaW5zdGFuY2UuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gdm5vZGUuZG9tICE9IG51bGwgPyB2bm9kZS5pbnN0YW5jZS5kb21TaXplIDogMFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0fVxuXHR9XG5cblx0Ly91cGRhdGVcblx0LyoqXG5cdCAqIEBwYXJhbSB7RWxlbWVudHxGcmFnbWVudH0gcGFyZW50IC0gdGhlIHBhcmVudCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7Vm5vZGVbXSB8IG51bGx9IG9sZCAtIHRoZSBsaXN0IG9mIHZub2RlcyBvZiB0aGUgbGFzdCBgcmVuZGVyKClgIGNhbGwgZm9yXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgcGFydCBvZiB0aGUgdHJlZVxuXHQgKiBAcGFyYW0ge1Zub2RlW10gfCBudWxsfSB2bm9kZXMgLSBhcyBhYm92ZSwgYnV0IGZvciB0aGUgY3VycmVudCBgcmVuZGVyKClgIGNhbGwuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gaG9va3MgLSBhbiBhY2N1bXVsYXRvciBvZiBwb3N0LXJlbmRlciBob29rcyAob25jcmVhdGUvb251cGRhdGUpXG5cdCAqIEBwYXJhbSB7RWxlbWVudCB8IG51bGx9IG5leHRTaWJsaW5nIC0gdGhlIG5leHQgRE9NIG5vZGUgaWYgd2UncmUgZGVhbGluZyB3aXRoIGFcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCB0aGF0IGlzIG5vdCB0aGUgbGFzdCBpdGVtIGluIGl0c1xuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFxuXHQgKiBAcGFyYW0geydzdmcnIHwgJ21hdGgnIHwgU3RyaW5nIHwgbnVsbH0gbnMpIC0gdGhlIGN1cnJlbnQgWE1MIG5hbWVzcGFjZSwgaWYgYW55XG5cdCAqIEByZXR1cm5zIHZvaWRcblx0ICovXG5cdC8vIFRoaXMgZnVuY3Rpb24gZGlmZnMgYW5kIHBhdGNoZXMgbGlzdHMgb2Ygdm5vZGVzLCBib3RoIGtleWVkIGFuZCB1bmtleWVkLlxuXHQvL1xuXHQvLyBXZSB3aWxsOlxuXHQvL1xuXHQvLyAxLiBkZXNjcmliZSBpdHMgZ2VuZXJhbCBzdHJ1Y3R1cmVcblx0Ly8gMi4gZm9jdXMgb24gdGhlIGRpZmYgYWxnb3JpdGhtIG9wdGltaXphdGlvbnNcblx0Ly8gMy4gZGlzY3VzcyBET00gbm9kZSBvcGVyYXRpb25zLlxuXG5cdC8vICMjIE92ZXJ2aWV3OlxuXHQvL1xuXHQvLyBUaGUgdXBkYXRlTm9kZXMoKSBmdW5jdGlvbjpcblx0Ly8gLSBkZWFscyB3aXRoIHRyaXZpYWwgY2FzZXNcblx0Ly8gLSBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGxpc3RzIGFyZSBrZXllZCBvciB1bmtleWVkIGJhc2VkIG9uIHRoZSBmaXJzdCBub24tbnVsbCBub2RlXG5cdC8vICAgb2YgZWFjaCBsaXN0LlxuXHQvLyAtIGRpZmZzIHRoZW0gYW5kIHBhdGNoZXMgdGhlIERPTSBpZiBuZWVkZWQgKHRoYXQncyB0aGUgYnJ1bnQgb2YgdGhlIGNvZGUpXG5cdC8vIC0gbWFuYWdlcyB0aGUgbGVmdG92ZXJzOiBhZnRlciBkaWZmaW5nLCBhcmUgdGhlcmU6XG5cdC8vICAgLSBvbGQgbm9kZXMgbGVmdCB0byByZW1vdmU/XG5cdC8vIFx0IC0gbmV3IG5vZGVzIHRvIGluc2VydD9cblx0Ly8gXHQgZGVhbCB3aXRoIHRoZW0hXG5cdC8vXG5cdC8vIFRoZSBsaXN0cyBhcmUgb25seSBpdGVyYXRlZCBvdmVyIG9uY2UsIHdpdGggYW4gZXhjZXB0aW9uIGZvciB0aGUgbm9kZXMgaW4gYG9sZGAgdGhhdFxuXHQvLyBhcmUgdmlzaXRlZCBpbiB0aGUgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgYW5kIGluIHRoZSBgcmVtb3ZlTm9kZXNgIGxvb3AuXG5cblx0Ly8gIyMgRGlmZmluZ1xuXHQvL1xuXHQvLyBSZWFkaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2NhbHZvaWQvaXZpL2Jsb2IvZGRjMDlkMDZhYmFlZjQ1MjQ4ZTYxMzNmNzA0MGQwMGQzYzZiZTg1My9wYWNrYWdlcy9pdmkvc3JjL3Zkb20vaW1wbGVtZW50YXRpb24udHMjTDYxNy1MODM3XG5cdC8vIG1heSBiZSBnb29kIGZvciBjb250ZXh0IG9uIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS1iYXNlZCBsb2dpYyBmb3IgbW92aW5nIG5vZGVzLlxuXHQvL1xuXHQvLyBJbiBvcmRlciB0byBkaWZmIGtleWVkIGxpc3RzLCBvbmUgaGFzIHRvXG5cdC8vXG5cdC8vIDEpIG1hdGNoIG5vZGVzIGluIGJvdGggbGlzdHMsIHBlciBrZXksIGFuZCB1cGRhdGUgdGhlbSBhY2NvcmRpbmdseVxuXHQvLyAyKSBjcmVhdGUgdGhlIG5vZGVzIHByZXNlbnQgaW4gdGhlIG5ldyBsaXN0LCBidXQgYWJzZW50IGluIHRoZSBvbGQgb25lXG5cdC8vIDMpIHJlbW92ZSB0aGUgbm9kZXMgcHJlc2VudCBpbiB0aGUgb2xkIGxpc3QsIGJ1dCBhYnNlbnQgaW4gdGhlIG5ldyBvbmVcblx0Ly8gNCkgZmlndXJlIG91dCB3aGF0IG5vZGVzIGluIDEpIHRvIG1vdmUgaW4gb3JkZXIgdG8gbWluaW1pemUgdGhlIERPTSBvcGVyYXRpb25zLlxuXHQvL1xuXHQvLyBUbyBhY2hpZXZlIDEpIG9uZSBjYW4gY3JlYXRlIGEgZGljdGlvbmFyeSBvZiBrZXlzID0+IGluZGV4IChmb3IgdGhlIG9sZCBsaXN0KSwgdGhlbiBpdGVyYXRlXG5cdC8vIG92ZXIgdGhlIG5ldyBsaXN0IGFuZCBmb3IgZWFjaCBuZXcgdm5vZGUsIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdm5vZGUgaW4gdGhlIG9sZCBsaXN0IHVzaW5nXG5cdC8vIHRoZSBtYXAuXG5cdC8vIDIpIGlzIGFjaGlldmVkIGluIHRoZSBzYW1lIHN0ZXA6IGlmIGEgbmV3IG5vZGUgaGFzIG5vIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIG1hcCwgaXQgaXMgbmV3XG5cdC8vIGFuZCBtdXN0IGJlIGNyZWF0ZWQuXG5cdC8vIEZvciB0aGUgcmVtb3ZhbHMsIHdlIGFjdHVhbGx5IHJlbW92ZSB0aGUgbm9kZXMgdGhhdCBoYXZlIGJlZW4gdXBkYXRlZCBmcm9tIHRoZSBvbGQgbGlzdC5cblx0Ly8gVGhlIG5vZGVzIHRoYXQgcmVtYWluIGluIHRoYXQgbGlzdCBhZnRlciAxKSBhbmQgMikgaGF2ZSBiZWVuIHBlcmZvcm1lZCBjYW4gYmUgc2FmZWx5IHJlbW92ZWQuXG5cdC8vIFRoZSBmb3VydGggc3RlcCBpcyBhIGJpdCBtb3JlIGNvbXBsZXggYW5kIHJlbGllcyBvbiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIChMSVMpXG5cdC8vIGFsZ29yaXRobS5cblx0Ly9cblx0Ly8gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBpcyB0aGUgbGlzdCBvZiBub2RlcyB0aGF0IGNhbiByZW1haW4gaW4gcGxhY2UuIEltYWdpbmUgZ29pbmdcblx0Ly8gZnJvbSBgMSwyLDMsNCw1YCB0byBgNCw1LDEsMiwzYCB3aGVyZSB0aGUgbnVtYmVycyBhcmUgbm90IG5lY2Vzc2FyaWx5IHRoZSBrZXlzLCBidXQgdGhlIGluZGljZXNcblx0Ly8gY29ycmVzcG9uZGluZyB0byB0aGUga2V5ZWQgbm9kZXMgaW4gdGhlIG9sZCBsaXN0IChrZXllZCBub2RlcyBgZSxkLGMsYixhYCA9PiBgYixhLGUsZCxjYCB3b3VsZFxuXHQvLyAgbWF0Y2ggdGhlIGFib3ZlIGxpc3RzLCBmb3IgZXhhbXBsZSkuXG5cdC8vXG5cdC8vIEluIHRoZXJlIGFyZSB0d28gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZXM6IGA0LDVgIGFuZCBgMSwyLDNgLCB0aGUgbGF0dGVyIGJlaW5nIHRoZSBsb25nZXN0LiBXZVxuXHQvLyBjYW4gdXBkYXRlIHRob3NlIG5vZGVzIHdpdGhvdXQgbW92aW5nIHRoZW0sIGFuZCBvbmx5IGNhbGwgYGluc2VydE5vZGVgIG9uIGA0YCBhbmQgYDVgLlxuXHQvL1xuXHQvLyBAbG9jYWx2b2lkIGFkYXB0ZWQgdGhlIGFsZ28gdG8gYWxzbyBzdXBwb3J0IG5vZGUgZGVsZXRpb25zIGFuZCBpbnNlcnRpb25zICh0aGUgYGxpc2AgaXMgYWN0dWFsbHlcblx0Ly8gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSAqb2Ygb2xkIG5vZGVzIHN0aWxsIHByZXNlbnQgaW4gdGhlIG5ldyBsaXN0KikuXG5cdC8vXG5cdC8vIEl0IGlzIGEgZ2VuZXJhbCBhbGdvcml0aG0gdGhhdCBpcyBmaXJlcHJvb2YgaW4gYWxsIGNpcmN1bXN0YW5jZXMsIGJ1dCBpdCByZXF1aXJlcyB0aGUgYWxsb2NhdGlvblxuXHQvLyBhbmQgdGhlIGNvbnN0cnVjdGlvbiBvZiBhIGBrZXkgPT4gb2xkSW5kZXhgIG1hcCwgYW5kIHRocmVlIGFycmF5cyAob25lIHdpdGggYG5ld0luZGV4ID0+IG9sZEluZGV4YCxcblx0Ly8gdGhlIGBMSVNgIGFuZCBhIHRlbXBvcmFyeSBvbmUgdG8gY3JlYXRlIHRoZSBMSVMpLlxuXHQvL1xuXHQvLyBTbyB3ZSBjaGVhdCB3aGVyZSB3ZSBjYW46IGlmIHRoZSB0YWlscyBvZiB0aGUgbGlzdHMgYXJlIGlkZW50aWNhbCwgdGhleSBhcmUgZ3VhcmFudGVlZCB0byBiZSBwYXJ0IG9mXG5cdC8vIHRoZSBMSVMgYW5kIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgbW92aW5nIHRoZW0uXG5cdC8vXG5cdC8vIElmIHR3byBub2RlcyBhcmUgc3dhcHBlZCwgdGhleSBhcmUgZ3VhcmFudGVlZCBub3QgdG8gYmUgcGFydCBvZiB0aGUgTElTLCBhbmQgbXVzdCBiZSBtb3ZlZCAod2l0aFxuXHQvLyB0aGUgZXhjZXB0aW9uIG9mIHRoZSBsYXN0IG5vZGUgaWYgdGhlIGxpc3QgaXMgZnVsbHkgcmV2ZXJzZWQpLlxuXHQvL1xuXHQvLyAjIyBGaW5kaW5nIHRoZSBuZXh0IHNpYmxpbmcuXG5cdC8vXG5cdC8vIGB1cGRhdGVOb2RlKClgIGFuZCBgY3JlYXRlTm9kZSgpYCBleHBlY3QgYSBuZXh0U2libGluZyBwYXJhbWV0ZXIgdG8gcGVyZm9ybSBET00gb3BlcmF0aW9ucy5cblx0Ly8gV2hlbiB0aGUgbGlzdCBpcyBiZWluZyB0cmF2ZXJzZWQgdG9wLWRvd24sIGF0IGFueSBpbmRleCwgdGhlIERPTSBub2RlcyB1cCB0byB0aGUgcHJldmlvdXNcblx0Ly8gdm5vZGUgcmVmbGVjdCB0aGUgY29udGVudCBvZiB0aGUgbmV3IGxpc3QsIHdoZXJlYXMgdGhlIHJlc3Qgb2YgdGhlIERPTSBub2RlcyByZWZsZWN0IHRoZSBvbGRcblx0Ly8gbGlzdC4gVGhlIG5leHQgc2libGluZyBtdXN0IGJlIGxvb2tlZCBmb3IgaW4gdGhlIG9sZCBsaXN0IHVzaW5nIGBnZXROZXh0U2libGluZyguLi4gb2xkU3RhcnQgKyAxIC4uLilgLlxuXHQvL1xuXHQvLyBJbiB0aGUgb3RoZXIgc2NlbmFyaW9zIChzd2FwcywgdXB3YXJkcyB0cmF2ZXJzYWwsIG1hcC1iYXNlZCBkaWZmKSxcblx0Ly8gdGhlIG5ldyB2bm9kZXMgbGlzdCBpcyB0cmF2ZXJzZWQgdXB3YXJkcy4gVGhlIERPTSBub2RlcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBsaXN0IHJlZmxlY3QgdGhlXG5cdC8vIGJvdHRvbSBwYXJ0IG9mIHRoZSBuZXcgdm5vZGVzIGxpc3QsIGFuZCB3ZSBjYW4gdXNlIHRoZSBgdi5kb21gICB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgbm9kZVxuXHQvLyBhcyB0aGUgbmV4dCBzaWJsaW5nIChjYWNoZWQgaW4gdGhlIGBuZXh0U2libGluZ2AgdmFyaWFibGUpLlxuXG5cblx0Ly8gIyMgRE9NIG5vZGUgbW92ZXNcblx0Ly9cblx0Ly8gSW4gbW9zdCBzY2VuYXJpb3MgYHVwZGF0ZU5vZGUoKWAgYW5kIGBjcmVhdGVOb2RlKClgIHBlcmZvcm0gdGhlIERPTSBvcGVyYXRpb25zLiBIb3dldmVyLFxuXHQvLyB0aGlzIGlzIG5vdCB0aGUgY2FzZSBpZiB0aGUgbm9kZSBtb3ZlZCAoc2Vjb25kIGFuZCBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBhbGdvKS4gV2UgbW92ZVxuXHQvLyB0aGUgb2xkIERPTSBub2RlcyBiZWZvcmUgdXBkYXRlTm9kZSBydW5zIGJlY2F1c2UgaXQgZW5hYmxlcyB1cyB0byB1c2UgdGhlIGNhY2hlZCBgbmV4dFNpYmxpbmdgXG5cdC8vIHZhcmlhYmxlIHJhdGhlciB0aGFuIGZldGNoaW5nIGl0IHVzaW5nIGBnZXROZXh0U2libGluZygpYC5cblx0Ly9cblx0Ly8gVGhlIGZvdXJ0aCBwYXJ0IG9mIHRoZSBkaWZmIGN1cnJlbnRseSBpbnNlcnRzIG5vZGVzIHVuY29uZGl0aW9uYWxseSwgbGVhZGluZyB0byBpc3N1ZXNcblx0Ly8gbGlrZSAjMTc5MSBhbmQgIzE5OTkuIFdlIG5lZWQgdG8gYmUgc21hcnRlciBhYm91dCB0aG9zZSBzaXR1YXRpb25zIHdoZXJlIGFkamFzY2VudCBvbGRcblx0Ly8gbm9kZXMgcmVtYWluIHRvZ2V0aGVyIGluIHRoZSBuZXcgbGlzdCBpbiBhIHdheSB0aGF0IGlzbid0IGNvdmVyZWQgYnkgcGFydHMgb25lIGFuZFxuXHQvLyB0aHJlZSBvZiB0aGUgZGlmZiBhbGdvLlxuXG5cdGZ1bmN0aW9uIHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLCB2bm9kZXMsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHRpZiAob2xkID09PSB2bm9kZXMgfHwgb2xkID09IG51bGwgJiYgdm5vZGVzID09IG51bGwpIHJldHVyblxuXHRcdGVsc2UgaWYgKG9sZCA9PSBudWxsIHx8IG9sZC5sZW5ndGggPT09IDApIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCAwLCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdGVsc2UgaWYgKHZub2RlcyA9PSBudWxsIHx8IHZub2Rlcy5sZW5ndGggPT09IDApIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCAwLCBvbGQubGVuZ3RoKVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGlzT2xkS2V5ZWQgPSBvbGRbMF0gIT0gbnVsbCAmJiBvbGRbMF0ua2V5ICE9IG51bGxcblx0XHRcdHZhciBpc0tleWVkID0gdm5vZGVzWzBdICE9IG51bGwgJiYgdm5vZGVzWzBdLmtleSAhPSBudWxsXG5cdFx0XHR2YXIgc3RhcnQgPSAwLCBvbGRTdGFydCA9IDBcblx0XHRcdGlmICghaXNPbGRLZXllZCkgd2hpbGUgKG9sZFN0YXJ0IDwgb2xkLmxlbmd0aCAmJiBvbGRbb2xkU3RhcnRdID09IG51bGwpIG9sZFN0YXJ0Kytcblx0XHRcdGlmICghaXNLZXllZCkgd2hpbGUgKHN0YXJ0IDwgdm5vZGVzLmxlbmd0aCAmJiB2bm9kZXNbc3RhcnRdID09IG51bGwpIHN0YXJ0Kytcblx0XHRcdGlmIChpc0tleWVkID09PSBudWxsICYmIGlzT2xkS2V5ZWQgPT0gbnVsbCkgcmV0dXJuIC8vIGJvdGggbGlzdHMgYXJlIGZ1bGwgb2YgbnVsbHNcblx0XHRcdGlmIChpc09sZEtleWVkICE9PSBpc0tleWVkKSB7XG5cdFx0XHRcdHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBvbGRTdGFydCwgb2xkLmxlbmd0aClcblx0XHRcdFx0Y3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0fSBlbHNlIGlmICghaXNLZXllZCkge1xuXHRcdFx0XHQvLyBEb24ndCBpbmRleCBwYXN0IHRoZSBlbmQgb2YgZWl0aGVyIGxpc3QgKGNhdXNlcyBkZW9wdHMpLlxuXHRcdFx0XHR2YXIgY29tbW9uTGVuZ3RoID0gb2xkLmxlbmd0aCA8IHZub2Rlcy5sZW5ndGggPyBvbGQubGVuZ3RoIDogdm5vZGVzLmxlbmd0aFxuXHRcdFx0XHQvLyBSZXdpbmQgaWYgbmVjZXNzYXJ5IHRvIHRoZSBmaXJzdCBub24tbnVsbCBpbmRleCBvbiBlaXRoZXIgc2lkZS5cblx0XHRcdFx0Ly8gV2UgY291bGQgYWx0ZXJuYXRpdmVseSBlaXRoZXIgZXhwbGljaXRseSBjcmVhdGUgb3IgcmVtb3ZlIG5vZGVzIHdoZW4gYHN0YXJ0ICE9PSBvbGRTdGFydGBcblx0XHRcdFx0Ly8gYnV0IHRoYXQgd291bGQgYmUgb3B0aW1pemluZyBmb3Igc3BhcnNlIGxpc3RzIHdoaWNoIGFyZSBtb3JlIHJhcmUgdGhhbiBkZW5zZSBvbmVzLlxuXHRcdFx0XHRzdGFydCA9IHN0YXJ0IDwgb2xkU3RhcnQgPyBzdGFydCA6IG9sZFN0YXJ0XG5cdFx0XHRcdGZvciAoOyBzdGFydCA8IGNvbW1vbkxlbmd0aDsgc3RhcnQrKykge1xuXHRcdFx0XHRcdG8gPSBvbGRbc3RhcnRdXG5cdFx0XHRcdFx0diA9IHZub2Rlc1tzdGFydF1cblx0XHRcdFx0XHRpZiAobyA9PT0gdiB8fCBvID09IG51bGwgJiYgdiA9PSBudWxsKSBjb250aW51ZVxuXHRcdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkgY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgZ2V0TmV4dFNpYmxpbmcob2xkLCBzdGFydCArIDEsIG5leHRTaWJsaW5nKSlcblx0XHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIHJlbW92ZU5vZGUocGFyZW50LCBvKVxuXHRcdFx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIHN0YXJ0ICsgMSwgbmV4dFNpYmxpbmcpLCBucylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob2xkLmxlbmd0aCA+IGNvbW1vbkxlbmd0aCkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIHN0YXJ0LCBvbGQubGVuZ3RoKVxuXHRcdFx0XHRpZiAodm5vZGVzLmxlbmd0aCA+IGNvbW1vbkxlbmd0aCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8ga2V5ZWQgZGlmZlxuXHRcdFx0XHR2YXIgb2xkRW5kID0gb2xkLmxlbmd0aCAtIDEsIGVuZCA9IHZub2Rlcy5sZW5ndGggLSAxLCBtYXAsIG8sIHYsIG9lLCB2ZSwgdG9wU2libGluZ1xuXG5cdFx0XHRcdC8vIGJvdHRvbS11cFxuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdG9lID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tlbmRdXG5cdFx0XHRcdFx0aWYgKG9lLmtleSAhPT0gdmUua2V5KSBicmVha1xuXHRcdFx0XHRcdGlmIChvZSAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdG9sZEVuZC0tLCBlbmQtLVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHRvcC1kb3duXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0byA9IG9sZFtvbGRTdGFydF1cblx0XHRcdFx0XHR2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHRcdGlmIChvLmtleSAhPT0gdi5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0b2xkU3RhcnQrKywgc3RhcnQrK1xuXHRcdFx0XHRcdGlmIChvICE9PSB2KSB1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkU3RhcnQsIG5leHRTaWJsaW5nKSwgbnMpXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc3dhcHMgYW5kIGxpc3QgcmV2ZXJzYWxzXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKHN0YXJ0ID09PSBlbmQpIGJyZWFrXG5cdFx0XHRcdFx0aWYgKG8ua2V5ICE9PSB2ZS5rZXkgfHwgb2Uua2V5ICE9PSB2LmtleSkgYnJlYWtcblx0XHRcdFx0XHR0b3BTaWJsaW5nID0gZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0bW92ZU5vZGVzKHBhcmVudCwgb2UsIHRvcFNpYmxpbmcpXG5cdFx0XHRcdFx0aWYgKG9lICE9PSB2KSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHYsIGhvb2tzLCB0b3BTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAoKytzdGFydCA8PSAtLWVuZCkgbW92ZU5vZGVzKHBhcmVudCwgbywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0aWYgKG8gIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgbywgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdG9sZFN0YXJ0Kys7IG9sZEVuZC0tXG5cdFx0XHRcdFx0b2UgPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdHZlID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0XHRvID0gb2xkW29sZFN0YXJ0XVxuXHRcdFx0XHRcdHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gYm90dG9tIHVwIG9uY2UgYWdhaW5cblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAob2Uua2V5ICE9PSB2ZS5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0aWYgKG9lICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0b2xkRW5kLS0sIGVuZC0tXG5cdFx0XHRcdFx0b2UgPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdHZlID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RhcnQgPiBlbmQpIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSlcblx0XHRcdFx0ZWxzZSBpZiAob2xkU3RhcnQgPiBvbGRFbmQpIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kICsgMSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaW5zcGlyZWQgYnkgaXZpIGh0dHBzOi8vZ2l0aHViLmNvbS9pdmlqcy9pdmkvIGJ5IEJvcmlzIEthdWxcblx0XHRcdFx0XHR2YXIgb3JpZ2luYWxOZXh0U2libGluZyA9IG5leHRTaWJsaW5nLCB2bm9kZXNMZW5ndGggPSBlbmQgLSBzdGFydCArIDEsIG9sZEluZGljZXMgPSBuZXcgQXJyYXkodm5vZGVzTGVuZ3RoKSwgbGk9MCwgaT0wLCBwb3MgPSAyMTQ3NDgzNjQ3LCBtYXRjaGVkID0gMCwgbWFwLCBsaXNJbmRpY2VzXG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHZub2Rlc0xlbmd0aDsgaSsrKSBvbGRJbmRpY2VzW2ldID0gLTFcblx0XHRcdFx0XHRmb3IgKGkgPSBlbmQ7IGkgPj0gc3RhcnQ7IGktLSkge1xuXHRcdFx0XHRcdFx0aWYgKG1hcCA9PSBudWxsKSBtYXAgPSBnZXRLZXlNYXAob2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSlcblx0XHRcdFx0XHRcdHZlID0gdm5vZGVzW2ldXG5cdFx0XHRcdFx0XHR2YXIgb2xkSW5kZXggPSBtYXBbdmUua2V5XVxuXHRcdFx0XHRcdFx0aWYgKG9sZEluZGV4ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0cG9zID0gKG9sZEluZGV4IDwgcG9zKSA/IG9sZEluZGV4IDogLTEgLy8gYmVjb21lcyAtMSBpZiBub2RlcyB3ZXJlIHJlLW9yZGVyZWRcblx0XHRcdFx0XHRcdFx0b2xkSW5kaWNlc1tpLXN0YXJ0XSA9IG9sZEluZGV4XG5cdFx0XHRcdFx0XHRcdG9lID0gb2xkW29sZEluZGV4XVxuXHRcdFx0XHRcdFx0XHRvbGRbb2xkSW5kZXhdID0gbnVsbFxuXHRcdFx0XHRcdFx0XHRpZiAob2UgIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQrK1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXh0U2libGluZyA9IG9yaWdpbmFsTmV4dFNpYmxpbmdcblx0XHRcdFx0XHRpZiAobWF0Y2hlZCAhPT0gb2xkRW5kIC0gb2xkU3RhcnQgKyAxKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgb2xkU3RhcnQsIG9sZEVuZCArIDEpXG5cdFx0XHRcdFx0aWYgKG1hdGNoZWQgPT09IDApIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kICsgMSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChwb3MgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHRoZSBpbmRpY2VzIG9mIHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcyB0aGF0IGFyZSBwYXJ0IG9mIHRoZVxuXHRcdFx0XHRcdFx0XHQvLyBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgaW4gdGhlIG9sZEluZGljZXMgbGlzdFxuXHRcdFx0XHRcdFx0XHRsaXNJbmRpY2VzID0gbWFrZUxpc0luZGljZXMob2xkSW5kaWNlcylcblx0XHRcdFx0XHRcdFx0bGkgPSBsaXNJbmRpY2VzLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gZW5kOyBpID49IHN0YXJ0OyBpLS0pIHtcblx0XHRcdFx0XHRcdFx0XHR2ID0gdm5vZGVzW2ldXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9sZEluZGljZXNbaS1zdGFydF0gPT09IC0xKSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChsaXNJbmRpY2VzW2xpXSA9PT0gaSAtIHN0YXJ0KSBsaS0tXG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlIG1vdmVOb2RlcyhwYXJlbnQsIHYsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAodi5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2bm9kZXNbaV0uZG9tXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IGVuZDsgaSA+PSBzdGFydDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRcdFx0diA9IHZub2Rlc1tpXVxuXHRcdFx0XHRcdFx0XHRcdGlmIChvbGRJbmRpY2VzW2ktc3RhcnRdID09PSAtMSkgY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHYuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdm5vZGVzW2ldLmRvbVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU5vZGUocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dmFyIG9sZFRhZyA9IG9sZC50YWcsIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmIChvbGRUYWcgPT09IHRhZykge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBvbGQuc3RhdGVcblx0XHRcdHZub2RlLmV2ZW50cyA9IG9sZC5ldmVudHNcblx0XHRcdGlmIChzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkpIHJldHVyblxuXHRcdFx0aWYgKHR5cGVvZiBvbGRUYWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHtcblx0XHRcdFx0XHR1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKG9sZFRhZykge1xuXHRcdFx0XHRcdGNhc2UgXCIjXCI6IHVwZGF0ZVRleHQob2xkLCB2bm9kZSk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIjxcIjogdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5zLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIltcIjogdXBkYXRlRnJhZ21lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKTsgYnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OiB1cGRhdGVFbGVtZW50KG9sZCwgdm5vZGUsIGhvb2tzLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlbW92ZU5vZGUocGFyZW50LCBvbGQpXG5cdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVRleHQob2xkLCB2bm9kZSkge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4udG9TdHJpbmcoKSAhPT0gdm5vZGUuY2hpbGRyZW4udG9TdHJpbmcoKSkge1xuXHRcdFx0b2xkLmRvbS5ub2RlVmFsdWUgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5zLCBuZXh0U2libGluZykge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4gIT09IHZub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRyZW1vdmVIVE1MKHBhcmVudCwgb2xkKVxuXHRcdFx0Y3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0XHR2bm9kZS5pbnN0YW5jZSA9IG9sZC5pbnN0YW5jZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHR1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0dmFyIGRvbVNpemUgPSAwLCBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0dm5vZGUuZG9tID0gbnVsbFxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkLmRvbSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHZub2RlLmRvbSA9PSBudWxsKSB2bm9kZS5kb20gPSBjaGlsZC5kb21cblx0XHRcdFx0XHRkb21TaXplICs9IGNoaWxkLmRvbVNpemUgfHwgMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9tU2l6ZSAhPT0gMSkgdm5vZGUuZG9tU2l6ZSA9IGRvbVNpemVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCBob29rcywgbnMpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblxuXHRcdGlmICh2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikge1xuXHRcdFx0aWYgKHZub2RlLmF0dHJzID09IG51bGwpIHZub2RlLmF0dHJzID0ge31cblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0dm5vZGUuYXR0cnMudmFsdWUgPSB2bm9kZS50ZXh0IC8vRklYTUUgaGFuZGxlIG11bHRpcGxlIGNoaWxkcmVuXG5cdFx0XHRcdHZub2RlLnRleHQgPSB1bmRlZmluZWRcblx0XHRcdH1cblx0XHR9XG5cdFx0dXBkYXRlQXR0cnModm5vZGUsIG9sZC5hdHRycywgdm5vZGUuYXR0cnMsIG5zKVxuXHRcdGlmICghbWF5YmVTZXRDb250ZW50RWRpdGFibGUodm5vZGUpKSB7XG5cdFx0XHRpZiAob2xkLnRleHQgIT0gbnVsbCAmJiB2bm9kZS50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPT0gXCJcIikge1xuXHRcdFx0XHRpZiAob2xkLnRleHQudG9TdHJpbmcoKSAhPT0gdm5vZGUudGV4dC50b1N0cmluZygpKSBvbGQuZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdm5vZGUudGV4dFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChvbGQudGV4dCAhPSBudWxsKSBvbGQuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBvbGQudGV4dCwgdW5kZWZpbmVkLCBvbGQuZG9tLmZpcnN0Q2hpbGQpXVxuXHRcdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdFx0dXBkYXRlTm9kZXMoZWxlbWVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgaG9va3MsIG51bGwsIG5zKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUoY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS52aWV3LCB2bm9kZSkpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHR1cGRhdGVMaWZlY3ljbGUodm5vZGUuc3RhdGUsIHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgdXBkYXRlTGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdGlmIChvbGQuaW5zdGFuY2UgPT0gbnVsbCkgY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLmluc3RhbmNlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0ZWxzZSB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLmluc3RhbmNlLCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmluc3RhbmNlLmRvbVNpemVcblx0XHR9XG5cdFx0ZWxzZSBpZiAob2xkLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdHJlbW92ZU5vZGUocGFyZW50LCBvbGQuaW5zdGFuY2UpXG5cdFx0XHR2bm9kZS5kb20gPSB1bmRlZmluZWRcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGdldEtleU1hcCh2bm9kZXMsIHN0YXJ0LCBlbmQpIHtcblx0XHR2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRcdGZvciAoOyBzdGFydCA8IGVuZDsgc3RhcnQrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGtleSA9IHZub2RlLmtleVxuXHRcdFx0XHRpZiAoa2V5ICE9IG51bGwpIG1hcFtrZXldID0gc3RhcnRcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG1hcFxuXHR9XG5cdC8vIExpZnRlZCBmcm9tIGl2aSBodHRwczovL2dpdGh1Yi5jb20vaXZpanMvaXZpL1xuXHQvLyB0YWtlcyBhIGxpc3Qgb2YgdW5pcXVlIG51bWJlcnMgKC0xIGlzIHNwZWNpYWwgYW5kIGNhblxuXHQvLyBvY2N1ciBtdWx0aXBsZSB0aW1lcykgYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgaW5kaWNlc1xuXHQvLyBvZiB0aGUgaXRlbXMgdGhhdCBhcmUgcGFydCBvZiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nXG5cdC8vIHN1YnNlcXVlY2Vcblx0dmFyIGxpc1RlbXAgPSBbXVxuXHRmdW5jdGlvbiBtYWtlTGlzSW5kaWNlcyhhKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFswXVxuXHRcdHZhciB1ID0gMCwgdiA9IDAsIGkgPSAwXG5cdFx0dmFyIGlsID0gbGlzVGVtcC5sZW5ndGggPSBhLmxlbmd0aFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaWw7IGkrKykgbGlzVGVtcFtpXSA9IGFbaV1cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGlsOyArK2kpIHtcblx0XHRcdGlmIChhW2ldID09PSAtMSkgY29udGludWVcblx0XHRcdHZhciBqID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXVxuXHRcdFx0aWYgKGFbal0gPCBhW2ldKSB7XG5cdFx0XHRcdGxpc1RlbXBbaV0gPSBqXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGkpXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHR9XG5cdFx0XHR1ID0gMFxuXHRcdFx0diA9IHJlc3VsdC5sZW5ndGggLSAxXG5cdFx0XHR3aGlsZSAodSA8IHYpIHtcblx0XHRcdFx0Ly8gRmFzdCBpbnRlZ2VyIGF2ZXJhZ2Ugd2l0aG91dCBvdmVyZmxvdy5cblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0dmFyIGMgPSAodSA+Pj4gMSkgKyAodiA+Pj4gMSkgKyAodSAmIHYgJiAxKVxuXHRcdFx0XHRpZiAoYVtyZXN1bHRbY11dIDwgYVtpXSkge1xuXHRcdFx0XHRcdHUgPSBjICsgMVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHYgPSBjXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChhW2ldIDwgYVtyZXN1bHRbdV1dKSB7XG5cdFx0XHRcdGlmICh1ID4gMCkgbGlzVGVtcFtpXSA9IHJlc3VsdFt1IC0gMV1cblx0XHRcdFx0cmVzdWx0W3VdID0gaVxuXHRcdFx0fVxuXHRcdH1cblx0XHR1ID0gcmVzdWx0Lmxlbmd0aFxuXHRcdHYgPSByZXN1bHRbdSAtIDFdXG5cdFx0d2hpbGUgKHUtLSA+IDApIHtcblx0XHRcdHJlc3VsdFt1XSA9IHZcblx0XHRcdHYgPSBsaXNUZW1wW3ZdXG5cdFx0fVxuXHRcdGxpc1RlbXAubGVuZ3RoID0gMFxuXHRcdHJldHVybiByZXN1bHRcblx0fVxuXG5cdGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKHZub2RlcywgaSwgbmV4dFNpYmxpbmcpIHtcblx0XHRmb3IgKDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHZub2Rlc1tpXSAhPSBudWxsICYmIHZub2Rlc1tpXS5kb20gIT0gbnVsbCkgcmV0dXJuIHZub2Rlc1tpXS5kb21cblx0XHR9XG5cdFx0cmV0dXJuIG5leHRTaWJsaW5nXG5cdH1cblxuXHQvLyBUaGlzIGNvdmVycyBhIHJlYWxseSBzcGVjaWZpYyBlZGdlIGNhc2U6XG5cdC8vIC0gUGFyZW50IG5vZGUgaXMga2V5ZWQgYW5kIGNvbnRhaW5zIGNoaWxkXG5cdC8vIC0gQ2hpbGQgaXMgcmVtb3ZlZCwgcmV0dXJucyB1bnJlc29sdmVkIHByb21pc2UgaW4gYG9uYmVmb3JlcmVtb3ZlYFxuXHQvLyAtIFBhcmVudCBub2RlIGlzIG1vdmVkIGluIGtleWVkIGRpZmZcblx0Ly8gLSBSZW1haW5pbmcgY2hpbGRyZW4gc3RpbGwgbmVlZCBtb3ZlZCBhcHByb3ByaWF0ZWx5XG5cdC8vXG5cdC8vIElkZWFsbHksIEknZCB0cmFjayByZW1vdmVkIG5vZGVzIGFzIHdlbGwsIGJ1dCB0aGF0IGludHJvZHVjZXMgYSBsb3QgbW9yZVxuXHQvLyBjb21wbGV4aXR5IGFuZCBJJ20gbm90IGV4YWN0bHkgaW50ZXJlc3RlZCBpbiBkb2luZyB0aGF0LlxuXHRmdW5jdGlvbiBtb3ZlTm9kZXMocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgZnJhZyA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0bW92ZUNoaWxkVG9GcmFnKHBhcmVudCwgZnJhZywgdm5vZGUpXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWcsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIG1vdmVDaGlsZFRvRnJhZyhwYXJlbnQsIGZyYWcsIHZub2RlKSB7XG5cdFx0Ly8gRG9kZ2UgdGhlIHJlY3Vyc2lvbiBvdmVyaGVhZCBpbiBhIGZldyBvZiB0aGUgbW9zdCBjb21tb24gY2FzZXMuXG5cdFx0d2hpbGUgKHZub2RlLmRvbSAhPSBudWxsICYmIHZub2RlLmRvbS5wYXJlbnROb2RlID09PSBwYXJlbnQpIHtcblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHZub2RlID0gdm5vZGUuaW5zdGFuY2Vcblx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gXCI8XCIpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5pbnN0YW5jZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQodm5vZGUuaW5zdGFuY2VbaV0pXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodm5vZGUudGFnICE9PSBcIltcIikge1xuXHRcdFx0XHQvLyBEb24ndCByZWN1cnNlIGZvciB0ZXh0IG5vZGVzICpvciogZWxlbWVudHMsIGp1c3QgZnJhZ21lbnRzXG5cdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQodm5vZGUuZG9tKVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0dm5vZGUgPSB2bm9kZS5jaGlsZHJlblswXVxuXHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXVxuXHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSBtb3ZlQ2hpbGRUb0ZyYWcocGFyZW50LCBmcmFnLCBjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBpbnNlcnROb2RlKHBhcmVudCwgZG9tLCBuZXh0U2libGluZykge1xuXHRcdGlmIChuZXh0U2libGluZyAhPSBudWxsKSBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvbSwgbmV4dFNpYmxpbmcpXG5cdFx0ZWxzZSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9tKVxuXHR9XG5cblx0ZnVuY3Rpb24gbWF5YmVTZXRDb250ZW50RWRpdGFibGUodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuYXR0cnMgPT0gbnVsbCB8fCAoXG5cdFx0XHR2bm9kZS5hdHRycy5jb250ZW50ZWRpdGFibGUgPT0gbnVsbCAmJiAvLyBhdHRyaWJ1dGVcblx0XHRcdHZub2RlLmF0dHJzLmNvbnRlbnRFZGl0YWJsZSA9PSBudWxsIC8vIHByb3BlcnR5XG5cdFx0KSkgcmV0dXJuIGZhbHNlXG5cdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIjxcIikge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHRcdFx0aWYgKHZub2RlLmRvbS5pbm5lckhUTUwgIT09IGNvbnRlbnQpIHZub2RlLmRvbS5pbm5lckhUTUwgPSBjb250ZW50XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHZub2RlLnRleHQgIT0gbnVsbCB8fCBjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm9kZSBvZiBhIGNvbnRlbnRlZGl0YWJsZSBtdXN0IGJlIHRydXN0ZWRcIilcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cblx0Ly9yZW1vdmVcblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQpIHtcblx0XHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgcmVtb3ZlTm9kZShwYXJlbnQsIHZub2RlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlKHBhcmVudCwgdm5vZGUpIHtcblx0XHR2YXIgbWFzayA9IDBcblx0XHR2YXIgb3JpZ2luYWwgPSB2bm9kZS5zdGF0ZVxuXHRcdHZhciBzdGF0ZVJlc3VsdCwgYXR0cnNSZXN1bHRcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuc3RhdGUub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25iZWZvcmVyZW1vdmUsIHZub2RlKVxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdG1hc2sgPSAxXG5cdFx0XHRcdHN0YXRlUmVzdWx0ID0gcmVzdWx0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUsIHZub2RlKVxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdG1hc2sgfD0gMlxuXHRcdFx0XHRhdHRyc1Jlc3VsdCA9IHJlc3VsdFxuXHRcdFx0fVxuXHRcdH1cblx0XHRjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbClcblxuXHRcdC8vIElmIHdlIGNhbiwgdHJ5IHRvIGZhc3QtcGF0aCBpdCBhbmQgYXZvaWQgYWxsIHRoZSBvdmVyaGVhZCBvZiBhd2FpdGluZ1xuXHRcdGlmICghbWFzaykge1xuXHRcdFx0b25yZW1vdmUodm5vZGUpXG5cdFx0XHRyZW1vdmVDaGlsZChwYXJlbnQsIHZub2RlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc3RhdGVSZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgbmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRcdGlmIChtYXNrICYgMSkgeyBtYXNrICY9IDI7IGlmICghbWFzaykgcmVhbGx5UmVtb3ZlKCkgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXRlUmVzdWx0LnRoZW4obmV4dCwgbmV4dClcblx0XHRcdH1cblx0XHRcdGlmIChhdHRyc1Jlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdFx0aWYgKG1hc2sgJiAyKSB7IG1hc2sgJj0gMTsgaWYgKCFtYXNrKSByZWFsbHlSZW1vdmUoKSB9XG5cdFx0XHRcdH1cblx0XHRcdFx0YXR0cnNSZXN1bHQudGhlbihuZXh0LCBuZXh0KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJlYWxseVJlbW92ZSgpIHtcblx0XHRcdGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKVxuXHRcdFx0b25yZW1vdmUodm5vZGUpXG5cdFx0XHRyZW1vdmVDaGlsZChwYXJlbnQsIHZub2RlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVIVE1MKHBhcmVudCwgdm5vZGUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmluc3RhbmNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodm5vZGUuaW5zdGFuY2VbaV0pXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUNoaWxkKHBhcmVudCwgdm5vZGUpIHtcblx0XHQvLyBEb2RnZSB0aGUgcmVjdXJzaW9uIG92ZXJoZWFkIGluIGEgZmV3IG9mIHRoZSBtb3N0IGNvbW1vbiBjYXNlcy5cblx0XHR3aGlsZSAodm5vZGUuZG9tICE9IG51bGwgJiYgdm5vZGUuZG9tLnBhcmVudE5vZGUgPT09IHBhcmVudCkge1xuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0dm5vZGUgPSB2bm9kZS5pbnN0YW5jZVxuXHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdH0gZWxzZSBpZiAodm5vZGUudGFnID09PSBcIjxcIikge1xuXHRcdFx0XHRyZW1vdmVIVE1MKHBhcmVudCwgdm5vZGUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodm5vZGUudGFnICE9PSBcIltcIikge1xuXHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZCh2bm9kZS5kb20pXG5cdFx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHZub2RlLmNoaWxkcmVuKSkgYnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodm5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dm5vZGUgPSB2bm9kZS5jaGlsZHJlblswXVxuXHRcdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgcmVtb3ZlQ2hpbGQocGFyZW50LCBjaGlsZClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG9ucmVtb3ZlKHZub2RlKSB7XG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25yZW1vdmUsIHZub2RlKVxuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbnJlbW92ZSwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSBvbnJlbW92ZSh2bm9kZS5pbnN0YW5jZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgb25yZW1vdmUoY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvL2F0dHJzXG5cdGZ1bmN0aW9uIHNldEF0dHJzKHZub2RlLCBhdHRycywgbnMpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdHNldEF0dHIodm5vZGUsIGtleSwgbnVsbCwgYXR0cnNba2V5XSwgbnMpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldEF0dHIodm5vZGUsIGtleSwgb2xkLCB2YWx1ZSwgbnMpIHtcblx0XHRpZiAoa2V5ID09PSBcImtleVwiIHx8IGtleSA9PT0gXCJpc1wiIHx8IHZhbHVlID09IG51bGwgfHwgaXNMaWZlY3ljbGVNZXRob2Qoa2V5KSB8fCAob2xkID09PSB2YWx1ZSAmJiAhaXNGb3JtQXR0cmlidXRlKHZub2RlLCBrZXkpKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVyblxuXHRcdGlmIChrZXlbMF0gPT09IFwib1wiICYmIGtleVsxXSA9PT0gXCJuXCIpIHJldHVybiB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB2YWx1ZSlcblx0XHRpZiAoa2V5LnNsaWNlKDAsIDYpID09PSBcInhsaW5rOlwiKSB2bm9kZS5kb20uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGtleS5zbGljZSg2KSwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHVwZGF0ZVN0eWxlKHZub2RlLmRvbSwgb2xkLCB2YWx1ZSlcblx0XHRlbHNlIGlmIChoYXNQcm9wZXJ0eUtleSh2bm9kZSwga2V5LCBucykpIHtcblx0XHRcdGlmIChrZXkgPT09IFwidmFsdWVcIikge1xuXHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBjb2VyY2lvbiBpZiB3ZSdyZSBhY3R1YWxseSBnb2luZyB0byBjaGVjayB0aGUgdmFsdWUuXG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uICovXG5cdFx0XHRcdC8vc2V0dGluZyBpbnB1dFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSBieSB0eXBpbmcgb24gZm9jdXNlZCBlbGVtZW50IG1vdmVzIGN1cnNvciB0byBlbmQgaW4gQ2hyb21lXG5cdFx0XHRcdGlmICgodm5vZGUudGFnID09PSBcImlucHV0XCIgfHwgdm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gXCJcIiArIHZhbHVlICYmIHZub2RlLmRvbSA9PT0gYWN0aXZlRWxlbWVudCgpKSByZXR1cm5cblx0XHRcdFx0Ly9zZXR0aW5nIHNlbGVjdFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBvbGQgIT09IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBcIlwiICsgdmFsdWUpIHJldHVyblxuXHRcdFx0XHQvL3NldHRpbmcgb3B0aW9uW3ZhbHVlXSB0byBzYW1lIHZhbHVlIHdoaWxlIGhhdmluZyBzZWxlY3Qgb3BlbiBibGlua3Mgc2VsZWN0IGRyb3Bkb3duIGluIENocm9tZVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcIm9wdGlvblwiICYmIG9sZCAhPT0gbnVsbCAmJiB2bm9kZS5kb20udmFsdWUgPT09IFwiXCIgKyB2YWx1ZSkgcmV0dXJuXG5cdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8taW1wbGljaXQtY29lcmNpb24gKi9cblx0XHRcdH1cblx0XHRcdC8vIElmIHlvdSBhc3NpZ24gYW4gaW5wdXQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEgd2l0aCBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24sIGFuIGVycm9yIHdpbGwgb2NjdXIuXG5cdFx0XHRpZiAodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5ID09PSBcInR5cGVcIikgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuXHRcdFx0ZWxzZSB2bm9kZS5kb21ba2V5XSA9IHZhbHVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSkgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZShrZXksIFwiXCIpXG5cdFx0XHRcdGVsc2Ugdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoa2V5ID09PSBcImNsYXNzTmFtZVwiID8gXCJjbGFzc1wiIDoga2V5LCB2YWx1ZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlQXR0cih2bm9kZSwga2V5LCBvbGQsIG5zKSB7XG5cdFx0aWYgKGtleSA9PT0gXCJrZXlcIiB8fCBrZXkgPT09IFwiaXNcIiB8fCBvbGQgPT0gbnVsbCB8fCBpc0xpZmVjeWNsZU1ldGhvZChrZXkpKSByZXR1cm5cblx0XHRpZiAoa2V5WzBdID09PSBcIm9cIiAmJiBrZXlbMV0gPT09IFwiblwiICYmICFpc0xpZmVjeWNsZU1ldGhvZChrZXkpKSB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB1bmRlZmluZWQpXG5cdFx0ZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHVwZGF0ZVN0eWxlKHZub2RlLmRvbSwgb2xkLCBudWxsKVxuXHRcdGVsc2UgaWYgKFxuXHRcdFx0aGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpXG5cdFx0XHQmJiBrZXkgIT09IFwiY2xhc3NOYW1lXCJcblx0XHRcdCYmICEoa2V5ID09PSBcInZhbHVlXCIgJiYgKFxuXHRcdFx0XHR2bm9kZS50YWcgPT09IFwib3B0aW9uXCJcblx0XHRcdFx0fHwgdm5vZGUudGFnID09PSBcInNlbGVjdFwiICYmIHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ID09PSAtMSAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKVxuXHRcdFx0KSlcblx0XHRcdCYmICEodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5ID09PSBcInR5cGVcIilcblx0XHQpIHtcblx0XHRcdHZub2RlLmRvbVtrZXldID0gbnVsbFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbnNMYXN0SW5kZXggPSBrZXkuaW5kZXhPZihcIjpcIilcblx0XHRcdGlmIChuc0xhc3RJbmRleCAhPT0gLTEpIGtleSA9IGtleS5zbGljZShuc0xhc3RJbmRleCArIDEpXG5cdFx0XHRpZiAob2xkICE9PSBmYWxzZSkgdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBrZXkpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldExhdGVTZWxlY3RBdHRycyh2bm9kZSwgYXR0cnMpIHtcblx0XHRpZiAoXCJ2YWx1ZVwiIGluIGF0dHJzKSB7XG5cdFx0XHRpZihhdHRycy52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggIT09IC0xKSB2bm9kZS5kb20udmFsdWUgPSBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbm9ybWFsaXplZCA9IFwiXCIgKyBhdHRycy52YWx1ZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0XHRcdGlmICh2bm9kZS5kb20udmFsdWUgIT09IG5vcm1hbGl6ZWQgfHwgdm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdFx0dm5vZGUuZG9tLnZhbHVlID0gbm9ybWFsaXplZFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcInNlbGVjdGVkSW5kZXhcIiBpbiBhdHRycykgc2V0QXR0cih2bm9kZSwgXCJzZWxlY3RlZEluZGV4XCIsIG51bGwsIGF0dHJzLnNlbGVjdGVkSW5kZXgsIHVuZGVmaW5lZClcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBdHRycyh2bm9kZSwgb2xkLCBhdHRycywgbnMpIHtcblx0XHRpZiAoYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRcdHNldEF0dHIodm5vZGUsIGtleSwgb2xkICYmIG9sZFtrZXldLCBhdHRyc1trZXldLCBucylcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHZhbFxuXHRcdGlmIChvbGQgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG9sZCkge1xuXHRcdFx0XHRpZiAoKCh2YWwgPSBvbGRba2V5XSkgIT0gbnVsbCkgJiYgKGF0dHJzID09IG51bGwgfHwgYXR0cnNba2V5XSA9PSBudWxsKSkge1xuXHRcdFx0XHRcdHJlbW92ZUF0dHIodm5vZGUsIGtleSwgdmFsLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJ2YWx1ZVwiIHx8IGF0dHIgPT09IFwiY2hlY2tlZFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRJbmRleFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRcIiAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKSB8fCB2bm9kZS50YWcgPT09IFwib3B0aW9uXCIgJiYgdm5vZGUuZG9tLnBhcmVudE5vZGUgPT09ICRkb2MuYWN0aXZlRWxlbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGlzTGlmZWN5Y2xlTWV0aG9kKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJvbmluaXRcIiB8fCBhdHRyID09PSBcIm9uY3JlYXRlXCIgfHwgYXR0ciA9PT0gXCJvbnVwZGF0ZVwiIHx8IGF0dHIgPT09IFwib25yZW1vdmVcIiB8fCBhdHRyID09PSBcIm9uYmVmb3JlcmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXVwZGF0ZVwiXG5cdH1cblx0ZnVuY3Rpb24gaGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpIHtcblx0XHQvLyBGaWx0ZXIgb3V0IG5hbWVzcGFjZWQga2V5c1xuXHRcdHJldHVybiBucyA9PT0gdW5kZWZpbmVkICYmIChcblx0XHRcdC8vIElmIGl0J3MgYSBjdXN0b20gZWxlbWVudCwganVzdCBrZWVwIGl0LlxuXHRcdFx0dm5vZGUudGFnLmluZGV4T2YoXCItXCIpID4gLTEgfHwgdm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS5hdHRycy5pcyB8fFxuXHRcdFx0Ly8gSWYgaXQncyBhIG5vcm1hbCBlbGVtZW50LCBsZXQncyB0cnkgdG8gYXZvaWQgYSBmZXcgYnJvd3NlciBidWdzLlxuXHRcdFx0a2V5ICE9PSBcImhyZWZcIiAmJiBrZXkgIT09IFwibGlzdFwiICYmIGtleSAhPT0gXCJmb3JtXCIgJiYga2V5ICE9PSBcIndpZHRoXCIgJiYga2V5ICE9PSBcImhlaWdodFwiLy8gJiYga2V5ICE9PSBcInR5cGVcIlxuXHRcdFx0Ly8gRGVmZXIgdGhlIHByb3BlcnR5IGNoZWNrIHVudGlsICphZnRlciogd2UgY2hlY2sgZXZlcnl0aGluZy5cblx0XHQpICYmIGtleSBpbiB2bm9kZS5kb21cblx0fVxuXG5cdC8vc3R5bGVcblx0dmFyIHVwcGVyY2FzZVJlZ2V4ID0gL1tBLVpdL2dcblx0ZnVuY3Rpb24gdG9Mb3dlckNhc2UoY2FwaXRhbCkgeyByZXR1cm4gXCItXCIgKyBjYXBpdGFsLnRvTG93ZXJDYXNlKCkgfVxuXHRmdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG5cdFx0cmV0dXJuIGtleVswXSA9PT0gXCItXCIgJiYga2V5WzFdID09PSBcIi1cIiA/IGtleSA6XG5cdFx0XHRrZXkgPT09IFwiY3NzRmxvYXRcIiA/IFwiZmxvYXRcIiA6XG5cdFx0XHRcdGtleS5yZXBsYWNlKHVwcGVyY2FzZVJlZ2V4LCB0b0xvd2VyQ2FzZSlcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHN0eWxlKSB7XG5cdFx0aWYgKG9sZCA9PT0gc3R5bGUpIHtcblx0XHRcdC8vIFN0eWxlcyBhcmUgZXF1aXZhbGVudCwgZG8gbm90aGluZy5cblx0XHR9IGVsc2UgaWYgKHN0eWxlID09IG51bGwpIHtcblx0XHRcdC8vIE5ldyBzdHlsZSBpcyBtaXNzaW5nLCBqdXN0IGNsZWFyIGl0LlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHN0eWxlICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHQvLyBOZXcgc3R5bGUgaXMgYSBzdHJpbmcsIGxldCBlbmdpbmUgZGVhbCB3aXRoIHBhdGNoaW5nLlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcblx0XHR9IGVsc2UgaWYgKG9sZCA9PSBudWxsIHx8IHR5cGVvZiBvbGQgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdC8vIGBvbGRgIGlzIG1pc3Npbmcgb3IgYSBzdHJpbmcsIGBzdHlsZWAgaXMgYW4gb2JqZWN0LlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdFx0Ly8gQWRkIG5ldyBzdHlsZSBwcm9wZXJ0aWVzXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gc3R5bGVba2V5XVxuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSwgU3RyaW5nKHZhbHVlKSlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQm90aCBvbGQgJiBuZXcgYXJlIChkaWZmZXJlbnQpIG9iamVjdHMuXG5cdFx0XHQvLyBVcGRhdGUgc3R5bGUgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZFxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHN0eWxlW2tleV1cblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlID0gU3RyaW5nKHZhbHVlKSkgIT09IFN0cmluZyhvbGRba2V5XSkpIHtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KG5vcm1hbGl6ZUtleShrZXkpLCB2YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3Rcblx0XHRcdGZvciAodmFyIGtleSBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKG9sZFtrZXldICE9IG51bGwgJiYgc3R5bGVba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEhlcmUncyBhbiBleHBsYW5hdGlvbiBvZiBob3cgdGhpcyB3b3Jrczpcblx0Ly8gMS4gVGhlIGV2ZW50IG5hbWVzIGFyZSBhbHdheXMgKGJ5IGRlc2lnbikgcHJlZml4ZWQgYnkgYG9uYC5cblx0Ly8gMi4gVGhlIEV2ZW50TGlzdGVuZXIgaW50ZXJmYWNlIGFjY2VwdHMgZWl0aGVyIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0XG5cdC8vICAgIHdpdGggYSBgaGFuZGxlRXZlbnRgIG1ldGhvZC5cblx0Ly8gMy4gVGhlIG9iamVjdCBkb2VzIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLCB0byBhdm9pZFxuXHQvLyAgICBhbnkgcG90ZW50aWFsIGludGVyZmVyZW5jZSB3aXRoIHRoYXQgKGUuZy4gc2V0dGVycykuXG5cdC8vIDQuIFRoZSBldmVudCBuYW1lIGlzIHJlbWFwcGVkIHRvIHRoZSBoYW5kbGVyIGJlZm9yZSBjYWxsaW5nIGl0LlxuXHQvLyA1LiBJbiBmdW5jdGlvbi1iYXNlZCBldmVudCBoYW5kbGVycywgYGV2LnRhcmdldCA9PT0gdGhpc2AuIFdlIHJlcGxpY2F0ZVxuXHQvLyAgICB0aGF0IGJlbG93LlxuXHQvLyA2LiBJbiBmdW5jdGlvbi1iYXNlZCBldmVudCBoYW5kbGVycywgYHJldHVybiBmYWxzZWAgcHJldmVudHMgdGhlIGRlZmF1bHRcblx0Ly8gICAgYWN0aW9uIGFuZCBzdG9wcyBldmVudCBwcm9wYWdhdGlvbi4gV2UgcmVwbGljYXRlIHRoYXQgYmVsb3cuXG5cdGZ1bmN0aW9uIEV2ZW50RGljdCgpIHtcblx0XHQvLyBTYXZlIHRoaXMsIHNvIHRoZSBjdXJyZW50IHJlZHJhdyBpcyBjb3JyZWN0bHkgdHJhY2tlZC5cblx0XHR0aGlzLl8gPSBjdXJyZW50UmVkcmF3XG5cdH1cblx0RXZlbnREaWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0RXZlbnREaWN0LnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldikge1xuXHRcdHZhciBoYW5kbGVyID0gdGhpc1tcIm9uXCIgKyBldi50eXBlXVxuXHRcdHZhciByZXN1bHRcblx0XHRpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikgcmVzdWx0ID0gaGFuZGxlci5jYWxsKGV2LmN1cnJlbnRUYXJnZXQsIGV2KVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIGhhbmRsZXIuaGFuZGxlRXZlbnQoZXYpXG5cdFx0aWYgKHRoaXMuXyAmJiBldi5yZWRyYXcgIT09IGZhbHNlKSAoMCwgdGhpcy5fKSgpXG5cdFx0aWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0fVxuXHR9XG5cblx0Ly9ldmVudFxuXHRmdW5jdGlvbiB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB2YWx1ZSkge1xuXHRcdGlmICh2bm9kZS5ldmVudHMgIT0gbnVsbCkge1xuXHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldID09PSB2YWx1ZSkgcmV0dXJuXG5cdFx0XHRpZiAodmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSkge1xuXHRcdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleV0gPT0gbnVsbCkgdm5vZGUuZG9tLmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLCB2bm9kZS5ldmVudHMsIGZhbHNlKVxuXHRcdFx0XHR2bm9kZS5ldmVudHNba2V5XSA9IHZhbHVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleV0gIT0gbnVsbCkgdm5vZGUuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLCB2bm9kZS5ldmVudHMsIGZhbHNlKVxuXHRcdFx0XHR2bm9kZS5ldmVudHNba2V5XSA9IHVuZGVmaW5lZFxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSkge1xuXHRcdFx0dm5vZGUuZXZlbnRzID0gbmV3IEV2ZW50RGljdCgpXG5cdFx0XHR2bm9kZS5kb20uYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMiksIHZub2RlLmV2ZW50cywgZmFsc2UpXG5cdFx0XHR2bm9kZS5ldmVudHNba2V5XSA9IHZhbHVlXG5cdFx0fVxuXHR9XG5cblx0Ly9saWZlY3ljbGVcblx0ZnVuY3Rpb24gaW5pdExpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uaW5pdCA9PT0gXCJmdW5jdGlvblwiKSBjYWxsSG9vay5jYWxsKHNvdXJjZS5vbmluaXQsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uY3JlYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goY2FsbEhvb2suYmluZChzb3VyY2Uub25jcmVhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbnVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKGNhbGxIb29rLmJpbmQoc291cmNlLm9udXBkYXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gc2hvdWxkTm90VXBkYXRlKHZub2RlLCBvbGQpIHtcblx0XHRkbyB7XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR2YXIgZm9yY2UgPSBjYWxsSG9vay5jYWxsKHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlLCB2bm9kZSwgb2xkKVxuXHRcdFx0XHRpZiAoZm9yY2UgIT09IHVuZGVmaW5lZCAmJiAhZm9yY2UpIGJyZWFrXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuc3RhdGUub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR2YXIgZm9yY2UgPSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9uYmVmb3JldXBkYXRlLCB2bm9kZSwgb2xkKVxuXHRcdFx0XHRpZiAoZm9yY2UgIT09IHVuZGVmaW5lZCAmJiAhZm9yY2UpIGJyZWFrXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9IHdoaWxlIChmYWxzZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG5cdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdHZub2RlLmluc3RhbmNlID0gb2xkLmluc3RhbmNlXG5cdFx0Ly8gT25lIHdvdWxkIHRoaW5rIGhhdmluZyB0aGUgYWN0dWFsIGxhdGVzdCBhdHRyaWJ1dGVzIHdvdWxkIGJlIGlkZWFsLFxuXHRcdC8vIGJ1dCBpdCBkb2Vzbid0IGxldCB1cyBwcm9wZXJseSBkaWZmIGJhc2VkIG9uIG91ciBjdXJyZW50IGludGVybmFsXG5cdFx0Ly8gcmVwcmVzZW50YXRpb24uIFdlIGhhdmUgdG8gc2F2ZSBub3Qgb25seSB0aGUgb2xkIERPTSBpbmZvLCBidXQgYWxzb1xuXHRcdC8vIHRoZSBhdHRyaWJ1dGVzIHVzZWQgdG8gY3JlYXRlIGl0LCBhcyB3ZSBkaWZmICp0aGF0Kiwgbm90IGFnYWluc3QgdGhlXG5cdFx0Ly8gRE9NIGRpcmVjdGx5ICh3aXRoIGEgZmV3IGV4Y2VwdGlvbnMgaW4gYHNldEF0dHJgKS4gQW5kLCBvZiBjb3Vyc2UsIHdlXG5cdFx0Ly8gbmVlZCB0byBzYXZlIHRoZSBjaGlsZHJlbiBhbmQgdGV4dCBhcyB0aGV5IGFyZSBjb25jZXB0dWFsbHkgbm90XG5cdFx0Ly8gdW5saWtlIHNwZWNpYWwgXCJhdHRyaWJ1dGVzXCIgaW50ZXJuYWxseS5cblx0XHR2bm9kZS5hdHRycyA9IG9sZC5hdHRyc1xuXHRcdHZub2RlLmNoaWxkcmVuID0gb2xkLmNoaWxkcmVuXG5cdFx0dm5vZGUudGV4dCA9IG9sZC50ZXh0XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbihkb20sIHZub2RlcywgcmVkcmF3KSB7XG5cdFx0aWYgKCFkb20pIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IGJlaW5nIHBhc3NlZCB0byBtLnJvdXRlL20ubW91bnQvbS5yZW5kZXIgaXMgbm90IHVuZGVmaW5lZC5cIilcblx0XHR2YXIgaG9va3MgPSBbXVxuXHRcdHZhciBhY3RpdmUgPSBhY3RpdmVFbGVtZW50KClcblx0XHR2YXIgbmFtZXNwYWNlID0gZG9tLm5hbWVzcGFjZVVSSVxuXG5cdFx0Ly8gRmlyc3QgdGltZSByZW5kZXJpbmcgaW50byBhIG5vZGUgY2xlYXJzIGl0IG91dFxuXHRcdGlmIChkb20udm5vZGVzID09IG51bGwpIGRvbS50ZXh0Q29udGVudCA9IFwiXCJcblxuXHRcdHZub2RlcyA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKEFycmF5LmlzQXJyYXkodm5vZGVzKSA/IHZub2RlcyA6IFt2bm9kZXNdKVxuXHRcdHZhciBwcmV2UmVkcmF3ID0gY3VycmVudFJlZHJhd1xuXHRcdHRyeSB7XG5cdFx0XHRjdXJyZW50UmVkcmF3ID0gdHlwZW9mIHJlZHJhdyA9PT0gXCJmdW5jdGlvblwiID8gcmVkcmF3IDogdW5kZWZpbmVkXG5cdFx0XHR1cGRhdGVOb2Rlcyhkb20sIGRvbS52bm9kZXMsIHZub2RlcywgaG9va3MsIG51bGwsIG5hbWVzcGFjZSA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIgPyB1bmRlZmluZWQgOiBuYW1lc3BhY2UpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGN1cnJlbnRSZWRyYXcgPSBwcmV2UmVkcmF3XG5cdFx0fVxuXHRcdGRvbS52bm9kZXMgPSB2bm9kZXNcblx0XHQvLyBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgY2FuIHJldHVybiBudWxsOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2RvbS1kb2N1bWVudC1hY3RpdmVlbGVtZW50XG5cdFx0aWYgKGFjdGl2ZSAhPSBudWxsICYmIGFjdGl2ZUVsZW1lbnQoKSAhPT0gYWN0aXZlICYmIHR5cGVvZiBhY3RpdmUuZm9jdXMgPT09IFwiZnVuY3Rpb25cIikgYWN0aXZlLmZvY3VzKClcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSBob29rc1tpXSgpXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZW5kZXIsIHNjaGVkdWxlLCBjb25zb2xlKSB7XG5cdHZhciBzdWJzY3JpcHRpb25zID0gW11cblx0dmFyIHJlbmRlcmluZyA9IGZhbHNlXG5cdHZhciBwZW5kaW5nID0gZmFsc2VcblxuXHRmdW5jdGlvbiBzeW5jKCkge1xuXHRcdGlmIChyZW5kZXJpbmcpIHRocm93IG5ldyBFcnJvcihcIk5lc3RlZCBtLnJlZHJhdy5zeW5jKCkgY2FsbFwiKVxuXHRcdHJlbmRlcmluZyA9IHRydWVcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdHRyeSB7IHJlbmRlcihzdWJzY3JpcHRpb25zW2ldLCBWbm9kZShzdWJzY3JpcHRpb25zW2kgKyAxXSksIHJlZHJhdykgfVxuXHRcdFx0Y2F0Y2ggKGUpIHsgY29uc29sZS5lcnJvcihlKSB9XG5cdFx0fVxuXHRcdHJlbmRlcmluZyA9IGZhbHNlXG5cdH1cblxuXHRmdW5jdGlvbiByZWRyYXcoKSB7XG5cdFx0aWYgKCFwZW5kaW5nKSB7XG5cdFx0XHRwZW5kaW5nID0gdHJ1ZVxuXHRcdFx0c2NoZWR1bGUoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBlbmRpbmcgPSBmYWxzZVxuXHRcdFx0XHRzeW5jKClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVkcmF3LnN5bmMgPSBzeW5jXG5cblx0ZnVuY3Rpb24gbW91bnQocm9vdCwgY29tcG9uZW50KSB7XG5cdFx0aWYgKGNvbXBvbmVudCAhPSBudWxsICYmIGNvbXBvbmVudC52aWV3ID09IG51bGwgJiYgdHlwZW9mIGNvbXBvbmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwibS5tb3VudChlbGVtZW50LCBjb21wb25lbnQpIGV4cGVjdHMgYSBjb21wb25lbnQsIG5vdCBhIHZub2RlXCIpXG5cdFx0fVxuXG5cdFx0dmFyIGluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHJvb3QpXG5cdFx0aWYgKGluZGV4ID49IDApIHtcblx0XHRcdHN1YnNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LCAyKVxuXHRcdFx0cmVuZGVyKHJvb3QsIFtdLCByZWRyYXcpXG5cdFx0fVxuXG5cdFx0aWYgKGNvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0XHRzdWJzY3JpcHRpb25zLnB1c2gocm9vdCwgY29tcG9uZW50KVxuXHRcdFx0cmVuZGVyKHJvb3QsIFZub2RlKGNvbXBvbmVudCksIHJlZHJhdylcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge21vdW50OiBtb3VudCwgcmVkcmF3OiByZWRyYXd9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgYnVpbGRQYXRobmFtZSA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9idWlsZFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3csIFByb21pc2UsIG9uY29tcGxldGlvbikge1xuXHR2YXIgY2FsbGJhY2tDb3VudCA9IDBcblxuXHRmdW5jdGlvbiBQcm9taXNlUHJveHkoZXhlY3V0b3IpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG5cdH1cblxuXHQvLyBJbiBjYXNlIHRoZSBnbG9iYWwgUHJvbWlzZSBpcyBzb21lIHVzZXJsYW5kIGxpYnJhcnkncyB3aGVyZSB0aGV5IHJlbHkgb25cblx0Ly8gYGZvbyBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3JgLCBgdGhpcy5jb25zdHJ1Y3Rvci5yZXNvbHZlKHZhbHVlKWAsIG9yXG5cdC8vIHNpbWlsYXIuIExldCdzICpub3QqIGJyZWFrIHRoZW0uXG5cdFByb21pc2VQcm94eS5wcm90b3R5cGUgPSBQcm9taXNlLnByb3RvdHlwZVxuXHRQcm9taXNlUHJveHkuX19wcm90b19fID0gUHJvbWlzZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cblx0ZnVuY3Rpb24gbWFrZVJlcXVlc3QoZmFjdG9yeSkge1xuXHRcdHJldHVybiBmdW5jdGlvbih1cmwsIGFyZ3MpIHtcblx0XHRcdGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7IGFyZ3MgPSB1cmw7IHVybCA9IHVybC51cmwgfVxuXHRcdFx0ZWxzZSBpZiAoYXJncyA9PSBudWxsKSBhcmdzID0ge31cblx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdGZhY3RvcnkoYnVpbGRQYXRobmFtZSh1cmwsIGFyZ3MucGFyYW1zKSwgYXJncywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ3MudHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhW2ldID0gbmV3IGFyZ3MudHlwZShkYXRhW2ldKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGRhdGEgPSBuZXcgYXJncy50eXBlKGRhdGEpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc29sdmUoZGF0YSlcblx0XHRcdFx0fSwgcmVqZWN0KVxuXHRcdFx0fSlcblx0XHRcdGlmIChhcmdzLmJhY2tncm91bmQgPT09IHRydWUpIHJldHVybiBwcm9taXNlXG5cdFx0XHR2YXIgY291bnQgPSAwXG5cdFx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRcdFx0aWYgKC0tY291bnQgPT09IDAgJiYgdHlwZW9mIG9uY29tcGxldGlvbiA9PT0gXCJmdW5jdGlvblwiKSBvbmNvbXBsZXRpb24oKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gd3JhcChwcm9taXNlKVxuXG5cdFx0XHRmdW5jdGlvbiB3cmFwKHByb21pc2UpIHtcblx0XHRcdFx0dmFyIHRoZW4gPSBwcm9taXNlLnRoZW5cblx0XHRcdFx0Ly8gU2V0IHRoZSBjb25zdHJ1Y3Rvciwgc28gZW5naW5lcyBrbm93IHRvIG5vdCBhd2FpdCBvciByZXNvbHZlXG5cdFx0XHRcdC8vIHRoaXMgYXMgYSBuYXRpdmUgcHJvbWlzZS4gQXQgdGhlIHRpbWUgb2Ygd3JpdGluZywgdGhpcyBpc1xuXHRcdFx0XHQvLyBvbmx5IG5lY2Vzc2FyeSBmb3IgVjgsIGJ1dCB0aGVpciBiZWhhdmlvciBpcyB0aGUgY29ycmVjdFxuXHRcdFx0XHQvLyBiZWhhdmlvciBwZXIgc3BlYy4gU2VlIHRoaXMgc3BlYyBpc3N1ZSBmb3IgbW9yZSBkZXRhaWxzOlxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hMjYyL2lzc3Vlcy8xNTc3LiBBbHNvLCBzZWUgdGhlXG5cdFx0XHRcdC8vIGNvcnJlc3BvbmRpbmcgY29tbWVudCBpbiBgcmVxdWVzdC90ZXN0cy90ZXN0LXJlcXVlc3QuanNgIGZvclxuXHRcdFx0XHQvLyBhIGJpdCBtb3JlIGJhY2tncm91bmQgb24gdGhlIGlzc3VlIGF0IGhhbmQuXG5cdFx0XHRcdHByb21pc2UuY29uc3RydWN0b3IgPSBQcm9taXNlUHJveHlcblx0XHRcdFx0cHJvbWlzZS50aGVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y291bnQrK1xuXHRcdFx0XHRcdHZhciBuZXh0ID0gdGhlbi5hcHBseShwcm9taXNlLCBhcmd1bWVudHMpXG5cdFx0XHRcdFx0bmV4dC50aGVuKGNvbXBsZXRlLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRjb21wbGV0ZSgpXG5cdFx0XHRcdFx0XHRpZiAoY291bnQgPT09IDApIHRocm93IGVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVybiB3cmFwKG5leHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYXNIZWFkZXIoYXJncywgbmFtZSkge1xuXHRcdGZvciAodmFyIGtleSBpbiBhcmdzLmhlYWRlcnMpIHtcblx0XHRcdGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MuaGVhZGVycywga2V5KSAmJiBuYW1lLnRlc3Qoa2V5KSkgcmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHJlcXVlc3Q6IG1ha2VSZXF1ZXN0KGZ1bmN0aW9uKHVybCwgYXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgbWV0aG9kID0gYXJncy5tZXRob2QgIT0gbnVsbCA/IGFyZ3MubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiBcIkdFVFwiXG5cdFx0XHR2YXIgYm9keSA9IGFyZ3MuYm9keVxuXHRcdFx0dmFyIGFzc3VtZUpTT04gPSAoYXJncy5zZXJpYWxpemUgPT0gbnVsbCB8fCBhcmdzLnNlcmlhbGl6ZSA9PT0gSlNPTi5zZXJpYWxpemUpICYmICEoYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuRm9ybURhdGEpXG5cdFx0XHR2YXIgcmVzcG9uc2VUeXBlID0gYXJncy5yZXNwb25zZVR5cGUgfHwgKHR5cGVvZiBhcmdzLmV4dHJhY3QgPT09IFwiZnVuY3Rpb25cIiA/IFwiXCIgOiBcImpzb25cIilcblxuXHRcdFx0dmFyIHhociA9IG5ldyAkd2luZG93LlhNTEh0dHBSZXF1ZXN0KCksIGFib3J0ZWQgPSBmYWxzZVxuXHRcdFx0dmFyIG9yaWdpbmFsID0geGhyLCByZXBsYWNlZEFib3J0XG5cdFx0XHR2YXIgYWJvcnQgPSB4aHIuYWJvcnRcblxuXHRcdFx0eGhyLmFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdGFib3J0LmNhbGwodGhpcylcblx0XHRcdH1cblxuXHRcdFx0eGhyLm9wZW4obWV0aG9kLCB1cmwsIGFyZ3MuYXN5bmMgIT09IGZhbHNlLCB0eXBlb2YgYXJncy51c2VyID09PSBcInN0cmluZ1wiID8gYXJncy51c2VyIDogdW5kZWZpbmVkLCB0eXBlb2YgYXJncy5wYXNzd29yZCA9PT0gXCJzdHJpbmdcIiA/IGFyZ3MucGFzc3dvcmQgOiB1bmRlZmluZWQpXG5cblx0XHRcdGlmIChhc3N1bWVKU09OICYmIGJvZHkgIT0gbnVsbCAmJiAhaGFzSGVhZGVyKGFyZ3MsIC9eY29udGVudC10eXBlJC9pKSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIilcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgYXJncy5kZXNlcmlhbGl6ZSAhPT0gXCJmdW5jdGlvblwiICYmICFoYXNIZWFkZXIoYXJncywgL15hY2NlcHQkL2kpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy53aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSBhcmdzLndpdGhDcmVkZW50aWFsc1xuXHRcdFx0aWYgKGFyZ3MudGltZW91dCkgeGhyLnRpbWVvdXQgPSBhcmdzLnRpbWVvdXRcblx0XHRcdHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGVcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykge1xuXHRcdFx0XHRpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChhcmdzLmhlYWRlcnMsIGtleSkpIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGFyZ3MuaGVhZGVyc1trZXldKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihldikge1xuXHRcdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvcnMgb24geGhyLmFib3J0KCkuXG5cdFx0XHRcdGlmIChhYm9ydGVkKSByZXR1cm5cblxuXHRcdFx0XHRpZiAoZXYudGFyZ2V0LnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFyIHN1Y2Nlc3MgPSAoZXYudGFyZ2V0LnN0YXR1cyA+PSAyMDAgJiYgZXYudGFyZ2V0LnN0YXR1cyA8IDMwMCkgfHwgZXYudGFyZ2V0LnN0YXR1cyA9PT0gMzA0IHx8ICgvXmZpbGU6XFwvXFwvL2kpLnRlc3QodXJsKVxuXHRcdFx0XHRcdFx0Ly8gV2hlbiB0aGUgcmVzcG9uc2UgdHlwZSBpc24ndCBcIlwiIG9yIFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0Ly8gYHhoci5yZXNwb25zZVRleHRgIGlzIHRoZSB3cm9uZyB0aGluZyB0byB1c2UuXG5cdFx0XHRcdFx0XHQvLyBCcm93c2VycyBkbyB0aGUgcmlnaHQgdGhpbmcgYW5kIHRocm93IGhlcmUsIGFuZCB3ZVxuXHRcdFx0XHRcdFx0Ly8gc2hvdWxkIGhvbm9yIHRoYXQgYW5kIGRvIHRoZSByaWdodCB0aGluZyBieVxuXHRcdFx0XHRcdFx0Ly8gcHJlZmVycmluZyBgeGhyLnJlc3BvbnNlYCB3aGVyZSBwb3NzaWJsZS9wcmFjdGljYWwuXG5cdFx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBldi50YXJnZXQucmVzcG9uc2UsIG1lc3NhZ2VcblxuXHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlVHlwZSA9PT0gXCJqc29uXCIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gRm9yIElFIGFuZCBFZGdlLCB3aGljaCBkb24ndCBpbXBsZW1lbnRcblx0XHRcdFx0XHRcdFx0Ly8gYHJlc3BvbnNlVHlwZTogXCJqc29uXCJgLlxuXHRcdFx0XHRcdFx0XHRpZiAoIWV2LnRhcmdldC5yZXNwb25zZVR5cGUgJiYgdHlwZW9mIGFyZ3MuZXh0cmFjdCAhPT0gXCJmdW5jdGlvblwiKSByZXNwb25zZSA9IEpTT04ucGFyc2UoZXYudGFyZ2V0LnJlc3BvbnNlVGV4dClcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09IFwidGV4dFwiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgdXNlIHRoaXMgZGVmYXVsdCBpZiBpdCdzIHRleHQuIElmIGEgcGFyc2VkXG5cdFx0XHRcdFx0XHRcdC8vIGRvY3VtZW50IGlzIG5lZWRlZCBvbiBvbGQgSUUgYW5kIGZyaWVuZHMgKGFsbFxuXHRcdFx0XHRcdFx0XHQvLyB1bnN1cHBvcnRlZCksIHRoZSB1c2VyIHNob3VsZCB1c2UgYSBjdXN0b21cblx0XHRcdFx0XHRcdFx0Ly8gYGNvbmZpZ2AgaW5zdGVhZC4gVGhleSdyZSBhbHJlYWR5IHVzaW5nIHRoaXMgYXRcblx0XHRcdFx0XHRcdFx0Ly8gdGhlaXIgb3duIHJpc2suXG5cdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZSA9PSBudWxsKSByZXNwb25zZSA9IGV2LnRhcmdldC5yZXNwb25zZVRleHRcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBhcmdzLmV4dHJhY3QgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGFyZ3MuZXh0cmFjdChldi50YXJnZXQsIGFyZ3MpXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MgPSB0cnVlXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmdzLmRlc2VyaWFsaXplID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBhcmdzLmRlc2VyaWFsaXplKHJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHN1Y2Nlc3MpIHJlc29sdmUocmVzcG9uc2UpXG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHsgbWVzc2FnZSA9IGV2LnRhcmdldC5yZXNwb25zZVRleHQgfVxuXHRcdFx0XHRcdFx0XHRjYXRjaCAoZSkgeyBtZXNzYWdlID0gcmVzcG9uc2UgfVxuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSlcblx0XHRcdFx0XHRcdFx0ZXJyb3IuY29kZSA9IGV2LnRhcmdldC5zdGF0dXNcblx0XHRcdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmNvbmZpZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHhociA9IGFyZ3MuY29uZmlnKHhociwgYXJncywgdXJsKSB8fCB4aHJcblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgdGhlIGBhYm9ydGAgdG8gYW55IHJlcGxhY2VtZW50IFhIUiBhcyB3ZWxsLlxuXHRcdFx0XHRpZiAoeGhyICE9PSBvcmlnaW5hbCkge1xuXHRcdFx0XHRcdHJlcGxhY2VkQWJvcnQgPSB4aHIuYWJvcnRcblx0XHRcdFx0XHR4aHIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdFx0XHRyZXBsYWNlZEFib3J0LmNhbGwodGhpcylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGJvZHkgPT0gbnVsbCkgeGhyLnNlbmQoKVxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3Muc2VyaWFsaXplID09PSBcImZ1bmN0aW9uXCIpIHhoci5zZW5kKGFyZ3Muc2VyaWFsaXplKGJvZHkpKVxuXHRcdFx0ZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuRm9ybURhdGEpIHhoci5zZW5kKGJvZHkpXG5cdFx0XHRlbHNlIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXHRcdH0pLFxuXHRcdGpzb25wOiBtYWtlUmVxdWVzdChmdW5jdGlvbih1cmwsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIGNhbGxiYWNrTmFtZSA9IGFyZ3MuY2FsbGJhY2tOYW1lIHx8IFwiX21pdGhyaWxfXCIgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE2KSArIFwiX1wiICsgY2FsbGJhY2tDb3VudCsrXG5cdFx0XHR2YXIgc2NyaXB0ID0gJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG5cdFx0XHQkd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZXNvbHZlKGRhdGEpXG5cdFx0XHR9XG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWxldGUgJHdpbmRvd1tjYWxsYmFja05hbWVdXG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdClcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIkpTT05QIHJlcXVlc3QgZmFpbGVkXCIpKVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0LnNyYyA9IHVybCArICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIikgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoYXJncy5jYWxsYmFja0tleSB8fCBcImNhbGxiYWNrXCIpICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tOYW1lKVxuXHRcdFx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHRcdH0pLFxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgYnVpbGRRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuLi9xdWVyeXN0cmluZy9idWlsZFwiKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoXCIuL2Fzc2lnblwiKVxuXG4vLyBSZXR1cm5zIGBwYXRoYCBmcm9tIGB0ZW1wbGF0ZWAgKyBgcGFyYW1zYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgcGFyYW1zKSB7XG5cdGlmICgoLzooW15cXC9cXC4tXSspKFxcLnszfSk/Oi8pLnRlc3QodGVtcGxhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGVtcGxhdGUgcGFyYW1ldGVyIG5hbWVzICptdXN0KiBiZSBzZXBhcmF0ZWRcIilcblx0fVxuXHRpZiAocGFyYW1zID09IG51bGwpIHJldHVybiB0ZW1wbGF0ZVxuXHR2YXIgcXVlcnlJbmRleCA9IHRlbXBsYXRlLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB0ZW1wbGF0ZS5pbmRleE9mKFwiI1wiKVxuXHR2YXIgcXVlcnlFbmQgPSBoYXNoSW5kZXggPCAwID8gdGVtcGxhdGUubGVuZ3RoIDogaGFzaEluZGV4XG5cdHZhciBwYXRoRW5kID0gcXVlcnlJbmRleCA8IDAgPyBxdWVyeUVuZCA6IHF1ZXJ5SW5kZXhcblx0dmFyIHBhdGggPSB0ZW1wbGF0ZS5zbGljZSgwLCBwYXRoRW5kKVxuXHR2YXIgcXVlcnkgPSB7fVxuXG5cdGFzc2lnbihxdWVyeSwgcGFyYW1zKVxuXG5cdHZhciByZXNvbHZlZCA9IHBhdGgucmVwbGFjZSgvOihbXlxcL1xcLi1dKykoXFwuezN9KT8vZywgZnVuY3Rpb24obSwga2V5LCB2YXJpYWRpYykge1xuXHRcdGRlbGV0ZSBxdWVyeVtrZXldXG5cdFx0Ly8gSWYgbm8gc3VjaCBwYXJhbWV0ZXIgZXhpc3RzLCBkb24ndCBpbnRlcnBvbGF0ZSBpdC5cblx0XHRpZiAocGFyYW1zW2tleV0gPT0gbnVsbCkgcmV0dXJuIG1cblx0XHQvLyBFc2NhcGUgbm9ybWFsIHBhcmFtZXRlcnMsIGJ1dCBub3QgdmFyaWFkaWMgb25lcy5cblx0XHRyZXR1cm4gdmFyaWFkaWMgPyBwYXJhbXNba2V5XSA6IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocGFyYW1zW2tleV0pKVxuXHR9KVxuXG5cdC8vIEluIGNhc2UgdGhlIHRlbXBsYXRlIHN1YnN0aXR1dGlvbiBhZGRzIG5ldyBxdWVyeS9oYXNoIHBhcmFtZXRlcnMuXG5cdHZhciBuZXdRdWVyeUluZGV4ID0gcmVzb2x2ZWQuaW5kZXhPZihcIj9cIilcblx0dmFyIG5ld0hhc2hJbmRleCA9IHJlc29sdmVkLmluZGV4T2YoXCIjXCIpXG5cdHZhciBuZXdRdWVyeUVuZCA9IG5ld0hhc2hJbmRleCA8IDAgPyByZXNvbHZlZC5sZW5ndGggOiBuZXdIYXNoSW5kZXhcblx0dmFyIG5ld1BhdGhFbmQgPSBuZXdRdWVyeUluZGV4IDwgMCA/IG5ld1F1ZXJ5RW5kIDogbmV3UXVlcnlJbmRleFxuXHR2YXIgcmVzdWx0ID0gcmVzb2x2ZWQuc2xpY2UoMCwgbmV3UGF0aEVuZClcblxuXHRpZiAocXVlcnlJbmRleCA+PSAwKSByZXN1bHQgKz0gdGVtcGxhdGUuc2xpY2UocXVlcnlJbmRleCwgcXVlcnlFbmQpXG5cdGlmIChuZXdRdWVyeUluZGV4ID49IDApIHJlc3VsdCArPSAocXVlcnlJbmRleCA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIHJlc29sdmVkLnNsaWNlKG5ld1F1ZXJ5SW5kZXgsIG5ld1F1ZXJ5RW5kKVxuXHR2YXIgcXVlcnlzdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5KVxuXHRpZiAocXVlcnlzdHJpbmcpIHJlc3VsdCArPSAocXVlcnlJbmRleCA8IDAgJiYgbmV3UXVlcnlJbmRleCA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIHF1ZXJ5c3RyaW5nXG5cdGlmIChoYXNoSW5kZXggPj0gMCkgcmVzdWx0ICs9IHRlbXBsYXRlLnNsaWNlKGhhc2hJbmRleClcblx0aWYgKG5ld0hhc2hJbmRleCA+PSAwKSByZXN1bHQgKz0gKGhhc2hJbmRleCA8IDAgPyBcIlwiIDogXCImXCIpICsgcmVzb2x2ZWQuc2xpY2UobmV3SGFzaEluZGV4KVxuXHRyZXR1cm4gcmVzdWx0XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHJldHVybiBcIlwiXG5cblx0dmFyIGFyZ3MgPSBbXVxuXHRmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG5cdFx0ZGVzdHJ1Y3R1cmUoa2V5LCBvYmplY3Rba2V5XSlcblx0fVxuXG5cdHJldHVybiBhcmdzLmpvaW4oXCImXCIpXG5cblx0ZnVuY3Rpb24gZGVzdHJ1Y3R1cmUoa2V5LCB2YWx1ZSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXN0cnVjdHVyZShrZXkgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdGZvciAodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0ZGVzdHJ1Y3R1cmUoa2V5ICsgXCJbXCIgKyBpICsgXCJdXCIsIHZhbHVlW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGFyZ3MucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBcIlwiID8gXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpIDogXCJcIikpXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuXHRpZihzb3VyY2UpIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSB9KVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIG1vdW50UmVkcmF3ID0gcmVxdWlyZShcIi4vbW91bnQtcmVkcmF3XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vYXBpL3JvdXRlclwiKSh3aW5kb3csIG1vdW50UmVkcmF3KVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxudmFyIG0gPSByZXF1aXJlKFwiLi4vcmVuZGVyL2h5cGVyc2NyaXB0XCIpXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9wcm9taXNlL3Byb21pc2VcIilcblxudmFyIGJ1aWxkUGF0aG5hbWUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvYnVpbGRcIilcbnZhciBwYXJzZVBhdGhuYW1lID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL3BhcnNlXCIpXG52YXIgY29tcGlsZVRlbXBsYXRlID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL2NvbXBpbGVUZW1wbGF0ZVwiKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9hc3NpZ25cIilcblxudmFyIHNlbnRpbmVsID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkd2luZG93LCBtb3VudFJlZHJhdykge1xuXHR2YXIgZmlyZUFzeW5jXG5cblx0ZnVuY3Rpb24gc2V0UGF0aChwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG5cdFx0cGF0aCA9IGJ1aWxkUGF0aG5hbWUocGF0aCwgZGF0YSlcblx0XHRpZiAoZmlyZUFzeW5jICE9IG51bGwpIHtcblx0XHRcdGZpcmVBc3luYygpXG5cdFx0XHR2YXIgc3RhdGUgPSBvcHRpb25zID8gb3B0aW9ucy5zdGF0ZSA6IG51bGxcblx0XHRcdHZhciB0aXRsZSA9IG9wdGlvbnMgPyBvcHRpb25zLnRpdGxlIDogbnVsbFxuXHRcdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXBsYWNlKSAkd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGUucHJlZml4ICsgcGF0aClcblx0XHRcdGVsc2UgJHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlLnByZWZpeCArIHBhdGgpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0JHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcm91dGUucHJlZml4ICsgcGF0aFxuXHRcdH1cblx0fVxuXG5cdHZhciBjdXJyZW50UmVzb2x2ZXIgPSBzZW50aW5lbCwgY29tcG9uZW50LCBhdHRycywgY3VycmVudFBhdGgsIGxhc3RVcGRhdGVcblxuXHR2YXIgU0tJUCA9IHJvdXRlLlNLSVAgPSB7fVxuXG5cdGZ1bmN0aW9uIHJvdXRlKHJvb3QsIGRlZmF1bHRSb3V0ZSwgcm91dGVzKSB7XG5cdFx0aWYgKHJvb3QgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCB0aGF0IHdhcyBwYXNzZWQgdG8gYG0ucm91dGVgIGlzIG5vdCB1bmRlZmluZWRcIilcblx0XHQvLyAwID0gc3RhcnRcblx0XHQvLyAxID0gaW5pdFxuXHRcdC8vIDIgPSByZWFkeVxuXHRcdHZhciBzdGF0ZSA9IDBcblxuXHRcdHZhciBjb21waWxlZCA9IE9iamVjdC5rZXlzKHJvdXRlcykubWFwKGZ1bmN0aW9uKHJvdXRlKSB7XG5cdFx0XHRpZiAocm91dGVbMF0gIT09IFwiL1wiKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJSb3V0ZXMgbXVzdCBzdGFydCB3aXRoIGEgYC9gXCIpXG5cdFx0XHRpZiAoKC86KFteXFwvXFwuLV0rKShcXC57M30pPzovKS50ZXN0KHJvdXRlKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJSb3V0ZSBwYXJhbWV0ZXIgbmFtZXMgbXVzdCBiZSBzZXBhcmF0ZWQgd2l0aCBlaXRoZXIgYC9gLCBgLmAsIG9yIGAtYFwiKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cm91dGU6IHJvdXRlLFxuXHRcdFx0XHRjb21wb25lbnQ6IHJvdXRlc1tyb3V0ZV0sXG5cdFx0XHRcdGNoZWNrOiBjb21waWxlVGVtcGxhdGUocm91dGUpLFxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dmFyIGNhbGxBc3luYyA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0XHR2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpXG5cdFx0dmFyIHNjaGVkdWxlZCA9IGZhbHNlXG5cdFx0dmFyIG9ucmVtb3ZlXG5cblx0XHRmaXJlQXN5bmMgPSBudWxsXG5cblx0XHRpZiAoZGVmYXVsdFJvdXRlICE9IG51bGwpIHtcblx0XHRcdHZhciBkZWZhdWx0RGF0YSA9IHBhcnNlUGF0aG5hbWUoZGVmYXVsdFJvdXRlKVxuXG5cdFx0XHRpZiAoIWNvbXBpbGVkLnNvbWUoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuY2hlY2soZGVmYXVsdERhdGEpIH0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIkRlZmF1bHQgcm91dGUgZG9lc24ndCBtYXRjaCBhbnkga25vd24gcm91dGVzXCIpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVzb2x2ZVJvdXRlKCkge1xuXHRcdFx0c2NoZWR1bGVkID0gZmFsc2Vcblx0XHRcdC8vIENvbnNpZGVyIHRoZSBwYXRobmFtZSBob2xpc3RpY2FsbHkuIFRoZSBwcmVmaXggbWlnaHQgZXZlbiBiZSBpbnZhbGlkLFxuXHRcdFx0Ly8gYnV0IHRoYXQncyBub3Qgb3VyIHByb2JsZW0uXG5cdFx0XHR2YXIgcHJlZml4ID0gJHdpbmRvdy5sb2NhdGlvbi5oYXNoXG5cdFx0XHRpZiAocm91dGUucHJlZml4WzBdICE9PSBcIiNcIikge1xuXHRcdFx0XHRwcmVmaXggPSAkd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHByZWZpeFxuXHRcdFx0XHRpZiAocm91dGUucHJlZml4WzBdICE9PSBcIj9cIikge1xuXHRcdFx0XHRcdHByZWZpeCA9ICR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBwcmVmaXhcblx0XHRcdFx0XHRpZiAocHJlZml4WzBdICE9PSBcIi9cIikgcHJlZml4ID0gXCIvXCIgKyBwcmVmaXhcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gVGhpcyBzZWVtaW5nbHkgdXNlbGVzcyBgLmNvbmNhdCgpYCBzcGVlZHMgdXAgdGhlIHRlc3RzIHF1aXRlIGEgYml0LFxuXHRcdFx0Ly8gc2luY2UgdGhlIHJlcHJlc2VudGF0aW9uIGlzIGNvbnNpc3RlbnRseSBhIHJlbGF0aXZlbHkgcG9vcmx5XG5cdFx0XHQvLyBvcHRpbWl6ZWQgY29ucyBzdHJpbmcuXG5cdFx0XHR2YXIgcGF0aCA9IHByZWZpeC5jb25jYXQoKVxuXHRcdFx0XHQucmVwbGFjZSgvKD86JVthLWY4OV1bYS1mMC05XSkrL2dpbSwgZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdFx0XHQuc2xpY2Uocm91dGUucHJlZml4Lmxlbmd0aClcblx0XHRcdHZhciBkYXRhID0gcGFyc2VQYXRobmFtZShwYXRoKVxuXG5cdFx0XHRhc3NpZ24oZGF0YS5wYXJhbXMsICR3aW5kb3cuaGlzdG9yeS5zdGF0ZSlcblxuXHRcdFx0ZnVuY3Rpb24gZmFpbCgpIHtcblx0XHRcdFx0aWYgKHBhdGggPT09IGRlZmF1bHRSb3V0ZSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlc29sdmUgZGVmYXVsdCByb3V0ZSBcIiArIGRlZmF1bHRSb3V0ZSlcblx0XHRcdFx0c2V0UGF0aChkZWZhdWx0Um91dGUsIG51bGwsIHtyZXBsYWNlOiB0cnVlfSlcblx0XHRcdH1cblxuXHRcdFx0bG9vcCgwKVxuXHRcdFx0ZnVuY3Rpb24gbG9vcChpKSB7XG5cdFx0XHRcdC8vIDAgPSBpbml0XG5cdFx0XHRcdC8vIDEgPSBzY2hlZHVsZWRcblx0XHRcdFx0Ly8gMiA9IGRvbmVcblx0XHRcdFx0Zm9yICg7IGkgPCBjb21waWxlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjb21waWxlZFtpXS5jaGVjayhkYXRhKSkge1xuXHRcdFx0XHRcdFx0dmFyIHBheWxvYWQgPSBjb21waWxlZFtpXS5jb21wb25lbnRcblx0XHRcdFx0XHRcdHZhciBtYXRjaGVkUm91dGUgPSBjb21waWxlZFtpXS5yb3V0ZVxuXHRcdFx0XHRcdFx0dmFyIGxvY2FsQ29tcCA9IHBheWxvYWRcblx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBsYXN0VXBkYXRlID0gZnVuY3Rpb24oY29tcCkge1xuXHRcdFx0XHRcdFx0XHRpZiAodXBkYXRlICE9PSBsYXN0VXBkYXRlKSByZXR1cm5cblx0XHRcdFx0XHRcdFx0aWYgKGNvbXAgPT09IFNLSVApIHJldHVybiBsb29wKGkgKyAxKVxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQgPSBjb21wICE9IG51bGwgJiYgKHR5cGVvZiBjb21wLnZpZXcgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgY29tcCA9PT0gXCJmdW5jdGlvblwiKT8gY29tcCA6IFwiZGl2XCJcblx0XHRcdFx0XHRcdFx0YXR0cnMgPSBkYXRhLnBhcmFtcywgY3VycmVudFBhdGggPSBwYXRoLCBsYXN0VXBkYXRlID0gbnVsbFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50UmVzb2x2ZXIgPSBwYXlsb2FkLnJlbmRlciA/IHBheWxvYWQgOiBudWxsXG5cdFx0XHRcdFx0XHRcdGlmIChzdGF0ZSA9PT0gMikgbW91bnRSZWRyYXcucmVkcmF3KClcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGUgPSAyXG5cdFx0XHRcdFx0XHRcdFx0bW91bnRSZWRyYXcucmVkcmF3LnN5bmMoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBUaGVyZSdzIG5vIHVuZGVyc3RhdGluZyBob3cgbXVjaCBJICp3aXNoKiBJIGNvdWxkXG5cdFx0XHRcdFx0XHQvLyB1c2UgYGFzeW5jYC9gYXdhaXRgIGhlcmUuLi5cblx0XHRcdFx0XHRcdGlmIChwYXlsb2FkLnZpZXcgfHwgdHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRwYXlsb2FkID0ge31cblx0XHRcdFx0XHRcdFx0dXBkYXRlKGxvY2FsQ29tcClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHBheWxvYWQub25tYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRwLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXlsb2FkLm9ubWF0Y2goZGF0YS5wYXJhbXMsIHBhdGgsIG1hdGNoZWRSb3V0ZSlcblx0XHRcdFx0XHRcdFx0fSkudGhlbih1cGRhdGUsIGZhaWwpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHVwZGF0ZShcImRpdlwiKVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZhaWwoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCBpdCB1bmNvbmRpdGlvbmFsbHkgc28gYG0ucm91dGUuc2V0YCBhbmQgYG0ucm91dGUuTGlua2AgYm90aCB3b3JrLFxuXHRcdC8vIGV2ZW4gaWYgbmVpdGhlciBgcHVzaFN0YXRlYCBub3IgYGhhc2hjaGFuZ2VgIGFyZSBzdXBwb3J0ZWQuIEl0J3Ncblx0XHQvLyBjbGVhcmVkIGlmIGBoYXNoY2hhbmdlYCBpcyB1c2VkLCBzaW5jZSB0aGF0IG1ha2VzIGl0IGF1dG9tYXRpY2FsbHlcblx0XHQvLyBhc3luYy5cblx0XHRmaXJlQXN5bmMgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghc2NoZWR1bGVkKSB7XG5cdFx0XHRcdHNjaGVkdWxlZCA9IHRydWVcblx0XHRcdFx0Y2FsbEFzeW5jKHJlc29sdmVSb3V0ZSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodHlwZW9mICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0b25yZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZmlyZUFzeW5jLCBmYWxzZSlcblx0XHRcdH1cblx0XHRcdCR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZpcmVBc3luYywgZmFsc2UpXG5cdFx0fSBlbHNlIGlmIChyb3V0ZS5wcmVmaXhbMF0gPT09IFwiI1wiKSB7XG5cdFx0XHRmaXJlQXN5bmMgPSBudWxsXG5cdFx0XHRvbnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHJlc29sdmVSb3V0ZSwgZmFsc2UpXG5cdFx0XHR9XG5cdFx0XHQkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHJlc29sdmVSb3V0ZSwgZmFsc2UpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vdW50UmVkcmF3Lm1vdW50KHJvb3QsIHtcblx0XHRcdG9uYmVmb3JldXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c3RhdGUgPSBzdGF0ZSA/IDIgOiAxXG5cdFx0XHRcdHJldHVybiAhKCFzdGF0ZSB8fCBzZW50aW5lbCA9PT0gY3VycmVudFJlc29sdmVyKVxuXHRcdFx0fSxcblx0XHRcdG9uY3JlYXRlOiByZXNvbHZlUm91dGUsXG5cdFx0XHRvbnJlbW92ZTogb25yZW1vdmUsXG5cdFx0XHR2aWV3OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCFzdGF0ZSB8fCBzZW50aW5lbCA9PT0gY3VycmVudFJlc29sdmVyKSByZXR1cm5cblx0XHRcdFx0Ly8gV3JhcCBpbiBhIGZyYWdtZW50IHRvIHByZXNlcnZlIGV4aXN0aW5nIGtleSBzZW1hbnRpY3Ncblx0XHRcdFx0dmFyIHZub2RlID0gW1Zub2RlKGNvbXBvbmVudCwgYXR0cnMua2V5LCBhdHRycyldXG5cdFx0XHRcdGlmIChjdXJyZW50UmVzb2x2ZXIpIHZub2RlID0gY3VycmVudFJlc29sdmVyLnJlbmRlcih2bm9kZVswXSlcblx0XHRcdFx0cmV0dXJuIHZub2RlXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblx0cm91dGUuc2V0ID0gZnVuY3Rpb24ocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuXHRcdGlmIChsYXN0VXBkYXRlICE9IG51bGwpIHtcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdFx0XHRvcHRpb25zLnJlcGxhY2UgPSB0cnVlXG5cdFx0fVxuXHRcdGxhc3RVcGRhdGUgPSBudWxsXG5cdFx0c2V0UGF0aChwYXRoLCBkYXRhLCBvcHRpb25zKVxuXHR9XG5cdHJvdXRlLmdldCA9IGZ1bmN0aW9uKCkge3JldHVybiBjdXJyZW50UGF0aH1cblx0cm91dGUucHJlZml4ID0gXCIjIVwiXG5cdHJvdXRlLkxpbmsgPSB7XG5cdFx0dmlldzogZnVuY3Rpb24odm5vZGUpIHtcblx0XHRcdHZhciBvcHRpb25zID0gdm5vZGUuYXR0cnMub3B0aW9uc1xuXHRcdFx0Ly8gUmVtb3ZlIHRoZXNlIHNvIHRoZXkgZG9uJ3QgZ2V0IG92ZXJ3cml0dGVuXG5cdFx0XHR2YXIgYXR0cnMgPSB7fSwgb25jbGljaywgaHJlZlxuXHRcdFx0YXNzaWduKGF0dHJzLCB2bm9kZS5hdHRycylcblx0XHRcdC8vIFRoZSBmaXJzdCB0d28gYXJlIGludGVybmFsLCBidXQgdGhlIHJlc3QgYXJlIG1hZ2ljIGF0dHJpYnV0ZXNcblx0XHRcdC8vIHRoYXQgbmVlZCBjZW5zb3JlZCB0byBub3Qgc2NyZXcgdXAgcmVuZGVyaW5nLlxuXHRcdFx0YXR0cnMuc2VsZWN0b3IgPSBhdHRycy5vcHRpb25zID0gYXR0cnMua2V5ID0gYXR0cnMub25pbml0ID1cblx0XHRcdGF0dHJzLm9uY3JlYXRlID0gYXR0cnMub25iZWZvcmV1cGRhdGUgPSBhdHRycy5vbnVwZGF0ZSA9XG5cdFx0XHRhdHRycy5vbmJlZm9yZXJlbW92ZSA9IGF0dHJzLm9ucmVtb3ZlID0gbnVsbFxuXG5cdFx0XHQvLyBEbyB0aGlzIG5vdyBzbyB3ZSBjYW4gZ2V0IHRoZSBtb3N0IGN1cnJlbnQgYGhyZWZgIGFuZCBgZGlzYWJsZWRgLlxuXHRcdFx0Ly8gVGhvc2UgYXR0cmlidXRlcyBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgaW4gdGhlIHNlbGVjdG9yLCBhbmQgd2Vcblx0XHRcdC8vIHNob3VsZCBob25vciB0aGF0LlxuXHRcdFx0dmFyIGNoaWxkID0gbSh2bm9kZS5hdHRycy5zZWxlY3RvciB8fCBcImFcIiwgYXR0cnMsIHZub2RlLmNoaWxkcmVuKVxuXG5cdFx0XHQvLyBMZXQncyBwcm92aWRlIGEgKnJpZ2h0KiB3YXkgdG8gZGlzYWJsZSBhIHJvdXRlIGxpbmssIHJhdGhlciB0aGFuXG5cdFx0XHQvLyBsZXR0aW5nIHBlb3BsZSBzY3JldyB1cCBhY2Nlc3NpYmlsaXR5IG9uIGFjY2lkZW50LlxuXHRcdFx0Ly9cblx0XHRcdC8vIFRoZSBhdHRyaWJ1dGUgaXMgY29lcmNlZCBzbyB1c2VycyBkb24ndCBnZXQgc3VycHJpc2VkIG92ZXJcblx0XHRcdC8vIGBkaXNhYmxlZDogMGAgcmVzdWx0aW5nIGluIGEgYnV0dG9uIHRoYXQncyBzb21laG93IHJvdXRhYmxlXG5cdFx0XHQvLyBkZXNwaXRlIGJlaW5nIHZpc2libHkgZGlzYWJsZWQuXG5cdFx0XHRpZiAoY2hpbGQuYXR0cnMuZGlzYWJsZWQgPSBCb29sZWFuKGNoaWxkLmF0dHJzLmRpc2FibGVkKSkge1xuXHRcdFx0XHRjaGlsZC5hdHRycy5ocmVmID0gbnVsbFxuXHRcdFx0XHRjaGlsZC5hdHRyc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBcInRydWVcIlxuXHRcdFx0XHQvLyBJZiB5b3UgKnJlYWxseSogZG8gd2FudCB0byBkbyB0aGlzIG9uIGEgZGlzYWJsZWQgbGluaywgdXNlXG5cdFx0XHRcdC8vIGFuIGBvbmNyZWF0ZWAgaG9vayB0byBhZGQgaXQuXG5cdFx0XHRcdGNoaWxkLmF0dHJzLm9uY2xpY2sgPSBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbmNsaWNrID0gY2hpbGQuYXR0cnMub25jbGlja1xuXHRcdFx0XHRocmVmID0gY2hpbGQuYXR0cnMuaHJlZlxuXHRcdFx0XHRjaGlsZC5hdHRycy5ocmVmID0gcm91dGUucHJlZml4ICsgaHJlZlxuXHRcdFx0XHRjaGlsZC5hdHRycy5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdHZhciByZXN1bHRcblx0XHRcdFx0XHRpZiAodHlwZW9mIG9uY2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gb25jbGljay5jYWxsKGUuY3VycmVudFRhcmdldCwgZSlcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG9uY2xpY2sgPT0gbnVsbCB8fCB0eXBlb2Ygb25jbGljayAhPT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9uY2xpY2suaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0b25jbGljay5oYW5kbGVFdmVudChlKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEFkYXB0ZWQgZnJvbSBSZWFjdCBSb3V0ZXIncyBpbXBsZW1lbnRhdGlvbjpcblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9yZWFjdC1yb3V0ZXIvYmxvYi81MjBhMGFjZDQ4YWUxYjA2NmViMGIwN2Q2ZDRkMTc5MGExZDAyNDgyL3BhY2thZ2VzL3JlYWN0LXJvdXRlci1kb20vbW9kdWxlcy9MaW5rLmpzXG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBUcnkgdG8gYmUgZmxleGlibGUgYW5kIGludHVpdGl2ZSBpbiBob3cgd2UgaGFuZGxlIGxpbmtzLlxuXHRcdFx0XHRcdC8vIEZ1biBmYWN0OiBsaW5rcyBhcmVuJ3QgYXMgb2J2aW91cyB0byBnZXQgcmlnaHQgYXMgeW91XG5cdFx0XHRcdFx0Ly8gd291bGQgZXhwZWN0LiBUaGVyZSdzIGEgbG90IG1vcmUgdmFsaWQgd2F5cyB0byBjbGljayBhXG5cdFx0XHRcdFx0Ly8gbGluayB0aGFuIHRoaXMsIGFuZCBvbmUgbWlnaHQgd2FudCB0byBub3Qgc2ltcGx5IGNsaWNrIGFcblx0XHRcdFx0XHQvLyBsaW5rLCBidXQgcmlnaHQgY2xpY2sgb3IgY29tbWFuZC1jbGljayBpdCB0byBjb3B5IHRoZVxuXHRcdFx0XHRcdC8vIGxpbmsgdGFyZ2V0LCBldGMuIE5vcGUsIHRoaXMgaXNuJ3QganVzdCBmb3IgYmxpbmQgcGVvcGxlLlxuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdC8vIFNraXAgaWYgYG9uY2xpY2tgIHByZXZlbnRlZCBkZWZhdWx0XG5cdFx0XHRcdFx0XHRyZXN1bHQgIT09IGZhbHNlICYmICFlLmRlZmF1bHRQcmV2ZW50ZWQgJiZcblx0XHRcdFx0XHRcdC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuXHRcdFx0XHRcdFx0KGUuYnV0dG9uID09PSAwIHx8IGUud2hpY2ggPT09IDAgfHwgZS53aGljaCA9PT0gMSkgJiZcblx0XHRcdFx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgYHRhcmdldD1fYmxhbmtgLCBldGMuXG5cdFx0XHRcdFx0XHQoIWUuY3VycmVudFRhcmdldC50YXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJlxuXHRcdFx0XHRcdFx0Ly8gTm8gbW9kaWZpZXIga2V5c1xuXHRcdFx0XHRcdFx0IWUuY3RybEtleSAmJiAhZS5tZXRhS2V5ICYmICFlLnNoaWZ0S2V5ICYmICFlLmFsdEtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRlLnJlZHJhdyA9IGZhbHNlXG5cdFx0XHRcdFx0XHRyb3V0ZS5zZXQoaHJlZiwgbnVsbCwgb3B0aW9ucylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGlsZFxuXHRcdH0sXG5cdH1cblx0cm91dGUucGFyYW0gPSBmdW5jdGlvbihrZXkpIHtcblx0XHRyZXR1cm4gYXR0cnMgJiYga2V5ICE9IG51bGwgPyBhdHRyc1trZXldIDogYXR0cnNcblx0fVxuXG5cdHJldHVybiByb3V0ZVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBhcnNlUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnlzdHJpbmcvcGFyc2VcIilcblxuLy8gUmV0dXJucyBge3BhdGgsIHBhcmFtc31gIGZyb20gYHVybGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsKSB7XG5cdHZhciBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIilcblx0dmFyIHF1ZXJ5RW5kID0gaGFzaEluZGV4IDwgMCA/IHVybC5sZW5ndGggOiBoYXNoSW5kZXhcblx0dmFyIHBhdGhFbmQgPSBxdWVyeUluZGV4IDwgMCA/IHF1ZXJ5RW5kIDogcXVlcnlJbmRleFxuXHR2YXIgcGF0aCA9IHVybC5zbGljZSgwLCBwYXRoRW5kKS5yZXBsYWNlKC9cXC97Mix9L2csIFwiL1wiKVxuXG5cdGlmICghcGF0aCkgcGF0aCA9IFwiL1wiXG5cdGVsc2Uge1xuXHRcdGlmIChwYXRoWzBdICE9PSBcIi9cIikgcGF0aCA9IFwiL1wiICsgcGF0aFxuXHRcdGlmIChwYXRoLmxlbmd0aCA+IDEgJiYgcGF0aFtwYXRoLmxlbmd0aCAtIDFdID09PSBcIi9cIikgcGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpXG5cdH1cblx0cmV0dXJuIHtcblx0XHRwYXRoOiBwYXRoLFxuXHRcdHBhcmFtczogcXVlcnlJbmRleCA8IDBcblx0XHRcdD8ge31cblx0XHRcdDogcGFyc2VRdWVyeVN0cmluZyh1cmwuc2xpY2UocXVlcnlJbmRleCArIDEsIHF1ZXJ5RW5kKSksXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5nKSB7XG5cdGlmIChzdHJpbmcgPT09IFwiXCIgfHwgc3RyaW5nID09IG51bGwpIHJldHVybiB7fVxuXHRpZiAoc3RyaW5nLmNoYXJBdCgwKSA9PT0gXCI/XCIpIHN0cmluZyA9IHN0cmluZy5zbGljZSgxKVxuXG5cdHZhciBlbnRyaWVzID0gc3RyaW5nLnNwbGl0KFwiJlwiKSwgY291bnRlcnMgPSB7fSwgZGF0YSA9IHt9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbnRyeSA9IGVudHJpZXNbaV0uc3BsaXQoXCI9XCIpXG5cdFx0dmFyIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlbnRyeVswXSlcblx0XHR2YXIgdmFsdWUgPSBlbnRyeS5sZW5ndGggPT09IDIgPyBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMV0pIDogXCJcIlxuXG5cdFx0aWYgKHZhbHVlID09PSBcInRydWVcIikgdmFsdWUgPSB0cnVlXG5cdFx0ZWxzZSBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikgdmFsdWUgPSBmYWxzZVxuXG5cdFx0dmFyIGxldmVscyA9IGtleS5zcGxpdCgvXFxdXFxbP3xcXFsvKVxuXHRcdHZhciBjdXJzb3IgPSBkYXRhXG5cdFx0aWYgKGtleS5pbmRleE9mKFwiW1wiKSA+IC0xKSBsZXZlbHMucG9wKClcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxldmVscy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGxldmVsID0gbGV2ZWxzW2pdLCBuZXh0TGV2ZWwgPSBsZXZlbHNbaiArIDFdXG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBuZXh0TGV2ZWwgPT0gXCJcIiB8fCAhaXNOYU4ocGFyc2VJbnQobmV4dExldmVsLCAxMCkpXG5cdFx0XHRpZiAobGV2ZWwgPT09IFwiXCIpIHtcblx0XHRcdFx0dmFyIGtleSA9IGxldmVscy5zbGljZSgwLCBqKS5qb2luKClcblx0XHRcdFx0aWYgKGNvdW50ZXJzW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvdW50ZXJzW2tleV0gPSBBcnJheS5pc0FycmF5KGN1cnNvcikgPyBjdXJzb3IubGVuZ3RoIDogMFxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldmVsID0gY291bnRlcnNba2V5XSsrXG5cdFx0XHR9XG5cdFx0XHQvLyBEaXNhbGxvdyBkaXJlY3QgcHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0ZWxzZSBpZiAobGV2ZWwgPT09IFwiX19wcm90b19fXCIpIGJyZWFrXG5cdFx0XHRpZiAoaiA9PT0gbGV2ZWxzLmxlbmd0aCAtIDEpIGN1cnNvcltsZXZlbF0gPSB2YWx1ZVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIFJlYWQgb3duIHByb3BlcnRpZXMgZXhjbHVzaXZlbHkgdG8gZGlzYWxsb3cgaW5kaXJlY3Rcblx0XHRcdFx0Ly8gcHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0XHR2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY3Vyc29yLCBsZXZlbClcblx0XHRcdFx0aWYgKGRlc2MgIT0gbnVsbCkgZGVzYyA9IGRlc2MudmFsdWVcblx0XHRcdFx0aWYgKGRlc2MgPT0gbnVsbCkgY3Vyc29yW2xldmVsXSA9IGRlc2MgPSBpc051bWJlciA/IFtdIDoge31cblx0XHRcdFx0Y3Vyc29yID0gZGVzY1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBhcnNlUGF0aG5hbWUgPSByZXF1aXJlKFwiLi9wYXJzZVwiKVxuXG4vLyBDb21waWxlcyBhIHRlbXBsYXRlIGludG8gYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcmVzb2x2ZWQgcGF0aCAod2l0aG91dCBxdWVyeVxuLy8gc3RyaW5ncykgYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIHBhcmFtZXRlcnMgd2l0aCB0aGVpclxuLy8gcGFyc2VkIHZhbHVlcy4gVGhpcyBleHBlY3RzIHRoZSBpbnB1dCBvZiB0aGUgY29tcGlsZWQgdGVtcGxhdGUgdG8gYmUgdGhlXG4vLyBvdXRwdXQgb2YgYHBhcnNlUGF0aG5hbWVgLiBOb3RlIHRoYXQgaXQgZG9lcyAqbm90KiByZW1vdmUgcXVlcnkgcGFyYW1ldGVyc1xuLy8gc3BlY2lmaWVkIGluIHRoZSB0ZW1wbGF0ZS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGVtcGxhdGUpIHtcblx0dmFyIHRlbXBsYXRlRGF0YSA9IHBhcnNlUGF0aG5hbWUodGVtcGxhdGUpXG5cdHZhciB0ZW1wbGF0ZUtleXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZURhdGEucGFyYW1zKVxuXHR2YXIga2V5cyA9IFtdXG5cdHZhciByZWdleHAgPSBuZXcgUmVnRXhwKFwiXlwiICsgdGVtcGxhdGVEYXRhLnBhdGgucmVwbGFjZShcblx0XHQvLyBJIGVzY2FwZSBsaXRlcmFsIHRleHQgc28gcGVvcGxlIGNhbiB1c2UgdGhpbmdzIGxpa2UgYDpmaWxlLjpleHRgIG9yXG5cdFx0Ly8gYDpsYW5nLTpsb2NhbGVgIGluIHJvdXRlcy4gVGhpcyBpcyBhbGwgbWVyZ2VkIGludG8gb25lIHBhc3Mgc28gSVxuXHRcdC8vIGRvbid0IGFsc28gYWNjaWRlbnRhbGx5IGVzY2FwZSBgLWAgYW5kIG1ha2UgaXQgaGFyZGVyIHRvIGRldGVjdCBpdCB0b1xuXHRcdC8vIGJhbiBpdCBmcm9tIHRlbXBsYXRlIHBhcmFtZXRlcnMuXG5cdFx0LzooW15cXC8uLV0rKShcXC57M318XFwuKD8hXFwuKXwtKT98W1xcXFxeJCorLigpfFxcW1xcXXt9XS9nLFxuXHRcdGZ1bmN0aW9uKG0sIGtleSwgZXh0cmEpIHtcblx0XHRcdGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuIFwiXFxcXFwiICsgbVxuXHRcdFx0a2V5cy5wdXNoKHtrOiBrZXksIHI6IGV4dHJhID09PSBcIi4uLlwifSlcblx0XHRcdGlmIChleHRyYSA9PT0gXCIuLi5cIikgcmV0dXJuIFwiKC4qKVwiXG5cdFx0XHRpZiAoZXh0cmEgPT09IFwiLlwiKSByZXR1cm4gXCIoW14vXSspXFxcXC5cIlxuXHRcdFx0cmV0dXJuIFwiKFteL10rKVwiICsgKGV4dHJhIHx8IFwiXCIpXG5cdFx0fVxuXHQpICsgXCIkXCIpXG5cdHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0Ly8gRmlyc3QsIGNoZWNrIHRoZSBwYXJhbXMuIFVzdWFsbHksIHRoZXJlIGlzbid0IGFueSwgYW5kIGl0J3MganVzdFxuXHRcdC8vIGNoZWNraW5nIGEgc3RhdGljIHNldC5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlS2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRlbXBsYXRlRGF0YS5wYXJhbXNbdGVtcGxhdGVLZXlzW2ldXSAhPT0gZGF0YS5wYXJhbXNbdGVtcGxhdGVLZXlzW2ldXSkgcmV0dXJuIGZhbHNlXG5cdFx0fVxuXHRcdC8vIElmIG5vIGludGVycG9sYXRpb25zIGV4aXN0LCBsZXQncyBza2lwIGFsbCB0aGUgY2VyZW1vbnlcblx0XHRpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gcmVnZXhwLnRlc3QoZGF0YS5wYXRoKVxuXHRcdHZhciB2YWx1ZXMgPSByZWdleHAuZXhlYyhkYXRhLnBhdGgpXG5cdFx0aWYgKHZhbHVlcyA9PSBudWxsKSByZXR1cm4gZmFsc2Vcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRhdGEucGFyYW1zW2tleXNbaV0ua10gPSBrZXlzW2ldLnIgPyB2YWx1ZXNbaSArIDFdIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlc1tpICsgMV0pXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vc3RyZWFtL3N0cmVhbVwiKVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbjsoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIlxuLyogZXNsaW50LWVuYWJsZSAqL1xuU3RyZWFtLlNLSVAgPSB7fVxuU3RyZWFtLmxpZnQgPSBsaWZ0XG5TdHJlYW0uc2NhbiA9IHNjYW5cblN0cmVhbS5tZXJnZSA9IG1lcmdlXG5TdHJlYW0uY29tYmluZSA9IGNvbWJpbmVcblN0cmVhbS5zY2FuTWVyZ2UgPSBzY2FuTWVyZ2VcblN0cmVhbVtcImZhbnRhc3ktbGFuZC9vZlwiXSA9IFN0cmVhbVxuXG52YXIgd2FybmVkSGFsdCA9IGZhbHNlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyZWFtLCBcIkhBTFRcIiwge1xuXHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHdhcm5lZEhhbHQgfHwgY29uc29sZS5sb2coXCJIQUxUIGlzIGRlcHJlY2F0ZWQgYW5kIGhhcyBiZWVuIHJlbmFtZWQgdG8gU0tJUFwiKTtcblx0XHR3YXJuZWRIYWx0ID0gdHJ1ZVxuXHRcdHJldHVybiBTdHJlYW0uU0tJUFxuXHR9XG59KVxuXG5mdW5jdGlvbiBTdHJlYW0odmFsdWUpIHtcblx0dmFyIGRlcGVuZGVudFN0cmVhbXMgPSBbXVxuXHR2YXIgZGVwZW5kZW50Rm5zID0gW11cblxuXHRmdW5jdGlvbiBzdHJlYW0odikge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHYgIT09IFN0cmVhbS5TS0lQKSB7XG5cdFx0XHR2YWx1ZSA9IHZcblx0XHRcdGlmIChvcGVuKHN0cmVhbSkpIHtcblx0XHRcdFx0c3RyZWFtLl9jaGFuZ2luZygpXG5cdFx0XHRcdHN0cmVhbS5fc3RhdGUgPSBcImFjdGl2ZVwiXG5cdFx0XHRcdGRlcGVuZGVudFN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzLCBpKSB7IHMoZGVwZW5kZW50Rm5zW2ldKHZhbHVlKSkgfSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWVcblx0fVxuXG5cdHN0cmVhbS5jb25zdHJ1Y3RvciA9IFN0cmVhbVxuXHRzdHJlYW0uX3N0YXRlID0gYXJndW1lbnRzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gU3RyZWFtLlNLSVAgPyBcImFjdGl2ZVwiIDogXCJwZW5kaW5nXCJcblx0c3RyZWFtLl9wYXJlbnRzID0gW11cblxuXHRzdHJlYW0uX2NoYW5naW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKG9wZW4oc3RyZWFtKSkgc3RyZWFtLl9zdGF0ZSA9IFwiY2hhbmdpbmdcIlxuXHRcdGRlcGVuZGVudFN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzKSB7XG5cdFx0XHRzLl9jaGFuZ2luZygpXG5cdFx0fSlcblx0fVxuXG5cdHN0cmVhbS5fbWFwID0gZnVuY3Rpb24oZm4sIGlnbm9yZUluaXRpYWwpIHtcblx0XHR2YXIgdGFyZ2V0ID0gaWdub3JlSW5pdGlhbCA/IFN0cmVhbSgpIDogU3RyZWFtKGZuKHZhbHVlKSlcblx0XHR0YXJnZXQuX3BhcmVudHMucHVzaChzdHJlYW0pXG5cdFx0ZGVwZW5kZW50U3RyZWFtcy5wdXNoKHRhcmdldClcblx0XHRkZXBlbmRlbnRGbnMucHVzaChmbilcblx0XHRyZXR1cm4gdGFyZ2V0XG5cdH1cblxuXHRzdHJlYW0ubWFwID0gZnVuY3Rpb24oZm4pIHtcblx0XHRyZXR1cm4gc3RyZWFtLl9tYXAoZm4sIHN0cmVhbS5fc3RhdGUgIT09IFwiYWN0aXZlXCIpXG5cdH1cblxuXHR2YXIgZW5kXG5cdGZ1bmN0aW9uIGNyZWF0ZUVuZCgpIHtcblx0XHRlbmQgPSBTdHJlYW0oKVxuXHRcdGVuZC5tYXAoZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRzdHJlYW0uX3BhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAocCkge3AuX3VucmVnaXN0ZXJDaGlsZChzdHJlYW0pfSlcblx0XHRcdFx0c3RyZWFtLl9zdGF0ZSA9IFwiZW5kZWRcIlxuXHRcdFx0XHRzdHJlYW0uX3BhcmVudHMubGVuZ3RoID0gZGVwZW5kZW50U3RyZWFtcy5sZW5ndGggPSBkZXBlbmRlbnRGbnMubGVuZ3RoID0gMFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0fSlcblx0XHRyZXR1cm4gZW5kXG5cdH1cblxuXHRzdHJlYW0udG9KU09OID0gZnVuY3Rpb24oKSB7IHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09IFwiZnVuY3Rpb25cIiA/IHZhbHVlLnRvSlNPTigpIDogdmFsdWUgfVxuXG5cdHN0cmVhbVtcImZhbnRhc3ktbGFuZC9tYXBcIl0gPSBzdHJlYW0ubWFwXG5cdHN0cmVhbVtcImZhbnRhc3ktbGFuZC9hcFwiXSA9IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIGNvbWJpbmUoZnVuY3Rpb24oczEsIHMyKSB7IHJldHVybiBzMSgpKHMyKCkpIH0sIFt4LCBzdHJlYW1dKSB9XG5cblx0c3RyZWFtLl91bnJlZ2lzdGVyQ2hpbGQgPSBmdW5jdGlvbihjaGlsZCkge1xuXHRcdHZhciBjaGlsZEluZGV4ID0gZGVwZW5kZW50U3RyZWFtcy5pbmRleE9mKGNoaWxkKVxuXHRcdGlmIChjaGlsZEluZGV4ICE9PSAtMSkge1xuXHRcdFx0ZGVwZW5kZW50U3RyZWFtcy5zcGxpY2UoY2hpbGRJbmRleCwgMSlcblx0XHRcdGRlcGVuZGVudEZucy5zcGxpY2UoY2hpbGRJbmRleCwgMSlcblx0XHR9XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3RyZWFtLCBcImVuZFwiLCB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGVuZCB8fCBjcmVhdGVFbmQoKSB9XG5cdH0pXG5cblx0cmV0dXJuIHN0cmVhbVxufVxuXG5mdW5jdGlvbiBjb21iaW5lKGZuLCBzdHJlYW1zKSB7XG5cdHZhciByZWFkeSA9IHN0cmVhbXMuZXZlcnkoZnVuY3Rpb24ocykge1xuXHRcdGlmIChzLmNvbnN0cnVjdG9yICE9PSBTdHJlYW0pXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhhdCBlYWNoIGl0ZW0gcGFzc2VkIHRvIHN0cmVhbS5jb21iaW5lL3N0cmVhbS5tZXJnZS9saWZ0IGlzIGEgc3RyZWFtXCIpXG5cdFx0cmV0dXJuIHMuX3N0YXRlID09PSBcImFjdGl2ZVwiXG5cdH0pXG5cdHZhciBzdHJlYW0gPSByZWFkeVxuXHRcdD8gU3RyZWFtKGZuLmFwcGx5KG51bGwsIHN0cmVhbXMuY29uY2F0KFtzdHJlYW1zXSkpKVxuXHRcdDogU3RyZWFtKClcblxuXHR2YXIgY2hhbmdlZCA9IFtdXG5cblx0dmFyIG1hcHBlcnMgPSBzdHJlYW1zLm1hcChmdW5jdGlvbihzKSB7XG5cdFx0cmV0dXJuIHMuX21hcChmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0Y2hhbmdlZC5wdXNoKHMpXG5cdFx0XHRpZiAocmVhZHkgfHwgc3RyZWFtcy5ldmVyeShmdW5jdGlvbihzKSB7IHJldHVybiBzLl9zdGF0ZSAhPT0gXCJwZW5kaW5nXCIgfSkpIHtcblx0XHRcdFx0cmVhZHkgPSB0cnVlXG5cdFx0XHRcdHN0cmVhbShmbi5hcHBseShudWxsLCBzdHJlYW1zLmNvbmNhdChbY2hhbmdlZF0pKSlcblx0XHRcdFx0Y2hhbmdlZCA9IFtdXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWVcblx0XHR9LCB0cnVlKVxuXHR9KVxuXG5cdHZhciBlbmRTdHJlYW0gPSBzdHJlYW0uZW5kLm1hcChmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0bWFwcGVycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcHBlcikgeyBtYXBwZXIuZW5kKHRydWUpIH0pXG5cdFx0XHRlbmRTdHJlYW0uZW5kKHRydWUpXG5cdFx0fVxuXHRcdHJldHVybiB1bmRlZmluZWRcblx0fSlcblxuXHRyZXR1cm4gc3RyZWFtXG59XG5cbmZ1bmN0aW9uIG1lcmdlKHN0cmVhbXMpIHtcblx0cmV0dXJuIGNvbWJpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBzdHJlYW1zLm1hcChmdW5jdGlvbihzKSB7IHJldHVybiBzKCkgfSkgfSwgc3RyZWFtcylcbn1cblxuZnVuY3Rpb24gc2NhbihmbiwgYWNjLCBvcmlnaW4pIHtcblx0dmFyIHN0cmVhbSA9IG9yaWdpbi5tYXAoZnVuY3Rpb24odikge1xuXHRcdHZhciBuZXh0ID0gZm4oYWNjLCB2KVxuXHRcdGlmIChuZXh0ICE9PSBTdHJlYW0uU0tJUCkgYWNjID0gbmV4dFxuXHRcdHJldHVybiBuZXh0XG5cdH0pXG5cdHN0cmVhbShhY2MpXG5cdHJldHVybiBzdHJlYW1cbn1cblxuZnVuY3Rpb24gc2Nhbk1lcmdlKHR1cGxlcywgc2VlZCkge1xuXHR2YXIgc3RyZWFtcyA9IHR1cGxlcy5tYXAoZnVuY3Rpb24odHVwbGUpIHsgcmV0dXJuIHR1cGxlWzBdIH0pXG5cblx0dmFyIHN0cmVhbSA9IGNvbWJpbmUoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNoYW5nZWQgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdXG5cdFx0c3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSwgaSkge1xuXHRcdFx0aWYgKGNoYW5nZWQuaW5kZXhPZihzdHJlYW0pID4gLTEpXG5cdFx0XHRcdHNlZWQgPSB0dXBsZXNbaV1bMV0oc2VlZCwgc3RyZWFtKCkpXG5cdFx0fSlcblxuXHRcdHJldHVybiBzZWVkXG5cdH0sIHN0cmVhbXMpXG5cblx0c3RyZWFtKHNlZWQpXG5cblx0cmV0dXJuIHN0cmVhbVxufVxuXG5mdW5jdGlvbiBsaWZ0KCkge1xuXHR2YXIgZm4gPSBhcmd1bWVudHNbMF1cblx0dmFyIHN0cmVhbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cdHJldHVybiBtZXJnZShzdHJlYW1zKS5tYXAoZnVuY3Rpb24oc3RyZWFtcykge1xuXHRcdHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIHN0cmVhbXMpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIG9wZW4ocykge1xuXHRyZXR1cm4gcy5fc3RhdGUgPT09IFwicGVuZGluZ1wiIHx8IHMuX3N0YXRlID09PSBcImFjdGl2ZVwiIHx8IHMuX3N0YXRlID09PSBcImNoYW5naW5nXCJcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIG1vZHVsZVtcImV4cG9ydHNcIl0gPSBTdHJlYW1cbmVsc2UgaWYgKHR5cGVvZiB3aW5kb3cubSA9PT0gXCJmdW5jdGlvblwiICYmICEoXCJzdHJlYW1cIiBpbiB3aW5kb3cubSkpIHdpbmRvdy5tLnN0cmVhbSA9IFN0cmVhbVxuZWxzZSB3aW5kb3cubSA9IHtzdHJlYW0gOiBTdHJlYW19XG5cbn0oKSk7XG4iLCJjb25zdCBlPU9iamVjdC5hc3NpZ258fCgoZSx0KT0+KHQmJk9iamVjdC5rZXlzKHQpLmZvckVhY2gobz0+ZVtvXT10W29dKSxlKSksdD0oZSxyLHMpPT57Y29uc3QgYz10eXBlb2YgcztpZihzJiZcIm9iamVjdFwiPT09YylpZihBcnJheS5pc0FycmF5KHMpKWZvcihjb25zdCBvIG9mIHMpcj10KGUscixvKTtlbHNlIGZvcihjb25zdCBjIG9mIE9iamVjdC5rZXlzKHMpKXtjb25zdCBmPXNbY107XCJmdW5jdGlvblwiPT10eXBlb2YgZj9yW2NdPWYocltjXSxvKTp2b2lkIDA9PT1mP2UmJiFpc05hTihjKT9yLnNwbGljZShjLDEpOmRlbGV0ZSByW2NdOm51bGw9PT1mfHxcIm9iamVjdFwiIT10eXBlb2YgZnx8QXJyYXkuaXNBcnJheShmKT9yW2NdPWY6XCJvYmplY3RcIj09dHlwZW9mIHJbY10/cltjXT1mPT09cltjXT9mOm8ocltjXSxmKTpyW2NdPXQoITEse30sZil9ZWxzZVwiZnVuY3Rpb25cIj09PWMmJihyPXMocixvKSk7cmV0dXJuIHJ9LG89KG8sLi4ucik9Pntjb25zdCBzPUFycmF5LmlzQXJyYXkobyk7cmV0dXJuIHQocyxzP28uc2xpY2UoKTplKHt9LG8pLHIpfTtleHBvcnQgZGVmYXVsdCBvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VyaW5vLm1pbi5qcy5tYXAiLCJpbXBvcnQgY29tbW9uU2V0dXAgZnJvbSBcIi4uL2NvbW1vblwiO1xuXG4vKipcbiAqIEhlbHBlciB0byBzZXR1cCB0aGUgTWVpb3NpcyBwYXR0ZXJuLlxuICpcbiAqIEBhc3luY1xuICogQGZ1bmN0aW9uIG1laW9zaXMubWVyZ2VyaW5vLnNldHVwXG4gKlxuICogQHBhcmFtIHtTdHJlYW1MaWJ9IHN0cmVhbSAtIHRoZSBzdHJlYW0gbGlicmFyeS4gVGhpcyB3b3JrcyB3aXRoIGBtZWlvc2lzLnNpbXBsZVN0cmVhbWAsIGBmbHlkYCxcbiAqIGBtLnN0cmVhbWAsIG9yIGFueXRoaW5nIGZvciB3aGljaCB5b3UgcHJvdmlkZSBlaXRoZXIgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Qgd2l0aCBhIGBzdHJlYW1gXG4gKiBmdW5jdGlvbiB0byBjcmVhdGUgYSBzdHJlYW0uIFRoZSBmdW5jdGlvbiBvciBvYmplY3QgbXVzdCBhbHNvIGhhdmUgYSBgc2NhbmAgcHJvcGVydHkuXG4gKiBUaGUgcmV0dXJuZWQgc3RyZWFtIG11c3QgaGF2ZSBhIGBtYXBgIG1ldGhvZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlIC0gdGhlIE1lcmdlcmlubyBgbWVyZ2VgIGZ1bmN0aW9uLlxuICogQHBhcmFtIHthcHB9IGFwcCAtIHRoZSBhcHAsIHdpdGggb3B0aW9uYWwgcHJvcGVydGllcy5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIGB7IHVwZGF0ZSwgc3RhdGVzLCBhY3Rpb25zIH1gLCB3aGVyZSBgdXBkYXRlYCBhbmQgYHN0YXRlc2AgYXJlIHN0cmVhbXMsXG4gKiBhbmQgYGFjdGlvbnNgIGFyZSB0aGUgY3JlYXRlZCBhY3Rpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCAoeyBzdHJlYW0sIG1lcmdlLCBhcHAgfSkgPT5cbiAgY29tbW9uU2V0dXAoe1xuICAgIHN0cmVhbSxcbiAgICBhY2N1bXVsYXRvcjogbWVyZ2UsXG4gICAgY29tYmluZTogcGF0Y2hlcyA9PiBwYXRjaGVzLFxuICAgIGFwcFxuICB9KTtcbiIsIi8qKlxuICogQXBwbGljYXRpb24gb2JqZWN0LlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IGFwcFxuICogQHByb3BlcnR5IHtPYmplY3R9IFtpbml0aWFsPXt9XSAtIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW5pdGlhbCBzdGF0ZSB3aWxsIGJlIGB7fWAuXG4gKiBAcHJvcGVydHkge2FueX0gW3BhdGNoPWZhbHNlXSAtIGEgcGF0Y2ggdGhhdCB3aWxsIGluaXRpYWxseSBiZSBzZW50IG9udG8gdGhlIGB1cGRhdGVgIHN0cmVhbS5cbiAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbml0aWFsIHBhdGNoIHdpbGwgYmUgYGZhbHNlYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtBY3Rpb25zPSgpPT4oe30pXSAtIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFjdGlvbnMsIG9mIHRoZSBmb3JtXG4gKiBgdXBkYXRlID0+IGFjdGlvbnNgLlxuICogQHByb3BlcnR5IHtBcnJheTxGdW5jdGlvbj59IFtzZXJ2aWNlcz1bXV0gLSBhbiBhcnJheSBvZiBzZXJ2aWNlIGZ1bmN0aW9ucywgZWFjaCBvZiB3aGljaFxuICogc2hvdWxkIGJlIGAoeyBzdGF0ZSwgcHJldmlvdXNTdGF0ZSwgcGF0Y2ggfSkgPT4gKHsgc3RhdGU/LCBwYXRjaD8sIHJlbmRlcj8sIG5leHQ/IH0pYC5cbiAqL1xuXG4vKipcbiAqIFN0cmVhbSBsaWJyYXJ5LiBUaGlzIHdvcmtzIHdpdGggYG1laW9zaXMuc2ltcGxlU3RyZWFtYCwgYGZseWRgLCBgbS5zdHJlYW1gLCBvciBhbnl0aGluZyBmb3JcbiAqIHdoaWNoIHlvdSBwcm92aWRlIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdCB3aXRoIGEgYHN0cmVhbWAgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3RyZWFtLiBUaGVcbiAqIGZ1bmN0aW9uIG9yIG9iamVjdCBtdXN0IGFsc28gaGF2ZSBhIGBzY2FuYCBwcm9wZXJ0eS4gVGhlIHJldHVybmVkIHN0cmVhbSBtdXN0IGhhdmUgYSBgbWFwYFxuICogbWV0aG9kLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R8RnVuY3Rpb259IFN0cmVhbUxpYlxuICogQHBhcmFtIHsqfSBbdmFsdWVdIC0gdGhlIHN0cmVhbSdzIGluaXRpYWwgdmFsdWUuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzdHJlYW0gLSB0aGUgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3RyZWFtLCBpZiB0aGUgc3RyZWFtIGxpYnJhcnkgaXRzZWxmIGlzXG4gKiBub3QgYSBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNjYW4gLSB0aGUgc3RyZWFtIGxpYnJhcnkncyBgc2NhbmAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtzaW1wbGVTdHJlYW19IC0gdGhlIGNyZWF0ZWQgc3RyZWFtLlxuICovXG5cbi8qKlxuICogQmFzZSBoZWxwZXIgdG8gc2V0dXAgdGhlIE1laW9zaXMgcGF0dGVybi4gSWYgeW91IGFyZSB1c2luZyBNZXJnZXJpbm8sIEZ1bmN0aW9uIFBhdGNoZXMsIG9yIEltbWVyLFxuICogdXNlIHRoZWlyIHJlc3BlY3RpdmUgYHNldHVwYCBmdW5jdGlvbiBpbnN0ZWFkLlxuICpcbiAqIFBhdGNoIGlzIG1lcmdlZCBpbiB0byB0aGUgc3RhdGUgYnkgZGVmYXVsdC4gU2VydmljZXMgaGF2ZSBhY2Nlc3MgdG8gdGhlIHByZXZpb3VzIHN0YXRlIGFuZCBjYW5cbiAqIGNhbmNlbCBvciBhbHRlciB0aGUgb3JpZ2luYWwgcGF0Y2guIFN0YXRlIGNoYW5nZXMgYnkgc2VydmljZXMgYXJlIGF2YWlsYWJsZSB0byB0aGUgbmV4dCBzZXJ2aWNlc1xuICogaW4gdGhlIGxpc3QuXG4gKlxuICogQGFzeW5jXG4gKiBAZnVuY3Rpb24gbWVpb3Npcy5jb21tb24uc2V0dXBcbiAqXG4gKiBAcGFyYW0ge1N0cmVhbUxpYn0gc3RyZWFtIC0gdGhlIHN0cmVhbSBsaWJyYXJ5LiBUaGlzIHdvcmtzIHdpdGggYG1laW9zaXMuc2ltcGxlU3RyZWFtYCwgYGZseWRgLFxuICogYG0uc3RyZWFtYCwgb3IgYW55dGhpbmcgZm9yIHdoaWNoIHlvdSBwcm92aWRlIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdCB3aXRoIGEgYHN0cmVhbWBcbiAqIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN0cmVhbS4gVGhlIGZ1bmN0aW9uIG9yIG9iamVjdCBtdXN0IGFsc28gaGF2ZSBhIGBzY2FuYCBwcm9wZXJ0eS4gVGhlXG4gKiByZXR1cm5lZCBzdHJlYW0gbXVzdCBoYXZlIGEgYG1hcGAgbWV0aG9kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWNjdW11bGF0b3IgLSB0aGUgYWNjdW11bGF0b3IgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21iaW5lIC0gdGhlIGZ1bmN0aW9uIHRoYXQgY29tYmluZXMgYW4gYXJyYXkgb2YgcGF0Y2hlcyBpbnRvIG9uZS5cbiAqIEBwYXJhbSB7YXBwfSBhcHAgLSB0aGUgYXBwLCB3aXRoIG9wdGlvbmFsIHByb3BlcnRpZXMuXG4gKlxuICogQHJldHVybnMge09iamVjdH0gLSBgeyB1cGRhdGUsIHN0YXRlcywgYWN0aW9ucyB9YCwgd2hlcmUgYHVwZGF0ZWAgYW5kIGBzdGF0ZXNgIGFyZSBzdHJlYW1zLFxuICogYW5kIGBhY3Rpb25zYCBhcmUgdGhlIGNyZWF0ZWQgYWN0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHsgc3RyZWFtLCBhY2N1bXVsYXRvciwgY29tYmluZSwgYXBwIH0pID0+IHtcbiAgaWYgKCFzdHJlYW0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdHJlYW0gbGlicmFyeSB3YXMgc3BlY2lmaWVkLlwiKTtcbiAgfVxuICBpZiAoIWFjY3VtdWxhdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjdW11bGF0b3IgZnVuY3Rpb24gd2FzIHNwZWNpZmllZC5cIik7XG4gIH1cbiAgaWYgKCFjb21iaW5lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tYmluZSBmdW5jdGlvbiB3YXMgc3BlY2lmaWVkLlwiKTtcbiAgfVxuXG4gIGFwcCA9IGFwcCB8fCB7fTtcbiAgbGV0IHsgaW5pdGlhbCwgQWN0aW9ucywgc2VydmljZXMgfSA9IGFwcDtcbiAgaW5pdGlhbCA9IGluaXRpYWwgfHwge307XG4gIHNlcnZpY2VzID0gc2VydmljZXMgfHwgW107XG5cbiAgY29uc3Qgc2luZ2xlUGF0Y2ggPSBwYXRjaCA9PiAoQXJyYXkuaXNBcnJheShwYXRjaCkgPyBjb21iaW5lKHBhdGNoKSA6IHBhdGNoKTtcbiAgY29uc3QgYWNjdW11bGF0b3JGbiA9IChzdGF0ZSwgcGF0Y2gpID0+IChwYXRjaCA/IGFjY3VtdWxhdG9yKHN0YXRlLCBzaW5nbGVQYXRjaChwYXRjaCkpIDogc3RhdGUpO1xuXG4gIGNvbnN0IGNyZWF0ZVN0cmVhbSA9IHR5cGVvZiBzdHJlYW0gPT09IFwiZnVuY3Rpb25cIiA/IHN0cmVhbSA6IHN0cmVhbS5zdHJlYW07XG4gIGNvbnN0IHNjYW4gPSBzdHJlYW0uc2NhbjtcblxuICBjb25zdCB1cGRhdGUgPSBjcmVhdGVTdHJlYW0oKTtcbiAgY29uc3QgYWN0aW9ucyA9IChBY3Rpb25zIHx8ICgoKSA9PiAoe30pKSkodXBkYXRlKTtcbiAgY29uc3Qgc3RhdGVzID0gY3JlYXRlU3RyZWFtKCk7XG5cbiAgLy8gY29udGV4dCBpcyB7IHN0YXRlLCBwYXRjaCwgcHJldmlvdXNTdGF0ZSB9XG4gIC8vIHNob3VsZCByZXR1cm4geyBzdGF0ZSwgcmVuZGVyLCBuZXh0IH1cbiAgY29uc3QgdXBkYXRlU3RhdGUgPSBjb250ZXh0ID0+IHtcbiAgICBsZXQgdXBkYXRlZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gYSBzZXJ2aWNlIHNob3VsZCByZXR1cm4geyBzdGF0ZSwgcGF0Y2gsIHJlbmRlciwgbmV4dCB9IChhbGwgb3B0aW9uYWwpXG4gICAgICBjb25zdCBzZXJ2aWNlVXBkYXRlID0gc2VydmljZXNbaV0odXBkYXRlZENvbnRleHQpO1xuXG4gICAgICBpZiAoc2VydmljZVVwZGF0ZSkge1xuICAgICAgICAvLyBJZiBhIHNlcnZpY2UgY2FuY2VsbGVkIGEgcGF0Y2gsIGFib3J0XG4gICAgICAgIGlmIChzZXJ2aWNlVXBkYXRlLnBhdGNoID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXI6IGZhbHNlLFxuICAgICAgICAgICAgc3RhdGU6IGNvbnRleHQucHJldmlvdXNTdGF0ZSxcbiAgICAgICAgICAgIG5leHQ6IFtdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhIHNlcnZpY2UgY2hhbmdlZCBhIHBhdGNoLCBhYm9ydCBjdXJyZW50IGFuZCBpc3N1ZSB0aGUgbmV3IHBhdGNoXG4gICAgICAgIGlmIChzZXJ2aWNlVXBkYXRlLnBhdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlbmRlcjogZmFsc2UsXG4gICAgICAgICAgICBzdGF0ZTogY29udGV4dC5wcmV2aW91c1N0YXRlLFxuICAgICAgICAgICAgbmV4dDogWyh7IHVwZGF0ZSB9KSA9PiB1cGRhdGUoc2VydmljZVVwZGF0ZS5wYXRjaCldXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgbmV4dCBmdW5jdGlvblxuICAgICAgICBpZiAoc2VydmljZVVwZGF0ZS5uZXh0KSB7XG4gICAgICAgICAgdXBkYXRlZENvbnRleHQubmV4dC5wdXNoKHNlcnZpY2VVcGRhdGUubmV4dCk7XG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2VVcGRhdGUubmV4dDtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgdGhlIGNvbnRleHRcbiAgICAgICAgdXBkYXRlZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHVwZGF0ZWRDb250ZXh0LCBzZXJ2aWNlVXBkYXRlLCB7XG4gICAgICAgICAgc3RhdGU6IGFjY3VtdWxhdG9yRm4odXBkYXRlZENvbnRleHQuc3RhdGUsIHNlcnZpY2VVcGRhdGUuc3RhdGUpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlZENvbnRleHQ7XG4gIH07XG5cbiAgY29uc3QgY29udGV4dHMgPSBzY2FuKFxuICAgIChjb250ZXh0LCBwYXRjaCkgPT5cbiAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgcHJldmlvdXNTdGF0ZTogY29udGV4dC5zdGF0ZSxcbiAgICAgICAgc3RhdGU6IGFjY3VtdWxhdG9yRm4oY29udGV4dC5zdGF0ZSwgcGF0Y2gpLFxuICAgICAgICBwYXRjaCxcbiAgICAgICAgcmVuZGVyOiB0cnVlLFxuICAgICAgICBuZXh0OiBbXVxuICAgICAgfSksXG4gICAgeyBzdGF0ZTogaW5pdGlhbCB9LFxuICAgIHVwZGF0ZVxuICApO1xuXG4gIGNvbnRleHRzLm1hcChjb250ZXh0ID0+IHtcbiAgICBpZiAoY29udGV4dC5yZW5kZXIpIHtcbiAgICAgIHN0YXRlcyhjb250ZXh0LnN0YXRlKTtcbiAgICB9XG4gICAgaWYgKGNvbnRleHQubmV4dCkge1xuICAgICAgY29udGV4dC5uZXh0LmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgICAgIHNlcnZpY2Uoe1xuICAgICAgICAgIHN0YXRlOiBjb250ZXh0LnN0YXRlLFxuICAgICAgICAgIHBhdGNoOiBjb250ZXh0LnBhdGNoLFxuICAgICAgICAgIHVwZGF0ZSxcbiAgICAgICAgICBhY3Rpb25zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBydW4gc2VydmljZXMgb24gaW5pdGlhbCBzdGF0ZVxuICB1cGRhdGUoYXBwLnBhdGNoIHx8IGZhbHNlKTtcblxuICByZXR1cm4geyB1cGRhdGUsIGNvbnRleHRzLCBzdGF0ZXMsIGFjdGlvbnMgfTtcbn07XG4iLCJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IHsgUm91dGluZyB9IGZyb20gXCJtZWlvc2lzLXJvdXRpbmcvc3RhdGVcIjtcblxuaW1wb3J0IHsgUm91dGUsIG5hdlRvLCByb3V0ZXIsIGNvbXBvbmVudE1hcCB9IGZyb20gXCIuL3JvdXRlclwiO1xuXG4vLyBUb3AgbGV2ZWwgYXBwIHN0cnVjdHVyZSBmb3IgSlNcbmV4cG9ydCBjb25zdCBBcHBDb21wb25lbnQgPSB7XG4gIHZpZXc6ICh7IGF0dHJzOiB7IHN0YXRlLCBhY3Rpb25zIH0gfSkgPT4gXG4gICAgbShSb290LCB7IHN0YXRlLCBhY3Rpb25zIH0pXG59O1xuXG5jb25zdCBSb290ID0ge1xuICB2aWV3OiAoe2F0dHJzOiB7c3RhdGUsIGFjdGlvbnN9fSkgPT4ge1xuICAgIGNvbnN0IHJvdXRpbmcgPSBSb3V0aW5nKHN0YXRlLnJvdXRlKTtcbiAgICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnRNYXBbcm91dGluZy5sb2NhbFNlZ21lbnQuaWRdO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGFiID0+IHRhYiA9PT0gQ29tcG9uZW50OyBcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG5cbiAgICByZXR1cm4gbShcIm1haW4udy0xMDBcIiwgXG4gICAgICBbXG4gICAgICAgIG0oXCIuZmwudy0xMDAudy0yMC1uc1wiLCBbXG4gICAgICAgICAgbShtLnJvdXRlLkxpbmssIHtocmVmOiByb3V0ZXIudG9QYXRoKFtSb3V0ZS5Ib21lKCldKSwgY2xhc3M6IFwicGwzXCJ9LCBcIkhvbWVcIiksXG4gICAgICAgICAgbShtLnJvdXRlLkxpbmssIHtocmVmOiByb3V0ZXIudG9QYXRoKFtSb3V0ZS5DYXJkKCldKSwgY2xhc3M6IFwicGwzXCJ9LCBcIkNhcmRcIilcbiAgICAgICAgXSksXG4gICAgICAgIG0oXCIuZmwudy0xMDAudy04MC1uc1wiLCBtKENvbXBvbmVudCwge3N0YXRlLCBhY3Rpb25zLCByb3V0aW5nfSkpXG4gICAgICBdKTtcbiAgfVxufTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIGBtZWlvc2lzLXJvdXRpbmcvc3RhdGVgXG4gKlxuICogVGhlIGBzdGF0ZWAgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgcm91dGVzIGluIHRoZSBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqXG4gKiBAbW9kdWxlIHN0YXRlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLy8vLy8vXG4vLyBmYXN0RGVlcEVxdWFsIGNyZWRpdDogaHR0cHM6Ly9naXRodWIuY29tL2Vwb2JlcmV6a2luL2Zhc3QtZGVlcC1lcXVhbFxuLy8gVGhpcyB2ZXJzaW9uIGRvZXMgbm90IGhhbmRsZSBEYXRlIGFuZCBSZWdFeHAsIGJlY2F1c2Ugd2Ugc2hvdWxkbid0IGhhdmUgdGhvc2UgdHlwZXMgd2hlblxuLy8gcGFyc2luZyBhIFVSTCBzdHJpbmcuXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGtleUxpc3QgPSBPYmplY3Qua2V5cztcbmNvbnN0IGhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY29uc3QgZmFzdERlZXBFcXVhbCA9IChhLCBiKSA9PiB7XG4gICAgaWYgKGEgPT09IGIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGFyckEgPSBpc0FycmF5KGEpLCBhcnJCID0gaXNBcnJheShiKTtcbiAgICAgICAgbGV0IGksIGxlbmd0aCwga2V5O1xuICAgICAgICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICAgICAgICAgIGlmICghZmFzdERlZXBFcXVhbChhW2ldLCBiW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyckEgIT0gYXJyQilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3Qga2V5cyA9IGtleUxpc3QoYSk7XG4gICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoICE9PSBrZXlMaXN0KGIpLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoYiwga2V5c1tpXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIWZhc3REZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn07XG5jb25zdCBkZWZhdWx0RW1wdHkgPSAocm91dGUpID0+IChBcnJheS5pc0FycmF5KHJvdXRlKSA/IHJvdXRlIDogW10pO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJvdXRlYCBoZWxwZXIgd2l0aCBmdW5jdGlvbnMgdG8gY3JlYXRlIHJvdXRlIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSByb3V0ZU5hbWVzIHRoZSBsaXN0IG9mIHJvdXRlIG5hbWVzLlxuICogQHJldHVybnMgYSBgUm91dGVgIG9iamVjdCB3aXRoIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYFxuICpcbiAqIGNvbnN0IFJvdXRlID0gY3JlYXRlUm91dGVTZWdtZW50cyhbXCJIb21lXCIsIFwiVXNlclwiXSk7XG4gKlxuICogUm91dGUuSG9tZSgpXG4gKiAvLyB7IGlkOiBcIkhvbWVcIiwgcGFyYW1zOiB7fSB9XG4gKlxuICogUm91dGUuVXNlcih7IG5hbWU6IFwiZHVja1wiIH0pXG4gKiAvLyB7IGlkOiBcIlVzZXJcIiwgcGFyYW1zOiB7IG5hbWU6IFwiZHVja1wiIH0gfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlU2VnbWVudHMocm91dGVOYW1lcykge1xuICAgIHJldHVybiByb3V0ZU5hbWVzLnJlZHVjZSgocmVzdWx0LCBpZCkgPT4ge1xuICAgICAgICByZXN1bHRbaWRdID0gKHBhcmFtcykgPT4gKHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMgPT0gbnVsbCA/IHt9IDogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydHMuY3JlYXRlUm91dGVTZWdtZW50cyA9IGNyZWF0ZVJvdXRlU2VnbWVudHM7XG4vKipcbiAqIExvb2tzIGZvciBhIHJvdXRlIHNlZ21lbnQsIHdpdGggbWF0Y2hpbmcgcGFyYW1zLCBpbiBhIHJvdXRlLlxuICpcbiAqIEBwYXJhbSByb3V0ZSB0aGUgcm91dGUgdG8gc2VhcmNoLlxuICogQHBhcmFtIHJvdXRlU2VnbWVudFdpdGhQYXJhbXMgdGhlIHJvdXRlIHNlZ21lbnQgdG8gc2VhcmNoIGZvciBpbiB0aGUgcm91dGUuXG4gKiBAcmV0dXJucyB0aGUgbWF0Y2hpbmcgUm91dGUgc2VnbWVudCwgb3IgYHVuZGVmaW5lZGAgaWYgYHJvdXRlYCBpcyBlbXB0eSBvciB0aGUgcm91dGUgc2VnbWVudFxuICogd2FzIG5vdCBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gZmluZFJvdXRlU2VnbWVudFdpdGhQYXJhbXMocm91dGUsIHJvdXRlU2VnbWVudFdpdGhQYXJhbXMpIHtcbiAgICByZXR1cm4gZGVmYXVsdEVtcHR5KHJvdXRlKS5maW5kKChyb3V0ZVNlZ21lbnQpID0+IHJvdXRlU2VnbWVudC5pZCA9PT0gcm91dGVTZWdtZW50V2l0aFBhcmFtcy5pZCAmJlxuICAgICAgICBmYXN0RGVlcEVxdWFsKHJvdXRlU2VnbWVudC5wYXJhbXMsIHJvdXRlU2VnbWVudFdpdGhQYXJhbXMucGFyYW1zKSk7XG59XG5leHBvcnRzLmZpbmRSb3V0ZVNlZ21lbnRXaXRoUGFyYW1zID0gZmluZFJvdXRlU2VnbWVudFdpdGhQYXJhbXM7XG4vKipcbiAqIExvb2tzIGZvciBhIFJvdXRlIHNlZ21lbnQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHBhcmFtcywgaW4gYSByb3V0ZS5cbiAqXG4gKiBAcGFyYW0gcm91dGUgdGhlIHJvdXRlIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSBpZCB0aGUgcm91dGUgc2VnbWVudCwgb3IganVzdCB0aGUgaWQgb2YgdGhlIHJvdXRlIHNlZ21lbnQsIHRvIHNlYXJjaCBmb3IgaW4gdGhlIHJvdXRlLlxuICogQHJldHVybnMgdGhlIG1hdGNoaW5nIFJvdXRlIHNlZ21lbnQsIG9yIGB1bmRlZmluZWRgIGlmIGByb3V0ZWAgaXMgZW1wdHkgb3IgYSByb3V0ZSBzZWdtZW50IHdpdGhcbiAqIHRoZSBnaXZlbiBpZCB3YXMgbm90IGZvdW5kLlxuICovXG5mdW5jdGlvbiBmaW5kUm91dGVTZWdtZW50KHJvdXRlLCBpZCkge1xuICAgIGNvbnN0IGZpbmRJZCA9IGlkLmlkIHx8IGlkO1xuICAgIHJldHVybiBkZWZhdWx0RW1wdHkocm91dGUpLmZpbmQoKHJvdXRlU2VnbWVudCkgPT4gcm91dGVTZWdtZW50LmlkID09PSBmaW5kSWQpO1xufVxuZXhwb3J0cy5maW5kUm91dGVTZWdtZW50ID0gZmluZFJvdXRlU2VnbWVudDtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byByb3V0ZXMuXG4gKlxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICogQHJldHVybnMgdGhlIHJvdXRlIHJlcHJlc2VudGluZyB0aGUgc2VnbWVudHMgdGhhdCBhcmUgaW4gdGhlIGBmcm9tYCByb3V0ZSBidXQgbm90IGluIHRoZSBgdG9gXG4gKiByb3V0ZS5cbiAqL1xuZnVuY3Rpb24gZGlmZlJvdXRlKGZyb20sIHRvKSB7XG4gICAgY29uc3QgaW5pdCA9IHt9O1xuICAgIHJldHVybiBkZWZhdWx0RW1wdHkoZnJvbSkucmVkdWNlKChyZXN1bHQsIGZyb21Sb3V0ZVNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKGZpbmRSb3V0ZVNlZ21lbnRXaXRoUGFyYW1zKHRvLCBmcm9tUm91dGVTZWdtZW50KSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHRbZnJvbVJvdXRlU2VnbWVudC5pZF0gPSBmcm9tUm91dGVTZWdtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgaW5pdCk7XG59XG5leHBvcnRzLmRpZmZSb3V0ZSA9IGRpZmZSb3V0ZTtcbi8qKlxuICogQ2FsY3VsYXRlcyByb3V0ZSB0cmFuc2l0aW9ucywgcHJvdmlkaW5nIGBsZWF2ZWAsIGBhcnJpdmVgLCBhbmQgYHBhcmFtc2AgdG8gaW5kaWNhdGUgdGhlIHJvdXRlXG4gKiBzZWdtZW50cyBmb3IgdGhlIHJvdXRlIHRoYXQgd2UgYXJlIGxlYXZpbmcsIHRoZSByb3V0ZSB0byB3aGljaCB3ZSBhcmUgYXJyaXZpbmcsIGFuZCB0aGUgcm91dGVcbiAqIGZvciB3aGljaCBwYXJhbXMgaGF2ZSBjaGFuZ2VkLCByZXNwZWN0aXZlbHkuXG4gKlxuICogQHBhcmFtIGN1cnJlbnRSb3V0ZSB0aGUgY3VycmVudCByb3V0ZSwgYmVmb3JlIG5hdmlnYXRpb24uXG4gKiBAcGFyYW0gbmV4dFJvdXRlIHRoZSByb3V0ZSB0byB3aGljaCB3ZSBhcmUgbmF2aWdhdGluZy5cbiAqIEByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBsZWF2ZWAsIGBhcnJpdmVgLCBhbmQgYHBhcmFtc2AgcHJvcGVydGllcy5cbiAqL1xuZnVuY3Rpb24gcm91dGVUcmFuc2l0aW9uKGN1cnJlbnRSb3V0ZSwgbmV4dFJvdXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVhdmU6IGRpZmZSb3V0ZShjdXJyZW50Um91dGUsIG5leHRSb3V0ZSksXG4gICAgICAgIGFycml2ZTogZGlmZlJvdXRlKG5leHRSb3V0ZSwgY3VycmVudFJvdXRlKVxuICAgIH07XG59XG5leHBvcnRzLnJvdXRlVHJhbnNpdGlvbiA9IHJvdXRlVHJhbnNpdGlvbjtcbi8qKlxuICogQ2FsbHMgYSBmdW5jdGlvbiB3aXRoIGEgdmFsdWUgb25seSBpZiB0aGUgdmFsdWUgaXMgbm90IGBudWxsYCBvciBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIGZuIHRoZSBmdW5jdGlvbiB0byBjYWxsIGlmIGB2YWx1ZWAgaXMgcHJlc2VudC5cbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgY2FsbGluZyBgZm4odmFsdWUpYCwgb3IgYG51bGxgIGlmIGB2YWx1ZWAgaXMgYWJzZW50LlxuICovXG5mdW5jdGlvbiB3aGVuUHJlc2VudCh2YWx1ZSwgZm4pIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IGZuKHZhbHVlKSA6IG51bGw7XG59XG5leHBvcnRzLndoZW5QcmVzZW50ID0gd2hlblByZXNlbnQ7XG4vKipcbiAqIEBjb25zdHJ1Y3RvciBbW1JvdXRpbmdPYmplY3RdXVxuICpcbiAqIEBwYXJhbSByb3V0ZSB0aGUgY3VycmVudCByb3V0ZSwgZm9yIGV4YW1wbGUgYHN0YXRlLnJvdXRlLmN1cnJlbnRgLlxuICogQHBhcmFtIGluZGV4IHRoZSByb3V0ZSBzZWdtZW50IGluZGV4LiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBhbmQgeW91IHNob3VsZCBub3Qgc3BlY2lmeSBhIHZhbHVlXG4gKiBmb3IgdGhpcyBwYXJhbWV0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqXG4gKiAvLyBpbiByb290IGNvbXBvbmVudFxuICogY29uc3QgUm9vdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAqICAgY29uc3Qgcm91dGluZyA9IFJvdXRpbmcoc3RhdGUucm91dGUuY3VycmVudCk7XG4gKiAgIGNvbnN0IENvbXBvbmVudCA9IGNvbXBvbmVudE1hcFtyb3V0aW5nLmxvY2FsU2VnbWVudC5pZF07XG4gKlxuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8Q29tcG9uZW50IC8vIG90aGVyIHByb3BzLi4uIC8vIHJvdXRpbmc9e3JvdXRpbmd9IC8+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9O1xuICpcbiAqIC8vIGluIGNoaWxkIGNvbXBvbmVudFxuICogY29uc3QgQ2hpbGQgPSAoeyBzdGF0ZSwgcm91dGluZyB9KSA9PiB7XG4gKiAgIGNvbnN0IENvbXBvbmVudCA9IGNvbXBvbmVudE1hcFtyb3V0aW5nLmNoaWxkU2VnbWVudC5pZF07XG4gKiAgIGNvbnN0IHBhcmFtcyA9IHJvdXRpbmcubG9jYWxTZWdtZW50LnBhcmFtcztcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxhIGhyZWY9e3JvdXRlci50b1BhdGgocm91dGluZy5wYXJlbnRSb3V0ZSgpKX0+Li4uPC9hPlxuICogICAgICAgPGEgaHJlZj17cm91dGVyLnRvUGF0aChyb3V0aW5nLmNoaWxkUm91dGUoUm91dGUuQ2hpbGQoKSkpfT4uLi48L2E+XG4gKiAgICAgICA8YSBocmVmPXtyb3V0ZXIudG9QYXRoKFxuICogICAgICAgICByb3V0aW5nLnNpYmxpbmdSb3V0ZShbUm91dGUuU2libGluZygpLCBSb3V0ZS5EZXRhaWxzKCldKVxuICogICAgICAgKX0+Li4uPC9hPlxuICpcbiAqICAgICAgIDxDb21wb25lbnQgLy8gb3RoZXIgcHJvcHMuLi4gLy8gcm91dGluZz17cm91dGluZy5uZXh0KCl9IC8+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9O1xuICogYGBgXG4gKi9cbmZ1bmN0aW9uIFJvdXRpbmcocm91dGUgPSBbXSwgaW5kZXggPSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBsb2NhbFNlZ21lbnQ6IHJvdXRlW2luZGV4XSA9PT0gdW5kZWZpbmVkID8geyBpZDogXCJcIiwgcGFyYW1zOiB7fSB9IDogcm91dGVbaW5kZXhdLFxuICAgICAgICBjaGlsZFNlZ21lbnQ6IHJvdXRlW2luZGV4ICsgMV0gPT09IHVuZGVmaW5lZCA/IHsgaWQ6IFwiXCIsIHBhcmFtczoge30gfSA6IHJvdXRlW2luZGV4ICsgMV0sXG4gICAgICAgIG5leHQ6ICgpID0+IFJvdXRpbmcocm91dGUsIGluZGV4ICsgMSksXG4gICAgICAgIHBhcmVudFJvdXRlOiAoKSA9PiByb3V0ZS5zbGljZSgwLCBpbmRleCksXG4gICAgICAgIGNoaWxkUm91dGU6IChjaGlsZCkgPT4gcm91dGUuc2xpY2UoMCwgaW5kZXggKyAxKS5jb25jYXQoY2hpbGQpLFxuICAgICAgICBzaWJsaW5nUm91dGU6IChzaWJsaW5nKSA9PiByb3V0ZS5zbGljZSgwLCBpbmRleCkuY29uY2F0KHNpYmxpbmcpLFxuICAgICAgICBzYW1lUm91dGU6IChwYXJhbXMpID0+IHJvdXRlXG4gICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXG4gICAgICAgICAgICAuY29uY2F0KHsgaWQ6IHJvdXRlW2luZGV4XS5pZCwgcGFyYW1zIH0pXG4gICAgICAgICAgICAuY29uY2F0KHJvdXRlLnNsaWNlKGluZGV4ICsgMSkpXG4gICAgfTtcbn1cbmV4cG9ydHMuUm91dGluZyA9IFJvdXRpbmc7XG4vKipcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHdoaWNoIHB1dHMgdGhlIGdpdmVuIHJvdXRlIGludG8gYW4gb2JqZWN0IG9mIHRoZSBmb3JtXG4gKiBgeyByb3V0ZSB9YC5cbiAqL1xuZnVuY3Rpb24gbmF2aWdhdGVUbyhyb3V0ZSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBBcnJheS5pc0FycmF5KHJvdXRlKSA/IHJvdXRlIDogW3JvdXRlXSB9O1xufVxuZXhwb3J0cy5uYXZpZ2F0ZVRvID0gbmF2aWdhdGVUbztcbi8qKlxuICogQ29udmVuaWVuY2UgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIGBuYXZpZ2F0ZVRvYCBhY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIEFjdGlvbnModXBkYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVUbzogKHJvdXRlKSA9PiB1cGRhdGUobmF2aWdhdGVUbyhyb3V0ZSkpXG4gICAgfTtcbn1cbmV4cG9ydHMuQWN0aW9ucyA9IEFjdGlvbnM7XG4iLCJpbXBvcnQgeyBjcmVhdGVSb3V0ZVNlZ21lbnRzIH0gZnJvbSBcIm1laW9zaXMtcm91dGluZy9zdGF0ZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWl0aHJpbFJvdXRlciB9IGZyb20gXCJtZWlvc2lzLXJvdXRpbmcvcm91dGVyLWhlbHBlclwiO1xuaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBIb21lOiBcIi9jXCIsXG4gIENhcmQ6IFwiL2NhcmRcIixcbiAgTm90Rm91bmQ6IFwiLzo0MDQuLi5cIlxufTtcblxuY29uc3QgTm90Rm91bmQgPSB7XG4gIHZpZXc6ICgpID0+IG0oXCJwXCIsIFwiTm90IEZvdW5kXCIpXG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50TWFwID0ge1xuICBIb21lLFxuICBDYXJkLFxuICBOb3RGb3VuZFxufTtcblxuZXhwb3J0IGNvbnN0IFJvdXRlID0gY3JlYXRlUm91dGVTZWdtZW50cyhbXG4gIFwiSG9tZVwiLFxuICBcIkNhcmRcIixcbiAgXCJOb3RGb3VuZFwiXG5dKTtcblxuZXhwb3J0IGNvbnN0IG5hdlRvID0gcm91dGUgPT4gKHtcbiAgcm91dGU6IEFycmF5LmlzQXJyYXkocm91dGUpID8gcm91dGUgOiBbcm91dGVdXG59KTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IGNyZWF0ZU1pdGhyaWxSb3V0ZXIoe1xuICBtLFxuICByb3V0ZUNvbmZpZyxcbiAgcHJlZml4OiBcIlwiXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBgbWVpb3Npcy1yb3V0aW5nL3JvdXRlci1oZWxwZXJgXG4gKlxuICogVGhlIGByb3V0ZXItaGVscGVyYCBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIGZvciBjcmVhdGluZyBhIHJvdXRlciBieSBwbHVnZ2luZyBpbiBhIHJvdXRlclxuICogbGlicmFyeS5cbiAqXG4gKiBAbW9kdWxlIHJvdXRlckhlbHBlclxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy8vLy8vL1xuY29uc3QgZ2V0UGF0aFdpdGhvdXRRdWVyeSA9IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL1xcPy4qLywgXCJcIik7XG5jb25zdCBnZXRRdWVyeSA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gcGF0aC5pbmRleE9mKFwiP1wiKTtcbiAgICByZXR1cm4gaWR4ID49IDAgPyBwYXRoLnN1YnN0cmluZyhpZHggKyAxKSA6IFwiXCI7XG59O1xuY29uc3QgZXh0cmFjdE1hdGNoZXMgPSAobWF0Y2hlcykgPT4ge1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVzLm1hcCgocGFyYW0pID0+IHBhcmFtLnN1YnN0cmluZygxKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufTtcbmZ1bmN0aW9uIGZpbmRQYXRoUGFyYW1zKHBhdGgpIHtcbiAgICByZXR1cm4gZXh0cmFjdE1hdGNoZXMocGF0aC5tYXRjaCgvOlteLz9dKi9nKSk7XG59XG5leHBvcnRzLmZpbmRQYXRoUGFyYW1zID0gZmluZFBhdGhQYXJhbXM7XG5mdW5jdGlvbiBmaW5kUXVlcnlQYXJhbXMocGF0aCkge1xuICAgIHJldHVybiBleHRyYWN0TWF0Y2hlcyhwYXRoLm1hdGNoKC9bPyZdW14/Jl0qL2cpKTtcbn1cbmV4cG9ydHMuZmluZFF1ZXJ5UGFyYW1zID0gZmluZFF1ZXJ5UGFyYW1zO1xuZnVuY3Rpb24gc2V0UGFyYW1zKHBhdGgsIHBhcmFtcykge1xuICAgIHJldHVybiBmaW5kUGF0aFBhcmFtcyhwYXRoKS5yZWR1Y2UoKHJlc3VsdCwgcGF0aFBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZW5jb2RlVVJJKHBhcmFtc1twYXRoUGFyYW1dIHx8IFwiXCIpO1xuICAgICAgICBjb25zdCBrZXkgPSBcIjpcIiArIHBhdGhQYXJhbTtcbiAgICAgICAgY29uc3QgaWR4ID0gcmVzdWx0LmluZGV4T2Yoa2V5KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzdHJpbmcoMCwgaWR4KSArIHZhbHVlICsgcmVzdWx0LnN1YnN0cmluZyhpZHggKyBrZXkubGVuZ3RoKTtcbiAgICB9LCBnZXRQYXRoV2l0aG91dFF1ZXJ5KHBhdGgpKTtcbn1cbmV4cG9ydHMuc2V0UGFyYW1zID0gc2V0UGFyYW1zO1xuY29uc3QgZ2V0Q29uZmlnID0gKGNvbmZpZykgPT4gY29uZmlnID09IG51bGxcbiAgICA/IFtcIi9cIiwgW10sIHt9XVxuICAgIDogdHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IFtjb25maWcsIFtdLCB7fV1cbiAgICAgICAgOiBjb25maWcubGVuZ3RoID09PSAyXG4gICAgICAgICAgICA/IEFycmF5LmlzQXJyYXkoY29uZmlnWzFdKVxuICAgICAgICAgICAgICAgID8gW2NvbmZpZ1swXSwgY29uZmlnWzFdLCB7fV1cbiAgICAgICAgICAgICAgICA6IFtjb25maWdbMF0sIFtdLCBjb25maWdbMV1dXG4gICAgICAgICAgICA6IGNvbmZpZztcbmNvbnN0IHBpY2sgPSAob2JqLCBwcm9wcykgPT4gcHJvcHMucmVkdWNlKChyZXN1bHQsIHByb3ApID0+IHtcbiAgICBpZiAob2JqW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gb2JqW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSwge30pO1xuZnVuY3Rpb24gY29udmVydFRvUGF0aChyb3V0ZUNvbmZpZywgcm91dGVPclJvdXRlcywgcXNTdHJpbmdpZnkpIHtcbiAgICBsZXQgcGF0aCA9IFwiXCI7XG4gICAgbGV0IGxvb2t1cCA9IHJvdXRlQ29uZmlnO1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGNvbnN0IHJvdXRlcyA9IEFycmF5LmlzQXJyYXkocm91dGVPclJvdXRlcykgPyByb3V0ZU9yUm91dGVzIDogW3JvdXRlT3JSb3V0ZXNdO1xuICAgIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xuICAgICAgICBjb25zdCBbY29uZmlnUGF0aCwgX3BhcmVudFBhcmFtcywgY2hpbGRyZW5dID0gZ2V0Q29uZmlnKGxvb2t1cFtyb3V0ZS5pZF0pO1xuICAgICAgICBwYXRoICs9IHNldFBhcmFtcyhjb25maWdQYXRoLCByb3V0ZS5wYXJhbXMpO1xuICAgICAgICBsb29rdXAgPSBjaGlsZHJlbjtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBmaW5kUXVlcnlQYXJhbXMoY29uZmlnUGF0aCk7XG4gICAgICAgIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbihxdWVyeSwgcGljayhyb3V0ZS5wYXJhbXMsIHF1ZXJ5UGFyYW1zKSk7XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGggPiAwICYmIHR5cGVvZiBxc1N0cmluZ2lmeSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHBhdGggKz0gXCI/XCIgKyBxc1N0cmluZ2lmeShxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZXhwb3J0cy5jb252ZXJ0VG9QYXRoID0gY29udmVydFRvUGF0aDtcbi8vIFJldHVybnMgeyBcIi9wYXRoXCI6IGZuKHBhcmFtcykgPT4gW3JvdXRlXSB9XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU1hcChyb3V0ZUNvbmZpZyA9IHt9LCBwYXRoID0gXCJcIiwgZm4gPSAoX25vbmUpID0+IFtdLCBhY2MgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhyb3V0ZUNvbmZpZykucmVkdWNlKChyZXN1bHQsIFtpZCwgY29uZmlnXSkgPT4ge1xuICAgICAgICBjb25zdCBbY29uZmlnUGF0aCwgcGFyZW50UGFyYW1zLCBjaGlsZHJlbl0gPSBnZXRDb25maWcoY29uZmlnKTtcbiAgICAgICAgY29uc3Qgcm91dGVQYXJhbXMgPSBmaW5kUGF0aFBhcmFtcyhjb25maWdQYXRoKVxuICAgICAgICAgICAgLmNvbmNhdChmaW5kUXVlcnlQYXJhbXMoY29uZmlnUGF0aCkpXG4gICAgICAgICAgICAuY29uY2F0KHBhcmVudFBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IHBhdGggKyBnZXRQYXRoV2l0aG91dFF1ZXJ5KGNvbmZpZ1BhdGgpO1xuICAgICAgICBjb25zdCByb3V0ZUZuID0gKHBhcmFtcykgPT4gZm4ocGFyYW1zKS5jb25jYXQoeyBpZCwgcGFyYW1zOiBwaWNrKHBhcmFtcywgcm91dGVQYXJhbXMpIH0pO1xuICAgICAgICByZXN1bHRbbG9jYWxQYXRoXSA9IHJvdXRlRm47XG4gICAgICAgIGNyZWF0ZVJvdXRlTWFwKGNoaWxkcmVuLCBsb2NhbFBhdGgsIHJvdXRlRm4sIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgYWNjKTtcbn1cbmV4cG9ydHMuY3JlYXRlUm91dGVNYXAgPSBjcmVhdGVSb3V0ZU1hcDtcbi8qKlxuICogR2VuZXJpYyBmdW5jdGlvbiB0byBjcmVhdGUgYSByb3V0ZXIgZnJvbSBhIHJvdXRlciBsaWJyYXJ5IG9mIHlvdXIgY2hvaWNlLlxuICpcbiAqIFRvIHVzZSB0aGlzIGZ1bmN0aW9uLCB3cml0ZSBhIGBjcmVhdGVYWVpSb3V0ZXJgIGZ1bmN0aW9uIHRoYXQgaW4gdHVybiBjYWxscyBgY3JlYXRlUm91dGVyYC5cbiAqIEFsbCBjb25maWcgcGFyYW1ldGVycyBleGNlcHQgZm9yIGBjcmVhdGVQYXJzZVBhdGhgIGFyZSBub3JtYWxseSBwYXNzZWQtdGhydSBmcm9tXG4gKiBgY3JlYXRlWFlaUm91dGVyYCB0byBgY3JlYXRlUm91dGVyYCwgdW5sZXNzIHlvdSB3YW50IHRvIGRlZmluZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbnMgb2ZcbiAqIGBnZXRQYXRoYCwgYHNldFBhdGhgLCBhbmQvb3IgYGFkZExvY2F0aW9uQ2hhbmdlTGlzdGVuZXJgLlxuICpcbiAqIFRoZSBrZXkgcGFyc2UgaXMgYGNyZWF0ZVBhcnNlUGF0aGAuIFRoaXMgaXMgd2hlcmUgeW91IGRlZmluZSBob3cgdG8gcGx1ZyBpbiB0byB0aGUgcm91dGVyXG4gKiBsaWJyYXJ5IG9mIHlvdXIgY2hvaWNlLlxuICpcbiAqIGBmdW5jdGlvbiBjcmVhdGVQYXJzZVBhdGgocm91dGVNYXAsIGRlZmF1bHRSb3V0ZSlgIHJlY2VpdmVzIGEgYHJvdXRlTWFwYCB3aGljaCBpcyBhbiBvYmplY3RcbiAqIHdpdGhcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB0aGUgY3JlYXRlZCByb3V0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqXG4gKiAvLyBFeGFtcGxlIG9mIGEgY3JlYXRlUGFyc2VQYXRoIGZ1bmN0aW9uIHdpdGggZmVhdGhlci1yb3V0ZS1tYXRjaGVyXG4gKiBjb25zdCBjcmVhdGVQYXJzZVBhdGggPSAocm91dGVNYXAsIGRlZmF1bHRSb3V0ZSkgPT4ge1xuICogICBjb25zdCByb3V0ZU1hdGNoZXIgPSBjcmVhdGVSb3V0ZU1hdGNoZXIocm91dGVNYXApO1xuICpcbiAqICAgY29uc3QgcGFyc2VQYXRoID0gKHBhdGgsIHF1ZXJ5UGFyYW1zKSA9PiB7XG4gKiAgICAgY29uc3QgbWF0Y2ggPSByb3V0ZU1hdGNoZXIocGF0aCk7XG4gKlxuICogICAgIGlmIChtYXRjaCkge1xuICogICAgICAgcmV0dXJuIG1hdGNoLnBhZ2UoT2JqZWN0LmFzc2lnbih7fSwgbWF0Y2gucGFyYW1zLCBxdWVyeVBhcmFtcykpO1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICByZXR1cm4gZGVmYXVsdFJvdXRlO1xuICogICAgIH1cbiAqICAgfTtcbiAqICAgcmV0dXJuIHBhcnNlUGF0aDtcbiAqIH07XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKGNvbmZpZykge1xuICAgIGNvbnN0IHsgcm91dGVDb25maWcsIGNyZWF0ZVBhcnNlUGF0aCwgZGVmYXVsdFJvdXRlIH0gPSBjb25maWc7XG4gICAgY29uc3QgcHJlZml4ID0gY29uZmlnLnByZWZpeCAhPSBudWxsID8gY29uZmlnLnByZWZpeCA6IFwiI1wiO1xuICAgIGNvbnN0IGdldFBhdGggPSBjb25maWcuZ2V0UGF0aCA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gKCkgPT4gZG9jdW1lbnQubG9jYXRpb24uaGFzaCB8fCBwcmVmaXggKyBcIi9cIlxuICAgICAgICA6IGNvbmZpZy5nZXRQYXRoO1xuICAgIGNvbnN0IHNldFBhdGggPSBjb25maWcuc2V0UGF0aCA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gKHBhdGgpID0+IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgcGF0aClcbiAgICAgICAgOiBjb25maWcuc2V0UGF0aDtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGNvbmZpZy5xdWVyeVN0cmluZyB8fCB7fTtcbiAgICBjb25zdCBhZGRMb2NhdGlvbkNoYW5nZUxpc3RlbmVyID0gY29uZmlnLmFkZExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIgfHxcbiAgICAgICAgKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBsaXN0ZW5lcjtcbiAgICAgICAgfSk7XG4gICAgY29uc3Qgcm91dGVNYXAgPSBjcmVhdGVSb3V0ZU1hcChyb3V0ZUNvbmZpZyk7XG4gICAgY29uc3QgcGFyc2VQYXRoRm4gPSBjcmVhdGVQYXJzZVBhdGggPyBjcmVhdGVQYXJzZVBhdGgocm91dGVNYXAsIGRlZmF1bHRSb3V0ZSkgOiBudWxsO1xuICAgIGNvbnN0IHBhcnNlUGF0aCA9IHBhcnNlUGF0aEZuXG4gICAgICAgID8gKHBhdGhXaXRoUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gcGF0aFdpdGhQcmVmaXguc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBnZXRRdWVyeShwYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gcXVlcnkubGVuZ3RoID09PSAwIHx8ICFxdWVyeVN0cmluZy5wYXJzZSA/IHt9IDogcXVlcnlTdHJpbmcucGFyc2UocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUGF0aEZuKGdldFBhdGhXaXRob3V0UXVlcnkocGF0aCksIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICA6ICgpID0+IFtdO1xuICAgIGNvbnN0IHRvUGF0aCA9IChyb3V0ZSkgPT4gcHJlZml4ICsgY29udmVydFRvUGF0aChyb3V0ZUNvbmZpZywgcm91dGUsIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSk7XG4gICAgLy8gRnVuY3Rpb24gdG8ga2VlcCB0aGUgbG9jYXRpb24gYmFyIGluIHN5bmNcbiAgICBjb25zdCBsb2NhdGlvbkJhclN5bmMgPSAocm91dGUpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRvUGF0aChyb3V0ZSk7XG4gICAgICAgIGlmIChnZXRQYXRoKCkgIT09IHBhdGgpIHtcbiAgICAgICAgICAgIHNldFBhdGgocGF0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIExpc3RlbiB0byBsb2NhdGlvbiBjaGFuZ2VzIGFuZCBjYWxsIG5hdmlnYXRlVG8oKVxuICAgIGNvbnN0IHN0YXJ0ID0gKHsgbmF2aWdhdGVUbyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlUGF0aEFuZE5hdmlnYXRlID0gKCkgPT4gbmF2aWdhdGVUbyhwYXJzZVBhdGgoZ2V0UGF0aCgpKSk7XG4gICAgICAgIGFkZExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIocGFyc2VQYXRoQW5kTmF2aWdhdGUpO1xuICAgIH07XG4gICAgY29uc3QgaW5pdGlhbFJvdXRlID0gcGFyc2VQYXRoID8gcGFyc2VQYXRoKGdldFBhdGgoKSkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHsgaW5pdGlhbFJvdXRlLCBsb2NhdGlvbkJhclN5bmMsIHBhcnNlUGF0aCwgcm91dGVNYXAsIHN0YXJ0LCB0b1BhdGggfTtcbn1cbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuLyoqXG4gKiBDcmVhdGVzIGEgcm91dGVyIHVzaW5nXG4gKiBbZmVhdGhlci1yb3V0ZS1tYXRjaGVyXShodHRwczovL2dpdGh1Yi5jb20vSGVucmlrSm9yZXRlZy9mZWF0aGVyLXJvdXRlLW1hdGNoZXIpLlxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYFxuICpcbiAqIGltcG9ydCBjcmVhdGVSb3V0ZU1hdGNoZXIgZnJvbSBcImZlYXRoZXItcm91dGUtbWF0Y2hlclwiO1xuICogaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjsgLy8gb25seSBpZiB1c2luZyBxdWVyeSBzdHJpbmdzXG4gKlxuICogY29uc3QgUm91dGUgPSBjcmVhdGVSb3V0ZVNlZ21lbnRzKFsuLi5dKTtcbiAqXG4gKiBjb25zdCByb3V0ZUNvbmZpZyA9IHsgLi4uIH07XG4gKlxuICogY29uc3Qgcm91dGVyID0gY3JlYXRlRmVhdGhlclJvdXRlcih7XG4gKiAgIGNyZWF0ZVJvdXRlTWF0Y2hlcixcbiAqICAgcm91dGVDb25maWcsXG4gKiAgIGRlZmF1bHRSb3V0ZTogW1JvdXRlLkhvbWUoKV0sXG4gKiAgIHF1ZXJ5U3RyaW5nIC8vIG9ubHkgaWYgdXNpbmcgcXVlcnkgc3RyaW5nc1xuICogfSk7XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmVhdGhlclJvdXRlcihjb25maWcpIHtcbiAgICBjb25zdCBjcmVhdGVQYXJzZVBhdGggPSAocm91dGVNYXAsIGRlZmF1bHRSb3V0ZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoZXIgPSBjb25maWcuY3JlYXRlUm91dGVNYXRjaGVyKHJvdXRlTWFwKTtcbiAgICAgICAgY29uc3QgcGFyc2VQYXRoID0gKHBhdGgsIHF1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHJvdXRlTWF0Y2hlcihwYXRoKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKG1hdGNoLnBhcmFtcyB8fCB7fSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGRlY29kZVVSSShtYXRjaC5wYXJhbXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5wYWdlKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcywgcXVlcnlQYXJhbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Um91dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwYXJzZVBhdGg7XG4gICAgfTtcbiAgICByZXR1cm4gY3JlYXRlUm91dGVyKE9iamVjdC5hc3NpZ24oeyBjcmVhdGVQYXJzZVBhdGggfSwgY29uZmlnKSk7XG59XG5leHBvcnRzLmNyZWF0ZUZlYXRoZXJSb3V0ZXIgPSBjcmVhdGVGZWF0aGVyUm91dGVyO1xuLyoqXG4gKiBDcmVhdGVzIGEgcm91dGVyIHVzaW5nXG4gKiBbdXJsLW1hcHBlcl0oaHR0cHM6Ly9naXRodWIuY29tL2NlcmVicmFsL3VybC1tYXBwZXIpLlxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYFxuICpcbiAqIGltcG9ydCBNYXBwZXIgZnJvbSBcInVybC1tYXBwZXJcIjtcbiAqIGltcG9ydCB1cmxvbiBmcm9tIFwidXJsb25cIjsgLy8gb25seSBpZiB1c2luZyBxdWVyeSBzdHJpbmdzXG4gKlxuICogY29uc3QgUm91dGUgPSBjcmVhdGVSb3V0ZVNlZ21lbnRzKFsuLi5dKTtcbiAqXG4gKiBjb25zdCByb3V0ZUNvbmZpZyA9IHsgLi4uIH07XG4gKlxuICogY29uc3Qgcm91dGVyID0gY3JlYXRlVXJsTWFwcGVyUm91dGVyKHtcbiAqICAgTWFwcGVyLFxuICogICByb3V0ZUNvbmZpZyxcbiAqICAgZGVmYXVsdFJvdXRlOiBbUm91dGUuSG9tZSgpXSxcbiAqICAgcXVlcnlTdHJpbmc6IHVybG9uIC8vIG9ubHkgaWYgdXNpbmcgcXVlcnkgc3RyaW5nc1xuICogfSk7XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVXJsTWFwcGVyUm91dGVyKGNvbmZpZykge1xuICAgIGNvbnN0IGNyZWF0ZVBhcnNlUGF0aCA9IChyb3V0ZU1hcCwgZGVmYXVsdFJvdXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybE1hcHBlciA9IGNvbmZpZy5NYXBwZXIoKTtcbiAgICAgICAgY29uc3QgcGFyc2VQYXRoID0gKHBhdGgsIHF1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkUm91dGUgPSB1cmxNYXBwZXIubWFwKHBhdGgsIHJvdXRlTWFwKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkUm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZFJvdXRlLm1hdGNoKE9iamVjdC5hc3NpZ24oe30sIG1hdGNoZWRSb3V0ZS52YWx1ZXMsIHF1ZXJ5UGFyYW1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFJvdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcGFyc2VQYXRoO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZVJvdXRlcihPYmplY3QuYXNzaWduKHsgY3JlYXRlUGFyc2VQYXRoIH0sIGNvbmZpZykpO1xufVxuZXhwb3J0cy5jcmVhdGVVcmxNYXBwZXJSb3V0ZXIgPSBjcmVhdGVVcmxNYXBwZXJSb3V0ZXI7XG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZXIgdXNpbmcgW01pdGhyaWwgUm91dGVyXShodHRwczovL21pdGhyaWwuanMub3JnL3JvdXRlLmh0bWwpLlxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYFxuICpcbiAqIGltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG4gKiAvLyBOb3RlOiBxdWVyeSBzdHJpbmdzIGFyZSBidWlsdC1pbiB0byBNaXRocmlsXG4gKlxuICogY29uc3QgUm91dGUgPSBjcmVhdGVSb3V0ZVNlZ21lbnRzKFsuLi5dKTtcbiAqXG4gKiBjb25zdCByb3V0ZUNvbmZpZyA9IHsgLi4uIH07XG4gKlxuICogY29uc3Qgcm91dGVyID0gY3JlYXRlTWl0aHJpbFJvdXRlcih7XG4gKiAgIG0sXG4gKiAgIHJvdXRlQ29uZmlnXG4gKiB9KTtcbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjcmVhdGVNaXRocmlsUm91dGVyKGNvbmZpZykge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0geyBzdHJpbmdpZnk6IGNvbmZpZy5tLmJ1aWxkUXVlcnlTdHJpbmcgfTtcbiAgICBjb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoT2JqZWN0LmFzc2lnbih7IHByZWZpeDogXCIjIVwiLCBxdWVyeVN0cmluZyB9LCBjb25maWcpKTtcbiAgICByb3V0ZXIuTWl0aHJpbFJvdXRlcyA9ICh7IHN0YXRlcywgYWN0aW9ucywgQXBwIH0pID0+IE9iamVjdC5lbnRyaWVzKHJvdXRlci5yb3V0ZU1hcCkucmVkdWNlKChyZXN1bHQsIFtwYXRoLCBmbl0pID0+IHtcbiAgICAgICAgcmVzdWx0W3BhdGhdID0ge1xuICAgICAgICAgICAgb25tYXRjaDogKHBhcmFtcykgPT4gYWN0aW9ucy5uYXZpZ2F0ZVRvKGZuKHBhcmFtcykpLFxuICAgICAgICAgICAgcmVuZGVyOiAoKSA9PiBjb25maWcubShBcHAsIHsgc3RhdGU6IHN0YXRlcygpLCBhY3Rpb25zIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICAgIHJldHVybiByb3V0ZXI7XG59XG5leHBvcnRzLmNyZWF0ZU1pdGhyaWxSb3V0ZXIgPSBjcmVhdGVNaXRocmlsUm91dGVyO1xuIiwiaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWxcIjtcblxuZXhwb3J0IGNvbnN0IENhcmQgPSB7XG4gIHZpZXc6ICh2bm9kZSkgPT4ge1xuICAgIHZhciB7c3RhdGUsIGFjdGlvbnN9ID0gdm5vZGUuYXR0cnM7XG4gICAgcmV0dXJuIG0oXCIucGE0XCIsIFxuICAgICAgbShcInAubWVhc3VyZS13aWRlXCIsIFwiVGhpcyBpcyBhIGNhcmQgY29tcG9uZW50XCIpKTtcbiAgfVxufTtcbiIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5cbmV4cG9ydCBjb25zdCBIb21lID0ge1xuICB2aWV3OiAoe2F0dHJzOiB7c3RhdGUsIGFjdGlvbnN9fSkgPT4ge1xuICAgIHJldHVybiBtKFwiLnBhNFwiLCBcbiAgICAgIG0oXCJwLm1lYXN1cmUtd2lkZVwiLCBcIlRoaXMgaXMgdGhlIGhvbWUgY29tcG9uZW50XCIpKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHJvdXRlVHJhbnNpdGlvbiB9IGZyb20gXCJtZWlvc2lzLXJvdXRpbmcvc3RhdGVcIjtcbmltcG9ydCB7IFJvdXRlLCBuYXZUbyB9IGZyb20gXCIuL3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3Qgcm91dGVTZXJ2aWNlID0gKHsgcHJldmlvdXNTdGF0ZSwgc3RhdGUgfSkgPT4gKHtcbiAgc3RhdGU6IHtcbiAgICByb3V0ZVRyYW5zaXRpb246ICgpID0+XG4gICAgICByb3V0ZVRyYW5zaXRpb24ocHJldmlvdXNTdGF0ZS5yb3V0ZSwgc3RhdGUucm91dGUpXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgdG9kb0xvYWRTZXJ2aWNlID0gKHsgc3RhdGUgfSkgPT4ge1xuICBpZiAoc3RhdGUucm91dGVUcmFuc2l0aW9uLmFycml2ZS5DYXJkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6ICh7IHN0YXRlLCBwYXRjaCwgdXBkYXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgICAgICAgYWN0aW9ucy5nZXRUb2RvKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=