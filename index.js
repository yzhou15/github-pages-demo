window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Hello, github pages :)'
}

function myFunction(){
	document.getElementById("demo").innerHTML=Get();

}

function Get() {
  let xmlhttp;
  let REFERRER,USER_AGENT,YOURNAME 
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
          let info = xmlhttp.responseText;
          temp =JSON.parse(info);
          // console.log(temp); 
          // console.log(typeof temp);
          // console.log("REFERRER",temp.url); 
          // console.log("USER_AGENT",temp.headers["User-Agent"]); 
          REFERRER=temp.url
          USER_AGENT=temp.headers["User-Agent"]
          YOURNAME="yzhou"
          document.getElementById("REFERRER").innerHTML="REFERRER:"+REFERRER;
          document.getElementById("USER_AGENT").innerHTML="USER_AGENT:"+USER_AGENT;
          document.getElementById("YOURNAME").innerHTML="YOURNAME:"+YOURNAME;

      }
  }
  xmlhttp.open("GET","http://httpbin.org/get",true);
  xmlhttp.send();

  window.open('http://c.fqtag.com/tag/implement-r.js?org=BB6DvPmytpFndg8atDcN&p=[REFERRER]&a=[USER_AGENT]&cmp=[YOURNAME]&fmt=banner&rt=display&sl=1&fq=1','_blank');
  
}