import React from 'react';

import Center from '../../../StyledComponents/Center';

import dhLogo from '../../../images/dh_logo.png';

const CompanyLogo = () => (
  <Center>
    <img src={dhLogo} alt="" width="200" />
  </Center>
);

// import React, { memo } from 'react';

// const CompanyLogo = memo(() => (
//   <Center>
//     <img src={dhLogo} alt="" width="200" />
//   </Center>
// ));

export default CompanyLogo;
