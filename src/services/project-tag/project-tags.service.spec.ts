import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTagService } from './project-tag.service';

describe('ProjectTagsService', () => {
  let service: ProjectTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectTagService],
    }).compile();

    service = module.get<ProjectTagService>(ProjectTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
