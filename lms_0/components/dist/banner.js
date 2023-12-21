"use strict";
exports.__esModule = true;
exports.Banner = void 0;
var lucide_react_1 = require("lucide-react");
var class_variance_authority_1 = require("class-variance-authority");
var utils_1 = require("@/lib/utils");
var bannerVariants = class_variance_authority_1.cva("border text-center p-4 text-sm flex items-center w-full", {
    variants: {
        variant: {
            warning: "bg-yellow-200/80 border-yellow-30 text-primary",
            success: "bg-emerald-700 border-emerald-800 text-secondary"
        }
    },
    defaultVariants: {
        variant: "warning"
    }
});
;
var iconMap = {
    warning: lucide_react_1.AlertTriangle,
    success: lucide_react_1.CheckCircleIcon
};
exports.Banner = function (_a) {
    var label = _a.label, variant = _a.variant;
    var Icon = iconMap[variant || "warning"];
    return (React.createElement("div", { className: utils_1.cn(bannerVariants({ variant: variant })) },
        React.createElement(Icon, { className: "h-4 w-4 mr-2" }),
        label));
};
