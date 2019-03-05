import {Rest} from "./Rest";

export default class HttpFetch implements Rest.HttpClient {

  request:any = () => fetch("http://localhost:9090/rest/");
}