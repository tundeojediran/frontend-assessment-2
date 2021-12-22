
/* This example requires Tailwind CSS v2.0+ */
import {
    LockClosedIcon
} from '@heroicons/react/outline'



export default function PaymentDetailsForm() {

    return (

        <div className="ml-4 flex-1 flex flex-col">
            <div className=" grid gap-6 bg-white px-5 py-6">
                <h1 className='font-bold text-xl text-center'>Payment details </h1>

                <div className='border-b'>
                    <p className='inline-flex font-bold border-blue-600 border-b-2 pb-2'>Pay now</p>
                </div>

                <p>Enter your credit card details and pay for your trip in full today.</p>


                <div className="mt-5 md:mt-0">
                    <form action="#" method="POST">
                        <div className="py-5 bg-white">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Card number
                                    </label>
                                    <input
                                        type="text"
                                        name="card-number"
                                        id="card-number"
                                        autoComplete="card-number"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        CVC
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Month
                                    </label>
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Year
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="phone"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

                <div className='flex border-t py-2'>
                    <LockClosedIcon className='text-green-500 w-6 h-6' />
                    <div className='ml-2'>
                        <p>Secure credit card payment</p>
                        <p className='text-xs'>This is a secure 128-bit SSL encrypted payment</p>
                    </div>
                </div>

            </div>
        </div>

    )
}
