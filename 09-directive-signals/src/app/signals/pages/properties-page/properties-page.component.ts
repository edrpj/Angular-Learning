import { Component, OnDestroy, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
})
export class PropertiesPageComponent implements OnDestroy {
  public counter = signal(10);
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.user().last_name}`)
  });

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  onFieldUpdated(field: keyof User, value: string) {
    this.user.mutate((curret) => {
      switch (field) {
        case 'email':
          curret.email = value;
          break;
        case 'first_name':
          curret.first_name = value;
          break;
        case 'last_name':
          curret.last_name = value;
          break;
        case 'id':
          curret.id = +value;
          break;
      }
    });
  }
}
