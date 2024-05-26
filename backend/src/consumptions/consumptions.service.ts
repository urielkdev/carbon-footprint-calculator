import { CalculateConsumptionDto } from './dto/create-consumption.dto';
import { calculateConsumptionsUseCase } from './use-cases/calculate-consumptions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumptionsService {
  calculateConsumptions(calculateConsumptionsDto: CalculateConsumptionDto) {
    return calculateConsumptionsUseCase(calculateConsumptionsDto);
  }
}
