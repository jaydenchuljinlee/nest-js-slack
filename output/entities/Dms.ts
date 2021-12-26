import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Workspaces } from "./Workspaces";

@Index("dms_UN", ["senderId", "workspaceId"], { unique: true })
@Index("dms_FK_1", ["workspaceId"], {})
@Entity("dms", { schema: "sleact" })
export class Dms {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "sender_id" })
  senderId: number;

  @Column("int", { name: "workspace_id" })
  workspaceId: number;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "receiver_id" })
  receiverId: number;

  @ManyToOne(() => Users, (users) => users.dms, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "sender_id", referencedColumnName: "id" }])
  sender: Users;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.dms, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "workspace_id", referencedColumnName: "id" }])
  workspace: Workspaces;
}
