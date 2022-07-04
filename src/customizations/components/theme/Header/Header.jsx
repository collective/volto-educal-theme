/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Button, Container, Dropdown, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HamburgerIcon from '../../../../../theme/themes/educal/assets/icons/Hamburger.svg';
// import HamburgerIcon from '../../../../../theme/themes/educal/assets/icons/Logo.svg';
// import HamburgerIcon from '@plone/volto/icons/dots.svg';

import {
  // Anontools,
  // LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

const CategoryIcon = () => (
  <svg viewBox="0 0 276.2 276.2">
    <g>
      <g>
        <path
          class="cat-dot"
          d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z"
        />
        <path
          class="cat-dot"
          d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z"
        />
        <path
          class="cat-dot"
          d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z"
        />
        <path
          class="cat-dot"
          d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z"
        />
        <path
          class="cat-dot"
          d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z"
        />
        <path
          class="cat-dot"
          d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z"
        />
        <path
          class="cat-dot"
          d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    "
        />
        <path
          class="cat-dot"
          d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z"
        />
        <path
          class="cat-dot"
          d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z"
        />
      </g>
    </g>
  </svg>
);

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div
            id="headerRoot"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <div
              id="headerLeft"
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: '0 0 auto',
                width: '25%',
              }}
            >
              <div id="headerSiteLogo" className="logo">
                <Logo />
              </div>
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  backgroundColor: '#c9ccd4',
                  marginLeft: '30px',
                }}
              ></div>

              <div
                id="headerCategoryContainer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '30px',
                }}
              >
                <div className="categoryIcon">
                  <CategoryIcon />
                </div>
                <div class="categoryPlaceholder">
                  <Dropdown text="Category" simple>
                    <Dropdown.Menu>
                      <Dropdown.Item text="English Learning" />
                      <Dropdown.Item text="Web Development" />
                      <Dropdown.Item text="Logo Design" />
                      <Dropdown.Item text="Motion Graphics" />
                      <Dropdown.Item text="Video Editing" />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div
              id="headerRight"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: '0 0 auto',
                width: '75%',
              }}
            >
              <div id="headerMenu">
                <Navigation pathname={this.props.pathname} />
              </div>
              <div
                id="headerSearch"
                className="tools-search-wrapper"
                style={{ marginLeft: '50px' }}
              >
                <SearchWidget />
              </div>
              <div id="headerButton" style={{ marginLeft: '20px' }}>
                <Button primary>Try for free</Button>
              </div>
            </div>
          </div>
          {/* <Anontools /> */}
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
