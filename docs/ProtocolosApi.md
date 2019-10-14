# IntimaiApi.ProtocolosApi

Todas as URIs são relativas a *https://app.intima.ai/api*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**createProcessProtocolo**](ProtocolosApi.md#createProcessProtocolo) | **POST** /actions/process-protocol/{pje_auth_id} | Realiza um novo protocolo


<a name="createProcessProtocolo"></a>
# **createProcessProtocolo**
> ActionsProcessProtocolResponse createProcessProtocolo(pjeAuthId, numeroProcesso, tipoDocumentoMensagemGeral, documentos, mensagem_geral, descricao)

createProcessProtocolo

Realiza um novo protocolo

### Exemplo
```javascript
var IntimaiApi = require('@brainy-digital/intimai-sdk-node');
var defaultClient = IntimaiApi.ApiClient.instance;

// Configure API key authorization: api_token
var api_token = defaultClient.authentications['api_token'];
api_token.apiKey = 'YOUR API KEY';

var apiInstance = new IntimaiApi.ProtocolosApi();

var pjeAuthId = 56; // Number | é o id referente ao tribunal cadastrado em \"Tribunais ativos\" no Intima.ai

var numeroProcesso = "0000000-00.0000.0.00.0000"; // String | 

var tipoDocumentoMensagemGeral = 56; // Number | 

var mensagem_geral = "SEGUE EM ANEXO";

var descricao = "Petição";

var Documento = IntimaiApi.Documento;
var documentos = [
    new Documento({ arquivo: "path/to/peticao.pdf", tipo_documento: 11, descricao_documento: 'Petição', order: 1 })
];

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProcessProtocolo(pjeAuthId, numeroProcesso, tipoDocumentoMensagemGeral, documentos, mensagem_geral, descricao, callback);
```

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
 **pjeAuthId** | **Number**| é o id referente ao tribunal cadastrado em 'Tribunais ativos' no Intima.ai | [obrigatório]
 **numeroProcesso** | **String**| é o numero do processo no qual se deseja realizar o protocolo | [obrigatório]
 **tipoDocumentoMensagemGeral** | **Number**| é o id referente ao tipo de documento da mensagem geral | [obrigatório]
 **documentos** | [\[**Documento**\]](Documento.md)| são os anexos relacionados ao protocolo | [obrigatório] 
 **mensagem_geral** | **String**| é o texto do conteúdo do protocolo (texto padrão: SEGUE EM ANEXO) | [obrigatório]
 **descricao** | **String**| é a descrição da mensagem geral (caso não se informe este campo, ele assumira o valor do campo tipo_documento_mensagem_geral) | [obrigatório]

### Tipo de retorno

[**ActionsProcessProtocolResponse**](ActionsProcessProtocolResponse.md)

### Autorização

[api_token](../README.md#api_token)

### HTTP headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

