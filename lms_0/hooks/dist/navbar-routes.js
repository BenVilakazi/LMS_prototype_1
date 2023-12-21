"use client";
"use strict";
exports.__esModule = true;
exports.NavbarRoutes = void 0;
var nextjs_1 = require("@clerk/nextjs");
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var teacher_1 = require("@/lib/teacher");
var search_input_1 = require("./search-input");
exports.NavbarRoutes = function () {
    var userId = nextjs_1.useAuth().userId;
    var pathname = navigation_1.usePathname();
    var isTeacherPage = pathname === null || pathname === void 0 ? void 0 : pathname.startsWith("/teacher");
    var isCoursePage = pathname === null || pathname === void 0 ? void 0 : pathname.includes("/courses");
    var isSearchPage = pathname === "/search";
    return (React.createElement(React.Fragment, null,
        isSearchPage && (React.createElement("div", { className: "hidden md:block" },
            React.createElement(search_input_1.SearchInput, null))),
        React.createElement("div", { className: "flex gap-x-2 ml-auto" },
            isTeacherPage || isCoursePage ? (React.createElement(link_1["default"], { href: "/" },
                React.createElement(button_1.Button, { size: "sm", variant: "ghost" },
                    React.createElement(lucide_react_1.LogOut, { className: "h-4 w-4 mr-2" }),
                    "Exit"))) : teacher_1.isTeacher(userId) ? (React.createElement(link_1["default"], { href: "/teacher/courses" },
                React.createElement(button_1.Button, { size: "sm", variant: "ghost" }, "Teacher mode"))) : null,
            React.createElement(nextjs_1.UserButton, { afterSignOutUrl: "/" }))));
};
