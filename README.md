<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tatyanabortnik/FindUkrainian">
    <img src="client/public/logo.png" alt="Logo" height="80">
  </a>
</div>

## About The Project

FindUkrainian is an SPA to locate Ukrainian businesses in Koln, Germany

![FindUkrainian Screen Shot][product-screenshot]

### Built With

[![React][React]][React_URL]
[![React_Router][React_Router]][React_Router_URL]
[![MongoDB][MongoDB]][MongoDB_URL]
[![Expressjs][Expressjs]][Expressjs_URL]
[![MUI][MUI]][MUI_URL]
[![Figma][Figma]][Figma_URL]
[![Prettier][Prettier]](https://prettier.io/)

# FindUkrainian Legacy

The original owner of this repository is Tatyana Bortnik [https://github.com/tatyanabortnik/FindUkrainian](https://github.com/tatyanabortnik/FindUkrainian).
Our goal was to refactor the code and convert in into TypeScript, along with adding maxmimum possible test coverage .

## Accomplishments:

1. Successfully refactored and converted both server and client folders to TypeScript along with providing necessary type declarations for seed data.
2. Utilized mock data to implement front-end testing (using Jest, React Testing Library) and back-end testing (using SuperTest).
3. Implemented end-to-end testing using Cypress.
4. Added feature to translate title of the page (Full page language translation in development). 

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


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: client/public/image-1.png
[Prettier]: https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB_URL]: https://www.mongodb.com/docs/
[React]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React_URL]: https://react.dev/
[React_Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React_Router_URL]: https://www.npmjs.com/package/react-router-dom
[Expressjs]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Expressjs_URL]: https://expressjs.com/
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI_URL]: https://mui.com/
[Figma]: https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
[Figma_URL]: https://www.figma.com/
