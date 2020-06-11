# **protocolosProcessuaisEsajResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**cadastrarPrimeiraEtapaParaNovoProtocoloEsaj**](protocolosProcessuaisEsajResources.md#cadastrarPrimeiraEtapaParaNovoProtocoloEsaj) | **POST** /process-protocols-esaj | Cadastra um novo protocolo, e coleta as informações iniciais para a primeira etapa
[**cadastrarSegundaEtapaParaNovoProtocoloEsaj**](protocolosProcessuaisEsajResources.md#cadastrarSegundaEtapaParaNovoProtocoloEsaj) | **POST** /actions/process-protocols-esaj/{protocol_id} | Finaliza o protoco, está é a segunda e ultima etapa do protocolo no ESAJ

# **cadastrarPrimeiraEtapaParaNovoProtocoloEsaj**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**protocol** | [**PrimeiraEtapaParaProtocoloProcessualEsaj**](../models/protocol/PrimeiraEtapaParaProtocoloProcessualEsaj.md) | parametros necessários para a criação de um novo registro | [obrigatório]

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
        auth_id: 1
    };

    const new_protocol_result = await intimaai.protocolosProcessuaisEsajResources.cadastrarPrimeiraEtapaParaNovoProtocoloEsaj(protocol);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarSegundaEtapaParaNovoProtocoloEsaj**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**protocol_id** | **number**| é o id referente ao protocolo cadastrado no Intima.ai, fornecido na primeira etapa | [obrigatório]
**protocol** | [**SegundaEtapaParaProtocoloProcessualEsaj**](../models/protocol/SegundaEtapaParaProtocoloProcessualEsaj.md) | parametros necessários para a segunda e ultima etapa do protocolo no ESAJ | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const protocol = {
        classe_id: 1,
        categoria_id: 1,
        partes_vinculadas: [
            { nome: 'BANCO FULANO' }
        ],
        peticao: { arquivo: '/path/to/peticao.pdf', tipo_documento: 0 },
        documentos: [
            { arquivo: '/path/to/anexo.pdf', tipo_documento: 0, descricao_documento: 'anexo', order: 1 }
        ]
    };

    const new_protocol_result = await intimaai.protocolosProcessuaisEsajResources.cadastrarSegundaEtapaParaNovoProtocoloEsaj(53, protocol);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
