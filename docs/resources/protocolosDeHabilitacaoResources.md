# **protocolosDeHabilitacaoResources**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](protocolosDeHabilitacaoResources.md#consultarPorId) | **GET** /process-qualification-protocols/{id} | Visualiza um protocolo de habilitação pelo id
[**cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao**](protocolosDeHabilitacaoResources.md#cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao) | **POST** /actions/process-qualification-protocols | Cadastra um novo protocolo de habilitação, e coleta as informações iniciais para a primeira etapa
[**cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao**](protocolosDeHabilitacaoResources.md#cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao) | **POST** /actions/process-qualification-protocols/{qualification_protocol_id} | Finaliza o protoco de habilitação, está é a segunda e ultima etapa do protocolo de habilitação

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao protocolo de habilitação cadastrado no Intima.ai | [obrigatório]

# **cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**qualification_protocol** | [**PrimeiraEtapaParaProtocoloDeHabilitacao**](../models/qualification_protocol/PrimeiraEtapaParaProtocoloDeHabilitacao.md) | parametros necessários para a criação de um novo registro | [obrigatório]

# **cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**qualification_protocol_id** | **number**| é o id referente ao protocolo de habilitação cadastrado no Intima.ai, fornecido na primeira etapa | [obrigatório]
**qualification_protocol** | [**SegundaEtapaParaProtocoloDeHabilitacao**](../models/qualification_protocol/SegundaEtapaParaProtocoloDeHabilitacao.md) | parametros necessários para a segunda e ultima etapa do protocolo de habilitação | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const by_id_result = await intimaai.protocolosDeHabilitacaoResources.consultarPorId(21);

    const protocol = { process_number: '0000000-00.0000.0.00.0000', auth_id: 1 };
    const new_first_step_result = await intimaai.protocolosDeHabilitacaoResources.cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao(protocol);

    const qualification_protocol = {
        tipo_solicitacao: 0,
        tipo_declaracao: 0,
        polo: 1,
        partes_vinculadas: ['BANCO FULANO'],
        tipo_documento_mensagem_geral: 0,
        documentos: [
            { 
                arquivo: '/path/to/file.pdf', 
                tipo_documento: 0, 
                descricao_documento: 'file', 
                order: 1 
            }
        ]
    };

    const new_first_second_result = await intimaai.protocolosDeHabilitacaoResources.cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao(4039, qualification_protocol);

    const paginator = await intimaai.protocolosDeHabilitacaoResources.paginate();
    await paginator.getPage(1);
}
catch (error)
{
    console.error('error: ', error);
}
```

[[Voltar ao topo]](#)        
[[Voltar a lista da API]](../../README.md#Documentação-para-os-Endpoints-da-API)    
[[Voltar para o README]](../../README.md#Intima.ai---SDK-NodeJS)
