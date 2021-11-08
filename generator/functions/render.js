
HTML_TEMPLATES = `
[html_base]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Your html title here -->
  <title id="html_title">Your html Title</title>

  <style id="html_styles">
    /* Your Styles Here */
  </style>

  <script id="html_js_consts" type="text/javascript">
  </script>
  
  <!-- Your javascript scripts here -->
  <script id="html_script" type="text/javascript">
  </script>

  <!-- your default onload script -->
  <script id="html_onload_script" type="text/javascript">
    function onload_(){
      render();
    }
  </script>

</head>
<body id="html_body" onload="onload_();">
  <div id="html_form_title_div">
    <h1 id="html_form_title" style="text-align: center;">
      Your Form Title
    </h1>
  </div>
  <div>
    <div class="form" id="html_form_div">
      <form action="form_submit_action()" id="html_form_body">
        Your Form
      </form>
    </div>
  </div>
</body>
</html>

[/html_base]

[qn_header]
<h3>$label</h3>
[/qn_header]

[qn_dropdown_base]
<select name="$ident">
[/qn_dropdown_base]

[qn_dropdown_option]
</select>
<option value="$option"></option>
[/qn_dropdown_option]

[qn_droplist_option]
<option value="$option"></option>
[/qn_droplist_option]

[qn_file]
<input type="file" id="$ident" name="$ident">
[/qn_file]

[qn_folder]
<input type="file" id="$ident" name="$ident" webkitdirectory directory multiple>
[/qn_folder]

[qn_text_single]
<input type="text" id="$ident" name="$ident" placeholder="Your Answer">
[/qn_text_single]

[qn_submit]
<input type="submit" id="$ident" name="$ident" value="$label">
[/qn_submit]    
`

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

function template_extract(template_name, str_templates=HTML_TEMPLATES) {
  tmp_template = str_templates;
  let repl_re = /(([ ]{2,})|(\n*?)|(\\))*/gi;
  tmp_template = tmp_template.replaceAll(repl_re, "");

  var search_re_str = `\\[template_name\\](.*?)\\[/template_name\\]`
  var clean_re_str = `^(\\[template_name\\])|(\\[/template_name\\])`
  
  search_re_str = search_re_str.replaceAll(/template_name/gi, template_name);
  clean_re_str = clean_re_str.replaceAll(/template_name/gi, template_name);

  let search_re = new RegExp(search_re_str, "gi");
  let search_ret = search_re.exec(tmp_template)[0];
  
  let cleaned_ret = search_ret.match(clean_re_str);

  console.log(clean_re_str);
  console.log(cleaned_ret);
}
