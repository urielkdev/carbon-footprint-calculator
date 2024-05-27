import { ConsumptionsService } from './consumptions.service';
import { CalculateConsumptionsDto } from './dto/create-consumption.dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('consumptions')
export class ConsumptionsController {
  constructor(private readonly consumptionsService: ConsumptionsService) {}

  @Post()
  @HttpCode(200)
  calculateConsumptions(
    @Body() calculateConsumptionsDto: CalculateConsumptionsDto,
  ) {
    return this.consumptionsService.calculateConsumptions(
      calculateConsumptionsDto,
    );
  }
}
