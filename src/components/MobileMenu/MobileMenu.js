/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { QUERIES, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss, onShow }) => {
  if (!isOpen) {
    return (
      <Wrapper>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
          <VisuallyHidden>Shopping bag</VisuallyHidden>
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="search" strokeWidth={1} />
          <VisuallyHidden>Search</VisuallyHidden>
        </UnstyledButton>
        <UnstyledButton onClick={onShow}>
          <Icon id="menu" strokeWidth={1} />
          <VisuallyHidden>Open menu</VisuallyHidden>
        </UnstyledButton>
      </Wrapper>
    );
  }

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContentWrapper aria-label="Mobile menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close"></Icon>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <MobileMenuContent>
          <Spacer />
          <MobileMenuNav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </MobileMenuNav>
          <Spacer />
          <MobileMenuFooter>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </MobileMenuFooter>
        </MobileMenuContent>
      </DialogContentWrapper>
    </DialogOverlay>
  );
};

const Spacer = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: contents;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MobileMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${22/16}rem;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: ${14/16}rem;
  font-weight: 500;
  text-decoration: none;
`

const MobileMenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${14/16}rem;
`

const DialogContentWrapper = styled(DialogContent)`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: initial;
    background: white;
    height: 100%;
    width: min(300px, 80%);
    background-color: white;
    position: fixed;
    right: 0;
    top: 0;
    padding: 2rem;
  }
`;

export default MobileMenu;
