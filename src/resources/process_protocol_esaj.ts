import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { PrimeiraEtapaParaProtocoloProcessualEsaj } from "../models/PrimeiraEtapaParaProtocoloProcessualEsaj";
import { SegundaEtapaParaProtocoloProcessualEsaj } from "../models/SegundaEtapaParaProtocoloProcessualEsaj";
import * as fs from 'fs';

export class ProcessProtocolEsaj extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'process-protocols-esaj';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

     /**
     * cadastrarPrimeiraEtapaParaNovoProtocoloEsaj
     */
    public async cadastrarPrimeiraEtapaParaNovoProtocoloEsaj(protocol: PrimeiraEtapaParaProtocoloProcessualEsaj): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, protocol, {}, {}, null, true);
    }

    /**
     * cadastrarSegundaEtapaParaNovoProtocoloEsaj
     */
    public async cadastrarSegundaEtapaParaNovoProtocoloEsaj(protocol_id: number, protocol: SegundaEtapaParaProtocoloProcessualEsaj): Promise<any> {

        let attachs = null;

        if (protocol.peticao) {

            if (!attachs) {
                attachs = [];
            }

            const file_path = protocol.peticao.arquivo;

            if (!fs.existsSync(file_path)) {
                throw `O caminho do arquivo informado é inválido para a petição (${file_path}).`;
            }

            attachs.push({ field_name: 'peticao', files: file_path });
            delete protocol.peticao['arquivo'];
        }

        if (protocol.documentos) {

            if (!attachs) {
                attachs = [];
            }

            if (protocol.documentos.length) {
                const files = protocol.documentos.map((doc) => {
                    const file_path = doc.arquivo;

                    if (!fs.existsSync(file_path)) {
                        throw `O caminho do arquivo informado é inválido (${file_path}).`;
                    }

                    delete doc['arquivo'];
                    return file_path;
                });

                attachs.push({ field_name: 'documentos', files: files });
            }
        }

        return await this.getAPI()
            .post(
                `${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${protocol_id}`,
                protocol,
                {},
                {},
                attachs,
                true
            );
    }
}