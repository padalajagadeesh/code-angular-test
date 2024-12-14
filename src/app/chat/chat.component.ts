import { Component } from '@angular/core';
import { SocketService } from '../sockat-service/sockat.service';
// import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  template: `
    <div *ngFor="let msg of messages">{{ msg }}</div>
    <input [(ngModel)]="message" (keyup.enter)="sendMessage()" placeholder="Type a message" />
    <button (click)="sendMessage()">Send</button>
  `,
})
export class ChatComponent {
  messages: string[] = [];
  message: string = '';

  constructor(private socketService: SocketService) {
    this.socketService.onMessage((msg) => this.messages.push(msg));
  }

  sendMessage() {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }
}
