import { Component } from '@angular/core';

type Candidate = {
  name: string;
  age: string;
  mass: string;
  foto: string;
};

@Component({
  selector: "app-candidates",
  templateUrl: "./candidates.component.html",
  styleUrls: ["./candidates.component.css"],
})
export class CandidatesComponent {
  currentCandidate: Candidate | undefined;
  candidatos: Candidate[] = [
    {
      name: "Jose Luis",
      age: "21",
      mass: "95kg",
      foto: "https://i.imgur.com/kKdTs3X.jpg?1",
    },
    {
      name: "Alfredo Dominguez",
      age: "40",
      mass: "70kg",
      foto: "https://i.imgur.com/ZyMr1Y4.png?1",
    },
    {
      name: "Luisa García",
      age: "12",
      mass: "50kg",
      foto: "https://i.imgur.com/iETlZET.jpg?1",
    },
  ];

  change(newCandidate) {
    this.currentCandidate = newCandidate
  }

  clear() {
    this.currentCandidate = undefined;
  }
}
