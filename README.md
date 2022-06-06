# DesafioFinalPt1
Desafio final da Compass.uol parte 1

Challenge 034- PB NodeJS - Spectrum Squad 
Description
Car and Person information management API - created using Node.js and MongoDB

Topics

🔹 Info about the project

🔹 How to run the application

🔹 Car Endpoints

🔹 Persont Endpoints

Info about the project 📚
Libs:
- express: v4.18.1
- joi: v17.6.0
- mongoose: v6.3.4
- dotenv: v16.0.1
- bcrypt: ^5.0.1",
- @joi/date: "^2.1.0"
- mongoose-paginate-v2: v1.6.3

Node Version:
v14.16.0

How to run the application
After cloning the project
 git clone https://github.com/LucasAraujo44/DesafioFinalPt1.git
 
Install the dependencies:
 npm install

Config the environment variables (.env)
Inside of the project you have a .env.example file with the required configuration fields:

      DB_HOST =
      DB_USER =
      DB_PASS =
      DB_NAME =
      DB_PORT =
      DB_COLLECTION =

Start the application
 npm start
 
Car Endpoints
Create Car
POST
http://localhost:3000/api/v1/car 
 Body Example
 
    

        {
            
            "model": "S10 2.8",
            "type": "Gol",
            "brand": "GM",
            "color": "branco",
            "year": 1609459200000,
            "accessories": [
                {
                    "description": "Ar-condicionado"
                },
                {
                    "description": "Dir. Hidráulica"
                },
                {
                    "description": "Cabine Dupla"
                },
                {
                    "description": "Tração 4x4"
                },
                {
                    "description": "4 portas"
                },
                {
                    "description": "Diesel"
                },
                {
                    "description": "Air bag"
                },
                {
                    "description": "Diesel"
                }
            ],
            "passengersQtd": 5,
           
        }
    

Status Code: 201 Created

 

        {
            "_id": "629a9eeffc10dcca6b8cab32",
            "model": "S10 2.8",
            "type": "Gol",
            "brand": "GM",
            "color": "branco",
            "year": 1609459200000,
            "accessories": [
                {
                    "description": "Ar-condicionado"
                },
                {
                    "description": "Dir. Hidráulica"
                },
                {
                    "description": "Cabine Dupla"
                },
                {
                    "description": "Tração 4x4"
                },
                {
                    "description": "4 portas"
                },
                {
                    "description": "Diesel"
                },
                {
                    "description": "Air bag"
                },
                {
                    "description": "Diesel"
                }
            ],
            "passengersQtd": 5,
            "__v": 0
        }
    ],
    "total": 44,
    "limit": 20,
    "totalPages": 3,
    "offsets": 1
    }


Status Code: 400 Bad Request

        {
            "message": "Bad Request",
            "details": [
                {
                    "message": "error.messsage of the req"
                }
            ]
         }

List Car
GET

http://localhost:3000/api/v1/car/ 
Res
Status Code: 200 OK

    {
        "Vehicles": [

        {
            "_id": "629a9eeffc10dcca6b8cab32",
            "model": "S10 2.8",
            "type": "Gol",
            "brand": "GM",
            "color": "branco",
            "year": 1609459200000,
            "accessories": [
                {
                    "description": "Ar-condicionado"
                },
                {
                    "description": "Dir. Hidráulica"
                },
                {
                    "description": "Cabine Dupla"
                },
                {
                    "description": "Tração 4x4"
                },
                {
                    "description": "4 portas"
                },
                {
                    "description": "Diesel"
                },
                {
                    "description": "Air bag"
                },
                {
                    "description": "Diesel"
                }
            ],
            "passengersQtd": 5,
            "__v": 0
        }
    ],
    "total": 44,
    "limit": 20,
    "totalPages": 3,
    "offsets": 1
    }


List Car by ID
GET

http://localhost:3000/api/v1/car/:id
Res
Status Code: 200 OK

{
    "Vehicles": [

        {
            "_id": "629a9eeffc10dcca6b8cab32",
            "model": "S10 2.8",
            "type": "Gol",
            "brand": "GM",
            "color": "branco",
            "year": 1609459200000,
            "accessories": [
                {
                    "description": "Ar-condicionado"
                },
                {
                    "description": "Dir. Hidráulica"
                },
                {
                    "description": "Cabine Dupla"
                },
                {
                    "description": "Tração 4x4"
                },
                {
                    "description": "4 portas"
                },
                {
                    "description": "Diesel"
                },
                {
                    "description": "Air bag"
                },
                {
                    "description": "Diesel"
                }
            ],
            "passengersQtd": 5,
            "__v": 0
        }
    ],
    "total": 44,
    "limit": 20,
    "totalPages": 3,
    "offsets": 1
    }

Status Code: 400 Bad Request

                    {
                        "message": "Bad Request",
                        "details": [
                            {
                                "message": "error.messsage of the req"
                            }
                        ]
                    }

Update Car
PUT

http://localhost:3000/api/v1/car/:id 

Status Code: 200 OK



        {
            "_id": "629a9eeffc10dcca6b8cab32",
            "model": "S10 2.8",
            "type": "Gol",
            "brand": "GM",
            "color": "branco",
            "year": 1609459200000,
            "accessories": [
                {
                    "description": "Ar-condicionado"
                },
                {
                    "description": "Dir. Hidráulica"
                },
                {
                    "description": "Cabine Dupla"
                },
                {
                    "description": "Tração 4x4"
                },
                {
                    "description": "4 portas"
                },
                {
                    "description": "Diesel"
                },
                {
                    "description": "Air bag"
                },
                {
                    "description": "Diesel"
                }
            ],
            "passengersQtd": 5,
            "__v": 0
        }
    ],
    "total": 44,
    "limit": 20,
    "totalPages": 3,
    "offsets": 1
    }



Status Code: 400 Bad Request

      {
          "message": "Bad Request",
          "details": [
              {
                  "message": "error.messsage of the req"
              }
          ]
      }

Delete Car
DELETE

http://localhost:3000/api/v1/car/:id 
Status Code: 204 No Content


        {
            "_id": "629a9eeffc10dcca6b8cab32",
            "model": "S10 2.8",
            "type": "Gol",
            "brand": "GM",
            "color": "branco",
            "year": 1609459200000,
            "accessories": [
                {
                    "description": "Ar-condicionado"
                },
                {
                    "description": "Dir. Hidráulica"
                },
                {
                    "description": "Cabine Dupla"
                },
                {
                    "description": "Tração 4x4"
                },
                {
                    "description": "4 portas"
                },
                {
                    "description": "Diesel"
                },
                {
                    "description": "Air bag"
                },
                {
                    "description": "Diesel"
                }
            ],
            "passengersQtd": 5,
            "__v": 0
        }
    ],
    "total": 44,
    "limit": 20,
    "totalPages": 3,
    "offsets": 1
    }


Status Code: 400 Bad Request

     {
         "message": "Bad Request",
         "details": [
             {
                 "message": "error.messsage of the req"
             }
         ]
     }

