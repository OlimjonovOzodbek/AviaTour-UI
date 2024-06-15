import { BaseEntity } from './../../../common-interfaces/base-entity';
export interface TourUpdateModel extends BaseEntity{
    WhereEx: string;
    Where: string;
    Subtitle: string;
    Description: string;
    Price: number;
    PicturePath?: Blob; 
}