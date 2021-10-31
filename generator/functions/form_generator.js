
function populate_styles(styles) {
  let styles_body = "";
  let styles_element = document.getElementById("html_styles");
  styles.forEach(element => {
    styles_body += element
  });

  styles_element.innerHTML = styles_body;
}

function populate_functions(functions) {
  
}