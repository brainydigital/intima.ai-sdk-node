# IntimaiApi.EscutasApi

Todas as URIs são relativas a *https://app.intima.ai/api*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**actionsProcessDocsByPjeAuthIdPost**](EscutasApi.md#actionsProcessDocsByPjeAuthIdPost) | **POST** /actions/process-docs/{pje_auth_id} | createProcessEscuta


<a name="actionsProcessDocsByPjeAuthIdPost"></a>
# **actionsProcessDocsByPjeAuthIdPost**
> ActionsProcessDocsResponse actionsProcessDocsByPjeAuthIdPost(pjeAuthId, processo)

createProcessEscuta

Realiza uma nova escuta processual

### Exemplo
```javascript
var IntimaiApi = require('intimai-sdk-node');
var defaultClient = IntimaiApi.ApiClient.instance;

// Configure API key authorization: api_token
var api_token = defaultClient.authentications['api_token'];
api_token.apiKey = 'YOUR API KEY';

var apiInstance = new IntimaiApi.EscutasApi();

var pjeAuthId = 56; // Number | é o id referente ao tribunal cadastrado em \"Tribunais ativos\" no Intima.ai

var processo = "processo_example"; // String | 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionsProcessDocsByPjeAuthIdPost(pjeAuthId, processo, callback);
```

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
 **pjeAuthId** | **Number**| é o id referente ao tribunal cadastrado em \&quot;Tribunais ativos\&quot; no Intima.ai | [obrigatório]
 **processo** | **String**| é o numero do processo no qual se deseja realizar a escuta processual | [obrigatório]

### Tipo de retorno

[**ActionsProcessDocsResponse**](ActionsProcessDocsResponse.md)

### Autorização

[api_token](../README.md#api_token)

### HTTP headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

