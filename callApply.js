const normalPerson = {
    firstName: "Alamin",
    lastName: "Bhuiyan",
    salary: 10000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chergeBill: function(amount, tips, tax){
        this.salary = this.salary - amount -  tips - tax;
        return this.salary;
    }
}
normalPerson.chergeBill(500, 30, 30);
console.log(normalPerson.salary);

const heroPerson = {
    firstName: "Tanvir",
    lastName: "Mahtab",
    salary: 18000
}

normalPerson.chergeBill.call(heroPerson, 3000, 500, 50);
console.log(heroPerson.salary);

// const heroChergeBill = normalPerson.chergeBill.bind(heroPerson);
// heroChergeBill(3000);
// console.log(heroPerson);

const friendlyPerson = {
    firstName: "Solaiman",
    lastName: "Popo",
    salary: 5000
}

normalPerson.chergeBill.call(friendlyPerson, 1000, 100, 20)
console.log(friendlyPerson.salary);

// const friendlyChergeBill = normalPerson.chergeBill.bind(friendlyPerson);
// friendlyChergeBill(1000);
// console.log(friendlyPerson);

const familyPerson = {
    firstName: "Ebrahim",
    lastName: "Bhuiyan",
    salary: 5000
}
normalPerson.chergeBill.apply(familyPerson, [1000, 300, 20]);
console.log(familyPerson.salary);





