import {IJsonResponse} from "./IJsonResponse";

export class JsonResponse {
    public static success() {
        return {
            message: 'success',
            code: 200
        }
    }
}