import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'salon-service',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "GoogleAuth":{
        "scopes":["profile","email"],
        "serverClientId":"668744227736-iudfs0844ko5fak7tsnbo7tnjaqf889u.apps.googleusercontent.com",
        "clientId":"668744227736-iudfs0844ko5fak7tsnbo7tnjaqf889u.apps.googleusercontent.com",
        "forceCodeForRefreshToken":true
    }
},
};

export default config;
