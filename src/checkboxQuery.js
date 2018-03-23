function checkFluency()
{
    $('input[name=checkbox_1]').prop('checked', true);
    $("#button_exportButton").show();
    $( ".oddhoverable" ).css( "background-color", "#FEFBCC" );
    $( ".evenhoverable" ).css( "background-color", "#FEFBCC" );


}
$(document).ready(function(){
$('#checkboxAll').change(function() {

if(this.checked != true){
  $("#button_exportButton").hide();
    $('input[name=checkbox_1]').prop('checked', false);
    $( ".oddhoverable" ).css( "background-color", "white" );
    $( ".evenhoverable" ).css( "background-color", "white" );

}
});
});
