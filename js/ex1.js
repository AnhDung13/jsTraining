class School {
  constructor(name) {
    this.name = name;
    this.classList = [];
    this.currentClassID = 1;
    this.currentStudentID = 1;
  }
  addClass(className) {
    this.classList.push(new Classroom(this.currentClassID++, className));
  }
  updateClass(id, property, newValue) {
    this.classList.filter((_class) => {
      if (_class.id === id) {
        return (_class[property] = newValue);
      }
    });
  }
  deleteClass(id) {
    this.classList = this.classList.filter((_class) => {
      return _class.id !== id;
    });
  }
  addStudent(name, gender, _class) {
    let newStudent = new Student(this.currentStudentID++, name, gender);
    this.classList.forEach((value) => {
      if (value.name === _class) {
        value.studentList.push(newStudent);
      }
    });
  }
  classInfo(id) {
    this.classList.forEach((_class) => {
      if (_class.id === id) {
        console.log(_class.getClassDetails());
      }
    });
  }

  studentInfo() {
    for (let _class of this.classList) {
      for (let student of _class.studentList) {
        console.log(student.getStudentDetails());
      }
    }
  }
}
class Classroom {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.studentList = [];
  }
  getClassDetails() {
    return `Class ID: ${this.id}, Class Name: ${this.name}, Number of Students: ${this.studentList.length}`;
  }
}
class Student {
  constructor(id, name, gender) {
    this.id = id;
    this.name = name;
    this.gender = gender;
  }
  getStudentDetails() {
    return `Student ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}`;
  }
}
const school = new School("highschool");
school.addClass("class A");
school.addClass("class B");
school.addClass("class C");

school.updateClass(1, "name", "Class A1");
school.deleteClass(1);
school.addStudent("john", "male", "class B");
school.addStudent("john1", "male", "class B");
school.addStudent("john2", "male", "class B");
console.log(school.classList);
console.log(school);
school.classInfo(2);
