import * as rudderanalytics from "rudder-sdk-js";

const DATA_PLANE_URL = "https://rudderstacocr.dataplane.rudderstack.com";


// const WRITE_KEY = "2Dmwv0Hkb18ldTh6cs4S8zuRKEg";

const WRITE_KEY = "2Dmwv0Hkb18ldTh6cs4S8zuRKEg";
// const DATA_PLANE_URL = "http://ad666c1660a4f4667829f19e12ee0971-959956009.us-east-1.elb.amazonaws.com:80";

// "ab1374f9f3e3c4a5f805581558239574-8aef9c8ecfb8452f.elb.us-east-1.amazonaws.com:80"

rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});


rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL);

rudderanalytics.page();
// rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL);

rudderanalytics.group("12345", {
  name: "MyGroup",
  industry: "IT",
  employees: 450,
  plan: "basic"
})


export function eventIdentify(user) {

    // var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    // var analytics = global.window.analytics = global.window.analytics || [];
    // const rudderanalytics = global.window.rudderanalytics;
    console.log("I got called");
    rudderanalytics.page({cid: 12345});
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
  // const rudderanalytics = global.window.rudderanalytics;
  rudderanalytics.page(null, name, {cid: 12345}, payload, () => {
    console.log("Hello Woreknknk");
    rudderanalytics.identify("qnskinfknkd");
  });
}

export function eventTrack(eventName, payload) {
 // const rudderanalytics = global.window.rudderanalytics;

    console.log(rudderanalytics);
    console.log(payload);
    rudderanalytics.track(eventName, payload, 
      {
        externalId: [{
            type: "ga4ClientId",
            id: "123456"
        }]
    }
      );
}



