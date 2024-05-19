import { IsString } from "class-validator"

export interface ISubscribeRequest {
    email?: string
    phone?: string
    outboundIta: string
    returnIta?: string
    outboundDate: string
    returnDate?: string
}

export class SubscribeRequest {
    @IsString()
    email: string
    @IsString()
    phone: string
    @IsString()
    outboundIta: string
    @IsString()
    returnIta: string
    @IsString()
    outboundDate: string
    @IsString()
    returnDate: string
}