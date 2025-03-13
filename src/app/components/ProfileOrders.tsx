// components/ProfileOrders.tsx
"use client";
import React from 'react';
import { OrderData } from '../constants/userProfileData';

interface ProfileOrdersProps {
  ordersData: OrderData[];
}

const ProfileOrders: React.FC<ProfileOrdersProps> = ({ ordersData }) => {
  return (
    <div className="space-y-4">
      {ordersData.map((order, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">{order.date}</p>
              <h3 className="font-medium">{order.type}</h3>
              <p className="text-sm text-gray-500">{order.documentId}</p>
              <div className="flex space-x-6">
                <div>
                  <p className="text-sm text-gray-500">Tracking#</p>
                  <p className="text-sm">{order.trackingId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-sm">${order.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary text-white text-sm rounded-md">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileOrders;