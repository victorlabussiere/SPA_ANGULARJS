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

  async createHandler(mypics: MyPics) {
    const formData = new FormData();

    formData.append('title', mypics.title);
    formData.append('description', mypics.description);

    if (mypics.image) formData.append('image', mypics.image);

    // TODO:

    // 1- enviar para o service
    const result = await this.myPicService.createPic(formData).subscribe();
    if (!result) throw Error('Algo deu errado');
    else {
      // 2- exibir msg
      this.messageService.add('Pic! adicionado com sucesso!');
      // 3- redirect
      setTimeout(() => this.router.navigate(['/']), 1000);
    }
  }
}
