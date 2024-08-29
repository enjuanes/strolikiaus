import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyChgvwHapfsFaYEGvliDJO8ZLIaY1dU2Nk",
  authDomain: "strolikiaus.firebaseapp.com",
  projectId: "strolikiaus",
  storageBucket: "strolikiaus.appspot.com",
  messagingSenderId: "657912543133",
  appId: "1:657912543133:web:5322c51fe2cdaec1b62174",
  measurementId: "G-X5S8VS0T8P"
};



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'strolikiaus';

  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
