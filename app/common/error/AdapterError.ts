import BaseError from './BaseError';
import { ErrorCode } from './ErrorCodes';

export default class AdapterError extends BaseError {
  code: string;

  constructor(errorCode: ErrorCode) {
    super(errorCode);
    this.name = 'AdapterError';
    this.code = errorCode.code;
  }
}
