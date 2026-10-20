
function WhatsappButton() {

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