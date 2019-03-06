/* tslint:disable */
// Generated using typescript-generator version 2.12.476 on 2019-03-06 00:11:01.

export interface Meal {
    name: string;
    price: number;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class RestApplicationClient {

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * HTTP GET /ip/{fileName}
     * Java method: com.alteredtastes.StaticFileService.getFileFromInputStream
     */
    getFileFromInputStream(fileName: string): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`ip/${fileName}` });
    }

    /**
     * HTTP GET /op/{fileName}
     * Java method: com.alteredtastes.StaticFileService.getFileUsingStreamingOutput
     */
    getFileUsingStreamingOutput(fileName: string): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`op/${fileName}` });
    }

    /**
     * HTTP POST /rest
     * Java method: com.alteredtastes.RestAPIService.create
     */
    create(arg0: Meal): RestResponse<any> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest`, data: arg0 });
    }

    /**
     * HTTP GET /rest
     * Java method: com.alteredtastes.RestAPIService.index
     */
    index(): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest` });
    }

    /**
     * HTTP DELETE /rest/{id}
     * Java method: com.alteredtastes.RestAPIService.delete
     */
    delete(id: number): RestResponse<any> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/${id}` });
    }

    /**
     * HTTP GET /rest/{id}
     * Java method: com.alteredtastes.RestAPIService.meal
     */
    meal(id: number): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/${id}` });
    }

    /**
     * HTTP PUT /rest/{id}
     * Java method: com.alteredtastes.RestAPIService.update
     */
    update(id: number, arg1: Meal): RestResponse<any> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/${id}`, data: arg1 });
    }

    /**
     * HTTP POST /{fileName}
     * Java method: com.alteredtastes.StaticFileService.postFile
     */
    postFile(fileName: string): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`${fileName}` });
    }

    /**
     * HTTP GET /{path: .*}
     * Java method: com.alteredtastes.StaticFileService.getFile
     */
    getFile(path: string): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`${path}` });
    }
}

export type RestResponse<R> = Promise<R>;

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
