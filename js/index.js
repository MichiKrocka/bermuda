window.index = true;
// #####################################################################
var AccessDir = window.location.pathname.substr(
      1,
      window.location.pathname.lastIndexOf("/")
    );
// #####################################################################
var project_val = {
  schema:{
    v: "RRR LP BBBGGAA NNN III   ",
    f: "   -  -       -   -      ",
    t: 'A',
    s: 0
  },
  planer:[
    "A-Architekt",
    "E-Elektro",
    "F-Freifläche",
    "H-HLS",
    "T-Tragwerk",
    "X-Sonstiges"
  ],
  doku:[
    "AN-Aktennotiz",
    "VT-Vertrag",
    "XO-Sonstiges"
  ],
  opt:[
    {
      "c": "PO",
      "t": "Positionsplan",
      "a": "P",
      "p": "T"
    },
    {
      "c": "AU",
      "t": "Ausführungsplan",
      "a": "P",
      "p": "E,H"
    },
    {
      "c": "SP",
      "t": "Sparrenplan",
      "a": "P",
      "p": "A,T"
    },
    {
      "c": "AF",
      "t": "Aufzugsplan",
      "a": "P",
      "p": "A,E"
    },
    {
      "c": "HS",
      "t": "Heizung/Sanitärinstallation",
      "a": "P",
      "p": "H,X"
    },
    {
      "c": "LP",
      "t": "Lageplan",
      "a": "P",
      "p": "A"
    },
    {
      "c": "FU",
      "t": "Fundamente",
      "a": "G",
      "p": "A,E,F,H,T,X"
    },
    {
      "c": "BW",
      "t": "Bewehrungsplan Wände",
      "a": "P",
      "p": "T"
    },
    {
      "c": "BD",
      "t": "Bewehrungsplan Decke ",
      "a": "P",
      "p": "T"
    },
    {
      "c": "BT",
      "t": "Bewehrungsplan Treppe",
      "a": "P",
      "p": "T"
    },
    {
      "c": "SF",
      "t": "Schalplan Fundamente ",
      "a": "P",
      "p": "T"
    },
    {
      "c": "AN",
      "t": "Ansichten",
      "a": "G,P",
      "p": "A,E,F,H,T,X"
    },
    {
      "c": "DA",
      "t": "Dachaufsichten",
      "a": "G",
      "p": "A,E,F,H,T,X"
    },
    {
      "c": "GR",
      "t": "Grundriss",
      "a": "P",
      "p": "A,E,H"
    },
    {
      "c": "SN",
      "t": "Schnitte",
      "a": "P",
      "p": "A,E,H"
    },
    {
      "c": "SW",
      "t": "Schalplan Wände",
      "a": "P",
      "p": "T"
    },
    {
      "c": "UB",
      "t": "Übersichten",
      "a": "P",
      "p": "A,E"
    },
    {
      "c": "TP",
      "t": "Treppen",
      "a": "P",
      "p": "A,E"
    },
    {
      "c": "EI",
      "t": "Elektroinstallationsplan",
      "a": "P",
      "p": "E"
    },
    {
      "c": "FE",
      "t": "Fundamenterder",
      "a": "P",
      "p": "E"
    },
    {
      "c": "SL",
      "t": "Schlitze",
      "a": "P",
      "p": "E"
    },
    {
      "c": "DP",
      "t": "Detailplan",
      "a": "P",
      "p": "A,E,F,H,T"
    },
    {
      "c": "SD",
      "t": "Schalplan Decke ",
      "a": "P",
      "p": "T"
    },
    {
      "c": "BE",
      "t": "Bewehrungsplan ",
      "a": "P",
      "p": "T"
    },
    {
      "c": "ST",
      "t": "Spartenplan",
      "a": "P",
      "p": "E"
    },
    {
      "c": "GL",
      "t": "Grundleitungen",
      "a": "P",
      "p": "E"
    },
    {
      "c": "PF",
      "t": "Pflanzplan",
      "a": "P",
      "p": "F"
    },
    {
      "c": "FR",
      "t": "Freiflächengestaltung",
      "a": "P",
      "p": "E"
    },
    {
      "c": "WE",
      "t": "Werkplan",
      "a": "P",
      "p": "F"
    },
    {
      "c": "SP",
      "t": "Schalplan",
      "a": "P",
      "p": "T"
    },
    {
      "c": "XX",
      "t": "Sonstige Pläne",
      "a": "P",
      "p": "F"
    },
    {
      "c": "CUS",
      "t": "Cusanusstraße",
      "a": "B",
      "p": "A,E,F,H,T,X"
    },
    {
      "c": "STE",
      "t": "Stettheimerstraße",
      "a": "B",
      "p": "A,E,F,H,T,X"
    },
    {
      "c": "TGE",
      "t": "Tiefgarage",
      "a": "B",
      "p": "A,E,H,T,X"
    },
    {
      "c": "OO",
      "t": "Alle Ebenen",
      "a": "G",
      "p": "A,E,F,H,T,X"
    },
    {
      "c": "BO",
      "t": "Bodenplatte",
      "a": "G",
      "p": "A,E,H,T,X"
    },
    {
      "c": "RA",
      "t": "Rampe",
      "a": "G",
      "p": "A,H,T,X"
    },
    {
      "c": "U1",
      "t": "1. Untergeschoss",
      "a": "G",
      "p": "A,E,H,T,X"
    },
    {
      "c": "EG",
      "t": "Erdgeschoss",
      "a": "G",
      "p": "A,E,H,T,X"
    },
    {
      "c": "O1",
      "t": "1. Obergeschoss",
      "a": "G",
      "p": "A,E,H,T,X"
    },
    {
      "c": "O2",
      "t": "2. Obergeschoss",
      "a": "G",
      "p": "A,E,H,T,X"
    },
    {
      "c": "O3",
      "t": "3. Obergeschoss",
      "a": "G",
      "p": "A,E,H,T,X"
    },
    {
      "c": "U2",
      "t": "2. Untergeschoss",
      "a": "G",
      "p": "A,E,H,T,X"
    },
    {
      "c": "DG",
      "t": "Dachgeschoss",
      "a": "G",
      "p": "A,E,H,T,X"
    }
  ]
};
// #####################################################################
var EMAIL_PSWD =
  'Sie haben Ihr Passwort bei der Plattform '+
  '<a href="'+location.origin+'">BERMUDA</a>'+
  ' vergessen?\n\n'+
  'Benutzer: %s\n'+
  'Passwort: %s\n\n'+
  'Mit freundlichen Grüßen\n\nBERMUDA Team';
