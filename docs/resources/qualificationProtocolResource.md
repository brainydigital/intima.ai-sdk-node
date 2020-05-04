# **qualificationProtocolResource**

Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**getById**](qualificationProtocolResource.md#getById) | **GET** /process-qualification-protocols/{id} | Visualiza um certificado
[**getNewQualificationProtocolFirstStep**](qualificationProtocolResource.md#getNewQualificationProtocolFirstStep) | **POST** /actions/process-qualification-protocols | Cadastra um novo certificado
[**getNewQualificationProtocolSecondStep**](qualificationProtocolResource.md#getNewQualificationProtocolSecondStep) | **PUT** /actions/process-qualification-protocols/{qualification_protocol_id} | Atualiza um certificado

# **getById**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao protocolo de habilitação cadastrado no Intima.ai | [obrigatório]

# **getNewQualificationProtocolFirstStep**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**qualification_protocol** | **FirstStepQualificationProtocol**| parametros necessários para a criação de um novo registro | [obrigatório]

# **getNewQualificationProtocolSecondStep**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**qualification_protocol_id** | **number**| é o id referente ao protocolo de habilitação cadastrado no Intima.ai, fornecido na primeira etapa | [obrigatório]
**qualification_protocol** | **SecondStepQualificationProtocol**| parametros necessários para a segunda e ultima etapa do protocolo de habilitação | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// or
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const result = await intimaai.qualificationProtocolResource.getById(21);
    const protocol = { process_number: '0000000-00.0000.0.00.0000', auth_id: 1 };
    const result = await intimaai.qualificationProtocolResource.getNewQualificationProtocolFirstStep(protocol);

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
    const result = await intimaai.qualificationProtocolResource.getNewQualificationProtocolSecondStep(4039, qualification_protocol);

    const paginator = await intimaai.qualificationProtocolResource.paginate();
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