import React, { useState, useEffect } from 'react';

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
        <h2>How It Works</h2>
        <ol>
          {data.steps.map(d =>
            <li key={d.id}>
              <div>
                {/* Hidden from a11y tree because it is redundant to screen reader users */}
                <div aria-hidden="true">{d.stepNumber}</div>
                <div>{d.title}</div>
                <div>{d.body}</div>
              </div>
            </li>
          )}
        </ol>
      </section>
    </>
  );
};