import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './mainDash.css';

const MainDash = () => {
    return (
        <div className='mainDash'>
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    );
}
 
export default MainDash;