"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonResponse {
    static success(msg) {
        return {
            message: 'success',
            code: 200,
            data: msg
        };
    }
    static error(msg) {
        return {
            message: 'error',
            code: 400,
            data: msg
        };
    }
}
exports.JsonResponse = JsonResponse;
//# sourceMappingURL=JsonResponse.js.map