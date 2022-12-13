import { Component, OnInit } from '@angular/core';
import { MyPics } from 'src/app/MyPics';
import { MypicsService } from 'src/app/services/mypics.service';

@Component({
  selector: 'app-new-picture',
  templateUrl: './new-picture.component.html',
  styleUrls: ['./new-picture.component.css']
})
export class NewPictureComponent {
  btnText = "Compartilhar!";

  constructor(private myPicService: MypicsService) {

  }

  ngOnInit():void {}

  async createHandler(mypics: MyPics) { // segura as informações enviadas no formulário. 
    const formData = new FormData()

    formData.append('title', mypics.title)  // definido data 'title' vindo do formulário
    formData.append('description', mypics.description)  // definindo data 'descripition' vindo do formulário
    
    if (mypics.image) formData.append('image', mypics.image) // definindo 'image' vindo do formulário
       
    // TODO:
    // 1- enviar para o service
    const result = await this.myPicService.createPic(formData).subscribe()
    if(!result ) throw Error('Algo deu errado')
    
    // 2- exibir msg
    console.log('Foto enviada') // feedback no console.
    
    // 3- redirect
  }
}
