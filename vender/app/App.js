import { FoodController } from './controllers/FoodController.js';
import { FoodService } from './services/FoodService.js';

class App {

  foodController = new FoodController // ☑️ you can remove this - example only
  foodService = new FoodService
}

window['app'] = new App() // this allows us access from browser console


