
       let score = 0;
        let timeLeft = 10;

        function startGame() {
            document.getElementById("clickBtn").disabled = false;
            let countdown = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").innerText = "Temps restant : " + timeLeft + "s";
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    document.getElementById("clickBtn").disabled = true;
                    document.getElementById("timer").innerText = "Temps écoulé !";
                }
            }, 500);
        }

        function increment() {
            if (timeLeft > 0) {
                score++;
                document.getElementById("score").innerText = "Score : " + score;
            }
        }

        setTimeout(startGame, 500);