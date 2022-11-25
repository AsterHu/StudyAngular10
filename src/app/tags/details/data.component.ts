import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  template: '<h3>"{{name}}"</h3>',

})
export class tagsComponent  {
  @Input()
//[reference]https://angular.io/guide/component-interaction
//建立資料model
get name():string {return this._name}
set name(name: string) {
  this._name = (name && name.trim()) || '<no name set>';
}
private _name='';


  constructor() { }

  ngOnInit(): void {
  }

}
