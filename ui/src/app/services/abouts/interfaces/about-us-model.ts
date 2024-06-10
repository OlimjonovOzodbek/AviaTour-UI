import { BaseEntity } from "../../../common-interfaces/base-entity";
import { ContactModel } from "../../Contact/interfaces/contact-model";

export interface AboutUsModel extends BaseEntity {
    // addresses: Address[];
    contacts: ContactModel[];
    // emails: EmailAddressModel[];
    description: string;
}