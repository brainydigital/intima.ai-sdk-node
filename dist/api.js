"use strict";
exports.__esModule = true;
var unirest = require("unirest");
var API = /** @class */ (function () {
    function API() {
        this.baseUrl = 'http://ea51a18b.ngrok.io/api/v2';
    }
    API.prototype.get = function (endpoint, query) {
        var _this = this;
        if (query === void 0) { query = {}; }
        return new Promise(function (resolve, reject) {
            unirest
                .get(_this.getBaseUrl() + '/' + endpoint + '?api_token=' + _this.getSecretKey())
                .headers({
                'Accept': 'application/json'
            })
                .query(query)
                .then(function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    resolve(response.body);
                }
                else {
                    reject(response.body);
                }
            })["catch"](function (err) {
                reject(err);
            });
        });
    };
    API.prototype.post = function (endpoint, body, query) {
        var _this = this;
        if (body === void 0) { body = {}; }
        if (query === void 0) { query = {}; }
        return new Promise(function (resolve, reject) {
            unirest
                .post(_this.getBaseUrl() + '/' + endpoint + '?api_token=' + _this.getSecretKey())
                .headers({
                'Accept': 'application/json'
            })
                .send(body)
                .query(query)
                .then(function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    resolve(response.body);
                }
                else {
                    reject(response.body);
                }
            })["catch"](function (err) {
                reject(err);
            });
        });
    };
    API.prototype.put = function (endpoint, body, query) {
        if (body === void 0) { body = null; }
        if (query === void 0) { query = null; }
    };
    API.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    API.prototype.getSecretKey = function () {
        return this.apiSecretKey;
    };
    API.prototype.setSecretKey = function (api_token) {
        this.apiSecretKey = api_token;
    };
    return API;
}());
exports.API = API;
