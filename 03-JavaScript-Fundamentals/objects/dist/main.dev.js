"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var ExampleClass =
/*#__PURE__*/
function () {
  function ExampleClass(firstName, lastName, age) {
    _classCallCheck(this, ExampleClass);

    this.firstName = firstName, this.lastName = lastName, this.age = age;
  }

  _createClass(ExampleClass, [{
    key: "greet",
    value: function greet() {
      return "Hello ".concat(this.firstName, " ").concat(this.lastName, ".");
    }
  }]);

  return ExampleClass;
}();

var exampleOne = new ExampleClass("Jade", "True", "23");
var exampleTwo = new ExampleClass("Paul", "Wilkinson", "34");
console.log(exampleOne.greet(), exampleTwo.greet());