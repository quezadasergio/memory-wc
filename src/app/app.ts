import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memory-wc');
  protected readonly gameState = signal<'start' | 'playing'>('start');

  protected startGame() {
    this.gameState.set('playing');
    console.log('Game started! Transitioning state...');
  }
}
