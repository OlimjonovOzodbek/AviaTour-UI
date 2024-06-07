export interface TourUpdateModel {
    Id: number;
    WhereEx: string;
    Where: string;
    Subtitle: string;
    Description: string;
    Price: number;
    PicturePath?: Blob; 
}