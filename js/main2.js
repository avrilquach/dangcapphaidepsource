$(document).ready(function () {
  var big = "big";
  var thumbs = "thumbs";
  gallery_slider(big, thumbs);
  var big2 = "big2";
  var thumbs2 = "thumbs2";
  gallery_slider(big2, thumbs2);
  var big3 = "big3";
  var thumbs3 = "thumbs3";
  gallery_slider(big3, thumbs3);
  var big4 = "big4";
  var thumbs4 = "thumbs4";
  gallery_slider(big4, thumbs4);
  var big5 = "big5";
  var thumbs5 = "thumbs5";
  gallery_slider(big5, thumbs5);
  var bigreview = "big-review";
  var thumbsreview = "thumbs-review";
  gallery_slider2(bigreview, thumbsreview);
});
 function gallery_slider(data1, data2)
 {
     var bigimage = $("#"+data1);
     var thumbs = $("#"+data2);
     //var totalslides = 10;
     var syncedSecondary = true;
 
     bigimage
       .owlCarousel({
       items: 1,
       slideSpeed: 2000,
       nav: false,
       autoplay: false,
       dots: false,
       loop: true,
       responsiveRefreshRate: 200
     })
       .on("changed.owl.carousel", syncPosition);
 
     thumbs
       .on("initialized.owl.carousel", function() {
       thumbs
         .find(".owl-item")
         .eq(0)
         .addClass("current");
     })
       .owlCarousel({
       items: 3,
       dots: true,
       nav: true,
       smartSpeed: 200,
       slideSpeed: 500,
       slideBy: 3,
       responsiveRefreshRate: 100
     })
       .on("changed.owl.carousel", syncPosition2);
 
     function syncPosition(el) {
       //if loop is set to false, then you have to uncomment the next line
       //var current = el.item.index;
 
       //to disable loop, comment this block
       var count = el.item.count - 1;
       var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
 
       if (current < 0) {
         current = count;
       }
       if (current > count) {
         current = 0;
       }
       //to this
       thumbs
         .find(".owl-item")
         .removeClass("current")
         .eq(current)
         .addClass("current");
       var onscreen = thumbs.find(".owl-item.active").length - 1;
       var start = thumbs
       .find(".owl-item.active")
       .first()
       .index();
       var end = thumbs
       .find(".owl-item.active")
       .last()
       .index();
 
       if (current > end) {
         thumbs.data("owl.carousel").to(current, 100, true);
       }
       if (current < start) {
         thumbs.data("owl.carousel").to(current - onscreen, 100, true);
       }
     }
 
     function syncPosition2(el) {
       if (syncedSecondary) {
         var number = el.item.index;
         bigimage.data("owl.carousel").to(number, 100, true);
       }
     }
 
     thumbs.on("click", ".owl-item", function(e) {
       e.preventDefault();
       var number = $(this).index();
       bigimage.data("owl.carousel").to(number, 300, true);
     });
 }
 function gallery_slider2(data1, data2)
 {
     var bigimage = $("#"+data1);
     var thumbs = $("#"+data2);
     //var totalslides = 10;
     var syncedSecondary = true;
 
     bigimage
       .owlCarousel({
       items: 1,
       slideSpeed: 2000,
       nav: false,
       autoplay: false,
       dots: false,
       loop: true,
       responsiveRefreshRate: 200
     })
       .on("changed.owl.carousel", syncPosition);
 
     thumbs
       .on("initialized.owl.carousel", function() {
       thumbs
         .find(".owl-item")
         .eq(0)
         .addClass("current");
     })
       .owlCarousel({
       items: 4,
       dots: true,
       nav: true,
       smartSpeed: 200,
       slideSpeed: 500,
       slideBy: 3,
       responsiveRefreshRate: 100,
       margin: 10,
     })
       .on("changed.owl.carousel", syncPosition2);
 
     function syncPosition(el) {
       //if loop is set to false, then you have to uncomment the next line
       //var current = el.item.index;
 
       //to disable loop, comment this block
       var count = el.item.count - 1;
       var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
 
       if (current < 0) {
         current = count;
       }
       if (current > count) {
         current = 0;
       }
       //to this
       thumbs
         .find(".owl-item")
         .removeClass("current")
         .eq(current)
         .addClass("current");
       var onscreen = thumbs.find(".owl-item.active").length - 1;
       var start = thumbs
       .find(".owl-item.active")
       .first()
       .index();
       var end = thumbs
       .find(".owl-item.active")
       .last()
       .index();
 
       if (current > end) {
         thumbs.data("owl.carousel").to(current, 100, true);
       }
       if (current < start) {
         thumbs.data("owl.carousel").to(current - onscreen, 100, true);
       }
     }
 
     function syncPosition2(el) {
       if (syncedSecondary) {
         var number = el.item.index;
         bigimage.data("owl.carousel").to(number, 100, true);
       }
     }
 
     thumbs.on("click", ".owl-item", function(e) {
       e.preventDefault();
       var number = $(this).index();
       bigimage.data("owl.carousel").to(number, 300, true);
     });
 }