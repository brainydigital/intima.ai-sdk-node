export function serializeForm(body) {

    let formData = {};

    Object.keys(body).map((field) => {

        if (body[field] instanceof Array) {

            body[field].map((item, index) => {
                if (item instanceof Object) {
                    Object.keys(item).map((item_key) => {
                        formData[`${field}[${index}][${item_key}]`] = item[item_key];
                    });
                }
                else {
                    formData[`${field}[${index}]`] = item;
                }
            });
        } else {
            if (body[field] instanceof Object) {
                Object.keys(body[field]).map((item_key) => {
                    formData[`${field}[${item_key}]`] = body[field][item_key];
                });
            }
            else {
                formData[field] = body[field];
            }
        }

    });

    return formData;
}

export function isEmpty(n){
	return !(!!n ? typeof n === 'object' ? Array.isArray(n) ? !!n.length : !!Object.keys(n).length : true : false);
}