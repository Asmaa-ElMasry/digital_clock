"use strict";
let time = document.querySelector("#displayed_time");
let am_pm_basis = document.querySelector("#am_pm_basis");
let default_basis = document.querySelector("#default_basis");
var hour_basis = "default";

/* display time that is less than or equal with leading zero as 9 to be
displayed as 09
*/
function leading_zero(time){
	return time <= 9 ? "0" + time : time;
}

//display hours: minutes:seconds inside <p>
function load_time(){
	let current_date = new Date();
	var hours = current_date.getHours();
	var minutes = current_date.getMinutes();
	var seconds = current_date.getSeconds();
	var am_pm = "";
	if (hour_basis == "am_pm_basis"){
		let time_array = current_date.toLocaleTimeString().split(":");
		let sec_am_pm = time_array[2].split(" ");
		hours = parseInt(time_array[0]);
		am_pm = " " + sec_am_pm[1];
	}
	time.innerHTML = leading_zero(hours) + ":" + leading_zero(minutes) + ":" +
	leading_zero(seconds) + am_pm;
}

//Call function to be loaded for first time in <p>
load_time();

setInterval(load_time, 1000);

am_pm_basis.addEventListener("click", function(){
	hour_basis="am_pm_basis";
	load_time;}, false);
default_basis.addEventListener("click", function(){
	hour_basis="default";
	load_time;}, false);
