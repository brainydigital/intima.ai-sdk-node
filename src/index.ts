import { API } from "./api/api";
import { User } from "./resources/user/user";
import { UserNotification } from "./resources/user/user_notification";
import { UserWebhook } from "./resources/user/user_webhook";
import { Action } from "./resources/action";
import { ProcessCopy } from "./resources/process_copy";
import { ProcessListener } from "./resources/process_listener";
import { ProcessQualificationProtocol } from "./resources/process_qualification_protocol";
import { ProcessInfo } from "./resources/process_info";
import { ProcessCourse } from "./resources/process_course";
import { ProcessProtocol } from "./resources/process_protocol";
import { ProcessSearch } from "./resources/process_search";
import { Certificate } from "./resources/certificate";
import { Auth } from "./resources/auth";
import { Tribunal } from "./resources/tribunal";
import { Intimation } from "./resources/intimation";
import { ProcessProtocolEsaj } from "./resources/process_protocol_esaj";

class Intimaai {

    private API: API;

    public autenticacoesResources: Auth;

    public tribunaisResources: Tribunal;

    public certificadosResources: Certificate;

    public intimacoesResources: Intimation;

    public usuariosResources: User;

    public notificacoesResources: UserNotification;

    public webhooksResources: UserWebhook;

    public acoesResources: Action;

    public copiasProcessuaisResources: ProcessCopy;

    public escutasProcessuaisResources: ProcessListener;

    public protocolosDeHabilitacaoResources: ProcessQualificationProtocol;

    public informacoesProcessuaisResources: ProcessInfo;
    
    public andamentosProcessuaisResources: ProcessCourse;

    public protocolosProcessuaisResources: ProcessProtocol;

    public protocolosProcessuaisEsajResources: ProcessProtocolEsaj;

    public consultasProcessuaisResources: ProcessSearch;

    constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number) {
        this.API = new API(api_token, proxy, timeout, max_attempts);
        this.autenticacoesResources = new Auth(this.API);
        this.tribunaisResources = new Tribunal(this.API);
        this.certificadosResources = new Certificate(this.API);
        this.intimacoesResources = new Intimation(this.API);
        this.usuariosResources = new User(this.API);
        this.notificacoesResources = new UserNotification(this.API);
        this.webhooksResources = new UserWebhook(this.API);
        this.acoesResources = new Action(this.API);
        this.copiasProcessuaisResources = new ProcessCopy(this.API, this.acoesResources);
        this.escutasProcessuaisResources = new ProcessListener(this.API, this.acoesResources);
        this.protocolosDeHabilitacaoResources = new ProcessQualificationProtocol(this.API, this.acoesResources);
        this.informacoesProcessuaisResources = new ProcessInfo(this.API, this.acoesResources);
        this.andamentosProcessuaisResources = new ProcessCourse(this.API, this.acoesResources);
        this.protocolosProcessuaisResources = new ProcessProtocol(this.API, this.acoesResources);
        this.protocolosProcessuaisEsajResources = new ProcessProtocolEsaj(this.API, this.acoesResources);
        this.consultasProcessuaisResources = new ProcessSearch(this.API, this.acoesResources);
    }

    private getAPI(): API {
        return this.API;
    }

}

export default Intimaai;
