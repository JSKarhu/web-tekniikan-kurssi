/*let person = {
    fname: 'Joona',
    lname: 'Karhu',
    age: 24
}

person.age = 25;

let persons = [
    {
        fname: 'Tiina',
        lname: 'Karvanen',
        age: 34
    },
    {
        fname: 'Lasse',
        lname: 'Kukkonen',
        age: 12
    },
    person
];

persons.forEach(p => console.log(p.lname));
*/
let courses = [];
document.querySelector('button').addEventListener('click', addCourse);
document.getElementById('show').addEventListener('click', showAll)

function addCourse() {
    let cname = document.getElementById('course').value;
    let num = document.getElementById('number').value;
    
    let course = {
        course_name: cname,
        students_num: num
    }
    courses.push(course);
    console.log(courses);
}

function showAll() {
    courses.forEach( course => {
        let li = document.createElement('li');
        li.textContent = 'Course ' + course.course_name + ' has ' + course.students_num + ' students registered.';

        document.querySelector('ul').appendChild(li);
    });
}





