import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
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
} from '@heroicons/react/outline'

const safetyInformation = [
    {
        name: 'New cleaning protocols',
        description: 'All vehicles receive a full hard surface disinfection before every trip.',
        icon: CheckCircleIcon,
    },
    {
        name: 'On-board hand sanitizer',
        description: 'All vehicles receive a full hard surface disinfection before every trip.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Driver masks and gloves',
        description: "All vehicles receive a full hard surface disinfection before every trip.",
        icon: ShieldCheckIcon
    },
    {
        name: 'Custom requirements',
        description: "All vehicles receive a full hard surface disinfection before every trip.",
        icon: CheckCircleIcon,
    },
]

export default function SafetyCard() {

    return (
        <div className="ml-4 flex-1 flex flex-col">
            <div className="grid gap-6 bg-white px-5 py-6">
                <h1 className='font-bold text-2xl text-center'>What we're doing to ensure your health and safety</h1>
                {safetyInformation.map((item) => (
                    <span className='flex'>
                        <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" /><div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </div>
                    </span>
                ))}
            </div>
        </div>
    )
}
