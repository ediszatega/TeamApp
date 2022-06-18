import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    } else {
      this.members.push(this.newMemberName);
      this.newMemberName = '';
      this.errorMessage = '';
    }
  }

  generateTeams() {
    console.log('sadfGADSFEASD');
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }

    const allMembers = [...this.members];

    for (let i = 0; i < this.numberOfTeams; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length);
      const member = allMembers.splice(randomIndex, 1)[0];

      if (this.teams[i]) {
        this.teams[i].push(member);
        console.log(this.teams);
      } else {
        this.teams[i] = [member];
      }
    }

    console.log(this.teams);
  }
}
