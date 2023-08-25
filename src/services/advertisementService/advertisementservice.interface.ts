import { ICategory } from "../../types/ICategoryOption";

export interface IAdvertisement {
    // categoryId: string;
    categoryId: number;
    name: string;
    description: string;
    image: string;
}

export interface IAdvertisementResponse {
    id: number
    categoryId: number;
    category?: ICategory;
    name: string;
    description: string;
    image: string;
    createdAt?: string
}