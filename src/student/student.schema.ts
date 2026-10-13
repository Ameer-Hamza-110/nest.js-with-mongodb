import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;


@Schema({ timestamps: true })
export class Student {
    @Prop({ required: true, trim: true })
    name: string;

    @Prop({ required: true, unique: true, trim: true })
    email: string;

    @Prop({ min: 1 })
    age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);