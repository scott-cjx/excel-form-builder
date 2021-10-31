function render(manifest, templates, styles, functions, validators, lists) {
  let form_body = {};

  // long manifest
  let manifest_keys = Object.keys(manifest);
  let manifest_headers = manifest["headers"];
  let manifest_headers_section_indx = getKeyByValue(manifest_headers, "section")
  manifest_keys.forEach(manifest_key => {
    if (Number.isInteger(manifest_key)) {
      let row = manifest[manifest_key];
      let row_section = row[manifest_headers_section_indx];

      if(!form_body[row_section]) {
        form_body[row_section] = ""
      } else {
        form_body[row_section] += ""
      }
    }
  });

  document.getElementById("html_body").innerHTML = form_body;
}

