const BreadCrumb = (props) => {
  return (
        <div className="bg-gray-100 w-full shadow-lg rounded-xl">
            <div className="text-center  m-10 py-12">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-600 text-3xl font-poppins font-bold">{props.title}</h1>
                <p className="text-gray-700 font-semibold font-poppins text-lg mt-4">Home / {props.subtitle}</p>
            </div>
        </div>
  )
}

export default BreadCrumb