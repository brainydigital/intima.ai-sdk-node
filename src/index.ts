import { API } from "./api";
import { ProcessCopy } from "./resources/process_copy";
import { ProcessListener } from "./resources/process_listener";
import { ProcessQualificationProtocol } from "./resources/process_qualification_protocol";
import { ProcessInfo } from "./resources/process_info";

class Intimaai {

    private API: API;

    public copyResource: ProcessCopy;

    public listenerResource: ProcessListener;

    public qualificationProtocolResource: ProcessQualificationProtocol;

    public processInfoResource: ProcessInfo;

    constructor(api_token: string, proxy?: string, timeout?: number, max_attempts?: number) {
        this.API = new API(api_token, proxy, timeout, max_attempts);
        this.copyResource = new ProcessCopy(this.API);
        this.listenerResource = new ProcessListener(this.API);
        this.qualificationProtocolResource = new ProcessQualificationProtocol(this.API);
        this.processInfoResource = new ProcessInfo(this.API);
    }

    private getAPI(): API {
        return this.API;
    }

}

export default Intimaai;

// const copy = new ProcessCopy();
// copy.setSecretKey('123abc');

async function test() {
    try {

        const intimaai = new Intimaai('');

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
    } catch (error) {
        console.error('error: ', error);
    }
}

test();