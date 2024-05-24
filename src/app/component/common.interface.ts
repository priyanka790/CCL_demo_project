export interface IMenu {
  id: number;
  menuItem: string;
  navLink: string;
}
export interface IStorage {
  id: number;
  storageAccount: string;
  version: string;
  accessKey: string;
  bucketCount: number;
  size: number;
  status:string
}
export interface IFooter {
  data: {
    id: number;
    attributes: {
      copyrights: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
    };
  };
}
export interface ImageAttributes {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: string; // You can define a proper type for formats
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string; // You can define a proper type for provider_metadata
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageData {
  data: {
    id: number;
    attributes: ImageAttributes;
  };
}

export interface IAttributes {
  name: string;
  description: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: ImageData;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface ApiResponse {
  data: IData[];
  meta: Meta;
}
