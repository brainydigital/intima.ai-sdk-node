"use strict";
exports.__esModule = true;
var api_1 = require("./api/api");
var user_1 = require("./resources/user/user");
var user_dependent_1 = require("./resources/user/user_dependent");
var user_webhook_1 = require("./resources/user/user_webhook");
var action_1 = require("./resources/action");
var process_copy_1 = require("./resources/process_copy");
var process_listener_1 = require("./resources/process_listener");
var process_qualification_protocol_1 = require("./resources/process_qualification_protocol");
var process_info_1 = require("./resources/process_info");
var process_course_1 = require("./resources/process_course");
var process_protocol_1 = require("./resources/process_protocol");
var process_search_1 = require("./resources/process_search");
var certificate_1 = require("./resources/certificate");
var auth_1 = require("./resources/auth");
var tribunal_1 = require("./resources/tribunal");
var intimation_1 = require("./resources/intimation");
var Intimaai = /** @class */ (function () {
    function Intimaai(api_token, proxy, timeout, max_attempts) {
        this.API = new api_1.API(api_token, proxy, timeout, max_attempts);
        this.authResource = new auth_1.Auth(this.API);
        this.tribunalResource = new tribunal_1.Tribunal(this.API);
        this.intimationResource = new intimation_1.Intimation(this.API);
        this.certificateResource = new certificate_1.Certificate(this.API);
        this.userResource = new user_1.User(this.API);
        this.userDependentResource = new user_dependent_1.UserDependent(this.API);
        this.userWebhookResource = new user_webhook_1.UserWebhook(this.API);
        this.actionResource = new action_1.Action(this.API);
        this.copyResource = new process_copy_1.ProcessCopy(this.API, this.actionResource);
        this.listenerResource = new process_listener_1.ProcessListener(this.API, this.actionResource);
        this.qualificationProtocolResource = new process_qualification_protocol_1.ProcessQualificationProtocol(this.API, this.actionResource);
        this.processInfoResource = new process_info_1.ProcessInfo(this.API, this.actionResource);
        this.processCourseResource = new process_course_1.ProcessCourse(this.API, this.actionResource);
        this.processProtocolResource = new process_protocol_1.ProcessProtocol(this.API, this.actionResource);
        this.processSearchResource = new process_search_1.ProcessSearch(this.API, this.actionResource);
    }
    Intimaai.prototype.getAPI = function () {
        return this.API;
    };
    return Intimaai;
}());
exports["default"] = Intimaai;
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
