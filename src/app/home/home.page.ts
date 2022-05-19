import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string
  language: string
  cate: string
  dados: any[] = [];
  constructor(private router: Router) {}

  getTitle(info: string){
    this.title = info
    
  }

  getLang(info: string){
    this.language = info
    
  }

  getCate(info: string) {
    this.cate = info
    
  }

  cadastrar(){
    this.dados.push({
      title: this.title,
      language: this.language,
      category: this.cate
    })
    console.log(this.dados[0])
    this.router.navigateByUrl(`/sec/${this.dados[0].title}/${this.language}/${this.cate}`)
  }
}
