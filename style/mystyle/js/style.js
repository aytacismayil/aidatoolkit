$(".click-open-close").click(function () {
    $(this).toggleClass("fas-change");
});

$('.popover-dismiss').popover({
    trigger: 'hover'
});