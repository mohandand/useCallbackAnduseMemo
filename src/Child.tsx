import React, { memo, useMemo } from 'react';

function Child({ count }) {
  console.log('Child Rendered');

  const childNum = useMemo(() => {
    let num = 0;
    for (let i = 0; i < 90000000; i++) {
      num++;
    }
    for (let i = 0; i < 90000000; i++) {
      num++;
    }
    for (let i = 0; i < 90000000; i++) {
      num++;
    }
    for (let i = 0; i < 90000000; i++) {
      num++;
    }
    return num;
  }, []);
  return (
    <div
      style={{
        border: `1px solid black`,
        marginTop: `40px`,
        padding: `10px`,
        width: `200px`,
        height: `100px`,
      }}
    >
      I am child <br />
      {count} <br />
      {childNum}
    </div>
  );
}

export default memo(Child);
