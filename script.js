/* =========================================
   EDUPATH - MAIN JAVASCRIPT
   Education & IT Career Pathway
========================================= */


/* =========================================
   START JOURNEY
========================================= */

const startButton = document.querySelector(".hero button");

if (startButton) {

    startButton.addEventListener("click", function () {

        alert(
            "Welcome to Education & IT Career Pathway! 🚀\n\n" +
            "Your learning journey starts now."
        );

        window.location.href = "assessment.html";

    });

}


/* =========================================
   SKILL ASSESSMENT
========================================= */

const assessmentForm =
    document.getElementById("assessmentForm");

if (assessmentForm) {

    assessmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let score = 0;

            const questions = [
                "q1",
                "q2",
                "q3",
                "q4"
            ];

            questions.forEach(function (question) {

                const selected =
                    document.querySelector(
                        'input[name="' +
                        question +
                        '"]:checked'
                    );

                if (selected) {

                    score += Number(
                        selected.value
                    );

                }

            });


            /* Score Result */

            let result = "";

            if (score >= 10) {

                result =
                    "🌟 Excellent! You have strong IT skills.";

            }

            else if (score >= 7) {

                result =
                    "👍 Good! You have a solid foundation in IT.";

            }

            else {

                result =
                    "📚 Keep Learning! Strengthen your IT fundamentals.";

            }


            const assessmentResult =
                document.getElementById(
                    "assessmentResult"
                );

            if (assessmentResult) {

                assessmentResult.innerHTML =
                    "🎯 Your Skill Score: " +
                    score +
                    " / 12<br><br>" +
                    result;

            }


            /* Career Recommendation */

            let career = "";

            if (score >= 10) {

                career =
                    "💻 Recommended Career: Web Developer";

            }

            else if (score >= 7) {

                career =
                    "☕ Recommended Career: Java Developer";

            }

            else {

                career =
                    "📚 Recommended Path: IT Beginner";

            }


            const careerRecommendation =
                document.getElementById(
                    "careerRecommendation"
                );

            if (careerRecommendation) {

                careerRecommendation.innerHTML =
                    "<br>" + career;

            }


            /* Save Assessment */

            localStorage.setItem(
                "assessmentScore",
                score
            );

            localStorage.setItem(
                "recommendedCareer",
                career
            );

        }
    );

}


/* =========================================
   QUIZ SYSTEM
========================================= */

const quizForm =
    document.getElementById("quizForm");

if (quizForm) {

    quizForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let score = 0;

            const questions = [
                "q1",
                "q2",
                "q3",
                "q4"
            ];


            questions.forEach(function (question) {

                const selected =
                    quizForm.querySelector(
                        'input[name="' +
                        question +
                        '"]:checked'
                    );

                if (selected) {

                    score += Number(
                        selected.value
                    );

                }

            });


            /* Save Score */

            localStorage.setItem(
                "quizScore",
                score
            );


            /* Display Score */

            const quizResult =
                document.getElementById(
                    "quizResult"
                );

            if (quizResult) {

                let message = "";

                if (score === 4) {

                    message =
                        "🏆 Perfect Score! Excellent work!";

                }

                else if (score >= 3) {

                    message =
                        "🌟 Great job! Your IT fundamentals are strong.";

                }

                else if (score >= 2) {

                    message =
                        "👍 Good effort! Keep practicing.";

                }

                else {

                    message =
                        "📚 Keep learning and try the quiz again.";

                }


                quizResult.innerHTML =
                    "🎯 Your Quiz Score: " +
                    score +
                    " / 4" +
                    "<br><br>" +
                    message;

            }

        }
    );

}


/* =========================================
   SHOW SAVED QUIZ RESULT
========================================= */

const savedScore =
    document.getElementById("savedScore");

if (savedScore) {

    const score =
        localStorage.getItem("quizScore");


    if (score !== null) {

        savedScore.textContent =
            score + " / 4";


        const performanceMessage =
            document.getElementById(
                "performanceMessage"
            );


        if (performanceMessage) {

            if (Number(score) === 4) {

                performanceMessage.textContent =
                    "🏆 Excellent! Perfect score!";

            }

            else if (