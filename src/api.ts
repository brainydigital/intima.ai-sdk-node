import * as unirest from 'unirest';

export class API {

    private baseUrl = 'http://ea51a18b.ngrok.io/api/v2';

    private apiSecretKey: string;

    public get(endpoint, query: any = {}): Promise<any> {
        return new Promise((resolve, reject) => {
            unirest
                .get(this.getBaseUrl() + '/' + endpoint + '?api_token=' + this.getSecretKey())
                .headers({
                    'Accept': 'application/json'
                })
                .query(query)
                .then((response) => {          
                    if (response.status >= 200 && response.status <= 299){
                        resolve(response.body);
                    } else {
                        reject(response.body);
                    }          
                })
                .catch(err => {
                    reject(err);
                });
        })
    }

    public post(endpoint, body: any = {}, query: any = {}): Promise<any> {
        return new Promise((resolve, reject) => {
            unirest
                .post(this.getBaseUrl() + '/' + endpoint + '?api_token=' + this.getSecretKey())
                .headers({
                    'Accept': 'application/json'
                })
                .send(body)
                .query(query)
                .then((response) => {
                    if (response.status >= 200 && response.status <= 299){
                        resolve(response.body);
                    } else {
                        reject(response.body);
                    }       
                })
                .catch(err => {
                    reject(err);
                });
        })
    }

    public put(endpoint, body: any = null, query: any = null) { }

    public getBaseUrl() {
        return this.baseUrl;
    }

    public getSecretKey() {
        return this.apiSecretKey;
    }


    public setSecretKey(api_token: string) {
        this.apiSecretKey = api_token;
    }

}