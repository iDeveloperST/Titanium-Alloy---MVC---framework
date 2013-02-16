function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        title: "Section",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.menuListing = Alloy.createController("menuList", {
        id: "menuListing"
    });
    $.__views.menuListing.setParent($.__views.index);
    $.__views.container = Alloy.createController("appContainer", {
        id: "container"
    });
    $.__views.container.setParent($.__views.index);
    $.__views.menuBtn = A$(Ti.UI.createButton({
        top: 0,
        left: 0,
        height: "55px",
        width: "60px",
        backgroundColor: "transparent",
        color: "transparent",
        backgroundImage: "",
        id: "menuBtn"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.menuBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var isFirstLaunch = Alloy.CFG.firstRun, isView = 0;
    $.menuBtn.on("click", function() {
        if (isView == 0) {
            $.container.getView().animate({
                duration: 200,
                left: 230
            }, function() {
                $.menuBtn.left = 230;
            });
            isView = 1;
        } else {
            $.container.getView().animate({
                duration: 200,
                left: 0
            }, function() {
                $.menuBtn.left = 0;
            });
            isView = 0;
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;