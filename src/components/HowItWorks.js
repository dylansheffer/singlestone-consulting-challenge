import React, { useState, useEffect } from 'react';
import { ContentContainer } from './ContentContainer';

const StepNumber = ({ stepNumber, ...props }) => {
  // Prepends a 0 to the number if it below 10
  const formatStepNumber = (stepNumber) => stepNumber < 10 ? `0${stepNumber}` : `${stepNumber}`;

  return (
    <div {...props} className="step-number">
      <div className="step-number__number">
        {formatStepNumber(stepNumber)}
      </div>
      <hr className="step-number__divider" />
    </div>
  );
};

const Step = ({step, ...props}) => (
  <div {...props} className="step">
    {/* Hidden from a11y tree because it is redundant to screen reader users */}
    <StepNumber  aria-hidden="true" stepNumber={step.stepNumber} />
    <h3 className="step__title">{step.title}</h3>
    <p className="step__content">{step.body}</p>
  </div>
);

export const transformData = (data) => {
  // Sift out the unnecessary data from the original array
  const transformedData = data.reduce((acc, curr) => {
    const { id, stepNumber, versionContent } = curr;
    // Sort by the date and take the latest one
    const { title, body } = versionContent.sort((a, b) => {
      const aDate = new Date(a.effectiveDate);
      const bDate = new Date(b.effectiveDate);
      return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
    })[0];

    return [{id, stepNumber, title, body }, ...acc];
  }, []);

  // Finally, sort by the step number
  return transformedData.sort((a, b) => a.stepNumber - b.stepNumber);
};

export const HowItWorks = ({ className, ...props }) => {
  const [data, setData] = useState({ steps: [] });

  // Fetch and transform the step data on component mount
  useEffect(() => {
      fetch(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
        .then(result => result.json())
        .then(data => transformData(data))
        .then(transformedData => setData({steps: transformedData}));
  }, []);


  return (
    <>
      <section {...props} className={`how-it-works ${className ? className : ''}`}>
        <ContentContainer>
          <h2 className="how-it-works__heading">How It Works</h2>
          <ol className="how-it-works__steps semantic-list">
            {data.steps.map(step =>
              <li key={step.id}>
                <Step step={step} />
              </li>
            )}
          </ol>
        </ContentContainer>
      </section>
    </>
  );
};