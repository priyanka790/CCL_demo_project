export interface IMenu {
     id:number;
     menuItem:string,
     navLink:string
}
export interface IStorage {
    id:number,
    storageAccount:string,
    version:string,
    AccessKey:string,
    bucketCount: number,
    size: number
}