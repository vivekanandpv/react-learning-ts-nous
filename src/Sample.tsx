import * as React from 'react';
import styles from './Sample.module.css';

interface SampleProps {}

const Sample = (props: SampleProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const customStyle = {
    fontWeight: 600,
    fontSize: '1.8rem',
    color: 'blue',
    letterSpacing: '0.15rem',
  };

  return (
    <>
      <h3>Sample Component</h3>
      <input type='text' className='form-control' ref={inputRef} />
      <p style={customStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis
        veniam ullam ex asperiores ut nesciunt praesentium, repellat dignissimos
        omnis quia corrupti labore natus nam excepturi odio tempora aliquid
        iusto!
      </p>
      <hr />
      <p className={styles.myText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo
        voluptatibus laborum eligendi. Accusamus velit, illo in id repudiandae
        quod officiis. Repellat, exercitationem? Fuga quae architecto voluptate
        ab. Aspernatur, dolorem!
      </p>
    </>
  );
};

export default Sample;
