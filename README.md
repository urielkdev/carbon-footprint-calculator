## Description

This app is the solution to what is said in the file ["sinai-fullstack-test.pdf"](sinai-fullstack-test.pdf)

The Emission Factor values that I couldn't find a source for, I left them with an EF of 1.0 for now, but its easy to fix it, just change the values in the backend mapper.

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

### Demo

There is a demo running, but as it is hosted on a free server, the backend takes around 1 minute to start.

backend: https://carbon-footprint-calculator-olu0.onrender.com/docs

frontend: https://carbon-footprint-calculator-three.vercel.app/

To test the demo, go to the backend link, wait about 1 minute for the server to start, then go to the frontend link

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

### Test

For the frontend I decided not to spend too much time testing and focus on other things. But I did some to show that I know

```bash
$ yarn test
```
