import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employeeForm!:FormGroup;
  data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder,private api:ApiService)
  {

  }
  ngOnInit(): void {
   this.employeeForm=this.formbuilder.group({
name:['',Validators.required],
email:['',Validators.required],
city:['',Validators.required],
pincode:['',Validators.required],
PhoneNumber:['',Validators.required]



   })
   this.getemployee();
  }
  addEmployee(data:datamodel)
  {
console.log(data);
this.api.appemployee(data).subscribe((res=>{
this.employeeForm.reset();
location.reload();

}))
alert("DATA SAVE SUCCESSFULLY !!!!!!");
  }


getemployee()
{
  this.api.getemployee().subscribe(res=>{
this.data=res;

  })
}



getDelete(eid:any) {
 
  this.api.deleteemployee(eid).subscribe((result)=>{
    //console.log(result);
    //this.ngOnInit();
   
    //  alert("data deleted succeesfully!!");
    location.reload();
  });
   
}



} 