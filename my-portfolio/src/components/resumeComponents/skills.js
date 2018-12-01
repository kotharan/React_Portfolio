import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        {/* Mostly Back-End Skills*/}
        <Cell col={4}>
          <div style={{ display: "flex", marginLeft: '10%' }}>
            {this.props.BEskill}
            <div
              class="progress"
              style={{ width: "70%", marginLeft: "auto", marginBottom: "2%", borderRadius: '1rem' }}>
              <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={this.props.BEskillvalue} aria-valuemin="0" aria-valuemax="100" style={{ width: this.props.BEskillvalue }}
              />
            </div>
          </div>
        </Cell>

        {/* Mostly Front-End Skills*/}
        <Cell col={4} style={{ marginLeft: 'auto' }}>
          <div style={{ display: "flex", marginLeft: '10%' }}>
            {this.props.FEskill}
            <div
              class="progress"
              style={{ width: "70%", marginLeft: "auto", marginBottom: "2%", borderRadius: '1rem' }}>
              <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={this.props.FEskillvalue} aria-valuemin="0" aria-valuemax="100" style={{ width: this.props.FEskillvalue }}
              />
            </div>
          </div>
        </Cell>

        {/* Database & Other Skills*/}
        <Cell col={4} style={{ marginLeft: 'auto' }}>
          <div style={{ display: "flex", marginLeft: '10%' }}>
            {this.props.DBskill}
            <div
              class="progress"
              style={{ width: "70%", marginLeft: "auto", marginBottom: "2%", borderRadius: '1rem' }}>
              <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={this.props.DBskillvalue} aria-valuemin="0" aria-valuemax="100" style={{ width: this.props.DBskillvalue }}
              />
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
