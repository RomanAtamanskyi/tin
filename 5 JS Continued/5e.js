class Student {
    constructor(index, name, surname, grades) {
        this.id = index;
        this.name = name;
        this.surname = surname;
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
    get fullName() {
        return this.name + ' ' + this.surname;
    }

    set fullName(name) {
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
}

var roman = new Student(15520, 'Roman', 'Atamanski', [3,5,2,1]);

console.log(roman.showStudent());


roman.fullName = 'Roman Atamanski';
console.log(roman.fullName);
console.log(roman.average);