### Model

- id (String):

> Unique identifier for each user.
> It is automatically generated using a UUID (Universally Unique Identifier).
> This field is marked as the primary key with the @id attribute.
> The @default(uuid()) attribute ensures that a new UUID is generated by default for each user.

- name (String):

> Represents the first name of the user. No constraints are imposed on the length or format of the name.

- last_name (String):

> Represents the last name of the user.
> No constraints are imposed on the length or format of the last name.

- email (String):

> Represents the email address of the user.
> Each email address must be unique within the system, as indicated by the @unique attribute.
> Used for authentication and communication purposes.

- image (String, optional):

> Stores a URL or path to the user's profile image.
> This field is optional and can be left empty if the user chooses not to upload an image.

- password (String):

> Represents the user's password.
> The actual password is hashed and securely stored to protect user data.

- identification (Json, optional):

> Stores additional identification information about the user.
> The format of this field is expected to be in JSON, which allows for flexibility in defining custom identification data.
> It is marked as optional, meaning users may or may not provide this information.

- description (String, optional):

> Allows the user to provide a brief description or bio.
> This field is optional, and users can choose to leave it empty.

### Relationships:

- payments (Payment[]):

> Represents a one-to-many relationship with the Payment model.
> Each user can have multiple payment records associated with them.

- ratings_made (Rating[]):

> Represents a one-to-many relationship with the Rating model.
> Users can make multiple ratings, and each rating is associated with a user.

- ratings_received (Rating[]):

> Represents a one-to-many relationship with the Rating model.
> Users can receive multiple ratings from other users.

- car_owned (Car[]):

> Represents a many-to-many relationship with the Car model.
> Users can own multiple cars, and each car can be owned by multiple users.

- travels_created (Travel[]):

> Represents a one-to-many relationship with the Travel model.
> Users can create multiple travel records, and each travel is associated with a user as the travel maker.

- traveler (Traveler, optional):

> Represents a one-to-one relationship with the Traveler model.
> A user can have an optional traveler profile, which may contain additional travel-related information.

### Routes
- POST - /api/users/register:

### Description
This endpoint is used for user registration. Users can create an account by providing their basic information such as name, last name, email, and password. The system checks if the email is not already registered, and if not, it creates a new user record in the database.

#### Request Body
The request body should contain the following JSON parameters:

- name (String): The first name of the user.
- last_name (String): The last name of the user.
- email (String): The email address of the user.
- password (String): The user's chosen password.

#### Success response

- newUser (Object): 
>An object representing the newly registered user. It includes the user's ID, name, last name, email, and other optional fields like image, identification, and description.
- token (String): 
>A JWT (JSON Web Token) that can be used for user authentication and authorization in subsequent requests.

#### Error response

- Error (HTTP Status Code: 400 Bad Request)
>If the provided email is already associated with an existing user, the endpoint responds with a JSON object containing the error message: "Email already exists."
- Error (HTTP Status Code: 500 Internal Server Error)
>If an unexpected error occurs during the registration process, the endpoint responds with a JSON object containing the error message: "Failed to register user."

---
- POST - /api/users/login 

### Description
This endpoint is used for user authentication. Users can log in by providing their registered email and password. The system verifies the provided credentials against the stored data and issues a JSON Web Token (JWT) upon successful authentication. This token can be used for subsequent authorized requests.

#### Request Body
The request body should contain the following JSON parameters:

- email (String): The email address associated with the user account.
- password (String): The user's password.

#### Success response 
 - token (String): A JWT (JSON Web Token) that represents the user's authentication status and can be used for subsequent authorized requests.

#### Error response
- Error (HTTP Status Code: 401 Unauthorized)
> If the provided email does not match any existing user account, the endpoint responds with a JSON object containing the error message: "Invalid credentials."
- Error (HTTP Status Code: 400 Bad Request)
> If the provided password does not match the hashed password stored for the user, the endpoint responds with a JSON object containing the error message: "Email or password are incorrect."

---
- GET - /api/users/all

### Description
This endpoint is used to fetch a list of all users currently registered in the application. It retrieves data from the database and returns an array of user objects, each containing details such as name, last name, email, and other optional fields.

#### Success response

>An array of users whith its data

#### Error response 

>If an unexpected error occurs during the retrieval process, the endpoint responds with a JSON object containing the error message: "Something went wrong."

---
- GET - /api/users/:id

### Description
This endpoint is used to fetch information about a specific user based on their unique identifier (ID). It retrieves data from the database using the provided user ID and returns a JSON object containing the user's details, such as name, last name, email, and other optional fields.

#### Request Parameter (params)
- id (String): The unique identifier of the user whose information is being requested.
---

- PUT - /api/users/:id

### Description

This endpoint is used to update a specific user's information based on their unique identifier (ID). Users must be authenticated and authorized to access this route. The updated data is sent in the request body as a JSON object containing the fields that need to be changed, such as name, last name, image, password, identification, and description.

#### Request Parameter
id (String): The unique identifier of the user whose information is being updated.

#### Request Body
The request body should contain a JSON object with the following optional parameters:

- name (String): The updated first name of the user.
- last_name (String): The updated last name of the user.
- image (String, optional): The updated URL or path to the user's profile image (if provided).
- password (String, optional): The updated user's password (if the user wants to change their password).
- identification (Json, optional): The updated additional identification information in JSON format (if provided).
- description (String, optional): The updated brief description or bio provided by the user (if provided).

#### Success response
>Upon successful update of user data, the endpoint responds with a JSON object containing the updated user's information.
#### Error response
>If an unexpected error occurs during the update process, the endpoint responds with a JSON object containing the error message: "Failed to update user."
---
- DELETE - /api/users/:id

### Description
This endpoint is used to delete a specific user's account based on their unique identifier (ID). Users must be authenticated and authorized to access this route. Once the user's account is deleted, all associated data (e.g., payments, ratings, cars, travels) will also be removed from the database.

#### Request Parameter
id (String): The unique identifier of the user whose account is being deleted.

#### Success response
>Upon successful deletion of the user account and associated data, the endpoint responds with a 204 No Content status code, indicating that the request was successful, and there is no additional content to send in the response body.

#### Error response
>If an unexpected error occurs during the deletion process, the endpoint responds with a JSON object containing the error message: "Failed to delete user."