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
var api_1 = require("./api");
var paginator_1 = require("./paginator");
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        var _this = _super.call(this) || this;
        _this.paginator = new paginator_1.Paginator(_this);
        return _this;
    }
    Resource.prototype.paginate = function () {
        return this.paginator;
    };
    return Resource;
}(api_1.API));
exports.Resource = Resource;
