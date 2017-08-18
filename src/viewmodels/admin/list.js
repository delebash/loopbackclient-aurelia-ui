import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {SharedService} from './shared-service';
import {Endpoint} from 'aurelia-api';


@inject(Router, SharedService, Endpoint.of('api'))
export class Admin {

  constructor(router, sharedService, api) {
    //console.log(contacts)
    this.router = router;
    this.sharedService = sharedService
    this.api = api
    //this.contacts = this.sharedService.contacts
  }

  async created() {
    //let response = await this.http.get('/mydata');
    let data = await this.api.find('customers');
    this.contacts = data
    console.log(data)
    // this.sharedService.getContactList().then(contacts => this.contacts = contacts);
  }

  activate(params, routeConfig) {

  }


  attached() {
    // $('#myTable tbody tr').click(function () {
    //   alert('testcontact')
    //   $(this).addClass('table-active').siblings().removeClass('table-active');
    // });
  }

  select(contact) {
    this.sharedService.data = contact;
    this.router.navigateToRoute('detail', {id: contact.id})
  }

}
