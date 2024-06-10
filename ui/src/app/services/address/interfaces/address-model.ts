    import { BaseEntity } from "../../../common-interfaces/base-entity";

export interface AddressModel extends BaseEntity {
    door: string;
    street: string;
    district: string;
    city: string;
    zipCode: number;
    longitude: number;
    latitude: number;
}

