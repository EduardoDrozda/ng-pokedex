import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id!: string | number;
  @Input() placeholder = '';
  @Input() type!: 'text' | 'number';
  @Input() disabled = false;
  @Input() isLoading = false;
  @Input() cleareable = false;
  @Output() change = new EventEmitter<'text' | 'number'>();

  private innerValue!: string | number;

  get value() {
    return this.innerValue;
  }

  set value(v: string | number) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange(value: 'text' | 'number') {
    this.change.emit(value);
  }

  clearValue() {
    this.value = '';
  }

}
