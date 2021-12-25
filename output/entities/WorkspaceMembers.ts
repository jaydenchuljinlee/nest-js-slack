import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Workspaces } from "./Workspaces";

@Index("workspace_members_UN", ["userId", "workspaceId"], { unique: true })
@Index("workspace_members_FK_1", ["workspaceId"], {})
@Entity("workspace_members", { schema: "sleact" })
export class WorkspaceMembers {
  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "workspace_id" })
  workspaceId: number;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "logged_in_at", nullable: true })
  loggedInAt: Date | null;

  @ManyToOne(() => Users, (users) => users.workspaceMembers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.workspaceMembers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "workspace_id", referencedColumnName: "id" }])
  workspace: Workspaces;
}
