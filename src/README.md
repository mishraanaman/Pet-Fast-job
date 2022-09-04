These are a set of APIs that are developed using the Express framework. I have used this framework due to its robust routing and great support for middlewares. Node.js’ non-blocking input/output operations and the fact that it interprets JS code through the V8 JS engine are the reasons why Express apps are fast.
Along with that I have used Mongo DB as the database as it is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP). 
I have used Helmet.js and CORS to provide extra security to our APIs from scripting attacks.
Separation of concerns is strictly followed while making these APIs, as a result the controller, business and DAO layer are carefully separated.
