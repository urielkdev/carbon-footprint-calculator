import { ConsumptionsService } from './consumptions.service';
import { CalculateConsumptionsDto } from './dto/create-consumption.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('consumptions')
export class ConsumptionsController {
  constructor(private readonly consumptionsService: ConsumptionsService) {}

  @Post()
  calculateConsumptions(
    @Body() calculateConsumptionsDto: CalculateConsumptionsDto,
  ) {
    return this.consumptionsService.calculateConsumptions(
      calculateConsumptionsDto,
    );
  }
}
