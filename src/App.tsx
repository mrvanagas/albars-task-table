import './App.css';
import CustomTable from './components/Table';
import { tableData } from './data/mock_data';

function App() {
  return (
    <>
      <CustomTable data={tableData} />
    </>
  );
}

export default App;
