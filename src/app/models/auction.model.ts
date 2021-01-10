export interface IAuction{
    id: number;
    title: string;
    description: string;
    photos: string;
    minimumPrice: number;
    buyNowPrice: number;
    startDate: Date;
    endDate: Date;
    biddingList: IBidding[];
    purchasing: string;
    categoryId: number;
}
export interface IBidding{
}
