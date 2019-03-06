import {HttpClient, RestApplicationClient} from "./rest/Rest";

interface RequestConfig<R> {
  method: string;
  url: string;
  queryParams?: any;
  data?: any;
  copyFn?: (data: R) => R;
}

class RestClient extends RestApplicationClient {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.httpClient = httpClient;
  }
}

class FetchClient implements HttpClient {
  request<R>(requestConfig:RequestConfig<R>) {
    const {url, method, queryParams, data, copyFn} = requestConfig;
    return this.doFetch(url, {
      method: method,
      body: data,
    });
  }

  doFetch = async (url:string, requestInit:RequestInit) => {
    const resp = await fetch('http://localhost:9090/' + url, requestInit);
    if (!resp.ok) throw new Error(`response status: ${resp.statusText}, response text: ${resp.text()}`);
    return resp.json();
  }
}

export const rest = new RestClient(new FetchClient());