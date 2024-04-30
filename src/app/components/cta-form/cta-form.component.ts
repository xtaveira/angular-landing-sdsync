import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CtaService } from '../../services/cta.service';

@Component({
  selector: 'cta-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [CtaService],
  templateUrl: './cta-form.component.html',
  styleUrl: './cta-form.component.scss',
})
export class CtaFormComponent {
  ctaForm!: FormGroup;
  loading = signal(false);

  constructor(private service: CtaService) {
    this.ctaForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.ctaForm.valid) {
      this.service
        .sendData(this.ctaForm.value.name, this.ctaForm.value.email)
        .subscribe({
          next: () => {
            this.ctaForm.reset();
            this.loading.set(false);
          },
        });
    }
    console.log(this.ctaForm.value);
  }
}
