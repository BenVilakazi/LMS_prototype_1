"use client";
"use strict";
exports.__esModule = true;
exports.Editor = void 0;
var dynamic_1 = require("next/dynamic");
var react_1 = require("react");
require("react-quill/dist/quill.snow.css");
;
exports.Editor = function (_a) {
    var onChange = _a.onChange, value = _a.value;
    var ReactQuill = react_1.useMemo(function () { return dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("react-quill"); }); }, { ssr: false }); }, []);
    return (React.createElement("div", { className: "bg-white" },
        React.createElement(ReactQuill, { theme: "snow", value: value, onChange: onChange })));
};
