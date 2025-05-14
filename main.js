let opdiv1=document.getElementsByClassName("op");
let opdiv2=document.getElementsByClassName("op1");
let opdiv3=document.getElementsByClassName("but1");
let div1=document.getElementById("block1");
let div2=document.getElementById("block2");
let count=0;
let abtn=[0,0,0,0];
let abtn2=[0,0,0,0];
let abtn3=[0,0,0,0];
let abtn4=[0,0,0,0];
let abtn5=[0,0,0,0];
let opre=[abtn3[2],abtn3[3],abtn3[0],abtn3[1]];
function test(){
	let i;
	let val=document.getElementById("block1op");
	if(val.value=="and"){
		for(i=0;i<abtn.length;i++){
			if(abtn[i]==1 && abtn2[i]==1){
			opdiv1[i].style.cssText="background:red;";
			abtn3[i]=1;
}
			else{
			opdiv1[i].style.cssText="background:none;";
			abtn3[i]=0;	
}
}
}
	if(val.value=="or"){
		for(i=0;i<abtn.length;i++){
			if(abtn[i]==0 && abtn2[i]==0){
			opdiv1[i].style.cssText="background:none;";
			abtn3[i]=0;
}
			else{
			opdiv1[i].style.cssText="background:red;";	
			abtn3[i]=1;
}
}
}
	if(val.value=="nand"){
		for(i=0;i<abtn.length;i++){
			if(abtn[i]==0 && abtn2[i]==0){
			opdiv1[i].style.cssText="background:red;";
			abtn3[i]=1;
}
			else{
			opdiv1[i].style.cssText="background:none;";	
			abtn3[i]=0;
}
}
}
	if(val.value=="xor"){
		for(i=0;i<abtn.length;i++){
			if(abtn[i]==abtn2[i]){
			opdiv1[i].style.cssText="background:none;";
			abtn3[i]=0;
}
			else{
			opdiv1[i].style.cssText="background:red;";	
			abtn3[i]=1;
}
}
}
	if(val.value=="nota"){
		for(i=0;i<abtn.length;i++){
			opdiv1[i].style.cssText="background:none;";
			abtn3[i]=0;
}
}
console.log(abtn3);
}
function tog(e,a){
	if(e.target.classList.contains('green')) {
            e.target.classList.remove('green');
           abtn[a]=0;
        }  else {
            e.target.classList.add('green');
		abtn[a]=1;
        }
}
function tog2(e,a){
	if(e.target.classList.contains('green')) {
            e.target.classList.remove('green');
           abtn2[a]=0;
        }  else {
            e.target.classList.add('green');
		abtn2[a]=1;
        }
}
div1.addEventListener('click', function in2(e) {
    if (e.target && e.target.classList.contains('but1')) {
        tog(e,0);
    }
	else if (e.target && e.target.classList.contains('but2')) {
        	tog2(e,0);
    }
	else if (e.target && e.target.classList.contains('but3')) {
	tog(e,1);
    }
	else if (e.target && e.target.classList.contains('but4')) {
        	tog2(e,1);
    }
	else if (e.target && e.target.classList.contains('but5')) {
	tog(e,2);
    }
	else if (e.target && e.target.classList.contains('but6')) {
        	tog2(e,2);
    }
	else if (e.target && e.target.classList.contains('but7')) {
	tog(e,3);
    }
	else if (e.target && e.target.classList.contains('but8')) {
        	tog2(e,3);
    }
	test();
});
function norop(){
	for(i=0;i<abtn.length;i++){
			if(abtn4[i]==0 && abtn5[i]==0){
			opdiv2[i].style.cssText="background:red;";
			
}
			else{
			opdiv2[i].style.cssText="background:none;";	
			
}
}
}

