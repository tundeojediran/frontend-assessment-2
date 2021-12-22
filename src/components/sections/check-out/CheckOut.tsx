import { Component } from 'react';
import BookingSummaryCard from '../../BookingSummaryCard';
import ContactForm from '../../ContactForm';
import HelpSection from '../../HelpSection';
import PaymentDetailsForm from '../../PaymentDetailsForm';


class CheckOut extends Component<any, any> {

    render() {
        return (
            <>
                <div className='flex space-x-8'>
                    {/* Left column */}
                    <div className='w-2/6 space-y-8'>
                        <div className='bg-white rounded p-6'>
                            <ContactForm/>
                        </div>
                    </div>

                    {/* Middle column */}
                    <div className='w-2/6 space-y-8'>
                        <div className='bg-white rounded p-6'>
                        <PaymentDetailsForm />
                        </div>
                    </div>

                    {/* Right column */}
                    <div className='w-2/6 space-y-8'>
                        <div className='bg-white rounded p-4'>
                            <BookingSummaryCard />
                        </div>

                    </div>

                </div>

                <div className='mx-auto w-3/6'>
                    <HelpSection/>
                </div>


            </>
        )
    }

}

export default CheckOut;