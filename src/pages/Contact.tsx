import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, User, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Custom 3D Flip Card Styles */}

      {/* Full Screen Contact Section */}
      <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-honey/10 via-background to-nature/20"></div>
        <div className="absolute inset-0 hexagon-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center justify-between min-h-[80vh]">
            
            {/* Left Side - Contact Info */}
            <div className="w-full lg:w-1/2 px-5">
              <div className="inline-block w-16 h-0.5 bg-honey mb-6"></div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-['Playfair_Display'] mb-6">
                Get In <span className="text-honey">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Have questions about bees, conservation, or want to collaborate? 
                We'd love to hear from you and discuss how we can work together 
                to protect these amazing pollinators.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-foreground">
                  <MapPin className="w-5 h-5 text-honey mr-3" />
                  <span>123 Pollinator Drive, Bee City, BC 12345</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Phone className="w-5 h-5 text-honey mr-3" />
                  <a href="tel:+15551234BUZZ" className="hover:text-honey transition-colors">
                    +1 (555) 123-BUZZ
                  </a>
                </div>
                <div className="flex items-center text-foreground">
                  <Mail className="w-5 h-5 text-honey mr-3" />
                  <a href="mailto:info@buzzworld.com" className="hover:text-honey transition-colors">
                    info@buzzworld.com
                  </a>
                </div>
              </div>

              {/* Contact Button */}
              <Button 
                onClick={() => setShowForm(!showForm)}
                variant="glow"
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-1/2 px-5 flex justify-center">
              <div className="contact-form-container w-full max-w-md">
                
                {/* 3D Flip Card */}
                <div className="card-3d-wrap perspective-1000 w-full h-96">
                  <div className={`card-3d-wrapper transition-transform duration-700 ${showForm ? 'rotate-y-180' : ''}`}>
                    
                    {/* Front Card - Welcome */}
                    <div className="card-front absolute inset-0 w-full h-full">
                      <div className="center-wrap flex flex-col items-center justify-center h-full p-8 bg-card/90 backdrop-blur-sm rounded-xl border border-border shadow-xl">
                        <div className="hexagon w-20 h-20 bg-honey/20 flex items-center justify-center mb-6">
                          <User className="w-10 h-10 text-honey" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-center font-['Playfair_Display']">
                          Let's Connect
                        </h3>
                        <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                          Ready to join our mission to protect and celebrate bees? 
                          Click below to get started.
                        </p>
                        <Button 
                          onClick={() => setShowForm(true)}
                          variant="glow"
                          className="transform hover:scale-105 transition-all duration-300"
                        >
                          Contact Me
                        </Button>
                      </div>
                    </div>

                    {/* Back Card - Contact Form */}
                    <div className="card-back absolute inset-0 w-full h-full">
                      <div className="center-wrap h-full p-6 bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-xl font-bold font-['Playfair_Display']">Contact Form</h4>
                          <Button 
                            onClick={() => setShowForm(false)}
                            variant="ghost" 
                            size="sm"
                            className="hover:bg-honey/20"
                          >
                            Back
                          </Button>
                        </div>
                        
                        <form className="space-y-4">
                          <div>
                            <Input 
                              placeholder="Full Name" 
                              className="bg-background/50 border-border/50 focus:border-honey transition-colors"
                            />
                          </div>
                          <div>
                            <Input 
                              type="email" 
                              placeholder="Email Address" 
                              className="bg-background/50 border-border/50 focus:border-honey transition-colors"
                            />
                          </div>
                          <div>
                            <Select>
                              <SelectTrigger className="bg-background/50 border-border/50 focus:border-honey">
                                <SelectValue placeholder="Subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="conservation">Conservation</SelectItem>
                                <SelectItem value="research">Research</SelectItem>
                                <SelectItem value="volunteer">Volunteer</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Textarea 
                              placeholder="Your message..." 
                              rows={3}
                              className="bg-background/50 border-border/50 focus:border-honey transition-colors resize-none"
                            />
                          </div>
                          <Button 
                            type="submit" 
                            variant="glow"
                            className="w-full transform hover:scale-105 transition-all duration-300"
                          >
                            Send Message
                          </Button>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Office Hours & Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <Clock className="w-12 h-12 text-honey mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Office Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span>9 AM - 5 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10 AM - 2 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <Mail className="w-12 h-12 text-honey mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Email Contacts</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">General</p>
                      <a href="mailto:info@buzzworld.com" className="text-muted-foreground hover:text-honey">
                        info@buzzworld.com
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Research</p>
                      <a href="mailto:research@buzzworld.com" className="text-muted-foreground hover:text-honey">
                        research@buzzworld.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-honey mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Visit Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Pollinator Drive<br />
                    Bee City, BC 12345<br />
                    United States
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Tours available by appointment
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about bee conservation and our work.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">How can I support bee conservation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    There are many ways to help! You can donate to our conservation projects, 
                    plant bee-friendly gardens, avoid pesticides, and spread awareness about 
                    the importance of pollinators.
                  </p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Can I visit your facilities?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We offer guided tours by appointment on weekends. Please contact us 
                    at least two weeks in advance to schedule your visit.
                  </p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Do you accept research partnerships?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes! We collaborate with universities, research institutions, and 
                    conservation organizations. Contact our research team to discuss 
                    potential partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">How can I volunteer with BuzzWorld?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We have various volunteer opportunities including habitat restoration, 
                    educational outreach, and event assistance. Fill out our contact form 
                    selecting "Volunteer Opportunities."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;