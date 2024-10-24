import { Component } from '@angular/core';
import { BlogFormComponent } from '../../components/blog-form/blog-form.component';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent {}
