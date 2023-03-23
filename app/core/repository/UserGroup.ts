import { Inject } from '@eggjs/tegg';
import UserDAO from 'app/common/dal/dao/user';
import UserDO from 'app/common/dal/do/user';
import BaseError from 'app/common/error/BaseError';
import ErrorCodes from 'app/common/error/ErrorCodes';
import UserGroup from '../model/user/UserGroup';

export default class UserGroupRepository {
  @Inject()
  private userDAO: UserDAO;

  public async hasUser(userGroupId: string): Promise<boolean> {
    const checkDO = await this.userDAO.findOneByUserId(userGroupId);
    return !!checkDO;
  }

  public async save(userGroup: UserGroup) {
    const checkDO = await this.userDAO.findOneByUserId(userGroup.userGroupId);
    if (checkDO) {
      await this.userDAO.update(checkDO.id, {/** data */});
      return;
    }
    await this.userDAO.insert({});
  }

  public async userOfId(userGroupId: string) {
    const userDO = await this.userDAO.findOneByUserId(userGroupId);
    return this.userDOToModel(userDO);
  }

  public async usersOfIds(userGroupIds: string[]) {
    const userDOs = await this.userDAO.findByIds(userGroupIds);
    return userDOs.map(userDO => {
      return this.userDOToModel(userDO);
    });
  }

  private userDOToModel(userDO?: UserDO) {
    if (!userDO) {
      throw new BaseError(ErrorCodes.NOT_FOUND);
    }
    return UserGroup.create({
      userGroupId: userDO.userId,
      name: userDO.name as unknown as string,
      desc: userDO.description as unknown as string,
      creator: userDO.userId,
      users: []
    });
  }
}
