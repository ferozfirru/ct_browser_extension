var mouse = {x: 0, y: 0};
document.addEventListener("mousemove", function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY; }, false);
function buycar(car_name){ 
	document.getElementById("iframe_feroz").src= "http://www.testsite.com/buy/"+car_name;
	document.getElementById("iframe_feroz").style.left = mouse.x;
	document.getElementById("iframe_feroz").style.top =  mouse.y;
}
