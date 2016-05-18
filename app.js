require('switchman')();

//Application Window
var openWindow = (function (){
  var window = null
  return function(){
    if(window==null){
      nw.Window.open('http://localhost:3000/views', {
        "position": "center",
        "title": "Switchman",
        "width": 1000,
        "height": 500,
      }, function(win) {
        window = win;
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
