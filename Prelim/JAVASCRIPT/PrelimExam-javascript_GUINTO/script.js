// Programmer: Guinto, Juan Alphonse Valentin, A.
// Student ID: 25-1172-125

// Hardcoded CSV data as a multi-line string
const csvData = `StudentID,first_name,last_name,LAB WORK 1,LAB WORK 2,LAB WORK 3,PRELIM EXAM,ATTENDANCE GRADE
073900438,Osbourne,Wakenshaw,69,5,52,12,78
114924014,Albie,Gierardi,58,92,16,57,97
111901632,Eleen,Pentony,43,81,34,36,16
084000084,Arie,Okenden,31,5,14,39,99
272471551,Alica,Muckley,49,66,97,3,95
104900721,Jo,Burleton,98,94,33,13,29
111924392,Cam,Akram,44,84,17,16,24
292970744,Celine,Brosoli,3,15,71,83,45
107004352,Alan,Belfit,31,51,36,70,48
071108313,Jeanette,Gilvear,4,78,15,69,69
042204932,Ethelin,MacCathay,48,36,23,1,11
111914218,Kakalina,Finnick,69,5,65,10,8
074906059,Mayer,Lorenzetti,36,30,100,41,92
091000080,Selia,Rosenstengel,15,42,85,68,28
055002480,Dalia,Tadd,84,86,13,91,22
063101111,Darryl,Doogood,36,3,78,13,100
071908827,Brier,Wace,69,92,23,75,40
322285668,Bucky,Udall,97,63,19,46,28
103006406,Haslett,Beaford,41,32,85,60,61
104913048,Shelley,Spring,84,73,63,59,3
051403517,Marius,Southway,28,75,29,88,92
021301869,Katharina,Storch,6,61,6,49,56
063115178,Hester,Menendez,70,46,73,40,56
084202442,Shaylynn,Scorthorne,50,80,81,96,83
275079882,Madonna,Willatt,23,12,17,83,5
071001041,Bancroft,Padfield,50,100,58,13,14
261170740,Rici,Everard,51,15,48,99,41
113105478,Lishe,Dashkovich,9,23,48,63,95
267089712,Alexandrina,Abate,34,54,79,44,71
041002203,Jordon,Ribbens,41,42,24,60,21
021308176,Jennette,Andrassy,63,13,100,67,4
122239937,Hamid,Chapell,90,92,44,43,47
021109935,Cordy,Crosetto,16,10,99,32,57
111026041,Tiphanie,Gwin,34,45,88,87,27
072408708,Leanor,Izachik,95,35,88,9,75
221370030,Lissy,Tuffley,90,30,84,60,86
104900048,Myrta,Mathieson,88,80,16,6,48
111311413,Cynthea,Fowles,82,59,13,97,23
091408695,Zacherie,Branch,67,6,8,78,10
231372183,Britney,Blackesland,78,79,36,23,83
263190634,Theda,Menco,50,13,7,11,8
021606580,Carin,Schrader,77,32,25,56,53
074902341,Shawn,Moston,64,91,6,95,21
107006088,Virge,Sinnat,20,1,78,44,92
091807254,Alano,Jotcham,66,35,99,48,83
011601029,Pietra,Roy,35,34,75,39,98
122240010,Orren,Danihelka,51,36,17,59,32
091400046,Angie,Grindell,51,54,55,59,61
071001630,Vachel,Swancock,41,31,88,24,24
061020977,Zane,Bellie,88,92,92,52,46
065403150,Delphine,Sirette,73,35,53,48,67
081211300,Oliver,Pynner,47,76,76,56,87
011601074,Barbra,Antyukhin,72,66,76,53,42
091014898,Charmain,Elce,61,76,84,6,64
042100049,Herold,Klawi,3,56,92,27,76
091906359,Mariann,Mousdall,18,42,25,74,47
101114992,Horatius,Romera,91,52,29,11,56
031307604,Dall,Laboune,71,61,78,51,11
111308031,Teddie,Carlett,39,85,48,93,87
114919676,Kelley,Klimentyonok,22,17,83,61,81
322283835,Colene,Corgenvin,13,3,73,96,15
051402071,Diannne,Pashan,82,91,70,78,56
081904808,Staffard,Cullerne,46,37,15,39,50
074914407,Alwin,Hartzog,32,10,90,19,73
103110813,Johnny,Calbreath,3,48,19,4,16
241282632,Sophronia,Fere,65,58,71,49,37
063106734,Timothea,Lambird,77,74,78,85,52
064102290,Lauralee,Mc Caghan,37,76,99,97,12
075017947,Denny,Dani,59,80,5,4,50
072414297,Marilin,Lilloe,1,76,99,40,25
083908420,Hephzibah,Mizzi,33,44,69,72,34
075902340,Jourdan,Toulamain,44,84,89,80,24
114901147,Natassia,Daniele,4,68,27,66,45
061000256,Kellina,Newlands,13,34,20,57,89
051009296,Andria,Thurske,1,8,46,52,72
084205656,Shanie,Marczyk,64,2,33,62,45
041211298,Norine,Spinella,85,33,2,2,77
071922379,Rudiger,Cornbell,40,44,62,51,28
092101030,Reynold,Dumbelton,3,25,70,75,84
265270413,Fielding,Gouldstraw,57,41,85,17,23
051502434,Toni,Wong,36,19,93,31,74
072413557,Daisey,Shireff,85,56,79,35,47
231371799,Cristin,Albutt,79,37,46,79,26
122203248,Peterus,Ojeda,30,26,78,61,41
084205766,Nissie,Winterflood,76,2,81,36,18
075900465,Franciska,Meatyard,90,11,97,41,93
051502434,Tyler,Alekhov,89,69,32,34,8
114922430,Cordy,Byllam,42,88,50,77,100
221982156,Gabriel,Limrick,92,94,30,91,41
084201223,Nonie,McGaffey,35,12,84,33,43
071909211,Kittie,Alman,45,22,28,100,47
071900663,Gran,Smithies,68,35,59,9,84
067006432,Sammy,Gundry,48,24,42,4,61
081503490,Ozzy,Iskowitz,56,54,78,55,77
081307227,Charlie,Waldram,91,41,59,87,82
211272465,Benn,Adnams,1,29,23,89,33
065404913,Fidelia,Katt,35,35,61,66,36
082900380,Fidelia,Jahndel,24,15,93,1,43
061101100,Marietta,Bourgourd,74,83,74,18,7
075072157,Elberta,Argyle,73,61,24,52,39`;

