import { ConsumptionsController } from './consumptions.controller';
import { ConsumptionsService } from './consumptions.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ConsumptionsController],
  providers: [ConsumptionsService],
})
export class ConsumptionsModule {}
