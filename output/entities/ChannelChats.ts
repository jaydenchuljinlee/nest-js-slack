import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Channels } from "./Channels";
import { Mentions } from "./Mentions";

@Index("channel_chats_UN", ["channelId", "userId"], { unique: true })
@Index("channel_chats_FK", ["userId"], {})
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

  @ManyToOne(() => Users, (users) => users.channelChats, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Channels, (channels) => channels.channelChats, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "channel_id", referencedColumnName: "id" }])
  channel: Channels;

  @OneToMany(() => Mentions, (mentions) => mentions.chat)
  mentions: Mentions[];
}
