import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mentions_UN", ["chatId", "workspaceId", "senderId"], { unique: true })
@Entity("mentions", { schema: "sleact" })
export class Mentions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chat_id" })
  chatId: number;

  @Column("int", { name: "workspace_id" })
  workspaceId: number;

  @Column("int", { name: "sender_id" })
  senderId: number;

  @Column("varchar", { name: "category", length: 30 })
  category: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
