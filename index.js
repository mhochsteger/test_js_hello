// checking environment, if it is not AMD, emulate define for Node
if (typeof define !== 'function' || ! define.amd)
	var define = function(moduleName, requirements, func) {
		var dependencies = [];
		requirements.forEach(function(req) { dependencies.push( require(req) ); });
		func.apply(this, dependencies);
	};


define('test_js_hello' /* or 'app/test_js_hello' - see comment above */,
	['@jupyter-widgets/base' /* , more required dependencies */ ],
function(widgets /*, dependencies variables */)
{
        console.log("widgets", widgets);
	var test_js_hello = {};

	// exports for Node
	if (typeof module !== 'undefined' && module.exports)
		module.exports = test_js_hello;

	//
	// module code
	//

	// exports for AMD (requirejs)
	return test_js_hello;
});
