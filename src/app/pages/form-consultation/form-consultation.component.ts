import { Component, OnInit, Pipe } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';


@Component({
  selector: 'app-form-consultation',
  templateUrl: './form-consultation.component.html',
  styleUrls: ['./form-consultation.component.css']
})


export class FormConsultationComponent implements OnInit {

  //mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  submitted = false;

  constructor(public services: ContactService,private toastr: ToastrService, private route: Router, private spinner: SpinnerService) {
   
  }

  ngOnInit(): void {
    this.services.form.reset();
  }

  sendContact(formData: any){
    if(this.services.form.valid){
        this.services.SendEmail(formData).subscribe(
          response => {
            this.spinner.show();
            this.toastr.success('Within 24 hours our specialists will contact you!', 'Thank you for choosing us!');
            this.services.form.reset();
            this.route.navigate(['/']);
           },
           error => {
            this.toastr.warning('Sorry an error occurred. Try again later', 'Thank you for choosing us!');
           }
        );
    }
  }


}
