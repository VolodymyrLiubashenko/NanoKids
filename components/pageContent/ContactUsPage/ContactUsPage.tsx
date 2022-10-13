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
              <CustomLink href="viber://chat?number=%2B0631888021">
                <FaViber color="#6246c4" size={20} />
                +38(093) 188 80 21
              </CustomLink>
            </StyledContactItem>
            <StyledContactItem>
              <p>Через telegram</p>
              <CustomLink href="tg://resolve?domain=@yl_1990">
                <FaTelegram color="#0ae3f7" size={20} />
                +38(093) 188 80 21
              </CustomLink>
            </StyledContactItem>
            <StyledContactItem>
              <p>За номером телефону</p>
              <CustomLink href="tel:+380631888021">
                <FaPhoneVolume color="#000" size={20} />
                +38(093) 188 80 21
              </CustomLink>
            </StyledContactItem>
          </StyledContactsRow>
        </StyledHeroBlock>
        <StyledInfoBlock>
          <StyledInfoRow>
            <StyledInfoRowItem>
              <Image
                src={'/images/assets/office.jfif'}
                layout="responsive"
                width={200}
                height={150}
                alt={'office'}
              />
              <p>м.Одеса</p>
              <StyledAddress>
                <p>Одеса</p>
                <p>11 ст. Люстдорф. дороги 3А</p>
                <p>+380631888021</p>
              </StyledAddress>
            </StyledInfoRowItem>
            <StyledInfoRowItem>
              <Image
                src={'/images/assets/office.jfif'}
                layout="responsive"
                width={200}
                height={150}
                alt={'office'}
              />
              <p>м.Одеса</p>
              <StyledAddress>
                <p>Одеса</p>
                <p>Книжний провулок 19</p>
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
