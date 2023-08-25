import { ICategory } from "./ICategoryOption";

export interface IAdvertisement {
    categoryId: string;
    category?: ICategory
    name: string;
    description: string;
    image: string;
}

export interface IAdvertisementResponse {
    id: number
    categoryId: string | number;
    name: string;
    description: string;
    image: string;
}