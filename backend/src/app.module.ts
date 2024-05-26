import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { ConsumptionsModule } from './consumptions/consumptions.module';

@Module({
  imports: [ConsumptionsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
