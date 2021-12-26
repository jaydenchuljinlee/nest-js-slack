import {Column,Entity,OneToMany,OneToOne,PrimaryGeneratedColumn} from "typeorm";
import {ChanelMembers} from './ChanelMembers'
import {ChannelChats} from './ChannelChats'
import {Dms} from './Dms'
import {Mentions} from './Mentions'
import {WorkspaceMembers} from './WorkspaceMembers'
import {Workspaces} from './Workspaces'


@Entity("users" ,{schema:"sleact" } )
export  class Users {

@PrimaryGeneratedColumn({ type:"int", name:"id" })
id:number;

@Column("varchar",{ name:"email",length:30 })
email:string;

@Column("varchar",{ name:"nickname",length:30 })
nickname:string;

@Column("varchar",{ name:"password",length:100 })
password:string;

@Column("datetime",{ name:"created_at" })
createdAt:Date;

@Column("datetime",{ name:"updated_at",nullable:true })
updatedAt:Date | null;

@Column("datetime",{ name:"deleted_at",nullable:true })
deletedAt:Date | null;

@OneToMany(()=>ChanelMembers,chanelMembers=>chanelMembers.user)
chanelMembers:ChanelMembers[];

@OneToMany(()=>ChannelChats,channelChats=>channelChats.user)
channelChats:ChannelChats[];

@OneToMany(()=>Dms,dms=>dms.sender)
dms:Dms[];

@OneToMany(()=>Mentions,mentions=>mentions.sender)
mentions:Mentions[];

@OneToMany(()=>WorkspaceMembers,workspaceMembers=>workspaceMembers.user)
workspaceMembers:WorkspaceMembers[];

}
