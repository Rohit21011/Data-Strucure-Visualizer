function dataSturcureTab(tablinkId,tabPannelId) {

    var i, tabcontent, tablink;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    document.querySelector('.active').classList.remove('active')
  
    document.getElementById(tablinkId).classList.add("active");
  
   
    document.getElementById(tabPannelId).style.display = "block";
 
  }
  
  var stackCount=1,queueCount=1;
  function push(){
    if(stackCount>5){
      document.querySelector(".message-box").classList.add("error-massage");
      setTimeout(() => {
        document.querySelector(".message-box").classList.remove("error-massage");
    }, 1200);
      document.querySelector(".message-box p").innerHTML=`Stack Overflow`;
      return;
    }
    const getValue=document.querySelector("input").value;
    if(getValue==""){

      document.querySelector(".message-box p").innerHTML=`Please Enter a value`;
      document.querySelector(".message-box").classList.add("error-massage");
      setTimeout(() => {
        document.querySelector(".message-box").classList.remove("error-massage");
    }, 1200);
      return;
    } 
    document.querySelector(".message-box p").innerHTML=`Item ${getValue} is Pushed`;
    document.querySelector(".stack-discription p span").innerHTML=`${getValue}`;
    document.querySelector(".main-stack").innerHTML+=`<div>${getValue}</div>`;
    
    stackCount++;
  }
  
  function pop(){
  
    if(stackCount==1){
      console.log(stackCount);
      document.querySelector(".message-box").classList.add("error-massage");
      setTimeout(() => {
        document.querySelector(".message-box").classList.remove("error-massage");
    }, 1200);
      document.querySelector(".message-box p").innerHTML=`Stack Underflow`;
      return;
    }
   
  const select= document.querySelector(".main-stack div");
  console.log(select.parentNode.lastChild.innerHTML);
  if(stackCount!=2){
    document.querySelector(".stack-discription p span").innerHTML=`${select.parentNode.lastChild.previousSibling.innerHTML}`;
  }else{
    document.querySelector(".stack-discription p span").innerHTML=``;
  }
  document.querySelector(".message-box p").innerHTML=`Item ${select.parentNode.lastChild.innerHTML  } is Poped`;
  
  select.parentNode.lastChild.remove();
  stackCount--;
  }
  function resetStack(){
    document.getElementById("Form").value=" ";
    const myNode = document.getElementsByClassName("main-stack");

    
  }

  function enqueue(){
 
    if(queueCount>5){
      document.querySelector(".queuePannel .message-box p").innerHTML=`Queue is full`;
      document.querySelector(".queuePannel .message-box").classList.add("error-massage");
      setTimeout(() => {
        document.querySelector(".queuePannel .message-box").classList.remove("error-massage");
    }, 1200);
      
      return;
    }
    const getValue=document.querySelector(".queuePannel .Queue-opratons input").value;
    console.log(getValue);    
    if(getValue==""){
      document.querySelector(".queuePannel .message-box p").innerHTML=`Please Enter a value`;
      document.querySelector(".queuePannel .message-box").classList.add("error-massage");
      setTimeout(() => {
        document.querySelector(".queuePannel .message-box").classList.remove("error-massage");
    }, 1200);
      document.querySelector(".queuePannel .message-box p").innerHTML=`Please Enter a value`;
      return;
    }   
    
    newNode = document.createElement("div");

    newNode.innerHTML = `${getValue}`;
     if( queueCount==1){
       document.querySelector(".queuePannel #queueDescreption #front").innerHTML=`${getValue}`;
     }  
     document.querySelector(".queuePannel #queueDescreption #rear").innerHTML=`${getValue}`;
    document.querySelector(".queuePannel .message-box p").innerHTML=`Item ${getValue} is Queued`;
    document.querySelector(".mainQueue").prepend(newNode);
    queueCount++;
    
  }

  function dequeue(){
    
    if(queueCount==1){
      document.querySelector(".queuePannel .message-box p").innerHTML=`Queue Underflow`;
      document.querySelector(".queuePannel .message-box").classList.add("error-massage");
      setTimeout(() => {
        document.querySelector(".queuePannel .message-box").classList.remove("error-massage");
    }, 1200);
      
      return;
    }
  
   console.log(queueCount)
  const select= document.querySelector(".mainQueue div");
if(queueCount!=2){
  document.querySelector(".queuePannel #queueDescreption #front").innerHTML=`${select.parentNode.lastElementChild.previousSibling.innerHTML}`;
}else{
  document.querySelector(".queuePannel #queueDescreption #front").innerHTML=``;
  document.querySelector(".queuePannel #queueDescreption #rear").innerHTML=``;
}

  document.querySelector(".queuePannel .message-box p").innerHTML=`Item ${select.parentNode.lastElementChild.innerHTML} is Dequeued`;

  
  select.parentNode.lastElementChild.remove();
  queueCount--;
  }
  function resetQueue(){
    document.getElementById("queueForm").value=" ";
    
  }
