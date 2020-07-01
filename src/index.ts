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

class Intimaai {

    private API: API;

    public autenticacoes: Auth;

    public tribunais: Tribunal;

    public certificados: Certificate;

    public intimacoes: Intimation;

    public usuarios: User;

    public notificacoes: UserNotification;

    public webhooks: UserWebhook;

    public acoes: Action;

    public copiasProcessuais: ProcessCopy;

    public escutasProcessuais: ProcessListener;

    public protocolosDeHabilitacao: ProcessQualificationProtocol;

    public informacoesProcessuais: ProcessInfo;
    
    public andamentosProcessuais: ProcessCourse;

    public protocolosProcessuais: ProcessProtocol;

    public consultasProcessuais: ProcessSearch;

    constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number) {
        this.API = new API(api_token, proxy, timeout, max_attempts);
        this.autenticacoes = new Auth(this.API);
        this.tribunais = new Tribunal(this.API);
        this.certificados = new Certificate(this.API);
        this.intimacoes = new Intimation(this.API);
        this.usuarios = new User(this.API);
        this.notificacoes = new UserNotification(this.API);
        this.webhooks = new UserWebhook(this.API);
        this.acoes = new Action(this.API);
        this.copiasProcessuais = new ProcessCopy(this.API, this.acoes);
        this.escutasProcessuais = new ProcessListener(this.API, this.acoes);
        this.protocolosDeHabilitacao = new ProcessQualificationProtocol(this.API, this.acoes);
        this.informacoesProcessuais = new ProcessInfo(this.API, this.acoes);
        this.andamentosProcessuais = new ProcessCourse(this.API, this.acoes);
        this.protocolosProcessuais = new ProcessProtocol(this.API, this.acoes);
        this.consultasProcessuais = new ProcessSearch(this.API, this.acoes);
    }

    private getAPI(): API {
        return this.API;
    }

}

export default Intimaai;
