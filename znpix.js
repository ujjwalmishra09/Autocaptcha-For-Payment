
//Filtering Process 
function filtPix(p,pixMap)
{
var charhieght=0;
var chary=0;
var charx=0;
var charwidth=0;
var i;
var j;

for(i=0;i<40;i++)
{
    for(j=0+p;j<33+p;j++)
    {
      if(pixMap[i][j]==1)
      {
       charhieght=charhieght+1;
       break;
      }
      if(charhieght==1)
      {
      chary=i;
      }
    }
}
for(i=0+p;i<33+p;i++)
{
   for(j=0;j<40;j++)
   {
   if(pixMap[j][i]==1)
     {
     charwidth=charwidth+1;
     break;
     }
   if(charwidth==1)
     {
     charx=i;
     }
   }
}
var cmap=[];
for(i=chary;i<chary+charhieght-1;i++)
{
var tempn=[];
for(j=charx;j<charx+charwidth-1;j++)
{
tempn.push(pixMap[i][j]);
}
//$("#pixmap").append("<p>["+tempn+"],</p>");
//Above commented code for extracting the key in caf.js after enabling this you can watch the extracted character in 1 0 array 
cmap.push(tempn);
}
return cmap;
}

