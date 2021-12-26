import {Column,Entity,Index,JoinColumn,OneToMany,OneToOne,PrimaryGeneratedColumn} from "typeorm";
import {Channels} from './Channels'
import {Dms} from './Dms'
import {Mentions} from './Mentions'
import {WorkspaceMembers} from './WorkspaceMembers'
import {Users} from './Users'


@Index("workspaces_UN",["ownerId",],{ unique:true })
@Entity("workspaces" ,{schema:"sleact" } )
export  class Workspaces {

@PrimaryGeneratedColumn({ type:"int", name:"id" })
id:number;

@Column("int",{ name:"owner_id",unique:true })
ownerId:number;

@Column("varchar",{ name:"name",length:100 })
name:string;

@Column("varchar",{ name:"url",length:100 })
url:string;

@Column("datetime",{ name:"created_at" })
createdAt:Date;

@Column("datetime",{ name:"updated_at",nullable:true })
updatedAt:Date | null;

@Column("datetime",{ name:"deleted_at",nullable:true })
deletedAt:Date | null;

@OneToOne(()=>Channels,channels=>channels.workspace)


channels:Channels;

@OneToMany(()=>Dms,dms=>dms.workspace)


dms:Dms[];

@OneToMany(()=>Mentions,mentions=>mentions.workspace)


mentions:Mentions[];

@OneToMany(()=>WorkspaceMembers,workspaceMembers=>workspaceMembers.workspace)


workspaceMembers:WorkspaceMembers[];

}
