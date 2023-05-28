export interface IVegetable {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

export interface ICartItem {
    vegetable: IVegetable;
    quantity: number;
}

export interface IOrder {
    id: number;
    items: ICartItem[];
    total: number;
    date: Date;
    shippingAddress: string;
    paymentMethod: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    orders: IOrder[];
}