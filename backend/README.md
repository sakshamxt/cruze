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

# /captain/register

Registers a new captain.

## Required Data
• fullName.firstName (string, min length 3)  
• fullName.lastName (string, min length 3)  
• email (string, valid email)  
• password (string, min length 6)  
• vehicle.color (string, min length 3)  
• vehicle.plate (string, min length 3)  
• vehicle.capacity (number, min 1)  
• vehicle.vehicleType (car, motorcycle, or auto)

## Status Codes
• 201 Created: Returns auth token and captain data  
• 400 Bad Request: Validation errors or captain already exists

## Example
```
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```