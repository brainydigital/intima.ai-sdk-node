declare module '@brainy-digital/intima.ai-sdk-node/api/api' {
  export class API {
    private baseUrl;
    private apiSecretKey;
    private proxy;
    private timeout;
    private max_attempts;
    constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number);
    private getError;
    private getRequestDefaultOptions;
    get(endpoint: any, query?: any, options?: any): Promise<any>;
    post(endpoint: any, body?: any, query?: any, options?: any, attachs?: {
      field_name: string;
      files: Array<string> | string;
    }): Promise<any>;
    put(endpoint: any, body?: any, query?: any, options?: any, attachs?: {
      field_name: string;
      files: Array<string> | string;
    }): Promise<unknown>;
    delete(endpoint: any, query?: any, options?: any): Promise<unknown>;
    private appendFiles;
    getBaseUrl(): string;
    getSecretKey(): string;
    setSecretKey(api_token: string): void;
    getProxy(): any;
    setProxy(proxy: number): void;
    getTimeout(): any;
    setTimeout(timeout: number): void;
    getMaxAttempts(): any;
    setMaxAttempts(max_attempts: number): void;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/index' {
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { Auth } from "@brainy-digital/intima.ai-sdk-node/resources/auth";
  import { Certificate } from "@brainy-digital/intima.ai-sdk-node/resources/certificate";
  import { Intimation } from "@brainy-digital/intima.ai-sdk-node/resources/intimation";
  import { ProcessCopy } from "@brainy-digital/intima.ai-sdk-node/resources/process_copy";
  import { ProcessCourse } from "@brainy-digital/intima.ai-sdk-node/resources/process_course";
  import { ProcessInfo } from "@brainy-digital/intima.ai-sdk-node/resources/process_info";
  import { ProcessListener } from "@brainy-digital/intima.ai-sdk-node/resources/process_listener";
  import { ProcessProtocol } from "@brainy-digital/intima.ai-sdk-node/resources/process_protocol";
  import { ProcessQualificationProtocol } from "@brainy-digital/intima.ai-sdk-node/resources/process_qualification_protocol";
  import { ProcessSearch } from "@brainy-digital/intima.ai-sdk-node/resources/process_search";
  import { Tribunal } from "@brainy-digital/intima.ai-sdk-node/resources/tribunal";
  import { User } from "@brainy-digital/intima.ai-sdk-node/resources/user/user";
  import { UserNotification } from "@brainy-digital/intima.ai-sdk-node/resources/user/user_dependent";
  import { UserWebhook } from "@brainy-digital/intima.ai-sdk-node/resources/user/user_webhook";
  class Intimaai {
    private API;
    autenticacoes: Auth;
    tribunais: Tribunal;
    intimacoes: Intimation;
    certificados: Certificate;
    usuarios: User;
    notificacoes: UserNotification;
    webhooks: UserWebhook;
    acoes: Action;
    copiasProcessuais: ProcessCopy;
    escutasProcessuais: ProcessListener;
    protocolosDeHabilitacao: ProcessQualificationProtocol;
    informacoesProcessuais: ProcessInfo;
    andamentosProcessuais: ProcessCourse;
    protocolosProcessuais: ProcessProtocol;
    consultasProcessuais: ProcessSearch;
    constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number);
    private getAPI;
  }
  export = Intimaai;
}
declare module '@brainy-digital/intima.ai-sdk-node/api/paginator' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  export class Paginator {
    protected currentPage: number;
    protected lastPage: number;
    protected perPage: number;
    protected total: number;
    protected paginationData: any;
    protected data: any;
    protected resourceClass: Resource;
    protected firstPageLink: any;
    constructor(resourceClass: Resource);
    private prepare;
    /**
      * Returna um Paginator com os recursos da página informada
     * @return Paginator
     */
    obterPagina(pagina: number): Promise<this>;
    /**
     * Retorna uma coleção de recursos
     * @return Array<any>
     */
    obterColecao(): any;
    /**
     * Obtem a proxima página da paginação
     * @return Paginator
     */
    proximaPagina(): Promise<Paginator>;
    /**
     * Obtem a página anterior da paginação
     * @return Paginator
     */
    paginaAnterior(): Promise<Paginator>;
    /**
    * Verifica se a proxima página existe
     * @return boolean
     */
    existeProximaPagina(): boolean;
    /**
     * Carrega todas as paginações deste recurso.
     * Tenha cuidado ao utilizar este método.
     * Sua conta pode ser banida temporariamente devido ao grande numero de requisições sequênciais.
     * @return Paginator
     */
    carregarTudo(): Promise<this>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/api/resource' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Paginator } from "@brainy-digital/intima.ai-sdk-node/api/paginator";
  export abstract class Resource {
    private API;
    private paginator;
    constructor(API: API);
    abstract getResourceEndpoint(): string;
    paginar(): Paginator;
    getAPI(): API;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/models' {
  export type AndamentoProcessual = {
    numero_processo: string,
    autenticacao_id: number
  };
  export type AtivarIntimacoesParaAutenticacao = {
    abas: Array<string>,
    dias_da_semana: Array<number>,
    horas_do_dia: Array<string>
  };
  export type AtualizarEscutaProcessual = {
    horarios_de_captura: Array<string>
  };
  export type Certificado = {
    pfx: string,
    senha: string
  };
  export type CopiaProcessual = {
    numero_processo: string,
    autenticacao_id: number
  };
  export type Documento = {
    arquivo: string,
    tipo_documento: number,
    descricao_documento: string,
    ordem: number
  };
  export type EscutaProcessual = {
    numero_processo: string,
    autenticacao_id: number,
    horarios_de_captura: Array<string>
  };
  export type InformacaoProcessual = {
    numero_processo: string,
    autenticacao_id: number
  };
  export type NovaAutenticacao = {
    tribunal_id: number,
    certificado_id?: number,
    login?: string,
    senha?: string
  };
  export type Peticao = {
    arquivo: string,
    tipo_documento: number,
    descricao_documento: string
  };
  export type PrimeiraEtapaParaProtocoloDeHabilitacao = {
    numero_processo: string,
    autenticacao_id: number
  };
  export type SegundaEtapaParaProtocoloDeHabilitacao = {
    tipo_solicitacao: number,
    tipo_declaracao: number,
    polo: number,
    partes_vinculadas: Array<string>,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    documentos?: Array<Documento>
  };
  export type ProtocoloProcessual = {
    numero_processo: string,
    autenticacao_id: number,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    peticao?: Peticao,
    documentos?: Array<Documento>
  };
  export type ConsultaProcessual = {
    autenticacao_id: number,
    numero_processo?: string,
    nome_parte?: string,
    nome_representante?: string,
    token?: string
  };
  export type PreAnaliseDeConsultaProcessual = {
    autenticacao_id: number,
    numero_processo?: string,
    nome_parte?: string,
    nome_representante?: string
  };
  export enum ACTION_TYPE {
    PROCESS_INFO = 0,
    PROCESS_COPY,
    PROCESS_INTIMACOES,
    PROCESS_ESCUTA,
    PROCESS_PROTOCOLO,
    PROCESS_PROTOCOLO_HABILITACAO,
    PROCESS_ANDAMENTOS,
    PROCESS_CONSULTA,
    PROCESS_CONSULTA_PRE_ANALISE
  }
  export enum HTTP_VERB {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
  }
  export type Webhook = {
    tipo_acao: ACTION_TYPE | number,
    verbo_http: HTTP_VERB | string,
    url: string
  };
  export type ParteVinculada = {
    nome: string,
    participacao?: string
  };
  export type PrimeiraEtapaParaProtocoloProcessualEsaj = {
    numero_processo: string,
    autenticacao_id: number
  };
  export type SegundaEtapaParaProtocoloProcessualEsaj = {
    classe_id: number,
    categoria_id: number,
    partes_vinculadas: Array<ParteVinculada>,
    peticao: Peticao,
    documentos?: Array<Documento>
  };
}
declare module '@brainy-digital/intima.ai-sdk-node/resources/action' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  export class Action extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem uma ação pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Obtem os resultados de uma ação pelo id
     */
    consultarResultadosDaAcao(acao_id: number): import("@brainy-digital/intima.ai-sdk-node/api/paginator").Paginator;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/auth' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { AtivarIntimacoesParaAutenticacao, NovaAutenticacao } from "@brainy-digital/intima.ai-sdk-node/models";
  export class Auth extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem uma autenticação por id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra uma nova autenticação
     */
    cadastrarNovaAutenticacao(autenticacao: NovaAutenticacao): Promise<any>;
    /**
     * Ativa a captura de intimações para uma autenticação
     */
    ativarCapturaDeIntimacoesParaAutenticacao(autenticacao_id: number, ativar_autenticacao: AtivarIntimacoesParaAutenticacao): Promise<any>;
    /**
     * Desativa a captura de intimações para uma autenticação
     */
    desativarCapturaDeIntimacoesParaAutenticacao(autenticacao_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/certificate' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Certificado } from "@brainy-digital/intima.ai-sdk-node/models";
  export class Certificate extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem um certificado pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra um novo certificado
     */
    cadastrarNovoCertificado(certificado: Certificado): Promise<any>;
    /**
     * Atualiza um certificado pelo id
     */
    atualizarCertificado(certificado_id: number, certificado: Certificado): Promise<any>;
    /**
     * Deleta um certificado pelo id
     */
    excluirCertificado(certificado_id: number): Promise<any>;
    private validateCertificate;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/intimation' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  export class Intimation extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem uma intimação pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Marca uma intimação como revisada
     */
    marcarIntimacaoComoRevisada(intimacao_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_copy' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { CopiaProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  export class ProcessCopy extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * Obtem uma cópia processual pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra uma nova cópia processual
     */
    cadastrarNovaCopia(copia_processual: CopiaProcessual): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_course' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { AndamentoProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  export class ProcessCourse extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * Obtem um andamento processual pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra um novo andamento processual
     */
    cadastrarNovoAndamento(andamento_processual: AndamentoProcessual): Promise<any>;
    /**
     * Captura os andamentos de um andamento processual pré-cadastrado no Intima.ai
     */
    capturarAndamentos(andamento_processual_id: number): Promise<any>;
    /**
     * Castrada e captura os andamentos de um andamento processual
     */
    cadastrarNovoAndamentoECapturarAndamentos(andamento_processual: AndamentoProcessual): Promise<any>;
    /**
     * Obtem os resultados da captura do andamento processual pré-cadastrado no Intima.ai
     */
    consultarResultadosDoAndamento(andamento_processual_id: number): import("@brainy-digital/intima.ai-sdk-node/api/paginator").Paginator;
    /**
     * Deleta um andamento processual pelo id
     */
    excluirAndamento(andamento_processual_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_info' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { InformacaoProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  export class ProcessInfo extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * Obtem uma informação processual pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra uma nova informação processual
     */
    capturarNovaInformacaoProcessual(informacao_processual: InformacaoProcessual): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_listener' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { AtualizarEscutaProcessual, EscutaProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  export class ProcessListener extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * Obtem uma escuta processual pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra uma nova escuta processual
     */
    cadastrarNovaEscuta(escuta_processual: EscutaProcessual): Promise<any>;
    /**
     * Captura uma escuta processual pelo id
     */
    capturarEscuta(escuta_processual_id: number): Promise<any>;
    /**
     * Cadastra e captura uma escuta processual no Intima.ai
     */
    cadastrarNovaEscutaECapturar(escuta_processual: EscutaProcessual): Promise<any>;
    /**
     * Obtem os resultados capturados de uma escuta processual
     */
    consultarResultadosCapturadosDaEscuta(escuta_processual_id: number): import("@brainy-digital/intima.ai-sdk-node/api/paginator").Paginator;
    /**
     * Atualiza uma escuta processual pelo id
     */
    atualizarEscuta(escuta_processual_id: number, escuta_processual: AtualizarEscutaProcessual): Promise<any>;
    /**
     * Deleta uma escuta processual pelo id
     */
    excluirEscuta(escuta_processual_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_protocol' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { ProtocoloProcessual, PrimeiraEtapaParaProtocoloProcessualEsaj, SegundaEtapaParaProtocoloProcessualEsaj } from "@brainy-digital/intima.ai-sdk-node/models";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  export class ProcessProtocol extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * Obtem um protocolo processual pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra um novo protocolo processual para o PJE
     */
    cadastrarNovoProtocolo(protocolo_processual: ProtocoloProcessual): Promise<any>;

    /**
     * Cadastra um novo protocolo para o ESAJ, está é a primeira etapa (de duas etapas) para cadastrar um novo protocolo no Intima.ai
     */
    cadastrarPrimeiraEtapaParaNovoProtocoloEsaj(primeira_etapa_para_protocolo_processual_esaj: PrimeiraEtapaParaProtocoloProcessualEsaj): Promise<any>;

    /**
     * Cadastra um novo protocolo para o ESAJ, está é a segunda e ultima etapa para cadastrar um novo protocolo no Intima.ai
     */
    cadastrarSegundaEtapaParaNovoProtocoloEsaj(protocolo_processual_id: number, segunda_etapa_para_protocolo_processual_esaj: SegundaEtapaParaProtocoloProcessualEsaj): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_qualification_protocol' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { PrimeiraEtapaParaProtocoloDeHabilitacao, SegundaEtapaParaProtocoloDeHabilitacao } from "@brainy-digital/intima.ai-sdk-node/models";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  export class ProcessQualificationProtocol extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * Obtem um protocolo de habilitação pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra um novo protocolo de habilitação, está é a primeira etapa (de duas etapas) para cadastrar um novo protocolo de habilitação no Intima.ai
     */
    cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao(primeira_etapa_para_protocolo_de_habilitacao: PrimeiraEtapaParaProtocoloDeHabilitacao): Promise<any>;
    /**
     * Cadastra um novo protocolo de habilitação, está é a segunda e ultima etapa para cadastrar um novo protocolo de habilitação no Intima.ai
     */
    cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao(protocolo_de_habilitacao_id: number, segunda_etapa_para_protocolo_de_habilitacao: SegundaEtapaParaProtocoloDeHabilitacao): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_search' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Paginator } from "@brainy-digital/intima.ai-sdk-node/api/paginator";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { ConsultaProcessual, PreAnaliseDeConsultaProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { ProcessSearchAnalyse } from "@brainy-digital/intima.ai-sdk-node/resources/process_search_analyse";
  export class ProcessSearch extends Resource {
    protected action: Action;
    protected search_analyse: ProcessSearchAnalyse;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * Obtem uma consulta processual pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra uma nova consulta processual
     */
    cadastrarNovaConsulta(consulta_processual: ConsultaProcessual): Promise<any>;
    /**
     * Obtem os resultados das consultas processual pelo id
     */
    consultarResultadosDaConsulta(consulta_processual_id: number): Paginator;
    /**
     * Obtem um Paginator com as pré-analises de consultas processuais
     */
    listarPreAnalisesDeConsultas(): Promise<Paginator>;
    /**
     * Obtem uma pré-analise de uma consulta processual pelo id
     */
    consultarPorIdPreAnaliseDeConsulta(id: number): Promise<any>;
    /**
    * Cadastra uma nova pré-analise para uma consulta processual
    */
    cadastrarPreAnaliseDeConsulta(pre_analise_de_consulta_processual: PreAnaliseDeConsultaProcessual): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_search_analyse' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { ProcessSearch } from "@brainy-digital/intima.ai-sdk-node/resources/process_search";
  export class ProcessSearchAnalyse extends Resource {
    protected action: Action;
    protected resource_path: string;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action, process_search?: ProcessSearch);
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/resource_result' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  export class ResourceResult extends Resource {
    protected resource_path: string;
    getResourceEndpoint(): string;
    constructor(API: API, resource: Resource, resource_id: number);
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/tribunal' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  export class Tribunal extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem um tribunal pelo id
     */
    consultarPorId(id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  export class User extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem as informações do usuário autenticado
     */
    consultarUsuario(): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user_dependent' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  export class UserNotification extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem um email cadastrado para receber notificações pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra um novo email para receber notificações
     */
    cadastrarNovoEmailParaNotificacoes(email: string): Promise<any>;
    /**
     * Atualiza um email para receber notificações pelo id
     */
    atualizarEmailParaNotificacoes(email_notificacao_id: number, email: string): Promise<any>;
    /**
     * Deleta um email cadastrado pelo id, que deixara de receber notificações
     */
    excluirEmailParaNotificacoes(email_notificacao_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user_webhook' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Webhook } from "@brainy-digital/intima.ai-sdk-node/models";
  export class UserWebhook extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * Obtem um webhook de usuário cadastrado no Intima.ai pelo id
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * Cadastra um novo webhook de usuário
     */
    cadastrarNovoWebhook(webhook: Webhook): Promise<any>;
    /**
     * Atualiza um webhook de usuário pelo id
     */
    atualizarWebhook(webhook_id: number, webhook: Webhook): Promise<any>;
    /**
     * Deleta um webhook de usuário pelo id
     */
    excluirWebhook(webhook_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/utils/utils' {
  export function serializeForm(body: any): {};
  export function isEmpty(n: any): boolean;

}
declare module '@brainy-digital/intima.ai-sdk-node' {
  import main = require('@brainy-digital/intima.ai-sdk-node/index');
  export default main;
}