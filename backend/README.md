# Users API — Register

## Endpoint
- POST `/users/register`

## Description
Register a new user. On success returns a JWT token and the created user (password is not returned).

## Request body (JSON)
- fullname (object)
  - firstname (string, required) — at least 3 characters
  - lastname (string, optional) — at least 3 characters when provided
- email (string, required) — valid email address
- password (string, required) — at least 6 characters

Example request:
```json
{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Validation
- `email` must be a valid email
- `fullname.firstname` minimum length 3
- `password` minimum length 6

## Responses / Status Codes

- 201 Created  
  Body: `{ "token": "<jwt>", "user": { ... } }`  
  Example:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
    "user": {
      "_id": "607d1f77bcf86cd799439011",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

- 400 Bad Request (validation error)  
  Example:
  ```json
  {
    "errors": [
      { "msg": "Invalid Email", "param": "email", "location": "body" }
    ]
  }
  ```

- 500 Internal Server Error  
  Example:
  ```json
  { "message": "Internal server error" }
  ```

---

# Users API — Login

## Endpoint
- POST `/users/login`

## Description
Authenticate an existing user. On success returns a JWT token and the user object (password is not returned).

## Request body (JSON)
- email (string, required) — valid email
- password (string, required) — at least 6 characters

Example request:
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Validation
- `email` must be a valid email
- `password` minimum length 6

## Responses / Status Codes

- 200 OK  
  Body: `{ "token": "<jwt>", "user": { ... } }`  
  Example:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
    "user": {
      "_id": "607d1f77bcf86cd799439011",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

- 400 Bad Request (validation error)  
  Example (validator messages from route):
  ```json
  {
    "errors": [
      { "msg": "InValid Email", "param": "email", "location": "body" }
    ]
  }
  ```

- 401 Unauthorized (invalid credentials)  
  Example:
  ```json
  { "message": "Invalid email or password" }
  ```

- 500 Internal Server Error  
  Example:
  ```json
  { "message": "Internal server error" }
  ```

Note: returned user objects exclude the password field (schema uses select: false).

---

# Users API — Profile

## Endpoint
- GET `/users/profile`

## Description
Retrieve the authenticated user's profile. Requires a valid JWT sent either as a cookie named `token` or in the `Authorization: Bearer <token>` header.

## Authentication
- Protected route; `authMiddleware.authUser` ensures the token is valid and attaches the user to `req.user`.

## Responses / Status Codes

- 200 OK  
  Body: the user object (no password).  
  Example:
  ```json
  {
    "_id": "607d1f77bcf86cd799439011",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "socketId": null
  }
  ```

- 401 Unauthorized  
  When no token or an invalid token is provided.
  ```json
  { "message": "Authentication failed" }
  ```

- 500 Internal Server Error  
  Example:
  ```json
  { "message": "Internal server error" }
  ```

---

# Users API — Logout

## Endpoint
- GET `/users/logout`

## Description
Invalidate the current JWT by clearing the `token` cookie and saving it to a blacklist collection. This prevents the token from being used again.

## Authentication
- Protected route; requires a valid token as described above.

## Responses / Status Codes

- 200 OK  
  ```json
  { "message": "Logged out" }
  ```

- 401 Unauthorized  
  When the token is missing or invalid.

- 500 Internal Server Error  
  Example:
  ```json
  { "message": "Internal server error" }
  ```