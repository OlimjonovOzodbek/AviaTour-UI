import { BaseEntity } from "../../../common-interfaces/base-entity";
import { ContactModel } from "../../Contact/interfaces/contact-model";

export interface AboutUsModel extends BaseEntity {
    addresses: any[];
    contacts: ContactModel[];
    emails: any[];
    description: string;
}