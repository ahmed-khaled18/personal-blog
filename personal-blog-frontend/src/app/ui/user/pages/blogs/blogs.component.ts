import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog-service/blog.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe((res) => {
      console.log(res);
    });
  }
}
