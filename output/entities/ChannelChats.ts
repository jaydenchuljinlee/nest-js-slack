import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("channel_chats_UN", ["channelId", "userId"], { unique: true })
@Entity("channel_chats", { schema: "sleact" })
export class ChannelChats {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "channel_id" })
  channelId: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "content", length: 100 })
  content: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
