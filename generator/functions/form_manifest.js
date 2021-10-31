
let stub_manifest = `ident,label,section,type,type-extra,validation,options,default,locked,function,custom-html
form_title,Scottie C Form Generator,-1,text,,,,,,,
form_name,Form Name,1,text,,,,,,,
form_manifest,Form Manifest,1,file,,,,,,,
form_templates,Templates,1,file,multiple,,,,,,
form_styles,Styles,1,file,multiple,,,,,,
form_functions,Functions,1,file,multiple,,,,,,
generator_submit,Generate,2,button,submit,,,,,generate_form,`

let example_final_long = {
  0: {
    "ident": "form_name",
    "label": "Form Name",
    "section": 1,
    "type": "text",
    "type-extra": null,
    "validation": null,
    "options": null,
    "default": null,
    "locked": 0,
    "function": null,
    "custom-html": null
  }
}

let example_final_short = {
  "headers": ["ident","label","section","type","type-extra","validation","options","default","locked","function","custom-html"],
  0:["form_name", "Form Name", 1, "text", null, null, null, null, 0, null, null]
}

let actual_final_short = {
  "0": [
      "form_title",
      "Scottie C Form Generator",
      "-1",
      "text",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ],
  "1": [
      "form_name",
      "Form Name",
      "1",
      "text",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ],
  "2": [
      "form_manifest",
      "Form Manifest",
      "1",
      "file",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ],
  "3": [
      "form_templates",
      "Templates",
      "1",
      "file",
      "multiple",
      "",
      "",
      "",
      "",
      "",
      ""
  ],
  "4": [
      "form_styles",
      "Styles",
      "1",
      "file",
      "multiple",
      "",
      "",
      "",
      "",
      "",
      ""
  ],
  "5": [
      "form_functions",
      "Functions",
      "1",
      "file",
      "multiple",
      "",
      "",
      "",
      "",
      "",
      ""
  ],
  "6": [
      "generator_submit",
      "Generate",
      "2",
      "button",
      "submit",
      "",
      "",
      "",
      "",
      "generate_form",
      ""
  ],
  "headers": [
      "ident",
      "label",
      "section",
      "type",
      "type-extra",
      "validation",
      "options",
      "default",
      "locked",
      "function",
      "custom-html"
  ]
}

function formManifest_csv2json(manifest=stub_manifest, row_delim=",", col_delim="\n") {
  /**
   * 1. Split by \n
   * 2. Use row 0 as header
   * 3. for every row, assign its col to header
   */

  let manifest_rows = manifest.split(col_delim);  
  let manifest_headers = manifest_rows[0];
  let manifest_headers_arr = manifest_headers.split(row_delim);
  const ret = manifest_rows.shift();

  if (ret == undefined) {
    return
  }

  // short
  let manifest_short = {};
  manifest_short["headers"] = manifest_headers_arr;

  // short
  for(let i = 0; i < manifest_rows.length; i++) {
    let this_row_arr = manifest_rows[i].split(row_delim);
    manifest_short[i] = this_row_arr;
  }

  // long
  let manifest_long = {};
  manifest_long["headers"] = manifest_headers_arr;

  // long
  for(let i = 0; i < manifest_rows.length; i++) {
    let this_row_arr = manifest_rows[i].split(row_delim);
    let long_tmp_row = {};

    for(let j = 0; j < this_row_arr.length; j++) {
      long_tmp_row[manifest_headers_arr[j]] = this_row_arr[j];
    }

    manifest_long[i] = long_tmp_row;
  }

  console.log(manifest_short);
  console.log(manifest_long);

}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

// Transpose 
function t_formManifest_sjson(manifest=actual_final_short) {
  // arr in columns instead of rows
  let T_manifest = {};
  let manifest_headers = manifest["headers"];
  let manifest_data_length = Object.keys(manifest).length - 1;

  for(let j = 0; j < manifest_data_length; j++) {
    for(let i = 0; i < manifest_headers.length; i++) {
      if (!T_manifest[manifest_headers[i]]){ T_manifest[manifest_headers[i]] = [] }
      T_manifest[manifest_headers[i]].push(manifest[j][i]);
    }
  }
  console.log(T_manifest);
}

// function formManifest_sortBySection(manifest=actual_final_short) {
//   // using short manifest

//   /**
//    * 1. Get section header index
//    * 2. Loop once, get all index section
//    * [idx, section]
//    * [{0, -1}, {1, 2}, {2, 3}, {3, 1}, {4, 1}]
//    * => {
//    *  -1: 0: {...}, 4: {...}
//    *  1: 3: {...},
//    *  2: 1: {...},
//    *  3: 2: {...}
//    * }
//    */

//   let section_idx = getKeyByValue(manifest["headers"], "section");
//   let section_sorted_manifest = {};
//   let section_sorted_manifest_count = {};

//   for (let i = 0; i < (Object.keys(manifest).length - 1); i++) {
//     let tmpObj = manifest[String(i)]
//     console.log(tmpObj)
//     let new_sectionObj = section_sorted_manifest[manifest[String(i)][section_idx]]
//     if (!new_sectionObj) {
//       new_sectionObj["1"] = tmpObj;
//     } else {
//       new_sectionObj[String(Object.keys(new_sectionObj).length + 1)] = tmpObj;
//     }

//   }

//   console.log(section_sorted_manifest);
// }
