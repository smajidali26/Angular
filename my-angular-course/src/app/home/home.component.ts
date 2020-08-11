import { Component, OnInit, OnDestroy } from '@angular/core';
import{ interval, Subscription, Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor() { }
  private mySubscription:Subscription;
  ngOnInit(): void {
    /*this.mySubscription = interval(1000).subscribe(x=>{
      console.log(x);

    });
*/
    const myFirstObserver = Observable.create(observer =>{
      let count =0;
      setInterval(()=>{
        observer.next(new Date().toString());
        //console.log();
        count++;
        if(count>5)
        {
          observer.error(new Error('Count is greater than 5'));

        }
        if(count>3)
        {
          observer.complete()
        }
      },1000)
    });

    this.mySubscription = myFirstObserver.subscribe(data =>{
      console.log(data);
    },error =>{console.log(error);},
    complete =>{console.log('Completed')});
  }
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();

  }
}
