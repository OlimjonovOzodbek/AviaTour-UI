import { AudiTable } from "../../../common-interfaces/audi-table";
import { CommentModel } from "../../comments/interfaces/comment-model";

export interface TourModel extends AudiTable {
    whereEx: string;
    where: string;
    subtitle: string;
    description: string;
    picturePath: string;
    price: number;
    isDeleted: boolean;
    comments: CommentModel[];
}