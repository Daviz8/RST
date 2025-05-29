import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
  } from "typeorm";
  import { IsEmail, Length } from "class-validator";
  import bcrypt from "bcryptjs";
  
  export enum Role { USER = "user", ADMIN = "admin" }
  
  @Entity({name: "user"})
  export class User {
    @PrimaryGeneratedColumn("uuid") id: string;
  
    @Column() @Length(1, 50) firstName: string;
    @Column() @Length(1, 50) lastName: string;
    @Column({ unique: true }) @IsEmail() email: string;
    @Column() country: string;
    @Column() password: string;
    @Column({ default: false }) isVerified: boolean;
    @Column({ type: "enum", enum: Role, default: Role.USER }) role: Role;
  
    @BeforeInsert()
    async hashPwd() {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  } 

