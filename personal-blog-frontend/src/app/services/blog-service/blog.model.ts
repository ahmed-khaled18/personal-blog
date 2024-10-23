export interface Blog {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface CreateBlog {
  title: string;
  content: string;
}
