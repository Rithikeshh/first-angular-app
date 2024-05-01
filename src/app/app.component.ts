import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContainerComponent} from './Container/container.component';
import { NavComponent } from './nav/nav.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'first-angular-app';
  message = 'First Angular';
  inputValue = '';
  isVisible = true;
  listItems = ['first item', 'second item', 'third item'];
  

  changeText(){
    this.message = this.inputValue;
  }
  handleInput(e:Event){
    this.inputValue = (e.target as HTMLInputElement).value;
  }
  // radioValue = Object.assign(
  //   ()=>{
  //     return this.radioValue.value
  //   },
  //   {value: 0},
  //   {set : (val: number)=>{
  //     this.radioValue.value = val;
  //   }}
  // );
  radioValue = (()=>{
    const f = ():number=>{
      return f.value;
    }
    f.value = 0;
    f.set = (val: number)=>{
      f.value = val;
    }
    return f;
  })()
  
  
}
// function radValue():number{
//   radValue.set = ()=>{

//   }
//   return this.value;
// }
