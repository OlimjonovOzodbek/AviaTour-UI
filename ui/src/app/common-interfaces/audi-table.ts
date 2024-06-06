import { BaseEntity } from "./base-entity";

export interface AudiTable extends BaseEntity {
    createdAt: string;
    modifiedAt: string;
    deletedAt: string;
}