import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root',
})
export class ColorBlindService {

  public colorBlindModeOn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
