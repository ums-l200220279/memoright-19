import Link from "next/link"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-turquoise-50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-turquoise-900">Memoright</h3>
            <p className="text-sm text-turquoise-700">
              AI-powered cognitive health platform for dementia screening and therapy.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-turquoise-500 hover:text-turquoise-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-turquoise-500 hover:text-turquoise-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-turquoise-500 hover:text-turquoise-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-turquoise-500 hover:text-turquoise-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-turquoise-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-turquoise-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-sm text-turquoise-700 hover:text-turquoise-500">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-turquoise-900">Contact</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-turquoise-500" />
              <span className="text-sm text-turquoise-700">support@memoright.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-turquoise-500" />
              <span className="text-sm text-turquoise-700">+1 (555) 123-4567</span>
            </div>
            <p className="text-sm text-turquoise-700">123 AI Avenue, Silicon Valley, CA 94000</p>
          </div>
        </div>

        <div className="mt-8 border-t border-turquoise-200 pt-8 text-center">
          <p className="text-sm text-turquoise-700">
            &copy; {new Date().getFullYear()} Memoright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

