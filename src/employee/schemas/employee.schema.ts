import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Profile } from "./profile.schema.js";

@Schema()
export class Employee extends Document {
    @Prop()
    name: string;

    @Prop({ type: Types.ObjectId, ref: 'Profile' })
    profile: Types.ObjectId
}


export const EmployeeSchema = SchemaFactory.createForClass(Employee)