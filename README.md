# FindUkrainian Legacy

The original owner of this project is Tatyana Bortnik. [https://github.com/tatyanabortnik/FindUkrainian](https://github.com/tatyanabortnik/FindUkrainian)
Our goal of this project was to convert it into typescript along with adding testing and improvements at our discretion.

## Accomplishments:

1. Successfully converted both server and client folders to typescript along with providing necessary type declarations for seed data.
1. Implemented mock data for end to end testing with cypress
1. Added feature to translate title of the page (Full page language translation in development). 

### Prerequisites:

You will need Express server and MongoDB to run this project.

Server port can be specified in the `server/index.ts` file, defaults to 3000. If your server doesn't run on port 3000, you need to specify it in `client/src/services/businessService.ts` file.

MongoDB connection string is to be specified in `server/config.ts` file.

Install all dependencies. Server and client are two separate projects that need their respective packages to be installed via npm

Dependencies for _translation feature_:

```
from the root directory:

npm i

```
Dependencies for _server_:

```
from the root directory:

cd server
npm i
```

Dependencies for _client_:

```
from the root directory:

cd client
npm i
```

### run commands:

To run the _server_ and seed it with mocked data:

```
from the root directory:

cd server
npx tsx SeedData/seed
npx tsx index.ts


```

To run the _client_:

```
from the root directory:

cd client
npm run dev
```
### Contributors:
[Regina Czech](https://github.com/reginaczech), [Harriet Morris](https://github.com/harrietmorris), [Badreddine El Rhoul](https://github.com/Badrhoul)
