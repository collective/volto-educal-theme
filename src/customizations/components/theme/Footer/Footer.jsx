import React from 'react';
import { Button, Input, Image, List } from 'semantic-ui-react';
import LogoImage from '../../../../../theme/themes/educal/assets/images/logo/logo-2.png';

// Let's avoid responsiveness for now
// xxl ration 3:2:2:4
const Footer = () => (
  <footer>
    <div className="footerRoot">
      <div className="footerMain">
        <div style={{ maxWidth: '27.28%' }}>
          <Image src={LogoImage} />
          <div className="footerCompanyDescription">
            Great lesson ideas and lesson plans for ESL teachers! Educators can
            customize lesson plans to best.
          </div>
          <div style={{ marginTop: '15px' }}>
            {/* semantic UI elements/buttons */}
            <Button
              color="facebook"
              icon="facebook"
              style={{ marginRight: '7.5px' }}
            />
            <Button
              color="twitter"
              icon="twitter"
              style={{ marginRight: '7.5px' }}
            />
            <Button
              // No color for pinterest
              color="youtube"
              icon="pinterest p"
              style={{ marginRight: '7.5px' }}
            />
          </div>
        </div>

        <div className="footerNavLinkColumn">
          <p className="footerMainHeading">Company</p>
          <List link as="ul">
            <List.Item as="li">
              <a href="/">About</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Courses</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Events</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Instructor</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Career</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Become a Teacher</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Contact</a>
            </List.Item>
          </List>
        </div>

        <div className="footerNavLinkColumn">
          <p className="footerMainHeading">Platform</p>
          <List link as="ul">
            <List.Item as="li">
              <a href="/">Browse Library</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Library</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Partners</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">News & Blogs</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">FAQs</a>
            </List.Item>
            <List.Item as="li">
              <a href="/">Tutorials</a>
            </List.Item>
          </List>
        </div>

        <div style={{ maxWidth: '36.36%' }}>
          <p className="footerMainHeading">Subscribe</p>
          <Input
            type="email"
            action={{ icon: 'arrow right' }}
            placeholder="Your email address"
          />
          <p className="footerSmallText">
            Get the latest news and updates right at your inbox.
          </p>
        </div>
      </div>

      <div className="footerAttribution">
        © 2022 Educal, All Rights Reserved. Design By{' '}
        <span style={{ color: '#fff' }}>Theme Pure</span>
      </div>
    </div>
  </footer>
);

export default Footer;
