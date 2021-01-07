import { IAuction } from './auction.model';
export interface ICategory{
    id : number;
    name : string;
    description : string;
    auctionList : IAuction[]
}