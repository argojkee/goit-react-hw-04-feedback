import { useState } from 'react';
import Statistics from './FeedbackList/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = e => {
    if (e.target.classList.contains('good')) {
      setGood(prevGood => prevGood + 1);
    } else if (e.target.classList.contains('neutral')) {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (e.target.classList.contains('bad')) {
      setBad(prevBad => prevBad + 1);
    }

    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     [e.target.textContent.toLowerCase()]:
    //       prevState[e.target.textContent.toLowerCase()] + 1,
    //   };
    // });
  };

  return (
    <div
      style={{
        paddingTop: '100px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave your feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

// import { Component } from 'react';
// import Statistics from './FeedbackList/Statistics';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Notification from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   onLeaveFeedback = e => {
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         [e.target.textContent.toLowerCase()]:
//           prevState[e.target.textContent.toLowerCase()] + 1,
//       };
//     });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           paddingTop: '100px',
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={Object.keys(this.state)}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
