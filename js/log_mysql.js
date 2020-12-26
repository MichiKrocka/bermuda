// #####################################################################
// load user data
function user_load(Form, fault, success){
  var o = {
    id: REST_ID,
    base: SQL_SYS_BASE,
    cmd: [{
      sgn: "LOG",
      query: $.sprintf(
        "SELECT dbuser,pswd,lang,menu,theme,val,grp,adr,(SELECT access FROM %s WHERE %s.grp=%s.grp) AS access FROM %s WHERE dbuser=? AND (pswd=? OR ?=?)",
        SQL_SYS_GRP, SQL_SYS_GRP, SQL_SYS_USER, SQL_SYS_USER
      ),
      para: [
        Form.user.value,
        $.md5(Form.pswd.value),
        UNIVERSUM,
        $.md5(Form.pswd.value)
      ]
    }]
  };
  $.post("/sql", o, function(D){
    if(typeof D.LOG != "undefined" && D.LOG.length == 1){
      oUser = D.LOG[0];
      DEBUG && console.log("Login", Form.user.value);
      if(typeof oUser.lang == "undefined" || oUser.lang == "")
        oUser.lang = DEFAULT_LANG;
      if(D.LOG[0].access == "")
        oAccess = {};
      else
        oAccess = $.parseJSON(D.LOG[0].access);
      if(oUser.val == "")
        oUser.val = {};
      else
        oUser.val = $.parseJSON(oUser.val);
      log(oUser.dbuser, "", "LOGIN", "");
      make_fixed_filt();
    } else if(typeof D.err != "undefined") {
      DEBUG && console.log("Login fault:", D.err);
      log(oUser.dbuser, "", "LOGIN", "failed");
      fault(_("Access denied"));
    } else {
      DEBUG && console.log("Login fault", Form.user.value);
      log(oUser.dbuser, "", "LOGIN", "failed");
      fault(_("Access denied"));
    }
  })
  .fail(function(error){
    fault(error.responseText);
    return false;
  });
  // -------------------------------------------------------------------
  function make_fixed_filt(){
    if(oUser.grp == "Admin"){
      FIXED_FILT = "";
      $("body").load("main.htm", function(){
        success();
      });
      return;
    }
    var o = {
      id: REST_ID,
      base: SQL_SYS_BASE,
      cmd: [{
        sgn: "PRJ",
        query: "SELECT id FROM project WHERE state='X'",
        para: []
      }]
    };
    $.post("/sql", o, function(D){
      var u = [],
          p = [];
      for(var i in D.PRJ){
        u.push($.sprintf(
          "SELECT %i AS prj_id, COUNT(*) AS N FROM bermuda_%05i.sys_user WHERE dbuser=?",
          D.PRJ[i].id, D.PRJ[i].id
        ));
        p.push(oUser.dbuser);
      }
      o.cmd = [{
        sgn: "FIX",
        query: u.join(" UNION "),
        para: p
      }];
      $.post("/sql", o, function(D){
        var ids = [];
        for(var i in D.FIX){
          if(D.FIX[i].N)
            ids.push(D.FIX[i].prj_id);
        }
        FIXED_FILT = $.sprintf(
          "state='X' AND (admin='%s' %s)",
          oUser.dbuser,
          ids.length ? " OR id IN ("+ids.join(",")+")" : ""
        );
        $("body").load("main.htm", function(){
          success();
        });
      });
    })
    .fail(function(error){
      fault(error.responseText);
      return false;
    });
  }
}
// #####################################################################
// save user data
function user_save(callBack){
  var o = {
    id: REST_ID,
    base: SQL_SYS_BASE,
    cmd: [{
      sgn: "LOG",
      query: $.sprintf(
        "UPDATE %s SET menu=?,lang=?,theme=?,pswd=?,val=?,adr=? WHERE dbuser=?",
        SQL_SYS_USER
      ),
      para: [
        oUser.menu,
        oUser.lang,
        oUser.theme,
        oUser.pswd,
        JSON.stringify(oUser.val),
        oUser.adr,
        oUser.dbuser
      ]
    }]
  };
  $.post("/sql", o, function(D){
    log(oUser.dbuser, "", "LOGOUT", "");
    if(callBack)
      callBack();
  })
  .fail(function(error){
    console.log("Logout fault", error.responseText);
    return false;
  });
}
// #####################################################################
// save user data
function log(dbuser, project, event, note, callBack){
  var o = {
    id: REST_ID,
    base: SQL_SYS_BASE,
    cmd: [{
      sgn: "LOG",
      query: "INSERT log (dbuser,project,event,note) VALUES (?,?,?,?)",
      para: [dbuser, project, event, note]
    }]
  };
  $.post("/sql", o, function(D){
    if(callBack)
      callBack();
  })
  .fail(function(error){
    return false;
  });
}
// #####################################################################
