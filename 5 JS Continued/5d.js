function Student(index, name, surname, grades) {
    this.id = index;
    this.name = name;
    this.surname = surname;
    this.grades = grades;
    
    this.showStudent = function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10)
        }
        var avg = sum/this.grades.length;
        return this.name + " " + this.surname + "// Avarage grade is" + avg;
    };
}

var roman = new Student(15, "Roman", "Atamanski", [6, 3, 3, 2]);

Object.defineProperty(roman, 'fullName', {
    get: function() {
        return this.name + ' ' + this.surname;
    },
    set: function(name) {
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
});

Object.defineProperty(roman, 'average', {
    get: function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return avg;
    }
});

roman.fullName = "Roman Atamanski";
console.log(roman.fullName);
console.log(roman.average);