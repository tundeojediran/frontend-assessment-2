
/* This example requires Tailwind CSS v2.0+ */
import CostBreakdown from './CostBreakdown'



export default function SelectedBusDetails() {

    return (
        <div className="mt-8">

            <div className="flex-1 flex flex-col">
                <div>
                    <CostBreakdown />

                    <div>
                        <button className='font-medium w-full py-4 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-900'>
                            Continue to payment <span> &rarr;</span>
                        </button>
                    </div>

                    <div>
                        <button className='font-medium w-full py-4 mt-4 text-blue-600 bg-gray-100 rounded-md hover:bg-gray-300'>
                            Book now, pay later <span> &rarr;</span>
                        </button>
                    </div>

                </div>
            </div>

        </div>

    )
}
