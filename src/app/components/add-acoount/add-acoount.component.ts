import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { ServerDataService } from 'src/app/services/server-data.service';

@Component({
  selector: 'app-add-acoount',
  templateUrl: './add-acoount.component.html',
  styleUrls: ['./add-acoount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAcoountComponent implements OnInit {
  
    errors = {
        name: 'This field is required',
    }

  constructor(private formBuilder: FormBuilder,private router: Router, private serverDataService: ServerDataService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      business_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country_name: [''],
      phone_info: ['', [Validators.pattern("^[0-9\-]*$"), Validators.minLength(8)]],
      meeting_location: ['']
    });

  }
  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit() {
    this.serverDataService.addBusiness(this.addForm.value).subscribe( data => {
        this.router.navigate(['']);
    }, err => {
      alert('Error while adding account, please try again');
    })
  }

}
