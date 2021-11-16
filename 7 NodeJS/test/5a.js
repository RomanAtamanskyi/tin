var student = {
    firstName: "Roman",
    lastName : "Atamanskyi",
    id: 21092,
    info : function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    },
    changeId : function() {
        id = Math.random(2000,3000);
        return this.id;
    }
}
function showStudent() {
    for (x in student) {
        console.log(student[x] + " is of type ->  " + typeof student[x]);
    }
}
console.log(showStudent());
console.log(student);
