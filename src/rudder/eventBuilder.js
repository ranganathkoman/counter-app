import * as rudderanalytics from "rudder-sdk-js";

const DATAPLANE_URL = "https://rudderstacocr.dataplane.rudderstack.com";
const WRITE_KEY = "2Dmwv0Hkb18ldTh6cs4S8zuRKEg";
const RUDDER_USER_PSWD = 'Sep4h2t2$j8L';
const EXT_DB_URL = "postgres://rangas_pg_user:GNTIQMzdrNgprauUcT7uC11lYjhrXKFf@dpg-cc2q4uha6gdkbg2er0d0-a.singapore-postgres.render.com/rangas_pg";

function rudderInitialize() {
    rudderanalytics.ready(() => {console.log("we are all set!!!")})
    rudderanalytics.load(WRITE_KEY, DATAPLANE_URL,{logLevel: "DEBUG", integrations:{All:true}})
};

rudderInitialize();

export function eventIdentify(user) {

    // var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    // var analytics = global.window.analytics = global.window.analytics || [];
    rudderanalytics.identify(user, 
        {
            name: user,
            category: "Identify User",
            email: `${user}@gmail.com`,
            logins: Math.floor(Math.random() * 100)
        },
        {
            page: {
              path: "",
              referrer: "",
              search: "",
              title: "",
              url: "",
            },
        },
        () => {
            console.log("in identify call");
          } 
        );
}

export function eventPage() {
        rudderanalytics.page(
            "Cart",
            "Cart Viewed",
            {
              path:  "xcx123",
              referrer:  "xc dd",
              search:  "sefsefes",
              title:  "edwewde",
              url:  "wedwedewdew"
            },
            {
              context: {
                ip:  "0.0.0.0"
              },
              anonymousId:  "xx"
            }, 
            () => {console.log("in page call");}
          );
    console.log("rudder page call");
}

export function eventTrack(eventName, payload) {
    console.log(payload);
    rudderanalytics.track(eventName, payload);
}



