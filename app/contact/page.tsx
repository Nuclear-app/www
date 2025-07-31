import Navbar from "@/components/navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background overflow-hidden">    
        <Navbar />
        <iframe
        src="https://tally.so/r/wbMyv6"
        width="100%"
        height="100vh"
        style={{
          position: "fixed",
          top: 75,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
      />

        </div>

    );
  }