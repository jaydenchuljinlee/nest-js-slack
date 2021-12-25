import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("dms_UN", ["senderId", "workspaceId"], { unique: true })
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
}
