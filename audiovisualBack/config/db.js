import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()


const connectionMongoDB = async () =>{
console.log(process.env.PORT);
    try {
        
        const conn = await mongoose.connect(process.env.MONGO);
        console.log("conexion con Mongo exitosa *>*")
        
    } catch (error) {
        console.log(`ÈRROR: ${error.message}`);
        process.exit(1);
    }
}


export default connectionMongoDB;