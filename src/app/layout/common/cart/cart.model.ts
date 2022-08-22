export interface Cart {
    store: Store | null;
    items: Item[];
    total: number;
}

export interface Store {
    id: number | undefined;
    name: string | undefined;
}

export interface Item {
    product_id: number | undefined;
    product_name: string | undefined;
    price: number | undefined;
    quantity: number | undefined;
}