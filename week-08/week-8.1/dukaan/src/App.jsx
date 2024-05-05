import { RevenueCard } from "./components/RevenueCard"

function App() {

  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={'Amount Pending'} orderCount={"13"} amount={"12,34,567"}/>
    </div>
  )
}

export default App
