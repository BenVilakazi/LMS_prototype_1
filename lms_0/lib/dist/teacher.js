"use strict";
exports.__esModule = true;
exports.isTeacher = void 0;
exports.isTeacher = function (userId) {
    return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
};
