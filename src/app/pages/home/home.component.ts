import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public links: {[k: string]: string}[] = [
    {link: '/charts/default', text: 'DATA VISUALS'},
    {link: '/sunset', text: 'SUNSET'},
    {link: '/image-detection', text: 'GUESS THE IMAGE'},
    {link: '/starry-night', text: 'STARRY NIGHT'},
    {link: '/tbc', text: 'HOLD YOUR BREATH'}
  ];
}
