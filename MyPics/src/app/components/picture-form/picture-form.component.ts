import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { MyPics } from 'src/app/MyPics';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})

export class PictureFormComponent {
  @Output() onSubmit = new EventEmitter<MyPics>
  @Input() btnText!: string

  myPicsForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
     this.myPicsForm = new FormGroup ( {

      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      picture: new FormControl('')

    }) 

  }

  get title () {return this.myPicsForm.get('title')!}
  get description () {return this.myPicsForm.get('description')!}

  onFileSelected(event: any) {
    const [file] : File[] = event.target.files
    this.myPicsForm.patchValue({image: file})
  }

  submit() {
    this.myPicsForm.invalid 
    ? console.error('Erro de validação. Confira as informações')
    : this.onSubmit.emit(this.myPicsForm.value)
  }
}
