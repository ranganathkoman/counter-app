const dataLayer = window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

const gtagFunc = () => {
    gtag('config', 'G-G7HS7HSRP6', {
        'page_title': 'Travel Destinations',
        'currency': 'USD',
        'floor': "20th floor",
        'flat': "2013"
      });
}

export default gtagFunc;