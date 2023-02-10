var products=[];

function formData()
{    
    var pName = document.forms["myform"]["pname"].value;
    var uRL =  document.forms["myform"]["img"].value;  
    var pPrice = document.forms["myform"]["price"].value;
    var pDescription = document.forms["myform"]["description"].value;
    //alert("Product name is  " + pName + " Product URL is:" + uRL + "Product price is  " + pPrice + "Product description is:" + pDescription);

    var productList = {
        prod : pName,
        url : uRL,
        price : pPrice,
        desc : pDescription
    };
    products.push(productList);
    renderProducts();
      
}


function renderProducts() {
  html$ = ''; 

for(var key in products){
html$ +=`
    <div class="items">
       <div class="img img1"><img src = "${products[key].url}"></div>
        <div class="name">${products[key].prod}</div>
          <div class="price">Price:${products[key].price}</div>
           <div class="info">${products[key].desc}</div>
           <button style="border-radius: 8px;" onClick="deleteItem(this)">Delete</button>
           <button style="border-radius: 8px;" onClick="editItem(this)">Edit</button>
         </div>`;
         
}

document.getElementById("result").innerHTML = html$ ;
restForm();

}


function restForm(){
  document.getElementById("myform").reset();

}
function deleteItem(e){
  alert("Are you sure you want to delete? ");
    e.parentElement.remove();

}
function editItem(e){
  let selectedTask = e.parentElement;
  document.forms["myform"]["pname"].value = selectedTask.children[1].innerHTML;
  let text = selectedTask.children[0].innerHTML;
  const chars = text.split('"');
  document.forms["myform"]["img"].value = chars[1]; 

  let price = selectedTask.children[2].innerHTML.substr(6,12);
 
  document.forms["myform"]["price"].value = parseInt(price);
  document.forms["myform"]["description"].value = selectedTask.children[3].innerHTML;

  selectedTask.remove();
}