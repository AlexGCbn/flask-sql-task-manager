document.addEventListener('DOMContentLoaded', function() {
    // Sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
    let col_tasks = document.querySelectorAll('.collapsible');
    M.Collapsible.init(col_tasks);
  });

  