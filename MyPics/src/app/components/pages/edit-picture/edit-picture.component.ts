import { Component, OnInit } from '@angular/core'
import { MyPics } from 'src/app/MyPics' // interface
import { MypicsService } from 'src/app/services/mypics.service' // services 

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log('id da pagina', id)

    this.MyPicService.getPicById(id).subscribe(item => {
      return this.picture = item.data
    })
  }

}
