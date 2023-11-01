import ColorBox from "./componenets/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./componenets/SelectColors";
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
