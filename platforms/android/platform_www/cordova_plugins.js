cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-device-orientation.CompassError",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.compass",
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-splashscreen": "4.0.0",
    "cordova-plugin-statusbar": "2.2.0",
    "cordova-plugin-whitelist": "1.3.0",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-device-orientation": "1.0.6",
    "cordova-plugin-vibration": "2.1.4"
};
// BOTTOM OF METADATA
});