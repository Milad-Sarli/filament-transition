var sections = document.querySelectorAll('.fi-section');
var tables = document.querySelectorAll('.fi-ta');
setInterval(() => {
  sections.forEach(function (section, index) {
    setTimeout(function () {
      section.classList.add('fade-in');
    },index  * 200)
  })
  tables.forEach(function (table, index) {
    setTimeout(function () {
      table.classList.add('fade-in');
    },index  * 200)
  })
},200)