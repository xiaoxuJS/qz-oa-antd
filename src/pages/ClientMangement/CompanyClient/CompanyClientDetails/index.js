import React from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    CompanyClientDetailsAll
} from './style';
import {
    PageHeader
} from 'antd'
const CompanyClientDetails = () => {
    const history = useHistory();
    return <CompanyClientDetailsAll>
        <PageHeader
            className="site-page-header"
            title='详情'
            onBack={() => history.go(-1)}
        ></PageHeader>
    </CompanyClientDetailsAll>
}

export default CompanyClientDetails;