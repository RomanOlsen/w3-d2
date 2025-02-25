import { Food } from './models/Food.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  wallet = 0

  menu = [
    new Food('Eggs', 2, '🍳', 1),
    new Food('Sausage', 4, '🌭', 1),
    new Food('Bacon', 4.5, '🥓', 1),
    new Food('Hot Sauce', 1.5, '🥫', 1),
    new Food('Pizza', 3, '🍕', 1),
    new Food('Steak', 7, '🥩', 1),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())