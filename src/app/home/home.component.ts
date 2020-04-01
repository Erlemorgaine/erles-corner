import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public links: {[k: string]: string}[] = [
    {link: '/tbc', text: 'Hou je adem in'},
    {link: '/sunset', text: 'Zonsondergang'},
    {link: '/starry-night', text: 'CSS Secrets'},
    {link: '/css-secrets', text: 'Sterrennacht'},
    {link: '/tbc', text: 'Hou je adem in'}
  ];
}
