const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT || 4000,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    dbUsername: process.env.DB_USERNAME,
}