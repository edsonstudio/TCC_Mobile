import { v4 as Guid } from 'uuid';

export class Message {

  id?: typeof Guid;
  senderName: string;
  text: string ;
  sentAt: Date = null;
  attachment: string;
  channelId?: typeof Guid;
  
}
