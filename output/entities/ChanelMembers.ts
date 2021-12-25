import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Channels } from "./Channels";

@Index("chanel_members_UN", ["userId", "channelId"], { unique: true })
@Index("chanel_members_FK_1", ["channelId"], {})
@Entity("chanel_members", { schema: "sleact" })
export class ChanelMembers {
  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "channel_id" })
  channelId: number;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.chanelMembers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Channels, (channels) => channels.chanelMembers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "channel_id", referencedColumnName: "id" }])
  channel: Channels;
}
