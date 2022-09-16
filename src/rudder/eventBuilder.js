import * as rudderanalytics from "rudder-sdk-js";

// const DATAPLANE_URL = "https://rudderstacocr.dataplane.rudderstack.com";
// const WRITE_KEY = "2Dmwv0Hkb18ldTh6cs4S8zuRKEg";
const DATAPLANE_URL = "http://ad666c1660a4f4667829f19e12ee0971-959956009.us-east-1.elb.amazonaws.com:80";
const WRITE_KEY = "24K9h0TQsACl7HsnmehbLgH5Khq";


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

export function eventPage(name, payload) {
  rudderanalytics.page(name, payload, () => {
    console.log("Hello Woreknknk");
  });
}

export function eventTrack(eventName, payload) {
    console.log(payload);
    rudderanalytics.track(eventName, payload);
}



