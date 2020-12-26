// #####################################################################
function plot(data, type){
  //console.log("plot", type, data, oPrj);
  if(data.length == 0){
    popup_message("Keine ausgewählte Datei darf gedruckt werden!", null, null, 3000)
    return;
  }
  if(oPrj.repro == ""){
    popup_message("Kein Rerposervice konfiguriert!", null, null, 3000)
    return;
  }
  var ADR = {},
      $dialog = $('<div>')
  .load("template/plot.tmpl", function(){
    // Head ........................................................
    var tr = [
          '<td style="width:3em;font-size:0.7em">'+
            '<button data-choice="X" title="Entfernen" style="width:100%">'+
              '<i class="fa fa-trash"></i>'+
            '</button>'+
          '</td>'],
        th = ['<th style="width:3em;text-align:center">#</th>'],
        inp,
        n = 0;
    // header ......................................................
    for(var x in REPRO[oPrj.repro][type]){
      th.push('<th>'+x+'</th>');
      if($.isArray(REPRO[oPrj.repro][type][x])){
        inp = [];
        for(var i in REPRO[oPrj.repro][type][x])
          inp.push('<option>'+REPRO[oPrj.repro][type][x][i]+'</option>');
        inp = '<select class="ui-widget-content" style="width:7em" name="'+x+'">'+inp.join("")+'</select>';
      } else {
        inp = '<input type="text" class="ui-widget-content" name="'+x+'" style="text-align:right;width:5em" value="'+REPRO[oPrj.repro][type][x]+'">';
      }
      tr.push('<td>'+inp+'</td>');
      n++;
    }
    th.push('<th></th>');
    tr.push('<td></td>');
    tr = tr.join("");
    var $h = $("#id_PlotHead", $dialog).html(
      '<table class="c_plot">'+
        '<tr>'+th.join("")+'</tr>'+
        '<tr>'+tr+'</tr>'+
      '</table>'
    );
    $("tr:nth-child(2) td:first-child button", $h)
    .hide();
    $("input[type=text],select", $dialog)
    .change(function(ev){
      $("#id_PlotBody *[name="+this.name+"]", $dialog).val(this.value);
    });
    // body ........................................................
    var tb = [];
    for(var i in data){
      tb.push(
        '<tr>'+
          '<td class="ui-widget-header c_count" style="width:3em;text-align:right"></td>'+
          '<td class="ui-widget-content" colspan="'+(n+1)+'">'+data[i].name+'</td>'+
        '</tr>',
        '<tr style="border-bottom:1px solid silver">'+tr+'</tr>'
      );
    }
    var $b = $("#id_PlotBody", $dialog).html(
      '<table class="c_plot">'+
        tb.join("")+
      '</table>'
    );
    $("button", $b)
    .button()
    .click(function(ev){
      $e = $(this).parentsUntil("table", "tr")
      data.splice(($e.index() - 1) / 2, 1);
      $e.prev().remove();
      $e.remove()
    });
    // dialog  .........................................................
    $dialog
    .dialog({
      width: "auto",
      title: "Plot / "+oPrj.repro,
      modal: true,
      closeOnEscape: false,
      resizable: false,
      buttons: [{
        text: _("Send"),
        class: "c_OK",
        click: function(){
          send();
          $(this).dialog("close");
        }
      },{
        text: _("Cancel"),
        click: function(){
          $(this).dialog("close");
        }
      }],
      open: function(ev, ui){
        var opt = [],
            self = this;
        // Versand .....................................................
        for(var i in REPRO[oPrj.repro].Versand)
          opt.push('<option>'+REPRO[oPrj.repro].Versand[i]+'</option>');
        $("select[name=Versand]", self)
        .html(opt.join(""))
        .selectmenu();
        // User Lieferadressen Rechnungsadresse ........................
        var o = {
          id: REST_ID,
          base: SQL_PRJ_BASE,
          cmd:  [{
            sgn:   "USER",
            query: "SELECT dbuser,adr FROM sys_user",
            para: []
          }]
        };
        $.post("/sql", o, function(D){
          opt = ['<option>Auswahl</option>option>'];
          for(var i in D.USER){
            ADR[D.USER[i].dbuser] = D.USER[i].adr;
            opt.push('<option>'+D.USER[i].dbuser+'</option>');
          }
          $("select[name=sLieferadresse],select[name=sRechnungsadresse]", self)
          .html(opt.join(""))
          .selectmenu({
            select: function(ev, ui){
              var name = this.name.substr(1),
                  v = "";
              if(typeof ADR[this.value] != "undefined")
                v = ADR[this.value];              
              $("textarea[name="+name+"]", self).val(v);
            }
          });
        });
      },
      close: function(ev, ui ){
        $(this)
        .off()
        .dialog("destroy");
      }
    }).on("keydown", function(ev){
      if(ev.keyCode == $.ui.keyCode.ENTER && ev.ctrlKey){
        var OK = $("button.c_OK", $(this).dialog("widget"));
        OK.click();
      } else if(ev.keyCode == $.ui.keyCode.ESCAPE){
        $(this).dialog("close");
      }
      return;
    });
  });
  // -------------------------------------------------------------------
  function send(){
    var files = [],
        file_lst = [],
        file,
        tr = $("tr:odd", "#id_PlotBody");
    for(var i in data){
      var prop = [];
      files.push($.sprintf(
        "bermuda/%s/%s/%06i.%s",
        SQL_PRJ_BASE, type, data[i].id, data[i].name.replace(/^.*[.]/g, "")
      ));
      file = $.sprintf(
        "%06i.%s",
        data[i].id, data[i].name.replace(/^.*[.]/g, "")
      );
      for(var x in REPRO[oPrj.repro][type]){
        prop.push($.sprintf("  %s: %s", x, $("*[name="+x+"]", tr[i]).val()));
      }
      file_lst.push($.sprintf(
        "%d %s\n\  Dateiname: %s\n%s",
        parseInt(i) + 1, data[i].name, file, prop.join("\n")
      ));
    }
    var o = {
      id: REST_ID,
      base: SQL_PRJ_BASE,
      cmd:  [{
        sgn:   "PLOT",
        query: "INSERT INTO plot (dbuser,n,repro,files) VALUES(?,?,?,?)",
        para: [oUser.dbuser, data.length, oPrj.repro, files.join("\n")]
      }]
    };
    $.post("/sql", o, function(D){
      var T = date_time();
      T = $.sprintf("%s %s", T.D, T.T);
      var txt = '\
Benutzer:         '+oUser.dbuser+'\n\
Reproservice:     '+oPrj.repro+'\n\
Druckauftrag von: '+T+'\n\
Typ:              '+type+'\n\
Versand:          '+$("select[name=Versand]", $dialog).val()+'\n\
Dateien:          '+data.length+'\n\
Link:             '+$.sprintf("%spublic.htm#%i/plot/%i",
                              window.location, oPrj.id, D.PLOT.lastID)+'\n\n\
Benachrichtigungstext:\n\
  '+$("textarea[name=Text]", $dialog).val().replace(/\n/g, "\n  ")+'\n\n\
'+file_lst.join("\n")+'\n\n\
Auftraggeber:\n\
  '+oUser.adr.replace(/\n/g, "\n  ")+'\n\n\
Lieferadresse:\n\
  '+$("textarea[name=Lieferadresse]", $dialog).val().replace(/\n/g, "\n  ")+'\n\n\
Rechnungsadresse:\n\
  '+$("textarea[name=Rechnungsadresse]", $dialog).val().replace(/\n/g, "\n  ")+'\n\n\
';
      o.cmd = [{
        sgn:   "UPDATE",
        query: "UPDATE plot SET txt=? WHERE id=?",
        para: [txt, D.PLOT.lastID]
      }];
      $.post("/sql", o);
      $.post("/eml", {
        id:      REST_ID,
        text:    '<pre>'+txt+'</pre>',
        to:      REPRO[oPrj.repro].email,
        subject: "BERMUDA Plotauftrag - "+oPrj.project
      }, function(D){
        console.log(D);
      }, "text") // eml
      .fail(function(err){
        console.log("ERR", err.responseText);
//        $dialog.dialog("close");
      });
    });
  }
}
// #####################################################################
