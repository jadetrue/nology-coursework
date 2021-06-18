"use strict";

var studentContainer = document.querySelector(".students-container");
var profile = {
  firstName: "Jade",
  surname: "True",
  birthYear: 1998,
  quote: "There's no reward in life without risk.",
  skills: ["HTML5", "CSS3", "JavaScript"],
  imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
  getFullName: function getFullName() {
    return "".concat(this.firstName, " ").concat(this.surname);
  },
  getUserSkills: function getUserSkills() {
    var skillsList = this.skills.map(function (skill) {
      return "<li>".concat(skill, "</li>");
    });
    console.log(skillsList);
    return skillsList.join("\n");
  },
  getProfileCard: function getProfileCard() {
    var profileHTML = "\n    <article class=\"student-card\">\n        <img src=".concat(this.imgURL, " />\n        <h2>").concat(this.getFullName(), "</h2>\n        <blockquote>").concat(this.quote, "</blockquote>\n        <h3>Skills</h3>\n        <ul>").concat(this.getUserSkills(), "</ul>\n    </article>\n    ");
    return profileHTML;
  }
};

for (var index = 0; index < 12; index++) {
  studentContainer.innerHTML += "".concat(profile.getProfileCard());
}