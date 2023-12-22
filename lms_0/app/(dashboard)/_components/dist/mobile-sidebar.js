"use strict";
exports.__esModule = true;
exports.MobileSidebar = void 0;
var lucide_react_1 = require("lucide-react");
var sheet_1 = require("@/components/ui/sheet");
var sidebar_1 = require("./sidebar");
exports.MobileSidebar = function () {
    return (React.createElement(sheet_1.Sheet, null,
        React.createElement(sheet_1.SheetTrigger, { className: "md:hidden pr-4 hover:opacity-75 transition" },
            React.createElement(lucide_react_1.Menu, null)),
        React.createElement(sheet_1.SheetContent, { side: "left", className: "p-0 bg-white" },
            React.createElement(sidebar_1.Sidebar, null))));
};
