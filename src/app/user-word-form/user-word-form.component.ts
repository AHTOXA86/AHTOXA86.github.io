import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-user-word-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './user-word-form.component.html',
  styleUrl: './user-word-form.component.sass'
})
export class UserWordFormComponent {
  userWordForm = new FormGroup({
    guess: new FormControl('')
  });

  @Output() dataEmitter = new EventEmitter<string>();

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userWordForm.value, this.userWordForm);
    if (this.userWordForm.status === 'VALID') { this.dataEmitter.emit(this.userWordForm?.value.guess || undefined); }
  }
}
