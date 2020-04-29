"use strict";
exports.__esModule = true;
var paginator_1 = require("./paginator");
var Resource = /** @class */ (function () {
    function Resource(API) {
        this.API = API;
        this.paginator = new paginator_1.Paginator(this);
    }
    Resource.prototype.paginate = function () {
        return this.paginator;
    };
    Resource.prototype.getAPI = function () {
        return this.API;
    };
    return Resource;
}());
exports.Resource = Resource;
