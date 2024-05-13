import './App.css';
import CustomTable from './components/Table';
import { checksData, tableData } from './data/mock_data';

function App() {
  return (
    <>
      <CustomTable data={tableData} checksData={checksData} />
    </>
  );
}

export default App;
