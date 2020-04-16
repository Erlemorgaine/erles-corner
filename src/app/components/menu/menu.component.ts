import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ColorBlindService} from "../../services/color-blind.service";

export interface ILink {
  link: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() url: string;
  @Input() links: ILink[];

  @Input() withCbm: boolean = false;
  @Input() cbmOn: boolean = false;
  @Input() cbmLink: string;

  @Input() wrapperStyle: {};
  @Input() linkStyle: {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public colorBlindService: ColorBlindService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.url = this.route.snapshot.firstChild?.url[0].path;
  }

  setUrl(val: string): void {
    this.url = val;
  }

  toggleColorBlindMode(val: boolean): void {
    this.cbmOn = val;
    this.colorBlindService.colorBlindModeOn$.next(val);
  }

}
