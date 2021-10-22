import RestaurantsDAO from "../dao/restaurantsDAO.js";
export default class RestaurantsController{
    static async apiGetRestaurants(req,res) {
        const restaurantsPerPage = 20
        const page = req.query.page||0


        let filters = {}
        if (req.query.cuisine) {
            filters.cuisine=req.query.cuisine
        }else  if (req.query.zipcode) {
            filters.zipcode=req.query.zipcode
        }else  if (req.query.name) {
            filters.name=req.query.name
        }

        const {restaurantsList,totalRestaurants}=
            await RestaurantsDAO.getRestaurants({filters,page,restaurantsPerPage})
        console.log(restaurantsList)
        let response={
            restaurants:restaurantsList,
            total:totalRestaurants
        }

        res.json(response)
    }
}