var swiper = new Swiper(".main_cont_swiper", {
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination-main",
  },
  loop:true
});
var swiper = new Swiper(".catalog_cont_slider", {
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".slidenext",
    prevEl: ".slideprev",
  },
  loop:true
});
var swiper = new Swiper(".goodtoknow_cont_slide", {
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".slidenext2",
    prevEl: ".slideprev2",
  },
  loop:true
});
var swiper = new Swiper(".trademarks_cont_slide", {
  slidesPerView: 'auto',
  loop:true
});
var formitem = $(".forms_cont_box_item")
$(formitem[0]).show()
$(".formstabbtn").click(function(){
  $(formitem).hide()
  $(formitem[$(this).val()]).show()
  $(".formstabbtn").removeClass("active")
  $(this).addClass("active")
})
if($(window).width()<694){
  var swiper = new Swiper(".services_cont_slider", {
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination-services",
    },
    loop:true
  });
}
$(window).resize(function(){
  if($(window).width()<694){
    var swiperas = new Swiper(".services_cont_slider", {
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination-services",
      },
      loop:true
    });
  }
})
$(".forms_cont_box_item_btn").click(function(){
  $(this).toggleClass("activ");
  $(this).siblings(".forms_cont_box_item_hide").slideToggle(500)
})
