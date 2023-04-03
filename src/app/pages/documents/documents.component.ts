import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  showDoc: boolean = true;

  constructor(public services: ContactService, private toastr: ToastrService, private route: Router, private spinner: SpinnerService, public translate: TranslateService) { }

  ngOnInit(): void {
  }
  SendEmailDownload(formData: any) {
    if (this.services.formD.valid) {
      this.services.SendEmailDownload(formData).subscribe(
        response => {
          this.spinner.show();
          this.downloadDocument();
          this.toastr.success('The guide has already been downloaded, check in your download folder!', 'Thank you for choosing us!');
          this.services.formD.reset();
          this.route.navigate(['/']);

        },
        error => {
          this.toastr.warning('Sorry an error occurred. Try again later', 'Thank you for choosing us!');
         
        }
      );
    }
  }

  downloadDocument() {
    var FileName = "";
    const downloadLink = document.createElement('a');

    if (this.translate.currentLang == "Español") {
      FileName = "Clover-Do-It-Yourself-Spanish.pdf";
    }
    else {
      FileName = "Clover-Do-It-Yourself.pdf";
    }
    downloadLink.href = "assets/document/" + FileName;
    downloadLink.setAttribute('download', FileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();

  }
}

