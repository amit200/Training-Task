import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  // imports:[BrowserModule, ReactiveFormsModule, FormsModule],
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit, OnChanges {
  studentForm!: FormGroup;
  @Input() item: any;
  @Output() valueChange = new EventEmitter();
  @Output() newValueChange = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      gender: new FormControl(),
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.item.currentValue) {
      console.log(this.item);
      this.studentForm.patchValue({
        fullName: this.item.fullName,
        email: this.item.email,
        gender: this.item.gender,
        address: this.item.address,
      });
    }
  }
  updatestudentForm() {}

  //   this.studentForm = this.fb.group({
  //     name: ["", Validators.required],
  //     email: ["", Validators.email]
  //   });
  // }

  onSubmit() {
    // console.log(this.studentForm.touched);
    this.valueChange.emit(this.studentForm.value);
    // console.log(this.studentForm.controls.fullName.touched);
    // console.log(this.studentForm.controls.email.touched);
    // console.log(this.studentForm.value);
  }
  reset() {
    this.studentForm.reset;
  }
  //   this.studentForm.setValue({
  //   name:"this.users[index].name",
  //   email:"this.users[index].email",
  //   address:"this.users[index].address",
  //   gender:"this.users[index].gender"
  // })
}
