"use strict";
exports.__esModule = true;
function serializeForm(body) {
    var formData = {};
    Object.keys(body).map(function (field) {
        if (body[field] instanceof Array) {
            body[field].map(function (item, index) {
                if (item instanceof Object) {
                    Object.keys(item).map(function (item_key) {
                        formData[field + "[" + index + "][" + item_key + "]"] = item[item_key];
                    });
                }
                else {
                    formData[field + "[" + index + "]"] = item;
                }
            });
        }
        else {
            formData[field] = body[field];
        }
    });
    return formData;
}
exports.serializeForm = serializeForm;
function isEmpty(n) {
    return !(!!n ? typeof n === 'object' ? Array.isArray(n) ? !!n.length : !!Object.keys(n).length : true : false);
}
exports.isEmpty = isEmpty;
