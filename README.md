# Pet Fast Job

## APIs using Express + MongoDB


## Features

These APIs are developed using the Express framework, known for its robust routing and excellent support for middlewares. The choice of Express was driven by Node.js' non-blocking input/output operations and its use of the V8 JS engine, which contribute to the fast performance of Express apps.

MongoDB is used as the database for these APIs. It is a fully-managed cloud database that simplifies the deployment, management, and scalability of your database on popular cloud service providers like AWS, Azure, and GCP.

To enhance the security of our APIs, we have implemented Helmet.js and CORS, which provide protection against scripting attacks.

The codebase follows a strict separation of concerns, ensuring that the controller, business logic, and data access layers are properly organized and decoupled.

## How to Start the Project

To start the project, follow these steps:

1. Clone the repository to your local machine: git clone https://github.com/your-username/your-repo.git


2. Navigate to the project directory: cd Pet-Fast-job


3. Install the dependencies: npm install


4. Create a [`.env`] file in the root directory of the project and add the necessary environment variables. 
For example: PORT=3000 SECRET_KEY="sfhvhvhfjfjjsgfgdfgdf" MONGODB_URL=mongodb://localhost:27017/mydatabase api='HxgWJhvhgGBln3lEF'


5. Start the server: npm start


6. You should see a message indicating that the server is running on the specified port.

