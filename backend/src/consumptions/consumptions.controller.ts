import { ConsumptionsService } from './consumptions.service';
import { CalculateConsumptionDto } from './dto/create-consumption.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('consumptions')
export class ConsumptionsController {
  constructor(private readonly consumptionsService: ConsumptionsService) {}

  @Post()
  create(@Body() calculateConsumptionsDto: CalculateConsumptionDto) {
    return this.consumptionsService.calculateConsumptions(
      calculateConsumptionsDto,
    );
  }
}
