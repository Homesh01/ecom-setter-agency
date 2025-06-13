import type { MetaFunction } from "@remix-run/cloudflare";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import TestimonialSlider from "@/components/testimonial-slider";
import { Link, useLoaderData } from "@remix-run/react";
import VapiWidget from "@/components/vapi-testing";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { json, type LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({ context }: LoaderFunctionArgs) {
  // You can access Cloudflare ENV vars here (from wrangler.toml)
  const VAPI_API_KEY = context.cloudflare.env.VAPI_API_KEY;
  const VAPI_ASSISTANT_ID = context.cloudflare.env.VAPI_ASSISTANT_ID;

  return json({
    VAPI_API_KEY,
    VAPI_ASSISTANT_ID,
  });
}

export default function Index() {
  const { VAPI_API_KEY, VAPI_ASSISTANT_ID } = useLoaderData<typeof loader>();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <header className="border-b bg-gray-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-gray-900/70 sticky top-0 z-50 border-gray-700/30">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">LeadGen Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#benefits"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Benefits
            </Link>
            <Link
              to="#results"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Results
            </Link>
            <Link
              to="#testimonials"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="#pricing"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Book a Call
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-900/50 text-blue-200 hover:bg-blue-900/60 border border-blue-700/30">
              Done-For-You Lead Generation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fill Your Calendar with
              <span className="text-blue-400"> Qualified Prospects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We handle everything from lead research to appointment setting, so
              you can focus on closing deals. Get 15-25 qualified appointments
              per month, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Strategy Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-gray-600 text-gray-300 bg-gray-600 hover:bg-gray-800 hover:text-white"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                No Setup Fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                Results in 14 Days
              </div>
            </div>
          </div>
        </div>
      </section>

      <VapiWidget apiKey={VAPI_API_KEY} assistantId={VAPI_ASSISTANT_ID} />

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Done-For-You Service?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stop wasting time on cold outreach that doesn't work. Let our
              proven system fill your pipeline.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 border border-gray-700/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 border border-blue-700/30">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Laser-Targeted Prospects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  We research and identify your ideal customers using advanced
                  data tools and manual verification.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 border border-gray-700/50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4 border border-green-700/30">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Multi-Channel Outreach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  Email, LinkedIn, and phone outreach campaigns that get
                  responses and book meetings.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 border border-gray-700/50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 border border-purple-700/30">
                  <Clock className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Save 20+ Hours/Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  Focus on closing deals while we handle all the prospecting,
                  outreach, and appointment setting.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 border border-gray-700/50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center mb-4 border border-orange-700/30">
                  <TrendingUp className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Proven Scripts & Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  Battle-tested messaging that converts prospects into booked
                  appointments consistently.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 border border-gray-700/50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-900/50 rounded-lg flex items-center justify-center mb-4 border border-red-700/30">
                  <Calendar className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Calendar Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  Seamless booking directly into your calendar with automated
                  confirmations and reminders.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 border border-gray-700/50">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 border border-indigo-700/30">
                  <CheckCircle className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-xl text-white">
                  Quality Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  We guarantee qualified appointments or you don't pay. No
                  fluff, just results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section
        id="results"
        className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/30 to-purple-900/30"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our proven system delivers consistent, measurable results for B2B
              companies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                3x
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Average ROI
              </div>
              <div className="text-gray-400">Within 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                25+
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Appointments/Month
              </div>
              <div className="text-gray-400">Qualified prospects only</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                87%
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Show-up Rate
              </div>
              <div className="text-gray-400">Pre-qualified leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                14
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Days to Results
              </div>
              <div className="text-gray-400">First appointments</div>
            </div>
          </div>
          <div className="mt-16 bg-gradient-to-br from-gray-800 to-slate-800 rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Case Study: SaaS Company
              </h3>
              <p className="text-gray-300">
                How we helped a B2B SaaS company scale from $50K to $200K MRR in
                6 months
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-red-400 mb-2">
                  Before
                </div>
                <div className="text-gray-300">2-3 demos/month</div>
                <div className="text-gray-300">$50K MRR</div>
                <div className="text-gray-300">20% close rate</div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-gray-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  After
                </div>
                <div className="text-gray-300">20+ demos/month</div>
                <div className="text-gray-300">$200K MRR</div>
                <div className="text-gray-300">35% close rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what business owners say
              about our service.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-blue-900/30"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no
              long-term contracts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-700 hover:border-blue-500 transition-colors bg-gray-800">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2 text-white">
                  Starter
                </CardTitle>
                <div className="text-4xl font-bold text-white mb-2">$2,997</div>
                <div className="text-gray-400">/month</div>
                <CardDescription className="mt-4 text-gray-300">
                  Perfect for small businesses getting started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">
                    10-15 appointments/month
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">
                    Email + LinkedIn outreach
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Basic reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Calendar integration</span>
                </div>
                <Button
                  className="w-full mt-8 bg-gray-700 hover:bg-gray-600 text-white"
                  variant="outline"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative hover:from-blue-800/50 hover:to-purple-800/50 transition-all duration-300 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2 text-white">
                  Growth
                </CardTitle>
                <div className="text-4xl font-bold text-white mb-2">$4,997</div>
                <div className="text-gray-300">/month</div>
                <CardDescription className="mt-4 text-gray-300">
                  Ideal for growing companies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-200">
                    20-25 appointments/month
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-200">Multi-channel outreach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-200">Advanced reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-200">
                    Dedicated account manager
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-200">A/B testing</span>
                </div>
                <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-blue-500 transition-colors bg-gray-800">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2 text-white">
                  Scale
                </CardTitle>
                <div className="text-4xl font-bold text-white mb-2">$7,997</div>
                <div className="text-gray-400">/month</div>
                <CardDescription className="mt-4 text-gray-300">
                  For established businesses ready to scale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">35+ appointments/month</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Full-service outreach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">
                    Custom reporting dashboard
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Priority support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Custom integrations</span>
                </div>
                <Button
                  className="w-full mt-8 bg-gray-700 hover:bg-gray-600 text-white"
                  variant="outline"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              All plans include our 30-day money-back guarantee
            </p>
            <Button
              variant="link"
              className="text-blue-400 hover:text-blue-300"
            >
              Compare all features →
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Fill Your Calendar with Qualified Prospects?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Book a free strategy call to see how we can 3x your appointment
            volume in the next 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <Button
              size="lg"
              className="bg-gray-300 text-blue-900 hover:bg-gray-400 text-lg px-8 py-4"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Strategy Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-gray-300 text-blue-900 hover:bg-gray-400 text-lg px-8 py-4"
            >
              Download Case Study
            </Button>
          </div>
          <div className="mt-8 text-blue-200 text-sm">
            No obligation • 30-minute call • Get a custom strategy
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Target className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">LeadGen Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Done-for-you B2B appointment setting that fills your calendar
                with qualified prospects.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-xs">Li</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-xs">Tw</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Lead Generation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Appointment Setting
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Sales Development
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    CRM Setup
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@leadgenpro.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} LeadGen Pro. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const resources = [
  {
    href: "https://remix.run/start/quickstart",
    text: "Quick Start (5 min)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Tutorial (30 min)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://remix.run/docs",
    text: "Remix Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
