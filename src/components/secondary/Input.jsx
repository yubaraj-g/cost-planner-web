import { memo } from 'react'

const Input = ({ name, type, change, value, important, id }) => {

    return (
        <input type={type} name={name} id={id} className="w-full bg-blue-100 bg-opacity-50 rounded border-b border-blue-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={change} value={value} important={important ? 'true' : 'false'} />
    )
}

export default memo(Input, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
})