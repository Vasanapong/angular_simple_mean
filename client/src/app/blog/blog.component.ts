import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private http:HttpClient) { }

  fetchData = {}

  ngOnInit(): void {
    this.http.get('http://localhost:3001/api/blog')
    .subscribe((res)=>this.fetchData = res)
  }

}
