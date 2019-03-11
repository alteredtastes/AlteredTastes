/* tslint:disable */
// Generated using typescript-generator version 2.12.476 on 2019-03-11 01:53:37.

export interface Meal {
    name: string;
    price: number;
}

export interface MyClass {
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
     * HTTP POST /rest
     * Java method: com.alteredtastes.RestService.create
     */
    create(arg0: Meal): RestResponse<any> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest`, data: arg0 });
    }

    /**
     * HTTP GET /rest
     * Java method: com.alteredtastes.RestService.index
     */
    index(): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest` });
    }

    /**
     * HTTP DELETE /rest/{id}
     * Java method: com.alteredtastes.RestService.delete
     */
    delete(id: number): RestResponse<any> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/${id}` });
    }

    /**
     * HTTP GET /rest/{id}
     * Java method: com.alteredtastes.RestService.meal
     */
    meal(id: number): RestResponse<any> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/${id}` });
    }

    /**
     * HTTP PUT /rest/{id}
     * Java method: com.alteredtastes.RestService.update
     */
    update(id: number, arg1: Meal): RestResponse<any> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/${id}`, data: arg1 });
    }
}

export type RestResponse<R> = Promise<R>;

export enum MyEnum {
    BASE = "BASE",
    ROOT = "ROOT",
}

export enum MyEnumm {
    PROTOCOL = "PROTOCOL",
    ROOT = "ROOT",
}

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
