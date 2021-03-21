import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessItem } from 'src/app/entities/business-item';
import { ServerDataService } from 'src/app/services/server-data.service';

@Component({
  selector: 'app-businesses-list',
  templateUrl: './businesses-list.component.html',
  styleUrls: ['./businesses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessesListComponent {
  dataSource: any;
  constructor(private serverDataService: ServerDataService) { }
  @Input() businesses: BusinessItem[] = []
  @Output() itemDeleted = new EventEmitter<string>();
  
  deleteItem(user: BusinessItem) {
    this.serverDataService.deleteBusiness([user.uid])
      .subscribe( data => {
        this.businesses = this.businesses.filter(u => u.uid !== user.uid);
        this.itemDeleted.emit('deleted')
        
      }, err => {
        alert('Error while deleting account')
      })
  }



}
