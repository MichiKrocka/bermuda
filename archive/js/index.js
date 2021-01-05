// #####################################################################
var DIR_MENU      = "menu",            // directory with menus
    DIR_DATA      = "json",            // directory with JSON
    DIR_LANG      = "locale";          // directory with languages
// #####################################################################
var MENU = {
  "00_Project.htm":"",
  "10_Planning.htm":"",
  "20_Documentation.htm":"",
  "30_Plot.htm":"",
  "90_Options.htm":{
    "90.01_User.htm":"",
    "90.02_Group.htm":""
  }
};
// #####################################################################
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
var DEBUG               = 1,      // debug level
    RESIZE_DELAY        = 100,    // ms delay of window resize event
    REFRESH_TIME        = 500,    // ms
    DEFAULT_LANG        = "de-de",// deutsch
    GOTO_GROUP_FILT     = null,
    GOTO_USERS_FILT     = null,
    GOTO_PRJ_GROUP_FILT = null,
    GOTO_PRJ_USERS_FILT = null,
    newMenu             = null,   // new menu
    oldMenu             = null,   // menu before last
    topics              = {},     // message system
    FS0,                          // start font size
    FS,                           // curent font size
    FSK                 = 1.0;    // font size factor

var content = [];
// #####################################################################
jQuery(function($){
  // Locale ------------------------------------------------------------
  set_lang(DEFAULT_LANG);
  // prj ...............................................................
/*  
  MENU["10_Planning.htm"] = {};
  for(var x in oPrj.val.planer)
    MENU["10_Planning.htm"][$.sprintf("10.%02i_%s", x, oPrj.val.planer[x])] = "";
  MENU["20_Documentation.htm"] = {};
  for(var x in oPrj.val.doku)
    MENU["20_Documentation.htm"][$.sprintf("20.%02i_%s", x, oPrj.val.doku[x])] = "";
  $("#id_Project").text(oPrj.project);
*/ 
  // docu ..............................................................
  for(var i in aDocu){
    aDocu[i].ID  = aDocu[i].id;
    delete aDocu[i].id;
    for(x in aDocu[i])
      if(aDocu[i][x] == null)
        aDocu[i][x] = "";
  }
  // plan ..............................................................
  for(var i in aPlan){
    aPlan[i].ID  = aPlan[i].id;
    delete aPlan[i].id;
  }
  // plot ..............................................................
  for(var i in aPlot){
    aPlot[i].ID  = aPlot[i].id;
    delete aPlot[i].id;
  }
  // grp ...............................................................
  for(var i in aSys_grp){
    aSys_grp[i].ID  = aSys_grp[i].id;
    delete aSys_grp[i].id;
    if(aSys_grp[i].lph == null)
      aSys_grp[i].lph = "";
  }
  // user ..............................................................
  for(var i in aSys_user){
    aSys_user[i].ID  = aSys_user[i].id;
    delete aSys_user[i].id;
    if(aSys_user[i].lph == null)
      aSys_user[i].lph = "";
  }
  $("body")
  .on("keydown", keyboard);
  $(window)
  .resize(function(ev){
    if(window.resize_timer)
      clearTimeout(window.resize_timer);
    window.resize_timer = setTimeout(function(){
      $.Topic("resizeWindow").publish();
      DEBUG > 1 && console.log("resizeWindow");
    }, RESIZE_DELAY);
  });
  $('body').on("dblclick", 'img.zoom', function(ev){
    $(this).clone().dialog({
      width: "auto",
      title: "",
      modal: true,
      closeOnEscape: true,
      resizable: false
    });
  });
  FS0 = parseFloat($("html, body").css("font-size"));
  FS  = parseFloat(FS0 / 10);
  FSK = parseFloat($("html, body").css("font-size")) / $(window).height();
  // start .............................................................
  start();
})
// #####################################################################
function getData(File, callBack){
  console.log(File);
  return;
  $.getJSON(File, function(D, textStatus, jqXHR){
    if(callBack)
      callBack(D);
  }, "json").fail(function(err){
    console.log("JSON", err.responseText);
  });
}
// #####################################################################
function start(){
  // Menu --------------------------------------------------------------
  $('#id_Menu')
  .tree({
    top:
      '<div class="ui-widget ui-widget-header ui-corner-top tree_button">'+
        '<button class="icon lang-title" title="Open" data-choice="OPEN_CLOSE">'+
          '<i class="fa fa-folder"></i>'+
        '</button>'+
      '</div>'+
      '',
    labelFun: function(x){
      return x.replace(/[^_]*_/, "").replace(/[.][^.]*$/, "");
    },
    data: MENU,
    chck: false,
    render: function(ev, ui){
      var self = this;
      change_all_lang(this, true);
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
      $("button", "#id_Menu").button();
      // Refresh all
      $.Topic("resizeWindow").publish();
      var menu = $("input", ui.element).eq(0).data().menu;
      $(ui.element)
      .tree("open", $("input[data-menu='"+menu+"']", ui.element));
    },
    select: menu_load
  });
    return;

  // resize event
  $.Topic("resizeWindow").subscribe(function(val){
    var $menu = $("#id_Menu");
    var $div = $("#id_Content>div").filter(":visible");
    $menu.height(10);
    $div.height(10);
    var H = $div.parent().height();
    $menu.height(H - 2);
    $div.height(H - 2);
    DEBUG > 1 && console.log("resizeWindow");
  });
  // refresh timer
  refresh_timer();
  console.log("start");
}
// #####################################################################
// load content
function menu_load(ev, ui){
  newMenu = $(ui.newMenu).data("menu");
  $("#id_Content>div").hide();
  var div_menu = $("#id_Content>div").filter('[data-menu="'+newMenu+'"]');
  if(div_menu.length == 0){
    // virtuelle menüs
    var para = newMenu.substr(0, 3);
    if(para == "20.")
      para = "20_Documentation.htm";
    else if(para == "10.")
      para = "10_Planning.htm";
    else
      para = newMenu;
    var path = DIR_MENU + "/" + encodeURIComponent(para);
    var div = $('<div data-menu="'+newMenu+'"] class="ui-widget-content ui-corner-all">');
    $("#id_Content").append(div)
//    div_menu = $("#id_Content>div").filter('[data-menu="'+newMenu+'"]')
//    .html('<object type="text/html" data="'+path+'" ></object>');
    div_menu = $("#id_Content>div")
    .filter('[data-menu="'+newMenu+'"]')
    .html(content[path].replace(/\r/g, "\n"));
/*
    div_menu = $("#id_Content>div").filter('[data-menu="'+newMenu+'"]')
    .load(path, function(D){
      change_all_lang(this, true);
    });
*/
  } else {
    div_menu.show();
  }
  oldMenu = ui.oldMenu;
  // select menu + resize
  $.Topic("selectMenu").publish(ui);
  $(window).trigger("resize");
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
// refresh timer
function refresh_timer(){
  var T = date_time();
  T = $.sprintf("%s %s", T.D, T.T);
  if(T != this.Tpre){
    // time
    $("#id_Time").text(T);
    this.Tpre = T;
  }
  delete T;
  if(window.timer)
    clearTimeout(window.timer);
  window.timer = setTimeout(refresh_timer, REFRESH_TIME);
  $.Topic("refreshTimer").publish();
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
        $dialog.dialog("close");
      }, timeout ? timeout : 1000);
    },
    close: function(ev, ui ){
      pPopUp = null;
      if(callBack)
        callBack();
      $(this).dialog("destroy");
    }
  });
}
// #####################################################################
// save data to local host
// fileData - data to save
// fileName - file name
// fileType - mimetype
// msg      - text
// callBack - callback function
function saveDataLocal(fileData, fileName, fileType, msg, callBack){
  var $dialog = $('<div>')
  .html(
    (msg ? '<p>'+msg+'</p>' : '')+
    '<input type="text" name="FileSave" class="ui-corner-all" style="width:100%;border:1px solid silver" value="'+fileName+'">'+
    '<div class="ui-state-error ui-corner-all" style="display:none;padding: 0 .7em;;margin-top:5px"></div>'
  );
  $dialog
  .dialog({
    ret: false,
    width: "auto",
    title: _("Save as"),
    modal: true,
    closeOnEscape: true,
    resizable: false,
    buttons: [{
      text: _("Download"),
      click: function(){
        var V = $("input[name=FileSave]", $dialog).val();
        if(V == ""){
          $("div.ui-state-error").text(_("Filename has to be defined...")).show();
          return;
        }
        if(fileType){
          A = fileData;
        } else {
          var I = fileData.length,
              A = new Uint8Array(I);
          for(var i = 0; i < I; i++){
            A[i] = fileData.charCodeAt(i);
          }
        }
        var blob = new Blob(
          [A],
          {type: fileType ? fileType : 'text/plain; charset=x-user-defined'}
        );
        saveAs(blob, V, true);
        $(this).dialog("option", "ret", true);
        $(this).dialog("close");
      }
    },{
      text: _("Cancel"),
      click: function(){
        $(this).dialog("close");
      }
    }],
    close: function( ev, ui ){
      if(callBack)
        callBack($(this).dialog("option", "ret"));
      $(this).dialog("destroy");
    }
  });
}
// #####################################################################
// messages queues
jQuery.Topic = function(id){
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
