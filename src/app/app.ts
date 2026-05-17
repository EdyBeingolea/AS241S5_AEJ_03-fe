import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Body } from "./layout/body/body";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Body],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NovaMind');
}
