// Student Grade Calculator - Main Module
function calculateGrade(marks) {
if (marks > 74) return 'A';
if (marks >= 65) return 'B';
if (marks >= 55) return 'C';
if (marks >= 45) return 'S';
return 'F';
}
function calculateGPA(grades) {
const gradePoints = { 'A': 4.0,

'B': 3.0,

'C': 2.0,

'S': 1.0,

'F': 0.0 };
const total = grades.reduce((sum, g) => sum + (gradePoints[g] || 0), 0);
return (total / grades.length).toFixed(2);
}
function getGPAClassification(gpa) {
if (gpa >= 3.7) return 'First Class Honours';
if (gpa >= 3.3) return 'Second Class Upper';
if (gpa >= 2.7) return 'Second Class Lower';
if (gpa >= 2.0) return 'General Pass';
return 'Fail';
}
