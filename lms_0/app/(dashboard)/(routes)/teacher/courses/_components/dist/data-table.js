"use client";
"use strict";
exports.__esModule = true;
exports.DataTable = void 0;
var React = require("react");
var react_table_1 = require("@tanstack/react-table");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var table_1 = require("@/components/ui/table");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
function DataTable(_a) {
    var _b, _c, _d;
    var columns = _a.columns, data = _a.data;
    var _e = React.useState([]), sorting = _e[0], setSorting = _e[1];
    var _f = React.useState([]), columnFilters = _f[0], setColumnFilters = _f[1];
    var table = react_table_1.useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: react_table_1.getCoreRowModel(),
        getPaginationRowModel: react_table_1.getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: react_table_1.getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: react_table_1.getFilteredRowModel(),
        state: {
            sorting: sorting,
            columnFilters: columnFilters
        }
    });
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex items-center py-4 justify-between" },
            React.createElement(input_1.Input, { placeholder: "Filter courses...", value: (_c = (_b = table.getColumn("title")) === null || _b === void 0 ? void 0 : _b.getFilterValue()) !== null && _c !== void 0 ? _c : "", onChange: function (event) { var _a; return (_a = table.getColumn("title")) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }, className: "max-w-sm" }),
            React.createElement(link_1["default"], { href: "/teacher/create" },
                React.createElement(button_1.Button, null,
                    React.createElement(lucide_react_1.PlusCircle, { className: "h-4 w-4 mr-2" }),
                    "New course"))),
        React.createElement("div", { className: "rounded-md border" },
            React.createElement(table_1.Table, null,
                React.createElement(table_1.TableHeader, null, table.getHeaderGroups().map(function (headerGroup) { return (React.createElement(table_1.TableRow, { key: headerGroup.id }, headerGroup.headers.map(function (header) {
                    return (React.createElement(table_1.TableHead, { key: header.id }, header.isPlaceholder
                        ? null
                        : react_table_1.flexRender(header.column.columnDef.header, header.getContext())));
                }))); })),
                React.createElement(table_1.TableBody, null, ((_d = table.getRowModel().rows) === null || _d === void 0 ? void 0 : _d.length) ? (table.getRowModel().rows.map(function (row) { return (React.createElement(table_1.TableRow, { key: row.id, "data-state": row.getIsSelected() && "selected" }, row.getVisibleCells().map(function (cell) { return (React.createElement(table_1.TableCell, { key: cell.id }, react_table_1.flexRender(cell.column.columnDef.cell, cell.getContext()))); }))); })) : (React.createElement(table_1.TableRow, null,
                    React.createElement(table_1.TableCell, { colSpan: columns.length, className: "h-24 text-center" }, "No results.")))))),
        React.createElement("div", { className: "flex items-center justify-end space-x-2 py-4" },
            React.createElement(button_1.Button, { variant: "outline", size: "sm", onClick: function () { return table.previousPage(); }, disabled: !table.getCanPreviousPage() }, "Previous"),
            React.createElement(button_1.Button, { variant: "outline", size: "sm", onClick: function () { return table.nextPage(); }, disabled: !table.getCanNextPage() }, "Next"))));
}
exports.DataTable = DataTable;
