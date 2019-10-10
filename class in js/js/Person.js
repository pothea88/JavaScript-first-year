import Student from './Student.js'
class Person extends Student {
    Welcome() {
        console.log("Welcome to new day");
    }
}
const p1 = new Person();
p1.setFirstName("Him");
p1.setLastName("Hey");
p1.setAge(20);
p1.getFirstName();
p1.getLastName();
p1.getAge();