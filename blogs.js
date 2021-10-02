document.getElementById('lm1').addEventListener('click' , function fn() 
{
    document.getElementById('blog1').classList.toggle('show');
    document.getElementById('blog2').classList.remove('show1');
    document.getElementById('blog3').classList.remove('show2');
});

document.getElementById('lm2').addEventListener('click' , function fn() 
{
    document.getElementById('blog2').classList.toggle('show1');
    document.getElementById('blog1').classList.remove('show');
    document.getElementById('blog3').classList.remove('show2');
});

document.getElementById('lm3').addEventListener('click' ,function fn() 
{
    document.getElementById('blog3').classList.toggle('show2');   
    document.getElementById('blog2').classList.remove('show1');
    document.getElementById('blog1').classList.remove('show');
})