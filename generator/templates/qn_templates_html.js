TEMPLATES = {
  "html_base": `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style id="mystyle">
      </style>
      <title id="mytitle></title>
      <script type="text/javascript"> function onload_(){ } </script>
    </head>
    <body onload="onload_();" id="html_body">
    </body>
    </html>
  `, "qn_header": `
    <h3>$label</h3>
  `, "qn_dropdown_base": `
    <select name="$ident">
    </select>
  `, "qn_dropdown_option": `
    <option value="$option"></option>
  `, "qn_droplist_option": `
    <option value="$option"></option>
  `, "qn_file": `
    <input type="file" id="$ident" name="$ident">
  `, "qn_folder": `
    <input type="file" id="$ident" name="$ident" webkitdirectory directory multiple>
  `, "qn_text_single": `
    <input type="text" id="$ident" name="$ident" placeholder="Your Answer">
  `, "qn_submit": `
    <input type="submit" id="$ident" name="$ident" value="$label">
  `
}

