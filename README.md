## Cars showroom With NodeJS and ExpressJS

### Install

```
npm install --force
```

### Database & Table

```sql
create database db_showroom;

Create table users (
    id serial PRIMARY KEY,
    name varchar(20) ,
    email varchar(20),
    password VARCHAR(100) 
);

Create table cars (
    id serial PRIMARY KEY,
    name varchar(20) ,
    brand varchar(20),
    price INT,
    status varchar(10)
);

Create table purchase (
    id serial PRIMARY KEY,
    users_id INT,
    cars_id INT,
    amount INT,
);

```

### Make .env File with This Template

```
APP_HOST=localhost
APP_PORT=3000
DB_DRIVER=postgresql //your database driver
DB_HOST=localhost //your database host
DB_PORT=5432 //your database port
DB_USER=username //your database user
DB_PASS=password //your database password
DB_NAME=db_showroom //your database name

```

### API Spec

- Host: `localhost`
- Port: `3000`

#### Signup

- Request: `POST`
- Endpoint: `/auth/signup`
- Body:

```json
{
    "name": "Andi",
    "email": "Andi.keren@gmail.com",
    "password": "123456"
}

```json response
{
    "message": "Success Signup",
    "data": [
        {
            "id": 1,
            "name": "Andi",
            "email": "Andi.keren@gmail.com",
            "password": "$2a$10$VEeD2kKYDz3qTM/PWrE9W.w31rD90XoXJJXxPWGTKDzkivBhC.uhu"
        }
    ]
}
```

#### Signin

- Request: `POST`
- Endpoint: `/auth/signin`
- Body

```json
{
    "name": "Andi",
    "email": "Andi.keren@gmail.com",
    "password": "123456"
}
```
- response :

```json
{
    "message": "Signin success, welcome Andi!",
    "data": null
}
```
#### Add a New Car

- Request: `POST`
- Endpoint: `/cars`
- Body:

```json
{
    "name": "camry",
    "brand": "toyota",
    "price": 380000000
}
```
- Response:

```json
{
    "message": "Success Add a new Car",
    "data": [
        {
            "id": 1,
            "name": "avanza",
            "brand": "toyota",
            "price": 180000000,
            "status": "soldout"
        },
        {
            "id": 2,
            "name": "camry",
            "brand": "toyota",
            "price": 380000000,
            "status": "available"
        }
    ]
}
```

#### List Car

- Request: `GET`
- Endpoint: `/cars`
- Response:

```json
{
    "message": [
        {
            "id": 1,
            "name": "camry",
            "brand": "toyota",
            "price": 380000000,
            "status": "available"
        }
    ]
}
```

#### Buying Car

- Request: `POST`
- Endpoint: `/purchase`
- Body:

```json
{
    "users_id": 3,
    "cars_id": 5,
    "amount": 300000000
}
```
- Response (amount under price):

```json
{
    "message": "Your money is not enough!",
    "data": null
}
```
- Response (purchase success):

```json
{
    "message": "Success Add new Purchase, your change: 0",
    "data": [
        {
            "id": 8,
            "users_id": 3,
            "cars_id": 5,
            "amount": 380000000
        }
    ]
}
```

