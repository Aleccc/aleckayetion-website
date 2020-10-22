import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.data = this.builder.group(
      {
        Name: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
        Comment: new FormControl('', [Validators.required])
      },
      { updateOn: "blur" }
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
    console.log(FormData)
    // this.contact.PostMessage(FormData)
    // .subscribe(response => {
    // location.href = 'https://mailthis.to/confirm'
    // console.log(response)
    // }, error => {
    // console.warn(error.responseText)
    // console.log({ error })
    // })
  }

}
