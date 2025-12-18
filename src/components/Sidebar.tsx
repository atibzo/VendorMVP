import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  CalendarDaysIcon, 
  UsersIcon, 
  BookOpenIcon,
  SparklesIcon,
  MapPinIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  PhotoIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed }: SidebarProps) {
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon, disabled: true },
    { name: 'Nimbus Houses', href: '/houses', icon: BuildingOfficeIcon, disabled: true },
    { name: 'Availability View', href: '/availability', icon: CalendarDaysIcon, disabled: true },
    { name: 'Visitors', href: '/visitors', icon: UsersIcon, disabled: true },
    { name: 'Bookings', href: '/bookings', icon: BookOpenIcon, disabled: true },
    { name: 'Showcase', href: '/showcase', icon: SparklesIcon, disabled: true },
    { name: 'Trip', href: '/trip', icon: MapPinIcon, disabled: true },
    { name: 'Trip Booking', href: '/trip-booking', icon: BookOpenIcon, disabled: true },
  ];

  const supplyNavigation = [
    { name: 'Vendors', href: '/supply/vendors', icon: UsersIcon, disabled: false },
    { name: 'Properties', href: '/supply/properties', icon: BuildingOfficeIcon, disabled: false },
    { name: 'Media', href: '/supply/media', icon: PhotoIcon, disabled: false },
    { name: 'Licenses & Compliance', href: '/supply/licenses', icon: DocumentCheckIcon, disabled: false },
  ];

  return (
    <div className={`bg-gray-800 border-r border-gray-700 flex flex-col transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navigation.map((item) => (
            item.disabled ? (
              <div
                key={item.name}
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-500 cursor-not-allowed"
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {!collapsed && item.name}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {!collapsed && item.name}
              </NavLink>
            )
          ))}
          
          <div className="pt-4 pb-2">
            <div className="px-2">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {!collapsed && 'Supply'}
              </span>
            </div>
          </div>
          
          {supplyNavigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {!collapsed && item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}