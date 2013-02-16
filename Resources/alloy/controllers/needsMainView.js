function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.win = A$(Ti.UI.createView({
        top: "55",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "win"
    }), "View", null);
    $.addTopLevelView($.__views.win);
    $.__views.sectionFruit = A$(Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Fruit"
    }), "TableViewSection", null);
    var __alloyId1 = [];
    __alloyId1.push($.__views.sectionFruit);
    $.__views.__alloyId2 = A$(Ti.UI.createTableViewRow({
        title: "Apple",
        id: "__alloyId2"
    }), "TableViewRow", $.__views.sectionFruit);
    $.__views.sectionFruit.add($.__views.__alloyId2);
    $.__views.__alloyId3 = A$(Ti.UI.createTableViewRow({
        title: "Bananas",
        id: "__alloyId3"
    }), "TableViewRow", $.__views.sectionFruit);
    $.__views.sectionFruit.add($.__views.__alloyId3);
    $.__views.sectionVeg = A$(Ti.UI.createTableViewSection({
        id: "sectionVeg",
        headerTitle: "Vegetables"
    }), "TableViewSection", null);
    __alloyId1.push($.__views.sectionVeg);
    $.__views.__alloyId4 = A$(Ti.UI.createTableViewRow({
        title: "Carrots",
        id: "__alloyId4"
    }), "TableViewRow", $.__views.sectionVeg);
    $.__views.sectionVeg.add($.__views.__alloyId4);
    $.__views.__alloyId5 = A$(Ti.UI.createTableViewRow({
        title: "Potatoes",
        id: "__alloyId5"
    }), "TableViewRow", $.__views.sectionVeg);
    $.__views.sectionVeg.add($.__views.__alloyId5);
    $.__views.sectionFish = A$(Ti.UI.createTableViewSection({
        id: "sectionFish",
        headerTitle: "Fish"
    }), "TableViewSection", null);
    __alloyId1.push($.__views.sectionFish);
    $.__views.__alloyId6 = A$(Ti.UI.createTableViewRow({
        title: "Cod",
        id: "__alloyId6"
    }), "TableViewRow", $.__views.sectionFish);
    $.__views.sectionFish.add($.__views.__alloyId6);
    $.__views.__alloyId7 = A$(Ti.UI.createTableViewRow({
        title: "Haddock",
        id: "__alloyId7"
    }), "TableViewRow", $.__views.sectionFish);
    $.__views.sectionFish.add($.__views.__alloyId7);
    $.__views.table = A$(Ti.UI.createTableView({
        data: __alloyId1,
        id: "table"
    }), "TableView", $.__views.win);
    $.__views.win.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;