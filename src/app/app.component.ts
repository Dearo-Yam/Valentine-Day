import { Component, OnInit } from '@angular/core';
import { delay, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    clearInterval(this.interval)
  }
  title = 'asker';
  selectedPlace =''
  selectedDessert = ''
  selectedTime = '';
  jokeTold = false;
  foodPlaces: object[] = [{'HAIDILAO':'https://www.yelp.com/biz/haidilao-hot-pot-arcadia-arcadia?osq=Haidilao'},
   {'Thirsty Cow':'https://www.yelp.com/biz/thirsty-cow-korean-bbq-city-of-industry?osq=Thirsty+Cow+Kbbq'},
    {'Gyu-Kaku':'https://www.yelp.com/biz/gyu-kaku-japanese-bbq-pasadena-pasadena-2?osq=Gyu-Kaku+Japanese+Bbq'},
     {'Chubby Cattle':'https://www.yelp.com/biz/chubby-cattle-monterey-park-monterey-park-2'},
      {'YAMASHIRO':'https://www.yelp.com/biz/yamashiro-hollywood-hollywood'}];
  styles: object[] = [{'Boba':'../assets/bubble-tea.png'},{'Ice Cream':'../assets/ice-cream-cone.png'},{'Cake':'../assets/strawberry-cake.png'}]
  availableTimes: string[] = ['6:00','6:30','7:00','7:30','8:00','8:30','9:00'];
  interval = setInterval(this.hearts,100)
  sendYes(){
    var hide = document.getElementById('panel');
    if(hide){
      hide.style.display = 'none'
      var show = document.getElementById('secondPhase')
      if(show){
        show.style.display = 'block'
      }
    }
  }
  handleHover() {
    var button = document.getElementById('NoBtn');
    if (button) {
      
      // Generate new random values for left and top positions
      const leftPosition = -Math.ceil(Math.random() * 500);
      const topPosition = -Math.ceil(Math.random() * 500);
  
      // Apply the new transform values with px units and add a transition effect
      button.style.transition = 'transform 0.3s ease'; // Adjust the duration and timing function as needed
      button.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;
      const txt = document.getElementById('display')
      if(txt){
        txt.style.display = 'block'
        setTimeout(function(){txt.style.display = 'none'},3000)
      }
      console.log('Hello, I am being hovered');
    }
  }
  displayText(){
    console.log('wow you clicked me')
  }
  sendPlaceConfirmation(place:string){
    if(this.selectedPlace.length ===0){
      this.selectedPlace = place
      const selectedBtn = document.getElementById(place)
      if(selectedBtn){
        selectedBtn.style.backgroundColor = 'bisque'

      }
    }else{
      var temp = this.selectedPlace
      this.selectedPlace = place
      const selectedBtn = document.getElementById(place)
      const deselectedBtn = document.getElementById(temp);
      if(selectedBtn && deselectedBtn){
        selectedBtn.style.backgroundColor = 'bisque'
        deselectedBtn.style.backgroundColor = 'beige';
      }
      }
  }
  openWindow(location:string){
    window.open(location,'_blank')
  }
  setDessertOption(option: any){
        
    if(this.selectedDessert.length ===0){
      this.selectedDessert = option
      const selectedBtn = document.getElementById(this.selectedDessert)
      if(selectedBtn){
        selectedBtn.style.backgroundColor = 'bisque'
      }
    }
    else{
      var temp = this.selectedDessert
      this.selectedDessert = option
      const selectedBtn = document.getElementById(this.selectedDessert)
      const deselectedBtn = document.getElementById(temp);
      if(selectedBtn && deselectedBtn){
        selectedBtn.style.backgroundColor = 'bisque'
        deselectedBtn.style.backgroundColor = 'beige';
      }
      }


  }
  backToFoodSelection(){
    const show = document.getElementById('secondPhase')
    const hide = document.getElementById('thirdPhase')
    if(show && hide){
      show.style.display = 'block'
      hide.style.display = 'none'
    }
  }
  goPhaseThree(){
    if(this.selectedPlace.length > 0){
      const hide = document.getElementById('secondPhase');
      const show = document.getElementById('thirdPhase');
      if(show && hide){
        hide.style.display = 'none'
        show.style.display = 'block'
      }
    }
  }
  goPhaseFour(){
    const hide = document.getElementById('thirdPhase');
    const show = document.getElementById('fourthPhase');
    if(this.selectedDessert.length > 0){
      if(hide && show ){
        hide.style.display = 'none';
        show.style.display = 'block';
      }
    }
  }
  pickUpTime(time:any){
    if(this.selectedTime.length ===0){
      this.selectedTime = time
      const selectedBtn = document.getElementById(this.selectedTime)
      if(selectedBtn){
        selectedBtn.style.backgroundColor = 'bisque'
      }
    }
    else{
      var temp = this.selectedTime
      this.selectedTime = time
      const selectedBtn = document.getElementById(this.selectedTime)
      const deselectedBtn = document.getElementById(temp);
      if(selectedBtn && deselectedBtn){
        selectedBtn.style.backgroundColor = 'bisque'
        deselectedBtn.style.backgroundColor = 'beige';
      }
      }
  }
  goBackToDessert(){
    const hide = document.getElementById('fourthPhase')
    const show = document.getElementById('thirdPhase')
    if(hide && show){
      hide.style.display = 'none';
      show.style.display = 'block'
      
    }
  }
  goReview(){
    if(this.selectedTime.length > 0){
      const showJoke = document.getElementById('joke')
      const hideFourthPhase = document.getElementById('fourthPhase')
      if(showJoke && hideFourthPhase && !this.jokeTold){
        showJoke.style.display = 'block'
        hideFourthPhase.style.display ='none';
        setTimeout(() => {
          const showReview =  document.getElementById('review')
          if(showReview){
            this.jokeTold = true;
            showJoke.style.display='none';
            showReview.style.display = 'block';
            this.interval = setInterval(this.hearts,200)
            
          }
        }, 3000);
      }
      else{
        const showReview =  document.getElementById('review')
        if(showReview && hideFourthPhase){
          hideFourthPhase.style.display = 'none';
          showReview.style.display = 'block';
        }
      }

    }
  }
  goBackToTime(){
    const hide = document.getElementById('review')
    const show = document.getElementById('fourthPhase')
    if(hide && show){
      hide.style.display = 'none';
      show.style.display = 'block'
      clearInterval(this.interval)
    }
    
  }
  goConfirmation(){

  }
  hearts(){
    const container = document.querySelector('.container');
    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = `&#10084;`
    creat.style.fontSize = '24px'
    creat.style.position ='fixed'
    creat.style.color = 'red'
    creat.style.top = '-1vh'
    creat.style.animation = 'fall 1s ease-in infinite'
    creat.style.animationDuration = Math.random() * 2 +3 + 's';
    creat.style.left = Math.random() * 100 + 'vw';
    if(container){
      container.appendChild(creat)
      setTimeout(() =>{
        creat.remove()
      },4000);
    }
    console.log(creat)
  }
}
