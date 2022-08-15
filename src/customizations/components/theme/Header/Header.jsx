/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Button, Container, Dropdown, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVocabulary } from '@plone/volto/actions';
import { Icon } from '@plone/volto/components';
import HamburgerIcon from '@plone-collective/volto-educal-theme/../theme/themes/educal/assets/icons/Hamburger.svg';

import {
  // Anontools,
  // LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

const vocabulary = 'plone.app.vocabularies.Keywords';

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
    getVocabulary: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    token: PropTypes.string,
    vocabularyItems: PropTypes.array.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  componentDidMount() {
    this.props.getVocabulary({ vocabNameOrURL: vocabulary });
  }

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
              {this.props.vocabularyItems.length > 0 ? (
                <div className="headerCategoryContainer">
                  <div className="categoryIcon">
                    <Icon name={HamburgerIcon} size="16px" />
                  </div>
                  <div className="categoryPlaceholder">
                    <Dropdown text="Category" simple>
                      <Dropdown.Menu>
                        {this.props.vocabularyItems.map((item) => {
                          const label = item.label ? item.label : item.value;
                          return (
                            <Dropdown.Item
                              key={label}
                              text={label}
                              as="a"
                              href={`/search?Subject=${label}`}
                            />
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="headerRight">
              <div id="headerMenu">
                <Navigation pathname={this.props.pathname} />
              </div>
              <div className="tools-search-wrapper headerSearch">
                <SearchWidget />
              </div>
              <div className="headerButton">
                <Button primary as="a" href="/login">
                  Try for free
                </Button>
              </div>
            </div>
          </div>
          {/* <Anontools /> */}
        </Container>
      </Segment>
    );
  }
}

export default connect(
  (state) => ({
    token: state.userSession.token,
    vocabularyItems:
      state.vocabularies[vocabulary] && state.vocabularies[vocabulary].items
        ? state.vocabularies[vocabulary].items
        : [],
  }),
  { getVocabulary },
)(Header);
