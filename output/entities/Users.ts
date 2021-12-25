import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChanelMembers } from "./ChanelMembers";
import { WorkspaceMembers } from "./WorkspaceMembers";

@Entity("users", { schema: "sleact" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", length: 30 })
  email: string;

  @Column("varchar", { name: "nickname", length: 30 })
  nickname: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => ChanelMembers, (chanelMembers) => chanelMembers.user)
  chanelMembers: ChanelMembers[];

  @OneToMany(
    () => WorkspaceMembers,
    (workspaceMembers) => workspaceMembers.user
  )
  workspaceMembers: WorkspaceMembers[];
}
