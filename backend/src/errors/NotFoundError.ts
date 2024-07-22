import { CustomError } from './CustomError';
import { HttpStatusCodes } from '../constants/httpStatusCodes';

class NotFoundError extends CustomError {
    statusCode = HttpStatusCodes.NOT_FOUND;

    statusType = 'Not Found Error';

    constructor(
        message: string
    ) {
        super(message);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [
            {
                statusType: this.statusType,
                statusCode: this.statusCode,
                error: this.message
            },
        ];
    }
}

export { NotFoundError };
