export interface IJsonResponse {
    success(): {
        message: string;
        code: number;
    };
}
