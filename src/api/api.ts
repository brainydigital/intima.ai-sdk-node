import * as requestretry from 'requestretry';
import * as fs from 'fs';
import { serializeForm } from '../utils/utils';

export class API {

    private baseUrl = 'https://app.intima.ai/api/v2';

    private apiSecretKey: string;

    private proxy;

    private timeout;

    private max_attempts;

    constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number) {
        this.apiSecretKey = api_token;
        this.proxy = proxy;
        this.timeout = timeout || 60000;
        this.max_attempts = max_attempts || 1;
    }

    private getError(error) {
        const body = (error.hasOwnProperty('body')) ? error.body : error;
        return { code: error.statusCode, error: body };
    }

    private getResponse(response, get_data_only: boolean) {
        const body = response.body;        
        if (get_data_only) {
            if (body.hasOwnProperty('data') && Object.keys(body).length === 1) {
                return body.data;
            }
        }
        return body;
    }

    private getRequestDefaultOptions() {
        return {
            proxy: this.proxy,
            timeout: this.timeout,
            json: true,
            maxAttempts: this.max_attempts
        };
    }

    public get(endpoint, query: any = {}, options: any = {}, get_data_only: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {

            let request_options = {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Intimaai_SDK/2.0.0'
                },
                qs: query,
                ...this.getRequestDefaultOptions()
            };

            if (options) {
                if (Object.keys(options).length) {
                    request_options = { ...request_options, ...options };
                }
            }

            requestretry
                .get(this.getBaseUrl() + '/' + endpoint + '?api_token=' + this.getSecretKey(), request_options)
                .then((response) => {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(this.getResponse(response, get_data_only));
                    } else {
                        reject(this.getError(response));
                    }
                })
                .catch(err => {
                    reject(this.getError(err));
                });
        });
    }

    public post(endpoint, body: any = {}, query: any = {}, options: any = {}, attachs: Array<{ field_name: string, files: Array<string> | string }> = null, get_data_only: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {

            let content_type = 'application/json';

            if (attachs) {
                content_type = 'multipart/form-data';
            }            

            let formData = serializeForm(body);

            if (attachs) {
                formData = { ...formData, ...this.appendFiles(attachs) };
            }

            let request_options = {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Intimaai_SDK/2.0.0',
                    'Content-Type': content_type
                },
                formData: formData,
                qs: query,
                ...this.getRequestDefaultOptions()
            };

            if (options) {
                if (Object.keys(options).length) {
                    request_options = { ...request_options, ...options };
                }
            }

            requestretry
                .post(this.getBaseUrl() + '/' + endpoint + '?api_token=' + this.getSecretKey(), request_options)
                .then((response) => {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(this.getResponse(response, get_data_only));
                    } else {
                        reject(this.getError(response));
                    }
                })
                .catch(err => {
                    reject(this.getError(err));
                });
        });
    }

    public put(endpoint, body: any = {}, query: any = {}, options: any = {}, attachs: Array<{ field_name: string, files: Array<string> | string }> = null, get_data_only: boolean = false) {
        return new Promise((resolve, reject) => {

            let content_type = 'application/json';

            if (attachs) {
                content_type = 'multipart/form-data';
            }

            let formData = {
                '_method': 'PUT',
                ...serializeForm(body)
            };

            if (attachs) {
                formData = { ...formData, ...this.appendFiles(attachs) };
            }

            let request_options = {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Intimaai_SDK/2.0.0',
                    'Content-Type': content_type
                },
                formData: formData,
                qs: query,
                ...this.getRequestDefaultOptions()
            };

            if (options) {
                if (Object.keys(options).length) {
                    request_options = { ...request_options, ...options };
                }
            }

            requestretry.post(this.getBaseUrl() + '/' + endpoint + '?api_token=' + this.getSecretKey(), request_options)
                .then((response) => {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(this.getResponse(response, get_data_only));
                    } else {
                        reject(this.getError(response));
                    }
                })
                .catch(err => {
                    reject(this.getError(err));
                });
        });
    }

    public delete(endpoint, query: any = {}, options: any = {}, get_data_only: boolean = false) {
        return new Promise((resolve, reject) => {

            let request_options = {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Intimaai_SDK/2.0.0'
                },
                qs: query,
                ...this.getRequestDefaultOptions()
            };

            if (options) {
                if (Object.keys(options).length) {
                    request_options = { ...request_options, ...options };
                }
            }

            requestretry
                .delete(this.getBaseUrl() + '/' + endpoint + '?api_token=' + this.getSecretKey(), request_options)
                .then((response) => {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(this.getResponse(response, get_data_only));
                    } else {
                        reject(this.getError(response));
                    }
                })
                .catch(err => {
                    reject(this.getError(err));
                });
        });
    }

    private appendFiles(attachs: Array<{ field_name: string, files: Array<string> | string }>) {
        let formData = {};
        if (attachs.field_name == "pfx") {
            var field_name = attachs.field_name;
            var file_path = attachs.files;
            formData[field_name] = {
                value: fs.createReadStream(file_path),
                options: {
                    filename: file_path.split('/').pop(),
                    contentType: 'application/pdf'
                }
            };
            return formData;
        }
        else if (attachs instanceof Array == false) {
            attachs = [attachs];
        }
        attachs.map((attach) => {
            const field_name = attach.field_name;
            if (attach.files instanceof Array) {
                attach.files.map((file_path, index) => {
                    formData[`${field_name}[${index}][arquivo]`] = {
                        value: fs.createReadStream(file_path),
                        options: {
                            filename: file_path.split('/').pop(),
                            contentType: 'application/pdf'
                        }
                    };
                });
            } else {
                const file_path = attach.files;
                formData[`${field_name}[arquivo]`] = {
                    value: fs.createReadStream(file_path),
                    options: {
                        filename: file_path.split('/').pop(),
                        contentType: 'application/pdf'
                    }
                };
            }
        });
        return formData;
    }

    public getBaseUrl() {
        return this.baseUrl;
    }

    public getSecretKey() {
        return this.apiSecretKey;
    }

    public setSecretKey(api_token: string) {
        this.apiSecretKey = api_token;
    }

    public getProxy() {
        return this.proxy;
    }

    public setProxy(proxy: number) {
        this.proxy = proxy;
    }

    public getTimeout() {
        return this.timeout;
    }

    public setTimeout(timeout: number) {
        this.timeout = timeout;
    }

    public getMaxAttempts() {
        return this.max_attempts;
    }

    public setMaxAttempts(max_attempts: number) {
        this.max_attempts = max_attempts;
    }

}