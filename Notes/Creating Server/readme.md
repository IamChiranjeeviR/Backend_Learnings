# Simple Server Creation

below points explains how to create a server using `ExpressJs`

> Note: Before creating the server, make sure that you have setup the project correctly. If not, first click on this link [Project setup link](https://iamchiranjeevir.github.io/Backend_Learnings/Notes/ProjectSetup/) and you will find a guide on setting up the project.

- After setting up the project, you can follow the below steps to create a simple express server

<br>
<br>

### Step - 01

😄 Import `Express`.

- on `server.js` file add the below code:

  ```bash
  import express from "express";
  ```

- This will import the `Express Module` and stores the module inside `express` variable. This express variable is called as `Imported Binding` or `Imported Identifier`.

<br>
<br>

### Step - 02

Creating new Express Application

- after importing the Express Module, you wll have to create an express application by calling `express()` module/function

  ```bash
  const app = express();
  ```

- so your code will look like this :

  ```bash
  import express from "express";
  const app = express();
  ```

So you are calling `express()` method/function here. This method creates a `New Express Application(an object that represents your web server)`.

And you are storing the `Express Application` inside a `const` variable `app`

<br>
<br>

### Step - 03

Let's create a small `API Endpoint`.

- use this below code:

  ```bash
  app.get("/", (req, res) => {
    res.send("Api is working");
  });
  ```

- so your code on `server.js` will look like this :

  ```bash
  import express from "express";
  const app = express();

  app.get("/", (req, res) => {
    res.send("Api is working");
  });
  ```

Now, let me explain what is happening.

`app.get()` defines a GET route on your Express app.

> Note: `GET` is the `HTTP method`, which is commonly used to `fetch data` from the server.

So that is the reason I used `GET` so when any user uses this `API`, we can send them a response data 😄.

Then `"/"` is the path. In Express, a path (or route path) is the URL endpoint where your server will respond to requests.

- Example paths:

  - `/` → root of the server
  - `/users` → users endpoint
  - `/products/123` → specific product endpoint

So `"/"` is called the root path. It corresponds to the `base URL` of your server. If your server runs on `http://localhost:4000`, then `/` means http://localhost:4000`/`.

Then, `app.get("/", (req, res) => {})` specifically `req` and `res` are parameters where `req` has the request which is made by the `USER` and `res` contains the response which we send from our `API`.

Then inside the call back function `=> { ...code... }` we will write our response code.

This line `res.send("Api is working");` simply sends the response back to the user.

> Don't be panic by seeing the code, This is just simple JavaScript Buddy 😄.

<br>
<br>

### Step - 04

Finally 😄, Let's Statrt our Express Server

- Add this below code :

  ```bash
  app.listen(4000, () => {
  console.log(`server is running on http://localhost:${port}`);
  });
  ```

- so your code on `server.js` will look like this :

  ```bash
  import express from "express";
  const app = express();

  app.get("/", (req, res) => {
    res.send("Api is working");
  });

  app.listen(4000, () => {
  console.log(`server is running on http://localhost:${port}`);
  });
  ```

Let's Understand the above code

`app.listen()` is an Express method that starts your server. To start the server, it needs a `PORT` which is `4000` in the above code.

- ##### What is Port?
  > Think of your computer as a building, The IP address is the building’s street address or building name. `The port is a specific room number inside that building`. So if you send a letter (data) to the building, you also need the room number (port) so it reaches the right person/program/room.

So, if you check our API URL:
`http://localhost/4000` it is nothing but `http://(IP address)/(port number)`

In networking terms, IP address → identifies a device on a network and Port → identifies a specific process or service on that device.

I hope this was very clear 😄

#### ✅ In short:

- app.listen(`4000`,()=>{...code...}) starts the server on a given port `4000` and optionally runs a callback once the server is ready. After this, your Express app can handle incoming requests.

<br>
<br>

# Step - 05

Let's run the code.

- Since you have already done the setup of `nodemon`, you can simply open the `Terminal` and paste the below command :

  ```bash
    npm run server
  ```

- and you will view an output as :

  ```bash

  > server@1.0.0 server
  > nodemon server.js

  [nodemon] 3.1.11
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,cjs,json
  [nodemon] starting `node server.js`
  server is running on http://localhost:4000
  ```

Hurray, Your server is running successfully 😄

Now, open your web browswr and type call the URL `http://localhost:4000` and add `/` to make a request to our `/`.

so you will have to type `http://localhost:4000/`. When you do this, a request is sent from your browser to the Server which is running in your system.

Then, our server will respond to you saying `Api is working` 😄.

<br>
<br>
---

<br>
<br>

## I hope you understood this simple server creation..

<br>
<br>

<br>
<br>
