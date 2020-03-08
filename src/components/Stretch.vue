<template>
    <div>
        <div class="image__tl" id="tl"></div>
<div class="image__bl" id="bl"></div>
<div class="image__tr" id="tr"></div>
<div class="image__br" id="br"></div>
<div class="image__svt" id="svt">
	<div class="image__inner" id="svt-inner"></div>
</div>
<div class="image__svb" id="svb">
	<div class="image__inner" id="svb-inner"></div>
</div>
<div class="image__shl" id="shl">
	<div class="image__inner" id="shl-inner"></div>
</div>
<div class="image__shr" id="shr">
	<div class="image__inner" id="shr-inner"></div>
</div>
<div class="image__sc" id="sc">
	<div class="image__inner" id="sc-inner"></div>
</div>


<h1 class="text" id="words">
	<span class="text__word" id="word">
		<span class="text__letter">C</span>
		<span class="text__letter">H</span>
		<span class="text__letter">R</span>
		<span class="text__letter">I</span>
		<span class="text__letter">S</span>
		<span class="text__letter">T</span>
        <span class="text__letter">I</span>
        <span class="text__letter">N</span>
        <span class="text__letter">A</span>
	</span>

	<span class="text__word" id="word">
		<span class="text__letter" style="margin-left:1em">J</span>
		<span class="text__letter">A</span>
		<span class="text__letter">N</span>
		<span class="text__letter">C</span>
		<span class="text__letter">Y</span>
	</span>
</h1>
    </div>
</template>

<script>
//Config
var lag = 20;
var grow = 20;

//Vars
//var t = Date.now();
var w = Math.min(window.innerWidth, window.innerHeight) * 0.5;
var h = Math.min(window.innerWidth, window.innerHeight) * 0.5;
var vp = 0.5;
var hp = 0.5;
var vs = 0.2;
var hs = 0.2;
var vdir = 0;
var hdir = 0;
var mouse = {x: 0.5, y:0.5};

//Els
var tl = document.getElementById('tl');
var tr = document.getElementById('tr');
var bl = document.getElementById('bl');
var br = document.getElementById('br');
var svt = document.getElementById('svt');
var svtInner = document.getElementById('svt-inner');
var svb = document.getElementById('svb');
var svbInner = document.getElementById('svb-inner');
var shl = document.getElementById('shl');
var shlInner = document.getElementById('shl-inner');
var shr = document.getElementById('shr');
var shrInner = document.getElementById('shr-inner');
var sc  = document.getElementById('sc');
var scInner = document.getElementById('sc-inner');
var words  = document.getElementById('words');


//Handlers
window.addEventListener('mousemove', function(e){
	mouse.x = ( 1 - e.clientX/window.innerWidth );
	mouse.y = ( 1 - e.clientY/window.innerHeight );
}),

