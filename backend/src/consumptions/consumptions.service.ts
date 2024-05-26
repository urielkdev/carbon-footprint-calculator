import { CalculateConsumptionsDto } from './dto/create-consumption.dto';
import { calculateConsumptionsUseCase } from './use-cases/calculate-consumptions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumptionsService {
  calculateConsumptions(calculateConsumptionsDto: CalculateConsumptionsDto) {
    return calculateConsumptionsUseCase(calculateConsumptionsDto);
  }
}
