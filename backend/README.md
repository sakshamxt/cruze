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