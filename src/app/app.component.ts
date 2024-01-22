import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asker';
  sendYes(){
    console.log('hello')
  }
  handleHover() {
    const button = document.getElementById('NoBtn');
    if (button) {
      // Generate new random values for left and top positions
      const leftPosition = Math.ceil(Math.random() * 500);
      const topPosition = Math.ceil(Math.random() * 500);
  
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
}
