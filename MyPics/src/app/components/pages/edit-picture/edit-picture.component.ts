import { Component, OnInit } from '@angular/core'
import { MyPics } from 'src/app/MyPics' // interface
// services 
import { MypicsService } from 'src/app/services/mypics.service'
import { MessagesService } from 'src/app/services/messages.service'

import { ActivatedRoute, Router } from '@angular/router' // routes

@Component({
  selector: 'app-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.css']
})
export class EditPictureComponent {
  picture!: MyPics
  btnText: string = "Editar"

  constructor(
    private MyPicService: MypicsService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log('id da pagina', id)

    this.MyPicService.getPicById(id).subscribe(item => {
      return this.picture = item.data
    })
  }

  async editHandler(pictureData: MyPics) {
    const id = this.picture.id
    const formData = new FormData()

    formData.append('title', pictureData.title)
    formData.append('description', pictureData.description)
    if (pictureData.image) formData.append('image', pictureData.image)

    let validation: boolean = confirm(`Por favor, confira se as informações estão corretas\n
    Título: ${pictureData.title}\n
    Descrição: ${pictureData.description}
    `)

    if (validation) {
      try {
        await this.MyPicService.updatePic(id!, formData).subscribe()
        this.messageService.add('Picture atualizada com sucesso!')
        setTimeout(() => {
          this.router.navigate(['/'])
        }, 1500);
      } catch (errorUpdate) {
        this.messageService.add('Erro ao atualizar sua Picture')
        throw console.error('Erro ao Atualizar', errorUpdate)
      }
    }
  }

}
