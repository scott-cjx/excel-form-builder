
function generateForm(){
  /** Workflow
   * from form data -> extract csv to form_data_arr
   * from templates -> extract templates to dict str
   * from form_data_arr -> replace placeholders
   */


}

function getAllInputsTags() {
  console.log("getting inputs");
  var inputs = document.getElementsByTagName("input");
  var i;
  for (i = 0; i < inputs.length; i++) {
    var ele_input = document.getElementById(inputs[i]);
    var ele_input_value = ele_input.value;
    if (ele_input_value){
      console.log(ele_input_value);
    }
  }
}