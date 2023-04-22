require ('dotenv').config();

module.exports = {
    port : process.env.PORT,
  firtsname: process.env.FIRST_NAME,
  lastname: process.env.LAST_NAME,
  town: process.env.TOWN,
  population:process.env.POPULATION,
}  
