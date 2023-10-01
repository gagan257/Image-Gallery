// Making layout of all the important attributes that we need from the API's JSON OBJ
export interface UnsplashedImage {
  description: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}

export interface UnsplashedSearchResponse {
  results: UnsplashedImage[];
}
