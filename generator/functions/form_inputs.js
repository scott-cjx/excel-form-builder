
function getAllInputsTags() {
  var inputs = document.getElementsByTagName("input");

  console.log(inputs)

  var i;
  for (i = 0; i < inputs.length; i++) {
    var ele_input = inputs[i];

    console.log(ele_input.value)
  }
}
