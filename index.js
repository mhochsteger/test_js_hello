(function(window) {

	/* This example module depends on jQuery and lodash */
	var factory = function(widgets) {
		'use strict';

		var test_js_hello = function(opts) {
			this.options = $.extend({}, test_js_hello.defaultOptions, opts);
			this.init();
		};

		test_js_hello.defaultOptions = {
			// default module options go here
		};

		test_js_hello.prototype.init = function() {
                  console.log("init test_js_hello module!");
		};

		// extra module functions go here

		return test_js_hello;
	};

	// Define as an AMD module if possible
	if (typeof define === 'function' && define.amd) {
		define(['@jupyter-widgets/base'], factory);
	}
	// Node/CommonJS
	else if (typeof exports === 'object') {
		factory(require('@jupyter-widgets/base'));
	}
	// Otherwise simply initialise as normal, stopping multiple evaluation
	else {
		// check that the module dependencies are defined
		if (typeof widgets === 'undefined') {
			throw new Error('test_js_hello requires @jupyter-widgets/base');
		}

		// define module only if it doesn't exist yet
		if (typeof test_js_hello === 'undefined') {
			window.test_js_hello = factory(widgets);
		}
	}

})(window);
