import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mensagges } from '../models/menssages';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-chat',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './box-chat.component.html',
  styleUrl: './box-chat.component.css'
})
export class BoxChatComponent {
  @Input() userName: string = '';
  @Output() menssages = new EventEmitter<mensagges>();

  chats: mensagges[] = [];
  sms: string = '';
  enviar() {
    const chat: mensagges = {
      user: this.userName,
      message: this.sms
    };
    this.chats.push(chat);
    this.menssages.emit(chat);

  }

}
