import { Injectable } from '@angular/core';

Injectable();
export class PreferenceService {
  constructor() {}
  public savePreferences(waysToProgram: string, likeProgramming: number) {
    console.log('Button has been clicked');
    console.log(
      'Values entered when button clicked: ' +
        waysToProgram +
        ' || ' +
        likeProgramming
    );
  }

  public likeProgrammingChanged(likeProgramming: number) {
    console.log('Numerical input has been changed');
    console.log('value changed to: ' + likeProgramming);
  }
}
