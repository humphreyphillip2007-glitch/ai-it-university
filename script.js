const searchInput = document.getElementById("search");
const courseGrid = document.getElementById("courseGrid");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const courses = courseGrid.querySelectorAll(".course-card");

  courses.forEach((course) => {
    const courseText = course.textContent.toLowerCase();

    if (courseText.includes(searchTerm)) {
      course.style.display = "";
    } else {
      course.style.display = "none";
    }
  });
});


/* Login button */

document.querySelector(".login").addEventListener("click", function () {
  alert("Student login will be added in the next stage.");
});


/* Get Started button */

document.querySelector(".signup").addEventListener("click", function () {
  alert("Student registration will be added in the next stage.");
});


/* AI Assistant buttons */

document.querySelectorAll(".secondary-button, .ai-section .primary-button")
  .forEach((button) => {
    button.addEventListener("click", function () {
      alert("AI Study Assistant coming soon!");
    });
  });


/* Course buttons */

document.querySelectorAll(".course-card button").forEach((button) => {
  button.addEventListener("click", function () {
    const course = button.closest(".course-card");
    const title = course.querySelector("h3").textContent;

    alert(
      title +
      " course page will be available soon."
    );
  });
});
