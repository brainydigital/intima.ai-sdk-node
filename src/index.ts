import { API } from "./api/api";
import { User } from "./resources/user/user";
import { UserDependent } from "./resources/user/user_dependent";
import { UserWebhook, ACTION_TYPE, HTTP_VERB } from "./resources/user/user_webhook";
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

    public authResource: Auth;

    public tribunalResource: Tribunal;

    public intimationResource: Intimation;

    public certificateResource: Certificate;

    public userResource: User;

    public userDependentResource: UserDependent;

    public userWebhookResource: UserWebhook;

    public actionResource: Action;

    public copyResource: ProcessCopy;

    public listenerResource: ProcessListener;

    public qualificationProtocolResource: ProcessQualificationProtocol;

    public processInfoResource: ProcessInfo;
    
    public processCourseResource: ProcessCourse;

    public processProtocolResource: ProcessProtocol;

    public processSearchResource: ProcessSearch;

    constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number) {
        this.API = new API(api_token, proxy, timeout, max_attempts);
        this.authResource = new Auth(this.API);
        this.tribunalResource = new Tribunal(this.API);
        this.intimationResource = new Intimation(this.API);
        this.certificateResource = new Certificate(this.API);
        this.userResource = new User(this.API);
        this.userDependentResource = new UserDependent(this.API);
        this.userWebhookResource = new UserWebhook(this.API);
        this.actionResource = new Action(this.API);
        this.copyResource = new ProcessCopy(this.API, this.actionResource);
        this.listenerResource = new ProcessListener(this.API, this.actionResource);
        this.qualificationProtocolResource = new ProcessQualificationProtocol(this.API, this.actionResource);
        this.processInfoResource = new ProcessInfo(this.API, this.actionResource);
        this.processCourseResource = new ProcessCourse(this.API, this.actionResource);
        this.processProtocolResource = new ProcessProtocol(this.API, this.actionResource);
        this.processSearchResource = new ProcessSearch(this.API, this.actionResource);
    }

    private getAPI(): API {
        return this.API;
    }

}

export = Intimaai;

// async function test() {
//     try {

