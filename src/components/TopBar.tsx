import React, { useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { PropertyStepper } from './PropertyStepper';

export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [showPropertyStepper, setShowPropertyStepper] = useState(false);

  return (
    <>
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-white">Zo VMS</h1>
            <span className="text-sm text-gray-400">Stay-First Admin</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
              >
                <MagnifyingGlassIcon className="h-4 w-4" />
                <span className="text-sm">Search</span>
                <kbd className="text-xs bg-gray-600 px-2 py-1 rounded">⌘K</kbd>
              </button>
            </div>
            
            <button 
              onClick={() => setShowAddVendor(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
            >
              <PlusIcon className="h-4 w-4" />
              <span>Add Vendor</span>
            </button>
            
            <button 
              onClick={() => setShowPropertyStepper(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <PlusIcon className="h-4 w-4" />
              <span>Add Property</span>
            </button>
          </div>
        </div>
      </div>

      {/* Property Stepper */}
      {showPropertyStepper && (
        <PropertyStepper onClose={() => setShowPropertyStepper(false)} />
      )}
    </>
  );
}
