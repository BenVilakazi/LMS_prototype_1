"use strict";
exports.__esModule = true;
exports.CoursesList = void 0;
var course_card_1 = require("@/components/course-card");
exports.CoursesList = function (_a) {
    var items = _a.items;
    return (React.createElement("div", null,
        React.createElement("div", { className: "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4" }, items.map(function (item) {
            var _a;
            return (React.createElement(course_card_1.CourseCard, { key: item.id, id: item.id, title: item.title, imageUrl: item.imageUrl, chaptersLength: item.chapters.length, price: item.price, progress: item.progress, category: (_a = item === null || item === void 0 ? void 0 : item.category) === null || _a === void 0 ? void 0 : _a.name }));
        })),
        items.length === 0 && (React.createElement("div", { className: "text-center text-sm text-muted-foreground mt-10" }, "No courses found"))));
};
