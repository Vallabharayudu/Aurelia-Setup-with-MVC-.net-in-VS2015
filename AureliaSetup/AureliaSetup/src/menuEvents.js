import {noView} from 'aurelia-framework';

@noView()
export class MenuItemChanged{
	constructor(menuItem){
		this.menuItem = menuItem;
	}
}

export class MenuItemAdded{
	constructor(menuItem){
		this.menuItem = menuItem;
	}
}