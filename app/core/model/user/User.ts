import BaseError from "app/common/error/BaseError";
import ErrorCodes from "app/common/error/ErrorCodes";

export class User {
  name: String;
  startTime: Date;
  endTime: Date;

  constructor(name: string, startTime: Date, endTime: Date) {
    this.name = name;
    this.startTime = typeof startTime === 'string' ? new Date(startTime) : startTime;
    this.endTime = typeof endTime === 'string' ? new Date(endTime) : endTime;
  }
}

export class UserFactory {
  static build(name: string, startTime: Date, endTime: Date) {
    if (startTime.getTime() > endTime.getTime()) {
      throw new BaseError(ErrorCodes.NOT_FOUND);
    }

    return new User(name, startTime, endTime);
  }
}
