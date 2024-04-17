import {
  Model,
  Table,
  Unique,
  PrimaryKey,
  AutoIncrement,
  Column,
  ForeignKey,
} from 'sequelize-typescript'
import { Product } from './product.js'

@Table
export class Sale extends Model {
  @Unique
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number

  @Column
  declare title: string

  @Column
  declare startsAt: Date

  @Column
  declare endsAt: Date | null

  @ForeignKey(() => Product)
  @Column
  declare productID: number
}

