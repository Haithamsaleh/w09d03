




## Description

***Todo app*** is the resource for all BASE jumpers around the world to check the weather conditions of different jumps across the world cross referencing latitude and longitude of exit points and the Windy API


## User Stories

- **Signup:** As an anon I can sign up in the app so that I can start log todos
- **Login:** As a user I can login to the app so that I can see and edit tasks
- **Logout:** As a user I can logout from the app so no one else can use it



# Client / Frontend

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | resgisterPage        | public                     | Home page,  Signup form, link to login                       |
| `/login`         | LoginPage            | public                     | Login form, link to signup,                                  |
| `/tasks    `     | TodosPage            | user only                  | Shows all exit points in a list                              |

## Components

- LoginPage
- resgisterPage
- todosPage




# Server / Backend

## Models

User model

```
{
  user: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, required: true}
}
```


```
 {
   task: {type: String, required: true},
   userId: {type: String,  required: true},
   password: {type: String, required: true}
   role: {type: String, required: true}
   
 }
```



## Backend routes

| HTTP Method | URL            | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | -------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/signup`     | { email, password}                                            | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/login`      | {email, password}                                         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/logout` | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| GET        | `/todos`     | { task}                                                    | 200           | 404        | show all todos
| POST        | `/todo   | { task}                                            | 201            | 404          |post todo

## Links


### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com)

[Server repository Link](https://github.com)

==================
![This is an image](./93.png)
