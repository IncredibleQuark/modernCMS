export declare class JsonResponse {
    static success(msg?: any): {
        message: string;
        code: number;
        data: any;
    };
    static error(msg?: any): {
        message: string;
        code: number;
        data: any;
    };
}
