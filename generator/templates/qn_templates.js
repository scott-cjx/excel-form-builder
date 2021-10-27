
function get_fcontent(fp) {
  var req = new XMLHttpRequest();
  req.open("GET", fp, false)
  req.send();
  return req.responseText;
}

function populate_qn(qn_ident, qn_label, qn_type) {

}

function populate_dropdown_qn(qn_ident, qn_label, qn_dropdown_extras) {
  var _select_body = ""
  qn_dropdown_extras.forEach(ele => {
    _select_body.concat(

    )
  });
}