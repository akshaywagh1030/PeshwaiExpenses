$(document).ready(function() {
  $('#checkboxAll').change(function() {

    if (this.checked != true) {
      $("#button_exportButton").hide();
      $('input[name=checkbox_1]').prop('checked', false);
      $(".oddhoverable").css("background-color", "white");
      $(".evenhoverable").css("background-color", "white");

    } else {
      $('input[name=checkbox_1]').prop('checked', true);
      $("#button_exportButton").show();
      $(".oddhoverable").css("background-color", "#FEFBCC");
      $(".evenhoverable").css("background-color", "#FEFBCC");
    }
  });
  $('input[name=checkbox_1]').change(function() {

    if (this.checked != true)
    {
      $("#reportsTable_29394607").css("background-color", "white");

    } else {
      $("#reportsTable_29394607").css("background-color", "#FEFBCC");
    }
  });

  $('input[name=checkbox_2]').change(function() {

    if (this.checked != true)
    {
      $("#reportsTable_29332021").css("background-color", "white");

    } else {
      $("#reportsTable_29332021").css("background-color", "#FEFBCC");
    }
  });
  $('input[name=checkbox_3]').change(function() {

    if (this.checked != true)
    {
      $("#reportsTable_29331719").css("background-color", "white");

    } else {
      $("#reportsTable_29331719").css("background-color", "#FEFBCC");
    }
  });
  $('input[name=checkbox_4]').change(function() {

    if (this.checked != true)
    {
      $("#reportsTable_29331658").css("background-color", "white");

    } else {
      $("#reportsTable_29331658").css("background-color", "#FEFBCC");
    }
  });
});
