"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const profile = {
//     firstName: "Jade",
//     surname: "True",
//     birthYear: 1998,
//     quote: "There's no reward in life without risk.",
//     skills: ["HTML5", "CSS3", "JavaScript"],
//     imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
//     getFullName() {
//         return `${this.firstName} ${this.surname}`
//     },
//     getUserSkills() {
//         const skillsList = this.skills.map(skill => `<li>${skill}</li>`);
//         console.log(skillsList)
//         return skillsList.join("\n");
//     },
//     getProfileCard() {
//         const profileHTML = `
//     <article class="student-card">
//         <img src=${this.imgURL} />
//         <h2>${this.getFullName()}</h2>
//         <blockquote>${this.quote}</blockquote>
//         <h3>Skills</h3>
//         <ul>${this.getUserSkills()}</ul>
//     </article>
//     `
//     return profileHTML;
//     }
// }
// for(let index = 0; index < 12; index++) {
//     studentContainer.innerHTML += `${profile.getProfileCard()}`;
// }
// class ExampleClass {
//     constructor(firstName, lastName, age) {
//         (this.firstName = firstName), (this.lastName = lastName), (this.age = age)
//     }
//     greet() {
//         return `Hello ${this.firstName} ${this.lastName}.`
//     }
// }
// Class inheritance
// class ExtendedClass extends ExampleClass {
//   constructor(firstName, lastName, age, subject) {
//     super(firstName, lastName, age),
//     (this.subject = subject);
// } 
// }
// const exampleOne = new ExampleClass("Jade", "True", "23");
// const exampleTwo = new ExampleClass("Paul", "Wilkinson", "34");
// console.log(exampleOne.greet(), exampleTwo.greet());
var Profile =
/*#__PURE__*/
function () {
  function Profile(firstName, surname, quote, skills, imgURL) {
    _classCallCheck(this, Profile);

    this.firstName = firstName, this.surname = surname, this.quote = quote, this.skills = skills, this.imgURL = imgURL;
  }

<<<<<<< HEAD
for (var index = 0; index < 4; index++) {
  studentContainer.innerHTML += "".concat(profile.getProfileCard());
}
=======
  _createClass(Profile, [{
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.firstName, " ").concat(this.surname);
    }
  }, {
    key: "getUserSkills",
    value: function getUserSkills() {
      var skillsList = this.skills.map(function (skill) {
        return "<li>".concat(skill, "</li>");
      });
      console.log(skillsList);
      return skillsList.join("\n");
    }
  }, {
    key: "getProfileCard",
    value: function getProfileCard() {
      var profileHTML = "\n    <article class=\"student-card\">\n        <img src=".concat(this.imgURL, " />\n        <h2>").concat(this.getFullName(), "</h2>\n        <blockquote>").concat(this.quote, "</blockquote>\n        <h3>Skills</h3>\n        <ul>").concat(this.getUserSkills(), "</ul>\n    </article>\n    ");
      return profileHTML;
    }
  }]);

  return Profile;
}();
>>>>>>> 5e43e14663d2a82c1a3e985a272589cc7b6158a3

var ProfileExtended =
/*#__PURE__*/
function (_Profile) {
  _inherits(ProfileExtended, _Profile);

  function ProfileExtended(firstName, surname, quote, skills, imgURL, newProperty) {
    var _this;

    _classCallCheck(this, ProfileExtended);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileExtended).call(this, firstName, surname, quote, skills, imgURL)), _this.newProperty = newProperty;
    return _this;
  }

  _createClass(ProfileExtended, [{
    key: "getProfileCard",
    value: function getProfileCard() {
      var profileHTML = "\n        <article class=\"student-card\">\n            <img src=".concat(this.imgURL, " />\n            <h2>").concat(this.getFullName(), "</h2>\n            <blockquote>").concat(this.quote, "</blockquote>\n            <h3>Skills</h3>\n            <ul>").concat(this.getUserSkills(), "</ul>\n            <p>").concat(this.newProperty, "</p>\n        </article>\n        ");
      return profileHTML;
    }
  }]);

  return ProfileExtended;
}(Profile);

var studentContainer = document.querySelector(".students-container");
var jade = new ProfileExtended("Jade", "True", "There's no reward in life without risk.", ["HTML5", "CSS3", "JavaScript"], "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png", "anything");
studentContainer.innerHTML += jade.getProfileCard();