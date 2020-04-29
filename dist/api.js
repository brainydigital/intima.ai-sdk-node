"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var requestretry = require("requestretry");
var fs = require("fs");
var utils_1 = require("./utils/utils");
var API = /** @class */ (function () {
    function API(api_token, proxy, timeout, max_attempts) {
        this.baseUrl = 'http://a466e4c2.ngrok.io/api/v2';
        this.apiSecretKey = api_token;
        this.proxy = proxy;
        this.timeout = timeout || 60000;
        this.max_attempts = max_attempts || 1;
    }
    API.prototype.getError = function (error) {
        var body = (error.hasOwnProperty('body')) ? error.body : error;
        return { code: error.statusCode, error: body };
    };
    API.prototype.getRequestDefaultOptions = function () {
        return {
            proxy: this.proxy,
            timeout: this.timeout,
            json: true,
            maxAttempts: this.max_attempts
        };
    };
    API.prototype.get = function (endpoint, query, options) {
        var _this = this;
        if (query === void 0) { query = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var request_options = __assign({ headers: {
                    'Accept': 'application/json'
                }, qs: query }, _this.getRequestDefaultOptions());
            if (options) {
                if (Object.keys(options).length) {
                    request_options = __assign(__assign({}, request_options), options);
                }
            }
            requestretry
                .get(_this.getBaseUrl() + '/' + endpoint + '?api_token=' + _this.getSecretKey(), request_options)
                .then(function (response) {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response.body);
                }
                else {
                    reject(_this.getError(response));
                }
            })["catch"](function (err) {
                reject(_this.getError(err));
            });
        });
    };
    API.prototype.post = function (endpoint, body, query, options, attachs) {
        var _this = this;
        if (body === void 0) { body = {}; }
        if (query === void 0) { query = {}; }
        if (options === void 0) { options = {}; }
        if (attachs === void 0) { attachs = null; }
        return new Promise(function (resolve, reject) {
            var content_type = 'application/json';
            if (attachs) {
                content_type = 'multipart/form-data';
            }
            var formData = utils_1.serializeForm(body);
            if (attachs) {
                var file_name_1 = attachs.field_name;
                attachs.files.map(function (file_path, index) {
                    formData[file_name_1 + "[" + index + "][arquivo]"] = {
                        value: fs.createReadStream(file_path),
                        options: {
                            filename: file_path.split('/').pop(),
                            contentType: 'application/pdf'
                        }
                    };
                });
            }
            var request_options = __assign({ headers: {
                    'Accept': 'application/json',
                    'Content-Type': content_type
                }, formData: formData, qs: query }, _this.getRequestDefaultOptions());
            if (options) {
                if (Object.keys(options).length) {
                    request_options = __assign(__assign({}, request_options), options);
                }
            }
            requestretry
                .post(_this.getBaseUrl() + '/' + endpoint + '?api_token=' + _this.getSecretKey(), request_options)
                .then(function (response) {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response.body);
                }
                else {
                    reject(_this.getError(response));
                }
            })["catch"](function (err) {
                reject(_this.getError(err));
            });
        });
    };
    API.prototype.put = function (endpoint, body, query, options, attachs) {
        var _this = this;
        if (body === void 0) { body = {}; }
        if (query === void 0) { query = {}; }
        if (options === void 0) { options = {}; }
        if (attachs === void 0) { attachs = null; }
        return new Promise(function (resolve, reject) {
            var content_type = 'application/json';
            if (attachs) {
                content_type = 'multipart/form-data';
            }
            var formData = __assign({ '_method': 'PUT' }, utils_1.serializeForm(body));
            if (attachs) {
                var file_name_2 = attachs.field_name;
                attachs.files.map(function (file_path, index) {
                    formData[file_name_2 + "[" + index + "][arquivo]"] = {
                        value: fs.createReadStream(file_path),
                        options: {
                            filename: file_path.split('/').pop(),
                            contentType: 'application/pdf'
                        }
                    };
                });
            }
            var request_options = __assign({ headers: {
                    'Accept': 'application/json',
                    'Content-Type': content_type
                }, formData: formData, qs: query }, _this.getRequestDefaultOptions());
            if (options) {
                if (Object.keys(options).length) {
                    request_options = __assign(__assign({}, request_options), options);
                }
            }
            requestretry.post(_this.getBaseUrl() + '/' + endpoint + '?api_token=' + _this.getSecretKey(), request_options)
                .then(function (response) {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response.body);
                }
                else {
                    reject(_this.getError(response));
                }
            })["catch"](function (err) {
                reject(_this.getError(err));
            });
        });
    };
    API.prototype["delete"] = function (endpoint, query, options) {
        var _this = this;
        if (query === void 0) { query = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var request_options = __assign({ headers: {
                    'Accept': 'application/json'
                }, qs: query }, _this.getRequestDefaultOptions());
            if (options) {
                if (Object.keys(options).length) {
                    request_options = __assign(__assign({}, request_options), options);
                }
            }
            requestretry["delete"](_this.getBaseUrl() + '/' + endpoint + '?api_token=' + _this.getSecretKey(), request_options)
                .then(function (response) {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response.body);
                }
                else {
                    reject(_this.getError(response));
                }
            })["catch"](function (err) {
                reject(_this.getError(err));
            });
        });
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
    API.prototype.getProxy = function () {
        return this.proxy;
    };
    API.prototype.setProxy = function (proxy) {
        this.proxy = proxy;
    };
    API.prototype.getTimeout = function () {
        return this.timeout;
    };
    API.prototype.setTimeout = function (timeout) {
        this.timeout = timeout;
    };
    API.prototype.getMaxAttempts = function () {
        return this.max_attempts;
    };
    API.prototype.setMaxAttempts = function (max_attempts) {
        this.max_attempts = max_attempts;
    };
    return API;
}());
exports.API = API;
