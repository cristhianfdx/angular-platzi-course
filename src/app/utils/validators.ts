import { AbstractControl } from '@angular/forms';

export class CustomValidator {

    static isPriceValid(control: AbstractControl) {
        if (control.value > 10000) {
            return { price_invalid: true };
        }
        return null;
    }
}
