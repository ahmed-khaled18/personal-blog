import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../../../../services/blog-service/blog.model';
import { BlogService } from '../../../../services/blog-service/blog.service';

@Component({
  selector: 'app-admin-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-blogs.component.html',
  styleUrl: './admin-blogs.component.scss',
})
export class AdminBlogsComponent {
  blogs$: Observable<Blog[]>;
  constructor(private readonly blogService: BlogService) {
    this.blogs$ = this.blogService.getBlogs();
  }
}
