import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <>
<div id="social">
<p id="footer-info">Designed by <a href="#">Elegant Themes</a> | Powered by <a href="#">WordPress</a></p>

<ul className="social-icons">
<li className="facebook">
<a href="#" className="icon">
<span><FaFacebookF /></span>
</a>
</li>

<li className="twitter">
<a href="#" className="icon">
<span>X</span>
</a>

</li>
<li className="rss">
<a href="#" className="icon">
<span><FaRss />
</span>
</a>
</li>
</ul>

</div>
    </>
  )
}

export default FooterBottom
