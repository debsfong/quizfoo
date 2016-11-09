import React from 'react';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results-table" >
        <Table
          fixedHeader={true}
          selectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>Student</TableHeaderColumn>
              <TableHeaderColumn>Response</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
          >
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>

    );
  }
}

export default ResultsTable;
