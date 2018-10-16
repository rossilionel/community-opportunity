import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams  } from 'ionic-angular';
import { Services } from "../../services/services";

import { SocialSharing } from '@ionic-native/social-sharing';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html'
})
export class JobDetailPage {
	public job: any;
	public isloading: boolean = false;
	public applyFlag:boolean = false;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private navparams: NavParams,
  	 private socialSharing: SocialSharing, private emailComposer: EmailComposer, private iab: InAppBrowser) {
  	this.job = this.navparams.get('job');
  	// console.log("job", this.job);
  	if(this.job.apply.indexOf('.com')>-1) {
  		this.applyFlag = true;
  	} else {
  		this.applyFlag = false;
  	}
  }


  share(event, type){
  	switch(type){
  		case 0: 
  			this.socialSharing.shareViaFacebook(this.job.title, "", 'https://communityopportunity.com/careers/detail/index.php?id='+ this.job.id).then(() => {
			  console.log("facebook");
			}).catch((err) => {
			  console.log("facebook error", err);
			});
			break;
		case 1: 
  			this.socialSharing.shareViaTwitter(this.job.title, "../assets/share.png", 'https://communityopportunity.com/careers/detail/index.php?id='+ this.job.id).then(() => {
			  console.log("shareViaTwitter");
			}).catch((err) => {
			  console.log("twitter error", err);
			});
			break;
		// case 2: 
  // 			this.socialSharing.shareViaFacebook(this.event.name, "../assets/share.png", 'http://hometownopportunity.com/events/detail/index.php?id='+ this.event.id).then(() => {
		// 	  // Sharing via email is possible
		// 	}).catch(() => {
		// 	  // Sharing via email is not possible
		// 	});
		// 	break;
		// case 3: 
  // 			this.socialSharing.canShareVia('GooglePlus').then((data) => {
		// 	  console.log("success", data);
		// 	}).catch((err) => {
		// 	  console.log("error", err);
		// 	});
		// 	break;
		case 2:
			// this.emailComposer.isAvailable().then((available: boolean) =>{
			 // if(available) {
			   let email = {
				  subject: 'Check out this article: ' + this.job.title,
				  body: 'https://communityopportunity.com/careers/detail/index.php?id='+ this.job.id,
				  isHtml: true
				};
				this.emailComposer.open(email);
			//  } else {
			//  	alert("erro");
			//  }
			// });
			
			break;
  	}
  }

  onClickApply() {
  	let newUrl = '';
  	if(this.job.apply.indexOf('http')>-1) {
  		newUrl = this.job.apply;
  	} else {
  		newUrl = 'http://' + this.job.apply;
  	}
  	const browser = this.iab.create(newUrl, "_blank", "location=no");
  }


  

}
