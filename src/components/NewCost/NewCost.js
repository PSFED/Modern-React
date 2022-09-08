import { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'

const NewCost = ({ onAddCost }) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }

    onAddCost(costData)
    setIsFormVisible(false)
  }

  const inputCostDataHandler = () => {
    setIsFormVisible(true)
  }

  const cancelCostHandler = () => {
    setIsFormVisible(false)
  }

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Add a new expense</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  )
}

export default NewCost
