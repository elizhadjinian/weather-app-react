import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import Current from "./Current.js";
import boostrap from "bootstrap";

export default function App() {
  return (
    
    <div>
      <!-- Pinterest Tag -->
<script>
!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
  n=window.pintrk;n.queue=[],n.version="3.0";var
  t=document.createElement("script");t.async=!0,t.src=e;var
  r=document.getElementsByTagName("script")[0];
  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', '2614286542495', {em: '<user_email_address>'});
pintrk('page');
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt=""
  src="https://ct.pinterest.com/v3/?event=init&tid=2614286542495&pd[em]=<hashed_email_address>&noscript=1" />
</noscript>
<!-- end Pinterest Tag --></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <div className="App">
      <Current />
      <Weather />
      </div>
      <p className = "Credit"><small >Coded by <a href = "https://github.com/elizhadjinian/weather-app-react" target="blank">Elizabeth Hadjinian</a></small>
    </p></div>
  );
}

