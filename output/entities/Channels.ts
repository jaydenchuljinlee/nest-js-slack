import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ChanelMembers } from "./ChanelMembers";

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
}
