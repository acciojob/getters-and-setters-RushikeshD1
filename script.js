//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get name(){
		return this.name;
	}

	set age(age){
		this.age = age;
	}	
}

class Student extends Person {
	constructor(name, age){
		super(name, age)
	}

	study(){
		return `${super.name} is studing`
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
	}

	teach(){
		return `${super.name} is teaching`
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
