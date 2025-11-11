# Backend Project Setup

Below steps will explain how to setup your `Backend project`

> ### Step - 01

- create a folder `server`.

  ```bash
  mkdir server
  ```

- Open the `server` folder.

  ```bash
  cd server
  ```

- create an empty `server.js` file inside server folder.

- Initialize npm by running the below command :

  ```bash
  npm init -y
  ```

> This will create you a `package.json` file which contains all the information about the project setup with dependency information.

---

<br><br>

> ### Step - 02

- Open `package.json` file. It looks something like this

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "This will explain how to setup the backend project",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

> 😄 Don't get panic when you see this code. This is very simple to understand.

- Now open terminal. We will install necessary libraries we need

We will be installing:

| Package         | For                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| `bcryptjs`      | To hash and compare passwords securely.                                                                         |
| `cloudinary`    | To upload, store, and manage images and other media files in the cloud.                                         |
| `cookie-parser` | To parse and manage cookies in incoming HTTP requests.                                                          |
| `cors`          | To enable Cross-Origin Resource Sharing — allowing frontend apps from other domains to access your backend API. |
| `dotenv`        | To load environment variables from a `.env` file into `process.env`.                                            |
| `express`       | The core Node.js web framework — used to build APIs and handle HTTP requests/responses.                         |
| `jsonwebtoken`  | To create and verify JWT (JSON Web Tokens) for authentication and authorization.                                |
| `mongoose`      | To interact with MongoDB easily using schemas and models.                                                       |
| `multer`        | To handle file uploads (like images, PDFs, etc.) via multipart/form-data in Express applications.               |

- to install you can simply type the below command in your terminal

  ```bash
  npm install bcryptjs cloudinary cookie-parser cors dotenv express jsonwebtoken mongoose multer
  ```

> It will take some time to install. So sit back and relax 😄

- After installing, open `package.json` again and you can view a new key named `dependencies`.

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cloudinary": "^2.8.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.19.3",
    "multer": "^2.0.2"
  }
}
```

- And And... you can also view a `node_modules` folder created in your server folder. This `node_modules` folder contains all the code for these libraries you just installed.

- Oops! I just forgot another important library which we need in our project. So quickly open the terminal and install `nodemon` and save it as dev dependency so it will be used only in the development mode. Use the below command to install :

  ```bash
  npm install nodemon --save-dev
  ```

- after installing this, you can view the `package.json` again and you can see a key named `devDependencies`

```json

  "devDependencies": {
    "nodemon": "^3.1.11"
  }

```

---

<br><br>

> ### Step - 03

Now, let's configure some things in `package.json` file 😄

- Add type module `"type": "module"` below `"main"`.

```json
{
  "main": "server.js",
  "type": "module"
}
```

> When we do this, we will be able to use ES Modules (ECMAScript Modules) syntax instead of the old CommonJS syntax.

That means, instead of writing:

```bash
const express = require('express');
```

We can now write:

```bash
import express from 'express';
```

- Then, under `"scrips"` you can remove `"test"` if you need. Then add `"server": "nodemon server.js"` like shown below:

```json
{
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  }
}
```

- #### What this does:

- `node server.js` → Runs your server **once** (classic way).
- `nodemon server.js` → Runs your server **continuously**, automatically restarting whenever you save changes.

> That’s why this `"server"` script is super helpful during development — you don’t need to manually stop and restart the server every time you change code.

---

<br> <br>

#### 🎉 Hurray! We have completed the backend setup by installing necessary packages wee need.

##### Next, I will be helping you how to create a Server using `ExpressJs`.
