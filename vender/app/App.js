import { FoodController } from './controllers/FoodController.js';

class App {

  foodController = new FoodController // ☑️ you can remove this - example only

}

window['app'] = new App() // this allows us access from browser console


