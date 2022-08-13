import styled, { keyframes, css as styledcss } from 'styled-components';
import css from '@styled-system/css';

const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(52, 143, 80, 0.4);
    box-shadow: 0 0 0 0 rgba(52, 143, 80, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(52, 143, 80, 0);
      box-shadow: 0 0 0 10px rgba(52, 143, 80, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(52, 143, 80, 0);
      box-shadow: 0 0 0 0 rgba(52, 143, 80, 0);
  }
`;

export const SwitcherWrapper = styled.button<any>(
  css({
    width: 'auto',
    height: 'auto',
    padding: '20px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009E7F',
    // backgroundImage: 'linear-gradient(-60deg, #ef4a7a, #5761f1)',
    backgroundImage: 'linear-gradient(-60deg,#348f50, #56b4d3)',
    borderRadius: '6px 0 0 6px',
    boxShadow: '0 0 0 rgba(52, 143, 80, 0.4)',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    position: 'fixed',
    bottom: '100px',
    right: 0,
    zIndex: 99,

    ':focus': {
      outline: 0,
    },

    '@media only screen and (max-width: 580px)': {
      bottom: '38%',
      transform: 'translateY(50%)',
      padding: '15px 13px',
    },
  }),
  styledcss`
    animation: ${pulse} 2s infinite;
  `
);

export const Switcher = styled.span<any>(
  css({
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 1,
    color: '#ffffff',
    textTransform: 'uppercase',
    textOrientation: 'upright',
    writingMode: 'vertical-lr',
    fontFeatureSettings: '"vkrn", "vpal"',
  })
);

export const Header = styled.div<any>(
  css({
    width: '100%',
    height: 100,
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    position: 'relative',
    zIndex: 1,

    '@media only screen and (max-width: 767px)': {
      height: 80,
      padding: '0 20px',
    },
  })
);

export const PurchaseBtn = styled.a<any>(
  css({
    fontFamily: 'Lato, sans-serif',
    width: 'auto',
    height: '48px',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009E7F',
    backgroundImage: 'linear-gradient(-60deg,#348f50, #56b4d3)',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.12)',
    borderRadius: '24px',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: 1,
    color: '#ffffff',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    transition: 'all 0.3s',

    '@media only screen and (max-width: 767px)': {
      height: '44px',
    },

    ':hover': {
      backgroundColor: '#019376',
    },

    ':focus': {
      outline: 0,
      boxShadow: 'none',
    },
  }),
  styledcss`
    animation: ${pulse} 2s infinite;
  `
);

export const ModalTitle = styled.h3<any>(
  css({
    fontFamily: 'Lato, sans-serif',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: 1.5,
    color: '#0D1136',
    margin: 0,
    transform: 'translateX(-50%)',

    '@media only screen and (max-width: 767px)': {
      display: 'none',
    },
  })
);

export const CloseButton = styled.button<any>(
  css({
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    color: '#0D1136',
    border: 0,
    outline: 0,
    boxShadow: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s',

    ':hover': {
      backgroundColor: '#f1f1f1',
    },

    ':focus': {
      outline: 0,
      boxShadow: 'none',
    },
  })
);

export const Body = styled.div<any>(
  css({
    width: '100%',
    height: 'calc(100% - 100px)',
    backgroundColor: '#F7F7F7',

    '@media only screen and (max-width: 767px)': {
      height: 'calc(100% - 80px)',
    },
  })
);

export const Content = styled.div<any>(
  css({
    width: '100%',
    padding: '50px 30px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: 50,

    '@media only screen and (min-width: 1600px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridColumnGap: 50,
    },

    '@media only screen and (max-width: 767px)': {
      padding: '40px 15px',
      gridTemplateColumns: '1fr',
    },
  })
);

export const DemoCard = styled.div<any>(
  css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  })
);

export const VisitBtn = styled.button<any>(
  css({
    width: 'auto',
    height: '48px',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009E7F',
    backgroundImage: 'linear-gradient(-60deg,#348f50, #56b4d3)',
    borderRadius: '6px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: 1,
    color: '#ffffff',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.12)',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '50%',
    opacity: 0,
    transform: 'translate3d(-50%, -30px, 0)',
    transition: 'all 0.3s',

    ':focus': {
      outline: 0,
      boxShadow: 'none',
    },
  })
);

export const DemoImageWrapper = styled.a<any>(
  css({
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':before': {
      content: '""',
      display: 'block',
      width: 'calc(100% - 30px)',
      height: 'calc(100% - 30px)',
      position: 'absolute',
      top: '25px',
      left: '15px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      filter: 'blur(15px)',
      WebkitTransform: 'translateZ(0)',
      WebkitBackfaceVisibility: 'hidden',
      WebkitPerspective: 1000,
    },
  })
);

export const DemoImage = styled.div<any>(
  css({
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
    },

    ':after': {
      content: '""',
      transition: 'all 0.1s',
    },

    ':hover': {
      '.demo-btn': {
        opacity: 1,
        transform: 'translate3d(-50%, 0, 0)',
      },

      ':after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(33, 33, 33, 0.09)',
        zIndex: 0,
        pointerEvents: 'none',
        borderRadius: '10px',
      },
    },
  })
);

export const DemoTitle = styled.span<any>(
  css({
    fontFamily: 'Lato, sans-serif',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: 1.5,
    color: '#0D1136',
    margin: '30px 0 0',
    textAlign: 'center',
    width: '100%',

    '@media only screen and (max-width: 767px)': {
      fontSize: '18px',
    },
  })
);
