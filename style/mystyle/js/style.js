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