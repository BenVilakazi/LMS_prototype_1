"use strict";
exports.__esModule = true;
exports.Sidebar = void 0;
var logo_1 = require("./logo");
var sidebar_routes_1 = require("./sidebar-routes");
exports.Sidebar = function () {
    return (React.createElement("div", { className: "h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm" },
        React.createElement("div", { className: "p-6" },
            React.createElement(logo_1.Logo, null)),
        React.createElement("div", { className: "flex flex-col w-full" },
            React.createElement(sidebar_routes_1.SidebarRoutes, null))));
};
