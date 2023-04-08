import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = "https://4w34g2oo3ppeeskioozfstbjdi0sgjgp.lambda-url.us-east-2.on.aws/api/Email";
  constructor(private http: HttpClient) { }

  
  transform(rawNum:string) {
    rawNum = "+1"+ rawNum;

    const countryCodeStr = rawNum.slice(0,2);
    const areaCodeStr = rawNum.slice(2,5);
    const midSectionStr = rawNum.slice(5,8);
    const lastSectionStr = rawNum.slice(8);

    return `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl('', ),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
  });
 
  SendEmail(input : any ) {
    const sender ={
      "To" : "miraily@clovercreditsolutions.com",
      "Subject": "New Lead",
      "Body": "<h1>Hello Clover</h1>\n <h3>This person may be interested in your services.</h3> \n <p>Name: " 
      + input.firstName + "</p> \n <p>Last Name: " 
      + input.lastName + "</p> \n <p>Email: " 
      + input.email +" </p>\n <p>Phone:"
      + this.transform(input.phone) +"</p>"+
      " <h3>Info Web Solutions +</h3>"
    };
    return this.http.post<any>(this.url, sender);
  }

  formD: FormGroup = new FormGroup({
    $key: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
    
  });
  
  SendEmailDownload(input : any ) {
    const sender ={
      "To" : "miraily@clovercreditsolutions.com",
      "Subject": "New Lead",
      "Body": "<h1>Hello Clover</h1>\n <h3>The owner of this email just downloaded Do-It-Yourself Guide.</h3> \n <p>Email: " 
      + input.email +" </p>\n <p>Name: " 
      + input.firstName + "</p> \n <p>Last Name: " 
      + input.lastName + "</p> \n <p>Phone: " 
      + this.transform(input.phone) +"</p>"+
      " <h3>Info Web Solutions +</h3>"
    };
    return this.http.post<any>(this.url, sender);
  }

 

}
