
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Channel } from '../../models/channel';
import { v4 as Guid } from 'uuid';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChannelService   {

  public chatterName: string = 'Visitor';
  public channels: Channel[];
  public connected_clients: string[][] = [];

  constructor(private http: HttpClient) {
    this.chatterName += Math.floor(100 * Math.random()); // Randomly Generated(Should be Current Logged In User)
    this.loadChannels().then(() => this.initiateConnectedClientsArray()); // initiate 'connected_clients' array);
  }



  async loadChannels() {// Load channels from Backend through API call
    this.channels = await this.http.get<Channel[]>(environment.apiChat + '/api/channels').toPromise();
    console.log('Channels:' + this.channels);
  }

  initiateConnectedClientsArray() {
    for ( var i = 0; i < this.channels.length + 1; i++)
    {
      this.connected_clients[i] = []; // Allocate space for each channel to store connected Clients Data 
    }
  }

  async findAll(): Promise<Channel[]> {
     await this.loadChannels();
     return this.channels;
 }

 
}

