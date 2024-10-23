import { Component } from '@angular/core';
import { BlogService } from '../../../../services/blog-service/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../../../../services/blog-service/blog.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blogs$: Observable<Blog[]>;
  constructor(private readonly blogService: BlogService) {
    this.blogs$ = this.blogService.getBlogs();
  }
}
