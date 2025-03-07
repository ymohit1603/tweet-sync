import Link from "next/link"
import {  Linkedin } from "lucide-react"
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 text-gray-700 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <XIcon className="h-5 w-5" />
              <span className="font-semibold">Tweet-Sync</span>
            </div>
            <p className="text-sm text-gray-600">Automating your social media presence</p>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">© 2025 Tweet-Sync. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <h3 className="text-sm mr-2">Connect</h3>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
