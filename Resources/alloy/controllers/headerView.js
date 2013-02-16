function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.headerContainer = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        height: "55px",
        width: "320px",
        color: "#000",
        backgroundImage: "images/headerbg@2x.png",
        id: "headerContainer"
    }), "View", null);
    $.addTopLevelView($.__views.headerContainer);
    $.__views.headerListBtnHolder = A$(Ti.UI.createImageView({
        id: "headerListBtnHolder"
    }), "ImageView", $.__views.headerContainer);
    $.__views.headerContainer.add($.__views.headerListBtnHolder);
    $.__views.menu01 = A$(Ti.UI.createButton({
        top: 0,
        left: 100,
        height: "55px",
        width: "55px",
        backgroundColor: "transparent",
        id: "menu01"
    }), "Button", $.__views.headerContainer);
    $.__views.headerContainer.add($.__views.menu01);
    $.__views.menu02 = A$(Ti.UI.createButton({
        top: 0,
        left: 120,
        height: "55px",
        width: "55px",
        backgroundColor: "transparent",
        id: "menu02"
    }), "Button", $.__views.headerContainer);
    $.__views.headerContainer.add($.__views.menu02);
    $.__views.menu03 = A$(Ti.UI.createButton({
        top: 0,
        left: 150,
        height: "55px",
        width: "55px",
        backgroundColor: "transparent",
        id: "menu03"
    }), "Button", $.__views.headerContainer);
    $.__views.headerContainer.add($.__views.menu03);
    $.__views.addRemoveNeedBtn = A$(Ti.UI.createButton({
        top: -3,
        left: 260,
        height: "55px",
        width: "55px",
        backgroundColor: "transparent",
        backgroundImage: "images/addBtn@2x.png",
        id: "addRemoveNeedBtn"
    }), "Button", $.__views.headerContainer);
    $.__views.headerContainer.add($.__views.addRemoveNeedBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menu01.on("click", function() {
        alert("menu01");
    });
    $.menu02.on("click", function() {
        alert("menu02");
    });
    $.menu03.on("click", function() {
        alert("menu03");
    });
    $.addRemoveNeedBtn.on("click", function() {
        alert("addRemoveNeedBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;