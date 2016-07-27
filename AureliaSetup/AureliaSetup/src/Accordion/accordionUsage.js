export class AccordionUsage{
    constructor()
    {
        this.items=[];
        this.items.push(new AdminLists(0,'Vallabha','80', 'UI Developer','Html5, css3, Javascript','Andhra Pradesh','India',false));
        this.items.push(new AdminLists(1,'Rayudu','70', 'UI Developer','Html5, css3, Javascript','Andhra Pradesh','India',false));
        this.items.push(new AdminLists(2,'Sarath','70', 'Team lead','N/A','Kerala','India',false));
        this.items.push(new AdminLists(3,'Satpathy','90', 'Software Engineer','MVC , .NET, c#','Odisha','India',false));
        this.items.push(new AdminLists(4,'Rohan','75','Product Manager','N/A','Karnataka', 'India',false));
    }
}

export class AdminLists{

    constructor(index,name,status, designation, technologies,State, Country, ActiveControl )
    {
        
        this.index = index;
        this.name  = name;
        this.status = status;
        this.designation = designation;
        this.technologies = technologies;
        this.State = State;
        this.Country = Country;
        this.ActiveControl = ActiveControl;
    }
}