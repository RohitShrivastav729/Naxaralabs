
function ThankYou(){
  return(
    <section style={{padding:"160px 0", textAlign:"center"}}>
      <div className="container" style={{maxWidth:"700px"}}>

        <h1 style={{fontSize:"48px", marginBottom:"20px"}}>
          Thank You 👋
        </h1>

        <p style={{fontSize:"18px", color:"#9aa4b2", marginBottom:"40px"}}>
          Your consultation request has been received.  
          Our team will get back to you within 24 hours.
        </p>

        <a href="/" style={{
          display:"inline-block",
          padding:"14px 30px",
          background:"#00bfff",
          borderRadius:"10px",
          color:"black",
          fontWeight:"600",
          textDecoration:"none"
        }}>
          Back to Home
        </a>

      </div>
    </section>
  )
}

export default ThankYou;