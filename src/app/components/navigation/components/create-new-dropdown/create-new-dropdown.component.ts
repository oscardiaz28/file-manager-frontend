import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new-dropdown',
  templateUrl: './create-new-dropdown.component.html',
  styleUrl: './create-new-dropdown.component.scss'
})
export class CreateNewDropdownComponent {

  showDropdown(){
    document.getElementById('dropdown')?.classList.toggle('active');
  }

}
