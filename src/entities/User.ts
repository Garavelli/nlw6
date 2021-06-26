import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('users')
export class User {

  @PrimaryColumn() 
  readonly id: string; // only entity is allow to insert an ID

  @Column() // if column name is different, add db columns name inside @Column
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor () { // called when a new instance is created (new User())
    if (!this.id) {
      this.id = uuid();
    }
  }

}
