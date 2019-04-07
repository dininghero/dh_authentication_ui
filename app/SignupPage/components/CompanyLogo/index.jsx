import React, { memo } from 'react';

import Center from '../../../StyledComponents/Center';

import dhLogo from '../../../images/dh_logo.png';

const CompanyLogo = memo(() => (
  <Center>
    <img src={dhLogo} alt="" width="200" />
  </Center>
));

export default CompanyLogo;
