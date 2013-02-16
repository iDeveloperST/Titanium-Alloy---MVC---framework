function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.menuListingView = A$(Ti.UI.createView({
        backgroundColor: "#66ae51",
        id: "menuListingView"
    }), "View", null);
    $.addTopLevelView($.__views.menuListingView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var UI = require("UI"), menuList = UI.menuListView("cis", 7);
    $.menuListingView.add(menuList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;