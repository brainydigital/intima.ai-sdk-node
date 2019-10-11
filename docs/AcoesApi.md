# IntimaiApi.AcoesApi

Todas as URIs são relativas a *https://app.intima.ai/api*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**actionsStatusByPjeActionIdGet**](AcoesApi.md#actionsStatusByPjeActionIdGet) | **GET** /actions/status/{pje_action_id} | getActionStatus


<a name="actionsStatusByPjeActionIdGet"></a>
# **actionsStatusByPjeActionIdGet**
> ActionsStatusResponse actionsStatusByPjeActionIdGet(pjeActionId)

getActionStatus

Checa o resultado de uma ação

### Exemplo
```javascript
var IntimaiApi = require('@brainy-digital/intimai-sdk-node');
var defaultClient = IntimaiApi.ApiClient.instance;

// Configure API key authorization: api_token
var api_token = defaultClient.authentications['api_token'];
api_token.apiKey = 'YOUR API KEY';

var apiInstance = new IntimaiApi.AcoesApi();

var pjeActionId = 56; // Number | é fornecido após se realizar a requisição de qualquer ação para o Intima.ai


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionsStatusByPjeActionIdGet(pjeActionId, callback);
```

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
 **pjeActionId** | **Number**| é fornecido após se realizar a requisição de qualquer ação para o Intima.ai | [obrigatório]

### Tipo de retorno

[**ActionsStatusResponse**](ActionsStatusResponse.md)

### Autorização

[api_token](../README.md#api_token)

### HTTP headers

 - **Content-Type**: application/json
 - **Accept**: application/json

