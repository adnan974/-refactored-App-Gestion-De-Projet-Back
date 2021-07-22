import { IsTaskOwnerOrIsAdminGuard } from './is-task-owner-or-is-admin.guard';

describe('IsTaskOwnerOrIsAdminGuard', () => {
  it('should be defined', () => {
    expect(new IsTaskOwnerOrIsAdminGuard()).toBeDefined();
  });
});
