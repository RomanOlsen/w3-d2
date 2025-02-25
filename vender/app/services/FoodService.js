import { AppState } from "../AppState.js";

class FoodService {

  getMoney() {
    AppState.wallet++
    console.log(AppState.wallet)


  }
}

export const foodService = new FoodService()