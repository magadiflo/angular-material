import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss'
})
export class SlideToggleComponent {

  private document = inject(DOCUMENT);

  onChangeSlideToggle(event: MatSlideToggleChange): void {
    console.log(event.checked);
    if (event.checked) {
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
  }

}
