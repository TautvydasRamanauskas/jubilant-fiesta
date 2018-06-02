import React from 'react';
import LinkGenerate from "./LinkGenerate";
import Result from "./Result";
import Button from "./Button";
import {Table, TableBody} from 'material-ui/Table';
import ReportImage from 'material-ui/svg-icons/action/description';

const style = {
    backgroundColor: 'transparent',
    color: 'white',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '5px solid #e91e63',
};

const Results = ({
                     results, onBookmarkClick, addVote,
                     removeVote, onGenerateReport,
                     onGenerateLink, generatedLink
                 }) => (
    <div className="search-results">
        <Table style={style}>
            <TableBody
                showRowHover={true}
                stripedRows={true}
            >
                {results.map((r, i) =>
                    <Result
                        key={r.id}
                        number={i}
                        result={r}
                        onBookmarkClick={onBookmarkClick}
                        addVote={addVote}
                        removeVote={removeVote}
                    />
                )}
            </TableBody>
        </Table>
        <LinkGenerate link={generatedLink} onGenerateLink={onGenerateLink}/>
        <Button onClick={e => onGenerateReport()} text="Generate Report" icon={<ReportImage/>}
                className="table-button"/>
    </div>
);

export default Results