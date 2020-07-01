# Recurso: **protocolosDeHabilitacao**

> Assim como os protocolos, você realizar protocolos de habilitação em quase todos os tribunais 
>diponíveis no Brasil. Sem se preocupar com tamanho dos arquivos em PDF (nos ajustamos e 
>recortamos automaticamente, de acordo com tribunal selecionado).
>
> O protocolo habilitação é realizado em duas etapas:
>
> - Primeira etapa: Coleta de informações do processo no qual se deseja solicitar habilitação.
> - Segunda etapa: Realização do protocolo, a partir das informações coletadas na etapa anterior.

## Primeira etapa

Para realizar a primeira etapa do protocolo de habilitação, basta informar o numero do processo e 
qual o "Tribunal ativo" das sua lista de Tribunais ativos ele pertence.

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_04.png)

## Segunda etapa

Após a finalização da primeira etapa, você terá que informar todas as informações principais do 
protocolo de habilitação:

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_05.png)

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_06.png)

Após a finalização da segunda etapa, a ação do protocolo de habilitação estará finalizada e 
você poderá ver a certidão do protocolo que contem todas as informações do protocolo e serve como 
comprovante de protocolo.

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_07.png)

![image](https://intima.ai/images/landpage/conheca_mais/protocolo_08.png)


Todas as URIs são relativas a *https://app.intima.ai/api/v2*

Metodo | Requisição HTTP | Descrição
------------- | ------------- | -------------
[**consultarPorId**](protocolosDeHabilitacaoResources.md#consultarPorId) | **GET** /protocolos-de-habilitacao/{id} | Visualiza um protocolo de habilitação pelo id
[**cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao**](protocolosDeHabilitacaoResources.md#cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao) | **POST** /acoes/protocolos-de-habilitacao | Cadastra um novo protocolo de habilitação, e coleta as informações iniciais para a primeira etapa
[**cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao**](protocolosDeHabilitacaoResources.md#cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao) | **POST** /acoes/protocolos-de-habilitacao/{protocolo_habilitacao_id} | Finaliza o protoco de habilitação, está é a segunda e ultima etapa do protocolo de habilitação

# **consultarPorId**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**id** | **number**| é o id referente ao protocolo de habilitação cadastrado no Intima.ai | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const resultado = await intimaai.protocolosDeHabilitacao.consultarPorId(21);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**primeira_etapa_para_protocolo_de_habilitacao** | [**PrimeiraEtapaParaProtocoloDeHabilitacao**](../models/qualification_protocol/PrimeiraEtapaParaProtocoloDeHabilitacao.md) | parametros necessários para a criação de um novo registro | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const protocolo = { numero_processo: '0000000-00.0000.0.00.0000', autenticacao_id: 1 };
    const resultado = await intimaai.protocolosDeHabilitacao.cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao(protocolo);
    console.log(resultado);
}
catch (error)
{
    console.error('error: ', error);
}
```

# **cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao**

### Parametros

Nome | Tipo | Descrição | Notas
------------- | ------------- | ------------- | -------------
**protocolo_de_habilitacao_id** | **number**| é o id referente ao protocolo de habilitação cadastrado no Intima.ai, fornecido na primeira etapa | [obrigatório]
**segunda_etapa_para_protocolo_de_habilitacao** | [**SegundaEtapaParaProtocoloDeHabilitacao**](../models/qualification_protocol/SegundaEtapaParaProtocoloDeHabilitacao.md) | parametros necessários para a segunda e ultima etapa do protocolo de habilitação | [obrigatório]

### Exemplos
```javascript
const Intimaai = require('@brainy-digital/intima.ai-sdk-node').default;
// ou
// import Intimaai from '@brainy-digital/intima.ai-sdk-node';

try
{
    const intimaai = new Intimaai('api_secret_token');

    const protocolo = {
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
                ordem: 1 
            }
        ]
    };

    const resultado = await intimaai.protocolosDeHabilitacao.cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao(4039, protocolo);
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
