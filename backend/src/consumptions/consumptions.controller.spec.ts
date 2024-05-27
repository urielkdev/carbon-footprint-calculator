import { ConsumptionsController } from './consumptions.controller';
import { ConsumptionsService } from './consumptions.service';
import { CalculateConsumptionsDto } from './dto/create-consumption.dto';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { ConsumptionPeriodEnum, EmissionsFactorEnum } from 'src/enums';
import * as request from 'supertest';

describe('ConsumptionsController POST /consumptions', () => {
  let app: INestApplication;
  let controller: ConsumptionsController;

  const mockService = {
    calculateConsumptions: jest.fn((dto: CalculateConsumptionsDto) => {
      // Return a mock response
      return {
        consumptions: dto.consumptions.map((consumption) => ({
          ...consumption,
          emissions: 100, // Example emission value
        })),
        totalEmissions: 100 * dto.consumptions.length, // Example total emissions
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [ConsumptionsController],
      providers: [
        {
          provide: ConsumptionsService,
          useValue: mockService,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.init();

    controller = module.get<ConsumptionsController>(ConsumptionsController);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should calculate emissions', () => {
    const payload = {
      consumptions: [
        {
          emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
          value: 100,
          period: ConsumptionPeriodEnum.YEAR,
        },
      ],
    };

    return request(app.getHttpServer())
      .post('/consumptions')
      .send(payload)
      .expect(200)
      .then((response) => {
        expect(response.body).toStrictEqual({
          consumptions: [
            {
              emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
              value: 100,
              period: ConsumptionPeriodEnum.YEAR,
              emissions: 100,
            },
          ],
          totalEmissions: 100,
        });
      });
  });

  it('should give BadRequest when {emissionFactor} is missing', () => {
    const payload = {
      consumptions: [
        {
          value: 100,
          period: ConsumptionPeriodEnum.YEAR,
        },
      ],
    };

    return request(app.getHttpServer())
      .post('/consumptions')
      .send(payload)
      .expect(400);
  });

  it('should give BadRequest when {value} is missing', () => {
    const payload = {
      consumptions: [
        {
          emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
          period: ConsumptionPeriodEnum.YEAR,
        },
      ],
    };

    return request(app.getHttpServer())
      .post('/consumptions')
      .send(payload)
      .expect(400);
  });

  it('should give BadRequest when {period} is missing', () => {
    const payload = {
      consumptions: [
        {
          emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
          value: 100,
        },
      ],
    };

    return request(app.getHttpServer())
      .post('/consumptions')
      .send(payload)
      .expect(400);
  });

  it('should give BadRequest when {emissionFactor} is no in EmissionsFactorEnum', () => {
    const payload = {
      consumptions: [
        {
          emissionFactor: 'xpto',
          value: 100,
          period: ConsumptionPeriodEnum.YEAR,
        },
      ],
    };

    return request(app.getHttpServer())
      .post('/consumptions')
      .send(payload)
      .expect(400);
  });

  it('should give BadRequest when {period} is no in ConsumptionPeriodEnum', () => {
    const payload = {
      consumptions: [
        {
          emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
          value: 100,
          period: 'xpto',
        },
      ],
    };

    return request(app.getHttpServer())
      .post('/consumptions')
      .send(payload)
      .expect(400);
  });

  it('should give BadRequest when {value} is a negative number', () => {
    const payload = {
      consumptions: [
        {
          emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
          value: -100,
          period: ConsumptionPeriodEnum.YEAR,
        },
      ],
    };

    return request(app.getHttpServer())
      .post('/consumptions')
      .send(payload)
      .expect(400);
  });
});
