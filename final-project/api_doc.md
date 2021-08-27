# Fly-Tic App

Fly-Tic App is an application to manage flight ticket.
This app has:
- RESTful endpoint for CRUD operation
- Check current weather in your area
- Get more info about the Airlines
- JSON formatted response

&nbsp;

## RESTful endpoint flights
**GET /flights**

Use this tu get list flight tickets from database

> _Request Header_
```
{
    "access_token": "<your access token>"
}
```

> _Request Body_
```
not needed
```

> _Response (200)_
```
[
    {
        "id": 1,
        "name": "Lion Air",
        "destination": "Bali",
        "price": 500000,
        "imageUrl": "https://media.suara.com/pictures/970x544/2018/10/29/45106-pesawat-lion-air-jatuh-di-perairan-tanjung-karawang-instagram.jpg",
        "authorId": 1,
        "createdAt": "2021-08-25T05:05:43.537Z",
        "updatedAt": "2021-08-25T05:05:43.537Z",
        "User": {
            "id": 1,
            "email": "admin@mail.com",
            "role": "admin"
        }
    },
    {
        "id": 2,
        "name": "Garuda Air",
        "destination": "Surabaya",
        "price": 700000,
        "imageUrl": "https://www.garuda-indonesia.com/content/dam/garuda/main-banner/company-profile.jpg",
        "authorId": 1,
        "createdAt": "2021-08-25T05:05:43.537Z",
        "updatedAt": "2021-08-25T05:05:43.537Z",
        "User": {
            "id": 1,
            "email": "admin@mail.com",
            "role": "admin"
        }
    },
    ...
]
```

&nbsp;

**POST /flights**

Use this to add Flight ticket to database

> _Request Header_
```
{
    "access_token": "<your access token>"
}
```

> _Request Body_
```
{
    "name": "<brand name>",
    "destination": "<your destination>",
    "price": "<your price>",
    "imageUrl": "<your link image>"
}
```

> _Response (201 - Created)_
```
{
    "id": 4,
    "name": "Batik Air",
    "destination": "Palu",
    "price": 70000,
    "imageUrl": "https://ik.imagekit.io/umm9wmxymmh/batik1_QBAkWL4c9.jpg",
    "authorId": 1,
    "updatedAt": "2021-08-26T18:42:50.675Z",
    "createdAt": "2021-08-26T18:42:50.675Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": [
        "Name is required",
        "Destination is required",
        "Price is required"
    ]
}
```

&nbsp;

**PUT /flights/:id**

Use this to update flight ticket from database

> _Request Header_
```
{
    "access_token": "<your access token>"
}
```

> _Request Body_
```
{
    "name": "<brand name>",
    "destination": "<your destination>",
    "price": "<your price>",
    "imageUrl": "<your link image>"
    "authorId": "<your admin id>"
}
```

> _Response (200)_
```
{
    "id": 1,
    "name": "Lion Air",
    "destination": "Bali",
    "price": 600000,
    "imageUrl": "https://ik.imagekit.io/umm9wmxymmh/lion1_r759Iy_C4.jpg",
    "authorId": 1,
    "createdAt": "2021-08-25T05:05:43.537Z",
    "updatedAt": "2021-08-26T18:41:46.606Z"
}
```

> _Response (400 - Bad Request)_
```
{
    "message": [
        "Name is required",
        "Destination is required",
        "Price is required"
    ]
}
```

> _Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

&nbsp;

**DELETE /flights/:id**

Use this to delete flights ticket from database

> _Request Header_
```
{
    "access_token": "<your access token>"
}
```

> _Request Body_
```
not needed
```

>_Response (200)_
```
{
    "message": "ID 4 has been deleted successfully"
}
```

> _Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

&nbsp;

## Endpoints Purchase Ticket

**GET /purchases**
Use this to get all order list

> _Request Header_
```
{
    "access_token": "<your access token>"
}
```

> _Request Body_
```
not needed
```

>_Response (200)_
```
[
    {
        "userId": 2,
        "flightId": 1,
        "createdAt": "2021-08-26T21:03:35.160Z",
        "updatedAt": "2021-08-26T21:03:35.160Z",
        "Flight": {
            "id": 1,
            "name": "Lion Air",
            "destination": "Bali",
            "price": 600000,
            "imageUrl": "https://ik.imagekit.io/umm9wmxymmh/lion1_r759Iy_C4.jpg",
            "authorId": 1
        },
        "User": {
            "id": 2,
            "email": "user@mail.com",
            "role": "customer"
        }
    },
    {
        "userId": 2,
        "flightId": 2,
        "createdAt": "2021-08-26T21:03:55.458Z",
        "updatedAt": "2021-08-26T21:03:55.458Z",
        "Flight": {
            "id": 2,
            "name": "Garuda Air",
            "destination": "Surabaya",
            "price": 700000,
            "imageUrl": "https://www.garuda-indonesia.com/content/dam/garuda/main-banner/company-profile.jpg",
            "authorId": 1
        },
        "User": {
            "id": 2,
            "email": "user@mail.com",
            "role": "customer"
        }
    }
]
```

&nbsp;

**POST /purchases/:id**
Use this to order ticket

> _Request Header_
```
{
    "access_token": "<your access token>"
}
```

> _Request Body_
```
{
    "userId":"userId",
    "flightId": "flightId"
}
```

_Response (200)_
```
{
    "flightId": 2,
    "userId": 2,
    "updatedAt": "2021-08-26T21:03:55.458Z",
    "createdAt": "2021-08-26T21:03:55.458Z"
}
```

&nbsp;

## Endpoints Login and Register

**POST /login**
_Request Header_
```
not needed
```

_Requst Body_
```
{
    "email": "<your email>",
    "password": "<your password>"
}
```

_Response (200)_
```
{
    "access_token": "<token>"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "Email/password invalid"
}
```

&nbsp;

**POST /register**
_Request Header_
```
not needed
```

_Requst Body_
```
{
    "email": "<your email>",
    "password": "<your password>",
    "role": "admin"
}
```

_Response (200)_
```
{
    "id": 5,
    "email": "user3@mail.com",
    "role": "customer",
    "access_token": "<token>"
}
```

_Response (400 - Bad Request)_
```
{
    "message": [
        "Must be an email format",
        "Email is required",
        "Password is required"
    ]
}
```

&nbsp;

## Endpoints Weather
**GET /weathers**
Use this to get current weather in your area

_Request Header_
```
{
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': 'api-key'
    
}
```

_Request Params_
```
{
    'q': '<city name>',
    'cnt': 'min 1 - max 50'
    
}
```

_Response (200)_
```
{
    "data": {
        "name": "Provinsi Bali",
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    }
}
```

_Response (400 - Bad Request)_
```
{
    "cod": "400"
    "meesage": "bad query"
}
```

&nbsp;

## Endpoints AirLine
**GET /airlines**
Use this to get link for more info about the planes

_Request Header_
```
{
    'x-rapidapi-host': 'iata-and-icao-codes.p.rapidapi.com',
    'x-rapidapi-key': 'api-key'
    
}
```

_Request Params_
```
{
    'iata_code': '<IATA Code>'
}
```

_Response (200)_
```
[
    {
        "alliance": "SkyTeam",
        "iata_code": "GA",
        "icao_code": "GIA",
        "low_cost_carrier": false,
        "name": "Garuda Indonesia",
        "website": "https://www.garuda-indonesia.com/"
    }
]
```
