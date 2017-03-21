import React from 'react';
import { Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ResultsSidebar extends React.Component {
  constructor(props) {
    super(props);
    this._onRowSelection = this._onRowSelection.bind(this);
  }

  _onRowSelection(key) {
    this.props.containerThis.setState({
      question: this.props.questions[key]
    });
  }

  render() {
    return (
      <Tabs className="results-sidebar">
        <Tab label="Questions" >
          <Table fixedHeader={true} selectable={true} onRowSelection={this._onRowSelection}>
            <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
              {this.props.questions.map((question, idx) => (
                <TableRow key={idx} value={question} >
                  <TableRowColumn>{question.order + ". " + question.text}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Tab>
        <Tab label="Students" >
        </Tab>
      </Tabs>
    );
  }
}

export default ResultsSidebar;
