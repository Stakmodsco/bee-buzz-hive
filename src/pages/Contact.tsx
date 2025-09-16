import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] text-bee mb-6">
              Get In
              <span className="text-honey block">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about bees, conservation, or want to collaborate? 
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-['Playfair_Display']">
                Send Us a Message
              </h2>
              
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="mt-2" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="What's this about?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="conservation">Conservation Partnership</SelectItem>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                          <SelectItem value="donation">Donation Questions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..." 
                        rows={6}
                        className="mt-2"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-honey hover:bg-primary/90 text-bee shadow-honey"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-['Playfair_Display']">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Office Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-honey" />
                      Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      123 Pollinator Drive<br />
                      Bee City, BC 12345<br />
                      United States
                    </p>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-honey" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+1 (555) 123-BUZZ</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday, 9 AM - 5 PM EST
                    </p>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-honey" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-muted-foreground">info@buzzworld.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Research & Partnerships</p>
                      <p className="text-muted-foreground">research@buzzworld.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Media & Press</p>
                      <p className="text-muted-foreground">press@buzzworld.com</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-honey" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Playfair_Display']">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
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

            <Card>
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

            <Card>
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

            <Card>
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
      </section>
    </div>
  );
};

export default Contact;