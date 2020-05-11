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

        let HelloView = widgets.DOMWidgetView.extend({
          defaults: _.extend({}, widgets.DOMWidgetModel.prototype.defaults(), {value: ""}),
          render: function() {
            this.el.nodeValue = this.value
            this.model.on('change:value', this.data_changed, this);
            this.data_changed();

          },
          data_changed: function() {
            console.log("HelloView data changed");
            this.el.innerHTML = this.model.get("value");
          },
        });

        test_js_hello.HelloView = HelloView;
	// exports for AMD (requirejs)
	return test_js_hello;
});
