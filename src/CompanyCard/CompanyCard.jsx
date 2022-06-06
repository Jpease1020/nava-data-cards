import React, {useState} from 'react';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

const CompanyCard = ({companyInfo}) => {
    const [buttonText, setButtonText] = useState('Show more');
    const [displayBaseData, setDisplayBaseData] = useState(false);
    
    const toggleExtraDataDisplay = () => {
        setDisplayBaseData(!displayBaseData)
        setButtonText(displayBaseData ? 'Show more' : 'Show less')
    }
    
    const formatMoney = (num) => {
        if(num > 999999){
            return (num / 1000000).toFixed(2) + 'M' 
        } else if (num > 999){
            return (num / 1000).toFixed(2) + 'k'
        } else {
            return num
        }
    }
    
    const upperRow = (title, data) => {
        return (
            <div>
                <p>{title}</p>
                <div><strong>{data}</strong></div>
            </div>
        )
    }
    
    return (
        <div className={'company-card'}>
            <h2 className={'title'}>{companyInfo['company_name']}</h2>
            <div className={'card-body-upper'}>
                {upperRow('State',companyInfo['company_state'])}
                {upperRow('Employees',companyInfo['employee_count'])}
                {upperRow('Year',companyInfo['plan_year'])}
            </div>
            <hr/>
            <div className={'show-more-container'} onClick={toggleExtraDataDisplay}>
                <div className={'toggle-button'} >{buttonText}</div>
                {
                    displayBaseData ? <AiFillCaretUp size={20} color={'#0000ffb3'}/> : <AiFillCaretDown size={20} color={'#0000ffb3'}/> 
                }
            </div>
            {
                displayBaseData ?
                    <div className={'card-body-lower'}>
                        <div className={'spacer-div'}/>
                        <div className={'content-div'}>
                            <div><strong>Premium:</strong> ${formatMoney(companyInfo['premium_sum'])}</div>
                            <div><strong>Participants:</strong> {companyInfo['participants_sum']}</div>
                            <div><strong>Broker Commission:</strong> ${formatMoney(companyInfo['broker_commission_sum'])}</div>
                        </div>
                        <div className={'spacer-div'}></div>
                    </div>
                : null
            }
        </div>
    )
}

export default CompanyCard
