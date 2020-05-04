import { Resource } from "../resource";
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
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * getNewCourse
     */
    public async getNewCourse(course: Course): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, course, {}, {}, null, true);
    }

    /**
     * captureCourse
     */
    public async captureCourse(course_id: number): Promise<any> {
        return await this.getAPI().get(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${course_id}/capture`, {}, {}, true);
    }

    /**
     * getNewCourseAndCapture
     */
    public async getNewCourseAndCapture(course: Course): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/create-and-capture`, course, {}, {}, null, true);
    }

    /**
     * getCourseResults
     */
    public getCourseResults(course_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, course_id);
        return resource.paginate();
    }

    /**
     * deleteCourse
     */
    public async deleteCourse(course_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${course_id}`, {}, {}, true);
    }
}