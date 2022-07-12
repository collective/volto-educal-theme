/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Button, Container, Dropdown, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from '@plone/volto/components';
import HamburgerIcon from '@plone-collective/volto-educal-theme/../theme/themes/educal/assets/icons/Hamburger.svg';

import {
  Anontools,
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
          <div className="headerRoot">
            <div className="headerLeft">
              <div id="headerSiteLogo" className="logo">
                <Logo />
              </div>
              <div className="headerLeftSeparator"></div>

              <div className="headerCategoryContainer">
                <div className="categoryIcon">
                  <Icon name={HamburgerIcon} size="16px" />
                </div>
                <div className="categoryPlaceholder">
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
            <div className="headerRight">
              <div id="headerMenu">
                <Navigation pathname={this.props.pathname} />
              </div>
              <div className="tools-search-wrapper headerSearch">
                <SearchWidget />
              </div>
              <div className="headerButton">
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
