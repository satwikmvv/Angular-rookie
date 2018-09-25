import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreation="server not created";
  testt:number=0;
  serverName='name';
  serverStatus=false;

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true
    },2000)
  }

  ngOnInit() {
  }
  onServerCreate() {
    this.serverStatus=!this.serverStatus;
    this.serverCreation="Server Created and name is " + this.serverName;
  }
  onButtonClik() {
    this.testt+=1
  }
  

  onUpdateName(e) {
    this.serverName=(<HTMLInputElement>e.target).value;
  }
}
