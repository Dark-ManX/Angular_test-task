import { Component } from '@angular/core';
import { exp } from 'src/app/addition/regExp';

@Component({
  selector: 'password-component',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  value: string = '';
  length: boolean = false;
  easy: boolean = false;
  medium: boolean = false;
  strong: boolean = false;

  setValue(e: string): void {
    this.value = e;
    this.length = this.value.length > 7;

    this.resetStrength();

    this.setStrength(this.value);
  }

  setStrength(param: string): void {
    const { easy: simple, medium: soft, strong } = exp;

    if (param.match(strong.strongRegExp)) {
      this.strong = true;
      return;
    } else if (
      param.match(soft.lettersAndDigits) ||
      param.match(soft.lettersAndSymbols) ||
      param.match(soft.digitsAndSymbols)
    ) {
      this.medium = true;
      return;
    } else if (param.match(simple.letters) || param.match(simple.digits)) {
      this.easy = true;
    }
  }

  resetStrength(): void {
    this.easy = false;
    this.medium = false;
    this.strong = false;
  }
}
