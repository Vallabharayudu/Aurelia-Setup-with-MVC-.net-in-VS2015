export  class ListOfUsers{

    constructor()
    {
        this.message='List Of Users';
        this.users=[];
        this.users.push(new UserLists(0,'Vallabha','80', 'UI Developer','Html5, css3, Javascript','Andhra Pradesh','India',false));
        this.users.push(new UserLists(1,'Rayudu','70', 'UI Developer','Html5, css3, Javascript','Andhra Pradesh','India',false));
        this.users.push(new UserLists(2,'Sarath','70', 'Team lead','N/A','Kerala','India',false));
        this.users.push(new UserLists(3,'Satpathy','90', 'Software Engineer','MVC , .NET, c#','Odisha','India',false));
        this.users.push(new UserLists(4,'Rohan','75','Product Manager','N/A','Karnataka', 'India',false));

        this.firstName ='';
        this.designation='';
        this.technologies='';
        this.state='';
        this.country='';
        this.renderInRightPane(this.users[0]);
        //this.users[0].ActiveControl = true;
    }

    renderInRightPane(objUserList)
    {
        this.firstName =objUserList.name;
        this.designation = objUserList.designation;
        this.technologies = objUserList.technologies;
        this.state = objUserList.State;
        this.country = objUserList.Country;
        this.users[objUserList.index].ActiveControl = true;
        for(var i=0; i<this.users.length; i++){
            if(objUserList.index!==i){
                this.users[i].ActiveControl = false;
            }
        }
        //this.objUserList.ActiveControl(true);
    }
}

export class UserLists{

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

