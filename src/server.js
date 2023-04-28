const app = require ('./app.js');
const {db,env} = require('./configs');

const MONGO_URL = env.dbUrl;
const port = env.port || 8000; 

//create your server
const start = async  () => {
    try {
        const connected = await db(MONGO_URL);
        if (connected) {
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
          });
        }
    } catch  (error) {
        console.error(error.message);
    }
}
start();