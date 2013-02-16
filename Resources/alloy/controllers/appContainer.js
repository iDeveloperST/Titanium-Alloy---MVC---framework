function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.appcontain = A$(Ti.UI.createView({
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "appcontain"
    }), "View", null);
    $.addTopLevelView($.__views.appcontain);
    $.__views.header = Alloy.createController("headerView", {
        id: "header"
    });
    $.__views.header.setParent($.__views.appcontain);
    $.__views.needsMainView = Alloy.createController("needsMainView", {
        id: "needsMainView"
    });
    $.__views.needsMainView.setParent($.__views.appcontain);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;