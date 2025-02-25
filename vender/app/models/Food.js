// THE MODEL

export class Food {
  constructor(nameGiven, priceGiven, emojiGiven, amountOrderedGiven) {
    this.name = nameGiven
    this.price = priceGiven
    this.emoji = emojiGiven
    this.amountOrdered = amountOrderedGiven
    console.log('Here is', this)

  }
  name = ''
  price = 0
  emoji = ''
  amountOrdered = 0

  get addedHTML() {
    return `        <div class="col-4">
          <div class="card shadow mb-4">
            <div class="card-header">${this.name} ${this.emoji}</div>
            <div class="card-body d-flex justify-content-between align-items-center">${this.price} coins
              <button class="btn btn-primary text-white">Buy</button>
            </div>
          </div>
        </div>`
  }

}