const beep = new Audio("beep.mp3");

// DEFAULT LOGIN
const DEFAULT_USER = "admin";
const DEFAULT_PASS = "1234";

let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// LOGIN
function login() {
  const u = loginUser.value;
  const p = loginPass.value;

  if (u === DEFAULT_USER && p === DEFAULT_PASS) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
  } else {
    beep.play();
    alert("Incorrect password!");
  }
}

// REGISTER
function register() {
  const role = roleSelect = document.getElementById("role").value;
  const name = fullName.value;
  const courseVal = course.value;
  const sig = sign.toDataURL();

  if (!name) return alert("Fill required fields");

  const timeStamp = new Date().toLocaleString();

  const record = {
    role,
    name,
    course: role === "student" ? courseVal : "N/A",
    time: timeStamp,
    signature: sig
  };

  attendance.push(record);
  localStorage.setItem("attendance", JSON.stringify(attendance));

  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("successBox").classList.remove("hidden");
  document.getElementById("time").innerText = "Timestamp: " + timeStamp;
}

// DOWNLOAD FILE
function downloadAttendance() {
  let text = "ATTENDANCE SUMMARY\n\n";
  attendance.forEach(a => {
    text += Name: ${a.name}\nRole: ${a.role}\nCourse: ${a.course}\nTime: ${a.time}\n\n;
  });

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "attendance_summary.txt";
  link.click();
}

// SIGNATURE
const sign = document.getElementById("sign");
const ctx = sign.getContext("2d");
let drawing = false;

sign.addEventListener("mousedown", () => drawing = true);
sign.addEventListener("mouseup", () => drawing = false);
sign.addEventListener("mousemove", e => {
  if (!drawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

function clearSig() {
  ctx.clearRect(0, 0, sign.width, sign.height);
}

// RAIN EFFECT
const rain = document.getElementById("rain");
const symbols = ["✝", "♰", "✞", "†"];

for (let i = 0; i < 40; i++) {
  const s = document.createElement("div");
  s.className = "symbol";
  s.innerText = symbols[Math.floor(Math.random()*symbols.length)];
  s.style.left = Math.random()*100 + "%";
  s.style.animationDuration = (3 + Math.random()*5) + "s";
  rain.appendChild(s);
}