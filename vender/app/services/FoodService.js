import { AppState } from "../AppState.js";

class FoodService {

  getMoney() {
    AppState.wallet++
    console.log(AppState.wallet)
  }

  buyFood(foodname) {
    console.log('food!', foodname)
  }

}

export const foodService = new FoodService() 