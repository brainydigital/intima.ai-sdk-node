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
var ResourceResult = /** @class */ (function (_super) {
    __extends(ResourceResult, _super);
    function ResourceResult(API, resource, resource_id) {
        var _this = _super.call(this, API) || this;
        _this.resource_path = resource.getResourceEndpoint() + "/" + resource_id + "/results";
        return _this;
    }
    ResourceResult.prototype.getResourceEndpoint = function () {
        return this.resource_path;
    };
    return ResourceResult;
}(resource_1.Resource));
exports.ResourceResult = ResourceResult;
