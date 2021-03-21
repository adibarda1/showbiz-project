import { Component, Input, OnInit } from '@angular/core';
import { ServerDataService } from 'src/app/services/server-data.service';
import {Router} from "@angular/router";
import { BusinessItem } from 'src/app/entities/business-item';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface SortTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-clients-accounts',
  templateUrl: './clients-accounts.component.html',
  styleUrls: ['./clients-accounts.component.scss']
})
export class ClientsAccountsComponent implements OnInit {
  currentSortType: string = "created_at";
  currentSortOrderType: string = "desc";
  businesses: BusinessItem[];
  availblePageNumbers = [5,10,15,20,50];
  currentPage: number = 1;
  perPage: number = 10;
  fromRecord: number;
  toRecord: number;
  availablePages = 1;
  totalItems = 0;
  isErrorMode = false;
  isLoading = false; 
  sortTypes: SortTypes[] = [
    {value: 'created_at', viewValue: 'Creation Date'},
    {value: 'last_seen', viewValue: 'Last seen'},
  ];
  sortOrderTypes: SortTypes[] = [
    {value: 'asc', viewValue: 'Ascending'},
    {value: 'desc', viewValue: 'Descending'},
  ];
  filter: string = '';
  
  constructor(private formBuilder: FormBuilder, private serverDataService: ServerDataService, private router: Router) { }
  
  searchForm: FormGroup;
  
  addClient(){
    this.router.navigate(['add-account']);
  }

  ngOnInit(): void {
    this.refreshBusinesses();
    this.searchForm = this.formBuilder.group({
      filter: ['', Validators.pattern('[a-zA-Z0-9]*')],
    });
  }

  get f() { return this.searchForm.controls; }

  refreshBusinesses(resetCurrentPage = false){
    this.isLoading = true; //This flag will prevent pagination during data loading
    if (resetCurrentPage)
      this.currentPage = 1;
    this.serverDataService.getBusinessListData(this.currentPage, this.perPage, this.currentSortType, this.currentSortOrderType, this.filter).subscribe((data)=>{
      this.businesses = data.businesses;
      this.updatePaginationValues(data)
    }, (err) => {
      this.isErrorMode = true;
      this.businesses = [];
      this.availablePages = 0;
      this.totalItems = 0;
      this.isLoading = false; 
    });

  }
  
  //This function loads data on a new page
  changePage(pageNum: number){
    this.currentPage = pageNum;
    this.refreshBusinesses();
  }

  //This function will update all pages data
  updatePaginationValues(data){
    this.availablePages = Math.ceil(data.total / this.perPage);
    this.totalItems = data.total;
    this.isErrorMode = false;
    this.isLoading = false; 
    this.fromRecord = (this.perPage * (this.currentPage-1))+1;
    this.toRecord = (this.perPage * (this.currentPage-1))+this.perPage
    if (this.totalItems < this.toRecord)
        this.toRecord = this.totalItems
  }
  
  //Send a get request when searching for a string 
  onSearch(){
    if (this.searchForm.controls.filter.value){
      this.filter = this.searchForm.controls.filter.value;
      this.refreshBusinesses(true);
      this.filter ='';
    }
  }
}
