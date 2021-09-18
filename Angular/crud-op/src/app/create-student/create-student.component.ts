import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})



export class CreateStudentComponent implements OnInit {
  studentForm !:FormGroup;
  
   
  
  

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      fullName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      address:new FormControl(),
      gender:new FormControl(),
      
      

    })}

    onSubmit(){
      console.log(this.studentForm.value);
      console.log(this.studentForm.touched);

      
      console.log(this.studentForm.controls.fullName.touched);
      console.log(this.studentForm.controls.email.touched);
      // console.log(this.studentForm.value);
      this.studentForm.reset();


    }
    reset(){
      this.studentForm.reset;
    }
    
   
   
   }    
   



  


