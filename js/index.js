setInterval(showTime, 1000);	//每隔一秒执行一次
function showTime(){

	var date = new Date();
	var Day = new Array("日", "一", "二", "三", "四", "五", "六");
	var str = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 " 
				+ date.getHours() + ":"
				+ (date.getMinutes() < 10 ? "0":"") + date.getMinutes() + ":" 
				+ (date.getSeconds() < 10 ? "0":"") + date.getSeconds() 
				+ " 星期" + Day[date.getDay()];
	document.getElementById("time").innerHTML = str;
}