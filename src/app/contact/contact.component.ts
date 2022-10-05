import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data: UntypedFormGroup;
  sending = false;
  sentSuccess = false;

  constructor(
    private builder: UntypedFormBuilder,
    private contactService: ContactService,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) { }

  ngOnInit(): void {
    this.data = this.builder.group(
      {
        Name: new UntypedFormControl('', [Validators.required]),
        Email: new UntypedFormControl('', [Validators.compose([Validators.required, Validators.email])]),
        Comment: new UntypedFormControl('')
      },
      // { updateOn: "blur" }
    );
  }

  get Name(): any {
    return this.data.get('Name');
  }
  get Email(): any {
    return this.data.get('Email');
  }
  get Comment(): any {
    return this.data.get('Comment');
  }

  onSubmit(FormData) {
    var body: string = '';
    Object.entries(FormData).forEach(([key, value]) => {
      body += `${key}: ${value}\n`;
    })
    const data = {
      'subject': 'Website: Contact Us submission',
      'body': body,
    }
    if(environment.aleckayetion_api_to){
      Object.assign(data, {'to': environment.aleckayetion_api_to});
    }
    console.log(data)
    this.sending = true;
    this.sentSuccess = false;
    this.recaptchaV3Service.execute('contactUs')
    .subscribe(
      (token) => {
        this.sendEmail(data, token);
      },
      (error) => {
        // TODO: notify user of error
      }
    );
  }

  private sendEmail(data, token){
    this.contactService.verify_recaptcha(token).subscribe(
      r => {
        const j = JSON.parse(r.toString());
        if(j.success && (parseFloat(j.score) > 0.5)){
          this.contactService.send(data).subscribe(
            res => {
              this.sentSuccess = true;
              this.data.reset();
              this.sending = false;
            },
            error => {
              // error
              // console.warn(error);
              this.sending = false;
            }
          )
        }
        else {
          this.sending = false;
        }
      },
      error => {
        // error
        console.warn(error);
        this.sending = false;
      }
    )
  }

}
