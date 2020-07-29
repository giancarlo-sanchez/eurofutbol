# Europe-soccer-leagues Backend

**For full README.md and live application, please visit [our frontend repo](https://github.com/giancarlo-sanchez/europe-soccer-league)**.

# Europe-soccer-leagues Backend

This is the backend for the Europe-soccer-leagues exercises.

## Getting started

1. Clone this repository
2. Install dependencies
3. Create a **.env** file based on the example with proper settings for your
   local environment
4. Create a database user with the same name and password as found in your
   **.env** file with CREATEDB privileges
5. Run
   * `npm run db:create`
   * `npm run db:migrate`
   * `npm run db:seed:all`
   * `npm run dev`

## The security API

Your application will need to login a player or sign the player up. Here are the
two methods for doing that.

### Login: POST /api/session

There are three existing players in the database after seeding, all with the
password "password":

| Email                   | Name                 |
|-------------------------|----------------------|
| giancarlo@sanchez.com   | Giancarlo Sanchez    |
| user@one.example        | Cristiano Ronaldo Jr |
| user@two.example        | Messi Goat Jr        |

Expected payload sent to server:

```json
{
  "email": "user@one.example",
  "password": "abc123"
}
```

Successful response:

```json
{
  "token": "the token to use in your follow-up requests",
  "player": {
    "createdAt": "2020-07-23T08:33:40.799Z",
    "email": "user@one.example",
    "id": 2,
    "name": "Cristiano Ronaldo Jr",
    "updatedAt": "2020-07-23T08:33:40.799Z",
  }
}
```

### Sign-up: POST /api/players

Expected payload sent to server:

```json
{
  "name": "Marco",
  "password": "pwd",
  "email": "marco@example.com"
}
```

Successful response:

```json
{
  "token": "the token to use in your follow-up requests",
  "player": {
    "createdAt": "2020-07-23T08:33:40.799Z",
    "email": "julius@example.com",
    "id": 4,
    "name": "Julius",
    "updatedAt": "2020-07-23T08:33:40.799Z",
  }
}
```
