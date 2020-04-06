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
    if ((x.style.display === "none") && (y.style.display === "block")) {
      x.style.display = "block";
      y.style.display = "none";
      cl.style.backgroundColor = "#FFFFFF";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      cl.style.backgroundColor = "#7AA93F";
    }
  }



  $(".flow-plus").click(function () {
    $(".vv").append('<input class="create-project-input form-control pt-1" placeholder="Start typing an employee s last name or nickname"></input> ');
 });

 var elet_create=document.querySelector('.flow-butoon')
 $(".flow-pluss").click(function () {
  $(".flow-bu").append('<button  class="flow-butoon"> Design <i class="fas fa-times"><i/></button>');
}); 

$(document).ready(function(){
    $(".fa-times").click(function(){
      $(this).parent('.flow-butoon').remove();
    });
  });

  $(document).ready(function(){
    $(".edit-button-img").click(function(){
      $(this).parent('.edit-curent-div-file').parent().remove();
    });
  });


  var elem=document.querySelector('.edit-file-begin');

  $(".edit-uppload").click(function () {
    $(".edit-files").append(elem);
 });

 $(document).ready(function(){
  $(".delete-edit-user").click(function(){
    $(this).parent('.edit-user-delete').remove();
  });
});