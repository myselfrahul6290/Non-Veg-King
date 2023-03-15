//location js start
var btn=document.getElementById("loc-btn");
  var loc=document.querySelector('.location');
  var close=document.getElementById('close');

  loc.classList.add("hide");

  btn.addEventListener("click",function(){
      loc.classList.remove("hide");
      document.querySelector('.heading-footer').style.marginTop="75px";
  });
  close.addEventListener("click",function(){
      loc.classList.add("hide");
      document.querySelector('.heading-footer').style.marginTop="0px";
      
  });

