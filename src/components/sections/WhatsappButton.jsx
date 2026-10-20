
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function WhatsappButton() {
  const { pathname } = useLocation();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (!footer) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  if (pathname === "/contact" || footerVisible) return null;

  const phoneNumber = "918708293816"

  const message = "Hi NaxaraLabs, I want to discuss a project."

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Naxara Labs on WhatsApp"
      className="whatsapp-float"
    >
      💬
    </a>
  )
}

export default WhatsappButton