  const form = document.getElementById('commentForm');

                form.addEventListener('submit', function(e) {
                    e.preventDefault(); // prevent actual form submission

                    const comment = encodeURIComponent(document.getElementById('details').value.trim());

                    if (!comment) {
                        alert("Please enter a comment.");
                        return;
                    }

                    // Compose Gmail URL with prefilled to, subject, body
                    const to = "johnpaulcaraig325@gmail.com";
                    const subject = encodeURIComponent("New comment from website");
                    const body = comment;

                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

                    // Open Gmail compose in new tab
                    window.open(gmailUrl, '_blank');
                });