var EMAIL_ACNT =
  'Vielen Dank, dass Sie sich bei der Projekt '+
  '<a href="'+location.origin+'">BERMUDA</a>'+
  ' registriert haben.\n\n'+
  'Benutzer: %s\n'+
  'Passwort: %s\n\n'+
  'Sie haben folgende Daten angegeben:\n\n'+
  '%s\n\n'+
  'Mit freundlichen Grüßen\n\nBERMUDA Team';  
// #####################################################################
var REPRO = {};
var LPH = [
  "Grundlagen",
  "Vorplanung",
  "Entwurf",
  "Genehmigung",
  "Ausführung",
  "Vorb. Vergabe",
  "Vergabe",
  "Objektüberwachung",
  "Objektdokumentation"
];
// #####################################################################
var DIR_MENU      = "menu",            // directory with menus
    DIR_LANG      = "locale",          // directory with languages
    DIR_THEMES    = "themes",          // directory with themes
    COOKIE_THEMES = "jquery-ui-theme", // cookies id

    SQL_SYS_BASE  = "bermuda",

    SQL_SYS_TABLE = "sys",
    SQL_SYS_USER  = "sys_user",
    SQL_SYS_GRP   = "sys_grp",

    SIGN_USER     = "User",
    SIGN_GRP      = "Group",
    SIGN_DATA     = "Data",

    SQL_PRJ_BASE  = "",
    
    DIR_PRJ_MENU  = "project",        // directory with menus
    SQL_PRJ_TABLE = "sys",
    SQL_PRJ_USER  = "sys_user",
    SQL_PRJ_GRP   = "sys_grp",
  
    REST_ID       = "259e88811b229050b08679b67147b4ab",
    UNIVERSUM     = "955db0b81ef1989b4a4dfeae8061a9a6",

    RESIZE_DELAY  = 100,  // ms delay of window resize event
    MESSAGE_DELAY = 3000, // ms delay by login fault
    REFRESH_TIME  = 500,  // ms
    MESSAGE_TIME  = 5,    // factor * number of messages = s
    DEBUG         = 1,    // debug level
    FS0,                  // start font size
    FS,                   // curent font size
    FSK           = 1.0,  // font size factor
    oldMenu       = null, // menu before last
    topics        = {},   // message system
    aError        = [],   // message queue
    oUser         = {},   // user data
    oAccess       = {},   // access data of user
    oPrj          = {},   // project data
    oPrjUser      = {},   // project user data
    oPrjAccess    = {};   // access data of pjocect user
// #####################################################################
var DEFAULT_LANG  = get_lang(),
    ACCESS_DEFAULT = {
      acc: true,
      edt: true,
      ins: true,
      del: true,
      rep: true
    },
    FIXED_FILT = "",
    GOTO_GROUP_FILT     = null,
    GOTO_USERS_FILT     = null,
    GOTO_PRJ_GROUP_FILT = null,
    GOTO_PRJ_USERS_FILT = null,
    WOCHE = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
