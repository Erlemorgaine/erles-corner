import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public links: {[k: string]: string}[] = [
    {link: 'sunset', text: 'Naar de zonsondergang'}
  ];
}
