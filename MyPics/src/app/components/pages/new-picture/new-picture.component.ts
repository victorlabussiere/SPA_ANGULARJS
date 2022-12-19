import { Component, OnInit } from '@angular/core';
import { MyPics } from 'src/app/MyPics';
import { MypicsService } from 'src/app/services/mypics.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-picture',
  templateUrl: './new-picture.component.html',
  styleUrls: ['./new-picture.component.css'],
})
export class NewPictureComponent {
  btnText = 'Compartilhar!';

  constructor(
    private myPicService: MypicsService,
    public messageService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  async createHandler(mypics: MyPics) {   // receive event from child file: Picture Form
    let validation = confirm(`Por favor, confirme os dados da Picture \n Título: ${mypics.title} \n Descrição: ${mypics.description}\n`)
    if (validation) {
      try {
        const formData = new FormData();

        formData.append('title', mypics.title);
        formData.append('description', mypics.description);
        if (mypics.image) formData.append('image', mypics.image);

        await this.myPicService.createPic(formData).subscribe();
        this.messageService.add('Pic! adicionado com sucesso!');
        setTimeout(() => this.router.navigate(['/']), 1500);

      } catch (erroShare) {

        this.messageService.add('Não foi possível compartilhar sua Picture')
        throw console.error('Erro ao adicionar imagem', erroShare)
      }
    }

  }
}
