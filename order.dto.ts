import {
  IsArray,
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsUUID,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { OrderType, PaymentMethod, OrderStatus } from '@prisma/client';

export class OrderItemDto {
  @ApiProperty()
  @IsUUID()
  menuItemId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  modifierIds?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreateOrderDto {
  @ApiProperty({ type: [OrderItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @ApiProperty({ enum: OrderType, default: OrderType.DINE_IN })
  @IsOptional()
  @IsEnum(OrderType)
  type?: OrderType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  tableId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  promoCode?: string;

  @ApiProperty({ enum: PaymentMethod, required: false })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  stripePaymentIntentId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  idempotencyKey?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateOrderStatusDto {
  @ApiProperty({ enum: ['PAID', 'CONFIRMED', 'ACCEPTED', 'PREPARING', 'READY', 'SERVED', 'DISPATCHED', 'COMPLETED', 'CANCELLED'] })
  @IsEnum(['PAID', 'CONFIRMED', 'ACCEPTED', 'PREPARING', 'READY', 'SERVED', 'DISPATCHED', 'COMPLETED', 'CANCELLED'])
  status: OrderStatus;
}

