import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//interface 
import { MyPics } from 'src/app/MyPics';
//services
import { MypicsService } from 'src/app/services/mypics.service';
import { MessagesService } from 'src/app/services/messages.service';
const Env = require('src/environments/environment')

// fonts
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent {
  // class properties
  picture?: MyPics

  // faIcons:
  faTimes = faTimes
  faEdit = faEdit

  //environment
  baseUrl: string = new Env('/mypics').apiUrl

  constructor(
    private myPicService: MypicsService,
    public messageService: MessagesService,
    private route: ActivatedRoute,
    private Router: Router
  ) { }
  // class methods
  ngOnInit(): void {
    console.log('rota baseUrl', this.baseUrl)
    const id = Number(this.route.snapshot.paramMap.get('id')) // busca parametro url
    this.myPicService // trazer os dados e aplicar em this.picture
      .getPicById(id)
      .subscribe(item => this.picture = item.data)
  }

  async removeHandler(id: number) {

    let confirmation: boolean = confirm("Você tem certeza que deseja deletar essa Picture?")

    if (confirmation === true) {

      try {
        await this.myPicService.removePic(id).subscribe()

        this.messageService.add('Picture deletada com sucesso.')

        setTimeout(() => {
          this.Router.navigate(['/'])
        }, 1500);

      }
      catch (errorDelete) {
        this.messageService.add('Erro! Não foi possível excluir essa Picture.')
        throw console.error('Error on DELETE', errorDelete)
      }

    }
  }

}
