let restaurants

export default class RestaurantsDAO{
    static async injectDB(conn) {
        if (restaurants) return
        try {
            restaurants = await conn.db(process.env.R_NAME).collection("restaurants") //conn.db("databasename")

        } catch (e) {
            console.error(`Unable to establish a connection ${e}`)
        }
    }
    static async getRestaurants({
        filters=null,
        page=0,
        restaurantsPerPage=20
                                }={}){

        let query
        if(filters){
            if("name" in filters){
                query={$text:{$search:filters["name"]}}
            }else if("cuisine" in filters){
                query={"cuisine":{$eq:filters["cuisine"]}}

            }else  if("zipcode" in filters){
                query={"address.zipcode":{$eq:filters["zipcode"]}}

            }

        }

        let cursor

        try{
            cursor=await restaurants.find(query)
        }catch (e) {
            console.log(`Cannot execute query ${query} due to error ${e}`)
        }

        const displayCursor=cursor.limit(restaurantsPerPage).skip(restaurantsPerPage*page)
        try{
            const restaurantsList=await displayCursor.toArray()
            const totalRestaurants=await restaurants.countDocuments(query)
            return {restaurantsList,totalRestaurants}
        }catch (e) {
            console.error(`Error in creating list or counting num restaurants : ${e}`)
            return {restaurantsList:[],totalRestaurants:90}

        }


    }
}