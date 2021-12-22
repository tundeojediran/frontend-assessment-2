

const busTypes = [
    {
        id: 1,
        name: 'Sprinter van',
        passengers: 14,
        description: 'The Sprinter van is a great alternative for small groups who are travelling a short distance.',
        price: '$448.00',
        imageSrc: 'https://www.freepnglogos.com/uploads/bus-png/the-bus-with-its-eyes-closed-andrea-longini-10.png',
    },
    {
        id: 2,
        name: 'School bus van',
        passengers: 47,
        description: 'Classic school buses are an affordable option that are best suited for small groups on short trips.',
        price: '$498.00',
        imageSrc: 'https://www.freepnglogos.com/uploads/bus-png/the-bus-with-its-eyes-closed-andrea-longini-10.png',
    },
    {
        id: 3,
        name: 'Sprinter van',
        passengers: 14,
        description: 'The Sprinter van is a great alternative for small groups who are travelling a short distance.',
        price: '$448.00',
        imageSrc: 'https://www.freepnglogos.com/uploads/bus-png/the-bus-with-its-eyes-closed-andrea-longini-10.png',
    },
    {
        id: 4,
        name: 'School bus van',
        passengers: 47,
        description: 'Classic school buses are an affordable option that are best suited for small groups on short trips.',
        price: '$498.00',
        imageSrc: 'https://www.freepnglogos.com/uploads/bus-png/the-bus-with-its-eyes-closed-andrea-longini-10.png',
    },
    {
        id: 5,
        name: 'Sprinter van',
        passengers: 14,
        description: 'The Sprinter van is a great alternative for small groups who are travelling a short distance.',
        price: '$448.00',
        imageSrc: 'https://www.freepnglogos.com/uploads/bus-png/the-bus-with-its-eyes-closed-andrea-longini-10.png',
    },
]

export default function BusList() {

    return (
        <div className="mt-8">

            <ul role="list" className="-my-6 divide-y divide-gray-200">
                {busTypes.map((bus) => (
                    <li key={bus.id} className="py-6 px-6 flex">
                        <div className="flex-shrink-0 w-48 h-48 rounded-md overflow-hidden">
                            <img
                                src={bus.imageSrc}
                                alt={bus.name}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <div className='flex'>
                                        <h1 className='text-2xl mr-4'>
                                            {bus.name}
                                        </h1>
                                        <input type='number' className='w-20 h-8 rounded' />
                                    </div>

                                    <p className="ml-4">{bus.price}</p>
                                </div>
                                <small className="mt-2 text-sm text-gray-500">Seats a total of {bus.passengers} passengers</small>
                                <p className="mt-2 text-sm text-gray-500">{bus.description}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">

                                <div className="flex">

                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </div>

    )
}
