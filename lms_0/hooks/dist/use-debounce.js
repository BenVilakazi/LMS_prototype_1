"use strict";
exports.__esModule = true;
exports.useDebounce = void 0;
var react_1 = require("react");
function useDebounce(value, delay) {
    var _a = react_1.useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            setDebouncedValue(value);
        }, delay || 500);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}
exports.useDebounce = useDebounce;
;
