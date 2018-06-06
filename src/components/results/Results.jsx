import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/search-actions';
import ResultCard from "./ResultCard";
import GenerateReport from "./GenerateReport";
import LinkGenerateWrapper from "./LinkGenerateWrapper";

const Results = ({
                     linkEnable,
                     resultsFetched,
                     results,
                     generatedLink,
                     user,
                     changeBookmark,
                     generateLink,
                     addVote,
                     removeVote,
                     generateReport,
                 }) => {
    if (results.length > 0) {
        const resultRows = results.map((r, i) =>
            <ResultCard
                key={r.id}
                number={i}
                result={r}
                onBookmarkClick={r => changeBookmark(r, user)}
                addVote={v => addVote({...v, user})}
                removeVote={v => removeVote({...v, user})}
            />
        );
        return (
            <div>
                <div className="search-results">
                    {resultRows}
                </div>
                <LinkGenerateWrapper enabled={linkEnable} link={generatedLink}
                                     onGenerate={() => generateLink(results)}/>
                <GenerateReport onClick={e => generateReport(results)}/>
            </div>
        )
    }
    if (resultsFetched) {
        return <h3>No results found</h3>;
    }
    return null;
};

const mapStateToProps = state => ({
    resultsFetched: state.search.resultsFetched,
    results: state.search.results,
    generatedLink: state.search.generatedLink,
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Results);
