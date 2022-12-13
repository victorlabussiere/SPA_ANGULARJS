import { Component, OnInit } from '@angular/core';
import { MyPics } from 'src/app/MyPics';

@Component({
  selector: 'app-new-picture',
  templateUrl: './new-picture.component.html',
  styleUrls: ['./new-picture.component.css']
})
export class NewPictureComponent {
  btnText = "Compartilhar!";

  ngOnInit():void {}

  createHandler(mypics: MyPics) {
    const formData = new FormData()

    formData.append('title', mypics.title)
    formData.append('description', mypics.description)
    
    if (mypics.picture) formData.append('picture', mypics.picture)

    // todo
    // enviar para o service
    // exibir msg
    // redirect
  }
}
