import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { BusinessItem } from '../../../entities/business-item'

@Component({
  selector: 'app-businesses-list-item',
  templateUrl: './businesses-list-item.component.html',
  styleUrls: ['./businesses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessesListItemComponent implements OnInit {
  @Input() item: BusinessItem;

  @Output() deleteRequest = new EventEmitter<{ event: any; uid: string }>();
  public initials: string;

  private colors = [
    '#EB7181', 
    '#468547', 
    '#ad9534', 
    '#3670B2', 
    '#ea0f7c',
    '#4434ad'
  ];
  circleColor: string;
  counterIndex: number = 0;
  constructor() {
  }
  
  ngOnInit() {
    
  }
    
  getCircleColor(){
    const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
    return this.colors[randomIndex];
  }

  deleteClicked(event: any) {
    this.deleteRequest.emit({ event, uid: this.item.uid });
  }

  //name initials for avatar
  createInititals(name) {
    let initials = "";
    let words = name.split(" ")
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].charAt(0) === ' ') {
            continue;
        }
        else {
            initials += words[i].charAt(0).toUpperCase();

            if (initials.length == 2) {
                break;
            }
        }
    }

    return initials;
}
}
