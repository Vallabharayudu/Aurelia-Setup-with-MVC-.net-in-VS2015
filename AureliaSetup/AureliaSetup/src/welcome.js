export class welcome {
    constructor(){
        this.Sirname='Ikkurthi';
        this.message = 'Welcome to Aurelia!';
        this.firstName = 'Vallabha';
        this.lastName ='Rayudu';
        this.friends= [];
        this.potentialFriend = '';
    }

    addFriend(){
        if(this.potentialFriend){
            this.friends.push(this.potentialFriend);
        }
        this.potentialFriend='';
    }

    get fullName() {
        return `${this.Sirname} ${this.firstName} ${this.lastName}`;
    }


}