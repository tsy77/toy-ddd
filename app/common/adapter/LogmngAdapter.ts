import AdapterError from "../error/AdapterError";
import ErrorCodes from "../error/ErrorCodes";

export default class LogmngAdapter {
  public aaa() {
    throw new AdapterError(ErrorCodes.NOT_FOUND);
  }
}
