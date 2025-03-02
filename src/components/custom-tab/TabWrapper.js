import { Tab } from "./Tab";
import { TodoWrapper} from '../TodoWrapper';
import { useTheme } from '../ThemeProvider';

// order of import matter!!(NOT SURE) as if import useTheme before TodoWrapper cause error
// 

export default function TabWrapper() {

  const { theme } = useTheme();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const tabs = days.map(day => ({
    label: day,
    content: <TodoWrapper day={day} /> // Pass day prop
}));

  function handleChange(currentTabIndex) {
    console.log(`Switched to: ${days[currentTabIndex]}`);
  }

  return <Tab tabContent={tabs} onChange={handleChange} theme={theme} />;
}