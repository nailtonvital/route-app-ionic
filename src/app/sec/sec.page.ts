import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.page.html',
  styleUrls: ['./sec.page.scss'],
})
export class SecPage implements OnInit {
  title: string
  language: string
  cate: string
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  back() {
    this.router.navigateByUrl(`/home`)
  }
  ok(){
    this.router.navigateByUrl(`/trd`)
  }
  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('title')
    this.language = this.activatedRoute.snapshot.paramMap.get('lang')
    this.cate = this.activatedRoute.snapshot.paramMap.get('cate')
  }

}
