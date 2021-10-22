import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js";
dotenv.config()

const mongoClient=mongodb.MongoClient

const port =process.env.PORT||8000

mongoClient.connect("mongodb://127.0.0.1:27017",{
    maxPoolSize:50,
    wtimeoutMS:2500
}).catch(err=>console.log(err)).then(async client=> {
    const result=await client.db("carding").collection("Reports").insertOne({"abc":"bed"});
    console.log(result)

    const allDatabases=await client.db().admin().listDatabases()
    allDatabases.databases.forEach(db=>{
        console.log(db)
    })
    // RestaurantsDAO.injectDB(client)
    // app.listen(port, () => console.log("Listening on port"))
}
)