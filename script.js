document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Book added successfully!");
            window.location.href = "browse.html";
        });
    }

    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            console.log("Searching for:", searchInput.value);
        });
    }
});
