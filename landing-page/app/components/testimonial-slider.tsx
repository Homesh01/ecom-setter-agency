import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, TechFlow Solutions",
    company: "SaaS",
    content:
      "LeadGen Pro transformed our sales pipeline. We went from 3 demos per month to 25+ qualified appointments. The ROI has been incredible - we've 4x'd our revenue in just 6 months.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Founder, DataDriven Analytics",
    company: "B2B Services",
    content:
      "I was skeptical at first, but the results speak for themselves. 87% show-up rate and every appointment is pre-qualified. It's like having a world-class sales team without the overhead.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "VP Sales, CloudScale",
    company: "Enterprise Software",
    content:
      "The quality of appointments is outstanding. These aren't tire-kickers - they're decision makers with real budgets. Our close rate improved from 15% to 35% almost immediately.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Managing Director, ConsultPro",
    company: "Consulting",
    content:
      "Best investment we've made for our business. The team is professional, the process is seamless, and the results are consistent. We've been able to scale without hiring additional sales staff.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700/50">
        <CardContent className="p-8 lg:p-12">
          <div className="flex items-center justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl text-gray-200 text-center mb-8 leading-relaxed">
            "{testimonials[currentIndex].content}"
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src={testimonials[currentIndex].avatar || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-center">
              <div className="font-semibold text-white text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-300">
                {testimonials[currentIndex].title}
              </div>
              <div className="text-sm text-gray-400">
                {testimonials[currentIndex].company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          className="rounded-full w-10 h-10 p-0 bg-gray-800 border-gray-600 hover:bg-gray-700 text-gray-300"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex space-x-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-400 to-purple-400"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          className="rounded-full w-10 h-10 p-0 bg-gray-800 border-gray-600 hover:bg-gray-700 text-gray-300"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
