var slide = 1;
show(slide);

function add(n){
	show(slide += n)
}

function show(n){
	var i;
	var x = document.getElementsByClassName("pw");
	if(n < 1){slide = x.length }
	if(n > x.length){slide = 1}
	for(i=0;i < x.length;i++){
		x[i].style.display ="none";
	}
		x[slide - 1].style.display = "block";
	}