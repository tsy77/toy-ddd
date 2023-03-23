import { ErrorCode } from './ErrorCodes';

export default class BaseError extends Error {
  name: string;
  code: string;
  message: string;

  constructor(errorCode: ErrorCode) {
    super();
    this.name = 'BaseError';
    this.code = errorCode.code;
    this.message = errorCode.message;
  }
}
