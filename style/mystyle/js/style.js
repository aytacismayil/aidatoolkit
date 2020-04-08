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

$('.face-create').click(function(){
  $(this).css("background-color", "#576EA5");
});

$('.instag-create').click(function(){
  $(this).css("background-color", " #ED4B61");
});

$('.you-create').click(function(){
  $(this).css("background-color", "#FF0000");
});

$('.vkon-create').click(function(){
  $(this).css("background-color", "#5181B8");
});

$('.twither-create').click(function(){
  $(this).css("background-color", "#41ABE1");
});

$('.linki-create').click(function(){
  $(this).css("background-color", "#006394");
});


$('.create-p-sosial').click(function(){
  $(this).css("color", "white");
});


$('.yoxdu-bele').on('keyup',function(e){
  if(e.keyCode == 13 && $('yoxdu-bele').val() !=" ")
  {
    var taskk =$("<button class='flow-butoon'></button>").text($(".yoxdu-bele").val());
    var delT=$("<span class='ml-3'>x</span>").click(function(){
      var p = $(this).parent('.flow-butoon').remove(); 
      
    });
    taskk.append(delT);
    $(".flow-bu").append(taskk);
    $('.yoxdu-bele').val("");
  }
})

$('.asigment-create').on('keyup',function(e){
  if(e.keyCode == 13 && $('asigment-create').val() !=" ")
  {
    var tas =$("<button class='as-bub'></button>").text($(".asigment-create").val());
    var de=$("<span class='ml-3'>x</span>").click(function(){
      var p = $(this).parent('.as-bub').remove(); 
      
    });
    tas.append(de);
    $(".as-b").append(tas);
    $('.asigment-create').val("");
  }
})

$(document).on('input change', '.custom-1', function() {
  $('.ran-1').html( $(this).val() );
});

$(document).on('input change', '.custum-2', function() {
  $('.ran-2').html( $(this).val() );
});

$(document).ready(function(){
  $(".asas").click(function(){
    $(this).parent('.wew').remove();
  });
});

