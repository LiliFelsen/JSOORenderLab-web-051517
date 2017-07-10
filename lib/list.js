class List {
  constructor(data) {
    this.items = []
  }

  addItem(name, price) {
    let item = new Item(name, price)
    this.items.push(item)
  }

  removeItem(name, price) {
    this.items = this.items.filter(item => {return item.name !== name && item.price !== price})
  }

  renderList() {
    return this.items.map(item => item.renderListItem()).join('')
  }

}
