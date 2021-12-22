import { ArrowRightIcon } from "@heroicons/react/outline";


export default function BookingDetailsHeader() {

    return (

        <div className='text-center space-y-4 border-b pb-4'>
            <div className='flex justify-center space-x-4 font-b text-md'>
                <span>Los Angeles International Airport </span> <ArrowRightIcon className='w-4 h-4' /> <span> Los Angeles Convention Center</span>
            </div>


            <div className='text-center'>
                <p>December 25</p>
                <p className='text-'>EV-NA-40222</p>
            </div>

           
        </div>
    )
}