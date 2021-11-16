class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + ' ' + this.surname;
    }

    set fullName(name) {
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
}

class Student extends Person {
    constructor(index, name, surname,  grades) {
        super(name, surname);
        this.index = index;
        this.grades = grades;
      }

      
    showStudent() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10)
        }
        var avg = sum/this.grades.length;
        return this.name + " " + this.surname + "// Avarage grade is" + avg;
    };


    get average() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return avg;
    }
}

var roman = new Student(15520, 'Roman', 'Atamanski',  [2,3,2,2,3]);


console.log(roman.showStudent());
console.log(roman.average)