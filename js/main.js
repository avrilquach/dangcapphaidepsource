$(document).ready(function() {
	var banner = $('.main-banner');
	banner.owlCarousel({
			items: 1,
			nav: true,
			autoplay: true
	});
	var timkiem = $('.timkiemnhieunhat');
	timkiem.owlCarousel({
			nav: true,
			autoplay: true,
			autoWidth: true,
			item: 5,
	});
	var video = $(".videomoinhat .content");
	video.owlCarousel({
			center: true,
			items: 2,
			loop: true,
			nav: true,
			autoplay: true,
	});
	$('#header .menu ul > li.dropdown').hover(
			function() {
					$(".bg_header").show();
			},
			function() {
					$(".bg_header").hide();
			});
	$(".size li").click(function(e) {
			$(".size li").removeClass("active");
			$(this).addClass("active");
			var old = $(this).find("span.old").html();
			var data = $(this).find("span.new").html();
			$(".options .price-new").html(data);
			$(".options .price-old").html(old);
	})
	$(".san_pham_da_xem_2 .write").click(function(e) {
			$(".bgpopup").show();
			$(".popup").show();
	})
	$(".popup .close_popup").click(function(e) {
			$(".bgpopup").hide();
			$(".popup").hide();
	})
	$(".bgpopup").click(function(e) {
			$(".bgpopup").hide();
			$(".popup").hide();
	})
	$(".dichvukemtheo .box").click(function(e) {
			$(this).toggleClass("active");
	})
	$(".thongtinxuathoadon .box").click(function(e) {
			$(this).toggleClass("active");
	})
	$(".ghichudonhang .box").click(function(e) {
			$(this).toggleClass("active");
	})
	$(".diachinhanhang .boxship2 .style a").click(function(e) {
			$(".bgpopup").show();
			$(".addaddress").show();
	})
	$(".addaddress .close_popup").click(function(e) {
			$(".bgpopup").hide();
			$(".addaddress").hide();
	})
	$(".bgpopup").click(function(e) {
			$(".bgpopup").hide();
			$(".addaddress").hide();
	})
	$(".choose").click(function(e) {
			$(this).parent().toggleClass("active");
	})
	$(".chinhsua").click(function(e) {
			$(".bgpopup").show();
			$(".editaddress").show();
	})
	$(".editaddress .close_popup").click(function(e) {
			$(".bgpopup").hide();
			$(".editaddress").hide();
	})
	$(".bgpopup").click(function(e) {
			$(".bgpopup").hide();
			$(".editaddress").hide();
	})
	$(".thong_tin_tai_khoan .box").click(function(e) {
			$(this).toggleClass("active");
	})
	$(".themsodienthoai").click(function(e) {
			$(".sodienthoai2").css("display", "flex");
			$(".themsodienthoai").hide();
			$(".sodienthoai").css("margin-bottom", "15px");
	})
	$(".thanhpho-popup").click(function(e) {
			$('.popup-address').addClass("active");
			$(".popup-address h5").html("Chọn Tỉnh / Thành Phố");
			$("input.text").val("Tìm kiếm Tỉnh / Thành Phố");
			$(".result").addClass("active");
			$("#thanhpho-popup").show();
			$("#quan-popup").hide();
			$("#phuong-popup").hide();
	})
	$(".quan-popup").click(function(e) {
			$('.popup-address').addClass("active");
			$(".popup-address h5").html("Chọn Quận / Huyện");
			$("input.text").val("Tìm kiếm Quận / Huyện");
			$(".result").addClass("active");
			$("#thanhpho-popup").hide();
			$("#quan-popup").show();
			$("#phuong-popup").hide();
	})
	$(".phuong-popup").click(function(e) {
			$('.popup-address').addClass("active");
			$(".popup-address h5").html("Chọn Phường / Xã");
			$("input.text").val("Tìm kiếm Phường / Xã");
			$(".result").addClass("active");
			$("#thanhpho-popup").hide();
			$("#quan-popup").hide();
			$("#phuong-popup").show();
	})
	$("#thanhpho-popup .item").click(function(e) {
			$(".result").removeClass("active");
			setTimeout(function() {
					$(".result").addClass("active");
			}, 100);
			$(".popup-address h5").html("Chọn Quận / Huyện");
			$("input.text").val("Tìm kiếm Quận / Huyện");
			$("#thanhpho-popup").hide();
			$("#quan-popup").show();
			$("#phuong-popup").hide();
	})
	$("#quan-popup .item").click(function(e) {
			$(".result").removeClass("active");
			setTimeout(function() {
					$(".result").addClass("active");
			}, 100);
			$(".popup-address h5").html("Chọn Phường / Xã");
			$("input.text").val("Tìm kiếm Phường / Xã");
			$("#thanhpho-popup").hide();
			$("#quan-popup").hide();
			$("#phuong-popup").show();
	})
	$("#phuong-popup .item").click(function(e) {
			$(".popup-address").removeClass("active");
	})

	$(".popup-address .close").click(function(e) {
			$(".popup-address").removeClass("active");
	})
	$(window).on('scroll', function() {
			var wtop = $(window).scrollTop();
			if (wtop > 500) {
					$("#top").addClass('active');
			} else {
					$("#top").removeClass('active');
			}
	});
	$("a[href='#top']").click(function() {
			$("html, body").animate({
					scrollTop: 0
			}, "slow");
			return false;
	});
	$(".thongtinsanpham .show-data a").click(function(e) {
			$(".thongtinsanpham .left .content").css("height", "auto");
			$(".thongtinsanpham .left .content").css("overflow", "unset");
			$(".thongtinsanpham .show-data").hide();
	})
	$(".mua-chung input[type='checkbox']").click(function(e) {
			var id = $(this).attr("id");
			var ele = id + "_new";
			$("#" + ele).toggleClass("active");
	})
	var product = $(".productslider");
	product.owlCarousel({
			items: 5,
			nav: true,
	});
	$(".do-nicescrol li").hover(function(e) {
			var id = $(this).attr("id");
			$('.boxscroll').animate({
					scrollTop: $("." + id).offset().top
			}, "faster");
	})
	$('.lazy').lazy();
	$('.box-filter h2').click(function(e){
		$(this).parent().toggleClass("active");
	})
	$(".box-filter-2 h3").click(function(e){
		$(this).parent().toggleClass("active");
	})
	$(".sort_thuonghieu span").click(function(e){
		$(this).parent().toggleClass("active");
	})
	$(".sort_sapxep span").click(function(e){
		$(this).parent().toggleClass("active");
	})
	$(".box-fiter-price span").click(function(e){
		var html = $(this).html();
		var id = $(this).attr("class");
		var loadprice = "<div id="+id+" class='item' ><span class='top'>"+html+"</span></div>"
		var checkhtml = $(".load-price #"+id).find("span.top").html();
		if(checkhtml === undefined){
			$(".load-price").append(loadprice);
		}
		else{
			if(checkhtml === html){
				$("#"+id).remove();
			}
		}
	})
})