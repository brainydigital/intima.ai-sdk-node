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
  import { User } from "@brainy-digital/intima.ai-sdk-node/resources/user/user";
  import { UserNotification } from "@brainy-digital/intima.ai-sdk-node/resources/user/user_dependent";
  import { UserWebhook } from "@brainy-digital/intima.ai-sdk-node/resources/user/user_webhook";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { ProcessCopy } from "@brainy-digital/intima.ai-sdk-node/resources/process_copy";
  import { ProcessListener } from "@brainy-digital/intima.ai-sdk-node/resources/process_listener";
  import { ProcessQualificationProtocol } from "@brainy-digital/intima.ai-sdk-node/resources/process_qualification_protocol";
  import { ProcessInfo } from "@brainy-digital/intima.ai-sdk-node/resources/process_info";
  import { ProcessCourse } from "@brainy-digital/intima.ai-sdk-node/resources/process_course";
  import { ProcessProtocol } from "@brainy-digital/intima.ai-sdk-node/resources/process_protocol";
  import { ProcessSearch } from "@brainy-digital/intima.ai-sdk-node/resources/process_search";
  import { Certificate } from "@brainy-digital/intima.ai-sdk-node/resources/certificate";
  import { Auth } from "@brainy-digital/intima.ai-sdk-node/resources/auth";
  import { Tribunal } from "@brainy-digital/intima.ai-sdk-node/resources/tribunal";
  import { Intimation } from "@brainy-digital/intima.ai-sdk-node/resources/intimation";
  import { ProcessProtocolEsaj } from "@brainy-digital/intima.ai-sdk-node/resources/process_protocol_esaj";
  class Intimaai {
    private API;
    autenticacoesResources: Auth;
    tribunaisResources: Tribunal;
    intimacoesResources: Intimation;
    certificadosResources: Certificate;
    usuariosResources: User;
    notificacoesResources: UserNotification;
    webhooksResources: UserWebhook;
    acoesResources: Action;
    copiasProcessuaisResources: ProcessCopy;
    escutasProcessuaisResources: ProcessListener;
    protocolosDeHabilitacaoResources: ProcessQualificationProtocol;
    informacoesProcessuaisResources: ProcessInfo;
    andamentosProcessuaisResources: ProcessCourse;
    protocolosProcessuaisResources: ProcessProtocol;
    protocolosProcessuaisEsajResources: ProcessProtocolEsaj;
    consultasProcessuaisResources: ProcessSearch;
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
     * getPage
     */
    getPage(page: number): Promise<this>;
    /**
     * Return a array of resources
     * @return Array<any>
     */
    getCollection(): any;
    /**
     * Get next page
     * @return Paginator
     */
    nextPage(): Promise<Paginator>;
    /**
     * Get previous page
     * @return Paginator
     */
    previousPage(): Promise<Paginator>;
    /**
     * Verify if next page exists
     * @return boolean
     */
    hasNextPage(): boolean;
    /**
     * Load all requested resources.
     * Be careful with this function.
     * Your account could be blocked because a big number of sequential requests.
     * @return Paginator
     */
    loadAll(): Promise<this>;
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
    paginate(): Paginator;
    getAPI(): API;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/models' {
  export type AndamentoProcessual = {
    process_number: string,
    auth_id: number
  };
  export type AtivarIntimacoesParaAutenticacao = {
    tabs: Array<string>,
    week_days: Array<number>,
    day_hour: Array<string>
  };
  export type AtualizarEscutaProcessual = {
    schedule_times: Array<string>
  };
  export type Certificado = {
    pfx: string,
    password: string
  };
  export type CopiaProcessual = {
    process_number: string,
    auth_id: number
  };
  export type Documento = {
    arquivo: string,
    tipo_documento: number,
    descricao_documento: string,
    order: number
  };
  export type EscutaProcessual = {
    process_number: string,
    auth_id: number,
    schedule_times: Array<string>
  };
  export type InformacaoProcessual = {
    process_number: string,
    auth_id: number
  };
  export type NovaAutenticacao = {
    tribunal_id: number,
    user_certificate_id?: number,
    login?: string,
    password?: string
  };
  export type Peticao = {
    arquivo: string,
    tipo_documento: number,
    descricao_documento: string
  };
  export type PrimeiraEtapaParaProtocoloDeHabilitacao = {
    process_number: string,
    auth_id: number
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
    process_number: string,
    auth_id: number,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    peticao?: Peticao,
    documentos?: Array<Documento>
  };
  export type ConsultaProcessual = {
    auth_id: number,
    process_number?: string,
    nome_parte?: string,
    nome_representante?: string,
    token?: string
  };
  export type PreAnaliseDeConsultaProcessual = {
    auth_id: number,
    process_number?: string,
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
    action_type: ACTION_TYPE | number,
    http_verb: HTTP_VERB | string,
    url: string
  };
  export type ParteVinculada = {
    nome: string,
    participacao?: string
  };
  export type PrimeiraEtapaParaProtocoloProcessualEsaj = {
    process_number: string,
    auth_id: number
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
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class Action extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * consultarResultadosDaAcao
     */
    consultarResultadosDaAcao(action_id: number): import("@brainy-digital/intima.ai-sdk-node/api/paginator").Paginator;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/auth' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { NovaAutenticacao, AtivarIntimacoesParaAutenticacao } from "@brainy-digital/intima.ai-sdk-node/models";
  export class Auth extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovaAutenticacao
     */
    cadastrarNovaAutenticacao(auth: NovaAutenticacao): Promise<any>;
    /**
     * ativarCapturaDeIntimacoesParaAutenticacao
     */
    ativarCapturaDeIntimacoesParaAutenticacao(auth_id: number, enable_auth: AtivarIntimacoesParaAutenticacao): Promise<any>;
    /**
     * desativarCapturaDeIntimacoesParaAutenticacao
     */
    desativarCapturaDeIntimacoesParaAutenticacao(auth_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/certificate' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Certificado } from "@brainy-digital/intima.ai-sdk-node/models";
  export class Certificate extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovoCertificado
     */
    cadastrarNovoCertificado(certificate: Certificado): Promise<any>;
    /**
     * atualizarCertificado
     */
    atualizarCertificado(certificate_id: number, certificate: Certificado): Promise<any>;
    /**
     * excluirCertificado
     */
    excluirCertificado(certificate_id: number): Promise<any>;
    private validateCertificate;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/intimation' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class Intimation extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * marcarIntimacaoComoRevisada
     */
    marcarIntimacaoComoRevisada(intimation_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_copy' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { CopiaProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessCopy extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovaCopia
     */
    cadastrarNovaCopia(copy: CopiaProcessual): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_course' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { AndamentoProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessCourse extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovoAndamento
     */
    cadastrarNovoAndamento(course: AndamentoProcessual): Promise<any>;
    /**
     * capturarAndamentos
     */
    capturarAndamentos(course_id: number): Promise<any>;
    /**
     * cadastrarNovoAndamentoECapturarAndamentos
     */
    cadastrarNovoAndamentoECapturarAndamentos(course: AndamentoProcessual): Promise<any>;
    /**
     * consultarResultadosDoAndamento
     */
    consultarResultadosDoAndamento(course_id: number): import("@brainy-digital/intima.ai-sdk-node/api/paginator").Paginator;
    /**
     * excluirAndamento
     */
    excluirAndamento(course_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_info' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { InformacaoProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessInfo extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * capturarNovaInformacaoProcessual
     */
    capturarNovaInformacaoProcessual(process: InformacaoProcessual): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_listener' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { EscutaProcessual, AtualizarEscutaProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessListener extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovaEscuta
     */
    cadastrarNovaEscuta(listener: EscutaProcessual): Promise<any>;
    /**
     * capturarEscuta
     */
    capturarEscuta(listener_id: number): Promise<any>;
    /**
     * cadastrarNovaEscutaECapturar
     */
    cadastrarNovaEscutaECapturar(listener: EscutaProcessual): Promise<any>;
    /**
     * consultarResultadosCapturadosDaEscuta
     */
    consultarResultadosCapturadosDaEscuta(listener_id: number): import("@brainy-digital/intima.ai-sdk-node/api/paginator").Paginator;
    /**
     * atualizarEscuta
     */
    atualizarEscuta(listener_id: number, listener: AtualizarEscutaProcessual): Promise<any>;
    /**
     * excluirEscuta
     */
    excluirEscuta(listener_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_protocol' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { ProtocoloProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessProtocol extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovoProtocolo
     */
    cadastrarNovoProtocolo(protocol: ProtocoloProcessual): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_protocol_esaj' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { PrimeiraEtapaParaProtocoloProcessualEsaj, SegundaEtapaParaProtocoloProcessualEsaj } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessProtocolEsaj extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * cadastrarPrimeiraEtapaParaNovoProtocoloEsaj
     */
    cadastrarPrimeiraEtapaParaNovoProtocoloEsaj(protocol: PrimeiraEtapaParaProtocoloProcessualEsaj): Promise<any>;
    /**
     * cadastrarSegundaEtapaParaNovoProtocoloEsaj
     */
    cadastrarSegundaEtapaParaNovoProtocoloEsaj(protocol_id: number, protocol: SegundaEtapaParaProtocoloProcessualEsaj): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_qualification_protocol' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { PrimeiraEtapaParaProtocoloDeHabilitacao, SegundaEtapaParaProtocoloDeHabilitacao } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessQualificationProtocol extends Resource {
    protected action: Action;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao
     */
    cadastrarPrimeiraEtapaParaNovoProtocoloDeHabilitacao(qualification_protocol: PrimeiraEtapaParaProtocoloDeHabilitacao): Promise<any>;
    /**
     * cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao
     */
    cadastrarSegundaEtapaParaNovoProtocoloDeHabilitacao(qualification_protocol_id: number, qualification_protocol: SegundaEtapaParaProtocoloDeHabilitacao): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_search' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { ProcessSearchAnalyse } from "@brainy-digital/intima.ai-sdk-node/resources/process_search_analyse";
  import { Paginator } from "@brainy-digital/intima.ai-sdk-node/api/paginator";
  import { ConsultaProcessual, PreAnaliseDeConsultaProcessual } from "@brainy-digital/intima.ai-sdk-node/models";
  export class ProcessSearch extends Resource {
    protected action: Action;
    protected search_analyse: ProcessSearchAnalyse;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovaConsulta
     */
    cadastrarNovaConsulta(search: ConsultaProcessual): Promise<any>;
    /**
     * consultarResultadosDaConsulta
     */
    consultarResultadosDaConsulta(search_id: number): Paginator;
    /**
     * listarPreAnalisesDeConsultas
     */
    listarPreAnalisesDeConsultas(): Promise<Paginator>;
    /**
     * consultarPorIdPreAnaliseDeConsulta
     */
    consultarPorIdPreAnaliseDeConsulta(id: number): Promise<any>;
    /**
    * cadastrarPreAnaliseDeConsulta
    */
    cadastrarPreAnaliseDeConsulta(search_analyse: PreAnaliseDeConsultaProcessual): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_search_analyse' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { ProcessSearch } from "@brainy-digital/intima.ai-sdk-node/resources/process_search";
  export class ProcessSearchAnalyse extends Resource {
    protected action: Action;
    protected resource_path: string;
    getResourceEndpoint(): string;
    constructor(API: API, action: Action, process_search?: ProcessSearch);
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/resource_result' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class ResourceResult extends Resource {
    protected resource_path: string;
    getResourceEndpoint(): string;
    constructor(API: API, resource: Resource, resource_id: number);
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/tribunal' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class Tribunal extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class User extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarUsuario
     */
    consultarUsuario(): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user_dependent' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class UserNotification extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovoEmailParaNotificacoes
     */
    cadastrarNovoEmailParaNotificacoes(email: string): Promise<any>;
    /**
     * atualizarEmailParaNotificacoes
     */
    atualizarEmailParaNotificacoes(user_email_notification_id: number, email: string): Promise<any>;
    /**
     * excluirEmailParaNotificacoes
     */
    excluirEmailParaNotificacoes(user_email_notification_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user_webhook' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/api/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Webhook } from "@brainy-digital/intima.ai-sdk-node/models";
  export class UserWebhook extends Resource {
    getResourceEndpoint(): string;
    constructor(API: API);
    /**
     * consultarPorId
     */
    consultarPorId(id: number): Promise<any>;
    /**
     * cadastrarNovoWebhook
     */
    cadastrarNovoWebhook(user_webhook: Webhook): Promise<any>;
    /**
     * atualizarWebhook
     */
    atualizarWebhook(user_webhook_id: number, user_webhook: Webhook): Promise<any>;
    /**
     * excluirWebhook
     */
    excluirWebhook(user_webhook_id: number): Promise<any>;
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