//         const intimaai = new Intimaai('');

        // const result = await intimaai.actionResource.getById(95388);
        // const paginator = await intimaai.actionResource.getActionResults(95371);
        // await paginator.getPage(1);
        // const paginator = await intimaai.actionResource.paginate();
        // await paginator.getPage(1);


        // const result = await intimaai.copyResource.getNewCopy({ process_number: '0037250-06.2018.8.17.2001', auth_id: 1 });
        // const result = await intimaai.copyResource.getById(45202);


        // const listener = { process_number: '0037250-06.2018.8.17.2001', auth_id: 1, schedule_times: ['07:00'] };
        // const result = await intimaai.listenerResource.getById(21);
        // const result = await intimaai.listenerResource.deleteListener(27);
        // const result = await intimaai.listenerResource.captureListener(30);
        // const result = await intimaai.listenerResource.getNewListenerAndCapture(listener);
        // const result = await intimaai.listenerResource.getNewListener(listener);
        // const result = await intimaai.listenerResource.updateListener(31, { schedule_times: ['11:00'] });
        // const paginator = await intimaai.listenerResource.getListenerResults(31);
        // await paginator.getPage(1);
        // await paginator.nextPage();
        // await paginator.loadAll();

        
        // const qualification_protocol = {
        //     tipo_solicitacao: 5000000,
        //     tipo_declaracao: 0,
        //     polo: 1,
        //     partes_vinculadas: ['BANCO DAYCOVAL S/A - CNPJ: 62.232.889/0001-90 (APELADO)'],
        //     tipo_documento_mensagem_geral: 0,
        //     documentos: [
        //         { arquivo: '/Users/raunyhenrique/Downloads/peticao.pdf', tipo_documento: 0, descricao_documento: 'teste', order: 1 }
        //     ]
        // };

        // const result = await intimaai.qualificationProtocolResource.getById(21);
        // const paginator = await intimaai.qualificationProtocolResource.paginate();
        // const result = await intimaai.qualificationProtocolResource.getNewQualificationProtocolFirstStep({ process_number: '0026468-61.2018.8.17.8201', auth_id: 1 });
        // const result = await intimaai.qualificationProtocolResource.getNewQualificationProtocolSecondStep(4039, qualification_protocol);

        // const result = await intimaai.processInfoResource.getById(21);
        // const paginator = await intimaai.processInfoResource.paginate();
        // await paginator.getPage(1);
        // const result = await intimaai.processInfoResource.getNewProcessInfo({ process_number: '00002361720205060144', auth_id: 120 });


        // const result = await intimaai.processCourseResource.getById(31);
        // const result = await intimaai.processCourseResource.getNewCourse({ process_number: '00002361720205060144', auth_id: 120 });
        // const result = await intimaai.processCourseResource.captureCourse(32);
        // const result = await intimaai.processCourseResource.getNewCourseAndCapture({ process_number: '0800075-70.2019.8.20.5122', auth_id: 3 });
        // const paginator = await intimaai.processCourseResource.getCourseResults(31);
        // await paginator.getPage(1);
        // const result = await intimaai.processCourseResource.deleteCourse(23);


        // const result = await intimaai.processProtocolResource.getById(14362);
        // const paginator = await intimaai.processProtocolResource.paginate();
        // await paginator.getPage(1);


        // const result = await intimaai.processSearchResource.getNewSearch({ process_number: '0800075-70.2019.8.20.5122', auth_id: 3 });
        // const result = await intimaai.processSearchResource.getById(44);
        // const paginator = await intimaai.processSearchResource.getSearchResults(44);
        // const paginator = await intimaai.processSearchResource.paginate();
        // await paginator.getPage(1);

        // const paginator = await intimaai.processSearchResource.getSearchAnalyses();
        // await paginator.getPage(1);
        // const result = await intimaai.processSearchResource.getSearchAnalysesById(23);
        // const result = await intimaai.processSearchResource.getNewSearchAnalyses({ process_number: '0800075-70.2019.8.20.5122', auth_id: 3 });


        // const result = await intimaai.userResource.getUser();

        // const result = await intimaai.userDependentResource.getById(1);
        // const result = await intimaai.userDependentResource.getNewUserDependent({ email: 'jusuee@email.com' });
        // const result = await intimaai.userDependentResource.updateUserDependent(3, { email: 'jusue22@email.com' });
        // const result = await intimaai.userDependentResource.deleteUserDependent(3);
        // const paginator = await intimaai.userDependentResource.paginate();
        // await paginator.getPage(1);
        

        // const result = await intimaai.userWebhookResource.getById(4);
        // const result = await intimaai.userWebhookResource.getNewUserWebhook({ action_type: ACTION_TYPE.PROCESS_COPY, http_verb: HTTP_VERB.GET, url: 'https://www.youtube.com/watch?v=HkdLSW4q9gs4545' });
        // const result = await intimaai.userWebhookResource.deleteUserWebhook(6);
        // const paginator = await intimaai.userWebhookResource.paginate();
        // await paginator.getPage(1);


        // const certificate = { pfx: '/Users/raunyhenrique/Downloads/CARLA_ELISANGELA_FERREIRA_ALVES_TEIXEIRA_78045762420_1575983014801300000.pfx', password: '12345678' };
        // const result = await intimaai.certificateResource.getById(18);
        // const result = await intimaai.certificateResource.getNewCertificate(certificate);
        // const result = await intimaai.certificateResource.deleteCertificate(19);


        // const result = await intimaai.tribunalResource.getById(18);
        // const paginator = await intimaai.tribunalResource.paginate();
        // await paginator.getPage(1);


        // const result = await intimaai.authResource.getById(1);
        // const result = await intimaai.authResource.getNewAuth({ 
        //     tribunal_id: 1, 
        //     user_certificate_id: 1,
        //     // login: 'string',
        //     // password: 'string'
        //  });
        // const result = await intimaai.authResource.enableIntimationsAuth(199, { day_hour: ['06:00'], tabs: ['SEM_PRAZO'], week_days: [0] });
        // const result = await intimaai.authResource.disableIntimationsAuth(199);


        // const result = await intimaai.intimationResource.getById(1);
        // const result = await intimaai.intimationResource.markAsRevised(1);
        // const paginator = await intimaai.intimationResource.paginate();
        // await paginator.getPage(1);

        // console.log('result: ', paginator);

        // const paginator = await intimaai.copyResource.paginate();

        // await paginator.nextPage();
        // await paginator.loadAll();

        // console.log('results: ', paginator);
//     } catch (error) {
//         console.error('error: ', error);
//     }
// }

// test();