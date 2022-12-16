import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

//interface 
import { MyPics } from 'src/app/MyPics';
import { Comments } from 'src/app/Comments';

//services
import { MypicsService } from 'src/app/services/mypics.service';
import { MessagesService } from 'src/app/services/messages.service';
import { CommentsService } from 'src/app/services/comments.service';

// fonts
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Env = require('src/environments/environment')
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
  commentsLength: any | number

  // Form
  commentForm!: FormGroup

  constructor(
    private commentService: CommentsService,
    private myPicService: MypicsService,
    public messageService: MessagesService,
    private route: ActivatedRoute,
    private Router: Router
  ) { }

  ngOnInit(): void {
    // Inicializando Serviços
    const id = Number(this.route.snapshot.paramMap.get('id')) // busca parametro url
    this.myPicService // trazer os dados e aplicar em this.picture
      .getPicById(id)
      .subscribe(item => {
        this.picture = item.data
        this.commentsLength = this.picture!.comments!.length
      })

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    })
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

  async onSubmit(formDirective: FormGroupDirective) {

    if (this.commentForm.invalid) { return }

    const data: Comments = this.commentForm.value
    data.my_pic_id = Number(this.picture!.id)

    try {

      await this.commentService.createComment(data, this.picture?.id!).subscribe(comment => this.picture!.comments!.push(comment.data))

      this.messageService.add('Comentário realizado com sucesso!')
      setTimeout(() => {
        this.commentForm.reset()
        window.location.reload()
        formDirective.resetForm()
      }, 1000);

    } catch (errorComment) {

      this.messageService.add('Ops! Tivemos um problema no envio do comentário.')
      throw console.error('Erro ao comentar', errorComment)

    }

  }

  // Getters
  get text() {
    return this.commentForm.get('text')!
  }

  get username() {
    return this.commentForm.get('username')!
  }

}
