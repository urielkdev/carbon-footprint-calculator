import { ConsumptionsService } from './consumptions.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ConsumptionsService', () => {
  let service: ConsumptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumptionsService],
    }).compile();

    service = module.get<ConsumptionsService>(ConsumptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
