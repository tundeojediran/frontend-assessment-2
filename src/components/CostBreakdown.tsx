export default function CostBreakdown() {


    return (
        <>
            <p className='text-center text-2xl font-bold'>Sprinter van x 1</p>
            <div className="flex justify-between text-base font-medium text-gray-900 m-4 p-2">
                <h1>
                    {'Sprinter van x 1 with Driver'}
                </h1>
                <p className="ml-4">{'$447.99'}</p>
            </div>

            <div className="flex justify-between text-base font-medium text-gray-900 m-4 p-2">
                <h1 className='underline'>
                    {'Service fee'}
                </h1>
                <p className="ml-4">{'$17.18'}</p>
            </div>

            <div className="flex justify-between text-base font-medium text-gray-900 m-4 p-2">
                <h1 className='underline'>
                    {'Gratuity'}
                </h1>
                <p className="ml-4">{'$17.18'}</p>
            </div>

            <div className="flex justify-between text-base font-bold text-gray-900 border-t border-gray-200 m-4 p-2">
                <h1>
                    {'Subtotal'}
                </h1>
                <p className="ml-4">{'$17.18'}</p>
            </div>

            <div className="flex justify-between text-base font-medium text-gray-900 m-4 p-2">
                <h1 className='underline'>
                    {'FICAV'}
                </h1>
                <p className="ml-4">{'$17.18'}</p>
            </div>

            <div className="flex justify-between text-base font-bold text-gray-900 border-t border-gray-200 m-4 p-2">
                <h1>
                    {'Total (USD)'}
                </h1>
                <p className="ml-4">{'$17.18'}</p>
            </div>
        </>
    )
}