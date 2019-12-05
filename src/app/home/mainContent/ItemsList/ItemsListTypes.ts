export type Item = {
    id: string;
    name: string;
    description: string;
    like_count: number;
    comment_count: number;
    price: number;
    is_sold_out: boolean;
    shipping_fee: string;
    image: string;
    category_id: number;
};
export type ItemListState = {
    itemList: ReadonlyArray<Item>;
    isLoading: boolean;
    orginalItemList: ReadonlyArray<Item>;
    selectedItem: Item;
};