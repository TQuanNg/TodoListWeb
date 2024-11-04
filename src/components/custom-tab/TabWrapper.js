import { Tab } from "./Tab";
import { TodoWrapper} from '../TodoWrapper';
import { useTheme } from '../ThemeProvider';

// order of import matter!!(NOT SURE) as if import useTheme before TodoWrapper cause error
// 

export default function TabWrapper() {

  const { theme } = useTheme();

  const tabs = [
    {
      label: "Monday",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tuesday",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Wednesday",
      content: <TodoWrapper />
    },
    {
        label: "Thursday",
        content: <TodoWrapper />,
    },
    {
        label: "Friday",
        content: <TodoWrapper />,
    },
    {
        label: "Saturday",
        content: <TodoWrapper />,
    },
    {
        label: "Sunday",
        content: <TodoWrapper />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tab tabContent={tabs} onChange={handleChange} theme={theme} />;
}