"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var resource_1 = require("../resource");
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super.call(this) || this;
    }
    Action.prototype.getResourceEndpoint = function () {
        return 'actions';
    };
    return Action;
}(resource_1.Resource));
exports.Action = Action;
