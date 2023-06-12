import { Test, TestingModule } from '@nestjs/testing';
import { Cat } from './entity/cat.entity';

describe('Cat', () => {
  let provider: Cat;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cat],
    }).compile();

    provider = module.get<Cat>(Cat);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
