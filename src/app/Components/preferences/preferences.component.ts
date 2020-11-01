import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent implements OnInit {
  preferenceForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private preferenceService: PreferenceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public save() {
    if (!this.preferenceForm.valid) {
      return;
    }

    this.preferenceService.savePreferences(
      this.preferenceForm.value.wayOfProgramming,
      this.preferenceForm.value.likeProgramming
    );
  }

  public likeProgrammingChanged(e: KeyboardEvent) {
          this.preferenceService.likeProgrammingChanged(
        this.preferenceForm.value.likeProgramming
      );    
  }

  private createForm() {
    this.preferenceForm = this.formBuilder.group({
      likeProgramming: [0, Validators.pattern('^[0-9]*$')],
      wayOfProgramming: ['', Validators.required],
    });
  }
}
