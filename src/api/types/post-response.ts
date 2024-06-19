export interface Post {
  id: number;
  user_id: string;
  user_name: string;
  team_id: number;
  team_name: string;
  ministry: string;
  mission_id: number;
  status: string;
  file_url: string;
  file_type: string;
  image_width: number;
  image_height: number;
  created_at: string;
}

export interface PostsResponse {
  posts: Post[];
  number_of_elements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
