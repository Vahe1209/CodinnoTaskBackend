const RestaurantModel = require("../model/restaurant");
const RestaurantController = {
  async getRestaurants(req, res, next) {
    const restaurantList = await RestaurantModel.find();
    return res.json({
      restaurantList,
    });
  },
  async getRestaurantById(req, res, next) {
    const { restaurantId } = req.body;
    const restaurantWithComments = await RestaurantModel.findById(
      restaurantId
    ).populate("comments");
    return res.json({
      restaurantWithComments,
    });
  },
};

module.exports = RestaurantController;
