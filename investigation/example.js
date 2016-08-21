var dbus = require('dbus-native');
var conn = dbus.createConnection({
    busAddress: 'unix:path=/var/run/dbus/system_bus_socket'
});

conn.message({
    path:'/org/freedesktop/DBus',
    destination: 'org.freedesktop.DBus',
    'interface': 'org.freedesktop.DBus',
    member: 'Hello',
    type: dbus.messageType.methodCall
});

conn.on('message', function(msg) { console.log(msg); });
