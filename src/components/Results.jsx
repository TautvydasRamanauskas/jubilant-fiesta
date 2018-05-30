import React from 'react';
import LinkGenerate from "./LinkGenerate";
import Result from "./Result";

const Results = ({
                     results, onBookmarkClick, addVote,
                     removeVote, onGenerateReport,
                     onGenerateLink, generatedLink
                 }) => (
    <div className="search-results">
        <table>
            <tbody>
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
            </tbody>
        </table>
        <LinkGenerate link={generatedLink} onGenerateLink={onGenerateLink}/>
        <button className="table-button" onClick={e => onGenerateReport()}>Generate Report</button>
    </div>
);

export default Results