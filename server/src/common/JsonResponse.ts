export class JsonResponse {
    public static success(msg?) {
        return {
            message: 'success',
            code: 200,
            data: msg,
            success: true,
        }
    }

    public static error(msg?) {
        return {
            message: 'error',
            code: 400,
            data: msg,
            success: false
        }
    }
}