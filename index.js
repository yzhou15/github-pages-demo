window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Hello, github pages :)'
}

function myFunction(){
	// document.getElementById("demo").innerHTML="Hello World";
	document.getElementById("demo").innerHTML=Get();

}

function Get(){
  let xmlhttp;
  let Mac,Sn,DeviceId 
  if (window.XMLHttpRequest)
  {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
  }
  else
  {
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
          document.getElementById("demo").innerHTML=xmlhttp.responseText;
      }
  }
  xmlhttp.open("GET","http://httpbin.org/get",true);
  xmlhttp.send();


  
}