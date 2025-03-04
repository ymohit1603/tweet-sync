import Image from "next/image"
import {
  Bell,
  ChevronDown,
  Clock,
  Copy,
  FileText,
  HelpCircle,
  Home,
  MessageSquare,
  Settings,
  Sparkles,
  
} from "lucide-react"
import { LinkedIn } from "@mui/icons-material"
import XIcon from '@mui/icons-material/X';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <XIcon className="h-5 w-5 text-blue-500" />
          
          
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            TweetSync
          </span>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-blue-600 bg-blue-50 rounded-md">
                <Home className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Clock className="w-5 h-5 mr-3" />
                <span>Sync/History</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <HelpCircle className="w-5 h-5 mr-3" />
                <span>Help</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Welcome Section */}
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
              <XIcon className="h-5 w-5 text-blue-500" />
          
          
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            TweetSync
          </span>
              </div>
            </div>
            <h1 className="text-xl font-semibold text-center mb-2">Welcome to TweetSync</h1>
            <p className="text-gray-600 text-center text-sm mb-6">Sync your tweets to create awesomely</p>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2 px-4 rounded-md hover:cursor-pointer transition-colors">
              <XIcon width={20} height={20} />
                Continue with X
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2 px-4 rounded-md hover:cursor-pointer transition-colors">
                <LinkedIn width={20} height={20} />
                Continue with LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* User Dashboard (Hidden initially, would show after login) */}
        <div className="hidden flex-1 p-6 bg-gray-50 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-xl font-semibold">Welcome back, Alex!</h1>
                <p className="text-sm text-gray-600">Manage your social synchronization</p>
              </div>
              <div className="flex items-center">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="flex items-center ml-4">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Copy className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Direct Copy</h3>
                  <p className="text-xs text-gray-500">Post your tweets directly to other platforms like LinkedIn</p>
                </div>
                <div className="ml-4">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">AI Rewriter</h3>
                  <p className="text-xs text-gray-500">Let AI adapt your content for a professional audience</p>
                </div>
                <div className="ml-4">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold">Recent Syncs</h2>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Just launched our new Thread Chain! It will automatically...</p>
                      <p className="text-xs text-gray-500 mt-1">10 minutes ago • 2 platforms</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                      <MessageSquare className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium">Excited to announce our latest partnership with...</p>
                      <p className="text-xs text-gray-500 mt-1">20 minutes ago • 3 platforms</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <Clock className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">We&apos;re busy cooking up fantastic features...</p>
                      <p className="text-xs text-gray-500 mt-1">35 minutes ago • 4 sites</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

