import * as React from 'react';

interface SampleProps {
  message: string;
  year: number;
}

const Sample = (props: SampleProps) => {
  return (
    <>
      <h3>Sample Component</h3>
      <p>
        Message: {props.message}, Year: {props.year}
      </p>
    </>
  );
};

export default Sample;
