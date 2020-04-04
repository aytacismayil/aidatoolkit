$('.popover-dismiss').popover({
    trigger: 'hover'
});

$(document).ready(function(){
    $('.btn-menu').on('click', function(){
      $(this).toggleClass('btn-menu_active');
      $('.popap').toggleClass('popap_active');
      $('.popap-bg').toggleClass('popap-bg_active');
    });
    
  });

  var cl=document.querySelector('.commit-cange-button');
  cl.addEventListener('click',myFunction);

  function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIVc");
    if ((x.style.display === "none") &&(y.style.display === "block")) {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }

