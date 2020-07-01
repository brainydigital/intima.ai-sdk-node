# Recurso: **protocolosProcessuais**

> Você pode realizar protocolos em quase todos os tribunais diponíveis no Brasil. De 
>forma rápida e segura, sem se preocupar com tamanho dos arquivos em PDF (nos ajustamos e 
>recortamos automaticamente, de acordo com tribunal selecionado).
>
> Para os `protocolos no PJE`, tudo é realizado em apenas uma `única etapa`, já para os `protocolos no 
>ESAJ`, são necessárias `duas etapas` para conclusão do mesmo.

## Passos básicos para protocolagem

Para realizar um novo protocolo, basta informar o numero do processo e qual o `Tribunal ativo` 
das sua lista de Tribunais ativos ele pertence. Após isso, será preciso inserir todas as 
informações principais do protocolo como: Tipo de documento, descrição do documento, 
documentos/anexos do protocolo (bem como seus tipos e descrições) e etc.

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_01.png)

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_02.png)

Após a finalização da ação de protocolagem, você podera ver a certidão do protocolo que contém 
todas as informações do protocolo e serve como comprovante.

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_03.png)

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_08.png)


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](protocolosProcessuaisResources.md#consultarPorId) | **GET** /protocolos-processuais/{id} | Visualiza um protocolo
[**cadastrarNovoProtocolo**](protocolosProcessuaisResources.md#cadastrarNovoProtocolo) | **POST** /acoes/protocolos-processuais | Cadastra um novo protocolo
[**cadastrarPrimeiraEtapaParaNovoProtocoloEsaj**](protocolosProcessuaisResources.md#cadastrarPrimeiraEtapaParaNovoProtocoloEsaj) | **POST** /acoes/esaj/protocolos-processuais | Cadastra um novo protocolo, e coleta as informações iniciais para a primeira etapa
[**cadastrarSegundaEtapaParaNovoProtocoloEsaj**](protocolosProcessuaisResources.md#cadastrarSegundaEtapaParaNovoProtocoloEsaj) | **POST** /acoes/esaj/protocolos-processuais/{protocolo_id} | Finaliza o protoco, está é a segunda e ultima etapa do protocolo no ESAJ

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

    const resultado = await intimaai.protocolosProcessuais.consultarPorId(14362);
    console.log(resultado);
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

    const protocolo = {
        numero_processo: '0000000-00.0000.0.00.0000',
        autenticacao_id: 1,
        tipo_documento_mensagem_geral: 0,
        // peticao: { arquivo: '/path/to/peticao.pdf', tipo_documento: 0, descricao_documento: 'peticao' },
        documentos: [
            { arquivo: '/path/to/anexo.pdf', tipo_documento: 0, descricao_documento: 'anexo', ordem: 1 }
        ]
    };

    const resultado = await intimaai.protocolosProcessuais.cadastrarNovoProtocolo(protocolo);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarPrimeiraEtapaParaNovoProtocoloEsaj**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**primeira_etapa_para_protocolo_processual_esaj** | [**PrimeiraEtapaParaProtocoloProcessualEsaj**](../models/protocol/PrimeiraEtapaParaProtocoloProcessualEsaj.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const protocolo = {
        numero_processo: '0000000-00.0000.0.00.0000',
        autenticacao_id: 1
    };

    const resultado = await intimaai.protocolosProcessuais.cadastrarPrimeiraEtapaParaNovoProtocoloEsaj(protocolo);
    console.log(resultado);
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
**protocolo_processual_id** | **number**| é o id referente ao protocolo cadastrado no Intima.ai, fornecido na primeira etapa | [obrigatório]
**segunda_etapa_para_protocolo_processual_esaj** | [**SegundaEtapaParaProtocoloProcessualEsaj**](../models/protocol/SegundaEtapaParaProtocoloProcessualEsaj.md) | parametros necessários para a segunda e ultima etapa do protocolo no ESAJ | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const protocolo = {
        classe_id: 1,
        categoria_id: 1,
        partes_vinculadas: [
            { nome: 'BANCO FULANO' }
        ],
        peticao: { arquivo: '/path/to/peticao.pdf', tipo_documento: 0 },
        documentos: [
            { arquivo: '/path/to/anexo.pdf', tipo_documento: 0, descricao_documento: 'anexo', ordem: 1 }
        ]
    };

    const resultado = await intimaai.protocolosProcessuais.cadastrarSegundaEtapaParaNovoProtocoloEsaj(53, protocolo);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
