var menu_scrollTop = 0
var contain_scrollTop = 0
$(document).ready(function(){
	console.log("document ready!")
	$("#menu").mouseenter(function(){
		contain_scrollTop = $(document).scrollTop()
		console.log("contian_scrollTop:", contain_scrollTop)
		$("#menu").toggleClass("menu-unfixed menu-fixed")
		$("#contain").toggleClass("contain-fixed contain-unfixed")
		$(document).scrollTop(menu_scrollTop)
		$("#contain").css("top", -contain_scrollTop + "px")
	})
	$("#menu").mouseleave(function(){
		menu_scrollTop = $(document).scrollTop()
		console.log("menu_scrollTop:", menu_scrollTop)
		$("#menu").toggleClass("menu-unfixed menu-fixed")
		$("#contain").toggleClass("contain-fixed contain-unfixed")
		$(document).scrollTop(contain_scrollTop)
		$("#menu").css("top", -menu_scrollTop + "px")
	})
	$("#menu li").mouseenter(function(){
		$(this).css("background","#4e4a4a")
	})
	$("#menu li").mouseleave(function(){
		$(this).css("background", "#343131")
	})
	$("#contain p").mouseenter(function(){
		$(this).css("color", "#2980B9")
	})
	$("#contain p").mouseleave(function(){
		$(this).css("color", "#404040")
	})
})