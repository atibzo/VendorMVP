import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PropertiesPage } from './pages/supply/PropertiesPage';
import { VendorsPage } from './pages/supply/VendorsPage';
import { VendorDetailPage } from './pages/supply/VendorDetailPage';
import { PropertyDetailPage } from './pages/supply/PropertyDetailPage';
import { RoomTypesPage } from './pages/supply/RoomTypesPage';
import { RoomTypeEditorPage } from './pages/supply/RoomTypeEditorPage';
import { CalendarPage } from './pages/supply/CalendarPage';
import { RatesPage } from './pages/supply/RatesPage';
import { MediaPage } from './pages/supply/MediaPage';
import { LicensesPage } from './pages/supply/LicensesPage';
import { PropertyDetailsPage } from './pages/PropertyDetailsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/supply/properties" replace />} />
            <Route path="/supply/properties" element={<PropertiesPage />} />
            <Route path="/supply/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/supply/properties/:id/room-types" element={<RoomTypesPage />} />
            <Route path="/supply/properties/:propertyId/room-types/:roomTypeId" element={<RoomTypeEditorPage />} />
            <Route path="/supply/properties/:id/calendar" element={<CalendarPage />} />
            <Route path="/supply/properties/:id/rates" element={<RatesPage />} />
            <Route path="/supply/vendors" element={<VendorsPage />} />
            <Route path="/supply/vendors/:id" element={<VendorDetailPage />} />
            <Route path="/supply/media" element={<MediaPage />} />
            <Route path="/supply/licenses" element={<LicensesPage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;