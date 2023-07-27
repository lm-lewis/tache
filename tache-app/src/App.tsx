import { useState } from "react";
import "./Styles/styles.css";
import Filter from "./components/Filter/TacheFilter";
import List from "./components/List/TacheList";
import Form from "./components/Form/TacheForm";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 333, description: "electricity", amount: 30, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <main>
      <Filter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <Form
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <List
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </main>
  );
};
export default App;