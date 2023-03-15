
const bannerImg=document.querySelectorAll("#slide-img");
  
var i=0;
bannerImg.forEach(function(slide,index){
        slide.style.left = `${index*100}%`;
    }
)


function sliding_img(){
    bannerImg.forEach(function(slide){
            slide.style.transform= `translateX(-${i*100}%)`;
            })
        if(i==5) i=3;
        else if(i==4){
            i=0;
        } 
    }



setInterval(function(){
            i++;
        sliding_img();
    },4000);


// show product description


var item=[
    {
        'id':0,
        'name':"Pizza",
        'src':"img/p1.jpg" ,
        'price':150
    },
    {
        'id':1,
        'name':"Burger",
        'src':"img/p7.jfif" ,
        'price':400
    },
    {
        'id':2,
        'name':"momo",
        'src':"img/p4.jpg" ,
        'price':300
    },
    {
        'id':3,
        'name':"Chicken Biryani",
        'src':"img/p9.jpg" ,
        'price':350
    },
    {
        'id':4,
        'name':"mutton curry",
        'src':"img/p10.webp" ,
        'price':650
    },
    {
        'id':5,
        'name':"Fish fry",
        'src':"img/p11.jfif" ,
        'price':450
    },
    {
        'id':6,
        'name':"Noodles",
        'src':"img/p6.jpg" ,
        'price':350
    }

];





const x=document.querySelector('.show-item');
x.classList.add('hide-details');


function show(id){
    
var pd_img=document.getElementById('Img');
var text= document.querySelectorAll('.name');
var val=document.getElementById('price');
//change img src
pd_img.src=item[id].src;
//change all text
text.forEach(function(a){
    a.innerText=item[id].name;
});

//change price
val.innerText=`${item[id].price}`;
console.log(item[1].price)

//show the div

x.classList.remove('hide-details');
};

function showOff(){
    x.classList.add('hide-details');

}

//change button color after click
// var btn_1=document.getElementById(`${id}`);
//     btn_1.style.backgroundColor="red";




