'use client'

import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Heart, Brain, Stethoscope, ChevronRight } from "lucide-react";
import Link from "next/link";

const SearchBar = dynamic(() => import('./components/SearchBar'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-sky-50">
        <Link className="flex items-center justify-center" href="/">
          <Stethoscope className="h-6 w-6 text-sky-600" aria-hidden="true" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Healthier</span>
        </Link>
        <nav className="ml-auto">
          <ul className="flex gap-4 sm:gap-6">
            {['Features', 'How It Works', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href={`#${item.toLowerCase().replace(' ', '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-sky-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Personal Health Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Search your symptoms and get instant, reliable health information and solutions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
                  <Input className="flex-1" placeholder="Enter your symptoms" type="text" aria-label="Enter your symptoms" />
                  <Button type="submit" className="bg-sky-600 hover:bg-sky-700">
                    <Search className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span>Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Personalized Care", description: "Get tailored health information based on your symptoms." },
                { icon: Brain, title: "AI-Powered", description: "Our advanced AI provides accurate and up-to-date information." },
                { icon: Stethoscope, title: "Expert Verified", description: "All information is reviewed and verified by medical professionals." }
              ].map((feature, index) => (
                <Card key={index} className="bg-sky-50">
                  <CardContent className="flex flex-col items-center p-6">
                    <feature.icon className="h-12 w-12 text-sky-600 mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-sky-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Enter Your Symptoms", description: "Describe what you're experiencing in our search bar." },
                { step: 2, title: "Get Instant Results", description: "Our AI analyzes your symptoms and provides potential causes." },
                { step: 3, title: "Receive Recommendations", description: "Get personalized advice on next steps and potential treatments." }
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-sky-50">
                  <CardContent className="p-6">
                    <p className="text-black mb-4">
                      &quot;Healthier has been a game-changer for me. It&apos;s like having a doctor in my pocket!&quot;
                    </p>
                    <p className="font-bold text-black">- Satisfied User {i}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Take Control of Your Health?
                </h2>
                <p className="mx-auto max-w-[700px] text-sky-100 md:text-xl">
                  Join thousands of users who trust Healthier for their health concerns.
                </p>
              </div>
              <Button className="bg-white text-sky-600 hover:bg-sky-100">
                Get Started Now
                <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-sky-50">
        <p className="text-xs text-gray-500">© 2024 Healthier Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}