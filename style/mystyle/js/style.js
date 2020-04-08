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


$(document).ready(myClick);

function myClick(){
  $('#button').click(myAdd);
  $(document).on('click','.item','flow-butoon',myRemove);
}
  function myAdd(){
  var listItem = $('input[name=textbox]').val();
  $('.toList').append('<button class="item flow-butoon">' + listItem + '<span class="del ml-3">X</span></button>');
  $('.yoxdu-bele').val("");
  }

  
function myRemove(){
    $(this).remove();
}


$(document).ready(function(){
  $("#asigment-create").click(function(){
    var tas =$("<button class='as-bub'></button>").text($(".asigment-create").val());
    var de=$("<span class='ml-3'>x</span>").click(function(){
      var p = $(this).parent('.as-bub').remove(); 
    });
    tas.append(de);
    $(".as-b").append(tas);
    $('.asigment-create').val("");

  });
});


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

