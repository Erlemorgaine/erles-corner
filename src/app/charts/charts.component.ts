import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {ActivatedRoute, Router} from "@angular/router";
import {ColorBlindService} from "../services/color-blind.service";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  colorBlindModeOn: boolean = false;
  url: string;
  chartLinks: {[k: string]: string}[] = [
    {link: 'default', text: 'Try-and-see'},
    {link: 'lego', text: 'Lego land'}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public colorBlindService: ColorBlindService
  ) {
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontFamily = 'Raleway';
    Chart.defaults.global.elements.line.borderColor = 'white';
    Chart.defaults.global.legend.onHover = (e: Event) => (<HTMLElement>e.target).style.cursor = 'pointer';

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.url = this.route.snapshot.firstChild.url[0].path;
  }

  setUrl(val: string): void {
    this.url = val;
  }

  toggleColorBlindMode(val: boolean): void {
    this.colorBlindModeOn = val;
    this.colorBlindService.colorBlindModeOn$.next(val);
  }
}
