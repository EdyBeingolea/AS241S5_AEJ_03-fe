import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GeneratedImage {
  url: string;
  title: string;
  prompt: string;
}

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './body.html',
  styleUrls: ['./body.scss'],
})
export class Body {
  promptText = 'Castillo fantástico en las montañas, paisaje mágico, atardecer';
  generatedImages: GeneratedImage[] = [];

  // Sample images to simulate generation
  private samples = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80'
  ];

  generate() {
    const rand = Math.floor(Math.random() * this.samples.length);
    const url = this.samples[rand];
    const title = this.promptText.split(',')[0] || 'Imagen generada';
    this.generatedImages.unshift({ url, title: title.trim(), prompt: this.promptText });
    // keep only recent 12
    if (this.generatedImages.length > 12) this.generatedImages.length = 12;
  }

  reroll() {
    // Replace the latest generated image with a new random sample (simulates re-generar)
    if (!this.generatedImages.length) return;
    const rand = Math.floor(Math.random() * this.samples.length);
    const url = this.samples[rand];
    const title = this.promptText.split(',')[0] || 'Imagen generada';
    this.generatedImages[0] = { url, title: title.trim(), prompt: this.promptText };
  }
}
