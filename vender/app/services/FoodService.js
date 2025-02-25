import { AppState } from "../AppState.js";

export class FoodService {

}

getMoney() {
  AppState.wallet++
  console.log(AppState.wallet)
}
