import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; // card
import "./Expenses.css";

import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        console.log('Expenses.js')
        setFilteredYear(selectedYear)
    }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear}/>
        {props.items.map(expense => 
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
        )}
      </Card>
    </div>
  );
};

export default Expenses;
