import { useEffect, useState, memo } from 'react'
import { ExpenseDiv, Input, CostDiv } from '../secondary'
import UserDetails from './UserDetails'

const MainBody = () => {
    const [necessity, setNecessity] = useState('')
    const [cost, setCost] = useState(0)
    const [list, setList] = useState([])

    // onchange function for inputs
    const change = (e) => {
        if (e.target.type === "text") {
            setNecessity(e.target.value)
        } else if (e.target.type === "number") {
            setCost(e.target.value)
        }
    }

    // add a new expense div to list
    const addCost = (e) => {
        e.preventDefault()

        if (necessity !== '') {
            setList([...list, { necessity, cost }])
            setNecessity('')
            setCost(0)
        }
    }

    const [total, setTotal] = useState(0)

    // calculate the total cost when the list is updated
    useEffect(() => {
        let cost = 0
        list.forEach(item => {
            cost = Math.floor(Number(cost) + Number(item.cost))
        })
        setTotal(cost)
    }, [list])

    const clearExpenses = () => {
        setList([])
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 pt-14 pb-20 mx-auto">
                <div className="flex flex-col text-start w-full pb-6 mb-6 px-2">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Cost/Expense Plan</h1>
                    <p className="lg:w-2/3 leading-relaxed text-base">Keep a good track of your expenses.</p>
                </div>
                <div className='w-full flex flex-col justify-between gap-4 h-[600px]'>
                    <div className='w-full flex gap-8'>
                        <UserDetails />

                        <div className="lg:w-3/4 md:w-2/4 mx-auto flex max-h-[500px] overflow-y-auto border rounded p-4">
                            <div className='w-full mx-auto flex flex-col items-end justify-start gap-2 h-fit'>
                                {
                                    // rendering the cost details divs that gets added.
                                    list.map((item, i) => (
                                        <CostDiv expense={item} key={i} k={i+1} />
                                        // here key can't be passed or accessed as a prop so passing the value to k. But key is necessary for JSX array.map rendering so it is added.
                                    ))
                                }

                                <ExpenseDiv change={change} necessity={necessity} cost={cost} important={true} addCost={addCost} />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-center items-center gap-4 mt-8'>
                        <div className='py-2 px-6 w-fit h-fit text-2xl font-extrabold text-blue-800 flex items-center'>
                            <span>Total: &nbsp;</span>
                            <div className='border rounded px-4 py-2 text-orange-950 w-48 text-end'>
                                {total} <span className='text-gray-600 font-normal text-base'>Rs</span>
                            </div>
                        </div>
                        <button className='flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg h-fit'>Save Session</button>
                        <button className='flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg h-fit' onClick={clearExpenses}>Clear Expenses</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(MainBody)