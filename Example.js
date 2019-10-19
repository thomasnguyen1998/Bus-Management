var http = require("http");
var tg = require("./example_module");
var url = require("url");

http
  .createServer(function(req, res) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(req.url);
    var ob = url.parse(req.url, true).query;
    var text = ob.id;
    var tien = parseInt(ob.tien,10);//chuyen tu string sang Int he thap phan

    if (text == "131305560") {
        var tien_con_lai = So_tien_con_lai(131305560, tien);
        res.write("So tien con lai la: ");
        res.write(tien_con_lai + "");
        if (tien_con_lai <= 6000) {
            res.write("Quy khach nen nap tien them!");
      }
    } else if (text == "14151617") {
      var tien_con_lai = So_tien_con_lai(14151617, tien);
      res.write("So tien con lai la: ");
      res.write(tien_con_lai + "");
      if (tien_con_lai <= 6000) {
        res.write("Quy khach nen nap tien them!");
      }
    }

    //res.write('Ngay thang nam: ' + tg.thoiGian());
    res.end();
  })
  .listen(8080);

function So_tien_con_lai(id, tien) {
  if (id == "131305560") {
    return 10000 + tien;
  } else if (id == "14151617") {
    return 20000 + tien;
  }
  //return Math.random();
}
