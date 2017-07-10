class Cart {
  constructor(data) {
    this.items = []
  }

  addItem(name, price) {
    let item = new Item(name, price)
    this.items.push(item)
  }

  renderCart() {
    return this.items.map(item => item.renderCartItem()).join('')
  }

}
