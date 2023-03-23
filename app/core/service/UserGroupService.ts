import UserGroup from "../model/user/UserGroup";

export class UserGroupService {
  public updateDesc(userGroup: UserGroup, desc: string) {
    userGroup.updateDesc(desc);
  }

  public createUserGroup() {
    /**
     * 
     * validate一下参数
     * repository查数据
     * 新建模型
     * 返回模型
     * 
     */
  }
}
