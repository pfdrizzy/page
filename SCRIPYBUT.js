  <script>
        // Function to change text and background color
        function changeContent() {
            const message = document.getElementById("message");

            // Change the text
            message.textContent = "You clicked the button! 🎉";

            // Change background color randomly
            const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffcc99"];
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
    </script>