"use client";
"use strict";
exports.__esModule = true;
exports.FileUpload = void 0;
var react_hot_toast_1 = require("react-hot-toast");
var uploadthing_1 = require("@/lib/uploadthing");
;
exports.FileUpload = function (_a) {
    var onChange = _a.onChange, endpoint = _a.endpoint;
    return (React.createElement(uploadthing_1.UploadDropzone, { endpoint: endpoint, onClientUploadComplete: function (res) {
            onChange(res === null || res === void 0 ? void 0 : res[0].url);
        }, onUploadError: function (error) {
            react_hot_toast_1["default"].error("" + (error === null || error === void 0 ? void 0 : error.message));
        } }));
};
