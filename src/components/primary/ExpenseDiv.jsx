import { memo } from 'react'
import { Input } from '../secondary'

const ExpenseDiv = ({ change, id, necessity, cost, important, addCost }) => {
    return (
        <>
            <form className='flex flex-col flex-wrap w-full' onSubmit={addCost}>
                <div className="flex flex-wrap w-full" id={id}>
                    <div className="p-2 w-2/3">
                        <div className="relative">
                            <label htmlFor="necessity" className="leading-7 text-sm text-gray-600">Necessity</label>
                            <Input name="necessity" id="necessity" type="text" change={change} value={necessity} important={important} />
                        </div>
                    </div>
                    <div className="p-2 w-1/3">
                        <div className="relative">
                            <label htmlFor="cost" className="leading-7 text-sm text-gray-600">Cost</label>
                            <Input name="cost" id="cost" type="number" change={change} value={cost} />
                        </div>
                    </div>
                </div>

                <div className='px-2 mt-4 flex w-full justify-end'>
                    <button
                        className='text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                        type="submit"
                    >+</button>
                </div>
            </form>
        </>
    )
}

export default memo(ExpenseDiv)