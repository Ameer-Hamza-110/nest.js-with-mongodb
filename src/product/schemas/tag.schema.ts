import { Prop, Schema } from '@nestjs/mongoose';


export class Tag {
    @Prop()
    name: string;
}