"use client";
"use strict";
exports.__esModule = true;
exports.Preview = void 0;
var dynamic_1 = require("next/dynamic");
var react_1 = require("react");
require("react-quill/dist/quill.bubble.css");
;
exports.Preview = function (_a) {
    var value = _a.value;
    var ReactQuill = react_1.useMemo(function () { return dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("react-quill"); }); }, { ssr: false }); }, []);
    return (React.createElement(ReactQuill, { theme: "bubble", value: value, readOnly: true }));
};
