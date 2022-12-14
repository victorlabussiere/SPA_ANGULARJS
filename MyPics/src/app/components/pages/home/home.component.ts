import { Component, OnInit } from '@angular/core';

import { MypicsService } from 'src/app/services/mypics.service';
import { MyPics } from 'src/app/MyPics';
const Env = require('src/environments/environment')

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // form
  faSearch = faSearch
  searchTerm: string = ''

  // data arrays
  allPics: MyPics[] = [] // -> realiza a busca de fotos no banco
  pics: MyPics[] = [] // -> realiza um filtro para buscas de fotos

  // environment
  baseApiUrl = new Env('mypics')
  apiUrl = this.baseApiUrl.apiUrl

  // todo search

  constructor(private myPicService: MypicsService) {
  }

  ngOnInit(): void {
    // home load on initialization
    this.myPicService.getPic().subscribe(async i => {
      const data = i.data

      data.map(e => {
        e.created_at = new Date(e.created_at!).toLocaleDateString('pt-BR')
        e.updated_at = new Date(e.updated_at!).toLocaleDateString('pt-BR')
      })

      this.allPics = data
      this.pics = data
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.pics = this.allPics.filter(item => item.title.toLowerCase().includes(value))
  }
}