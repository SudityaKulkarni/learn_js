//generate random color logic (did this by myself lesgoooo!!)

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }

    //return color;
    document.querySelector('body').style.backgroundColor = color;
};


//console.log(randomColor());

//functionality for start 
document.querySelector('#start').addEventListener('click',function(){
    change = setInterval(randomColor,1000);
})

//fucntionality for stop button
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(change);
})