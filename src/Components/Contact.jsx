import { Instagram, Linkedin, Mail, PhoneCall, Send, Twitter } from "lucide-react"
import {cn} from "@/lib/utils"
export const Contact = () => {
    return <section id="contact" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                Have a project or want to collaborate ? I'm always open to discussing new opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact</h3>

                    <div className="space-y-6 items-center justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:test@gmail.com" className="text-secondary hover:text-primary transition-colors">test@gmail.com</a>
                            </div>

                        </div>
                    </div>
                    <div className="space-y-6 items-center justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <PhoneCall className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone Number</h4>
                                <a href="tel:+1234567890" className="text-secondary hover:text-primary transition-colors">+1(123) - 456 -7890</a>
                            </div>

                        </div>
                    </div>
                      <div className="pt-8 text-white">
                        <h4 className="font-semibold mb-4">Contact with Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a  href="#" target="_blank"> 
                                <Linkedin/>
                            </a>
                            <a href="#" target="_blank">
                                <Twitter/>
                            </a>
                            <a href="#" target="_blank">
                                <Instagram/>
                            </a>
                        </div>
                        </div>      

                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs text-white">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-m font-medium mb-2">Your Name</label>
                            <input type="text" name="name" id="name" className="w-full px-4 py-3 rounded-md border border-input bg-background focuse:outline-hidden 
                            focuse:ring-2 focus:ring-primary" required placeholder="OLa ....." />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-m font-medium mb-2">Your Email</label>
                            <input type="text" name="email" id="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focuse:outline-hidden 
                            focuse:ring-2 focus:ring-primary" required placeholder="Test@example.com ....." />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-m font-medium mb-2">Your Message</label>
                            <textarea type="text" name="message" id="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focuse:outline-hidden 
                            focuse:ring-2 focus:ring-primary resize-none" required placeholder="your message ....." />
                        </div>
                        <button  type="submit" className="px-6 py-2 rounded-full bg-primary text-primary-foreground 
                            font-medium transition-all duration-300 hover:shaow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-10s active:scale-95"><Send size={16}/></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}