//Animate
function animate(){
	//var delta = Date.now() - t;
	//t = Date.now();
	
	//UPDATE VARS
	hp += (mouse.x - hp)/lag;
	vp += (mouse.y - vp)/lag;
	
	
	hdir += (mouse.x - hp)*grow;
	vdir += (mouse.y - vp)*grow;
	hdir /= grow;
	vdir /= grow;
	
	hs = Math.abs(hdir)*2;
	vs = Math.abs(vdir)*2;
	
	
	//POSITION ELEMENTS
	
	// Top Left
	tl.style.width = w*hp + "px";
	tl.style.height = h*vp + "px";	
	tl.style.transform = "translate3d("+ (-hs*w/2) +"px, "+ (-vs*h/2) +"px, 0)";
	
	// Top Right
	tr.style.width = w*(1-hp) + "px";
	tr.style.height = h*vp + "px";	
	tr.style.transform = "translate3d("+ (hs*w/2) +"px, "+ (-vs*h/2) +"px, 0)";
	
	// Bottom Left
	bl.style.width = w*hp + "px";
	bl.style.height = h*(1-vp) + "px";	
	bl.style.transform = "translate3d("+ (-hs*w/2) +"px, "+ (vs*h/2) +"px, 0)";
	
	// Bottom Right
	br.style.width = w*(1-hp) + "px";
	br.style.height = h*(1-vp) + "px";	
	br.style.transform = "translate3d("+ (hs*w/2) +"px, "+ (vs*h/2) +"px, 0)";
	
	// Stretch Vertical Top
	svt.style.width = (w*hs+2) + "px";	
	svt.style.height = h*vp + "px";
	svt.style.transform = "translate3d(-50%,"+ (-vs*h/2) +"px, 0)";
	svtInner.style.backgroundPosition = hp*100 + "% 0";
	
	// Stretch Vertical Bottom
	svb.style.width = (w*hs+2) + "px";	
	svb.style.height = h*(1-vp) + "px";
	svb.style.transform = "translate3d(-50%, "+ (vs*h/2) +"px, 0)";
	svbInner.style.backgroundPosition = hp*100 +"% "+ (-vp*h) +"px";
	
	// Stretch Horizontal Left
	shl.style.width = w*hp + "px";	
	shl.style.height = (h*vs+2) + "px";
	shl.style.transform = "translate3d("+ (-hs*w/2) +"px, -50%, 0)";
	shlInner.style.backgroundPosition = "0 "+ vp*100 +"%";
	
	// Stretch Horizontal Right
	shr.style.width = w*(1-hp) + "px";	
	shr.style.height = (h*vs+2) + "px";
	shr.style.transform = "translate3d("+ (hs*w/2) +"px, -50%, 0)";
	shrInner.style.backgroundPosition = (-hp*w) +"px "+ vp*100 +"%";
	
	// Stretch Center
	sc.style.width = (w*hs+2) + "px";	
	sc.style.height = (h*vs+2) + "px";
	scInner.style.backgroundPosition = (-hp*w) +"px "+ (-vp*h) +"px";
	
	// Text
	// 
	// 	if (hdir > 0){
	// 		var ch = ( hp - 0.5 + hdir * c / lim) * w;
	// 	} else {
	// 		var ch  = ( hp - 0.5 + hdir * (lim - c) / lim) * w;
	// 	}
	// 	var chs = 1 + hs;
	// 	var cv = ( vp - 0.5 + vdir * c / lim) * h;
	// 	var cvs = 1 + vs;
	// 	word.children[c].style.transform = 'translate3d('+ch+'px,'+cv+'px,0)';
	// }
	
	for(var c = 0, lim = words.children.length; c < lim; c++){
		var ch = ( hp - 0.5 + hdir * c / lim) * w/2;
		var chs = 1 + hs;
		var cv = ( vp - 0.5 + vs * c / lim) * h/2;
		var cvs = 1 + vs*1.5;
		words.children[c].style.transform = 'translate3d('+ch+'px,'+cv+'px,0) scaleX('+chs+') scaleY('+cvs+') rotate('+(vdir*45)+'deg)';
		words.children[c].style.transformOrigin = (hp-hs)*100 +'% '+ (vp-vs)*100 +'%';
	}
	
	
	requestAnimationFrame(animate);

requestAnimationFrame(animate),

window.addEventListener('resize', function(){
	w = Math.min(window.innerWidth, window.innerHeight) * 0.5;
	h = Math.min(window.innerWidth, window.innerHeight) * 0.5;
});
}
</script>


<style lang="scss" scoped>
$w: 50vmin;
$h: 50vmin;
$vp: 0.5;
$hp: 0.5;
$vs: 0;
$hs: 0;

.image{
	&__tl, &__tr, &__bl, &__br, &__svt, &__svb, &__shl, &__shr, &__sc, &__inner{
		position: absolute;
	}
	&__tl, &__tr, &__bl, &__br, &__inner{
		background-image: url('../assets/leafroof.jpg');
	}
	&__inner{
		width: 200%;
		height: 200%;
		transform-origin: top left;
	}
	&__tl{
		//bottom: calc(50vh - #{($vp - 0.5)*$h} );
		bottom: 120vh;
		right: 50vw;
		width: $w*$hp;
		height: $h*$vp;
		background-position: top left;
		background-size: $w $h;
		transform: translate3d(-$hs*$w/2, -$vs*$h/2, 0);
	}
	&__tr{
		//bottom: calc(50vh - #{($vp - 0.5)*$h} );
		bottom: 120vh;
		left: 50vw;
		width: $w*(1-$hp);
		height: $h*$vp;
		background-position: top right;
		background-size: $w $h;
		transform: translate3d($hs*$w/2, -$vs*$h/2, 0);
	}
	&__bl{
		//top: calc(50vh + #{($vp - 0.5)*$h} );
		top: 30vh;
		right: 50vw;
		width: $w*$hp;
		height: $h*(1-$vp);
		background-position: bottom left;
		background-size: $w $h;
		transform: translate3d(-$hs*$w/2, $vs*$h/2, 0);
	}
	&__br{
		//top: calc(50vh + #{($vp - 0.5)*$h} );
		top: 30vh;
		left: 50vw;
		width: $w*(1-$hp);
		height: $h*(1-$vp);
		background-position: bottom right;
		background-size: $w $h;
		transform: translate3d($hs*$w/2, $vs*$h/2, 0);
	}
}

$font: 'Oxanium', cursive;


.text{
	position: absolute;
	top: 25.5%;
	left: 38%;
	transform: translate3d(-1%,-50%,0);
	z-index: 2;
	font-family: $font;
	text-transform: uppercase;
	font-size: 0;
	color: rgb(0, 0, 0);
	cursor: default;
	user-select: none;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke: 2px rgb(241, 232, 232);
	line-height: 2.6;
	&__word{
		display: block;
		transition: transform 200ms linear;		
	}
	&__letter{
		font-size: 10vmin;
		position: relative;
		display: inline-block;
		//transition: transform 100ms linear;		
	}
}

    
</style>