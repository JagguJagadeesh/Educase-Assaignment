

const Input = ({ label, type = "text", name, value, onChange , placeholder='', className }) => {

  return (
    <div className="relative mt-2 z-0 w-full group">
    <label htmlFor={name} className={`font-medium text-xs rounded  bg-white relative px-1 text-violet-600 top-3 left-3 w-auto duration-300`}> {label} <span className="text-red-600">*</span> </label>
    <input onChange={onChange} type={type} value={value} name={name} id={name} className={`h-full text-black border-gray-500 border-2 pl-4  text-sm rounded-lg focus:border-gray-500 block w-full ${className} `}
        required="" placeholder={placeholder}/>
    </div>
  );
};

export default Input;
