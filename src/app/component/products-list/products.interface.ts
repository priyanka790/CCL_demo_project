export interface IProducts {
    id: number,
    title: string,
    price: number,
    description: string,
    category: ICategory;
    images: []
}
export interface ICategory {
   id:number,
   name:string,
   image:string
}