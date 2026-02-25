import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Missing import add kiya
import { FormsModule } from '@angular/forms';     // Missing import add kiya
import { RouterModule, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Sabhi required modules ko ek hi array mein merge kar diya hai
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    RouterOutlet
  ],
  templateUrl: './app.html'
})
export class App {
  // Aapka logic yahan aayega
}
