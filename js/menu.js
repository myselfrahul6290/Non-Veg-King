var menu_list=[
     {
        'id':0,
        'src':"img/p1.jpg",
        'name':"Pizza",
        'price': 150

     },
     {
        'id':1,
        'src':"img/p2.jfif",
        'name':"Chicken",
        'price': 250

     },
     {
        'id':2,
        'src':"img/p3.jpg",
        'name':"KFC Chicken",
        'price': 550

     },
     {
        'id':3,
        'src':"img/p4.jpg",
        'name':"momo",
        'price': 300

     },
     {
        'id':4,
        'src':"img/p5.webp",
        'name':"wow! momo",
        'price': 150

     },
     {
        'id':5,
        'src':"img/p6.jpg",
        'name':"Noodles",
        'price': 350

     },
     {
        'id':6,
        'src':"img/p7.jfif",
        'name':"Burger",
        'price': 400

     },
     {
        'id':7,
        'src':"img/p9.jpg",
        'name':"Chicken Biryani",
        'price': 350

     },
     {
        'id':8,
        'src':"img/p10.webp",
        'name':"mutton curry",
        'price': 650

     },
     {
        'id':9,
        'src':"img/p11.jfif",
        'name':"Fish fry",
        'price': 450

     }

];

var total_amt= 0;
var total_item=0;
function buy(it){
    total_item +=1;
   

    var buy_pd=document.createElement('div');
    buy_pd.classList.add('item');
    //set id on list cart item
    buy_pd.setAttribute("id", it);

     var img=document.createElement('img');
     img.setAttribute('src', menu_list[it].src);
    
    
     var pd_name=document.createElement('h2');
     pd_name.classList.add('cart-text');
     pd_name.innerText=menu_list[it].name;

     var pd_price=document.createElement('h2');
     pd_price.classList.add('cart-text');
     pd_price.innerText=`₹${menu_list[it].price}`;
    
    var remove=document.createElement('h2');
    remove.innerText='remove';
    remove.setAttribute('onclick', 'delete_item('+it+')' );
    remove.classList.add('del');

  total_amt = total_amt+menu_list[it].price;

document.getElementById('amt').innerText=total_amt;
document.getElementById('item-count').innerText=total_item;

    var cart_item=document.getElementById('pd');
    buy_pd.append(img);
    buy_pd.append(pd_name);
    buy_pd.append(pd_price);
    buy_pd.append(remove);
    cart_item.append(buy_pd);

}


function delete_item(it){
 document.getElementById(it).remove();

 //decress the price
 total_amt = total_amt - menu_list[it].price;
document.getElementById('amt').innerText=total_amt;
   
//decress the number of product
total_item -=1;
document.getElementById('item-count').innerText=total_item;

}
