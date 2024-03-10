document.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    var sections = document.querySelectorAll('.fi-section');
    var tables = document.querySelectorAll('.fi-ta');
    var stats = document.querySelectorAll('.fi-wi-stats-overview-stat');
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
    stats.forEach(function (stat, index) {
      setTimeout(function () {
        stat.classList.add('fade-in');
      },index  * 200)
    })
  },200)
})
// milad sarli - techmil team
