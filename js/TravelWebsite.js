var navBar = document.getElementById("navBar");
function togglebtn(){
    navBar.classList.toggle("hidemenu");
}

function mfnc() {
    const element = document.getElementById("id6");
    element.scrollIntoView();
  }
  function mfnc2() {
    const element = document.getElementById("id5");
    element.scrollIntoView();
  }
  function mfnc3() {
    const element = document.getElementById("id4");
    element.scrollIntoView();
  }
  function mfnc4() {
    const element = document.getElementById("id3");
    element.scrollIntoView();
  }
  function mfnc5() {
    const element = document.getElementById("id2");
    element.scrollIntoView();
  }
  function mfnc6() {
    const element = document.getElementById("id1");
    element.scrollIntoView();
  }





  function funcmoto() {
    const element = document.getElementById("moto");
    element.scrollIntoView();
  }
  function functrain() {
    const element = document.getElementById("train");
    element.scrollIntoView();
  }
  function funcplane() {
    const element = document.getElementById("plane");
    element.scrollIntoView();
  }
  function funccar() {
    const element = document.getElementById("car");
    element.scrollIntoView();
  }
  function funcwalking() {
    const element = document.getElementById("walk");
    element.scrollIntoView();
  }
  



  
// ----------------cart----------------------------
const btn = document.querySelectorAll("#read-more-btn")
btn.forEach(function(button,index){
  button.addEventListener("click",function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productName = product.querySelector("p").innerText
    var productPrice = product.querySelector("span").innerText
    addCart(btnItem,product,productName,productPrice)
  })
})

function addCart(btnItem,product,productName,productPrice){
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
    var productSelect = document.querySelectorAll(".title")
    if(productSelect[i].innerHTML == productName){
      alert("Chuyến đi của bạn đã có trong giỏ hàng")
      return
    }
  }
  var trcontent = '<tr><td class="title">'+productName+'</td><td><p><span class="prices">'+productPrice+'</span><sub>đ</sub></p></td><td><input type="number" value="1" min="1"></td><td><span class="delete-cart">Delete</span></td></tr>'
  addtr.innerHTML = trcontent
  var cartTable = document.querySelector("tbody")
  cartTable.append(addtr)
  carttotal()
  deleteCart()
}

function carttotal(){
  var cartItem = document.querySelectorAll("tbody tr")
  itemPriceTotal = 0
  for(var i=0;i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector(".prices").innerHTML
    itemMultiple = inputValue*productPrice
    itemPriceTotal = itemPriceTotal + itemMultiple
  }
  var total = document.querySelector(".price-total span")
  var cartPrice = document.querySelector(".cart-icon span")
  total.innerHTML = itemPriceTotal.toLocaleString('de-DE')
  cartPrice.innerHTML = itemPriceTotal.toLocaleString('de-DE')
  inputChange()
}

// --------------delete cart items------------------------
function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
      var productSelect = document.querySelectorAll(".delete-cart")
      productSelect[i].addEventListener("click",function(event){
          var cartDelete = event.target
          var cartItemDelete = cartDelete.parentElement.parentElement
          cartItemDelete.remove()
          carttotal()
      })
  }
}

const purchaseBtn = document.querySelector(".purchase-btn");
purchaseBtn.addEventListener("click",function(){
  alert("Cảm ơn bạn vì đã tin tưởng sử dụng dịch vụ của chúng tôi");
})


const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "-100%"
})

function inputChange(){
  var cartItem = document.querySelectorAll("tbody tr")
  console.log(cartItem)
  for(var i=0;i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change",function(){
      carttotal()
    })
  }
}




