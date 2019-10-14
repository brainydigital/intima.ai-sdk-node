# IntimaiApi.IntimacoesApi

Todas as URIs são relativas a *https://app.intima.ai/api*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getAllIntimacoes**](IntimacoesApi.md#getAllIntimacoes) | **GET** /intimacoes | Visualiza todas as intimações capturadas


<a name="getAllIntimacoes"></a>
# **getAllIntimacoes**
> IntimacoesResponse getAllIntimacoes()

getAllIntimacoes

Visualiza todas as intimações capturadas

### Exemplo
```javascript
var IntimaiApi = require('@brainy-digital/intimai-sdk-node');
var defaultClient = IntimaiApi.ApiClient.instance;

// Configure API key authorization: api_token
var api_token = defaultClient.authentications['api_token'];
api_token.apiKey = 'YOUR API KEY';

var apiInstance = new IntimaiApi.IntimacoesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllIntimacoes(callback);
```

### Parametros
Esse endpoint não possui parametros.

### Tipo de retorno

[**IntimacoesResponse**](IntimacoesResponse.md)

### Autorização

[api_token](../README.md#api_token)

### HTTP headers

 - **Content-Type**: application/json
 - **Accept**: application/json

