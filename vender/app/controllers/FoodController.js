import { AppState } from "../AppState.js"
import { foodService } from "../services/FoodService.js"

export class FoodController {
  constructor() {
    console.log('controller active')
    console.log(AppState.menu)
    this.drawHTML()
  }


  drawHTML() {
    let content = ''
    AppState.menu.forEach(menuItem => content += menuItem.addedHTML);
    document.getElementById('menu').innerHTML = content
  }

  drawWallet() {
    foodService.getMoney()

    document.getElementById('wallet').innerText = `Wallet: ${AppState.wallet}`
  }

}
