import { Component, OnInit } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';
import {MobileNet} from "@tensorflow-models/mobilenet";

interface IPrediction {
  className: string;
  probability: number;
};

@Component({
  selector: 'app-image-detection',
  templateUrl: './image-detection.component.html',
  styleUrls: ['./image-detection.component.scss']
})
export class ImageDetectionComponent implements OnInit {

  public model: MobileNet;
  public predictions: IPrediction[];
  public loading: boolean;
  public imgSrc: string | ArrayBuffer;
  public menuColor: string = '#7a4349';

  constructor() { }

  async ngOnInit(): Promise<void> {

    this.loading = true;
    this.model = await mobilenet.load();
    this.loading = false;
  }

  async fileChange(event: any): Promise<void> {
    const file = event.target.files[0];

    if (!!file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (res: ProgressEvent<FileReader>) => {
        this.imgSrc = res.target.result;

        setTimeout(async () => {
          this.predictions = await this.model.classify(<HTMLImageElement>document.getElementById("input-image"));
        })
      };

    }
  }
}
