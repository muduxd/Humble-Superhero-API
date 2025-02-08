# Humble Superhero API

## Overview
This project is a simple API for managing superheroes, built using ExpressJs. It allows users to add new superheroes and fetch a list of superheroes sorted by their humility score.

## Endpoints
- **POST /superheroes**: Add a new superhero.
- **GET /superheroes**: Fetch the list of superheroes sorted by humility score.

Structure of a superhero: 
```json
{
    "name": "<superheroName>",
    "superpower": "<superpower>",
    "humilityScore": 5
}
```


## Collaboration
To collaborate with a teammate on this project, I would:
1. Use version control (Git) to manage changes and ensure smooth collaboration.
2. Have regular code reviews and regular meetings to maintain code quality and share knowledge.
3. Encourage open discussions and brainstorming sessions to explore new ideas and improvements.

## If I had more time
If I had more time, I would:
1. Implement a persistent database (e.g., MongoDB or SQlite) instead of an in-memory array to store superhero data.
2. Add more backend functionality for the application, such as editing and deleting superheroes.
3. Add more frontend features, such as editing and deleting superheroes.
4. Explore adding authentication and authorization to secure the API.
5. Add more comprehensive tests to cover edge cases.

## Running the project
Start the backend running on port 8080:

```bash
npm run serve
```

Start the React client on port 3000:

```bash
npm start
```

Run the available unit tests in the backend using:

```bash
npm run test
```
Make sure to install the dependencies in the backend and frontend folders using:

```bash
npm install
```
