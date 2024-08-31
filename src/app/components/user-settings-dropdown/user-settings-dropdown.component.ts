import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings-dropdown',
  templateUrl: './user-settings-dropdown.component.html',
  styleUrl: './user-settings-dropdown.component.css'
})
export class UserSettingsDropdownComponent {

  showDropdown(){
    document.getElementById('settingsDropdown')?.classList.toggle('hidden');
    document.getElementById('settingsDropdown')?.classList.toggle('active');
  }

}
