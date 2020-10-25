import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data: FormGroup;
  sending = false;
  sentSuccess = false;

  constructor(
    private builder: FormBuilder,
    private service: ContactService
  ) { }

  ngOnInit(): void {
    this.data = this.builder.group(
      {
        Name: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
        Comment: new FormControl('')
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
    const data = {
      'subject': 'Website: Contact Us submission',
      'body': JSON.stringify(FormData)
    }
    this.sending = true;
    this.sentSuccess = false;
    this.service.send(data).subscribe(
      data => {
        this.sentSuccess = true;
        this.data.reset();
        this.sending = false;
      },
      error => {
        // error
        console.warn(error);
        this.sending = false;
      }
    )
  }

}
