var Courses = { 
    crs: ['aa', 'bb', 'cc', 'dd', 'ee', 'ff']
};

function create(_index, _name, _surname) { 
    var student = Object.create(Courses);
    student.index = _index;
    student.name = _name;
    student.surname = _surname;
    return student;
}

var show = create(21092, 'Roman', 'Atamanski');
console.log(show.crs);
console.log(show);
