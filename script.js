// Start Journey Button

const startButton = document.querySelector(".hero button");

if (startButton) {
    startButton.addEventListener("click", function () {
        alert("Welcome to EduPath! Your learning journey starts here.");
    });
}


// Skill Assessment

const assessmentForm = document.getElementById("assessmentForm");

if (assessmentForm) {

    assessmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let score = 0;

        const questions = ["q1", "q2", "q3", "q4"];

        questions.forEach(function (question) {

            const selected = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            if (selected) {
                score += Number(selected.value);
            }

        });

        let result;

        if (score >= 10) {
            result = "🌟 Excellent! You have strong IT skills.";
        }
        else if (score >= 7) {
            result = "👍 Good! You have a good foundation in IT.";
        }
        else {
            result = "📚 Keep Learning! You should improve your IT skills.";
        }

        document.getElementById("assessmentResult").innerHTML =
            "Your Skill Score: " + score + " / 12<br><br>" + result;

        let career = "";

        if (score >= 10) {
            career = "💻 Recommended Career: Web Developer";
        }
        else if (score >= 7) {
            career = "☕ Recommended Career: Java Developer";
        }
        else {
            career = "📚 Recommended Path: IT Beginner";
        }

        document.getElementById("careerRecommendation").innerHTML =
            "<br>" + career;

    });

}

// Quiz System

const quizForm = document.getElementById("quizForm");

if (quizForm) {

    quizForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let score = 0;

        const questions = ["q1", "q2", "q3", "q4"];

        questions.forEach(function (question) {

            const selected = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            if (selected) {
                score += Number(selected.value);
            }

        });

        document.getElementById("quizResult").innerHTML =
            "🎯 Your Quiz Score: " + score + " / 4";

        localStotage.setItem("quizScore", score);

    });
}
// Show saved quiz score on Results page

const savedScore = document.getElementById("savedScore");

if (savedScore) {

    const score = localStorage.getItem("quizScore");

    if (score !== null) {

        savedScore.innerHTML = score + " / 4";

        document.getElementById("performanceMessage").innerHTML =
            "🎉 Great! Keep improving your IT knowledge.";

    }
}
// Login System

// const loginForm = document.getElementById("loginForm");

// if (loginForm) {

//     loginForm.addEventListener("submit", function (event) {

//         event.preventDefault();

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         if (email && password) {

//             alert("Login Successful! 🎉");

//             window.location.href = "dashboard.html";

//         }

//     });
// }

// Login System

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const savedEmail = localStorage.getItem("studentEmail");
        const savedPassword = localStorage.getItem("studentPassword");

        if (email === savedEmail && password === savedPassword) {

            alert("Login Successful! 🎉");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password ❌");

        }

    });
}

// Register System

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        localStorage.setItem("studentName", name);
        localStorage.setItem("studentEmail", email);
        localStorage.setItem("studentPassword", password);

        alert("Account Created Successfully! 🎉");

        window.location.href = "login.html";
    });
}
// Show Student Name on Dashboard

const studentName = document.getElementById("studentName");

if (studentName) {

    const savedName = localStorage.getItem("studentName");

    if (savedName) {
        studentName.textContent = savedName;
    }

}

// Show Student Information on Profile

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

if (profileName) {

    const savedName = localStorage.getItem("studentName");
    const savedEmail = localStorage.getItem("studentEmail");

    if (savedName) {
        profileName.textContent = savedName;
    }

    if (savedEmail) {
        profileEmail.textContent = savedEmail;
    }

}

// Logout System

const logoutLink = document.getElementById("logoutLink");

if (logoutLink) {

    logoutLink.addEventListener("click", function (event) {

        event.preventDefault();

        localStorage.removeItem("studentName");
        localStorage.removeItem("studentEmail");
        localStorage.removeItem("studentPassword");

        alert("Logged out successfully! 👋");

        window.location.href = "login.html";

    });

}

const logoutLink = document.getElementById("logoutLink");

if (logoutLink) {
    logoutLink.addEventListener("click", function () {

        localStorage.removeItem("studentName");
        localStorage.removeItem("studentEmail");
        localStorage.removeItem("studentPassword");

        window.location.href = "login.html";

    });
}