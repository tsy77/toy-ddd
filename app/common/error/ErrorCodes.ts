export class ErrorCode {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}

export default class ErrorCodes {
  public static NOT_FOUND = new ErrorCode('NotFound', '404');
}
