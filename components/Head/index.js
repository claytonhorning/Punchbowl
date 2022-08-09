import Head from "next/head";
import Script from "next/script";

export default function CustomHead({ title }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y83HSTY35R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y83HSTY35R');
        `}
      </Script>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="Punchbowl Pressure Washing" />
        <meta property="og:url" content="https://punchbowlpw.com" />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      <Script id="fb-root">
        {`
       var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "111088115036607");
      chatbox.setAttribute("attribution", "biz_inbox");
      `}
      </Script>

      <Script id="fb-customer-chat" className="fb-customerchat">
        {`
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v14.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    `}
      </Script>
    </>
  );
}
