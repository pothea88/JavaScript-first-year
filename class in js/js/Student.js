export default class Student {
    //setter
    //set firstname
    setFirstName(fname) {
        this.mFname = fname;
    }
    setLastName(lname) {
        this.mLname = lname;
    }
    setAge(age) {
        this.mAge = age;
    }
    //getter
    getFirstName() {
        console.log(this.mFname);
    }
    getLastName() {
        console.log(this.mLname);
    }
    getAge() {
        console.log(this.mAge);
    }
}
const student1 = new Student();
student1.setFirstName("Rady");
student1.setLastName("Y");
student1.setAge(70);
student1.getFirstName();
student1.getLastName();
student1.getAge();