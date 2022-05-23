const holes = document.querySelectorAll('.trou');
const myScore = document.querySelector('.score');
const moles = document.querySelectorAll('.souris');
const buton = document.querySelector('button');
let etat = false;


let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
   // clearTimeout(time);
  }

  buton.addEventListener('click',(e)=>{
    if (etat === false){
      etat = true;
      e.preventDefault()
      myScore.textContent = 0;
      score = 0;
      timeUp = false;
      peep();
      buton.style.background="red";
      setTimeout(()=>timeUp = true,20000)
     //console.log(timeUp);
    }
    else{
      etat = false;
      location.reload();
      
    }
    
     
     
      
  })
  function book(e){
      if(!e.isTrusted)return; //parametre par defaut de l'evenement sur le l'objet
      score++;
      this.classList.remove('up');
      myScore.textContent = score;
      //clearTimeout(lastHole);
      
  }
  moles.forEach(mole => mole.addEventListener('click',book))
 
 
  