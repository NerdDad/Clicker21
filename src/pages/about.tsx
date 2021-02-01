import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
// import { Config } from '../utils/Config';

const About = () => (
  <Main meta={<Meta title="About" description="The about page" />}>
    <p>So far, nothing.</p>
    <div className="py-8 text-sm">
      Template/starter from
      {' '}
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      {/*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */}
    </div>
  </Main>
);

export default About;
