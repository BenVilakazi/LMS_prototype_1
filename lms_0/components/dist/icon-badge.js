"use strict";
exports.__esModule = true;
exports.IconBadge = void 0;
var class_variance_authority_1 = require("class-variance-authority");
var utils_1 = require("@/lib/utils");
var backgroundVariants = class_variance_authority_1.cva("rounded-full flex items-center justify-center", {
    variants: {
        variant: {
            "default": "bg-sky-100",
            success: "bg-emerald-100"
        },
        size: {
            "default": "p-2",
            sm: "p-1"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var iconVariants = class_variance_authority_1.cva("", {
    variants: {
        variant: {
            "default": "text-sky-700",
            success: "text-emerald-700"
        },
        size: {
            "default": "h-8 w-8",
            sm: "h-4 w-4"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
;
exports.IconBadge = function (_a) {
    var Icon = _a.icon, variant = _a.variant, size = _a.size;
    return (React.createElement("div", { className: utils_1.cn(backgroundVariants({ variant: variant, size: size })) },
        React.createElement(Icon, { className: utils_1.cn(iconVariants({ variant: variant, size: size })) })));
};