// #####################################################################
// onload with jquery
function start(){
  FS0 = parseFloat($("html, body").css("font-size"));
  FS  = parseFloat(FS0 / 10);
  FSK = parseFloat($("html, body").css("font-size")) / $(window).height();
  // Theme -------------------------------------------------------------
  if($.cookie(COOKIE_THEMES)) {
    update_css(DIR_THEMES + "/" + $.cookie(COOKIE_THEMES) + "/jquery-ui.min.css");
  }
  // load login page ---------------------------------------------------
  $("body")
  .load("login.htm", login_init)
  .on("keydown", keyboard);
  $('body').on("dblclick", 'img.zoom', function(ev){
    $(this).clone().dialog({
      width: "auto",
      title: "",
      modal: true,
      closeOnEscape: true,
      resizable: false
    });
  });
}
// #####################################################################
// keyboard
function keyboard(ev){
  if($("body>div.ui-widget-overlay").length){
    return;
  }
  var Key = ev.altKey << 10 | ev.ctrlKey << 9 | ev.shiftKey << 8 | ev.which;
  DEBUG > 1 && console.log($.sprintf("%04X", Key));
  switch(Key){
    case 0x208: // ctrl + backspace
      if(oldMenu)
        $('#id_Menu').tree("open", oldMenu);
      return false;
    case 0x64C: // ctrl + alt + L
      logout();
      return false;
    case 0x4BE: // alt + .
      $("*[accesskey='.']").click();
      ev.preventDefault();
      return false;
    case 0x4AB: // alt + +
      var fs = parseFloat($("body").css("font-size"));
      fs += FS;
      $("body").css("font-size", fs+"px");
      $(window).trigger("resize");
      return false;
    case 0x4AD: // alt + -
      var fs = parseFloat($("body").css("font-size"));
      fs -= FS;
      $("body").css("font-size", fs+"px");
      $(window).trigger("resize");
      return false;
    case 1072:  // Alt 0
      $("body").css("font-size", FS0+"px");
      $(window).trigger("resize");
      return false;
  }
}
// #####################################################################
// button events
function choice(el){
  var c = $(el).data("choice");
  switch(c){
    case "LOGOUT":
      logout();
      return;
    case "MENU":
      $("#id_Menu").parent().toggle();
      $(window).resize();
      break;
    case "CLOCK":
      window.Wclock = window.open(
        "clock.htm",
        _("Clock"),
        'scrollbars=yes,toolbar=no,width=650,height=300,resizable=yes'
      );
      break;
    case  "PROJECT_ADMIN":
      project_off();
      break;
    default:
      console.log(c);
  }
}
// #####################################################################
// login page
function login_init(){
  if(location.hostname.substr(-11) == "bvg-bau.net")
    $('#id_Logo').prop("src", "img/BVG Logo.png");
  // Locale ------------------------------------------------------------
  set_lang(DEFAULT_LANG);
  // Login -------------------------------------------------------------
  $("input[name=user]").focus();
  $("#id_Login_Form")
  .submit(function(ev){
    function login_fault(msg){
      $("#id_Login_Msg").html(msg);
      $("input[name=user]").focus();
      setTimeout(function(){
        $("#id_Login_Msg").text("");
      }, MESSAGE_DELAY);
    }
    var Form = this;
    user_load(Form, login_fault, main_init);
    return false;
  });
  $("#id_Login_Button").button();
  // Passwort vergessen | Benutzerkonto
  $("a", "#id_Login_Form")
  .click(function(){
    var c = $(this).data("choice");
    if(c == "DOC"){
      window.location = "doc/bermuda.pdf";
      return false;
    } else if(typeof c == "undefined")
      return;
    var title = $(this).text(),
        html =
          '<input placeholder="E-mail" type="email" style="width:99%" class="ui-widget-content">'+
          (c == "PSWD" ? "" :
          '<textarea placeholder="Name und Adresse" style="width:99%;height:10em" class="ui-widget-content"></textarea>'
          )+
          '<p>Geben Sie Ihre Email-Addresse bzw. ihre persönlichen Daten an.<br>'+
          'Nach dem Abschicken des Formulars erhalten<br>'+
          'Sie eine Email-Bestätigung mit neuen Anmeldedaten.'+
          '</p>',
        $dialog = $('<div>').html('<p>'+html+'</p>');
    $dialog
    .dialog({
      width: "auto",
      title: title,
      modal: true,
      closeOnEscape: false,
      resizable: false,
      buttons: [{
        text: _("Send"),
        class: "c_OK",
        click: function(){
          // email != ""
          var user = $("input[type=email]", this).val(),
              addr = $("textarea", this).val();
          if(user == ""){
            $("input[type=email]", this).focus();
            return;
          }
          // user  test
          var o = {
            id: REST_ID,
            base: SQL_SYS_BASE,
            cmd:  [{
              sgn:   "TEST",
              query: "SELECT COUNT(*) AS N FROM sys_user WHERE dbuser=?",
              para: [user]
            }]
          };
          $.post("/sql", o, function(D){
            if(
              (c == "PSWD" && D.TEST[0].N == 0) ||
              (c == "ACNT" && D.TEST[0].N == 1)
            ){
              console.log("no user");
              $dialog.dialog("close");
              return;
            }
            var pswd = Math.random().toString(36).slice(-8),
                text = c == "PSWD" ?
                       $.sprintf(EMAIL_PSWD, user, pswd) :
                       $.sprintf(EMAIL_ACNT, user, pswd, addr);
            $.post("/eml", {
              id:      REST_ID,
              text:    '<pre>'+text+'</pre>',
              to:      user,
              subject: "BERMUDA "+ (c == "PSWD" ? "Passwort":"Benutzerkonto"),
            }, function(D){
              console.log(D);
              if(c == "PSWD"){  // change pswd .........................
                o.cmd = [{
                  sgn: "CHANGE",
                  query: "UPDATE sys_user SET pswd=? WHERE dbuser=?",
                  para: [$.md5(pswd), user]
                }];
              } else {          // insert user .........................
                o.cmd = [{
                  sgn: "INSERT",
                  query: "INSERT INTO sys_user (dbuser,pswd,grp,lang,theme,val,adr) VALUES (?,?,?,?,?,?,?)",
                  para: [user, $.md5(pswd), "User", "de-de", "base", "{}", addr]
                }];
              }
              $.post("/sql", o);
              $dialog.dialog("close");
              popup_message("OK");
            }, "text") // eml
            .fail(function(err){
              console.log(err.responseText);
              $dialog.dialog("close");
            });
          }) // sql
          .fail(function(err){
            console.log(err.responseText);
            $dialog.dialog("close");
          });
        }
      },{
        text: _("Cancel"),
        click: function(){
          $(this).dialog("close");
        }
      }],
      open: function(ev, ui){
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
}
// #####################################################################
// main page
function main_init(){
  // REPRO -------------------------------------------------------------
  $.get("js/repro.json", function(data){
    REPRO = data;
  }, "json")
  .fail(function(err){
    console.log(err.responseText);
  });
  // theme -------------------------------------------------------------
  if(oUser.theme == "")
    oUser.theme = "base";
  // User --------------------------------------------------------------
  $("#id_User").text(oUser.dbuser);
  var locStr = DIR_THEMES + "/" + oUser.theme + "/jquery-ui.min.css";
  update_css(locStr);
  // Buttons -----------------------------------------------------------
  $("button").button();
  $("button,i.fa-clock-o").click(function(ev){
    choice(this);
  });
  // Window events -----------------------------------------------------
  $(window)
  .on("beforeunload", function(ev){
    user_save();
    return "OK?";
  })
  .resize(function(ev){
    if(window.resize_timer)
      clearTimeout(window.resize_timer);
    window.resize_timer = setTimeout(function(){
      $.Topic("resizeWindow").publish();
      DEBUG > 1 && console.log("resizeWindow");
    }, RESIZE_DELAY);
  });
  // Menu --------------------------------------------------------------
  $('#id_Menu')
  .tree({
    top:
      '<div style="-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:0.8em;text-align:left;width:100%;border-top-width:0;border-left-width:0;border-right-width:0;padding:0.2em;border-bottom-width:1px" class="ui-widget ui-widget-header ui-corner-top">'+
        '<button class="icon lang-title" title="Refresh" data-choice="REFRESH">'+
          '<i class="fa fa-refresh"></i>'+
        '</button>'+
        '<button class="icon lang-title" title="Open" data-choice="OPEN_CLOSE">'+
          '<i class="fa fa-folder"></i>'+
        '</button>'+
      '</div>'+
      '',
    labelFun: function(x){
      return x.replace(/[^_]*_/, "").replace(/[.][^.]*$/, "");
    },
    data: function(options, callBack){
      menu_make(oAccess, callBack);
    },
    chck: false,
    render: function(ev, ui){
      var self = this;
      // top button open/close menus
      $("button", ui.element)
      .button()
      .off("click")
      .on("click", function(ev){
        var c = $(this).data("choice");
        switch(c){
          case "OPEN_CLOSE":
            if($("i", this).hasClass("fa-folder-open")){
              $(this).prop("title", _("Open"));
              $("i", this)
                .removeClass("fa-folder-open")
                .addClass("fa-folder");
              $(self).tree("close");
            } else {
              $(this).prop("title", _("Close"));
              $("i", this)
                .removeClass("fa-folder")
                .addClass("fa-folder-open");
              $(self).tree("open");
            }
            break;
          case "REFRESH":
            $(self).tree('refresh');
            break;
        }
      });
      // resizable
      $(ui.element)
      .resizable({
        handles: "e",
        stop: function(ev, ui){
          $.Topic("resizeWindow").publish();
        }
      });
      // Refresh all
      $.Topic("resizeWindow").publish();
      // Locale
      set_lang(oUser.lang);
      // open las/default menu
      if(typeof oUser.menu == "undefined" || oUser.menu == "" || $("input[data-menu='"+oUser.menu+"']").length == 0)
        oUser.menu = $("input", ui.element).eq(0).data().menu;
      $(ui.element)
      .tree("open", $("input[data-menu='"+oUser.menu+"']", ui.element));
    },
    select: menu_load
  });
  // resize event
  $.Topic("resizeWindow").subscribe(function(val){
    var $menu = $("#id_Menu,#id_PrjMenu");
    var $div = $("#id_Content>div").filter(":visible");
    $menu.height(10);
    $div.height(10);
    var H = $("#id_Content").height();
    $menu.height(H - 2);
    $div.height(H - 2);
    $("#id_PrjMenu").height(H - 2);
    DEBUG > 1 && console.log("resizeWindow");
  });
  // refresh timer
  refresh_timer();
  // scroll x ?
  setTimeout(function(){
    $('#id_Menu').tree('refresh');
  }, 100);
}
// #####################################################################
// dir => menu
function menu_make(access, callBack){
  $.post("/dir", {
    id: REST_ID,
    path: AccessDir + DIR_MENU
  }, function(data){
    var aM = data.split("\n"),
        oM = {};
    // .................................................................
    function insert(m, o){
      var t = m.split("_");
      for(var x in o){
        var ot = x.split("_");
            k = t[0].substr(0, ot[0].length);
        if(ot[0] == k){
          if(!$.isPlainObject(o[x]))
            o[x] = {};
          insert(m, o[x]);
          return ;
        }
      }
      o[m] = "";
    }
    // .................................................................
    aM.sort(function(a, b){
      a = a.split("_")[0];
      b = b.split("_")[0];
      return a > b ? 1 : a < b ? -1 : 0;
    });
    // .................................................................
    for(var i in aM){
      if(aM[i] == "")
        continue;
      if(typeof oAccess[aM[i]] == "undefined")
        oAccess[aM[i]] = ACCESS_DEFAULT;
      if(!oAccess[aM[i]].acc)
        continue;
      insert(aM[i], oM);
    }
    callBack(oM);
  }, "text")
  .fail(function(err){
    console.log(err.responseText);
  });
}
// #####################################################################
// load content
function menu_load(ev, ui){
  var newMenuFile = $(ui.newMenu).data("menu");
  if(typeof oAccess[newMenuFile] == "undefined")
    oAccess[newMenuFile] = ACCESS_DEFAULT;
  if(!oAccess[newMenuFile].acc)
    return;
  oUser.menu = newMenuFile;
  $("#id_Content>div").hide();
  var div_menu = $("#id_Content>div").filter('[data-menu="'+newMenuFile+'"]');
  if(div_menu.length == 0){
    var path = DIR_MENU + "/" + encodeURIComponent(newMenuFile);
    var div = $('<div data-menu="'+newMenuFile+'"] class="ui-widget-content ui-corner-all">');
    $("#id_Content").append(div)
    div_menu = $("#id_Content>div").filter('[data-menu="'+newMenuFile+'"]')
    .load(path, function(){
      change_all_lang(this);
    });
  } else {
    div_menu.show();
  }
  oldMenu = ui.oldMenu;
  // select menu + resize
  $.Topic("selectMenu").publish(ui);
  $(window).trigger("resize");
}
// #####################################################################
// messages queues
jQuery.Topic = function( id ) {
  var callbacks,
      topic = id && topics[id];
  if(!topic) {
    callbacks = jQuery.Callbacks("unique");
    topic = {
      publish:     callbacks.fire,
      subscribe:   callbacks.add,
      unsubscribe: callbacks.remove
    };
    if(id){
      topics[id] = topic;
    }
  }
  return topic;
};
// #####################################################################
// refresh timer
function refresh_timer(){
  var T = date_time();
  T = $.sprintf("%s %s", T.D, T.T);
  if(T != this.Tpre){
    // time
    $("#id_Time").text(T);
    this.Tpre = T;
    // messages
    if(!$.isNumeric(this.iError)){
      this.iError = 0;
      this.nError = MESSAGE_TIME;
    }
    if(aError.length){
      if(this.iError >= 0)
        $("#id_Msg").text(aError[this.iError++]);
      if(this.iError >= aError.length){
        this.iError = 0;
        if(--this.nError == 0){
          this.nError = MESSAGE_TIME;
          aError.shift();
        }
      }
    } else {
      $("#id_Msg").text("");
      this.iError = 0;
    }
  }
  delete T;
  if(window.timer)
    clearTimeout(window.timer);
  window.timer = setTimeout(refresh_timer, REFRESH_TIME);
  $.Topic("refreshTimer").publish();
}
// #####################################################################
// change css
function update_css(locStr){
  var cssLink = $('<link href="'+locStr+'" type="text/css" rel="Stylesheet" class="ui-theme">');
  $("head").append(cssLink);
  if($("link.ui-theme").length > 3)
    $("link.ui-theme:first").remove();
}
// #####################################################################
// logout = save user data + reload
function logout(){
  $.Topic("logout").publish();
  $(window).off("beforeunload");
  user_save(function(){
    setTimeout("window.location.reload()", 10);
  });
}
// #####################################################################
function openExt(tab, mid){
  var Ext = $.parseJSON(localStorage.getItem("databankExt"));
  Ext.tab = tab;
  Ext.mid = mid;
  if(typeof Ext.P == "undefined")
    Ext.P = [900, 700, "", ""];
  if(
    typeof window.Ext == "undefined" ||
    window.Ext === null ||
    window.Ext.closed
  ){
    Ext.theme = $("link.ui-theme").attr("href");
    var O = $.vsprintf(
      'scrollbars=yes,toolbar=no,width=%s,height=%s,top=%s,left=%s,resizable=yes',
      Ext.P
    );
    localStorage.setItem("databankExt", JSON.stringify(Ext));
    window.Ext = window.open("ext.htm", "EXTERN", O);
    window.Ext.focus();
  } else {
    window.Ext.close();
    window.Ext = null;
  }
}
// #####################################################################
// german comparison
function stringComparison(a, b) {
  a = a.toLowerCase();
  a = a.replace(/ä/g,"a");
  a = a.replace(/ö/g,"o");
  a = a.replace(/ü/g,"u");
  a = a.replace(/ß/g,"s");

  b = b.toLowerCase();
  b = b.replace(/ä/g,"a");
  b = b.replace(/ö/g,"o");
  b = b.replace(/ü/g,"u");
  b = b.replace(/ß/g,"s");

  return(a==b)?0:(a>b)?1:-1;
}
// #####################################################################
function setCharAt(str, index, chr) {
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}
// #####################################################################
function project_on(id, project, admin){
  // save project administration
  oSave = {
    cnt:  $("#id_Content").html()
  };
  // database ..........................................................
  SQL_PRJ_BASE  = $.sprintf("bermuda_%05i", id);
  //  access ...........................................................
  var o = {
    id: REST_ID,
    base: SQL_PRJ_BASE,
    cmd: ([{
      sgn: "LOG",
      query: $.sprintf(
        "SELECT dbuser,menu,val,grp,adr,advice,lph,(SELECT access FROM %s WHERE %s.grp=%s.grp) AS access FROM %s WHERE dbuser=?",
        SQL_PRJ_GRP, SQL_PRJ_GRP, SQL_PRJ_USER, SQL_PRJ_USER
      ),
      para: [oUser.grp == "Admin" ? admin : oUser.dbuser]
    },{
      sgn: "AKT",
      query: "UPDATE bermuda.project SET access=NOW() WHERE id=?",
      para: [id]
    }])
  };
  $.post("/sql", o, function(D){
    if(typeof D.LOG != "undefined" && D.LOG.length == 1){
      oPrjUser = D.LOG[0];
      if(typeof oPrjUser.lang == "undefined" || oPrjUser.lang == "")
        oPrjUser.lang = DEFAULT_LANG;
      if(D.LOG[0].access == "" || D.LOG[0].access === null)
        oPrjAccess = {};
      else
        oPrjAccess = $.parseJSON(D.LOG[0].access);
      if(oPrjUser.val == "" || oPrjUser.val == "null" || !oPrjUser.val)
        oPrjUser.val = {};
      else
        oPrjUser.val = $.parseJSON(oPrjUser.val);
      if(oPrjUser.lph == "" || !oPrjUser.lph)
        oPrjUser.lph =  [1,2,3,4,5,6,7,8,9];
      else
        oPrjUser.lph = oPrjUser.lph.split(",");
      // umschalten
      $("#id_Menu,#id_ProjectAdmin").hide();
      $("#id_ProjectWork").text(project).show();
      $("#id_PrjMenu,button[data-choice=PROJECT_ADMIN]").show();
      make_prj_menu(prj_tree);
    } else {
      console.log("Database?");
    }
  })
  .fail(function(error){
    console.log("Database?");
    return false;
  });
}
// menu ..............................................................
function make_prj_menu(callBack){
  $.post("/dir", {
    id: REST_ID,
    path: AccessDir + DIR_PRJ_MENU
  }, function(data){
    var aM = data.split("\n"),
        oM = {};
    // .................................................................
    function insert(m, o){
      var t = m.split("_");
      for(var x in o){
        var ot = x.split("_");
            k = t[0].substr(0, ot[0].length);
        if(ot[0] == k){
          if(!$.isPlainObject(o[x]))
            o[x] = {};
          insert(m, o[x]);
          return ;
        }
      }
      o[m] = "";
    }
    // .................................................................
    aM.sort(function(a, b){
      a = a.split("_")[0];
      b = b.split("_")[0];
      return a > b ? 1 : a < b ? -1 : 0;
    });
    // .................................................................
    for(var i in aM){
      if(aM[i] == "")
        continue;
      if(typeof oPrjAccess[aM[i]] == "undefined")
        oPrjAccess[aM[i]] = ACCESS_DEFAULT;
      if(!oPrjAccess[aM[i]].acc)
        continue;
      insert(aM[i], oM);
    }
    // planner
    if(typeof oM["10_Planning.htm"] != "undefined"){
      oM["10_Planning.htm"] = {};
      for(var x in oPrj.val.planer)
        oM["10_Planning.htm"][$.sprintf("10.%02i_%s", x, oPrj.val.planer[x])] = "";
    }
    // dokumentation
    if(typeof oM["20_Documentation.htm"] != "undefined"){
      oM["20_Documentation.htm"] = {};
      for(var x in oPrj.val.doku)
        oM["20_Documentation.htm"][$.sprintf("20.%02i_%s", x, oPrj.val.doku[x])] = "";
    }
    // tree
    callBack(oM);
  }, "text")
  .fail(function(err){
    console.log(err.responseText);
  });
}
// tree ..............................................................
function prj_tree(oM){
  $('#id_PrjMenu')
  .tree({
    top:
      '<div style="-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:0.8em;text-align:left;width:100%;border-top-width:0;border-left-width:0;border-right-width:0;padding:0.2em;border-bottom-width:1px" class="ui-widget ui-widget-header ui-corner-top">'+
        '<button class="icon lang-title" title="Refresh" data-choice="REFRESH">'+
          '<i class="fa fa-refresh"></i>'+
        '</button>'+
        '<button class="icon lang-title" title="Open" data-choice="OPEN_CLOSE">'+
          '<i class="fa fa-folder"></i>'+
        '</button>'+
      '</div>'+
      '',
    labelFun: function(x){
      return x.replace(/[^_]*_/, "").replace(/[.][^.]*$/, "");
    },
    data: oM,
    chck: false,
    render: function(ev, ui){
      var self = this;
      change_all_lang(this, true);
      // title
      $("span", this).hover(
        function(ev){
          $("#id_Info").text($(this).text());
        },
        function(ev){
          $("#id_Info").text("");
        }
      );
      // top button open/close menus
      $("button", ui.element)
      .button()
      .off("click")
      .on("click", function(ev){
        var c = $(this).data("choice");
        switch(c){
          case "OPEN_CLOSE":
            if($("i", this).hasClass("fa-folder-open")){
              $(this).prop("title", _("Open"));
              $("i", this)
                .removeClass("fa-folder-open")
                .addClass("fa-folder");
              $(self).tree("close");
            } else {
              $(this).prop("title", _("Close"));
              $("i", this)
                .removeClass("fa-folder")
                .addClass("fa-folder-open");
              $(self).tree("open");
            }
            break;
          case "REFRESH":
            $(self).tree('refresh');
            break;
        }
      });
      // resizable
      $(ui.element)
      .resizable({
        handles: "e",
        stop: function(ev, ui){
          $.Topic("resizeWindow").publish();
        }
      });
      // open last/default menu
      if(typeof oUser.menu == "undefined" || oPrjUser.menu == "")
        oPrjUser.menu = $("input", ui.element).eq(0).data().menu;
      $(ui.element)
      .tree("open", $("input[data-menu='"+oPrjUser.menu+"']", ui.element));
    },
    select: prj_menu_load
  });
}
// load menu .........................................................
function prj_menu_load(ev, ui){
  if(ui.oldMenu == null)
    ui.oldMenu = $("#id_Content>div").filter('[data-menu="'+oUser.menu+'"]');
  var newMenuFile = $(ui.newMenu).data("menu");
  if(typeof oPrjAccess[newMenuFile] == "undefined")
    oPrjAccess[newMenuFile] = ACCESS_DEFAULT;
  if(!oPrjAccess[newMenuFile].acc)
    return;
  oPrjUser.menu = newMenuFile;
  $("#id_Content>div").hide();
  var div_menu = $("#id_Content>div").filter('[data-menu="'+newMenuFile+'"]');
  if(div_menu.length == 0){
    // virtuelle menüs
    var para = newMenuFile.substr(0, 3);
    if(para == "20.")
      para = "20_Documentation.htm";
    else if(para == "10.")
      para = "10_Planning.htm";
    else
      para = newMenuFile;
    var path = DIR_PRJ_MENU + "/" + encodeURIComponent(para);
    var div = $('<div data-menu="'+newMenuFile+'"] class="ui-widget-content ui-corner-all">');
    $("#id_Content").append(div)
    div_menu = $("#id_Content>div").filter('[data-menu="'+newMenuFile+'"]')
    .load(path, function(){
      change_all_lang(this);
    });
  } else {
    div_menu.show();
  }
  oldMenu = ui.oldMenu;
  // select menu + resize
  $.Topic("selectMenu").publish(ui);
  $(window).trigger("resize");
}
// #####################################################################
function project_off(){
  if(typeof oPrjUser.menu != "undefined"){
    var div_menu = $("#id_Content>div").filter('[data-menu="'+oPrjUser.menu+'"]');
    div_menu.detach();
  }
  $("#id_Menu,#id_ProjectAdmin").show();
  $("#id_PrjMenu,#id_ProjectWork").hide();
  $("button[data-choice=PROJECT_ADMIN]").hide();
  var M = oUser.menu.replace(".", "_");
  oUser.menu = "";
  $("#"+M).trigger("change");
  setTimeout(function(){
    $("#"+M).trigger("change");
  }, 500);
  // save project user
  var o = {
    id: REST_ID,
    base: SQL_PRJ_BASE,
    cmd: [{
      sgn: "LOG",
      query: $.sprintf(
        "UPDATE %s SET menu=?,val=?,adr=?,advice=? WHERE dbuser=?",
        SQL_PRJ_USER
      ),
      para: [
        oPrjUser.menu,
        JSON.stringify(oPrjUser.val),
        oPrjUser.adr,
        oPrjUser.advice,
        oPrjUser.dbuser
      ]
    }]
  };
  $.post("/sql", o)
  .fail(function(error){
    console.log(error.responseText);
    return false;
  });
}
// #####################################################################
function menu(ui, callBack){
  var self  = ui.element,
      options = self.option(),
      el    = ui.button,
      li    = [],
      $menu = $('ul.mk-tables-menu', self.element);
  li.push(
    '<li data-choice="CANCEL">'+
      '<div>'+
        options.i18n("Cancel")+
      '</div>'+
    '</li>',
    '<li><div></div></li>',
    '<li data-choice="REC">'+
      '<div>Aktuellen Datensatz (id '+options.recId+')</div>'+
    '</li>'
  );
  if($("input[name=search]", self.element).val() != "" ||
     options.filtSw && options.filt != ""
  )
    li.push(
      '<li data-choice="FILT">'+
        '<div>Markierte Datensätze'+
          ' ('+options.Filter+')'+
        '</div>'+
      '</li>'
    );
  if(!$.isEmptyObject(options.cont))
    li.push(
      '<li data-choice="CONT">'+
        '<div>Alle  Datensätze im Container'+
          ' ('+Object.keys(options.cont).length+')'+
        '</div>'+
      '</li>'
    );
  if(li.length == 0)
    return;
  if(!$menu.is(":hidden")){
    $(this)
    .menu("destroy")
    .hide();
    self._overlay(false);
    self.element.focus();
    return false;
  }
  self._overlay(true);
  $menu
  .html(li.join(""))
  .show()
  .position({
    my: "left top",
    at: "left bottom",
    of: el
  })
  .menu({
    select: function(ev, ui){
      var c = $(ui.item).data("choice"),
          WHERE = "";
      $(this).menu("option", "close")();
      switch(c){
        case "REC":
          WHERE = "WHERE "+options.ID+'='+options.recId+" AND (stop IS NULL OR stop='' OR stop='"+oUser.dbuser+"')";
          make_data();
          break;
        case "FILT":
          self._exec("FILTER", {object:self, ret:function(FILTER){
            WHERE = FILTER+" AND (stop IS NULL OR stop='' OR stop='"+oUser.dbuser+"')";
            make_data();
          }});
          break;
        case "CONT":
          var A = [];
          for(var k in options.cont)
            A.push(k);
          WHERE = "WHERE "+options.ID+" IN ("+A.join(",")+")"+" AND (stop IS NULL OR stop='' OR stop='"+oUser.dbuser+"')";
          make_data();
          break;
        default:
          console.log(c);
          return;
      }
      // ...............................................................
      function make_data(){
        if($.isFunction(callBack)){
          var o = {
            id: REST_ID,
            base: SQL_PRJ_BASE,
            cmd: [{
              sgn: "DATA",
              query: $.sprintf(
                "SELECT * FROM %s %s",
                options.SQL_Table, WHERE
              ),
              para: []
            }]
          };
          $.post("/sql", o, function(D){
            callBack(D.DATA);
          })
          .fail(function(error){
            console.log(error.responseText);
            return false;
          });
        }
      }
      // ...............................................................
    },
    close: function(){
      $menu
      .off()
      .menu("destroy")
      .hide();
      self._overlay(false);
      self.element.focus();
    }
  });
  setTimeout(function(){
    $menu
    .focus()
    .on("keydown", function(ev){
      if(ev.which == $.ui.keyCode.ESCAPE){
        $menu.menu("option", "close")();
      }
      ev.preventDefault();
      return false;
    });
  }, 500);
}
// #####################################################################
// alert popup window for message with auto close
function popup_message(msg, classes, callBack, timeout){
  var $dialog = $('<div>')
  .css({
    "min-width":"10em"
  })
  .html('<p>'+msg+'</p>');
  $dialog
  .dialog({
    callBack: callBack,
    classes: classes,
    width: "auto",
    height: "auto",
    title: _("Alert"),
    modal: true,
    closeOnEscape: false,
    resizable: false,
    open: function(ev, ui){
      $(".ui-dialog-titlebar-close", $(this).parent()).hide();
      pPopUp = this;
      setTimeout(function(){
        if($dialog.is(':visible'))
          $dialog.dialog("close");
      }, timeout ? timeout : 1000);
    },
    close: function(ev, ui ){
      pPopUp = null;
      if(callBack)
        callBack(this);
      $(this).dialog("destroy");
    }
  });
  return $dialog;
}
// #####################################################################
