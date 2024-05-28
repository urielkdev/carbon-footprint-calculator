## Description

This app is the solution to what is said in the file ["sinai-fullstack-test.pdf"](sinai-fullstack-test.pdf)

The cards were made in a completely dynamic way, thinking that they could be used with a CMS in the future, so just add/modify/remove cards from the CARDS array in the constants.ts file that will be reflected in the pages shown to the user, this is the conficuration for the HOUSING_ELECTRICITY for example:

```
{
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.HOUSING_ELECTRICITY],
    emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kWh',
}
```

## Run entire application with Docker Compose

```bash
$ docker compose up --build
```

## Backend: Run standalone

You can make resquests in the swagger in `/docs`

Download the [Insomnia collection]("insomnia-collection.json") to easier test the backend routes

### Before All

```bash
$ cd backend
```

### Installation

```bash
$ yarn install
```

### Running

```bash
# development
$ yarn start
```

To test if the application is running just go to localhost:3000/health

### Test

```bash
# unit tests
$ yarn test
```

### Routes

- [x] GET /health - health application
- [x] POST /consumptions - Create a batch of transactions

## Frontend: Run standalone

### Before All

```bash
$ cd frontend
```

### Installation

```bash
$ yarn install
```

### Running

```bash
# development
$ yarn start
```
