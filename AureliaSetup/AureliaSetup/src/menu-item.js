import {customElement, bindable, inject} from 'aurelia-framework';
import {MenuItemChanged} from "./menuEvents";
import {EventAggregator} from 'aurelia-event-aggregator';

@customElement('menu-item')
@inject(EventAggregator)
export class MenuItem{

    @bindable menu;

	constructor(eventAggregator){
		this.id = 0;
		this.isRoot = false;
		this.name = null;
		this.isDrillDown = true;
		this.parentId = null;
		this.menu = null;
		this.children=[];
		this.expanded = false;
		this.hasChildren = false;
		this.eventAggregator = eventAggregator;
	}


	attached(){
		this.hasChildren = (this.menu.children && this.menu.children.length > 0);
		this.expanded = this.hasChildren && this.menu.isRoot;
	}

	toggleExpanded() {
		this.eventAggregator.publish(new MenuItemChanged(this.menu));
		if (!this.hasChildren) {
			return;
		}
		this.expanded = !this.expanded;
	}
}
