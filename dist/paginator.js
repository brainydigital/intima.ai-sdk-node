"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Paginator = /** @class */ (function () {
    function Paginator(resourceClass) {
        this.currentPage = 0;
        this.lastPage = 1;
        this.perPage = 15;
        this.total = 0;
        this.resourceClass = resourceClass;
    }
    Paginator.prototype.prepare = function () {
        this.currentPage = this.paginationData['meta']['current_page'];
        this.lastPage = this.paginationData['meta']['last_page'];
        this.perPage = this.paginationData['meta']['per_page'];
        this.total = this.paginationData['meta']['total'];
        this.firstPageLink = this.paginationData['links']['first'];
        this.data = this.paginationData['data'];
    };
    /**
     * getPage
     */
    Paginator.prototype.getPage = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.resourceClass.get(this.resourceClass.getResourceEndpoint(), { page: page })];
                    case 1:
                        _a.paginationData = _b.sent();
                        this.prepare();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Return a array of resources
     * @return Array<Resource>
     */
    Paginator.prototype.getCollection = function () {
        return this.data;
    };
    /**
     * Get next page
     * @return Paginator
     */
    Paginator.prototype.nextPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!((this.currentPage < this.lastPage) || (!this.currentPage && !this.paginationData))) return [3 /*break*/, 2];
                        this.currentPage++;
                        return [4 /*yield*/, this.getPage(this.currentPage)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Get previous page
     * @return Paginator
     */
    Paginator.prototype.previousPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentPage > 1)) return [3 /*break*/, 2];
                        this.currentPage--;
                        return [4 /*yield*/, this.getPage(this.currentPage)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Verify if next page exists
     * @return Paginator
     */
    Paginator.prototype.hasNextPage = function () {
        if (this.currentPage < this.lastPage) {
            return true;
        }
        return false;
    };
    /**
     * Load all requested resources.
     * Be careful with this function.
     * Your account could be blocked because a big number of sequential requests.
     * @return Paginator
     */
    Paginator.prototype.loadAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resources, latestRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentPage === 1 && this.lastPage === 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getPage(this.currentPage)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        resources = [];
                        latestRequest = null;
                        _a.label = 3;
                    case 3:
                        if (!this.hasNextPage()) return [3 /*break*/, 5];
                        this.currentPage++;
                        return [4 /*yield*/, this.getPage(this.currentPage)];
                    case 4:
                        latestRequest = _a.sent();
                        resources = resources.concat(latestRequest['data']);
                        return [3 /*break*/, 3];
                    case 5:
                        ;
                        this.paginationData = latestRequest;
                        this.paginationData['data'] = resources;
                        this.prepare();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Paginator;
}());
exports.Paginator = Paginator;
