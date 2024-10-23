import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Blog, CreateBlog } from './blog.model';
import { EndpointsConstants } from '../../config/endpoint-constant';
import { SKIP_TOKEN_INTERCEPTOR } from '../../interceptors/auth-header.interceptor';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private endpoint = `${EndpointsConstants.API_ENDPOINT}api/v1/blogs/`;

  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get<Blog[]>(this.endpoint, {
      context: new HttpContext().set(SKIP_TOKEN_INTERCEPTOR, true),
    });
  }

  getBlogById(id: string) {
    return this.http.get<Blog>(`${this.endpoint}${id}`, {
      context: new HttpContext().set(SKIP_TOKEN_INTERCEPTOR, true),
    });
  }

  createBlog(blog: CreateBlog) {
    return this.http.post<Blog>(this.endpoint, blog);
  }

  updateBlog(id: string, blog: CreateBlog) {
    return this.http.put<Blog>(`${this.endpoint}${id}`, blog);
  }

  deleteBlog(id: string) {
    return this.http.delete(`${this.endpoint}${id}`);
  }
}
