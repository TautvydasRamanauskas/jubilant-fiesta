import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/search-actions';
import Result from "./Result";
import {Table, TableBody} from 'material-ui/Table';
import GenerateReport from "./GenerateReport";
import LinkGenerateWrapper from "./LinkGenerateWrapper";

const style = {
    backgroundColor: 'transparent',
    color: 'white',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '5px solid #e91e63',
};

const Results = ({
                     linkEnable,
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
            <Result
                key={r.id}
                number={i}
                result={r}
                onBookmarkClick={r => changeBookmark(r, user)}
                addVote={v => addVote({...v, user})}
                removeVote={v => removeVote({...v, user})}
            />
        );
        return (
            <div className="search-results">
                <Table style={style}>
                    <TableBody showRowHover={true} stripedRows={true}>
                        {resultRows}
                    </TableBody>
                </Table>
                <LinkGenerateWrapper enabled={linkEnable} link={generatedLink}
                                     onGenerate={() => generateLink(results)}/>
                <GenerateReport onClick={e => generateReport(results)}/>
            </div>
        )
    }
    return null;
};

const mapStateToProps = state => ({
    results: state.search.results,
    generatedLink: state.search.generatedLink,
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Results);
