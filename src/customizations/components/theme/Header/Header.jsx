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
                <div>
                  <Icon name={HamburgerIcon} />
                </div>
                <div id="categoryPlaceholder">
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
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
