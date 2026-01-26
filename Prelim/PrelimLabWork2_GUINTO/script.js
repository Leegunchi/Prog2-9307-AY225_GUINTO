document.addEventListener('DOMContentLoaded', function() {
    // Pre-existing user accounts with unique profiles
    let userProfiles = {
    };

    // Store attendance records for all users
    let attendanceRecords = [];
    let userIdCounter = 3; // Counter for generating new IDs

    // bong.mp3 yo
    const beep = new Audio('beep.mp3');

    // Generate unique ID based on role
    function generateUserId(role) {
        const prefix = role === 'Teacher' ? 'FAC' : 'STU';
        userIdCounter++;
        return `${prefix}-2024-${String(userIdCounter).padStart(3, '0')}`;
    }

    // Format timestamp
    function formatTimestamp(date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    }

    // Show message
    function showMessage(text, type) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }

    // Toggle between Sign In and Sign Up
    document.getElementById('showSignUp').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('signInForm').style.display = 'none';
        document.getElementById('signUpForm').style.display = 'block';
    });

    document.getElementById('showSignIn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('signUpForm').style.display = 'none';
        document.getElementById('signInForm').style.display = 'block';
    });

    // Handle Sign Up
    document.getElementById('signUpFormElement').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('signupFullName').value.trim();
        const username = document.getElementById('signupUsername').value.toLowerCase().trim();
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const role = document.getElementById('signupRole').value;

        // Validation
        if (!fullName || !username || !password || !role) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage('Password must be at least 6 characters', 'error');
            return;
        }

        // Check if username already exists
        if (userProfiles.hasOwnProperty(username)) {
            showMessage('Username already exists. Please choose another.', 'error');
            return;
        }

        // Create new user profile
        const newUserId = generateUserId(role);
        userProfiles[username] = {
            password: password,
            fullName: fullName,
            role: role,
            id: newUserId
        };

        showMessage('Account created successfully! You can now sign in.', 'success');
        
        // Clear form and switch to sign in
        document.getElementById('signUpFormElement').reset();
        setTimeout(() => {
            document.getElementById('signUpForm').style.display = 'none';
            document.getElementById('signInForm').style.display = 'block';
        }, 1500);
    });

    // Handle Sign In
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.toLowerCase().trim();
        const password = document.getElementById('password').value;
        
        // Check if username exists and password matches
        if (userProfiles.hasOwnProperty(username) && userProfiles[username].password === password) {
            // Successful login
            const loginTime = new Date();
            const timestamp = formatTimestamp(loginTime);
            const userProfile = userProfiles[username];
            
            // attendance record with full profile
            attendanceRecords.push({
                username: username,
                fullName: userProfile.fullName,
                role: userProfile.role,
                id: userProfile.id,
                timestamp: timestamp
            });
            
            // login section 
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('welcomeSection').style.display = 'block';
            
            // welcome message with full name
            document.getElementById('welcomeMessage').innerHTML = 
                `<p style="font-size: 18px; color: #28a745; margin-bottom: 10px;">
                    Hello, <strong>${userProfile.fullName}</strong>!
                </p>
                <p style="font-size: 14px; color: #666;">
                    Role: ${userProfile.role}<br>
                    ID: ${userProfile.id}
                </p>`;
            
            // Display time
            document.getElementById('timestampDisplay').innerHTML = 
                `<strong>Login Time:</strong> ${timestamp}`;
        } else {
            // Failed login
            beep.play();
            showMessage('Invalid username or password', 'error');
            
            // Clear password 
            document.getElementById('password').value = '';
        }
    });

    // Handle attendance download
    document.getElementById('downloadBtn').addEventListener('click', function() {
        let attendanceData = '=== ATTENDANCE SUMMARY ===\n\n';
        
        // Sort records by timestamp
        const sortedRecords = [...attendanceRecords].sort((a, b) => {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });
        
        sortedRecords.forEach((record, index) => {
            attendanceData += `Entry ${index + 1}:\n`;
            attendanceData += `Full Name: ${record.fullName}\n`;
            attendanceData += `Username: ${record.username}\n`;
            attendanceData += `ID Number: ${record.id}\n`;
            attendanceData += `Role: ${record.role}\n`;
            attendanceData += `Login Time: ${record.timestamp}\n`;
            attendanceData += '========================\n';
        });
        
        // Count unique users
        const uniqueUsers = [...new Set(attendanceRecords.map(r => r.username))];
        
        // Group by role
        const roleCount = {};
        attendanceRecords.forEach(record => {
            roleCount[record.role] = (roleCount[record.role] || 0) + 1;
        });
        
        attendanceData += `\n--- SUMMARY ---\n`;
        attendanceData += `Total Logins: ${attendanceRecords.length}\n`;
        attendanceData += `Unique Users: ${uniqueUsers.length}\n\n`;
        attendanceData += `Logins by Role:\n`;
        for (const [role, count] of Object.entries(roleCount)) {
            attendanceData += `  ${role}: ${count}\n`;
        }
        attendanceData += `\nReport Generated: ${formatTimestamp(new Date())}\n`;
        
        const blob = new Blob([attendanceData], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'attendance_summary.txt';
        link.click();
        
        showMessage('Attendance summary downloaded!', 'success');
    });

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        document.getElementById('welcomeSection').style.display = 'none';
        document.getElementById('loginSection').style.display = 'block';
        
        // Clear form
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
});