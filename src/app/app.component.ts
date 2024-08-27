import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserWordFormComponent } from './user-word-form/user-word-form.component'
import { DialogComponent } from './dialog/dialog.component'
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, FormsModule, MatFormFieldModule, UserWordFormComponent, MatInputModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Juego de Palabras';
  palabras: string[] = [
    "Macho", "Macro", "Madre", "Mafia", "Magia", "Magma", "Magno",
    "Magro", "Malla", "Malos", "Malva", "Mambo", "Mamut", "Manco",
    "Mande", "Manga", "Mango", "Mansa", "Manto", "Mapas",
    "Maqui", "Marca", "Marco", "Marea", "Mares", "Marte", "Matan",
    "Matas", "Matiz", "Maula", "Mayas", "Mayor", "Mecha", "Medir",
    "Melga", "Menor"
  ];


  readonly dialog = inject(MatDialog);
  entered: string[] = [];


  getRandomWord = () => this.palabras[Math.floor(Math.random() * this.palabras.length)]
  secretWord = this.getRandomWord();


  reset() { this.secretWord = this.getRandomWord(); this.entered = [] }

  addPalabra(word: string) {
    console.log(word); this.entered.push(word);
    if (word.toLowerCase() === this.secretWord.toLowerCase()) {

      const dialogRef = this.dialog.open(DialogComponent);

      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
        this.reset()
      });


    }
  };

  getColor(letter: string, index: number) {
    // check if letter is correct
    if (this.secretWord[index].toLowerCase() === letter.toLowerCase()) { return 'green' }
    if (this.secretWord.includes(letter)) { return 'yellow' }
    return 'grey'
  }
}
