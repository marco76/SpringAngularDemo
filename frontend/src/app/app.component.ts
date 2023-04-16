import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpClientModule]
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
  }

  serverMessage = this.httpClient.get<{message: string}>("api/message");
}
