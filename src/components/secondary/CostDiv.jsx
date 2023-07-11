import { memo } from 'react'

const CostDiv = ({ expense, k }) => {
    const { necessity, cost } = expense

    return (
        <div className="flex flex-wrap w-full" id={'cost-div-'+k}>
            <div className="p-2 w-2/3">
                <div className="relative">
                    <label htmlFor="necessity" className="leading-7 text-sm text-gray-600">Necessity</label>
                    <div className="w-full rounded bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{necessity}</div>
                </div>
            </div>
            <div className="p-2 w-1/3">
                <div className="relative">
                    <label htmlFor="cost" className="leading-7 text-sm text-gray-600">Cost</label>
                    <div className="w-full rounded bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{cost}</div>
                </div>
            </div>
        </div>
    )
}

export default memo(CostDiv)