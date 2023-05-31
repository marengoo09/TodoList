import { AppUI } from "./AppUI";
import { ThemeProvider } from "./contexts/themeContext";
import { TodoProvider } from "./contexts/todoContext";

function App() {

  return (
    <ThemeProvider>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
