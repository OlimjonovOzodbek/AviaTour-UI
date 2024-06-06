import { BaseEntity } from "../../../common-interfaces/base-entity";

export interface ContactModel extends BaseEntity {
    phoneNumber: string;
}