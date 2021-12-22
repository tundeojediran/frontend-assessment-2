import { Component } from 'react';
import BusList from '../../BusList';
import {
  LocationMarkerIcon,
  MailIcon,
} from '@heroicons/react/outline'
import SelectedBusDetails from '../../SelectedBusDetailsCard';
import SafetyCard from '../../SafetyCard';
import HelpSection from '../../HelpSection';
import BookingDetailsHeader from '../../BookingDetailsHeader';

class ReviewPrices extends Component<any, any> {

  render() {
    return (
      <>
        <div className='flex space-x-8'>
          {/* Left column */}
          <div className='w-3/5 space-y-8'>

            <div className='bg-white rounded p-6'>
              <BookingDetailsHeader />
              <div className='flex justify-center space-x-4 mt-4 text-blue-600'>
                <p className='flex'>View itinerary <LocationMarkerIcon className='w-4 h-4' /> </p>
                <p className='flex'>Share prices <MailIcon className='w-4 h-4' /></p>
              </div>
              <BusList />
            </div>

            <div>
              <HelpSection />
            </div>

          </div>

          {/* Right column */}
          <div className='w-2/5 space-y-8'>

            <div className='bg-white rounded'>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={'images/banner.png'}
                  alt={'advert banner'}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
            </div>

            <div className='bg-white rounded p-4'>
              <SelectedBusDetails />
            </div>

            <div className='bg-white rounded p-4'>
              <SafetyCard />
            </div>




          </div>


        </div>



      </>
    )
  }

}

export default ReviewPrices;