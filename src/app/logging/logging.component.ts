import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent {
  //componente baglı olan bir html sayfasında bu bülgiyi kullanacaksak public yazmalıyız.
  constructor(public loggingService: LoggingService) {}
  messageList: string[] = [];

  ngOnInit() {
    this.messageList = this.loggingService.messages;
  }

  clearMessage() {
    this.loggingService.clear();
    this.messageList = [];
  }
}
