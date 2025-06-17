# Projects related to DOM


## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 (adding functionality using js)

```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

## Project 2 (adding functionality using js)
```Javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerHTML = "Please enter valid height"
  }

  else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerHTML = "Please enter valid weight"
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //display the result now
    result.innerHTML = `Your BMI is: ${bmi}`
  }
})
```

## project 3 (adding functionality using js)
```Javascript
const clock = document.getElementById('clock');

setInterval(function(){
   let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
},1000);
```