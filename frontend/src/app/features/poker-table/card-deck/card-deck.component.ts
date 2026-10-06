import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-card-deck',
  imports: [],
  templateUrl: './card-deck.component.html',
  styleUrl: './card-deck.component.scss',
})
export class CardDeckComponent {
  cards = input.required<string[]>();
  selectedCard = input<string | null>(null);
  cardSelected = output<string>();

  onSelect(card: string) {
    this.cardSelected.emit(card);
  }
}
