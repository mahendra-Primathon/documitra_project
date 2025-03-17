import React from 'react'
import Header from '../components/Header';
import { Suspense } from 'react';
import DashboardMyPackages from '../components/DashboardMyPackages';

export default function Dashboard(){
    return (
        <div className="min-h-screen bg-secondary ">
          <div className="max-w-7xl mx-auto">
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardMyPackages/>
            </Suspense>
          </div>
        </div>
    )
};
