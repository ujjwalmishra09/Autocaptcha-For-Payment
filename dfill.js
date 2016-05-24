/***
 *   Collecting the edit box node for captcha 
 ***/

fillbank();
function fillbank(){
var i=0;
var itag=document.getElementsByTagName("input");
var text=[];
for(i=0;i<itag.length;i++)
{
if(itag[i].getAttribute("type")=="text"||itag[i].getAttribute("type")=="Text"||itag[i].getAttribute("type")=="TEXT")
{
text.push(i);
}
}

cf(itag[text[2]]);

}

