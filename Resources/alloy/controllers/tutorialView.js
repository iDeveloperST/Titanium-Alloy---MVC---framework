function Controller() {
    function addView() {
        alert("hi");
        $.tutorialView.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tutorialView = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "tutorialView"
    }), "Window", null);
    $.addTopLevelView($.__views.tutorialView);
    var __alloyId8 = [];
    $.__views.__alloyId9 = A$(Ti.UI.createImageView({
        width: "200",
        height: "300",
        image: "images/settings_button_bg@2x.png",
        id: "__alloyId9"
    }), "ImageView", null);
    __alloyId8.push($.__views.__alloyId9);
    $.__views.__alloyId10 = A$(Ti.UI.createImageView({
        width: "200",
        height: "300",
        image: "test_image@2x.png",
        id: "__alloyId10"
    }), "ImageView", null);
    __alloyId8.push($.__views.__alloyId10);
    $.__views.__alloyId11 = A$(Ti.UI.createImageView({
        width: "200",
        height: "300",
        image: "test_image@2x.png",
        id: "__alloyId11"
    }), "ImageView", null);
    __alloyId8.push($.__views.__alloyId11);
    $.__views.__alloyId12 = A$(Ti.UI.createView({
        backgroundColor: "#0a0",
        id: "__alloyId12"
    }), "View", null);
    __alloyId8.push($.__views.__alloyId12);
    $.__views.__alloyId13 = A$(Ti.UI.createLabel({
        text: "View 2",
        id: "__alloyId13"
    }), "Label", $.__views.__alloyId12);
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.scroller = A$(Ti.UI.createScrollableView({
        views: __alloyId8,
        id: "scroller"
    }), "ScrollableView", $.__views.tutorialView);
    $.__views.tutorialView.add($.__views.scroller);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tutorialView.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;