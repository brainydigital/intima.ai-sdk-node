# IntimaiApi.CopiasApi

Todas as URIs são relativas a *https://app.intima.ai/api*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**actionsProcessosCopyByPjeAuthIdPost**](CopiasApi.md#actionsProcessosCopyByPjeAuthIdPost) | **POST** /actions/processos/copy/{pje_auth_id} | createProcessCopy


<a name="actionsProcessosCopyByPjeAuthIdPost"></a>
# **actionsProcessosCopyByPjeAuthIdPost**
> ActionsProcessosCopyResponse actionsProcessosCopyByPjeAuthIdPost(pjeAuthId, processo)

createProcessCopy

Realiza uma nova cópia processual

### Exemplo
```javascript
var IntimaiApi = require('@brainy-digital/intimai-sdk-node');
var defaultClient = IntimaiApi.ApiClient.instance;

// Configure API key authorization: api_token
var api_token = defaultClient.authentications['api_token'];
api_token.apiKey = 'YOUR API KEY';

var apiInstance = new IntimaiApi.CopiasApi();

var pjeAuthId = 56; // Number | é o id referente ao tribunal cadastrado em \"Tribunais ativos\" no Intima.ai

var processo = "0000000-00.0000.0.00.0000"; // String | 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionsProcessosCopyByPjeAuthIdPost(pjeAuthId, processo, callback);
```

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
 **pjeAuthId** | **Number**| é o id referente ao tribunal cadastrado em \&quot;Tribunais ativos\&quot; no Intima.ai | [obrigatório]
 **processo** | **String**| é o numero do processo no qual se deseja realizar a cópia processual | [obrigatório]

### Tipo de retorno

[**ActionsProcessosCopyResponse**](ActionsProcessosCopyResponse.md)

### Autorização

[api_token](../README.md#api_token)

### HTTP headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

