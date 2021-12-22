
import { LocationMarkerIcon, CheckIcon } from '@heroicons/react/outline'
import BookingDetailsHeader from './BookingDetailsHeader'
import CostBreakdown from './CostBreakdown'

export default function BookingSummaryCard() {

    return (
        <div className="mt-8">
            <BookingDetailsHeader />
            <div className='flex justify-between mt-2'>
                <p>10 passengers</p>
                <p className='flex text-blue-600'>
                    View Itinerary <LocationMarkerIcon className='ml-2 w-4 h-4' />
                </p>
            </div>

            <div className='mt-10'>
                <CostBreakdown />
                <div className='flex'>
                    <div>
                        <input
                            type="text"
                            name="promo-code"
                            id="promo-code"
                            placeholder='Promo code'
                            autoComplete="promo-code"
                            className="focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <button className='flex justify-center w-full py-2 ml-4 text-white bg-blue-600 rounded-md hover:bg-blue-900'>
                            Apply
                        </button>
                    </div>
                </div>
                <div>
                    <button className='flex justify-center w-full py-4 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-900'>
                        Complete booking <span> <CheckIcon className='ml-2 w-4 h-4' /></span>
                    </button>
                </div>

            </div>
        </div>

    )
}
