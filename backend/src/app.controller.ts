import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}

  @Get('/health')
  @ApiTags('Health')
  health() {
    return 'health';
  }
}
