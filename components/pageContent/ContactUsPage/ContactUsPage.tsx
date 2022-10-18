import CustomLink from 'components/Link/Link';
import Image from 'next/image';
import {FaViber, FaTelegram, FaPhoneVolume} from 'react-icons/fa';
import {
  StyledContainer,
  StyledTitle,
  StyledHeroBlock,
  StyledContactsRow,
  StyledContactItem,
  StyledInfoBlock,
  StyledInfoRow,
  StyledInfoRowItem,
  StyledAddress,
  StyledOfficeImage,
} from './ContactUsPage.styled';

const ContactUsPage = () => {
  return (
    <div className="wrapper">
      <StyledContainer>
        <StyledHeroBlock>
          <StyledTitle>Зв`яжіться з нами</StyledTitle>
          <StyledContactsRow>
            <StyledContactItem>
              <p>Через viber</p>
              <CustomLink
                href={`viber://chat?number=%2B${process.env.NEXT_PUBLIC_VIBER}`}
              >
                <FaViber color="#6246c4" size={20} />
                +38(098) 975 94 92
              </CustomLink>
            </StyledContactItem>
            <StyledContactItem>
              <p>Через telegram</p>
              <CustomLink
                href={`tg://resolve?domain=${process.env.NEXT_PUBLIC_TELEGRAM}`}
              >
                <FaTelegram color="#0ae3f7" size={20} />
                +38(098) 975 94 92
              </CustomLink>
            </StyledContactItem>
            <StyledContactItem>
              <p>За номером телефону</p>
              <CustomLink href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
                <FaPhoneVolume color="#000" size={20} />
                +38(098) 975 94 92
              </CustomLink>
            </StyledContactItem>
          </StyledContactsRow>
        </StyledHeroBlock>
        <StyledInfoBlock>
          <StyledInfoRow>
            <StyledInfoRowItem>
              <StyledOfficeImage>
                <Image
                  src={'/images/assets/office.jfif'}
                  layout="responsive"
                  width={200}
                  height={150}
                  alt={'office'}
                />
              </StyledOfficeImage>

              <StyledAddress>
                <p>м.Одеса</p>
                <p>11 ст. Люстдорф. дороги 3А</p>
                <p>+380631888021</p>
              </StyledAddress>
            </StyledInfoRowItem>
          </StyledInfoRow>
        </StyledInfoBlock>
      </StyledContainer>
    </div>
  );
};

export default ContactUsPage;
