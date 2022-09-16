import {StyledPageContainer} from './PageContainer.styled';

interface PageContainerInterface {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerInterface> = ({children}) => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;
