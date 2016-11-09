import React from 'react';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ResultsSidebar extends React.Component {
  render() {
    return (
      <div className="results-sidebar">
        <Table
          className="results-sidebar"
          fixedHeader={true}
          selectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>Student Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
          >
            <TableRow>
              <TableRowColumn>John Smith</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Randal White</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Steve Brown</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ResultsSidebar;
