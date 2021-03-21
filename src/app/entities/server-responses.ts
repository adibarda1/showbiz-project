import { BusinessItem } from "./business-item";

export interface BusinessesResponse{
    status: string;
    data: BusinessesWrapper
}

export interface BusinessesWrapper{
    total: number,
    businesses: BusinessItem[]
}