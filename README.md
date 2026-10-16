# WTWR (What to Wear?): Back End

The back end of the WTWR application: a REST API server that stores users and
clothing items and handles registration, login, and authorization. The front end
uses it to show clothing suggestions based on the current weather, let users
save their own items, and like or unlike items.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

## Technologies and Techniques

- **Node.js** and **Express.js** for the server and routing
- **MongoDB** with **Mongoose** for schemas, models, and data validation
- **JSON Web Tokens** (`jsonwebtoken`) for authorization and **bcryptjs** for
  password hashing
- **celebrate / Joi** and **validator** for validating incoming request data
- **Centralized error handling:** custom error classes (in `errors/`) passed to
  a single error-handling middleware with `next()`
- **winston** and **express-winston** for request logging (`request.log`) and
  error logging (`error.log`)
- **cors** for cross-origin requests from the front end
- **ESLint** (Airbnb base) and **Prettier** for code style
- **dotenv** for environment variables
- **Deployment:** Google Cloud virtual machine (Ubuntu), **nginx** as a reverse
  proxy, **PM2** to keep the server running and restart it after a crash, and
  **HTTPS** certificates from Let's Encrypt (certbot)

Video Demonstration:
https://www.loom.com/share/a8617be570764cf7a9a9d2b0b1eff330

Deployed Project Link:
https://www.weatherboy.jedimasters.net
https://api.weatherboy.jedimasters.net

Front End Repo:
https://github.com/srulapaugh/se_project_react
