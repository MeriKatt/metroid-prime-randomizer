import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormArray } from '@angular/forms';

import { SettingsSection } from '../settings-section';
import { RandomizerService } from '../../services/randomizer.service';

@Component({
  selector: 'app-read-only-settings-container',
  templateUrl: './read-only-settings-container.component.html',
  styleUrls: ['./read-only-settings-container.component.scss']
})
export class ReadOnlySettingsContainerComponent extends SettingsSection implements OnInit {
  private formGroup: FormGroup;

  constructor(private controlContainer: ControlContainer, protected randomizerService: RandomizerService) {
    super(randomizerService);
  }

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  getFormGroup() {
    return this.formGroup;
  }

  getFormArray(name: string) {
    return this.formGroup.get(name) as FormArray;
  }

  getValue(name: string, section: string) {
    const value = this.formGroup.get(section).get(name).value;
    return this.getChoiceName(name, value);
  }

  getTrickName(trick: string): string {
    return this.getDetails(trick) ? this.getDetails(trick).name : trick;
  }
}
