import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public links: {[k: string]: string}[] = [
    {link: '/tbc', text: 'DATA VISUALS'},
    {link: '/sunset', text: 'SUNSET'},
    {link: '/starry-night', text: 'CSS SECRETS'},
    {link: '/css-secrets', text: 'STARRY NIGHT'},
    {link: '/tbc', text: 'HOLD YOUR BREATH'}
  ];
}
