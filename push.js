var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BEUqZO3lnxxErblxASSeUOh2J-xMjseIoQwLFq5B5rV6JwjEFqyU2vWlriiwveGpL7xNPvvjzxJneYfy962wORE",
   "privateKey": "qUJw9cb7pu9nbwanHAzDYS9UpT2oASqYeVD0Yp1nwUw"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)

var pushSubscription = {
   "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABfKBzPlEgnLqU8cyjqblA43HqaLgPY_ks4wAq7yWAZZmREJUeZmsGmaNsXdQlNVuNcuLoYaWulxdbURM5mFBi2V1eK_lvpZB28GfCovSeDCbci2gVRsehLiy66l8ZZS0f7zLl16B0JvftCJ56GnwZRFrhf-pSDBknvRqdz55G3ns0pm8Y",
   "keys": {
       "p256dh": "BE/sFcBX+KcsO2uNtXZmCvhPxV4DWrnyoge+n62MMCtrEwQuZkVuo9PXQb1314oLl62JzZscXiQk7fofSdpsR/Y=",
       "auth": "qqJHkw/Uq19hA0CyKnG24A=="
   }
};

var payload = 'Pertandingan yang anda simpan di halaman Saved Matches segera dimulai 5 menit lagi.\nLiverpool FC VS Manchester City\n19.00 WIB';
 
var options = {
   gcmAPIKey: '830977284673',
   TTL: 60
};

webPush.sendNotification(
   pushSubscription,
   payload,
   options
);
