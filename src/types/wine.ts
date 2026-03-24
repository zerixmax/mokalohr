export interface Wine {
  id: number;
  naziv: string;
  slug: string;
  lot: string;
  category_title: string;
  year: number;
  sort: string;
  slika: {
    id: number;
    alt: string;
    url: string;
    filename: string;
    width?: number;
    height?: number;
  } | null;
}

export interface VinaResponse {
  docs: Wine[];
  totalDocs: number;
}
