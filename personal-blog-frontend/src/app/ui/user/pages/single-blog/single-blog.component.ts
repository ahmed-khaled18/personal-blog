import { Component } from '@angular/core';
import { BlogService } from '../../../../services/blog-service/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../../../../services/blog-service/blog.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss',
})
export class SingleBlogComponent {
  blog$!: Observable<Blog>;
  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blog$ = this.blogService.getBlogById(id);
    }
  }
}
