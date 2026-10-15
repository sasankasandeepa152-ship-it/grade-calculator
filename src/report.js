// Grade Report Generator
function generateReport(studentName, subjects) {
let report = `\n===== GRADE REPORT =====\n`;
report += `Student: ${studentName}\n`;
report += `Date: ${new Date().toLocaleDateString()}\n\n`;
subjects.forEach(s => {
report += `${s.name}: ${s.marks} (${calculateGrade(s.marks)})\n`;
});
return report;
}
