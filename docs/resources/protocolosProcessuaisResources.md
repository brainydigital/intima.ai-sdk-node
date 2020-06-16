# **protocolosProcessuaisResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](protocolosProcessuaisResources.md#consultarPorId) | **GET** /process-protocols/{id} | Visualiza um protocolo
[**cadastrarNovoProtocolo**](protocolosProcessuaisResources.md#cadastrarNovoProtocolo) | **POST** /actions/process-protocols | Cadastra um novo protocolo

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao protocolo no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.protocolosProcessuaisResources.consultarPorId(14362);
    console.log(by_id_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarNovoProtocolo**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**protocol** | [**ProtocoloProcessual**](../models/protocol/ProtocoloProcessual.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const protocol = {
        process_number: '0000000-00.0000.0.00.0000',
        auth_id: 1,
        tipo_documento_mensagem_geral: 0,
        // peticao: { arquivo: '/path/to/peticao.pdf', tipo_documento: 0, descricao_documento: 'peticao' },
        documentos: [
            { arquivo: '/path/to/anexo.pdf', tipo_documento: 0, descricao_documento: 'anexo', order: 1 }
        ]
    };

    const new_protocol_result = await intimaai.protocolosProcessuaisResources.cadastrarNovoProtocolo(protocol);
    console.log(new_protocol_result);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
