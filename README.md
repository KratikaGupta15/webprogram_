# webprogram

Node.js + Express + MongoDB Atlas (Mongoose) CRUD API for a `Student` resource.

## Structure
```
config/db.js                  MongoDB connection
models/Student.js             Mongoose schema/model
controllers/studentController.js   CRUD logic
routes/studentRoutes.js       Express routes
server.js                     App entry point
postman/                      Postman collection for testing
```

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and put your Atlas DB user password in place of `<db_password>`.
3. `npm start` (server runs on http://localhost:3000)

## Endpoints
| Method | URL | Description |
|---|---|---|
| POST | /api/students | Create a student |
| GET | /api/students | List all students |
| GET | /api/students/:id | Get one student |
| PUT | /api/students/:id | Update a student |
| DELETE | /api/students/:id | Delete a student |

## Testing with Postman
Import `postman/webprogram.postman_collection.json` into the Postman desktop app and run the requests in order
(Create -> Get All -> Get By ID -> Update -> Delete). The created ID is saved automatically in the `studentId` variable.
