import { AppState } from "../AppState.js";
import { FoodController } from "../controllers/FoodController.js";

new class FoodService {

  getMoney() {
    AppState.wallet++
    console.log(AppState.wallet)

    FoodController.drawWallet()
    new FoodController
  }
}

