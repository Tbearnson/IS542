

var head = '<ul> <li><a href="index.html">Home</a> </li> | <li><a href = "DjangoSites.Html">Sample Sites</a> </li> </ul>';

var foot =  '<a href = "https://twitter.com/TBearnson29"> <img src= "css/img/twitter.png"></a> <a href = "https://www.facebook.com/j.tyson.bearnson"> <img src= "css/img/facebook.jpeg"></a> <a href="mailto:Tbearnson@gmail.com"> <img src= "css/img/gmail.gif"></a>'

window.onload = function(){

	myHeader();
    myFooter();

}


function myHeader()
{
document.getElementById("header").innerHTML= this.head;

}


function myFooter()
{
document.getElementById("footer").innerHTML= this.foot;
}