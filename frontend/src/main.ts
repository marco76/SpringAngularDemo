import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

bootstrapApplication(AppComponent, { // we removed the module to go full standalone
    providers: [
        importProvidersFrom(
            HttpClientModule // we use the HttpClient in our AppComponent example
        )
    ]
}).catch(err => console.error(err));
