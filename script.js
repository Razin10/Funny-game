



document.getElementById("doggyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var fatherName = document.getElementById("fatherName").value;
    var motherName = document.getElementById("motherName").value;
    var study = document.getElementById("study").value;
    var relationship = document.getElementById("relationship").value;

    var output = "My Doggy Name Is " + username + ", My doggys father name " + fatherName + ",  my doggys mother name is " + motherName + "my do doggy study in class " + study + ", Our relationship is " + relationship;
     document.getElementById("fuck").textContent = output;
});

// আইকনের উপর ক্লিক ইভেন্ট শোনার জন্য
const closeButton = document.querySelector('.close-fill');
const toastBody = document.getElementById('fuck');

closeButton.addEventListener('click', () => {
  // ক্লিক হলে toast-body এর innerHTML কে একটি খালি স্ট্রিং সেট করে
  toastBody.innerHTML = '';
});