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
  import { UserDependent } from "@brainy-digital/intima.ai-sdk-node/resources/user/user_dependent";
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
  class Intimaai {
      private API;
      authResource: Auth;
      tribunalResource: Tribunal;
      intimationResource: Intimation;
      certificateResource: Certificate;
      userResource: User;
      userDependentResource: UserDependent;
      userWebhookResource: UserWebhook;
      actionResource: Action;
      copyResource: ProcessCopy;
      listenerResource: ProcessListener;
      qualificationProtocolResource: ProcessQualificationProtocol;
      processInfoResource: ProcessInfo;
      processCourseResource: ProcessCourse;
      processProtocolResource: ProcessProtocol;
      processSearchResource: ProcessSearch;
      constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number);
      private getAPI;
  }
  export = Intimaai;
}
declare module '@brainy-digital/intima.ai-sdk-node/paginator' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
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
       * @return Array<Resource>
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
       * @return Paginator
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
declare module '@brainy-digital/intima.ai-sdk-node/resource' {
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { Paginator } from "@brainy-digital/intima.ai-sdk-node/paginator";
  export abstract class Resource {
      private API;
      private paginator;
      constructor(API: API);
      abstract getResourceEndpoint(): string;
      paginate(): Paginator;
      getAPI(): API;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/action' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class Action extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getActionResults
       */
      getActionResults(action_id: number): import("@brainy-digital/intima.ai-sdk-node/paginator").Paginator;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/auth' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type NewAuth = {
      tribunal_id: number;
      user_certificate_id?: number;
      login?: string;
      password?: string;
  };
  export type EnableAuth = {
      tabs: Array<string>;
      week_days: Array<number>;
      day_hour: Array<string>;
  };
  export class Auth extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewAuth
       */
      getNewAuth(auth: NewAuth): Promise<any>;
      /**
       * enableIntimationsAuth
       */
      enableIntimationsAuth(auth_id: number, enable_auth: EnableAuth): Promise<any>;
      /**
       * disableIntimationsAuth
       */
      disableIntimationsAuth(auth_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/certificate' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type NewCertificate = {
      pfx: string;
      password: string;
  };
  export type UpdateCertificate = {
      pfx: string;
      password: string;
  };
  export class Certificate extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewCertificate
       */
      getNewCertificate(certificate: NewCertificate): Promise<any>;
      /**
       * updateCertificate
       */
      updateCertificate(certificate_id: number, certificate: UpdateCertificate): Promise<any>;
      /**
       * deleteCertificate
       */
      deleteCertificate(certificate_id: number): Promise<any>;
      private validateCertificate;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/intimation' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class Intimation extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * markAsRevised
       */
      markAsRevised(intimation_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_copy' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type Copy = {
      process_number: string;
      auth_id: number;
  };
  export class ProcessCopy extends Resource {
      protected action: Action;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewCopy
       */
      getNewCopy(copy: Copy): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_course' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type Course = {
      process_number: string;
      auth_id: number;
  };
  export class ProcessCourse extends Resource {
      protected action: Action;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewCourse
       */
      getNewCourse(course: Course): Promise<any>;
      /**
       * captureCourse
       */
      captureCourse(course_id: number): Promise<any>;
      /**
       * getNewCourseAndCapture
       */
      getNewCourseAndCapture(course: Course): Promise<any>;
      /**
       * getCourseResults
       */
      getCourseResults(course_id: number): import("@brainy-digital/intima.ai-sdk-node/paginator").Paginator;
      /**
       * deleteCourse
       */
      deleteCourse(course_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_info' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type Process = {
      process_number: string;
      auth_id: number;
  };
  export class ProcessInfo extends Resource {
      protected action: Action;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewProcessInfo
       */
      getNewProcessInfo(process: Process): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_listener' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type Listener = {
      process_number: string;
      auth_id: number;
      schedule_times: Array<String>;
  };
  export type ListenerUpdate = {
      schedule_times: Array<String>;
  };
  export class ProcessListener extends Resource {
      protected action: Action;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewListener
       */
      getNewListener(listener: Listener): Promise<any>;
      /**
       * captureListener
       */
      captureListener(listener_id: number): Promise<any>;
      /**
       * getNewListenerAndCapture
       */
      getNewListenerAndCapture(listener: Listener): Promise<any>;
      /**
       * getListenerResults
       */
      getListenerResults(listener_id: number): import("@brainy-digital/intima.ai-sdk-node/paginator").Paginator;
      /**
       * updateListener
       */
      updateListener(listener_id: number, listener: ListenerUpdate): Promise<any>;
      /**
       * deleteListener
       */
      deleteListener(listener_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_protocol' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type Protocol = {
      process_number: string;
      auth_id: number;
      tipo_documento_mensagem_geral: number;
      descricao?: string;
      mensagem_geral?: string;
      peticao?: {
          arquivo: string;
          tipo_documento: number;
          descricao_documento: string;
      };
      documentos?: Array<{
          arquivo: string;
          tipo_documento: number;
          descricao_documento: string;
          order: number;
      }>;
  };
  export class ProcessProtocol extends Resource {
      protected action: Action;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewProtocol
       */
      getNewProtocol(protocol: Protocol): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_qualification_protocol' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type FirstStepQualificationProtocol = {
      process_number: string;
      auth_id: number;
  };
  export type SecondStepQualificationProtocol = {
      tipo_solicitacao: number;
      tipo_declaracao: number;
      polo: number;
      partes_vinculadas: Array<string>;
      tipo_documento_mensagem_geral: number;
      descricao?: string;
      mensagem_geral?: string;
      documentos?: Array<{
          arquivo: string;
          tipo_documento: number;
          descricao_documento: string;
          order: number;
      }>;
  };
  export class ProcessQualificationProtocol extends Resource {
      protected action: Action;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewQualificationProtocolFirstStep
       */
      getNewQualificationProtocolFirstStep(qualification_protocol: FirstStepQualificationProtocol): Promise<any>;
      /**
       * getNewQualificationProtocolSecondStep
       */
      getNewQualificationProtocolSecondStep(qualification_protocol_id: number, qualification_protocol: SecondStepQualificationProtocol): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_search' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { ProcessSearchAnalyse, SearchAnalyse } from "@brainy-digital/intima.ai-sdk-node/resources/process_search_analyse";
  import { Paginator } from "@brainy-digital/intima.ai-sdk-node/paginator";
  export type Search = {
      auth_id: number;
      process_number?: string;
      nome_parte?: string;
      nome_representante?: string;
      token?: string;
  };
  export class ProcessSearch extends Resource {
      protected action: Action;
      protected search_analyse: ProcessSearchAnalyse;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewSearch
       */
      getNewSearch(search: Search): Promise<any>;
      /**
       * getSearchResults
       */
      getSearchResults(search_id: number): Paginator;
      /**
       * getSearchAnalyses
       */
      getSearchAnalyses(): Promise<Paginator>;
      /**
       * getSearchAnalysesById
       */
      getSearchAnalysesById(id: number): Promise<any>;
      /**
      * getNewSearchAnalyses
      */
      getNewSearchAnalyses(search_analyse: SearchAnalyse): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/process_search_analyse' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { Action } from "@brainy-digital/intima.ai-sdk-node/resources/action";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  import { ProcessSearch } from "@brainy-digital/intima.ai-sdk-node/resources/process_search";
  export type SearchAnalyse = {
      auth_id: number;
      process_number?: string;
      nome_parte?: string;
      nome_representante?: string;
      token?: string;
  };
  export class ProcessSearchAnalyse extends Resource {
      protected action: Action;
      protected resource_path: string;
      getResourceEndpoint(): string;
      constructor(API: API, action: Action, process_search?: ProcessSearch);
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/resource_result' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class ResourceResult extends Resource {
      protected resource_path: string;
      getResourceEndpoint(): string;
      constructor(API: API, resource: Resource, resource_id: number);
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/tribunal' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class Tribunal extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export class User extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getUser
       */
      getUser(): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user_dependent' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export type Dependent = {
      email: string;
  };
  export class UserDependent extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewUserDependent
       */
      getNewUserDependent(user_dependent: Dependent): Promise<any>;
      /**
       * updateUserDependent
       */
      updateUserDependent(user_dependent_id: number, user_dependent: Dependent): Promise<any>;
      /**
       * deleteUserDependent
       */
      deleteUserDependent(user_dependent_id: number): Promise<any>;
  }

}
declare module '@brainy-digital/intima.ai-sdk-node/resources/user/user_webhook' {
  import { Resource } from "@brainy-digital/intima.ai-sdk-node/resource";
  import { API } from "@brainy-digital/intima.ai-sdk-node/api/api";
  export enum ACTION_TYPE {
      PROCESS_INFO = 0,
      PROCESS_COPY = 1,
      PROCESS_INTIMACOES = 2,
      PROCESS_ESCUTA = 3,
      PROCESS_PROTOCOLO = 4,
      PROCESS_PROTOCOLO_HABILITACAO = 5,
      PROCESS_ANDAMENTOS = 6,
      PROCESS_CONSULTA = 7,
      PROCESS_CONSULTA_PRE_ANALISE = 8
  }
  export enum HTTP_VERB {
      GET = "GET",
      POST = "POST",
      PUT = "PUT",
      PATCH = "PATCH",
      DELETE = "DELETE"
  }
  export type Webhook = {
      action_type: ACTION_TYPE;
      http_verb: HTTP_VERB;
      url: string;
  };
  export class UserWebhook extends Resource {
      getResourceEndpoint(): string;
      constructor(API: API);
      /**
       * getById
       */
      getById(id: number): Promise<any>;
      /**
       * getNewUserWebhook
       */
      getNewUserWebhook(user_webhook: Webhook): Promise<any>;
      /**
       * updateUserWebhook
       */
      updateUserWebhook(user_webhook_id: number, user_webhook: Webhook): Promise<any>;
      /**
       * deleteUserWebhook
       */
      deleteUserWebhook(user_webhook_id: number): Promise<any>;
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