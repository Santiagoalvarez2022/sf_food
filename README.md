# SFood

Food is a comprehensive app that displays food locations on a map of San Francisco using data from SF Open Data.

## 🚀 Features

- 🗺️ Interactive map with markers and vendor info
- 📍 Click on the map to find food vendors nearby
- 🔄 Real-time fetching from [SF Open Data API](https://data.sfgov.org/Education/Mobile-Food-Facility-Permit/rqzj-sfat)
- 🎯 Radius detection based on click location

## 📦 Project Structure

```
sfood/
sfood/
|───api/                     # Express backend
|    │
|    ├── config/              # Sequelize database configuration and instance
|    │   └── database.js
|    │
|    ├── controllers/         # Logic to handle incoming requests and shape responses
|    │
|    ├── middleware/          # Middlewares (e.g., token verification for protected routes)
|    │
|    ├── models/              # Sequelize models representing DB tables
|    │
|    ├── routes/              # Route definitions and main router
|    │   └── index.js
|    │
|    ├── services/            # External API logic (e.g., SF Data API)
|    │                        # Includes request functions and their controllers
|    │
|    ├── utils/               # Utility functions (e.g., distance calculation, data normalization)
|    │
|    ├── app.js               # Express app: sets up middlewares, routes, parsers, etc.
|    └── server.js            # Entry point: connects to DB and starts the server


client/
├── public/                   # Static public files (e.g., favicon, manifest)
├── src/                      # Main source code
│   ├── __tests__/            # integration tests 
│   ├── assets/               # Static assets 
│   ├── components/           # Reusable React components
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Main views/pages 
│   ├── services/             # HTTP request logic (axios instances)
│   ├── utils/                
│   ├── index.css             # Base/global styles
│   ├── main.jsx              # Root component of the app
│   └── setupTests.js         # Testing environment setup (e.g., Testing Library)
├── .env                      # Environment variables
├── .gitignore                # Files and folders ignored by Git
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML file where React mounts
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact version locks for dependencies
└── README.md                 # Project documentation
```

## 🧪 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/sfood.git
cd sfood
```

### 2. Install dependencies

```bash
# Backend
cd api
npm install

# Frontend
cd client
npm install
```

### 3. Run the project

```bash
# In one terminal
cd api
npm run dev

# In another terminal
cd client
npm run dev
```
### 3. Run the test in frontes

```bash
npm run test

```

## 🌐 Environment Variables

### Backend (`api/.env`)
```
Example 

PORT=3001
DEV=development
PG_USER=postgres
PG_PASSWORD=salvarez
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=sffood
API_DATA_SF=https://data.sfgov.org/resource/rqzj-sfat.json
JWT_SECRET="SFffoodKindalab"
URL_FRONTEND="https://localhost:3000"
NODE_ENV='development' 
```

### Frontend (`client/.env`)

```
Example 

VITE_API_GOOGLE_MAPS=AIzaSyBtCmZPwfQMvD48zFH57cUDESpLsGjcu9Q
VITE_API=https://localhost:3001/api
VITE_NODE_ENV=development

```

## HTTPS Setup for Backend and Frontend (Required for HTTP-only Cookies)

To properly handle HTTP-only cookies (such as authentication tokens) between the client and the server, both the backend and frontend must run over HTTPS during development.

For that reason, we generate a pair of SSL certificates:

cert.pem — the public certificate

key.pem — the private key

These certificates are required to enable HTTPS locally and allow secure cookie transmission.

### 📁 Expected Paths

```
api/certs/cert.pem
api/certs/key.pem

These files should be placed under the api/certs/ directory.
```





### 📌 POST `/user/create`

#### 🧾 Request Body:
```json
{
  "nickname": "exampleUser",
  "password": "securePassword123"
}

```


#### 🧾 Success Response
```json

"User created successfully"
```


### 📌 POST `/user/login`

#### 🧾 Request Body:
```json
{
  "nickname": "exampleUser",
  "password": "securePassword123"
}

```


#### 🧾 Success Response
```json

{
  "nickname": "exampleUser"
}

Se genera un token JWT y se guarda como cookie segura con las siguientes características:

httpOnly: true → no accesible desde JavaScript en el cliente.

secure: true → solo se transmite por HTTPS.

sameSite: 'None' → se permite enviar en peticiones cross-site.

maxAge: 8 horas.
```



### 📌 POST `/user/logout`




```json

{
  "message": "Logout succefully"
}

🧹 Acción realizada:
Se elimina la cookie con el token JWT, sobrescribiéndola con:

httpOnly: true → no accesible desde JavaScript en el cliente

secure: true → solo se transmite por HTTPS

sameSite: 'None' → se permite enviar en peticiones cross-site

expires: new Date(0) → expira inmediatamente

Esto revoca el token en el navegador, cerrando la sesión del usuario.
```

### 📌 GET /data
🧾 Query Parameters (optional):
type: Filter facilities by type. Possible values:

"Truck"

"Push Cart"

🧾 Success Response
```
[
  {
    "name": "Example Food Truck",
    "location": "123 Market St",
    "type": "Truck",
    ...
  },
  ...
]
```
### 📌 POST /data/search

#### 🧾 Request Body:
```json
{
  "lat": 37.7749,
  "lng": -122.4194
}

```

🧾 Success Response
```
[
  {
    "name": "Example Food Truck",
    "location": "123 Market St",
    "type": "Truck",
    ...
  },
  ...
]
```

### 📌 POST /favorites

The user information is obtained from the token, which is decoded in the authentication middleware

#### 🧾 Request Body:
```

{
  "name": "Some Place",
  "address": "123 Example St",
  "lat": "37.7749",
  "lng": "-122.4194",
  ...
}
```

🧾 Success Response
```

{
  "id": "a12f3456-7890-4abc-def1-234567890abc",
  "lat": 37.7749,
  "lng": -122.4194,
  "objectid": "001234",
  "applicant": "El Taco Loco",
  "fooditems": [
    "Tacos",
    "Burritos",
    "Sodas"
  ],
  "facilitytype": "Truck"
}
```
### 📌 GET /favorites
The user information is obtained from the token, which is decoded in the authentication middleware


🧾 Success Response
```
[
  {
    "id": "a12f3456-7890-4abc-def1-234567890abc",
    "lat": 37.7749,
    "lng": -122.4194,
    "objectid": "001234",
    "applicant": "El Taco Loco",
    "fooditems": [
      "Tacos",
      "Burritos",
      "Sodas"
    ],
    "facilitytype": "Truck",
    "isFav": true
  }, ... ]
```

# 🍔 SF Food Trucks - Frontend

This is the frontend for the **SF Food Trucks App**, a web application that allows users to explore food trucks and push carts around San Francisco.

## 📌 Features

- 🗺️ **Browse food locations** around San Francisco (Trucks & Push Carts).
- 🔍 **Filter by type**: View only "Truck" or "Push Cart" vendors.
- 📍 **Find nearby vendors**: Select a place and discover others close to your location.
- 💾 **Save favorites**: Create an account and save your favorite food locations.

### ⚙️ Tech Stack
- **React**
- **Vite**
- **React Router dom**
- **Axios**
- **TailwindCSS**

## 🌐 Frontend Routes

The application uses `react-router-dom` to handle routing on the client side.

| Route        | Component       | Description                                                                 |
|--------------|------------------|-----------------------------------------------------------------------------|
| `/`          | `Home`           | Landing page of the app. General info or a welcome screen.   |
| `/map`       | `MapContainer`   | Main page with the map. Shows all vendors and allows interaction.          |
| `/auth`      | `Auth`           | Login and registration page for users.                                     |
| `/error`     | `ErrorPage`      | Generic error fallback page.                                               |


## 🗃️ Database Schema

The database contains the following main tables:

- **User**: Represents registered users.
- **FavoritePlaces**: Stores places saved by users as favorites.


### 🔗 Relationships

- A **User** has a **one-to-many (1:N)** relationship with **FavoritePlaces**.
- Each **FavoritePlace** belongs to a single **User**.
- The field **`fooditems`** in **FavoritePlaces** is an array of strings representing the food options available at the place.

### 📷 Diagram


![Database Diagram](./docs/db-diagram.png)
