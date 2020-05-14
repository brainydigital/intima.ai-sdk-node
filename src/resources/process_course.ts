import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";

export type Course = {
    process_number: string,
    auth_id: number
}

export class ProcessCourse extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'process-courses';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * cadastrarNovoAndamento
     */
    public async cadastrarNovoAndamento(course: Course): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, course, {}, {}, null, true);
    }

    /**
     * capturarAndamentos
     */
    public async capturarAndamentos(course_id: number): Promise<any> {
        return await this.getAPI().get(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${course_id}/capture`, {}, {}, true);
    }

    /**
     * cadastrarNovoAndamentoECapturarAndamentos
     */
    public async cadastrarNovoAndamentoECapturarAndamentos(course: Course): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/create-and-capture`, course, {}, {}, null, true);
    }

    /**
     * consultarResultadosDoAndamento
     */
    public consultarResultadosDoAndamento(course_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, course_id);
        return resource.paginate();
    }

    /**
     * excluirAndamento
     */
    public async excluirAndamento(course_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${course_id}`, {}, {}, true);
    }
}