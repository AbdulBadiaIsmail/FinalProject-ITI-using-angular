
export interface IProduct {
    id?: number;
    name: string;
    imageSrc: string;
    imageFile: File;
    description: string;
    category: string;
    categoryId: number;
    brandName: string;
    price: number;
    quantity: number;
    brandID: number;
    availability: boolean;
    discountPercentage: number;
}
