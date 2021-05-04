export default [
  {
    id: "001",
    age: 20,
    isMarried: false,
    eyeColour: "brown",
    name: "Elizabeth Bennet",
    currentFortune: 150,
    incomePerAnnum: 50,
    address: "Longbourn, near Meryton, Hertfordshire",
    calculateFinancesYearEnd: function () {
      this.currentFortune += this.incomePerAnnum;
    },
  },
  {
    id: "002",
    age: 27,
    isMarried: false,
    eyeColour: "brown",
    name: "Fitzwilliam Darcy",
    currentFortune: 25000,
    incomePerAnnum: 10000,
    address: "Pemberley, near Lambton, Derbyshire",
    calculateFinancesYearEnd: function () {
      this.currentFortune += this.incomePerAnnum;
    },
  },
  {
    id: "003",
    age: 22,
    isMarried: false,
    eyeColour: "blue",
    name: "Jane Bennet",
    currentFortune: 150,
    incomePerAnnum: 50,
    address: "Pemberley, near Lambton, Derbyshire",
    calculateFinancesYearEnd: function () {
      this.currentFortune += this.incomePerAnnum;
    },
  },
];
