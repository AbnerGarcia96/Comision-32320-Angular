import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  numbers$ = interval(1000);
  numbersSuscription!: Subscription;
  number!: number;

  ngOnInit(): void {
    // this.numbersSuscription = this.numbers$.subscribe({
    //   next: (number) => (this.number = number + 1),
    // });
    this.numbersSuscription = this.numbers$.subscribe(
      (number) => (this.number = number + 1)
    );
  }

  ngOnDestroy(): void {
    this.numbersSuscription.unsubscribe();
  }
}
