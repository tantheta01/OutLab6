import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetPostService } from '../get-post.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

	respCode: number=0;
  // verts: number=4;
	userDataForm = new FormGroup({
    name: new FormControl('', [
    	Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required]),
    feedback: new FormControl('', [Validators.required]),

    comment: new FormControl('')
  });

	onSubmit(): void {
		console.log("Helo");
	}
	

  constructor(public getpost : GetPostService) { }
  getData(): void {
  	this.getpost.getListOfGroup().subscribe(ans => {
  		this.userDataForm.patchValue({
  			name : ans['name'],
  			email : ans['email'],
  			comment : ans['comment'],
  			feedback : ans['feedback']
  		})
  	});
  }

  postData(): void{
  	this.getpost.postdata(this.userDataForm.controls['name'].value, this.userDataForm.controls['email'].value, this.userDataForm.controls['feedback'].value, this.userDataForm.controls['comment'].value).subscribe({
      next: ans => {
        this.respCode = 1;
      }, 
      error:error => {
        this.respCode=-1;
        // this.respCode = error.error.email;
        console.log(error);
      }
    })
  }
  ngOnInit(): void {
  	
  		this.getData();
  		// this.postData();
  		// this.up	dateName();	
  }

}
