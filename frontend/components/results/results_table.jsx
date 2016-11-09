import React from 'react';
import { Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
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
              <TableHeaderColumn colSpan="2">
                <h2>{this.props.question.order + ". " + this.props.question.text}</h2>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn><h3>STUDENT</h3></TableHeaderColumn>
              <TableHeaderColumn><h3>RESPONSE</h3></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
          >
            {this.props.question.responses.map((response, idx) => (
              <TableRow key={idx}>
                <TableRowColumn>{response.student_id}</TableRowColumn>
                <TableRowColumn>{response.value}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    );
  }
}

export default ResultsTable;
