var menu_scrollTop = 0
var contain_scrollTop = 0
var articles
$(document).ready(function(){
	console.log("document ready!")
	init()
	bindSroll()
	bindMove()
	bindMenuBar()
})
function init(){
	//初始化
	// var ww = window.screen.width
	var wh = window.screen.availHeight

	$("#menu").css("min-height", wh)
	$("#contain").css("min-height", wh)

	//将来数据在页面加载时从服务器获取json
	articles = [
		{
			title: "庄子",
			series:[
				{
					title: "生平",
					series: [
						"生平1",
						"生平2",
						"生平3",
					]
				},
				{
					title: "名言",
					series: [
						"名言1",
						"名言2",
						"名言3",
					]
				},
				{
					title: "成就",
					series: [
						"成就1",
						"成就2",
						"成就3",
					]
				},
			]
		},
		{
			title: "孔子",
			series:[
				{
					title: "生平",
					series: [
						"生平1",
						"生平2",
						"生平3",
					]
				},
				{
					title: "名言",
					series: [
						"名言1",
						"名言2",
						"名言3",
					]
				},
				{
					title: "成就",
					series: [
						"成就1",
						"成就2",
						"成就3",
					]
				},
			]
		},
		{
			title: "孟子",
			series:[
				{
					title: "生平",
					series: [
						"生平1",
						"生平2",
						"生平3",
					]
				},
				{
					title: "名言",
					series: [
						"名言1",
						"名言2",
						"名言3",
					]
				},
				{
					title: "成就",
					series: [
						"成就1",
						"成就2",
						"成就3",
					]
				},
			]
		},
		{
			title: "老子",
			series:[
				{
					title: "生平",
					series: [
						"生平1",
						"生平2",
						"生平3",
					]
				},
				{
					title: "名言",
					series: [
						"名言1",
						"名言2",
						"名言3",
					]
				},
				{
					title: "成就",
					series: [
						"成就1",
						"成就2",
						"成就3",
					]
				},
			]
		},
	]
	loadMenu()
}
function loadMenu(){
	// 在页面载入时加载菜单
	$(".menu-center").append("<ul></ul>")
	for (var f = 0; f < articles.length; f++){
		var fli = $("<li class='menu-cli'></li>").text(articles[f].title)
		fli.attr("id", parseInt(f + 1))
		$(".menu-center>ul").append(fli)
		if (articles[f].series.length > 0){
			fli.after("<ul></ul>")
			for (var c = 0; c < articles[f].series.length; c++){
				var cli = $("<li class='menu-clic'></li>").text(articles[f].series[c].title)
				cli.attr("id", "" + f + "-" + c)
				fli.next().append(cli)
				if (articles[f].series[c].series.length > 0){
					cli.after("<ul></ul>")
					for (var cc = 0; cc < articles[f].series[c].series.length; cc++){
						var ccli = $("<li class='menu-clicc'></li>").text(articles[f].series[c].series[cc])
						ccli.attr("id", "" + f + "-" + c + "-" + cc)
						cli.next().append(ccli)
					}
				}
			}
		}
	}
}
function bindSroll(){
	//添加对滑动的监听，实现侧边栏和内容独立双滑动
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
}
function bindMove(){
	//添加对元素的鼠标出入事件监听
	bindMenuTopMove()
	bindMenuCenterMove()
	bindContainMove()
}
function bindMenuTopMove(){
	$(".my-name").mouseenter(function(){
		$(this).css("font-weight", "bold")
	})
	$(".my-name").mouseleave(function(){
		$(this).css("font-weight", "normal")
	})
	$(".menu-bar li").mouseenter(function(){
		$(this).css("color","#343131")
		$(this).css("background", "#fcfcfc")
	})
	$(".menu-bar li").mouseleave(function(){
		$(this).css("background", "")
		$(this).css("color", "#fcfcfc")
	})
}
function bindMenuCenterMove(){
	$(".menu-cli").mouseenter(function(){
		$(this).css("background","#4e4a4a")
	})
	$(".menu-cli").mouseleave(function(){
		$(this).css("background", "#343131")
	})
	$(".menu-clic").mouseenter(function(){
		$(this).css("background","#b9b9b9")
	})
	$(".menu-clic").mouseleave(function(){
		$(this).css("background", "#a9a9a9")
	})
	$(".menu-clicc").mouseenter(function(){
		$(this).css("background","#d9d9d9")
	})
	$(".menu-clicc").mouseleave(function(){
		$(this).css("background", "#c9c9c9")
	})
}
function bindContainMove(){
	$("#contain p").mouseenter(function(){
		$(this).css("color", "#2980B9")
	})
	$("#contain p").mouseleave(function(){
		$(this).css("color", "#404040")
	})
}
function code(){
	var text1 = "<h2>编程<h2>"
	var text2 = $("<code></code>").text('#include<stdio.h> int main(void){printf("Hello world!");}')
	changeContain("编程", text1, text2)
}
function write_(){
	var text1 = "<h2>随笔<h2>"
	var text2 = $("<p></p>").text('梦里不知身是处，无言何必上西楼！')
	var text3 = '<blockquote cite="http://www.hengyumo.cn"><p>如是生香消却处，半点残云何处增 ——2018-9-30</p></blockquote>'
	changeContain("随笔", text1, text2, text3)
}
function pic(){
	var text = '<img src="./img/hengyumo.jpg">'
	changeContain("图片", text)
}
function guitar(){
	var text1 = '<img src="http://data.17jita.com/attachment/portal/201704/08/224700gt3qpclypew9kiib.png">'
	var text2 = '<img src="http://data.17jita.com/attachment/portal/201704/08/224700t0b8knpu8bnrpbfm.png">'
	changeContain("吉他", text1, text2)
}
function chat(){
	var text = "<p>我的邮箱：le@hengyumo.cn</p>"
	text += '<h4>游客留言：</h4><form action="le@hengyumo.cn" method="post" enctype="text/plain"><p>姓名: <br /><input type="text" name="name" /><br />留言：<br /><textarea rows="10" cols="25"></textarea><br />邮箱：<br /><input type="text" name="mail" /><br /><input type="submit" value="发送" /><input type="reset" value="重置" /></p></form>'
	changeContain("联系", text)
}
function self(){
	// var text = loadHtml("self.html")
	var text = "<h4>我的邮箱：le@hengyumo.cn</h4>"
	changeContain("自我介绍", text)
}
function bindMenuBar(){
	//父项
	$(".menu-cli").click(function(){
		// alert($(this).attr("id"))
		var sin = $(".select-in")
		if (!$(this).hasClass("select-in")){
			$(this).toggleClass("select-in", "")
			var next = $(this).next()
			if (next.is("ul")){
				//如果该li有子选项
				next.slideDown("fast")
			}
		}
		if (sin){
			sin.toggleClass("select-in", "")
			var next = sin.next()
			if (next.is("ul")){
				//如果该li有子选项
				next.slideUp("fast")
			}
		}
	})

	//子项
	$(".menu-clic").click(function(){
		// alert($(this).attr("id"))
		var sin = $(".select-cin")
		if (!$(this).hasClass("select-cin")){
			$(this).toggleClass("select-cin", "")
			var next = $(this).next()
			if (next.is("ul")){
				//如果该li有子选项
				next.slideDown("fast")
			}
			//如果没有需要直接选定！
			//
			//
			//
			//
		}
		if (sin){
			sin.toggleClass("select-cin", "")
			var next = sin.next()
			if (next.is("ul")){
				//如果该li有子选项
				next.slideUp("fast")
			}
		}
	})

	//子子项
	$(".menu-clicc").click(function(){
		// alert($(this).attr("id"))
		var sin = $(".select-ccin")
		if (!$(this).hasClass("select-ccin")){
			changeContainById($(this).attr("id"))
			$(this).css("background", "#f7f7f7").css("color", "#000000")
			$(this).off("mouseleave").off("mouseenter")
			$(this).toggleClass("select-ccin", "")
			var next = $(this).next()
			if (next.is("ul")){
				//如果该li有子选项
				next.slideDown("fast")
			}
		}
		if (sin){
			sin.css("color", "#343131").css("background", "#c9c9c9")
			sin.mouseenter(function(){
				$(this).css("background","#e9e9e9")
			})
			sin.mouseleave(function(){
				$(this).css("background", "#c9c9c9")
			})
			sin.toggleClass("select-ccin", "")
			var next = sin.next()
			if (next.is("ul")){
				//如果该li有子选项
				next.slideUp("fast")
			}
		}
	})
}
function toTop(){
	var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
	if (currentScroll > 0) {
		window.requestAnimationFrame(toTop)
		window.scrollTo (0,currentScroll - (currentScroll/5))
	}
}
function loadHtml(url){
	$.ajax({
		url:url,
		success: function(res){
			changeContain(res)
		}
	})
}
function loadJson(url){
	$.ajax({

	})
}
function loadActicle(ids){
	$.ajax({

	})
}
function changeContain(top){
	$(".contain-top p").text("　»　" + top)
	$(".contain-center").empty()	//清除子元素
	// console.log($("body").html())
	for(var i = 1; i < arguments.length; i++){
		$(".contain-center").append(arguments[i])
		$(".contain-center").append("<br>")
	}
	bindContainMove()
}
function changeContainById(id){
	var ids = id.split('-')
	if (ids.length != 3) return
	var top_p = "　»　" + articles[ids[0]].title
	top_p += "　»　" + articles[ids[0]].series[ids[1]].title
	top_p += "　»　" + articles[ids[0]].series[ids[1]].series[ids[2]]
	$(".contain-top p").text(top_p)
	// var article = loadActicle(ids)
	var article = id + "暂未对接服务器"
	article = $("<p></p>").text(article)
	$(".contain-center").empty()
	$(".contain-center").append(article)
	bindContainMove()
}