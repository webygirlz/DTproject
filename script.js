let click = true
document.getElementById("left_arrowkeyimg").addEventListener("click",function(){
      const getfirstdiv = document.getElementById("arrowClick")
     const getarrowClickblack = document.getElementById("arrowClickblack");
     const getarrowClick_p = document.getElementById("arrowClick_p");
     const getarrowClickblack_ul = document.getElementById("arrowClickblack_ul");
      if(click){
     // white div arrow wala
    
     getfirstdiv.style.width ="24rem";
     getfirstdiv.style.height ="4rem";
     // black
    
     getarrowClickblack.style.width ="24rem";
     getarrowClickblack.style.height ="34rem";

      getarrowClick_p.style.display="block";
      getarrowClickblack_ul.style.display ="block";
     }
     else{
        getfirstdiv.style.width = "";
        getfirstdiv.style.height = "";

        getarrowClickblack.style.width = "";
        getarrowClickblack.style.height = "";

        getarrowClick_p.style.display="none";
        getarrowClickblack_ul.style.display="none";
      
     } 
     click = !click; 
     
})
   









async function getdata(){
    await fetch("./data.json")
    .then(response => response.json())
    .then(data => displaydata(data))
    .catch(error => console.error('error' ,error))
} 


function displaydata(data){

    // heading
      const heading = document.querySelector(".left p");
     let headingdata=  data.tasks[0].assets[0].asset_title;
      heading.innerHTML = headingdata;
    
    // content
    const content = document.querySelector(".youtudiv p");
    let contentdata= "<b>Description:</b> " + `${data.tasks[0].assets[0].asset_description}`;
     content.innerHTML = contentdata;  
      
// 2th
     // heading
     const heading1 = document.querySelector(".seconddiv p");
     let headingdata1=  data.tasks[0].assets[1].asset_title;
      heading1.innerHTML = headingdata1;
    
    // content
    const content1 = document.querySelector(".seconddescription p");
    let contentdata1= "<b>Description:</b> " + `${data.tasks[0].assets[1].asset_description}`;
     content1.innerHTML = contentdata1;  
      


         
// 3th
     // heading
     const heading2 = document.querySelector(".thirddiv p");
     let headingdata2=  data.tasks[0].assets[2].asset_title;
      heading2.innerHTML = headingdata2;
    
    // content
    const content2 = document.querySelector(".thirddescription p");
    let contentdata2= "<b>Description:</b> " + `${data.tasks[0].assets[2].asset_description}`;
     content2.innerHTML = contentdata2;  
      

          
// 4th
     // heading
     const heading3 = document.querySelector(".fourthdiv p");
     let headingdata3=  data.tasks[0].assets[3].asset_title;
      heading3.innerHTML = headingdata3;
    
    // content
    const content3 = document.querySelector(".fourthdescription p");
    let contentdata3= "<b>Description:</b> " + `${data.tasks[0].assets[3].asset_description}`;
     content3.innerHTML = contentdata3;  
         
}
getdata();

