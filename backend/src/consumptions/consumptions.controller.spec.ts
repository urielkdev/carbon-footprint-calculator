import { ConsumptionsController } from './consumptions.controller';
import { ConsumptionsService } from './consumptions.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ConsumptionsController', () => {
  let controller: ConsumptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumptionsController],
      providers: [ConsumptionsService],
    }).compile();

    controller = module.get<ConsumptionsController>(ConsumptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
