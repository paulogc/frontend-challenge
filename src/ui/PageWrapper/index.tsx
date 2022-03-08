import React from "react";
import { Header } from "ui/Header";
import { PageWrapperContainer, PageArticle } from "./styles";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => (
  <PageWrapperContainer>
    <Header />
    <PageArticle>{children}</PageArticle>
  </PageWrapperContainer>
);

export default PageWrapper;
