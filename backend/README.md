# /user/register

Registers a new user.

## Required Data
• fullName.firstName (string, min length 3)  
• fullName.lastName (string, min length 3)  
• email (string, valid email)  
• password (string, min length 6)

## Status Codes
• 201 Created: Returns auth token and user data.  
• 400 Bad Request: Returns validation errors.

## Example
```
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

# /user/login

Logs in a user.

## Required Data
• email (string, valid email)  
• password (string, min length 6)

## Status Codes
• 200 OK: Returns auth token and user data.  
• 400 Bad Request: Returns validation errors.  
• 401 Unauthorized: Invalid credentials

## Example
```
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

# /user/profile

Returns the currently authenticated user's profile.

## Status Codes
• 200 OK: Returns user data  
• 401 Unauthorized: Invalid or missing token

## Example
No request body required.

# /user/logout

Logs out the current user and blacklist the token provided in cookie or headers

## Status Codes
• 200 OK: Successfully logged out  
• 401 Unauthorized: Invalid or missing token

## Example
No request body required.