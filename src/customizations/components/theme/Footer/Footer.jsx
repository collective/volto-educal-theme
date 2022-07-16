import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Image, List } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import LogoImage from '@plone-collective/volto-educal-theme/../theme/themes/educal/assets/images/logo/logo-2.png';

// Let's avoid responsiveness for now
// xxl ration 3:2:2:4
const Footer = () => (
  <footer className="footerSuperRoot">
    <div className="footerRoot">
      <div className="footerMain">
        <div className="footerMainLeftSide">
          <Image src={LogoImage} />
          <div className="footerCompanyDescription">
            Great lesson ideas and lesson plans for ESL teachers! Educators can
            customize lesson plans to best.
          </div>
          <div className="footerSocialButtonDiv">
            <Link
              className="footerSocialButton"
              to={{
                pathname: '//www.facebook.com/',
              }}
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              className="footerSocialButton footerTwitterButton"
              to={{
                pathname: '//www.twitter.com/',
              }}
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              className="footerSocialButton footerPinterestButton"
              to={{
                pathname: '//www.pinterest.com/',
              }}
              target="_blank"
            >
              <FontAwesomeIcon icon={faPinterestP} />
            </Link>
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

        <div className="footerMainRightSide">
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
        <span className="footerAttribution">Theme Pure</span>
      </div>
    </div>
  </footer>
);

export default Footer;
