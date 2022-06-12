var n1=Math.random();
n1*=6;
n1++;
n1=Math.floor(n1);
var image1source ="dice"+n1+".png";
var image1=document.querySelector('.img1');
image1.setAttribute("src",image1source);
n2=Math.random();
n2*=6;
n2++;
var n2=Math.floor(n2);
var image2source ="dice"+n2+".png";
var image2=document.querySelector('.img2');
image2.setAttribute("src",image2source);
document.querySelector('h1').style.fontSize="5rem";
if(n1>n2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(n2>n1){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}