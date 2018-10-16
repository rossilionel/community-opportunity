import { Injectable } from '@angular/core';


@Injectable()
export class ConstData {
	public apiAddress = 'https://communityopportunity.com/api';
	public jobsUrl = this.apiAddress+'/careers.php';
	public eventsUrl = this.apiAddress+'/events.php';
  public newsUrl = 'https://communityopportunity.com/blog/wp-json/wp/v2/posts/';

  public filterUrl = "https://communityopportunity.com/api/options.php?id=";

  private userphoto: string= '';

  constructor() {

  }

  
}
