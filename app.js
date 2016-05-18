require('switchman')();

//Application Window
var openWindow = (function (){
  var window = null

  return function(){
    if(window==null){
      alert("light");
      nw.Window.open('http://localhost:3000/devices', {
        "position": "center",
        "title": "Switchman",
        "width": 500
      }, function(win) {
        window = win;
        // And listen to new window's focus event
        win.on('loaded', function() {
          //Show Dev Tools for Debugging
          win.showDevTools();
        });
        win.on('close', function() {
          // Hide the window

          win.hide();
        });

      });
    }
    else{
      window.show();
    }
  }
})();

openWindow();

//Application Tray
var tray = new nw.Tray({ title: 'Switchman', icon: 'assets/images/favicon.ico' });

//Application Menu
var menu = new nw.Menu();
var uApp = new nw.MenuItem({ label: 'Application' });
uApp.click = function() { openWindow(); };
var uExit = new nw.MenuItem({ label: 'Exit' });
uExit.click = function() { nw.App.quit(); };
menu.append(uApp);
menu.append(uExit);
tray.menu = menu;
