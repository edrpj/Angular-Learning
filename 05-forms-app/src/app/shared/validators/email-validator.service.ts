import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, Subscriber, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const htttpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber: Subscriber<unknown>) => {
        console.log({ email });

        if (email === 'eder@google.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }

        subscriber.next(null);
        subscriber.complete();
      }
    );

    return htttpCallObservable;
  }
}
