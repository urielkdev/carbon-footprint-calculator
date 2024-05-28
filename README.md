## Description

This app is the solution to what is said in the file ["sinai-fullstack-test.pdf"](sinai-fullstack-test.pdf)

Download the [Insomnia collection]("insomnia-collection.json") to easier test the backend routes

## Run entire application with Docker Compose

```bash
$ docker compose up --build
```

## Backend: Run standalone

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

## Features

- [x] All routes
- [x] Unit tests
- [ ] Swagger base_url/docs
- [x] Added insomnia-collection.json that can be imported into Insomnia or Postman
- [x] ESLint/Prettier
- [ ] Solve the 'TODO's comments (control+shift+f and search for 'TODO')
- [x] Use a param validator like 'class-validator'
- [x] Dockerize application
