# Jobify

Welcome to Jobify! This backend-focused project is designed to help students find job opportunities and internships. Built using Node.js and Express.js, Jobify provides a robust API for managing job listings, user authentication, and application tracking.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- CRUD operations for job listings
- User profile management
- Job application tracking
- RESTful API

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variable management

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ISHAAN-KKR/Jobify.git
   cd Jobify
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   DEV_MODE=development
   ```

4. **Connect to MongoDB**:
   Ensure your MongoDB instance is running and `MONGODB_URI` in the `.env` file is correctly set.

5. **Start the server**:
   ```bash
   npm start
   ```

6. **Use nodemon for development**:
   ```bash
   npm run server
   ```

## Configuration

Ensure you have a MongoDB instance running and update the `MONGODB_URI` in the `.env` file with your database connection string.

## Usage

### Running the Server

To start the server, use the following command:
```bash
npm start
```

The server will be running on `http://localhost:3000` by default.

### API Documentation

Below are the main API endpoints available:

## API Endpoints

### Authentication

- **Register User**
  - `POST /api/v1/auth/register`
  - Request Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`

- **Login User**
  - `POST /api/v1/auth/login`
  - Request Body: `{ "email": "john@example.com", "password": "password123" }`

### User Profile

- **Get User Profile**
  - `GET /api/v1/users/profile`
  - Headers: `Authorization: Bearer <token>`

- **Update User Profile**
  - `PUT /api/v1/users/profile`
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "name": "John Doe", "email": "john@example.com", "password": "newpassword123" }`

### Job Listings

- **Get All Jobs**
  - `GET /api/v1/jobs`

- **Get Job by ID**
  - `GET /api/v1/jobs/:id`

- **Create Job**
  - `POST /api/v1/jobs`
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "title": "Software Engineer", "company": "Tech Co", "location": "Remote", "description": "Job description here..." }`

- **Update Job**
  - `PUT /api/v1/jobs/:id`
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "title": "Updated Title", "company": "Updated Company", "location": "Updated Location", "description": "Updated description..." }`

- **Delete Job**
  - `DELETE /api/v1/jobs/:id`
  - Headers: `Authorization: Bearer <token>`

### Job Applications

- **Apply for Job**
  - `POST /api/v1/jobs/:id/apply`
  - Headers: `Authorization: Bearer <token>`
  - Request Body: `{ "resume": "link_to_resume", "coverLetter": "cover letter text" }`

- **Get Applications for Job**
  - `GET /api/v1/jobs/:id/applications`
  - Headers: `Authorization: Bearer <token>`

## Contributing

We welcome contributions to enhance the project! To contribute, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make your changes and commit them**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature
   ```
5. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out Jobify! We hope this project helps you in your journey to find exciting job opportunities. If you have any questions or feedback, feel free to reach out. Happy coding!