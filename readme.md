# MovieApi

# Author

## Nahid Karim Ankur

MovieApi is a Node.js API built with Express.js that allows registered users to manage a movie database. It provides functionalities such as user registration, login, authentication using JWT, and the ability for admins to add movies to the database.

## Features

- User registration: Users can create an account by providing their email and password.
- User login: Registered users can log in using their email and password to obtain a JSON Web Token (JWT) for authentication.
- Authentication: The API uses stateless authentication with JWT. The JWT is sent via a cookie and must be included in the request headers for authorized access.
- User roles: Registered users are assigned the role of general user by default. Admin users have additional privileges to add movies to the database.
- Movie management: Admin users can add movies to the database with details such as title, actors, crews, and runtime.
- Movie retrieval: Any Guests, Authenticated general users and admin users can view the movie list and individual movie details.

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running
- Postman or any API testing tool

## Getting Started

1. Clone the repository:

2. Install the dependencies:

```
npm install
```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the following environment variables:

     ```
     PORT=3000
     MONGO_URI=<your_mongodb_uri>
     JWT_SECRET=<your_jwt_secret>
     ```

4. Start the server:

```
npm start
```

The server will start running on `http://localhost:3000`.

## API Endpoints

- `POST /api/register` - Register a new user.
- `POST /api/login` - Log in and obtain a JWT token.
- `GET /api/movies` - Get the list of movies (accessible to authenticated general users and admins).
- `GET /api/movies/:id` - Get the details of a specific movie.
- `POST /api/movies` - Add a new movie (accessible to admins only).

## Usage

1. Register a new user by making a POST request to `/api/register` with the following JSON payload:

```json
{
  "email": "example@example.com",
  "password": "your_password"
}
```

### For Testing Admin Previlege, isAdmin needs to be modified as true from mongodb collection 


2. Log in by making a POST request to `/api/login` with the same JSON payload used during registration. This will provide you with a JWT token.

3. Include the JWT token in the headers of subsequent requests:

   - Key: `Authorization`
   - Value: `Bearer your_token`

4. Use Postman or any API testing tool to make requests to the various endpoints listed above to manage movies and retrieve movie data.

Please note that for routes requiring admin privileges, the token must belong to an admin user (`isAdmin: true`) to access the endpoint.

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, please open an issue or submit a pull request.

## License

MIT

---
