import React from 'react';
import Button from "../Button";
import ReportImage from 'material-ui/svg-icons/action/description';

const GenerateReport = ({onClick}) => (
    <Button
        className="table-button"
        onClick={onClick}
        text="Generate Report"
        icon={<ReportImage/>}
    />
);

export default GenerateReport;
