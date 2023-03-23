import { User } from './User';

export default class UserGroup {
  userGroupId: string;
  name: string;
  desc: string;
  users: Array<User> = [];
  creator: string;

  constructor(name: string, desc: string, creator: string) {
    this.userGroupId = 'xxx';
    this.name = name;
    this.desc = desc;
    this.creator = creator;
  }

  public static create(options: { userGroupId: string; name: string; desc: string; users: Array<User>; creator: string }): UserGroup {
    const userGroup = new UserGroup(options.name, options.desc, options.creator);
    userGroup.users = options.users;
    return userGroup;
  }

  public addUser(user: User) {
    // 一个规则分组里只允许出现一个同类型的规则
    this.users.splice(0, 0, user);
  }

  public updateDesc(desc: string) {
    if (desc) {
      this.desc = desc;
    }
  }
}
