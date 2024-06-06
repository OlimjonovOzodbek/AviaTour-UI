import { AudiTable } from "../../../common-interfaces/audi-table";
import { TourModel } from "../../tours/interfaces/tourModel";

export interface CommentModel extends AudiTable {
    from: string;
    message: string;
    tourId: number;
    isDeleted: boolean;
    tour: TourModel;
}
