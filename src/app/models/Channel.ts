import { Message } from '../models/message';
import { v4 as Guid } from 'uuid';

export class Channel {

  id?: typeof Guid;
  title: string;
  description: string;
  messageHistory: Message[];

}
