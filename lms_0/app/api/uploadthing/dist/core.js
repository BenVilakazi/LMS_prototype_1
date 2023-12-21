"use strict";
exports.__esModule = true;
exports.FileRouter = exports.satisfies = exports.ourFileRouter = void 0;
var nextjs_1 = require("@clerk/nextjs");
var next_1 = require("uploadthing/next");
var teacher_1 = require("@/lib/teacher");
var f = next_1.createUploadthing();
var handleAuth = function () {
    var userId = nextjs_1.auth().userId;
    var isAuthorized = teacher_1.isTeacher(userId);
    if (!userId || !isAuthorized)
        throw new Error("Unauthorized");
    return { userId: userId };
};
exports.ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { }),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { }),
    chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { })
};
