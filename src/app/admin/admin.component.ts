import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../service/question.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public data : any;
  constructor(private user:QuestionService) { }

  ngOnInit(): void {

    
    this.user.getdata().subscribe(data=>{
      this.data=data['msg'];
    })

  }

}
