require('switchman')();

// Create a new window and get it
nw.Window.open('http://localhost:3000/devices', {
  "position": "center",
  "title": "Switchman",
  "width": 500
}, function(win) {
  // And listen to new window's focus event
  win.on('loaded', function() {
    console.error('Loaded');
    win.showDevTools();
  });

  console.log('Test');

});

// Create a tray icon
var tray = new nw.Tray({ title: 'Tray', icon: 'public/images/favicon.ico' });

// Give it a menu
var menu = new nw.Menu();
menu.append(new nw.MenuItem({ label: 'Application' }));
menu.append(new nw.MenuItem({ label: 'Exit' }));
tray.menu = menu;
