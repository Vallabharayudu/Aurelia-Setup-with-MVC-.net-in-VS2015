export class ConfigService{
   
	constructor(){
		this.config = {
			"menus": [
		   {
		   	"id": 1,
		   	"isRoot": true,
		   	"name": "Wines",
		   	"isDrillDown": true,
		   	"parentId": null,
		   	"associatedFilterId": null,
		   	"children": [
			  {
			  	"id": 2,
			  	"isRoot": false,
			  	"name": "California",
			  	"isDrillDown": true,
			  	"parentId": 1,
			  	"associatedFilterId": null,
			  	"children": [
				  {
				  	"id": 4,
				  	"isRoot": false,
				  	"name": "Napa Valley",
				  	"isDrillDown": true,
				  	"parentId": 2,
				  	"associatedFilterId": null,
				  	"children": null
				  },
				  {
				  	"id": 5,
				  	"isRoot": false,
				  	"name": "Sonoma",
				  	"isDrillDown": false,
				  	"parentId": 2,
				  	"associatedFilterId": 1,
				  	"children": [
					  {
					  	"id": 6,
					  	"isRoot": false,
					  	"name": "Red",
					  	"isDrillDown": true,
					  	"parentId": 2,
					  	"associatedFilterId": null,
					  	"children": null
					  },
					  {
					  	"id": 7,
					  	"isRoot": false,
					  	"name": "White",
					  	"isDrillDown": false,
					  	"parentId": 2,
					  	"associatedFilterId": 1,
					  	"children": null
					  }
				  	]

				  }
			  	]
			  },
			  {
			  	"id": 3,
			  	"isRoot": false,
			  	"name": "French",
			  	"isDrillDown": false ,
			  	"parentId": 1,
			  	"associatedFilterId": null,
			  	"children": null
			  }
		   	]
		   },
		   {
		   	"id": 8,
		   	"isRoot": true,
		   	"name": "Beer",
		   	"isDrillDown": true,
		   	"parentId": null,
		   	"associatedFilterId": null,
		   	"children": [
			  {
			  	"id": 9,
			  	"isRoot": false,
			  	"name": "Mexico",
			  	"isDrillDown": true,
			  	"parentId": 1,
			  	"associatedFilterId": null,
			  	"children": [
				  {
				  	"id": 10,
				  	"isRoot": false,
				  	"name": "Tecate",
				  	"isDrillDown": true,
				  	"parentId": 2,
				  	"associatedFilterId": null,
				  	"children": null
				  },
				  {
				  	"id": 11,
				  	"isRoot": false,
				  	"name": "Corona",
				  	"isDrillDown": false,
				  	"parentId": 2,
				  	"associatedFilterId": 1,
				  	"children": null
				  }
			  	]
			  },
			  {
			  	"id": 12,
			  	"isRoot": false,
			  	"name": "German",
			  	"isDrillDown": true,
			  	"parentId": 2,
			  	"associatedFilterId": null,
			  	"children": null
			  },
			  {
			  	"id": 13,
			  	"isRoot": false,
			  	"name": "American",
			  	"isDrillDown": false,
			  	"parentId": 2,
			  	"associatedFilterId": 1,
			  	"children": null
			  }

		   	]
		   }]}
		;
	}
}