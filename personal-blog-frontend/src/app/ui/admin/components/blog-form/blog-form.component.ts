import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss',
})
export class BlogFormComponent implements OnInit {
  @Input({ required: true }) formMode!: 'create' | 'update';
  articleForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      publishingDate: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onUpdate() {
    if (this.articleForm.valid) {
      const updatedArticle = this.articleForm.value;
      console.log('Article updated:', updatedArticle);
    } else {
      this.articleForm.markAllAsTouched();
    }
  }
}
