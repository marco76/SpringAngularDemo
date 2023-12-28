import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
  }

  serverMessage = this.httpClient.get<{message: string}>("api/message");
}
