import React from 'react';
import ReactDOM from 'react-dom';
import IndividualGraph from './Presenter-IndividualGraph.jsx';

class Graphs extends React.Component{

  render () {
    var choices = this.props.questions.map((question, i) => {
    	console.log(question.choices);
      return <IndividualGraph key= {i} qType={question.qType} question={question.question} qChoices={question.choices} />
    });

    return (
      <div id="">
      	{choices}
      </div>
    );
  }
}

export default Graphs;
