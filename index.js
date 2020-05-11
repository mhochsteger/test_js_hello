// checking environment, if it is not AMD, emulate define for Node
if (typeof define !== 'function' || ! define.amd)
	var define = function(moduleName, requirements, func) {
		var dependencies = [];
		requirements.forEach(function(req) { dependencies.push( require(req) ); });
		func.apply(this, dependencies);
	};


define('test-js-hello' /* or 'app/test-js-hello' - see comment above */,
	['@jupyter-widgets/base' /* , more required dependencies */ ],
function(widgets /*, dependencies variables */)
{
        console.log("widgets", widgets);
	var test-js-hello = {};

	// exports for Node
	if (typeof module !== 'undefined' && module.exports)
		module.exports = test-js-hello;

	//
	// module code
	//

	// exports for AMD (requirejs)
	return test-js-hello;
});
