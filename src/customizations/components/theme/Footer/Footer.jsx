import React from 'react';
import { Button, Input, List } from 'semantic-ui-react';

// Let's avoid responsiveness for now
// xxl ration 3:2:2:4
const Footer = () => (
  <footer>
    <div
      style={{
        background: '#0e1133',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#ffffff',
        padding: '0px 20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          padding: '40px 0px 20px 0px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '27.28%' }}>
          <h2>educal</h2>
          <div style={{ color: '#a1a2ab' }}>
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

        <div style={{ maxWidth: '18.18%' }}>
          <h2>Company</h2>
          <List link>
            <List.Item as="ul">
              <a href="/">About</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Courses</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Events</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Instructor</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Career</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Become a Teacher</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Contact</a>
            </List.Item>
          </List>
        </div>
        <div style={{ maxWidth: '18.18%' }}>
          <h2>Platform</h2>
          <List link>
            <List.Item as="ul">
              <a href="/">Browse Library</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Library</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Partners</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">News & Blogs</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">FAQs</a>
            </List.Item>
            <List.Item as="ul">
              <a href="/">Tutorials</a>
            </List.Item>
          </List>
        </div>
        <div style={{ maxWidth: '36.36%' }}>
          <h2>Subscribe</h2>
          <Input
            action={{ icon: 'arrow right' }}
            placeholder="Your email address"
          />
          <div style={{ color: '#a1a2ab', marginTop: '15px' }}>
            Get the latest news and updates right at your inbox.
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '15px 0px',
          borderTop: '1px solid #1c1f3f',
          color: '#a1a2ab',
        }}
      >
        © 2022 Educal, All Rights Reserved. Design By <a href="/">Theme Pure</a>
      </div>
    </div>
  </footer>
);

export default Footer;
