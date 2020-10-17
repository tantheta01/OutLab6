import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
	
	{ path : 'form', component : FeedbackFormComponent },
	{ path : 'contacts', component : ContactDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
