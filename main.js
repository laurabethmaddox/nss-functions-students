const createStudent = () => {
    const newStudentObject = {
        name: "Laura Beth",
        grade: 12
    }
    return newStudentObject
}

const addMathGrade = (studentObject) => {
    studentObject.math = "B"

    return studentObject
}

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"

    return studentObject
}

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"

    return studentObject
}

let student = createStudent()
console.log(student)

let studentWithMath = addMathGrade(student)
console.log(studentWithMath)

let studentWithHistory = addHistoryGrade(studentWithMath)
console.log(studentWithHistory)

let studentWithScience = addScienceGrade(studentWithHistory)
console.log(studentWithScience)