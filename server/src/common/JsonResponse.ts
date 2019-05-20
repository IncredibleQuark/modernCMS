import {IJsonResponse} from "./IJsonResponse";

export class JsonResponse {
    public static success(msg?) {
        return {
            message: 'success',
            code: 200,
            data: msg
        }
    }

    public static error(msg?) {
        return {
            message: 'error',
            code: 400,
            data: msg
        }
    }
}