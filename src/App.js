import axios from 'axios';
import './App.css';
import CompanyInfo from './data'
import CompanyCard from './CompanyCard/CompanyCard'
import {useEffect, useState} from 'react'

function App() {
    const [companiesData, setCompaniesData] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            //const {data} = await axios.get('https://someUrl')
            const data = CompanyInfo // mock data with this until I have the real url
            if(data) setCompaniesData(data)
        }
        
        fetchData().catch((error) => console.log(error))
    }, [])
    
    return (
        <div className="App">
            <h1>Company Data</h1>
            {companiesData.length ?
                companiesData.map((company,i) => {
                    return (
                        <CompanyCard companyInfo={company} key={i}/>
                    )
                })
                : null
            }
        </div>
    );
}

export default App;
