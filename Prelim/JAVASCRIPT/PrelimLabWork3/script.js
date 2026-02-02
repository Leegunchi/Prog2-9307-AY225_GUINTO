function calculateGrade() {
    // input values for the numberrsss
    const missedAttendance = parseInt(document.getElementById('attendance').value);
    const lab1 = parseFloat(document.getElementById('lab1').value);
    const lab2 = parseFloat(document.getElementById('lab2').value);
    const lab3 = parseFloat(document.getElementById('lab3').value);

    // Check if the inputs are numbers and not letters so sir val say berry good
    if (
        isNaN(missedAttendance) ||
        isNaN(lab1) || isNaN(lab2) || isNaN(lab3)
    ) {
        alert('Please enter valid numbers for all fields!');
        return;
    }

    // Valid range
    if (
        missedAttendance < 0 ||
        lab1 < 0 || lab1 > 100 ||
        lab2 < 0 || lab2 > 100 ||
        lab3 < 0 || lab3 > 100
    ) {
        alert('Invalid input! Grades must be between 0 and 100, and absences cannot be negative.');
        return;
    }

    // failing grade :(
    if (missedAttendance >= 3) {
        document.getElementById('results').style.display = 'block';

        document.getElementById('displayAttendance').textContent = missedAttendance;
        document.getElementById('displayLab1').textContent = lab1.toFixed(2);
        document.getElementById('displayLab2').textContent = lab2.toFixed(2);
        document.getElementById('displayLab3').textContent = lab3.toFixed(2);
        document.getElementById('labAverage').textContent = "N/A";
        document.getElementById('classStanding').textContent = "FAILED";

        document.getElementById('passingScore').textContent = "FAILED";
        document.getElementById('excellentScore').textContent = "FAILED";

        document.getElementById('passingRemarks').innerHTML =
            '<strong>FAILED:</strong> You have missed 3 or more classes. Automatic failure due to attendance policy.';
        document.getElementById('excellentRemarks').innerHTML = '';

        document.getElementById('passingHighlight').className =
            'highlight highlight-warning';
        document.getElementById('excellentHighlight').className =
            'highlight highlight-warning';

        document.getElementById('results').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });

        return;
    }

    // Lab Work Average
    const labWorkAverage = (lab1 + lab2 + lab3) / 3;
    
    // Attendance score logic (mostly based on the 3 strikes your out rule of the school)
    const TOTAL_CLASSES = 8;

    const attendanceScore =
    ((TOTAL_CLASSES - missedAttendance) / TOTAL_CLASSES) * 100;


    // Class Standing or the attendance
    const classStanding =
        (attendanceScore * 0.40) + (labWorkAverage * 0.60);

    // required Prelim Exam scores
    const requiredForPassing =
        (75 - (classStanding * 0.30)) / 0.70;
    const requiredForExcellent =
        (100 - (classStanding * 0.30)) / 0.70;

    // Display results
    document.getElementById('displayAttendance').textContent = missedAttendance;
    document.getElementById('displayLab1').textContent = lab1.toFixed(2);
    document.getElementById('displayLab2').textContent = lab2.toFixed(2);
    document.getElementById('displayLab3').textContent = lab3.toFixed(2);
    document.getElementById('labAverage').textContent =
        labWorkAverage.toFixed(2);
    document.getElementById('classStanding').textContent =
        classStanding.toFixed(2);

    document.getElementById('passingScore').textContent =
        requiredForPassing.toFixed(2);
    document.getElementById('excellentScore').textContent =
        requiredForExcellent.toFixed(2);

    // Remarks
    document.getElementById('passingRemarks').innerHTML =
        `You need at least <strong>${requiredForPassing.toFixed(2)}</strong> in the Prelim Exam to pass.`;
    document.getElementById('excellentRemarks').innerHTML =
        `You need <strong>${requiredForExcellent.toFixed(2)}</strong> to be excellent.`;

    document.getElementById('passingHighlight').className = 'highlight';
    document.getElementById('excellentHighlight').className = 'highlight';

    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}
