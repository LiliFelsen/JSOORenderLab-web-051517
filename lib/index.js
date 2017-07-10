$(function() {
    const list = new List()
    const cart = new Cart()
    listListener(list)
    moveFromListToCart(list, cart)
});

function listListener(list){
  $('button').on("click", function(){
    let name = $('#name').val()
    let price = $('#price').val()
    console.log($('#name').val(), $('#price').val())
    list.addItem(name, price)
    $('.list').html(list.renderList())
    $('#name').val('')
    $('#price').val('')
  })
}

function moveFromListToCart(list, cart){
  $('.list').on("click", ".add-cart", function(event){
    event.preventDefault()
    let itemName = $(event.target).data().name
    let itemPrice = $(event.target).data().price
    list.removeItem(itemName, itemPrice)
    $('.list').html(list.renderList())
    cart.addItem(itemName, itemPrice)
    $('.cart').html(cart.renderCart())
  })
}
