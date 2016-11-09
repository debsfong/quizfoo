import React from 'react';
import { Link } from 'react-redux';
import ResultsSidebar from './results_sidebar';
import ResultsTable from './results_table';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results-box">
        <ResultsSidebar />
        <ResultsTable />
      </div>
    );
  }
}

export default Results;
