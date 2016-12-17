import {inject} from "aurelia-framework";
import {ConfigService} from "./appConfig";

@inject(ConfigService)
export class TreeAcc{
	constructor(configService){
		this.config = configService.config;
	}
}