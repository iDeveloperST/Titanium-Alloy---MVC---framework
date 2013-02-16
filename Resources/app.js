var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.appWidth = function() {
    return Ti.Platform.displayCaps.getPlatformWidth();
};

Alloy.appHeight = function() {
    return Ti.Platform.displayCaps.getPlatformHeight();
};

Alloy.statusBarHeight = function() {
    return 40;
};

Alloy.OSName = function() {
    return Ti.Platform.getOsname();
};

Alloy.aspectRatio = function(num, type, defaultWidth) {
    if (Alloy.OSName() == "iphone") return num / 2;
};

Alloy.menuListArray = function(userType) {
    var menuArray = [ {
        title: "Active Needs",
        key: "activeneeds"
    }, {
        title: "Completed Needs",
        key: "completed"
    }, {
        title: "My Stats",
        key: "stats"
    }, {
        title: "My Profile",
        key: "profile"
    }, {
        title: "Settings",
        key: "settings"
    }, {
        title: "",
        key: ""
    }, {
        title: "Help",
        key: "help"
    } ];
    return menuArray;
};

Alloy.createController("index");