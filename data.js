function add(){
   let k=document.getElementById("Name").innerHTML.value
   let o=document.getElementById("Email").innerHTML.value
   let p=document.getElementById("Name").innerHTML.value
   if(k==""){
    document.getElementById("a").innerHTML="*please enter user name"
   }
   else
   if(k.length<4){
    document.getElementById("a").innerHTML="*User name must be 6 characters"
   }
   if(o==""){
      document.getElementById("b").innerHTML="*please enter Phone number"
     }
     else
     if(o.length<=10){
      document.getElementById("b").innerHTML="*please enter Valide Phone number"
     }

return false
}