"use client";
"use strict";
exports.__esModule = true;
exports.Combobox = void 0;
var React = require("react");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var button_1 = require("@/components/ui/button");
var command_1 = require("@/components/ui/command");
var popover_1 = require("@/components/ui/popover");
;
exports.Combobox = function (_a) {
    var _b;
    var options = _a.options, value = _a.value, onChange = _a.onChange;
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    return (React.createElement(popover_1.Popover, { open: open, onOpenChange: setOpen },
        React.createElement(popover_1.PopoverTrigger, { asChild: true },
            React.createElement(button_1.Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-full justify-between" },
                value
                    ? (_b = options.find(function (option) { return option.value === value; })) === null || _b === void 0 ? void 0 : _b.label : "Select option...",
                React.createElement(lucide_react_1.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }))),
        React.createElement(popover_1.PopoverContent, { className: "w-full p-0" },
            React.createElement(command_1.Command, null,
                React.createElement(command_1.CommandInput, { placeholder: "Search option..." }),
                React.createElement(command_1.CommandEmpty, null, "No option found."),
                React.createElement(command_1.CommandGroup, null, options.map(function (option) { return (React.createElement(command_1.CommandItem, { key: option.value, onSelect: function () {
                        onChange(option.value === value ? "" : option.value);
                        setOpen(false);
                    } },
                    React.createElement(lucide_react_1.Check, { className: utils_1.cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0") }),
                    option.label)); }))))));
};
