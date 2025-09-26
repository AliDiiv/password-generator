import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  includeLetter: boolean = false;
  includeNumber: boolean = false;
  includeSymbol: boolean = false;
  length: number = 0;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+';

    let validChars = '';
    if (this.includeLetter) validChars += letters;
    if (this.includeNumber) validChars += numbers;
    if (this.includeSymbol) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeLetter() {
    this.includeLetter = !this.includeLetter;
  }

  onChangeNumber() {
    this.includeNumber = !this.includeNumber;
  }

  onChangeSymbol() {
    this.includeSymbol = !this.includeSymbol;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
