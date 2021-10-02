document.getElementById('shareButton').addEventListener('click', function showShare() 
{
    document.getElementById("share").classList.toggle("show");
});
// document.getElementById('shareButton').addEventListener('click', function showShare() 
// {
//     document.getElementById("share").classList.remove("show");
// });


document.getElementById('b1').addEventListener('click', function click() 
{
    
document.getElementById("modalbg").classList.add("open");
});

// function click(){
//     console.log("click")
//     document.getElementById("modalbg").classList.add("open");
// }

document.getElementById('cancel').addEventListener('click', function exit() 
{
    document.getElementById("modalbg").classList.remove("open");
});



document.getElementById('b2').addEventListener('click', function clickSP() 
{
    document.getElementById("modalspbg").classList.add("open0");  
});
document.getElementById('cancelbtn').addEventListener('click', function exitSP() 
{
    document.getElementById("modalspbg").classList.remove("open0");
});



function menu() 
{
    document.getElementById('hamburger').classList.toggle("change"); 
    document.getElementById("navContent").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}
  
