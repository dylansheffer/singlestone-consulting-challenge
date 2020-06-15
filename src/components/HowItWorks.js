import React, { useState, useEffect } from 'react';
import { ContentContainer } from './ContentContainer';

const StepNumber = ({ stepNumber, ...props }) => {
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

export const HowItWorks = ({ ...props }) => {
  const [data, setData] = useState({ steps: [] });

  const transformData = (data) => {
    const transformedData = data.reduce((acc, curr) => {
      const { id, stepNumber, versionContent } = curr;
      // Sort by the date and just take the latest one
      // TODO: test if this is actually as expected
      const { title, body } = versionContent.sort((a, b) => a.effectiveDate - b.effectiveDate)[0];
      return [{id, stepNumber, title, body }, ...acc];
    }, []);

    return transformedData.sort((a, b) => a.stepNumber - b.stepNumber);
  };

  useEffect(() => {
      fetch(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
        .then(result => result.json())
        .then(data => transformData(data))
        .then(transformedData => setData({steps: transformedData}));
  }, []);


  return (
    <>
      <section {...props} className="how-it-works">
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