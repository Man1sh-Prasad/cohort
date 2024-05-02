export default function App() {
  return (
    <>

    {/* flex */}
      {/* <div className="flex justify-evenly">
        <div className="bg-yellow-500">hello</div>
        <div className="bg-yellow-500">hello</div>
        <div className="bg-yellow-500">hello</div>
      </div> */}


      {/* grid */}
      {/* <div className="grid grid-cols-10">
        <div className="bg-yellow-500 col-span-4">hello</div>
        <div className="bg-blue-500 col-span-3">hello</div>
        <div className="bg-green-500 col-span-3">hello</div>
        <div className="bg-yellow-500 col-span-3">hello</div>
        <div className="bg-blue-500 col-span-3">hello</div>
        <div className="bg-green-500 col-span-4">hello</div>
      </div> */}

      {/* responsivenss */}
      <div className="grid grid-cols-1 md:grid-cols-9">
        <div className="bg-yellow-500 col-span-3">hello</div>
        <div className="bg-blue-500 col-span-3">hello</div>
        <div className="bg-green-500 col-span-3">hello</div>
      </div>
    </>
  )
}
