//using this keyword in js
//this kwyword used for current context
const user={
    username:"ritik",
    price:199,
    welcomeMessage:function(){
        console.log(`username is ${this.username} and thie price is ${this.price}`)
        console.log(this);
        
    }
}
user.welcomeMessage()
//using the funstion with this keyword