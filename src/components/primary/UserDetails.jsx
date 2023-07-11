import { useState } from 'react'
import { Input } from '../secondary'

const UserDetails = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [month, setMonth] = useState()

    const change = (e) => {
        if (e.target.type === "text") {
            setName(e.target.value)
        } else if (e.target.type === "email") {
            setEmail(e.target.value)
        } else if (e.target.type === "month") {
            setMonth(e.target.value)
        }
    }

    return (
        <div className="lg:w-1/4 md:w-2/4 mx-auto py-4">
            <div className="flex flex-col flex-wrap">
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <Input name="name" id="name" type="text" change={change} value={name} />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <Input name="email" id="email" type="email" change={change} value={email} />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="month" className="leading-7 text-sm text-gray-600">Month</label>
                        <Input name="month" id="month" type="month" change={change} value={month} />
                    </div>
                </div>
                {/* <div className="p-2 w-fit flex justify-start items-end">
                    <div className='relative'>
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default UserDetails