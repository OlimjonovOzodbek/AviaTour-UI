import { BaseEntity } from "../../../common-interfaces/base-entity";
import { ContactModel } from "../../Contact/interfaces/contact-model";

export interface AboutUsModel extends BaseEntity {
    description: string;
}