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
  @Input() pictureData: MyPics | null = null

  myPicsForm!: FormGroup


  constructor() { } // inicialização com a instancialização.

  ngOnInit(): void {  // inicialização após o angular ler seus componentes.

    this.myPicsForm = new FormGroup({

      id: new FormControl(''),
      title: new FormControl(this.pictureData ? this.pictureData.title : '', [Validators.required]),
      description: new FormControl(this.pictureData ? this.pictureData.description : '', [Validators.required]),
      image: new FormControl('')  // atributo iniciado pelo angular com valor = ''

    })

  }

  get title() { return this.myPicsForm.get('title')! }
  get description() { return this.myPicsForm.get('description')! }

  onFileSelected(event: any) {
    const [file]: File[] = event.target.files
    const result = this.myPicsForm.patchValue({ image: file }) // valor definido fora do ngOnInit pelo método patchValue

    return result
  }

  submit() {
    this.myPicsForm.invalid
      ? console.error('Erro de validação. Confira as informações')
      : this.onSubmit.emit(this.myPicsForm.value)
  }
}
