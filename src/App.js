import React from "react";
import {
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  KebabToggle,
  Page,
  PageHeader,
  PageSection,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  Nav,
  NavList,
  NavItem,
} from "@patternfly/react-core";

// Load custom styles after react-core component imports
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
    };
    this.onDropdownToggle = (isDropdownOpen) => {
      this.setState({
        isDropdownOpen,
      });
    };

    this.onDropdownSelect = (event) => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen,
      });
    };

    this.onKebabDropdownToggle = (isKebabDropdownOpen) => {
      this.setState({
        isKebabDropdownOpen,
      });
    };

    this.onKebabDropdownSelect = (event) => {
      this.setState({
        isKebabDropdownOpen: !this.state.isKebabDropdownOpen,
      });
    };

    this.onNavSelect = (result) => {
      this.setState({
        activeItem: result.itemId,
      });
    };
  }

  render() {
    const { isKebabDropdownOpen } = this.state;

    const topNav = (
      <Nav aria-label="Nav" variant="horizontal">
        <NavList>
          <NavItem>Status</NavItem>
          <NavItem>Status</NavItem>
          <NavItem>Status</NavItem>
          <NavItem>Status</NavItem>
        </NavList>
      </Nav>
    );

    const kebabDropdownItems = [
      <DropdownItem>Settings</DropdownItem>,
      <DropdownItem>Help</DropdownItem>,
    ];
    const pageHeaderTools = (
      <PageHeaderTools>
        {/* The utility navbar is only visible on desktop sizes
            and replaced by a kebab dropdown for smaller sizes */}
        <PageHeaderToolsGroup visibility={{ default: "hidden", lg: "visible" }}>
          <PageHeaderToolsItem>
            <Button variant={ButtonVariant.plain}>Components</Button>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button variant={ButtonVariant.plain}>API</Button>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <a
              href="https://zuul-ci.org/docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant={ButtonVariant.plain}>Documentation</Button>
            </a>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button variant={ButtonVariant.plain}>
              <strong>Tenant</strong>
            </Button>
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <PageHeaderToolsGroup>
          {/* this kebab dropdown replaces the icon buttons and is hidden for
              desktop sizes */}
          <PageHeaderToolsItem visibility={{ lg: "hidden" }}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.handleKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.handleKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
      </PageHeaderTools>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={""} alt="Patternfly Logo" className="zuul-brand" />}
        headerTools={pageHeaderTools}
        topNav={topNav}
      />
    );

    return (
      <React.Fragment>
        <Page header={Header}>
          <PageSection>foo</PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default App;
