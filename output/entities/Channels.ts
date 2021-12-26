import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ChanelMembers } from "./ChanelMembers";
import { ChannelChats } from "./ChannelChats";
import { Workspaces } from "./Workspaces";

@Index("channels_UN", ["workspaceId"], { unique: true })
@Entity("channels", { schema: "sleact" })
export class Channels {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "workspace_id", unique: true })
  workspaceId: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("tinyint", { name: "private", width: 1 })
  private: boolean;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => ChanelMembers, (chanelMembers) => chanelMembers.channel)
  chanelMembers: ChanelMembers[];

  @OneToMany(() => ChannelChats, (channelChats) => channelChats.channel)
  channelChats: ChannelChats[];

  @OneToOne(() => Workspaces, (workspaces) => workspaces.channels, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "workspace_id", referencedColumnName: "id" }])
  workspace: Workspaces;
}
