export interface IAdvertisement {
    categoryId: string;
    // categoryId: number;
    name: string;
    description: string;
    image: string;
}

export interface IAdvertisementResponse {
    id: number
    categoryId: string;
    name: string;
    description: string;
    image: string;
}