/*
2022-06-07
*/

var body = $response.body.replace(
  /<head>/,
  '<head><link rel="stylesheet" href="https://gitlab.com/zzzzs3/QuanX/-/raw/main/Css/cupbox.css" type="text/css">'
);
$done({ body });
