import {bindable, inject} from 'aurelia-framework';

import {Accordion} from './accordion';


@inject(Accordion)
export class AccordionSection {
  @bindable title;
  
    constructor(accordion) {
        this.accordion = accordion;
    }
  
    attached() {
        this.accordion.sections.push(this);
        this.accordion.sections[0].isVisible = true;
    }
  
    showContent() {
        for (let section of this.accordion.sections) {
            section.isVisible = false;
        }
        this.isVisible = true;
    }
}