import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';


@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent {
  onSubmit(form: NgForm) {
  if (form.valid) {
    alert('Form submitted!');
  }
}
}
