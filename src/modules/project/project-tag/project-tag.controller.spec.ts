import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTagController } from './project-tag.controller';

describe('ProjectTagController', () => {
  let controller: ProjectTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectTagController],
    }).compile();

    controller = module.get<ProjectTagController>(ProjectTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
