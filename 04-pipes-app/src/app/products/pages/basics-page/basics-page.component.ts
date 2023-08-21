import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'eder';
  public nameUpper: string = 'EDER';
  public fullname: string = 'eDeR PinEDa';

  public customDate: Date = new Date();
}
