import { Disclosure } from '@headlessui/react';
import React from 'react';
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    CheckCircleIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
    PhoneOutgoingIcon,
    ShieldExclamationIcon,
    QuestionMarkCircleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@heroicons/react/outline'


export default function HelpSection() {

    return (

        <div
            className='mt-10 bg-white rounded-md'
        // style={{
        //     backgroundImage: `url('https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg)`
        // }}
        >
            <div className="w-full h-24 aspect-w-1 aspect-h-1 bg-gray-200 border-b-4 border-b-blue-600 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg'}
                    alt={'help-section-header'}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
                <div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex align-middle py-2 space-x-2">
                                    <PhoneOutgoingIcon className='w-4 h-4' /> <p>Need help booking</p> <ChevronDownIcon className={`${open ? "transform rotate-90" : ""} w-4 h-4'`} />
                                </Disclosure.Button>
                                <Disclosure.Panel static className="text-blue-600">
                                    <a href='#'>Connect with one of our booking specialists today</a>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>


                <div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex align-middle py-2 space-x-2">
                                    <ShieldExclamationIcon className='w-4 h-4' /> <p>Payment & policies</p> <ChevronDownIcon className={`${open ? "transform rotate-90" : ""} w-4 h-4'`} />
                                </Disclosure.Button>
                                <Disclosure.Panel static className="text-blue-600">
                                    <p><a href='#'>Book now, pay later</a></p>
                                    <p><a href='#'>Book now, pay later</a></p>
                                    <p><a href='#'>Book now, pay later</a></p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>


                <div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex align-middle py-2 space-x-2">
                                    <QuestionMarkCircleIcon className='w-4 h-4' />  <p>Common Questions</p> <ChevronDownIcon className={`${open ? "transform rotate-90" : ""} w-4 h-4'`} />
                                </Disclosure.Button>
                                <Disclosure.Panel static className="text-blue-600">
                                    <a href='#'>How does Bus.com work?</a>
                                    <a href='#'>How does Bus.com work?</a>
                                    <a href='#'>How does Bus.com work?</a>
                                </Disclosure.Panel>
                            </>
                        )}

                    </Disclosure>
                </div>
            </div>
        </div>
    )
} 