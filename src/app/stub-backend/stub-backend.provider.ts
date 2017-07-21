import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
import { environment } from '../../environments/environment';
import { Driver } from '../models/driver';
 
/**
 * Provider to allow the use of a stub backend instead of a real Http service for backend-less development.
 */
export let stubBackendProvider = {
  provide: Http,
  deps: [MockBackend, BaseRequestOptions, XHRBackend],
  useFactory: (mockBackend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) => {
 
    if (!environment.stubBackend) {
      console.log('Configuring real Http backend...');
      return new Http(realBackend, options);
    }
 
    console.log('Configuring stub Http backend...');
 
    let drivers: Driver[] = [
      {id: '9509c8b4-ad34-4378-b49c-c9206dfd7f75', name: 'Pepe Navarro', available: false},
      {id: '1b35d8f8-9e80-4316-b3e3-135a8f81200f', name: 'Paco Fiestas', available: true}];
 
    mockBackend.connections.subscribe((connection: MockConnection) => {
 
      // wrap in timeout to simulate server api call
      setTimeout(() => {
 
        // Get all tasks
        if (connection.request.method === RequestMethod.Get && connection.request.url.match('/drivers$')) {
          connection.mockRespond(new Response(new ResponseOptions({body: drivers.slice()})));
          return;
        }
 
        // Save driver
        if (connection.request.method === RequestMethod.Post && connection.request.url.match('/drivers$')) {
          let newDriver = JSON.parse(connection.request.getBody());
          newDriver.id = generateUUID();
          drivers.push(newDriver);
 
          connection.mockRespond(new Response(new ResponseOptions({body: newDriver})));
          return;
        }
 
        // Delete driver
        if (connection.request.method === RequestMethod.Delete && connection.request.url.match('/drivers/*')) {
          let id = connection.request.url.replace(/.*drivers\//, '');
          drivers = drivers.filter(driver => driver.id !== id);
 
          connection.mockRespond(new Response(new ResponseOptions()));
          return;
        }
      }, 500);
 
    });
 
    return new Http(mockBackend, options);
  }
};

 function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}