import './App.css';
import data from './data'
import CompanyCard from './CompanyCard/CompanyCard'

function App() {
    return (
        <div className="App">
            <h1>Company Data</h1>
            {
                data.map((company,i) => {
                    return (
                        <CompanyCard companyInfo={company} key={i}/>
                    )
                })
            }
        </div>
    );
}

export default App;
