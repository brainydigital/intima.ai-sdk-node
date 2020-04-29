"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var api_1 = require("./api");
var process_copy_1 = require("./resources/process_copy");
var process_listener_1 = require("./resources/process_listener");
var process_qualification_protocol_1 = require("./resources/process_qualification_protocol");
var process_info_1 = require("./resources/process_info");
var Intimaai = /** @class */ (function () {
    function Intimaai(api_token, proxy, timeout, max_attempts) {
        this.API = new api_1.API(api_token, proxy, timeout, max_attempts);
        this.copyResource = new process_copy_1.ProcessCopy(this.API);
        this.listenerResource = new process_listener_1.ProcessListener(this.API);
        this.qualificationProtocolResource = new process_qualification_protocol_1.ProcessQualificationProtocol(this.API);
        this.processInfoResource = new process_info_1.ProcessInfo(this.API);
    }
    Intimaai.prototype.getAPI = function () {
        return this.API;
    };
    return Intimaai;
}());
exports["default"] = Intimaai;
// const copy = new ProcessCopy();
// copy.setSecretKey('123abc');
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var intimaai;
        return __generator(this, function (_a) {
            try {
                intimaai = new Intimaai('');
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
                // console.log('result: ', result);
                // const paginator = await intimaai.copyResource.paginate();
                // await paginator.nextPage();
                // await paginator.loadAll();
                // console.log('results: ', paginator);
            }
            catch (error) {
                console.error('error: ', error);
            }
            return [2 /*return*/];
        });
    });
}
test();
