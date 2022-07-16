/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { defineMessages, injectIntl } from 'react-intl';
import { Dropdown, Menu } from 'semantic-ui-react';
import cx from 'classnames';
import { BodyClass, getBaseUrl, hasApiExpander } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import { getNavigation } from '@plone/volto/actions';
import { CSSTransition } from 'react-transition-group';
import NavItems from '@plone/volto/components/theme/Navigation/NavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const messages = defineMessages({
  closeMobileMenu: {
    id: 'Close menu',
    defaultMessage: 'Close menu',
  },
  openMobileMenu: {
    id: 'Open menu',
    defaultMessage: 'Open menu',
  },
});

/**
 * Navigation container class.
 * @class Navigation
 * @extends Component
 */
class Navigation extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getNavigation: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
    lang: PropTypes.string.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Navigation
   */
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.state = {
      isMobileMenuOpen: false,
    };
  }

  componentDidMount() {
    const { settings } = config;
    if (!hasApiExpander('navigation', getBaseUrl(this.props.pathname))) {
      this.props.getNavigation(
        getBaseUrl(this.props.pathname),
        settings.navDepth,
      );
    }
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { settings } = config;
    if (
      nextProps.pathname !== this.props.pathname ||
      nextProps.token !== this.props.token
    ) {
      if (!hasApiExpander('navigation', getBaseUrl(this.props.pathname))) {
        this.props.getNavigation(
          getBaseUrl(nextProps.pathname),
          settings.navDepth,
        );
      }
    }
  }

  /**
   * Toggle mobile menu's open state
   * @method toggleMobileMenu
   * @returns {undefined}
   */
  toggleMobileMenu() {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  }

  /**
   * Close mobile menu
   * @method closeMobileMenu
   * @returns {undefined}
   */
  closeMobileMenu() {
    if (!this.state.isMobileMenuOpen) {
      return;
    }
    this.setState({ isMobileMenuOpen: false });
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <nav className="navigation" id="navigation" aria-label="navigation">
        <div className="hamburger-wrapper mobile tablet only">
          <button
            className={cx('hamburger hamburger--spin', {
              'is-active': this.state.isMobileMenuOpen,
            })}
            aria-label={
              this.state.isMobileMenuOpen
                ? this.props.intl.formatMessage(messages.closeMobileMenu, {
                    type: this.props.type,
                  })
                : this.props.intl.formatMessage(messages.openMobileMenu, {
                    type: this.props.type,
                  })
            }
            title={
              this.state.isMobileMenuOpen
                ? this.props.intl.formatMessage(messages.closeMobileMenu, {
                    type: this.props.type,
                  })
                : this.props.intl.formatMessage(messages.openMobileMenu, {
                    type: this.props.type,
                  })
            }
            type="button"
            onClick={this.toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <Menu
          stackable
          secondary
          className="computer large screen widescreen only"
        >
          {this.props.items.map((item) => (
            <div className="customNavItems" key={item.url}>
              {item.items && item.items.length ? (
                <Dropdown
                  text={item.title}
                  simple
                  icon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
                  onClick={() => {
                    this.props.history.push(`/${item.title.toLowerCase()}`);
                  }}
                >
                  <Dropdown.Menu>
                    {item.items.map((subitem) => (
                      <Dropdown.Item id={subitem.title} key={subitem.url}>
                        <Link to={subitem.url} key={subitem.url}>
                          {subitem.title}
                        </Link>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to={item.url === '' ? '/' : item.url} key={item.url}>
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </Menu>
        <CSSTransition
          in={this.state.isMobileMenuOpen}
          timeout={500}
          classNames="mobile-menu"
          unmountOnExit
        >
          <div key="mobile-menu-key" className="mobile-menu">
            <BodyClass className="has-mobile-menu-open" />
            <div className="mobile-menu-nav">
              <Menu stackable pointing secondary onClick={this.closeMobileMenu}>
                <NavItems items={this.props.items} lang={this.props.lang} />
              </Menu>
            </div>
          </div>
        </CSSTransition>
      </nav>
    );
  }
}

export default compose(
  injectIntl,
  withRouter,
  connect(
    (state) => ({
      token: state.userSession.token,
      items: state.navigation.items,
      lang: state.intl.locale,
    }),
    { getNavigation },
  ),
)(Navigation);
