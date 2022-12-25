import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
        </SectionTitle>
        <SectionText>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
    </Section>

);

export default Hero;