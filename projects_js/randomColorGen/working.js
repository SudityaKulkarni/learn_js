//generate random color logic (did this by myself lesgoooo!!)

isRunning = false;
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }

    document.querySelector('body').style.backgroundColor = color;
};

//functionality for start 
document.querySelector('#start').addEventListener('click',function(){
    if(!isRunning)
    {
        change = setInterval(randomColor,1000);
        isRunning = true;
    }
})

//fucntionality for stop button
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(change);
    isRunning = false;
})