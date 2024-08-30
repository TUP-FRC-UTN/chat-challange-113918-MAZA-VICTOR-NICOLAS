import { Component, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxChatComponent } from "./box-chat/box-chat.component";
import { mensagges } from './models/menssages';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxChatComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatchallenge';
  chats: mensagges[] = [];
  guardarMensaje(event: mensagges) {
    this.chats.push(event)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
}
