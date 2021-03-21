import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { BusinessItem } from '../../../entities/business-item'

@Component({
  selector: 'app-businesses-list-item',
  templateUrl: './businesses-list-item.component.html',
  styleUrls: ['./businesses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessesListItemComponent{
  @Input() item: BusinessItem;

  @Output() deleteRequest = new EventEmitter<{ event: any; uid: string }>();
  public initials: string;

  constructor() {
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