// Array to store student records as objects
let studentRecords = [];

// Parse CSV data into array of objects
function parseCSV(csvString) {
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',');
    const records = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const record = {
            studentId: values[0],
            firstName: values[1],
            lastName: values[2],
            labWork1: values[3],
            labWork2: values[4],
            labWork3: values[5],
            prelimExam: values[6],
            attendanceGrade: values[7]
        };
        records.push(record);
    }

    return records;
}

// Render function to display all records in the table
function render() {
    const tableBody = document.getElementById('tableBody');
    const recordCount = document.getElementById('recordCount');
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Generate rows using template literals
    studentRecords.forEach((record, index) => {
        const row = `
            <tr>
                <td>${record.studentId}</td>
                <td>${record.firstName}</td>
                <td>${record.lastName}</td>
                <td>${record.labWork1}</td>
                <td>${record.labWork2}</td>
                <td>${record.labWork3}</td>
                <td>${record.prelimExam}</td>
                <td>${record.attendanceGrade}</td>
                <td>
                    <button class="btn btn-delete" onclick="deleteRecord(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
    
    // Update record count
    recordCount.textContent = studentRecords.length;
}

// Create function to add new student record
function addRecord(event) {
    event.preventDefault();
    
    // Get form values
    const studentId = document.getElementById('studentId').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const labWork1 = document.getElementById('labWork1').value;
    const labWork2 = document.getElementById('labWork2').value;
    const labWork3 = document.getElementById('labWork3').value;
    const prelimExam = document.getElementById('prelimExam').value;
    const attendance = document.getElementById('attendance').value;
    
    // Validate required fields
    if (!studentId || !firstName || !lastName) {
        alert('Please fill in Student ID, First Name, and Last Name!');
        return;
    }
    
    // Create new record object
    const newRecord = {
        studentId: studentId,
        firstName: firstName,
        lastName: lastName,
        labWork1: labWork1,
        labWork2: labWork2,
        labWork3: labWork3,
        prelimExam: prelimExam,
        attendanceGrade: attendance
    };
    
    // Push to array
    studentRecords.push(newRecord);
    
    // Re-render table
    render();
    
    // Clear form
    document.getElementById('studentForm').reset();
    
    // Show success message
    alert('Record added successfully!');
}

// Delete function to remove record from array
function deleteRecord(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        // Remove record from array at specific index
        studentRecords.splice(index, 1);
        
        // Re-render table
        render();
        
        alert('Record deleted successfully!');
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Parse CSV data into array
    studentRecords = parseCSV(csvData);
    
    // Initial render
    render();
    
    // Add form submit event listener
    document.getElementById('studentForm').addEventListener('submit', addRecord);
    
    console.log(`Student Record System initialized with ${studentRecords.length} records`);
});