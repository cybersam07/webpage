import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookingSystem } from "@/components/BookingSystem";
import { Search, Shield, Users, Eye, FileText, Clock, MapPin, Phone, Mail, CheckCircle, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Spycyber</h1>
                  <p className="text-xs text-muted-foreground">Investigation & Protection</p>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="nav-link text-foreground hover:text-primary">Home</a>
              <a href="#about" className="nav-link text-foreground hover:text-primary">About Us</a>
              <a href="#services" className="nav-link text-foreground hover:text-primary">Services</a>
              <a href="#testimonials" className="nav-link text-foreground hover:text-primary">Testimonials</a>
              <a href="#contact" className="nav-link text-foreground hover:text-primary">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View Services
              </Button>
              <BookingSystem />
            </div>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://aravo.com/wp-content/uploads/2025/02/Aravo_The-Difference-and-Why-Blog_social_1200x628.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="hero-gradient absolute inset-0 z-10" />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Welcome to Spycyber
            <br />
            <span className="text-gradient">Investigation and Protection</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Veteran owned and operated investigative firm dedicated to providing excellent customer service and results.
            Where your privacy and confidentiality matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              View Services
            </Button>
            <BookingSystem />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Us</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Spycyber Investigation and Protection, LLC is a Veteran owned and operated Investigative Firm.
                Dedicated to providing excellent customer service and results. Where your privacy and confidentiality matters.
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                With over 30 years of Investigative experience. Operating at the intersection of technology and professional expertise,
                we provide comprehensive private investigation solutions. We delve deep, not just skimming the surface, to discover the
                truth for our clients to make you whole and give you a piece of mind. Knowing that you have a team by your side all the way through.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Over 30 years of investigative experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Veteran owned and operated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Complete confidentiality and discretion</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c8.alamy.com/comp/KD7489/searching-private-information-and-personal-security-surveillance-technology-KD7489.jpg"
                alt="Investigation Technology"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              A Comprehensive Range of Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From personal and corporate to legal investigations, our team of seasoned investigators
              comprised of various backgrounds from both federal and local law enforcement as well as military.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border service-card">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Claims Investigation</h3>
                <p className="text-muted-foreground">Professional investigation of insurance claims and fraud detection.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border service-card">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Background Investigation</h3>
                <p className="text-muted-foreground">Comprehensive background checks for employment and personal use.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border service-card">
              <CardContent className="p-6">
                <Search className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Asset Identification</h3>
                <p className="text-muted-foreground">Locate and identify assets for judgments and collections.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border service-card">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Missing Persons</h3>
                <p className="text-muted-foreground">Expert location services for missing children, adults, and witnesses.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border service-card">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Surveillance</h3>
                <p className="text-muted-foreground">Professional surveillance and counter-surveillance operations.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border service-card">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Criminal/Civil Investigations</h3>
                <p className="text-muted-foreground">Comprehensive investigation services for legal matters.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-muted/30 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">Professional Credentials</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">California License PI</p>
                <p className="text-foreground font-semibold">189675</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground">Registered Process Server</p>
                <p className="text-foreground font-semibold">1965</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-foreground font-semibold">30+ Years</p>
              </div>
            </div>
            <p className="text-foreground text-lg mb-6">
              Call or email for your free consultation and case evaluation. This can be done over the phone, virtual or in person.
            </p>
            <div className="flex justify-center">
              <BookingSystem />
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Comprehensive Investigative Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a range of services from personal to legal investigations. Our team uses refined techniques like surveillance, research, and interviews for a deep, comprehensive investigation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img
                src="https://images.stockcake.com/public/a/d/0/ad0ce834-a8bd-4402-bc49-47148da7f4c9_large/laptop-investigative-tool-stockcake.jpg"
                alt="Digital Investigation Tools"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Digital Forensics & Technology</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                We leverage cutting-edge technology and digital forensics tools to uncover digital evidence and trace electronic activities. Our investigators are equipped with the latest software and hardware to conduct thorough digital investigations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Advanced digital forensics capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Electronic evidence recovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Cybersecurity investigations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Unwavering Pursuit of Truth</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Our mission is to illuminate the concealed, providing valuable insights that empower our clients to make informed decisions. Uncertainty is navigated with precision and direction.
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                We strive to deliver clarity amidst confusion, shining a light onto the unseen. With us, you can trust that we lay our service on pillars of integrity, diligence, and absolute discretion.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://thumbs.dreamstime.com/b/forensic-investigation-unveiling-latent-fingerprints-dark-wood-surface-using-magnifying-glass-close-up-macro-photograph-374401389.jpg"
                alt="Forensic Investigation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Guiding Clients During Tough Times
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Navigating uncertain scenarios can be daunting. We strive to be a reliable entity that guides our clients
                through such challenging times. Our work is based on integrity, diligence, and discretion.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our operations maintain utmost professionalism, empathy, and decorum. We understand the sensitive nature
                of our tasks and assure our clients of absolute discretion and confidentiality.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Innovative Investigation</h3>
                  <p className="text-sm text-muted-foreground">Solutions provider.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Specialization</h3>
                  <p className="text-sm text-muted-foreground">In various investigative services.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Trustworthy</h3>
                  <p className="text-sm text-muted-foreground">Diligent, and discreet.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--e983e348-25df-4daa-a8f4-3293de526f58/ey-background-check-banner-with-out-spectrum-frame.jpg?preferwebp=true&quality=85"
                alt="Professional Investigation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Testimonials</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-muted-foreground">"</span>
                </div>
                <blockquote className="text-xl text-foreground mb-6 italic">
                  "Their dedication to uncovering the truth was exemplary, navigating the confusion with clarity and understanding."
                </blockquote>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="w-2 h-2 bg-muted rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today. Our experienced investigators are ready to help you uncover the truth
              and provide the answers you need. All consultations are completely confidential.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Phone Consultation</h3>
                  <p className="text-muted-foreground">Discuss your case over a secure phone call</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Video Meeting</h3>
                  <p className="text-muted-foreground">Face-to-face consultation via secure video</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">In-Person Meeting</h3>
                  <p className="text-muted-foreground">Meet at our office for a private discussion</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <BookingSystem />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Contact Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <Input
                  placeholder="Name"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                <Textarea
                  placeholder="Message"
                  rows={5}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit Form
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">P.O. Box 3984, Rancho Cucamonga, CA 91729</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">(909) 278-2350</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">info@spycyberinvestigation.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Open Hours</h4>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Today: 09:00 am - 06:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Spycyber Investigation and Protection, LLC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              California License PI: 189675 / Registered Process Server: 1965
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
