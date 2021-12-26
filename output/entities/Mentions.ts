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
import { ChannelChats } from "./ChannelChats";

@Index("mentions_UN", ["chatId", "workspaceId", "senderId"], { unique: true })
@Index("mentions_FK", ["senderId"], {})
@Index("mentions_FK_1", ["workspaceId"], {})
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

  @ManyToOne(() => Users, (users) => users.mentions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "sender_id", referencedColumnName: "id" }])
  sender: Users;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.mentions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "workspace_id", referencedColumnName: "id" }])
  workspace: Workspaces;

  @ManyToOne(() => ChannelChats, (channelChats) => channelChats.mentions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "chat_id", referencedColumnName: "id" }])
  chat: ChannelChats;
}
