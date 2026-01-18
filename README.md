# backend-playground
A simple NestJS project with basic architectural structure.

## Architectural Structure
In this this case are 2 modules:
* `AppModule` - main module
* `UserModule` - responsible for managing user entities

### UserModule
The module follows separating concerns between `controllers`, `services`, `DTOs`, `interfaces` and Initial data `seed` (`src/users/users.seed.ts`)

Responsibilities
* `POST /users`       - Create new users
* `GET /users`        - Retrieve a paginated list of users
* `GET /users/:id`    - Retrieve a single user by ID
* `PATCH /users/:id`  - Partially update user data
* `DELETE /users/:id` - Delete users

Validation is performed via DTOs using `class-validator` and using `useGlobalPipes`:
```js
app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
}));
```



## Environment variables
Exists 3 types for running the app: `local` `dev` `local`.

For environment variables is validation - `joi`. That checking necessary variables for the project

You can check which variable you need in `.env.exampale` Create environment file based on the example:

```bash
cp .env.example .env.local
```


## Running the app

### Install dependencies

```bash
npm install
```

### Run

```bash
npm run start:local # in local mode
npm run start:dev   # in development mode

npm run build       # build and 
npm run start:prod  # run development mode
```




